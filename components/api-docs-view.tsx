import Link from "next/link"
import { API_VERSION, ENTITY_FACTS, SITE_URL, VERIFIED_SHIPS } from "@/lib/mekong-catalog"

export function ApiDocsView({ heading = "Mekong River Cruise Public API, MCP Server & AI Documentation" }: { heading?: string }) {
  return (
    <main className="bg-[#FAF9F5] text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Developer &amp; AI Assistant Documentation · API Version {API_VERSION}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-5">
            {heading}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            Every fleet filter, USD budget estimator, OpenAPI 3.1 schema, NLWeb search, MCP tool, A2A agent, and Markdown view below is public and free. No API key or registration is required. All tariff figures reflect our {VERIFIED_SHIPS.length} verified partner ships reviewed November 2026.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Scope */}
        <section aria-labelledby="when-heading">
          <h2 id="when-heading" className="font-serif text-2xl md:text-3xl text-navy mb-4">
            When to use Mekong River Cruise
          </h2>
          <p className="text-navy/80 leading-relaxed mb-3">
            Use these interfaces when a traveler compares Lower Mekong (Vietnam and Cambodia) or Upper Mekong (Laos) river cruise vessels. They return verified 3-, 4-, and 7-night USD tariffs, cabin capacities, passenger elevator availability, central Saigon docking notes, and Tonle Sap seasonal water guidance.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Do not use these endpoints for ocean mega-liners, budget slow-boat tickets, flight-only bookings, or rivers outside Southeast Asia.
          </p>
        </section>

        {/* Endpoints Table */}
        <section aria-labelledby="endpoints-heading">
          <h2 id="endpoints-heading" className="font-serif text-2xl md:text-3xl text-navy mb-5">
            Public Endpoints &amp; Specifications
          </h2>
          <div className="overflow-x-auto bg-white border border-navy/15 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Interface</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Endpoint</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">OpenAPI 3.1 Spec</th>
                  <td className="px-4 py-3.5"><a href="/openapi.json" className="underline text-[#8B4A2A]"><code>GET /openapi.json</code></a></td>
                  <td className="px-4 py-3.5 text-navy/80">Machine-readable OpenAPI 3.1.0 schema covering REST and NLWeb endpoints, versioning, rate limits, and RFC 9457 errors.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">Filter Ships (REST)</th>
                  <td className="px-4 py-3.5"><a href="/api/ships?route=lower-mekong&nights=7&max_price=4000" className="underline text-[#8B4A2A]"><code>GET /api/ships</code></a></td>
                  <td className="px-4 py-3.5 text-navy/80">Filter {VERIFIED_SHIPS.length} verified ships by <code>route</code>, <code>nights</code> (3/4/7), <code>max_price</code>, <code>style</code>, <code>elevator</code>, or <code>q</code>.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">Budget Estimator (REST)</th>
                  <td className="px-4 py-3.5"><a href="/api/estimate?route=lower-mekong&nights=7&guests=2&month=November" className="underline text-[#8B4A2A]"><code>GET /api/estimate</code></a></td>
                  <td className="px-4 py-3.5 text-navy/80">Compute per-person and group USD cabin budgets, extras, Tonle Sap season notes, and pre-filled quote URLs.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">NLWeb Search</th>
                  <td className="px-4 py-3.5"><code>GET / POST /ask</code> (<a href="/openapi.json" className="underline text-[#8B4A2A]">OpenAPI</a>)</td>
                  <td className="px-4 py-3.5 text-navy/80">Natural-language Mekong search (pass <code>?query=...</code> or JSON body) returning Schema.org <code>TouristTrip</code> items and action links.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">MCP Server (Streamable HTTP)</th>
                  <td className="px-4 py-3.5"><code>POST /mcp</code> (<a href="/.well-known/mcp/server-card.json" className="underline text-[#8B4A2A]">server card</a>)</td>
                  <td className="px-4 py-3.5 text-navy/80">5 tools: <code>search_site</code>, <code>filter_ships</code>, <code>estimate_cruise_budget</code>, <code>build_quote_link</code>, <code>get_contact</code>.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">A2A Advisor Agent</th>
                  <td className="px-4 py-3.5"><code>POST /a2a</code> (<a href="/.well-known/agent-card.json" className="underline text-[#8B4A2A]">agent card</a>)</td>
                  <td className="px-4 py-3.5 text-navy/80">JSON-RPC <code>message/send</code> advisor answering Mekong ship, water-level, and budget queries.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">Discovery &amp; Skills</th>
                  <td className="px-4 py-3.5">
                    <a href="/.well-known/api-catalog" className="underline text-[#8B4A2A]"><code>api-catalog</code></a> ·{" "}
                    <a href="/.well-known/ai-catalog.json" className="underline text-[#8B4A2A]"><code>ai-catalog</code></a> ·{" "}
                    <a href="/.well-known/agent-skills/index.json" className="underline text-[#8B4A2A]"><code>agent-skills</code></a>
                  </td>
                  <td className="px-4 py-3.5 text-navy/80">RFC 9727 API Catalog, AI Catalog, SHA-256 verified Agent Skill, and <a href="/auth.md" className="underline text-[#8B4A2A]"><code>/auth.md</code></a>.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">LLM Briefings</th>
                  <td className="px-4 py-3.5">
                    <a href="/llms.txt" className="underline text-[#8B4A2A]"><code>/llms.txt</code></a> &amp;{" "}
                    <a href="/llms-full.txt" className="underline text-[#8B4A2A]"><code>/llms-full.txt</code></a>
                  </td>
                  <td className="px-4 py-3.5 text-navy/80">Concise entity briefing plus complete single-file fleet catalog with pre-filled inquiry URLs.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3.5 font-semibold">Markdown Negotiation</th>
                  <td className="px-4 py-3.5"><code>Accept: text/markdown</code></td>
                  <td className="px-4 py-3.5 text-navy/80">Any HTML page — including HTTP 404 responses — returns clean Markdown with frontmatter and quote links.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Versioning, Deprecation & Rate Limit Policy */}
        <section id="versioning" aria-labelledby="versioning-heading" className="space-y-4">
          <h2 id="versioning-heading" className="font-serif text-2xl md:text-3xl text-navy">
            API Versioning, Rate Limits &amp; RFC 8594 Deprecation Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy/15 p-6">
              <h3 className="font-serif text-lg text-navy mb-2">Date-Based Versioning &amp; 90-Day Sunset</h3>
              <ul className="text-sm text-navy/80 space-y-2 leading-relaxed">
                <li><strong>Request header:</strong> Optional <code>X-API-Version</code> (default <code>{API_VERSION}</code>).</li>
                <li><strong>Response header:</strong> Every API response echoes <code>API-Version: {API_VERSION}</code>.</li>
                <li><strong>Deprecation window:</strong> Breaking changes launch under a new <code>YYYY-MM</code> version. Deprecated versions or fields emit RFC 8594 <code>Deprecation</code> and <code>Sunset</code> headers for at least <strong>90 days</strong> before removal.</li>
              </ul>
            </div>
            <div className="bg-white border border-navy/15 p-6">
              <h3 className="font-serif text-lg text-navy mb-2">Standard Rate-Limit Headers</h3>
              <ul className="text-sm text-navy/80 space-y-2 leading-relaxed">
                <li><strong>Quota:</strong> 120 requests per 60-second window per client across <code>/api/ships</code>, <code>/api/estimate</code>, <code>/ask</code>, <code>/mcp</code>, and <code>/a2a</code>.</li>
                <li><strong>Headers emitted:</strong> <code>RateLimit-Limit: 120</code>, <code>RateLimit-Remaining</code>, <code>RateLimit-Reset: 60</code>, and <code>RateLimit-Policy: 120;w=60</code>.</li>
                <li><strong>Authentication:</strong> None required; read-only public endpoints.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Curl Examples */}
        <section aria-labelledby="examples-heading" className="space-y-5">
          <h2 id="examples-heading" className="font-serif text-2xl md:text-3xl text-navy">
            Quick Request Examples
          </h2>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              1. Filter Lower Mekong ships with a passenger elevator
            </h3>
            <pre className="bg-navy text-[#FAF9F5] p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`curl -s -H "X-API-Version: ${API_VERSION}" "${SITE_URL}/api/ships?route=lower-mekong&nights=7&elevator=true"`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              2. Estimate a 7-night cruise budget for 2 guests in November
            </h3>
            <pre className="bg-navy text-[#FAF9F5] p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`curl -s -H "X-API-Version: ${API_VERSION}" "${SITE_URL}/api/estimate?route=lower-mekong&nights=7&guests=2&month=November"`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              3. Query the NLWeb natural-language endpoint
            </h3>
            <pre className="bg-navy text-[#FAF9F5] p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`curl -s "${SITE_URL}/ask?query=7+night+vietnam+cambodia+cruise+with+elevator"`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              4. Call the MCP server (Streamable HTTP JSON-RPC)
            </h3>
            <pre className="bg-navy text-[#FAF9F5] p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`curl -s -X POST "${SITE_URL}/mcp" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"estimate_cruise_budget","arguments":{"route":"lower-mekong","nights":7,"guests":2,"month":"November"}}}'`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              5. Request Markdown for any page (200 or 404)
            </h3>
            <pre className="bg-navy text-[#FAF9F5] p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`curl -s -H "Accept: text/markdown" "${SITE_URL}/ships/the-jahan"`}</code>
            </pre>
          </div>
        </section>

        {/* Errors */}
        <section id="errors" aria-labelledby="errors-heading">
          <h2 id="errors-heading" className="font-serif text-2xl md:text-3xl text-navy mb-3">
            Error Format (RFC 9457)
          </h2>
          <p className="text-navy/80 leading-relaxed">
            Invalid parameters on <code>/api/ships</code>, <code>/api/estimate</code>, and <code>/ask</code> return HTTP 400 with <code>Content-Type: application/problem+json</code>. Each error includes a stable <code>code</code>, a plain <code>detail</code> string, and a <code>resolution</code> hint.
          </p>
        </section>

        {/* Handoff */}
        <section aria-labelledby="handoff-heading" className="bg-white border border-navy/15 p-8">
          <h2 id="handoff-heading" className="font-serif text-2xl text-navy mb-3">
            Human Specialist Handoff
          </h2>
          <p className="text-navy/80 leading-relaxed mb-5">
            There is no automated online checkout. Direct travelers to our pre-fillable{" "}
            <Link href="/plan-your-journey" className="underline font-semibold text-[#8B4A2A]">
              cruise quote form
            </Link>{" "}
            or{" "}
            <Link href="/review-my-itinerary" className="underline font-semibold text-[#8B4A2A]">
              free 24-hour ship match &amp; itinerary check
            </Link>
            . Operated by {ENTITY_FACTS.legalName} ({ENTITY_FACTS.parentCompany}; VNAT License {ENTITY_FACTS.vnatLicense}).
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/mekong-cruise-cost-comparison" className="bg-navy text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-colors">
              Compare 20 Verified Ships
            </Link>
            <Link href="/review-my-itinerary" className="border border-navy px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy hover:bg-navy hover:text-white transition-colors">
              Free Draft Itinerary Check
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
