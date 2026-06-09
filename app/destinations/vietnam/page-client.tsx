"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp, Clock, Anchor } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const faqs = [
  {
    question: "When is the best time to visit the Mekong Delta?",
    answer: "November through April is the dry season — skies clear, canals run still, and the markets throng with life. Arrive just before Tết and you'll catch the delta in full celebration: flower boats, lantern-lit evenings, families cooking bánh tét through the night.",
  },
  {
    question: "What's the difference between a cruise and a private day tour?",
    answer: "A cruise puts you on the river overnight — mornings belong entirely to you, anchored somewhere quiet while the locals go about their day. A day tour is faster, sharper, more curated. We offer both, and most guests who try a cruise never go back to the day format.",
  },
  {
    question: "Do I need to book the floating market in advance?",
    answer: "Yes — and it matters more than people think. Cai Rang peaks between 6 and 8am. A private sampan with a guide who knows exactly where to anchor makes the difference between watching the market and being inside it.",
  },
  {
    question: "Is it safe to eat at riverside kitchens and family homes?",
    answer: "Absolutely, and honestly, it's one of the best meals you'll have. Our hosts have been welcoming guests for years. The food is fresh, cooked in front of you, and deeply local. We wouldn't send you anywhere we haven't eaten ourselves.",
  },
  {
    question: "What should I pack for a delta journey?",
    answer: "Light layers for the boat (mornings are cool, afternoons humid), comfortable walking shoes for village paths, and a small dry bag for your camera. Leave the rolling suitcase at the hotel — a soft bag fits better on the sampan.",
  },
]

const experiences = [
  {
    label: "River Culture",
    title: "Dawn on Cai Rang",
    body: "You hear it before you see it — the low chug of a diesel engine, a vendor calling across the water. By the time your sampan rounds the bend into Cai Rang at first light, fifty boats are already trading. Dragon fruit, pomelo, jackfruit, green bananas. Women in conical hats balance on the prow, paddling sideways through the traffic. A stick of the goods they're selling hangs from a bamboo pole so buyers can spot them from fifty meters away. There are no price tags. Every transaction is a conversation. You buy a bag of rambutan for a few thousand dong and eat them warm, watching the whole chaotic ballet from your boat as the sun climbs.",
    image: "/images/dest_vietnam.avif",
    tag: "5:45am · Cai Rang, Can Tho",
  },
  {
    label: "Hidden Waterways",
    title: "The Canals Nobody Talks About",
    body: "Every guidebook sends you to the same three waterways. We go somewhere else. On a three-plank sampan so narrow your knees almost touch the banks, your guide poles you into channels shaded completely by water coconut palms — a tunnel of green that filters the light into something quiet and cathedral-like. A farmhouse appears through the leaves. Someone waves from a hammock. Ducks scatter as you pass. There's no commentary, no schedule, no other boats. Just the sound of the pole entering the water and withdrawing, and the particular silence of a place where tourism hasn't quite arrived yet.",
    image: "/images/bentre_waterways.png",
    tag: "10:00am · Ben Tre waterways",
  },
  {
    label: "Living Heritage",
    title: "The Family Table",
    body: "Lunch doesn't happen at a restaurant. It happens in someone's home — a garden house built on stilts at the river's edge, where the kitchen smells of galangal and fish sauce and something sweet caramelizing in an earthen pot. The meal is set without a menu: cá kho tộ in a clay pot, canh chua bong súng, rau sống with a dozen dipping herbs, plain white rice and a clay pot of nuoc mam. You eat the way they eat — a little of everything, nothing wasted, conversation happening in two languages at once. By the time the fruit plate arrives — local longan, still warm from the tree — you realize you've been here two hours and nobody is in any hurry to leave.",
    image: "/images/floating-markets-v2.avif",
    tag: "12:30pm · A family home, Vinh Long",
  },
]

