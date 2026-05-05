"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Clock, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { MekongDeltaMap } from "@/components/mekong-delta-map"

const NAV_ITEMS = ["Overview", "Itinerary", "Experiences", "Essentials"]

const HIGHLIGHTS = [
  "Canal kayaking at dawn — no crowds, no commentary, just water and silence",
  "Cook bánh xèo and bánh mì from scratch in a family kitchen",
  "Sleep in farmhouse homestays with lanterns, hammocks, and Don Ca Tai Tu at night",
  "Visit a fish farm exporting catfish to American supermarkets — hear the full story",
  "Wander a rural market where everything is grown within 5 miles",
  "Sit with a fisherman as he explains a lifetime on the Mekong — in both languages",
]

const WHY_ITEMS = [
  { icon: "🗺️", title: "Private groups only", desc: "Maximum 6–10 guests. A 7-seat van, a bilingual guide, and no 45-seat buses." },
  { icon: "🏡", title: "Farmhouse stays", desc: "Clean beds, real wifi — but mosquito nets, open-air dining, and stars overhead." },
  { icon: "🍳", title: "Hands-on, always", desc: "Every day includes making something: candy, bread, pancakes, fishing nets." },
  { icon: "⏱️", title: "Slow by design", desc: "Empty time is built in. Sit. Photograph. Talk. Drink sugarcane juice and do nothing." },
]

// Map stops: [x%, y%] relative to the SVG viewBox
const MAP_STOPS = [
  { label: "Ho Chi Minh City", x: 72, y: 62 },
  { label: "Bến Tre / Vĩnh Long", x: 62, y: 72 },
  { label: "Cần Thơ", x: 55, y: 78 },
  { label: "Return", x: 72, y: 62 },
]

const DAYS = [
  {
    key: "day1",
    label: "Day 1",
    place: "Ho Chi Minh City → Mekong Delta",
    tagline: "Leave the city behind. The river is waiting.",
    image: "/images/dest_vietnam.avif",
    morning: {
      title: "Departure — the long, beautiful way",
      body: "Your private van leaves HCMC early, taking the scenic route: past rice paddies, roadside tea stalls, and weather-worn petrol stations that look like nothing has changed since 1975. Your guide stops wherever you want — for photos, for a glass of iced coffee, for nothing at all.",
    },
    afternoon: {
      title: "Into the canals nobody visits",
      body: "A narrow wooden boat takes you into waterways that don't appear on tourist maps — quiet channels in Bến Tre, Vĩnh Long, or Cái Bè's rural backwaters. You stop at a craft village: coconut candy, woven mats, or basketry. You don't just watch — you make something and take it home.",
    },
    evening: {
      title: "Farmhouse arrival",
      body: "Your homestay for the night is a working garden house: teak furniture, paper lanterns, a hammock between two trees. After dinner with your hosts — family recipes, served family-style — someone tunes a đàn kìm and the evening becomes something you didn't plan for.",
    },
  },
  {
    key: "day2",
    label: "Day 2",
    place: "Delta Waterways",
    tagline: "No floating market. No loudspeaker. Just the river.",
    image: "/images/about-mekong-bg.avif",
    morning: {
      title: "Paddle your own channel",
      body: "A kayak or hand-rowed sampan. A canal so narrow the paddle brushes the bank. Dew still on the leaves. You stop at a fruit orchard — mango, longan, custard apple — and the farmer picks directly into your hands while explaining how each tree is watered, fed, and harvested.",
    },
    afternoon: {
      title: "A Vietnamese kitchen — your kitchen for the afternoon",
      body: "Inside a family home, you learn bánh xèo (the sizzling crêpe) or bánh mì with housemade pâté. The recipe is written nowhere — it lives in the cook's hands. You bring it home in yours. Optional: visit a village school for an informal English conversation session arranged in advance.",
    },
    evening: {
      title: "Second night — a different garden",
      body: "Tonight you switch to a coconut grove homestay or a fruit-orchard farmhouse — same calm, different flavor. Dinner is farm-to-table in the truest sense: cá nướng lá sen, bún cá, rau sống, mắm me. No menu. You eat what the river and garden gave today.",
    },
  },
  {
    key: "day3",
    label: "Day 3",
    place: "Deep Delta",
    tagline: "This is how people actually live here.",
    image: "/images/banner_4.avif",
    morning: {
      title: "The farm before breakfast",
      body: "Collect eggs. Feed the ducks. Walk through a catfish pond raised for export to the United States — your guide translates everything the farmer says about quotas, water quality, and what American consumers never think about when they order fish. It's unexpectedly fascinating.",
    },
    afternoon: {
      title: "The fisherman's afternoon",
      body: "You sit on a small ghe with a fisherman who has worked this stretch of river his whole life. He talks — about tides, about the river changing, about what his children want to do instead. You can try throwing a cast net. You probably won't catch anything. You'll try again anyway.",
    },
    evening: {
      title: "Dinner with folk music",
      body: "A small private performance: đờn ca tài tử, the UNESCO-recognized improvisational music of the delta. Your guide explains each instrument. If you want to try the đàn tranh, the đàn môi, or the cồng — someone will teach you three notes and encourage the rest.",
    },
  },
  {
    key: "day4",
    label: "Day 4",
    place: "Return — unhurried",
    tagline: "One last market. One last bowl. Then back.",
    image: "/images/banner_2.avif",
    optional: true,
    morning: {
      title: "A rural market — the real kind",
      body: "Not Ben Thanh. A village market where everything arrived this morning by motorbike or boat. Ripe mangos, hand-rolled rice paper, homemade mắm, dried shrimp in newspaper cones. You buy what fits in your bag. Your guide knows every vendor.",
    },
    afternoon: {
      title: "The last meal, done right",
      body: "A Vietnamese lunch the way Vietnamese people eat it: one soup, two or three mặn dishes, plain white rice, fish sauce, chilli paste. No tourist menu. A table with local workers who nod at you like you've been eating here for years. Then the van takes you back — slowly, no rush.",
    },
    evening: {
      title: "Arrive home different",
      body: "You're dropped at your hotel in HCMC or Cần Thơ. No shopping stops. No forced souvenir market. Just a clean handoff and the private knowledge that you've seen a version of the Mekong that most visitors never reach.",
    },
  },
]

