import { apiCatalog, jsonResp } from "@/lib/agent"

export const dynamic = "force-static"

export function GET() {
  return jsonResp(
    apiCatalog(),
    { headers: { "cache-control": "public, max-age=3600" } },
    "application/linkset+json; charset=utf-8",
  )
}