const itineraries = [
  {
    slug: "1-day",
    title: "1-Day Mindful Mekong",
    tagline: "One Day. No Agenda.",
    duration: "1 Day",
    route: "Saigon — Ben Tre Canals",
    desc: "A slow-paced, deeply connected private journey into the quiet heart of the delta's side canals, away from the tourist path.",
    image: "/images/1day_hero.avif",
    highlights: ["Private sampan boat", "Tea in a 73-year-old garden", "Simmered clay-pot lunch"],
  },
  {
    slug: "2-days",
    title: "2-Day River Pulse",
    tagline: "One Night Changes Everything",
    duration: "2 Days / 1 Night",
    route: "Saigon — Can Tho",
    desc: "Experience the true contrast of the delta: a peaceful night in a riverside garden homestay followed by the vibrant dawn market.",
    image: "/images/pulse_delta.avif",
    highlights: ["Cai Rang floating market", "Traditional live folk music", "Local farmhouse dinner"],
  },
  {
    slug: "mekong-delta",
    title: "3-4 Day Immersive Delta",
    tagline: "A Way of Living the Delta",
    duration: "3–4 Days",
    route: "Saigon — Vinh Long — Can Tho",
    desc: "An immersive journey built around local life: private group travel, farmhouse homestays, canal kayaking, and meals with multi-generational families.",
    image: "/images/dest_vietnam.avif",
    highlights: ["Farmhouse stays", "Canal kayaking", "Local cooking masterclass"],
  },
  {
    slug: "private-charter",
    title: "Private Mekong River Charter",
    tagline: "The Ultimate Sanctuary",
    duration: "Custom Days",
    route: "Fully Custom Routing",
    desc: "Absolute privacy and unscripted freedom. Claim an entire luxury vessel for your family or inner circle with a tailored itinerary and dedicated crew.",
    image: "/images/banner_3.avif",
    highlights: ["100% exclusive buyout", "Private executive chef", "Bespoke daily scheduling"],
  },
  {
    slug: "small-ship",
    title: "Small Ship Mekong Expedition",
    tagline: "The Hidden Tributaries",
    duration: "5 Days / 4 Nights",
    route: "Luang Prabang — Golden Triangle",
    desc: "Navigate the dramatic limestone gorges and remote upper reaches of the Mekong between Luang Prabang and Thailand on an intimate vessel.",
    image: "/images/dest_laos.avif",
    highlights: ["Upper Mekong gorges", "Pak Ou Buddha caves", "Golden Triangle convergence"],
  },
  {
    slug: "vietnam-cambodia",
    title: "Vietnam to Cambodia Pilgrimage",
    tagline: "Saigon to Angkor. The Long Way.",
    duration: "7–8 Days",
    route: "Saigon — Phnom Penh — Siem Reap",
    desc: "A comprehensive cross-border luxury pilgrimage connecting the vibrant Mekong Delta to the ancient stone spires of Angkor Wat.",
    image: "/images/vc_hero.avif",
    highlights: ["Cross-border passage", "Angkor Wat sunrise", "Private pilgrimage blessings"],
  }
]

const featuredShips = [
  {
    slug: "aqua-mekong",
    name: "Aqua Mekong",
    tagline: "Where the river meets the sky",
    image: "/images/aqua_mekong.avif",
    cabins: "20 Cabins",
    guests: "40 Guests",
    crew: "40 Crew",
    length: "62.4m",
    vibe: "Contemporary Glass Architecture & Michelin Gastronomy",
  },
  {
    slug: "mekong-jewel",
    name: "Mekong Jewel",
    tagline: "The newest ship on the oldest river",
    image: "/images/jewel_hero.avif",
    cabins: "34 Cabins",
    guests: "68 Guests",
    crew: "51 Crew",
    length: "80m",
    vibe: "Quiet Luxury & High Sustainability",
  },
  {
    slug: "jayavarman",
    name: "The Jayavarman",
    tagline: "Where teak meets twilight",
    image: "/images/jayavarman.avif",
    cabins: "27 Cabins",
    guests: "54 Guests",
    crew: "40 Crew",
    length: "57.8m",
    vibe: "French Colonial Charm & Khmer Soul",
  },
  {
    slug: "the-jahan",
    name: "The Jahan",
    tagline: "Mughal dreams on Mekong waters",
    image: "/images/the_jahan.avif",
    cabins: "26 Cabins",
    guests: "52 Guests",
    crew: "40 Crew",
    length: "70m",
    vibe: "Opulent Artistry & Romantic Verandas",
  },
  {
    slug: "victoria-mekong",
    name: "Victoria Mekong",
    tagline: "Clean lines, wide views",
    image: "/images/victoria_mekong.avif",
    cabins: "35 Cabins",
    guests: "70 Guests",
    crew: "45 Crew",
    length: "76.8m",
    vibe: "Green Eco-Cruising & Observation Pool",
  },
  {
    slug: "mekong-princess",
    name: "Mekong Princess",
    tagline: "Fourteen suites. No crowds.",
    image: "/images/princess_hero.avif",
    cabins: "14 Cabins",
    guests: "28 Guests",
    crew: "28 Crew",
    length: "61m",
    vibe: "Ultra-shallow Draft & Remote Tributaries",
  }
]

