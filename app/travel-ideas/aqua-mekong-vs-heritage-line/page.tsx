import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Compass, 
  Ship, 
  Utensils, 
  DollarSign, 
  ShieldCheck, 
  Anchor, 
  Sparkles,
  HelpCircle,
  Accessibility
} from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/aqua-mekong-vs-heritage-line`

export const metadata: Metadata = {
  title: "Aqua Mekong vs. Heritage Line (The Jayavarman & The Jahan): 2026 Comparison",
  description:
    "An unfiltered, data-backed comparison between Aqua Mekong and Heritage Line (The Jayavarman & The Jahan). Naval specs, cabin layouts, elevator accessibility, culinary programs, and pricing breakdown for discerning travelers.",
  keywords: [
    "Aqua Mekong vs Jayavarman",
    "Aqua Mekong vs Heritage Line",
    "Aqua Mekong vs The Jahan",
    "best luxury mekong river cruise",
    "heritage line mekong cruise reviews",
    "aqua mekong price 2026",
    "the jahan mekong cruise cost",
    "mekong cruise comparison",
    "luxury river cruise vietnam cambodia"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Aqua Mekong vs. Heritage Line: The Definitive Luxury River Comparison",
    description:
      "Naval draft realities, tender skiffs vs sampans, elevator access, David Thompson dining, and real pricing between Southeast Asia's top luxury ships.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/aqua_mekong.avif`, width: 1200, height: 630, alt: "Aqua Mekong vs Heritage Line" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Mekong vs. Heritage Line: Which Luxury Cruise Is Right For You?",
    description: "Detailed side-by-side analysis of naval architecture, suites, dining, and rates for Vietnam & Cambodia cruising.",
    images: [`${BASE_URL}/images/aqua_mekong.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Aqua Mekong vs. Heritage Line (The Jayavarman & The Jahan): The Definitive Luxury Comparison",
  "description": "Exhaustive comparison between Aqua Expeditions' Aqua Mekong and Heritage Line's The Jayavarman and The Jahan, evaluating naval draft, tender craft, suite dimensions, culinary directors, accessibility, and total pricing.",
  "image": `${BASE_URL}/images/aqua_mekong.avif`,
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the main difference between Aqua Mekong and Heritage Line (The Jayavarman / The Jahan)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main difference is architectural aesthetic, fleet size, accessibility, and price point. Aqua Mekong is a contemporary boutique minimalist vessel designed by Noor Architects with only 20 panoramic suites (40 guests max), an internal elevator, private motorized aluminum tenders, Michelin-starred consulting chef David Thompson, and an all-inclusive rate starting from $9,800/person. Heritage Line's The Jayavarman (27 cabins) and The Jahan (26 cabins) embrace British-Raj and French-Indochinese colonial nostalgia with dark teak wood, private step-out balconies on every stateroom, French-Indochine fusion dining, no onboard passenger elevator, and promotional rates starting from $2,403 to $3,800+/person."
      }
    },
    {
      "@type": "Question",
      "name": "Does Aqua Mekong or Heritage Line have an elevator for senior travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aqua Mekong is equipped with an internal passenger elevator connecting its guest accommodation and social decks, making it the preferred choice for US seniors or guests with limited mobility. Neither Heritage Line's The Jayavarman nor The Jahan has an elevator; passenger movement between stateroom decks, dining rooms, and sun decks requires navigating spiral or straight wooden staircases."
      }
    },
    {
      "@type": "Question",
      "name": "How do daily shore excursions differ between Aqua Mekong and Heritage Line?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aqua Mekong carries four custom private high-speed aluminum skiffs with eco-friendly low-emission Yamaha four-stroke engines. These skiffs allow small groups of 8-10 guests to navigate shallow mangrove wetlands (such as Prek Toal bird sanctuary) and narrow delta canals directly from the ship. Heritage Line operates traditional locally chartered wooden sampans in Vietnam and air-conditioned coaches/tenders in Cambodia, delivering a classic cultural immersion."
      }
    },
    {
      "@type": "Question",
      "name": "Which cruise offers better dining: Aqua Mekong or Heritage Line?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aqua Mekong's culinary program is curated by Michelin-starred consulting chef David Thompson (formerly of Nahm Bangkok), emphasizing market-fresh Southeast Asian indigenous ingredients, sommelier wine pairings, and fine-dining tasting menus included in the fare. Heritage Line features an accomplished culinary team offering refined French-Indochinese fusion, lavish breakfast/lunch buffets, multi-course plated dinners, and open-air sun deck barbecues, with house wines and local beers included during lunch and dinner."
      }
    },
    {
      "@type": "Question",
      "name": "Is Aqua Mekong worth the higher price over Jayavarman or The Jahan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aqua Mekong is worth the premium (from $9,800 vs. Heritage Line's $2,403–$3,800+) for travelers who prioritize absolute modern boutique privacy (only 40 guests), complete 1:1 crew service, elevator accessibility, complimentary premium spirits and laundry, and shallow-water skiff expeditions. For travelers who cherish romantic colonial romance, teak woodwork, private balconies, and exceptional value without sacrificing 5-star hospitality, Heritage Line remains the benchmark of Indochina river cruising."
      }
    }
  ]
}

export default function AquaMekongVsHeritageLinePage() {
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
      <main className="bg-white text-[#222]">

        {/* ── HERO ── */}
        <section className="relative h-[85vh] flex items-end">
          <Image
            src="/images/aqua_mekong.avif"
            alt="Aqua Mekong cruising the Lower Mekong River"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-20 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-bold rounded mb-5">
              Objective Fleet Comparison · 2026 Operator Data
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6 ${playfair.className}`}>
              Aqua Mekong vs. Heritage Line:<br />
              <span className="text-gold italic font-normal text-3xl md:text-5xl lg:text-6xl">
                The Jayavarman & The Jahan
              </span>
            </h1>
            <p className="text-white/85 text-[15px] md:text-lg font-light leading-relaxed max-w-3xl font-serif">
              Contemporary minimalist boutique luxury versus romantic French-Indochinese colonial grandeur. 
              An unfiltered operational comparison of naval draft, tenders, accessibility, culinary programs, and real tariff baselines.
            </p>
          </div>
        </section>

        {/* ── DIRECT ANSWER CAPSULE (AI OVERVIEW & EXECUTIVE SUMMARY) ── */}
        <section className="max-w-[880px] mx-auto px-6 -mt-10 relative z-20">
          <div className="bg-[#FAF8F5] border-2 border-gold/40 p-8 md:p-10 shadow-xl rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-gold shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
                The Executive Verdict (At A Glance)
              </span>
            </div>
            <div className="space-y-4 text-[#333] text-[15px] leading-relaxed font-sans">
              <p>
                <strong>Aqua Mekong</strong> is Southeast Asia&apos;s most exclusive contemporary boutique expedition vessel. With only <strong>20 outward-facing suites (max 40 guests)</strong>, a 1:1 crew-to-guest ratio, a built-in <strong>passenger elevator</strong>, 4 custom high-speed aluminum skiffs, and tasting menus by Michelin-starred consulting chef David Thompson, it functions like a floating private retreat. It is completely all-inclusive (premium spirits, daily laundry, excursions) with 7-night expeditions starting from <strong>$9,800 to $14,000+ per person</strong>.
              </p>
              <p>
                <strong>Heritage Line (The Jayavarman & The Jahan)</strong> represents the gold standard of romantic French-Indochinese and British-Raj nostalgia. Built with dark teak wood, hand-carved mouldings, antique lithographs, and <strong>private balconies on every single stateroom</strong>, both ships deliver authentic colonial romance with 5-star hospitality. They carry 52 to 54 guests and offer exceptional luxury value, with 7-night verified starting rates from <strong>$2,403 to $3,800+ per person</strong> (Jayavarman) and <strong>$3,000 to $4,800+ per person</strong> (The Jahan).
              </p>
              <div className="mt-4 p-4 bg-white border-l-4 border-gold text-xs text-[#555] leading-relaxed">
                <strong>Key Senior Traveler Takeaway:</strong> If you or your traveling partner require step-free mobility or have knee/hip limitations, <strong>Aqua Mekong is the only ship among these three with a functional passenger elevator</strong>. The Jayavarman and The Jahan require climbing staircases between decks.
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON MATRIX TABLE ── */}
        <section className="max-w-[1000px] mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-3">Side-by-Side Breakdown</p>
            <h2 className={`text-3xl md:text-4xl text-navy ${playfair.className}`}>
              Verified Technical & Lifestyle Specifications
            </h2>
            <p className="text-[#666] text-sm mt-3 font-light">
              Data verified against official operator manifests and marine certifications as of October 2026.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E0D9CE] shadow-sm rounded-sm">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white uppercase tracking-wider text-[11px]">
                  <th className="p-4 md:p-5 border-b border-navy/20 w-1/4">Feature / Metric</th>
                  <th className="p-4 md:p-5 border-b border-navy/20 w-1/4 bg-[#1a2d42] text-gold">Aqua Mekong</th>
                  <th className="p-4 md:p-5 border-b border-navy/20 w-1/4">The Jayavarman</th>
                  <th className="p-4 md:p-5 border-b border-navy/20 w-1/4">The Jahan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0D9CE] text-[#333]">
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Operator</td>
                  <td className="p-4 font-semibold text-navy">Aqua Expeditions</td>
                  <td className="p-4">Heritage Line</td>
                  <td className="p-4">Heritage Line</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Design Aesthetic</td>
                  <td className="p-4">Contemporary Boutique Luxury (Noor Architects, floor-to-ceiling glass)</td>
                  <td className="p-4">French-Colonial 1930s Art Deco & Khmer carvings</td>
                  <td className="p-4">British-Raj & Indian-Indochinese regal elegance</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Capacity / Suites</td>
                  <td className="p-4 font-semibold text-navy">20 Suites (Max 40 guests)</td>
                  <td className="p-4">27 Staterooms (Max 54 guests)</td>
                  <td className="p-4">26 Staterooms & Suites (Max 52 guests)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Crew-to-Guest Ratio</td>
                  <td className="p-4 font-semibold text-navy">1:1 (40 crew for 40 guests)</td>
                  <td className="p-4">1:1.35 (40 crew for 54 guests)</td>
                  <td className="p-4">1:1.3 (40 crew for 52 guests)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Suite Sizes</td>
                  <td className="p-4">322 sq ft (30 m²) across all suites</td>
                  <td className="p-4">215 – 280 sq ft (20 – 26 m²)</td>
                  <td className="p-4">300 – 538 sq ft (28 – 50 m²)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Private Balconies</td>
                  <td className="p-4">
                    12 Suites with outdoor balcony;<br />
                    8 Suites with indoor daybed panorama
                  </td>
                  <td className="p-4 font-semibold text-[#8B4A2A]">100% of cabins have private balconies</td>
                  <td className="p-4 font-semibold text-[#8B4A2A]">100% of cabins have private balconies</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Passenger Elevator</td>
                  <td className="p-4 font-bold text-green-700 bg-green-50/50">
                    ✓ Yes (Services all passenger decks)
                  </td>
                  <td className="p-4 text-red-700 bg-red-50/30">✕ No (Stairs only)</td>
                  <td className="p-4 text-red-700 bg-red-50/30">✕ No (Stairs only)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Vessel Draft</td>
                  <td className="p-4">1.50 meters (4.9 ft) — shallow water advantage</td>
                  <td className="p-4">1.70 meters (5.6 ft)</td>
                  <td className="p-4">1.80 meters (5.9 ft)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Excursion Craft</td>
                  <td className="p-4 font-semibold text-navy">
                    4 private high-speed aluminum skiffs (Yamaha outboards)
                  </td>
                  <td className="p-4">Local wooden sampans & private coaches</td>
                  <td className="p-4">Local wooden sampans & private coaches</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Culinary Director</td>
                  <td className="p-4 font-semibold text-navy">
                    Michelin-starred Consulting Chef David Thompson (Nahm)
                  </td>
                  <td className="p-4">Executive French-Indochinese Chef Team</td>
                  <td className="p-4">Executive French-Indochinese Chef Team</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Beverage Inclusions</td>
                  <td className="p-4 font-semibold text-navy">
                    All-inclusive (Premium spirits, sommelier wines, cocktails)
                  </td>
                  <td className="p-4">House wine & local beer included with meals</td>
                  <td className="p-4">House wine & local beer included with meals</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Laundry Included</td>
                  <td className="p-4 font-semibold text-green-700">✓ Yes (Complimentary daily laundry)</td>
                  <td className="p-4 text-[#777]">✕ A la carte per item</td>
                  <td className="p-4 text-[#777]">✕ A la carte per item</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Onboard Facilities</td>
                  <td className="p-4">Outdoor plunge pool, gym, cinema room, 2 spa suites, observation deck</td>
                  <td className="p-4">Sun deck pool, Club 1930 bar, Henry Mouhot lounge, spa, boutique</td>
                  <td className="p-4">Large pool, East India club, observatory, gym, steam room, spa</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-4 font-bold bg-[#FAF8F5]">Starting Rate (7 Nights)</td>
                  <td className="p-4 font-bold text-navy bg-gold/10">
                    From $9,800 – $14,000+ / person
                  </td>
                  <td className="p-4 font-bold text-[#8B4A2A]">
                    From $2,403 (promo) to $3,800+ / person
                  </td>
                  <td className="p-4 font-bold text-[#8B4A2A]">
                    From $3,000 (promo) to $4,800+ / person
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CHAPTER 1: DESIGN & ATMOSPHERE ── */}
        <section className="max-w-[780px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-3">Part I — Design Philosophy</p>
          <h2 className={`text-3xl md:text-4xl text-navy leading-tight mb-8 ${playfair.className}`}>
            Urban Loft on Water vs. Belle Époque Nostalgia
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              The most immediate difference you experience between these vessels is their sensory atmosphere.
            </p>
            <p>
              <strong>Aqua Mekong</strong> was designed by British-Singaporean firm Noor Architects. Stepping aboard feels like entering a discreet 5-star urban boutique hotel. The interiors prioritize clean architectural lines, sustainable local woods, polished concrete textures, and massive floor-to-ceiling glass walls. There are no floral chintz curtains or carved dragons here; the focus is entirely on framing the dynamic river landscape outside. With only 40 guests, the public spaces—such as the indoor observation lounge and private screening room—often feel like your own private yacht.
            </p>
            <p>
              <strong>The Jayavarman and The Jahan</strong>, conversely, are romantic love letters to the colonial golden age of Indochina travel. Built in Vietnam by master shipwrights, both vessels boast hundreds of square meters of rich dark Burmese teak, hand-soldered brass light switches, vintage maritime clocks, and antique oil paintings. The Jayavarman captures the romantic energy of 1930s French Saigon, centered around its atmospheric &ldquo;Club 1930&rdquo; bar. The Jahan elevates this further with royal Indian-Indochinese motifs inspired by Shah Jahan, including an ornate Rajput-style canopy lounge and an open-air pool deck reminiscent of a colonial palace garden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="relative h-64 border border-[#E0D9CE]">
              <Image
                src="/images/jayavarman_lounge.avif"
                alt="Heritage Line Jayavarman Club 1930 Lounge"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 p-3 text-white text-xs">
                The Jayavarman: 1930s French-colonial teak lounge
              </div>
            </div>
            <div className="relative h-64 border border-[#E0D9CE]">
              <Image
                src="/images/jahan_suite.avif"
                alt="The Jahan British-Raj suite"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 p-3 text-white text-xs">
                The Jahan: Opulent colonial stateroom with private balcony
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 2: OPERATIONAL REALITY (TENDERS, DRAFT & DOCKING) ── */}
        <section className="bg-[#FAF8F5] py-20 border-y border-[#E0D9CE]">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-3 text-[#8B4A2A]">
              <Anchor className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Operational Ground Truth</span>
            </div>
            <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
              Naval Draft, Tender Craft & Tributary Access
            </h2>
            <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
              <p>
                In river expedition cruising, naval specifications directly dictate what you actually get to see every day.
              </p>
              <div className="bg-white p-6 border-l-4 border-gold shadow-sm my-6 space-y-4">
                <h3 className="font-serif text-lg text-navy font-bold">The Skiff Advantage (Aqua Mekong)</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  Aqua Mekong does not dock at crowded municipal jetties for its excursions. Instead, it carries <strong>four custom 10-passenger aluminum skiffs</strong> powered by high-efficiency, low-decibel Yamaha four-stroke engines. These skiffs have an ultra-shallow hull draft that allows them to glide deep into the narrow canals of Giêng Island, explore remote Cham floating fish-farming villages, and penetrate the UNESCO Biosphere bird reserve at Prek Toal where standard cruise tenders cannot operate. Guests board directly from the ship&apos;s aft marina in small, intimate groups.
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#8B4A2A] shadow-sm my-6 space-y-4">
                <h3 className="font-serif text-lg text-navy font-bold">The Authentic Sampan Heritage (Heritage Line)</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  Heritage Line embraces the traditional local way of river exploration. For delta village visits in Sa Đéc and Tân Châu, guests step into <strong>locally built, shaded wooden sampans</strong> operated by resident river folk. This provides a charming, authentic connection with the local community, accompanied by Heritage Line&apos;s expert English-speaking local guides. For overland journeys (such as the Royal Palace in Phnom Penh or Oudong temples), guests travel in private, air-conditioned executive coaches.
                </p>
              </div>

              <p className="text-sm text-[#555]">
                <strong>The Low Water Season Reality (Dec to mid-Aug):</strong> Both Aqua Mekong (1.5m draft) and Heritage Line (1.7m–1.8m draft) encounter Tonle Sap low-water restrictions. When the lake drops to 1–1.5 meters, all ships dock at Kampong Cham on the Cambodian side, with an included 4.5-hour luxury coach transfer to Siem Reap. No large luxury cruise ship can bypass this seasonal hydrological rule.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 3: ACCESSIBILITY & SENIOR TRAVELERS ── */}
        <section className="max-w-[780px] mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-3 text-green-700">
            <Accessibility className="w-5 h-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Mobility & Senior Travel</span>
          </div>
          <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
            Elevator Access: The Deciding Factor for Many Travelers
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              For North American travelers over 60, multi-generational families traveling with grandparents, or anyone with reduced knee or hip mobility, accessibility between decks is often the single most important practical factor.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50/50 border border-green-200 p-6 rounded-sm">
                <div className="flex items-center gap-2 text-green-800 font-bold text-sm mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  Aqua Mekong: Elevator Equipped
                </div>
                <p className="text-xs text-green-950/80 leading-relaxed">
                  Aqua Mekong features an internal passenger elevator connecting the Main Deck (suites), Upper Deck (suites, restaurant, lounge), and Observation Deck. Guests with walking canes or joint stiffness can move effortlessly throughout the ship.
                </p>
              </div>

              <div className="bg-amber-50/50 border border-amber-200 p-6 rounded-sm">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
                  <XCircle className="w-5 h-5 text-amber-700 shrink-0" />
                  Heritage Line: Staircases Only
                </div>
                <p className="text-xs text-amber-950/80 leading-relaxed">
                  Neither The Jayavarman nor The Jahan has an elevator. Movement between cabins, dining salons, lounges, and the sun deck requires climbing stairs. While staff are endlessly helpful with arm assists, travelers who strictly require an elevator should opt for Aqua Mekong.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 4: CULINARY SHOWDOWN ── */}
        <section className="bg-[#FAF8F5] py-20 border-y border-[#E0D9CE]">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-3 text-[#8B4A2A]">
              <Utensils className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Gastronomic Standards</span>
            </div>
            <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
              David Thompson vs. French-Indochinese Master Chefs
            </h2>
            <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
              <p>
                River cruising in Southeast Asia is an intensely culinary journey. Here is how each line approaches daily dining:
              </p>
              <div className="space-y-6 mt-6">
                <div className="bg-white p-6 border border-[#E0D9CE]">
                  <h3 className="font-serif text-lg text-navy font-bold mb-2">Aqua Mekong: Michelin Pedigree</h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    Consulting Chef David Thompson is world-renowned for putting authentic Southeast Asian cuisine on the fine-dining map (earning Michelin stars at Nahm in London and Bangkok). Onboard Aqua Mekong, every dish is an artful celebration of the river: soft-shell crab with green mango, lemongrass-infused braised duck, and river catfish cooked in claypots with Kampot black pepper. Sommelier-paired international boutique wines are included with both lunch and dinner, and top-shelf cocktails in the observation bar are completely complimentary.
                  </p>
                </div>

                <div className="bg-white p-6 border border-[#E0D9CE]">
                  <h3 className="font-serif text-lg text-navy font-bold mb-2">Heritage Line: Grand Colonial Banquets</h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    Dining aboard The Jayavarman (Dining Hall) and The Jahan (Viceregal Dining Hall) recalls the lavish banquets of 19th-century French governors. Breakfast and lunch feature generous gourmet buffets alongside made-to-order stations (fresh Phở noodles, tropical fruits, artisan cheeses). Evenings transition into elegant multi-course plated dinners blending French haute cuisine with Indochinese herbs. Once per cruise, an open-air barbecue feast is prepared on the sun deck under the stars. Free-flow house wines, local beers, and soft drinks are included during lunch and dinner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 5: PRICE & VALUE VERDICT ── */}
        <section className="max-w-[780px] mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-3 text-gold">
            <DollarSign className="w-5 h-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Pricing & Booking Strategy</span>
          </div>
          <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
            Is Aqua Mekong Worth $6,000+ More Per Couple?
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              This is the quintessential question affluent travelers and travel advisors grapple with:
            </p>
            <div className="bg-[#FAF8F5] p-6 border border-[#E0D9CE] space-y-4 text-sm text-[#444] leading-relaxed">
              <p>
                A 7-night classic Vietnam-Cambodia itinerary for two adults costs:
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-gold font-sans text-xs md:text-sm text-[#333]">
                <li>• <strong>Aqua Mekong:</strong> ~$19,600 to $28,000 per couple (Suite, all-inclusive)</li>
                <li>• <strong>Heritage Line The Jahan:</strong> ~$6,000 to $10,000 per couple (Superior / Deluxe Stateroom)</li>
                <li>• <strong>Heritage Line The Jayavarman:</strong> ~$4,800 to $8,000 per couple (Superior / Deluxe Stateroom)</li>
              </ul>
              <p>
                The difference is roughly <strong>$12,000 to $18,000 per cabin</strong>.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-xl text-navy font-bold">Choose Aqua Mekong if:</h3>
              <ul className="space-y-2 text-sm text-[#444] list-disc pl-5">
                <li>You demand an intimate, ultra-private boutique experience with no more than 40 passengers.</li>
                <li>You require an onboard elevator for accessibility or mobility comfort.</li>
                <li>You are an avid food and wine connoisseur who appreciates David Thompson&apos;s culinary philosophy.</li>
                <li>You want complete all-inclusive peace of mind (daily laundry, top-shelf spirits, all transfers).</li>
                <li>You value shallow-draft aluminum skiff exploration into remote wetlands and bird reserves.</li>
              </ul>

              <h3 className="font-serif text-xl text-navy font-bold pt-4">Choose Heritage Line (The Jayavarman or The Jahan) if:</h3>
              <ul className="space-y-2 text-sm text-[#444] list-disc pl-5">
                <li>You fall in love with colonial romance, handcrafted teak woodwork, and antique maritime decor.</li>
                <li>You insist on having your own private step-out open-air balcony in every single room tier.</li>
                <li>You recognize exceptional luxury value—enjoying 5-star service and gourmet dining at roughly one-third the cost of Aqua.</li>
                <li>You do not require an elevator and enjoy the leisurely social charm of a mid-sized boutique vessel (52–54 guests).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── RELATED IN-DEPTH PLANNING GUIDES ── */}
        <section className="max-w-[780px] mx-auto px-6 pb-20 pt-10 border-t border-[#E0D9CE]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-4">Essential Further Reading</p>
          <h3 className={`text-2xl md:text-3xl text-navy mb-8 ${playfair.className}`}>
            Continue Your Journey Planning
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              href="/travel-ideas/upstream-vs-downstream"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Direction Guide</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Upstream vs. Downstream: Which Is Better?
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Real Tonle Sap water levels and jet lag tips for US travelers.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                Read Guide →
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

        {/* ── CONVERSION & BOOKING CONSULTATION CTA ── */}
        <section className="bg-navy text-white py-16 px-6">
          <div className="max-w-[780px] mx-auto text-center space-y-6">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">Authorized Booking Partner</span>
            <h2 className={`text-3xl md:text-4xl text-white ${playfair.className}`}>
              Still Undecided? Speak With a Mekong Specialist
            </h2>
            <p className="text-white/75 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              As an authorized partner for both Aqua Expeditions and Heritage Line, we offer unbiased advice, verified departure dates, and exclusive cabin upgrade incentives with our Best Price Guarantee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/plan-your-journey"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold/90 text-navy font-bold text-xs uppercase tracking-widest rounded-sm transition-all text-center"
              >
                Request Custom Comparison Quote
              </Link>
              <Link
                href="/ships/aqua-mekong"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all text-center"
              >
                View Aqua Mekong Details
              </Link>
              <Link
                href="/ships/jayavarman"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all text-center"
              >
                View The Jayavarman Details
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
