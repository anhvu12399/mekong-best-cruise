"use client"

import { useRef } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const playfair = Playfair_Display({ subsets: ["latin"] })

const sections = [
  {
    id: "began",
    title: "It Started With One Barge. In 1993.",
    content: "A single restored rice barge, two guides, and the conviction that the right way to know the Mekong was slowly — at the river's own speed. We weren't selling tours. We were learning the river: which bends held the best light at dawn, which villages would let us stop, which markets were worth being up at four in the morning for. We still are.",
    image: "/images/heritage_start.avif"
  },
  {
    id: "long-way",
    title: "The Fleet Grew. The Philosophy Didn't.",
    content: "Over three decades, the vessels changed — better design, better beds, better kitchens. What didn't change is the refusal to treat the river as a backdrop. We still anchor where the fish are running, still adjust the route when a village festival appears on the calendar, still hire guides from the communities we visit because they know things no itinerary can teach. The river is not our product. It's our host.",
    image: "/images/heritage_longway.avif"
  },
  {
    id: "epic",
    title: "The Journeys That Stay With You",
    content: "A private water-blessing from a 90-year-old monk in a temple no tourist bus has ever stopped at. Anchoring in a limestone canyon so remote the only sound is water on stone. Watching the sun come up over Angkor from a position we'd scouted specifically so you'd have it to yourself. These are not accidents. They take years of relationship-building, and they are the only kind of travel we know how to do.",
    image: "/images/heritage_epic.avif"
  },
  {
    id: "philanthropy",
    title: "We Work for the River Too",
    content: "The communities along the Mekong gave us everything — their stories, their food, their trust. In return, we invest directly in clean water access, support local artisans by building them into our itineraries rather than gift shops, and work with environmental partners monitoring the river's health. When you travel with us, some of what you pay goes back to the people who made your journey possible. That's not a marketing line. It's the arrangement.",
    image: "/images/heritage_philanthropy.avif"
  }
]

export function OurHeritage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const images = gsap.utils.toArray(".heritage-image") as HTMLElement[]
    const texts = gsap.utils.toArray(".heritage-text") as HTMLElement[]
    
    // Set initial states: all except first are hidden
    gsap.set(images.slice(1), { opacity: 0, scale: 1.05 })
    gsap.set(texts.slice(1), { opacity: 0, y: 50 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 4 sections = 300% scroll distance to complete animation
        pin: true,
        scrub: 0.5, // The exact value user requested for scrubbing
      }
    })

    // Create steps for scrubbing
    sections.forEach((_, i) => {
      if (i === 0) return

      // Animate out previous
      tl.to(images[i - 1], { opacity: 0, scale: 1.0, duration: 1 }, `step${i}`)
        .to(texts[i - 1], { opacity: 0, y: -50, duration: 1 }, `step${i}`)
      
      // Animate in current
      tl.to(images[i], { opacity: 1, scale: 1, duration: 1 }, `step${i}`)
        .to(texts[i], { opacity: 1, y: 0, duration: 1 }, `step${i}`)
    })

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative bg-[#fbfaf8] border-t border-navy/10 h-[100dvh] overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Left Side - Images */}
        <div className="lg:w-1/2 h-[40dvh] lg:h-full relative order-1">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              className="heritage-image absolute inset-0 z-10"
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}
          {/* Subtle overlay to make it look premium */}
          <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 relative h-[60dvh] lg:h-full order-2 bg-[#fbfaf8]">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              className="heritage-text absolute inset-0 flex flex-col justify-center px-6 md:px-8 lg:px-24 bg-[#fbfaf8] z-10"
            >
              <h2 className={`text-2xl md:text-3xl lg:text-5xl text-navy mb-4 lg:mb-8 leading-tight ${playfair.className}`}>
                {section.title}
              </h2>
              <p className="text-navy/70 text-base md:text-lg lg:text-xl font-serif leading-relaxed max-w-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
