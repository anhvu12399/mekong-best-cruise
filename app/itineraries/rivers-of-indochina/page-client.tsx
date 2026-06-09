"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, MapPin, Info, CheckCircle2, Shield, Anchor } from "lucide-react"
import { RiversOfIndochinaMap } from "@/components/rivers-of-indochina-map"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const NAV_ITEMS = ["Overview", "Itinerary", "Highlights", "Essentials"]

const AT_GLANCE = [
  { label: "Duration", value: "15 Days / 14 Nights" },
  { label: "Countries", value: "Vietnam · Cambodia · Laos" },
  { label: "Route", value: "Hanoi → Halong Bay → Hue → Hoi An → Ho Chi Minh City → Mekong Delta → Phnom Penh → Siem Reap → Luang Prabang → Golden Triangle" },
  { label: "Style", value: "Private, fully guided, fully customizable" },
  { label: "Pace", value: "Deliberate — one or two meaningful experiences per half-day, no rushed transfers" },
  { label: "Best For", value: "Couples, cultural travelers, first-time Indochina visitors, American guests aged 40–70" },
  { label: "Physical Level", value: "Easy to moderate — walking, boat travel, temple visits, optional cycling" },
  { label: "Best Season", value: "October to April" }
]

const HIGHLIGHTS = [
  "Overnight on a traditional junk in Halong Bay, waking up inside a limestone archipelago that looks best before the tour boats arrive.",
  "Walk the lantern-lit streets of Hoi An at dusk and step inside tailors' workshops and family cooking schools that have been operating the same way for decades.",
  "Cruise the back canals of Ben Tre on a private boat, through palm-lined waterways that most Mekong day tours never reach.",
  "Watch vendor boats trade fruit and breakfast at Cai Rang floating market from the water at sunrise.",
  "Cross the Cambodian border by speedboat on the Mekong and arrive in Phnom Penh from the river — the way travelers arrived for centuries.",
  "Spend two full days at Angkor with a private guide who can give the temples depth rather than just names.",
  "Arrive in Luang Prabang and feel the difference between a city built for commerce and a city built for contemplation.",
  "Board a private boat on the upper Mekong and end the journey at the Golden Triangle, where three countries and one great river converge."
]

