"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { QuickDecision } from "@/components/quick-decision"
import { ExpeditionCruises } from "@/components/expedition-cruises"
import { OurHeritage } from "@/components/our-heritage"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const playfair = Playfair_Display({ subsets: ["latin"] })

const highlights = [
  {
    title: "Floating Markets",
    desc: "At Cai Rang, commerce happens on the water at 5am. Vendors steer loaded sampans by nudging them with one bare foot, and the thing hanging off the bamboo pole tells you what's for sale — a pineapple for fruit, a winter melon for vegetables. You buy warm rambutan from a woman who won't stop laughing at your attempts to peel it properly.",
    image: "/images/travel_floating_markets.jpg"
  },
  {
    title: "Riverside Villages",
    desc: "Ban Phanom has been weaving silk on hand looms since before anyone can remember. The sound — that irregular clack-and-thud — comes from every second house in the early morning. A woman in her sixties shows you a pattern she's been building from memory for three weeks. She doesn't need a chart. She learned it at eight.",
    image: "/images/travel_riverside_villages.jpg"
  },
  {
    title: "Ancient Temples",
    desc: "Your guide meets you at Angkor at 4:45am. The towers emerge from the dark slowly, inevitably, as the first orange line appears at the horizon. There are perhaps thirty people in the entire complex. It doesn't feel like a tourist attraction. It feels like something that's been happening every morning for nine hundred years, with or without an audience.",
    image: "/images/travel_ancient_temples.jpg"
  },
  {
    title: "Hidden Waterways",
    desc: "On a narrow sampan in the Ben Tre canals, the water coconut palms close overhead until they form a tunnel — green-filtered light, total quiet, the sound of the pole entering the water and withdrawing. A farmhouse appears through the leaves. Someone in a hammock waves. There are no other boats. There hasn't been a guidebook written about this channel yet.",
    image: "/images/travel_hidden_waterways.jpg"
  }
]

export default function DiscoverClient() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-[#fbfaf8] overflow-hidden">

      {/* 1. Hero */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center pt-32 overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 w-full h-full transform origin-center">
          <Image
            src="/images/about-mekong-bg.avif"
            alt="The Mekong River at dawn"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/45 z-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6 drop-shadow-md">
            The Mother of Waters
          </span>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] drop-shadow-lg ${playfair.className}`}>
            The Mekong Doesn't<br className="hidden md:block" /> Perform for Anyone
          </h1>
          <p className="text-white/85 text-lg md:text-xl font-serif max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            It simply flows — past rice paddies, temple walls, floating kitchens, and children doing backflips off wooden docks. You're not a spectator here. You're a witness to daily life in one of the world's last great river civilizations.
          </p>
        </div>
      </section>

      {/* 2. Strip */}
      <div className="bg-navy py-5 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
            3–8 day journeys <span className="mx-2 text-white/30">•</span> Intimate boutique vessels <span className="mx-2 text-white/30">•</span> Curated private departures
          </p>
        </div>
      </div>

      {/* 3. Quick chooser */}
      <QuickDecision />

      {/* 4. Narrative intro - Replacing the 2 main paragraphs as requested */}
      <section className="py-24 lg:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-serif text-navy/75 text-lg md:text-xl leading-[1.85] space-y-8">
            <p>
              <span className="float-left text-7xl leading-[0.8] mr-4 text-navy font-bold font-serif">T</span>he Mekong River originates in the mountains of the Tibetan Plateau, where it rises above the five-thousand-meter mark and flows into the South China Sea as a cold, clear stream winding around the colorful flags of Buddhist prayer banners. By the time the river has reached Yunnan, it takes the name Lancang (Turbulent River), with depths rivaling those of the Grand Canyon; in Vietnam, it turns into the Nine Dragons — nine braided waterways flowing into the South China Sea.
            </p>
            <p>
              In the meantime, the river flows across six of the most distinctive nations on the continent of Asia, forming borders, irrigating rice paddies, hosting villages of fishermen, and serving as the lifeblood of civilizations that have existed here for almost three millennia. The Khmer Empire built the ancient city of Angkor along one of the Mekong's tributaries; the French colonists erected their imposing buildings along its banks; and the people that lived on the banks of the Mekong created much more lasting legacy than both civilizations together: an everyday existence intimately linked with the river.
            </p>
            <p>
              Exploring the Mekong from the slow pace of a traditional river cruise offers unique insights into this world that exists out of sync with our own hectic reality. Neither frozen nor performing, the world of the Mekong simply exists; and there is room for another traveler in that world.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Split: Delta - Replacing with the second requested block */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="/images/pulse_delta.avif"
              alt="Dawn on the Mekong Delta"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-navy text-white px-8 py-20 lg:p-32 flex flex-col justify-center">
            <h3 className={`text-3xl md:text-5xl mb-8 leading-tight ${playfair.className}`}>
              The Market Was Already Underway When You Got There
            </h3>
            <div className="text-white/70 text-base md:text-lg leading-[1.85] mb-8 font-serif space-y-4 max-w-lg">
              <p>
                The diesel engines kick in before four. Even before your sampan makes its first turn, the floating market is already halfway through the sentence – fifty boats bargaining among themselves, people selling from the front ends of their boats, the bamboo poles extending forward with their loads dangling from the ends so perfectly that nobody could think of changing anything.
              </p>
              <p>
                A bag of rambutan costs twelve thousand dong, which you devour still warm, while watching an old woman rowing a boat of durians without using her hands. The boy who negotiates is no more than seven years old, yet it is already morning, and this has been happening since before his great-grandmother's birth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Highlights */}
      <section className="py-24 lg:py-36 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>
              Highlights of the Journey
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-navy/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h4 className="font-serif text-xl text-navy mb-3">{item.title}</h4>
                <p className="text-navy/65 text-sm leading-relaxed font-serif">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Heritage scroll */}
      <OurHeritage />

      {/* 8. Breathing image */}
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner_1.avif"
          alt="The Mekong at dusk"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* 9. Expedition cruises */}
      <div className="-mt-12 relative z-20">
        <ExpeditionCruises />
      </div>

      {/* 10. CTA */}
      <section className="py-24 bg-navy text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Begin Your Voyage
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Ready to Explore the Mekong?
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Tell us how long you have, what kind of traveler you are, and what you're hoping to feel. We'll take it from there.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Journey</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
