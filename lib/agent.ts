/**
 * Agentic discovery documents, HTML->Markdown conversion, MCP Server,
 * and A2A Agent handler for mekongrivercruise.com (Next.js App Router).
 */
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ENTITY_FACTS,
  SITE_URL,
  VERIFIED_SHIPS,
  VERIFIED_SHIP_MAP,
  WHATSAPP_URL,
  buildQuoteLink,
  estimateCruiseBudget,
  filterShips,
  formatUsd,
  normalizeRouteParam,
  searchSiteKnowledge,
} from "./mekong-catalog"

const SITE = SITE_URL.replace(/\/+$/, "")
const abs = (p: string) => (p.startsWith("http") ? p : SITE + p)

export const CONTENT_SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=yes"

export const HOME_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</llms-full.txt>; rel="alternate"; type="text/markdown"',
  '</.well-known/agent-skills/index.json>; rel="service-doc"; type="application/json"',
].join(", ")

/* ------------------------------------------------------------------ */
/* HTML -> Markdown (200 & 404)                                       */
/* ------------------------------------------------------------------ */
const ENT: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
  "&nbsp;": " ",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ndash;": "–",
  "&mdash;": "—",
  "&harr;": "↔",
}

const decode = (s: string) =>
  s
    .replace(/&(?:amp|lt|gt|quot|nbsp|rsquo|lsquo|ndash|mdash|harr|#39|#x27);/g, (m) => ENT[m] ?? m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))

const strip = (s: string) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()

export function htmlToMarkdown(html: string, pathname = "/"): string {
  const title = strip((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1] as string)
  const desc = decode(
    (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i) || [, ""])[1] as string,
  )
  const canon = (html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i) || [, ""])[1] as string
  const main =
    html.match(/<main[\s\S]*?<\/main>/i)?.[0] ??
    html.match(/<article[\s\S]*?<\/article>/i)?.[0] ??
    html.match(/<body[\s\S]*<\/body>/i)?.[0] ??
    html

  const body = decode(
    main
      .replace(/<(script|style|svg|noscript|template|iframe|form|button|select|textarea|nav)\b[\s\S]*?<\/\1>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<img[^>]*\balt=["']([^"']+)["'][^>]*>/gi, (_, a) => `(image: ${a})`)
      .replace(/<img[^>]*>/gi, "")
      .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, t) => `\n\n${"#".repeat(Number(n))} ${strip(t)}\n\n`)
      .replace(/<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
        const x = strip(t)
        if (!x || href.startsWith("#") || href.startsWith("javascript")) return x
        return `[${x}](${href.startsWith("/") ? SITE + href : href})`
      })
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*")
      .replace(/<li\b[^>]*>/gi, "\n- ")
      .replace(/<\/(p|div|section|article|ul|ol|tr|table|header|footer|figure|dd|dt)>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(td|th)>/gi, " | ")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()

  const shipMatch = pathname.match(/^\/ships\/([a-z0-9-]+)\/?$/i)
  const shipSlug = shipMatch?.[1] && VERIFIED_SHIP_MAP[shipMatch[1]] ? shipMatch[1] : undefined
  const route = shipSlug ? VERIFIED_SHIP_MAP[shipSlug].corridor : pathname.includes("laos") ? "upper-mekong" : "lower-mekong"
  const quoteLink = buildQuoteLink({ ship: shipSlug, route, nights: 7, source: "md" })
  const reviewLink = buildQuoteLink({ mode: "itinerary_review", ship: shipSlug, route, source: "md" })

  const footer = [
    "",
    "---",
    "## Next Steps with Mekong River Cruise",
    `- [Request verified cabin availability and quote](${quoteLink}) (reply within 24 hours from our Ho Chi Minh City desk).`,
    `- [Free Mekong ship match & draft itinerary check](${reviewLink}) — verify Tonle Sap water levels, elevators, docking ports, and pricing.`,
    `- [Compare all 20 verified Mekong ships in USD](${SITE}/mekong-cruise-cost-comparison) · [JSON Ships API](${SITE}/api/ships) · [Full LLM Guide](${SITE}/llms-full.txt)`,
  ].join("\n")

  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(desc)}\nurl: ${canon || abs(pathname)}\n---\n\n${body}\n${footer}\n`
}

export function markdown404(pathname: string): string {
  return [
    "# 404 — Page Not Found on Mekong River Cruise",
    "",
    `The requested path \`${pathname}\` does not exist on ${SITE}.`,
    "",
    "## Verified Resources for Travelers and AI Agents",
    `- [Brand & Fleet Briefing (llms.txt)](${SITE}/llms.txt)`,
    `- [Complete Ship Catalog & Route Guide (llms-full.txt)](${SITE}/llms-full.txt)`,
    `- [Mekong Cruise Cost Comparison (20 Verified Ships)](${SITE}/mekong-cruise-cost-comparison)`,
    `- [Free Mekong Ship Match & Draft Itinerary Check](${SITE}/review-my-itinerary?ai_source=md)`,
    `- [Public Ships API (JSON)](${SITE}/api/ships) · [Budget Estimator API](${SITE}/api/estimate?route=lower-mekong&nights=7&guests=2)`,
    `- [OpenAPI 3.1 Spec](${SITE}/openapi.json) · [API & MCP Documentation](${SITE}/ai-access)`,
    `- [XML Sitemap](${SITE}/sitemap.xml)`,
    `- [Plan Your Mekong Cruise](${SITE}/plan-your-journey?ai_source=md)`,
    "",
  ].join("\n")
}

