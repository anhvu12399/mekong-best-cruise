"use client"

import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinations = [
  {
    id: "vietnam",
    title: "VIETNAM",
    subtitle: "DELTA DELIGHT",
    image: "/images/dest_vietnam.png",
    href: "/destinations/vietnam"
  },
  {
    id: "cambodia",
    title: "CAMBODIA",
    subtitle: "KHMER KINGDOM",
    image: "/images/dest_cambodia.png",
    href: "/destinations/cambodia"
  },
  {
    id: "laos",
    title: "LAOS",
    subtitle: "SERENE WATERS",
    image: "/images/dest_laos.png",
    href: "/destinations/laos"
  },
  {
    id: "thailand",
    title: "THAILAND",
    subtitle: "BORDER PANORAMAS",
    image: "/images/dest_thailand.png",
    href: "/destinations/thailand"
  },
  {
    id: "myanmar",
    title: "MYANMAR",
    subtitle: "GOLDEN TRIANGLE",
    image: "/images/dest_myanmar.png",
    href: "/destinations/myanmar"
  },
  {
    id: "china",
    title: "CHINA",
    subtitle: "UPPER LANCANG",
    image: "/images/dest_china.png",
    href: "/destinations/china"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
