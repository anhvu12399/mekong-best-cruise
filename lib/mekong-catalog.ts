/**
 * Verified Mekong River Cruise catalog, ship filtering, USD budget estimator,
 * and pre-filled inquiry link builder.
 *
 * Every vessel specification, cabin count, operator, route, and USD tariff is
 * sourced strictly from app/ships/data.ts and verified repo records.
 */
import { shipsData, type ShipData } from "@/app/ships/data"

export const SITE_URL = "https://www.mekongrivercruise.com"
export const BRAND_NAME = "Mekong River Cruise"
export const BRAND_ALTERNATE = "Mekong Best Cruise"
export const CONTACT_EMAIL = "sales@mekongrivercruise.com"
export const CONTACT_PHONE = "+1 315 998 1998"
export const WHATSAPP_URL = "https://wa.me/13159981998"
export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g293925-d12051706-Reviews-Mekong_River_Cruise-Ho_Chi_Minh_City.html"

export const ENTITY_FACTS = {
  brandName: BRAND_NAME,
  alternateName: BRAND_ALTERNATE,
  legalName: "Mekong River Cruise Co., Ltd",
  parentCompany: "My Way Travel (My Way Luxury Travel LLC, New York DOS ID: 7926729)",
  parentAddress: "54 State Street, Suite 804, Albany, NY 12207, USA",
  parentUrl: "https://www.mywaytravel.com",
  vnatLicense: "79-0743/2017/CDLQGVN-GP LHQT",
  vnatIssuer: "Vietnam National Authority of Tourism (VNAT)",
  vnatRegistry: "https://quanlyluhanh.vn",
  financialProtection: "Statutory bank escrow guarantee bonded under Vietnam Tourism Law 2017 (Article 31)",
  vietnamOffice: "139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City, Vietnam",
  geo: { latitude: 10.7634, longitude: 106.6896 },
  phone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  whatsapp: WHATSAPP_URL,
  tripAdvisor: {
    url: TRIPADVISOR_URL,
    rating: "4.9",
    reviewCount: 128,
  },
  currencies: ["USD", "EUR", "GBP", "AUD"],
  responseTime: "Within 24 hours",
} as const

export type Corridor = "lower-mekong" | "upper-mekong"

export interface VerifiedShipRecord {
  slug: string
  name: string
  operator: string
  corridor: Corridor
  corridorLabel: string
  countries: string[]
  style: string
  tier: "accessible-comfort" | "heritage-expedition" | "modern-luxury" | "ultra-luxury"
  length: string
  cabins: number
  guests: number
  crew: number
  hasElevator: boolean
  directSaigonDocking: boolean
  tagline: string
  inclusions: string
  basis: string
  lastVerified: string
  pricing: {
    threeNight: { from: number; route: string }
    fourNight: { from: number; route: string }
    sevenNight: { from: number; route: string }
  }
  cabinCountCategories: number
  url: string
}

const UPPER_MEKONG_SLUGS = new Set(["anouvong", "boheme", "mekong-pearl", "mekong-sun"])
const ELEVATOR_SLUGS = new Set([
  "victoria-mekong",
  "scenic-spirit",
  "viking-saigon",
  "mekong-jewel",
  "mekong-navigator",
])
const DIRECT_SAIGON_SLUGS = new Set(["emerald-harmony"])

const SHIP_STYLE_MAP: Record<string, string> = {
  "aqua-mekong": "Ultra-Luxury Expedition",
  "scenic-spirit": "All-Inclusive Ultra-Luxury",
  "viking-saigon": "Scandinavian Luxury",
  "emerald-harmony": "Contemporary Urban Luxury",
  amadara: "French Colonial Luxury",
  "avalon-saigon": "Suite Ship Luxury",
  "mekong-jewel": "All-Suite Eco-Luxury",
  "the-jahan": "Colonial Heritage Luxury",
  jayavarman: "French-Indochine Heritage",
  "mekong-princess": "Boutique All-Suite",
  "mekong-navigator": "Grand French Colonial",
  "victoria-mekong": "Eco-Boutique Comfort",
  "bassac-pandaw": "Classic Teak Expedition",
  "mekong-pandaw": "Expedition Heritage",
  "toum-tiou-ii": "Shallow-Draft Boutique",
  "lan-diep": "Traditional Heritage",
  anouvong: "Upper Mekong Heritage Boutique",
  boheme: "Upper Mekong Ultra-Luxury Boutique",
  "mekong-pearl": "Upper Mekong Comfort Expedition",
  "mekong-sun": "Upper Mekong Classic Boutique",
}

