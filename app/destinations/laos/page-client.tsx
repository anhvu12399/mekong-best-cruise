"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp, Clock, Anchor } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const faqs = [
  {
    question: "What makes Luang Prabang so special?",
    answer: "It's a UNESCO World Heritage town where French colonial architecture meets golden Buddhist temples, surrounded by mountains and the confluence of the Mekong and Nam Khan rivers. The alms-giving ceremony at dawn — monks in saffron receiving offerings from kneeling townspeople — is one of the most quietly affecting things you'll experience anywhere.",
  },
  {
    question: "Is Laos a good destination for slow travel?",
    answer: "It's arguably the finest slow-travel destination in Southeast Asia. The infrastructure is intentionally unhurried. Life moves at the pace of the river. For travelers burned out by the efficiency of modernity, Laos provides something rare: genuine stillness.",
  },
  {
    question: "How do I reach Luang Prabang by river?",
    answer: "The classic route is the Slow Boat from the Thailand border at Huay Xai, a two-day journey through the upper Mekong's limestone gorges. It's one of the great river journeys in Asia, and we can arrange private or boutique cabin options far removed from the backpacker experience.",
  },
  {
    question: "What should I know about visiting temples in Laos?",
    answer: "Dress conservatively — shoulders and knees covered. Remove shoes at the entrance. Don't photograph monks without asking first, and during the dawn alms ceremony, observe from a respectful distance without flash photography. The morning ritual is not a tourist attraction; it is a living practice.",
  },
]

const experiences = [
  {
    label: "Sacred Dawn",
    title: "The Alms Walk",
    body: "You wake at 5am in Luang Prabang without an alarm — the temple bells do that for you. Out on the street in the blue pre-dawn dark, barefoot monks in saffron move silently in single file, lacquered alms bowls open. Townspeople kneel at low tables, pressing balls of sticky rice into each bowl as it passes. The whole thing takes perhaps twenty minutes. Nobody speaks. When it's over, the monks dissolve back into their wats and the street goes quiet again. You walk back to the hotel through the empty morning not quite sure what you just witnessed, but certain it mattered.",
    image: "/images/luang_prabang_alms.png",
    tag: "5:30am · Main Street, Luang Prabang",
  },
  {
    label: "River Passage",
    title: "The Mekong's Limestone Corridor",
    body: "The upper Mekong between Thailand and Luang Prabang passes through country that makes you put your book down. Karst cliffs rise straight from the water. Villages appear on the bank — a cluster of teak houses, a dock, a dog watching the boat pass — then disappear behind a bend. The Pak Ou caves appear on the cliff face: two chambers filled with hundreds of wooden Buddha images left by pilgrims over centuries. You climb the stone steps, step into the cool interior, and stand very still for a moment. The river waits for you.",
    image: "/images/laos_exp_2.avif",
    tag: "All day · Upper Mekong River",
  },
  {
    label: "Living Craft",
    title: "The Weaving Villages",
    body: "Ban Phanom sits three kilometers from Luang Prabang and has been weaving silk and cotton on hand looms for generations. In the early morning, you walk the village and the sound is unmistakable — the clack and thump of the loom, irregular but constant, coming from every second house. A weaver in her sixties shows you how the pattern is built, thread by thread, from memory. She doesn't need a chart. She learned this when she was eight and hasn't forgotten a single row since. The silk she's working will become a sinh — the traditional tubular skirt worn by Lao women — and it will take another three weeks. You buy a scarf that took three days. It seems inadequate.",
    image: "/images/laos_exp_3.avif",
    tag: "9:00am · Ban Phanom village",
  },
]

const itineraries = [
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
]

const featuredShips = [
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
    slug: "mekong-pearl",
    name: "Mekong Pearl",
    tagline: "The river reveals itself to those who slow down.",
    image: "/images/mekong_pearl.avif",
    cabins: "18 Cabins",
    guests: "36 Guests",
    crew: "24 Crew",
    length: "42m",
    vibe: "Sundeck Canopy Lounge & Traditional Workshops",
  },
  {
    slug: "laos-pandaw",
    name: "Laos Pandaw",
    tagline: "Teak decks. Open verandas. The river, always within reach.",
    image: "/images/laos_pandaw.avif",
    cabins: "20 Cabins",
    guests: "40 Guests",
    crew: "28 Crew",
    length: "55m",
    vibe: "Classic 1947 Heritage Blueprint Design",
  },
  {
    slug: "champa-pandaw",
    name: "Champa Pandaw",
    tagline: "The frangipani blooms. The river turns gold.",
    image: "/images/champa_pandaw.avif",
    cabins: "16 Cabins",
    guests: "32 Guests",
    crew: "22 Crew",
    length: "48m",
    vibe: "Fragrant Garden Deck & Sunrise Yoga",
  },
  {
    slug: "mekong-sun",
    name: "Mekong Sun",
    tagline: "First light. Last light. Both are yours.",
    image: "/images/dest_laos.avif",
    cabins: "15 Cabins",
    guests: "30 Guests",
    crew: "20 Crew",
    length: "40m",
    vibe: "Sunrise-Facing Cabins & Dawn Meditation Deck",
  },
]

