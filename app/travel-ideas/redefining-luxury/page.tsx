import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luxury Isn't What You Think — New Mekong River Luxury",
  description: "Discover a new definition of luxury on the Mekong River. Unparalleled privacy, invisible service, silence, and authentic connections on the finest boutique ships.",
  keywords: ["Mekong luxury travel", "luxury river cruise Vietnam", "boutique ship Mekong", "5 star Mekong cruise", "high-end Mekong Delta", "premium Vietnam river journey", "luxury Mekong cruise"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/redefining-luxury",
  },
  openGraph: {
    title: "Luxury Isn't What You Think — New Mekong River Luxury",
    description: "Discover a new definition of luxury on the Mekong River. Unparalleled privacy, invisible service, silence, and authentic connections on the finest boutique ships.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/redefining-luxury",
    images: [{ url: "https://www.mekongrivercruise.com/images/redefine_hero.avif", width: 1200, height: 630, alt: "Minimalist fruit plate on a teak deck at sunrise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Isn't What You Think — New Mekong River Luxury",
    description: "Discover a new definition of luxury on the Mekong River.",
    images: ["https://www.mekongrivercruise.com/images/redefine_hero.avif"],
  },
};

export default function RedefiningLuxuryPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/redefine_hero.avif"
          alt="Minimalist fruit plate on a teak deck at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · The New Luxury
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Luxury Isn&apos;t<br />What You<br />Think
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            I&apos;ve stayed in hotels with gold-plated faucets that left me feeling nothing. On the Mekong, a plate of dragon fruit on a teak table made me feel like the richest person alive.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Old Definition</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          For years, the travel industry confused luxury with excess. More gold. More marble. More imported everything.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I&apos;ve been on ships where the chandeliers were bigger than my apartment. Where the dinner menu featured ingredients flown in from three continents. Where the spa used products from Switzerland in a country that has been making its own medicinal oils for a thousand years. Everything screamed <em>look how much we spent</em>, and the effect was oddly deadening. Like eating too much sugar — impressive at first, nauseating by the third course.
          </p>
          <p>
            The Mekong taught me a different vocabulary. Luxury here is not about importing the world onto a ship. It&apos;s about the ship getting out of the way so you can see what&apos;s already here. The morning light on the water. The sound of an oar. The chef at the market at 5 AM, arguing over the freshness of a catfish with a fisherman who caught it twenty minutes ago. That argument — the insistence on local, on fresh, on <em>this river, this morning, this fish</em> — is more luxurious than any gold faucet I&apos;ve ever seen.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/fine-dining-deck.avif"
          alt="Fine dining under the stars on a river cruise"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Invisible Part</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The best luxury on this river is the thing you don&apos;t notice until it&apos;s gone.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            On the Jayavarman, I noticed something on the third morning. The cabin was quiet. Not quiet like a hotel room — quiet like a library, like a recording studio. I couldn&apos;t hear the engine. I couldn&apos;t hear the corridor. I could hear the river through the open balcony door — the soft, constant whisper of water against the hull — and that was it. The silence wasn&apos;t accidental. It was engineered. The engine room had been insulated with a specific material. The doors had been weighted. The hallway carpet had been chosen for its sound absorption. I only learned this because I asked. The crew just smiled — they&apos;d done their job so well it was invisible.
          </p>
          <p>
            That&apos;s the pattern on the best ships. The coffee that appears on your balcony without you ordering it. The turndown service that happens during dinner, so you never see it, you only feel it when you walk back to find the bed made, the lights dimmed, and a small chocolate on the pillow wrapped in banana leaf. The guide who notices you looking at a temple across the river and quietly arranges a stop there tomorrow — without you having to ask.
          </p>
          <p>
            It&apos;s not flashy. It&apos;s not Instagrammable. But it&apos;s the kind of care that makes you exhale. The kind that makes you stop performing the trip and start living it.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/jayavarman_dining.avif" alt="Dinner on deck" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/jewel_spa.avif" alt="Spa space on a river ship" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/jayavarman_suite.avif" alt="Suite with river view" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Dinner at 8 PM, stars overhead · The treatment room, mid-river · Waking up to this
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/jahan_dining.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;On day three, the steward brought my coffee at exactly 6:12 AM — the time I&apos;d been waking up. I hadn&apos;t told anyone. He just knew. That&apos;s luxury.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          What to look for in a luxury ship
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Guest-to-Crew Ratio</h3>
            <p>The best ships have nearly 1:1. This is how the coffee appears before you ask and the guide adjusts tomorrow&apos;s schedule based on a question you asked at dinner.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Kitchen</h3>
            <p>Ask where the chef buys ingredients. If the answer is &ldquo;the morning market&rdquo; or &ldquo;from a fisherman alongside the ship,&rdquo; you&apos;re in the right place. If the answer involves a supply chain from Bangkok, keep looking.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Noise</h3>
            <p>Stand in the cabin with the balcony closed. If you can hear the engine, the ship is cutting corners. The best engineering is the kind you never hear.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Balcony Door</h3>
            <p>Does it open fully? Can you fall asleep listening to the river? This single detail tells you everything about whether the ship was designed for the Mekong or just dropped onto it.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/luxury-cruises" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Slow Art of River Luxury</span> — When the clock stops between Saigon and Phnom Penh.
            </Link>
            <Link href="/travel-ideas/slow-day" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">A Slow Day in the Mekong</span> — Doing nothing, remembering everything.
            </Link>
            <Link href="/travel-ideas/hate-crowds" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">For Travelers Who Hate Crowds</span> — Private boats and empty waterways.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Experience the quiet kind</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Ships where the crew knows your name, the chef knows the river, and the balcony door opens all the way.
          </p>
          <Link
            href="/cruises"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Luxury Ships
          </Link>
        </div>
      </section>
    </main>
  );
}