/* ------------------------------------------------------------------ */
/* Contact Info                                                       */
/* ------------------------------------------------------------------ */
export const contactInfo = () => ({
  name: ENTITY_FACTS.brandName,
  alternateName: ENTITY_FACTS.alternateName,
  parentCompany: ENTITY_FACTS.parentCompany,
  vnatLicense: `${ENTITY_FACTS.vnatLicense} (${ENTITY_FACTS.vnatIssuer})`,
  office: ENTITY_FACTS.vietnamOffice,
  website: SITE,
  quoteRequestUrl: `${SITE}/plan-your-journey?ai_source=mcp`,
  freeItineraryReviewUrl: `${SITE}/review-my-itinerary?ai_source=mcp`,
  costComparisonUrl: `${SITE}/mekong-cruise-cost-comparison`,
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  whatsapp: WHATSAPP_URL,
  tripAdvisor: `${ENTITY_FACTS.tripAdvisor.rating}/5 across ${ENTITY_FACTS.tripAdvisor.reviewCount} verified reviews (${ENTITY_FACTS.tripAdvisor.url})`,
  responseTime: ENTITY_FACTS.responseTime,
  note: "Authorized booking specialist for 20 verified Lower and Upper Mekong ships. Quotes are complimentary with Best Price Guarantee; no automated checkout.",
})

/* ------------------------------------------------------------------ */
/* Discovery Documents                                                */
/* ------------------------------------------------------------------ */
export const apiCatalog = () => ({
  linkset: [
    {
      anchor: `${SITE}/api/ships`,
      "service-desc": [{ href: `${SITE}/openapi.json`, type: "application/openapi+json" }],
      "service-doc": [{ href: `${SITE}/ai-access`, type: "text/html" }],
    },
    {
      anchor: `${SITE}/api/estimate`,
      "service-desc": [{ href: `${SITE}/openapi.json`, type: "application/openapi+json" }],
      "service-doc": [{ href: `${SITE}/ai-access`, type: "text/html" }],
    },
    {
      anchor: `${SITE}/ask`,
      "service-desc": [{ href: `${SITE}/openapi.json`, type: "application/openapi+json" }],
      "service-doc": [{ href: `${SITE}/ai-access`, type: "text/html" }],
    },
    {
      anchor: `${SITE}/mcp`,
      "service-desc": [{ href: `${SITE}/.well-known/mcp/server-card.json`, type: "application/json" }],
      "service-doc": [{ href: `${SITE}/ai-access`, type: "text/html" }],
    },
    {
      anchor: `${SITE}/a2a`,
      "service-desc": [{ href: `${SITE}/.well-known/agent-card.json`, type: "application/json" }],
      "service-doc": [{ href: `${SITE}/llms.txt`, type: "text/plain" }],
    },
  ],
})

