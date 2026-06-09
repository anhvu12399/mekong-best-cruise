"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, Users, MapPin, Info, CheckCircle2, Shield, Anchor } from "lucide-react"
import { PrivateCharterMap } from "@/components/private-charter-map"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const NAV_ITEMS = ["Overview", "Vessels", "Itinerary", "Essentials", "Why Charter"]

const VESSEL_INCLUSIONS = [
  "Private ensuite cabins with air conditioning",
  "Sundeck and outdoor seating",
  "Onboard dining (breakfast, lunch, and dinner prepared fresh daily)",
  "Bar with local spirits, wine, and non-alcoholic drinks",
  "English-speaking guide and attentive crew",
  "Safety equipment and river pilot throughout"
]

const DAYS = [
  {
    key: "day-0",
    label: "Day 1",
    place: "Embarkation at the Golden Triangle",
    tagline: "Golden Triangle to Luang Prabang · Downstream",
    image: "/images/dest_laos.avif",
    info: "Overnight: Anchored near Pak Tha · Welcome dinner on board",
    morning: {
      body: "Your private transfer brings you from your hotel in Chiang Rai or the Anantara Golden Triangle resort to Chiang Khong, the Thai border town facing Houay Xai across the Mekong. After border formalities, your crew meets you at the Houay Xai pier and escorts you aboard."
    },
    afternoon: {
      body: "Take your time settling in. A welcome cocktail and light canapés are served on the sun deck as the boat casts off and the town recedes behind you. The first hours on the river are quiet and open — wide water, forested hills, and the particular feeling of a journey that has properly begun."
    },
    experience: {
      title: "Silent Anchorage & Dark Skies",
      body: "Dinner is served on board as the boat anchors for the night in a calm stretch of river near Pak Tha, away from any town. The sky above the Mekong at night — no light pollution, no road noise — is one of the things guests mention most long after the trip is over."
    },
    specs: "Meals: Welcome cocktail, Dinner | Distance: Approx. 80 km"
  },
  {
    key: "day-1",
    label: "Day 2",
    place: "Hill Tribe Villages & River Life",
    tagline: "Authentic cultural immersion",
    image: "/images/luxury_sunset_balcony.avif",
    info: "Overnight: Anchored near Ban Thanoun · Dinner on board",
    morning: {
      body: "Wake up to the sound of the river. Morning yoga or meditation on deck is available for those who want it — your crew sets up a quiet space at the bow before breakfast. After a full breakfast, the boat pulls into the first shore excursion of the journey: a guided visit to a Kamu hill tribe village, where weaving is still the central household craft."
    },
    afternoon: {
      body: "Back on board, the morning continues downstream. Lunch is served while the boat moves — a spread of Lao and regional dishes prepared fresh by the onboard cook. The afternoon brings a second shore stop at a riverside settlement, where families fish, tend small gardens along the bank, and live largely as they have for generations."
    },
    experience: {
      title: "Lao Lao Rice Whisky Ritual",
      body: "As the boat anchors for the evening, your guide hosts a brief tasting of local Lao Lao rice whisky accompanied by river snacks — a ritual that tends to extend into a longer conversation about the river, its people, and the countries it connects."
    },
    specs: "Meals: Breakfast, Lunch, Dinner | Shore excursions: Kamu village, riverside community, Lao Lao tasting"
  },
  {
    key: "day-2",
    label: "Day 3",
    place: "Pakbeng & The Middle Mekong",
    tagline: "Uninterrupted river landscapes",
    image: "/images/about_hero.avif",
    info: "Overnight: Pakbeng or anchored nearby · Dinner on board",
    morning: {
      body: "The boat arrives at Pakbeng by mid-morning — a small river town on a hillside that serves as the natural midpoint between the Golden Triangle and Luang Prabang. Most group tours stop here briefly; on a private charter, the stop is on your terms. Go ashore to walk the market lanes or visit the small hilltop temple above the town."
    },
    afternoon: {
      body: "Return to the boat for lunch as it continues downstream. The afternoon on the river is the longest uninterrupted stretch of the journey — a full few hours of open Mekong with very few settlements in sight. This is deliberately left free of excursions. Bring a book, sit on the deck, or simply watch the riverbank pass."
    },
    experience: {
      title: "Attentive Onboard Cooking Demonstration",
      body: "In the evening, a cooking demonstration on board: your cook prepares two or three signature Lao dishes, explains the ingredients and techniques, and then serves the results as dinner. It is one of the most relaxed and memorable evenings of the journey."
    },
    specs: "Meals: Breakfast, Lunch, Dinner | Shore excursions: Pakbeng town walk, Hmong village (optional), cooking demonstration"
  },
  {
    key: "day-3",
    label: "Day 4",
    place: "Pak Ou Caves & The Final River Stretch",
    tagline: "Confluence of two sacred rivers",
    image: "/images/highlights_journey.avif",
    info: "Overnight: Anchored near Luang Prabang · Farewell dinner on board",
    morning: {
      body: "The penultimate morning on the river. After breakfast on deck, the boat approaches one of the upper Mekong's most remarkable sites: the Pak Ou Caves — two riverside caverns at the confluence of the Mekong and the Nam Ou, filled with thousands of Buddha images accumulated over five centuries."
    },
    afternoon: {
      body: "Back on board, the boat continues its final stretch toward Luang Prabang. The Mekong narrows slightly here and the hills on either side become more pronounced. Lunch is served on deck as the outskirts of Luang Prabang begin to appear — rooftops through the trees, the occasional temple stupa on the hillside."
    },
    experience: {
      title: "Farewell Feast",
      body: "The boat anchors short of the city for the final evening. A farewell dinner is served on deck — a more considered meal than the nights before, with Lao specialties and a bottle of wine to mark the end of the river journey."
    },
    specs: "Meals: Breakfast, Lunch, Farewell Dinner | Shore excursions: Pak Ou Caves (upper and lower), riverside village stop"
  },
  {
    key: "day-4",
    label: "Day 5",
    place: "Arrival in Luang Prabang",
    tagline: "UNESCO heritage disembarkation",
    image: "/images/dest_laos_hero.avif",
    info: "Disembarkation · Breakfast on board",
    morning: {
      body: "A final breakfast on the river before the boat docks at the Luang Prabang pier. Your guide and private vehicle are ready to transfer you to your hotel or onward connection."
    },
    afternoon: {
      body: "If your schedule allows a morning in Luang Prabang before departure, your guide can accompany you to the morning market or the old town for a last walk through the city that started the journey — or ended it, depending on your direction."
    },
    experience: {
      title: "A Transition Forward",
      body: "The river is behind you now. Luang Prabang is ahead. Both are worth your full attention."
    },
    specs: "Meals: Breakfast"
  }
]

