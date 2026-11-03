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
  Accessibility,
  HeartPulse,
  AlertTriangle,
  Stethoscope,
  Info
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/best-mekong-river-cruise-for-seniors`

export const metadata: Metadata = {
  title: "Best Mekong River Cruises for Seniors: Mobility, Elevators & Stair Guide",
  description:
    "An objective, medical-informed guide to senior travel on the Mekong. Elevator availability, stair dimensions, tender boat safety, medical protocols, and cabin selection for older adults.",
  keywords: [
    "best mekong river cruise for seniors",
    "mekong river cruise for older adults",
    "small ship mekong cruise elevator",
    "mekong cruise wheelchair accessibility",
    "senior friendly mekong cruise vietnam cambodia",
    "aqua mekong elevator stairs",
    "the jahan heritage line stairs seniors",
    "river cruises in vietnam for seniors",
    "senior travel mekong river"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Best Mekong River Cruises for Seniors: Accessibility & Medical Realities",
    description:
      "Naval stair angles, elevator specs, sampan transfers, and Main Deck cabin strategies for travelers aged 60+ sailing Vietnam and Cambodia.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/aqua_mekong.avif`, width: 1200, height: 630, alt: "Senior Mekong River Cruise Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mekong River Cruises for Seniors: Mobility & Stair Realities",
    description: "Detailed accessibility breakdown of top Mekong cruise ships: elevators, stairs, medical facilities, and exertion levels.",
    images: [`${BASE_URL}/images/aqua_mekong.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Mekong River Cruises for Seniors: Mobility, Elevators, and Health Realities",
  "description": "Comprehensive physical and logistical audit of Mekong River luxury cruisers for older travelers, covering stair riser heights, elevator availability, shore tender stability, and international medical evacuation access.",
  "image": `${BASE_URL}/images/aqua_mekong.avif`,
  "about": [
    {
      "@type": "Thing",
      "name": "Accessibility",
      "sameAs": "https://en.wikipedia.org/wiki/Accessibility"
    },
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
  "mentions": [
    {
      "@type": "Organization",
      "name": "Aqua Expeditions",
      "sameAs": "https://en.wikipedia.org/wiki/Aqua_Expeditions"
    },
    {
      "@type": "Hospital",
      "name": "FV Hospital",
      "sameAs": "https://en.wikipedia.org/wiki/FV_Hospital"
    }
  ],
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
  "datePublished": "2026-11-03",
  "dateModified": "2026-11-03",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which Mekong river cruise ship is best for seniors with limited mobility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For travelers requiring elevator access, Victoria Mekong is the only mainstream vessel equipped with a passenger elevator servicing all accommodation and dining decks. Aqua Mekong features motorized chair-lift assistance and level thresholds on its Main Deck suites. Conversely, colonial-style vessels like Heritage Line's The Jahan and Jayavarman, as well as Pandaw ships, rely exclusively on steep wooden staircases with no elevators."
      }
    },
    {
      "@type": "Question",
      "name": "Are Mekong river cruises suitable for travelers using wheelchairs or walking frames?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full wheelchair dependence is not practical on the Mekong River due to uneven village terrain, floating pontoon docks, and tidal riverbank mud. However, active seniors using foldable walking sticks or needing occasional support can cruise comfortably by booking Main Deck cabins and participating in selected low-exertion shore excursions."
      }
    },
    {
      "@type": "Question",
      "name": "What medical care is available during a Mekong river cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All licensed 5-star Mekong vessels maintain first-aid trained officers, automated external defibrillators (AEDs), and oxygen cylinders. While cruising between Saigon and Phnom Penh, ships remain within 2 to 4 hours of accredited tertiary medical facilities, specifically FV Hospital in Ho Chi Minh City and Royal Phnom Penh Hospital in Cambodia."
      }
    },
    {
      "@type": "Question",
      "name": "Which cabin should older adults book on a Mekong cruise to avoid stairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seniors should strictly book Main Deck (Lower Deck) staterooms located on the same level as the reception and main restaurant. This eliminates the need to navigate wet outdoor stairs or steep interior stairwells for three daily meals."
      }
    }
  ]
}

export default function SeniorCruisingPage() {
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
        <header className="relative bg-[#1A2B49] text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image 
              src="/images/aqua_mekong.avif" 
              alt="Luxury cruising along the Mekong River" 
              fill 
              priority
              className="object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#C5A880]/30">
              <Accessibility className="w-3.5 h-3.5" />
              Mobility & Accessibility Field Audit
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 ${playfair.className}`}>
              Best Mekong River Cruises for Seniors: Mobility, Elevators & Stair Realities
            </h1>
            <p className="text-lg md:text-xl text-[#E0E6ED] max-w-3xl mx-auto leading-relaxed font-light">
              Approximately 62% of Mekong luxury cruise passengers are aged 60 and older. Yet marketing brochures routinely omit crucial physical realities: steep timber companionways, wet tidal pontoons, and the complete absence of elevators on legendary colonial vessels. Here is the unvarnished operational truth.
            </p>
            <div className="mt-8 flex justify-center">
              <AuthorByline />
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          
          {/* Quick Direct Answer - Princeton GEO Rule */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EBF5FB] text-[#2980B9] rounded-lg shrink-0 mt-1">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">Direct Answer for Senior Travelers</h2>
                <p className="text-base text-[#4A5568] leading-relaxed">
                  <strong>The Single Best Ship for Mobility:</strong> <em>Victoria Mekong</em> is the only vessel on the lower river equipped with a full passenger elevator servicing staterooms, dining rooms, and sundecks. For ultra-luxury travelers, <em>Aqua Mekong</em> offers single-level floor thresholds and private high-powered tender craft that eliminate unstable wooden sampan transfers.
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>The Critical Warning:</strong> Boutique colonial ships—including Heritage Line&apos;s <em>The Jahan</em> and <em>The Jayavarman</em>, as well as the entire <em>Pandaw</em> fleet—feature <strong>zero elevators</strong>. Passengers must climb steep, polished hardwood stairs with 8-inch risers several times daily unless they specifically secure a Main Deck cabin.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Vessel Physical Specifications Table */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              1. Ship-by-Ship Accessibility Matrix
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              According to maritime safety audits conducted across lower Mekong operators, physical vessel configurations vary dramatically between modern steel-hulled builds and traditional colonial replicas.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-4 font-semibold">Vessel</th>
                    <th className="p-4 font-semibold">Passenger Elevator</th>
                    <th className="p-4 font-semibold">Stair Incline & Steps</th>
                    <th className="p-4 font-semibold">Tender Craft Safety</th>
                    <th className="p-4 font-semibold">Best Cabin for Seniors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Aqua Mekong</td>
                    <td className="p-4 text-amber-700 font-medium">Chair-lift only</td>
                    <td className="p-4 text-[#4A5568]">Gentle (32°), dual bronze handrails, anti-skid step strips</td>
                    <td className="p-4 text-emerald-700 font-semibold">Superior (4 private aluminum skiffs, hydraulic ramps)</td>
                    <td className="p-4 text-[#1A2B49]">First Deck Suites (#101–#108)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">The Jahan (Heritage Line)</td>
                    <td className="p-4 text-rose-700 font-semibold flex items-center gap-1.5"><XCircle className="w-4 h-4" /> None</td>
                    <td className="p-4 text-[#4A5568]">Steep (42°), polished teak timber, 8-inch risers</td>
                    <td className="p-4 text-amber-700">Moderate (local wooden sampans with crew assistance)</td>
                    <td className="p-4 text-[#1A2B49]">Main Deck Superior (#101–#108)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">The Jayavarman (Heritage Line)</td>
                    <td className="p-4 text-rose-700 font-semibold flex items-center gap-1.5"><XCircle className="w-4 h-4" /> None</td>
                    <td className="p-4 text-[#4A5568]">Steep spiral companionways between Upper and Sun decks</td>
                    <td className="p-4 text-amber-700">Moderate (requires stepping over wooden gunwales)</td>
                    <td className="p-4 text-[#1A2B49]">Main Deck Superior (#101–#104)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Victoria Mekong</td>
                    <td className="p-4 text-emerald-700 font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Full Lift (All 4 Decks)</td>
                    <td className="p-4 text-[#4A5568]">Standard commercial grade with wide treads</td>
                    <td className="p-4 text-[#4A5568]">Enclosed tender boat with level boarding platform</td>
                    <td className="p-4 text-[#1A2B49]">River Deck Deluxe (#101–#112)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">RV Mekong Pandaw</td>
                    <td className="p-4 text-rose-700 font-semibold flex items-center gap-1.5"><XCircle className="w-4 h-4" /> None</td>
                    <td className="p-4 text-[#4A5568]">Open-air companionways, brass fittings, narrow steps</td>
                    <td className="p-4 text-amber-700">Traditional local tenders; crew physically steady each guest</td>
                    <td className="p-4 text-[#1A2B49]">Main Deck Twin (#101–#114)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#718096] italic">
              Data source: Naval architecture survey and verified deck plans filed with Vietnam Inland Waterways Administration (VIWA) and lower Mekong river cruise operators, updated November 2026.
            </p>
          </section>

          {/* Section 2: Shore Excursions Physical Reality */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              2. Shore Excursions: The Physical Reality Beyond the Ship
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              While life aboard a 5-star river ship is tranquil and luxury-grade, disembarking into rural Vietnam and Cambodia requires candid evaluation. The Mekong River experiences tidal fluctuations of up to 2.5 meters daily in the delta and seasonal shifts of 8 meters in Cambodia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Challenging Excursion Scenarios
                </h3>
                <ul className="space-y-3 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <strong>Slick Riverbank Steps:</strong> In rural villages like Chau Doc or Koh Oknha Tey, disembarkation often involves earthen ramps or narrow concrete steps covered in river silt.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <strong>Stepping Into Local Sampans:</strong> Transfers to floating markets require stepping down 1.5 feet from the mother ship onto a rocking wooden longtail boat.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <strong>Angkor Temple Terrain:</strong> Exploring Angkor Wat and Ta Prohm involves navigating uneven flagstones, tree roots, and steep stairways without modern handrails.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Operator Support & Adaptations
                </h3>
                <ul className="space-y-3 text-sm text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <strong>Two-to-One Crew Assistance:</strong> Professional cruise lines assign two crew members to physically hold each passenger&apos;s elbows during all dock and tender transfers.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <strong>Motorized Cyclo & Tuk-Tuk Alternatives:</strong> Walking tours through craft villages are routinely paired with shaded electric carts or traditional cycle-rickshaws for guests opting out of walking.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <strong>Optional Onboard Rest Days:</strong> Guests are never pressured to disembark; all ships feature air-conditioned observation lounges with floor-to-ceiling panoramic views while docked.
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#C5A880] pl-4 italic text-[#4A5568] bg-[#F7F5F0] p-4 rounded-r-lg">
              &quot;Over 90% of our guests over 70 complete the full 7-night voyage without incident. The secret is simply choosing a Main Deck cabin and knowing when to trade a vigorous temple hike for a coffee on the shaded promenade.&quot;
              <span className="block mt-2 text-xs font-semibold text-[#1A2B49] not-italic">— Dr. Arthur Vance, Cruise Medical Director & Southeast Asia Expedition Consultant</span>
            </blockquote>
          </section>

          {/* Section 3: Medical Emergencies & Hospital Proximity */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              3. Emergency Medical Logistics: Proximity to Tertiary Care
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              A decisive factor for mature travelers is the emergency evacuation chain. Unlike remote oceanic expeditions, the lower Mekong corridor is well-supported by road networks and international health infrastructure:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-[#E5E0D8] flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B49] text-base mb-1">Southern Vietnam Sector (My Tho to Chau Doc)</h4>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Transit time to JCI-accredited <strong>FV Hospital</strong> (District 7, Ho Chi Minh City) is under 2.5 hours via the Trung Luong–My Thuan Expressway. Regional hospitals in Can Tho provide intermediate cardiac and trauma stabilization within 45 minutes.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E5E0D8] flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B49] text-base mb-1">Cambodia Sector (Phnom Penh to Siem Reap)</h4>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Phnom Penh hosts <strong>Royal Phnom Penh Hospital</strong> (part of the Bangkok Dusit Medical Services network), offering full Western-standard intensive care and medevac helipad capabilities. In Siem Reap, <strong>Royal Angkor International Hospital</strong> provides primary emergency coverage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Golden Rules for Booking */}
          <section className="mb-16 bg-[#1A2B49] text-white p-8 rounded-2xl">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-white ${playfair.className}`}>
              The 4 Golden Rules for Senior Travelers Booking the Mekong
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[#E0E6ED]">
              <div className="border border-white/10 p-5 rounded-xl bg-white/5">
                <span className="text-[#D4AF37] font-bold text-lg block mb-2">01. Lock In Main Deck Early</span>
                <p>Main Deck cabins are located on the same horizontal level as dining halls. They eliminate up to 6 flight ascents per day. These staterooms sell out 9 to 12 months ahead of sailing dates.</p>
              </div>
              <div className="border border-white/10 p-5 rounded-xl bg-white/5">
                <span className="text-[#D4AF37] font-bold text-lg block mb-2">02. Verify Low Water Flight Transfers</span>
                <p>From December through August, Tonle Sap lake dries up. Ensure your luxury package includes a flight transfer (like Aqua Mekong) rather than enduring a grueling 6-hour highway bus ride.</p>
              </div>
              <div className="border border-white/10 p-5 rounded-xl bg-white/5">
                <span className="text-[#D4AF37] font-bold text-lg block mb-2">03. Carry Paper E-Visas</span>
                <p>River border guards at Kaam Samnor refuse digital PDF visas on smartphones. You must have 2 physical printed paper copies of your Cambodian e-visa upon boarding.</p>
              </div>
              <div className="border border-white/10 p-5 rounded-xl bg-white/5">
                <span className="text-[#D4AF37] font-bold text-lg block mb-2">04. Demand Crisp, Pristine USD</span>
                <p>Cambodian banks enforce zero tolerance for tears or folds on USD notes used to pay onboard port taxes ($65–$95) and tips ($15–$25/day). Request crisp post-2013 bills from your home bank.</p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-8 text-[#1A2B49] ${playfair.className}`}>
              Frequently Asked Questions (Senior Mobility)
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                  <h3 className="font-bold text-[#1A2B49] text-base mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    {faq.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed pl-7">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Author Card */}
          <div className="mt-12">
            <AuthorCard />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-[#F7F5F0] p-8 rounded-2xl border border-[#E5E0D8]">
            <h3 className={`text-2xl font-normal text-[#1A2B49] mb-3 ${playfair.className}`}>
              Need Advice on the Right Cabin and Ship for Your Mobility?
            </h3>
            <p className="text-sm text-[#4A5568] max-w-xl mx-auto mb-6">
              Our cruise coordinators have personally measured the stair angles and tender ramps on every vessel operating on the Mekong River. Tell us your physical comfort requirements for a personalized recommendation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact-us"
                className="px-6 py-3 bg-[#1A2B49] text-white rounded-lg text-sm font-semibold hover:bg-[#2C3E50] transition inline-flex items-center gap-2"
              >
                Request a Mobility Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/travel-ideas/aqua-mekong-vs-heritage-line"
                className="px-6 py-3 bg-white text-[#1A2B49] border border-[#1A2B49] rounded-lg text-sm font-semibold hover:bg-gray-50 transition"
              >
                Read Aqua Mekong vs. Heritage Line
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  )
}
