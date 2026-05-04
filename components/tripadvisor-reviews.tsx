"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const TRIPADVISOR_LINK = "https://www.tripadvisor.com/Attraction_Review-g293925-d12051706-Reviews-Mekong_River_Cruise-Ho_Chi_Minh_City.html"

const REVIEWS = [
  {
    id: 1,
    name: "Jully",
    location: "Ang Thong, Thailand • 10 contributions",
    title: "A Great Experience on the Aqua Mekong",
    date: "Apr 2026 • Friends",
    text: "What a wonderful trip aboard Aqua Mekong. Everything was handled professionally from start to finish and the crew made the journey feel smooth and relaxing. The food was excellent and the service throughout the cruise was warm and attentive. Our guide was friendly, enthusiastic and helped bring each stop along the Mekong to life.",
    avatar: "J"
  },
  {
    id: 2,
    name: "ylan",
    location: "4 contributions",
    title: "Amazing 8-day Mekong cruise from Saigon to Siem Reap",
    date: "Apr 2026 • Couples",
    text: "We had such a great time on the Jahan Mekong River Cruise. We started in Saigon and slowly made our way up the Mekong to Siem Reap over 8 days and honestly it was one of the most relaxing & interesting trips we've done. The boat itself was beautiful & very comfortable. The staff were super friendly, always made sure everything was taken care of. Food was also really good, with a nice mix of local and international dishes. What we loved most was getting to see real local life along the Mekong, small villages, floating houses, market...",
    avatar: "y"
  },
  {
    id: 3,
    name: "Carole R",
    location: "2 contributions",
    title: "Mekong Princess River cruise",
    date: "Sep 2024 • Couples",
    text: "Have just done Ho Chi Minh to Siem Reap cruise on the Mekong Princess. Highly recommend this trip, we were treated like royalty - staff to crew ratio was phenomenal, the food was superb, our cabin , Saigon Suite was luxurious, all tours were organised smoothly and very educational. Graeme and Carole",
    avatar: "C"
  },
  {
    id: 4,
    name: "Gail J",
    location: "1 contribution",
    title: "Mekong Princess",
    date: "Sep 2024 • Couples",
    text: "We recently did the 7 night river cruise with Mekong Princess. The ship, staff, day trips, food and service are absolutely fantastic!! Could not fault anything!! Highly recommend",
    avatar: "G"
  },
  {
    id: 5,
    name: "Michael T",
    location: "12 contributions",
    title: "Unforgettable Journey on the Victoria Mekong",
    date: "Jan 2025 • Family",
    text: "An absolutely incredible experience from start to finish. The Victoria Mekong was stunning, and the crew went above and beyond to ensure our family was comfortable. The daily excursions were perfectly paced and offered a genuine glimpse into the local culture. We will definitely be booking another river cruise in the future!",
    avatar: "M"
  }
]

export function TripAdvisorReviews() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth > 768 ? 600 : 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="bg-white py-24 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <a 
              href={TRIPADVISOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              {/* Custom SVG for TripAdvisor logo approximation to avoid external image dependencies */}
              <div className="bg-[#00aa6c] text-white p-2 rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.82 1.18 5.37 3.06 7.18l-1.06 2.82h3.88c1.94 1.25 4.25 2 6.75 2 5.52 0 10-4.48 10-10zm-6.5 1.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-7 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3.5 3.5c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"/>
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-navy">Reviews on TripAdvisor</h2>
            </a>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 rounded-full bg-[#00aa6c]" />
                ))}
              </div>
              <p className="text-navy/70 text-sm font-medium border-b border-navy/20 pb-0.5">
                Excellent based on multiple reviews
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[320px] md:min-w-[400px] bg-[#faf8f5] p-8 rounded-xl snap-start border border-navy/5 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-serif">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-medium text-navy">{review.name}</h3>
                  <p className="text-sm text-navy/50">{review.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-3.5 h-3.5 rounded-full bg-[#00aa6c]" />
                ))}
              </div>
              
              <h4 className="font-medium text-navy text-lg mb-2">{review.title}</h4>
              <p className="text-sm text-navy/50 mb-4">{review.date}</p>
              
              <p className="text-navy/70 leading-relaxed text-sm">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