const DAYS = [
  {
    key: "day-0",
    label: "Day 1",
    place: "Arrival in Hanoi",
    tagline: "Arrival & City Orientation",
    image: "/images/dest_vietnam.avif",
    info: "Overnight: Hanoi · Welcome dinner included",
    morning: {
      body: "Your guide meets you at Noi Bai International Airport and transfers you to your hotel in the Old Quarter or French Quarter, depending on your preference. Hanoi's center is compact and walkable — spend the afternoon at your own pace, adjusting to the time zone and letting the city's texture sink in."
    },
    afternoon: {
      body: "The Old Quarter's 36 traditional trade streets are best explored on foot without a plan. Walk toward Hoan Kiem Lake in the early evening, when locals gather along the water's edge and the air cools slightly. Your guide joins you for a welcome dinner at a restaurant chosen for quality of food rather than tourist convenience, followed by a brief conversation about the fifteen days ahead."
    },
    experience: {
      title: "Welcome Dinner",
      body: "Meals: Welcome Dinner | Style: Arrival, city orientation, lake walk, welcome dinner."
    }
  },
  {
    key: "day-1",
    label: "Day 2",
    place: "Hanoi: The City in Depth",
    tagline: "Temple of Literature & Ethnology Museum",
    image: "/images/about-mekong-bg.avif",
    info: "Overnight: Hanoi · Breakfast, Lunch",
    morning: {
      body: "A full day in Hanoi organized around the city's four distinct layers: the ancient, the imperial, the colonial, and the living city of today. Start the morning at the Temple of Literature — Vietnam's first university, founded in 1070, where stone stelae record the names of doctoral graduates across nine centuries of Confucian scholarship. Continue to the Ho Chi Minh Mausoleum complex, where the surrounding architecture tells the story of a country that built a political mythology around one man and then had to decide what to do with the building after he was gone."
    },
    afternoon: {
      body: "After lunch at a proper Hanoian restaurant — bún chả, bánh cuốn, or a set menu depending on your preference — the afternoon shifts to the Old Quarter, where the French-era streetscape and the Vietnamese shophouse tradition collide in a way that is still visually remarkable more than a century after the colonial period ended. End the day at the Vietnam Museum of Ethnology, which presents the country's 54 ethnic groups with more intellectual seriousness and better curation than almost any comparable institution in Southeast Asia."
    },
    experience: {
      title: "Hanoi In-Depth",
      body: "Meals: Breakfast, Lunch | Style: Temple of Literature, Ho Chi Minh complex, Old Quarter, Ethnology Museum."
    }
  },
  {
    key: "day-2",
    label: "Day 3",
    place: "Halong Bay: Onboard Overnight",
    tagline: "Limestone karsts & Kayaking hidden lagoons",
    image: "/images/halong_junk_cruise.png",
    info: "Overnight: Traditional junk, Halong Bay · Breakfast, Lunch, Dinner",
    morning: {
      body: "Transfer from Hanoi to Ha Long pier — approximately 3.5 hours by private vehicle — and board your overnight junk in the early afternoon. The first hour on the water is the most important: find a seat on deck, put the phone away, and let the limestone karsts do what they do. There is no adequate description of Halong Bay from the outside. You have to be on the water inside it."
    },
    afternoon: {
      body: "The afternoon program includes a kayak excursion through hidden lagoons accessible only at low tide, a short hike to a cave viewpoint, and a visit to a floating fishing village where families have lived on the water for generations with no permanent address on land. Dinner is served as the boat anchors in a quiet bay away from the main flotilla. The evening — open sky, still water, the outline of the karsts at night — is one of the consistent highlights guests mention long after the journey."
    },
    experience: {
      title: "Ha Long Bay cruise",
      body: "Meals: Breakfast, Lunch, Dinner | Style: Ha Long Bay cruise, kayaking, fishing village, overnight junk."
    }
  },
  {
    key: "day-3",
    label: "Day 4",
    place: "Halong Bay Morning · Fly to Hue",
    tagline: "Sunrise on the deck & Flight south",
    image: "/images/dest_vietnam.avif",
    info: "Overnight: Hue · Breakfast",
    morning: {
      body: "A final morning on the water before the boat returns to the pier. Sunrise from the deck is worth the early wake-up — the light on the limestone is different from anything you saw yesterday afternoon, and the bay is quieter before the day-trip boats arrive."
    },
    afternoon: {
      body: "Return to the pier by late morning and transfer to the airport for the short flight south to Da Nang, then continue by private vehicle to Hue — the former imperial capital of Vietnam, built along the Perfume River between mountain and sea. Check in to your hotel and take the late afternoon to walk the southern bank of the river at dusk, when the light turns the water the color that gave it its name."
    },
    experience: {
      title: "Hue arrival and riverside evening",
      body: "Meals: Breakfast | Flight: Hanoi → Da Nang (included); transfer Da Nang → Hue by private vehicle | Style: Bay morning, flight south, Hue arrival and riverside evening."
    }
  },
  {
    key: "day-4",
    label: "Day 5",
    place: "Hue: Imperial City & Perfume River",
    tagline: "Citadel exploration & Tu Duc Tomb",
    image: "/images/hue_perfume_river.png",
    info: "Overnight: Hue · Breakfast, Lunch",
    morning: {
      body: "The Imperial Citadel of Hue — built by the Nguyen dynasty beginning in 1804, modeled loosely on Beijing's Forbidden City, and partially destroyed during the 1968 Tet Offensive — is one of the most complex historical sites in Southeast Asia, and one of the most frequently misread by visitors who only have three hours. Your private guide gives it the morning it deserves, moving through the outer walls, the Palace of Supreme Harmony, the private residences, and the lesser-known ceremonial halls without rushing."
    },
    afternoon: {
      body: "After lunch, board a private dragon boat on the Perfume River for an afternoon cruise to the Thien Mu Pagoda — seven stories of brick overlooking the water, with a courtyard where monks have been tending the grounds for four centuries — and one of the imperial tombs in the valley south of the city. The tomb of Tu Duc is the most atmospheric: a forested compound of pavilions, ponds, and stone-carved mandarins that the emperor designed himself and used as a retreat during his lifetime."
    },
    experience: {
      title: "Imperial Citadel & Perfume River",
      body: "Meals: Breakfast, Lunch | Style: Imperial Citadel, dragon boat, Thien Mu Pagoda, Tu Duc Tomb."
    }
  },
  {
    key: "day-5",
    label: "Day 6",
    place: "Hoi An: The Ancient Town",
    tagline: "Hai Van Pass & Family cooking class",
    image: "/images/hoi_an_lanterns.png",
    info: "Overnight: Hoi An · Breakfast, Lunch",
    morning: {
      body: "Transfer from Hue to Hoi An by private vehicle, crossing the Hai Van Pass — a coastal mountain road with views over Da Nang Bay that justify the slightly longer route over the tunnel. Stop at the top of the pass for a coffee and a look south: on a clear morning, the coast from here is one of the best views in central Vietnam. Arrive in Hoi An by mid-morning and check in to your hotel before walking into the Ancient Town. Hoi An works best without a structured itinerary: the Japanese Covered Bridge, the Chinese Assembly Halls, the merchant houses along Tran Phu Street, and the tailors' workshops and family restaurants of the back lanes are all within ten minutes of each other on foot. Your guide accompanies you through the morning, providing context when it is useful and stepping back when you want to simply walk."
    },
    afternoon: {
      body: "In the afternoon, a private cooking class at a family home outside the tourist center — a proper Vietnamese cooking experience, not a hospitality-industry version — covers the dishes specific to Hoi An: white rose dumplings, cao lầu noodles, and bánh mì in its original form before it became globally famous. Dinner in town on your own."
    },
    experience: {
      title: "Hai Van Pass & Ancient Town walk",
      body: "Meals: Breakfast, Lunch | Style: Hai Van Pass, Ancient Town walk, tailors' lane, family cooking class."
    }
  },
  {
    key: "day-6",
    label: "Day 7",
    place: "Hoi An Free Day · Fly to Ho Chi Minh City",
    tagline: "Quiet morning & Flight to Saigon",
    image: "/images/banner_1.avif",
    info: "Overnight: Ho Chi Minh City · Breakfast",
    morning: {
      body: "A free morning in Hoi An — the best thing you can do with it is wake early and walk the Ancient Town before the tourist shops open, when the streets belong to locals and the light is still low and soft. The covered market by the river is worth an hour."
    },
    afternoon: {
      body: "Late morning, transfer to Da Nang airport for the flight south to Ho Chi Minh City. Arrive in the early afternoon and transfer to your hotel. The contrast between Hoi An and Saigon is immediate and deliberate — this is a city that moves at a completely different speed. Spend the evening at your own pace: the streets around Bui Vien, the cocktail bars on the rooftops of the Bui Thi Xuan area, or a quiet dinner near the hotel."
    },
    experience: {
      title: "Saigon arrival",
      body: "Meals: Breakfast | Flight: Da Nang → Ho Chi Minh City (included) | Style: Free Hoi An morning, flight south, Saigon arrival."
    }
  },
  {
    key: "day-7",
    label: "Day 8",
    place: "The Delta Begins: Ben Tre Backwaters",
    tagline: "Quiet side-canals & Riverside homestay",
    image: "/images/bentre_waterways.png",
    info: "Overnight: Mekong Delta homestay · Breakfast, Lunch",
    morning: {
      body: "Depart Ho Chi Minh City early and head south toward Ben Tre — a quieter entry into the Mekong Delta than the standard My Tho four-islands circuit, and a more honest one. Board a small private boat for a back-canal cruise through narrow palm-lined waterways, passing coconut barges, riverside homes, and small workshops in a landscape that looks like it was painted rather than built."
    },
    afternoon: {
      body: "A village walk follows the boat: stop at a working coconut workshop, have lunch at a garden home surrounded by fruit trees and fish ponds, and continue in the afternoon by bicycle or local transport along quiet village paths where the only traffic is the occasional motorbike and the sound of chickens. Check in to a riverside homestay in the late afternoon — a proper family property, not a resort marketed as a homestay. Dinner is prepared by the host family."
    },
    experience: {
      title: "Ben Tre back canals & village walk",
      body: "Meals: Breakfast, Lunch, Dinner | Style: Ben Tre back canals, village walk, coconut workshop, garden lunch, cycling, homestay."
    }
  },
  {
    key: "day-8",
    label: "Day 9",
    place: "Floating Market · Mekong to Cambodia",
    tagline: "Cai Rang floating market & Border crossing",
    image: "/images/floating_market_dawn.png",
    info: "Overnight: Phnom Penh · Breakfast, Lunch",
    morning: {
      body: "Wake at 5:00am for the Cai Rang floating market at sunrise — board a small private boat in the dark and arrive at the market before 6:30am, when the trade is at its peak and the light on the water is extraordinary. Breakfast from a vendor boat on the river: noodle soup, coffee, and fruit bought directly from the boats around you."
    },
    afternoon: {
      body: "After the market, continue by private vehicle toward the Cambodian border. Cross at Moc Bai / Bavet — your guide handles the formalities — and continue to Phnom Penh by road, arriving in the early afternoon. Alternatively, if your timing allows, the speedboat from Chau Doc to Phnom Penh along the Mekong is the more atmospheric option: arriving in Cambodia from the river, the way travelers arrived for centuries. Check in to your hotel and take a walk along the Sisowath Quay riverfront before dinner — the point where the Mekong and the Tonle Sap River meet is the geographical and historical heart of the city, and it makes more sense when you can see it at water level."
    },
    experience: {
      title: "Sunrise floating market & border crossing",
      body: "Meals: Breakfast, Lunch | Style: Sunrise floating market, border crossing, Phnom Penh arrival by road or river."
    }
  },
  {
    key: "day-9",
    label: "Day 10",
    place: "Phnom Penh: History on the River",
    tagline: "Genocide Museum & Royal Palace",
    image: "/images/dest_cambodia.avif",
    info: "Overnight: Phnom Penh · Breakfast, Lunch",
    morning: {
      body: "Phnom Penh demands honesty. The city is beautiful — the French colonial riverfront, the gilded Royal Palace, the busy markets — and it carries a history of great violence that is still only fifty years old. A serious visit to the city cannot skip the Tuol Sleng Genocide Museum and the Killing Fields at Choeung Ek: both are difficult, both are essential, and your guide will accompany you through both with the context and the space they require."
    },
    afternoon: {
      body: "The afternoon offers the city's lighter register: the Royal Palace and the Silver Pagoda — a compound of gilded halls and ceremonial pavilions beside the river, still used for royal functions — and a walk through the Russian Market (Psar Toul Tom Poung) for a look at Phnom Penh's more textured street life. Dinner at a restaurant on the riverfront, where the Mekong and the Tonle Sap converge in front of you."
    },
    experience: {
      title: "Phnom Penh riverfront dinner",
      body: "Meals: Breakfast, Lunch | Style: Tuol Sleng, Choeung Ek, Royal Palace, Silver Pagoda, Russian Market, riverfront dinner."
    }
  },
  {
    key: "day-10",
    label: "Day 11",
    place: "Fly to Siem Reap · First Angkor Evening",
    tagline: "Flight to Siem Reap & Angkor Sunset",
    image: "/images/banner_2.avif",
    info: "Overnight: Siem Reap · Breakfast",
    morning: {
      body: "Short flight north to Siem Reap — under an hour — and transfer to your hotel. Check in and spend the afternoon resting or walking the Old Market area before the evening's main event: Angkor Wat at sunset."
    },
    afternoon: {
      body: "Most visitors see the temple at sunrise. The sunset approach is quieter, the light comes from a different angle, and the tour groups have largely moved on by late afternoon. Your private guide takes you around the outer gallery and into the central towers as the light changes — the bas-reliefs on the inner walls, which tell the stories of the Hindu epics and the Khmer king's military campaigns, are best seen in the low afternoon light that throws the carvings into sharp relief. Dinner in Siem Reap. The restaurant scene in the city is genuinely good — your guide will match the recommendation to your mood."
    },
    experience: {
      title: "Angkor Wat at sunset",
      body: "Meals: Breakfast | Flight: Phnom Penh → Siem Reap (included) | Style: Flight north, Siem Reap arrival, Angkor Wat at sunset."
    }
  },
  {
    key: "day-11",
    label: "Day 12",
    place: "Angkor: The Full Day",
    tagline: "Angkor Thom, Bayon & Ta Prohm",
    image: "/images/angkor_bayon_face.png",
    info: "Overnight: Siem Reap · Breakfast, Lunch",
    morning: {
      body: "A full day at the Angkor complex with your private guide — no group tour pace, no mandatory photo stops, no rushed itinerary. The day is organized around the temples that reward time rather than the ones that photograph best. Morning: Angkor Thom — the walled city built by Jayavarman VII in the late twelfth century, whose south gate, the Bayon temple, and the Baphuon represent the high point of Khmer architectural ambition. The Bayon's 54 towers, each carved with enormous four-faced Buddha images, make more sense when your guide explains the political theology behind them. Continue to the Terrace of the Elephants and the Terrace of the Leper King — less visited, more legible as pieces of a working royal city."
    },
    afternoon: {
      body: "Lunch at a garden restaurant outside the complex. Afternoon: Ta Prohm — the temple left partially unrestored, where the strangler figs have grown through the stone walls and the roots of silk-cotton trees hold entire galleries in their grip. It is the most photographed temple in the complex for good reason. Finish the day at Banteay Srei — a smaller temple 25 kilometers north of the main complex, built in pink sandstone and carved with a level of decorative detail that makes everything else at Angkor look restrained."
    },
    experience: {
      title: "Angkor Thom, Bayon, Ta Prohm, Banteay Srei",
      body: "Meals: Breakfast, Lunch | Style: Angkor Thom, Bayon, Ta Prohm, Banteay Srei — full private day."
    }
  },
  {
    key: "day-12",
    label: "Day 13",
    place: "Fly to Luang Prabang",
    tagline: "Siem Reap departure & flight to Laos",
    image: "/images/dest_laos.avif",
    info: "Overnight: Luang Prabang · Breakfast",
    morning: {
      body: "Morning at leisure in Siem Reap before the early afternoon flight to Luang Prabang. The journey — Siem Reap to Luang Prabang via a connection in Bangkok or Ho Chi Minh City — is the longest transit of the trip, and it delivers you into a place so different from anything that came before that the contrast works in the itinerary's favor."
    },
    afternoon: {
      body: "Arrive in Luang Prabang in the late afternoon and transfer to your hotel in the old town. Walk down to the Mekong before dusk: the same river that you crossed by speedboat eight days ago, that you watched at floating market at sunrise, and that you followed upstream through the delta. Here it is dark, narrow, and flanked by forested hills. It looks entirely different. It is the same river. Dinner on your own tonight — a quiet first evening in Laos."
    },
    experience: {
      title: "Luang Prabang arrival & Mekong reunion",
      body: "Meals: Breakfast | Flight: Siem Reap → Luang Prabang via connection (included) | Style: Siem Reap morning, long flight, Luang Prabang arrival, Mekong reunion."
    }
  },
  {
    key: "day-13",
    label: "Day 14",
    place: "Luang Prabang: Alms, Crafts & Temples",
    tagline: "Alms ceremony & Kuang Si waterfalls",
    image: "/images/luang_prabang_alms.png",
    info: "Overnight: Luang Prabang · Breakfast, Lunch",
    morning: {
      body: "An early start at 5:30am for the alms ceremony — the daily procession of monks through the old town that is one of the most quietly moving things you can witness in Southeast Asia when it is approached respectfully and without crowds. Your guide positions you well before it begins. After breakfast, the morning belongs to the city's craft and temple layers: a walk through the morning market on Kitsalat Road, a visit to Wat Xieng Thong — the finest temple in northern Laos, whose sweeping roof mosaic and gilded lacquer interiors represent the peak of the Luang Prabang style — and a stop at Ban Xang Khong village for a look at the mulberry-paper and silk-weaving workshops that still operate as working households along the Nam Khan River."
    },
    afternoon: {
      body: "Afternoon: Kuang Si Waterfall, thirty kilometers south of the city, where a series of turquoise terraced pools fed by a multi-tiered cascade sit inside a forested valley. Arrive in the late afternoon when most visitors have already left. Swim if you like. The drive back to the city at dusk, through rice fields and small villages with the hills dark behind them, is a good way to end the last full day on the ground."
    },
    experience: {
      title: "Alms ceremony & Kuang Si",
      body: "Meals: Breakfast, Lunch | Style: Alms ceremony, morning market, Wat Xieng Thong, craft village, Kuang Si."
    }
  },
  {
    key: "day-14",
    label: "Day 15",
    place: "Mekong Upstream · Golden Triangle · Departure",
    tagline: "Pak Ou Caves & Golden Triangle Finale",
    image: "/images/upper_mekong_boat.png",
    info: "Departure day · Breakfast, Lunch",
    morning: {
      body: "The final chapter. Board a private boat at the Luang Prabang pier after breakfast and head upstream on the Mekong — past the river villages, past the limestone ridges, past the morning fishermen checking their nets. Stop at the Pak Ou Caves at the confluence of the Mekong and the Nam Ou: two caverns filled with thousands of Buddha images accumulated over five centuries of offering."
    },
    afternoon: {
      body: "Continue upstream through the afternoon. The landscape becomes more remote as the boat moves north — fewer settlements, denser forest, the particular silence of a river that has not been managed or engineered. Arrive at the Golden Triangle in the late afternoon and stand at the confluence where Laos, Thailand, and Myanmar meet across the water. Your guide ends the journey here with a short reflection on the river: where it began in Tibet, where it ends in Vietnam, and the fourteen days of it you have just seen. Transfer to Chiang Rai for your departure flight, or overnight in the area if your schedule allows. Three countries. One river. Fifteen days. You've earned the view."
    },
    experience: {
      title: "Mekong upstream & Golden Triangle finale",
      body: "Meals: Breakfast, Lunch | Style: Mekong boat, Pak Ou Caves, Golden Triangle finale, Chiang Rai departure."
    }
  }
]

