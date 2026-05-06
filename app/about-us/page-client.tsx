"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Star, Award, Users, Compass, Heart, Leaf } from "lucide-react"

const NAV_ITEMS = [
  { id: "story", label: "Our Story" },
  { id: "specialist", label: "Our Specialists" },
  { id: "philosophy", label: "Our Philosophy" },
  { id: "responsible", label: "Responsible Travel" },
  { id: "reviews", label: "Reviews" },
]

const STEPS = [
  { num: "01", title: "We listen first", desc: "Before we plan anything, we get to know you — your pace, your passions, what makes a moment unforgettable for you specifically." },
  { num: "02", title: "We match the river to you", desc: "Our specialists draw from deep personal knowledge of the Mekong to find the route, the vessel, and the season that fits your story." },
  { num: "03", title: "We build it, just for you", desc: "No templates. Every itinerary is written from scratch. Your journey is curated, not copied from a brochure." },
  { num: "04", title: "We refine every detail", desc: "From the riverside table to the morning light on the water — we obsess over the details so you can simply arrive and feel." },
  { num: "05", title: "We stay with you", desc: "From the moment you board to the day you return home, our team is available — a local partner always within reach." },
]

const REVIEWS = [
  { name: "Sarah & Michael T.", country: "United Kingdom", rating: 5, text: "We've travelled with many operators. None have understood us the way Mekong Best Cruise did. The itinerary felt like it was written by someone who actually knew us." },
  { name: "Claire D.", country: "Australia", rating: 5, text: "The floating market morning alone was worth the entire trip. Our specialist's tip about arriving before 6am — pure gold. We had it entirely to ourselves." },
  { name: "James W.", country: "United States", rating: 5, text: "I'm not usually one to write reviews. But this trip deserves it. The dinner on the river deck under the stars in Phnom Penh will stay with me forever." },
]

const AWARDS = [
  { title: "World's Best River Cruise", body: "Travel + Leisure Asia, 2025" },
  { title: "Top Luxury Operator", body: "Condé Nast Traveller, 2025" },
  { title: "Sustainable Travel Award", body: "Green Destinations, 2024" },
  { title: "Best Cultural Experience", body: "National Geographic, 2024" },
]

