import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cajuput Forests & Ecology — Tra Su Mekong Travel Ideas",
  description: "Paddle through the flooded cajuput forests of Trà Sư and U Minh Hạ. Discover where birds outnumber people, lush green ecology, and profound silence in the Mekong.",
  keywords: ["Mekong cajuput forests", "Tra Su forest", "U Minh Ha forest", "Mekong Delta ecology", "bird watching Vietnam", "flooded forest Mekong", "An Giang nature tour", "Mekong eco travel"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/cajuput-forests",
  },
  openGraph: {
    title: "Cajuput Forests & Ecology — Tra Su Mekong Travel Ideas",
    description: "Paddle through the flooded cajuput forests of Trà Sư and U Minh Hạ. Discover where birds outnumber people, lush green ecology, and profound silence in the Mekong.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/cajuput-forests",
    images: [{ url: "https://www.mekongrivercruise.com/images/coconut-forest-boat.avif", width: 1200, height: 630, alt: "Paddling through flooded cajuput forest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cajuput Forests & Ecology in the Mekong",
    description: "Paddle through the flooded cajuput forests of Trà Sư.",
    images: ["https://www.mekongrivercruise.com/images/coconut-forest-boat.avif"],
  },
}

export default function CajuputForestsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/cajuput_hero.avif"
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
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The boat is a metal tub. The forest is a cathedral. The birds are the choir.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Trà Sư is in An Giang province, specifically in Tịnh Biên district near the Cambodia border, framed by the mystical Seven Mountains (Thất Sơn) range. Getting there is part of the experience. The road narrows from highway to village lane to dirt track, and then the water starts — seeping up through the earth, filling the ditches, turning the fields into mirrors. You transfer from car to motorboat to a flat-bottomed sampan paddled by a woman in a conical hat who does not need to speak because the forest does all the talking.
          </p>
          <p>
            The cajuput trees — called tràm in Vietnamese — grow straight out of the water, their pale trunks ghostly against the green duckweed that covers the surface like a carpet. The effect is otherworldly: you are paddling through a flooded forest where the water is chartreuse, the trunks are silver, and the air smells like eucalyptus and mud and something ancient. Dragonflies the size of your thumb hover at eye level. A water monitor lizard slides off a log without a sound.
          </p>
          <p>
            And then the birds. Trà Sư is home to one of the largest nesting colonies in Southeast Asia — with approximately 70 bird species, including the rare and endangered Painted Stork (Giang Sen) and Oriental Darter (Điêng Điểng) nesting high in the melaleuca branches. The treetops are white with them, a constant, layered chatter that rises and falls like applause. You crane your neck, you count species, you give up counting.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/cajuput_birds.avif"
          alt="Lush green Vietnam landscape"
          fill
          className="object-cover"
        />
      </section>

      {/* ── U MINH HẠ ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">U Minh Hạ</p>
            <h3 className={`text-2xl md:text-3xl leading-tight mb-8 text-navy ${playfair.className}`}>
              The other forest — wilder, darker, less polished
            </h3>
            <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
              <p>
                If Trà Sư is the concert hall, U Minh Hạ is the jazz club. It&apos;s in Cà Mau province (primarily Trần Văn Thời and U Minh districts), at the very tip of Vietnam where the land gives up trying to be land and becomes something else: mangrove, peat swamp, mudflat, open sea.
              </p>
              <p>
                The melaleuca forest here is darker and denser. What makes U Minh Hạ legendary is a traditional profession called &quot;gác kèo ong&quot; (trellis wild honeybee farming) recognized as a National Intangible Cultural Heritage in 2019. Local beekeepers construct wooden trellises using melaleuca trunks in sunlit clearings to lure wild honeybees. Between January and June, when the melaleuca flowers bloom, the honey is harvested at its purest.
              </p>
              <p>
                Kayaking here is the best way in. Mudskippers sit on exposed roots, watching you with eyes that shouldn&apos;t work but do. You paddle deeper. The light changes. The forest closes in. And for a few minutes, you are genuinely, beautifully lost. The coffee stop afterward is non-negotiable. You drink thick cà phê sữa đá in a hammock while the forest hums behind you.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5]">
            <Image src="/images/cajuput_boat.avif" alt="Small boat in flooded forest" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/dest_laos.avif)" }}
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>Planning your visit</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Best Time</h3>
            <p>August through November, during the high floodwaters when the forest is fully submerged. The bird populations peak in October. The honey season in U Minh Hạ runs from January to June.</p>
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
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Explore with us</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our 2-day Mekong Delta itinerary includes Trà Sư forest, floating markets, and private homestay accommodation.
          </p>
          <Link
            href="/itineraries/2-days"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>View 2-Day Itinerary</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
