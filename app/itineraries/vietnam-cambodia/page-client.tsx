"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { VietnamCambodiaMap } from "@/components/vietnam-cambodia-map"

const NAV_ITEMS = ["Overview", "Itinerary", "Experiences", "Essentials"]

const DAYS = [
  {
    key: "day-1",
    label: "Day 1",
    place: "HCMC — Cần Thơ",
    tagline: "Luxury river lifestyle",
    image: "/images/vc_day1.png",
    morning: {
      title: "Departure & Spiritual Peace",
      body: "A 7–9 seater limousine greets you at your Ho Chi Minh City hotel. We leave the city behind and head towards Mỹ Tho. Along the way, we stop at Vinh Trang Pagoda. Here, you'll sit quietly in the temple grounds, accompanied by gentle spiritual guidance on Buddhist philosophy and inner peace."
    },
    afternoon: {
      title: "Riverside Villa & Private Sampan",
      body: "Lunch is served at an open-air riverside villa overlooking the canals, accompanied by light acoustic music. In the afternoon, board a private sampan on the Tien River. We bypass the crowded tourist spots to visit an exclusive flower islet or Bến Tre coconut garden, enjoying fresh fruit and coconut water in total privacy."
    },
    evening: {
      title: "Arrival in Cần Thơ",
      body: "Arrive in Cần Thơ and check into a 4–5 star riverside resort. Dinner is an elegant Mekong-French fusion buffet, arranged in a quiet, beautifully lit corner of the property. Spend the rest of the evening relaxing by the pool or on your balcony overlooking the Hau River."
    }
  },
  {
    key: "day-2",
    label: "Day 2",
    place: "Cần Thơ",
    tagline: "Floating market & Luxury rural vibe",
    image: "/images/vc_day2.png",
    morning: {
      title: "Cái Răng Floating Market",
      body: "Depart early (5:30 AM) on a private boat to Cái Răng Floating Market. We carefully time our visit to avoid the heaviest crowds, stopping our boat to quietly observe the vibrant trading rather than pushing through the congestion. Afterwards, visit a private fruit orchard and a traditional craft village without the usual rush."
    },
    afternoon: {
      title: "Boutique Homestay Lunch & Kayaking",
      body: "Enjoy lunch at a boutique homestay featuring wooden floors, hammocks, and absolute tranquility. In the afternoon, take a light rowboat or kayak journey down a small canal. We may stop at a small local temple by the water for a brief moment of meditation or quiet prayer."
    },
    evening: {
      title: "Candlelight & Reflection",
      body: "Return to your luxury Cần Thơ resort. For Catholic guests, a private hour of prayer or a candlelight gathering can be arranged in a quiet area of the resort. Enjoy a peaceful dinner at your leisure."
    }
  },
  {
    key: "day-3",
    label: "Day 3",
    place: "Cần Thơ — Phnom Penh",
    tagline: "Luxury border crossing",
    image: "/images/vc_day3.png",
    morning: {
      title: "Journey to the Border",
      body: "A private car returns you to Ho Chi Minh City for a brief rest (no mandatory shopping stops). A luxury 9-seater limousine then takes the group towards the Tây Ninh - Mộc Bài - Xoài Mút border crossing into Cambodia."
    },
    afternoon: {
      title: "Arrival in the Capital",
      body: "Lunch is hosted at a high-end restaurant or resort near the border, offering excellent service and a quiet atmosphere. By late afternoon, arrive in Phnom Penh and check into a 4–5 star hotel, featuring rooms with sweeping views of the Tonlé Sap or Mekong River."
    },
    evening: {
      title: "High-Rise Dining",
      body: "Dine at a sophisticated high-altitude restaurant overlooking the river, accompanied by live piano or acoustic music. Cap the night with a private car tour of the Independence Monument and Wat Phnom, beautifully illuminated against the night sky."
    }
  },
  {
    key: "day-4",
    label: "Day 4",
    place: "Phnom Penh",
    tagline: "Our Lady of Mekong & Luxury pilgrimage",
    image: "/images/vc_day4.png",
    morning: {
      title: "Pilgrimage to Bãi Cải",
      body: "A private vehicle takes the group to Our Lady of the Mekong (Bãi Cải Church) at an unhurried pace, with time to stop for photography along the river. If desired, a private pilgrimage mass can be arranged, complete with flowers, candles, and a serene, organized environment free from chaos."
    },
    afternoon: {
      title: "Reflection & Riverside Relaxation",
      body: "Have lunch at an elegant, exceptionally clean restaurant nearby. Instead of rushing to another site, spend the next few hours relaxing at a century-old palace, a riverside resort, or simply returning to your Phnom Penh hotel for some restorative downtime."
    },
    evening: {
      title: "Meditation Dinner",
      body: "Experience a special 'Meditation Dinner' set menu at your 5-star hotel or resort. The ambiance is set with soft candlelight and profound quiet—no DJs, no loud music—allowing for deep reflection on the day's spiritual journey."
    }
  },
  {
    key: "day-5",
    label: "Day 5",
    place: "Phnom Penh — Siem Reap",
    tagline: "Luxury culture & history",
    image: "/images/vc_day5.png",
    morning: {
      title: "Royal Palace & Silver Pagoda",
      body: "Take a privately guided tour of the Royal Palace and Silver Pagoda. Your guide focuses on the deep history and artistry of the site, ensuring a relaxed pace without the pressure of a rigid photography schedule."
    },
    afternoon: {
      title: "Journey to Siem Reap",
      body: "After a premium lunch—either an upscale buffet or an exquisite set menu—travel to Siem Reap via private luxury vehicle or a short domestic flight, depending on your group's preference. Check into a 5-star resort or a boutique property facing the Angkor complex."
    },
    evening: {
      title: "Stories of the Khmer Empire",
      body: "Dinner is served at a restaurant boasting views toward Angkor. The meal is accompanied by a short, captivating storytelling session about Khmer history and Buddhism, seamlessly connecting with the spiritual themes of your journey."
    }
  },
  {
    key: "day-6",
    label: "Day 6",
    place: "Siem Reap",
    tagline: "Angkor sunrise & spiritual feel",
    image: "/images/vc_day6.png",
    morning: {
      title: "Angkor Wat in Silence",
      body: "Your private car brings you to Angkor Wat before dawn. Avoiding the noisy crowds, your guide leads you to a quiet vantage point for sunrise. The tour focuses on the spiritual essence and cosmology of the temple, moving beyond mere architectural facts. Later, explore Angkor Thom, Bayon, and Ta Prohm at a meditative pace."
    },
    afternoon: {
      title: "Sunset at Pre Rup",
      body: "Enjoy a poolside buffet lunch at your 5-star resort. In the late afternoon, visit Pre Rup or Phnom Bakheng for sunset. Instead of a rushed photo op, you'll have time for a short meditation or the gentle offering of a candle as the sky turns gold."
    },
    evening: {
      title: "Private Ceremony",
      body: "Dine at a rooftop restaurant or back at your resort. If requested, a small, private ceremony with candles and soft traditional music can be arranged to honor the profound experiences of the past six days."
    }
  },
  {
    key: "day-7",
    label: "Day 7",
    place: "Siem Reap — HCMC",
    tagline: "Tonlé Sap & Luxury journey home",
    image: "/images/vc_day7.png",
    morning: {
      title: "Life on the Water",
      body: "Board a small, private wooden boat to explore the Tonlé Sap lake, visiting the floating villages of Kompong Phluk or Kompong Khleang. The focus is on the stories of waterborne life and the spiritual practice of acceptance and simplicity."
    },
    afternoon: {
      title: "Return to Ho Chi Minh City",
      body: "After a tranquil open-air lunch beside the lake, depart for Ho Chi Minh City via private vehicle or a short flight. Upon arrival, check into a 4–5 star hotel. You may choose to enjoy a light massage to ease the travel fatigue."
    },
    evening: {
      title: "Farewell Dinner",
      body: "Conclude the 7-day program (if ending here) with a spectacular farewell dinner at a rooftop restaurant or a luxurious private villa in Saigon, toasting to an unforgettable journey across two nations."
    }
  },
  {
    key: "day-8",
    label: "Day 8",
    optional: true,
    place: "Ho Chi Minh City",
    tagline: "Final spiritual connection",
    image: "/images/vc_day8.png",
    morning: {
      title: "Cathedral & Prayer",
      body: "For those extending to 8 days, the morning is dedicated to visiting the Notre-Dame Cathedral Basilica of Saigon or Tân Định Church. A short prayer session can be organized, allowing plenty of unhurried time for personal reflection and photography."
    },
    afternoon: {
      title: "Brunch & Spa",
      body: "Enjoy a late brunch at a quiet, English-style café. The afternoon is completely free for light shopping, a premium spa treatment, or a visit to Xá Lợi Pagoda to reconnect with the Buddhist spiritual experiences from earlier in the trip."
    },
    evening: {
      title: "Departure",
      body: "A private transfer takes you to Tan Son Nhat International Airport or your onward gathering point, officially concluding the Luxury Pilgrimage – Mekong & Angkor itinerary."
    }
  }
]