export function MekongDeltaClient() {
  const [activeNav, setActiveNav] = useState("Overview")
  const [activeDay, setActiveDay] = useState(0)
  const overviewRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const essentialsRef = useRef<HTMLDivElement>(null)

  const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
    Overview: overviewRef,
    Itinerary: itineraryRef,
    Experiences: experiencesRef,
    Essentials: essentialsRef,
  }

  const scrollTo = (label: string) => {
    setActiveNav(label)
    refMap[label]?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <Image src="/images/about-mekong-bg.avif" alt="Mekong Delta" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-28">
          <p className="text-gold text-[11px] tracking-[0.35em] uppercase font-bold mb-5">Tailormade Journeys · Mekong Delta</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.05] mb-8 max-w-5xl">
            Mekong<br />
            <em className="not-italic text-gold">By Locals</em>
          </h1>
          <p className="text-white/75 text-lg md:text-xl font-serif max-w-2xl leading-relaxed mb-10">
            Not a tour. A way of living the delta — for 3 or 4 days. 
            Private groups, family kitchens, canal kayaking, and nights that end with folk music under the stars.
          </p>
          <div className="flex flex-wrap items-center gap-8 text-white/60 text-xs tracking-[0.2em] uppercase font-bold">
            <span className="flex items-center gap-2"><Clock size={14} className="text-gold" /> 3 Nights / 4 Days</span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2"><Users size={14} className="text-gold" /> Max 10 Guests</span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> HCMC or Cần Thơ</span>
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <div className="sticky top-0 z-30 bg-[#ede9e2]/95 backdrop-blur-sm border-b border-[#d6cfc3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-10 h-14 overflow-x-auto scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors pb-0.5 ${
                  activeNav === item
                    ? "text-[#8B4A2A] border-b-2 border-[#8B4A2A]"
                    : "text-navy/50 hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <div ref={overviewRef} className="scroll-mt-14" />
      <section className="py-24 lg:py-32 bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* left prose */}
          <div className="lg:col-span-7">
            <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">The Experience</p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-navy leading-relaxed mb-10">
              "Most visitors to the Mekong see it. We designed this journey so you'd actually feel it — in your hands, your stomach, and the back of a slow wooden boat."
            </p>
            <div className="w-14 h-0.5 bg-[#c9a962] mb-10" />
            <div className="space-y-5 text-navy/65 font-serif text-lg leading-relaxed">
              <p>
                This is a private journey for people who've been to enough countries to know the difference between a guided tour and a genuine encounter. Maximum ten guests. A bilingual guide who grew up in the delta. A seven-seat van that takes the roads nobody else takes.
              </p>
              <p>
                You stay in farmhouses, not hotels. You eat with families, not at restaurants designed for foreigners. And every afternoon involves making something with your hands — because the best way to understand a culture is to try to replicate it, fail slightly, and laugh about it with the person teaching you.
              </p>
            </div>
          </div>

          {/* right highlights */}
          <div className="lg:col-span-5">
            <div className="bg-white p-10 lg:p-12 shadow-sm border border-[#e0d9ce]">
              <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-8">Highlights</p>
              <ul className="space-y-5">
                {HIGHLIGHTS.map((h, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#8B4A2A] mt-1 flex-shrink-0">✦</span>
                    <span className="text-navy/75 font-serif leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS JOURNEY ── */}
      <section className="py-20 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-[11px] tracking-[0.3em] uppercase font-bold text-navy/40 mb-16">Why Choose This Journey</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY ── */}
      <div ref={itineraryRef} className="scroll-mt-14" />
      <section className="bg-[#f7f4ef] border-t border-[#e0d9ce]">
        {/* Header above split */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Your Itinerary</p>
            <h2 className="font-serif text-4xl md:text-6xl text-navy">Day-by-Day</h2>
            <p className="text-navy/50 mt-4 font-serif text-lg">Our experts designed this to inspire you — then adjust it entirely to suit you.</p>
          </div>
        </div>

        {/* A&K-style sticky map + scrollable itinerary split */}
        <div className="flex h-[85vh] border-t border-[#e0d9ce] overflow-hidden">
          {/* LEFT: Sticky Map (65%) */}
          <div className="hidden lg:block w-[62%] sticky top-14 h-[85vh] flex-shrink-0">
            <MekongDeltaMap activeDay={activeDay} onDayChange={setActiveDay} />
          </div>

          {/* RIGHT: Scrollable day list */}
          <div className="w-full lg:w-[38%] h-full overflow-y-auto bg-[#faf8f5] border-l border-[#e0d9ce]">
            {/* Day tabs */}
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

            {/* Day content */}
            {DAYS.map((day, i) => (
              <div key={day.key} className={activeDay === i ? 'block' : 'hidden'}>
                {/* Location badge — A&K style */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-[#e0d9ce]">
                  <span className="w-2 h-2 rounded-full bg-[#8B4A2A]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8B4A2A]">{day.place}</span>
                </div>

                {/* Day image */}
                <div className="relative aspect-[16/9] w-full">
                  <Image src={day.image} alt={day.place} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-white/80 text-xs font-serif italic">{day.tagline}</p>
                  </div>
                </div>

                {/* Segments */}
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

                {/* Prev / Next */}
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



      {/* ── FEATURED CRUISES ── */}
      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-4">Continue by River</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Ships for This Journey</h2>
            <p className="text-navy/55 font-serif max-w-xl mx-auto">Extend your delta experience aboard one of these vessels — each chosen for their intimate scale and deep connection to the Vietnamese Mekong.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Mekong Princess', type: 'Romantic Boutique', tagline: 'The river\'s most intimate address.', desc: 'Fourteen cabins. The crew knows your coffee order by morning two.', image: '/images/mekong_princess.png', guests: 28, cabins: 14 },
              { name: 'Lan Diep', type: 'Traditional Sampan', tagline: 'Eight cabins. The whole delta to yourselves.', desc: 'A traditional Vietnamese sampan into channels that appear on no tourist map.', image: '/images/lan_diep.png', guests: 16, cabins: 8 },
              { name: 'Victoria Mekong', type: 'Cultural Immersion', tagline: 'If you travel to be changed — this is your ship.', desc: 'Markets at dawn. Cooking classes. The best sunset seat on the delta.', image: '/images/victoria_mekong.avif', guests: 36, cabins: 18 },
            ].map(ship => (
              <div key={ship.name} className="group border border-[#e0d9ce] overflow-hidden bg-[#f7f4ef]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={ship.image} alt={ship.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw"/>
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
          <div className="text-center">
            <a href="/cruises/vietnam" className="inline-flex items-center gap-3 px-8 py-3 border border-navy text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-navy hover:text-white transition-all duration-300">
              View All Vietnam Cruises <ArrowRight size={14}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <div ref={experiencesRef} className="scroll-mt-14" />
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold mb-4">Hands-On Experiences</p>
            <h2 className="font-serif text-4xl md:text-6xl">What You'll Actually Do</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🛶", title: "Dawn canal kayaking", body: "A kayak, a narrow channel, no noise. The water is still. The light is gold. You set the pace." },
              { emoji: "🍳", title: "Vietnamese kitchen class", body: "Bánh xèo, bánh mì with pâté, bánh khọt — real recipes, a real kitchen, real feedback from the cook." },
              { emoji: "🎵", title: "Don Ca Tai Tu, live", body: "UNESCO folk music performed privately after dinner. You can try the instruments. Most guests do." },
              { emoji: "🌾", title: "Farm morning", body: "Collect eggs. Feed animals. Learn why a catfish pond that supplies American grocery chains is actually a fascinating story." },
              { emoji: "🎣", title: "Cast a net", body: "A real fishing net, not a prop. A real fisherman teaching you. You probably won't catch much. That's fine." },
              { emoji: "🛒", title: "Rural market wandering", body: "A village market where everything arrived this morning. Buy what you want. Your guide explains everything." },
            ].map((exp) => (
              <div key={exp.title} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-5">{exp.emoji}</div>
                <h3 className="font-serif text-xl text-white mb-3">{exp.title}</h3>
                <p className="text-white/60 text-sm font-serif leading-relaxed">{exp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESSENTIALS ── */}
      <div ref={essentialsRef} className="scroll-mt-14" />
      <section className="py-24 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#8B4A2A] mb-6">Essential Information</p>
              <h2 className="font-serif text-4xl text-navy mb-12">The Details</h2>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
                {[
                  { label: "Duration", value: "3 Nights / 4 Days — or 2 Nights / 3 Days" },
                  { label: "Group size", value: "Maximum 10 guests. Private groups only." },
                  { label: "Transport", value: "Private 7–9 seat van. No shared coaches." },
                  { label: "Guide", value: "Bilingual (English–Vietnamese) local guide, born in the delta." },
                  { label: "Departure", value: "Ho Chi Minh City or Cần Thơ — your choice." },
                  { label: "Best season", value: "September – April (dry season, clearest canals)." },
                ].map((info) => (
                  <div key={info.label}>
                    <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-2">{info.label}</p>
                    <p className="text-navy/75 font-serif">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy text-white p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-gold mb-6">Tailor This Journey</p>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
                  "This itinerary is a starting point. Every detail can be adapted — the pace, the homestays, the experiences — to exactly how you want to travel."
                </p>
                <ul className="space-y-3 text-white/65 text-sm font-serif mb-12">
                  <li>✦ Add a pre-tour night in HCMC with a private dinner</li>
                  <li>✦ Extend to 5 days with a Cần Thơ floating market morning</li>
                  <li>✦ Swap one homestay for a boutique river lodge</li>
                  <li>✦ Add a private cooking class with a professional chef</li>
                </ul>
              </div>
              <a
                href="https://www.toursmekong.com/tailor-made-tours/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 group"
              >
                <span>Request Availability</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
