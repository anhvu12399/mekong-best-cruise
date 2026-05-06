"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"

const SPECIALISTS = [
  {
    id: "linh",
    name: "Linh Nguyen",
    role: "Mekong Delta Specialist",
    location: "Can Tho, Vietnam",
    years: 11,
    img: "/images/specialist_linh.png",
    highlight: "Born on the delta, returned to share it.",
    bio: "Linh grew up in Ben Tre, where the river was her backyard. After studying tourism in Ho Chi Minh City, she spent three years working on local fishing boats before joining our team. She knows which canal to take at 6am, which garden café serves the best ca phe sua da, and which family will invite you to lunch like you've known each other for years.",
    quote: "The Mekong isn't a destination — it's a rhythm. Once you feel it, you don't want to leave.",
    tags: ["Mekong Delta", "Vietnam", "Cultural Immersion", "Food & Markets"],
  },
  {
    id: "tom",
    name: "Tom Harley",
    role: "Cambodia & Angkor Specialist",
    location: "Siem Reap, Cambodia",
    years: 9,
    img: "/images/specialist_tom.png",
    highlight: "Lived in Siem Reap for 9 years. Never stopped discovering.",
    bio: "Tom arrived in Cambodia 'for six months' and never left. A former archaeologist, he has spent hundreds of hours inside the Angkor complex, understanding every gallery, every bas-relief, and the stories they tell. He designs temple experiences for guests who want more than a photo at sunrise — he wants you to feel the weight of 900 years of civilization.",
    quote: "I've walked every corridor of Angkor. I still find something new. That's what I want to share.",
    tags: ["Cambodia", "Angkor", "Heritage", "River Expeditions"],
  },
  {
    id: "mai",
    name: "Mai Sophea",
    role: "Floating Market & Tonle Sap Specialist",
    location: "Phnom Penh, Cambodia",
    years: 7,
    img: "/images/specialist_mai.png",
    highlight: "She grew up trading at dawn — now she shows you how.",
    bio: "Mai was raised on the Tonle Sap Lake, where floating villages aren't tourist attractions — they're simply home. She brings guests into the rhythms of market life before the tour buses arrive, negotiating for fresh dragonfruit and rambutan while sharing stories about the lake's seasonal floods that define life here.",
    quote: "Everyone photographs the market from a distance. I take you inside it.",
    tags: ["Cambodia", "Floating Markets", "Tonle Sap", "Local Life"],
  },
  {
    id: "sokha",
    name: "Sokha Deth",
    role: "Khmer History & Temple Specialist",
    location: "Siem Reap, Cambodia",
    years: 15,
    img: "/images/specialist_sokha.png",
    highlight: "15 years guiding at Angkor. A walking encyclopedia.",
    bio: "Sokha has dedicated his life to the ancient Khmer empire. A certified guide for 15 years, he has guided UNESCO researchers and royal guests alike through the temple complex. He speaks Khmer, English, French, and some Japanese — and he reads the old Sanskrit inscriptions on the walls like newspaper headlines.",
    quote: "These stones were carved by hands like ours. When I read them, I feel the builders speak.",
    tags: ["Khmer History", "Temple Complexes", "Multi-lingual", "Heritage"],
  },
]

const PHILOSOPHY_PANELS = [
  {
    title: "Our travels shape yours.",
    quote: "It starts with a conversation to understand what you want. I've lived along this river for over a decade, so when you ask 'What should we do?' — I already have ideas that are uniquely suited to you.",
    attr: "— Linh, Mekong Delta Specialist",
    img: "/images/specialist_linh.png",
    imgLeft: false,
  },
  {
    title: "The passion that drives us.",
    quote: "I've walked every inch of Angkor. And I pass that passion into every trip I design. When guests tell me they can't wait to go back, I feel it because I know I've managed to share my love for this land.",
    attr: "— Tom, Cambodia & Angkor Specialist",
    img: "/images/specialist_tom.png",
    imgLeft: true,
  },
  {
    title: "Meticulously crafted, for you.",
    quote: "I plan every aspect of your trip thoughtfully. Not only do I pick the right routes and the right moments — I take care of all the little details, like the best table at sunset and which market stall to visit first, to make your entire trip effortless.",
    attr: "— Mai, Floating Market Specialist",
    img: "/images/specialist_mai.png",
    imgLeft: false,
  },
]

