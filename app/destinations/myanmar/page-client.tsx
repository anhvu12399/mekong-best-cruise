"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp, Clock, Anchor } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const faqs = [
  {
    question: "When is the best time to visit Bagan?",
    answer: "October to February. The air is cool enough to walk comfortably between temples, the light is extraordinary, and the balloon season is in full operation. Sunrise from a rooftop with a hundred temples in the foreground and a dozen balloons in the air above them is something you carry with you for the rest of your life.",
  },
  {
    question: "How do I reach Myanmar's Mekong stretches?",
    answer: "Myanmar's stretch of the upper Mekong (called the Thanlwin in some areas) is remote and reached by private vehicle or small boat from the Shan State. We arrange everything — transport, accommodation, guides with local knowledge, and permits where required.",
  },
  {
    question: "Is travel to Myanmar currently advisable?",
    answer: "The situation in Myanmar has evolved significantly in recent years. We monitor conditions closely and advise each guest individually based on their intended regions and current ground conditions. We do not operate in areas where safety cannot be guaranteed.",
  },
  {
    question: "What's the most memorable thing about Bagan specifically?",
    answer: "The scale. You can see two thousand temples from any rooftop. The landscape is unlike anywhere else on earth — this flat, ochre plain covered in ancient brick, with a river on one side and distant mountains on the other. No fences. No entrance queues. Just you and the archaeology.",
  },
]

const experiences = [
  {
    label: "Ancient Plains",
    title: "Bagan at First Light",
    body: "You climb to the top of a mid-sized temple before the tour groups arrive — before 6am, which means before almost everyone. From the top, the plains of Bagan spread in every direction: thousands of brick stupas and temples scattered across the flat earth like something a child built, then left. The sun comes over the horizon slowly, painting everything orange. A hot air balloon appears to the east, then three more. Nobody speaks. Somewhere below a bicycle bell rings. You count the temples until you lose track.",
    image: "/images/myanmar_exp_1.avif",
    tag: "5:45am · Bagan archaeological zone",
  },
  {
    label: "River People",
    title: "The Irrawaddy Boatmen",
    body: "The Irrawaddy — which joins the Mekong's greater watershed — runs through the center of Myanmar and has been its main artery for centuries. On the river between Mandalay and Bagan, the boat traffic tells you everything about the country: passenger ferries packed to the rails, log barges moving impossibly slow, fishing boats with lantern-lit decks at dusk. Your guide, who grew up on this stretch of river, tells you that his grandfather made this crossing every week for forty years and never stopped finding it beautiful. That feels right.",
    image: "/images/myanmar_exp_2.avif",
    tag: "All day · Irrawaddy River passage",
  },
  {
    label: "Temple Culture",
    title: "Inside Shwezigon",
    body: "Shwezigon Pagoda was built in the 11th century by King Anawrahta to enshrine a tooth relic of the Buddha. The gold leaf on its bell-shaped stupa is applied daily by devoted worshippers — men only, who press the thin squares onto the surface with their palms and then press their foreheads to the warm metal and stay very still for a moment. You stand at the edge of the inner courtyard, shoes in hand, watching this happen in the early morning with the smell of jasmine offerings in the air and the sound of monks chanting somewhere inside. It is not a museum. It is a living place of devotion.",
    image: "/images/myanmar_exp_3.avif",
    tag: "7:00am · Shwezigon Pagoda, Bagan",
  },
]

const itineraries = [
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
    slug: "anouvong",
    name: "Anouvong",
    tagline: "A king's river, sailed with a king's patience.",
    image: "/images/anouvong.avif",
    cabins: "14 Cabins",
    guests: "28 Guests",
    crew: "20 Crew",
    length: "45m",
    vibe: "Quiet Nobility & Fine Laotian Cuisine",
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
    slug: "boheme",
    name: "Bohème",
    tagline: "Inspiration arrives at water level.",
    image: "/images/boheme.avif",
    cabins: "12 Cabins",
    guests: "24 Guests",
    crew: "18 Crew",
    length: "40m",
    vibe: "Artistic Design & Curated Cultural Evenings",
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
]

