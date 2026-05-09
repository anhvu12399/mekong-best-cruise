"use client"

import { useState, useEffect, useRef } from "react"
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
    text: "We had such a great time on the Jahan Mekong River Cruise. We started in Saigon and slowly made our way up the Mekong to Siem Reap over 8 days and honestly it was one of the most relaxing and interesting trips we've done. The boat was beautiful and very comfortable, the staff were super friendly. What we loved most was seeing real local life along the river.",
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
  const [parallaxY, setParallaxY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      // Map section position to a parallax offset
      const progress = (windowH - rect.top) / (windowH + rect.height)
      setParallaxY(Math.round(progress * 80 - 40)) // -40px to +40px
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length)

  const review = REVIEWS[current]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-40"
    >
      {/* ── Parallax Background ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/reviews-parallax-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxY}px) scale(1.15)`,
          willChange: "transform",
          transition: "transform 0.05s linear",
        }}
      />
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
          Traveler Stories
        </p>

        {/* Heading */}
        <h2 className={`text-white text-4xl md:text-5xl mb-14 ${playfair.className}`}>
          What our guests are saying
        </h2>

        {/* Review Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 md:p-12 text-left shadow-2xl">

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-gold text-xl">★</span>
            ))}
          </div>

          {/* Quote mark */}
          <p className={`text-white/90 text-lg md:text-xl leading-relaxed font-serif mb-8`}>
            "{review.text}"
          </p>

          {/* Reviewer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/80 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {review.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{review.name}</p>
                <p className="text-white/50 text-xs">{review.location}</p>
              </div>
            </div>
            <p className="text-gold text-xs tracking-wide font-medium">{review.trip}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-gold"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* TripAdvisor link */}
        <a
          href={TRIPADVISOR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-white/50 text-xs tracking-[0.2em] uppercase hover:text-white/80 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#34E0A1]">
            <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
          </svg>
          Read all reviews on TripAdvisor · 4.8 / 5.0
        </a>
      </div>
    </section>
  )
}
