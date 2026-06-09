import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Floating Markets & River Food — Cai Rang Mekong Tour Ideas",
  description: "Wake before dawn to experience Cái Răng and Phong Điền floating markets. Learn about tree bẹo, hủ tiếu lắc, and cà phê kho in the Mekong Delta.",
  keywords: ["Mekong floating markets", "Cai Rang floating market", "Mekong Delta food", "Phong Dien market", "cây bẹo", "hủ tiếu lắc", "cà phê kho", "Mekong river food"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/floating-markets",
  },
  openGraph: {
    title: "Floating Markets & River Food — Cai Rang Mekong Tour Ideas",
    description: "Wake before dawn to experience Cái Răng and Phong Điền floating markets. Learn about tree bẹo, hủ tiếu lắc, and cà phê kho in the Mekong Delta.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/floating-markets",
    images: [{ url: "https://www.mekongrivercruise.com/images/floating-markets-new.avif", width: 1200, height: 630, alt: "Cai Rang floating market at sunrise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floating Markets & River Food",
    description: "Experience Cái Răng floating market and eat phở from a boat.",
    images: ["https://www.mekongrivercruise.com/images/floating-markets-new.avif"],
  },
}

export default function FloatingMarketsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/floating-markets-new.avif"
          alt="Cai Rang floating market at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Day Trip
          </p>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            Breakfast<br />Arrives<br />by Boat
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            At 5:30 AM, the Mekong is already awake. The floating market at Cái Răng has been trading since before you learned to sleep.
          </p>
        </div>
      </section>

      {/* ── OPENING ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Morning</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The alarm goes off at 4:45 AM. You will not regret it.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The boat picks you up in the dark from Ninh Kiều Wharf. The driver navigates by instinct through channels so narrow you can smell the night-blooming jasmine from bankside gardens. The engine is a low, rhythmic thud that becomes the heartbeat of the morning.
          </p>
          <p>
            Then the market appears. This is Cái Răng (Cần Thơ) — the largest floating market in the Mekong Delta — and it has been doing business on the water for over a hundred years. The system is elegant. Each merchant boat hoists a sample of its goods on a tall bamboo pole called a &quot;cây bẹo&quot;. A pineapple on the pole means &quot;I sell pineapples.&quot; A watermelon means watermelons. It is a completely silent, visual directory that works across languages and dialects.
          </p>
          <p>
            A woman balancing a pot of soup on a rocking hull pulls alongside. She is selling &quot;hủ tiếu lắc&quot; (shaking noodles) — named because of how the cook must shake and balance the bowl against the boat&apos;s rocking motion. You eat it with chopsticks, holding the hot bowl in one hand, while the morning mist rises off the water.
          </p>
          <p>
            Floating market visits like this are among the most beloved inclusions on a{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-[#b8860b] transition-colors">
              Mekong cruise
            </Link>
            {" "}— a living window into Delta life that no land-based tour can replicate.
          </p>
        </div>
      </section>

      {/* ── FULL IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/floating_pho.avif"
          alt="Boats laden with tropical fruit at Cai Rang market"
          fill
          className="object-cover"
        />
      </section>

      {/* ── THE FOOD ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Food</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Eating on water changes the way food tastes
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Something happens to a bowl of broth when you eat it on a rocking boat at 6 AM. The crab broth is richer. The herbs are sharper. You can also sample &quot;cà phê kho&quot; (stewed coffee), a traditional beverage kept warm constantly in a clay pot on a small clay stove, giving it a rich, dense flavor that is unlike any coffee you have had on land.
          </p>
          <p>
            The smaller market at Phong Điền — twenty minutes upstream and rarely visited by tour buses — is where the food gets personal. A grandmother makes bánh xèo (crispy pancakes) on a wok balanced on a charcoal stove, in a boat, while the current pulls her gently downstream. The batter sizzles. She folds it with the confidence of someone who has done this forty thousand times. You eat it with your fingers, wrapped in mustard greens, and the egg yolk runs down your wrist.
          </p>
        </div>
      </section>

      {/* ── SPLIT IMAGE + TEXT ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5]">
            <Image src="/images/floating_fruit.avif" alt="Fresh fruit from orchards" fill className="object-cover" />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">The Afternoon</p>
            <h3 className={`font-serif text-2xl md:text-3xl leading-tight mb-8 text-navy ${playfair.className}`}>
              After the market: orchards, music, and a hammock
            </h3>
            <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
              <p>
                The boat turns into a narrow canal lined with coconut palms and fruit trees — longan, rambutan, pomelo — heavy with fruit that you can pick from the boat if you lean far enough. A homestay appears: a wooden house on stilts with a garden that smells like lemongrass and fish sauce.
              </p>
              <p>
                This is where you hear đờn ca tài tử — the traditional music of the Mekong Delta, a UNESCO Intangible Heritage. A man with a đàn tranh (16-string zither) and a woman singing in a voice that sounds like the river itself: slow, bending, full of sorrow that somehow feels like joy.
              </p>
              <p>
                The hammock in the garden is not optional. You will end up in it. Everyone does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/1day_tea.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;The best meal I had in Vietnam cost forty cents, was served from a boat, and I have been trying to replicate it in my kitchen for three years. I cannot. The river was the secret ingredient.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PRACTICAL ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>Before you go</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">When</h3>
            <p>Go early. The market peaks between 5:30 and 7:30 AM. By 9:00, the produce boats are leaving and the tourist boats are arriving. You want to be there when the cooks are still stirring.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Getting There</h3>
            <p>Cái Răng is 6km from Cần Thơ city center. Most hotels arrange boat pickup from Ninh Kiều Wharf. From Ho Chi Minh City, it&apos;s a 3.5-hour drive.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring</h3>
            <p>Cash in small denominations (10k–50k VND notes). A waterproof bag for your phone. An empty stomach. A willingness to eat things you can&apos;t identify — they will be delicious.</p>
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
            href="/itineraries/2-days"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            {/* Image Section */}
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/pulse_delta.avif"
                alt="2-Day River Pulse"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  2 Days
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Can Tho
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  2-Day River Pulse
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  Experience the true contrast of the delta: a peaceful night in a riverside garden homestay followed by the vibrant dawn market.
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
            <Link href="/travel-ideas/craft-villages" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Monkey Bridges &amp; Coconut Candy</span> — The Delta&apos;s wildest islets and sweetest workshops.
            </Link>
            <Link href="/travel-ideas/hidden-mekong" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">The Mekong You Don&apos;t See on Tours</span> — Narrow canals, wooden oars, and the sound of dripping.
            </Link>
            <Link href="/travel-ideas/ben-tre-authentic" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Why Ben Tre Feels More Real</span> — One province, one bicycle, no schedule.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Hear the River Wake Up</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our multi-day Delta itineraries feature sunrise floating market visits with private boat and guide, ensuring you arrive before the crowds.
          </p>
          <Link
            href="/itineraries/2-days"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore 2-Day Route</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
