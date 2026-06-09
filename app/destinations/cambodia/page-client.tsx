"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp, Clock, Anchor } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const faqs = [
  {
    question: "Do I need a visa to enter Cambodia?",
    answer: "Most nationalities can obtain a tourist e-visa online in advance for around $30 USD. It's valid for 30 days. We handle all the details and can arrange seamless border crossings if you're combining Vietnam and Cambodia on a river journey.",
  },
  {
    question: "When is the best time to visit Angkor Wat?",
    answer: "November to February offers the coolest temperatures. Arrive before 6am to watch sunrise — it's one of the most beautiful things you'll ever see. We arrange private entry and a guide who knows where the other tourists aren't.",
  },
  {
    question: "Can I combine a Cambodia river cruise with a land journey?",
    answer: "Yes — it's the most complete way to experience it. Sail from Ho Chi Minh City up the Mekong to Phnom Penh, then continue to Siem Reap and Angkor. Seven or eight days covers the full arc beautifully.",
  },
  {
    question: "What is the Tonlé Sap and why does it matter?",
    answer: "The Tonlé Sap is the largest freshwater lake in Southeast Asia. What makes it remarkable is that it reverses direction twice a year, filling to six times its dry-season size during monsoon. The floating villages on its shores are among the most extraordinary places you can visit.",
  },
]

const experiences = [
  {
    label: "Ancient Kingdoms",
    title: "Angkor Before the Crowds",
    body: "Your guide meets you at 4:45am. The tuk-tuk moves through empty streets. By the time you reach the outer wall of Angkor Wat, the sky is a deep purple-blue and there are perhaps thirty people in the entire complex. The towers emerge slowly from the night — massive, inevitable — as if the sky is being pushed back to reveal them. When the first line of orange appears, it doesn't feel like a tourist attraction. It feels like an event. Like something that has been happening every morning for nine hundred years, with or without an audience.",
    image: "/images/angkor_bayon_face.png",
    tag: "5:15am · Angkor Wat, Siem Reap",
  },
  {
    label: "River Capital",
    title: "Phnom Penh at the Confluence",
    body: "There is a spot in Phnom Penh called the Chaktomuk — the 'four faces' — where the Mekong, the Tonlé Sap, and the Bassac rivers meet. Sitting on a riverside terrace at dusk, watching the water turn gold, you understand why the Khmer kings chose this place. The city feels different at the waterfront. Lighter. More open. Later, you walk the promenade past families sharing takeaway noodles on the low wall, past old men playing chess on folding stools. The city doesn't perform for visitors here. It just lives.",
    image: "/images/cambodia_exp_2.avif",
    tag: "6:00pm · Riverside, Phnom Penh",
  },
  {
    label: "Floating Communities",
    title: "Life on the Tonlé Sap",
    body: "The village appears as a smudge on the water — then gradually resolves into houses, boats, a school, a floating basketball court. You board a narrow wooden boat and your guide poles you through channels between the buildings. A woman in a doorway is braiding her daughter's hair. Three boys fish off the back porch without looking at their lines. Everything is built to float and built to last — the same structures, the same families, the same routines that have continued here through floods and droughts and the upheavals of history.",
    image: "/images/cambodia_exp_3.avif",
    tag: "10:30am · Kompong Khleang, Tonlé Sap",
  },
]

const itineraries = [
  {
    slug: "vietnam-cambodia",
    title: "Vietnam to Cambodia Pilgrimage",
    tagline: "Saigon to Angkor. The Long Way.",
    duration: "7–8 Days",
    route: "Saigon — Phnom Penh — Siem Reap",
    desc: "A comprehensive cross-border luxury pilgrimage connecting the vibrant Mekong Delta to the ancient stone spires of Angkor Wat.",
    image: "/images/vc_hero.avif",
    highlights: ["Cross-border passage", "Angkor Wat sunrise", "Private pilgrimage blessings"],
  },
  {
    slug: "rivers-of-indochina",
    title: "Rivers of Indochina",
    tagline: "Fifteen Days. Three Countries. One Story.",
    duration: "15 Days / 14 Nights",
    route: "Hanoi — Saigon — Phnom Penh — Siem Reap — Luang Prabang",
    desc: "A magnificent 15-day grand cross-border private pilgrimage tracing the Red River, the Perfume River, the Thu Bon, and the Mekong through Vietnam, Cambodia, and Laos.",
    image: "/images/indochina_rivers_hero.png",
    highlights: ["Halong Bay overnight junk", "Angkor Wat 2-day pass", "Mekong cross-border speedboat"],
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
    slug: "full-mekong-story",
    title: "The Full Mekong Story",
    tagline: "Ten Days. Two Countries. One River.",
    duration: "10 Days / 9 Nights",
    route: "Ho Chi Minh City — Golden Triangle",
    desc: "A grand 10-day private journey tracing the Mekong from the flat green delta of Vietnam to the mountainous borderlands of Laos and the Golden Triangle.",
    image: "/images/full_mekong_hero.png",
    highlights: ["Mekong Delta backwaters", "Luang Prabang alms dawn", "Golden Triangle confluence"],
  },
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
    slug: "mekong-princess",
    name: "Mekong Princess",
    tagline: "Fourteen suites. No crowds.",
    image: "/images/princess_hero.avif",
    cabins: "14 Cabins",
    guests: "28 Guests",
    crew: "28 Crew",
    length: "61m",
    vibe: "Ultra-shallow Draft & Remote Tributaries",
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
]

