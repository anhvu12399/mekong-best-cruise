"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Calendar, CloudSun, ArrowUpRight, Info } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const SEASONS = [
  {
    name: "Cool & Dry Season",
    months: "December – April",
    desc: "Peak cruising season. High skies, low humidity, and pleasant temperatures averaging 22°C - 30°C. Perfect for walking tours, cycling, and exploring ancient stone ruins like Angkor Wat under mild sun.",
    theme: "bg-[#f4f1ea] border-l-4 border-gold"
  },
  {
    name: "Green Season",
    months: "May – July",
    desc: "Tropical afternoon showers bring the landscape to life. Rice paddies glow neon green, local orchards yield heavy harvests, and waterways are quiet. Offers excellent travel value and beautiful morning light.",
    theme: "bg-[#edf2ee] border-l-4 border-[#5d8a66]"
  },
  {
    name: "High Water Season",
    months: "August – November",
    desc: "Rivers rise to their maximum levels. Floating markets are at their most active, flooded cajuput forests are navigable by boat, and cruise ships can reach deep channels easily. Skies are dramatic and skies clear quickly.",
    theme: "bg-[#ebf0f5] border-l-4 border-[#4a7a96]"
  }
]

const MONTHS_DATA = [
  {
    name: "January",
    temp: "22°C - 30°C",
    season: "Cool & Dry Season",
    image: "/images/floating_market_dawn.png",
    highlight: "Cai Rang trading peak & clear blue skies",
    description: "January is one of the peak months to travel. Clear blue skies, pleasant temperatures, and low humidity make exploring cities like Phnom Penh and the rural temples of Siem Reap incredibly comfortable. Canals flow smoothly and the morning markets are vibrant.",
    recommendedItinerary: {
      name: "10-Day The Full Mekong Story",
      href: "/itineraries/full-mekong-story"
    }
  },
  {
    name: "February",
    temp: "24°C - 32°C",
    season: "Cool & Dry Season",
    image: "/images/hoi_an_lanterns.png",
    highlight: "Tet Holiday festivities & lantern-lit streets",
    description: "February brings festive energy with Lunar New Year celebrations throughout Vietnam. The weather is dry and sunny, perfect for cycling through Ben Tre villages or walking the lantern-lit streets of Hoi An. Cruise conditions are excellent.",
    recommendedItinerary: {
      name: "15-Day Rivers of Indochina",
      href: "/itineraries/rivers-of-indochina"
    }
  },
  {
    name: "March",
    temp: "26°C - 34°C",
    season: "Cool & Dry Season",
    image: "/images/dest_laos.avif",
    highlight: "Dramatic sunsets & warm temple explorations",
    description: "As temperatures begin to rise, the landscapes are clear and sunsets become highly dramatic. It's a great month to cruise the Upper Mekong gorges in Laos and visit the Buddha caves at Pak Ou before the tropical rains begin.",
    recommendedItinerary: {
      name: "5-Day Boutique Expedition",
      href: "/itineraries/small-ship"
    }
  },
  {
    name: "April",
    temp: "28°C - 36°C",
    season: "Cool & Dry Season",
    image: "/images/luang_prabang_alms.png",
    highlight: "Lao New Year (Pi Mai) water celebrations",
    description: "April is the warmest month of the year. It hosts the traditional New Year water festivals in Cambodia and Laos, turning Luang Prabang and Siem Reap into joyous, interactive celebrations. A cruise is the perfect way to cool off.",
    recommendedItinerary: {
      name: "Private Mekong River Charter",
      href: "/itineraries/private-charter"
    }
  },
  {
    name: "May",
    temp: "27°C - 34°C",
    season: "Green Season",
    image: "/images/cajuput_hero.avif",
    highlight: "Lush green countryside & fresh rain showers",
    description: "May marks the return of brief afternoon showers that paint the entire landscape a vibrant green. Mangoes and tropical fruits ripen in the orchards. Cruising during this season offers quiet waterways and excellent value.",
    recommendedItinerary: {
      name: "1-Day Mindful Mekong",
      href: "/itineraries/1-day"
    }
  },
  {
    name: "June",
    temp: "26°C - 33°C",
    season: "Green Season",
    image: "/images/floating_fruit.avif",
    highlight: "Fruit harvest in the Mekong Delta",
    description: "June is the peak of the fruit harvest in the Mekong Delta. Local orchards are heavy with durian, rambutan, and mangosteen. The daily afternoon rains keep the weather cooler, and the floating markets are piled high with fresh produce.",
    recommendedItinerary: {
      name: "2-Day River Pulse",
      href: "/itineraries/2-days"
    }
  },
  {
    name: "July",
    temp: "25°C - 32°C",
    season: "Green Season",
    image: "/images/bentre_waterways.png",
    highlight: "High water levels & lush delta canals",
    description: "July sees rising water levels as the Mekong swells. Exploring the side-canals of Ben Tre by private boat is incredible, with the water reaching deep into the palm groves. The afternoon downpours create mist-covered river scenes.",
    recommendedItinerary: {
      name: "3-4 Day Immersive Mekong Delta",
      href: "/itineraries/mekong-delta"
    }
  },
  {
    name: "August",
    temp: "25°C - 31°C",
    season: "High Water Season",
    image: "/images/hidden_sampan.avif",
    highlight: "Flooded forests & easy navigation",
    description: "August is the beginning of the high water season. The Tonle Sap River reverses flow and fills the great lake. Navigating the upper reaches and delta waterways is smooth, with dramatic skies and vibrant green rice fields.",
    recommendedItinerary: {
      name: "7-8 Day Vietnam to Cambodia Pilgrimage",
      href: "/itineraries/vietnam-cambodia"
    }
  },
  {
    name: "September",
    temp: "24°C - 31°C",
    season: "High Water Season",
    image: "/images/1day_boat.avif",
    highlight: "Full floating canals & birds nesting",
    description: "September is the peak of the flood season. The wetlands are fully submerged, making it the best time to visit bird sanctuaries and flooded forests. The Mekong is at its grandest scale, offering epic views from your cabin balcony.",
    recommendedItinerary: {
      name: "10-Day The Full Mekong Story",
      href: "/itineraries/full-mekong-story"
    }
  },
  {
    name: "October",
    temp: "24°C - 30°C",
    season: "High Water Season",
    image: "/images/halong_junk_cruise.png",
    highlight: "Cooler breezes & crystal clear waters",
    description: "In October, the rains begin to taper off, leaving behind clean air, full rivers, and lush landscapes. Temperatures cool down, making it an excellent time to combine a Mekong cruise with a northern Halong Bay overnight junk trip.",
    recommendedItinerary: {
      name: "15-Day Rivers of Indochina",
      href: "/itineraries/rivers-of-indochina"
    }
  },
  {
    name: "November",
    temp: "23°C - 30°C",
    season: "High Water Season",
    image: "/images/angkor_bayon_face.png",
    highlight: "Water Festival (Bon Om Touk) in Phnom Penh",
    description: "November is the ideal crossover month, combining high water levels with cool, dry weather. Phnom Penh hosts the spectacular Water Festival boat races. The temples of Angkor are framed by water-filled moats reflecting the ancient towers.",
    recommendedItinerary: {
      name: "7-8 Day Vietnam to Cambodia Pilgrimage",
      href: "/itineraries/vietnam-cambodia"
    }
  },
  {
    name: "December",
    temp: "22°C - 29°C",
    season: "Cool & Dry Season",
    image: "/images/hue_perfume_river.png",
    highlight: "Perfect winter escape & cool river breezes",
    description: "December offers the best weather of the year with mild temperatures and low humidity. River breezes are cool, the skies are bright blue, and local cities are alive with winter travelers. This is the ultimate peak season cruise month.",
    recommendedItinerary: {
      name: "15-Day Rivers of Indochina",
      href: "/itineraries/rivers-of-indochina"
    }
  }
]

