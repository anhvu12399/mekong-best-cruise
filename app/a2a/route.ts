import { NextRequest } from "next/server"
import { handleA2aRequest } from "@/lib/agent"
import { PUBLIC_API_HEADERS, SITE_URL } from "@/lib/mekong-catalog"

export const dynamic = "force-dynamic"

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...PUBLIC_API_HEADERS,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "Content-Type, Accept, X-API-Version",
    },
  })
}

export function GET() {
  return new Response(`Use POST (JSON-RPC 2.0 A2A message/send) — docs at ${SITE_URL}/docs`, {
    status: 405,
    headers: {
      ...PUBLIC_API_HEADERS,
      allow: "POST, OPTIONS",
    },
  })
}

export async function POST(request: NextRequest) {
  return handleA2aRequest(request)
}
