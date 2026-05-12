import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cajuput Forests & Ecology — Travel Ideas",
  description: "Paddle through the flooded cajuput forests of Trà Sư, where birds outnumber people and the silence has a color.",
};

export default function CajuputForestsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/travel_cajuput_hero.jpg"
          alt="Paddling through flooded cajuput forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · 1–2 Days
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Where<br />Green<br />Becomes a Sound
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            The cajuput forests of the Mekong Delta are not destinations. They are worlds — half water, half sky, entirely alive.
          </p>
        </div>
      </section>

      {/* ── OPENING ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Trà Sư</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The boat is a metal tub. The forest is a cathedral. The birds are the choir.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Trà Sư is in An Giang province, near the Cambodian border, and getting there is part of the experience. The road narrows from highway to village lane to dirt track, and then the water starts — seeping up through the earth, filling the ditches, turning the fields into mirrors. You transfer from car to motorboat to a flat-bottomed sampan paddled by a woman in a conical hat who does not need to speak because the forest does all the talking.
          </p>
          <p>
            The cajuput trees — called tràm in Vietnamese — grow straight out of the water, their pale trunks ghostly against the green duckweed that covers the surface like a carpet. The effect is otherworldly: you are paddling through a flooded forest where the water is chartreuse, the trunks are silver, and the air smells like eucalyptus and mud and something ancient. Dragonflies the size of your thumb hover at eye level. A water monitor lizard slides off a log without a sound.
          </p>
          <p>
            And then the birds. Trà Sư is home to one of the largest nesting colonies in Southeast Asia — storks, cormorants, egrets, herons — and at certain times of year, the treetops are white with them. Not white like snow. White like something alive and moving and noisy. The sound is extraordinary: a constant, layered chatter that rises and falls like applause. You crane your neck. You count species. You give up counting.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/travel_cajuput_birdnest.jpg"
          alt="Bird colonies in cajuput forest canopy"
          fill
          className="object-cover"
        />
      </section>

      {/* ── U MINH HẠ ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">U Minh Hạ</p>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-8">
              The other forest — wilder, darker, less polished
            </h3>
            <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
              <p>
                If Trà Sư is the concert hall, U Minh Hạ is the jazz club. It&apos;s in Cà Mau province, at the very tip of Vietnam where the land gives up trying to be land and becomes something else: mangrove, mudflat, open sea. The melaleuca forest here is darker and denser. The channels are narrower. Your guide uses a machete to clear overhanging branches.
              </p>
              <p>
                Kayaking is the best way in. The paddle enters the water without a splash — the surface is so still it feels like gelatin. Mudskippers sit on exposed roots, watching you with eyes that shouldn&apos;t work but do. A kingfisher — electric blue, impossibly fast — crosses your bow and disappears. You paddle deeper. The light changes. The forest closes in. And for a few minutes, you are genuinely, beautifully lost.
              </p>
              <p>
                The coffee stop afterward is non-negotiable. In the village on the forest&apos;s edge, a woman brews cà phê sữa đá (iced Vietnamese coffee) so thick and sweet it could qualify as dessert. You drink it in a hammock. A cat sleeps on the table. The forest hums behind you. This is the Mekong Delta that nobody photographs, because photographs can&apos;t hold the humidity, the silence, the weight of green.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5]">
            <Image src="/images/travel_cajuput_kayak.jpg" alt="Kayaking in dark forest waterways" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/travel_cajuput_hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;I have been to forty-three countries. Trà Sư is the only place where I forgot to take a single photograph. I was too busy listening.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PRACTICAL ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">Planning your visit</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Best Time</h3>
            <p>August through November, when the floodwaters are highest and the forest is fully submerged. The bird populations peak in October. The duckweed is greenest after rain.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Getting There</h3>
            <p>Trà Sư is a 2.5-hour drive from Cần Thơ or 5 hours from HCMC. U Minh Hạ is farther — 3 hours south of Cần Thơ. Both work as day trips but reward overnight stays.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">What to Bring</h3>
            <p>Insect repellent (you will need it). Waterproof shoes. A telephoto lens if you have one. Patience — the best wildlife sightings happen when you stop paddling and wait.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Combine With</h3>
            <p>A floating market visit in Cần Thơ makes a perfect two-day pairing. Market at dawn, forest at noon, hammock by evening.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/hidden-mekong" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Mekong You Don&apos;t See on Tours</span> — Narrow canals and the silence between the palms.
            </Link>
            <Link href="/travel-ideas/hate-crowds" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">For Travelers Who Hate Crowds</span> — Private boats and empty waterways.
            </Link>
            <Link href="/travel-ideas/floating-markets" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Breakfast Arrives by Boat</span> — Dawn at the floating market, where the phở is still steaming.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Explore with us</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our 2-day Mekong Delta itinerary includes Trà Sư forest, floating markets, and private homestay accommodation.
          </p>
          <Link
            href="/itineraries/2-days"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View 2-Day Itinerary
          </Link>
        </div>
      </section>
    </main>
  );
}
