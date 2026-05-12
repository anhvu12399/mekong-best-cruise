"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, MapPin } from "lucide-react"

const NAV_ITEMS = ["Overview", "The Journey", "Experiences", "Essentials"]

const HIGHLIGHTS = [
  "The homestay has no air conditioning. It has a hammock, a mosquito net, and a view of the river that makes you forget why you'd want air conditioning.",
  "Dinner is cooked by your host. You help. Your knife skills are evaluated silently and found wanting.",
  "Someone plays đờ ca tài tử after dinner. The musician is a retired schoolteacher. He plays every night whether guests are there or not.",
  "At 5:15am on Day 2 you're on a boat at Cái Răng. The coffee is iced, the market is already loud, and nobody is performing for you.",
  "The artisan who makes kẹo dừa has been doing it for forty years. She can tell whether the coconut milk is right by the sound it makes when she stirs."
]

const WHY_ITEMS = [
  { icon: "⏳", title: "Two different days", desc: "Day 1 is quiet. Day 2 is loud. The contrast is the whole point — you need the silence to hear the market properly." },
  { icon: "🏮", title: "An actual night here", desc: "Not a hotel night. A garden-house night. Mosquito net, paper lanterns, the sound of frogs, and a sky full of stars." },
  { icon: "✨", title: "Real food, real people", desc: "Your host cooks what she was going to cook anyway. You sit at her table. The fish was in the river this morning." },
  { icon: "📖", title: "Stories, not scripts", desc: "The fisherman talks about his kids. The candy maker talks about her mother's recipe. Nobody is reading from a card." },
]

const TIMELINE = [
  {
    key: "day1",
    label: "Day 1",
    place: "The Quiet Day",
    tagline: "Everything slows down. Including you.",
    image: "/images/luxury-balcony-sunset.avif",
    part1: {
      title: "Morning — The Drive That Changes Your Mood",
      body: "The highway out of Saigon is ugly for twenty minutes. Then the rice paddies start and the sky opens up and your guide stops talking about logistics and starts pointing at things: a heron standing in shallow water, a woman drying shrimp on a plastic sheet, a bridge that used to be the only way to cross. By the time you reach the delta, the van feels different. Quieter."
    },
    part2: {
      title: "Noon — Lunch You Weren't Expecting",
      body: "A private garden. A wooden table under a trám tree. The dishes arrive in clay pots and enamel bowls: cá lóc nướng tràm wrapped in lotus leaf, canh chua with tamarind and okra, morning glory with garlic. The woman who cooked it stands in the doorway watching you eat. She nods when you go back for seconds. That's her review system."
    },
    part3: {
      title: "Afternoon — The Canal and the Family",
      body: "A sampan takes you into canals that don't have names on Google Maps. You stop at a house where a family makes coconut candy the old way — stirring a massive pot over a wood fire until the sugar hits the right temperature. The grandmother explains the timing by sound: a particular bubbling that means 'now.' You try a piece while it's still warm. It tastes nothing like the packaged version."
    },
    part4: {
      title: "Evening — The Night That Matters",
      body: "The homestay is simple and clean. Teak floor, mosquito net, a porch facing the river. Your host cooks dinner — you help cut the vegetables and she corrects your technique without a word, just by putting her hand over yours and showing you the angle. After dinner, a retired schoolteacher arrives with a đàn kìm and plays đờ ca tài tử for an hour. He does this every evening. You happen to be here tonight."
    }
  },
  {
    key: "day2",
    label: "Day 2",
    place: "The Loud Morning",
    tagline: "5am. The river is already working.",
    image: "/images/floating-markets-new.avif",
    part1: {
      title: "Early Morning — Cái Răng at First Light",
      body: "Your boat leaves the dock at 5:15. The mist is still on the water. By the time you reach the market, the trading has been going for an hour — boats loaded with watermelon, pineapple, and winter melon, the bamboo poles with their samples dangling from the top. A woman hands you a bag of warm bánh mì from her boat. The coffee vendor pulls alongside and pours iced cà phê sữa đá into a plastic cup. You eat breakfast floating."
    },
    part2: {
      title: "Mid-Morning — The Candy Maker",
      body: "Back on land, you visit a workshop where a woman makes kẹo dừa — coconut candy. She's been doing this for forty years. She can tell whether the batch is ready by the sound the spatula makes against the pot. She lets you stir. You get it wrong. She takes over without comment and finishes the batch in ninety seconds. You buy a kilo on the way out."
    },
    part3: {
      title: "Afternoon — The Drive Back",
      body: "One last lunch — bún cá at a roadside place where the broth has been going since 4am. The van takes you back to Saigon. The drive feels shorter this time. You smell like river water and coconut smoke. Your phone has forty-seven photos you actually want to keep. You arrive at your hotel around 4pm with the feeling that you've been somewhere specific, not somewhere generic."
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
            One Night Changes Everything
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            A quiet evening in a garden house. A loud morning at the floating market. That's the whole trip. That's enough.
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
            The Quiet Night. Then the Loud Morning.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-16">
            Day 1 is slow on purpose. You eat lunch in a garden, visit a family who makes coconut candy, sleep in a house by the river, and listen to folk music played by a man who does it every night whether anyone is listening or not. Day 2 starts at 5am at the floating market, where the coffee comes from a boat and breakfast happens on the water. The contrast between the two days is the whole point. You need the quiet to hear the chaos properly.
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
              { title: "The Homestay Night", desc: "Teak floor, mosquito net, paper lanterns, the sound of frogs. Your host cooks. You help. Dinner is the best meal of the trip and nobody planned it that way.", img: "/images/fine-dining-deck.avif" },
              { title: "Breakfast on the Water", desc: "Iced coffee from a floating vendor. Warm bánh mì from a boat. The market around you is already trading. You eat while watching someone's grandmother steer with her feet.", img: "/images/cultural-encounters-new.avif" },
              { title: "The Musician", desc: "A retired schoolteacher with a đàn kìm. He plays đờ ca tài tử every evening. He's not performing for you. You're just invited to listen.", img: "/images/heritage_epic.avif" }
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
            <Link href="/plan-your-journey" className="inline-block bg-navy text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-navy/90 transition-colors">
              Request This Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