const INCLUSIONS = [
  "Exclusive use of the vessel for your group",
  "All meals on board as listed (breakfast, lunch, and dinner daily)",
  "Welcome cocktail and canapés on embarkation",
  "Lao Lao tasting session and cooking demonstration",
  "All shore excursions as listed, with private English-speaking guide",
  "Entrance fees for Pak Ou Caves and all sites visited",
  "Onboard bar: local spirits, beer, wine, soft drinks, coffee, and tea",
  "Private transfers to and from the boat at embarkation and disembarkation",
  "River pilot and all fuel, port, and anchorage fees",
  "24/7 in-country support throughout the journey"
]

const EXCLUSIONS = [
  "International or domestic flights",
  "Hotel accommodation before embarkation or after disembarkation",
  "Travel insurance (required)",
  "Spa treatments where available",
  "Gratuities for crew and guide (suggested; fully at your discretion)",
  "Personal expenses and optional activities not listed above",
  "Laos e-visa (available online; your team will send full instructions ahead of travel)"
]

const COMPARISON = [
  { feature: "Other passengers", charter: "None — boat is yours alone", group: "Shared with strangers" },
  { feature: "Departure flexibility", charter: "Your chosen date", group: "Fixed schedule" },
  { feature: "Shore excursions", charter: "Fully customized", group: "Group program, fixed stops" },
  { feature: "Meal timing & menu", charter: "Set around your group", group: "Fixed times and shared menu" },
  { feature: "Pace on the river", charter: "Your rhythm", group: "Operator's schedule" },
  { feature: "Who it suits", charter: "Couples, families, close groups", group: "Solo travelers, open itinerary" }
]