const INCLUSIONS = [
  "Private English-speaking guide throughout all 15 days (Vietnam, Cambodia, and Laos)",
  "Private air-conditioned vehicle for all land transfers",
  "Private boats for all river journeys (Mekong Delta Days 8–9; Luang Prabang Day 15)",
  "All domestic flights as listed: Hanoi → Da Nang, Da Nang → Ho Chi Minh City, Phnom Penh → Siem Reap, Siem Reap → Luang Prabang (economy class)",
  "14 nights boutique accommodation (heritage hotels, riverside lodges, and one Delta homestay)",
  "All meals as listed in the itinerary",
  "Welcome dinner in Hanoi · Farewell lunch on the Mekong",
  "Overnight traditional junk in Halong Bay (all meals, excursions, and kayaking included)",
  "2-day Angkor pass with private guide",
  "Tuol Sleng and Choeung Ek entrance and guided visits",
  "All entrance fees for all sites, temples, and museums throughout",
  "Cai Rang floating market boat excursion",
  "Private cooking class in Hoi An",
  "Cambodia border crossing assistance (Moc Bai/Bavet or Chau Doc/Phnom Penh river option)",
  "All water and refreshments on boat journeys",
  "24/7 in-country support throughout the journey"
]

const EXCLUSIONS = [
  "International flights to Hanoi and from Chiang Rai / Bangkok",
  "Vietnam, Cambodia, and Laos visas (e-visas available online; full instructions on booking)",
  "Travel insurance (required; available on request)",
  "Meals not specified in the itinerary",
  "Personal expenses, optional activities, and gratuities",
  "Any upgrades to business class on domestic flights"
]

