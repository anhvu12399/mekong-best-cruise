"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
]

const destinations = ["All Destinations", "Vietnam", "Cambodia", "Thailand", "Laos"]
const months = ["Any Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const durations = ["Any Duration", "3-5 Days", "6-8 Days", "9-12 Days", "13+ Days"]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [destination, setDestination] = useState(destinations[0])
  const [month, setMonth] = useState(months[0])
  const [duration, setDuration] = useState(durations[0])

  // Auto-play carousel - cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSearchClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  const handleSelectInteraction = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-navy/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 text-center">
        <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-8">
          Luxury River Journeys
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 text-balance">
          Discover the Soul of
          <br />
          <span className="italic">Southeast Asia</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          Embark on an extraordinary voyage through ancient temples, floating markets, 
          and untouched landscapes aboard our exclusive river cruises.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-2 flex flex-col lg:flex-row gap-2">
            {/* Destination */}
            <div className="flex-1 relative">
              <label className="sr-only">Destination</label>
              <select
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value)
                  handleSelectInteraction()
                }}
                onClick={handleSelectInteraction}
                className="w-full h-14 px-4 bg-transparent text-navy appearance-none cursor-pointer focus:outline-none border-r border-border"
              >
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={18} />
            </div>

            {/* Month */}
            <div className="flex-1 relative">
              <label className="sr-only">Month</label>
              <select
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value)
                  handleSelectInteraction()
                }}
                onClick={handleSelectInteraction}
                className="w-full h-14 px-4 bg-transparent text-navy appearance-none cursor-pointer focus:outline-none border-r border-border"
              >
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={18} />
            </div>

            {/* Duration */}
            <div className="flex-1 relative">
              <label className="sr-only">Duration</label>
              <select
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value)
                  handleSelectInteraction()
                }}
                onClick={handleSelectInteraction}
                className="w-full h-14 px-4 bg-transparent text-navy appearance-none cursor-pointer focus:outline-none lg:border-r border-border"
              >
                {durations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={18} />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearchClick}
              className="h-14 px-8 bg-navy text-white flex items-center justify-center gap-2 hover:bg-navy-light transition-colors duration-200"
            >
              <Search size={18} />
              <span className="font-medium">Search</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "w-8 bg-gold" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  )
}
