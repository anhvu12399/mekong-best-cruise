import { NextRequest } from "next/server"
import { handleMcpRequest } from "@/lib/agent"
import { SITE_URL } from "@/lib/mekong-catalog"

export const dynamic = "force-dynamic"

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "*",
    },
  })
}

export function GET() {
  return new Response(`Use POST (JSON-RPC 2.0 Streamable HTTP) — docs at ${SITE_URL}/ai-access`, {
    status: 405,
    headers: {
      allow: "POST, OPTIONS",
      "access-control-allow-origin": "*",
    },
  })
}

export async function POST(request: NextRequest) {
  return handleMcpRequest(request)
}
