"use client"

import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { useRef } from "react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const destinations = [
  {
    id: "luang-prabang",
    title: "Luang Prabang",
    location: "LAOS",
    subtitle: "SPIRITUAL SANCTUARY",
    image: "/images/dest_laos.avif",
    href: "/destinations/luang-prabang"
  },
  {
    id: "siem-reap",
    title: "Siem Reap",
    location: "CAMBODIA",
    subtitle: "ANCIENT EMPIRE",
    image: "/images/dest_cambodia.avif",
    href: "/destinations/siem-reap"
  },
  {
    id: "phnom-penh",
    title: "Phnom Penh",
    location: "CAMBODIA",
    subtitle: "PEARL OF ASIA",
    image: "/images/banner_1.avif",
    href: "/destinations/phnom-penh"
  },
  {
    id: "ho-chi-minh-city",
    title: "Saigon",
    location: "VIETNAM",
    subtitle: "VIBRANT METROPOLIS",
    image: "/images/dest_vietnam.avif",
    href: "/destinations/ho-chi-minh-city"
  },
  {
    id: "can-tho",
    title: "Can Tho",
    location: "VIETNAM",
    subtitle: "DELTA HEART",
    image: "/images/banner_2.avif",
    href: "/destinations/can-tho"
  },
  {
    id: "chiang-rai",
    title: "Chiang Rai",
    location: "THAILAND",
    subtitle: "NORTHERN FRONTIER",
    image: "/images/dest_thailand.avif",
    href: "/destinations/chiang-rai"
  }
]

export function FeaturedDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 lg:py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Scrollbar hide styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl text-navy mb-4 leading-tight ${playfair.className}`}>
              Exotic Destinations
            </h2>
            <p className="text-navy/70 leading-relaxed text-sm md:text-base font-serif">
              Discover the world's most desirable destinations through our unique collection.
            </p>
          </div>
          
          {/* Slider Navigation Arrows */}
          <div className="flex gap-4 items-center select-none pt-2">
            <button 
              onClick={() => scroll('left')}
              className="text-navy/40 hover:text-gold transition-colors text-3xl font-light cursor-pointer outline-none"
              aria-label="Previous"
            >
              &#10216;
            </button>
            <button 
              onClick={() => scroll('right')}
              className="text-navy/40 hover:text-gold transition-colors text-3xl font-light cursor-pointer outline-none"
              aria-label="Next"
            >
              &#10217;
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-6 px-6 lg:-mx-8 lg:px-8"
        >
          {destinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={dest.href}
              className="group relative aspect-[3/4] w-[280px] sm:w-[320px] lg:w-[340px] overflow-hidden flex flex-col justify-start p-6 md:p-8 bg-navy flex-shrink-0 snap-start rounded-sm shadow-md transition-shadow duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
              />
              
              {/* Dark Gradient Overlay (top-focused for text contrast, and soft bottom depth) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 transition-opacity duration-500 group-hover:from-black/60 group-hover:to-black/40" />
              
              {/* Content (Overlaid at top left like the screenshot) */}
              <div className="relative z-10 text-left">
                <h3 className={`text-white text-2xl md:text-3xl mb-1 leading-tight tracking-wide transition-all duration-300 font-light ${playfair.className}`}>
                  {dest.title}
                </h3>
                <p className="text-white/80 text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans font-semibold">
                  {dest.location}
                </p>
                
                {/* Secondary poetic tag (Optional, shows on hover for premium interactive feel) */}
                <p className="text-gold/90 text-[10px] tracking-[0.15em] uppercase font-sans font-bold mt-2 opacity-0 transform -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {dest.subtitle}
                </p>
              </div>

              {/* Bottom "Explore" Micro-animation */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-[10px] text-white uppercase tracking-[0.25em] font-bold border-b border-white/50 pb-0.5">
                  Explore Routes
                </span>
              </div>
            </Link>
          ))}
        </div>



      </div>
    </section>
  )
}
