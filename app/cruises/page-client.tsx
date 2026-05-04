"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plus, Minus, ChevronDown } from "lucide-react"

// ─── DATA ────────────────────────────────────────────────────────────────────

const destinations = [
  {
    name: "Vietnam Mekong Cruises",
    tag: "The Delta, Always Moving",
    desc: "Rice paddies, floating markets, and the smell of pho at dawn. The Vietnamese Mekong is a living, breathing thing — and the best way to understand it is from the water.",
    image: "/images/dest_vietnam.avif",
    href: "/destinations/vietnam",
  },
  {
    name: "Cambodia Mekong Cruises",
    tag: "Temples & Timeless Waters",
    desc: "Sail toward Angkor Wat as the sun rises. Cambodia's stretch of the Mekong moves between ancient jungle and bustling riverside villages — history you can touch.",
    image: "/images/dest_cambodia.avif",
    href: "/destinations/cambodia",
  },
  {
    name: "Laos River Journeys",
    tag: "Where Time Slows Down",
    desc: "The slowest, most beautiful part of the Mekong. Golden temples at dusk, monks crossing wooden bridges, the river turning copper in the evening light.",
    image: "/images/dest_laos.avif",
    href: "/destinations/laos",
  },
  {
    name: "Thailand Mekong Cruises",
    tag: "The Northern River",
    desc: "Where the Mekong forms the border with Laos, Thailand offers hill tribe encounters, remote villages, and landscapes that feel entirely untouched.",
    image: "/images/dest_thailand.avif",
    href: "/destinations/thailand",
  },
]

const styles = [
  {
    title: "Luxury Cruises",
    sub: "For those who know what they want",
    image: "/images/aqua_mekong.avif",
    href: "/plan-your-journey",
  },
  {
    title: "Family Voyages",
    sub: "Stories your kids will tell their kids",
    image: "/images/dest_cambodia.avif",
    href: "/plan-your-journey",
  },
  {
    title: "Honeymoon Escapes",
    sub: "The most romantic river on Earth",
    image: "/images/dest_laos.avif",
    href: "/plan-your-journey",
  },
  {
    title: "Private Charters",
    sub: "The entire ship. Just yours.",
    image: "/images/jayavarman.avif",
    href: "/plan-your-journey",
  },
  {
    title: "Adventure Cruises",
    sub: "Off the map, on the water",
    image: "/images/dest_myanmar.avif",
    href: "/plan-your-journey",
  },
  {
    title: "Solo Journeys",
    sub: "Go alone. Come back changed.",
    image: "/images/dest_vietnam.avif",
    href: "/plan-your-journey",
  },
]

const ships = [
  {
    name: "Aqua Mekong",
    type: "Ultra-Luxury · 20 suites",
    line: "Floor-to-ceiling glass. Michelin-trained chefs. The Aqua Mekong is the river's finest address.",
    image: "/images/aqua_mekong.avif",
  },
  {
    name: "Jayavarman",
    type: "Colonial Boutique · 15 cabins",
    line: "Teak decks, hand-stitched fabrics, the scent of frangipani. History feels like it's in the next room.",
    image: "/images/jayavarman.avif",
  },
  {
    name: "Mekong Jewel",
    type: "Intimate Luxury · 28 guests max",
    line: "The silence on the sundeck at dusk. The light through the balcony door at dawn. Some ships earn their name slowly.",
    image: "/images/mekong_jewel.avif",
  },
]

const faqs = [
  {
    q: "What is the best time of year to cruise the Mekong?",
    a: "November to April is ideal across most of the Mekong — cool, dry, and clear skies. The Mekong Delta in Vietnam is accessible year-round. Wet season (May–October) brings lush green landscapes and fewer crowds, with some itinerary adjustments.",
  },
  {
    q: "Do I need a visa to travel on the Mekong?",
    a: "Most nationalities need visas for Vietnam and Cambodia, which can be obtained on arrival or online via e-visa. Laos also offers e-visas. We guide every guest through the paperwork — it's simpler than it sounds.",
  },
  {
    q: "How many guests are on each cruise?",
    a: "We cap every voyage at 28 guests. That's a deliberate choice — smaller means slower, slower means you actually see things. No buffet crowds, no lecture halls, no strangers at your dinner table unless you want them there.",
  },
  {
    q: "Is the Mekong River safe to travel on?",
    a: "Absolutely. The Mekong River is one of the safest waterways in Southeast Asia for tourism. Our vessels are equipped with modern safety systems and our crew are trained to international maritime standards.",
  },
  {
    q: "What should I not miss near the Mekong River?",
    a: "The floating markets of Can Tho, the temples of Angkor Wat, the ancient town of Luang Prabang, and a dawn walk through a Cambodian riverside village. But honestly — ask your guide. They always know a place no guidebook mentions.",
  },
  {
    q: "Is the Mekong a good honeymoon destination?",
    a: "It's one of the world's great romantic journeys. Sunset on the upper deck, candlelight dinners, private sampan rides through the backwaters of the Delta — the Mekong has a way of making people fall in love with it, and with each other.",
  },
  {
    q: "Can I do a private charter?",
    a: "Yes. We offer fully private charters for families, corporate groups, and special occasions. The ship, the crew, the itinerary — all yours. Contact our team and we'll build something around you.",
  },
]

