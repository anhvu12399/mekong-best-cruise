"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const experiences = [
  {
    title: "Sacred Temples",
    description:
      "Witness the sunrise over Angkor Wat, explore ancient Khmer ruins, and discover hidden pagodas that have witnessed centuries of history.",
    image: "/images/sacred-temples.jpg",
  },
  {
    title: "Floating Markets",
    description:
      "Glide through vibrant morning markets where local life unfolds on the water, sampling exotic fruits and witnessing age-old trading traditions.",
    image: "/images/floating-markets.jpg",
  },
  {
    title: "Cultural Encounters",
    description:
      "Meet silk weavers, visit Buddhist monasteries, and share meals with local families for authentic connections that last a lifetime.",
    image: "/images/cultural-encounters.jpg",
  },
]

export function Experience() {
  const handleButtonClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <section id="experience" className="py-40 lg:py-56 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-8">
            Unforgettable Moments
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-10 text-balance">
            The Mekong Experience
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Every bend in the river reveals new wonders. From ancient temples to 
            vibrant markets, each day brings discoveries that stir the soul.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {experiences.map((experience, index) => (
            <article key={index} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300" />
              </div>

              {/* Gold Line */}
              <div className="w-12 h-0.5 bg-gold mb-6" />

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl text-navy mb-5">
                {experience.title}
              </h3>
              <p className="text-navy/60 leading-relaxed text-base">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20 lg:mt-28">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-navy text-navy font-medium tracking-wide hover:bg-navy hover:text-white transition-colors duration-200"
          >
            <span>Explore Our Journeys</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
