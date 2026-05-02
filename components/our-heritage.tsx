"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"

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
  const [activeIndex, setActiveIndex] = useState(0)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = textRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Trigger when element is near the middle of the viewport
        threshold: 0
      }
    )

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-[#fbfaf8] border-t border-navy/10">
      <div className="flex flex-col lg:flex-row">
        
        {/* Sticky Left - Images */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 h-[60vh] lg:h-screen relative overflow-hidden order-1">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIndex === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
              }`}
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

        {/* Scrolling Right - Text */}
        <div className="lg:w-1/2 py-12 lg:py-0 order-2">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              ref={(el) => {
                textRefs.current[idx] = el
              }}
              className="lg:h-screen flex flex-col justify-center px-8 lg:px-24 py-24 lg:py-0"
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