export const aiCatalog = () => ({
  specVersion: "1.0",
  host: { displayName: BRAND_NAME, identifier: "did:web:mekongrivercruise.com" },
  entries: [
    {
      identifier: "urn:air:mekongrivercruise.com:spec:openapi",
      displayName: "Mekong River Cruise Public OpenAPI 3.1 Specification (Ship Filter, Budget Estimator, NLWeb /ask)",
      type: "application/openapi+json",
      url: `${SITE}/openapi.json`,
      representativeQueries: [
        "Filter Vietnam to Cambodia Mekong cruise ships under $3500 for 7 nights",
        "Which Mekong cruise ships have a passenger elevator?",
      ],
    },
    {
      identifier: "urn:air:mekongrivercruise.com:dataset:ships",
      displayName: `Verified Mekong River Cruise Fleet Catalog (${VERIFIED_SHIPS.length} ships, 3/4/7-night USD tariffs, reviewed November 2026)`,
      type: "application/json",
      url: `${SITE}/api/ships`,
      representativeQueries: [
        "Compare Aqua Mekong vs The Jahan prices",
        "Upper Mekong Laos cruise ships and rates",
      ],
    },
    {
      identifier: "urn:air:mekongrivercruise.com:server:mcp",
      displayName: "Mekong River Cruise Fleet Planner & Quote Assistant (MCP, 5 tools, no auth)",
      type: "application/mcp-server-card+json",
      url: `${SITE}/.well-known/mcp/server-card.json`,
      representativeQueries: [
        "Estimate a 7-night Vietnam to Cambodia Mekong cruise for 2 guests",
        "Build a pre-filled quote link for The Jahan",
      ],
    },
    {
      identifier: "urn:air:mekongrivercruise.com:agent:advisor",
      displayName: "Mekong River Cruise Advisor (A2A)",
      type: "application/a2a-agent-card+json",
      url: `${SITE}/.well-known/agent-card.json`,
      representativeQueries: [
        "Best Mekong river cruise for seniors with elevator access",
        "High water vs low water Tonle Sap Mekong cruise advice",
      ],
    },
    {
      identifier: "urn:air:mekongrivercruise.com:nlweb:ask",
      displayName: "Mekong River Cruise NLWeb Natural-Language Search (/ask)",
      type: "application/json",
      url: `${SITE}/ask`,
      representativeQueries: [
        "7-night luxury Vietnam to Cambodia Mekong cruise cost for 2",
      ],
    },
    {
      identifier: "urn:air:mekongrivercruise.com:skill:site",
      displayName: "Skill: compare Mekong cruise ships & estimate budgets",
      type: "text/markdown",
      url: `${SITE}/.well-known/agent-skills/mekong-river-cruise-site/SKILL.md`,
      representativeQueries: [
        "Compare Mekong ships by cabin size, elevator access, route, and USD tariff",
      ],
    },
  ],
})

/* ------------------------------------------------------------------ */
/* MCP Server (5 tools, stateless Streamable HTTP)                    */
/* ------------------------------------------------------------------ */
export const MCP_INFO = {
  name: "mekong-river-cruise",
  title: "Mekong River Cruise Fleet Catalog & Budget Planner",
  version: "1.0.0",
}

