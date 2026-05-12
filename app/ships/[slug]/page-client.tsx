"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check, User, Grid, Link2, Droplets, Wind, Coffee, Lock, Speaker, Scissors } from "lucide-react"
import { ShipData } from "../data"

export default function ShipsClient({ data }: { data: ShipData }) {
  const [activeSection, setActiveSection] = useState("overview")
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll spy and sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Sub-nav becomes sticky after scrolling past hero
      setIsScrolled(scrollY > window.innerHeight - 50)

      const sections = ["overview", "suites", "deck-plan", "cuisine", "gallery"]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && scrollY >= el.offsetTop - 200) {
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
        top: el.offsetTop - 50,
        behavior: "smooth"
      })
    }
  }

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "suites", label: "Suites" },
    { id: "deck-plan", label: "Deck Plan & Amenities" },
    { id: "cuisine", label: "Cuisine" },
    { id: "gallery", label: "Gallery" }
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] -mt-20">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.name}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 mt-20 flex flex-col items-center">
          <span className="font-script text-white text-3xl md:text-5xl mb-4 opacity-90 block" style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}>
            Discover
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] text-white mb-6 tracking-widest uppercase">
            {data.name}
          </h1>
          <p className="text-white text-sm md:text-base font-sans tracking-[0.1em] max-w-2xl mx-auto uppercase">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* ── STICKY SUB-NAV ── */}
      <div className={`z-50 w-full transition-all duration-300 ${isScrolled ? 'fixed top-[80px] bg-[#2a2a2a]' : 'bg-[#2a2a2a]'}`}>
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="text-white text-xs tracking-[0.2em] uppercase font-bold hidden md:block">
            {data.name}
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[10px] md:text-[11px] tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 py-4 border-b-2 ${
                  activeSection === item.id
                    ? "text-white border-white"
                    : "text-white/60 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO TEXT ── */}
      <section className="py-20 lg:py-32 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-[#222] mb-10 leading-tight">
            Luxury sailing in Cambodia & Vietnam
          </h2>
          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light text-left md:text-center">
            A magnificent presence on the Mekong river, {data.name} showcases modern architecture and exquisite interiors. 
            As part of our carefully curated fleet, this river cruise ship features {data.stats.cabins} spacious suites that offer spectacular panoramas of the ever-changing scenery.
            <br/><br/>
            As the {data.name} charts a luxurious passage, onboard guests embark on an inspiring journey of local flavors with a world-class dining experience. The ship guarantees utmost safety, comfort, and exclusivity for off-shore excursions, bringing guests on highly personalized day trips to explore the region.
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="bg-white py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[#333] text-[13px] font-serif block mb-2">Overview</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-12">
            On board a floating paradise
          </h2>
          
          <div className="relative aspect-[21/9] w-full mb-12 bg-gray-100">
            <Image src={data.design.image} alt={data.design.title} fill className="object-cover" />
          </div>

          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mx-auto mb-16 text-center">
            {data.design.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-200 py-12 text-center">
             <div>
                <p className="text-[#777] text-xs tracking-[0.2em] uppercase mb-3">Length</p>
                <p className="text-[#222] font-serif text-2xl">{data.stats.length}</p>
             </div>
             <div>
                <p className="text-[#777] text-xs tracking-[0.2em] uppercase mb-3">Cabins</p>
                <p className="text-[#222] font-serif text-2xl">{data.stats.cabins}</p>
             </div>
             <div>
                <p className="text-[#777] text-xs tracking-[0.2em] uppercase mb-3">Guests</p>
                <p className="text-[#222] font-serif text-2xl">{data.stats.guests}</p>
             </div>
             <div>
                <p className="text-[#777] text-xs tracking-[0.2em] uppercase mb-3">Crew</p>
                <p className="text-[#222] font-serif text-2xl">{data.stats.crew}</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── SUITES ── */}
      <section id="suites" className="py-20 lg:py-32 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#333] text-[13px] font-serif block mb-2">Suites</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-12">
            A luxurious sanctuary on the mighty Mekong
          </h2>

          <div className="relative aspect-[16/9] w-full mb-12 bg-gray-100 group">
            <Image src={data.suites.image} alt={data.suites.title} fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs tracking-widest uppercase">
              {data.suites.title}
            </div>
          </div>

          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mb-16">
            {data.suites.description} When it comes to rest and relaxation, {data.name} cuts no corners. Our {data.stats.cabins} river-facing suites are furnished with inviting hardwood interiors along with premium fittings and bedding.
          </p>

          <div className="border-t border-gray-300 pt-8">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#777] mb-8">Amenities & Details</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">Spacious en-suite bathrooms with premium fittings</span>
              </div>
              <div className="flex items-start gap-4">
                <Wind className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">Fully air-conditioned with individual climate control</span>
              </div>
              <div className="flex items-start gap-4">
                <Grid className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">Panoramic floor-to-ceiling windows</span>
              </div>
              <div className="flex items-start gap-4">
                <Coffee className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">In-room coffee and tea making facilities</span>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">Electronic safe for valuables</span>
              </div>
              <div className="flex items-start gap-4">
                <Scissors className="w-5 h-5 text-[#888] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#555] text-sm font-light">Professional hairdryer & premium bath amenities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUISINE ── */}
      <section id="cuisine" className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#333] text-[13px] font-serif block mb-2">Cuisine</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-12">
            A world-class culinary experience exploring authentic cuisine
          </h2>

          <div className="relative aspect-[21/9] w-full mb-12 bg-gray-100 group">
            <Image src={data.dining.image} alt={data.dining.title} fill className="object-cover" />
          </div>

          <h3 className="font-serif text-xl text-[#222] mb-4">Flavors of the Mekong</h3>
          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mb-12">
            {data.dining.description} Guests can expect seasonal menus showcasing the full repertoire of flavors from the region in refined style. Our chefs use peak season produce and the freshest ingredients from the river.
          </p>

          <h3 className="font-serif text-xl text-[#222] mb-4">Special dietary needs</h3>
          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mb-8">
            We believe in creating exceptional culinary experiences which cater to every guest's unique needs. Our talented chefs are well-versed in a variety of preparations.
          </p>

          <div className="flex gap-8 border-t border-gray-200 pt-8">
             <div className="flex items-center gap-2 text-[#555] text-sm font-light"><Check className="w-4 h-4 text-[#888]" /> Vegetarian options</div>
             <div className="flex items-center gap-2 text-[#555] text-sm font-light"><Check className="w-4 h-4 text-[#888]" /> Gluten-free</div>
             <div className="flex items-center gap-2 text-[#555] text-sm font-light"><Check className="w-4 h-4 text-[#888]" /> Low sodium</div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 lg:py-32 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-16 text-center">Life on Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className={`relative aspect-square ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image src={img} alt={`${data.name} gallery image ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / EARLY BIRD ── */}
      <section className="py-24 bg-[#505a5f] text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Plan Your Journey</h2>
          <p className="text-white/80 text-[15px] font-sans font-light mb-10 max-w-xl mx-auto">
            Contact our specialists to check availability and start planning your Mekong journey on the {data.name}. Enjoy special offers on select departure dates.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-block px-10 py-4 bg-white text-[#505a5f] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </section>

    </main>
  )
}
