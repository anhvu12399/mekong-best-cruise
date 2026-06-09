import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A Slow Day in the Mekong — Mindful River Travel Ideas",
  description: "Embrace the slow pace of the Mekong Delta. A complete timeline of a mindful travel day: morning phin coffee, midday mango tree nap, and evening fireflies on the Cổ Chiên River.",
  keywords: ["slow travel Mekong", "mindful travel Vietnam", "Mekong river pace", "relaxing Mekong cruise", "Mekong Delta day", "phin coffee", "Co Chien river", "fireflies ban trees"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/slow-day",
  },
  openGraph: {
    title: "A Slow Day in the Mekong — Mindful River Travel Ideas",
    description: "Embrace the slow pace of the Mekong Delta. A complete timeline of a mindful travel day: morning phin coffee, midday mango tree nap, and evening fireflies on the Cổ Chiên River.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/slow-day",
    images: [{ url: "https://www.mekongrivercruise.com/images/slow_hero.avif", width: 1200, height: 630, alt: "Peaceful morning with coffee on the Mekong" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Slow Day in the Mekong",
    description: "Embrace the slow pace of the Mekong Delta with mindful travel.",
    images: ["https://www.mekongrivercruise.com/images/slow_hero.avif"],
  },
}

export default function SlowDayPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/slow_hero.avif"
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
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            A Slow Day<br />in the<br />Mekong
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            I kept a log of one day on the Cổ Chiên River. Not what I did — what I noticed. It turned out to be the most detailed diary entry I&apos;ve ever written.
          </p>
        </div>
      </section>

      {/* ── 06:00 ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">06:00 AM — Quiet</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The water was pewter. Then bronze. Then gold.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I set an alarm for six but my body woke at five-forty. Something about the light — it comes in sideways here, through the sliding glass door, and it has a weight to it, a warmth, even before the sun clears the tree line. The mist was sitting on the Cổ Chiên River branch like a held breath. Through it, shapes — a fishing boat, a wooden dock, the silhouette of a woman carrying fresh herbs.
          </p>
          <p>
            The traditional phin filter was already on the balcony table. Someone had placed it there without knocking — thick robusta grounds, sweetened condensed milk, a small pot of boiling water. The coffee dripped with agonizing slowness, taking nearly seven minutes to filter. I counted the drops. Not because I was bored, but because for the first time in months I had nothing competing for my attention. Each drop caught the early gold light.
          </p>
          <p>
            Somewhere far away, a rooster. Closer, the sound of an oar. A man in a conical hat passed the ship in a boat so low it barely displaced water. He was smoking. The smoke trailed behind him, mixing with the mist, and for a moment the whole scene looked like a painting that someone was still finishing.
          </p>
        </div>
      </section>

      {/* ── SPLIT: AFTERNOON ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-[4/3]">
          <Image src="/images/slow_coffee.avif" alt="Vietnamese morning coffee" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">02:00 PM — Warm</p>
          <h3 className={`font-serif text-2xl md:text-3xl leading-tight mb-6 text-navy ${playfair.className}`}>
            I fell asleep in a hammock. I have no idea for how long.
          </h3>
          <div className="space-y-4 text-[#444] text-[15px] leading-[1.85] font-light">
            <p>
              In the Delta, the midday hours are too hot for action. Locals practice the art of the mango tree nap (xoài tree siesta), hanging a hemp hammock between the thick, shade-giving branches of mature mango trees. The breeze coming off the Cổ Chiên River cools the leaves, making the garden feel ten degrees cooler than the street.
            </p>
            <p>
              I opened a book. Read a page. Closed my eyes. The world became sound: wind in the palm fronds, a distant boat motor, the creak of the hammock rope, a chicken making its territorial announcements. I slept. When I woke up, someone had left a plate of chilled local watermelon on the wooden stool beside me. I ate it slowly, the juice running down my wrist, and realized I hadn&apos;t looked at my phone since morning.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07:00 PM ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">07:00 PM — Unhurried</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The sun dropped and the river changed its personality.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Near the equator, sunset is fast. The sky goes from blue to amber to bruised purple in what feels like twenty minutes. The Cổ Chiên River, which had been brown all day, suddenly held the color like a mirror — streaks of orange and pink that moved with the current, stretching and folding.
          </p>
          <p>
            But the real magic happens after dark along the quiet banks. We boarded a small wooden sampan and rowed quietly towards the bần trees (mangrove apples) growing at the water&apos;s edge. In the pitch black, thousands of synchronous fireflies (đom đóm) flashed in unison, turning the bần trees into pulsing green Christmas trees. It was a silent light show, rhythmic and completely natural.
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
            <Image src="/images/slow_hammock.avif" alt="Relaxing in hammock" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/slow_lanterns.avif" alt="Sunset lanterns" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/slow_reading.avif" alt="Reading on deck" fill className="object-cover" />
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          How to do nothing properly
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Drip Coffee Art</h3>
            <p>Wait for the phin. Do not look for instant espresso. The 7 minutes it takes to filter robusta beans is an exercise in mindfulness. Savor the process.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Xoài Tree Siesta</h3>
            <p>Obey the afternoon heat. Hang a hammock in the shade of a mango tree between 1 PM and 3 PM. Let the river breeze do the work. It is local wisdom at its finest.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Fireflies Viewing</h3>
            <p>The fireflies in the bần trees are best seen on moonless nights. Ask your boat captain to guide the sampan close to the branches with the engine off to avoid disturbing the display.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring</h3>
            <p>A paper journal and a pen. A high-quality insect repellent for evening sampan rides. A willingness to completely disconnect from the internet for a day.</p>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED ITINERARY ── */}
      <section className="py-20 bg-[#faf8f5] border-t border-[#e0d9ce]">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">
            Recommended Route
          </span>
          <h2 className={`font-serif text-3xl md:text-4xl text-navy mb-10 ${playfair.className}`}>
            How to Experience This
          </h2>

          <Link
            href="/itineraries/1-day"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/1day_hero.avif"
                alt="1-Day Mindful Mekong"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  1 Day
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Cổ Chiên River Canals
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  1-Day Mindful Mekong
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  A slow-paced, deeply connected private journey into the quiet heart of the delta&apos;s side canals, away from the tourist path.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all">
                  <span>Explore Route</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
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
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Do nothing. Remember everything.</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our river cruises are designed around the most luxurious commodity: unscheduled time on the Cổ Chiên River.
          </p>
          <Link
            href="/itineraries/1-day"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore Mindful Route</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
