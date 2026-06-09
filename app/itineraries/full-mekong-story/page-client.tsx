"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, MapPin, Info, CheckCircle2, Shield, Anchor } from "lucide-react"
import { FullMekongMap } from "@/components/full-mekong-map"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const NAV_ITEMS = ["Overview", "Itinerary", "Highlights", "Essentials"]

const AT_GLANCE = [
  { label: "Duration", value: "10 Days / 9 Nights" },
  { label: "Countries", value: "Vietnam + Laos" },
  { label: "Route", value: "Ho Chi Minh City → Mekong Delta → Luang Prabang → Golden Triangle" },
  { label: "Style", value: "Private, fully guided, customizable" },
  { label: "Pace", value: "Relaxed — two meaningful experiences per day, no rushed transfers" },
  { label: "Best For", value: "Couples, cultural travelers, American guests aged 40–65, repeat Asia visitors" },
  { label: "Physical Level", value: "Easy to moderate — walking, boat travel, cycling optional" },
  { label: "Best Season", value: "October to April" }
]

const HIGHLIGHTS = [
  "Cruise the back canals of Ben Tre at dawn — palm-lined waterways that most Mekong tours never reach.",
  "Wake up before sunrise at Can Tho's Cai Rang floating market, watching vendor boats trade fruit and breakfast from the water.",
  "Spend a night at a riverside homestay in the Mekong Delta — a proper family home surrounded by fruit trees, not a hotel marketed as one.",
  "Fly north and land in Luang Prabang, where saffron-robed monks file through the streets each morning at dawn and the city's colonial-era calm feels effortless.",
  "Visit Ban Xang Khong, a craft village where weavers and paper-makers still work by hand along the Nam Khan River.",
  "Board a private boat on the upper Mekong and spend a full day moving upstream — past limestone ridges, river villages, and the sacred Pak Ou Caves.",
  "Arrive at the Golden Triangle and understand it as a living border landscape shaped by three countries, one river, and centuries of trade."
]

