import { API_VERSION, CONTACT_EMAIL, PUBLIC_API_HEADERS, SITE_URL, VERIFIED_SHIPS } from "@/lib/mekong-catalog"

export const dynamic = "force-static"

const STANDARD_RESPONSE_HEADERS = {
  "API-Version": { $ref: "#/components/headers/API-Version" },
  "RateLimit-Limit": { $ref: "#/components/headers/RateLimit-Limit" },
  "RateLimit-Remaining": { $ref: "#/components/headers/RateLimit-Remaining" },
  "RateLimit-Reset": { $ref: "#/components/headers/RateLimit-Reset" },
  "RateLimit-Policy": { $ref: "#/components/headers/RateLimit-Policy" },
  Deprecation: { $ref: "#/components/headers/Deprecation" },
  Sunset: { $ref: "#/components/headers/Sunset" },
}

export function GET() {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "Mekong River Cruise Public Fleet Catalog & Budget Estimator API",
      version: API_VERSION,
      description:
        `Public, no-authentication REST and NLWeb API for filtering ${VERIFIED_SHIPS.length} verified Lower and Upper Mekong river cruise vessels, computing indicative USD cabin budgets with Tonle Sap seasonal water guidance, and generating pre-filled quote or free specialist itinerary-review links.\n\n` +
        `Versioning & Deprecation Policy: Requests may specify the optional \`X-API-Version\` header (default \`${API_VERSION}\`). Every response echoes \`API-Version: ${API_VERSION}\`. Breaking changes are released under a new YYYY-MM version identifier. Any deprecated version or field emits RFC 8594 \`Deprecation\` and \`Sunset\` response headers with a minimum 90-day sunset notice before removal.\n\n` +
        `Rate Limits: Public endpoints allow 120 requests per 60-second window per client and return standard \`RateLimit-Limit\`, \`RateLimit-Remaining\`, \`RateLimit-Reset\`, and \`RateLimit-Policy\` headers.`,
      contact: {
        name: "Mekong River Cruise Concierge",
        url: `${SITE_URL}/docs`,
        email: CONTACT_EMAIL,
      },
    },
    externalDocs: {
      description: "Mekong River Cruise Public API, Versioning, Rate-Limit & MCP Documentation",
      url: `${SITE_URL}/docs`,
    },
    servers: [{ url: SITE_URL, description: "Production" }],
    paths: {
      "/api/ships": {
        get: {
          operationId: "filterMekongShips",
          summary: "Filter verified Mekong river cruise ships by route, nights, max USD tariff, style, or elevator access",
          description: `Searches and filters ${VERIFIED_SHIPS.length} verified Mekong vessels (reviewed November 2026) and returns specifications, 3/4/7-night USD tariffs, canonical URLs, and 1-click pre-filled quote links.`,
          parameters: [
            { $ref: "#/components/parameters/ApiVersionHeader" },
            { name: "route", in: "query", required: false, description: "Corridor filter: lower-mekong, upper-mekong, vietnam-cambodia, laos, or all.", schema: { type: "string" } },
            { name: "nights", in: "query", required: false, description: "Cruise length in nights for pricing and max_price filtering.", schema: { type: "integer", enum: [3, 4, 7], default: 7 } },
            { name: "max_price", in: "query", required: false, description: "Maximum verified per-person twin-share USD tariff for the selected nights.", schema: { type: "integer", minimum: 500 } },
            { name: "style", in: "query", required: false, description: "Style keyword such as ultra-luxury, luxury, heritage, eco, boutique, expedition, elevator, or saigon-docking.", schema: { type: "string" } },
            { name: "elevator", in: "query", required: false, description: "Filter by onboard passenger elevator availability ('true' or 'false').", schema: { type: "boolean" } },
            { name: "q", in: "query", required: false, description: "Optional free-text search across ship name, operator, inclusions, and features.", schema: { type: "string" } },
            { name: "limit", in: "query", required: false, description: "Maximum ships to return (1–25, default 20).", schema: { type: "integer", minimum: 1, maximum: 25, default: 20 } },
          ],
          responses: {
            "200": {
              description: "Filtered list of verified Mekong ships with USD tariffs and pre-filled quote URLs.",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/json": { schema: { $ref: "#/components/schemas/ShipsFilterResponse" } } },
            },
            "400": {
              description: "Invalid query parameter (RFC 9457 Problem Details).",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/problem+json": { schema: { $ref: "#/components/schemas/ProblemDetails" } } },
            },
          },
        },
      },
      "/api/estimate": {
        get: {
          operationId: "estimateMekongCruiseBudget",
          summary: "Estimate Mekong river cruise cabin budget in USD and generate a pre-filled quote link",
          description:
            "Computes low, median, and high per-person and group USD cabin budgets strictly from verified partner ships, includes typical port tax, Cambodia visa, and crew gratuity guidance plus Tonle Sap seasonality, and returns pre-filled quote and itinerary-review URLs.",
          parameters: [
            { $ref: "#/components/parameters/ApiVersionHeader" },
            { name: "route", in: "query", required: false, description: "Corridor: lower-mekong (Vietnam–Cambodia), upper-mekong (Laos), or all.", schema: { type: "string", default: "lower-mekong" } },
            { name: "nights", in: "query", required: false, description: "Cruise length in nights (3, 4, or 7).", schema: { type: "integer", enum: [3, 4, 7], default: 7 } },
            { name: "guests", in: "query", required: false, description: "Number of guests (1–20, default 2).", schema: { type: "integer", minimum: 1, maximum: 20, default: 2 } },
            { name: "style", in: "query", required: false, description: "Optional style filter: ultra-luxury, luxury, heritage, eco, boutique, expedition, elevator.", schema: { type: "string" } },
            { name: "ship", in: "query", required: false, description: "Optional verified ship slug such as aqua-mekong, the-jahan, victoria-mekong, scenic-spirit, or anouvong.", schema: { type: "string" } },
            { name: "month", in: "query", required: false, description: "Optional preferred travel month (e.g. November, February) for Tonle Sap water-level guidance.", schema: { type: "string" } },
          ],
          responses: {
            "200": {
              description: "Verified USD cruise budget estimate, matching vessels, seasonal guidance, and pre-filled inquiry URLs.",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/json": { schema: { $ref: "#/components/schemas/CruiseBudgetEstimate" } } },
            },
            "400": {
              description: "Invalid parameter (RFC 9457 Problem Details).",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/problem+json": { schema: { $ref: "#/components/schemas/ProblemDetails" } } },
            },
          },
        },
      },
      "/ask": {
        post: {
          operationId: "askNlWebMekongAssistant",
          summary: "NLWeb natural-language query endpoint returning Schema.org TouristTrip items",
          description:
            "Accepts a natural-language Mekong river cruise question (ship comparison, route, budget, senior accessibility, seasonality) and returns ranked Schema.org TouristTrip items, an optional USD budget estimate, and pre-filled inquiry links.",
          parameters: [{ $ref: "#/components/parameters/ApiVersionHeader" }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["query"],
                  properties: {
                    query: { type: "string", description: "Natural-language question, e.g. '7-night Vietnam to Cambodia Mekong cruise with elevator for 2 guests'." },
                    limit: { type: "integer", minimum: 1, maximum: 20, default: 6 },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description: "NLWeb response containing Schema.org TouristTrip items and pre-filled action links.",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/json": { schema: { $ref: "#/components/schemas/NlWebResponse" } } },
            },
            "400": {
              description: "Invalid or missing query (RFC 9457 Problem Details).",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/problem+json": { schema: { $ref: "#/components/schemas/ProblemDetails" } } },
            },
          },
        },
        get: {
          operationId: "askNlWebMekongAssistantGet",
          summary: "GET variant of the NLWeb natural-language Mekong cruise search endpoint",
          parameters: [
            { $ref: "#/components/parameters/ApiVersionHeader" },
            { name: "query", in: "query", required: true, description: "Natural-language Mekong cruise query.", schema: { type: "string" } },
            { name: "limit", in: "query", required: false, schema: { type: "integer", minimum: 1, maximum: 20, default: 6 } },
          ],
          responses: {
            "200": {
              description: "NLWeb response containing Schema.org TouristTrip results.",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/json": { schema: { $ref: "#/components/schemas/NlWebResponse" } } },
            },
            "400": {
              description: "Missing or invalid query parameter (RFC 9457 Problem Details).",
              headers: STANDARD_RESPONSE_HEADERS,
              content: { "application/problem+json": { schema: { $ref: "#/components/schemas/ProblemDetails" } } },
            },
          },
        },
      },
    },
    components: {
      parameters: {
        ApiVersionHeader: {
          name: "X-API-Version",
          in: "header",
          required: false,
          description: `Optional date-based API version header (YYYY-MM). Defaults to '${API_VERSION}'. Breaking changes ship under a new version with at least 90 days of RFC 8594 Deprecation and Sunset headers.`,
          schema: {
            type: "string",
            default: API_VERSION,
            example: API_VERSION,
          },
        },
      },
      headers: {
        "API-Version": {
          description: `Active date-based API version serving the response (current: ${API_VERSION}).`,
          schema: { type: "string", example: API_VERSION },
        },
        "RateLimit-Limit": {
          description: "Maximum requests permitted per 60-second window (120).",
          schema: { type: "integer", example: 120 },
        },
        "RateLimit-Remaining": {
          description: "Remaining requests available in the current 60-second window.",
          schema: { type: "integer", example: 119 },
        },
        "RateLimit-Reset": {
          description: "Seconds until the current rate-limit window resets.",
          schema: { type: "integer", example: 60 },
        },
        "RateLimit-Policy": {
          description: "Structured IETF RateLimit policy quota ('120;w=60').",
          schema: { type: "string", example: "120;w=60" },
        },
        Deprecation: {
          description: "RFC 8594 header emitted on deprecated versions or endpoints at least 90 days before removal.",
          schema: { type: "string", example: "true" },
        },
        Sunset: {
          description: "RFC 8594 HTTP-date indicating the exact removal date of a deprecated version or field (minimum 90-day notice window).",
          schema: { type: "string", format: "date-time", example: "Wed, 01 Apr 2027 00:00:00 GMT" },
        },
      },
      schemas: {
        ShipSummary: {
          type: "object",
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            operator: { type: "string" },
            corridor: { type: "string", enum: ["lower-mekong", "upper-mekong"] },
            corridorLabel: { type: "string" },
            style: { type: "string" },
            selectedNights: { type: "integer" },
            selectedRoute: { type: "string" },
            fromUsdPerPerson: { type: "integer" },
            perNightUsdPerPerson: { type: "integer" },
            basis: { type: "string" },
            inclusions: { type: "string" },
            lastVerified: { type: "string" },
            url: { type: "string", format: "uri" },
            prefilledQuoteUrl: { type: "string", format: "uri" },
            shortAnswer: { type: "string" },
          },
        },
        ShipsFilterResponse: {
          type: "object",
          properties: {
            provider: { type: "string" },
            currency: { type: "string" },
            lastVerified: { type: "string" },
            nights: { type: "integer" },
            count: { type: "integer" },
            ships: { type: "array", items: { $ref: "#/components/schemas/ShipSummary" } },
          },
        },
        CruiseBudgetEstimate: {
          type: "object",
          properties: {
            provider: { type: "string" },
            currency: { type: "string" },
            lastVerified: { type: "string" },
            basedOnVerifiedShips: { type: "integer" },
            summary: { type: "string" },
            estimatedPerPersonUsd: {
              type: "object",
              properties: {
                low: { type: "integer" },
                typical: { type: "integer" },
                high: { type: "integer" },
              },
            },
            estimatedGroupTotalUsd: {
              type: "object",
              properties: {
                guests: { type: "integer" },
                low: { type: "integer" },
                typical: { type: "integer" },
                high: { type: "integer" },
              },
            },
            matchingShips: { type: "array", items: { $ref: "#/components/schemas/ShipSummary" } },
            nextSteps: { type: "object" },
          },
        },
        NlWebResponse: {
          type: "object",
          properties: {
            query: { type: "string" },
            provider: { type: "string" },
            summary: { type: "string" },
            results: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  url: { type: "string", format: "uri" },
                  name: { type: "string" },
                  site: { type: "string" },
                  score: { type: "number" },
                  description: { type: "string" },
                  schema_object: { type: "object" },
                },
              },
            },
            nextSteps: { type: "object" },
          },
        },
        ProblemDetails: {
          type: "object",
          required: ["type", "title", "status", "code", "detail"],
          properties: {
            type: { type: "string", format: "uri" },
            title: { type: "string" },
            status: { type: "integer" },
            code: { type: "string" },
            detail: { type: "string" },
            resolution: { type: "string" },
            documentation_url: { type: "string", format: "uri" },
          },
        },
      },
    },
  }

  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      ...PUBLIC_API_HEADERS,
      "content-type": "application/openapi+json; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
