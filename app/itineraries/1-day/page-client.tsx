"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const NAV_ITEMS = ["Overview", "The Day", "Experiences", "Essentials"]

const HIGHLIGHTS = [
  "A woman named Bảy serves you tea in her garden. She's seventy-three. She planted every tree you're sitting under.",
  "The canal boat fits four people. The boatman poles standing up. The water is so still you can see the clouds in it.",
  "Lunch is cá kho tộ in a clay pot that's been used daily for eleven years. The cook's daughter sets the table.",
  "You pick longan directly from a branch. The farmer counts how many you eat and pretends to charge you extra.",
  "The last hour is just sitting by the river. No agenda. The coconut water is cold. The light is gold. Nobody talks."
]

const WHY_ITEMS = [
  { icon: "🤎", title: "Nobody's in a rush", desc: "We built empty time into the schedule on purpose. Sit. Look. Do nothing for a while. That's the point." },
  { icon: "📸", title: "The light is real", desc: "No staged moments. But at 3pm the canals look like a painting, and we know exactly where to be." },
  { icon: "🌿", title: "No tour buses", desc: "A sampan that fits four people. Side canals that don't appear on any tour operator's route sheet." },
  { icon: "🍵", title: "You'll meet actual people", desc: "Not performers. A tea farmer. A fisherman's wife. A kid who wants to practice his English on you." },
]

const TIMELINE = [
  {
    key: "morning",
    label: "Morning",
    place: "HCMC → The Quiet Part of the Delta",
    tagline: "The city thins out. The green starts.",
    image: "/images/1day_tea.avif",
    part1: {
      title: "07:30 — Leaving Saigon",
      body: "The van pulls out of your hotel and into morning traffic. Forty minutes later, the buildings give way to rice fields and the air changes — you can actually smell the water. Your guide grew up out here. He points to things you'd miss: a particular shade of green that means the harvest is close, a shrine by the road that's been there since his grandmother was a girl."
    },
    part2: {
      title: "09:00 — Tea at Bảy's Garden",
      body: "Bảy is seventy-three. She makes tea from a plant in her yard and serves it with bánh tét she wrapped that morning. She tells you about the year the water rose so high she had to move her chickens upstairs. Her granddaughter translates the parts your guide can't keep up with. There is no rush to leave."
    },
    part3: {
      title: "09:45 — Into the Canals",
      body: "A wooden sampan, narrow enough that you could touch both banks if you stretched. The boatman doesn't use an engine — just a bamboo pole, pushing off the muddy bottom. Nipa palms close overhead. A kingfisher sits on a branch three meters away and doesn't move. You realize you haven't heard a car in twenty minutes."
    },
    part4: {
      title: "10:30 — The Orchard",
      body: "The farmer hands you a knife and points at a jackfruit. He shows you where to cut. The longan is warm from the sun. He picks a rambutan, peels it with one hand, and gives you the fruit. His dog follows you between the rows. You buy a bag of dried mango from his wife on the way out — she wraps it in newspaper."
    }
  },
  {
    key: "afternoon",
    label: "Afternoon",
    place: "Deep in the Countryside",
    tagline: "The part you'll remember longest.",
    image: "/images/1day_lunch.avif",
    part1: {
      title: "11:30 — Lunch in a Garden",
      body: "A wooden table under a mango tree. Cá kho tộ — catfish caramelized in a clay pot with black pepper and fish sauce. Canh chua with bông điên điển, the yellow river flowers that only grow in flood season. White rice. Rau sống. The woman who cooked it sits at the next table with her husband, eating the same thing. This is not a restaurant."
    },
    part2: {
      title: "13:00 — Making Something",
      body: "You wrap bánh ít — sticky rice cakes in banana leaves. The woman teaching you has done this ten thousand times. Yours look terrible. Hers are perfect, identical, fast. She laughs, fixes yours without asking, and they all go into the same steamer. You take three home in a plastic bag."
    },
    part3: {
      title: "14:00 — Walking the Village",
      body: "A dirt path between two canals. Jackfruit trees, chicken wire fences, a man repairing a fishing net in his front yard. A temple with a single monk sweeping the courtyard. You can hear the river but you can't see it yet. The light at this hour comes through the leaves at an angle that makes everything look like it was painted."
    },
    part4: {
      title: "15:00 — The Last Hour",
      body: "You sit on a wooden bench at the river's edge. Someone hands you a coconut with a straw in it. The water moves slowly. A boat passes. The driver waves. Nobody says anything for a while, and that's fine — that's the whole idea. By 16:30 you're back in the van, and by 18:00 you're in Saigon. It feels like you were gone for a week."
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


  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      const scrollPos = window.scrollY + window.innerHeight / 2
      if (essentialsRef.current && scrollPos >= essentialsRef.current.offsetTop) {
        setActiveTab("Essentials")
      } else if (experiencesRef.current && scrollPos >= experiencesRef.current.offsetTop) {
        setActiveTab("Experiences")
      } else if (timelineRef.current && scrollPos >= timelineRef.current.offsetTop) {
        setActiveTab("The Day")
      } else if (overviewRef.current && scrollPos >= overviewRef.current.offsetTop) {
        setActiveTab("Overview")
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (label: string) => {
    setActiveTab(label)
    sectionRefs[label]?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/1day_hero.avif" 
          alt="Mindful Mekong" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">1-Day Private Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            One Day. No Agenda.
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            A garden, a canal, a lunch you didn't plan, and an afternoon you'll think about for years.
          </p>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className={`sticky top-16 lg:top-20 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#ede9e2]/95 shadow-lg py-4" : "bg-[#ede9e2]/95 py-6"}`}>
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
            What Happens When You<br /> Stop Trying to See Everything
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-16">
            Most one-day trips try to cram in five stops, a lunch, and a selfie at a floating market. This one has four stops, long pauses between them, and at least an hour where the plan is literally "sit somewhere and do nothing." The point is not what you see. The point is what you notice when you stop moving.
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
              { title: "Tea at Somebody's House", desc: "Not a teahouse. An actual house. She grew the tea plant herself. The conversation happens through your guide, but the laughter doesn't need translation.", img: "/images/1day_tea.avif" },
              { title: "Making Bánh Ít", desc: "Sticky rice, banana leaf, a filling you've never tasted. The woman teaching you does five in the time you do one. Yours falls apart. Hers don't. You take them home anyway.", img: "/images/1day_boat.avif" },
              { title: "The Quiet Part", desc: "A bench. A river. A coconut with a straw. Ten minutes where nobody talks and the only sound is water. You'll remember this longer than anything else.", img: "/images/1day_lunch.avif" }
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
            <Link href="/plan-your-journey" className="inline-block bg-navy text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-navy/90 transition-colors">
              Request This Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