export const MCP_TOOLS = [
  {
    name: "search_site",
    description:
      "Search Mekong River Cruise ships, itineraries, seasonality guides, senior mobility guides, and FAQs. Returns canonical URLs and summaries.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Ship name, route, destination, or planning question." },
        limit: { type: "integer", default: 8, minimum: 1, maximum: 20 },
      },
      required: ["query"],
    },
  },
  {
    name: "filter_ships",
    description:
      "Filter 20 verified Lower Mekong (Vietnam–Cambodia) and Upper Mekong (Laos) cruise ships by route, nights (3, 4, or 7), max USD tariff per person, style, elevator access, or keyword. Returns verified specs and pre-filled quote URLs.",
    inputSchema: {
      type: "object",
      properties: {
        route: { type: "string", description: "Route corridor: lower-mekong, upper-mekong, vietnam-cambodia, laos, or all." },
        nights: { type: "integer", enum: [3, 4, 7], default: 7, description: "Cruise length in nights (3, 4, or 7)." },
        max_price_usd: { type: "integer", minimum: 500, description: "Maximum verified per-person twin-share USD tariff." },
        style: { type: "string", description: "Optional style filter: ultra-luxury, luxury, heritage, eco, boutique, expedition, elevator, saigon-docking." },
        elevator: { type: "boolean", description: "Set true to return only ships with a passenger elevator." },
        query: { type: "string", description: "Optional free-text keyword." },
        limit: { type: "integer", default: 10, minimum: 1, maximum: 25 },
      },
    },
  },
  {
    name: "estimate_cruise_budget",
    description:
      "Estimate a Mekong river cruise cabin budget in USD from 20 verified partner ships, including seasonal Tonle Sap water-level guidance, typical port/visa/tipping extras, matching vessels, and a 1-click pre-filled quote URL.",
    inputSchema: {
      type: "object",
      properties: {
        route: { type: "string", description: "lower-mekong (Vietnam–Cambodia), upper-mekong (Laos), or all." },
        nights: { type: "integer", enum: [3, 4, 7], default: 7 },
        guests: { type: "integer", default: 2, minimum: 1, maximum: 20 },
        style: { type: "string", description: "Optional style filter such as ultra-luxury, heritage, eco, or elevator." },
        ship: { type: "string", description: "Optional verified ship slug such as aqua-mekong, the-jahan, victoria-mekong, or anouvong." },
        month: { type: "string", description: "Optional travel month (e.g. November, February) for Tonle Sap water-level advice." },
      },
    },
  },
  {
    name: "build_quote_link",
    description:
      "Build a 1-click pre-filled Mekong cruise quote URL (/plan-your-journey) or free specialist itinerary check URL (/review-my-itinerary) so travelers do not need to re-type ship, route, nights, guests, or travel month.",
    inputSchema: {
      type: "object",
      properties: {
        ship: { type: "string", description: "Optional verified ship slug, e.g. the-jahan, aqua-mekong, scenic-spirit." },
        route: { type: "string", description: "Preferred route, e.g. lower-mekong or upper-mekong." },
        nights: { type: "integer", minimum: 1, maximum: 30 },
        guests: { type: "integer", minimum: 1, maximum: 40 },
        month: { type: "string" },
        cabin: { type: "string" },
        notes: { type: "string", description: "Short summary of preferences or draft itinerary (max 400 chars)." },
        mode: { type: "string", enum: ["quote", "itinerary_review"], default: "quote" },
      },
    },
  },
  {
    name: "get_contact",
    description:
      "Verified contact details, VNAT tour operator license, parent entity (My Way Travel), TripAdvisor rating, and quote / free itinerary check links for Mekong River Cruise.",
    inputSchema: { type: "object", properties: {} },
  },
]

export const mcpServerCard = () => ({
  $schema: "https://static.modelcontextprotocol.io/schemas/2025-12-11/server-card.schema.json",
  version: "1.0",
  protocolVersion: "2025-06-18",
  serverInfo: MCP_INFO,
  description:
    "Public, no-auth MCP server for comparing 20 verified Mekong river cruise ships across Vietnam, Cambodia, and Laos, estimating USD cabin budgets, and building pre-filled inquiry links.",
  documentationUrl: `${SITE}/ai-access`,
  transport: { type: "streamable-http", endpoint: "/mcp" },
  capabilities: { tools: { listChanged: false } },
  authentication: { required: false },
})

