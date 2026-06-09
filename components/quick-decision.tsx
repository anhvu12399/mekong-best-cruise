"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

const decisions = [
  {
    title: "5-Day Boutique Expedition",
    cta: "View itinerary",
    href: "/itineraries/small-ship"
  },
  {
    title: "7–8 Day Vietnam – Cambodia",
    cta: "View itinerary",
    href: "/itineraries/vietnam-cambodia"
  },
  {
    title: "10-Day The Full Mekong Story",
    cta: "View itinerary",
    href: "/itineraries/full-mekong-story"
  },
  {
    title: "15-Day Rivers of Indochina",
    cta: "View itinerary",
    href: "/itineraries/rivers-of-indochina"
  }
]

export function QuickDecision() {
  const handleOpenItineraries = () => {
    window.dispatchEvent(new CustomEvent("open-itineraries-menu"))
  }

  return (
    <section className="bg-navy border-b border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {decisions.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="py-10 lg:px-8 flex flex-col items-start group cursor-pointer hover:bg-white/5 transition-colors duration-300"
            >
              <h2 className="font-serif text-lg md:text-xl text-white tracking-wide mb-6">{item.title}</h2>
              <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-gold flex items-center gap-3 group-hover:text-gold transition-colors mt-auto">
                <span>{item.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* All Itineraries Button */}
        <div className="flex justify-center pb-8 pt-2 border-t border-white/5">
          <button
            onClick={handleOpenItineraries}
            className="inline-flex items-center gap-2 border border-gold/45 text-gold hover:border-gold hover:bg-gold hover:text-navy text-[10px] font-bold tracking-[0.25em] uppercase px-8 py-3.5 transition-all duration-300 rounded-sm"
          >
            <span>All Itineraries</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
