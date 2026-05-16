"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const heroSlides = [
  {
    image: "/images/enhanced_hero_1_sharp_optimized.avif",
    title: "The Golden Hour on the Mekong",
    heading: (
      <>
        <span className="uppercase tracking-widest text-[0.85em]">ARTISANS of</span>
        <br />
        <span className="uppercase tracking-widest">ADVENTURE TRAVEL</span>
        <span className="text-lg lg:text-xl font-sans align-top ml-1 tracking-normal">™</span>
      </>
    ),
    subheading: "Some journeys are taken. This one stays with you.",
    details: "3–8 NIGHT VOYAGES · MAXIMUM 28 GUESTS · CRAFTED FOR THE FEW",
    link: "/cruises",
  },
  {
    image: "/images/mekong_navigator.avif",
    title: "The Timeless Elegance of the Mekong Navigator",
    heading: (
      <>
        <span className="uppercase tracking-widest text-[0.85em]">THE GRACE of</span>
        <br />
        <span className="uppercase tracking-widest">MEKONG NAVIGATOR</span>
      </>
    ),
    subheading: "French-colonial design meets the untamed beauty of the river.",
    details: "7–8 DAYS · VIETNAM & CAMBODIA · LUXURY RIVER VOYAGE",
    link: "/itineraries/vietnam-cambodia",
  },
  {
    image: "/images/enhanced_hero_3_sharp_optimized.avif",
    title: "Serene Canals & Private Sampan Journeys",
    heading: (
      <>
        <span className="uppercase tracking-widest text-[0.85em]">SERENE &</span>
        <br />
        <span className="uppercase tracking-widest">PRIVATE JOURNEYS</span>
      </>
    ),
    subheading: "Where stillness becomes the rarest luxury of all.",
    details: "PRIVATE WATERWAYS · NO TWO DAYS THE SAME · YOURS ALONE",
    link: "/discover",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 14 seconds per slide, resets when currentImageIndex changes manually
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length)
    }, 14000)
    return () => clearInterval(interval)
  }, [currentImageIndex])

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  const nextSlideInfo = heroSlides[(currentImageIndex + 1) % heroSlides.length]

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-black group">
      {/* Background Cinematic Sequence & Content */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentImageIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div 
              className={`relative w-full h-full transform transition-transform ease-linear ${
                isActive ? "scale-110 duration-[18000ms]" : "scale-100 duration-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Mekong River Cinematic Scene ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            {/* Gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            {/* Slide-Specific Center Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center">
              <Link 
                href={slide.link} 
                className="w-full mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-start text-left cursor-pointer group"
              >
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-4 drop-shadow-lg tracking-wide group-hover:text-gold transition-colors duration-500">
                  {slide.heading}
                </h1>
                
                <p className="text-base md:text-lg text-white/90 font-serif mb-6 drop-shadow-md tracking-wide">
                  {slide.subheading}
                </p>
                
                <p className="text-xs md:text-sm text-gold font-medium tracking-widest uppercase drop-shadow-md">
                  {slide.details}
                </p>
                
                <div className="mt-8 inline-flex items-center gap-2 text-white/80 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-300">
                   <span>Explore</span>
                   <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        )
      })}

      {/* Next Up Slider Indicator at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-end justify-between pb-6">
          {/* Next Up Text */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">Next Up</span>
            <span className="text-sm md:text-base font-serif text-white tracking-wide">{nextSlideInfo.title}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 hover:border-white/50 transition-all"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 hover:border-white/50 transition-all"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full h-[2px] bg-white/10">
          <div 
            key={currentImageIndex} // Important: Resets animation when slide changes
            className="h-full bg-white/70 animate-[progress_14s_linear_forwards]"
          />
        </div>
      </div>
    </section>
  )
}
