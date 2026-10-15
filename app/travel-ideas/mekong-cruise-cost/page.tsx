import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { 
  DollarSign, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileText, 
  CreditCard, 
  Coins, 
  ArrowRight,
  ShieldCheck,
  Compass
} from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/mekong-cruise-cost`

export const metadata: Metadata = {
  title: "Mekong River Cruise Cost Guide 2026: Pricing, Inclusions & Hidden Fees",
  description:
    "An honest, transparent price breakdown for Vietnam and Cambodia Mekong river cruises. Real cabin rates by luxury tier, mandatory port taxes, visa fees, tipping customs, and Cambodian dollar rules.",
  keywords: [
    "mekong river cruise cost",
    "how much does a mekong river cruise cost",
    "mekong cruise prices 2026",
    "vietnam cambodia cruise cost per person",
    "mekong cruise hidden costs",
    "what is included in a mekong cruise",
    "mekong cruise tipping guide",
    "cambodia visa cost mekong cruise",
    "mekong river cruise port taxes"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Mekong River Cruise Cost Breakdown: The Complete 2026 Pricing Guide",
    description:
      "Exact pricing tiers, mandatory out-of-pocket expenses (port charges, visas, tips), and Cambodia's strict US dollar currency rules.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/hero-1.avif`, width: 1200, height: 630, alt: "Mekong River Cruise Cost Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekong River Cruise Cost: Inclusions & Hidden Fees Explained",
    description: "Detailed budget breakdown for 7-night Vietnam & Cambodia luxury cruises. Avoid unexpected port charges and visa surprises.",
    images: [`${BASE_URL}/images/hero-1.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mekong River Cruise Cost Breakdown 2026: Inclusions, Port Taxes & Hidden Fees",
  "description": "Comprehensive guide to budgeting for a Mekong River cruise between Vietnam and Cambodia, detailing realistic cabin tiers, port fees, Cambodia visa realities, gratuities, and currency exchange rules.",
  "image": `${BASE_URL}/images/hero-1.avif`,
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
      "name": "How much does a 7-night Mekong River cruise cost per person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a standard 7-night luxury cruise between Vietnam and Cambodia, prices vary across three verified tiers: Boutique Premium (such as Victoria Mekong) starts from $1,690 to $2,800 per person; 5-Star Heritage Luxury (such as Heritage Line's The Jayavarman or The Jahan, and Lotus Cruises' Mekong Jewel) ranges from $2,403 to $5,500 per person; and Ultra-Luxury Expedition (Aqua Mekong) starts from $9,800 to $14,000+ per person, twin-share basis."
      }
    },
    {
      "@type": "Question",
      "name": "What hidden fees are not included in a Mekong cruise ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mandatory expenses typically excluded from brochure fares include: (1) River port charges and navigation dues ($65–$95 per person); (2) Cambodia visa ($36 for e-Visa online or $30–$35 at border); (3) Vietnam multi-entry eVisa ($50) if re-entering Vietnam; (4) Onboard crew gratuities ($15–$25 per guest/day); (5) Premium spirits, specialty coffees, and wines outside meal hours on non-all-inclusive ships; and (6) International flights to Ho Chi Minh City or Siem Reap."
      }
    },
    {
      "@type": "Question",
      "name": "What is the tipping etiquette on a Mekong river cruise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tipping is customary but voluntary. Most luxury river cruise operators recommend $15 to $25 per passenger per day for the onboard ship crew (pooled equally among housekeeping, marine engineers, chefs, and waitstaff) and $5 to $10 per passenger per day for local shore excursion guides and drivers."
      }
    },
    {
      "@type": "Question",
      "name": "What is Cambodia's strict US Dollar currency rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cambodia operates a dual economy with the US Dollar and Cambodian Riel. However, the National Bank of Cambodia enforces zero-tolerance rules for US cash: any bill with small tears, pinholes, ink marks, wrinkles, or printed before 2013 will be flatly rejected by vendors, hotels, and river border officials. Travelers must bring crisp, pristine, uncreased US banknotes."
      }
    }
  ]
}

export default function MekongCruiseCostPage() {
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
            src="/images/hero-1.avif"
            alt="Luxury Mekong river cruise cabin balcony overlooking the delta"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-bold rounded mb-5">
              Price Transparency & Inclusions · 2026/2027 Season
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6 ${playfair.className}`}>
              How Much Does a Mekong Cruise Really Cost?
            </h1>
            <p className="text-white/85 text-[15px] md:text-lg font-light leading-relaxed max-w-2xl font-serif">
              An unfiltered breakdown of verified cruise tariffs, mandatory river port charges, border visa expenses, tipping customs, and unexpected local expenses.
            </p>
          </div>
        </section>

        {/* ── DIRECT ANSWER CAPSULE (AI OVERVIEW & EXECUTIVE SUMMARY) ── */}
        <section className="max-w-[840px] mx-auto px-6 -mt-10 relative z-20">
          <div className="bg-[#FAF8F5] border-2 border-gold/40 p-8 md:p-10 shadow-xl rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-gold shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
                The Executive Summary: Realistic Total Budget
              </span>
            </div>
            <div className="space-y-4 text-[#333] text-[15px] leading-relaxed font-sans">
              <p>
                A standard <strong>7-night luxury cruise between Ho Chi Minh City and Siem Reap</strong> costs between <strong>$2,400 and $14,000 per person</strong> on a twin-share basis depending on vessel tier.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 border border-[#E0D9CE] rounded-sm">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block mb-1">Boutique Premium</span>
                  <div className="text-xl font-bold text-navy">$1,690 – $2,800</div>
                  <span className="text-xs text-[#666]">per person / 7 nights</span>
                </div>
                <div className="bg-white p-4 border border-gold rounded-sm shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold block mb-1">5-Star Heritage</span>
                  <div className="text-xl font-bold text-navy">$2,403 – $5,500</div>
                  <span className="text-xs text-[#666]">per person / 7 nights</span>
                </div>
                <div className="bg-white p-4 border border-[#E0D9CE] rounded-sm">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-navy block mb-1">Ultra-Luxury</span>
                  <div className="text-xl font-bold text-navy">$9,800 – $14,000+</div>
                  <span className="text-xs text-[#666]">per person / 7 nights</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white border-l-4 border-[#8B4A2A] text-xs text-[#555] leading-relaxed">
                <strong>Mandatory Out-of-Pocket Expenses to Budget:</strong> Beyond the brochure fare, every passenger must budget approximately <strong>$250 to $380 per person</strong> for mandatory river port taxes ($65–$95), Cambodia visas ($36), and recommended onboard staff gratuities ($15–$25/day).
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 1: THE THREE CRUISE TIERS ── */}
        <section className="max-w-[780px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-3">Part I — Verified Tariff Tiers</p>
          <h2 className={`text-3xl md:text-4xl text-navy leading-tight mb-8 ${playfair.className}`}>
            What You Get at Each Price Level
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              Unlike European river cruising where pricing is relatively standardized, Mekong river cruise ships range from eco-friendly boutique riverboats to ultra-high-end floating private retreats.
            </p>

            {/* Tier 1 */}
            <div className="border border-[#E0D9CE] p-6 bg-[#FAF8F5] my-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl text-navy font-bold">1. Boutique Premium ($1,690 – $2,800 / person)</h3>
                <span className="text-xs bg-navy text-white px-3 py-1 font-mono uppercase">Value Focus</span>
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                <strong>Key Ships:</strong> <em>Victoria Mekong, Mekong Princess</em>.
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                These modern vessels feature smart Scandinavian or contemporary Indochinese styling. Cabins range from 215 to 260 sq ft, typically with private balconies or French balconies. All daily shore excursions, full board (three meals daily), and local cultural entertainment are included. Wine and beer are usually included only during lunch and dinner; specialty spirits and premium wines are billed to your cabin folio.
              </p>
            </div>

            {/* Tier 2 */}
            <div className="border-2 border-gold p-6 bg-white my-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl text-navy font-bold">2. 5-Star Heritage Luxury ($2,403 – $5,500 / person)</h3>
                <span className="text-xs bg-gold text-navy px-3 py-1 font-bold uppercase">Most Popular</span>
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                <strong>Key Ships:</strong> <em>The Jayavarman, The Jahan (Heritage Line), Mekong Jewel (Lotus Cruises)</em>.
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                The benchmark of Southeast Asian river elegance. Handcrafted dark teak staterooms (215 to 538 sq ft), 100% private step-out balconies, top-deck swimming pools, full spas, and gourmet dining blending French techniques with Mekong ingredients. Promotional promotional 7-night rates start from $2,403 (Jayavarman) up to $4,800–$5,500 for expansive signature suites.
              </p>
            </div>

            {/* Tier 3 */}
            <div className="border border-[#E0D9CE] p-6 bg-[#FAF8F5] my-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl text-navy font-bold">3. Ultra-Luxury Expedition ($9,800 – $14,000+ / person)</h3>
                <span className="text-xs bg-[#8B4A2A] text-white px-3 py-1 font-mono uppercase">Private Retreat</span>
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                <strong>Key Ships:</strong> <em>Aqua Mekong (Aqua Expeditions)</em>.
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                Strictly capped at 20 design suites (40 passengers) with a 1:1 crew ratio, passenger elevator, 4 custom motorized aluminum tenders, and menus by Michelin-starred consulting chef David Thompson. True all-inclusive pricing: all premium spirits, sommelier wines, laundry service, and private skiff safaris are built into the ticket price.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 2: THE ITEMIZED HIDDEN FEES ── */}
        <section className="bg-[#FAF8F5] py-20 border-y border-[#E0D9CE]">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-3 text-[#8B4A2A]">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Mandatory Out-of-Pocket Expenses</span>
            </div>
            <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
              Expenses Excluded from the Brochure Fare
            </h2>
            <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
              <p>
                Many first-time cruisers are surprised when final invoices arrive. Here is the exact breakdown of non-inclusive costs you must anticipate:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 border border-[#E0D9CE] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-navy text-sm">1. River Port Charges & Navigation Dues</span>
                    <span className="font-mono text-sm font-bold text-[#8B4A2A]">$65 – $95 / person</span>
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    Charged by Vietnamese and Cambodian maritime waterway authorities for lock navigation, harbor docking, and pilotage fees. This is almost never included in initial cruise quotes and is settled onboard at checkout.
                  </p>
                </div>

                <div className="bg-white p-5 border border-[#E0D9CE] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-navy text-sm">2. Cambodian River Border Visa</span>
                    <span className="font-mono text-sm font-bold text-[#8B4A2A]">$36 (e-Visa) or $35 (onboard)</span>
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    Most cruise pursers can process your Cambodian tourist visa mid-stream at the Vĩnh Xương/Kaam Samnor border. If you apply online beforehand (official e-Visa: $36), <strong>you must bring two printed physical hard copies</strong>. Digital copies on smartphones are not accepted at river checkpoints.
                  </p>
                </div>

                <div className="bg-white p-5 border border-[#E0D9CE] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-navy text-sm">3. Onboard Crew Gratuities</span>
                    <span className="font-mono text-sm font-bold text-[#8B4A2A]">$15 – $25 / guest / day</span>
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    Gratuities are customary on Mekong luxury cruises. A standard 7-night cruise entails approximately $105–$175 per person for the collective crew pool (marine engineers, galley crew, cabin stewards, bartenders), plus $5–$10/day for shore excursion guides and coach drivers.
                  </p>
                </div>

                <div className="bg-white p-5 border border-[#E0D9CE] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-navy text-sm">4. Solo Traveler Single Supplement</span>
                    <span className="font-mono text-sm font-bold text-[#8B4A2A]">50% to 100% of cabin rate</span>
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    Solo travelers occupying a double stateroom typically pay a 50% to 100% surcharge. <em>Insider Tip:</em> Heritage Line and Lotus Cruises periodically offer special &ldquo;Zero Single Supplement&rdquo; departures during shoulder months (April–May and August–September).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 3: CAMBODIAN US DOLLAR CURRENCY RULE ── */}
        <section className="max-w-[780px] mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-3 text-gold">
            <Coins className="w-5 h-5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">Rare Banking Insider Knowledge</span>
          </div>
          <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
            Cambodia&apos;s Strict &ldquo;Pristine Dollar&rdquo; Rule
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              In Vietnam, local currency (Vietnamese Đồng) is used on land, and all credit cards are widely accepted with a standard 2.5% to 3.5% merchant surcharge.
            </p>
            <p>
              In Cambodia, the US Dollar is an official co-currency used everywhere from roadside tuk-tuks to 5-star hotels. However, the National Bank of Cambodia enforces an extraordinarily strict rule that catches Western travelers off guard:
            </p>
            <div className="bg-[#FAF8F5] p-6 border-l-4 border-gold space-y-3 my-6">
              <h3 className="font-serif text-lg text-navy font-bold">The Unacceptable Banknote Rule</h3>
              <p className="text-sm text-[#444] leading-relaxed">
                Any US banknote ($10, $20, $50, $100) that has a <strong>micro-tear, a crease, an ink stamp, writing, or excessive fading</strong> will be flatly rejected by Cambodian banks and merchants. In addition, bills printed before 2013 (the older &ldquo;small head&rdquo; portraits) are routinely declined.
              </p>
              <p className="text-xs text-[#777] font-sans">
                <strong>Actionable Advice:</strong> Before departing the US, visit your bank and explicitly request freshly minted, uncirculated, crisp USD bills dated 2017 or newer. Keep them stored flat in a rigid passport wallet.
              </p>
            </div>
          </div>
        </section>

        {/* ── CHAPTER 4: WHAT IS INCLUDED (THE TRANSPARENT CHECKLIST) ── */}
        <section className="max-w-[780px] mx-auto px-6 py-12 border-t border-[#E0D9CE]">
          <h2 className={`text-3xl md:text-4xl text-navy mb-8 ${playfair.className}`}>
            What Your Cruise Ticket Covers
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-navy font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-700" /> Always Included
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#555]">
                <li>✓ Full luxury stateroom accommodation</li>
                <li>✓ All three daily gourmet meals (breakfast, lunch, dinner)</li>
                <li>✓ Daily guided shore excursions with licensed guides</li>
                <li>✓ All entrance fees to temples, museums, and reserves</li>
                <li>✓ Unlimited bottled drinking water, tea, and local coffee</li>
                <li>✓ Onboard cultural lectures and cooking demonstrations</li>
                <li>✓ Wi-Fi internet access (starlink / 4G cellular routers)</li>
                <li>✓ Low-water coach transfers (Kampong Cham to Siem Reap)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-navy font-bold mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gold" /> Typically Extra
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#555]">
                <li>• River port navigation dues ($65–$95 / person)</li>
                <li>• Cambodian and Vietnamese entry visas</li>
                <li>• Onboard crew & guide gratuities</li>
                <li>• Premium liquors and vintage wine cellar lists</li>
                <li>• Spa massage treatments & beauty services</li>
                <li>• Onboard boutique souvenir purchases</li>
                <li>• International long-haul flights</li>
                <li>• Travel & medical evacuation insurance</li>
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

        {/* ── CONVERSION & LEAD CAPTURE ── */}
        <section className="bg-navy text-white py-16 px-6 mt-16">
          <div className="max-w-[780px] mx-auto text-center space-y-6">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">Transparent Price Guarantee</span>
            <h2 className={`text-3xl md:text-4xl text-white ${playfair.className}`}>
              Get an All-Inclusive Itemized Quote
            </h2>
            <p className="text-white/75 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              No hidden surprises, no sudden port tax additions at checkout. Let our Mekong specialists assemble your exact quote including cabin selection, verified promotions, and door-to-door transfers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/plan-your-journey"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold/90 text-navy font-bold text-xs uppercase tracking-widest rounded-sm transition-all text-center"
              >
                Request Itemized Cruise Quote
              </Link>
              <Link
                href="/cruises"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all text-center"
              >
                Explore All Vessels & Rates
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
