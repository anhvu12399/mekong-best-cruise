import type { Metadata } from "next"
import { buildTitle } from "@/lib/seo"
import Link from "next/link"
import {
  ENTITY_FACTS,
  SITE_URL,
  VERIFIED_SHIPS,
  formatUsd,
} from "@/lib/mekong-catalog"

export const metadata: Metadata = {
  title: buildTitle("Mekong River Cruise Cost Comparison (20 Verified Ships)"),
  description:
    "Compare verified 3-, 4-, and 7-night USD cabin tariffs across 20 Lower Mekong (Vietnam–Cambodia) and Upper Mekong (Laos) cruise ships, plus port fees, visas, and elevator access.",
  alternates: { canonical: `${SITE_URL}/mekong-cruise-cost-comparison` },
  openGraph: {
    url: `${SITE_URL}/mekong-cruise-cost-comparison`,
    title: "Mekong River Cruise Cost Comparison (20 Verified Ships)",
    description:
      "Data-driven Mekong cruise pricing table covering 20 verified partner ships, cabins, onboard elevators, and mandatory extras.",
  },
}

export default function MekongCruiseCostComparisonPage() {
  const lowerShips = VERIFIED_SHIPS.filter((s) => s.corridor === "lower-mekong")
  const upperShips = VERIFIED_SHIPS.filter((s) => s.corridor === "upper-mekong")

  const all7N = VERIFIED_SHIPS.map((s) => s.pricing.sevenNight.from).sort((a, b) => a - b)
  const lowest7N = all7N[0]
  const median7N = all7N[Math.floor(all7N.length / 2)]
  const highest7N = all7N[all7N.length - 1]
  const elevatorShips = VERIFIED_SHIPS.filter((s) => s.hasElevator)

  const faqs = [
    {
      q: "How much does a 7-night Mekong River cruise cost per person?",
      a: `Across our ${VERIFIED_SHIPS.length} verified vessels (reviewed November 2026), 7-night twin-share starting tariffs range from ${formatUsd(lowest7N)} (Victoria Mekong) to ${formatUsd(highest7N)} (Aqua Mekong), with a median of ${formatUsd(median7N)} per person. International flights are excluded.`,
    },
    {
      q: "What mandatory extras are not included in the base cabin fare?",
      a: "Plan for port taxes of US$65–$120 per person (where not bundled), a Cambodia Type T visa of US$30–$35 in crisp USD cash (2013 or newer notes) for Lower Mekong crossings, and recommended crew gratuities of US$15–$20 per guest per day plus US$3–$5/day for local guides.",
    },
    {
      q: "Which Mekong ships have a passenger elevator?",
      a: `Five verified Lower Mekong vessels feature a passenger elevator: ${elevatorShips.map((s) => s.name).join(", ")}. Heritage vessels such as The Jahan, The Jayavarman, and Pandaw ships rely on wooden stairs.`,
    },
    {
      q: "How much do Upper Mekong cruises in Laos cost?",
      a: `Our ${upperShips.length} verified Laos vessels (${upperShips.map((s) => s.name).join(", ")}) range from ${formatUsd(upperShips[0].pricing.sevenNight.from)} to ${formatUsd(upperShips[upperShips.length - 1].pricing.sevenNight.from)} per person for 7 nights between the Golden Triangle, Luang Prabang, and Vientiane.`,
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mekong Cruise Cost Comparison",
            item: `${SITE_URL}/mekong-cruise-cost-comparison`,
          },
        ],
      },
      {
        "@type": "Dataset",
        name: "Mekong River Cruise Ship & Cabin Tariff Dataset (20 Verified Vessels)",
        description:
          "Verified 3-, 4-, and 7-night twin-share USD cabin tariffs, cabin capacities, operators, and accessibility specs across 20 Lower and Upper Mekong cruise ships.",
        url: `${SITE_URL}/mekong-cruise-cost-comparison`,
        dateModified: "2026-11-25",
        creator: { "@id": `${SITE_URL}/#organization` },
        distribution: [
          {
            "@type": "DataDownload",
            encodingFormat: "application/json",
            contentUrl: `${SITE_URL}/api/ships`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#FAF9F5] text-navy min-h-screen">
        {/* Hero */}
        <section className="bg-navy text-white pt-36 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Verified Partner Tariffs · Reviewed November 2026
            </p>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-5 max-w-4xl">
              Mekong River Cruise Cost Comparison ({VERIFIED_SHIPS.length} Verified Ships)
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              Every rate below is a verified starting USD cabin tariff per person (twin-share), sourced directly from official operator schedules. International flights are excluded.
            </p>

            {/* Summary KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white/5 border border-white/15 p-5">
                <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-1">Entry 7-Night Tariff</p>
                <p className="font-serif text-2xl md:text-3xl">{formatUsd(lowest7N)}</p>
                <p className="text-xs text-white/65 mt-1">Victoria Mekong (per person)</p>
              </div>
              <div className="bg-white/5 border border-white/15 p-5">
                <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-1">Median 7-Night Tariff</p>
                <p className="font-serif text-2xl md:text-3xl">{formatUsd(median7N)}</p>
                <p className="text-xs text-white/65 mt-1">Across all {VERIFIED_SHIPS.length} verified ships</p>
              </div>
              <div className="bg-white/5 border border-white/15 p-5">
                <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-1">Ultra-Luxury Ceiling</p>
                <p className="font-serif text-2xl md:text-3xl">{formatUsd(highest7N)}+</p>
                <p className="text-xs text-white/65 mt-1">Aqua Mekong (1:1 crew ratio)</p>
              </div>
              <div className="bg-white/5 border border-white/15 p-5">
                <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-1">Ships With Elevator</p>
                <p className="font-serif text-2xl md:text-3xl">{elevatorShips.length} Vessels</p>
                <p className="text-xs text-white/65 mt-1">Lower Mekong senior-friendly fleet</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-14 space-y-16">
          {/* Lower Mekong Table */}
          <section aria-labelledby="lower-heading">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
              <div>
                <p className="text-[#8B4A2A] text-xs font-bold uppercase tracking-[0.2em] mb-1">
                  Vietnam ↔ Cambodia ({lowerShips.length} Ships)
                </p>
                <h2 id="lower-heading" className="font-serif text-2xl md:text-3xl text-navy">
                  Lower Mekong River Cruise Tariffs
                </h2>
              </div>
              <Link
                href="/review-my-itinerary"
                className="text-xs font-bold uppercase tracking-wider bg-navy text-white px-5 py-3 hover:bg-gold hover:text-navy transition-colors"
              >
                Need Help Choosing? Free Ship Match →
              </Link>
            </div>

            <div className="overflow-x-auto bg-white border border-navy/15 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Ship &amp; Operator</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Capacity</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Key Distinction</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">3 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">4 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">7 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">Per Night (7N)</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/10">
                  {lowerShips.map((s) => (
                    <tr key={s.slug} className="hover:bg-[#FAF9F5]">
                      <th scope="row" className="px-4 py-3.5 font-semibold">
                        <Link href={`/ships/${s.slug}`} className="text-navy hover:text-[#8B4A2A] underline underline-offset-2">
                          {s.name}
                        </Link>
                        <div className="text-xs font-normal text-navy/55">{s.operator}</div>
                      </th>
                      <td className="px-4 py-3.5 whitespace-nowrap text-navy/80">
                        {s.cabins} cabins · {s.guests} guests
                      </td>
                      <td className="px-4 py-3.5 text-xs text-navy/75">
                        {s.style}
                        {s.hasElevator && <span className="ml-1.5 inline-block bg-navy/10 text-navy font-semibold px-2 py-0.5">Elevator</span>}
                        {s.directSaigonDocking && <span className="ml-1.5 inline-block bg-gold/25 text-navy font-semibold px-2 py-0.5">Central Saigon Dock</span>}
                      </td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">{formatUsd(s.pricing.threeNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">{formatUsd(s.pricing.fourNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap font-bold text-navy">{formatUsd(s.pricing.sevenNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap text-navy/70">
                        {formatUsd(Math.round(s.pricing.sevenNight.from / 7))}/n
                      </td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <Link
                          href={`/plan-your-journey?ship=${s.slug}&route=lower-mekong&nights=7`}
                          className="inline-block text-xs font-bold uppercase tracking-wider text-[#8B4A2A] hover:text-navy underline"
                        >
                          Quote →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Upper Mekong Table */}
          <section aria-labelledby="upper-heading">
            <p className="text-[#8B4A2A] text-xs font-bold uppercase tracking-[0.2em] mb-1">
              Laos &amp; Golden Triangle ({upperShips.length} Ships)
            </p>
            <h2 id="upper-heading" className="font-serif text-2xl md:text-3xl text-navy mb-5">
              Upper Mekong River Cruise Tariffs
            </h2>

            <div className="overflow-x-auto bg-white border border-navy/15 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Ship &amp; Operator</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Capacity</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">7-Night Route</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">3 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">4 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">7 Nights</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/10">
                  {upperShips.map((s) => (
                    <tr key={s.slug} className="hover:bg-[#FAF9F5]">
                      <th scope="row" className="px-4 py-3.5 font-semibold">
                        <Link href={`/ships/${s.slug}`} className="text-navy hover:text-[#8B4A2A] underline underline-offset-2">
                          {s.name}
                        </Link>
                        <div className="text-xs font-normal text-navy/55">{s.operator}</div>
                      </th>
                      <td className="px-4 py-3.5 whitespace-nowrap text-navy/80">
                        {s.cabins} cabins · {s.guests} guests
                      </td>
                      <td className="px-4 py-3.5 text-xs text-navy/75">{s.pricing.sevenNight.route}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">{formatUsd(s.pricing.threeNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">{formatUsd(s.pricing.fourNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap font-bold text-navy">{formatUsd(s.pricing.sevenNight.from)}</td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <Link
                          href={`/plan-your-journey?ship=${s.slug}&route=upper-mekong&nights=7`}
                          className="inline-block text-xs font-bold uppercase tracking-wider text-[#8B4A2A] hover:text-navy underline"
                        >
                          Quote →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Extras & Transparency */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy/15 p-7">
              <h2 className="font-serif text-xl text-navy mb-3">Mandatory Out-of-Pocket Costs</h2>
              <ul className="space-y-2.5 text-sm text-navy/80 leading-relaxed">
                <li><strong>Port Taxes:</strong> US$65 – US$120 per person on vessels where port fees are billed separately.</li>
                <li><strong>Cambodia Visa (Type T):</strong> US$30 – US$35 cash per person (crisp USD bills printed 2013 or newer), processed onboard at the Kaam Samnor river border.</li>
                <li><strong>Crew Gratuities:</strong> Recommended US$15 – US$20 per guest per day for ship crew, plus US$3 – US$5 per day for local shore guides.</li>
                <li><strong>Booking Deposit:</strong> Standard 20% – 30% deposit at confirmation; peak November–February cabins sell out 6–10 months ahead.</li>
              </ul>
            </div>

            <div className="bg-navy text-white p-7 flex flex-col justify-between">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
                  Live Machine Feed &amp; Specialist Advice
                </p>
                <h2 className="font-serif text-2xl mb-3">Want a tailored 2-ship comparison for your exact month?</h2>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  Our Ho Chi Minh City desk ({ENTITY_FACTS.legalName}, VNAT License {ENTITY_FACTS.vnatLicense}) checks real-time cabin inventory, seasonal Tonle Sap transfers, and early-booking offers within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/plan-your-journey" className="bg-gold text-navy px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
                  Request Live Quote
                </Link>
                <Link href="/review-my-itinerary" className="border border-white/30 text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors">
                  Check My Draft Itinerary
                </Link>
                <a href="/api/ships" className="border border-white/20 text-white/80 px-4 py-3 text-xs uppercase tracking-wider hover:text-white transition-colors">
                  JSON Feed
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="max-w-4xl">
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-5">Pricing &amp; Fleet FAQs</h2>
            <div className="divide-y divide-navy/15 border-t border-b border-navy/15">
              {faqs.map((f) => (
                <details key={f.q} className="py-4 group">
                  <summary className="font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-gold text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-navy/75 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
