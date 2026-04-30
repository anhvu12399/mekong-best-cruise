"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

export function AboutMekong() {
  const handleButtonClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about-mekong-bg.jpg"
        alt="Mekong River landscape"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
        {/* Subtitle */}
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6">
          Southeast Asia&apos;s Finest River Journey
        </span>

        {/* Main Title */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.15em] uppercase mb-8">
          Mekong River Cruise
        </h2>

        {/* Gold decorative line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />

        {/* Descriptive Text — short & punchy */}
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Where ancient waterways meet modern luxury. Sail through the heart of Southeast Asia in timeless elegance.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 px-8 py-3 border border-gold/80 text-gold text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            <span>Discover More</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
