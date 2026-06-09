"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Bodoni_Moda } from "next/font/google"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const SHIPS_LIST = [
  {
    name: "Mekong Jewel",
    type: "Ultra-Luxury Suite Vessel",
    desc: "The pinnacle of contemporary luxury on the river, featuring all-suite accommodation, a swimming pool, spa, and private butler service.",
    image: "/images/mekong_jewel_v2.avif",
  },
  {
    name: "The Jahan",
    type: "Romantic Heritage Vessel",
    desc: "A work of art combining Indian-British colonial styling, hand-carved details, private balconies, and unparalleled on-board space.",
    image: "/images/the_jahan.avif",
  },
  {
    name: "Jayavarman",
    type: "Art-Deco Boutique Vessel",
    desc: "Marrying French-colonial elegance with traditional Indochinese artistry, featuring grand cabins and an open sun deck.",
    image: "/images/jayavarman_hero.avif",
  }
]

const ITINERARIES_LIST = [
  {
    slug: "rivers-of-indochina",
    title: "Rivers of Indochina",
    duration: "15 Days / 14 Nights",
    route: "Hanoi → Halong Bay → Hue → Hoi An → Ho Chi Minh City → Mekong Delta → Phnom Penh → Siem Reap → Luang Prabang → Golden Triangle",
    desc: "Fifteen days tracking the organizing force behind everything worth seeing in Indochina: the great rivers.",
    image: "/images/indochina_rivers_hero.png"
  },
  {
    slug: "vietnam-cambodia",
    title: "Vietnam to Cambodia Pilgrimage",
    duration: "8 Days / 7 Nights",
    route: "Saigon → My Tho → Cai Be → Sa Dec → Tan Chau → Phnom Penh → Kampong Chhnang → Tonle Sap → Siem Reap",
    desc: "Our signature route along the Lower Mekong. A pilgrimage between the vibrant delta and the ancient temples.",
    image: "/images/heritage_start.avif"
  },
  {
    slug: "small-ship",
    title: "Bespoke Small Ship Cruises",
    duration: "4–8 Days",
    route: "Saigon — Phnom Penh — Siem Reap",
    desc: "Glide through the waters of the Mekong on our handpicked luxury boutique vessels.",
    image: "/images/jayavarman_hero.avif"
  },
  {
    slug: "private-charter",
    title: "Private Mekong River Charter",
    duration: "3–5 Days",
    route: "Saigon — Ben Tre Canals — Can Tho",
    desc: "For those who value privacy and custom routes. A private floating villa just for your family.",
    image: "/images/pulse_delta.avif"
  },
  {
    slug: "mekong-delta",
    title: "Immersive Mekong Delta",
    duration: "3–4 Days",
    route: "Ben Tre — Sa Dec — Can Tho",
    desc: "A deep dive into the local culture, craft villages, and floating markets of Vietnam's fertile delta.",
    image: "/images/vc_day1.avif"
  },
  {
    slug: "1-day",
    title: "1-Day Mindful Mekong",
    duration: "1 Day",
    route: "Saigon — Ben Tre Canals",
    desc: "A slow-paced, deeply connected private journey into the quiet heart of the delta's side canals.",
    image: "/images/1day_hero.avif"
  },
  {
    slug: "2-days",
    title: "2-Day River Pulse",
    duration: "2 Days",
    route: "Saigon — Can Tho",
    desc: "Experience the true contrast of the delta: a quiet local night followed by the bustling dawn market.",
    image: "/images/pulse_delta.avif"
  },
  {
    slug: "full-mekong-story",
    title: "The Full Mekong Story",
    duration: "10 Days",
    route: "Saigon — Can Tho — Vĩnh Long — Sadec — Chau Doc — Phnom Penh — Luang Prabang — Golden Triangle",
    desc: "A comprehensive journey tracking the Mekong River from the flat green delta in Vietnam to the mountainous borderlands of Laos.",
    image: "/images/full_mekong_hero.png"
  }
]

interface ItineraryBottomSectionsProps {
  currentSlug: string
}

export function ItineraryBottomSections({ currentSlug }: ItineraryBottomSectionsProps) {
  // Deterministically select 3 other itineraries wrap-around
  const currentIndex = ITINERARIES_LIST.findIndex(item => item.slug === currentSlug)
  const relatedItineraries = []
  
  if (currentIndex !== -1) {
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % ITINERARIES_LIST.length
      relatedItineraries.push(ITINERARIES_LIST[nextIndex])
    }
  } else {
    // fallback
    relatedItineraries.push(ITINERARIES_LIST[0], ITINERARIES_LIST[1], ITINERARIES_LIST[2])
  }

  return (
    <div className="bg-[#faf8f5]">
      {/* ── FEATURED SHIPS SECTION ── */}
      <section className="py-24 border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.35em] uppercase font-bold block mb-4">
              Featured Fleet
            </span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>
              Boutique Luxury Vessels
            </h2>
            <p className="text-navy/60 text-sm md:text-base max-w-xl mx-auto mt-4 font-serif italic">
              Choose your river sanctuary. Click on any vessel to open the journey planner and book your passage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SHIPS_LIST.map((ship) => (
              <Link
                key={ship.name}
                href={`/plan-your-journey?vessel=${ship.name.toLowerCase().replace(" ", "-")}`}
                className="group flex flex-col bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-navy/5">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold block mb-2">
                      {ship.type}
                    </span>
                    <h3 className={`text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                      {ship.name}
                    </h3>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                      {ship.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all self-start">
                    <span>Enquire Now</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ITINERARIES SECTION ── */}
      <section className="py-24 border-t border-[#e0d9ce] bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.35em] uppercase font-bold block mb-4">
              Explore More
            </span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>
              Other Mekong Journeys
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedItineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className="group flex flex-col bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30 z-10">
                    <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                      <Clock size={10} className="stroke-[#c9a962]" />
                      {itinerary.duration}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[#8B4A2A] text-[9px] tracking-[0.15em] uppercase font-bold block mb-2 line-clamp-1">
                      {itinerary.route}
                    </span>
                    <h3 className={`text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                      {itinerary.title}
                    </h3>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                      {itinerary.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all self-start">
                    <span>Explore Route</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