export function jsonResp(body: unknown, init: ResponseInit = {}, contentType = "application/json; charset=utf-8") {
  return new Response(JSON.stringify(body, null, 2), {
    ...init,
    headers: {
      "content-type": contentType,
      "access-control-allow-origin": "*",
      ...(init.headers || {}),
    },
  })
}

async function mcpDispatch(msg: any) {
  const { id, method, params = {} } = msg || {}
  if (id === undefined) return null
  const ok = (result: unknown) => ({ jsonrpc: "2.0", id, result })
  const err = (code: number, message: string) => ({ jsonrpc: "2.0", id, error: { code, message } })

  if (method === "initialize") {
    return ok({
      protocolVersion: params.protocolVersion || "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: MCP_INFO,
    })
  }
  if (method === "ping") return ok({})
  if (method === "tools/list") return ok({ tools: MCP_TOOLS })

  if (method === "tools/call") {
    const a = params.arguments || {}
    if (params.name === "search_site") {
      const hits = searchSiteKnowledge(String(a.query || ""), Number(a.limit || 8))
      return ok({ content: [{ type: "text", text: JSON.stringify({ count: hits.length, results: hits }, null, 2) }] })
    }
    if (params.name === "filter_ships") {
      const route = normalizeRouteParam(a.route ? String(a.route) : "all")
      if (!route) return err(-32602, `Invalid route: ${a.route}. Use lower-mekong, upper-mekong, vietnam-cambodia, laos, or all.`)
      const rawNights = a.nights !== undefined ? Number(a.nights) : 7
      if (![3, 4, 7].includes(rawNights)) return err(-32602, "nights must be 3, 4, or 7.")
      const ships = filterShips({
        route,
        nights: rawNights as 3 | 4 | 7,
        maxPrice: a.max_price_usd ? Number(a.max_price_usd) : undefined,
        style: a.style ? String(a.style) : undefined,
        elevator: typeof a.elevator === "boolean" ? a.elevator : undefined,
        query: a.query ? String(a.query) : undefined,
        limit: a.limit ? Number(a.limit) : 10,
        source: "mcp",
      })
      return ok({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                count: ships.length,
                nights: rawNights,
                note: "Verified per-person twin-share starting cabin tariffs (November 2026); flights excluded.",
                ships,
              },
              null,
              2,
            ),
          },
        ],
      })
    }
    if (params.name === "estimate_cruise_budget") {
      const route = normalizeRouteParam(a.route ? String(a.route) : "lower-mekong")
      if (!route) return err(-32602, `Invalid route: ${a.route}`)
      const rawNights = a.nights !== undefined ? Number(a.nights) : 7
      if (![3, 4, 7].includes(rawNights)) return err(-32602, "nights must be 3, 4, or 7.")
      const shipSlug = a.ship ? String(a.ship).trim().toLowerCase() : undefined
      if (shipSlug && !VERIFIED_SHIP_MAP[shipSlug]) {
        return err(-32602, `Unknown verified ship slug: ${shipSlug}. Call filter_ships to list all 20 verified slugs.`)
      }
      const estimate = estimateCruiseBudget({
        route,
        nights: rawNights as 3 | 4 | 7,
        guests: a.guests ? Number(a.guests) : 2,
        style: a.style ? String(a.style) : undefined,
        shipSlug,
        month: a.month ? String(a.month) : undefined,
        source: "mcp",
      })
      return ok({ content: [{ type: "text", text: JSON.stringify(estimate, null, 2) }] })
    }
    if (params.name === "build_quote_link") {
      const mode = a.mode === "itinerary_review" ? "itinerary_review" : "quote"
      const url = buildQuoteLink({
        ship: a.ship ? String(a.ship) : undefined,
        route: a.route ? String(a.route) : undefined,
        nights: a.nights ? Number(a.nights) : undefined,
        guests: a.guests ? Number(a.guests) : undefined,
        month: a.month ? String(a.month) : undefined,
        cabin: a.cabin ? String(a.cabin) : undefined,
        notes: a.notes ? String(a.notes) : undefined,
        mode,
        source: "mcp",
      })
      return ok({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                url,
                mode,
                instructions_for_traveler:
                  "Open this pre-filled link, confirm your name and email, and a Ho Chi Minh City Mekong specialist will reply within 24 hours with live cabin availability and verified rates.",
              },
              null,
              2,
            ),
          },
        ],
      })
    }
    if (params.name === "get_contact") {
      return ok({ content: [{ type: "text", text: JSON.stringify(contactInfo(), null, 2) }] })
    }
    return err(-32602, `Unknown tool: ${params.name}`)
  }

  return err(-32601, `Method not found: ${method}`)
}

