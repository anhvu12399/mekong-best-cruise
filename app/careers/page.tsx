import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Mekong River Cruise",
  description: "Join our team of Mekong River travel specialists in Ho Chi Minh City.",
  alternates: { canonical: "https://www.mekongrivercruise.com/careers" },
};

export default function CareersPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="bg-[#0f1a2b] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#b8860b]/80 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">Join Our Team</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">Careers</h1>
          <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-lg mx-auto">
            We&apos;re a small team that cares deeply about the Mekong and about making travel feel personal.
          </p>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-6 py-24">
        <h2 className="font-serif text-2xl md:text-3xl mb-10">Current Openings</h2>
        {[
          { title: "Senior Travel Consultant", loc: "Ho Chi Minh City", desc: "Design bespoke Mekong itineraries for international travelers. 3+ years luxury travel experience required." },
          { title: "Content & SEO Specialist", loc: "HCMC / Remote", desc: "Create editorial content for travel ideas, destination guides, and ship profiles." },
          { title: "Operations Coordinator", loc: "Ho Chi Minh City", desc: "Coordinate between ship partners, ground operators, and guests daily." },
        ].map((j) => (
          <div key={j.title} className="border border-[#e5e5e5] p-8 mb-6 hover:border-[#b8860b] transition-colors">
            <h3 className="font-bold text-lg mb-2">{j.title}</h3>
            <p className="text-[#999] text-sm mb-3">{j.loc}</p>
            <p className="text-[#444] text-[15px] leading-[1.85] font-light">{j.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#f5f5f5] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl mb-4">Interested?</h2>
          <p className="text-[#666] text-[15px] font-light mb-8">Send your CV to:</p>
          <a href="mailto:careers@mekongrivercruise.com" className="inline-block bg-[#0f1a2b] text-white px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors">
            careers@mekongrivercruise.com
          </a>
        </div>
      </section>
    </main>
  );
}
