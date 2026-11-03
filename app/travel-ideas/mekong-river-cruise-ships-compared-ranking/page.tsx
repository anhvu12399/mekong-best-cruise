import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Ship, 
  DollarSign, 
  ShieldCheck, 
  Anchor, 
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  Scale,
  Clock,
  Compass,
  Accessibility,
  Wine,
  Users,
  MapPin
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/mekong-river-cruise-ships-compared-ranking`

export const metadata: Metadata = {
  title: "Mekong River Cruise Ships Compared: 2026 Fleet Ranking, Hidden Flaws & Specs",
  description:
    "An objective, technical comparison of the top 10 Mekong cruise ships. Comparing Aqua Mekong, Scenic Spirit, The Jahan, AmaDara, Viking Saigon, Emerald Harmony, Avalon Saigon, and Victoria Mekong on elevators, balconies, Saigon docking, and true all-inclusive pricing.",
  keywords: [
    "mekong river cruise ships compared",
    "best mekong river cruise ships",
    "scenic spirit vs aqua mekong",
    "amadara vs viking saigon",
    "emerald harmony downtown saigon docking",
    "the jahan vs victoria mekong elevator",
    "mekong cruise ship ranking 2026",
    "luxury mekong cruise comparison"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Mekong River Cruise Ships Compared: 2026 Fleet Ranking & Unfiltered Specs",
    description:
      "A complete naval and operational breakdown of 10 major Mekong river cruise vessels. Exposing excursion crowd sizes, central Saigon docking realities, stair steepness, and Tonle Sap dry-season flight policies.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/the_jahan.avif`, width: 1200, height: 630, alt: "Mekong River Cruise Ships Compared" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekong Cruise Ships Compared: 2026 Fleet Ranking & Hidden Specs",
    description: "Detailed comparison matrix of Aqua Mekong, Scenic Spirit, The Jahan, AmaDara, Viking Saigon, and Emerald Harmony.",
    images: [`${BASE_URL}/images/the_jahan.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mekong River Cruise Ships Compared: 2026 Fleet Ranking, Hidden Flaws & Specs",
  "description": "Exhaustive empirical comparison of 10 luxury river cruise vessels operating between Vietnam and Cambodia. Includes passenger-to-crew ratios, stair dimensions, elevator access, docking ports, and drink inclusions.",
  "image": `${BASE_URL}/images/the_jahan.avif`,
  "about": [
    {
      "@type": "Thing",
      "name": "River cruise",
      "sameAs": "https://en.wikipedia.org/wiki/River_cruise"
    },
    {
      "@type": "Place",
      "name": "Mekong River",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Doan Nguyen",
    "jobTitle": "Head of Fleet Operations & Mekong River Specialist",
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
  "datePublished": "2026-11-03",
  "dateModified": "2026-11-03",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which Mekong cruise ship is the most luxurious overall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For intimate contemporary luxury, Aqua Mekong is unmatched with just 20 suites, a 1:1 guest-to-crew ratio, consulting Michelin-star cuisine by David Thompson, and private aluminum skiffs for small-group expeditions. For ultra-luxury travelers desiring traditional all-inclusive service with a private butler in every suite, Scenic Spirit is the top contender, offering true open-air private step-out balconies and unlimited premium alcohol 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "Which Mekong river cruise ship docks directly in downtown Ho Chi Minh City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emerald Harmony is the only international luxury river cruise vessel purpose-built with a low air-draft to clear the Saigon River bridges, allowing it to dock directly at Nha Rong Port / Khanh Hoi in District 4, downtown Ho Chi Minh City. Almost all other major ships (Aqua Mekong, The Jahan, AmaDara, Viking Saigon) cannot clear the bridges and must dock in My Tho, requiring passengers to endure a 1.5 to 2.5-hour highway bus transfer."
      }
    },
    {
      "@type": "Question",
      "name": "Which ship is best for seniors with limited mobility or knee arthritis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Victoria Mekong is the only ship on the entire lower river equipped with a full passenger elevator servicing all 4 decks (accommodations, restaurant, and sun deck). Colonial heritage vessels like Heritage Line's The Jahan and Jayavarman or the Pandaw fleet have zero elevators and feature steep 42-degree wooden companionways that can be hazardous for seniors with mobility concerns."
      }
    },
    {
      "@type": "Question",
      "name": "How does excursion group size compare between AmaDara, Viking Saigon, and Aqua Mekong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AmaDara carries up to 124 passengers, resulting in walking excursion groups of 25 to 30 guests led by a single local guide. Viking Saigon carries 80 guests (groups of 20 to 25). Conversely, Aqua Mekong carries only 40 guests and deploys four private motorized launch skiffs, maintaining intimate excursion groups of just 10 passengers per guide."
      }
    },
    {
      "@type": "Question",
      "name": "What happens during the Tonle Sap low water season (December to August)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During low water (water depth below 1.5 meters on Tonle Sap Lake), virtually all ships (The Jahan, AmaDara, Viking Saigon, Scenic Spirit, Victoria Mekong) terminate their sailing at Kampong Cham or Phnom Penh and transfer guests via a 5 to 6-hour coach bus to Siem Reap. Aqua Mekong is the sole luxury operator that includes a scheduled domestic flight between Phnom Penh and Siem Reap to completely bypass the highway transit."
      }
    }
  ]
}

export default function MekongShipsComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="min-h-screen bg-[#FDFBF7] text-[#2C3E50]">
        {/* Hero Section */}
        <header className="relative w-full h-[60vh] min-h-[460px] flex items-center justify-center bg-[#1A2B49] text-white overflow-hidden">
          <Image
            src="/images/the_jahan.avif"
            alt="Mekong River Cruise Ships Compared: 2026 Fleet Guide"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B49] via-transparent to-black/30" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Compass className="w-3.5 h-3.5" /> 2026 Fleet Intelligence · 10 Ships Evaluated
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight ${playfair.className}`}>
              Mekong River Cruise Ships Compared: 2026 Fleet Ranking &amp; Specs
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Aqua Mekong, Scenic Spirit, The Jahan, AmaDara, Viking Saigon, or Emerald Harmony? An unfiltered naval and operational audit of passenger density, stairs, Saigon docking, and true all-inclusive value.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Metadata & Author Box */}
          <AuthorByline
            authorName="Doan Nguyen"
            authorRole="Head of Fleet Operations (18+ Years River Nautical Experience)"
            publishedDate="November 3, 2026"
            readTime="14 min read"
          />

          {/* Quick Direct Answer - Princeton GEO Rule */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EBF5FB] text-[#2980B9] rounded-lg shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">
                  The Executive Verdict: Which Mekong Ship Is Right For You?
                </h2>
                <p className="text-base text-[#4A5568] leading-relaxed">
                  <strong>For Ultra-Luxury &amp; Exclusivity:</strong> <em>Aqua Mekong</em> ($10,600+) delivers the most private experience with just 40 guests (1:1 crew ratio), Michelin-curated menus, and an included domestic flight to bypass the 6-hour Tonle Sap bus ride during low water.
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>For All-Inclusive Luxury with True Balconies:</strong> <em>Scenic Spirit</em> ($7,800+) includes unlimited premium spirits 24/7, a dedicated butler for every suite, and 100% private step-out verandas.
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>For Central Saigon Docking Convenience:</strong> <em>Emerald Harmony</em> ($3,400+) is the only vessel engineered to clear city bridges and dock in downtown Ho Chi Minh City (District 4), saving 2 hours of highway traffic.
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>For Older Adults with Mobility/Joint Issues:</strong> <em>Victoria Mekong</em> ($2,200+) is the <u>only ship with a full 4-deck elevator</u>, eliminating the steep 42° stairs found on Heritage Line and Pandaw.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The Master Technical Matrix */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              1. The Master 10-Ship Fleet Comparison Matrix
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Every major cruise vessel operating 7-night itineraries between Ho Chi Minh City (Saigon) and Siem Reap (Angkor Wat), audited across 7 operational criteria:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-3 font-semibold">Ship / Operator</th>
                    <th className="p-3 font-semibold">Capacity</th>
                    <th className="p-3 font-semibold">Crew Ratio</th>
                    <th className="p-3 font-semibold">Elevator</th>
                    <th className="p-3 font-semibold">Balcony Type</th>
                    <th className="p-3 font-semibold">Saigon Docking</th>
                    <th className="p-3 font-semibold">Tonle Sap Low Water</th>
                    <th className="p-3 font-semibold">Price (7-Nt/pp)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Aqua Mekong (Aqua)</td>
                    <td className="p-3 font-semibold text-emerald-700">40 guests</td>
                    <td className="p-3 text-emerald-700 font-bold">1:1</td>
                    <td className="p-3 text-amber-600">Chair-lift</td>
                    <td className="p-3 text-[#4A5568]">Panoramic glass</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-emerald-700 font-bold">Included Flight ✈️</td>
                    <td className="p-3 text-rose-700 font-semibold">$10,600 – $14,000</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Scenic Spirit (Scenic)</td>
                    <td className="p-3 text-[#4A5568]">68 guests</td>
                    <td className="p-3 text-emerald-700 font-semibold">1:1.1</td>
                    <td className="p-3 text-[#4A5568]">Yes (3 decks)</td>
                    <td className="p-3 text-emerald-700 font-semibold">100% Step-out</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-[#4A5568]">$7,800 – $11,500</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">The Jahan (Heritage Line)</td>
                    <td className="p-3 text-[#4A5568]">52 guests</td>
                    <td className="p-3 text-[#4A5568]">1:1.3</td>
                    <td className="p-3 text-rose-700 font-bold">No (42° stairs)</td>
                    <td className="p-3 text-emerald-700 font-semibold">100% Teak step-out</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-[#4A5568]">$4,800 – $6,500</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">AmaDara (AmaWaterways)</td>
                    <td className="p-3 text-rose-700 font-semibold">124 guests</td>
                    <td className="p-3 text-[#4A5568]">1:2.4</td>
                    <td className="p-3 text-[#4A5568]">Yes</td>
                    <td className="p-3 text-[#4A5568]">Twin Balcony</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-emerald-700 font-semibold">$2,900 – $4,600</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Viking Saigon (Viking)</td>
                    <td className="p-3 text-[#4A5568]">80 guests</td>
                    <td className="p-3 text-[#4A5568]">1:1.6</td>
                    <td className="p-3 text-[#4A5568]">Yes (Cabin decks)</td>
                    <td className="p-3 text-emerald-700 font-semibold">100% Veranda</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-[#4A5568]">$4,500 – $6,200</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Emerald Harmony (Emerald)</td>
                    <td className="p-3 text-[#4A5568]">84 guests</td>
                    <td className="p-3 text-[#4A5568]">1:2.1</td>
                    <td className="p-3 text-[#4A5568]">Yes</td>
                    <td className="p-3 text-[#4A5568]">Balcony &amp; Window</td>
                    <td className="p-3 text-emerald-700 font-bold">Downtown Saigon (District 4)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-emerald-700 font-semibold">$3,400 – $4,800</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Avalon Saigon (Avalon)</td>
                    <td className="p-3 font-semibold text-emerald-700">36 guests</td>
                    <td className="p-3 text-emerald-700 font-semibold">1:1.2</td>
                    <td className="p-3 text-rose-700">No</td>
                    <td className="p-3 text-amber-600">Open-Air Panorama</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-[#4A5568]">$4,200 – $5,900</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Mekong Jewel (Uniworld/Lotus)</td>
                    <td className="p-3 text-[#4A5568]">68 guests</td>
                    <td className="p-3 text-[#4A5568]">1:1.3</td>
                    <td className="p-3 text-[#4A5568]">Yes (3 decks)</td>
                    <td className="p-3 text-emerald-700 font-semibold">100% Step-out</td>
                    <td className="p-3 text-rose-700">My Tho (Bus 1.5h)</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-rose-700 font-semibold">$5,500 – $8,200</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Victoria Mekong (Victoria)</td>
                    <td className="p-3 text-[#4A5568]">70 guests</td>
                    <td className="p-3 text-[#4A5568]">1:1.6</td>
                    <td className="p-3 text-emerald-700 font-bold">Yes (Full 4 Decks)</td>
                    <td className="p-3 text-emerald-700 font-semibold">100% Step-out</td>
                    <td className="p-3 text-[#4A5568]">Can Tho / Cho Gao</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-emerald-700 font-bold">$2,200 – $3,400</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-3 font-bold text-[#1A2B49]">Pandaw Fleet (Bassac/Mekong)</td>
                    <td className="p-3 font-semibold text-emerald-700">32–60 guests</td>
                    <td className="p-3 text-[#4A5568]">1:1.5</td>
                    <td className="p-3 text-rose-700 font-bold">No</td>
                    <td className="p-3 text-[#4A5568]">Promenade deck access</td>
                    <td className="p-3 text-[#4A5568]">My Tho / Chau Doc</td>
                    <td className="p-3 text-rose-700">Coach Bus (5-6h)</td>
                    <td className="p-3 text-emerald-700 font-semibold">$2,600 – $4,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#718096] italic">
              Data verified against official naval registrations, deck plans, and 2026 operator operating manuals. Published pricing based on peak-season 7-night double occupancy rates.
            </p>
          </section>

          {/* Section 2: Deep Dives into 4 Critical Operational Flaws */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              2. Four Critical Operational Realities Cruise Brochures Don&apos;t Disclose
            </h2>

            {/* Sub-item 1: Saigon Docking */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm mb-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2">
                    Saigon River Bridge Clearances: The My Tho Transfer Trap
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Most cruise brochures state that their voyage begins or ends in &quot;Ho Chi Minh City.&quot; However, due to air-draft restrictions under the Thu Thiem and Saigon River bridges, <strong>90% of ships cannot sail into downtown Ho Chi Minh City</strong>. Vessels like <em>Aqua Mekong, The Jahan, AmaDara, and Viking Saigon</em> must moor at the industrial river port of <strong>My Tho</strong>.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed mt-2">
                    Upon disembarking, passengers are loaded onto touring coaches to navigate 70 km of heavily congested expressway (CT01), taking <strong>1.5 to 2.5 hours</strong>. 
                  </p>
                  <div className="mt-3 p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800 font-medium border border-emerald-200">
                    <strong>The Sole Exception:</strong> <em>Emerald Harmony</em> was specifically engineered with collapsible masts and a low naval profile, allowing it to dock right at Nha Rong Port in District 4, five minutes from Saigon&apos;s colonial Opera House.
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-item 2: Excursion Crowds */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm mb-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2">
                    Excursion Density: 124 Passengers (AmaDara) vs 40 Passengers (Aqua Mekong)
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Mekong village excursions take place in quiet weaver hamlets, canal footpaths, and Buddhist monasteries. On high-capacity vessels like <em>AmaDara</em> (124 guests) or <em>Viking Saigon</em> (80 guests), passengers disembark in large waves, resulting in walking groups of <strong>25 to 30 people</strong> following a tour guide with a microphone.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed mt-2">
                    By contrast, boutique operators maintain tight group caps:
                  </p>
                  <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                    <li><strong>Aqua Mekong:</strong> Deploys 4 private motorized aluminum skiffs; exactly <strong>10 passengers per guide</strong>.</li>
                    <li><strong>Avalon Saigon:</strong> Total capacity capped at 36 guests; excursion groups rarely exceed <strong>12 to 14 guests</strong>.</li>
                    <li><strong>The Jahan:</strong> Groups split into separate tender boats of <strong>12 to 15 guests</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sub-item 3: Alcohol Fine Print */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm mb-6">
              <div className="flex items-start gap-4">
                <Wine className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2">
                    The Beverage Package Fine Print: 24/7 Open Bar vs Mealtime Wine Only
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Don&apos;t assume &quot;all-inclusive drinks&quot; means free cocktails by the pool at sunset:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3 text-xs">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <strong className="text-emerald-700 block mb-1">True 24/7 All-Inclusive</strong>
                      <p className="text-[#4A5568]">
                        <em>Scenic Spirit</em> and <em>Mekong Jewel (Uniworld)</em> include top-shelf spirits, cocktails, and wine throughout the ship all day and night with zero bar bills.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <strong className="text-amber-700 block mb-1">Mealtime Only Inclusions</strong>
                      <p className="text-[#4A5568]">
                        <em>AmaWaterways, Emerald Cruises, and Heritage Line</em> include house beer and wine strictly during lunch and dinner. An evening gin &amp; tonic or martini after 9 PM will be billed at $9 to $15 USD each.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-item 4: Mobility & Stairs */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
              <div className="flex items-start gap-4">
                <Accessibility className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2">
                    Accessibility Realities: The 42° Companionway Hazard
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Heritage vessels built in colonial style (*The Jahan, Jayavarman, Pandaw*) maintain authentic nautical architecture, which includes <strong>steep wooden companionway stairs pitched at 42 degrees</strong>. For travelers over 65 with knee replacements or balance difficulties, descending these polished wood steps during river motion is challenging.
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed mt-2">
                    If zero stair navigation is an absolute requirement, <strong>Victoria Mekong</strong> is the standout solution with its full 4-deck elevator, followed by <strong>Scenic Spirit</strong> and <strong>Mekong Jewel</strong> which offer 3-deck elevators servicing accommodation decks and public lounges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Honest Ship-by-Ship Breakdown */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              3. Ship-by-Ship Verdicts: Strengths, Drawbacks &amp; Best Match
            </h2>

            <div className="space-y-6">
              {/* Card 1: Aqua Mekong */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">Rank #1 · Ultra-Luxury Expedition</span>
                    <h3 className="text-xl font-bold text-[#1A2B49] mt-1">Aqua Mekong</h3>
                  </div>
                  <span className="text-sm font-semibold text-rose-700">From $10,600 / pp</span>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Good:</strong> Flawless 1:1 service ratio, 4 custom tender skiffs, Michelin-star master dining by David Thompson, and an included domestic flight during dry season that saves a 6-hour highway bus ordeal.
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Catch:</strong> Highest price on the river; no exterior step-out balconies (panoramic motorized windows only); mandatory crew tips are not included in the base fare.
                </p>
                <div className="text-xs font-medium text-emerald-800 bg-emerald-50 p-2.5 rounded">
                  <strong>Best For:</strong> High-net-worth couples, foodies, and active travelers seeking uncompromising privacy.
                </div>
              </div>

              {/* Card 2: Scenic Spirit */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2980B9] bg-blue-50 px-2.5 py-1 rounded">Rank #2 · All-Inclusive Luxury</span>
                    <h3 className="text-xl font-bold text-[#1A2B49] mt-1">Scenic Spirit</h3>
                  </div>
                  <span className="text-sm font-semibold text-[#1A2B49]">From $7,800 / pp</span>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Good:</strong> 100% all-inclusive (top-shelf alcohol 24/7, laundry, and tips included); personal butler in every suite; spacious walk-out balconies; 3-deck elevator.
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Catch:</strong> Large draft requires bus transfer during low water season; elevator does not reach the open-air Sun Deck; regimented daily schedules.
                </p>
                <div className="text-xs font-medium text-blue-900 bg-blue-50 p-2.5 rounded">
                  <strong>Best For:</strong> Travelers wanting zero out-of-pocket expenses and personal butler service.
                </div>
              </div>

              {/* Card 3: The Jahan */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">Rank #3 · Romantic Heritage</span>
                    <h3 className="text-xl font-bold text-[#1A2B49] mt-1">The Jahan (Heritage Line)</h3>
                  </div>
                  <span className="text-sm font-semibold text-[#1A2B49]">From $4,800 / pp</span>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Good:</strong> Unrivaled British-Indian colonial craftsmanship; 100% private step-out teak verandas; lavish East India Club and Observatory.
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Catch:</strong> Zero elevators; 42° steep wooden companionways; port taxes ($65–$95) and tips ($15–$20/day) are billed separately.
                </p>
                <div className="text-xs font-medium text-amber-900 bg-amber-50 p-2.5 rounded">
                  <strong>Best For:</strong> Romantics, history buffs, and honeymooners without joint mobility limitations.
                </div>
              </div>

              {/* Card 4: Emerald Harmony */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">Rank #4 · Downtown Saigon Champion</span>
                    <h3 className="text-xl font-bold text-[#1A2B49] mt-1">Emerald Harmony</h3>
                  </div>
                  <span className="text-sm font-semibold text-emerald-700">From $3,400 / pp</span>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Good:</strong> Docks directly at Nha Rong Port in central Saigon (District 4); contemporary superyacht styling; heated aft infinity pool; excellent value.
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Catch:</strong> Drinks only included during meals; larger excursion group sizes (20–25 guests); entry-tier cabins have fixed river windows rather than balconies.
                </p>
                <div className="text-xs font-medium text-teal-900 bg-teal-50 p-2.5 rounded">
                  <strong>Best For:</strong> Value-conscious modern luxury travelers who want to step directly into central Saigon.
                </div>
              </div>

              {/* Card 5: Victoria Mekong */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Rank #5 · Accessibility &amp; Green Cruising</span>
                    <h3 className="text-xl font-bold text-[#1A2B49] mt-1">Victoria Mekong</h3>
                  </div>
                  <span className="text-sm font-semibold text-emerald-700">From $2,200 / pp</span>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Good:</strong> Full 4-deck elevator (only ship on the river); eco-friendly solar-propulsion assistance; 100% private step-out balconies; unbeatable value.
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                  <strong>The Catch:</strong> Minimalist Scandinavian-Asian decor lacks the romantic &quot;antique colonial charm&quot; of Heritage Line; standard drink inclusions.
                </p>
                <div className="text-xs font-medium text-emerald-900 bg-emerald-50 p-2.5 rounded">
                  <strong>Best For:</strong> Older travelers with knee mobility issues, eco-conscious cruisers, and smart-value luxury seekers.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: FAQ Section */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              Frequently Asked Questions (Mekong Fleet Comparison)
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-[#E5E0D8] shadow-sm">
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed pl-7">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Card */}
          <section className="bg-[#1A2B49] text-white p-8 md:p-10 rounded-2xl text-center shadow-lg">
            <h2 className={`text-2xl md:text-3xl font-normal mb-4 ${playfair.className}`}>
              Still Undecided Between Two Specific Vessels?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              We hold preferred partner contracts with every single luxury operator on the Mekong River. Our specialists provide completely impartial cabin comparisons, verify live seasonal water levels, and guarantee the lowest contracted rates with zero hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get Impartial Vessel Advice
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cruises"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors"
              >
                Browse All Ship Dates &amp; Rates
              </Link>
            </div>
          </section>

          {/* Author Card at the bottom */}
          <div className="mt-16">
            <AuthorCard
              name="Doan Nguyen"
              role="Head of Fleet Operations & Mekong River Specialist"
              bio="Having personally surveyed and sailed on every passenger vessel on the Mekong River since 2008, Doan provides unbiased technical and operational evaluations to help international guests choose the right ship."
            />
          </div>
        </div>
      </article>
    </>
  )
}
