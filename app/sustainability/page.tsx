import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sustainability — Mekong River Cruise",
  description: "Our commitment to responsible travel on the Mekong River. Learn about our environmental practices, community partnerships, and cultural preservation efforts.",
  keywords: ["sustainable Mekong cruise", "responsible travel Vietnam", "eco-friendly river cruise", "Mekong community tourism"],
  alternates: { canonical: "https://www.mekongrivercruise.com/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src="/images/about_responsible.avif"
          alt="Community engagement along the Mekong"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Our Responsibility
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Traveling the<br />Mekong,<br />Responsibly
          </h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The river gives. We believe in giving back.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The Mekong feeds 60 million people. It shapes cultures, carves landscapes, and sustains ecosystems that have evolved over millennia. We don&apos;t take that lightly. Every journey we operate is designed to leave the river and its communities better than we found them — or at the very least, no worse.
          </p>
          <p>
            This isn&apos;t a marketing page with vague promises. Below is what we actually do, what we&apos;re still working on, and where we know we fall short. Transparency is part of the commitment.
          </p>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-xl mb-4">Environmental</h3>
              <ul className="space-y-3 text-[#444] text-[15px] leading-[1.85] font-light">
                <li className="border-l-2 border-[#b8860b] pl-4">All partner vessels comply with IMO wastewater discharge standards</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Single-use plastics eliminated across 85% of our fleet as of 2025</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Carbon offset program offered at booking (optional, covers full itinerary)</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Preference given to vessels with solar-assist systems and hybrid propulsion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Community</h3>
              <ul className="space-y-3 text-[#444] text-[15px] leading-[1.85] font-light">
                <li className="border-l-2 border-[#b8860b] pl-4">Shore excursions employ local guides from the communities we visit</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Homestay partnerships directly benefit host families — no intermediary markup</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Annual contribution to floating classroom programs in the Vietnamese Delta</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Craft village visits purchase directly from artisans, not resellers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Cultural</h3>
              <ul className="space-y-3 text-[#444] text-[15px] leading-[1.85] font-light">
                <li className="border-l-2 border-[#b8860b] pl-4">Guests briefed on cultural etiquette before every excursion</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Photography guidelines: always ask, never intrude</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Support for UNESCO-listed đờn ca tài tử traditional music preservation</li>
                <li className="border-l-2 border-[#b8860b] pl-4">Temple visit protocols developed with local religious communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HONESTY ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">Where we&apos;re still improving</h2>
        <div className="space-y-6 text-[#444] text-[15px] leading-[1.85] font-light">
          <p>
            River cruising uses diesel fuel. There is no way around that yet. We are actively evaluating LNG and electric options as they become viable for the Mekong&apos;s unique conditions (shallow draft, variable water levels), but we are not there today.
          </p>
          <p>
            We also acknowledge that tourism, even done well, changes the places it touches. We monitor visitor impact at our most-visited communities and adjust itineraries when we see signs of fatigue. Sometimes that means removing a popular stop from rotation. It&apos;s not good for short-term bookings. It&apos;s good for the river.
          </p>
        </div>
      </section>
    </main>
  );
}
