"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

const heroImages = [
  "/images/banner_1.png",
  "/images/banner_2.png",
  "/images/banner_3.png",
  "/images/banner_4.png",
]

const destinations = [
  { name: "Vietnam", href: "/destinations/vietnam" },
  { name: "Cambodia", href: "/destinations/cambodia" },
  { name: "Laos", href: "/destinations/laos" },
  { name: "Thailand", href: "/destinations/thailand" },
  { name: "Myanmar", href: "/destinations/myanmar" },
  { name: "China", href: "/destinations/china" },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Auto-play carousel - cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
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
        
        <p className="text-base md:text-lg text-white/90 font-serif mb-8 drop-shadow-md tracking-wide">
          Riverboat & Small Ship Adventure Cruises
        </p>

        {/* Search Bar Dropdown */}
        <div className="relative w-full max-w-sm" ref={dropdownRef}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`group w-full rounded-full border border-white/30 bg-[#23201b]/80 hover:bg-[#23201b] backdrop-blur-md px-5 py-3.5 flex items-center justify-between transition-all duration-300 shadow-2xl ${isSearchOpen ? 'ring-2 ring-white/50' : ''}`}
          >
            <span className="text-white/80 text-[13px] tracking-wide">Where would you like to cruise?</span>
            <Search size={16} className="text-white/60 group-hover:text-white transition-colors" />
          </button>

          {/* Dropdown Menu */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full mt-3 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 text-xs font-semibold text-navy/50 uppercase tracking-widest border-b border-navy/5 mb-1">
                Destinations
              </div>
              {destinations.map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => {
                    setIsSearchOpen(false);
                    router.push(dest.href);
                  }}
                  className="w-full text-left px-5 py-2.5 hover:bg-navy/5 text-navy font-serif transition-colors flex items-center justify-between group"
                >
                  <span className="text-[15px]">{dest.name}</span>
                  <span className="text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">Explore</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Carousel Indicators */}
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
