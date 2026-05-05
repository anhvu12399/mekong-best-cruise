"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Clock, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const NAV_ITEMS = ["Overview", "The Day", "Experiences", "Essentials"]

const HIGHLIGHTS = [
  "Skip the crowded routes and discover a hidden riverside village.",
  "Enjoy hot tea and rustic cakes while listening to local stories of the floating season.",
  "Experience an exclusive mini-market set up just for you in a private garden.",
  "Savor an upgraded rustic lunch, featuring clay pot fish and seasonal wild flowers.",
  "Conclude the day with a quiet moment by the river, drinking fresh coconut water at sunset."
]

const WHY_ITEMS = [
  { icon: "🤎", title: "Emotional Connection", desc: "We sell the feeling of slow living, not a rushed checklist of tourist sights." },
  { icon: "📸", title: "Aesthetic Lifestyle", desc: "Perfect for photography, with carefully curated 'Mekong lifestyle' moments." },
  { icon: "🌿", title: "Off the Beaten Path", desc: "We use narrow side-canals and completely avoid the large 45-seat bus routes." },
  { icon: "🍵", title: "Meaningful Interaction", desc: "Sit down with locals, share tea, and make a traditional craft to take home." },
]

const TIMELINE = [
  {
    key: "morning",
    label: "Morning",
    place: "HCMC → Hidden Delta",
    tagline: "Leaving the noise behind.",
    image: "/images/1day_tea.png",
    part1: {
      title: "07:30 — The Story Begins",
      body: "Depart Ho Chi Minh City in a comfortable private vehicle. Along the way, your guide sets the tone: the Mekong is not just a river region, but a region of slow living."
    },
    part2: {
      title: "09:00 — Village Tea Time",
      body: "Stop at a lesser-known riverside village. Sit down for hot tea and rustic cakes, listening to local residents share intimate stories about life during the floating season."
    },
    part3: {
      title: "09:45 — The Quiet Canal",
      body: "Board a small wooden boat into a narrow side canal. We completely avoid the crowded routes, focusing instead on the stillness of the water, the overarching nipa palms, and the serene riverside gardens."
    },
    part4: {
      title: "10:30 — The Private Market",
      body: "Experience a 'mini market' created just for you in a private garden. Taste fresh tropical fruits, raw honey, and traditional hometown treats without the pressure of a commercial setting."
    }
  },
  {
    key: "afternoon",
    label: "Afternoon",
    place: "Mekong Lifestyle",
    tagline: "Slow food and silent sunsets.",
    image: "/images/1day_lunch.png",
    part1: {
      title: "11:30 — An Upgraded Rustic Feast",
      body: "Sit down to a beautifully presented 'mâm quê' (rustic tray). This isn't standard tour food; it's a curated menu featuring caramelized clay pot fish (cá kho tộ), sour soup with river hemp flowers (canh chua bông điên điển), and boiled vegetables with savory dip."
    },
    part2: {
      title: "13:00 — Hands-On Workshop",
      body: "Engage in a short, elegant workshop. Try your hand at making a traditional folk cake or wrapping a beautiful local gift to take home as a memory of the delta."
    },
    part3: {
      title: "14:00 — Village Wandering",
      body: "Cycle or walk slowly along the village paths. Stop at a quiet, sun-dappled garden specifically chosen for its 'Mekong lifestyle' aesthetic—perfect for mindful photography."
    },
    part4: {
      title: "15:00 — Listening to the River",
      body: "Stop at a scenic riverside spot as the afternoon light softens. Drink fresh coconut water and end the tour with one minute of intentional silence—just listening to the river breathe. By 16:30, you return to Ho Chi Minh City feeling completely refreshed."
    }
  }
]

export function OneDayClient() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeSegment, setActiveSegment] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const overviewRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    "Overview": overviewRef,
    "The Day": timelineRef,
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
          src="/images/1day_hero.png" 
          alt="Mindful Mekong" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">1-Day Private Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            The Awakened Mekong
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            A journey of slow living. Less noise, more soul.
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
            Not a Tour. <br /> A Practice of Slow Living.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-16">
            Most single-day tours rush to check off destinations. We do the opposite. This journey is designed to be deeply calming, focusing on the spaces between the sights. From quiet tea times in hidden gardens to drifting silently down untouched canals, this is the Mekong experienced at the pace of a slow exhale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-navy/10 pt-12">
            <div>
              <Clock className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Duration</p>
              <p className="font-serif text-lg">1 Day</p>
            </div>
            <div>
              <Users className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Group Size</p>
              <p className="font-serif text-lg">Max 6–10</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Pace</p>
              <p className="font-serif text-lg">Mindful & Quiet</p>
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

      {/* ── THE DAY ── */}
      <div ref={timelineRef} className="scroll-mt-14" />
      <section className="bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Your Experience</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy">The Rhythm of the Day</h2>
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
                  {[segment.part1, segment.part2, segment.part3, segment.part4].map((part, pi) => (
                    <div key={pi} className={pi > 0 ? 'pt-8 border-t border-[#e8e2d9]' : ''}>
                      <h4 className="font-serif text-xl text-navy mb-3">{part.title}</h4>
                      <p className="text-navy/70 font-serif leading-relaxed text-base">{part.body}</p>
                    </div>
                  ))}
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
              { title: "Local Tea Ritual", desc: "Sit with locals in their garden, sharing tea and stories of the river's changing seasons.", img: "/images/1day_tea.png" },
              { title: "Craft Workshop", desc: "Learn to make a traditional folk cake or beautifully wrap a local gift, carrying a piece of the Mekong home.", img: "/images/1day_boat.png" },
              { title: "Silent Listening", desc: "A guided minute of absolute silence by the riverbank to truly feel the heartbeat of the delta.", img: "/images/1day_lunch.png" }
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
              { label: "Duration", value: "1 Full Day (07:30 - 16:30)" },
              { label: "Group Size", value: "Private Tour (Max 6–10 Guests)" },
              { label: "Transport", value: "Luxury 7-9 Seater Van & Private Wooden Boat" },
              { label: "Inclusions", value: "All meals, activities, and expert bilingual guide" },
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