export async function handleMcpRequest(request: Request): Promise<Response> {
  let body: any
  try {
    body = await request.json()
  } catch {
    return jsonResp({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, { status: 400 })
  }
  const batch = Array.isArray(body)
  const out = (await Promise.all((batch ? body : [body]).map((m: any) => mcpDispatch(m)))).filter(Boolean)
  if (!out.length) return new Response(null, { status: 202, headers: { "access-control-allow-origin": "*" } })
  return jsonResp(batch ? out : out[0])
}

/* ------------------------------------------------------------------ */
/* A2A Agent Card & JSON-RPC Handler                                  */
/* ------------------------------------------------------------------ */
export const agentCard = () => ({
  protocolVersion: "0.3.0",
  name: `${BRAND_NAME} Advisor`,
  description: `Authorized Mekong River cruise specialist (VNAT License ${ENTITY_FACTS.vnatLicense}; parent company My Way Travel). Compares 20 verified Vietnam–Cambodia and Laos cruise vessels, computes USD cabin budgets, advises on Tonle Sap seasonal water levels and elevator access, and builds pre-filled quote or itinerary-check links.`,
  version: "1.0.0",
  url: `${SITE}/a2a`,
  preferredTransport: "JSONRPC",
  supportedInterfaces: [{ url: `${SITE}/a2a`, protocolBinding: "JSONRPC", protocolVersion: "0.3.0" }],
  provider: { organization: BRAND_NAME, url: SITE },
  documentationUrl: `${SITE}/ai-access`,
  capabilities: { streaming: false, pushNotifications: false, stateTransitionHistory: false },
  defaultInputModes: ["text/plain"],
  defaultOutputModes: ["text/plain"],
  skills: [
    {
      id: "filter_ships",
      name: "Compare Mekong Cruise Ships",
      description: "Filter 20 verified Mekong ships by route (Vietnam–Cambodia or Laos), nights (3, 4, or 7), budget, style, or elevator access.",
      tags: ["mekong", "river-cruise", "ships", "vietnam", "cambodia", "laos"],
      examples: [
        "Which Mekong cruise ships have a passenger elevator?",
        "Compare 7-night Vietnam to Cambodia ships under $3,500 per person",
      ],
    },
    {
      id: "estimate_cruise_budget",
      name: "Estimate Mekong Cruise USD Budget",
      description: "Compute verified USD cabin budgets, out-of-pocket port/visa/gratuity estimates, and Tonle Sap seasonal water advice.",
      tags: ["pricing", "budget", "tonle-sap", "cabin-rates"],
      examples: ["How much is a 7-night luxury Mekong river cruise for 2 guests in November?"],
    },
    {
      id: "contact",
      name: "Specialist Quote & Free Draft Itinerary Check",
      description: "Generate a pre-filled quote link or free 24-hour specialist check of an AI-drafted Mekong cruise itinerary.",
      tags: ["contact", "booking", "itinerary-review"],
      examples: ["Check my Mekong cruise draft itinerary and ship shortlist"],
    },
  ],
})

export async function handleA2aRequest(request: Request): Promise<Response> {
  let m: any
  try {
    m = await request.json()
  } catch {
    return jsonResp({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, { status: 400 })
  }
  const reply = (r: object) => jsonResp({ jsonrpc: "2.0", id: m.id ?? null, ...r })
  if (m.method !== "message/send" && m.method !== "SendMessage") {
    return reply({ error: { code: -32601, message: `Method not supported: ${m.method}` } })
  }
  const text = ((m.params?.message?.parts || []) as any[]).map((p) => p.text || "").join(" ").trim()
  if (!text) return reply({ error: { code: -32602, message: "Send a text part" } })

  const low = text.toLowerCase()
  const isUpper = /\b(laos|luang prabang|vientiane|golden triangle|huay xai|upper mekong|anouvong|boheme|mekong pearl|mekong sun)\b/i.test(low)
  const route = isUpper ? "upper-mekong" : "lower-mekong"
  const nightsRaw = low.match(/\b(3|4|7)\s*[-–]?\s*nights?\b/i)?.[1]
  const nights = (nightsRaw ? Number(nightsRaw) : 7) as 3 | 4 | 7
  const guestsMatch = low.match(/(\d{1,2})\s*(?:guests?|adults?|people|persons?|travelers?|travellers?)/i)
  const guests = guestsMatch ? Number(guestsMatch[1]) : 2
  const monthMatch = low.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/i)
  const month = monthMatch?.[1]
  const wantsElevator = /\b(elevator|lift|wheelchair|senior|mobility|stairs)\b/i.test(low)
  const wantsBudget = /\b(cost|price|budget|how much|usd|\$|estimate|tariff|rate)\b/i.test(low)
  const matchedShip = VERIFIED_SHIPS.find((s) => low.includes(s.name.toLowerCase()) || low.includes(s.slug.replace(/-/g, " ")))

  const lines: string[] = []
  if (wantsBudget || matchedShip) {
    const est = estimateCruiseBudget({
      route,
      nights,
      guests,
      shipSlug: matchedShip?.slug,
      style: wantsElevator ? "elevator" : undefined,
      month,
      source: "a2a",
    })
    lines.push(est.summary, "")
    lines.push(`Seasonality: ${est.seasonality.season} — ${est.seasonality.tonleSapStatus}`, "")
    for (const s of est.matchingShips.slice(0, 5)) {
      lines.push(
        `- ${s.name} (${s.operator}, ${s.specs.cabins} cabins${s.specs.hasElevator ? ", elevator" : ""}) — from ${formatUsd(s.fromUsdPerPerson)} pp (${nights}N, ${s.selectedRoute}) — ${s.url}`,
      )
    }
    lines.push("", `Pre-filled quote link: ${est.nextSteps.prefilledQuoteUrl}`)
    lines.push(`Free specialist ship match & itinerary check: ${est.nextSteps.itineraryReviewUrl}`)
  } else {
    const ships = filterShips({
      route: isUpper ? "upper-mekong" : "all",
      nights,
      elevator: wantsElevator ? true : undefined,
      query: wantsElevator ? undefined : text,
      limit: 5,
      source: "a2a",
    })
    if (ships.length) {
      for (const s of ships) {
        lines.push(`- ${s.name} (${s.operator}) — ${s.shortAnswer} — ${s.url}`)
      }
    } else {
      const hits = searchSiteKnowledge(text, 5)
      lines.push(hits.length ? hits.map((h) => `- ${h.title} — ${h.url}\n  ${h.summary}`).join("\n") : "No exact ship match found.")
    }
    lines.push("", `Compare all 20 verified ships: ${SITE}/mekong-cruise-cost-comparison`)
    lines.push(`Request a quote: ${buildQuoteLink({ route, nights, guests, month, source: "a2a" })}`)
    lines.push(`Free draft itinerary check: ${buildQuoteLink({ mode: "itinerary_review", route, nights, guests, month, source: "a2a" })}`)
  }

  lines.push(`Contact: ${CONTACT_EMAIL} · ${CONTACT_PHONE} (reply within 24 hours; VNAT License ${ENTITY_FACTS.vnatLicense}).`)

  return reply({
    result: {
      kind: "message",
      messageId: crypto.randomUUID(),
      role: "agent",
      parts: [{ kind: "text", text: lines.join("\n") }],
    },
  })
}