export function PrivateCharterClient() {
  const [activeTab, setActiveTab] = useState("Itinerary")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDay, setActiveDay] = useState(0)

  const overviewRef = useRef<HTMLDivElement>(null)
  const vesselRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)

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
      if (comparisonRef.current && scrollPos >= comparisonRef.current.offsetTop) {
        setActiveTab("Why Charter")
      } else if (essentialsRef.current && scrollPos >= essentialsRef.current.offsetTop) {
        setActiveTab("Essentials")
      } else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) {
        setActiveTab("Itinerary")
      } else if (vesselRef.current && scrollPos >= vesselRef.current.offsetTop) {
        setActiveTab("Vessels")
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
    } else if (tab === "Vessels" && vesselRef.current) {
      window.scrollTo({ top: vesselRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Itinerary" && itineraryRef.current) {
      window.scrollTo({ top: itineraryRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Essentials" && essentialsRef.current) {
      window.scrollTo({ top: essentialsRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Why Charter" && comparisonRef.current) {
      window.scrollTo({ top: comparisonRef.current.offsetTop - offset, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/banner_3.avif" 
          alt="Private Mekong Cruise Charter" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            Private Mekong River Charter
          </p>
          <h1 className={`text-5xl md:text-7xl font-serif text-white mb-6 leading-tight ${playfair.className}`}>
            Your River. Your Schedule.<br/>Your Journey.
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic leading-relaxed">
            When the entire boat is yours, the Mekong stops being a route and starts being an experience.
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
            <span>Request Proposal</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </nav>

      {/* ── OVERVIEW SECTION ── */}
      <section ref={overviewRef} className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block">What is a Private Charter?</span>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>An Exclusive Sanctuary</h2>
            <p className="font-serif text-navy/75 text-lg md:text-xl leading-[1.8] pt-2">
              A private charter means the vessel — and everything on it — is reserved exclusively for your group. There are no other passengers. The departure time, the pace of travel, the shore excursions, the meals, the anchorage points, and the daily rhythm are all built around you.
            </p>
            <p className="font-serif text-navy/70 text-base md:text-lg leading-[1.8]">
              This is not a luxury upgrade on a shared cruise. It is a fundamentally different experience: more personal, more flexible, and more suited to travelers who want the upper Mekong on their own terms.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#e0d9ce] p-8 lg:p-10 shadow-sm rounded-sm">
            <h3 className="text-navy text-[11px] tracking-[0.2em] uppercase font-bold mb-6 border-b border-[#e0d9ce] pb-4 flex items-center gap-2">
              <Shield size={14} className="text-[#c9a962]" /> Inclusive Privileges
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-serif text-navy/80">
                <span className="text-[#c9a962]">✦</span>
                <span>No shared decks or fixed group schedules</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-serif text-navy/80">
                <span className="text-[#c9a962]">✦</span>
                <span>Attentive private crew & native river pilot</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-serif text-navy/80">
                <span className="text-[#c9a962]">✦</span>
                <span>Dedicated English-speaking guide</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-serif text-navy/80">
                <span className="text-[#c9a962]">✦</span>
                <span>Custom menu catering to your preferences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── THE VESSEL SECTION ── */}
      <section ref={vesselRef} className="py-20 lg:py-28 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">The Vessel Options</span>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>Our Upper Mekong Fleet</h2>
            <p className="max-w-3xl text-navy/70 font-serif leading-relaxed mt-4">
              For this charter, we work with a small selection of hand-picked boutique river boats on the upper Mekong — chosen for their character, their crew, and the quality of the experience they make possible rather than for size or flash.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white border border-[#e0d9ce] p-8 lg:p-10 rounded-sm">
              <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Intimate Charter (2–4 guests)</span>
              <h3 className={`text-2xl text-navy mb-4 ${playfair.className}`}>The Benchmark of Privacy</h3>
              <p className="font-serif text-navy/70 text-sm leading-relaxed mb-6">
                Traditional-style wooden river vessel with 1–2 private ensuite cabins, open sun deck, and a small dining area. Ideal for couples or a pair of close friends who want the most personal experience possible on the river. Vessels like the Gypsy — a 41-metre thatched-roof rice barge with only two cabins — represent the benchmark for this category.
              </p>
            </div>
            
            <div className="bg-white border border-[#e0d9ce] p-8 lg:p-10 rounded-sm">
              <span className="text-gold text-[10px] tracking-widest uppercase font-bold block mb-2">Boutique Charter (up to 20 guests)</span>
              <h3 className={`text-2xl text-navy mb-4 ${playfair.className}`}>The Benchmark of Elegance</h3>
              <p className="font-serif text-navy/70 text-sm leading-relaxed mb-6">
                First-class boutique ship blending Lao artisan design with French colonial detailing. Private cabins with river-view windows, onboard lounge and bar, sun deck, and full dining service. The Anouvong, widely regarded as the first boutique ship to operate on the upper Mekong, is the standard for this format.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#e0d9ce] p-8 lg:p-12 rounded-sm">
            <h4 className="text-navy text-[11px] tracking-[0.2em] uppercase font-bold mb-6 flex items-center gap-2">
              <Anchor size={14} className="text-gold"/> All vessels include:
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VESSEL_INCLUSIONS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-navy/80 text-sm font-serif">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
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
            <PrivateCharterMap activeDay={activeDay} onDayChange={scrollToDay} />
          </div>

          {/* Timeline Scroll Column */}
          <div className="lg:col-span-7 px-6 lg:px-16 py-20 lg:py-28 lg:max-h-screen lg:overflow-y-auto" id="itinerary-scroll">
            <div className="max-w-2xl">
              <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Sample Itinerary</span>
              <h2 className={`text-3xl md:text-4xl text-navy mb-4 ${playfair.className}`}>Golden Triangle to Luang Prabang</h2>
              <p className="text-navy/60 text-sm font-serif leading-relaxed mb-12">
                This itinerary runs downstream from the Golden Triangle to Luang Prabang — the direction preferred by most charter guests for its longer stretches of open river scenery and more comfortable speed. The reverse upstream route is available on request.
              </p>

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

      {/* ── INCLUSIONS / ESSENTIALS ── */}
      <section ref={essentialsRef} className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className={`text-3xl text-navy mb-8 ${playfair.className}`}>Charter Inclusions</h3>
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
              <h3 className={`text-3xl text-navy mb-8 ${playfair.className}`}>Not Included</h3>
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

          <div className="bg-white border border-[#e0d9ce] p-8 lg:p-12 rounded-sm">
            <h3 className={`text-2xl text-navy mb-6 ${playfair.className}`}>Charter Rates & Booking</h3>
            <div className="font-serif text-navy/70 text-sm leading-relaxed space-y-4">
              <p>
                Charter pricing is based on vessel type, group size, and departure dates. Rates for intimate 2-cabin vessels on the upper Mekong start from approximately $4,375 USD per day for the full boat. Boutique vessels accommodating up to 20 guests are available from approximately $11,900 USD per day.
              </p>
              <p>
                All charters are fully customizable — itinerary direction, shore excursion selection, meal preferences, and journey length can be adjusted to your group's requirements. A minimum of 3 nights is required for all private charter bookings.
              </p>
              <p>
                For a custom proposal, contact our team with your preferred dates, group size, and any specific interests. We will respond within 24 hours with a tailored itinerary and quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHARTER (COMPARISON) ── */}
      <section ref={comparisonRef} className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Comparison</span>
            <h2 className={`text-3xl md:text-4xl text-navy ${playfair.className}`}>Why Charter Rather Than Join a Group Cruise?</h2>
          </div>

          <div className="overflow-x-auto border border-[#e0d9ce] rounded-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#f7f4ef] border-b border-[#e0d9ce] text-navy font-bold text-[10px] tracking-wider uppercase">
                  <th className="p-6">Feature</th>
                  <th className="p-6 border-l border-[#e0d9ce]">Private Charter</th>
                  <th className="p-6 border-l border-[#e0d9ce]">Group Cruise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0d9ce] font-serif text-navy/80">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f7f4ef]/20 transition-colors">
                    <td className="p-6 font-sans text-xs tracking-wider uppercase font-bold text-[#8B4A2A]">{row.feature}</td>
                    <td className="p-6 border-l border-[#e0d9ce] font-bold text-navy">{row.charter}</td>
                    <td className="p-6 border-l border-[#e0d9ce] text-navy/70">{row.group}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-navy text-center px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Exclusively Yours
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Design Your Private Oasis
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Begin the conversation. Let us know your party size and preferred dates, and our charter specialists will craft a customized sanctuary.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Charter</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
