import { NextRequest } from "next/server"
import {
  VERIFIED_SHIP_MAP,
  estimateCruiseBudget,
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
  const route = normalizeRouteParam(routeRaw || "lower-mekong")
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
        `Verified cruise durations are 3, 4, or 7 nights; received '${nightsRaw}'.`,
        "Pass ?nights=3, ?nights=4, or ?nights=7.",
      )
    }
    nights = n as 3 | 4 | 7
  }

  const guestsRaw = sp.get("guests") ?? sp.get("travelers")
  let guests = 2
  if (guestsRaw !== null && guestsRaw !== "") {
    const g = Number(guestsRaw)
    if (!Number.isInteger(g) || g < 1 || g > 20) {
      return problemJson(
        400,
        "invalid_guests",
        "Invalid parameter: guests",
        `guests must be an integer between 1 and 20; received '${guestsRaw}'.`,
        "Use ?guests=2 (for private charters above 20 guests, inquire via /plan-your-journey).",
      )
    }
    guests = g
  }

  const shipRaw = (sp.get("ship") ?? sp.get("vessel") ?? "").trim().toLowerCase()
  if (shipRaw && !VERIFIED_SHIP_MAP[shipRaw]) {
    return problemJson(
      400,
      "unknown_ship",
      "Invalid parameter: ship",
      `Ship slug '${shipRaw}' is not in the verified 20-vessel tariff catalog.`,
      "Call GET /api/ships to see all 20 verified ship slugs (e.g. aqua-mekong, the-jahan, victoria-mekong, anouvong).",
    )
  }

  const style = sp.get("style")?.trim() || undefined
  const month = sp.get("month")?.trim() || undefined

  const estimate = estimateCruiseBudget({
    route,
    nights,
    guests,
    style,
    shipSlug: shipRaw || undefined,
    month,
    source: "api-estimate",
  })

  return Response.json(estimate, {
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=900",
    },
  })
}
