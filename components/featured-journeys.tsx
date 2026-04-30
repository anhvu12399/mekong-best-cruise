"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const journeys = [
  {
    id: 1,
    title: "Treasures of the Mekong",
    duration: "8 Days",
    route: "Ho Chi Minh City to Siem Reap",
    price: 4850,
    image: "/images/luxury-balcony-sunset.jpg",
  },
  {
    id: 2,
    title: "Ancient Kingdoms",
    duration: "11 Days",
    route: "Siem Reap to Phnom Penh",
    price: 6200,
    image: "/images/monk-temple.jpg",
  },
  {
    id: 3,
    title: "Delta Discovery",
    duration: "6 Days",
    route: "Ho Chi Minh City Roundtrip",
    price: 3400,
    image: "/images/fine-dining-deck.jpg",
  },
  {
    id: 4,
    title: "Golden Triangle Expedition",
    duration: "14 Days",
    route: "Bangkok to Luang Prabang",
    price: 8900,
    image: "/images/coconut-forest-boat.jpg",
  },
]

export function FeaturedJourneys() {
  const handleButtonClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <section id="journeys" className="py-40 lg:py-56 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-6">
            Our Voyages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-8 text-balance">
            Featured Journeys
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Each itinerary has been thoughtfully designed to reveal the most 
            extraordinary experiences the Mekong has to offer.
          </p>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {journeys.map((journey) => (
            <article
              key={journey.id}
              className="group border border-gold/30 hover:border-gold transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2">
                  <span className="text-sm text-navy font-medium">{journey.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-xl lg:text-2xl text-navy mb-3">
                  {journey.title}
                </h3>
                <p className="text-navy/60 text-sm mb-8">{journey.route}</p>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-serif text-xl text-gold">Request a Quote</p>
                  </div>

                  <button
                    onClick={handleButtonClick}
                    className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors duration-200 group/link"
                  >
                    <span className="text-sm font-medium">View Itinerary</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16 lg:mt-20">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-2 px-8 py-4 border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300"
          >
            <span className="font-medium">Explore All Journeys</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