export function SpecialistsClient() {
  const [activeSpecialist, setActiveSpecialist] = useState(SPECIALISTS[0])
  const [galleryIdx, setGalleryIdx] = useState(0)

  const galleryImages = [
    { src: "/images/specialist_linh.png", caption: "Linh on the Mekong canals, Ben Tre" },
    { src: "/images/specialist_tom.png", caption: "Tom at Angkor Wat, dawn reconnaissance" },
    { src: "/images/specialist_mai.png", caption: "Mai at the Tonle Sap floating market" },
    { src: "/images/specialist_sokha.png", caption: "Sokha at Preah Khan Temple, Siem Reap" },
  ]

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── HERO ── */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image src="/images/specialist_hero.png" alt="Our Specialists" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />
        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-2 text-white/60 text-[10px] tracking-widest uppercase">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
          <span>/</span>
          <span className="text-white">Our Specialists</span>
        </div>
        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.4em] uppercase font-bold mb-5">The People Behind Your Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
            Our Specialists
          </h1>
          <p className="text-white/70 font-serif text-lg md:text-xl max-w-2xl leading-relaxed">
            They&apos;ve lived it. Paddled it. Eaten at every hidden table worth knowing about.<br />Now they want to show it to you.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/50 animate-pulse" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-white border-b border-[#e0d9ce]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-navy/70 text-lg md:text-xl leading-relaxed">
            Your specialist understands what makes a journey meaningful — because they&apos;re enthusiastic travellers who&apos;ve formed deep connections with their destinations over many years. It&apos;s this blend of passion and knowledge that lets them create the trip you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY PANELS ── */}
      {PHILOSOPHY_PANELS.map((panel, i) => (
        <section key={i} className="border-b border-[#e0d9ce]">
          <div className={`grid lg:grid-cols-2 min-h-[420px] ${panel.imgLeft ? "direction-rtl" : ""}`}>
            {/* Text panel */}
            <div className={`flex flex-col justify-center py-16 px-8 lg:px-16 bg-[#2a5068] ${panel.imgLeft ? "lg:order-2" : "lg:order-1"}`}>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug italic">{panel.title}</h2>
              <p className="font-serif text-white/75 text-base md:text-lg leading-relaxed mb-4 relative pl-6">
                <span className="absolute left-0 top-0 text-[#c9a962] text-3xl font-serif leading-none">&ldquo;</span>
                {panel.quote}
                <span className="text-[#c9a962] text-3xl font-serif leading-none ml-1 align-bottom">&rdquo;</span>
              </p>
              <p className="text-[#c9a962] text-[10px] tracking-widest uppercase font-bold">{panel.attr}</p>
            </div>
            {/* Image panel */}
            <div className={`relative min-h-[320px] lg:min-h-0 ${panel.imgLeft ? "lg:order-1" : "lg:order-2"}`}>
              <Image src={panel.img} alt={panel.title} fill className="object-cover object-top" />
            </div>
          </div>
        </section>
      ))}

      {/* ── FEATURED SPECIALISTS ── */}
      <section className="py-24 bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-4">Featured Specialists</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Meet the team.</h2>
          </div>

          {/* Specialist selector tabs */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-12 justify-center no-scrollbar">
            {SPECIALISTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSpecialist(s)}
                className={`flex-shrink-0 px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all border ${
                  activeSpecialist.id === s.id
                    ? "bg-[#1a3a4a] text-white border-[#1a3a4a]"
                    : "bg-transparent text-navy/60 border-[#e0d9ce] hover:border-navy/40"
                }`}
              >
                {s.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active specialist detail */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={activeSpecialist.img} alt={activeSpecialist.name} fill className="object-cover object-top transition-all duration-500" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <MapPin size={12} />
                    <span>{activeSpecialist.location}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="lg:col-span-3 pt-2">
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.3em] uppercase font-bold mb-2">{activeSpecialist.role}</p>
              <h3 className="font-serif text-4xl md:text-5xl text-navy mb-2">{activeSpecialist.name}</h3>
              <p className="text-navy/40 text-sm mb-8">{activeSpecialist.years} years on the Mekong</p>

              <p className="font-serif text-xl text-navy italic leading-relaxed mb-6 pl-5 border-l-2 border-[#c9a962]">
                &ldquo;{activeSpecialist.quote}&rdquo;
              </p>
              <p className="text-navy/65 font-serif text-base leading-relaxed mb-8">{activeSpecialist.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {activeSpecialist.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-wider uppercase font-bold text-[#8B4A2A] bg-[#8B4A2A]/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-3 bg-[#1a3a4a] text-white px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#2a5068] transition-colors">
                Plan a Trip with {activeSpecialist.name.split(" ")[0]} <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* All specialists mini cards */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {SPECIALISTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSpecialist(s)}
                className={`text-left group transition-all ${activeSpecialist.id === s.id ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-2 transition-all duration-300 mx-auto w-28 h-28" style={{ borderColor: activeSpecialist.id === s.id ? "#c9a962" : "transparent" }}>
                  <Image src={s.img} alt={s.name} fill className="object-cover object-top" />
                </div>
                <p className="font-serif text-navy text-lg text-center">{s.name.split(" ")[0]}</p>
                <p className="text-[10px] tracking-wider uppercase text-navy/50 text-center mt-1">{s.role.split(" ")[0]} Specialist</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-[#1a3a4a] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-[#c9a962] text-[11px] tracking-[0.3em] uppercase font-bold mb-12">Our Specialists in the Field</p>

          <div className="relative">
            <div className="grid grid-cols-3 gap-2 h-[420px]">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden">
                <Image
                  src={galleryImages[galleryIdx].src}
                  alt={galleryImages[galleryIdx].caption}
                  fill
                  className="object-cover object-top transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white/80 text-xs font-serif italic">{galleryImages[galleryIdx].caption}</p>
              </div>
              {/* Side thumbnails */}
              <div className="grid grid-rows-2 gap-2">
                {[galleryImages[(galleryIdx + 1) % 4], galleryImages[(galleryIdx + 2) % 4]].map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setGalleryIdx((galleryIdx + 1 + i) % 4)}
                  >
                    <Image src={img.src} alt={img.caption} fill className="object-cover object-top opacity-60 hover:opacity-90 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setGalleryIdx((galleryIdx - 1 + 4) % 4)}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              {galleryImages.map((_, i) => (
                <button key={i} onClick={() => setGalleryIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === galleryIdx ? "bg-[#c9a962]" : "bg-white/30"}`} />
              ))}
              <button
                onClick={() => setGalleryIdx((galleryIdx + 1) % 4)}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-4">What Guests Say</p>
          <h2 className="font-serif text-4xl text-navy mb-12">Words about our specialists.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Linh showed us canals we never would have found on Google. We felt like we were discovering the Mekong for the first time.", author: "James & Claire, Australia" },
              { text: "Tom spent three hours explaining Angkor to us. By the end, we understood it. Not just photographed it — understood it.", author: "Helena, Germany" },
              { text: "Mai had us at the floating market before sunrise. The colours, the noise, the smells — it was the most alive I've felt on any trip.", author: "Michael T., United States" },
            ].map((r, i) => (
              <div key={i} className="bg-[#f7f4ef] border border-[#e0d9ce] p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-[#c9a962] text-[#c9a962]" />)}
                </div>
                <p className="font-serif text-navy text-base italic leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[10px] tracking-widest uppercase text-navy/50 font-bold">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f7f4ef] border-t border-[#e0d9ce] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">Begin</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
            Start a conversation.<br />We&apos;ll match you with your specialist.
          </h2>
          <p className="font-serif text-navy/60 text-lg mb-10">
            Tell us where you want to go, and we&apos;ll connect you with the person who knows it best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1a3a4a] text-white px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#2a5068] transition-colors">
              Plan My Journey
            </button>
            <Link href="/about-us" className="border border-[#1a3a4a] text-navy px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#1a3a4a] hover:text-white transition-colors inline-flex items-center justify-center">
              Back to About Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