const highlights = [
  "Discover ancient temples along the river",
  "Experience vibrant Mekong river life",
  "Engage with local artisans & communities",
  "Explore lush delta landscapes by sampan",
  "Stay aboard intimate boutique vessels",
  "Dine on Michelin-quality river cuisine",
]

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-navy/10 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group gap-4"
      >
        <span className="font-serif text-lg text-navy group-hover:text-gold transition-colors leading-snug pr-4">
          {q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:border-gold group-hover:text-gold transition-all">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pt-4" : "max-h-0"}`}>
        <p className="text-navy/70 leading-relaxed text-base">{a}</p>
      </div>
    </div>
  )
}

// ─── ANIMATED WORDS ──────────────────────────────────────────────────────────

const rotatingWords = ["Timeless.", "Intimate.", "Unforgettable.", "Yours."]

function AnimatedWord() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % rotatingWords.length)
        setVisible(true)
      }, 500)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="block text-gold italic transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
    >
      {rotatingWords[idx]}
    </span>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CruisesClient() {
  return (
    <main className="min-h-screen bg-[#faf9f6] -mt-20">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_1.avif"
            alt="Mekong River cruise at golden hour"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <nav className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold">Cruises</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-36 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            {/* Left: Big Title */}
            <div>
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight mb-8">
                MEKONG<br />RIVER<br />CRUISES
              </h1>
              <div className="w-24 h-px bg-gold mb-8" />
              <Link
                href="/plan-your-journey"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-gold border border-gold/60 px-8 py-4 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Plan Your Cruise <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: Intro + animated word */}
            <div className="lg:pl-8">
              <div className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-8">
                The Mekong is{" "}
                <AnimatedWord />
              </div>
              <p className="text-white/70 text-base leading-relaxed max-w-md">
                From the River of Nine Dragons to the sacred waters of Laos — the Mekong winds through
                two millennia of human history. Travel it slowly, intimately, aboard a vessel built for
                the few who know that the journey is the destination.
              </p>
              <div className="mt-8 flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase animate-bounce">
                <ChevronDown size={16} />
                <span>Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CRUISE THE MEKONG ── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-6">
                The River
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl text-navy leading-tight mb-8">
                Why Cruise<br />The Mekong?
              </h2>
              <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
                <p>
                  The Mekong is one of the planet's last great slow rivers — 4,900 kilometres through six
                  countries, from the Tibetan Plateau to the South China Sea. It doesn't feel like a tourist
                  trail. It feels like the real world, still turning at its own pace.
                </p>
                <p>
                  Travel it by ship and something shifts. You're not a visitor moving through the landscape.
                  You're part of it — waking to river mist, watching fishermen cast nets from your deck,
                  pulling into a village that sees boats like yours only a few times a year.
                </p>
                <p>
                  That's what we've been offering for 25 years. Not a tour. Not an itinerary. A way of
                  seeing the world that stays with you long after you've unpacked.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-12">
                <h3 className="text-xs tracking-[0.25em] uppercase font-bold text-navy mb-6">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-navy/70 text-sm leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image mosaic */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/about-mekong-bg.avif"
                  alt="Life on the Mekong River"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 shadow-2xl">
                <span className="font-serif text-4xl text-gold">25+</span>
                <p className="text-xs tracking-widest uppercase text-white/60 mt-1">Years on the River</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-navy p-6 shadow-2xl">
                <span className="font-serif text-4xl">28</span>
                <p className="text-xs tracking-widest uppercase text-navy/70 mt-1">Max Guests Per Ship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="py-24 lg:py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-navy/20 flex-1" />
            <h2 className="font-serif text-4xl lg:text-5xl text-navy whitespace-nowrap">Destinations</h2>
            <div className="h-px bg-navy/20 flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="group relative overflow-hidden block"
                style={{ aspectRatio: i === 2 ? "16/7" : "4/3" }}
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">{d.tag}</p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white uppercase tracking-wide mb-3">
                    {d.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {d.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRUISE STYLES ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-navy/20 flex-1" />
            <h2 className="font-serif text-4xl lg:text-5xl text-navy whitespace-nowrap">Cruise Styles</h2>
            <div className="h-px bg-navy/20 flex-1" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {styles.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-serif text-white text-xl lg:text-2xl uppercase tracking-widest leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-xs tracking-wide mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHIPS ── */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4">Our Fleet</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white">
              Five ships.<br />
              <span className="italic text-gold">Five ways to love the river.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ships.map((ship, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="border-t border-white/10 pt-6">
                  <span className="text-gold text-xs tracking-widest uppercase">{ship.type}</span>
                  <h3 className="font-serif text-2xl text-white mt-2 mb-3">{ship.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{ship.line}</p>
                  <Link
                    href="/plan-your-journey"
                    className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-gold hover:gap-4 transition-all duration-200"
                  >
                    Enquire <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_2.avif"
            alt="Mekong at golden hour"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="font-serif text-3xl lg:text-5xl text-white leading-relaxed mb-12">
            &ldquo;The river does not hurry.<br />
            <span className="text-gold italic">Neither should you.</span>&rdquo;
          </div>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            Start Planning Your Journey <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-navy/20 flex-1" />
            <h2 className="font-serif text-3xl lg:text-5xl text-navy whitespace-nowrap">FAQ</h2>
            <div className="h-px bg-navy/20 flex-1" />
          </div>

          <div className="divide-y divide-navy/10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-navy/60 mb-6">Still have questions? Our river specialists are here.</p>
            <Link
              href="/plan-your-journey"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Talk to a Specialist <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
