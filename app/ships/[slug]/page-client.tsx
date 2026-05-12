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

      {/* ── MASSIVE PARALLAX / TALL IMAGE ── */}
      <section className="relative w-full h-[150vh] bg-[#111]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
           <Image 
             src={data.gallery[0] || data.heroImage} 
             alt={`${data.name} from the front`} 
             fill 
             className="object-cover object-center"
           />
           {/* Subtle gradient at the bottom to make text readable */}
           <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
           <div className="absolute bottom-10 left-6 md:left-12 z-10">
             <p className="text-white/80 text-[10px] md:text-xs tracking-[0.25em] font-bold uppercase drop-shadow-md">
               Unravel ancient mysteries in the Mekong Delta
             </p>
           </div>
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
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#333] text-[13px] font-serif block mb-2">Suites</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#222]">
              A luxurious sanctuary on the mighty Mekong
            </h2>
          </div>

          <div className="relative aspect-[21/9] w-full bg-gray-100 group">
            <Image src={data.suites.image} alt={data.suites.title} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-6">
              <span className="text-white text-xs tracking-widest uppercase">{data.suites.title}</span>
              <button className="bg-white text-[#222] px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-100">
                View Suite Details
              </button>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2 mt-2 mb-16">
             {[...Array(6)].map((_, idx) => (
                <div key={idx} className={`relative aspect-video bg-gray-200 cursor-pointer ${idx === 0 ? 'ring-2 ring-white opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}>
                   <Image src={data.gallery[idx % data.gallery.length]} alt="Thumbnail" fill className="object-cover" />
                </div>
             ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-[#555] text-[15px] leading-relaxed font-sans font-light mb-16 text-center">
              {data.suites.description} When it comes to rest and relaxation, {data.name} cuts no corners. Our {data.stats.cabins} river-facing suites are furnished with inviting hardwood interiors along with premium fittings and bedding. In the fully air-conditioned comfort of your river cruise suite, gaze at the Mekong panorama and watch an idyllic world float by.
            </p>
          </div>

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

      {/* ── EXPEDITION HIGHLIGHTS ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#222] mb-8">Expedition highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: "Exceptional speed and comfort", img: data.gallery[0] || "/images/media__1777568799075.png" },
              { title: "Fully equipped for adventure", img: data.gallery[1] || "/images/media__1777569329220.png" },
              { title: "World-class cuisine", img: data.gallery[2] || "/images/media__1777571269177.png" },
              { title: "State of the art design", img: data.gallery[3] || "/images/media__1777571481511.png" },
              { title: "Expert-led excursions", img: data.gallery[4] || "/images/media__1777572235741.png" },
              { title: "Cultural experiences", img: data.gallery[5] || "/images/media__1777574051095.png" },
            ].map((highlight, idx) => (
              <div key={idx} className="relative aspect-[4/3] group overflow-hidden bg-gray-100">
                <Image src={highlight.img} alt={highlight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-white font-serif text-lg md:text-xl">
                  {highlight.title}
                </h3>
              </div>
            ))}
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
      <section className="relative py-32 flex items-center justify-center">
         <div className="absolute inset-0">
            <Image src={data.heroImage} alt="Early Bird" fill className="object-cover object-bottom" />
            <div className="absolute inset-0 bg-black/60" />
         </div>
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
          <h2 className="font-serif text-3xl md:text-5xl text-[#222] mb-6">Choose your itinerary</h2>
          <p className="text-[#555] text-[15px] font-light max-w-2xl mx-auto mb-16">
            {data.name} offers guests the opportunity to embark on the finest river ship experience in Cambodia and Vietnam, with the choice of the following itineraries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             {/* Itinerary Card 1 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                   <Image src="/images/dest_vietnam.avif" alt="Vietnam Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-[#222] text-white text-[10px] tracking-widest uppercase px-3 py-1">3 Nights</div>
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                   <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Discovery Cruise</h3>
                   <p className="text-[#777] text-sm font-light mb-6">Ho Chi Minh City ↔ Phnom Penh</p>
                   <p className="text-[#222] text-xs tracking-widest uppercase mb-8">From $3,360 per adult</p>
                   <Link href="/itineraries/mekong-delta" className="w-full bg-[#505a5f] text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#3d4549] transition-colors block text-center">
                      Select
                   </Link>
                </div>
             </div>

             {/* Itinerary Card 2 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                   <Image src="/images/dest_cambodia.avif" alt="Cambodia Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-[#222] text-white text-[10px] tracking-widest uppercase px-3 py-1">4 Nights</div>
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                   <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Explorer Cruise</h3>
                   <p className="text-[#777] text-sm font-light mb-6">Phnom Penh ↔ Siem Reap</p>
                   <p className="text-[#222] text-xs tracking-widest uppercase mb-8">From $4,480 per adult</p>
                   <Link href="/itineraries/vietnam-cambodia" className="w-full bg-[#505a5f] text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#3d4549] transition-colors block text-center">
                      Select
                   </Link>
                </div>
             </div>

             {/* Itinerary Card 3 */}
             <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                   <Image src="/images/hero_3_sharp.avif" alt="Full Itinerary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-[#222] text-white text-[10px] tracking-widest uppercase px-3 py-1">7 Nights</div>
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                   <h3 className="font-serif text-xl text-[#222] mb-2">{data.name} Expedition Cruise</h3>
                   <p className="text-[#777] text-sm font-light mb-6">Ho Chi Minh City ↔ Siem Reap</p>
                   <p className="text-[#222] text-xs tracking-widest uppercase mb-8">From $7,840 per adult</p>
                   <Link href="/itineraries/small-ship" className="w-full bg-[#505a5f] text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#3d4549] transition-colors block text-center">
                      Select
                   </Link>
                </div>
             </div>
          </div>
          
          <button className="mt-12 text-[#222] text-[10px] tracking-widest uppercase font-bold border border-[#222] px-8 py-3 hover:bg-[#222] hover:text-white transition-colors">
            View More Itineraries →
          </button>
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