const DAYS = [
  {
    key: "day-0",
    label: "Day 1",
    place: "Arrival in Ho Chi Minh City",
    tagline: "Saigon city introduction",
    image: "/images/dest_vietnam.avif",
    info: "Overnight: Ho Chi Minh City · No meals",
    morning: {
      body: "Your guide meets you at Tan Son Nhat International Airport and transfers you to your hotel in the heart of the city. The afternoon is yours — no scheduled activities, no orientation tours. Saigon rewards the unscripted hour: find a street-side coffee, walk the French Quarter around Dong Khoi, or sit for a while at the edge of the park near the old post office and watch the city move around you."
    },
    afternoon: {
      body: "In the evening, your guide joins you for a brief welcome conversation over dinner to walk through the journey ahead, answer any questions, and make any last adjustments to the program based on your preferences and pace."
    },
    experience: {
      title: "Welcome dinner",
      body: "Meals: Dinner (welcome dinner, included) | Style: Arrival, no pressure, city introduction."
    }
  },
  {
    key: "day-1",
    label: "Day 2",
    place: "The Delta Begins: Ben Tre Backwaters",
    tagline: "Back-canal boat & village walk",
    image: "/images/pulse_delta.avif",
    info: "Overnight: Mekong Delta homestay or riverside lodge · Breakfast, Lunch",
    morning: {
      body: "Depart Ho Chi Minh City by private vehicle after breakfast and head south toward Ben Tre — a quieter corner of the Mekong Delta known for its coconut groves, narrow canals, and unhurried pace. This is not the My Tho four-islands route. It is the version of the delta that most day-trippers never reach. Arrive in Ben Tre and board a small private boat for a back-canal cruise through palm-lined waterways — passing coconut barges, wooden fishing boats, and riverside homes built on stilts over the water."
    },
    afternoon: {
      body: "After the boat, walk into a riverside village. Stop at a family-run coconut workshop — not the shopping-focused version on the main tourist circuit, but a working household where your guide explains the process and the economics without a sales pitch attached. Lunch is served at a garden home nearby: fresh fish, seasonal vegetables, and simple rice dishes cooked that morning. In the afternoon, continue by bicycle or local transport along quiet country paths toward your accommodation."
    },
    experience: {
      title: "Homestay Arrival",
      body: "Meals: Breakfast, Lunch | Style: Back-canal boat, village walk, garden lunch, cycling, homestay arrival."
    }
  },
  {
    key: "day-2",
    label: "Day 3",
    place: "Floating Market & Slow Mekong Life",
    tagline: "Sunrise floating market & noodle workshop",
    image: "/images/floating_market_dawn.png",
    info: "Overnight: Can Tho · Breakfast, Lunch, Dinner",
    morning: {
      body: "Wake at 5:00am. This is not negotiable — the floating market is at its best before 7:00am and gone by 9:00. Board a small private boat in the pre-dawn darkness and head toward Cai Rang, the largest floating market in the Mekong Delta, where boats piled with dragon fruit, watermelon, pineapple, and vegetables have been trading since before most cities woke up. The market is a working commercial hub, not a tourist attraction. Vendor boats sell hot noodle soup and coffee directly from the water — your guide will flag one down and order breakfast. Eat on the boat."
    },
    afternoon: {
      body: "After the market, cruise back through smaller canals and stop at a traditional rice noodle workshop, where a family produces noodles by hand using a process that has barely changed in three generations. Transfer to Can Tho in the late morning and check in to your hotel. The afternoon is free — the old market area, the riverside promenade, and the French-era municipal theatre are all within walking distance. Dinner in the evening at a riverside restaurant chosen by your guide."
    },
    experience: {
      title: "River Cruising Can Tho",
      body: "Meals: Breakfast (on the river), Lunch, Dinner | Style: Sunrise floating market, noodle workshop, river cruising, free afternoon in Can Tho."
    }
  },
  {
    key: "day-3",
    label: "Day 4",
    place: "Last Delta Morning · Fly to Luang Prabang",
    tagline: "Delta farewell & Flight north",
    image: "/images/vc_hero.avif",
    info: "Overnight: Luang Prabang · Breakfast",
    morning: {
      body: "A final morning in the delta before the journey changes completely. Take a slow walk through Can Tho's riverside market, or sit at a local café and watch the city begin its day. Late morning, transfer to Can Tho airport for the connecting flight to Luang Prabang via Ho Chi Minh City or Bangkok, depending on your routing."
    },
    afternoon: {
      body: "Arrive in Luang Prabang in the afternoon and transfer to your hotel in the old town. The contrast is immediate and remarkable: you left a busy river delta city this morning and have arrived at a quiet UNESCO-listed peninsula where the pace is completely different. Let that contrast work for you. Walk down to the Mekong riverfront before dusk — the same river, but here it is narrower, darker, and flanked by hills instead of paddies."
    },
    experience: {
      title: "Luang Prabang Arrival",
      body: "Meals: Breakfast | Flight: Can Tho → Ho Chi Minh City → Luang Prabang (included in package) | Style: Delta farewell, flight north, Luang Prabang arrival."
    }
  },
  {
    key: "day-4",
    label: "Day 5",
    place: "The Hidden City",
    tagline: "Alms ceremony & craft villages",
    image: "/images/luang_prabang_alms.png",
    info: "Overnight: Luang Prabang · Breakfast",
    morning: {
      body: "An early start gives you Luang Prabang at its best. At 5:30am, your guide positions you quietly along the main road of the old town for the alms ceremony — monks in saffron walking barefoot while local families kneel and offer sticky rice. You observe from a respectful distance, without flash photography. After the ceremony, continue to the morning market on Kitsalat Road — local wet market where families buy fresh produce. Walk through at your own pace, then find breakfast at a small local spot nearby. The morning continues with the old town's two most important temples: Wat Xieng Thong and the former Royal Palace."
    },
    afternoon: {
      body: "In the afternoon, move away from the main tourist circuit toward the craft villages east of town. At Ban Xang Khong, families still make sa paper from mulberry bark in open-air workshops along the Nam Khan River. A few doors further, weavers produce silk and cotton textiles at floor looms using patterns handed down across generations. Sunset from Mount Phousi to close the day — the city spread below, both rivers visible."
    },
    experience: {
      title: "Phousi Sunset",
      body: "Meals: Breakfast | Style: Alms ceremony, morning market, temples, craft villages, Phousi sunset."
    }
  },
  {
    key: "day-5",
    label: "Day 6",
    place: "Kuang Si & The Living Land",
    tagline: "Waterfall swim & Rice farm",
    image: "/images/about_responsible.avif",
    info: "Overnight: Luang Prabang · Breakfast, Lunch",
    morning: {
      body: "A day for the countryside around Luang Prabang, moving at a pace that matches the surroundings. After breakfast, drive south to Kuang Si Waterfall — a series of turquoise terraced pools fed by a multi-tiered cascade in a forested valley. Arrive early, before the tour groups, and you'll have the upper pools largely to yourself. Swim if you like."
    },
    afternoon: {
      body: "On the way back to town, stop at the Living Land Farm — a family-run rice farm that offers an honest and engaging walk through the full rice production cycle, from planting to harvest to milling and cooking. It is one of the better educational experiences in the area. Lunch at a garden restaurant near the farm before returning to Luang Prabang. The afternoon is free to explore the night market."
    },
    experience: {
      title: "Living Land Rice Farm",
      body: "Meals: Breakfast, Lunch | Style: Kuang Si waterfall swim, rice farm, free afternoon and evening."
    }
  },
  {
    key: "day-6",
    label: "Day 7",
    place: "The River Begins: Mekong Upstream to Pak Ou",
    tagline: "Pak Ou Caves & Pakbeng Sunset",
    image: "/images/upper_mekong_boat.png",
    info: "Overnight: Pakbeng · Breakfast, Lunch, Dinner",
    morning: {
      body: "The journey's third chapter begins this morning. After an early breakfast, board a private boat at the Luang Prabang pier and head upstream on the Mekong. The city fades quickly and the river takes over. Mid-morning, the boat pulls into a small landing at the foot of a cliff where two openings mark the entrance to the Pak Ou Caves. Inside, thousands of Buddha images fill every ledge and hollow, accumulated across five centuries of offering."
    },
    afternoon: {
      body: "Lunch is served on the boat as it continues upstream. Pass Ban Xang Hai, a riverside village known for its rice whisky. The afternoon is long, open, and deliberately unscheduled. Bring a book. Watch the riverbank. By late afternoon, arrive in Pakbeng — a small town on a hillside above the river. Check in to your riverside lodge and watch the sunset: orange over the water, hills dark on both sides, absolute silence."
    },
    experience: {
      title: "Pakbeng Sunset",
      body: "Meals: Breakfast, Lunch, Dinner | Style: Full river day, Pak Ou Caves, Pakbeng arrival and sunset."
    }
  },
  {
    key: "day-7",
    label: "Day 8",
    place: "River Villages & The Borderland Stretch",
    tagline: "Houay Xai Border-town Arrival",
    image: "/images/luxury_dining.avif",
    info: "Overnight: Houay Xai · Breakfast, Lunch",
    morning: {
      body: "The final river day. After breakfast on the lodge terrace, the boat continues north and the landscape becomes progressively more remote — fewer settlements, denser forest, the occasional hillside clearing where a minority village sits above the water. This is the part of the journey that feels genuinely far from the tourist circuit."
    },
    afternoon: {
      body: "Your guide arranges one or two unhurried stops along the way — a small riverside village, a local morning market if timing allows, or a viewpoint above the river. By early afternoon, the boat approaches Houay Xai — a small Lao town directly across the Mekong from the Thai town of Chiang Khong. Check in to your hotel and take a walk along the waterfront before dinner."
    },
    experience: {
      title: "Borderlands Arrival",
      body: "Meals: Breakfast, Lunch | Style: Remote river, village stops, Houay Xai border-town arrival."
    }
  },
  {
    key: "day-8",
    label: "Day 9",
    place: "The Golden Triangle",
    tagline: "Frontier meeting point & Hall of Opium",
    image: "/images/golden_triangle_view.png",
    info: "Overnight: Golden Triangle area or Chiang Rai · Breakfast, Lunch, Dinner",
    morning: {
      body: "The final chapter of the journey. Cross the Mekong by ferry from Houay Xai to Chiang Khong, then transfer toward the Golden Triangle — the point where the Mekong bends and the borders of Laos, Thailand, and Myanmar converge. Your guide leads a conversation at the Mekong confluence about the region's geography and history: trade routes, the opium economy, and the meeting borders."
    },
    afternoon: {
      body: "If your group is interested, a visit to the excellent Hall of Opium museum at Anantara Golden Triangle fills the mid-morning. Lunch at a restaurant overlooking the confluence. Transfer to Chiang Rai for your final night. Dinner at a restaurant in the city — a proper end-of-journey meal with your guide."
    },
    experience: {
      title: "Golden Triangle Finale",
      body: "Meals: Breakfast, Lunch, Farewell Dinner | Style: Border crossing, Golden Triangle finale, Hall of Opium, Chiang Rai evening."
    }
  },
  {
    key: "day-9",
    label: "Day 10",
    place: "Departure from Chiang Rai",
    tagline: "Wat Rong Khun & Farewell",
    image: "/images/vc_day8.avif",
    info: "Breakfast included · Departure",
    morning: {
      body: "A final breakfast before your guide and driver transfer you to Chiang Rai International Airport for your onward flight."
    },
    afternoon: {
      body: "If your departure is in the afternoon, a morning visit to the White Temple (Wat Rong Khun) or the Blue Temple (Wat Rong Suea Ten) — both within easy reach of the city — makes good use of the time. The river brought you here. Ten days, two countries, one story. Safe travels."
    },
    experience: {
      title: "Safe travels",
      body: "Meals: Breakfast | Style: Departure, Temple visits, Farewell."
    }
  }
]

