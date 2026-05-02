"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, Calendar, MapPin, Anchor, Clock, Info, CheckCircle2 } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

export interface Day {
  day: string;
  title?: string;
  morning: string;
  afternoon: string;
  experience: string;
}

export interface PracticalInfo {
  season: string;
  departure: string;
  arrival: string;
  private: string;
  customization: string;
}

export interface ItineraryProps {
  heroImage: string;
  title: string;
  duration: string;
  route: string;
  type: string;
  intro: string;
  highlights: string[];
  days: Day[];
  practicalInfo: PracticalInfo;
}

export function ItineraryTemplate(props: ItineraryProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf8]">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-end pb-24">
        <Image
          src={props.heroImage}
          alt={props.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4">
                {props.type}
              </span>
              <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg ${playfair.className}`}>
                {props.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm tracking-widest uppercase font-medium">
                <span className="flex items-center gap-2"><Clock size={16} className="text-gold"/> {props.duration}</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-gold"/> {props.route}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO & HIGHLIGHTS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Short Intro */}
          <div className="lg:col-span-7">
            <span className="text-navy/40 text-xs tracking-[0.3em] uppercase font-bold block mb-6">The Experience</span>
            <p className={`text-2xl md:text-4xl text-navy leading-relaxed ${playfair.className}`}>
              "{props.intro}"
            </p>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-5 bg-white p-10 lg:p-12 shadow-sm border border-navy/5">
            <h3 className="text-navy text-sm tracking-[0.2em] uppercase font-bold mb-8 flex items-center gap-3">
              <Anchor size={18} className="text-gold"/> Journey Highlights
            </h3>
            <ul className="space-y-6">
              {props.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-4 text-navy/80 font-serif leading-relaxed">
                  <span className="text-gold mt-1"><CheckCircle2 size={16}/></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. DAY-BY-DAY */}
      <section className="py-24 bg-white border-t border-navy/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-4">Itinerary</span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Day-by-Day Pacing</h2>
          </div>

          <div className="space-y-16">
            {props.days.map((day, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                {idx !== props.days.length - 1 && (
                  <div className="absolute left-0 md:left-[11px] top-10 bottom-[-4rem] w-px bg-navy/10" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-32 flex-shrink-0 relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-10 md:left-0 top-2 w-6 h-6 rounded-full bg-cream border-2 border-gold flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-navy" />
                    </div>
                    <div className="md:pl-10">
                      <span className="text-gold text-sm tracking-widest uppercase font-bold block">{day.day}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow bg-[#fbfaf8] p-8 md:p-10 border border-navy/5 group hover:border-gold/30 transition-colors">
                    {day.title && (
                      <h4 className={`text-2xl text-navy mb-6 ${playfair.className}`}>{day.title}</h4>
                    )}
                    
                    <div className="space-y-4 font-serif text-navy/70 leading-relaxed">
                      <p><strong className="text-navy font-sans text-xs tracking-widest uppercase">Morning:</strong> {day.morning}</p>
                      <p><strong className="text-navy font-sans text-xs tracking-widest uppercase">Afternoon:</strong> {day.afternoon}</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-navy/10 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold text-lg">✨</span>
                      </div>
                      <p className="text-navy text-sm leading-relaxed italic">
                        <strong className="not-italic font-sans text-xs tracking-widest uppercase block mb-1">Core Experience</strong>
                        {day.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRACTICAL INFO */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-3xl md:text-5xl mb-12 ${playfair.className}`}>Practical Information</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Best Season</span>
                  <p className="text-white/80 font-serif">{props.practicalInfo.season}</p>
                </div>
                <div>
                  <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Private Availability</span>
                  <p className="text-white/80 font-serif">{props.practicalInfo.private}</p>
                </div>
                <div>
                  <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Embarkation</span>
                  <p className="text-white/80 font-serif">{props.practicalInfo.departure}</p>
                </div>
                <div>
                  <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Disembarkation</span>
                  <p className="text-white/80 font-serif">{props.practicalInfo.arrival}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 md:p-14 backdrop-blur-sm border border-white/10">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold block mb-6 flex items-center gap-3">
                <Info size={16}/> Tailor This Journey
              </span>
              <p className="text-white/70 font-serif leading-relaxed mb-10 text-lg">
                {props.practicalInfo.customization}
              </p>
              <button 
                onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                <span>Request Availability</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
