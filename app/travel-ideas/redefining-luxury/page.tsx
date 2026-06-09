import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Isn't What You Think — New Mekong River Luxury",
  description: "Discover a new definition of luxury on the Mekong River. Learn about traditional sao wood construction, Tân Châu weavers, and wild forest honey.",
  keywords: ["Mekong luxury travel", "luxury river cruise Vietnam", "boutique ship Mekong", "sao wood construction", "Tan Chau silk", "wild forest honey", "Mekong private charter"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/redefining-luxury",
  },
  openGraph: {
    title: "Luxury Isn't What You Think — New Mekong River Luxury",
    description: "Discover a new definition of luxury on the Mekong River. Learn about traditional sao wood construction, Tân Châu weavers, and wild forest honey.",
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
}

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
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            Luxury Isn&apos;t<br />What You<br />Think
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            I&apos;ve stayed in hotels with gold-plated faucets that left me feeling nothing. On the Mekong, a plate of dragon fruit on a star-wood table made me feel like the richest person alive.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Old Definition</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The luxury of the materials that tell a story.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Traditional boat builders in the Mekong Delta do not build with imported pine or steel. They use gỗ sao (star wood) — a dense, local ironwood that has been harvested for centuries. Star wood resists river rot and pests naturally, and as it ages, its grain darkens to a beautiful deep mahogany color. Walking barefoot on a deck constructed of sao wood, you feel the cool density of a tree that grew in the very soil feeding this river.
          </p>
          <p>
            Inside the cabins, the linens and drapery tell another story. These are crafted by the master weavers of Tân Châu, a town legendary for its Lãnh Mỹ A silk. The deep black color is not synthetic; it comes from the sap of the mặc nưa fruit, which is dyed and beaten by hand into the silk fiber over weeks. It is incredibly soft to the skin, cool in the midday heat, and carries the faint, sweet scent of the forest fruit.
          </p>
          <p>
            This is the vocabulary of river luxury. Not imported marble, but native wood and hand-beaten silk.
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
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Invisible Care</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The breakfast details that reveal the forest.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            On the boutique charters, luxury is expressed in details you might miss if you are rushing. At breakfast, alongside freshly baked croissants, the crew serves wild forest honey harvested directly from the cajuput forests of the Delta. This honey (mật ong hoa tràm) has a distinct herbal, slightly salty undertone that comes from the blossoms of the tràm trees. It is rich, medicinal, and represents the wilderness of the wetlands in a single teaspoon.
          </p>
          <p>
            This is the pattern on the best private charters. The tea that appears on your balcony without you ordering it. The guide who notices you looking at a temple across the river and quietly coordinates a landing there tomorrow. The absolute privacy of having a vessel entirely to yourself and your loved ones, navigating the waters on your own terms.
          </p>
          <p>
            It&apos;s the kind of care that makes you exhale. The kind that makes you stop performing the trip and start living it.
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
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          What to look for in a luxury ship
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Wood Quality</h3>
            <p>A vessel constructed from authentic gỗ sao (star wood) feels solid underfoot and creates a natural barrier against engine noise and vibration. The dark grain also absorbs light, keeping the cabins feeling calm and grounded.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Local Silks</h3>
            <p>Authentic Tân Châu silk (Lãnh Mỹ A) dyed with mặc nưa fruit is highly prized. If the ship utilizes local fabrics rather than imported polyester, it shows a commitment to preservation and craftsmanship.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Private Charter Exclusivity</h3>
            <p>For the ultimate privacy, a private charter allows you to bypass the fixed cruise schedules and customize every stop, every meal, and every sunrise.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Wild Ingredients</h3>
            <p>Look for menus featuring local wild-caught fish and tràm forest honey. These wild ingredients link the culinary experience directly to the biology of the Delta.</p>
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
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/full_mekong_hero.avif"
                alt="Private Charter Expedition"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  Custom Days
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Mekong Canals — Angkor
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  Private Charter Expedition
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  A completely private bespoke voyage on the waterways. Customize your itinerary, dine on local delicacies, and enjoy absolute exclusivity.
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
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Experience absolute exclusivity</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            For those who value privacy above all else, our custom private charter expeditions are tailored down to the last star-wood plank.
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