const INCLUSIONS = [
  "Private English-speaking guide throughout (Vietnam and Laos)",
  "Private air-conditioned vehicle for all land transfers",
  "Private boat for all Mekong river journeys (Days 2, 3, 7, 8)",
  "1 domestic flight: Can Tho → Ho Chi Minh City → Luang Prabang (economy class)",
  "9 nights boutique accommodation (see accommodation notes)",
  "All meals as listed in the itinerary",
  "Welcome dinner in Ho Chi Minh City",
  "Farewell dinner in Chiang Rai",
  "All entrance fees for sites, temples, and museums visited on tour",
  "Cai Rang floating market boat excursion",
  "All water, coffee, and refreshments on river journeys",
  "Ferry crossing Houay Xai → Chiang Khong",
  "Airport transfers at all arrival and departure points",
  "24/7 in-country support line throughout the journey"
]

const EXCLUSIONS = [
  "International flights to Ho Chi Minh City and from Chiang Rai",
  "Travel insurance (required; available on request)",
  "Vietnam and Laos visas (e-visas available online; full instructions provided on booking)",
  "Personal expenses and optional activities not listed above",
  "Gratuities for guides, drivers, and boat crew (suggested; fully at your discretion)",
  "Meals marked 'on own' or not specified in the itinerary",
  "Any activities added during free time"
]