export function AboutUsClient() {
  const [activeSection, setActiveSection] = useState("story")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef]">

      {/* ── HERO ── */}
      <section className="relative h-[90vh] flex items-end justify-center text-center pb-20">
        <Image src="/images/about_hero.png" alt="The Mekong at Golden Hour" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.35em] uppercase font-bold mb-5">About Mekong Best Cruise</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            The river knows<br />your name.
          </h1>
          <p className="text-white/75 font-serif text-lg md:text-xl max-w-xl mx-auto">
            We don&apos;t sell tours. We listen to who you are — then let the Mekong do the rest.
          </p>
        </div>
      </section>

      {/* ── STICKY SUBNAV ── */}
      <nav className="sticky top-16 lg:top-20 z-30 bg-[#ede9e2]/95 backdrop-blur-sm border-b border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14 overflow-x-auto gap-2 no-scrollbar">
          <div className="flex gap-8 min-w-max">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors pb-1 ${
                  activeSection === item.id
                    ? "text-[#8B4A2A] border-b-2 border-[#8B4A2A]"
                    : "text-navy/50 hover:text-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#c9a962] hover:text-[#b59550] transition-colors whitespace-nowrap">
            Plan Your Journey <ArrowRight size={12} />
          </button>
        </div>
      </nav>

      {/* ── OUR STORY ── */}
      <section id="story" ref={(el) => { sectionRefs.current.story = el }} className="scroll-mt-[120px] lg:scroll-mt-[136px] py-24 bg-[#f7f4ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">Our Story</p>
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-8 leading-tight">
            Travel shaped<br />around you.
          </h2>
          <p className="text-navy/65 font-serif text-lg md:text-xl leading-relaxed mb-6">
            We know the best journeys are never the ones that follow a fixed route on a map — they&apos;re the ones shaped around your curiosity, your pace, and the moments only you would notice.
          </p>
          <p className="text-navy/65 font-serif text-lg leading-relaxed">
            For over a decade, we&apos;ve lived on, worked along, and fallen in love with the Mekong River. From the whispering channels of the Mekong Delta to the temple-studded skyline of Siem Reap, we have built each journey from the ground up — not from a template, but from a conversation.
          </p>
        </div>

        {/* Story Stats */}
        <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#e0d9ce] pt-12">
          {[
            { num: "10+", label: "Years on the Mekong" },
            { num: "4,800+", label: "Journeys Curated" },
            { num: "6", label: "Countries on the River" },
            { num: "98%", label: "Would Return" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#8B4A2A] mb-2">{s.num}</p>
              <p className="text-[10px] tracking-widest uppercase font-bold text-navy/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR SPECIALISTS ── */}
      <section id="specialist" ref={(el) => { sectionRefs.current.specialist = el }} className="scroll-mt-[120px] lg:scroll-mt-[136px] bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Image side */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image src="/images/about_specialist.png" alt="Our Mekong Specialist" fill className="object-cover" />
              {/* Floating quote card */}
              <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-xs bg-[#1a3a4a]/90 backdrop-blur-sm p-6 text-white">
                <p className="font-serif text-sm italic leading-relaxed mb-4">
                  &ldquo;What I love most is the moment a client sends me a photo from a canal I recommended — somewhere they never would have found on their own. That&apos;s when I know we got it right.&rdquo;
                </p>
                <p className="text-[10px] tracking-widest uppercase text-[#c9a962] font-bold">— Linh, Mekong Delta Specialist</p>
                <button className="mt-4 text-[10px] tracking-[0.2em] uppercase font-bold border border-white/50 px-4 py-2 hover:bg-white hover:text-navy transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
            {/* Content side */}
            <div className="flex flex-col justify-center py-16 px-8 lg:px-14 bg-[#f7f4ef]">
              <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-6">Our Specialists</p>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8 leading-tight">
                The people who<br />create your trip.
              </h2>
              <p className="text-navy/65 font-serif text-lg leading-relaxed mb-6">
                Every journey begins with a conversation with a specialist — someone who has personally navigated the same waters, slept in the same riverside villas, and eaten at the same hidden garden tables we recommend.
              </p>
              <p className="text-navy/65 font-serif text-lg leading-relaxed mb-10">
                They won&apos;t just match you with a preset route. They&apos;ll learn what makes you feel most alive on a trip, and build around that.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { Icon: Compass, label: "Deep local knowledge" },
                  { Icon: Users, label: "Max 10 guests per tour" },
                  { Icon: Heart, label: "Bilingual guides" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#8B4A2A]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8B4A2A]" />
                    </div>
                    <p className="text-[10px] tracking-widest uppercase font-bold text-navy/60">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / PROCESS ── */}
      <section id="philosophy" ref={(el) => { sectionRefs.current.philosophy = el }} className="scroll-mt-[120px] lg:scroll-mt-[136px] relative">
        {/* Full-bleed image with overlay */}
        <div className="relative h-[60vh] flex items-end">
          <Image src="/images/luxury-balcony-sunset.avif" alt="Meaningful connections" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 max-w-lg p-10 lg:p-16">
            <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4">
              Meaningful encounters,<br />real connections.
            </h2>
            <p className="text-white/75 font-serif text-base leading-relaxed">
              &ldquo;Rather than just focus on the highlights, we make sure you get a true taste of your destination. We want to create experiences that give you a deeper perspective.&rdquo;
            </p>
            <p className="text-[#c9a962] text-[10px] tracking-widest uppercase font-bold mt-4">— Anh, Regional Director</p>
          </div>
        </div>

        {/* 5-step process */}
        <div className="bg-[#1a3a4a] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-center text-[#c9a962] text-[11px] tracking-[0.3em] uppercase font-bold mb-12">How We Work</p>
            <div className="grid md:grid-cols-5 gap-6 md:gap-4">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-white/10" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full border border-[#c9a962]/40 flex items-center justify-center mb-5 bg-[#1a3a4a]">
                      <span className="text-[#c9a962] font-serif text-sm">{step.num}</span>
                    </div>
                    <h3 className="font-serif text-white text-base mb-3 leading-snug">{step.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBLE TRAVEL ── */}
      <section id="responsible" ref={(el) => { sectionRefs.current.responsible = el }} className="scroll-mt-[120px] lg:scroll-mt-[136px] bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-5 h-5 text-[#8B4A2A]" />
                <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold">Responsible Travel</p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8 leading-tight">
                Travelling<br />the right way.
              </h2>
              <p className="font-serif text-xl text-navy/60 italic leading-relaxed mb-6 pl-6 border-l-2 border-[#c9a962]">
                &ldquo;Responsible travel continues to be at the heart of our business — because it gives you the best experience, but also helps preserve the communities and environments you visit.&rdquo;
              </p>
              <p className="text-navy/60 font-serif text-base leading-relaxed mb-3">— Sabrina, Global Sustainability Director</p>
              <p className="text-navy/60 font-serif text-lg leading-relaxed mt-6">
                We collaborate with local communities, employ local guides at fair wages, and choose partners who share our commitment to protecting the river that gives us everything.
              </p>
              <button className="mt-10 self-start flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B4A2A] border-b border-[#8B4A2A] pb-1 hover:text-navy hover:border-navy transition-colors">
                Our Commitments <ArrowRight size={12} />
              </button>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image src="/images/about_responsible.png" alt="Responsible travel on the Mekong" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" ref={(el) => { sectionRefs.current.reviews = el }} className="scroll-mt-[120px] lg:scroll-mt-[136px] py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-4">What Our Guests Say</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Words from the river.</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />)}
              <span className="text-navy/60 text-sm ml-2 font-serif">4.9 / 5 from 4,800+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-[#f7f4ef] border border-[#e0d9ce] p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />)}
                </div>
                <p className="font-serif text-navy text-lg italic leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm text-navy">{r.name}</p>
                  <p className="text-xs text-navy/50 tracking-wider">{r.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20 bg-[#f7f4ef] border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#8B4A2A] text-[11px] tracking-[0.3em] uppercase font-bold mb-12">Recognition</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {AWARDS.map((a) => (
              <div key={a.title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#c9a962]/15 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#c9a962]" />
                </div>
                <p className="font-serif text-navy text-base leading-snug">{a.title}</p>
                <p className="text-[10px] tracking-widest uppercase text-navy/40 font-bold">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a3a4a] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Begin Your Journey</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
            Tell us your story.<br />We&apos;ll write the rest.
          </h2>
          <p className="text-white/60 font-serif text-lg mb-12">
            Every great Mekong journey starts with a single conversation.
          </p>
          <button className="bg-[#c9a962] text-white px-12 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#b59550] transition-colors">
            Start Planning
          </button>
        </div>
      </section>

    </main>
  )
}
