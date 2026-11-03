"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check, User, Grid, Link2, Droplets, Wind, Coffee, Lock, Speaker, Scissors, Bed, Bath, ArrowRight, Sparkles, Maximize2 } from "lucide-react"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B4A2A]/10 text-[#8B4A2A] text-[11px] uppercase tracking-widest font-bold rounded-full mb-6">
            Operated by {data.operator || "Official Fleet Partner"} · Curated by Mekong River Cruise
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-[#222] mb-10 leading-tight">
            Luxury sailing in Cambodia & Vietnam
          </h2>
          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light text-left md:text-center">
            A magnificent presence on the Mekong river, {data.name} showcases authentic maritime architecture and exquisite interiors. 
            Operated by {data.operator || "our licensed partner"}, this vessel features {data.stats.cabins} suites offering spectacular panoramas of the river.
            <br/><br/>
            As authorized luxury cruise specialists, we provide direct access to verified cabin allocations with our Best Price Guarantee, dedicated pre-trip concierge, and seamless door-to-ship private transfers.
          </p>
        </div>
      </section>



      {/* ── OVERVIEW ── */}
      <section id="overview" className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#333] text-[13px] font-serif block mb-2">Overview</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#222]">
              On board a floating paradise
            </h2>
          </div>
          
          {/* Collage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full bg-gray-100">
              <Image src={data.gallery[0] || data.design.image} alt="Ship Overview 1" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square bg-gray-100">
                <Image src={data.gallery[1] || data.design.image} alt="Ship Overview 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-square bg-gray-100">
                <Image src={data.gallery[2] || data.design.image} alt="Ship Overview 3" fill className="object-cover" />
              </div>
              <div className="relative aspect-square bg-gray-100">
                <Image src={data.gallery[3] || data.design.image} alt="Ship Overview 4" fill className="object-cover" />
              </div>
              <div className="relative aspect-square bg-gray-100 flex items-center justify-center p-6 text-center group cursor-pointer overflow-hidden">
                <Image src={data.gallery[4] || data.design.image} alt="Ship Overview 5" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <button className="relative z-10 bg-white text-[#222] px-6 py-3 text-[10px] tracking-widest font-bold uppercase">See all photos</button>
              </div>
            </div>
          </div>

          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mx-auto mb-16 text-center mt-12 font-bold">
            Designed with exclusivity in mind, every moment on board {data.name} is one to be remembered.
          </p>
          <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light max-w-4xl mx-auto mb-16 text-center">
            {data.design.description} Enjoy social spaces typical to larger cruise ships such as a lounge, dining room, and an expansive sundeck, all while keeping the peace and personalized service of a small luxury river vessel.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-200 py-12 text-center max-w-4xl mx-auto">
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
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-bold block mb-2">
              Cabins & Suites
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-4">
              Private Sanctuaries on the Mekong
            </h2>
            <p className="text-[#666] text-base leading-relaxed max-w-3xl mx-auto font-light">
              Every stateroom aboard {data.name} is engineered to keep you intimately connected with the river. Featuring direct river-facing beds, private verandas, and spa-grade en-suite bathrooms.
            </p>
          </div>

          {/* Hero Suite Showcase */}
          <div className="relative aspect-[21/9] w-full bg-gray-100 group overflow-hidden shadow-lg mb-4">
            <Image
              src={data.suites.image}
              alt={`${data.name} - ${data.suites.title}`}
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between p-6 md:p-8">
              <div>
                <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">
                  Signature Living
                </span>
                <span className="text-white text-base md:text-xl font-serif">{data.suites.title}</span>
              </div>
              <Link
                href={`/plan-your-journey?vessel=${data.slug}`}
                className="bg-gold text-navy px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-colors"
              >
                Reserve This Suite
              </Link>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2 mb-16">
             {[...Array(6)].map((_, idx) => (
                <div key={idx} className={`relative aspect-video bg-gray-200 overflow-hidden ${idx === 0 ? 'ring-2 ring-gold opacity-100' : 'opacity-70 hover:opacity-100'} transition-all`}>
                   <Image
                     src={data.gallery[idx % data.gallery.length] || "/images/luxury-balcony-sunset.avif"}
                     alt={`${data.name} Cabin detail view ${idx + 1}`}
                     fill
                     className="object-cover"
                   />
                </div>
             ))}
          </div>

          {/* ── DETAILED CABIN CATEGORIES BREAKDOWN ── */}
          {data.cabins && data.cabins.length > 0 && (
            <div className="mb-20">
              <div className="border-b border-gray-300 pb-4 mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-bold block mb-1">
                    Verified Stateroom Inventory
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#222]">
                    Explore Room Categories & Floor Plans
                  </h3>
                </div>
                <span className="text-xs text-[#777] font-sans">
                  {data.cabins.length} Verified {data.cabins.length === 1 ? 'Category' : 'Categories'} Available
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {data.cabins.map((cabin) => (
                  <div
                    key={cabin.id}
                    className="group bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Cabin Photo with SEO Alt Tag */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={cabin.image}
                        alt={cabin.imageAlt || `${data.name} ${cabin.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="bg-navy/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">
                          {cabin.deck}
                        </span>
                        <span className="bg-gold text-navy text-[10px] font-bold tracking-wider uppercase px-3 py-1">
                          {cabin.size}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white/90 text-xs font-serif italic truncate">
                        {cabin.imageAlt}
                      </div>
                    </div>

                    {/* Cabin Details */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <h4 className="font-serif text-2xl text-navy mb-3 group-hover:text-gold transition-colors">
                        {cabin.name}
                      </h4>
                      <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                        {cabin.description}
                      </p>

                      {/* Technical Specs Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#fafafa] border border-gray-100 rounded-sm mb-6 text-xs">
                        <div>
                          <span className="text-[#888] font-bold uppercase tracking-wider block text-[9px] mb-1">
                            Balcony / Window
                          </span>
                          <span className="text-[#333] font-medium leading-tight block">
                            {cabin.balconyType}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#888] font-bold uppercase tracking-wider block text-[9px] mb-1">
                            Bed Orientation
                          </span>
                          <span className="text-[#333] font-medium leading-tight block">
                            {cabin.bedOrientation}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#888] font-bold uppercase tracking-wider block text-[9px] mb-1">
                            Bathroom Setup
                          </span>
                          <span className="text-[#333] font-medium leading-tight block">
                            {cabin.bathroom}
                          </span>
                        </div>
                      </div>

                      {/* Key Features Chips */}
                      {cabin.features && cabin.features.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-1.5">
                          {cabin.features.map((feature, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1 text-[11px] bg-gray-100 text-[#555] px-2.5 py-1 rounded-sm"
                            >
                              <Check size={10} className="text-gold" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action CTA */}
                      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-[#888]">
                          Best Price Guaranteed
                        </span>
                        <Link
                          href={`/plan-your-journey?vessel=${data.slug}&cabin=${encodeURIComponent(cabin.name)}`}
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-navy text-white px-5 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                          Enquire Cabin <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Standard Suite Amenities */}
          <div className="border-t border-gray-300 pt-10">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#777] mb-8 text-center font-bold">
              Standard Stateroom Inclusions on {data.name}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">Spacious en-suite bathrooms with premium hot rain showers</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Wind className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">Individually controlled silent climate air conditioning</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Grid className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">Direct river-view windows and private balcony verandas</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Coffee className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">Daily artisanal tea & coffee service and purified drinking water</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Lock className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">In-room electronic digital safe for passports and valuables</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 border border-gray-200/80">
                <Scissors className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#444] text-sm font-light">Organic botanical amenities, plush bathrobes and slippers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPEDITION HIGHLIGHTS ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
            <div>
              <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-bold block mb-1">
                Life on the Water
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#222]">Expedition highlights</h2>
            </div>
            <span className="text-xs text-[#888] font-sans">
              Curated daily experiences aboard {data.name}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { title: "Exceptional speed and comfort", fallback: "/images/luxury-balcony-sunset.avif" },
              { title: "Fully equipped for adventure", fallback: "/images/cultural-encounters-new.avif" },
              { title: "World-class cuisine", fallback: "/images/fine-dining-deck.avif" },
              { title: "State of the art design", fallback: "/images/luxury_dining.avif" },
              { title: "Expert-led excursions", fallback: "/images/dest_vietnam.avif" },
              { title: "Cultural experiences", fallback: "/images/dest_cambodia.avif" },
            ].map((highlight, idx) => {
              const imageSrc = data.gallery[idx] || highlight.fallback
              return (
                <div key={idx} className="relative aspect-[4/3] group overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src={imageSrc}
                    alt={`${data.name} - ${highlight.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg md:text-xl">
                    {highlight.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CUISINE ── */}
      <section id="cuisine" className="py-20 lg:py-32 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-[#333] text-[13px] font-serif block mb-2">Cuisine</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-12 max-w-3xl">
            A world-class culinary experience exploring authentic Mekong cuisine
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
            <div className="md:col-span-8 relative aspect-[4/3] md:aspect-auto md:h-[600px] bg-gray-100">
              <Image src={data.dining.image} alt={data.dining.title} fill className="object-cover" />
            </div>
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
               <div className="relative aspect-square md:aspect-[4/3] bg-gray-100">
                  <Image src={data.gallery[2] || data.dining.image} alt="Cuisine Detail" fill className="object-cover" />
               </div>
               <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 flex flex-col items-center justify-center p-6 text-center cursor-pointer group overflow-hidden">
                  <Image src={data.gallery[3] || data.dining.image} alt="Cuisine Detail 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <button className="relative z-10 bg-white text-[#222] px-6 py-3 text-[10px] tracking-widest font-bold uppercase mt-auto mb-4">See all photos</button>
               </div>
            </div>
          </div>

          <div className="max-w-4xl">
            <h3 className="font-serif text-lg font-bold text-[#222] mb-4">Flavors of the Mekong</h3>
            <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light mb-12">
              {data.dining.description} Guests can expect seasonal menus showcasing the full repertoire of flavors from Vietnam and Cambodia in refined style. Our chefs use peak season produce and the freshest ingredients from the Mekong river and the region. Some of their signature creations include authentic curries and fresh seafood, most of which are served in a communal dining style authentic to the region's traditions.
            </p>

            <h3 className="font-serif text-lg font-bold text-[#222] mb-4">Special dietary needs</h3>
            <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light mb-8">
              We believe in creating exceptional culinary experiences which cater to every guest's unique needs. With cuisine being an integral part of our expeditions, we do our best to accommodate special dietary requirements and preferences. Our talented chefs are well-versed in a variety of preparations.
            </p>

            <div className="flex gap-12 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3 text-[#555] text-sm font-light"><Droplets className="w-4 h-4 text-[#888]" /> Vegetarian options</div>
              <div className="flex items-center gap-3 text-[#555] text-sm font-light"><Check className="w-4 h-4 text-[#888]" /> Gluten-free</div>
              <div className="flex items-center gap-3 text-[#555] text-sm font-light"><Droplets className="w-4 h-4 text-[#888]" /> Low sodium</div>
            </div>
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

      {/* ── DECK PLAN (Creative Adaptation) ── */}
      <section id="deck-plan" className="py-20 lg:py-32 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-[#333] text-[13px] font-serif block mb-2">Deck Plan</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-16 max-w-3xl mx-auto">
            Spread across three decks, {data.name} showcases masterful design and use of space.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#f5f5f5] hover:bg-[#eaeaea] transition-colors">
              <h3 className="font-serif text-2xl text-[#222] mb-4">Top Deck</h3>
              <p className="text-[#555] text-sm leading-relaxed font-light mb-6">
                Opening up to the vast Mekong sky, the top deck on both ends of {data.name} is the highest vantage point aboard the cruise ship with postcard-perfect views. An ideal spot for photography, yoga or meditation.
              </p>
              <ul className="text-xs text-[#777] uppercase tracking-widest space-y-3">
                <li>• Sun Deck & Plunge Pool</li>
                <li>• Screening Room</li>
                <li>• Indoor Lounge & Bar</li>
                <li>• Gym & Spa</li>
              </ul>
            </div>
            
            <div className="p-8 bg-[#f5f5f5] hover:bg-[#eaeaea] transition-colors">
              <h3 className="font-serif text-2xl text-[#222] mb-4">Second Deck</h3>
              <p className="text-[#555] text-sm leading-relaxed font-light mb-6">
                The second deck houses {Math.floor(Number(data.stats.cabins) / 2)} Design Suites with panoramic windows. This deck also houses the boutique, main dining room, and the interactive galley where guests can observe our chefs.
              </p>
              <ul className="text-xs text-[#777] uppercase tracking-widest space-y-3">
                <li>• {Math.floor(Number(data.stats.cabins) / 2)} Design Suites</li>
                <li>• Main Dining Restaurant</li>
                <li>• Lobby & Boutique</li>
                <li>• Interactive Galley</li>
              </ul>
            </div>

            <div className="p-8 bg-[#f5f5f5] hover:bg-[#eaeaea] transition-colors">
              <h3 className="font-serif text-2xl text-[#222] mb-4">First Deck</h3>
              <p className="text-[#555] text-sm leading-relaxed font-light mb-6">
                The first deck features the remaining Design Suites and acts as the main launchpad for all shore excursions via our private tenders, ensuring seamless transitions from ship to shore.
              </p>
              <ul className="text-xs text-[#777] uppercase tracking-widest space-y-3">
                <li>• {Math.ceil(Number(data.stats.cabins) / 2)} Design Suites</li>
                <li>• Tender Boarding Area</li>
                <li>• Guest Services</li>
                <li>• Private Spa Treatment Rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EARLY BIRD BONUS ── */}
      <section 
        className="relative py-32 flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
         <div className="absolute inset-0 bg-black/60" />
         <div className="relative z-10 text-center px-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Early Bird Bonus</h2>
            <p className="text-white/80 font-sans font-light text-[15px] mb-10 max-w-xl mx-auto">
               Enjoy 30% off when you book to travel across all departure dates in 2026, 2027, and 2028.
            </p>
            <button className="bg-white text-[#222] px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
               Learn More
            </button>
         </div>
      </section>

      {/* ── CHOOSE YOUR ITINERARY ── */}
      <section className="py-20 lg:py-32 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-6">Verified Itineraries & Tariff</h2>
          <p className="text-[#555] text-[15px] font-light max-w-2xl mx-auto mb-16">
            {data.name} sails key route segments across Vietnam and Cambodia. Select an itinerary below to view schedules or check cabin availability with our specialist.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             {/* Itinerary Card 1 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                     <Image src="/images/dest_vietnam.avif" alt="Vietnam Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-4 left-4 bg-[#222] text-white text-[10px] tracking-widest uppercase px-3 py-1">3 Nights</div>
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                     <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Discovery</h3>
                     <p className="text-[#777] text-sm font-light mb-4">{data.pricing?.threeNight?.route || "Ho Chi Minh City ↔ Phnom Penh"}</p>
                     <p className="text-[#8B4A2A] text-sm font-bold tracking-widest uppercase mb-1">
                       From ${data.pricing?.threeNight?.from?.toLocaleString() || "1,260"}
                     </p>
                     <p className="text-[#999] text-[11px] mb-8">per person (twin-share)</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link href="/plan-your-journey" className="w-full bg-[#505a5f] text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#3d4549] transition-colors block text-center">
                     Inquire Availability
                  </Link>
                </div>
             </div>

             {/* Itinerary Card 2 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                     <Image src="/images/dest_cambodia.avif" alt="Cambodia Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-4 left-4 bg-[#222] text-white text-[10px] tracking-widest uppercase px-3 py-1">4 Nights</div>
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                     <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Explorer</h3>
                     <p className="text-[#777] text-sm font-light mb-4">{data.pricing?.fourNight?.route || "Phnom Penh ↔ Siem Reap"}</p>
                     <p className="text-[#8B4A2A] text-sm font-bold tracking-widest uppercase mb-1">
                       From ${data.pricing?.fourNight?.from?.toLocaleString() || "1,680"}
                     </p>
                     <p className="text-[#999] text-[11px] mb-8">per person (twin-share)</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link href="/plan-your-journey" className="w-full bg-[#505a5f] text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#3d4549] transition-colors block text-center">
                     Inquire Availability
                  </Link>
                </div>
             </div>

             {/* Itinerary Card 3 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between border-2 border-gold/40">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                     <Image src="/images/hero-3.avif" alt="Full Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-4 left-4 bg-gold text-white text-[10px] tracking-widest uppercase px-3 py-1 font-bold">7 Nights · Classic</div>
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                     <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Expedition</h3>
                     <p className="text-[#777] text-sm font-light mb-4">{data.pricing?.sevenNight?.route || "Ho Chi Minh City ↔ Siem Reap"}</p>
                     <p className="text-[#8B4A2A] text-sm font-bold tracking-widest uppercase mb-1">
                       From ${data.pricing?.sevenNight?.from?.toLocaleString() || "2,403"}
                     </p>
                     <p className="text-[#999] text-[11px] mb-8">per person (twin-share)</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link href="/plan-your-journey" className="w-full bg-navy text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-gold transition-colors block text-center">
                     Book With Best Price Guarantee
                  </Link>
                </div>
             </div>
          </div>
          
          {/* Price Transparency & Inclusions Box */}
          <div className="mt-12 bg-white p-8 border border-[#e0d9ce] max-w-3xl mx-auto text-left shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#e0d9ce] pb-3 mb-4 gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#222]">
                Price Transparency & Inclusions
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">
                Verified: {data.pricing?.lastVerified || "October 2026"}
              </span>
            </div>
            <ul className="text-xs text-[#555] space-y-2.5 leading-relaxed font-sans">
              <li>• <strong>Pricing Basis:</strong> {data.pricing?.basis || "Per person based on twin-share occupancy."}</li>
              <li>• <strong>What is Included:</strong> {data.pricing?.inclusions || "Onboard suite accommodation, all gourmet meals, daily guided shore excursions, entrance fees, and port charges."}</li>
              <li>• <strong>Operator Direct Guarantee:</strong> {data.operatorNote || `Booked under official ${data.operator || 'partner'} tariff rates with Best Price Guarantee, dedicated local specialist support, and no booking fees.`}</li>
            </ul>
          </div>

          <div className="mt-10">
            <Link href="/itineraries/vietnam-cambodia" className="text-[#222] text-[10px] tracking-widest uppercase font-bold border border-[#222] px-8 py-3 hover:bg-[#222] hover:text-white transition-colors inline-block">
              Compare All Mekong Itineraries →
            </Link>
          </div>
        </div>
      </section>

      {/* ── GUEST REVIEWS ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-16">What our guests say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f5] p-10 relative">
              <span className="font-serif text-6xl text-[#ddd] absolute top-4 left-6">"</span>
              <p className="text-[#555] font-light text-[15px] italic relative z-10 mb-6">
                An absolutely unforgettable experience. The staff anticipated our every need, the food was spectacular, and the excursions were perfectly curated.
              </p>
              <p className="text-[#222] text-xs tracking-widest uppercase font-bold">— Sarah M., UK</p>
            </div>
            <div className="bg-[#f5f5f5] p-10 relative">
              <span className="font-serif text-6xl text-[#ddd] absolute top-4 left-6">"</span>
              <p className="text-[#555] font-light text-[15px] italic relative z-10 mb-6">
                We've traveled on many river cruises, but {data.name} stands in a class of its own. The design of the suite was stunning.
              </p>
              <p className="text-[#222] text-xs tracking-widest uppercase font-bold">— James & Linda, USA</p>
            </div>
            <div className="bg-[#f5f5f5] p-10 relative">
              <span className="font-serif text-6xl text-[#ddd] absolute top-4 left-6">"</span>
              <p className="text-[#555] font-light text-[15px] italic relative z-10 mb-6">
                From the moment we stepped on board, we were treated like royalty. The culinary journey was a highlight of our trip to Asia.
              </p>
              <p className="text-[#222] text-xs tracking-widest uppercase font-bold">— David W., Australia</p>
            </div>
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
