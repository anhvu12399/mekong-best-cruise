"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const heroImages = [
  "/images/banner_1.png",
  "/images/banner_2.png",
  "/images/banner_3.png",
  "/images/banner_4.png",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-play carousel - cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Mekong River Cruise Banner ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
          {/* A gradient overlay to make text pop and mimic the screenshot's mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 flex flex-col items-start text-left">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-4 drop-shadow-lg tracking-wide">
          <span className="uppercase tracking-widest text-[0.85em]">ARTISANS of</span>
          <br />
          <span className="uppercase tracking-widest">ADVENTURE TRAVEL</span>
          <span className="text-lg lg:text-xl font-sans align-top ml-1 tracking-normal">™</span>
        </h1>
        
        <p className="text-base md:text-lg text-white/90 font-serif mb-6 drop-shadow-md tracking-wide">
          Riverboat & Small Ship Adventure Cruises
        </p>
        
        {/* Practical reassurance block */}
        <p className="text-xs md:text-sm text-gold font-medium tracking-widest uppercase mb-10 drop-shadow-md">
          3–8 day journeys · intimate vessels · curated private departures
        </p>

        {/* CTA Button */}
        <button
          onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/50 text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-navy hover:border-white transition-all duration-300 backdrop-blur-sm"
        >
          <span>Plan your Mekong journey</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
