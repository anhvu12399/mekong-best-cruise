"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const heroImages = [
  "/images/hero-1.avif",
  "/images/hero-2.avif",
  "/images/hero-3.avif",
  "/images/hero-4.avif",
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

  const handleSearchClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 flex flex-col items-start text-left">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-6 drop-shadow-lg tracking-wide">
          <span className="uppercase tracking-widest text-[0.85em]">ARTISANS of</span>
          <br />
          <span className="uppercase tracking-widest">ADVENTURE TRAVEL</span>
          <span className="text-2xl lg:text-3xl font-sans align-top ml-2 tracking-normal">™</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-serif mb-12 drop-shadow-md tracking-wide">
          Riverboat & Small Ship Adventure Cruises
        </p>

        {/* Search Bar - styled like the screenshot */}
        <button
          onClick={handleSearchClick}
          className="group w-full max-w-[28rem] rounded-full border border-white/30 bg-[#23201b]/80 hover:bg-[#23201b] backdrop-blur-md px-8 py-5 flex items-center justify-between transition-all duration-300 shadow-2xl"
        >
          <span className="text-white/80 text-[15px] tracking-wide">Where would you like to cruise?</span>
          <Search size={20} className="text-white/60 group-hover:text-white transition-colors" />
        </button>

        {/* Carousel Indicators (optional, keeping them but aligned left) */}
        <div className="flex gap-3 mt-16">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "w-10 bg-white" : "w-4 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
