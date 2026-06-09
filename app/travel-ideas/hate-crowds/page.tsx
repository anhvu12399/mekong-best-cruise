import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "For Travelers Who Hate Crowds — Private Mekong Travel Ideas",
  description: "How to see the Mekong Delta without the crowds. Skip the tourist traps and discover private sampans, Vĩnh Tế Canal, and Cù Lao Dung islet.",
  keywords: ["Mekong without crowds", "Vĩnh Tế Canal", "Cù Lao Dung", "dầu rái resin", "private sampan Mekong", "quiet Mekong backwaters", "private Mekong cruise"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/hate-crowds",
  },
  openGraph: {
    title: "For Travelers Who Hate Crowds — Private Mekong Travel Ideas",
    description: "How to see the Mekong Delta without the crowds. Skip the tourist traps and discover private sampans, Vĩnh Tế Canal, and Cù Lao Dung islet.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/hate-crowds",
    images: [{ url: "https://www.mekongrivercruise.com/images/nocrowd_hero.avif", width: 1200, height: 630, alt: "Empty stretch of the Mekong with one private boat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Travelers Who Hate Crowds — Private Mekong Travel",
    description: "How to see the Mekong Delta without the crowds.",
    images: ["https://www.mekongrivercruise.com/images/nocrowd_hero.avif"],
  },
}

export default function HateCrowdsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/nocrowd_hero.avif"
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
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            For Travelers<br />Who Hate<br />Crowds
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            You&apos;ve seen the reviews. Packed boats. Scripted stops. Matching hats. You swore you&apos;d never do the Mekong. Here&apos;s how to do it differently.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Fear</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          I&apos;ve been on the bad tour. I know what you&apos;re afraid of.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            I need to be honest. The first time I visited the Mekong Delta, I hated it. I was on a boat with thirty-seven other people. A guide with a microphone pointed at things and said their names in a voice that suggested he had said those names eleven thousand times before. We docked at an island. We walked single-file through a coconut candy workshop. We sat in a row and bought souvenirs. We got back on the bus.
          </p>
          <p>
            I remember almost nothing from that day except the feeling of being processed. Like luggage on a conveyor belt. The Delta itself — the water, the light, the people who actually live there — was a backdrop. I left thinking: <em>well, that&apos;s ticked off the list</em>.
          </p>
          <p>
            So I understand the fear. Crowded. Commercialized. Scripted. If that&apos;s the Mekong, who needs it? But here&apos;s the thing: the Mekong Delta is 39,000 square kilometers. That bad tour covered about 0.001% of it. The rest of it is waiting, empty, for those willing to show up without a checklist.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/exp_astrology.avif"
          alt="Private moment on a quiet stretch of river"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Fix</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          A private boat changes everything. Not just the route — the entire feeling.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The second time I went, I had a sampan and a guide named Tùng. Just us. Tùng grew up on the river — his family farms catfish near Vĩnh Long — and he knew every canal. We navigated using a traditional wooden sampan, its hull sealed with sticky &quot;dầu rái&quot; (dipterocarpus alatus wood resin) to make it waterproof, smelling of dry wood and forest oils. We left at 6 AM while the tour boats were still loading at the dock.
          </p>
          <p>
            By 7 AM we were in a canal so narrow the palm fronds brushed the gunwales. No engine — Tùng paddled. The only sound was the oar, the water, and a rooster. We bypassed the busy tourist channels and headed towards the Vĩnh Tế Canal in An Giang, a historic waterway hand-dug in the early 19th century that stretches along the Cambodian border.
          </p>
          <p>
            Later, we sailed to Cù Lao Dung islet near the mouth of the river. It is a world of mangroves and quiet nipa palm forests where the delta dissolves into the East Sea. There are no souvenir stands. Just small shrimp farming villages and dirt roads. We stopped at a house where a woman was making rice paper. She offered us tea. We drank it sitting on a wooden bench, watching the canal traffic — two boats in forty minutes, both loaded with coconuts.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/pulse_delta.avif" alt="Small private boat on a quiet canal" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/dest_myanmar.avif" alt="Empty waterway at golden hour" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/dest_thailand.avif" alt="Deserted cycling path" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Tùng&apos;s sampan, 7 AM · Sunset, nobody else · The cycling path near Trà Vinh
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/banner_4.avif)" }}
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          How to avoid every tourist
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Private</h3>
            <p>A private sampan (2–4 people) costs more than a group tour, but the difference in experience is exponential. You control the route, the stops, and the pace.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Small</h3>
            <p>If you&apos;re booking a ship, look for ones with fewer than 20 cabins. They can access smaller ports and side channels that the floating hotels can&apos;t reach.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Early</h3>
            <p>Tour buses leave Saigon at 8 AM. If you&apos;re already on the water at 6, you have a four-hour head start on everyone.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Deep</h3>
            <p>Skip Mỹ Tho. Ask your guide about Cù Lao Dung, Vũng Liêm, or the backwaters of An Giang. These places have no souvenir shops because nobody comes here to buy souvenirs.</p>
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
            href="/itineraries/private-charter"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            {/* Image Section */}
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/pulse_delta.avif"
                alt="Private Mekong River Charter"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  3-5 Days
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Ben Tre Canals — Can Tho
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  Private Mekong River Charter
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  For those who value privacy and custom routes. A private floating villa just for your family.
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
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Have the River to Yourself</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our private charters and small ships bypass commercial docks, offering unhurried access to the delta&apos;s quietest corners.
          </p>
          <Link
            href="/itineraries/private-charter"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore Private Charter</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
