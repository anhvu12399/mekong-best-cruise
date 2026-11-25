import { NextRequest } from "next/server"
import { htmlToMarkdown, markdown404 } from "@/lib/agent"

export const dynamic = "force-dynamic"

async function renderMarkdown(request: NextRequest, headOnly: boolean): Promise<Response> {
  const rawPath = request.nextUrl.searchParams.get("path") || "/"
  // Strict same-origin path sanitization to prevent SSRF
  const safePath = rawPath.startsWith("/") && !rawPath.startsWith("//") && !rawPath.includes("://") ? rawPath : "/"
  const cleanPathname = safePath.split("?")[0] || "/"

  const targetUrl = new URL(safePath, request.nextUrl.origin)

  try {
    const upstream = await fetch(targetUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        accept: "text/html,application/xhtml+xml",
        "x-mrc-md-render": "1",
        "user-agent": request.headers.get("user-agent") || "MekongMarkdownRenderer/1.0",
      },
    })

    if (upstream.status === 404) {
      return new Response(headOnly ? null : markdown404(cleanPathname), {
        status: 404,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          vary: "Accept",
          "cache-control": "public, max-age=300",
          "access-control-allow-origin": "*",
        },
      })
    }

    const ct = upstream.headers.get("content-type") || ""
    if (!ct.includes("text/html")) {
      return new Response(headOnly ? null : await upstream.text(), {
        status: upstream.status,
        headers: {
          "content-type": ct || "text/plain; charset=utf-8",
          vary: "Accept",
        },
      })
    }

    const html = await upstream.text()
    // Double-check Next.js not-found marker in HTML in case status was wrapped
    const isNotFoundMarker =
      upstream.status === 404 || /name="robots"\s+content="noindex"[^>]*>[\s\S]{0,400}404/i.test(html)
    if (isNotFoundMarker) {
      return new Response(headOnly ? null : markdown404(cleanPathname), {
        status: 404,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          vary: "Accept",
          "cache-control": "public, max-age=300",
          "access-control-allow-origin": "*",
        },
      })
    }

    const md = htmlToMarkdown(html, cleanPathname)
    return new Response(headOnly ? null : md, {
      status: upstream.status,
      headers: {
        "content-type": "text/markdown; charset=utf-8",
        vary: "Accept",
        "cache-control": "private, no-store",
        "access-control-allow-origin": "*",
      },
    })
  } catch {
    return new Response(headOnly ? null : markdown404(cleanPathname), {
      status: 404,
      headers: {
        "content-type": "text/markdown; charset=utf-8",
        vary: "Accept",
        "cache-control": "public, max-age=60",
        "access-control-allow-origin": "*",
      },
    })
  }
}

export async function GET(request: NextRequest) {
  return renderMarkdown(request, false)
}

export async function HEAD(request: NextRequest) {
  return renderMarkdown(request, true)
}
