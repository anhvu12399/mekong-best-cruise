"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, MapPin } from "lucide-react"
import { destinationsData } from "@/lib/destinations-data"

const playfair = Playfair_Display({ subsets: ["latin"] })

export interface JourneyRef {
  title: string;
  duration: string;
  href: string;
}

export interface DestinationProps {
  slug: string;
  heroImage: string;
  name: string;
  tagline: string;
  narrative: string;
  defines: string[];
  editorialImages: string[];
  journeys: JourneyRef[];
}

export function DestinationTemplate(props: DestinationProps) {
  const currentIndex = destinationsData.findIndex(d => d.slug === props.slug)
  const otherDestinations = [
    ...destinationsData.slice(currentIndex + 1),
    ...destinationsData.slice(0, currentIndex)
  ].slice(0, 3)

  return (
    <main className="min-h-screen bg-[#fbfaf8]">
      {/* 1. HERO IMAGE LỚN */}
      <section className="relative h-[80vh] flex flex-col justify-end pb-24 overflow-hidden">
        <Image
          src={props.heroImage}
          alt={props.name}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            Destination
          </span>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none drop-shadow-lg ${playfair.className}`}>
            {props.name}
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-serif max-w-2xl drop-shadow-md">
            — {props.tagline}
          </p>
        </div>
      </section>

      {/* 2. NARRATIVE & DEFINING ELEMENTS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Short Narrative */}
            <div>
              <span className="text-navy/40 text-xs tracking-[0.3em] uppercase font-bold block mb-6">The Essence</span>
              <p className={`text-2xl md:text-4xl text-navy leading-relaxed mb-8 ${playfair.className}`}>
                "{props.narrative}"
              </p>
              <div className="w-12 h-px bg-gold" />
            </div>

            {/* What defines this place */}
            <div className="bg-white p-10 lg:p-14 border border-navy/5 shadow-sm">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-8">
                What Defines {props.name}
              </span>
              <ul className="space-y-6">
                {props.defines.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-navy/80 font-serif text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EDITORIAL IMAGE SECTION */}
      <section className="py-12 pb-24 lg:pb-32 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`grid gap-8 ${props.editorialImages.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
            {props.editorialImages.map((img, idx) => (
              <div key={idx} className={`relative overflow-hidden group ${props.editorialImages.length === 1 ? 'aspect-[21/9]' : 'aspect-[4/5] md:aspect-square'}`}>
                <Image
                  src={img}
                  alt={`${props.name} Lifestyle ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOURNEYS & CTA */}
      <section className="bg-navy py-24 text-white relative overflow-hidden">
        {/* Subtle background map pattern could go here */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4 flex items-center justify-center gap-2">
              <MapPin size={14}/> Routes
            </span>
            <h2 className={`text-3xl md:text-5xl ${playfair.className}`}>Journeys featuring {props.name}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-center">
            {props.journeys.map((journey, idx) => (
              <a 
                key={idx}
                href={journey.href}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <h4 className={`text-2xl text-white mb-2 ${playfair.className}`}>{journey.title}</h4>
                <p className="text-gold/80 text-xs tracking-[0.2em] uppercase font-bold mb-8">{journey.duration}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium tracking-widest uppercase group-hover:text-gold transition-colors">
                  <span>Explore Route</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <p className="text-white/60 font-serif mb-8 max-w-lg mx-auto">
              Our travel artisans can tailor any itinerary to spend more time discovering the secrets of {props.name}.
            </p>
            <button 
              onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              <span>Design Your bespoke journey</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER DESTINATIONS */}
      <section className="bg-cream py-24 border-t border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy/40 text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              Continue Exploring
            </span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Other Destinations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherDestinations.map((dest, idx) => (
              <a 
                key={idx}
                href={`/destinations/${dest.slug}`}
                className="group block relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={dest.heroImage}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className={`text-2xl text-white mb-2 ${playfair.className}`}>{dest.name}</h4>
                  <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-[0.2em] uppercase">
                    <span>Explore</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
