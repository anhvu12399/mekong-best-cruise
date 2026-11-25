import { NextRequest } from "next/server"
import {
  BRAND_NAME,
  PUBLIC_API_HEADERS,
  SITE_URL,
  VERIFIED_SHIPS,
  buildQuoteLink,
  estimateCruiseBudget,
  filterShips,
  problemJson,
  searchSiteKnowledge,
} from "@/lib/mekong-catalog"

export const dynamic = "force-dynamic"

function handleAsk(query: string, limit = 6) {
  const clean = query.trim()
  if (!clean) {
    return problemJson(
      400,
      "missing_query",
      "Missing query",
      "Provide a natural-language Mekong cruise query in 'query'.",
      'Example: POST /ask with {"query":"7-night Vietnam to Cambodia Mekong cruise with elevator for 2 guests"}',
    )
  }

  const safeLimit = Math.min(Math.max(Math.round(limit || 6), 1), 20)
  const low = clean.toLowerCase()

  const isUpper = /\b(laos|luang prabang|vientiane|golden triangle|huay xai|upper mekong|anouvong|boheme|mekong pearl|mekong sun)\b/i.test(low)
  const isLower = /\b(vietnam|cambodia|saigon|ho chi minh|siem reap|phnom penh|delta|tonle sap|angkor|lower mekong)\b/i.test(low)
  const route = isUpper && !isLower ? "upper-mekong" : isLower && !isUpper ? "lower-mekong" : "all"

  const nightsMatch = low.match(/\b(3|4|7)\s*[-–]?\s*nights?\b/i)
  const nights = (nightsMatch ? Number(nightsMatch[1]) : 7) as 3 | 4 | 7
  const guestsMatch = low.match(/(\d{1,2})\s*(?:guests?|adults?|people|persons?|travelers?|travellers?)/i)
  const guests = guestsMatch ? Number(guestsMatch[1]) : 2
  const monthMatch = low.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/i)
  const month = monthMatch?.[1]
  const maxPriceMatch = low.match(/(?:under|below|max|less than)\s*\$?\s*(\d{3,5})/i)
  const maxPrice = maxPriceMatch ? Number(maxPriceMatch[1]) : undefined
  const wantsElevator = /\b(elevator|lift|wheelchair|senior|mobility|stairs)\b/i.test(low)
  const wantsSaigonDock = /\b(central saigon|district 4|nha rong|my tho|direct saigon)\b/i.test(low)
  const wantsBudget = /\b(cost|price|budget|how much|usd|\$|estimate|tariff|rate|cheap|luxury)\b/i.test(low)
  const matchedShip = VERIFIED_SHIPS.find((s) => low.includes(s.name.toLowerCase()) || low.includes(s.slug.replace(/-/g, " ")))

  const ships = filterShips({
    route,
    nights,
    maxPrice,
    elevator: wantsElevator ? true : undefined,
    style: wantsSaigonDock ? "saigon-docking" : undefined,
    query: matchedShip ? matchedShip.name : wantsElevator || wantsSaigonDock ? undefined : clean,
    limit: safeLimit,
    source: "nlweb",
  })

  const budgetEstimate =
    wantsBudget || matchedShip
      ? estimateCruiseBudget({
          route: route === "all" ? "lower-mekong" : route,
          nights,
          guests,
          shipSlug: matchedShip?.slug,
          style: wantsElevator ? "elevator" : undefined,
          month,
          source: "nlweb",
        })
      : null

  let results: Array<Record<string, unknown>> = ships.map((s, i) => ({
    url: s.url,
    name: `${s.name} (${s.operator})`,
    site: BRAND_NAME,
    score: Math.max(50, 98 - i * 4),
    description: s.shortAnswer,
    prefilledQuoteUrl: s.prefilledQuoteUrl,
    schema_object: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: `${s.name} — ${nights}-Night Mekong River Cruise (${s.selectedRoute})`,
      url: s.url,
      description: s.shortAnswer,
      provider: {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: s.tariffsUsdPerPerson.threeNight.from,
        highPrice: s.tariffsUsdPerPerson.sevenNight.from,
        offerCount: 3,
        priceCurrency: "USD",
        url: s.url,
        description: s.basis,
      },
    },
  }))

  if (!results.length) {
    const hits = searchSiteKnowledge(clean, safeLimit)
    results = hits.map((h, i) => ({
      url: h.url,
      name: h.title,
      site: BRAND_NAME,
      score: Math.max(45, 90 - i * 5),
      description: h.summary,
      prefilledQuoteUrl:
        h.prefilled_quote_url ||
        buildQuoteLink({ route: route === "all" ? "lower-mekong" : route, nights, guests, month, source: "nlweb" }),
      schema_object: {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: h.title,
        url: h.url,
        description: h.summary,
        provider: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}/#organization`,
          name: BRAND_NAME,
          url: SITE_URL,
        },
      },
    }))
  }

  return Response.json(
    {
      query: clean,
      provider: BRAND_NAME,
      summary:
        budgetEstimate?.summary ||
        (results.length
          ? `Found ${results.length} matching verified Mekong River Cruise ships or guides. Quotes are complimentary and replied to within 24 hours from our Ho Chi Minh City desk.`
          : "No exact ship match found. Use the pre-filled inquiry or itinerary review link for a specialist match."),
      ...(budgetEstimate ? { budgetEstimate } : {}),
      results,
      nextSteps: {
        prefilledQuoteUrl: buildQuoteLink({
          ship: matchedShip?.slug,
          route: route === "all" ? "lower-mekong" : route,
          nights,
          guests,
          month,
          source: "nlweb",
        }),
        itineraryReviewUrl: buildQuoteLink({
          mode: "itinerary_review",
          ship: matchedShip?.slug,
          route: route === "all" ? "lower-mekong" : route,
          nights,
          guests,
          month,
          source: "nlweb",
        }),
        costComparisonUrl: `${SITE_URL}/mekong-cruise-cost-comparison`,
      },
    },
    {
      headers: {
        ...PUBLIC_API_HEADERS,
        "cache-control": "public, max-age=900",
      },
    },
  )
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...PUBLIC_API_HEADERS,
      "access-control-allow-methods": "GET, POST, OPTIONS",
      "access-control-allow-headers": "Content-Type, Accept, X-API-Version",
    },
  })
}

export function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams
  const query = sp.get("query") || sp.get("q") || ""
  const limitRaw = sp.get("limit")
  const limit = limitRaw ? Number(limitRaw) : 6
  if (limitRaw && (!Number.isInteger(limit) || limit < 1 || limit > 20)) {
    return problemJson(
      400,
      "invalid_limit",
      "Invalid parameter: limit",
      "limit must be an integer between 1 and 20.",
      "Use ?limit=6.",
    )
  }
  return handleAsk(query, limit)
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return problemJson(
      400,
      "invalid_json",
      "Invalid JSON body",
      "Request body must be valid JSON.",
      'Send {"query":"7-night Vietnam to Cambodia Mekong cruise"} with Content-Type: application/json.',
    )
  }
  const limit = body.limit !== undefined ? Number(body.limit) : 6
  if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
    return problemJson(
      400,
      "invalid_limit",
      "Invalid parameter: limit",
      "limit must be an integer between 1 and 20.",
      'Pass an integer limit such as {"query":"The Jahan","limit":6}.',
    )
  }
  return handleAsk(String(body.query || body.q || ""), limit)
}