export function VietnamCambodiaClient() {
  const [activeTab, setActiveTab] = useState("Itinerary")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDay, setActiveDay] = useState(0)
  
  const overviewRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      const scrollPos = window.scrollY + 200
      if (experiencesRef.current && scrollPos >= experiencesRef.current.offsetTop) {
        setActiveTab("Experiences")
      } else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) {
        setActiveTab("Itinerary")
      } else {
        setActiveTab("Overview")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (tab: string) => {
    setActiveTab(tab)
    const offset = 80
    if (tab === "Overview" && overviewRef.current) {
      window.scrollTo({ top: overviewRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Itinerary" && itineraryRef.current) {
      window.scrollTo({ top: itineraryRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Experiences" && experiencesRef.current) {
      window.scrollTo({ top: experiencesRef.current.offsetTop - offset, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/vc_hero.png" 
          alt="Vietnam to Cambodia" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            Luxury Pilgrimage
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Vietnam to Cambodia:<br/>A Spiritual Journey
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic">
            7 to 8 Days • Ho Chi Minh City, Mekong Delta, Phnom Penh, Siem Reap
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
            A Journey of Deep Connection <br /> Across Two Kingdoms
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-16">
            This isn't a standard tourist trail. This is a carefully curated luxury pilgrimage designed to connect you with the profound spiritual heritage of the Mekong and the Khmer Empire. From private masses at Our Lady of the Mekong to silent sunrises over Angkor Wat, experience Indochina at an unhurried, deeply emotional pace.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-navy/10 pt-12">
            <div>
              <Clock className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Duration</p>
              <p className="font-serif text-lg">7–8 Days</p>
            </div>
            <div>
              <Users className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Group Size</p>
              <p className="font-serif text-lg">Max 6–10</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Pace</p>
              <p className="font-serif text-lg">Unrushed & Spiritual</p>
            </div>
            <div>
              <ArrowRight className="w-6 h-6 mx-auto mb-4 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Start/End</p>
              <p className="font-serif text-lg">HCMC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ITINERARY (A&K Split Layout) ── */}
      <div ref={itineraryRef} className="scroll-mt-14" />
      <section className="bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Your Itinerary</p>
            <h2 className="font-serif text-4xl md:text-6xl text-navy">Day-by-Day</h2>
            <p className="text-navy/50 mt-4 font-serif text-lg">Our experts designed this to inspire you — then adjust it entirely to suit you.</p>
          </div>
        </div>

        <div className="flex h-[85vh] border-t border-[#e0d9ce] overflow-hidden">
          {/* LEFT: Sticky Map */}
          <div className="hidden lg:block w-[62%] sticky top-14 h-[85vh] flex-shrink-0">
            <VietnamCambodiaMap activeDay={activeDay} onDayChange={setActiveDay} />
          </div>

          {/* RIGHT: Scrollable day list */}
          <div className="w-full lg:w-[38%] h-full overflow-y-auto bg-[#faf8f5] border-l border-[#e0d9ce]">
            <div className="sticky top-0 bg-[#faf8f5] border-b border-[#e0d9ce] px-6 pt-6 pb-4 z-10">
              <div className="flex gap-2 flex-wrap">
                {DAYS.map((d, i) => (
                  <button
                    key={d.key}
                    onClick={() => setActiveDay(i)}
                    className={`px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all ${
                      activeDay === i ? 'bg-[#8B4A2A] text-white' : 'bg-white border border-[#e0d9ce] text-navy/60 hover:border-[#8B4A2A]/40'
                    }`}
                  >
                    {d.label}{(d as any).optional && <span className="ml-1.5 opacity-70">opt.</span>}
                  </button>
                ))}
              </div>
            </div>

            {DAYS.map((day, i) => (
              <div key={day.key} className={activeDay === i ? 'block' : 'hidden'}>
                <div className="flex items-center gap-3 px-6 py-5 border-b border-[#e0d9ce]">
                  <span className="w-2 h-2 rounded-full bg-[#8B4A2A]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8B4A2A]">{day.place}</span>
                </div>

                <div className="relative aspect-[16/9] w-full">
                  <Image src={day.image} alt={day.place} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-white/80 text-xs font-serif italic">{day.tagline}</p>
                  </div>
                </div>

                <div className="px-6 py-6 space-y-6">
                  {[day.morning, day.afternoon, day.evening].map((seg, si) => (
                    <div key={si} className={si > 0 ? 'pt-6 border-t border-[#e8e2d9]' : ''}>
                      <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-2">
                        {si === 0 ? 'Morning' : si === 1 ? 'Afternoon' : 'Evening'}
                      </p>
                      <h4 className="font-serif text-base text-navy mb-2">{seg.title}</h4>
                      <p className="text-navy/60 font-serif leading-relaxed text-sm">{seg.body}</p>
                    </div>
                  ))}
                </div>

                <div className="px-6 pb-8 flex items-center justify-between border-t border-[#e0d9ce] pt-5">
                  <button onClick={() => setActiveDay(Math.max(0,i-1))} disabled={i===0} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-navy/40 hover:text-navy disabled:opacity-0">
                    <ChevronLeft size={13}/> Prev
                  </button>
                  <div className="flex gap-1.5">{DAYS.map((_,di)=>(<button key={di} onClick={()=>setActiveDay(di)} className={`h-1.5 rounded-full transition-all ${di===i?'w-5 bg-[#8B4A2A]':'w-1.5 bg-navy/20'}`}/>))}</div>
                  <button onClick={() => setActiveDay(Math.min(DAYS.length-1,i+1))} disabled={i===DAYS.length-1} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-navy/40 hover:text-navy disabled:opacity-0">
                    Next <ChevronRight size={13}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CRUISES (If they want to combine with a cruise) ── */}
      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Extend on Water</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Recommended Vessels</h2>
            <p className="text-navy/55 font-serif max-w-xl mx-auto">Enhance your land pilgrimage with a few days aboard the region's most serene ships.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Aqua Mekong', type: 'Modern Luxury', tagline: 'A floating sanctuary.', desc: 'Floor-to-ceiling windows and spa facilities to complement your spiritual retreat.', image: '/images/aqua_mekong.png', guests: 40, cabins: 20 },
              { name: 'The Jayavarman', type: 'French Colonial', tagline: 'Travel back in time.', desc: 'Boutique luxury with deep roots in Indochine aesthetics and quiet elegance.', image: '/images/jayavarman.png', guests: 54, cabins: 27 },
              { name: 'Mekong Princess', type: 'Intimate Scale', tagline: 'Exclusive privacy.', desc: 'Only 14 cabins, ensuring the utmost tranquility during your journey.', image: '/images/mekong_princess.png', guests: 28, cabins: 14 },
            ].map(ship => (
              <div key={ship.name} className="group border border-[#e0d9ce] overflow-hidden bg-[#f7f4ef]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={ship.image} alt={ship.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-7">
                  <p className="text-[10px] tracking-widest uppercase font-bold text-[#c9a962] mb-2">{ship.type}</p>
                  <h3 className="font-serif text-xl text-navy mb-2">{ship.name}</h3>
                  <p className="text-navy/60 text-sm font-serif mb-5 leading-relaxed">{ship.desc}</p>
                  <div className="flex justify-between text-[10px] tracking-widest uppercase font-bold text-navy/40 border-t border-[#e8e2d9] pt-4">
                    <span>{ship.guests} Guests</span>
                    <span>{ship.cabins} Cabins</span>
                  </div>
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
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold mb-4">The Depth of the Journey</p>
            <h2 className="font-serif text-4xl md:text-6xl">Exclusive Moments</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Private Mass & Prayer", desc: "Arranged hours of prayer at Catholic sanctuaries or quiet meditation in Buddhist temples.", img: "/images/vc_exp1.png" },
              { title: "Meditation Dinners", desc: "Dine in complete serenity with soft candlelight and purposeful quiet.", img: "/images/vc_exp2.png" },
              { title: "Silent Sunrises", desc: "Experience the magic of Angkor Wat at dawn, far from the crowds.", img: "/images/vc_exp3.png" }
            ].map(exp => (
              <div key={exp.title} className="group relative aspect-[4/5] overflow-hidden">
                <Image src={exp.img} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A253A]/90 via-[#1A253A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-2xl mb-3">{exp.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-6">Begin Your Pilgrimage</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-12">Ready to Plan Your Journey?</h2>
          <Link href="/plan-your-journey" className="inline-block bg-navy text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors">
            Request Availability
          </Link>
        </div>
      </section>
    </div>
  )
}
