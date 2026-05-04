"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Ship } from "@/lib/ships-data"

const SHIPS_PER_PAGE = 6

type Props = {
  destination: string
  ships: Ship[]
  heroImage: string
  description: string
  label: string // e.g. "Vietnam"
}

// ── SHIP CARD ─────────────────────────────────────────────────────────────────

function ShipCard({ ship, index }: { ship: Ship; index: number }) {
  const isFeature = index % 6 === 0 // first card on each page is featured/large

  if (isFeature) {
    return (
      <div className="col-span-full grid lg:grid-cols-2 gap-0 group bg-navy overflow-hidden">
        {/* Image */}
        <div className="relative h-72 lg:h-auto min-h-[360px] overflow-hidden">
          <Image
            src={ship.image}
            alt={ship.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-6 left-6">
            <span className="bg-gold text-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">
          <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-3">
            {ship.type}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-2">
            {ship.name}
          </h2>
          <p className="text-white/40 text-sm italic mb-6">{ship.style}</p>
          <p className="text-white/60 text-base leading-relaxed mb-8 font-serif">
            "{ship.tagline}"
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            {ship.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {ship.highlights.slice(0, 4).map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                <span className="text-white/50 text-xs leading-snug">{h}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="text-white/30 text-xs">
              <span className="font-bold text-white/70">{ship.guests}</span> guests ·{" "}
              <span className="font-bold text-white/70">{ship.cabins}</span> cabins
            </div>
            <Link
              href="/plan-your-journey"
              className="ml-auto inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Enquire <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Standard card
  return (
    <div className="group flex flex-col bg-white border border-navy/8 hover:border-gold/30 transition-colors duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={ship.image}
          alt={ship.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-navy text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
            {ship.type}
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <p className="text-gold text-[9px] tracking-[0.3em] uppercase font-bold mb-2">{ship.style}</p>
        <h3 className="font-serif text-2xl lg:text-3xl text-navy mb-3 leading-tight">{ship.name}</h3>
        <p className="text-navy/50 text-sm italic mb-4 font-serif">"{ship.tagline}"</p>
        <p className="text-navy/60 text-sm leading-relaxed flex-1">{ship.description.substring(0, 140)}...</p>

        <div className="mt-6 pt-6 border-t border-navy/8 flex items-center justify-between">
          <div className="text-navy/40 text-xs">
            <span className="font-bold text-navy/70">{ship.guests}</span> guests ·{" "}
            <span className="font-bold text-navy/70">{ship.cabins}</span> cabins
          </div>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase font-bold text-gold hover:gap-3 transition-all duration-200"
          >
            Enquire <ArrowRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── MAIN ───────────────────────────────────────────────────────────────────────

export default function ShipsClient({ destination, ships, heroImage, description, label }: Props) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(ships.length / SHIPS_PER_PAGE)
  const paginated = ships.slice(page * SHIPS_PER_PAGE, (page + 1) * SHIPS_PER_PAGE)

  const scroll = () => {
    if (typeof window !== "undefined") {
      document.getElementById("ships-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const goNext = () => { if (page < totalPages - 1) { setPage(p => p + 1); scroll() } }
  const goPrev = () => { if (page > 0) { setPage(p => p - 1); scroll() } }

  return (
    <main className="min-h-screen bg-[#faf9f6] -mt-20">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={`${label} Mekong Cruise`} fill className="object-cover" priority fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <nav className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/cruises" className="hover:text-white transition-colors">Cruises</Link>
              <span>/</span>
              <span className="text-gold">{label}</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <div className="max-w-2xl">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-6">
              {ships.length} Ships · {label} Mekong
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight mb-6">
              {label}<br />
              <span className="italic text-gold/80">Mekong</span><br />
              Cruises
            </h1>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-white/65 text-base leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ── COUNTER BAR ── */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Showing <span className="text-white font-bold">{page * SHIPS_PER_PAGE + 1}–{Math.min((page + 1) * SHIPS_PER_PAGE, ships.length)}</span> of <span className="text-gold font-bold">{ships.length}</span> ships
          </span>
          <Link href="/plan-your-journey" className="text-[10px] tracking-[0.2em] uppercase font-bold text-gold hover:text-white transition-colors flex items-center gap-2">
            Can't decide? Talk to us <ArrowRight size={10} />
          </Link>
        </div>
      </div>

      {/* ── SHIPS GRID ── */}
      <section id="ships-grid" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginated.map((ship, i) => (
              <ShipCard key={ship.id} ship={ship} index={i} />
            ))}
          </div>

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-between border-t border-navy/10 pt-10">
              <button
                onClick={goPrev}
                disabled={page === 0}
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-navy disabled:text-navy/20 hover:text-gold transition-colors disabled:cursor-not-allowed"
              >
                <ArrowLeft size={14} /> Previous
              </button>

              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPage(i); scroll() }}
                    className={`text-xs font-bold tracking-widest transition-all duration-200 ${i === page ? "text-navy border-b-2 border-gold pb-0.5" : "text-navy/30 hover:text-navy/60"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={page === totalPages - 1}
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-navy disabled:text-navy/20 hover:text-gold transition-colors disabled:cursor-not-allowed"
              >
                Next Page <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Not sure which ship?</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Our specialists have sailed<br />
            <span className="italic text-gold">every single one.</span>
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
            Tell us who you are and how you like to travel. We'll match you with the ship that fits — no pressure, no sales pitch.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-white transition-colors duration-300"
          >
            Plan Your Journey <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  )
}
