import { jsonResp, mcpServerCard } from "@/lib/agent"

export const dynamic = "force-static"

export function GET() {
  return jsonResp(mcpServerCard(), { headers: { "cache-control": "public, max-age=3600" } })
}