export default function VietnamClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── MAGAZINE HERO ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/dest_vietnam_hero.avif"
          alt="Mekong Delta at dawn, Vietnam"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />

        {/* Issue line */}
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 01 · Vietnam</span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">The Mekong Delta</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            Where the River<br />
            <em className="not-italic text-white/80">Does the Talking</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">
              Nine mouths, one river, ten thousand stories — the Mekong Delta is Vietnam at its most unguarded.
            </p>
            <Link
              href="/plan-your-journey"
              className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Plan This Journey <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OPENING DISPATCH ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from the Delta</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p>
            <span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">I</span>
            t was 5:40 in the morning when the boat left the dock at Can Tho. No coffee. No breakfast. Just the sound of the diesel engine settling into a low, confident rhythm and the river coming toward us out of the dark. By the time the sky turned pink at Cai Rang, we were already in the middle of it — fifty boats, a hundred women, a thousand kilos of tropical fruit moving on the water like a slow, colorful tide.
          </p>
          <p>
            The Mekong Delta doesn't ease you in. It just begins. One moment you're on a quiet, mist-covered river; the next you're watching a woman in a conical hat pole her sampan through a gap that doesn't seem wide enough — balancing a crate of dragon fruit with one hand, waving at a familiar buyer with the other. The transaction lasts four seconds. She's already moving.
          </p>
          <p>
            This is the delta's great gift: it shows you a world that has been running itself, quietly and confidently, for centuries. The floating markets, the canal-side kitchens, the farmhouses on stilts where dinner is whatever the garden and the river gave that morning — none of it is arranged for your benefit. You're simply allowed to be present. And that changes things.
          </p>
          <p>
            To travel the Vietnamese Mekong properly is to let go of the schedule. Leave the city at dawn, not because the itinerary says to, but because the river at 6am is one of the most alive places on earth. Eat when you're hungry — but only what's in season, only what the woman at the dock just sold you from her boat. Sleep somewhere the ceiling fan turns slowly and the sounds at night are frogs and water and something far away that might be music.
          </p>
          <p>
            It is, in the truest sense, a slow journey. Not slow in the sense of boring, but slow in the sense of <em>deliberate</em> — the kind of travel that asks you to pay attention, because the details here are extraordinary and they happen quickly and they do not repeat.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-navy py-20 px-8 text-center">
        <p className={`text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic`}>
          "The best meals in the delta happen at tables with no menu, in kitchens that open onto the river, served by people who have been cooking this way since before the roads arrived."
        </p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Vinh Long Province</p>
      </section>

      {/* ── THREE EXPERIENCES ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What a Day on the Delta Feels Like</h2>
          </div>

          <div className="space-y-32">
            {experiences.map((exp, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative aspect-[4/5] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={exp.image} alt={exp.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2">
                    <span className="text-white/80 text-[10px] tracking-[0.25em] uppercase font-bold">{exp.tag}</span>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">{exp.label}</p>
                  <h3 className={`text-3xl md:text-4xl text-navy mb-6 ${playfair.className}`}>{exp.title}</h3>
                  <p className="font-serif text-navy/70 text-lg leading-[1.8]">{exp.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED SECONDARY IMAGE ── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/images/dest_vietnam_hero.avif" alt="Vietnam Mekong River" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-4">The Detail That Stays With You</p>
            <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>
              "The sound of the pole going into still water, over and over, until it becomes a kind of meditation."
            </p>
          </div>
        </div>
      </section>

      {/* ── ITINERARIES SECTION ── */}
      <section className="py-24 bg-[#faf8f5] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              Explore the River
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl text-navy mb-8 ${playfair.className}`}>
              Curated Mekong Itineraries
            </h2>
            <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-navy/70 text-base md:text-lg leading-relaxed font-serif">
              From contemplative single-day driftings to epic cross-border pilgrimages, choose the journey that resonates with your pace.
            </p>
          </div>

          {/* Asymmetric / Creative Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {itineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className="group relative flex flex-col md:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-[40%] min-h-[220px] md:min-h-full overflow-hidden bg-navy/5 shrink-0">
                  <Image
                    src={itinerary.image}
                    alt={itinerary.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                    <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                      <Clock size={10} className="stroke-[#c9a962]" />
                      {itinerary.duration}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                        {itinerary.route}
                      </span>
                    </div>
                    <h3 className={`text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                      {itinerary.title}
                    </h3>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                      {itinerary.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {itinerary.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] tracking-[0.1em] uppercase font-semibold bg-[#f7f4ef] text-navy/75 border border-[#e0d9ce] px-2 py-0.5"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all">
                      <span>Explore Route</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SHIPS SECTION ── */}
      <section className="py-24 bg-[#ede9e2]/30 border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              The Vessels
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl text-navy mb-8 ${playfair.className}`}>
              Featured Boutique Fleet
            </h2>
            <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-navy/70 text-base md:text-lg leading-relaxed font-serif">
              Step aboard ships that redefine river travel. Architectural windows, local handcrafts, and an unhurried luxury designed to connect you deeply with the Mekong.
            </p>
          </div>

          {/* Grid Layout that rearranges beautifully */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredShips.map((ship) => (
              <Link
                key={ship.slug}
                href="/plan-your-journey"
                className="group flex flex-col bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
              >
                {/* Image Section */}
                <div className="relative h-[250px] overflow-hidden bg-navy/5">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Floating Specs */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                    <span className="text-[10px] tracking-[0.15em] uppercase font-bold flex items-center gap-1.5">
                      <Anchor size={11} className="stroke-white" />
                      {ship.cabins} / {ship.guests}
                    </span>
                    <span className="text-[9px] tracking-[0.1em] uppercase font-medium bg-[#c9a962] text-navy px-2 py-0.5">
                      {ship.length}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-2.5 ${playfair.className}`}>
                      {ship.name}
                    </h3>
                    <p className="text-[#8B4A2A] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                      {ship.tagline}
                    </p>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                      {ship.vibe}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all self-start mt-auto">
                    <span>Plan Your Journey</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICAL NOTES ── */}
      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">What You Need to Know</p>
              <h2 className={`text-4xl text-navy mb-10 ${playfair.className}`}>Before You Go</h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[
                  { label: "Best Season", value: "November – April" },
                  { label: "Entry", value: "30-day visa on arrival or e-visa available" },
                  { label: "Currency", value: "Vietnamese Đồng (VND)" },
                  { label: "Language", value: "Vietnamese · English widely spoken in tourism" },
                  { label: "Base City", value: "Ho Chi Minh City or Cần Thơ" },
                  { label: "Journey Length", value: "1 to 7 days, tailored to you" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-1">{item.label}</p>
                    <p className="font-serif text-navy/80">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f7f4ef] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Begin Your Delta Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
                  Every journey here starts with a single question: how much time do you have?
                </p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">
                  One day gives you a taste. Three days gives you a rhythm. Seven days gives you the feeling — the one that makes you understand why people who come here keep returning.
                </p>
              </div>
              <Link
                href="/plan-your-journey"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors duration-300 group"
              >
                <span>Plan This Journey</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 border-t border-[#e0d9ce]">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Questions & Answers</p>
        <h2 className={`text-4xl text-navy mb-12 ${playfair.className}`}>What Travelers Ask</h2>
        <div className="divide-y divide-[#e0d9ce]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left py-6 group"
              >
                <span className={`text-xl text-navy group-hover:text-[#8B4A2A] transition-colors pr-6 ${playfair.className}`}>
                  {faq.question}
                </span>
                <span className="text-navy/40 flex-shrink-0">
                  {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                <p className="font-serif text-navy/65 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