const ACCOMMODATION_NOTES = [
  { night: "1", location: "Ho Chi Minh City", style: "Boutique heritage hotel, city centre" },
  { night: "2", location: "Mekong Delta", style: "Riverside homestay or eco-lodge" },
  { night: "3", location: "Can Tho", style: "Boutique hotel, riverside" },
  { night: "4–6", location: "Luang Prabang", style: "Heritage guesthouse or boutique hotel, old town" },
  { night: "7", location: "Pakbeng", style: "Riverside lodge" },
  { night: "8", location: "Houay Xai", style: "Comfortable hotel, river view" },
  { night: "9", location: "Chiang Rai", style: "Boutique hotel, city centre" }
]

export function FullMekongStoryClient() {
  const [activeTab, setActiveTab] = useState("Itinerary")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDay, setActiveDay] = useState(0)

  const overviewRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)

  const scrollToDay = (index: number) => {
    setActiveDay(index)
    const container = document.getElementById('itinerary-scroll')
    const element = document.getElementById(`day-${index}`)
    if (container && element) {
      container.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      const scrollPos = window.scrollY + window.innerHeight / 2
      if (essentialsRef.current && scrollPos >= essentialsRef.current.offsetTop) {
        setActiveTab("Essentials")
      } else if (highlightsRef.current && scrollPos >= highlightsRef.current.offsetTop) {
        setActiveTab("Highlights")
      } else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) {
        setActiveTab("Itinerary")
      } else if (overviewRef.current && scrollPos >= overviewRef.current.offsetTop) {
        setActiveTab("Overview")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveDay(index)
          }
        })
      },
      { root: document.getElementById('itinerary-scroll'), rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    DAYS.forEach((_, i) => {
      const el = document.getElementById(`day-${i}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (tab: string) => {
    setActiveTab(tab)
    const offset = 80
    if (tab === "Overview" && overviewRef.current) {
      window.scrollTo({ top: overviewRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Itinerary" && itineraryRef.current) {
      window.scrollTo({ top: itineraryRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Highlights" && highlightsRef.current) {
      window.scrollTo({ top: highlightsRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Essentials" && essentialsRef.current) {
      window.scrollTo({ top: essentialsRef.current.offsetTop - offset, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/full_mekong_hero.png" 
          alt="The Mekong River" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            10 Days / 9 Nights · Private Journey · Two Countries · One River
          </p>
          <h1 className={`text-5xl md:text-7xl font-serif text-white mb-6 leading-tight ${playfair.className}`}>
            The Full Mekong Story
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic leading-relaxed">
            Ho Chi Minh City → Mekong Delta → Luang Prabang → Golden Triangle
          </p>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className={`sticky top-16 lg:top-20 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-[#ede9e2]/95 shadow-lg py-4" : "bg-[#ede9e2]/95 py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors whitespace-nowrap ${
                  activeTab === item ? "text-[#8B4A2A] border-b-2 border-[#8B4A2A]" : "text-navy/50 hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Link
            href="/plan-your-journey"
            className="hidden md:inline-flex items-center gap-2 bg-[#8B4A2A] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-navy transition-colors rounded-sm"
          >
            <span>Plan This Journey</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </nav>

      {/* ── OVERVIEW SECTION ── */}
      <section ref={overviewRef} className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block">Introduction</span>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>One River, Two Worlds</h2>
            <p className="font-serif text-navy/75 text-lg md:text-xl leading-[1.8] pt-2">
              The Mekong begins somewhere in the Tibetan plateau and ends, quietly, in the South China Sea. Most travelers only ever see one end of it. This journey lets you see both — or close enough.
            </p>
            <p className="font-serif text-navy/70 text-base md:text-lg leading-[1.8]">
              You start in the delta, where the river spreads across southern Vietnam in a tangle of waterways, floating markets, and garden homes. Then you fly north, cross a border, and find the same river again in Laos — narrower here, darker, moving between forested hills toward the ancient town of Luang Prabang. By the time you reach the Golden Triangle on Day 10, the Mekong feels less like a geographical fact and more like the thread that held the whole journey together.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#e0d9ce] p-8 lg:p-10 shadow-sm rounded-sm">
            <h3 className="text-navy text-[11px] tracking-[0.2em] uppercase font-bold mb-6 border-b border-[#e0d9ce] pb-4">At a Glance</h3>
            <div className="space-y-4">
              {AT_GLANCE.map((item) => (
                <div key={item.label} className="grid grid-cols-3 gap-2 py-2 border-b border-navy/5 last:border-0 text-sm">
                  <span className="text-[#8B4A2A] font-bold text-[10px] tracking-widest uppercase">{item.label}</span>
                  <span className="col-span-2 font-serif text-navy/80">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPLIT MAP ITINERARY ── */}
      <section ref={itineraryRef} className="border-t border-[#e0d9ce] bg-white">
        <div className="grid lg:grid-cols-12">
          
          {/* Map Column (Sticky on Desktop) */}
          <div className="lg:col-span-5 h-[400px] lg:h-screen lg:sticky lg:top-[128px] border-b lg:border-b-0 lg:border-r border-[#e0d9ce] z-10">
            <FullMekongMap activeDay={activeDay} onDayChange={scrollToDay} />
          </div>

          {/* Timeline Scroll Column */}
          <div className="lg:col-span-7 px-6 lg:px-16 py-20 lg:py-28 lg:max-h-screen lg:overflow-y-auto" id="itinerary-scroll">
            <div className="max-w-2xl">
              <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Day-by-Day Journey</span>
              <h2 className={`text-3xl md:text-4xl text-navy mb-16 ${playfair.className}`}>The Full Story</h2>

              <div className="space-y-20 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#e0d9ce]">
                {DAYS.map((day, index) => (
                  <div 
                    key={day.label} 
                    id={`day-${index}`} 
                    data-index={index}
                    className="relative pl-12 scroll-mt-24 group"
                  >
                    {/* Circle Node */}
                    <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border transition-all duration-300 ${
                      activeDay === index ? "bg-[#8B4A2A] border-[#8B4A2A] scale-125" : "bg-white border-[#c9a962] group-hover:border-[#8B4A2A]"
                    }`} />

                    <span className="text-[#c9a962] text-[10px] tracking-[0.25em] uppercase font-bold block mb-1">{day.label}</span>
                    <h3 className={`text-2xl text-navy mb-2 ${playfair.className}`}>{day.place}</h3>
                    <p className="text-[#8B4A2A] text-[10px] tracking-[0.1em] uppercase font-bold mb-4">{day.tagline}</p>
                    
                    {day.info && (
                      <div className="inline-block bg-[#f7f4ef] text-navy/80 text-[10px] tracking-wider uppercase px-3 py-1 font-semibold border border-[#e0d9ce] mb-6">
                        {day.info}
                      </div>
                    )}

                    <div className="space-y-6 font-serif text-navy/70 text-sm leading-relaxed">
                      <div>
                        <strong className="font-sans text-[10px] tracking-[0.15em] uppercase text-navy block mb-1">Morning</strong>
                        <p>{day.morning.body}</p>
                      </div>
                      {day.afternoon && (
                        <div>
                          <strong className="font-sans text-[10px] tracking-[0.15em] uppercase text-navy block mb-1">Afternoon</strong>
                          <p>{day.afternoon.body}</p>
                        </div>
                      )}
                      {day.experience && (
                        <div className="mt-8 pt-6 border-t border-navy/5 flex items-start gap-4">
                          <span className="text-base text-gold">✦</span>
                          <p className="text-navy text-sm font-serif italic">
                            <strong className="not-italic font-sans text-[10px] tracking-[0.15em] uppercase block mb-1 text-[#8B4A2A]">{day.experience.title}</strong>
                            {day.experience.body}
                          </p>
                        </div>
                      )}
                    </div>

                    {day.specs && (
                      <div className="mt-6 text-[10px] tracking-wide uppercase font-bold text-navy/40 border-t border-navy/5 pt-4">
                        {day.specs}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── HIGHLIGHTS SECTION ── */}
      <section ref={highlightsRef} className="py-24 lg:py-32 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Highlights</span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Journey Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#e0d9ce] p-8 lg:p-10 shadow-sm rounded-sm hover:shadow-lg transition-shadow duration-300">
                <span className="text-gold text-2xl block mb-6">✦</span>
                <p className="font-serif text-navy/80 leading-relaxed text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUSIONS / ESSENTIALS ── */}
      <section ref={essentialsRef} className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className={`text-3xl text-navy mb-8 ${playfair.className}`}>What's Included</h3>
              <ul className="space-y-4">
                {INCLUSIONS.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-sm font-serif text-navy/80">
                    <span className="text-[#c9a962] text-base mt-0.5">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={`text-3xl text-navy mb-8 ${playfair.className}`}>What's Not Included</h3>
              <ul className="space-y-4">
                {EXCLUSIONS.map((exc) => (
                  <li key={exc} className="flex items-start gap-3 text-sm font-serif text-navy/80">
                    <span className="text-[#8B4A2A] text-base mt-0.5">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accommodation Table */}
          <div className="mt-16 border border-[#e0d9ce] rounded-sm overflow-hidden">
            <div className="bg-[#f7f4ef] p-6 border-b border-[#e0d9ce]">
              <h4 className="text-navy text-xs tracking-[0.2em] uppercase font-bold">Accommodation Notes</h4>
            </div>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#f7f4ef]/50 border-b border-[#e0d9ce] text-navy font-bold text-[10px] tracking-wider uppercase">
                  <th className="p-4">Night</th>
                  <th className="p-4 border-l border-[#e0d9ce]">Location</th>
                  <th className="p-4 border-l border-[#e0d9ce]">Style</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0d9ce] font-serif text-navy/80">
                {ACCOMMODATION_NOTES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f7f4ef]/10 transition-colors">
                    <td className="p-4 font-sans text-xs font-bold text-[#8B4A2A]">{row.night}</td>
                    <td className="p-4 border-l border-[#e0d9ce] font-bold text-navy">{row.location}</td>
                    <td className="p-4 border-l border-[#e0d9ce] text-navy/70">{row.style}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-[#f7f4ef]/30 border-t border-[#e0d9ce]">
              <p className="text-xs text-navy/60 font-serif leading-relaxed italic">
                All accommodation is selected for character, location, and quality of service. Upgrades to five-star properties in Ho Chi Minh City, Luang Prabang, and Chiang Rai are available on request.
              </p>
            </div>
          </div>

          {/* Why This Journey is Different */}
          <div className="mt-16 bg-[#f7f4ef] p-8 lg:p-12 border border-[#e0d9ce] rounded-sm">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.2em] uppercase font-bold block mb-4">Why This Journey is Different</span>
            <div className="font-serif text-navy/70 text-sm leading-relaxed space-y-4">
              <p>
                Most Vietnam–Laos itineraries treat the two countries as separate destinations stitched together by a flight. This one is built around a single organizing idea — the Mekong River — that gives the whole journey coherence and meaning.
              </p>
              <p>
                You begin at the river's end, in the flat green delta where the Mekong dissolves into the sea. You finish at its upper reaches, in the mountainous borderlands where three countries meet. Everything in between — the floating markets, the river villages, the craft workshops, the sacred caves, the forested hills of northern Laos — is part of the same story. By Day 10, the river is not just scenery. It is the reason the journey makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-navy text-center px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Begin the Journey
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Reserve Your Mekong Passage
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Ready to live the full Mekong story? Tell us your preferred dates and group size, and we will customize this private journey for you.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan This Journey</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
