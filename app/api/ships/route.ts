import { NextRequest } from "next/server"
import {
  BRAND_NAME,
  SITE_URL,
  filterShips,
  normalizeRouteParam,
  problemJson,
} from "@/lib/mekong-catalog"

export const dynamic = "force-dynamic"

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, OPTIONS",
      "access-control-allow-headers": "*",
    },
  })
}

export function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams

  const routeRaw = sp.get("route") ?? sp.get("corridor")
  const route = normalizeRouteParam(routeRaw)
  if (!route) {
    return problemJson(
      400,
      "invalid_route",
      "Invalid parameter: route",
      `Unsupported route '${routeRaw}'.`,
      "Use route=lower-mekong, upper-mekong, vietnam-cambodia, laos, or all.",
    )
  }

  const nightsRaw = sp.get("nights")
  let nights: 3 | 4 | 7 = 7
  if (nightsRaw !== null && nightsRaw !== "") {
    const n = Number(nightsRaw)
    if (!Number.isInteger(n) || ![3, 4, 7].includes(n)) {
      return problemJson(
        400,
        "invalid_nights",
        "Invalid parameter: nights",
        `Verified ship tariffs are published for 3, 4, or 7 nights; received '${nightsRaw}'.`,
        "Use ?nights=3, ?nights=4, or ?nights=7.",
      )
    }
    nights = n as 3 | 4 | 7
  }

  const maxPriceRaw = sp.get("max_price") ?? sp.get("maxPrice")
  let maxPrice: number | undefined
  if (maxPriceRaw !== null && maxPriceRaw !== "") {
    const p = Number(maxPriceRaw)
    if (!Number.isFinite(p) || p < 500 || p > 100000) {
      return problemJson(
        400,
        "invalid_max_price",
        "Invalid parameter: max_price",
        `max_price must be a number between 500 and 100000 USD; received '${maxPriceRaw}'.`,
        "Use a valid USD figure such as ?max_price=3500.",
      )
    }
    maxPrice = Math.round(p)
  }

  const elevatorRaw = sp.get("elevator")
  let elevator: boolean | undefined
  if (elevatorRaw !== null && elevatorRaw !== "") {
    if (elevatorRaw === "true" || elevatorRaw === "1") elevator = true
    else if (elevatorRaw === "false" || elevatorRaw === "0") elevator = false
    else {
      return problemJson(
        400,
        "invalid_elevator",
        "Invalid parameter: elevator",
        `elevator must be 'true' or 'false'; received '${elevatorRaw}'.`,
        "Use ?elevator=true to filter ships with a passenger elevator.",
      )
    }
  }

  const limitRaw = sp.get("limit")
  let limit = 20
  if (limitRaw !== null && limitRaw !== "") {
    const l = Number(limitRaw)
    if (!Number.isInteger(l) || l < 1 || l > 25) {
      return problemJson(
        400,
        "invalid_limit",
        "Invalid parameter: limit",
        `limit must be an integer between 1 and 25; received '${limitRaw}'.`,
        "Use ?limit=10.",
      )
    }
    limit = l
  }

  const style = sp.get("style") || undefined
  const query = sp.get("q") || sp.get("query") || undefined

  const ships = filterShips({
    route,
    nights,
    maxPrice,
    style,
    elevator,
    query,
    limit,
    source: "api",
  })

  return Response.json(
    {
      provider: BRAND_NAME,
      currency: "USD",
      priceBasis: "Per person twin-share starting cabin tariffs; international flights excluded.",
      lastVerified: "November 2026",
      nights,
      filters: {
        route,
        nights,
        maxPrice: maxPrice ?? null,
        style: style ?? null,
        elevator: elevator ?? null,
        q: query ?? null,
      },
      count: ships.length,
      ships,
      costComparisonUrl: `${SITE_URL}/mekong-cruise-cost-comparison`,
      documentationUrl: `${SITE_URL}/ai-access`,
    },
    {
      headers: {
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=900",
      },
    },
  )
}
