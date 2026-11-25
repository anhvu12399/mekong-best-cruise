import { NextRequest, NextResponse } from "next/server"

const HOME_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</llms-full.txt>; rel="alternate"; type="text/markdown"',
  '</.well-known/agent-skills/index.json>; rel="service-doc"; type="application/json"',
].join(", ")

const SKIP_MD =
  /^\/(api|_next|\.well-known|mcp|a2a|ask|openapi\.json|robots\.txt|sitemap\.xml|llms\.txt|llms-full\.txt|auth\.md|site\.webmanifest|favicon\.ico|icon|apple-icon|logo|images)/i

const STATIC_EXT = /\.[a-z0-9]{2,6}$/i

const AI_BOT_RE =
  /(OAI-SearchBot|ChatGPT-User|GPTBot|PerplexityBot|Perplexity-User|ClaudeBot|Claude-SearchBot|Claude-User|Google-Extended|Applebot-Extended|DuckAssistBot)/i

function wantsMarkdown(request: NextRequest): boolean {
  const accept = request.headers.get("accept") || ""
  return /(^|,)\s*text\/markdown/i.test(accept)
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const method = request.method
  const ua = request.headers.get("user-agent") || ""
  const aiBotMatch = ua.match(AI_BOT_RE)
  const acceptMd = wantsMarkdown(request)

  if (aiBotMatch || acceptMd) {
    console.info(
      JSON.stringify({
        event: "ai_access",
        bot: aiBotMatch?.[1] || (acceptMd ? "markdown_client" : "other"),
        path: pathname,
        acceptMd,
      }),
    )
  }

  // Serve Markdown negotiation (both 200 HTML pages and HTTP 404 pages)
  const isInternalMdFetch = request.headers.get("x-mrc-md-render") === "1"
  if (
    !isInternalMdFetch &&
    (method === "GET" || method === "HEAD") &&
    acceptMd &&
    !SKIP_MD.test(pathname) &&
    !STATIC_EXT.test(pathname)
  ) {
    const rewriteUrl = new URL("/api/md", request.url)
    rewriteUrl.searchParams.set("path", `${pathname}${search}`)
    return NextResponse.rewrite(rewriteUrl)
  }

  const response = NextResponse.next()

  // Preserve content negotiation signaling for caches and agents
  if (!SKIP_MD.test(pathname) && !STATIC_EXT.test(pathname)) {
    const existingVary = response.headers.get("vary")
    if (!existingVary) {
      response.headers.set("vary", "Accept")
    } else if (!/\baccept\b/i.test(existingVary)) {
      response.headers.set("vary", `${existingVary}, Accept`)
    }
  }

  // RFC 8288 discovery Link headers on homepage
  if (pathname === "/") {
    const existingLink = response.headers.get("link")
    response.headers.set("link", [existingLink, HOME_LINK_HEADER].filter(Boolean).join(", "))
  }

  response.headers.set("x-content-type-options", "nosniff")
  response.headers.set("referrer-policy", "strict-origin-when-cross-origin")
  response.headers.set("x-frame-options", "SAMEORIGIN")

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon\\.ico|icon.*\\.png|apple-icon\\.png|logo\\.).*)",
  ],
}
