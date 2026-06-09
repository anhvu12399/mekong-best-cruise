import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Why Ben Tre Feels More Real — Authentic Mekong Travel Ideas",
  description: "Discover authentic Ben Tre, the Coconut Kingdom of the Mekong Delta. Experience cycling under coconut palms, peaceful homestays, and genuine local life.",
  keywords: ["Ben Tre", "Ben Tre travel", "authentic Mekong Delta", "Mekong homestay", "cycling Ben Tre", "Vietnam slow travel", "Mekong coconut kingdom", "Ben Tre tours"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/ben-tre-authentic",
  },
  openGraph: {
    title: "Why Ben Tre Feels More Real — Authentic Mekong Travel Ideas",
    description: "Discover authentic Ben Tre, the Coconut Kingdom of the Mekong Delta. Experience cycling under coconut palms, peaceful homestays, and genuine local life.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/ben-tre-authentic",
    images: [{ url: "https://www.mekongrivercruise.com/images/bentre_hero.avif", width: 1200, height: 630, alt: "Lush coconut groves of Ben Tre province" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Ben Tre Feels More Real",
    description: "Discover authentic Ben Tre, the Coconut Kingdom of the Mekong Delta.",
    images: ["https://www.mekongrivercruise.com/images/bentre_hero.avif"],
  },
}

export default function BenTrePage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/bentre_hero.avif"
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
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The moment you cross the Hàm Luông bridge, the air changes.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            It gets thicker. Sweeter. You can feel it on your arms — the humidity that comes from millions of coconut palms exhaling at the same time. Bến Tre is called the Coconut Kingdom and the name isn&apos;t poetry. It&apos;s logistics. Coconut oil, coconut candy, coconut charcoal, coconut fiber, coconut vinegar, coconut wine. The economy runs on a single tree, and the tree runs on the river.
          </p>
          <p>
            I rented a bicycle — an old, heavy thing with one gear and a bell that didn&apos;t work — from a woman who seemed surprised anyone would want to ride it. The paths here are barely wider than the handlebars. Coconut fronds brush your shoulders. The shade is total. It&apos;s like cycling through a green tunnel that smells like charcoal smoke and ripe fruit and something fermented that I later learned was coconut sap being reduced into sugar.
          </p>
          <p>
            I passed a kiln making coconut charcoal in the heart of Chợ Lách district. The smoke rose in a straight column, white against the green canopy, smelling oddly like incense. In the distance, the rhythmic patter of handlooms from the Sơn Đốc puff pastry village (làng bánh phồng Sơn Đốc) echoed. The man tending the kiln waved. I waved back. That was the entire interaction. It was enough.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/bentre_cycling.avif"
          alt="Cycling path through coconut groves"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Staying</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The day-trippers leave at 3 PM. That&apos;s when Bến Tre begins.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            There&apos;s a specific moment in the afternoon when the tourist buses pull out and the province exhales. The souvenir stands close. The English signs get put away. The real rhythm takes over — slower, quieter, conducted by heat and habit rather than itinerary.
          </p>
          <p>
            I stayed in a wooden house on stilts at the edge of the Hàm Luông river branch. The room had a bed, a fan, a mosquito net, and a window that looked straight out onto the canal. That was it. No minibar, no TV, no Wi-Fi password on a card. The family cooked dinner — fresh elephant ear fish (cá tai tượng chiên xù) wrapped in wild herbs, and a clay pot of traditional coconut-steamed rice (cơm dừa), not because it&apos;s a tourist attraction but because the father caught the fish and harvested the coconuts that afternoon.
          </p>
          <p>
            We rolled spring rolls together, utilizing crispy rice paper from the nearby Mỹ Lồng village (bánh tráng Mỹ Lồng). I stood in the kitchen and tried to learn how to roll them without tearing the thin paper. I failed. The grandmother laughed and showed me again, her fingers moving with the speed of sixty years of practice. My second attempt was ugly but edible. She nodded. Close enough.
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
            <Image src="/images/bentre_tea.avif" alt="Local tea with family" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/bentre_candy.avif" alt="Making coconut candy" fill className="object-cover" />
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Before you stay in Bến Tre
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
            {/* Image Section */}
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

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Ben Tre Canals
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
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Stay where the frogs sing</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our multi-day Delta itineraries include an overnight homestay in Bến Tre — the kind with a mosquito net and a grandmother who cooks better than anyone you&apos;ve met.
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
