"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Clock, 
  Users, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Award, 
  Calendar, 
  Sparkles, 
  Anchor, 
  ArrowUpRight, 
  DollarSign, 
  HelpCircle,
  FileCheck
} from "lucide-react"
import { VietnamCambodiaMap } from "@/components/vietnam-cambodia-map"
import { ItineraryBottomSections } from "@/components/itinerary-bottom-sections"

const NAV_ITEMS = ["Overview", "Quick Facts", "Itinerary", "Fleet Comparison", "Experiences", "FAQ", "Essentials"]

const DAYS = [
  {
    key: "day-1",
    label: "Day 1",
    place: "HCMC — Cần Thơ",
    tagline: "Luxury river lifestyle",
    image: "/images/vc_day1.avif",
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
    image: "/images/vc_day2.avif",
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
    image: "/images/vc_day3.avif",
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
    image: "/images/vc_day4.avif",
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
    image: "/images/vc_day5.avif",
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
    image: "/images/vc_day6.avif",
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
    image: "/images/vc_day7.avif",
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
    image: "/images/vc_day8.avif",
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

const FLEET_COMPARISON = [
  {
    slug: "aqua-mekong",
    name: "Aqua Mekong",
    tier: "Ultra-Luxury Expedition",
    cabins: "20 Design Suites (30 m²)",
    guestRatio: "1:1 Staff-to-Guest",
    highlight: "Consulting master chef menus, floor-to-ceiling glass, 4 private motorized expedition skiffs",
    priceFrom: "$4,350",
    image: "/images/aqua_mekong_banner.jpg",
    bestFor: "Design lovers & culinary connoisseurs"
  },
  {
    slug: "the-jahan",
    name: "The Jahan",
    tier: "Colonial British-Indian Luxury",
    cabins: "26 Staterooms & Suites",
    guestRatio: "1:1.5 Staff-to-Guest",
    highlight: "100% private step-out balconies, hand-carved teak architecture, Apsara wellness spa",
    priceFrom: "$3,800",
    image: "/images/the_jahan.avif",
    bestFor: "Romance, heritage & spacious verandas"
  },
  {
    slug: "mekong-jewel",
    name: "Mekong Jewel",
    tier: "All-Suite Super Ship",
    cabins: "34 All-Suite Accommodations",
    guestRatio: "1:1.3 Staff-to-Guest",
    highlight: "Top-deck swimming pool, private butler service, eco-friendly dual propulsion",
    priceFrom: "$4,899",
    image: "/images/mekong_jewel_v2.avif",
    bestFor: "Five-star hotel comforts & butler service"
  },
  {
    slug: "jayavarman",
    name: "The Jayavarman",
    tier: "Indochine Art-Deco Boutique",
    cabins: "27 French-Colonial Cabins",
    guestRatio: "1:1.6 Staff-to-Guest",
    highlight: "1930s French-Indochinese art salon, panoramic observatory sun deck, expert lecture series",
    priceFrom: "$2,980",
    image: "/images/jayavarman_hero.avif",
    bestFor: "Culture enthusiasts & history seekers"
  }
]

const FAQ_LIST = [
  {
    q: "What is the classic Vietnam to Cambodia Mekong cruise route and duration?",
    a: "The definitive Lower Mekong river cruise connects Ho Chi Minh City (Saigon) and Siem Reap (Angkor Wat) across 7 Nights / 8 Days (or 4 Nights for shortened sectors). The journey navigates through the Mekong Delta distributaries (My Tho, Cai Be, Sa Dec, Tan Chau), crosses the international water boundary into Cambodia to explore Phnom Penh and the Oudong monasteries, before traversing Tonle Sap Lake to Siem Reap."
  },
  {
    q: "Should I choose upstream (Saigon to Siem Reap) or downstream (Siem Reap to Saigon)?",
    a: "Both directions offer identical shore excursions and cultural immersion. Upstream (Saigon to Siem Reap) builds a slow cinematic crescendo from the bustling urban energy of Vietnam toward the sacred, mystical silence of Angkor Wat. Downstream (Siem Reap to Saigon) is ideal for travelers who prefer starting with intensive temple explorations and winding down with relaxed sundeck cruising through the tranquil coconut canals of the delta."
  },
  {
    q: "How much does a 7 to 8-day Vietnam to Cambodia luxury Mekong cruise cost?",
    a: "All-inclusive twin-share fares range from $1,690 to $3,200 per guest aboard authentic boutique heritage vessels (such as Pandaw and Toum Tiou II), from $3,500 to $6,500 on luxury colonial ships (The Jahan and Jayavarman), and up to $9,800 to $14,000+ on ultra-luxury all-suite vessels (Aqua Mekong and Scenic Spirit). Fares encompass all onboard dining, guided daily shore excursions, local transfers, port fees, and select premium beverages."
  },
  {
    q: "How does the riverway border crossing and visa process work between Vietnam and Cambodia?",
    a: "Crossing between Vietnam and Cambodia occurs via the international river checkpoint at Song Tien / Vinh Xuong and Kaam Samnor. The vessel purser collects guests' passports beforehand and handles all customs and immigration clearances on board while passengers relax in the lounge or enjoy lunch on deck. Travelers require an approved Cambodia e-Visa (Type T) or can obtain a visa on arrival processed by the ship staff."
  },
  {
    q: "What is the best time of year to take a Vietnam to Cambodia river cruise?",
    a: "The prime cruising window spans from August to April. High-water season (August to November) brings full waterways, flourishing greenery, and allows ships to cruise directly across Tonle Sap Lake into Siem Reap. Dry season (December to April) provides pleasant temperatures, negligible rainfall, and crystal-clear sunrise conditions over Angkor Wat."
  },
  {
    q: "Which luxury vessels operate the 7–8 day Vietnam-Cambodia route?",
    a: "Top verified vessels operating this route include Aqua Mekong (ultra-luxury 20-suite design vessel with Michelin-consulted dining), The Jahan (26-cabin British-Indian colonial masterpiece with private balconies), Mekong Jewel (34-suite state-of-the-art eco-luxury ship with sundeck pool and butler service), and Jayavarman (27-stateroom French-Indochinese art-deco boutique vessel)."
  }
]

export function VietnamCambodiaClient() {
  const [activeTab, setActiveTab] = useState("Itinerary")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDay, setActiveDay] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const scrollToDay = (index: number) => {
    setActiveDay(index)
    const container = document.getElementById('itinerary-scroll')
    const element = document.getElementById(`day-${index}`)
    if (container && element) {
      container.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' })
    }
  }

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
  
  const overviewRef = useRef<HTMLDivElement>(null)
  const quickFactsRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const fleetRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      const scrollPos = window.scrollY + window.innerHeight / 2
      if (essentialsRef.current && scrollPos >= essentialsRef.current.offsetTop) {
        setActiveTab("Essentials")
      } else if (faqRef.current && scrollPos >= faqRef.current.offsetTop) {
        setActiveTab("FAQ")
      } else if (experiencesRef.current && scrollPos >= experiencesRef.current.offsetTop) {
        setActiveTab("Experiences")
      } else if (fleetRef.current && scrollPos >= fleetRef.current.offsetTop) {
        setActiveTab("Fleet Comparison")
      } else if (itineraryRef.current && scrollPos >= itineraryRef.current.offsetTop) {
        setActiveTab("Itinerary")
      } else if (quickFactsRef.current && scrollPos >= quickFactsRef.current.offsetTop) {
        setActiveTab("Quick Facts")
      } else if (overviewRef.current && scrollPos >= overviewRef.current.offsetTop) {
        setActiveTab("Overview")
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (tab: string) => {
    setActiveTab(tab)
    const offset = 80
    if (tab === "Overview" && overviewRef.current) {
      window.scrollTo({ top: overviewRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Quick Facts" && quickFactsRef.current) {
      window.scrollTo({ top: quickFactsRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Itinerary" && itineraryRef.current) {
      window.scrollTo({ top: itineraryRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Fleet Comparison" && fleetRef.current) {
      window.scrollTo({ top: fleetRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Experiences" && experiencesRef.current) {
      window.scrollTo({ top: experiencesRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "FAQ" && faqRef.current) {
      window.scrollTo({ top: faqRef.current.offsetTop - offset, behavior: "smooth" })
    } else if (tab === "Essentials" && essentialsRef.current) {
      window.scrollTo({ top: essentialsRef.current.offsetTop - offset, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image 
          src="/images/vc_hero.avif" 
          alt="Vietnam to Cambodia Mekong River Cruise Pilgrimage" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center justify-center gap-2">
            <Compass size={14} className="text-[#c9a962]" />
            <span>7–8 Days · Two Nations · 320 Nautical Miles · One Great River</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Saigon to Angkor.<br/>The Long Way.
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic">
            A week on the Mekong from the delta to the temples. Through river border crossings, floating villages, and a silence at Angkor Wat that you&apos;ll carry home.
          </p>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className={`sticky top-16 lg:top-20 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#ede9e2]/95 shadow-lg py-4" : "bg-[#ede9e2]/95 py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
          <div className="hidden md:flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar">
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
          <div className="flex md:hidden gap-5 overflow-x-auto no-scrollbar">
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
          <Link 
            href="/plan-your-journey?itinerary=vietnam-cambodia"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#c9a962] text-white px-7 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-[#b59550] transition-colors rounded-sm shadow-sm"
          >
            <span>Enquire Route</span>
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </nav>

      {/* ── OVERVIEW & E-E-A-T AUTHOR BADGE ── */}
      <div ref={overviewRef} className="scroll-mt-24" />
      <section className="py-20 lg:py-24 bg-[#f7f4ef] text-navy border-b border-[#e0d9ce]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* E-E-A-T Specialist Byline Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#e0d9ce] shadow-sm mb-10 text-xs text-navy/80">
            <span className="flex items-center gap-1.5 text-[#8B4A2A] font-semibold">
              <ShieldCheck size={15} className="text-[#8B4A2A]" />
              <span>Curated by Linh Tran</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-navy/60">Senior Indochina River Cruise Specialist (14+ yrs)</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1 text-[#2b6140] font-medium">
              <CheckCircle2 size={13} />
              <span>VNAT Lic. 79-0743</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-navy/50 italic">Verified Nov 2026</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            You Cross a Border on Day 3.<br /> By Day 6, You&apos;ve Crossed Several Others.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed mb-8">
            This trip starts in the chaos of Saigon and ends at Angkor Wat before dawn, and in between you&apos;ll cross the Mekong border by riverway limousine, eat on a rooftop overlooking the Tonlé Sap, visit a church on the water that most Cambodians don&apos;t know exists, and stand in an Angkor corridor at 5am with nobody else in sight. It covers two sovereign nations, 320 nautical miles, and over a thousand years of Khmer and Vietnamese heritage.
          </p>
          <p className="text-navy/70 text-base font-light leading-relaxed mb-14">
            One of the most celebrated{" "}
            <Link href="/" className="underline underline-offset-2 text-[#8B4A2A] hover:text-[#c9a962] transition-colors font-medium">
              Mekong River Cruise
            </Link>
            {" "}routes available — connecting the fertile delta with the temples of Angkor in a single, seamless expedition operated by authorized division of <strong className="font-semibold text-navy">My Way Luxury Travel LLC</strong> (New York DOS ID: 7926729).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-navy/10 pt-10">
            <div className="bg-white/60 p-4 rounded-sm border border-[#e0d9ce]/60">
              <Clock className="w-5 h-5 mx-auto mb-2 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Duration</p>
              <p className="font-serif text-base font-semibold">7–8 Days / 7 Nights</p>
            </div>
            <div className="bg-white/60 p-4 rounded-sm border border-[#e0d9ce]/60">
              <Users className="w-5 h-5 mx-auto mb-2 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Capacity</p>
              <p className="font-serif text-base font-semibold">Max 20–34 Cabins</p>
            </div>
            <div className="bg-white/60 p-4 rounded-sm border border-[#e0d9ce]/60">
              <Compass className="w-5 h-5 mx-auto mb-2 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Direction</p>
              <p className="font-serif text-base font-semibold">Upstream / Downstream</p>
            </div>
            <div className="bg-white/60 p-4 rounded-sm border border-[#e0d9ce]/60">
              <DollarSign className="w-5 h-5 mx-auto mb-2 text-[#c9a962]" />
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50 mb-1">Tariff Guide</p>
              <p className="font-serif text-base font-semibold">From $1,690 to $9,800+</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI SHORT ANSWER & EXECUTIVE ROUTE SUMMARY (At-a-Glance Box) ── */}
      <div ref={quickFactsRef} className="scroll-mt-24" />
      <section className="py-16 bg-[#ede7dc] border-b border-[#ded5c5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 md:p-10 rounded-sm border-l-4 border-[#8B4A2A] shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e0d9ce]">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8B4A2A] flex items-center gap-1.5 mb-1">
                  <Sparkles size={13} className="text-[#c9a962]" />
                  <span>Executive Itinerary Brief & AI Reference Counsel</span>
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-navy">
                  Vietnam to Cambodia Mekong Cruise: Key Takeaways at a Glance
                </h3>
              </div>
              <span className="bg-[#8B4A2A]/10 text-[#8B4A2A] text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-sm">
                Official 2026 Season Digest
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-navy/80">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">1. The Corridor & Ports</span>
                <p className="font-serif text-base text-navy font-semibold">Ho Chi Minh City ↔ Siem Reap</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Calls at My Tho, Cai Be, Sa Dec, Tan Chau (Vietnam), Kaam Samnor river border, Phnom Penh, Oudong, Kampong Chhnang, and Tonle Sap Lake.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">2. Seasonality & Water Levels</span>
                <p className="font-serif text-base text-navy font-semibold">High-Water (Aug–Nov) · Dry (Dec–Apr)</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  High-water season allows direct sailing across Tonle Sap Lake into Siem Reap port. Dry season offers comfortable low humidity and pristine Angkor sunrises.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">3. Pricing & Booking Inclusions</span>
                <p className="font-serif text-base text-navy font-semibold">$1,690 to $9,800+ Per Person</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Twin-share all-inclusive basis: chef-curated dining, daily excursions, local speedboats, onboard lectures, port dues, and private airport transfers.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">4. River Border Customs Protocol</span>
                <p className="font-serif text-base text-navy font-semibold">Zero-Hassle Onboard Clearance</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Customs formalities at Song Tien / Kaam Samnor are handled entirely by ship pursers while guests dine or relax in the sundeck lounge.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">5. Upstream vs. Downstream Choice</span>
                <p className="font-serif text-base text-navy font-semibold">Equal Value & Cultural Depth</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Upstream builds from busy delta markets to ancient temple tranquility. Downstream winds down after temple walking with relaxing river breeze.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B4A2A] block">6. Best-in-Class Fleet Options</span>
                <p className="font-serif text-base text-navy font-semibold">Aqua Mekong, The Jahan, Mekong Jewel</p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  From 20-suite boutique architectural marvels to French-colonial art vessels with 100% private step-out balconies.
                </p>
              </div>
            </div>

            {/* Specialist Insider Field Tips */}
            <div className="mt-8 pt-6 border-t border-[#e0d9ce] bg-[#faf8f5] p-5 rounded-sm">
              <p className="text-[11px] uppercase tracking-widest font-bold text-[#8B4A2A] mb-3 flex items-center gap-1.5">
                <Compass size={14} />
                <span>Specialist Field Notes & Practical Advice for Discerning Travelers</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-navy/75 leading-relaxed">
                <div>
                  <strong className="text-navy block mb-1">✓ Tonle Sap Navigation:</strong>
                  In low-water months (Jan–June), large vessels anchor in Kampong Chhnang, with the final leg across Tonle Sap provided via luxury air-conditioned coaches to protect lake ecologies.
                </div>
                <div>
                  <strong className="text-navy block mb-1">✓ Visa Documents:</strong>
                  Ensure your passport has at least 6 months validity from return date and 2 blank pages. Cambodia e-Visa (Type T) is accepted at the Kaam Samnor river port.
                </div>
                <div>
                  <strong className="text-navy block mb-1">✓ Best Price & Cabins:</strong>
                  Mid-deck and upper-deck suites sell out 6 to 9 months in advance for peak festive and autumn departures. Enquire early to lock guaranteed rates.
                </div>
              </div>
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
            <h2 className="font-serif text-4xl md:text-6xl text-navy">Day-by-Day Route</h2>
            <p className="text-navy/50 mt-4 font-serif text-lg">Our experts designed this to inspire you — then adjust it entirely to suit your private schedule.</p>
          </div>
        </div>

        <div className="flex h-[85vh] border-t border-[#e0d9ce] overflow-hidden">
          {/* LEFT: Sticky Map */}
          <div className="hidden lg:block w-[62%] sticky top-14 h-[85vh] flex-shrink-0">
            <VietnamCambodiaMap activeDay={activeDay} onDayChange={setActiveDay} />
          </div>

          {/* RIGHT: Scrollable day list */}
          <div id="itinerary-scroll" className="w-full lg:w-[38%] h-full overflow-y-auto bg-[#faf8f5] border-l border-[#e0d9ce] scroll-smooth">
            <div className="sticky top-16 lg:top-20 bg-[#faf8f5] border-b border-[#e0d9ce] px-6 pt-6 pb-4 z-10">
              <div className="flex gap-2 flex-wrap">
                {DAYS.map((d, i) => (
                  <button
                    key={d.key}
                    onClick={() => scrollToDay(i)}
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
              <div key={day.key} id={`day-${i}`} data-index={i} className="block pb-10">
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
                  <button onClick={() => scrollToDay(Math.max(0, i - 1))} disabled={i===0} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-navy/40 hover:text-navy disabled:opacity-0">
                    <ChevronLeft size={13}/> Prev
                  </button>
                  <div className="flex gap-1.5">{DAYS.map((_,di)=>(<button key={di} onClick={() => scrollToDay(di)} className={`h-1.5 rounded-full transition-all ${di===i?'w-5 bg-[#8B4A2A]':'w-1.5 bg-navy/20'}`}/>))}</div>
                  <button onClick={() => scrollToDay(Math.min(DAYS.length - 1, i + 1))} disabled={i===DAYS.length-1} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-navy/40 hover:text-navy disabled:opacity-0">
                    Next <ChevronRight size={13}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET COMPARISON MATRIX (Buff Leads AI) ── */}
      <div ref={fleetRef} className="scroll-mt-24" />
      <section className="py-20 lg:py-28 bg-[#f5f2eb] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-[#8B4A2A] block mb-2">
              Verified Vessels for Vietnam–Cambodia
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-navy mb-4">
              Compare Premier Mekong Cruise Vessels
            </h2>
            <p className="text-navy/60 text-base font-light">
              We partner directly with ship operators with zero retail mark-up. Compare stateroom configurations, staff ratios, and verified twin-share pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_COMPARISON.map((vessel) => (
              <div 
                key={vessel.slug}
                className="bg-white border border-[#e0d9ce] rounded-sm flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image 
                    src={vessel.image} 
                    alt={vessel.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-sm text-gold text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {vessel.tier}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-navy mb-2 group-hover:text-[#c9a962] transition-colors">
                      {vessel.name}
                    </h3>
                    <p className="text-[11px] text-[#8B4A2A] font-semibold mb-4 italic">
                      Best For: {vessel.bestFor}
                    </p>

                    <div className="space-y-2.5 text-xs text-navy/70 border-t border-b border-[#e0d9ce]/60 py-4 mb-5">
                      <div className="flex justify-between">
                        <span className="text-navy/50">Capacity:</span>
                        <span className="font-medium text-navy">{vessel.cabins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-navy/50">Service Ratio:</span>
                        <span className="font-medium text-navy">{vessel.guestRatio}</span>
                      </div>
                      <div className="pt-1 text-[11px] text-navy/80 leading-snug">
                        {vessel.highlight}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-navy/50">From</span>
                      <span className="font-serif text-xl font-bold text-[#8B4A2A]">{vessel.priceFrom} <span className="text-xs font-sans font-normal text-navy/60">/ guest</span></span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href={`/ships/${vessel.slug}`}
                        className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-navy bg-gray-100 hover:bg-gray-200 transition-colors rounded-sm"
                      >
                        View Ship
                      </Link>
                      <Link 
                        href={`/plan-your-journey?vessel=${vessel.slug}&itinerary=vietnam-cambodia`}
                        className="text-center py-2 text-[10px] font-bold uppercase tracking-widest text-white bg-[#8B4A2A] hover:bg-[#723c21] transition-colors rounded-sm"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-navy/60 italic mb-4">
              All bookings through Mekong River Cruise include Best Price Guarantee, complimentary cabin category review, and zero agency booking fee.
            </p>
            <Link 
              href="/cruises"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#8B4A2A] hover:text-[#c9a962] transition-colors border-b border-[#8B4A2A]/40 pb-0.5"
            >
              <span>Explore All 17 Vessels in the Mekong Fleet</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VERIFIED CITATIONS & BOTTOM SECTIONS ── */}
      <ItineraryBottomSections currentSlug="vietnam-cambodia" />

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
              { title: "The Monk's Blessing", desc: "He's ninety-two. He's been at this temple since he was fourteen. He ties a thread around your wrist and says something in Khmer that your guide translates later, in the van, quietly.", img: "/images/vc_exp1.avif" },
              { title: "Dinner with Nobody Else", desc: "A table on a rooftop in Phnom Penh. The Mekong below. Candlelight. No music except the city. The waiter brings dishes you didn't order because the chef decided you should try them.", img: "/images/vc_exp2.avif" },
              { title: "Angkor Before the Crowds", desc: "4:45am. The towers are black against an orange sky. There are maybe twenty people in the entire complex. Your guide knows a corridor where the light hits a carved apsara at exactly 5:30. You'll be the only ones there.", img: "/images/vc_exp3.avif" }
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
        </div>
      </section>

      {/* ── FAQ ACCORDION SECTION (Matching Schema for AI Citation) ── */}
      <div ref={faqRef} className="scroll-mt-24" />
      <section className="py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e0d9ce]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-[#8B4A2A] block mb-2">
              Expert Travel Guidance
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-navy/60 text-sm max-w-2xl mx-auto">
              Everything you need to know about navigating the Lower Mekong between Vietnam and Cambodia, curated by our regional expedition directors.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div 
                  key={index}
                  className="bg-white border border-[#e0d9ce] rounded-sm overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-navy font-medium leading-snug">
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-[#e0d9ce] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8B4A2A] text-white border-[#8B4A2A]' : 'text-navy/60'}`}>
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-navy/70 leading-relaxed border-t border-gray-100 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Lead Magnet Concierge Callout */}
          <div className="mt-12 bg-[#ede7dc] p-6 md:p-8 rounded-sm border border-[#ded5c5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif text-xl text-navy font-bold">Have a Custom Route or Family Cabin Inquiry?</h4>
              <p className="text-xs text-navy/70">
                Speak directly with our senior cruise concierge. Get verified live cabin allocations and tailor-made pre/post hotel arrangements in Saigon and Siem Reap.
              </p>
            </div>
            <Link 
              href="/plan-your-journey?itinerary=vietnam-cambodia"
              className="bg-[#8B4A2A] hover:bg-[#723c21] text-white px-7 py-3 text-xs font-bold tracking-widest uppercase shrink-0 transition-colors rounded-sm shadow-sm"
            >
              Consult a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA / ESSENTIALS ── */}
      <div ref={essentialsRef} className="scroll-mt-14" />
      <section className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-6">Begin Your Pilgrimage</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8">Ready to Plan Your Journey?</h2>
          <p className="text-navy/70 text-base max-w-xl mx-auto mb-10 font-serif italic">
            Private transfers, handpicked suites, and unhurried days along Indochina&apos;s greatest waterway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/plan-your-journey?itinerary=vietnam-cambodia" className="inline-block bg-navy text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors rounded-sm shadow-md">
              Request Availability
            </Link>
            <Link href="/cruises" className="inline-block bg-transparent text-navy border border-navy/30 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-navy hover:text-white transition-colors rounded-sm">
              Explore The Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
