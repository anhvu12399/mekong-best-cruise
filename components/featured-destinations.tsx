"use client"

import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinations = [
  {
    id: "luang-prabang",
    title: "LUANG PRABANG",
    subtitle: "SPIRITUAL SANCTUARY",
    image: "/images/dest_laos.png",
    href: "/destinations/luang-prabang"
  },
  {
    id: "siem-reap",
    title: "SIEM REAP",
    subtitle: "ANCIENT EMPIRE",
    image: "/images/dest_cambodia.png",
    href: "/destinations/siem-reap"
  },
  {
    id: "phnom-penh",
    title: "PHNOM PENH",
    subtitle: "PEARL OF ASIA",
    image: "/images/banner_1.png",
    href: "/destinations/phnom-penh"
  },
  {
    id: "ho-chi-minh-city",
    title: "SAIGON",
    subtitle: "VIBRANT METROPOLIS",
    image: "/images/dest_vietnam.png",
    href: "/destinations/ho-chi-minh-city"
  },
  {
    id: "can-tho",
    title: "CAN THO",
    subtitle: "DELTA HEART",
    image: "/images/banner_2.png",
    href: "/destinations/can-tho"
  },
  {
    id: "chiang-rai",
    title: "CHIANG RAI",
    subtitle: "NORTHERN FRONTIER",
    image: "/images/dest_thailand.png",
    href: "/destinations/chiang-rai"
  }
]

export function FeaturedDestinations() {
  return (
    <section className="py-16 lg:py-20 bg-[#fbfaf8] relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px bg-navy/20 w-12 md:w-24"></div>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>
              Exotic Destinations
            </h2>
            <div className="h-px bg-navy/20 w-12 md:w-24"></div>
          </div>
          <p className="text-[#555] max-w-3xl mx-auto leading-relaxed text-base font-serif">
            Uncover the profound secrets of the Mekong River as you journey through ancient empires, breathtaking landscapes, and fascinating indigenous cultures. From the untamed upper reaches of the Lancang to the vibrant, life-giving delta of Vietnam, explore the planet's most captivating remaining frontiers.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-6xl mx-auto">
          {destinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={dest.href}
              className="group relative aspect-[4/5] w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[250px] overflow-hidden flex flex-col justify-end p-5 text-center bg-navy flex-shrink-0"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className={`text-white text-2xl md:text-3xl mb-1.5 tracking-widest ${playfair.className}`}>
                  {dest.title}
                </h3>
                <p className="text-white/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                  {dest.subtitle}
                </p>
                <div className="mt-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] border-b border-gold/50 pb-0.5 font-bold">Explore Routes</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
