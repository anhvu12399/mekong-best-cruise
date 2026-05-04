"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
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
    desc: "Witness the vibrant dawn trading on the water, where boats overflow with fresh tropical produce.",
    image: "/images/dest_vietnam.avif"
  },
  {
    title: "Riverside Villages",
    desc: "Step ashore into timeless communities where traditional silk weaving and pottery are still practiced.",
    image: "/images/banner_3.avif"
  },
  {
    title: "Ancient Temples",
    desc: "Explore forgotten Khmer ruins and receive sacred water blessings from senior Buddhist monks.",
    image: "/images/highlights_journey.avif"
  },
  {
    title: "Hidden Waterways",
    desc: "Navigate through impossibly narrow canals shaded by lush nipa palms, far from the tourist trail.",
    image: "/images/banner_4.avif"
  }
]

export default function DiscoverClient() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Parallax & Scale effect: as you scroll down, move Y by 20% and scale up to 1.1
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
      {/* 1. Hero image lớn — headline + 1 đoạn ngắn */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center pt-32 overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 w-full h-full transform origin-center">
          <Image
            src="/images/about-mekong-bg.avif"
            alt="Discover the Mekong"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6 drop-shadow-md">
            The Mother of Water
          </span>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-lg ${playfair.className}`}>
            Discover the Soul of the Mekong
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-serif max-w-2xl mx-auto drop-shadow-md">
            A journey through timeless landscapes, ancient empires, and the vibrant daily rhythms of Southeast Asia's most legendary river.
          </p>
        </div>
      </section>

      {/* 2. Practical reassurance strip rất gọn */}
      <div className="bg-navy py-5 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
            3–8 day journeys <span className="mx-2 text-white/30">•</span> Intimate boutique vessels <span className="mx-2 text-white/30">•</span> Curated private departures
          </p>
        </div>
      </div>

      {/* 3. Quick journey chooser */}
      <QuickDecision />

      {/* 4. Explore the Mekong intro — đoạn kể chuyện ngắn */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-5xl text-navy mb-8 leading-tight ${playfair.className}`}>
            More Than a River.<br className="hidden md:block"/> A Living Tapestry.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl leading-relaxed font-serif">
            Flowing through the heart of Southeast Asia, the Mekong is a river of staggering contrasts and profound beauty. It is a lifeline for millions, a silent witness to fallen empires, and a vibrant artery of trade and culture. To sail these waters is to read the history of a continent, written in the ebb and flow of the tide.
          </p>
        </div>
      </section>

      {/* 5. Lifestyle image + short narrative */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="/images/pulse_delta.avif"
              alt="Mekong lifestyle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={65}
            />
          </div>
          <div className="bg-navy text-white px-8 py-20 lg:p-32 flex flex-col justify-center">
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-bold">Local Rhythms</span>
            <h3 className={`text-3xl md:text-5xl mb-8 leading-tight ${playfair.className}`}>
              The Pulse of the Delta
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-light max-w-lg">
              Life on the Mekong happens on the water. Before the sun fully rises, wooden sampans laden with pineapples, dragon fruit, and fresh flowers converge in a chaotic, colorful ballet. Children wave from stilted houses, and the scent of woodsmoke and incense drifts across the morning mist. This is an authentic world that has remained largely unchanged for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Destination rhythm — 3–4 điểm nổi bật */}
      <section className="py-24 lg:py-32 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className={`text-3xl md:text-5xl text-navy mb-8 ${playfair.className}`}>
              Highlights of the Journey
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
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
                    quality={65}
                  />
                </div>
                <h4 className="font-serif text-xl text-navy mb-3">{item.title}</h4>
                <p className="text-navy/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. Heritage / Sticky Scroll section */}
      <OurHeritage />

      {/* 7. Large breathing image — section visual tạo nhịp nghỉ */}
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
        <Image
          src="/images/banner_1.avif"
          alt="Mekong Sunset Breathing Image"
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* 8. Expedition cruises / itineraries */}
      <div className="-mt-12 relative z-20">
        <ExpeditionCruises />
      </div>

      {/* 9. Enquiry / contact CTA */}
      <section className="py-24 bg-navy text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Begin Your Voyage
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 ${playfair.className}`}>
            Ready to Explore the Mekong?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-12 font-light max-w-xl mx-auto">
            Speak with our travel artisans to craft a bespoke journey perfectly tailored to your desires.
          </p>
          <button
            onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Journey</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  )
}
