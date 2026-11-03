import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Anchor, Navigation, Compass, HeartPulse, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "20 Essential Mekong Cruise FAQs & Insider Guide (2026/2027) — Mekong River Cruise",
  description: "Independent, verified answers to the 20 most critical Mekong River cruise questions: Upstream vs Downstream, Tonle Sap low water bus transfers, Scenic vs Viking vs Aqua Mekong, elevator accessibility, hidden tipping costs, and CPAP machines.",
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
  alternates: { canonical: "https://www.mekongrivercruise.com/faqs" },
};

interface FAQItem {
  q: string;
  shortA: string;
  detailA: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  highlight?: string;
  link?: { text: string; href: string };
}

interface FAQCategory {
  category: string;
  icon: string;
  description: string;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: "Route, Pacing & Seasonal Reality",
    icon: "Compass",
    description: "Crucial navigational insights regarding water levels, flow directions, and seasonal weather patterns.",
    questions: [
      {
        q: "Is it better to cruise upstream (Saigon to Siem Reap) or downstream (Siem Reap to Saigon)?",
        shortA: "Upstream is recommended for superior pacing and energy management; downstream offers slightly faster sailing and fuel efficiency.",
        detailA: "Upstream (Ho Chi Minh City ➜ Siem Reap) is chosen by 65% of experienced travelers because it allows you to rest and acclimate during tranquil delta cruising before undertaking physically demanding temple exploration at Angkor Wat. Downstream (Siem Reap ➜ Ho Chi Minh City) sails with the river current (15–20% faster transit), arriving in dynamic Saigon for vibrant post-cruise dining and shopping.",
        highlight: "Pro Tip: If you have mobility concerns or fatigue easily, choose Upstream so you arrive in Siem Reap fully rested.",
        link: { text: "Read our in-depth Upstream vs Downstream Editorial", href: "/travel-ideas/upstream-vs-downstream" }
      },
      {
        q: "What actually happens during low water season (March to May) on Lake Tonle Sap?",
        shortA: "Between March and July, water levels in Lake Tonle Sap drop below 1 meter. 100% of large ships cannot cross and must transfer guests via air-conditioned coach or speedboat.",
        detailA: "Brochures frequently hide this behind vague disclaimers. Due to natural monsoon cycles, Tonle Sap Lake depth drops from 9–10 meters in October to under 0.8 meters by April. Ships with drafts exceeding 1.2m cannot navigate the lake. During low water, passengers disembark at Kampong Cham or Phnom Penh and are transferred to Siem Reap via 4.5–5.5 hour luxury private coaches or high-speed river tenders. Only shallow-draft heritage vessels like Toum Tiou II or Pandaw can sail closer to the lake perimeter.",
        highlight: "Transparency Commitment: We notify every client of water level forecasts before deposit confirmation.",
      },
      {
        q: "What is the absolute best month to cruise the Mekong River?",
        shortA: "November and December offer the ideal combination of lush green scenery, high water navigation, and mild temperatures (26°C–29°C / 78°F–84°F).",
        detailA: "January and February remain delightfully dry and cool, though water levels begin dropping. March to May is the hot dry season, with temperatures frequently reaching 38°C (100°F). August to October represents the majestic 'Green Season' when monsoon rains fill the delta to maximum depth, creating breathtaking mirrored reflections and vibrant floating market commerce.",
        link: { text: "View Month-by-Month Climate Guide", href: "/best-time-to-travel" }
      },
      {
        q: "Should I book a 3–4 night short cruise or a full 7–8 night itinerary?",
        shortA: "Book a full 7-night itinerary if you want the authentic cross-border journey. 3–4 night sailings miss the untouched borderlands and artisan villages.",
        detailA: "A 3-night cruise covers either the southern Vietnamese delta (Saigon ↔ Phnom Penh) or the northern Cambodian reach (Phnom Penh ↔ Siem Reap). A 7-night expedition is the only way to witness the dramatic cultural transition from Buddhist pagodas and Khmer floating villages to French colonial river ports and Cham silk-weaving hamlets in Tan Chau.",
        link: { text: "Compare 3-Days vs 7-Days Itineraries", href: "/travel-ideas/3-days-vs-7-days" }
      }
    ]
  },
  {
    category: "Ship vs Ship Comparative Analysis",
    icon: "Anchor",
    description: "Independent, head-to-head technical comparisons between premier Mekong cruise operators.",
    questions: [
      {
        q: "Scenic Spirit vs Viking Saigon: Which European luxury ship is superior?",
        shortA: "Scenic Spirit offers all-suite butler service, all-day inclusive top-shelf spirits, and larger suites (32m²+); Viking Saigon offers sleek Scandinavian minimalism, heated bathroom floors, and passenger elevators.",
        detailA: "Scenic Spirit hosts only 68 guests with an industry-leading passenger-to-space ratio, 100% private balcony suites with convertible glass Sun Lounges, and unrestricted premium open bar 24/7. Viking Saigon hosts 80 guests in clean Nordic-style staterooms (24m²), features heated bathroom floors (unique on the Mekong), and includes beer and wine strictly during lunch and dinner.",
        table: {
          headers: ["Feature / Metric", "Scenic Spirit", "Viking Saigon"],
          rows: [
            ["Passenger Capacity", "68 guests (34 suites)", "80 guests (40 staterooms)"],
            ["Entry Suite Size", "32 m² (344 sq ft)", "24 m² (258 sq ft)"],
            ["All-Inclusive Beverage", "All-day open bar + spirits", "Beer & wine during meals only"],
            ["Butler Service", "100% of all suites (24/7)", "Not offered"],
            ["Elevator Access", "Yes (connects all 3 decks)", "Yes (across residential decks)"]
          ]
        },
        link: { text: "Explore Scenic Spirit Suite Specifications", href: "/ships/scenic-spirit" }
      },
      {
        q: "AmaWaterways AmaDara vs Avalon Saigon: Which cabin concept is better?",
        shortA: "AmaDara features signature Twin Balconies and separate bathtubs; Avalon Saigon features river-facing beds looking directly through 14-foot wall-to-wall panoramic sliding windows.",
        detailA: "AmaDara (124 guests) offers classic French Colonial architecture with dark carved wood, authentic twin balconies (step-out outside balcony plus French Juliet balcony), and generous en-suite bathrooms with separate tubs. Avalon Saigon is ultra-intimate (36 guests) and innovates with beds positioned directly facing the water, sliding open 9 feet to transform the entire stateroom into an open-air veranda.",
        link: { text: "Compare Full Fleet Rankings & Cabin Layouts", href: "/travel-ideas/mekong-river-cruise-ships-compared-ranking" }
      },
      {
        q: "Uniworld Mekong Jewel vs Aqua Mekong: Ultra-Luxury Classic vs Modern Architectural?",
        shortA: "Aqua Mekong is a modern floating art pavilion with 1:1 staff ratio and Michelin-starred dining; Mekong Jewel is an opulent eco-friendly colonial palace with sundeck swimming pool and elevator.",
        detailA: "Aqua Mekong (40 guests) was designed by Noor Design with floor-to-ceiling glass, 4 private tender skiffs for remote canal expeditions, and consultation menus by Master Chef David Thompson. Uniworld Mekong Jewel (68 guests) showcases French-Indochine royal grandeur, ornate wood carving, Asprey bath amenities, a full spa and fitness center, and a passenger elevator.",
        link: { text: "View Aqua Mekong Suite Details", href: "/ships/aqua-mekong" }
      },
      {
        q: "Victoria Mekong vs Pandaw Expeditions: Contemporary Eco-Ship or Colonial Teak Heritage?",
        shortA: "Victoria Mekong is the river's premier solar-powered green vessel with contemporary rooms; Pandaw is a living maritime museum of hand-polished brass and teak with no televisions.",
        detailA: "Victoria Mekong (67 guests) focuses on sustainability with advanced wastewater treatment, silent solar power, and bright modern suites. Pandaw (32–40 guests) follows 1947 Scottish-designed Irrawaddy Flotilla blueprints, featuring brass fittings, wrap-around teak promenade decks, and an immersive, screen-free expedition ethos.",
        link: { text: "Discover Victoria Mekong", href: "/ships/victoria-mekong" }
      },
      {
        q: "Anouvong vs Mekong Sun: What is the best luxury ship for Upper Mekong in Laos?",
        shortA: "Heritage Line Anouvong represents 5-star boutique luxury with private balcony jacuzzis; Mekong Sun is a specialized steel-hull expedition cruiser purpose-built to navigate rapids.",
        detailA: "The upper Mekong between Luang Prabang and the Golden Triangle features rocky rapids and dramatic mountain gorges. Anouvong (10 ultra-luxury suites) offers presidential suites with private Jacuzzis and panoramic glass salons. Mekong Sun (14 cabins) has a shallow 1.1m draft engineered specifically to master upper river currents year-round.",
        link: { text: "Explore Laos Mekong Cruises", href: "/cruises/laos" }
      }
    ]
  },
  {
    category: "Senior Mobility, Cabins & Tech Specs",
    icon: "ShieldCheck",
    description: "Vital physical, medical, and technical criteria for comfortable and worry-free sailing.",
    questions: [
      {
        q: "Which Mekong cruise ships have passenger elevators for guests with limited mobility?",
        shortA: "Scenic Spirit, Viking Saigon, Emerald Harmony, and Mekong Jewel have passenger elevators connecting residential decks. Heritage wooden vessels do not.",
        detailA: "Over 70% of traditional wooden Mekong ships (including The Jahan, Jayavarman, Bassac Pandaw, and Toum Tiou II) have steep wooden staircases angled at 40°–45° and zero elevators. If you have knee replacements, arthritis, or use a walking aid, you MUST book an elevator-equipped modern vessel like Scenic Spirit, Viking Saigon, Emerald Harmony, or Mekong Jewel. Aqua Mekong features an electric chair-lift between main decks.",
        highlight: "Critical Warning: Never book a traditional teak vessel if you cannot climb steep stairs unassisted.",
        link: { text: "Read our Senior Cruise Accessibility Guide", href: "/travel-ideas/best-mekong-river-cruise-for-seniors" }
      },
      {
        q: "Which cabin deck and room location avoids engine noise and propeller vibration?",
        shortA: "Select a mid-ship stateroom on the Upper or Middle Deck. Avoid lower deck aft (rear) cabins located directly above the engine room and auxiliary generators.",
        detailA: "River ships run heavy marine diesel generators 24 hours a day to maintain air-conditioning and refrigeration, even when moored overnight. Cabins located on the Main Deck (lowest passenger level) at the stern (aft) experience low-frequency vibration and generator hum. Always request a mid-ship (Center) stateroom on the Upper or Observation Deck when reserving your cabin.",
      },
      {
        q: "Do Mekong cruise ships dock in central Saigon, or is a 2-hour bus transfer to My Tho required?",
        shortA: "Only Emerald Harmony docks directly in central Ho Chi Minh City (District 4 / Nha Rong). 95% of other vessels require a 1.5–2 hour bus ride to My Tho Port.",
        detailA: "Due to overhead bridge clearance limits (air draft) on the Saigon River, virtually all larger river cruisers (Aqua Mekong, Viking, AmaWaterways, Scenic) cannot enter central downtown Saigon. Guests are assembled at a city hotel and transported 70 km southwest via highway bus to My Tho or Cai Be. Emerald Harmony was custom-engineered with a low retractable wheelhouse specifically to berth in central Saigon.",
      },
      {
        q: "Is tap water, ice, and fresh salad safe to consume aboard luxury Mekong ships?",
        shortA: "Yes, 100% safe on premier 5-star ships. All onboard ice, cooking water, and produce washing utilize multi-stage commercial Reverse Osmosis (RO) and UV sterilization.",
        detailA: "Luxury operators maintain water purification plants equal to hospital standards. Tap water in cabin sinks is purified and safe for brushing teeth. Complimentary bottled spring water is provided in limitless quantities for drinking. Ice cubes in cocktail bars and crisp washed salads in dining rooms are thoroughly safe. Caution is only warranted when sampling raw street food ashore during independent explorations.",
      },
      {
        q: "Can I use a CPAP machine on a Mekong river cruise? What is the voltage?",
        shortA: "Yes, all premier ships fully accommodate CPAP machines. Cabins feature 220V/50Hz universal power sockets at bedside tables, and purser desks provide distilled water upon request.",
        detailA: "Standard ship electrical sockets accept US standard flat-blade (Type A/B) and European round-pin (Type C/F) plugs without adapters. Continuous dual-generator marine feeds prevent nighttime electrical dropouts. Notify our concierge 48 hours prior to embarkation so your stateroom steward can place a complimentary gallon of distilled water at your bedside.",
      }
    ]
  },
  {
    category: "True Costs, Tipping & Charter Realities",
    icon: "DollarSign",
    description: "Complete transparent breakdown of gratuities, visa charges, single supplements, and private charters.",
    questions: [
      {
        q: "What are the hidden out-of-pocket costs on a 7-night Mekong cruise?",
        shortA: "Budget $220–$350 USD per person for mandatory crew tips ($15–$25/day), Cambodia river border visas ($35–$40), port navigation fees ($65–$95), and premium spirits.",
        detailA: "Brochures frequently advertise all-inclusive fares that omit port and border charges. Here is the realistic out-of-pocket ledger: (1) Crew & guide gratuities: $105–$175/person/week on non-all-inclusive lines like Heritage Line or Pandaw; (2) Cambodia Entry Visa at Kaam Samnor river post: $35–$40 in crisp, unmarked US currency; (3) River navigation & port dues: $65–$95/person; (4) Imported wines/cocktails outside meal times: $8–$14/drink on Viking, AmaDara, and Avalon.",
        link: { text: "Read our Complete Mekong Cruise Cost Breakdown", href: "/travel-ideas/mekong-cruise-cost" }
      },
      {
        q: "Which Mekong cruise lines offer zero or discounted Single Supplements for solo travelers?",
        shortA: "Pandaw Expeditions frequently offers 100% Zero Single Supplement sailings; AmaWaterways offers seasonal promotions with solo surcharges reduced to 10%–25%.",
        detailA: "Standard single supplements on luxury ships range from 50% to 100% of the twin-share fare, making solo travel expensive. Pandaw designates specific departures each season with dedicated zero-supplement allocations for solo adventurers. AmaWaterways regularly releases 'Solo Traveler Special' cabins on the AmaDara with nominal 10%–20% premiums.",
      },
      {
        q: "How much does it cost to charter a private luxury riverboat for 10–30 guests?",
        shortA: "Private full-ship charters range from $35,000 to $160,000 USD per week, depending on vessel intimacy and luxury tier.",
        detailA: "Full charters are exceptionally popular for milestone anniversaries, family reunions, and executive retreats. Representative weekly charter costs: (1) Toum Tiou II (12 cabins, up to 24 guests): $35,000–$50,000; (2) The Jayavarman or Bassac Pandaw (14–16 cabins, up to 32 guests): $55,000–$85,000; (3) Aqua Mekong (20 designer suites, up to 40 guests): $120,000–$160,000 inclusive of private tenders and master-chef dining.",
        link: { text: "Inquire About Private Ship Charters", href: "/itineraries/private-charter" }
      }
    ]
  },
  {
    category: "Family Policies, Health & Booking Advantages",
    icon: "HeartPulse",
    description: "Age restrictions, vaccination advice, and the benefits of reserving through a licensed regional specialist.",
    questions: [
      {
        q: "Are children allowed on luxury Mekong cruises? What are the minimum age limits?",
        shortA: "Viking enforces a strict Adults-Only (18+) policy; Scenic requires children to be 12+; Aqua Mekong welcomes children 7+ and offers interconnecting 60m² family suites.",
        detailA: "Cruise operators enforce distinct age minimums to maintain onboard ambience: (1) Viking Saigon: Strictly 18 years and older; (2) Scenic Spirit: 12 years and older; (3) Aqua Mekong: Minimum 7 years, featuring interconnecting staterooms and private skiff wildlife tracking; (4) AmaWaterways & Heritage Line: Welcome children from age 4, though there are no dedicated kids clubs or youth counselors.",
      },
      {
        q: "Do I need malaria medication or yellow fever shots for a Mekong cruise in 2026?",
        shortA: "Malaria pills are NOT medically required along the primary Mekong cruise corridor. Yellow fever is only required if arriving from an endemic nation.",
        detailA: "The mainstream lower Mekong delta between Ho Chi Minh City, Phnom Penh, and Siem Reap has successfully controlled malaria transmission for years. Leading travel medicine authorities recommend standard vaccinations (Hepatitis A, Typhoid, Tetanus) and DEET-based mosquito repellent for evening twilight. Malaria prophylaxis is only considered if trekking deep into remote jungle border areas beyond the river.",
      },
      {
        q: "Why book through an authorized local specialist rather than directly with the international cruise line?",
        shortA: "Local specialists offer our Best Price Guarantee, unvarnished ship comparisons, complimentary private airport transfers, and real-time on-the-ground visa and emergency support.",
        detailA: "International cruise lines only sell their own ships and will never highlight their vessel's stair flaws, shallow-water cancellations, or bus transfer times. As authorized Tier-1 Mekong fleet curators, we secure contracted wholesale rates (guaranteed equal to or below direct cruise line prices), provide 100% neutral guidance matched to your mobility needs, and maintain 24/7 bilingual logistics teams in Saigon, Phnom Penh, and Siem Reap.",
        link: { text: "Connect With Our Local Concierge Team", href: "/contact" }
      }
    ]
  }
];

