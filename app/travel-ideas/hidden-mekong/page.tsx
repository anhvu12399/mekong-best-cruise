import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Mekong You Don't See on Tours — Travel Ideas",
  description: "Past the tour boats and the PA systems, there is a quieter Mekong made of narrow canals, wooden oars, and the sound of water dripping from nipa palms.",
};

export default function HiddenMekongPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/hidden_hero.png"
          alt="Small wooden boat in a narrow Mekong canal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Off the Beaten Path
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            The Mekong<br />You Don&apos;t<br />See on Tours
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            Past the tour boats and the PA systems, past the stops where everyone photographs the same coconut candy, there is a different river. It smells like wet wood and jasmine. It sounds like dripping.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Turn</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The captain killed the engine and suddenly I could hear my own breathing.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            It happened about forty minutes out of Cần Thơ. We had been on the main river — wide, brown, busy with barges — and then the boat turned left into something that barely qualified as a waterway. The rạch. That&apos;s what locals call these capillary canals that branch off the Mekong like veins from an artery. The water narrowed to maybe three meters. Nipa palms arched overhead until the sky became a thin strip of white. And then the engine cut.
          </p>
          <p>
            The silence was physical. It landed on the boat like a weight. I could hear water dripping from the palm fronds. I could hear a rooster, far away, muffled by vegetation. I could hear the wooden oar entering the water behind me — a sound so specific, so different from a plastic paddle or a metal propeller, that it immediately recalibrated my sense of where I was. Not on a tour. Not on a trip. Just on the water, moving at the speed of someone&apos;s arm.
          </p>
          <p>
            A woman appeared on a wooden dock, washing lettuce in the canal. She didn&apos;t look up. A dog was asleep on the planks beside her, one ear twitching at flies. Beyond them, a small boy sat on an upturned bucket, fishing with a bamboo rod and a line so thin I couldn&apos;t see it. He caught something small and silver while I watched. He unhooked it, looked at it, and threw it back. Too small. He was maybe seven.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/dest_vietnam.avif"
          alt="Quiet canal life in the Mekong Delta"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Difference</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The standard tour gives you the highlights. The rạch gives you the texture.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I&apos;ve done the standard Mekong tour. Floating market at dawn, honey farm by ten, lunch on an island with traditional music and elephant ear fish, back to Saigon by four. It&apos;s efficient. It&apos;s pleasant. It is not wrong. But it&apos;s a checklist, and checklists have a way of keeping the world at arm&apos;s length. You see everything, you absorb nothing.
          </p>
          <p>
            The rạch trips are different because they remove the schedule. There is no next stop. The boat goes where the water goes. You might end up at a fish trap where a man explains — through gestures, because he speaks no English and your Vietnamese is limited to ordering coffee — how the bamboo weir works. You might pull up to a house on stilts where a woman offers you jasmine tea in a cup with no handle. The tea tastes like smoke and flowers and the specific heat of this afternoon.
          </p>
          <p>
            These are the moments that standard tours cannot package, because they depend on accident, on slowness, on being in the right canal at the right hour with no plan at all. I remember pulling a fishing net from the mud near Vĩnh Long, my hands disappearing into warm silt, and a kid laughing at my technique. I remember the weight of the net. I remember the smell — mineral, alive, ancient. That&apos;s the hidden Mekong. It doesn&apos;t photograph well. It stays with you anyway.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/coconut-forest-boat.avif" alt="Rowboat in a palm canal" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/cultural-encounters-new.avif" alt="Local artisan at work" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/monk-temple.avif" alt="Quiet village temple" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Palm canal near Trà Vinh · Basket weaver, Vĩnh Long · Afternoon light at a village pagoda
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/dest_cambodia.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;The captain turned off the engine and pointed at the water. A school of fish was breaking the surface, hundreds of them, catching the light. We watched for maybe five minutes. Nobody spoke. Then he started the oar again and we moved on.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Before you leave the main river
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Boat Size</h3>
            <p>Large cruise ships cannot access narrow canals. You need a sampan — a flat-bottomed wooden boat paddled by hand. Most hold 2–4 passengers. The smaller the boat, the deeper you go.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Timing</h3>
            <p>Early morning is best — the light is softer, the locals are most active, and the heat hasn&apos;t settled yet. By 10 AM the canals lose their mist and their magic.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Expect Nothing</h3>
            <p>There is no itinerary. That is the point. Bring water, sun protection, and a willingness to sit still. The river will do the rest.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Camera Note</h3>
            <p>Ask before photographing people. Most locals are friendly about it, but it&apos;s their home, not a set. And honestly — put it away sometimes. Some things are better remembered than captured.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/ben-tre-authentic" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Why Ben Tre Feels More Real Than You Expect</span> — One province, one bicycle, no schedule.
            </Link>
            <Link href="/travel-ideas/hate-crowds" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">For Travelers Who Hate Crowds</span> — How to do the Delta without the megaphones.
            </Link>
            <Link href="/travel-ideas/slow-day" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">A Slow Day in the Mekong</span> — From mist to lanterns, hour by unhurried hour.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Go where the engine stops</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Private sampan journeys into the narrow canals. No script. No crowds. Just the river and a wooden oar.
          </p>
          <Link
            href="/itineraries/private-charter"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Private Charters
          </Link>
        </div>
      </section>
    </main>
  );
}