const ACCOMMODATION_NOTES = [
  { night: "1–2", location: "Hanoi", style: "Boutique heritage hotel, Old or French Quarter" },
  { night: "3", location: "Halong Bay", style: "Traditional overnight junk" },
  { night: "4–5", location: "Hue", style: "Colonial boutique hotel, riverside" },
  { night: "6–7", location: "Hoi An", style: "Boutique hotel, near Ancient Town" },
  { night: "8", location: "Mekong Delta", style: "Riverside homestay or eco-lodge" },
  { night: "9–10", location: "Phnom Penh", style: "Boutique hotel, riverfront" },
  { night: "11–12", location: "Siem Reap", style: "Boutique hotel near Angkor" },
  { night: "13–14", location: "Luang Prabang", style: "Heritage guesthouse, old town peninsula" }
]

export function RiversOfIndochinaClient() {
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
          src="/images/indochina_rivers_hero.png" 
          alt="Rivers of Indochina" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-white/80 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            15 Days / 14 Nights · Three Countries · One Story · Private Journey
          </p>
          <h1 className={`text-5xl md:text-7xl font-serif text-white mb-6 leading-tight ${playfair.className}`}>
            Rivers of Indochina
          </h1>
          <p className="text-lg text-white/90 font-serif max-w-2xl mx-auto italic leading-relaxed">
            Hanoi → Halong Bay → Hue → Hoi An → Ho Chi Minh City → Mekong Delta → Phnom Penh → Siem Reap → Luang Prabang → Golden Triangle
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
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>The Waterways of Indochina</h2>
            <p className="font-serif text-navy/75 text-lg md:text-xl leading-[1.8] pt-2">
              Southeast Asia has three great rivers. The Red River shapes the north of Vietnam — its silt built the delta that Hanoi sits above. The Mekong divides Laos from Thailand, feeds Cambodia's great lake, and dissolves into the sea south of Saigon.
            </p>
            <p className="font-serif text-navy/70 text-base md:text-lg leading-[1.8]">
              Between them, the Thu Bon winds through the ancient town of Hoi An and the Perfume River drifts past the imperial tombs of Hue. This journey follows no single waterway — it follows the idea of rivers as the organizing force behind everything worth seeing in Indochina: the cities, the temples, the markets, the rice fields, and the cultures that grew up on the water's edge. Fifteen days. Three countries. One story that holds together.
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
          
          {/* Map Column (Sticky on Desktop, Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-5 lg:h-[80vh] lg:sticky lg:top-[140px] lg:border-r border-[#e0d9ce] z-10">
            <RiversOfIndochinaMap activeDay={activeDay} onDayChange={scrollToDay} />
          </div>

          {/* Timeline Scroll Column */}
          <div className="lg:col-span-7 px-6 lg:px-16 py-20 lg:py-28 lg:max-h-screen lg:overflow-y-auto" id="itinerary-scroll">
            <div className="max-w-2xl">
              <span className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">Day-by-Day Journey</span>
              <h2 className={`text-3xl md:text-4xl text-navy mb-16 ${playfair.className}`}>Rivers of Indochina</h2>

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

                    <div className="mb-6 relative aspect-[16/9] w-full overflow-hidden rounded-sm">
                      <Image 
                        src={day.image} 
                        alt={day.place} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

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
                All accommodation is selected for character, location, and quality of service. Upgrades to five-star properties in Hanoi, Hoi An, Phnom Penh, Siem Reap, and Luang Prabang are available on request.
              </p>
            </div>
          </div>

          {/* A Note on the Concept */}
          <div className="mt-16 bg-[#f7f4ef] p-8 lg:p-12 border border-[#e0d9ce] rounded-sm">
            <span className="text-[#8B4A2A] text-[10px] tracking-[0.2em] uppercase font-bold block mb-4">A Note on the Concept</span>
            <div className="font-serif text-navy/70 text-sm leading-relaxed space-y-4">
              <p>
                Most 15-day Indochina itineraries are designed around a list of highlights: Halong Bay, Angkor, Luang Prabang — the three anchors that every tour operator uses. This itinerary uses the same anchors but connects them with a single idea: rivers as the organizing logic of Indochina.
              </p>
              <p>
                Every major stop on this journey sits on a river or was built because of one. The Red River gave Hanoi its foundation. The Perfume River gave Hue its imperial mythology. The Thu Bon gave Hoi An its merchant prosperity. The Mekong gave Cambodia its rice, its lake, and eventually its border with Vietnam. And the upper Mekong gave Luang Prabang the contemplative isolation that made it the spiritual capital of Laos.
              </p>
              <p>
                When the journey ends at the Golden Triangle and the passenger looks out over the water, they are not just seeing a famous landmark. They are seeing the same river they stood beside in a floating market fourteen days ago, in a completely different form. That connection — between the beginning and the end, between the delta and the source, between Vietnam and Laos — is what makes this itinerary hold together as a single experience rather than three countries stitched together by flights.
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
            Reserve Your Indochina Passage
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Ready to experience the great rivers of Indochina? Tell us your preferred dates and group size, and we will customize this private journey for you.
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