export default function LaosClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── MAGAZINE HERO ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/dest_laos_hero.avif"
          alt="Buddhist monks at dawn, Laos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/80" />

        {/* Issue line */}
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 03 · Laos</span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">Land of a Million Elephants</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            The Country<br />
            <em className="not-italic text-white/80">That Moves Slowly</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">
              Laos is the Mekong at its most meditative — temple bells, saffron robes, and a river that has all the time in the world.
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
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from Luang Prabang</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p>
            <span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">L</span>aos is the only country in Southeast Asia where the word 'rush' genuinely doesn't apply. The Mekong here is wide and brown and largely untroubled. The towns that line its banks — Luang Prabang in particular — seem to operate on a schedule set by the river and the temple bells rather than any human urgency. If you've been traveling through the region and starting to feel the pace of it, Laos is where you slow down.
          </p>
          <p>
            Luang Prabang is a small UNESCO World Heritage town at the confluence of the Mekong and the Nam Khan, and it is, by almost any measure, one of the most beautiful places in Asia. French colonial shophouses with their deep verandas face golden-spired temples across streets shaded by frangipani. The town is compact enough to walk anywhere in twenty minutes, and everywhere you walk reveals another courtyard, another spirit house draped in flowers, another old man sleeping in a rocking chair with his cat.
          </p>
          <p>
            The Buddhist culture here is not background scenery. It is the actual functioning culture of the town. The monks — some as young as six or seven, sent by their families for education and merit — rise before dawn and walk the alms route in a ceremony that has happened every morning for centuries. Watching it, even once, changes how you think about time.
          </p>
          <p>
            The river beyond Luang Prabang rewards patience even more. The upper Mekong passes through limestone country of extraordinary drama — gorges and caves and villages that have no road access, only the river. The Pak Ou caves, where centuries of pilgrims have left thousands of wooden Buddha images in two riverside chambers, are accessible only by boat. The Mekong is the infrastructure here. Always has been.
          </p>
          <p>
            What Laos offers, above all else, is the experience of a culture that is deeply itself. Not performing for tourism. Not yet fully absorbed into the global economy. Genuinely, quietly, going about its business — and generous enough to let you watch, and sometimes to invite you in for a cup of tea and a conversation that lasts longer than either of you intended.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-navy py-20 px-8 text-center">
        <p className={`text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic`}>
          "In Luang Prabang, the temple bells don't mark the time. They mark the beginning and end of a particular quality of silence."
        </p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Luang Prabang</p>
      </section>

      {/* ── THREE EXPERIENCES ── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What Laos Feels Like</h2>
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
        <Image src="/images/dest_laos.avif" alt="Laos Mekong" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-4">The Detail That Stays With You</p>
            <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>
              "Laos teaches you something the rest of Southeast Asia rarely does: that slowing down is not a compromise. It's the point."
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
              Navigate remote reaches and ancient Buddhist sanctuaries on these bespoke Laotian river cruises.
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
              Step aboard ships that redefine upper river travel. Teak wood, open air verandas, and unhurried luxury designed to connect you deeply with the Laotian Mekong.
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
                  { label: "Best Season", value: "October – March" },
                  { label: "Entry", value: "Visa on arrival or e-visa, ~$35 USD" },
                  { label: "Currency", value: "Lao Kip (LAK)" },
                  { label: "Language", value: "Lao · English in tourist areas" },
                  { label: "Base City", value: "Luang Prabang" },
                  { label: "Journey Length", value: "3 to 7 days ideal" },
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
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your Laos Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
                  The Mekong, the temples, and the quality of silence between them.
                </p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">
                  We design Laos journeys that move at the pace of the country — by boat through the gorges, by foot through the temple town, by tuk-tuk to the weaving villages. No rushing. That's the entire point.
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
