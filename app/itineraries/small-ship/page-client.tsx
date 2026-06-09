"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, Users, MapPin, ChevronLeft, ChevronRight, Info, CheckCircle2 } from "lucide-react"
import { UpperMekongMap } from "@/components/upper-mekong-map"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const NAV_ITEMS = ["Overview", "Itinerary", "Highlights", "Essentials"]

const AT_GLANCE = [
  { label: "Duration", value: "5 Days / 4 Nights" },
  { label: "Style", value: "Private, small-group available" },
  { label: "Start / End", value: "Luang Prabang / Golden Triangle (Houay Xai or Chiang Rai)" },
  { label: "Pace", value: "Relaxed — max 2 experiences per half-day" },
  { label: "Best For", value: "Couples, solo travelers, cultural explorers (35–65)" },
  { label: "Physical Level", value: "Easy to moderate — mostly walking & boat travel" }
]

const HIGHLIGHTS = [
  "Wake up before dawn in Luang Prabang to witness the centuries-old alms ceremony (tak bat) away from tour groups.",
  "Walk the back lanes of Ban Xang Khong village, where weavers make hand-printed paper from mulberry tree bark.",
  "Board a private boat on the Mekong and spend a full day moving upstream past limestone ridges and teak forests.",
  "Step inside the Pak Ou Caves to discover thousands of Buddha images accumulated over five centuries of local devotion.",
  "Spend a night in Pakbeng — a quiet river town with no traffic noise and one of the most honest Mekong sunsets.",
  "Arrive at the Golden Triangle to understand this historical frontier shaped by three countries and one great river."
]

const DAYS = [
  {
    key: "day-0",
    label: "Day 1",
    place: "Arrival in Luang Prabang",
    tagline: "UNESCO heritage old town",
    image: "/images/dest_laos_hero.avif",
    info: "Overnight: Luang Prabang · No meals included",
    morning: {
      title: "Airport Welcome & Check-in",
      body: "Your private guide meets you at Luang Prabang International Airport and transfers you to your hotel in the UNESCO-listed old town peninsula. Take the afternoon at your own pace — the first encounter with Luang Prabang works best when it's unscheduled."
    },
    afternoon: {
      title: "Mekong Riverfront Dusk",
      body: "Wander down to the Mekong riverfront before dusk, find a seat at one of the low wooden tables facing the water, and watch the light change over the hills on the opposite bank."
    },
    experience: {
      title: "Sisavangvong Road Night Market",
      body: "In the early evening, explore the night market on Sisavangvong Road, where hill tribe vendors lay out hand-embroidered textiles and indigo-dyed cloth under lantern light."
    }
  },
  {
    key: "day-1",
    label: "Day 2",
    place: "The City's Hidden Side",
    tagline: "Tak Bat & Traditional craft villages",
    image: "/images/about_hero.avif",
    info: "Overnight: Luang Prabang · Breakfast included",
    morning: {
      title: "Silent Monks Alms & Local Market",
      body: "An optional early start at 5:30am brings you to the main road of the old town before dawn to witness the tak bat alms ceremony. Lines of saffron-robed monks walk barefoot while local residents kneel at the roadside offering sticky rice. Afterwards, explore Kitsalat Road morning market where local families shop."
    },
    afternoon: {
      title: "Wat Xieng Thong & Royal Palace",
      body: "Visit Wat Xieng Thong, Luang Prabang's most celebrated temple, whose roof sweeps nearly to the ground in the distinctive style of northern Laos, then cross to the former Royal Palace for a look at the gilded ceremonial halls and the famous Phabang Buddha."
    },
    experience: {
      title: "Ban Xang Khong & Ban Xieng Lek Weavers",
      body: "At Ban Xang Khong, a quiet lane of wooden houses along the Nam Khan River, find families still making sa paper from mulberry bark. Weavers work floor looms producing silk and cotton. Watch the sunset from Mount Phousi."
    }
  },
  {
    key: "day-2",
    label: "Day 3",
    place: "The River Begins",
    tagline: "Pak Ou Caves & Pakbeng Sunset",
    image: "/images/dest_laos.avif",
    info: "Overnight: Pakbeng · Breakfast and Lunch included",
    morning: {
      title: "Upstream Mekong River Drift",
      body: "After an early breakfast, board a private boat at the Luang Prabang boat landing and head upstream on the Mekong. Within the first hour, the banks narrow, the forest thickens, and the towns disappear. Pass fishing boats and bamboo platforms."
    },
    afternoon: {
      title: "Pak Ou Caves Exploration",
      body: "The boat pulls into a landing at the foot of a limestone cliff where two dark openings mark the entrance to the Pak Ou Caves. Inside, thousands of Buddha images fill every ledge and hollow, accumulated across five centuries of offering."
    },
    experience: {
      title: "Arrival in Pakbeng",
      body: "Enjoy a simple Lao lunch served on the boat. Cruise past Ban Xang Hai rice whiskey village. In late afternoon, arrive in Pakbeng. Check into your riverside lodge and watch the sunset: orange over the water, hills dark on both sides, absolute silence."
    }
  },
  {
    key: "day-3",
    label: "Day 4",
    place: "Toward the Borderlands",
    tagline: "Houay Xai Frontier Town",
    image: "/images/highlights_journey.avif",
    info: "Overnight: Houay Xai · Breakfast and Lunch included",
    morning: {
      title: "Wild Mekong Navigation",
      body: "The final stretch of river. The landscape becomes more remote — fewer settlements, more forest, and a genuine frontier energy. The journey is kept unhurried and observant, letting you soak in the raw natural beauty."
    },
    afternoon: {
      title: "Riverside Communities",
      body: "Your guide arranges one or two brief, unscripted pauses at local riverside communities along the way — a small local market, or a minority village living close to the water's edge to add local texture."
    },
    experience: {
      title: "Chiang Khong Gateway",
      body: "In the afternoon, approach Houay Xai, a small town on the Lao bank directly opposite Chiang Khong, Thailand. Check in and have dinner at a riverside restaurant where the menu is half Lao, half Thai."
    }
  },
  {
    key: "day-4",
    label: "Day 5",
    place: "The Golden Triangle",
    tagline: "Historical frontier meeting point",
    image: "/images/dest_laos_hero.avif",
    info: "Departure day · Breakfast included",
    morning: {
      title: "Mekong Confluence & Sop Ruak",
      body: "Start the morning at the Mekong confluence, looking out over the water toward the Thai bank at Sop Ruak and the Burmese hills beyond. Hear a short guided conversation about the region's geography, opium history, and borders."
    },
    afternoon: {
      title: "Chiang Rai Transfer or Thailand Extension",
      body: "Transfer to Chiang Rai airport for international connections, cross the Mekong by ferry to Chiang Khong for a Thailand extension, or extend your time in the area for an additional night. Your guide and driver are arranged through to your point of departure."
    },
    experience: {
      title: "The River brought you here",
      body: "A quiet moment of reflection looking back at the waters that carried you through Laos. The rest of the journey is up to you."
    }
  }
]