function classifyTier(sevenNightFrom: number): VerifiedShipRecord["tier"] {
  if (sevenNightFrom >= 7000) return "ultra-luxury"
  if (sevenNightFrom >= 3600) return "modern-luxury"
  if (sevenNightFrom >= 2400) return "heritage-expedition"
  return "accessible-comfort"
}

function toVerifiedShip(ship: ShipData): VerifiedShipRecord {
  const isUpper = UPPER_MEKONG_SLUGS.has(ship.slug)
  return {
    slug: ship.slug,
    name: ship.name,
    operator: ship.operator,
    corridor: isUpper ? "upper-mekong" : "lower-mekong",
    corridorLabel: isUpper ? "Upper Mekong (Laos & Golden Triangle)" : "Lower Mekong (Vietnam & Cambodia)",
    countries: isUpper ? ["Laos", "Thailand"] : ["Vietnam", "Cambodia"],
    style: SHIP_STYLE_MAP[ship.slug] || "Luxury River Cruise",
    tier: classifyTier(ship.pricing.sevenNight.from),
    length: ship.stats.length,
    cabins: Number(ship.stats.cabins) || 0,
    guests: Number(ship.stats.guests) || 0,
    crew: Number(ship.stats.crew) || 0,
    hasElevator: ELEVATOR_SLUGS.has(ship.slug),
    directSaigonDocking: DIRECT_SAIGON_SLUGS.has(ship.slug),
    tagline: ship.tagline,
    inclusions: ship.pricing.inclusions,
    basis: ship.pricing.basis,
    lastVerified: ship.pricing.lastVerified,
    pricing: {
      threeNight: ship.pricing.threeNight,
      fourNight: ship.pricing.fourNight,
      sevenNight: ship.pricing.sevenNight,
    },
    cabinCountCategories: ship.cabins?.length || 0,
    url: `${SITE_URL}/ships/${ship.slug}`,
  }
}

export const VERIFIED_SHIPS: VerifiedShipRecord[] = Object.values(shipsData)
  .map(toVerifiedShip)
  .sort((a, b) => a.pricing.sevenNight.from - b.pricing.sevenNight.from)

export const VERIFIED_SHIP_MAP: Record<string, VerifiedShipRecord> = Object.fromEntries(
  VERIFIED_SHIPS.map((s) => [s.slug, s]),
)

export const KNOWN_SHIP_SLUGS = new Set<string>([
  ...Object.keys(shipsData),
  "champa-pandaw",
  "indochina-pandaw",
  "indochine-i",
  "indochine-ii",
  "laos-pandaw",
  "mekong-symphony",
  "tonle-pandaw",
  "mekong-star",
  "sabaidee-pandaw",
])

export function formatUsd(amount: number): string {
  return `US$${Math.round(amount).toLocaleString("en-US")}`
}

export function priceForNights(ship: VerifiedShipRecord, nights: 3 | 4 | 7): { from: number; route: string } {
  if (nights === 3) return ship.pricing.threeNight
  if (nights === 4) return ship.pricing.fourNight
  return ship.pricing.sevenNight
}

export function normalizeRouteParam(raw?: string | null): Corridor | "all" | null {
  if (!raw || !raw.trim()) return "all"
  const v = raw.trim().toLowerCase()
  if (["all", "any", "mekong"].includes(v)) return "all"
  if (
    [
      "lower",
      "lower-mekong",
      "vietnam",
      "cambodia",
      "vietnam-cambodia",
      "saigon-siem-reap",
      "saigon-phnom-penh",
      "delta",
      "mekong-delta",
    ].includes(v)
  ) {
    return "lower-mekong"
  }
  if (
    [
      "upper",
      "upper-mekong",
      "laos",
      "thailand",
      "golden-triangle",
      "luang-prabang",
      "vientiane",
      "huay-xai",
      "laos-thailand",
    ].includes(v)
  ) {
    return "upper-mekong"
  }
  return null
}

