"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Playfair_Display } from "next/font/google"
import { ChevronLeft, ChevronRight } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const TRIPADVISOR_LINK =
  "https://www.tripadvisor.com/Attraction_Review-g293925-d12051706-Reviews-Mekong_River_Cruise-Ho_Chi_Minh_City.html"

const REVIEWS = [
  {
    id: 1,
    name: "Jully",
    initials: "JL",
    location: "Ang Thong, Thailand",
    trip: "Aqua Mekong · 7 nights",
    text: "What a wonderful trip aboard Aqua Mekong. Everything was handled professionally from start to finish and the crew made the journey feel smooth and relaxing. The food was excellent and the service throughout was warm and attentive. Our guide was friendly, enthusiastic and helped bring each stop along the Mekong to life.",
  },
  {
    id: 2,
    name: "Ylan",
    initials: "YN",
    location: "Paris, France",
    trip: "The Jahan · Saigon to Siem Reap · 8 nights",
    text: "We had such a great time on the Jahan Mekong River Cruise. We started in Saigon and slowly made our way up the Mekong to Siem Reap over 8 days — honestly it was one of the most relaxing and interesting trips we've done. The boat was beautiful and very comfortable, the staff were super friendly. What we loved most was seeing real local life along the river.",
  },
  {
    id: 3,
    name: "Carole R",
    initials: "CR",
    location: "Sydney, Australia",
    trip: "Mekong Princess · Ho Chi Minh City to Siem Reap",
    text: "We were treated like royalty — the staff-to-guest ratio was phenomenal, the food was superb, our Saigon Suite cabin was luxurious, and all excursions were organised beautifully. Highly recommend this trip to anyone looking for an exceptional and educational river experience.",
  },
  {
    id: 4,
    name: "Gail J",
    initials: "GJ",
    location: "London, United Kingdom",
    trip: "Mekong Princess · 7 nights",
    text: "The ship, staff, day trips, food and service are absolutely fantastic — could not fault anything at all. From the moment we stepped aboard to our final farewell, every single aspect was beyond expectations. This is the gold standard of river cruising in Southeast Asia.",
  },
  {
    id: 5,
    name: "Michael T",
    initials: "MT",
    location: "New York, USA",
    trip: "Victoria Mekong · Family voyage",
    text: "An absolutely incredible experience from start to finish. The Victoria Mekong was stunning and the crew went above and beyond to make our family comfortable. Daily excursions were perfectly paced and offered a genuine glimpse into the local culture. We will absolutely be booking another river cruise in the future.",
  },
]

export function TripAdvisorReviews() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  // ── True parallax: directly mutate DOM via rAF, zero React re-renders ──
  const updateParallax = useCallback(() => {
    if (!sectionRef.current || !bgRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const windowH = window.innerHeight
    // progress: 0 when section top = windowBottom, 1 when section bottom = windowTop
    const progress = (windowH - rect.top) / (windowH + rect.height)
    // Map progress 0→1 to offset -60px→+60px (bg moves 120px total)
    const offset = Math.round(progress * 120 - 60)
    bgRef.current.style.transform = `translateY(${offset}px) scale(1.25)`
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateParallax)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    // Run once on mount to set initial position
    updateParallax()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateParallax])

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length)

  const review = REVIEWS[current]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-40"
    >
      {/* ── Parallax Background — position absolute, larger than container so it has room to move ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-15% 0",          // extend 15% above and below to prevent white gaps
          backgroundImage: "url('/images/reviews-parallax-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          willChange: "transform",
          transform: "translateY(0px) scale(1.25)", // initial — JS will update
        }}
      />

      {/* Gradient overlay: slightly lighter at center for the card to pop */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-white/55 text-[10px] tracking-[0.45em] uppercase font-bold mb-4">
          Traveler Stories
        </p>

        {/* Heading */}
        <h2 className={`text-white text-4xl md:text-5xl mb-12 leading-tight ${playfair.className}`}>
          What our guests are saying
        </h2>

        {/* Review Card — glassmorphism */}
        <div
          className="rounded-2xl p-8 md:p-10 text-left shadow-2xl transition-all duration-500"
          style={{
            background: "rgba(255,255,255,0.09)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          {/* Quote icon + stars */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-gold text-4xl font-serif leading-none opacity-70">"</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-gold text-base">★</span>
              ))}
            </div>
          </div>

          {/* Review text */}
          <p className="text-white/88 text-base md:text-lg leading-[1.85] font-serif mb-8">
            {review.text}
          </p>

          {/* Reviewer info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {review.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
                <p className="text-white/45 text-xs mt-0.5">{review.location}</p>
              </div>
            </div>
            <p className="text-gold/80 text-xs tracking-wide font-medium sm:text-right">
              {review.trip}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/50 transition-all"
          >
            <ChevronLeft size={15} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                className="transition-all duration-300 rounded-full focus:outline-none"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "var(--color-gold, #C9A84C)" : "rgba(255,255,255,0.28)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/50 transition-all"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* TripAdvisor link */}
        <a
          href={TRIPADVISOR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-white/40 text-[11px] tracking-[0.2em] uppercase hover:text-white/70 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#34E0A1]">
            <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
          </svg>
          Read all reviews on TripAdvisor · 4.8 / 5.0
        </a>
      </div>
    </section>
  )
}
