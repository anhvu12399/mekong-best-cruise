"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Clock, Users, MapPin } from "lucide-react"

const NAV_ITEMS = ["Overview", "The Journey", "Experiences", "Essentials"]

const HIGHLIGHTS = [
  "Avoid rushed itineraries; experience a journey with a distinct, emotional rhythm.",
  "Enjoy an elegantly plated rustic lunch in a sunlit private garden.",
  "Experience a 'no phones' night at a traditional homestay, dining by golden lantern light.",
  "Listen to an intimate, private performance of Don Ca Tai Tu or share stories by the river.",
  "Wake up early for a misty floating market experience, enjoying breakfast right on the boat."
]

const WHY_ITEMS = [
  { icon: "⏳", title: "Perfect Pacing", desc: "Day 1 is quiet and local; Day 2 builds to the vibrant climax of the floating market." },
  { icon: "🏮", title: "Unplugged Nights", desc: "A curated homestay experience designed for genuine connection over screens." },
  { icon: "✨", title: "Elevated Authenticity", desc: "We take the raw elements of Mekong life and present them with elegance and care." },
  { icon: "📖", title: "Story-Driven", desc: "Every stop, from the artisan workshops to the local homes, is centered around real human stories." },
]

const TIMELINE = [
  {
    key: "day1",
    label: "Day 1",
    place: "The Calm & The Culture",
    tagline: "A day of quiet encounters and local living.",
    image: "/images/luxury-balcony-sunset.avif",
    part1: {
      title: "Morning — Journey into the Delta",
      body: "Depart Ho Chi Minh City in a luxury private vehicle. We leave the urban chaos behind and slowly transition into the lush, green embrace of the Mekong, setting a relaxed pace for the days ahead."
    },
    part2: {
      title: "Noon — Garden Lunch",
      body: "Arrive at a secluded private garden for lunch. Enjoy traditional countryside dishes that have been elevated through beautiful, minimalist presentation, savoring the flavors of the delta in absolute tranquility."
    },
    part3: {
      title: "Afternoon — River Stories",
      body: "Board a small wooden boat and navigate into the deeply shaded side canals. We visit a local family to hear firsthand accounts of making a living on the river, followed by a light, hands-on activity like fruit picking or crafting."
    },
    part4: {
      title: "Evening — The Unplugged Night",
      body: "Settle into a beautifully rustic homestay for our 'Mekong Night Without Phones' concept. Cook dinner alongside your host, dine under the warm glow of yellow lanterns, and end the evening with a private Don Ca Tai Tu music performance or storytelling by a small campfire."
    }
  },
  {
    key: "day2",
    label: "Day 2",
    place: "The Floating Climax",
    tagline: "The vibrant pulse of the river at dawn.",
    image: "/images/floating-markets-new.avif",
    part1: {
      title: "Early Morning — Misty Market & Boat Coffee",
      body: "Wake up before the sun and head out to the floating market while the mist still hangs over the water. We avoid the later tourist crowds, allowing you to enjoy a hot breakfast and traditional iced coffee right on the boat, surrounded by the authentic chaos of river commerce."
    },
    part2: {
      title: "Mid-Morning — Artisan Encounters",
      body: "Leave the market behind and visit a traditional workshop. Whether it's crafting local sweets or weaving, you will engage directly with the artisans, understanding the generational skills that sustain the delta."
    },
    part3: {
      title: "Afternoon — Return to the City",
      body: "After a final, leisurely lunch, begin the unhurried journey back to Ho Chi Minh City. You return not just with photographs, but with the distinct, pulsing rhythm of the Mekong River."
    }
  }
]

