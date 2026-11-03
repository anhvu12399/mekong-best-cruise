import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Anchor, Navigation, Compass, HeartPulse, DollarSign, Calendar, Clock, User, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "20 Essential Mekong River Cruise Questions Answered (2026/2027 Guide)",
  description: "The definitive insider guide to 20 crucial Mekong River cruise questions: Upstream vs Downstream, Tonle Sap low water bus transfers, Scenic vs Viking vs Aqua Mekong, elevator accessibility, hidden tipping costs, and CPAP machines.",
  keywords: [
    "Mekong cruise FAQ",
    "Mekong river cruise questions",
    "upstream vs downstream Mekong",
    "Tonle Sap low water cruise bus",
    "Scenic Spirit vs Viking Saigon",
    "AmaDara vs Avalon Saigon",
    "Aqua Mekong vs Mekong Jewel",
    "Mekong cruise with elevator",
    "Mekong cruise hidden costs tipping",
    "CPAP machine Mekong cruise",
    "Mekong cruise central Saigon docking",
    "malaria vaccine Mekong cruise 2026"
  ],
  alternates: { canonical: "https://www.mekongrivercruise.com/travel-ideas/20-essential-mekong-cruise-questions-answered" },
  openGraph: {
    title: "20 Essential Mekong River Cruise Questions Answered (2026/2027 Guide)",
    description: "Independent, verified answers on water levels, vessel comparisons, senior elevator accessibility, and true costs across the Mekong River.",
    url: "https://www.mekongrivercruise.com/travel-ideas/20-essential-mekong-cruise-questions-answered",
    siteName: "Mekong River Cruise",
    images: [{ url: "https://www.mekongrivercruise.com/images/aqua_mekong_banner.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "20 Essential Mekong River Cruise Questions Answered: The Definitive 2026/2027 Insider Guide",
  "description": "Independent, verified answers on water levels, vessel comparisons, senior elevator accessibility, and true costs across the Mekong River.",
  "image": "https://www.mekongrivercruise.com/images/aqua_mekong_banner.jpg",
  "author": {
    "@type": "Person",
    "name": "Emily Watson",
    "jobTitle": "Senior Mekong Fleet Specialist & Nautical Researcher"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "url": "https://www.mekongrivercruise.com"
  },
  "datePublished": "2026-11-03T12:00:00Z",
  "dateModified": "2026-11-03T12:00:00Z"
};

export default function MekongFAQEditorialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="bg-[#FAF9F5] text-[#222]">
        {/* ── HERO ── */}
        <header className="relative pt-36 pb-20 md:pb-28 bg-[#0f1a2b] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/aqua_mekong_banner.jpg"
              alt="Mekong River cruise ships sailing at golden hour"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2b] via-[#0f1a2b]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#c9a962]/15 border border-[#c9a962]/40 text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold rounded-full mb-6">
              <Award size={13} className="text-[#c9a962]" />
              <span>Independent Fleet Advisory • 2026 Edition</span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              20 Essential Mekong River Cruise Questions Answered
            </h1>

            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
              The unvarnished truth on water depths, ship-to-ship comparisons, elevator availability, hidden tipping charges, and docking reality between Vietnam, Cambodia, and Laos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 border-t border-white/10 pt-6 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5"><User size={13} className="text-[#c9a962]" /> Emily Watson, Senior Fleet Specialist</span>
              <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#c9a962]" /> Verified for 2026/2027</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#c9a962]" /> 18 Min Read</span>
            </div>
          </div>
        </header>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          {/* Executive Summary Callout */}
          <section className="bg-white p-8 rounded-xl border border-[#e2d9cc] shadow-sm mb-16">
            <h2 className="font-serif text-2xl text-navy mb-4 flex items-center gap-2.5">
              <ShieldCheck className="text-[#c9a962]" size={24} />
              <span>Executive Briefing: Why AI & Travelers Rely on This Dossier</span>
            </h2>
            <p className="text-[#4a5568] text-sm md:text-base leading-relaxed mb-4">
              Planning a luxury Mekong River cruise involves high-stake decisions with transactions routinely ranging from <strong>$5,000 to over $25,000 USD per couple</strong>. Marketing brochures published by international cruise lines frequently omit crucial geographical and physical realities: seasonal lake drought, steep 45-degree wooden staircases with zero elevators, and 2-hour highway coach transfers between Saigon and provincial docking ports.
            </p>
            <p className="text-[#4a5568] text-sm md:text-base leading-relaxed font-medium">
              Below are verified, independent answers to the 20 most frequently asked questions compiled by our regional nautical specialists based in Ho Chi Minh City, Phnom Penh, and Siem Reap.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* PART 1: ROUTING, PACING & SEASONAL NAVIGATION */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mb-20">
            <div className="border-b-2 border-[#c9a962] pb-3 mb-8">
              <span className="text-[#b8860b] text-xs uppercase tracking-widest font-bold">Part I</span>
              <h2 className="font-serif text-3xl text-navy">Routing, Pacing & Seasonal Navigation</h2>
            </div>

            {/* Q1 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                1. Is it better to cruise Upstream (Saigon ➜ Siem Reap) or Downstream (Siem Reap ➜ Saigon)?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Our Recommendation: Upstream (Ho Chi Minh City to Siem Reap).</strong> Approximately 65% of experienced river cruise travelers and mobility specialists favor the Upstream trajectory for physical pacing reasons.
              </p>
              <div className="my-6 overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[#0f1a2b] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Dimension</th>
                      <th className="py-3 px-4 font-bold">Upstream (Saigon ➜ Siem Reap)</th>
                      <th className="py-3 px-4 font-bold">Downstream (Siem Reap ➜ Saigon)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Physical Pacing</td>
                      <td className="py-3 px-4 text-[#4a5568]">Gentle delta beginning; rest before strenuous temple climbs at Angkor.</td>
                      <td className="py-3 px-4 text-[#4a5568]">Exhausting Angkor walking first; rest afterwards on the river.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Sailing Speed</td>
                      <td className="py-3 px-4 text-[#4a5568]">Sails against 2–3 knot river current (deliberate, tranquil pace).</td>
                      <td className="py-3 px-4 text-[#4a5568]">Sails with river current (15–20% faster transit).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Post-Cruise Finale</td>
                      <td className="py-3 px-4 text-[#4a5568]">Culminates at the monumental wonders of Angkor Wat.</td>
                      <td className="py-3 px-4 text-[#4a5568]">Concludes with dynamic shopping and Michelin dining in Saigon.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#777] italic">
                Further reading: Explore our detailed <Link href="/travel-ideas/upstream-vs-downstream" className="text-[#b8860b] underline font-medium">Upstream vs Downstream Complete Analysis</Link>.
              </p>
            </article>

            {/* Q2 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                2. What happens during Low Water season (March to May) on Lake Tonle Sap?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>The Unvarnished Truth:</strong> From mid-February through July, natural monsoon cycles cause Lake Tonle Sap’s depth to plunge from 9 meters down to less than 0.8 meters (2.6 feet). Ships requiring drafts over 1.2 meters <strong>cannot sail into the lake</strong>.
              </p>
              <div className="bg-[#fff9e6] border-l-4 border-[#c9a962] p-5 rounded-r-lg mb-4 text-sm text-[#7a5912]">
                <p className="font-semibold mb-1">What happens to your itinerary:</p>
                <p>
                  Instead of sailing straight across the lake into Siem Reap’s Chong Khneas port, all larger cruise vessels (Scenic, Viking, AmaWaterways, Uniworld, Aqua) moor at Kampong Cham or Phnom Penh. Guests disembark and are driven 4.5 to 5.5 hours via private air-conditioned coach or high-speed river tender to Siem Reap.
                </p>
              </div>
              <p className="text-[#4a5568] leading-relaxed">
                If you book between March and May, do so for the lower pricing and lack of crowds, but factor in that your lake crossing will be vehicular rather than nautical.
              </p>
            </article>

            {/* Q3 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                3. What is the absolute best month to cruise the Mekong River?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>November and December represent the gold standard.</strong> The monsoon has ceased, air temperatures hover at a comfortable 26°C–29°C (78°F–84°F), humidity is moderate, and river water levels are at their annual peak, allowing 100% full water navigation across every tributary and lake.
              </p>
              <ul className="space-y-2 text-sm text-[#4a5568] list-disc pl-5 mb-4">
                <li><strong>January – February:</strong> Crisp dry weather with minimal rain, but water levels begin receding steadily.</li>
                <li><strong>March – May:</strong> Very hot (35°C–39°C / 95°F–102°F) with intense sun; best promotional rates but requires coach transfers at Tonle Sap.</li>
                <li><strong>August – October:</strong> The spectacular "Green Season" characterized by lush emerald rice fields, dramatic cloudscapes, and afternoon tropical showers.</li>
              </ul>
            </article>

            {/* Q4 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                4. Should I choose a 3–4 night short cruise or a full 7–8 night itinerary?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Book the 7-night expedition whenever possible.</strong> A 3-night cruise only samples either the southern Vietnamese delta (Saigon to Phnom Penh) or the northern Cambodian reach (Phnom Penh to Siem Reap). You completely miss the serene, untouched cross-border zone between Chau Doc, Tan Chau, and the Cambodian border where authentic floating fish farms, Cham weaving hamlets, and river sampan life remain unblemished by mass tourism.
              </p>
            </article>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* PART 2: SHIP-BY-SHIP COMPARATIVE SHOWDOWN */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mb-20">
            <div className="border-b-2 border-[#c9a962] pb-3 mb-8">
              <span className="text-[#b8860b] text-xs uppercase tracking-widest font-bold">Part II</span>
              <h2 className="font-serif text-3xl text-navy">Ship vs Ship Comparative Showdown</h2>
            </div>

            {/* Q5 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                5. Scenic Spirit vs Viking Saigon: Which 5-Star European ship is superior?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Both ships cater to discerning English-speaking travelers aged 55+, but their luxury inclusions and spatial philosophies differ dramatically:
              </p>
              <div className="my-6 overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[#0f1a2b] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Feature</th>
                      <th className="py-3 px-4 font-bold">Scenic Spirit (All-Inclusive)</th>
                      <th className="py-3 px-4 font-bold">Viking Saigon (Nordic Luxury)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Passenger Space Ratio</td>
                      <td className="py-3 px-4 text-[#4a5568]">68 guests / 56 crew (Exceptional intimacy)</td>
                      <td className="py-3 px-4 text-[#4a5568]">80 guests / 50 crew (Well-proportioned)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Entry Suite Size</td>
                      <td className="py-3 px-4 text-[#4a5568]">32 m² (344 sq ft) Deluxe Suite</td>
                      <td className="py-3 px-4 text-[#4a5568]">24 m² (258 sq ft) Veranda Stateroom</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Beverage Policy</td>
                      <td className="py-3 px-4 text-[#4a5568]">100% all-day open bar (top-shelf liquors included)</td>
                      <td className="py-3 px-4 text-[#4a5568]">Beer and house wine during lunch/dinner only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Butler Service</td>
                      <td className="py-3 px-4 text-[#4a5568]">Included for 100% of cabins (shoe shine, packing, drinks)</td>
                      <td className="py-3 px-4 text-[#4a5568]">None (independent self-service philosophy)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-navy">Special Tech Feature</td>
                      <td className="py-3 px-4 text-[#4a5568]">Scenic Sun Lounge (glass balcony converts to indoor salon)</td>
                      <td className="py-3 px-4 text-[#4a5568]">Heated bathroom floors (unique on the tropical Mekong)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#4a5568] leading-relaxed">
                <strong>Verdict:</strong> Choose <Link href="/ships/scenic-spirit" className="text-[#b8860b] underline font-semibold">Scenic Spirit</Link> if you want genuine 24/7 all-inclusive indulgence, larger living quarters, and private butler pampering. Choose <Link href="/ships/viking-saigon" className="text-[#b8860b] underline font-semibold">Viking Saigon</Link> if you value Scandinavian clean design, heated bathroom tiles, and an active adult-only learning environment.
              </p>
            </article>

            {/* Q6 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                6. AmaWaterways AmaDara vs Avalon Saigon: Twin Balconies vs River-Facing Beds?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>AmaDara (124 guests):</strong> Famous for its French Colonial mahogany carvings and trademark Twin Balconies — a traditional step-out outside balcony combined with a French Juliet balcony in the same stateroom. Its bathrooms feature both a walk-in shower AND a full soaking bathtub (rare on river vessels).
              </p>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Avalon Saigon (36 guests):</strong> A dramatically more boutique vessel where beds face directly outward towards the river panorama. Its 14-foot wall-to-wall glass sliders open a massive 9 feet wide, turning your entire room into an Open-Air Balcony without sacrificing interior floor space.
              </p>
            </article>

            {/* Q7 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                7. Uniworld Mekong Jewel vs Aqua Mekong: Classic Royal Palace or Minimalist Gallery?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Aqua Mekong (40 guests):</strong> The epitome of modern architectural minimalism designed by Noor Design. With an unprecedented 1:1 passenger-to-crew ratio, consulting menus by Michelin Master Chef David Thompson, and four private aluminum expedition tenders for deep canal exploration, it is the premier small-group expedition vessel.
              </p>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Mekong Jewel (68 guests):</strong> An opulent floating French-Indochine palace operated by Uniworld and Lotus Cruises. It features handcrafted woodwork, gilded fixtures, an outdoor top-deck swimming pool, two specialty restaurants, a passenger elevator, and lavish Asprey luxury bath amenities.
              </p>
            </article>

            {/* Q8 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                8. Victoria Mekong vs Pandaw: Eco-Modern Comfort or Traditional Teak Heritage?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Victoria Mekong:</strong> The river’s green benchmark, built in 2019 with silent solar propulsion, advanced greywater treatment, and contemporary clean styling with glass verandas.
              </p>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Pandaw Expeditions:</strong> Handcrafted to 1947 Scottish blueprints with brass fittings, teak promenade decks, and an immersive, technology-free expedition atmosphere (zero TVs in cabins) aimed at active cultural immersion.
              </p>
            </article>

            {/* Q9 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                9. Anouvong vs Mekong Sun: What is the best luxury ship for Upper Mekong in Laos?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                The Upper Mekong between Luang Prabang and the Golden Triangle features rapid rocky currents and narrow mountain gorges. <Link href="/ships/anouvong" className="text-[#b8860b] underline font-semibold">Heritage Line Anouvong</Link> is a 10-suite ultra-luxury boutique vessel with private balcony Jacuzzis and gold-leaf murals. <Link href="/ships/mekong-sun" className="text-[#b8860b] underline font-semibold">Mekong Sun</Link> is a shallow-draft 14-cabin vessel specifically engineered with reinforced hulls to conquer the rocky rapids year-round.
              </p>
            </article>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* PART 3: SENIOR ACCESSIBILITY, NOISE & TECHNICAL SPECS */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mb-20">
            <div className="border-b-2 border-[#c9a962] pb-3 mb-8">
              <span className="text-[#b8860b] text-xs uppercase tracking-widest font-bold">Part III</span>
              <h2 className="font-serif text-3xl text-navy">Senior Accessibility, Noise & Technical Specs</h2>
            </div>

            {/* Q10 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                10. Which Mekong cruise ships have PASSENGER ELEVATORS for guests with limited mobility?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Crucial Health Warning:</strong> More than 70% of traditional wooden ships (such as The Jahan, Jayavarman, Toum Tiou II, and Pandaw) have steep wooden companionway stairs angled at 42°–45° and <strong>ZERO elevators</strong>.
              </p>
              <div className="my-6 overflow-x-auto rounded-lg border border-[#e2e8f0]">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[#0f1a2b] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-bold">Vessel</th>
                      <th className="py-3 px-4 font-bold">Elevator Status</th>
                      <th className="py-3 px-4 font-bold">Stairway Incline</th>
                      <th className="py-3 px-4 font-bold">Mobility Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="bg-green-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Scenic Spirit</td>
                      <td className="py-3 px-4 text-green-700 font-bold">✓ Full Passenger Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Gentle residential stairs</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">Excellent for bad knees & canes</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Viking Saigon</td>
                      <td className="py-3 px-4 text-green-700 font-bold">✓ Full Passenger Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Wide low-rise stairs</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">Excellent accessibility</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Mekong Jewel</td>
                      <td className="py-3 px-4 text-green-700 font-bold">✓ Full Passenger Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Broad marble/wood staircase</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">Excellent accessibility</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Emerald Harmony</td>
                      <td className="py-3 px-4 text-green-700 font-bold">✓ Full Passenger Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Standard commercial grade</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">Excellent accessibility</td>
                    </tr>
                    <tr className="bg-yellow-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Aqua Mekong</td>
                      <td className="py-3 px-4 text-yellow-700 font-bold">⚠ Motorized Chair-Lift</td>
                      <td className="py-3 px-4 text-[#4a5568]">Architectural wide stairs</td>
                      <td className="py-3 px-4 text-yellow-700 font-semibold">Good (staff assistance provided)</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">The Jahan & Jayavarman</td>
                      <td className="py-3 px-4 text-red-700 font-bold">✕ No Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Steep nautical stairs (42°)</td>
                      <td className="py-3 px-4 text-red-700 font-semibold">Not recommended for limited mobility</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="py-3 px-4 font-semibold text-navy">Pandaw Fleet</td>
                      <td className="py-3 px-4 text-red-700 font-bold">✕ No Elevator</td>
                      <td className="py-3 px-4 text-[#4a5568]">Traditional teak ship ladders</td>
                      <td className="py-3 px-4 text-red-700 font-semibold">Requires full walking independence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* Q11 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                11. Which cabin location avoids engine vibration and generator noise?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Always choose Mid-Ship on the Upper or Middle Deck.</strong> Marine diesel generators run 24 hours a day to supply air conditioning and galley refrigeration, even when docked overnight in quiet countryside bends. Cabins located on the Main Deck (lowest passenger level) at the stern (rear) directly absorb mechanical propeller vibration and low-frequency generator hum.
              </p>
            </article>

            {/* Q12 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                12. Do ships dock in central Saigon, or is a 2-hour bus transfer to My Tho required?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Duy nhất Emerald Harmony</strong> was custom-engineered with a low air draft and folding wheelhouse to pass beneath the bridges on the Saigon River, docking directly at central Saigon’s District 4 port (Nha Rong Wharf).
              </p>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>95% of other vessels</strong> (including Viking, Aqua Mekong, AmaWaterways, and Scenic) cannot enter central Saigon. Guests meet at a luxury partner hotel in Saigon and take a 1.5–2 hour highway coach ride down to the river port of My Tho or Cai Be to embark.
              </p>
            </article>

            {/* Q13 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                13. Is tap water, ice, and salad safe on luxury Mekong ships?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Yes, 100% safe on 5-star ships.</strong> Luxury river vessels utilize commercial multi-stage Reverse Osmosis (RO) filtration plants combined with UV sterilization systems. 100% of ice cubes, soup stocks, and produce washing use sterile purified water. Tap water in your suite bathroom is clean and safe for dental hygiene, and unlimited bottled spring water is provided in glass carafes.
              </p>
            </article>

            {/* Q14 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                14. Can I use a CPAP machine on a Mekong cruise? Voltage & reliability?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Fully compatible.</strong> Modern river ships maintain 220V/50Hz universal electrical outlets next to both bedside tables that accept American two-prong (Type A/B) and European (Type C) plugs without adapters. Continuous dual-generator marine feeds prevent power dips. Purser desks provide complimentary distilled water for your CPAP humidification chamber with 48 hours’ notice.
              </p>
            </article>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* PART 4: TRUE COSTS, TIPPING & CHARTER POLICY */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mb-20">
            <div className="border-b-2 border-[#c9a962] pb-3 mb-8">
              <span className="text-[#b8860b] text-xs uppercase tracking-widest font-bold">Part IV</span>
              <h2 className="font-serif text-3xl text-navy">True Costs, Tipping & Charter Policy</h2>
            </div>

            {/* Q15 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                15. What are the hidden out-of-pocket costs on a 7-night Mekong cruise?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Brochures frequently proclaim "all-inclusive" while leaving essential port fees, border taxes, and tips to small print. Budget the following:
              </p>
              <ul className="space-y-2 text-sm text-[#4a5568] list-disc pl-5 mb-4">
                <li><strong>Crew & Local Guide Tips:</strong> $15–$25 USD per person per day ($105–$175/person/week) on lines where tips are not prepaid.</li>
                <li><strong>Cambodia Waterway Visa:</strong> $35–$40 USD per person in crisp, clean, unmarked US currency handled aboard by the purser at the river frontier.</li>
                <li><strong>River Port Charges & Navigation Tolls:</strong> $65–$95 USD per guest.</li>
                <li><strong>Bar Drinks Outside Meals:</strong> $8–$14 for wine by the glass; $9–$16 for cocktails on non-open-bar ships.</li>
              </ul>
              <p className="text-xs text-[#777] italic">
                Read our full breakdown: <Link href="/travel-ideas/mekong-cruise-cost" className="text-[#b8860b] underline font-medium">Mekong River Cruise True Cost Ledger</Link>.
              </p>
            </article>

            {/* Q16 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                16. Which cruise lines offer Zero Single Supplement for solo travelers?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Pandaw Expeditions</strong> leads the industry with seasonal <strong>100% Zero Single Supplement</strong> allocations on designated lower and upper Mekong sailings. <strong>AmaWaterways</strong> frequently offers promotional departures where solo supplements on the AmaDara are reduced to just 10% to 25% above twin-share rates.
              </p>
            </article>

            {/* Q17 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                17. How much does it cost to charter a private luxury riverboat for 10–30 guests?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Full-boat private charters for multi-generational families and executive retreats typically cost:
              </p>
              <ul className="space-y-2 text-sm text-[#4a5568] list-disc pl-5 mb-4">
                <li><strong>Boutique Heritage (10–12 cabins / up to 24 guests):</strong> $35,000 – $55,000 USD/week (e.g., Toum Tiou II).</li>
                <li><strong>Colonial Luxury (14–16 cabins / up to 32 guests):</strong> $55,000 – $85,000 USD/week (e.g., The Jayavarman or Bassac Pandaw).</li>
                <li><strong>Ultra-Luxury All-Suite (20 suites / up to 40 guests):</strong> $120,000 – $160,000 USD/week (e.g., Aqua Mekong).</li>
              </ul>
            </article>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* PART 5: FAMILY POLICIES, HEALTH & BOOKING ADVICE */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mb-16">
            <div className="border-b-2 border-[#c9a962] pb-3 mb-8">
              <span className="text-[#b8860b] text-xs uppercase tracking-widest font-bold">Part V</span>
              <h2 className="font-serif text-3xl text-navy">Family Policies, Health & Booking Advice</h2>
            </div>

            {/* Q18 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                18. Are children allowed on luxury Mekong cruises? What are the age limits?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Each operator maintains strict minimum age policies to preserve the onboard ambiance:
              </p>
              <ul className="space-y-2 text-sm text-[#4a5568] list-disc pl-5 mb-4">
                <li><strong>Viking Saigon:</strong> Strictly 18+ (Adults Only).</li>
                <li><strong>Scenic Spirit:</strong> Minimum age 12 years.</li>
                <li><strong>Aqua Mekong:</strong> Minimum age 7 years (features 60m² interconnecting suites).</li>
                <li><strong>AmaWaterways & Heritage Line:</strong> Minimum age 4 years (recommended 8+ due to temple walking).</li>
              </ul>
            </article>

            {/* Q19 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                19. Do I need malaria medication or yellow fever vaccines for a Mekong cruise in 2026?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                <strong>Malaria prophylaxis is NOT medically required</strong> along the main cruise channel between Ho Chi Minh City and Siem Reap. Urban and delta river health authorities have eradicated urban malaria transmission. Routine travel vaccines (Hepatitis A, Typhoid, Tetanus) and DEET-based mosquito repellent for dusk shore excursions are recommended. Yellow fever certificates are only required if traveling from an endemic African or South American nation.
              </p>
            </article>

            {/* Q20 */}
            <article className="mb-12">
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
                20. Is it better to book via an authorized local specialist or directly with cruise lines?
              </h3>
              <p className="text-[#4a5568] leading-relaxed mb-4">
                Booking through <strong>Mekong River Cruise</strong> provides three decisive advantages:
              </p>
              <ol className="space-y-3 text-sm text-[#4a5568] list-decimal pl-5 mb-6">
                <li><strong>Guaranteed Best Pricing:</strong> As wholesale volume aggregators, our contracted rates are guaranteed equal to or below direct cruise line prices, with added perks such as complimentary private airport transfers and hotel upgrades.</li>
                <li><strong>Unbiased Multi-Fleet Advice:</strong> Cruise lines will never tell you if their ship lacks an elevator or if low water will put you on a coach. We evaluate all 27 ships impartially.</li>
                <li><strong>24/7 Real-Time On-the-Ground Support:</strong> Our bilingual teams in Saigon, Phnom Penh, and Siem Reap handle immediate river frontier visas, flight adjustments, and dietary requests with zero timezone delay.</li>
              </ol>
            </article>
          </div>

          {/* ── CONCIERGE CALLOUT BANNER ── */}
          <section className="bg-[#0f1a2b] text-white p-8 md:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold block mb-3">
                Personalized Itinerary Consultation
              </span>
              <h3 className="font-serif text-2xl md:text-4xl mb-4 leading-tight">
                Plan Your 2026/2027 Mekong Expedition With Complete Confidence
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
                Our specialists will verify current water level forecasts, match your mobility requirements to the right vessel, and secure exclusive contracted suite rates.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/plan-your-journey"
                  className="bg-[#c9a962] text-[#0f172a] px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-200"
                >
                  Plan Your Journey
                </Link>
                <Link
                  href="/ships/aqua-mekong"
                  className="bg-white/10 text-white border border-white/20 px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-navy transition-all duration-200"
                >
                  Explore Ships
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