export default function CambodiaClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── MAGAZINE HERO ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/dest_cambodia_hero.avif"
          alt="Angkor Wat at sunrise, Cambodia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/80" />

        {/* Issue line */}
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 02 · Cambodia</span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">The Kingdom of Wonder</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            Stone Temples,<br />
            <em className="not-italic text-white/80">Living Waters</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">
              The Khmer Empire left behind the greatest monuments on earth. The Mekong left behind the people who live on it.
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
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from the Kingdom</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p>
            <span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">T</span>here's a particular quality to the light at Angkor in the early morning — a diffuse, rose-gold softness that makes the stone look warm, almost alive. The towers of Angkor Wat rise from the mist and the reflecting pools in a way that resists every photograph you've ever seen of them, because what the photograph can't capture is the scale. The sheer mass. The sense that something enormous was built here, over many generations, by a civilization that understood it would outlast them — and built accordingly.
          </p>
          <p>
            Cambodia is a country that carries its history in two directions simultaneously: the ancient, golden arc of the Khmer Empire, stretching across five centuries of artistic achievement; and the recent, painful decades that ended only in 1979. Both are present. Both inform everything. The temples at Angkor, the floating villages on the Tonlé Sap, the vibrant chaos of Phnom Penh's riverside — they all exist in that conversation between what was and what is being carefully, quietly rebuilt.
          </p>
          <p>
            What strikes most travelers who come here with an open itinerary and good guidance is the warmth. Cambodia has been through extraordinary loss — a third of its population within a single decade — and what has come out the other side is a culture that greets visitors with a gentleness and genuine curiosity that feels remarkable, given everything. The people here haven't forgotten. They've simply chosen, collectively and without announcement, to be generous anyway.
          </p>
          <p>
            The Mekong through Cambodia runs wide and brown and powerful. The river traffic here is different from Vietnam — fewer sampans, more cargo, the occasional passenger ferry crossing heavy in the water. But the communities along its banks are equally alive, equally rooted in the rhythms of the river. Arrive in flood season and entire villages are accessible only by boat. The roads are underwater. The life continues.
          </p>
          <p>
            To sail Cambodia's stretch of the Mekong is to understand that the river doesn't care about borders. It simply continues — wide, unhurried, magnificent — feeding the lake, feeding the fields, feeding the families that have lived on it for generations beyond counting.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-navy py-20 px-8 text-center">
        <p className={`text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic`}>
          "The light at Angkor at 5:30 in the morning will do something to you. We can't explain what, exactly. You'll have to go and find out."
        </p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Siem Reap</p>
      </section>

      {/* ── THREE EXPERIENCES ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What Cambodia Feels Like</h2>
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
        <Image src="/images/dest_cambodia.avif" alt="Cambodia Mekong" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-4">The Detail That Stays With You</p>
            <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>
              "A country defined by what it lost — and quietly astonishing in what it kept."
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
              Explore ancient temple ruins and cross borders on these hand-crafted private journeys.
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
              Step aboard ships that redefine river travel. Architectural windows, local handcrafts, and an unhurried luxury designed to connect you deeply with Cambodia's waterways.
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
                  { label: "Best Season", value: "November – February" },
                  { label: "Entry", value: "E-visa online, ~$30 USD" },
                  { label: "Currency", value: "US Dollar & Cambodian Riel" },
                  { label: "Language", value: "Khmer · English widely spoken" },
                  { label: "Base Cities", value: "Phnom Penh & Siem Reap" },
                  { label: "Journey Length", value: "3 to 8 days recommended" },
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
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your Cambodia Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
                  Temples, river, and the people who make it real.
                </p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">
                  Our Cambodia journeys move between Angkor's ancient grandeur, the Mekong's living culture, and the Tonlé Sap's extraordinary floating communities. We design each itinerary from scratch around what you want to feel, not just what you want to see.
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
