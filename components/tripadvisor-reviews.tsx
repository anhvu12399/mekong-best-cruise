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
              <div className="bg-[#00aa6c] text-white p-2.5 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
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
                <span className="font-bold text-navy">4.8</span> <a href={TRIPADVISOR_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy">(53 reviews)</a>
                <span className="hidden sm:inline"> &bull; #47 of 255 Boat Tours & Water Sports in Ho Chi Minh City</span>
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
              
              <p className="text-navy/70 leading-relaxed text-sm line-clamp-6">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
