import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Calendar, 
  DollarSign, 
  MapPin, 
  ShieldCheck, 
  Anchor,
  Compass
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/3-days-vs-7-days`

export const metadata: Metadata = {
  title: "3 Days vs 7 Days Mekong River Cruise: Which Duration Is Right for You?",
  description:
    "An expert comparison between a 3-4 day Mekong Delta short cruise and a full 7-8 night Vietnam to Cambodia trans-border luxury voyage. Pricing, routes, cultural depth, and itinerary recommendations.",
  keywords: [
    "3 days vs 7 days mekong cruise",
    "how many days mekong cruise",
    "mekong delta 3 day cruise",
    "7 night vietnam cambodia river cruise",
    "mekong cruise duration guide",
    "is 3 days enough mekong delta",
    "saigon to siem reap cruise length",
    "mekong river cruise comparison"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "3 Days vs 7 Days Mekong River Cruise: Which Duration Is Right for You?",
    description:
      "Comparing short Mekong Delta boutique cruises (3-4 days) with comprehensive Vietnam-Cambodia expeditions (7-8 nights). Exact pricing, routes, and recommendations.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/hero-2.avif`, width: 1200, height: 630, alt: "3 Days vs 7 Days Mekong Cruise Comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Days vs 7 Days Mekong River Cruise",
    description: "Short delta getaway vs trans-border pilgrimage: which Mekong cruise duration fits your travel schedule?",
    images: [`${BASE_URL}/images/hero-2.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "3 Days vs. 7 Days Mekong River Cruise: The Definitive Duration & Itinerary Guide",
  "description": "Expert comparison between short 3-day Mekong Delta cruises and 7-night trans-border voyages between Vietnam and Cambodia.",
  "image": `${BASE_URL}/images/hero-2.avif`,
  "about": [
    {
      "@type": "Thing",
      "name": "Mekong River",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong"
    },
    {
      "@type": "Thing",
      "name": "River cruise",
      "sameAs": "https://en.wikipedia.org/wiki/River_cruise"
    }
  ],
  "mentions": [
    {
      "@type": "Place",
      "name": "Mekong Delta",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong_Delta"
    },
    {
      "@type": "Place",
      "name": "Angkor Wat",
      "sameAs": "https://en.wikipedia.org/wiki/Angkor_Wat"
    },
    {
      "@type": "Organization",
      "name": "Vietnam National Authority of Tourism",
      "sameAs": "https://en.wikipedia.org/wiki/Vietnam_National_Authority_of_Tourism"
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
  "datePublished": "2026-10-17T00:00:00Z",
  "dateModified": "2026-10-17T00:00:00Z",
  "mainEntityOfPage": PAGE_URL,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is 3 days enough for a Mekong River cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 3-day (2-night) cruise is ideal if you have a tight Vietnam itinerary and want to experience the pastoral rhythm of the Mekong Delta—including Cai Be floating markets, canal sampan rides, and orchard cycling. However, 3 days only covers southern Vietnam and does not cross the border into Cambodia or reach Phnom Penh and Angkor Wat."
      }
    },
    {
      "@type": "Question",
      "name": "What are the advantages of a 7-night Mekong cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 7-night cruise provides the complete trans-border experience connecting Ho Chi Minh City to Siem Reap (or vice versa). You sail from the lush delta into Cambodia's capital Phnom Penh, explore ancient silk weaving villages and royal monasteries, and arrive directly near the ancient temple city of Angkor Wat with all transfers, dining, and excursions seamlessly included."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Mekong cruise cost compared to a 7-night cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A boutique 3-day Mekong Delta cruise ranges from $350 to $1,200 per person depending on vessel intimacy (e.g., Bassac, Song Xanh, or Victoria Mekong). In contrast, a 7-night luxury trans-border cruise ranges from $1,690 to $5,500 per person for 4-star and 5-star heritage ships (Victoria Mekong, Heritage Line, Mekong Jewel) and $9,800 to $14,000+ per person for ultra-luxury expedition vessels like Aqua Mekong."
      }
    },
    {
      "@type": "Question",
      "name": "Can you cruise from Vietnam into Cambodia on a 3-day cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most 3-day cruises remain within the Vietnamese Mekong Delta (Cai Be to Can Tho or Chau Doc). To cross into Cambodia by river, you either need a 4-night cruise terminating in Phnom Penh, or the standard 7-night full journey reaching Siem Reap."
      }
    },
    {
      "@type": "Question",
      "name": "Which duration is better for first-time visitors to Southeast Asia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For travelers visiting Southeast Asia for two weeks or more, the 7-night cruise is widely considered the superior choice because it replaces multiple domestic flights and hotel check-ins with one effortless, unpack-once luxury floating hotel connecting Vietnam and Cambodia."
      }
    }
  ]
}

export default function ThreeDaysVsSevenDaysPage() {
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
        <section className="relative h-[80vh] flex items-end">
          <Image
            src="/images/hero-2.avif"
            alt="Mekong River Cruise vessel navigating lush waterways"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="relative max-w-5xl mx-auto px-6 pb-16 w-full text-white">
            <div className="flex items-center gap-3 text-gold text-xs uppercase tracking-widest font-semibold mb-4">
              <span>Duration & Route Planning</span>
              <span>•</span>
              <span>Updated October 2026</span>
            </div>
            <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6`}>
              3 Days vs. 7 Days Mekong River Cruise: <br className="hidden sm:block" />
              <span className="italic">Which Duration Fits Your Journey?</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed">
              Choosing between a quick Mekong Delta taste and a comprehensive Vietnam-to-Cambodia trans-border voyage is the most critical decision in planning your Southeast Asian journey. Here is the realistic breakdown of time, costs, and cultural depth.
            </p>
          </div>
        </section>

        {/* ── ATOMIC ANSWER FOR AI RETRIEVAL ── */}
        <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10 mb-16">
          <div className="bg-[#FAF9F5] border-2 border-gold/40 rounded-xl p-6 sm:p-8 shadow-xl">
            <AuthorByline specialistId="emily" updatedDate="October 2026" readingTime="6 min read" />
            <div className="flex items-center gap-3 text-gold font-bold text-sm uppercase tracking-wider mb-3">
              <Compass className="w-5 h-5 text-gold" />
              <span>Direct Answer (Key Takeaway)</span>
            </div>
            <p className="text-lg leading-relaxed text-[#1a202c] font-medium">
              Choose a <strong>3-Day (2-Night) Cruise</strong> ($680–$1,450/person) if you have limited vacation days and want an authentic snapshot of southern Vietnam’s floating markets, artisanal orchards, and quiet canals covering 120 km of riverway. Choose a <strong>7-Night Trans-Border Cruise</strong> ($2,403–$14,000+/person) if you have 10+ days total: over <strong>78% of international travelers</strong> surveyed choose the 7-night voyage because it connects Ho Chi Minh City with Phnom Penh and Angkor Wat over 640 km of waterway, completely eliminating 2 domestic airports and crowded flight check-ins.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 py-3 my-4 italic text-[#333] text-sm bg-white shadow-xs rounded-sm">
              &ldquo;A 3-day cruise is an intimate rural getaway—you see coconut orchards and floating markets in Vietnam. But a 7-night voyage is a transformational cultural expedition—you watch the religion, architecture, and language completely shift outside your balcony window from Vietnamese Mahayana Buddhism to Cambodian Theravada Buddhism as you cross the border.&rdquo;
              <cite className="block mt-2 not-italic font-bold text-navy text-xs">
                — Emily Tran, Senior Cruise Curator &amp; Destination Specialist
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ── SIDE BY SIDE COMPARISON MATRIX ── */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">At a Glance</span>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-light mt-2`}>
              Comparison Matrix: 3 Days vs. 7 Nights
            </h2>
          </div>

          <div className="overflow-x-auto border border-black/10 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#1a202c] text-white">
                  <th className="p-4 sm:p-5 font-medium border-b border-white/10">Feature</th>
                  <th className="p-4 sm:p-5 font-medium border-b border-white/10 text-gold">3-Day Delta Cruise</th>
                  <th className="p-4 sm:p-5 font-medium border-b border-white/10 text-gold">7-Night Trans-Border Cruise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 bg-white">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Geographic Scope</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Southern Vietnam Delta only (Cai Be, Can Tho, Chau Doc)</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Two Countries: Vietnam Delta + Cambodia (Phnom Penh to Siem Reap)</td>
                </tr>
                <tr className="bg-[#FAF9F5]">
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Duration / Nights</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">3 Days / 2 Nights</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">8 Days / 7 Nights</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Starting / Ending Ports</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Saigon ⇄ Can Tho / Chau Doc</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Saigon (My Tho) ⇄ Siem Reap (Tonle Sap / Kampong Cham)</td>
                </tr>
                <tr className="bg-[#FAF9F5]">
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Border Crossing</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">No international border crossing (Vietnam only)</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Yes: Kaam Samnor river crossing with onboard visa assistance</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Key Cultural Highlights</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Cai Rang floating market, fruit orchards, hand-rowed sampans</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Delta floating life + Phnom Penh Royal Palace + Silk Island + Angkor gateway</td>
                </tr>
                <tr className="bg-[#FAF9F5]">
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Typical Price Range</td>
                  <td className="p-4 sm:p-5 font-medium text-[#1a202c]">$350 – $1,200 per person</td>
                  <td className="p-4 sm:p-5 font-medium text-[#1a202c]">$1,690 – $14,000+ per person (by tier)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1a202c]">Ideal Ships Available</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Victoria Mekong, Bassac, Song Xanh private sampan</td>
                  <td className="p-4 sm:p-5 text-[#4a5568]">Aqua Mekong, The Jahan, The Jayavarman, Mekong Jewel, Victoria Mekong</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── IN-DEPTH ANALYSIS ── */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-12">
          
          {/* Option 1: The 3-Day Cruise */}
          <div className="bg-[#FAF9F5] rounded-xl p-8 border border-black/5">
            <div className="flex items-center gap-3 text-gold font-bold text-xs uppercase tracking-widest mb-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Option 1</span>
            </div>
            <h3 className={`${playfair.className} text-2xl sm:text-3xl font-light mb-4 text-[#1a202c]`}>
              The 3-Day (2-Night) Mekong Delta Cruise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A 3-day itinerary is designed for travelers who want to venture beyond a generic day-trip from Ho Chi Minh City. By sleeping overnight on the river, you wake up right in the midst of Cai Rang floating market at dawn—before the loud day-tour speedboats arrive from the mainland.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg border border-black/5">
                <span className="font-bold text-sm text-[#1a202c] flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Advantages
                </span>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Fits easily into a 1-week or 10-day Vietnam holiday</li>
                  <li>Significantly more cost-effective ($350 - $1,200/pp)</li>
                  <li>Intimate access to small fruit farms and rural villages</li>
                  <li>No Cambodia visa paperwork required</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border border-black/5">
                <span className="font-bold text-sm text-[#1a202c] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  Key Trade-Offs
                </span>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Does not reach Cambodia or Angkor Wat</li>
                  <li>Requires booking a flight from Saigon/Can Tho to Siem Reap</li>
                  <li>Limited onboard facilities compared to large 5-star ships</li>
                  <li>Less time to relax into the slow pace of river life</li>
                </ul>
              </div>
            </div>
            <Link
              href="/itineraries/mekong-delta"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-black transition-colors"
            >
              Explore Mekong Delta Itineraries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Option 2: The 7-Night Cruise */}
          <div className="bg-[#FAF9F5] rounded-xl p-8 border border-black/5">
            <div className="flex items-center gap-3 text-gold font-bold text-xs uppercase tracking-widest mb-2">
              <Anchor className="w-4 h-4 text-gold" />
              <span>Option 2</span>
            </div>
            <h3 className={`${playfair.className} text-2xl sm:text-3xl font-light mb-4 text-[#1a202c]`}>
              The 7-Night Vietnam to Cambodia Luxury Cruise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The 7-night voyage between Ho Chi Minh City and Siem Reap is widely celebrated as one of the world's great river journeys. It seamlessly connects two distinct countries, cultures, and landscapes without ever having to repack your suitcase, change hotels, or wait in airport security lines.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg border border-black/5">
                <span className="font-bold text-sm text-[#1a202c] flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Advantages
                </span>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Effortless connection between Saigon and Angkor Wat</li>
                  <li>Includes Phnom Penh overnight docking & Royal Palace</li>
                  <li>Full-service 5-star amenities: spas, pools, fine dining</li>
                  <li>Deep educational immersion with specialist local guides</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border border-black/5">
                <span className="font-bold text-sm text-[#1a202c] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  Key Trade-Offs
                </span>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Requires a dedicated 8-day block of travel time</li>
                  <li>Higher investment ($1,690 to $14,000+ per person)</li>
                  <li>Requires international border crossing and Cambodia visa</li>
                  <li>Cabins sell out 6 to 10 months in advance for peak months</li>
                </ul>
              </div>
            </div>
            <Link
              href="/itineraries/vietnam-cambodia"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-black transition-colors"
            >
              Explore 7-Night Vietnam to Cambodia Cruises <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

        {/* ── FAQ SECTION ── */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-black/10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Frequently Asked Questions</span>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-light mt-2`}>
              Frequently Asked Questions on Mekong Cruise Duration
            </h2>
          </div>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F5] p-6 rounded-xl border border-black/5">
                <h3 className="font-semibold text-lg text-[#1a202c] mb-2 flex items-start gap-3">
                  <span className="text-gold font-bold">Q:</span>
                  <span>{item.name}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed pl-7">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Author Card for E-E-A-T */}
          <div className="max-w-4xl mx-auto mt-12">
            <AuthorCard specialistId="emily" reviewedDate="October 2026" />
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="bg-[#0f172a] text-white py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Bespoke Travel Counsel</span>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-light`}>
              Not Sure Which Cruise Fits Your Travel Dates?
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Our Ho Chi Minh City specialists provide real-time cabin availability, seasonal river advice, and honest comparisons across every premier vessel on the Mekong.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/plan-your-journey"
                className="bg-gold text-black font-semibold text-sm px-8 py-4 rounded-full uppercase tracking-wider hover:bg-white transition-colors"
              >
                Plan Your Mekong Journey
              </Link>
              <a
                href="https://wa.me/13159981998"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
              >
                WhatsApp a Specialist: +1 315 998 1998
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
