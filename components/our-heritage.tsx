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
    title: "Our Journey Began in 1993",
    content: "What started as a single restored rice barge has blossomed into a lifelong dedication to the Mekong. Decades ago, we saw beyond the river's surface to understand its profound connection to the people. Our founding vision was simple yet revolutionary: to offer an intimate, luxurious vantage point into a world untouched by time, honoring local heritage at every bend of the river.",
    image: "/images/heritage_start.png"
  },
  {
    id: "long-way",
    title: "We've Come a Long Way",
    content: "From those humble beginnings, we have redefined river cruising in Southeast Asia. Today, our fleet represents the pinnacle of boutique luxury, seamlessly blending traditional craftsmanship with contemporary elegance. We've navigated challenges and changing tides, always remaining true to our core philosophy of immersive, slow travel that respects the profound majesty of the Mekong.",
    image: "/images/heritage_longway.png"
  },
  {
    id: "epic",
    title: "For Life's Most Epic Adventures",
    content: "We believe that true luxury lies in exclusive access and unforgettable moments. Whether it's receiving a private blessing from a senior monk in a centuries-old wat, navigating deep into mist-shrouded limestone caves, or anchoring under a canopy of stars in absolute silence, our itineraries are crafted for those who seek the extraordinary. These are not just trips; they are milestone journeys.",
    image: "/images/heritage_epic.png"
  },
  {
    id: "philanthropy",
    title: "Philanthropy & Community",
    content: "The river has given us everything, and it is our profound duty to give back. We are deeply committed to the communities we visit, investing in clean water initiatives, supporting local artisans, and ensuring that our presence brings sustainable prosperity. When you travel with us, you become part of a legacy of care, helping to preserve the cultural and environmental sanctity of the Mekong.",
    image: "/images/heritage_philanthropy.png"
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
    <section ref={containerRef} className="relative bg-[#fbfaf8] border-t border-navy/10 h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Left Side - Images */}
        <div className="lg:w-1/2 h-[50vh] lg:h-full relative order-1">
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
              />
            </div>
          ))}
          {/* Subtle overlay to make it look premium */}
          <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-full order-2 bg-[#fbfaf8]">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              className="heritage-text absolute inset-0 flex flex-col justify-center px-8 lg:px-24 bg-[#fbfaf8] z-10"
            >
              <h2 className={`text-3xl md:text-5xl text-navy mb-8 leading-tight ${playfair.className}`}>
                {section.title}
              </h2>
              <p className="text-navy/70 text-lg md:text-xl font-serif leading-relaxed max-w-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
