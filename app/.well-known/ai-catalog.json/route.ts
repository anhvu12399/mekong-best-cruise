import { aiCatalog, jsonResp } from "@/lib/agent"

export const dynamic = "force-static"

export function GET() {
  return jsonResp(aiCatalog(), { headers: { "cache-control": "public, max-age=3600" } })
}