export function buildQuoteLink(opts: {
  ship?: string
  route?: string
  nights?: number
  guests?: number
  month?: string
  cabin?: string
  notes?: string
  mode?: "quote" | "itinerary_review"
  source?: string
}): string {
  const path = opts.mode === "itinerary_review" ? "/review-my-itinerary" : "/plan-your-journey"
  const params = new URLSearchParams()
  if (opts.ship) params.set("ship", opts.ship.trim())
  if (opts.cabin) params.set("cabin", opts.cabin.trim())
  if (opts.route) params.set("route", opts.route.trim())
  if (opts.nights && opts.nights >= 1 && opts.nights <= 30) params.set("nights", String(Math.round(opts.nights)))
  if (opts.guests && opts.guests >= 1 && opts.guests <= 40) params.set("guests", String(Math.round(opts.guests)))
  if (opts.month) params.set("month", opts.month.trim())
  if (opts.notes) params.set("notes", opts.notes.trim().slice(0, 400))
  if (opts.source) params.set("ai_source", opts.source.trim())
  const qs = params.toString()
  return `${SITE_URL}${path}${qs ? `?${qs}` : ""}`
}

export interface ShipFilterInput {
  route?: Corridor | "all"
  nights?: 3 | 4 | 7
  maxPrice?: number
  style?: string
  elevator?: boolean
  query?: string
  limit?: number
  source?: string
}

