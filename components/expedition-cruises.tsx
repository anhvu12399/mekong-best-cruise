"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const REDIRECT_URL = "https://www.toursmekong.com/"

const ships = [
  {
    name: "Aqua Mekong",
    subtitle: "The Pinnacle of Modern Elegance",
    description: "Setting the gold standard for contemporary luxury, the Aqua Mekong features architectural brilliance, Michelin-inspired dining, and panoramic floor-to-ceiling windows that seamlessly blend your opulent suite with the untamed beauty of the river.",
    image: "/images/aqua_mekong.png"
  },
  {
    name: "Mekong Jewel",
    subtitle: "The Crown Jewel of the Delta",
    description: "A masterpiece of sustainable opulence. The Mekong Jewel redefines boutique cruising with its sophisticated eco-friendly design, lavish private balconies, and an atmosphere of exclusive intimacy as you sail through the heart of Southeast Asia.",
    image: "/images/mekong_jewel.png"
  },
  {
    name: "Jayavarman",
    subtitle: "A Journey Through Time",
    description: "Inspired by the golden age of French colonial grace and traditional Khmer artistry, the Jayavarman is a floating boutique gallery. Step aboard and surrender to a deeply romantic, nostalgic voyage across the majestic waterways.",
    image: "/images/jayavarman.png"
  },
  {
    name: "Victoria Mekong",
    subtitle: "Vibrant Cultural Immersion",
    description: "With its sleek design and vibrant cultural ethos, the Victoria Mekong is your passport to the delta's soul. Experience unparalleled comfort on the sun deck while soaking in the mesmerizing daily rhythms of vibrant river life.",
    image: "/images/victoria_mekong.png"
  },
  {
    name: "Mekong Navigator",
    subtitle: "Grandeur on the River",
    description: "Evoking the sophisticated grandeur of the French Indochina era, the Mekong Navigator offers all-suite accommodations and unmatched personalized service. Retreat to your sumptuous sanctuary after days filled with profound cultural encounters.",
    image: "/images/mekong_navigator.png"
  }
]

export function ExpeditionCruises() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ships.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ships.length) % ships.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px bg-[#2B3A36]/30 w-16 md:w-40"></div>
            <h2 className={`text-4xl md:text-5xl text-[#2B3A36] ${playfair.className}`}>
              Expedition Cruises
            </h2>
            <div className="h-px bg-[#2B3A36]/30 w-16 md:w-40"></div>
          </div>
          <p className="text-[#555] max-w-4xl mx-auto leading-relaxed text-base md:text-lg font-serif">
            Embark on an epic voyage of unparalleled luxury along the world's most evocative waterways. Our curated collection of world-class riverboats transforms the legendary Mekong into an immersive sanctuary of refined elegance, breathtaking discovery, and legendary service.
          </p>
        </div>

        {/* Custom Slider Layout */}
        <div className="relative mt-12 max-w-7xl mx-auto">
          {/* Navigation Arrows (Absolute positioned on desktop, relative on mobile) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 z-20 hidden md:block">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all bg-white shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 z-20 hidden md:block">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all bg-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="relative h-[750px] md:h-[700px] lg:h-[550px] flex items-center">
            {ships.map((ship, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col lg:flex-row items-center lg:items-center ${
                  index === currentSlide 
                    ? "opacity-100 translate-x-0 z-10 visible" 
                    : "opacity-0 translate-x-10 -z-10 invisible"
                }`}
              >
                {/* Background Image Container (Right aligned on desktop) */}
                <div className="absolute right-0 top-0 w-full lg:w-3/4 h-[350px] lg:h-full overflow-hidden">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/10 lg:bg-transparent" />
                </div>

                {/* Overlapping Text Card (Left aligned) */}
                <div className="relative z-10 w-[90%] md:w-[80%] lg:w-[45%] mt-[280px] lg:mt-0 mx-auto lg:mx-0 lg:ml-8 bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-gold">
                  <span className="block text-gold text-xs tracking-[0.2em] uppercase font-bold mb-4">
                    {ship.name}
                  </span>
                  <h3 className={`text-3xl md:text-4xl text-navy mb-6 leading-tight ${playfair.className}`}>
                    {ship.subtitle}
                  </h3>
                  <p className="text-[#555] font-serif leading-relaxed mb-8 text-base md:text-lg">
                    {ship.description}
                  </p>
                  
                  <button 
                    onClick={() => window.open(REDIRECT_URL, "_blank")}
                    className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-navy hover:text-gold transition-colors"
                  >
                    <span>Request Availability</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {ships.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-6 bg-gold" : "w-1.5 bg-navy/20"}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Desktop Pagination indicators */}
          <div className="hidden md:flex justify-center mt-10 gap-3">
            {ships.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  idx === currentSlide ? "w-12 bg-navy" : "w-3 bg-navy/20 hover:bg-navy/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
