"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const REDIRECT_URL = "https://www.toursmekong.com/"

const pillars = [
  {
    id: 1,
    title: "Expert Local Guides",
    description: "Our guides are passionate storytellers who bring the Mekong to life. With deep knowledge of history, culture, and hidden gems, they ensure every moment is meaningful and memorable.",
  },
  {
    id: 2,
    title: "Luxury Accommodations",
    description: "Travel in style aboard our handpicked fleet of premium river cruises. Spacious suites, fine dining, and world-class amenities create an unforgettable floating sanctuary.",
  },
  {
    id: 3,
    title: "Authentic Experiences",
    description: "From intimate village visits to exclusive cultural encounters, we craft bespoke journeys that connect you deeply with the Mekong's people, traditions, and landscapes.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#fbfaf8] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image Column - Narrowed */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] relative overflow-hidden bg-navy/5">
              <Image
                src="/images/why-choose-us-bg.avif"
                alt="Luxury cruise on Mekong River"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -inset-4 border border-gold/30 -z-10 translate-x-4 translate-y-4" />
          </div>

          {/* Content Column - Airy Text */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="text-[#9B7B3B] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
              Premium Experience
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-14 ${playfair.className}`}>
              Why Travel With Mekong River Cruise?
            </h2>

            <div className="space-y-12">
              {pillars.map((pillar, index) => (
                <div key={pillar.id} className="relative pl-8">
                  {/* Custom bullet */}
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gold rounded-full" />
                  {/* Subtle connecting line */}
                  {index !== pillars.length - 1 && (
                    <span className="absolute left-[2.5px] top-6 w-px h-[calc(100%+16px)] bg-gold/20" />
                  )}
                  <h3 className="font-serif text-xl lg:text-2xl text-navy mb-4 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-navy/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button
                onClick={() => window.open(REDIRECT_URL, "_blank")}
                className="text-xs tracking-[0.2em] uppercase font-bold text-[#9B7B3B] border-b border-[#9B7B3B] pb-1 hover:text-gold transition-colors"
              >
                Learn More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