export function TwoDaysClient() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeSegment, setActiveSegment] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const overviewRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    "Overview": overviewRef,
    "The Journey": timelineRef,
    "Experiences": experiencesRef,
    "Essentials": essentialsRef,
  }

  const scrollToSection = (label: string) => {
    setActiveTab(label)
    sectionRefs[label]?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/pulse_delta.avif" 
          alt="River Pulse" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">2-Day Private Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            The River Pulse
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            A quiet night, a bustling morning. Experience the true rhythm of the delta.
          </p>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#ede9e2]/95 shadow-lg py-4" : "bg-[#ede9e2]/95 py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                  activeTab === item ? "text-[#8B4A2A] border-b-2 border-[#8B4A2A]" : "text-navy/50 hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex md:hidden gap-6 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-[10px] whitespace-nowrap font-bold tracking-[0.2em] uppercase ${
                  activeTab === item ? "text-[#8B4A2A]" : "text-navy/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="hidden md:block bg-[#c9a962] text-white px-8 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#b59550] transition-colors">
            Enquire Now
          </button>
        </div>
      </nav>

      {/* ── OVERVIEW ── */}
      <div ref={overviewRef} className="scroll-mt-24" />
      <section className="py-24 bg-[#f7f4ef] text-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            Two Days, Two Distinct Beats.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-16">
            This journey refuses to squeeze everything into one day. Instead, it offers a beautifully orchestrated rhythm: the first day is dedicated to stillness, local encounters, and an unplugged evening in the garden. The second day bursts to life early with the vibrant, chaotic beauty of the floating market. It is a journey of contrast and deep emotion.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-navy/10 pt-12">
            <div>
              <Clock className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Duration</p>
              <p className="font-serif text-lg">2 Days / 1 Night</p>
            </div>
            <div>
              <Users className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Group Size</p>
              <p className="font-serif text-lg">Max 6–10</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Pace</p>
              <p className="font-serif text-lg">Rhythmic & Local</p>
            </div>
            <div>
              <ArrowRight className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Start/End</p>
              <p className="font-serif text-lg">HCMC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS & WHY ── */}
      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-8">Highlights</p>
            <ul className="space-y-6">
              {HIGHLIGHTS.map((h, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="text-[#8B4A2A] mt-1 text-sm">✦</span>
                  <span className="text-navy/80 font-serif text-lg leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-8">Why This Journey</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE JOURNEY ── */}
      <div ref={timelineRef} className="scroll-mt-14" />
      <section className="bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Your Experience</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy">The Rhythm of the River</h2>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 pb-24">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {TIMELINE.map((d, i) => (
              <button
                key={d.key}
                onClick={() => setActiveSegment(i)}
                className={`px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${
                  activeSegment === i ? 'bg-[#8B4A2A] text-white' : 'bg-white border border-[#e0d9ce] text-navy/60 hover:border-[#8B4A2A]/40'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white border border-[#e0d9ce] overflow-hidden shadow-sm">
            {TIMELINE.map((segment, i) => (
              <div key={segment.key} className={activeSegment === i ? 'block' : 'hidden'}>
                <div className="relative aspect-[21/9] w-full">
                  <Image src={segment.image} alt={segment.place} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                    <p className="text-white/80 text-sm font-serif italic">{segment.tagline}</p>
                  </div>
                </div>

                <div className="p-6 lg:p-10 space-y-8">
                  {segment.part1 && (
                    <div>
                      <h4 className="font-serif text-xl text-navy mb-3">{segment.part1.title}</h4>
                      <p className="text-navy/70 font-serif leading-relaxed text-base">{segment.part1.body}</p>
                    </div>
                  )}
                  {segment.part2 && (
                    <div className="pt-8 border-t border-[#e8e2d9]">
                      <h4 className="font-serif text-xl text-navy mb-3">{segment.part2.title}</h4>
                      <p className="text-navy/70 font-serif leading-relaxed text-base">{segment.part2.body}</p>
                    </div>
                  )}
                  {segment.part3 && (
                    <div className="pt-8 border-t border-[#e8e2d9]">
                      <h4 className="font-serif text-xl text-navy mb-3">{segment.part3.title}</h4>
                      <p className="text-navy/70 font-serif leading-relaxed text-base">{segment.part3.body}</p>
                    </div>
                  )}
                  {segment.part4 && (
                    <div className="pt-8 border-t border-[#e8e2d9]">
                      <h4 className="font-serif text-xl text-navy mb-3">{segment.part4.title}</h4>
                      <p className="text-navy/70 font-serif leading-relaxed text-base">{segment.part4.body}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <div ref={experiencesRef} className="scroll-mt-14" />
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold mb-4">Hands-On Experiences</p>
            <h2 className="font-serif text-4xl md:text-5xl">Moments of Connection</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Unplugged Night", desc: "Leave your phone behind and cook, dine, and share stories under the glow of golden lanterns.", img: "/images/fine-dining-deck.avif" },
              { title: "Floating Breakfast", desc: "Experience the vibrant floating market at dawn, enjoying hot coffee and breakfast on a local boat.", img: "/images/cultural-encounters-new.avif" },
              { title: "Folk Traditions", desc: "Listen to the soulful melodies of Don Ca Tai Tu or learn generational crafts directly from artisans.", img: "/images/heritage_epic.avif" }
            ].map(exp => (
              <div key={exp.title} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={exp.img} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl text-white mb-3">{exp.title}</h3>
                  <p className="text-white/80 text-sm font-serif leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESSENTIALS ── */}
      <div ref={essentialsRef} className="scroll-mt-14" />
      <section className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-6">Essential Information</p>
          <h2 className="font-serif text-4xl text-navy mb-12">The Details</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 max-w-5xl mx-auto text-left">
            {[
              { label: "Duration", value: "2 Days / 1 Night" },
              { label: "Group Size", value: "Private Tour (Max 6–10 Guests)" },
              { label: "Accommodation", value: "Curated River Homestay (Private Room)" },
              { label: "Inclusions", value: "All meals, transport, guide & activities" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-[10px] tracking-widest uppercase font-bold text-[#8B4A2A] mb-2">{item.label}</p>
                <p className="font-serif text-navy text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <button className="bg-navy text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-navy/90 transition-colors">
              Request This Journey
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
