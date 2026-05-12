import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Travelers Who Hate Crowds — Travel Ideas",
  description: "No megaphones. No matching hats. No forty-person boats. How to see the Mekong Delta without seeing another tourist.",
};

export default function HateCrowdsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/travel_private_hero.jpg"
          alt="Empty stretch of the Mekong with one private boat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Private &amp; Uncrowded
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            For Travelers<br />Who Hate<br />Crowds
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            You&apos;ve seen the TripAdvisor reviews. Packed boats. Scripted stops. Matching hats. You swore you&apos;d never do the Mekong. Here&apos;s why you were almost right — and how to do it differently.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Fear</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          I&apos;ve been on the bad tour. I know what you&apos;re afraid of.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I need to be honest. The first time I visited the Mekong Delta, I hated it. I was on a boat with thirty-seven other people. A guide with a microphone pointed at things and said their names in a voice that suggested he had said those names eleven thousand times before. We docked at an island. We walked single-file through a coconut candy workshop. We sat in a row and listened to traditional music played for the eighteenth time that day. We ate elephant ear fish. We bought souvenirs. We got back on the bus.
          </p>
          <p>
            I remember almost nothing from that day except the feeling of being processed. Like luggage on a conveyor belt — picked up, moved, put down, picked up again. The Delta itself — the water, the light, the people who actually live there — was a backdrop. Set dressing. I left thinking: <em>well, that&apos;s ticked off the list</em>. It was the loneliest thought I&apos;ve ever had on a trip.
          </p>
          <p>
            So I understand the fear. Crowded. Commercialized. Scripted. If that&apos;s the Mekong, who needs it? But here&apos;s the thing I didn&apos;t know then: the Mekong Delta is 39,000 square kilometers. That bad tour covered about 0.001% of it. The rest of it was just waiting, empty, for someone willing to show up without a checklist.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/travel_private_canal.jpg"
          alt="Private moment on a quiet stretch of river"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Fix</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          A private boat changes everything. Not just the route — the entire feeling.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The second time I went, I had a sampan and a guide named Tùng. Just us. Tùng grew up on the river — his family farms catfish near Vĩnh Long — and he knew every canal, every shortcut, every house where the grandmother makes the best spring rolls. We left at 6 AM while the tour boats were still loading at the dock.
          </p>
          <p>
            By 7 AM we were in a canal so narrow the palm fronds brushed the gunwales. No engine — Tùng paddled. The only sound was the oar, the water, and a rooster somewhere behind the trees. We stopped at a fish trap and watched a man pull up the bamboo weir. We stopped at a house where a woman was making rice paper on a cloth stretched over a steaming pot. She offered us tea without being asked. We drank it sitting on a wooden bench, watching the canal traffic — two boats in forty minutes, both loaded with coconuts.
          </p>
          <p>
            Nobody pointed a microphone at anything. Nobody herded us toward a souvenir shop. Nobody told us to take a photo. The Delta, without the crowd, is not the same place. It&apos;s quieter, slower, and strangely more generous — as if the people who live there can only relax when there are fewer of us.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_private_hero.jpg" alt="Private boat on a quiet canal" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_private_canal.jpg" alt="Empty waterway at golden hour" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_bentre_cycling.jpg" alt="Cycling path through palms" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Tùng&apos;s sampan, 7 AM · Sunset, nobody else · The cycling path near Trà Vinh
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/travel_private_hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;We passed the tour boats docked at the island. Forty people getting off. We kept going. Five minutes later, the river was empty. It stayed empty all day.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          How to avoid every tourist
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Private</h3>
            <p>A private sampan (2–4 people) costs more than a group tour, but the difference in experience is not linear — it&apos;s exponential. You control the route, the stops, the pace.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Small</h3>
            <p>If you&apos;re booking a ship, look for ones with fewer than 20 cabins. They can access smaller ports and side channels that the floating hotels can&apos;t reach.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Early</h3>
            <p>Tour buses leave Saigon at 8 AM and arrive in the Delta by 10. If you&apos;re already on the water at 6, you have a four-hour head start on everyone.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Deep</h3>
            <p>Skip Mỹ Tho and the main islands. Ask your guide about Trà Vinh, Sóc Trăng, or the backwaters of An Giang. These places have no souvenir shops because nobody comes here to buy souvenirs.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/hidden-mekong" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Mekong You Don&apos;t See on Tours</span> — The narrow canals where the engine stops.
            </Link>
            <Link href="/travel-ideas/redefining-luxury" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Luxury Isn&apos;t What You Think</span> — Why a crew of twenty beats a ship of two hundred.
            </Link>
            <Link href="/travel-ideas/cajuput-forests" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Where Green Becomes a Sound</span> — Paddling through flooded forests, alone.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Have the river to yourself</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Private charters. Small ships. Guides who know the back canals. No megaphones involved.
          </p>
          <Link
            href="/itineraries/private-charter"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View Private Charters
          </Link>
        </div>
      </section>
    </main>
  );
}