export default function MyanmarClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── MAGAZINE HERO ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/dest_myanmar_hero.avif"
          alt="Bagan temples at sunset, Myanmar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/85" />

        {/* Issue line */}
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 04 · Myanmar</span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">The Golden Land</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            Two Thousand<br />
            <em className="not-italic text-white/80">Temples at Dawn</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">
              Myanmar's ancient plains hold the largest concentration of Buddhist temples on earth, and a river culture as old as civilization in this corner of the world.
            </p>
            <Link
              href="/plan-your-journey"
              className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Discuss This Journey <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OPENING DISPATCH ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from Bagan</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p>
            <span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">T</span>he plain of Bagan holds roughly two thousand temples and pagodas, built between the 9th and 13th centuries when this stretch of the Irrawaddy River was the capital of the first Burmese empire. Numbers don't quite prepare you for the sight of them — this vast, flat archaeological field where every ridge and rooftop offers a new angle on the same impossible scene, with the river glinting in the distance and the mountains of the Shan State behind.
          </p>
          <p>
            Myanmar occupies a difficult space in the world's consciousness right now, and any journey here requires thoughtful consideration. But for travelers who go with care and good guidance, what awaits is a culture of extraordinary depth — Buddhist traditions maintained with rigorous daily devotion, a river civilization that predates most of the modern world, and a people of remarkable warmth and resilience.
          </p>
          <p>
            The upper Mekong passes through Myanmar's Shan State in one of the river's most dramatic stretches, cutting through gorges and past villages that see few outside visitors. This is the Mekong before the dams, before the container ships, before the tourism — raw, powerful, and deeply beautiful. Getting here requires planning and the right relationships on the ground. We have both.
          </p>
          <p>
            Mandalay, the last royal capital, sits at the bend of the Irrawaddy — a city of temples and teak workshops and markets where you can buy jade from Myanmar's northern mines by the handful. The famous U Bein Bridge, a mile-long teak structure built in 1850, crosses the Taungthaman Lake at the edge of the city. At sunset, with monks and cyclists and couples crossing it in the orange light, it photographs like a dream and feels, in person, even better.
          </p>
          <p>
            To travel in Myanmar is to move through a country in conversation with itself — ancient and contemporary, devastating and beautiful, guarded and astonishingly generous, all at once. There is no simple way to understand it. You simply have to go and stay for long enough to feel the complexity.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-navy py-20 px-8 text-center">
        <p className={`text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic`}>
          "Stand anywhere in Bagan at sunrise and you'll understand why empires choose certain pieces of land. This one was chosen for good reason."
        </p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Bagan</p>
      </section>

      {/* ── THREE EXPERIENCES ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What Myanmar Feels Like</h2>
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
        <Image src="/images/dest_myanmar.avif" alt="Myanmar Temples" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-4">The Detail That Stays With You</p>
            <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>
              "A civilization buried in the earth and rising from it at the same time — Bagan refuses to be in the past."
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
              Extend your regional explorations or embark on bespoke private charters connecting to the borderlands.
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
              Step aboard ships that redefine river travel. Discover premium luxury vessels offering regional extensions and custom cruising options.
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
                  { label: "Best Season", value: "October – February" },
                  { label: "Entry", value: "Tourist e-visa required" },
                  { label: "Currency", value: "Myanmar Kyat (MMK)" },
                  { label: "Language", value: "Burmese · English in tourism" },
                  { label: "Key Destinations", value: "Bagan, Mandalay, Inle Lake" },
                  { label: "Journey Length", value: "5 to 10 days recommended" },
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
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your Myanmar Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
                  Ancient plains, river passages, and the temples that outlasted everything.
                </p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">
                  Myanmar requires careful, expert planning. We work with local partners who have operated here for decades and know which communities welcome visitors, which routes are worth the journey, and how to travel with genuine respect for the culture.
                </p>
              </div>
              <Link
                href="/plan-your-journey"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors duration-300 group"
              >
                <span>Discuss This Journey</span>
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
