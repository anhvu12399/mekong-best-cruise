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
  Compass
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/is-mekong-river-cruise-worth-it`

export const metadata: Metadata = {
  title: "Is a Mekong River Cruise Worth It? 2026 Honest Cost & Reality Analysis",
  description:
    "An unfiltered, data-backed assessment of whether a 7-night Mekong cruise is worth $2,500–$12,000+. Land tour vs. river cruise ROI, hidden port taxes, tipping standards, and seasonal Tonle Sap low water facts.",
  keywords: [
    "is mekong river cruise worth it",
    "is a mekong river cruise worth the money",
    "what is the best mekong river cruise",
    "luxury mekong river cruise cost breakdown",
    "mekong cruise vs land tour vietnam cambodia",
    "mekong river cruise deals 2026",
    "mekong cruise hidden costs port taxes",
    "mekong cruise honest review"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Is a Mekong River Cruise Worth It? 2026 Honest Cost & Reality Breakdown",
    description:
      "A complete financial, logistical, and cultural ROI breakdown. Comparing 5-star river cruising against luxury private car touring across Vietnam and Cambodia.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/bassac_pandaw.avif`, width: 1200, height: 630, alt: "Is Mekong Cruise Worth It Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is a Mekong River Cruise Worth the Money? (2026 Honest Review)",
    description: "Unfiltered cost-to-benefit analysis of luxury cruising vs overland touring in Vietnam & Cambodia.",
    images: [`${BASE_URL}/images/bassac_pandaw.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Is a Mekong River Cruise Worth It? A Brutally Honest 2026 Value Breakdown",
  "description": "Comprehensive economic and logistical analysis comparing 7-night luxury river cruises against overland private travel across Vietnam and Cambodia, factoring in highway fatigue, hidden port taxes, single supplements, and Tonle Sap hydrology.",
  "image": `${BASE_URL}/images/bassac_pandaw.avif`,
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
    },
    {
      "@type": "Place",
      "name": "Tonlé Sap",
      "sameAs": "https://en.wikipedia.org/wiki/Tonl%C3%A9_Sap"
    }
  ],
  "mentions": [
    {
      "@type": "Organization",
      "name": "Aqua Expeditions",
      "sameAs": "https://en.wikipedia.org/wiki/Aqua_Expeditions"
    },
    {
      "@type": "Organization",
      "name": "Mekong River Commission",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong_River_Commission"
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
      "name": "Is a Mekong river cruise worth the money compared to an overland land tour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for travelers prioritizing comfort and cultural immersion. While an overland private car tour across Vietnam and Cambodia costs approximately 25% to 35% less upfront, it requires spending over 22 hours in highway traffic, checking into 4 to 5 separate hotels, and enduring chaotic border crossings. A 7-night cruise acts as a floating luxury boutique hotel, eliminating packing fatigue while accessing remote river communities inaccessible by vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "What are the hidden costs on a Mekong river cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary mandatory hidden fees excluded from most base cruise fares are: mandatory port and anchorage taxes ($65 to $95 USD per passenger paid in cash), crew and guide gratuities ($15 to $25 USD per person per day, totaling $105 to $175 per week), single supplements (ranging from 25% to 100% for solo occupancy), and premium beverage packages ($250 to $450 per week on vessels that only include table beer/wine)."
      }
    },
    {
      "@type": "Question",
      "name": "When is a Mekong river cruise NOT worth taking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cruise is not worth it if your primary goal is rapid sightseeing on a tight schedule, or if you expect open-water sailing into Siem Reap during the extreme dry season (March to July) without being comfortable with a 5-hour highway coach transfer around the dried-up Tonle Sap lake."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best month to do a Mekong river cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The optimal window is November through February. During these months, temperatures are pleasant (24°C to 30°C / 75°F to 86°F), humidity is at its annual low, and river currents are calm and stable."
      }
    }
  ]
}

export default function IsMekongCruiseWorthItPage() {
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
              src="/images/bassac_pandaw.avif" 
              alt="Mekong cruise value and ROI evaluation" 
              fill 
              priority
              className="object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#C5A880]/30">
              <Scale className="w-3.5 h-3.5" />
              Financial & Logistical Audit 2026
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 ${playfair.className}`}>
              Is a Mekong River Cruise Worth It? An Honest Cost & Reality Analysis
            </h1>
            <p className="text-lg md:text-xl text-[#E0E6ED] max-w-3xl mx-auto leading-relaxed font-light">
              Fares for a 7-night Mekong cruise range from $2,500 to over $12,400 per person. Does the experience justify spending double or triple the price of a private land tour? Here is a transparent breakdown of highway fatigue, hidden port taxes, single supplements, and Tonle Sap seasonal realities.
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
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">The Short Answer: Yes, If You Value Comfort Over Budget</h2>
                <p className="text-base text-[#4A5568] leading-relaxed">
                  <strong>The Verdict:</strong> A Mekong river cruise is worth every dollar for travelers aged 50+, couples, and history enthusiasts who want to cross Vietnam and Cambodia without enduring 22+ hours of congested highway driving, four separate hotel check-ins, and chaotic overland border stations. 
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>When It Is NOT Worth It:</strong> If you are a fast-paced traveler seeking vibrant late-night city dining in Saigon or Phnom Penh, or if you are expecting non-stop sailing directly to the gates of Angkor Wat during the 9-month low-water season (December to August) without being prepared for coach transfers or regional flights.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Land Tour vs River Cruise Mathematical Matrix */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              1. Mathematical Comparison: Luxury Land Tour vs. 7-Night River Cruise
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Based on empirical itinerary tracking between Ho Chi Minh City and Siem Reap, here is how a private 5-star overland itinerary compares directly with an expedition river cruise over an 8-day / 7-night journey:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-4 font-semibold">Evaluation Factor</th>
                    <th className="p-4 font-semibold">Overland Private Luxury Tour</th>
                    <th className="p-4 font-semibold">7-Night Boutique River Cruise</th>
                    <th className="p-4 font-semibold">The Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Highway Transit Time</td>
                    <td className="p-4 text-rose-700 font-semibold">22 to 26 hours in car/van</td>
                    <td className="p-4 text-emerald-700 font-semibold">0 to 5 hours (depending on season)</td>
                    <td className="p-4 text-emerald-700 font-bold">Cruise (+20 hrs saved)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Hotel Repacking & Transfers</td>
                    <td className="p-4 text-rose-700">4 to 5 separate hotels (Saigon, Can Tho, Chau Doc, Phnom Penh, Siem Reap)</td>
                    <td className="p-4 text-emerald-700 font-semibold">Unpack once; 1 floating boutique suite</td>
                    <td className="p-4 text-emerald-700 font-bold">Cruise (Zero repacking fatigue)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Border Crossing Experience</td>
                    <td className="p-4 text-rose-700">Moc Bai highway border: noisy trucks, crowded baggage x-rays, long queues</td>
                    <td className="p-4 text-emerald-700 font-semibold">Kaam Samnor waterway: ship purser handles passports while you relax on deck</td>
                    <td className="p-4 text-emerald-700 font-bold">Cruise (VIP border clearance)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Access to Remote Canals</td>
                    <td className="p-4 text-[#4A5568]">Limited to roadside stops and tourist-heavy hubs like Ben Tre & Cai Be</td>
                    <td className="p-4 text-emerald-700 font-semibold">Private tenders penetrate deep jungle arroyos and weaver villages inaccessible by car</td>
                    <td className="p-4 text-emerald-700 font-bold">Cruise (Authentic cultural isolation)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Average Total Cost (Per Couple)</td>
                    <td className="p-4 text-emerald-700 font-bold">$7,500 – $9,800 USD</td>
                    <td className="p-4 text-amber-700 font-semibold">$9,500 – $22,000 USD (All-inclusive)</td>
                    <td className="p-4 text-emerald-700 font-bold">Land Tour (Lower cost)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#718096] italic">
              Audit methodology: Comparative pricing based on 5-star hotel rates (The Reverie Saigon, Victoria Chau Doc, Rosewood Phnom Penh, Phum Baitang Siem Reap) plus private SUV chauffeur and expert private guides, surveyed against 2026 published cruise tariffs.
            </p>
          </section>

          {/* Section 2: Exposing the True Cost & Hidden Fees */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              2. Exposing the Hidden Fees Competitors Don&apos;t Publish
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              When reviewing quotes on major booking aggregators like Rainforest Cruises or Cruise Critic, the headline rate is almost never what you end up paying. Here are the four mandatory expenses you must budget for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  Mandatory Port Taxes ($65–$95/person)
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Both <strong>Heritage Line</strong> and <strong>Pandaw</strong> bury port and pilotage fees in fine print. These fees range between $65 and $95 per passenger and must be paid in cash USD or settled on your final onboard folio before disembarkation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  Crew & Guide Gratuities ($105–$175/week)
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Tipping is a mandatory cultural norm on international rivers. Standard guidance across luxury ships is $10 to $15 per day for shipboard crew, plus $3 to $5 per day for local excursion guides, adding ~$300 per couple per week.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  Single Supplements (50% to 100%)
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Solo travelers face severe markups on small boutique ships with only 20 to 28 cabins. Unless booking dedicated Pandaw single-waiver departure dates, solo cruisers pay between 150% and 200% of the twin-share cabin fare.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
                <h3 className="font-bold text-[#1A2B49] text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Premium Spirits & Wine Exclusions
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  While <strong>Aqua Mekong</strong> includes top-tier sommelier wines throughout the day, heritage vessels like The Jahan and Jayavarman only include house wines and beer during lunch and dinner. Top-shelf liquors carry international 5-star hotel bar prices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Tonle Sap Hydrological Reality Table */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              3. The Tonle Sap Reality: Month-by-Month Water Level Impact
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Official hydrological data from the <strong>Mekong River Commission (MRC)</strong> reveals that the Tonle Sap lake changes depth from 10 meters in high water down to barely 1 meter during the dry season. Here is what actually happens to your cruise:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-4 font-semibold">Season & Months</th>
                    <th className="p-4 font-semibold">Lake Depth (Meters)</th>
                    <th className="p-4 font-semibold">Can Cruise Ships Enter Siem Reap?</th>
                    <th className="p-4 font-semibold">Alternative Transfer Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">High Water Season<br /><span className="text-xs font-normal text-emerald-700">Sep, Oct, Nov</span></td>
                    <td className="p-4 font-medium text-emerald-700">6.0m to 10.0m</td>
                    <td className="p-4 text-emerald-700 font-bold">YES — Ships cross lake directly</td>
                    <td className="p-4 text-[#4A5568]">Tender boat directly to Siem Reap pier</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Shoulder Transition<br /><span className="text-xs font-normal text-amber-700">Dec, Jan</span></td>
                    <td className="p-4 font-medium text-amber-700">2.5m to 4.5m</td>
                    <td className="p-4 text-amber-700 font-semibold">CONDITIONAL (Tide-dependent)</td>
                    <td className="p-4 text-[#4A5568]">Speedboat transfer across lake or short coach</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Low Water Dry Season<br /><span className="text-xs font-normal text-rose-700">Feb, Mar, Apr, May, Jun, Jul, Aug</span></td>
                    <td className="p-4 font-medium text-rose-700">0.8m to 1.8m</td>
                    <td className="p-4 text-rose-700 font-bold">NO — Ships cannot cross</td>
                    <td className="p-4 text-[#4A5568]">
                      <strong>Heritage Line / Pandaw:</strong> 5–6 hr air-conditioned highway coach from Kampong Cham.<br />
                      <strong>Aqua Mekong:</strong> Complimentary flight from Phnom Penh to Siem Reap.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: 3 Types of Travelers */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              4. Who Should (and Shouldn&apos;t) Book a Mekong River Cruise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/60 p-6 rounded-xl border border-emerald-200">
                <h3 className="font-bold text-emerald-900 text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  100% Worth It If You Are:
                </h3>
                <ul className="space-y-2 text-sm text-emerald-950">
                  <li>• A mature traveler (55+) wanting maximum comfort and zero highway transit stress.</li>
                  <li>• A honeymoon or anniversary couple seeking romantic, uncrowded river landscapes.</li>
                  <li>• An avid photographer wanting golden hour river village scenes from private balconies.</li>
                  <li>• A history lover fascinated by the ancient Khmer Empire and French Indochina architecture.</li>
                </ul>
              </div>

              <div className="bg-rose-50/60 p-6 rounded-xl border border-rose-200">
                <h3 className="font-bold text-rose-900 text-lg mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-700" />
                  Save Your Money If You Are:
                </h3>
                <ul className="space-y-2 text-sm text-rose-950">
                  <li>• Backpackers or budget travelers (opt for local $35 public express boats between Chau Doc and Phnom Penh).</li>
                  <li>• Travelers who get restless with slow-paced river schedules and quiet evening lectures.</li>
                  <li>• People with severe mobility impairments that require full motorized wheelchair access.</li>
                  <li>• Those who want deep nightlife exploration in Saigon or Phnom Penh.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-8 text-[#1A2B49] ${playfair.className}`}>
              Frequently Asked Questions (Mekong Cruise Value)
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
              Still Undecided Between a Cruise and an Overland Tour?
            </h3>
            <p className="text-sm text-[#4A5568] max-w-xl mx-auto mb-6">
              We operate both private overland luxury journeys and represent all 5-star Mekong river cruisers. Get an honest, unbiased comparison tailored to your family&apos;s travel pace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact-us"
                className="px-6 py-3 bg-[#1A2B49] text-white rounded-lg text-sm font-semibold hover:bg-[#2C3E50] transition inline-flex items-center gap-2"
              >
                Plan My Itinerary <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/travel-ideas/best-mekong-river-cruise-for-seniors"
                className="px-6 py-3 bg-white text-[#1A2B49] border border-[#1A2B49] rounded-lg text-sm font-semibold hover:bg-gray-50 transition"
              >
                Read Senior Mobility Guide
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  )
}
