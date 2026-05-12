import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs — Mekong River Cruise",
  description: "Answers to frequently asked questions about Mekong River cruises including booking, payment, visa requirements, packing tips, and onboard amenities.",
  keywords: ["Mekong cruise FAQ", "Mekong river cruise questions", "booking Mekong cruise", "Vietnam cruise visa", "Mekong cruise packing list"],
  alternates: { canonical: "https://www.mekongrivercruise.com/faqs" },
};

const faqs = [
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 3–6 months ahead for peak season (October–April). Last-minute availability is sometimes possible during the green season (May–September), but cabin selection will be limited.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellation policies vary by vessel. Most ships offer a full refund if cancelled 60+ days before departure, 50% refund for 30–59 days, and no refund within 30 days. Travel insurance is strongly recommended.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. A 30% deposit secures your booking, with the balance due 60 days before departure. We accept bank transfer, credit card (Visa/Mastercard), and PayPal.",
      },
      {
        q: "Are there any hidden fees?",
        a: "Our prices include all meals, guided excursions, and onboard activities. Port fees, international flights, visa costs, and personal expenses (spa, premium drinks) are not included and will be clearly listed in your booking confirmation.",
      },
    ],
  },
  {
    category: "Before You Travel",
    questions: [
      {
        q: "Do I need a visa for Vietnam or Cambodia?",
        a: "Most nationalities need a visa for both countries. Vietnam offers e-visas (30 days, single entry) online. Cambodia offers visa-on-arrival at Phnom Penh airport or at the river border crossing. We provide detailed visa guidance after booking.",
      },
      {
        q: "What vaccinations are recommended?",
        a: "Consult your doctor at least 6 weeks before travel. Commonly recommended: Hepatitis A & B, Typhoid, Tetanus. Malaria prophylaxis is generally not necessary for the Mekong riverboat route but check current advisories.",
      },
      {
        q: "What should I pack?",
        a: "Light, breathable clothing. A light rain jacket (even in dry season). Comfortable walking shoes for excursions. Sunscreen, hat, insect repellent. Smart casual for dinner on luxury ships. A good book — the river demands it.",
      },
      {
        q: "Is travel insurance required?",
        a: "Yes. We require all guests to hold comprehensive travel insurance covering medical evacuation, trip cancellation, and personal belongings. We can recommend providers if needed.",
      },
    ],
  },
  {
    category: "Onboard Experience",
    questions: [
      {
        q: "Is there Wi-Fi on the ships?",
        a: "Most luxury ships offer complimentary Wi-Fi, though signal strength varies (especially mid-river). Think of it as a feature, not a bug — the Mekong is best experienced unplugged.",
      },
      {
        q: "Can you accommodate dietary requirements?",
        a: "Absolutely. All ships can cater to vegetarian, vegan, gluten-free, and halal diets with advance notice. The chefs are experienced and creative — you will not feel like an afterthought.",
      },
      {
        q: "What is the dress code?",
        a: "Casual during the day. Smart casual for dinner (no formal attire needed). Comfortable shoes for excursions. Leave the heels at home — teak decks and stiletto heels are not friends.",
      },
      {
        q: "Are the excursions included?",
        a: "Yes. All scheduled shore excursions with English-speaking guides are included in the cruise price. Optional premium experiences (private cooking classes, spa treatments) carry an additional charge.",
      },
    ],
  },
  {
    category: "Health & Safety",
    questions: [
      {
        q: "Is the Mekong cruise suitable for older travelers?",
        a: "Yes. The ships are designed for comfort, and most excursions involve gentle walking or boat rides. Some temple visits require stairs. We can arrange mobility-friendly alternatives for any excursion.",
      },
      {
        q: "Is it safe to drink the water?",
        a: "Bottled water is provided complimentary on all ships. Do not drink tap water. Ice in drinks onboard is made from purified water and is safe.",
      },
      {
        q: "What medical facilities are available?",
        a: "Larger ships have a basic medical kit and a trained crew member. In the event of a medical emergency, the ship can dock at the nearest town with hospital facilities. This is another reason travel insurance is essential.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="bg-[#0f1a2b] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#b8860b]/80 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Support
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-lg mx-auto">
            Everything you need to know before, during, and after your Mekong journey — from visas to vegetarian menus.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="max-w-[800px] mx-auto px-6 py-24">
        {faqs.map((section) => (
          <div key={section.category} className="mb-16 last:mb-0">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 pb-4 border-b border-[#e5e5e5]">
              {section.category}
            </h2>
            <div className="space-y-8">
              {section.questions.map((item) => (
                <div key={item.q}>
                  <h3 className="font-bold text-[16px] mb-2">{item.q}</h3>
                  <p className="text-[#444] text-[15px] leading-[1.85] font-light">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f5f5f5] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Still have questions?</h2>
          <p className="text-[#666] text-[15px] font-light mb-8">
            Our travel specialists are here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0f1a2b] text-white px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
