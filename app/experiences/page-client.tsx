"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const experiences = [
  {
    title: "Decoding the Self",
    subtitle: "A Private Astrology Reading",
    description: "Transcend traditional entertainment with an exclusive high-end tea tasting and private palmistry or Eastern astrology session on the upper deck. Under the canopy of the Mekong's starlit sky, discover profound insights into your life's path and career in a deeply personal, mystical, and uncompromisingly luxurious setting.",
    image: "/images/exp_astrology.png",
  },
  {
    title: "The Silent Drift",
    subtitle: "A Symphony of Silence",
    description: "For 45 minutes at the delicate hours of dawn or dusk, we cut the engines entirely. Without the hum of machinery, immerse yourself in the authentic sounds of the river—the gentle rhythm of oars breaking the water and the distant calls of native birds. Complete with noise-canceling headphones upon request, this is a moment of absolute, meditative tranquility.",
    image: "/images/exp_silent_drift.png",
  },
  {
    title: "The Blindfolded Tasting",
    subtitle: "A Sensory Awakening",
    description: "Deprived of sight by premium silk blindfolds, your remaining senses are powerfully awakened. Feel the gentle sway of the vessel and the river breeze as you embark on a mysterious fine dining journey, where the complex profiles of indigenous spices and Michelin-inspired culinary artistry come alive on the palate.",
    image: "/images/banner_2.png",
  },
  {
    title: "A Monk's Blessing at Dawn",
    subtitle: "The Dawn Awakening",
    description: "Before the rest of the ship wakes, experience a profoundly moving, private water blessing ceremony led by senior Buddhist monks from a secluded riverside temple. Accompanied only by morning chanting and the rising sun, this spiritual encounter offers deep cultural immersion and absolute tranquility.",
    image: "/images/monk-temple.jpg",
  },
  {
    title: "Submerged Sommelier",
    subtitle: "The River Cellar",
    description: "Descend into the ship's climate-controlled pontoon cellar, surrounded by the cool, dark waters of the Mekong. Here, our Master Sommelier conducts an exclusive tasting of rare vintages perfectly paired with regional delicacies—an intimate, subterranean experience unlike any other on the river.",
    image: "/images/fine-dining-deck.jpg",
  }
]

export default function ExperiencesClient() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-navy/50 text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Beyond the Ordinary
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl text-navy tracking-wide mb-8 ${playfair.className}`}>
            L&apos;Expérience
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-navy/70 leading-relaxed text-lg font-serif">
            Immersive, highly curated encounters designed to awaken the senses and connect you deeply with the soul of the Mekong.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-2 translate-y-2" />
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-10">
                <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-4 font-medium">
                  {item.subtitle}
                </span>
                <h2 className={`text-3xl md:text-4xl text-navy mb-8 leading-tight ${playfair.className}`}>
                  {item.title}
                </h2>
                <p className="text-navy/70 leading-loose text-base md:text-lg mb-10">
                  {item.description}
                </p>
                <button
                  onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
                  className="text-xs tracking-[0.2em] uppercase font-bold text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
                >
                  Enquire About This Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
