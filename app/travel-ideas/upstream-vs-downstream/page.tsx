import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight, CheckCircle2, AlertCircle, Compass, Waves, Calendar, DollarSign } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/upstream-vs-downstream`

export const metadata: Metadata = {
  title: "Upstream vs Downstream Mekong River Cruise: Which Direction Is Better?",
  description:
    "A definitive comparison of Upstream (Saigon to Siem Reap) vs Downstream (Siem Reap to Saigon) Mekong cruises. Local water level realities, Tonle Sap dry season logistics, and essential advice for US travelers.",
  keywords: [
    "Mekong river cruise upstream vs downstream",
    "Saigon to Siem Reap cruise",
    "Siem Reap to Saigon cruise",
    "Tonle Sap lake water levels mekong cruise",
    "best direction for mekong cruise",
    "vietnam cambodia cruise low water season",
    "Mekong cruise for US travelers",
    "Aqua Mekong vs Jayavarman",
    "Kampong Cham cruise transfer",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Upstream vs Downstream Mekong River Cruise: Which Direction Is Better?",
    description:
      "Local hydrological facts, seasonal Tonle Sap lake logistics, and essential advice for US travelers planning a Vietnam-Cambodia luxury cruise.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/hero-3.avif`, width: 1200, height: 630, alt: "Mekong River Cruise Upstream vs Downstream" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upstream vs Downstream Mekong River Cruise",
    description: "The complete guide to choosing your Mekong cruise direction, based on real local river navigation.",
    images: [`${BASE_URL}/images/hero-3.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Upstream vs. Downstream Mekong River Cruise: The Real Local Truth & Essential US Traveler Guide",
  "description": "Comprehensive analysis of cruising upstream vs downstream on the Mekong River, explaining Tonle Sap water fluctuations, border crossings, and booking recommendations for US travelers.",
  "image": `${BASE_URL}/images/hero-3.avif`,
  "author": {
    "@type": "Person",
    "name": "Emily - Mekong Delta Specialist",
    "jobTitle": "Lead Cruise Specialist",
    "worksFor": {
      "@type": "TravelAgency",
      "name": "Mekong River Cruise",
      "url": BASE_URL,
    },
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
    },
  },
  "datePublished": "2026-10-15T00:00:00Z",
  "dateModified": "2026-10-15T00:00:00Z",
  "mainEntityOfPage": PAGE_URL,
}

export default function UpstreamVsDownstreamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="bg-white text-[#222]">

        {/* ── HERO ── */}
        <section className="relative h-[85vh] flex items-end">
          <Image
            src="/images/hero-3.avif"
            alt="Mekong River Cruise sailing at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-bold rounded mb-5">
              Verified Navigation Guide · 7–8 Night Journeys
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
              Upstream vs. Downstream:<br />Which Mekong Cruise Direction Is Better?
            </h1>
            <p className="text-white/80 text-[15px] md:text-lg font-light leading-relaxed max-w-2xl font-serif">
              An unfiltered local guide to water levels, Tonle Sap realities, and travel logistics between Saigon and Siem Reap — written for discerning North American travelers.
            </p>
          </div>
        </section>

        {/* ── DIRECT ANSWER CAPSULE (AI OVERVIEW & QUICK DECISION) ── */}
        <section className="max-w-[840px] mx-auto px-6 -mt-10 relative z-20">
          <div className="bg-[#FAF8F5] border-2 border-gold/40 p-8 md:p-10 shadow-xl rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-gold shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
                The Quick Verdict (Executive Summary)
              </span>
            </div>
            <div className="space-y-4 text-[#333] text-[15px] leading-relaxed font-sans">
              <p>
                <strong>Choose Upstream (Saigon → Siem Reap) if:</strong> You appreciate an emotional "narrative crescendo." You start in the bustling agrarian canals of the Mekong Delta, cross into Cambodia&apos;s colonial capital Phnom Penh, and conclude with the grand archaeological spectacle of Angkor Wat.
              </p>
              <p>
                <strong>Choose Downstream (Siem Reap → Saigon) if:</strong> You want to explore the physically demanding temples of Angkor first while your stamina is fresh, then board the ship to completely unwind, floating gently south toward Saigon.
              </p>
              <div className="mt-4 p-4 bg-white border-l-4 border-[#8B4A2A] text-xs text-[#555] leading-relaxed">
                <strong>Crucial Local Truth (Low Water Season):</strong> From December through mid-August, Tonle Sap Lake is only 3–5 feet (1–1.5m) deep. <em>No large luxury cruise ship can sail directly into Siem Reap.</em> All ships dock at Kampong Cham with an included 4.5-hour luxury air-conditioned coach transfer to Siem Reap. This transfer occurs regardless of whether you sail upstream or downstream.
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER ONE: THE LOCAL REALITY FIRST ── */}
        <section className="max-w-[760px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-4">Part I — Local River Truth</p>
          <h2 className={`text-3xl md:text-4xl leading-tight mb-8 text-navy ${playfair.className}`}>
            How the Mekong actually flows: Geography, current, and lake hydrology
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              The lower Mekong River does not conform to Western vacation brochures. It is a living, pulsating monsoon river system that drains the Tibetan plateau through Yunnan, Laos, Thailand, Cambodia, and finally branches into Vietnam&apos;s Nine Dragons Delta before meeting the East Sea.
            </p>
            <p>
              When booking a classic 7-night cross-border cruise between Ho Chi Minh City (Saigon) and Siem Reap (Angkor), you cover approximately 400 miles (640 km) of riverway. Here is the physical reality of the route:
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-gold/40 my-6 text-sm text-[#333]">
              <li>• <strong>Upstream Navigation (Against Current):</strong> Departing My Tho or Can Tho, your ship cruises against the southward flow (averaging 1.5 to 3 knots depending on season). Sailing is imperceptibly slower, but modern propulsion ensures a remarkably smooth ride.</li>
              <li>• <strong>Downstream Navigation (With Current):</strong> Departing Kampong Cham or Tonle Sap toward Vietnam, the ship is pushed by the current, allowing slightly quicker river transit and earlier docking at certain daily stops.</li>
              <li>• <strong>The International Water Border:</strong> At Vĩnh Xương (Vietnam) and Kaam Samnor (Cambodia), the vessel drops anchor in mid-stream. Passengers remain comfortably on deck with cold beverages while the cruise purser transfers passports to border authorities by tender boat.</li>
            </ul>
          </div>
        </section>

        {/* ── THE TONLE SAP WATER LEVEL EXPLAINED ── */}
        <section className="bg-[#FAF8F5] py-20 border-y border-[#E0D9CE]">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-[#8B4A2A]">
              <Waves className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Hydrological Breakdown</span>
            </div>
            <h3 className={`text-2xl md:text-3xl text-navy mb-6 ${playfair.className}`}>
              High Water vs. Low Water: What happens to your ship?
            </h3>
            <p className="text-[#555] text-[15px] leading-relaxed mb-8 font-light">
              Tonle Sap is the largest freshwater lake in Southeast Asia, and its relationship with the Mekong is unique in the world: it reverses its flow twice a year.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 border border-[#E0D9CE] shadow-sm">
                <div className="text-gold font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> High Water Season
                </div>
                <h4 className="font-serif text-lg text-navy mb-2">Mid-August to November</h4>
                <p className="text-xs text-[#666] leading-relaxed mb-4">
                  Monsoons swell the Mekong, pushing water *backward* up the Tonle Sap River. The lake expands from 1,000 sq miles to over 6,000 sq miles, reaching depths of 30+ feet (9–10m).
                </p>
                <div className="text-[11px] font-bold text-navy uppercase tracking-wider">
                  Impact: Ships sail directly across the lake to Chong Khneas port (Siem Reap). Transfer to town is just 45 minutes.
                </div>
              </div>

              <div className="bg-white p-6 border border-[#E0D9CE] shadow-sm">
                <div className="text-[#8B4A2A] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Low Water Season
                </div>
                <h4 className="font-serif text-lg text-navy mb-2">December to Mid-August</h4>
                <p className="text-xs text-[#666] leading-relaxed mb-4">
                  The lake drains back into the Mekong. Water depth plummets to just 3–5 feet (1–1.5m), exposing mudflats and underwater sandbanks impassable for luxury cruisers.
                </p>
                <div className="text-[11px] font-bold text-[#8B4A2A] uppercase tracking-wider">
                  Impact: Ships dock at Kampong Cham. Passengers transfer via private luxury coach (~4.5 hours) with scenic rest stops.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER TWO: SUY RA GÓC NHÌN CHO KHÁCH DU LỊCH MỸ ── */}
        <section className="max-w-[760px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-4">Part II — The North American Traveler Perspective</p>
          <h2 className={`text-3xl md:text-4xl leading-tight mb-8 text-navy ${playfair.className}`}>
            Practical logistics for travelers flying from the United States & Canada
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              When traveling from Los Angeles, San Francisco, New York, Chicago, or Toronto, you face a 12 to 15-hour time zone shift and a minimum of 18 to 24 hours of travel time through hubs like Tokyo (NRT), Seoul (ICN), Singapore (SIN), or Taipei (TPE).
            </p>

            <h3 className="font-serif text-2xl text-navy pt-4">1. The Jet Lag Strategy (Why Upstream Often Wins)</h3>
            <p>
              Arriving in Ho Chi Minh City (SGN) gives North American travelers access to world-class 5-star hotels (Park Hyatt Saigon, The Reverie, Caravelle) where you can comfortably spend 2 nights acclimatizing before boarding the vessel. Starting in Saigon allows you to recover from jet lag in a metropolitan environment before embarking on early morning excursions.
            </p>

            <h3 className="font-serif text-2xl text-navy pt-4">2. The Physical Stamina Factor (Why Downstream Has Merit)</h3>
            <p>
              Visiting Angkor Wat, Ta Prohm, and Banteay Srei in Siem Reap demands significant walking under tropical sun, climbing steep temple stairs, and navigating uneven stone paths. 
            </p>
            <p>
              If you sail <strong>downstream</strong>, you tackle Angkor Wat during the first 3 days when your enthusiasm and physical energy are at their peak. Once you board the ship, the pace transitions into tranquil relaxation — swimming pools, daily massages, and gentle sampan rides through the delta.
            </p>

            <h3 className="font-serif text-2xl text-navy pt-4">3. Currency, Visas & Tipping Expectations</h3>
            <p>
              American guests frequently ask our specialists about onboard and onshore spending etiquette:
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-[#8B4A2A] text-sm text-[#333]">
              <li>• <strong>US Dollar Acceptance:</strong> In Cambodia, US Dollars are universally accepted (ATMs dispense USD). However, bills must be crisp, uncreased, and free of any tears or markings. In Vietnam, all local markets require Vietnamese Dong (VND), though cruise ships accept major credit cards (Visa/Mastercard).</li>
              <li>• <strong>Tipping Norms:</strong> Unlike US tipping culture, gratuities on river cruises are pooled. Expect to budget $15 to $25 per passenger per day, which covers the entire ship&apos;s nautical crew, hospitality staff, and local guides.</li>
              <li>• <strong>Mobility & ADA Realities:</strong> Rural Mekong ports rely on wooden gangways, tender skiffs, and local motorized sampans. Guests with knee or hip replacements should select ships with hydraulic tenders (like Aqua Mekong) or discuss mobility needs with our team prior to booking.</li>
            </ul>
          </div>
        </section>

        {/* ── SIDE-BY-SIDE COMPARISON TABLE ── */}
        <section className="max-w-[880px] mx-auto px-6 pb-20">
          <h3 className={`text-2xl md:text-3xl text-navy mb-8 text-center ${playfair.className}`}>
            Direct Comparison: Upstream vs. Downstream
          </h3>
          <div className="overflow-x-auto border border-[#E0D9CE] shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#0e2b3d] text-white uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4">Upstream (Saigon → Siem Reap)</th>
                  <th className="p-4">Downstream (Siem Reap → Saigon)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0D9CE] text-[#444] font-light">
                <tr className="bg-white">
                  <td className="p-4 font-bold text-navy">Emotional Narrative</td>
                  <td className="p-4">Starts with simple delta life; builds up to majestic Angkor Wat finale.</td>
                  <td className="p-4">Starts with iconic Angkor; winds down into slow delta relaxation.</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-navy">Physical Energy</td>
                  <td className="p-4">Gradual; temple walking happens at the end of the cruise.</td>
                  <td className="p-4">Strenuous temple exploration first; cruise serves as restorative rest.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-navy">Jet Lag Management</td>
                  <td className="p-4">Ideal for US travelers recovering in 5-star Saigon hotels.</td>
                  <td className="p-4">Requires arriving in Siem Reap alert and ready for early temple sunrises.</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-navy">Low-Water Bus Ride</td>
                  <td className="p-4">Occurs at end of cruise (Kampong Cham to Siem Reap, ~4.5 hrs).</td>
                  <td className="p-4">Occurs on day one (Siem Reap to Kampong Cham, ~4.5 hrs).</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-navy">Excursions Included</td>
                  <td className="p-4">Identical shore excursions (floating markets, pagodas, silk weavers).</td>
                  <td className="p-4">Identical shore excursions in reverse sequential order.</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-4 font-bold text-navy">Recommended Season</td>
                  <td className="p-4">Exceptional from November to April (cool, dry, comfortable).</td>
                  <td className="p-4">Exceptional from November to April (cool, dry, comfortable).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── RECOMMENDED VESSELS FOR NORTH AMERICAN GUESTS ── */}
        <section className="bg-[#FAF8F5] py-20 border-t border-[#E0D9CE]">
          <div className="max-w-[880px] mx-auto px-6 text-center">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.35em] uppercase font-bold mb-4">Curated Fleet Partners</p>
            <h3 className={`text-3xl md:text-4xl text-navy mb-12 ${playfair.className}`}>
              Top Ships Operating Both Directions
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {/* Ship 1 */}
              <div className="bg-white p-6 border border-[#E0D9CE] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image src="/images/aqua_mekong.avif" alt="Aqua Mekong" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-1">Ultra-Luxury Expedition</span>
                  <h4 className="font-serif text-xl text-navy mb-2">Aqua Mekong</h4>
                  <p className="text-xs text-[#666] leading-relaxed mb-4">
                    Floor-to-ceiling glass, consulting Michelin cuisine, 1:1 crew ratio, and private skiffs for remote canal excursions.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-navy mb-4">7 Nights from $9,800/pax (All-Inclusive)</p>
                  <Link href="/ships/aqua-mekong" className="block text-center py-2.5 text-[10px] font-bold uppercase tracking-widest bg-navy text-white hover:bg-gold transition-colors">
                    View Aqua Mekong
                  </Link>
                </div>
              </div>

              {/* Ship 2 */}
              <div className="bg-white p-6 border border-[#E0D9CE] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image src="/images/jayavarman.avif" alt="The Jayavarman" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-1">Colonial Heritage</span>
                  <h4 className="font-serif text-xl text-navy mb-2">The Jayavarman</h4>
                  <p className="text-xs text-[#666] leading-relaxed mb-4">
                    Operated by Heritage Line. Handcrafted teak, French-Indochinese art, 27 balcony staterooms, and intimate boutique atmosphere.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-navy mb-4">7 Nights from $2,403/pax (Verified Tariff)</p>
                  <Link href="/ships/jayavarman" className="block text-center py-2.5 text-[10px] font-bold uppercase tracking-widest bg-navy text-white hover:bg-gold transition-colors">
                    View Jayavarman
                  </Link>
                </div>
              </div>

              {/* Ship 3 */}
              <div className="bg-white p-6 border border-[#E0D9CE] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image src="/images/victoria_mekong.avif" alt="Victoria Mekong" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-1">Eco-Modern Luxury</span>
                  <h4 className="font-serif text-xl text-navy mb-2">Victoria Mekong</h4>
                  <p className="text-xs text-[#666] leading-relaxed mb-4">
                    Green propulsion, 360-degree observation deck, infinity plunge pool, and contemporary spacious suites.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-navy mb-4">7 Nights from $1,690/pax (Eco-Luxury)</p>
                  <Link href="/ships/victoria-mekong" className="block text-center py-2.5 text-[10px] font-bold uppercase tracking-widest bg-navy text-white hover:bg-gold transition-colors">
                    View Victoria Mekong
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED IN-DEPTH PLANNING GUIDES ── */}
        <section className="max-w-[760px] mx-auto px-6 pb-20 pt-10 border-t border-[#E0D9CE]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-4">Essential Further Reading</p>
          <h3 className={`text-2xl md:text-3xl text-navy mb-8 ${playfair.className}`}>
            Continue Your Journey Planning
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              href="/travel-ideas/aqua-mekong-vs-heritage-line"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Vessel Comparison</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Aqua Mekong vs. Heritage Line
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Side-by-side specs, elevator access, skiffs, and verified pricing.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                Compare Ships →
              </span>
            </Link>

            <Link 
              href="/travel-ideas/mekong-cruise-cost"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Budget & Pricing</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Real Mekong Cruise Costs & Hidden Fees
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Transparent breakdown of port dues, visas, tips, and tariffs.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                View Price Guide →
              </span>
            </Link>

            <Link 
              href="/travel-ideas/insider-secrets"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Rare Insights</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  8 Insider Mekong River Secrets
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Chợ Gạo canal bypass, mid-stream border, and pristine dollar rules.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                Read Secrets →
              </span>
            </Link>
          </div>
        </section>

        {/* ── CONVERSION CTA ── */}
        <section className="bg-[#0e2b3d] py-24 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">
              Local Specialist Guidance
            </span>
            <h2 className={`text-3xl md:text-5xl text-white mb-6 leading-tight ${playfair.className}`}>
              Still wondering which direction fits your travel dates?
            </h2>
            <p className="text-white/70 font-serif text-base md:text-lg mb-10 leading-relaxed">
              Our specialists live in Vietnam and Cambodia. Tell us your month of travel, departure city, and preferred travel style — we will check live water levels and recommend the best ship and sailing direction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-your-journey"
                className="w-full sm:w-auto px-10 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                Plan Your Journey With a Specialist
              </Link>
              <a
                href="https://wa.me/13159981998"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors duration-300"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