const INCLUSIONS = [
  "Private English-speaking guide throughout",
  "Private air-conditioned vehicle for all land transfers",
  "Private boat for Mekong river journey (Days 3 and 4)",
  "4 nights hotel accommodation (boutique or heritage category)",
  "Meals as listed in the itinerary",
  "All entrance fees to temples, caves, and sites visited",
  "Airport meet-and-greet on arrival in Luang Prabang",
  "All water and refreshments on the boat",
  "24/7 in-country support line"
]

const EXCLUSIONS = [
  "International flights to Luang Prabang and from Houay Xai / Chiang Rai",
  "Travel insurance (required; available on request)",
  "Personal expenses, tips, and gratuities",
  "Optional activities not listed in the itinerary",
  "Meals marked 'on own' or not specified",
  "Visa fees (Laos e-visa available online prior to departure)"
]

export function SmallShipClient() {
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
          src="/images/dest_laos.avif" 
          alt="Upper Mekong hidden journey" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            A Hidden Mekong Journey · 5 Days / 4 Nights
          </p>
          <h1 className={`text-5xl md:text-7xl font-serif text-white mb-6 leading-tight ${playfair.className}`}>
            Luang Prabang to<br/>the Golden Triangle
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic leading-relaxed">
            Move upstream, deeper, toward a corner of Southeast Asia that maps mark clearly but most tours never quite reach.
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
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>The River is Your Companion</h2>
            <p className="font-serif text-navy/75 text-lg md:text-xl leading-[1.8] pt-2">
              Most travelers come to Luang Prabang and stay. This journey asks you to keep moving — upstream, deeper, toward a corner of Southeast Asia that maps mark clearly but most tours never quite reach. 
            </p>
            <p className="font-serif text-navy/70 text-base md:text-lg leading-[1.8]">
              Over five days, you'll move from one of the world's most beautiful small towns into the quiet heart of the upper Mekong, past sacred caves and forested hills, to the borderlands where Laos, Thailand, and Myanmar meet. The pace is slow. The story is long. And by the end, the river feels less like scenery and more like a companion.
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
          <div className="hidden lg:block lg:col-span-5 lg:h-[80vh] lg:sticky lg:top-[140px] lg:border-r border-[#e0d9ce] z-10">
            <UpperMekongMap activeDay={activeDay} onDayChange={scrollToDay} />
          </div>

          {/* Timeline Scroll Column */}
          <div className="lg:col-span-7 px-6 lg:px-16 py-20 lg:py-28 lg:max-h-screen lg:overflow-y-auto" id="itinerary-scroll">
            <div className="max-w-2xl">
              <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Day-by-Day Journey</span>
              <h2 className={`text-3xl md:text-4xl text-navy mb-16 ${playfair.className}`}>The Hidden Mekong</h2>

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
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Moments of Devotion & Frontiers</h2>
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

          <div className="mt-16 bg-[#f7f4ef] p-8 lg:p-10 border border-[#e0d9ce] flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
            <div className="max-w-xl">
              <span className="text-[#8B4A2A] text-[10px] tracking-[0.2em] uppercase font-bold block mb-2">A Note on Pace</span>
              <p className="font-serif text-navy/70 text-sm leading-relaxed">
                This itinerary is designed to move slowly and deliberately. There are no full-day city tours packed with temple visits, no rushed morning transfers, and no afternoons that feel like they belong to a different tour. Each day has one or two meaningful experiences and space around them. That is not a limitation — it is the product.
              </p>
            </div>
            <Link
              href="/plan-your-journey"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors shrink-0"
            >
              <span>Plan This Journey</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-navy text-center px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Begin the Expedition
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Reserve Your Upper Mekong Cabin
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Upper Mekong expeditions operate seasonally between October and April. Reserve your private teak cabin early, as spaces are strictly limited.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Expedition</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