const ITINERARIES = [
  {
    slug: "rivers-of-indochina",
    title: "15-Day Rivers of Indochina",
    route: "Hanoi — Halong Bay — Hue — Hoi An — Saigon — Phnom Penh — Siem Reap — Luang Prabang",
    desc: "A magnificent 15-day cross-border pilgrimage connecting the Red River, the Perfume River, the Thu Bon, and the Mekong.",
    image: "/images/indochina_rivers_hero.png",
  },
  {
    slug: "full-mekong-story",
    title: "10-Day The Full Mekong Story",
    route: "Saigon — Mekong Delta — Luang Prabang — Golden Triangle",
    desc: "Trace the Mekong from the flat green delta of Vietnam to the mountainous gorges of Laos and the Golden Triangle.",
    image: "/images/full_mekong_hero.png",
  },
  {
    slug: "vietnam-cambodia",
    title: "7-8 Day Vietnam to Cambodia Pilgrimage",
    route: "Saigon — Phnom Penh — Siem Reap (Angkor Wat)",
    desc: "A comprehensive cross-border luxury pilgrimage connecting the vibrant Mekong Delta to the ancient stone spires of Angkor Wat.",
    image: "/images/vc_hero.avif",
  },
  {
    slug: "small-ship",
    title: "5-Day Boutique Expedition",
    route: "Luang Prabang — Pakbeng — Golden Triangle",
    desc: "Navigate the dramatic limestone gorges and remote upper reaches of the Mekong between Laos and Thailand.",
    image: "/images/dest_laos.avif",
  },
  {
    slug: "mekong-delta",
    title: "3-4 Day Immersive Mekong Delta",
    route: "Saigon — Ben Tre — Vinh Long — Can Tho",
    desc: "An immersive, local-led journey built around homestays, canal kayaking, and traditional multi-generational family meals.",
    image: "/images/dest_vietnam.avif",
  },
  {
    slug: "2-days",
    title: "2-Day River Pulse",
    route: "Saigon — Can Tho — Cai Rang Floating Market",
    desc: "A focused weekend exploration featuring a riverside homestay dinner and dawn at the Cai Rang floating market.",
    image: "/images/pulse_delta.avif",
  },
  {
    slug: "1-day",
    title: "1-Day Mindful Mekong",
    route: "Saigon — Ben Tre Coconut Canals",
    desc: "A slow-paced, deeply connected private day trip into the quiet palm-lined canals of Ben Tre, away from tourist crowds.",
    image: "/images/1day_hero.avif",
  },
  {
    slug: "private-charter",
    title: "Private Mekong River Charter",
    route: "Fully Custom Routing (Upper or Lower Mekong)",
    desc: "Absolute privacy and unscripted freedom. Claim an entire luxury vessel exclusively for your family or group.",
    image: "/images/banner_3.avif",
  }
]

