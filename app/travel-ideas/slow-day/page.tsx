import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A Slow Day in the Mekong — Mindful River Travel Ideas",
  description: "Embrace the slow pace of the Mekong Delta. A complete timeline of a mindful travel day: morning mist, midday hammocks, evening lanterns, and unhurried luxury.",
  keywords: ["slow travel Mekong", "mindful travel Vietnam", "Mekong river pace", "relaxing Mekong cruise", "Mekong Delta day", "peaceful Vietnam travel", "Mekong luxury travel"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/slow-day",
  },
  openGraph: {
    title: "A Slow Day in the Mekong — Mindful River Travel Ideas",
    description: "Embrace the slow pace of the Mekong Delta. A complete timeline of a mindful travel day: morning mist, midday hammocks, evening lanterns, and unhurried luxury.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/slow-day",
    images: [{ url: "https://www.mekongrivercruise.com/images/slow_hero.png", width: 1200, height: 630, alt: "Peaceful morning with coffee on the Mekong" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Slow Day in the Mekong",
    description: "Embrace the slow pace of the Mekong Delta with mindful travel.",
    images: ["https://www.mekongrivercruise.com/images/slow_hero.png"],
  },
};

export default function SlowDayPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/slow_hero.png"
          alt="Peaceful morning with coffee on the Mekong"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Mindful Travel
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            A Slow Day<br />in the<br />Mekong
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            I kept a log of one day on the river. Not what I did — what I noticed. It turned out to be the most detailed diary entry I&apos;ve ever written.
          </p>
        </div>
      </section>

      {/* ── 06:00 ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">06:00 AM — Quiet</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The water was pewter. Then bronze. Then gold.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I set an alarm for six but my body woke at five-forty. Something about the light — it comes in sideways here, through the sliding glass door, and it has a weight to it, a warmth, even before the sun clears the tree line. The mist was sitting on the river like a held breath. Through it, shapes — a fishing boat, a wooden dock, the silhouette of a woman carrying something on her head.
          </p>
          <p>
            The phin filter was already on the balcony table. Someone had placed it there without knocking — coffee, condensed milk, a small pot of hot water, a plate with four slices of dragon fruit arranged like a fan. The coffee dripped. I counted the drops. Not because I was bored, but because for the first time in months I had nothing competing for my attention. Drip. Drip. Drip. Each one catching the early light like a tiny amber bead.
          </p>
          <p>
            Somewhere far away, a rooster. Closer, the sound of an oar. A man in a conical hat passed the ship in a boat so low it barely displaced water. He was smoking. The smoke trailed behind him, mixing with the mist, and for a moment the whole scene looked like a painting that someone was still finishing.
          </p>
        </div>
      </section>

      {/* ── SPLIT: AFTERNOON ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-[4/3]">
          <Image src="/images/slow_coffee.png" alt="Vietnamese morning coffee" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">02:00 PM — Warm</p>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
            I fell asleep in a hammock. I have no idea for how long.
          </h3>
          <div className="space-y-4 text-[#444] text-[15px] leading-[1.85] font-light">
            <p>
              The heat at two o&apos;clock is not aggressive — it&apos;s persuasive. It doesn&apos;t attack you. It simply makes every alternative to lying down seem unreasonable. The hammock was strung between two mango trees in the garden of a homestay, and there was a breeze off the canal that smelled like mud and lotus and the specific sweetness of fruit that is one day past perfect.
            </p>
            <p>
              I opened a book. Read a page. Read it again because I hadn&apos;t absorbed a single word. Put the book on my chest. Closed my eyes. The world became sound: wind in the palm fronds, a distant motorbike, the creak of the hammock rope, a chicken making its territorial announcements. I slept. When I woke up, someone had left a plate of chilled watermelon on the stool beside me. I ate it slowly, the juice running down my wrist, and realized I hadn&apos;t looked at my phone since morning.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07:00 PM ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">07:00 PM — Unhurried</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The sun dropped and the river changed its personality.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Near the equator, sunset is fast. The sky goes from blue to amber to bruised purple in what feels like twenty minutes. The river, which had been brown all day, suddenly held the color like a mirror — streaks of orange and pink that moved with the current, stretching and folding.
          </p>
          <p>
            On the deck, someone had lit paper lanterns. They cast a warm, unsteady light on the teak wood, and the shadows of the wine glasses rocked gently with the hull. Dinner came in courses I didn&apos;t count — river prawn, local greens stir-fried with garlic, a clay pot of caramelized catfish that tasted like the river had cooked it itself. I drank a glass of something white and cold. Then another. The crickets started. The stars came out — more of them than I&apos;d seen in years, because there was no city glow to compete with.
          </p>
          <p>
            I stayed on deck for a long time after dinner. Not waiting for anything. Not avoiding anything. Just sitting in a chair, in the dark, on a river in Southeast Asia, listening to water move against wood. I wrote in my journal: <em>Today I did nothing. I noticed everything.</em>
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/slow_hammock.png" alt="Relaxing in hammock" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/slow_lanterns.png" alt="Sunset lanterns" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/slow_reading.png" alt="Reading on deck" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          River prawn for lunch · The balcony at 6:47 PM · Drifting after dinner
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/reviews-parallax-bg.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;My wife asked what we did all day. I said &apos;nothing.&apos; She asked why I was smiling. I couldn&apos;t explain it. You have to be on the river to understand.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          How to do nothing properly
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Leave the Watch</h3>
            <p>The crew will tell you when things happen. Meals appear. Excursions are announced gently. There is no schedule to master — that&apos;s the entire point.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Wi-Fi</h3>
            <p>It exists. It&apos;s intermittent. In the middle of the river, it often drops entirely. After the first hour of panic, you realize this is the most expensive digital detox you&apos;ve ever done — and the most effective.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Hammock Window</h3>
            <p>Between 1 PM and 3 PM, the world stops. This is not laziness; it&apos;s local wisdom. The heat demands rest. Obey it. You will wake up better.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring a Book</h3>
            <p>Something long and slow. A river boat is the only place I&apos;ve ever finished a 600-page novel in three days. The rhythm of the water helps.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/redefining-luxury" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Luxury Isn&apos;t What You Think</span> — Privacy, time, and the sound of the river at night.
            </Link>
            <Link href="/travel-ideas/luxury-cruises" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Slow Art of River Luxury</span> — What happens when the clock stops working.
            </Link>
            <Link href="/travel-ideas/ben-tre-authentic" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Why Ben Tre Feels More Real</span> — Frogs, spring rolls, and a night with no Wi-Fi.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Do nothing. Remember everything.</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our river cruises are designed around the most luxurious commodity: unscheduled time.
          </p>
          <Link
            href="/cruises"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Find Your Ship
          </Link>
        </div>
      </section>
    </main>
  );
}
