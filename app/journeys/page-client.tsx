"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const journeys = [
  {
    title: "The Clockless Voyage",
    subtitle: "Dictated by the Tide",
    description: "Abandon rigid itineraries and the constraints of time. Our daily voyage operates in perfect harmony with the water's natural rhythm and tidal shifts. \"We do not chase time; we drift with the breath of the river.\" This is the ultimate declaration of true luxury—absolute freedom.",
    image: "/images/banner_1.avif",
  },
  {
    title: "The Floating Market Trader",
    subtitle: "An Authentic Exchange",
    description: "Step off the main vessel and board a traditional wooden sampan equipped with local currency. Engage directly with river vendors, haggling and hand-selecting the freshest tropical produce from the vibrant floating markets. Later, your private chef will transform your curated ingredients into a highly personalized, exquisite luncheon.",
    image: "/images/dest_vietnam.avif",
  },
  {
    title: "The Lost Canals",
    subtitle: "Uncharted Waters",
    description: "Venture into the pristine, impossibly narrow waterways completely inaccessible to standard cruise ships. Leave the tourist trails far behind to witness the untouched, serene daily life of local communities in a beautifully raw and authentically tranquil setting.",
    image: "/images/banner_3.avif",
  },
  {
    title: "Echoes of Empire",
    subtitle: "The Ruined Palaces",
    description: "Journey deep into the Cambodian interior to explore overgrown, pre-Angkorian temple ruins where no other tourist vessels venture. Wander through ancient stone courtyards before enjoying a surprise pop-up champagne picnic right amidst the majestic, forgotten architecture.",
    image: "/images/coconut-forest-boat.avif",
  },
  {
    title: "The Monsoon Symphony",
    subtitle: "A Seasonal Spectacle",
    description: "Embrace the dramatic beauty of the tropical rainy season. From the comfort of our glass-walled observation lounges, sip hot spiced teas and watch awe-inspiring monsoon storms roll over the vast river—a powerful, cinematic display of nature's raw magnificence.",
    image: "/images/luxury-balcony-sunset.avif",
  }
]

export default function JourneysClient() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-navy/50 text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Beyond the Ordinary
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl text-navy tracking-wide mb-8 ${playfair.className}`}>
            Le Voyage
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-navy/70 leading-relaxed text-lg font-serif">
            Exclusive, unscripted journeys that redefine the concept of exploration and luxury on the Mekong River.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {journeys.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 border border-gold/20 -z-10 -translate-x-2 translate-y-2" />
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-navy/5">
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
                  Plan Your Journey
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
