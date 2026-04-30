"use client"

import Image from "next/image"

const REDIRECT_URL = "https://www.toursmekong.com/"

const pillars = [
  {
    id: 1,
    title: "Expert Local Guides",
    description:
      "Our guides are passionate storytellers who bring the Mekong to life. With deep knowledge of history, culture, and hidden gems, they ensure every moment is meaningful and memorable.",
  },
  {
    id: 2,
    title: "Luxury Accommodations",
    description:
      "Travel in style aboard our handpicked fleet of premium river cruises. Spacious suites, fine dining, and world-class amenities create an unforgettable floating sanctuary.",
  },
  {
    id: 3,
    title: "Authentic Experiences",
    description:
      "From intimate village visits to exclusive cultural encounters, we craft bespoke journeys that connect you deeply with the Mekong's people, traditions, and landscapes.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/why-choose-us-bg.jpg"
        alt="Luxury cruise on Mekong River"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Header Content */}
      <div className="relative z-10 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-8">
            Premium River Cruise Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-[0.15em] uppercase max-w-3xl mx-auto leading-tight">
            Why Travel with Mekong River Cruise?
          </h2>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="relative z-10 mt-auto mb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 lg:pb-32 pt-20">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {pillars.map((pillar) => (
              <article
                key={pillar.id}
                className="space-y-6 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(REDIRECT_URL, "_blank")}
              >
                <h3 className="font-serif text-xl lg:text-2xl text-gold font-semibold tracking-[0.05em]">
                  {pillar.title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
