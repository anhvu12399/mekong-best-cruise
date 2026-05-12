"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Check } from "lucide-react"
import { ShipData } from "../data"

export default function ShipsClient({ data }: { data: ShipData }) {
  const [activeSection, setActiveSection] = useState("overview")
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll spy and sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > window.innerHeight - 100)

      const sections = ["overview", "design", "suites", "dining", "gallery"]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && scrollY >= el.offsetTop - 150) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      })
    }
  }

  const navItems = ["Overview", "Design", "Suites", "Dining", "Gallery"]

  return (
    <main className="min-h-screen bg-[#faf9f6] -mt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.name}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 mt-20">
          <p className="text-gold text-[11px] font-bold tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
            Mekong River Cruises
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-[0.9] tracking-tight">
            {data.name}
          </h1>
          <p className="text-white/90 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto">
            {data.tagline}
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => scrollToSection('overview')}>
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to Discover</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6 absolute w-full'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300 ${
                activeSection === item.toLowerCase()
                  ? "text-gold font-bold"
                  : isScrolled ? "text-white/60 hover:text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW & STATS ── */}
      <section id="overview" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Overview</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8 leading-tight">
                {data.overview.title}
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed font-serif">
                {data.overview.description}
              </p>
            </div>
            
            <div className="bg-[#f7f4ef] p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-navy font-serif text-2xl mb-8">Vessel Specifications</h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <p className="text-navy/50 text-[10px] tracking-[0.2em] uppercase mb-1">Length</p>
                  <p className="text-navy font-serif text-2xl">{data.stats.length}</p>
                </div>
                <div>
                  <p className="text-navy/50 text-[10px] tracking-[0.2em] uppercase mb-1">Cabins / Suites</p>
                  <p className="text-navy font-serif text-2xl">{data.stats.cabins}</p>
                </div>
                <div>
                  <p className="text-navy/50 text-[10px] tracking-[0.2em] uppercase mb-1">Max Guests</p>
                  <p className="text-navy font-serif text-2xl">{data.stats.guests}</p>
                </div>
                <div>
                  <p className="text-navy/50 text-[10px] tracking-[0.2em] uppercase mb-1">Crew Members</p>
                  <p className="text-navy font-serif text-2xl">{data.stats.crew}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN ── */}
      <section id="design" className="py-24 lg:py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] w-full">
              <Image src={data.design.image} alt={data.design.title} fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Design</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8 leading-tight">
                {data.design.title}
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed font-serif">
                {data.design.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITES ── */}
      <section id="suites" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12">
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Accommodations</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8 leading-tight">
                {data.suites.title}
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed font-serif mb-8">
                {data.suites.description}
              </p>
              
              <ul className="space-y-4">
                {data.suites.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-navy/80">
                    <Check size={16} className="text-gold" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] w-full">
              <Image src={data.suites.image} alt={data.suites.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DINING ── */}
      <section id="dining" className="py-24 lg:py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[16/9] lg:aspect-[4/5] w-full">
              <Image src={data.dining.image} alt={data.dining.title} fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Cuisine</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight text-white">
                {data.dining.title}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-serif">
                {data.dining.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 lg:py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">Life on Board</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.gallery.map((img, i) => (
              <div key={i} className={`relative aspect-square ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image src={img} alt={`${data.name} gallery image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white text-center border-t border-navy/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8">Ready to step aboard?</h2>
          <p className="text-navy/70 text-lg font-serif mb-10">
            Contact our specialists to check availability and start planning your Mekong journey on the {data.name}.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-colors duration-300"
          >
            Enquire Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </main>
  )
}
