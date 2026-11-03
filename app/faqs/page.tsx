import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs — Mekong River Cruise",
  description: "Answers to frequently asked questions about Mekong River cruises including booking, payment, 90-day Vietnam visa rules, Cambodia river border processing, packing tips, and onboard amenities.",
  keywords: ["Mekong cruise FAQ", "Mekong river cruise questions", "booking Mekong cruise", "Vietnam cruise visa 2026", "Cambodia river border visa", "Mekong cruise packing list"],
  alternates: { canonical: "https://www.mekongrivercruise.com/faqs" },
};

const faqs = [
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 6–10 months in advance for peak season sailings (November to February), as boutique vessels with 14–30 cabins sell out quickly. Shoulder season availability (October and March–April) can sometimes be booked 2–4 months ahead, while green season (May–September) offers greater last-minute flexibility and attractive promotional value.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Our standard partner terms allow a full refund minus a $100 administration fee for cancellations made 60+ days before departure, a 50% refund for cancellations 30–59 days prior, a 25% refund for 15–29 days, and no refund within 14 days of departure. Comprehensive travel insurance with trip cancellation coverage is required for all guests.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. A 30% deposit secures your cabin allocation upon confirmation, with the remaining balance due 60 days before your departure date. We accept international wire transfer, major credit cards (Visa, Mastercard), and secure payment processing in USD, EUR, GBP, and AUD.",
      },
      {
        q: "Are there any hidden fees?",
        a: "We believe in 100% price transparency. Brochure fares include all gourmet meals, daily guided excursions, and onboard lectures. Mandatory out-of-pocket costs excluded from ticket prices are: river port navigation taxes ($65–$120/person), Cambodia entry visa ($30–$35 at the river border), and customary staff gratuities ($15–$25/guest/day). All items are clearly itemized in advance.",
      },
    ],
  },
  {
    category: "Before You Travel & Visas",
    questions: [
      {
        q: "Do I need a visa for Vietnam or Cambodia?",
        a: "Most international travelers require a visa. Vietnam grants 90-day multiple-entry e-visas online for all passport holders worldwide, along with 45-day visa exemptions for citizens of 13 nations including the UK, France, Germany, Italy, Spain, Japan, and South Korea. Cambodia provides convenient visa-on-arrival ($30–$35 USD in clean, crisp cash) processed seamlessly by our ship purser directly at the Kaam Samnor river crossing, or via official Cambodia e-visa online.",
      },
      {
        q: "What are Cambodia's strict US Dollar currency rules?",
        a: "Cambodia enforces zero-tolerance banknote quality rules. US dollar bills used for visas, tips, or market shopping must be crisp, uncreased, free of ink marks, pinholes, or tears, and printed in 2013 or later. Bank tellers and immigration officers will reject torn or older banknotes.",
      },
      {
        q: "What vaccinations are recommended?",
        a: "Consult your travel health clinic 6–8 weeks before departure. Commonly recommended vaccines include Hepatitis A & B, Typhoid, and Tetanus booster. Malaria risk along the mainstream lower Mekong cruise channel between Saigon and Siem Reap is very low, but dengue prevention (mosquito repellent) is advised for evening excursions.",
      },
      {
        q: "What should I pack for a Mekong cruise?",
        a: "Lightweight, breathable linen and cotton clothing; comfortable walking shoes with rubber grip for temple stone steps and wooden sampans; modest attire covering shoulders and knees for Buddhist pagodas and royal palaces; a wide-brim hat, high-SPF sunscreen, and sunglasses; and smart-casual attire for dinner aboard.",
      },
      {
        q: "Is travel insurance required?",
        a: "Yes. All guests are required to hold comprehensive international travel insurance covering emergency medical treatment, medical evacuation, trip interruption, and baggage loss for the entire duration of the itinerary.",
      },
    ],
  },
  {
    category: "Onboard Experience & Dining",
    questions: [
      {
        q: "Is there Wi-Fi on the ships?",
        a: "Yes, all premier vessels provide complimentary Wi-Fi in suites and public lounges. Connection speeds utilize local 4G/5G cellular signals and are generally smooth near towns, though connectivity may dip briefly while navigating remote river sections.",
      },
      {
        q: "Can you accommodate dietary requirements?",
        a: "Yes. All vessels cater expertly to vegetarian, vegan, gluten-free, celiac, dairy-free, and halal diets. Please notify our specialist at the time of booking so our executive chefs can personalize your daily menus.",
      },
      {
        q: "What is the dress code onboard?",
        a: "Daytime attire is relaxed and casual. Evenings are smart-casual (collared shirts, summer dresses, light trousers). Formal black-tie attire is never required. High heels are strongly discouraged due to teak deck safety.",
      },
      {
        q: "Are shore excursions included?",
        a: "Yes, all daily shore excursions with English-speaking local guides, admission fees to historic sites, and transfers via private tender skiffs, cyclos, and ox-carts are fully included in the cruise fare.",
      },
    ],
  },
  {
    category: "Health, Safety & Mobility",
    questions: [
      {
        q: "Is a Mekong cruise suitable for older travelers or guests with reduced mobility?",
        a: "Yes. River cruising is one of the most accessible ways to experience Indochina because you unpack once. Modern vessels like Victoria Mekong and Mekong Jewel feature elevator access to passenger decks. Shore tenders dock directly alongside gangways, and our team can arrange gentle-pace alternatives for temple visits.",
      },
      {
        q: "Is it safe to drink the water and have ice onboard?",
        a: "Yes. Luxury Mekong vessels operate advanced onboard reverse-osmosis filtration and UV purification systems. All ice, salad wash, and cooking water are certified safe. Complimentary bottled and carafe drinking water is refreshed in suites daily.",
      },
      {
        q: "What medical facilities are available onboard?",
        a: "Ships maintain comprehensive first-aid facilities, automated external defibrillators (AED), and crew certified in emergency first response. In the unlikely event of an emergency, the river channel is within quick reach of medical facilities in Can Tho, Chau Doc, Phnom Penh, or Ho Chi Minh City.",
      },
    ],
  },
];

