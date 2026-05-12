import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Ben Tre Feels More Real — Travel Ideas",
  description: "One province. One bicycle. No schedule. Ben Tre doesn't perform for tourists — it just lives under its coconut palms and invites you to watch.",
};

export default function BenTrePage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/bentre_hero.png"
          alt="Lush coconut groves of Ben Tre province"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · One Place, Deeply
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Why Ben Tre<br />Feels More<br />Real
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            Most Mekong tours skip through five provinces in a day. We stayed in one for three days and finally understood the difference between seeing a place and being in it.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Crossing</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The moment you cross the Rạch Miễu bridge, the air changes.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            It gets thicker. Sweeter. You can feel it on your arms — the humidity that comes from millions of coconut palms exhaling at the same time. Ben Tre is called the Coconut Kingdom and the name isn&apos;t poetry. It&apos;s logistics. Coconut oil, coconut candy, coconut charcoal, coconut fiber, coconut vinegar, coconut wine. The economy runs on a single tree, and the tree runs on the river.
          </p>
          <p>
            I rented a bicycle — an old, heavy thing with one gear and a bell that didn&apos;t work — from a woman who seemed surprised anyone would want to ride it. The paths here are barely wider than the handlebars. Coconut fronds brush your shoulders. The shade is total. It&apos;s like cycling through a green tunnel that smells like charcoal smoke and ripe fruit and something fermented that I later learned was coconut sap being reduced into sugar.
          </p>
          <p>
            I passed a kiln making coconut charcoal. The smoke rose in a straight column, white against the green canopy, smelling oddly like incense. The man tending it waved. I waved back. That was the entire interaction. It was enough.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/heritage_longway.avif"
          alt="Cycling path through coconut groves"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Staying</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The day-trippers leave at 3 PM. That&apos;s when Ben Tre begins.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            There&apos;s a specific moment in the afternoon when the tourist buses pull out and the province exhales. The souvenir stands close. The English signs get put away. The real rhythm takes over — slower, quieter, conducted by heat and habit rather than itinerary.
          </p>
          <p>
            I stayed in a wooden house on stilts. The room had a bed, a fan, a mosquito net, and a window that looked straight out onto the canal. That was it. No minibar, no TV, no Wi-Fi password on a card. The family cooked dinner — elephant ear fish, not because it&apos;s a tourist attraction but because the father caught it that afternoon. I stood in the kitchen and tried to learn how to roll a spring roll without it falling apart. I failed. The grandmother laughed and showed me again, her fingers moving with the speed of sixty years of practice. My second attempt was ugly but edible. She nodded. Close enough.
          </p>
          <p>
            At night, I lay under the mosquito net listening to the frogs. Not a few frogs. A symphony of frogs — hundreds of them, in layers, in rounds, in a sound so dense it became a texture. Behind them, insects. Behind the insects, the river. And behind the river, a silence that was somehow louder than all of it.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/vc_day2.avif" alt="Village cycling in Ben Tre" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/1day_tea.avif" alt="Local tea with family" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/cultural-encounters-v2.avif" alt="Making rice paper by hand" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          The one-gear bicycle · Afternoon tea with the host · Rice paper drying in the sun
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/heritage_start.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;I asked the host what time breakfast was. She looked confused. &apos;When you wake up,&apos; she said. I realized I had forgotten what that felt like.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Before you stay in Ben Tre
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Accommodation</h3>
            <p>Homestays here are simple. Clean beds, mosquito nets, shared bathrooms. The luxury is context — waking up on the water, eating what the family eats, going to sleep when the frogs start.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Cycling</h3>
            <p>Completely flat. No hills whatsoever. The paths are narrow, shaded, and almost entirely free of motorized traffic. Even if you haven&apos;t cycled in years, this works.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring</h3>
            <p>Mosquito repellent (non-negotiable). Loose, light clothing. A flashlight for the walk from the bathroom at night. An appetite — you will be fed constantly and refusing is considered odd.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Phone Signal</h3>
            <p>Spotty at best. Good. You came here to listen to frogs, not to check email. The world will survive a day without you. You might find that you survive better without it.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/hidden-mekong" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Mekong You Don&apos;t See on Tours</span> — Into the narrow canals where the engine stops.
            </Link>
            <Link href="/travel-ideas/craft-villages" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Monkey Bridges &amp; Coconut Candy</span> — Village life on the Delta&apos;s wildest islets.
            </Link>
            <Link href="/travel-ideas/slow-day" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">A Slow Day in the Mekong</span> — Mist at six. Hammock at two. Lanterns at seven.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Stay where the frogs sing</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our multi-day Delta itineraries include an overnight homestay in Ben Tre — the kind with a mosquito net and a grandmother who cooks better than anyone you&apos;ve met.
          </p>
          <Link
            href="/itineraries/mekong-delta"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Mekong Itineraries
          </Link>
        </div>
      </section>
    </main>
  );
}