// Flat array for Schema.org FAQPage structured data
const allFaqSchemaItems = faqData.flatMap(section => 
  section.questions.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `${item.shortA} ${item.detailA}`
    }
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "20 Essential Mekong River Cruise Questions & Insider Guide (2026/2027)",
  "description": "Comprehensive, verified answers to the 20 most critical questions regarding Mekong River cruise ships, water levels, senior accessibility, and hidden costs.",
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "url": "https://www.mekongrivercruise.com"
  },
  "mainEntity": allFaqSchemaItems
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-[#FAF9F5] text-[#222]">
        {/* ── HERO ── */}
        <section className="bg-[#0f1a2b] pt-36 pb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a962_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold rounded-full mb-6">
              <ShieldCheck size={14} className="text-[#c9a962]" />
              <span>Independent 2026 / 2027 Fleet Authority</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              20 Essential Mekong Cruise Questions Answered
            </h1>
            <p className="text-white/70 text-[15px] md:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
              Unvarnished truth and verified technical data on water levels, vessel comparisons, elevator accessibility, and true out-of-pocket costs across the Mekong.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/50">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#c9a962]" /> 20 Fleet Comparisons</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#c9a962]" /> Verified Water Depth Data</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#c9a962]" /> 100% Price Transparency</span>
            </div>
          </div>
        </section>

        {/* ── CATEGORY QUICK NAV ── */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e0d8] shadow-sm py-4">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
            {faqData.map((cat, idx) => (
              <a
                key={cat.category}
                href={`#category-${idx + 1}`}
                className="text-[11px] font-bold tracking-wider uppercase text-navy/70 hover:text-[#b8860b] hover:bg-[#FAF9F5] px-3.5 py-2 rounded-md whitespace-nowrap transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTIONS ── */}
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 space-y-20">
          {faqData.map((category, catIdx) => (
            <section
              key={category.category}
              id={`category-${catIdx + 1}`}
              className="scroll-mt-36"
            >
              <div className="border-b-2 border-[#c9a962]/40 pb-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-3">
                <div>
                  <span className="text-[#b8860b] text-[10px] tracking-[0.25em] uppercase font-bold block mb-1">
                    Section {catIdx + 1} of {faqData.length}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-navy">
                    {category.category}
                  </h2>
                </div>
                <p className="text-xs text-[#777] max-w-md font-sans">
                  {category.description}
                </p>
              </div>

              <div className="space-y-8">
                {category.questions.map((item, qIdx) => (
                  <article
                    key={item.q}
                    className="bg-white p-6 md:p-8 rounded-xl border border-[#e8e2d8] shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#0f1a2b] text-[#c9a962] font-serif font-bold text-sm flex items-center justify-center mt-1">
                        {catIdx * 4 + qIdx + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg md:text-xl text-navy mb-3 leading-snug">
                          {item.q}
                        </h3>

                        {/* Quick takeaway summary callout */}
                        <div className="bg-[#FAF9F5] border-l-3 border-[#c9a962] p-4 rounded-r-md mb-4">
                          <p className="text-sm font-semibold text-[#1a202c] leading-relaxed">
                            {item.shortA}
                          </p>
                        </div>

                        {/* Detailed technical explanation */}
                        <p className="text-[#4a5568] text-sm md:text-[15px] leading-relaxed mb-4">
                          {item.detailA}
                        </p>

                        {/* Technical Comparison Table if available */}
                        {item.table && (
                          <div className="my-5 overflow-x-auto rounded-lg border border-[#e2e8f0]">
                            <table className="w-full text-left text-xs md:text-sm">
                              <thead className="bg-[#0f1a2b] text-white uppercase text-[10px] tracking-wider">
                                <tr>
                                  {item.table.headers.map((h, i) => (
                                    <th key={i} className="py-3 px-4 font-bold">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {item.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#fbfbf9]"}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`py-2.5 px-4 ${cIdx === 0 ? "font-semibold text-navy" : "text-[#4a5568]"}`}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Pro tip or critical warning */}
                        {item.highlight && (
                          <div className="flex items-start gap-2.5 text-xs text-[#8a6d3b] bg-[#fcf8e3] p-3 rounded border border-[#faebcc] mb-4">
                            <AlertTriangle size={15} className="shrink-0 mt-0.5 text-[#b8860b]" />
                            <span className="font-medium">{item.highlight}</span>
                          </div>
                        )}

                        {/* Optional deep-dive link */}
                        {item.link && (
                          <div className="pt-2">
                            <Link
                              href={item.link.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8860b] hover:text-navy uppercase tracking-wider transition-colors"
                            >
                              <span>{item.link.text}</span>
                              <ArrowRight size={13} />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ── EDITORIAL PILLAR BANNER ── */}
        <section className="bg-navy py-16 text-white text-center border-t border-[#c9a962]/30">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold block mb-3">
              Deep-Dive Editorial Guide
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Read the Full 2026 Fleet Comparison Dossier
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-light">
              Explore our comprehensive 20-question editorial with technical water depth charts, ship-by-ship cabin measurements, and verbatim traveler reviews.
            </p>
            <Link
              href="/travel-ideas/20-essential-mekong-cruise-questions-answered"
              className="inline-flex items-center gap-2 bg-[#c9a962] text-[#0f172a] px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-200"
            >
              <span>Read Definitive Guide</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── CONCIERGE CTA ── */}
        <section className="bg-[#FAF9F5] py-20 text-center border-t border-[#e0d9ce]">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-navy">
              Have a specific question about your 2026/2027 dates?
            </h2>
            <p className="text-[#666] text-[15px] font-light mb-8 leading-relaxed">
              Our regional specialists in Ho Chi Minh City and Siem Reap inspect every vessel in person. We provide instant cabin availability, verified low-water navigation schedules, and our Best Price Guarantee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/plan-your-journey"
                className="inline-block bg-[#0f1a2b] text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors shadow-md"
              >
                Plan Your Journey
              </Link>
              <a
                href="https://wa.me/13159981998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy border border-[#0f1a2b]/30 px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors shadow-sm"
              >
                WhatsApp Concierge: +1 315 998 1998
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