export function filterShips(input: ShipFilterInput) {
  const nights: 3 | 4 | 7 = input.nights || 7
  const styleRaw = (input.style || "").trim().toLowerCase()
  const queryWords = (input.query || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(
      (w) =>
        w.length > 2 &&
        !["the", "and", "for", "with", "ship", "ships", "cruise", "cruises", "mekong", "river", "best", "cost", "price", "how", "much"].includes(w),
    )

  const filtered = VERIFIED_SHIPS.filter((s) => {
    if (input.route && input.route !== "all" && s.corridor !== input.route) return false
    if (input.elevator === true && !s.hasElevator) return false
    if (input.elevator === false && s.hasElevator) return false
    if (input.maxPrice && priceForNights(s, nights).from > input.maxPrice) return false
    if (styleRaw) {
      const styleHay = `${s.style} ${s.tier} ${s.operator} ${s.tagline} ${s.hasElevator ? "elevator senior accessible" : ""} ${s.directSaigonDocking ? "saigon docking central" : ""}`.toLowerCase()
      if (!styleHay.includes(styleRaw)) return false
    }
    return true
  })

  const scored = filtered
    .map((s) => {
      const hay = `${s.name} ${s.slug} ${s.operator} ${s.corridorLabel} ${s.style} ${s.tagline} ${s.inclusions} ${s.hasElevator ? "elevator senior wheelchair lift" : ""} ${s.directSaigonDocking ? "central saigon district 4 docking" : ""}`.toLowerCase()
      let score = 1
      for (const w of queryWords) {
        if (s.name.toLowerCase().includes(w)) score += 5
        else if (s.operator.toLowerCase().includes(w)) score += 3
        else if (hay.includes(w)) score += 1.5
      }
      return { s, score }
    })
    .filter((x) => queryWords.length === 0 || x.score > 1)
    .sort((a, b) => b.score - a.score || priceForNights(a.s, nights).from - priceForNights(b.s, nights).from)

  const limit = Math.min(Math.max(input.limit || 20, 1), 25)
  const src = input.source || "api"

  return scored.slice(0, limit).map(({ s }) => formatShipResult(s, nights, src))
}

export function formatShipResult(s: VerifiedShipRecord, nights: 3 | 4 | 7 = 7, source = "api") {
  const tierPrice = priceForNights(s, nights)
  return {
    slug: s.slug,
    name: s.name,
    operator: s.operator,
    corridor: s.corridor,
    corridorLabel: s.corridorLabel,
    countries: s.countries,
    style: s.style,
    tier: s.tier,
    specs: {
      length: s.length,
      cabins: s.cabins,
      guests: s.guests,
      crew: s.crew,
      hasElevator: s.hasElevator,
      directSaigonDocking: s.directSaigonDocking,
    },
    selectedNights: nights,
    selectedRoute: tierPrice.route,
    fromUsdPerPerson: tierPrice.from,
    perNightUsdPerPerson: Math.round(tierPrice.from / nights),
    tariffsUsdPerPerson: {
      threeNight: s.pricing.threeNight,
      fourNight: s.pricing.fourNight,
      sevenNight: s.pricing.sevenNight,
    },
    basis: s.basis,
    inclusions: s.inclusions,
    lastVerified: s.lastVerified,
    url: s.url,
    prefilledQuoteUrl: buildQuoteLink({
      ship: s.slug,
      route: s.corridor,
      nights,
      source,
    }),
    shortAnswer: `${s.name} (${s.operator}, ${s.cabins} cabins / ${s.guests} guests) sails ${tierPrice.route} from ${formatUsd(tierPrice.from)} per person for ${nights} nights (${s.basis}). Verified ${s.lastVerified}.`,
  }
}

export function seasonalWaterNote(monthRaw?: string): {
  season: string
  tonleSapStatus: string
  advisory: string
} {
  const m = (monthRaw || "").trim().toLowerCase()
  if (/aug|sep|oct|nov/.test(m)) {
    return {
      season: "High Water Season (August – November)",
      tonleSapStatus: "Direct sailing across Tonle Sap Lake to Siem Reap port is typically possible.",
      advisory:
        "Mekong depth rises 7–10 meters. Flooded forests such as Tra Su are navigable and ships cross Tonle Sap directly.",
    }
  }
  if (/dec|jan|feb|mar|apr/.test(m)) {
    return {
      season: "Cool & Dry Season (December – April)",
      tonleSapStatus:
        "Low water on Tonle Sap Lake (especially March–April) requires a luxury coach or speedboat transfer between Kampong Cham and Siem Reap (about 4.5 hours by road).",
      advisory:
        "Clear skies, lower humidity, and 22°C–30°C temperatures. Peak demand runs November–February; book 6–10 months ahead.",
    }
  }
  if (/may|jun|jul/.test(m)) {
    return {
      season: "Green Season (May – July)",
      tonleSapStatus: "Low-to-rising river levels; Kampong Cham to Siem Reap transfer is typically by motorcoach.",
      advisory: "Brief afternoon showers, lush rice paddies, fewer crowds, and stronger seasonal cabin availability.",
    }
  }
  return {
    season: "Year-Round Mekong Operating Calendar",
    tonleSapStatus:
      "August–November (High Water) allows direct Tonle Sap Lake sailing; December–July uses a Kampong Cham to Siem Reap transfer.",
    advisory: "Peak cool dry season is December–April; Green Season value runs May–July.",
  }
}

export function estimateCruiseBudget(opts: {
  route?: Corridor | "all"
  nights?: 3 | 4 | 7
  guests?: number
  style?: string
  shipSlug?: string
  month?: string
  source?: string
}) {
  const nights: 3 | 4 | 7 = opts.nights || 7
  const guests = Math.min(Math.max(Math.round(opts.guests || 2), 1), 20)
  const route = opts.route || "lower-mekong"
  const src = opts.source || "api-estimate"

  let pool: VerifiedShipRecord[] = []
  if (opts.shipSlug) {
    const exact = VERIFIED_SHIP_MAP[opts.shipSlug]
    if (exact) pool = [exact]
  } else {
    pool = VERIFIED_SHIPS.filter((s) => {
      if (route !== "all" && s.corridor !== route) return false
      if (opts.style) {
        const st = opts.style.toLowerCase()
        const hay = `${s.style} ${s.tier} ${s.hasElevator ? "elevator senior" : ""} ${s.directSaigonDocking ? "saigon docking" : ""}`.toLowerCase()
        if (!hay.includes(st)) return false
      }
      return true
    })
  }

  if (!pool.length) {
    pool = VERIFIED_SHIPS.filter((s) => route === "all" || s.corridor === route)
  }

  const prices = pool.map((s) => priceForNights(s, nights).from).sort((a, b) => a - b)
  const lowPerPerson = prices[0]
  const typicalPerPerson = prices[Math.floor(prices.length / 2)]
  const highPerPerson = prices[prices.length - 1]

  const isLower = opts.shipSlug
    ? VERIFIED_SHIP_MAP[opts.shipSlug]?.corridor === "lower-mekong"
    : route !== "upper-mekong"

  const extrasPerPersonUsd = {
    portTaxesNote: "US$65 – US$120 per person where not included in vessel tariff",
    cambodiaVisaUsd: isLower ? "US$30 – US$35 cash (crisp USD notes printed 2013 or later)" : "Not required on Laos-only sailings",
    recommendedGratuitiesUsd: `US$${nights * 15} – US$${nights * 20} for crew ($15–$20/day) plus $3–$5/day for local guides`,
  }

  const seasonInfo = seasonalWaterNote(opts.month)
  const matchingShips = pool.slice(0, 6).map((s) => formatShipResult(s, nights, src))
  const prefilledQuoteUrl = buildQuoteLink({
    ship: opts.shipSlug,
    route: opts.shipSlug ? VERIFIED_SHIP_MAP[opts.shipSlug]?.corridor : route,
    nights,
    guests,
    month: opts.month,
    source: src,
  })
  const itineraryReviewUrl = buildQuoteLink({
    mode: "itinerary_review",
    ship: opts.shipSlug,
    route: opts.shipSlug ? VERIFIED_SHIP_MAP[opts.shipSlug]?.corridor : route,
    nights,
    guests,
    month: opts.month,
    source: src,
  })

  const scopeLabel = opts.shipSlug
    ? VERIFIED_SHIP_MAP[opts.shipSlug]?.name || opts.shipSlug
    : route === "upper-mekong"
      ? "Upper Mekong (Laos & Golden Triangle)"
      : route === "all"
        ? "Lower & Upper Mekong"
        : "Lower Mekong (Vietnam & Cambodia)"

  return {
    provider: BRAND_NAME,
    currency: "USD",
    priceBasis: "Per person twin-share starting cabin tariffs; international flights excluded.",
    lastVerified: "November 2026",
    query: {
      route,
      nights,
      guests,
      style: opts.style || null,
      ship: opts.shipSlug || null,
      month: opts.month || null,
    },
    basedOnVerifiedShips: pool.length,
    estimatedPerPersonUsd: {
      low: lowPerPerson,
      typical: typicalPerPerson,
      high: highPerPerson,
      perNightRangeUsd: {
        low: Math.round(lowPerPerson / nights),
        typical: Math.round(typicalPerPerson / nights),
        high: Math.round(highPerPerson / nights),
      },
    },
    estimatedGroupTotalUsd: {
      guests,
      low: lowPerPerson * guests,
      typical: typicalPerPerson * guests,
      high: highPerPerson * guests,
    },
    typicalOutOfPocketExtras: extrasPerPersonUsd,
    seasonality: seasonInfo,
    summary:
      pool.length === 1
        ? `${scopeLabel} starts from ${formatUsd(lowPerPerson)} per person (${formatUsd(lowPerPerson * guests)} for ${guests} ${guests === 1 ? "guest" : "guests"}) for ${nights} nights on ${priceForNights(pool[0], nights).route}. Verified November 2026; flights excluded.`
        : `Verified ${nights}-night ${scopeLabel} river cruises range from ${formatUsd(lowPerPerson)} to ${formatUsd(highPerPerson)} per person (median ${formatUsd(typicalPerPerson)} pp, or ${formatUsd(typicalPerPerson * guests)} for ${guests} ${guests === 1 ? "guest" : "guests"}) across ${pool.length} vessels reviewed November 2026. Flights excluded.`,
    matchingShips,
    nextSteps: {
      prefilledQuoteUrl,
      itineraryReviewUrl,
      costComparisonUrl: `${SITE_URL}/mekong-cruise-cost-comparison`,
      responseTime: ENTITY_FACTS.responseTime,
      email: CONTACT_EMAIL,
      phone: CONTACT_PHONE,
      whatsapp: WHATSAPP_URL,
    },
  }
}

export interface SiteKnowledgeItem {
  title: string
  url: string
  summary: string
  category: "ship" | "itinerary" | "guide" | "destination" | "tool"
  prefilledQuoteUrl?: string
}

export const CORE_SITE_KNOWLEDGE: SiteKnowledgeItem[] = [
  ...VERIFIED_SHIPS.map((s) => ({
    title: `${s.name} (${s.operator}) — ${s.corridorLabel}`,
    url: s.url,
    summary: `${s.style}. ${s.cabins} cabins, ${s.guests} guests, ${s.crew} crew, ${s.length}.${s.hasElevator ? " Passenger elevator onboard." : ""}${s.directSaigonDocking ? " Docks directly in central Ho Chi Minh City (District 4)." : ""} Verified tariffs: 3N from ${formatUsd(s.pricing.threeNight.from)}, 4N from ${formatUsd(s.pricing.fourNight.from)}, 7N from ${formatUsd(s.pricing.sevenNight.from)} pp.`,
    category: "ship" as const,
    prefilledQuoteUrl: buildQuoteLink({ ship: s.slug, route: s.corridor, nights: 7, source: "mcp" }),
  })),
  {
    title: "Mekong River Cruise Cost Comparison (20 Verified Ships)",
    url: `${SITE_URL}/mekong-cruise-cost-comparison`,
    summary: "Side-by-side USD cabin pricing table across all 20 verified Lower and Upper Mekong cruise ships for 3, 4, and 7 nights, plus port fees, visa, and gratuity guidance.",
    category: "tool",
  },
  {
    title: "Free Mekong Ship Match & Draft Itinerary Check",
    url: `${SITE_URL}/review-my-itinerary`,
    summary: "Submit an AI-drafted Mekong cruise itinerary or ship shortlist for a free 24-hour specialist check on Tonle Sap water levels, elevators, docking ports, and verified cabin rates.",
    category: "tool",
  },
  {
    title: "7–8 Day Vietnam to Cambodia Trans-Border Cruise",
    url: `${SITE_URL}/itineraries/vietnam-cambodia`,
    summary: "Classic 7-night route between Ho Chi Minh City (My Tho) and Siem Reap via Cai Be, Sa Dec, Tan Chau, Kaam Samnor river border, Phnom Penh, Oudong, and Kampong Tralach.",
    category: "itinerary",
    prefilledQuoteUrl: buildQuoteLink({ route: "lower-mekong", nights: 7, source: "mcp" }),
  },
  {
    title: "3–4 Day Mekong Delta Highlights Cruise",
    url: `${SITE_URL}/itineraries/mekong-delta`,
    summary: "Short Vietnam Mekong Delta sailing from Ho Chi Minh City / My Tho to Cai Be, Sa Dec, Can Tho, and Chau Doc for floating markets and orchard canals.",
    category: "itinerary",
    prefilledQuoteUrl: buildQuoteLink({ route: "lower-mekong", nights: 3, source: "mcp" }),
  },
  {
    title: "10-Day Full Mekong Story (Cruise + Angkor Extension)",
    url: `${SITE_URL}/itineraries/full-mekong-story`,
    summary: "Comprehensive Mekong expedition linking Ho Chi Minh City, the Delta, Phnom Penh, Tonle Sap Lake, and Siem Reap / Angkor Wat.",
    category: "itinerary",
    prefilledQuoteUrl: buildQuoteLink({ route: "lower-mekong", nights: 7, source: "mcp" }),
  },
  {
    title: "Private Mekong River Charter",
    url: `${SITE_URL}/itineraries/private-charter`,
    summary: "Full-vessel charter options for families, celebrations, and private groups on small-ship boutique Mekong vessels.",
    category: "itinerary",
    prefilledQuoteUrl: buildQuoteLink({ route: "lower-mekong", notes: "Private vessel charter inquiry", source: "mcp" }),
  },
  {
    title: "Upper Mekong & Laos Cruises (Luang Prabang to Golden Triangle)",
    url: `${SITE_URL}/destinations/laos`,
    summary: "Upper Mekong cruises in northern Laos aboard Anouvong, Bohème, Mekong Pearl, and Mekong Sun between Huay Xai / Chiang Khong, Luang Prabang, and Vientiane.",
    category: "destination",
    prefilledQuoteUrl: buildQuoteLink({ route: "upper-mekong", nights: 7, source: "mcp" }),
  },
  {
    title: "Best Time to Cruise the Mekong (High Water vs Low Water Guide)",
    url: `${SITE_URL}/best-time-to-travel`,
    summary: "Month-by-month water level and weather guide: Cool Dry Season (Dec–Apr), Green Season (May–Jul), and High Water Season (Aug–Nov, direct Tonle Sap sailing).",
    category: "guide",
  },
  {
    title: "Mekong River Cruise Ships Compared: 2026 Fleet Ranking & Specs",
    url: `${SITE_URL}/travel-ideas/mekong-river-cruise-ships-compared-ranking`,
    summary: "Independent side-by-side comparison of top Mekong cruise vessels including Aqua Mekong, Scenic Spirit, The Jahan, Jayavarman, Mekong Jewel, Emerald Harmony, and Victoria Mekong.",
    category: "guide",
  },
  {
    title: "Best Mekong River Cruises for Seniors (Elevators & Stairs Guide)",
    url: `${SITE_URL}/travel-ideas/best-mekong-river-cruise-for-seniors`,
    summary: "Mobility guide detailing passenger elevators (Victoria Mekong, Scenic Spirit, Viking Saigon, Mekong Jewel, Mekong Navigator) versus steep wooden stairs on colonial heritage ships.",
    category: "guide",
  },
  {
    title: "Aqua Mekong vs Heritage Line (The Jahan & Jayavarman)",
    url: `${SITE_URL}/travel-ideas/aqua-mekong-vs-heritage-line`,
    summary: "Direct comparison of ultra-luxury Aqua Mekong ($9,800+ for 7N, 1:1 crew, 4 speedboats) against colonial Heritage Line vessels ($2,403–$2,640+ for 7N).",
    category: "guide",
  },
  {
    title: "Upstream vs Downstream Mekong River Cruise",
    url: `${SITE_URL}/travel-ideas/upstream-vs-downstream`,
    summary: "Routing comparison between sailing upstream (Saigon to Siem Reap) and downstream (Siem Reap to Saigon).",
    category: "guide",
  },
  {
    title: "Mekong Cruise Cost Guide & Hidden Fees",
    url: `${SITE_URL}/travel-ideas/mekong-cruise-cost`,
    summary: "Full breakdown of cabin tariffs, mandatory port taxes ($65–$120), Cambodia visa ($30–$35 cash), and recommended crew gratuities ($15–$20/day).",
    category: "guide",
  },
  {
    title: "Is a Mekong River Cruise Worth It?",
    url: `${SITE_URL}/travel-ideas/is-mekong-river-cruise-worth-it`,
    summary: "Honest comparison of a 7-night Mekong river cruise versus an overland Vietnam–Cambodia car tour.",
    category: "guide",
  },
  {
    title: "20 Essential Mekong Cruise Questions Answered",
    url: `${SITE_URL}/faqs`,
    summary: "Verified answers covering visas, water levels, packing, currency, senior accessibility, and cabin selection.",
    category: "guide",
  },
]

const SEARCH_STOP = new Set([
  "the", "and", "for", "with", "tour", "tours", "trip", "trips", "best", "can", "you",
  "what", "how", "are", "about", "show", "find", "tell", "need", "want", "from",
])

export function searchSiteKnowledge(query: string, limit = 8) {
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !SEARCH_STOP.has(w))

  const all = CORE_SITE_KNOWLEDGE
  const hay = all.map((e) => ({ e, t: e.title.toLowerCase(), h: `${e.title} ${e.summary} ${e.url}`.toLowerCase() }))
  const weight = (w: string) => Math.log(1 + all.length / (1 + hay.filter((x) => x.h.includes(w)).length))
  const ws = words.map((w) => [w, weight(w)] as const)

  const scored = hay
    .map((x) => ({
      e: x.e,
      s: ws.reduce((n, [w, k]) => n + (x.h.includes(w) ? k : 0) + (x.t.includes(w) ? k * 1.4 : 0), 0),
    }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, Math.min(Math.max(limit, 1), 20))

  return scored.map(({ e }) => ({
    title: e.title,
    url: e.url,
    category: e.category,
    summary: e.summary,
    ...(e.prefilledQuoteUrl ? { prefilled_quote_url: e.prefilledQuoteUrl } : {}),
  }))
}

/** RFC 9457 Problem Details JSON response for all public API endpoints. */
export function problemJson(
  status: number,
  code: string,
  title: string,
  detail: string,
  resolution?: string,
): Response {
  return new Response(
    JSON.stringify(
      {
        type: `${SITE_URL}/ai-access#${code}`,
        title,
        status,
        code,
        detail,
        ...(resolution ? { resolution } : {}),
        documentation_url: `${SITE_URL}/ai-access`,
      },
      null,
      2,
    ),
    {
      status,
      headers: {
        "content-type": "application/problem+json; charset=utf-8",
        "access-control-allow-origin": "*",
        "cache-control": "no-store",
      },
    },
  )
}