export function BestTimeToTravelClient() {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)
  const monthsRef = useRef<HTMLDivElement>(null)

  const scrollToMonth = (monthName: string) => {
    const el = document.getElementById(`month-${monthName.toLowerCase()}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const filteredMonths = selectedSeason 
    ? MONTHS_DATA.filter(m => m.season === selectedSeason)
    : MONTHS_DATA

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative h-[65vh] w-full flex items-end pb-20 justify-center text-center">
        <Image 
          src="/images/enhanced_hero_1_sharp_optimized.avif" 
          alt="Mekong Seasonal Sunset" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-[#c9a962] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Mekong Weather & Seasons Guide
          </p>
          <h1 className={`text-4xl md:text-6xl font-serif text-white mb-6 leading-tight ${playfair.className}`}>
            Best Time to Travel
          </h1>
          <p className="text-base md:text-lg text-white/80 font-serif max-w-2xl mx-auto italic leading-relaxed">
            The Mekong changes character with every season. Tracing its ebb and flow through Vietnam, Cambodia, and Laos, our monthly guide helps you choose the perfect window.
          </p>
        </div>
      </section>

      {/* ── SEASONS OVERVIEW ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-3">Atmospheric Cycles</span>
          <h2 className={`text-3xl md:text-4xl text-navy ${playfair.className}`}>Understanding the River Seasons</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SEASONS.map((season) => (
            <div 
              key={season.name}
              onClick={() => setSelectedSeason(selectedSeason === season.name ? null : season.name)}
              className={`p-8 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 rounded-sm ${season.theme} ${
                selectedSeason === season.name ? "ring-2 ring-navy/25 scale-[1.02]" : "opacity-90 hover:opacity-100"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-navy font-bold text-lg">{season.name}</h3>
                <CloudSun size={20} className="text-navy/40" />
              </div>
              <p className="text-[#8B4A2A] text-xs font-bold tracking-widest uppercase mb-4">{season.months}</p>
              <p className="font-serif text-navy/70 text-sm leading-relaxed">{season.desc}</p>
              <div className="mt-6 text-[10px] uppercase tracking-wider font-bold text-navy/40 flex items-center gap-1.5">
                <span>{selectedSeason === season.name ? "Show all months" : "Filter by this season"}</span>
                <ArrowRight size={10} className={`transform transition-transform ${selectedSeason === season.name ? "rotate-90" : ""}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MONTH QUICK SELECTOR ── */}
      <section className="bg-[#ede9e2]/60 py-8 border-y border-[#e0d9ce] sticky top-16 lg:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
            <span className="text-navy/40 font-bold text-[10px] tracking-widest uppercase shrink-0 mr-4 flex items-center gap-1.5">
              <Calendar size={14} /> Quick Select:
            </span>
            {MONTHS_DATA.map((m) => (
              <button
                key={m.name}
                onClick={() => scrollToMonth(m.name)}
                className="px-4 py-1.5 bg-white border border-[#e0d9ce] hover:border-gold hover:text-[#8B4A2A] font-serif text-xs text-navy/80 tracking-wide rounded-full transition-colors shrink-0"
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 MONTHS TIMELINE ── */}
      <section ref={monthsRef} className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {filteredMonths.map((m) => (
            <div 
              key={m.name}
              id={`month-${m.name.toLowerCase()}`}
              className="grid lg:grid-cols-12 gap-12 items-center border-b border-[#e0d9ce]/60 pb-20 last:border-b-0 last:pb-0"
            >
              {/* Image Box */}
              <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={m.image}
                  alt={`Mekong in ${m.name}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-[#8B4A2A] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 shadow-md">
                  {m.name}
                </div>
              </div>

              {/* Text Box */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="bg-[#ede9e2] text-navy/80 text-[10px] tracking-wider uppercase px-3 py-1 font-bold rounded-sm border border-[#e0d9ce]">
                    {m.season}
                  </span>
                  <span className="bg-white text-[#8B4A2A] text-[10px] tracking-wider uppercase px-3 py-1 font-bold rounded-sm border border-gold/40">
                    🌡 {m.temp}
                  </span>
                </div>

                <h3 className={`text-3xl text-navy ${playfair.className}`}>
                  {m.name} on the Mekong
                </h3>

                <p className="text-[#8B4A2A] font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                  <span className="text-gold">✦</span> Highlight: {m.highlight}
                </p>

                <p className="font-serif text-navy/70 text-base leading-relaxed">
                  {m.description}
                </p>

                {/* Recommended Itinerary CTA */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-4 bg-white border border-[#e0d9ce] p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-[#faf8f5] text-gold border border-gold/20">
                      <Info size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-navy/40 mb-0.5">Recommended Journey</p>
                      <Link 
                        href={m.recommendedItinerary.href}
                        className="font-serif text-sm font-bold text-navy hover:text-[#8B4A2A] flex items-center gap-1.5"
                      >
                        <span>{m.recommendedItinerary.name}</span>
                        <ArrowUpRight size={14} className="text-[#8B4A2A]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECOMMENDED ITINERARIES ── */}
      <section className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-3">Our Collection</span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Explore All Mekong Itineraries</h2>
            <p className="font-serif text-navy/60 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              From mindful day cruises to 15-day cross-border grand pilgrimages, select a route that fits your schedule and style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ITINERARIES.map((item) => (
              <div 
                key={item.slug} 
                className="bg-white border border-[#e0d9ce] rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                  <h3 className={`text-xl text-navy font-bold leading-tight ${playfair.className}`}>
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] leading-relaxed">
                    📍 {item.route}
                  </p>
                  <p className="font-serif text-navy/70 text-xs leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-navy/5">
                    <Link
                      href={`/itineraries/${item.slug}`}
                      className="inline-flex items-center gap-2 text-gold text-[10px] font-bold tracking-[0.2em] uppercase hover:text-navy transition-colors"
                    >
                      <span>Explore Route</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-navy text-center px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Plan Your Seasonal Voyage
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Ready to Begin?
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Get in touch with our destination specialists to select the best month for your Mekong River Cruise and customize your route.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Consult a Specialist</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