// Flat array for Schema.org FAQPage
const allFaqItems = faqs.flatMap(section => 
  section.questions.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      "@type": "Organization",
      "name": "Vietnam National Authority of Tourism",
      "sameAs": "https://en.wikipedia.org/wiki/Vietnam_National_Authority_of_Tourism"
    },
    {
      "@type": "Organization",
      "name": "National Bank of Cambodia",
      "sameAs": "https://en.wikipedia.org/wiki/National_Bank_of_Cambodia"
    }
  ],
  "mainEntity": allFaqItems
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-white text-[#222]">
        {/* ── HERO ── */}
        <section className="bg-[#0f1a2b] pt-40 pb-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[#b8860b]/80 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
              Support & Travel Advisory
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-lg mx-auto">
              Clear, verified answers on 2026/2027 booking terms, 90-day Vietnam visa rules, Cambodia border crossings, water quality, and onboard life.
            </p>
          </div>
        </section>

        {/* ── FAQ SECTIONS ── */}
        <section className="max-w-[840px] mx-auto px-6 py-24">
          {faqs.map((section) => (
            <div key={section.category} className="mb-16 last:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl mb-8 pb-4 border-b border-[#e5e5e5] text-navy">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.questions.map((item) => (
                  <div key={item.q} className="bg-[#FAF9F5] p-6 rounded-lg border border-[#e0d9ce]/60">
                    <h3 className="font-bold text-[16px] text-navy mb-3 flex items-start gap-2">
                      <span className="text-[#b8860b] font-serif">Q.</span>
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-[#444] text-[15px] leading-[1.85] font-light pl-6 border-l-2 border-[#b8860b]/40">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#f5f5f5] py-16 text-center border-t border-[#e0d9ce]">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-navy">Still have a specific question?</h2>
            <p className="text-[#666] text-[15px] font-light mb-8">
              Our Ho Chi Minh City and Siem Reap cruise specialists are on hand to check cabin availability, verify river water levels, or tailor your private itinerary.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#0f1a2b] text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors"
              >
                Contact Our Specialists
              </Link>
              <a
                href="https://wa.me/13159981998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy border border-[#0f1a2b]/30 px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
              >
                WhatsApp: +1 315 998 1998
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
