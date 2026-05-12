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
    image: "/images/dest_vietnam.avif"
  },
  {
    title: "Riverside Villages",
    desc: "Ban Phanom has been weaving silk on hand looms since before anyone can remember. The sound — that irregular clack-and-thud — comes from every second house in the early morning. A woman in her sixties shows you a pattern she's been building from memory for three weeks. She doesn't need a chart. She learned it at eight.",
    image: "/images/banner_3.avif"
  },
  {
    title: "Ancient Temples",
    desc: "Your guide meets you at Angkor at 4:45am. The towers emerge from the dark slowly, inevitably, as the first orange line appears at the horizon. There are perhaps thirty people in the entire complex. It doesn't feel like a tourist attraction. It feels like something that's been happening every morning for nine hundred years, with or without an audience.",
    image: "/images/highlights_journey.avif"
  },
  {
    title: "Hidden Waterways",
    desc: "On a narrow sampan in the Ben Tre canals, the water coconut palms close overhead until they form a tunnel — green-filtered light, total quiet, the sound of the pole entering the water and withdrawing. A farmhouse appears through the leaves. Someone in a hammock waves. There are no other boats. There hasn't been a guidebook written about this channel yet.",
    image: "/images/banner_4.avif"
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

      {/* 4. Narrative intro */}
      <section className="py-24 lg:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <p className={`text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8`}>A River Unlike Any Other</p>
          <h2 className={`text-3xl md:text-5xl text-navy mb-10 leading-tight ${playfair.className}`}>
            Five thousand kilometers.<br className="hidden md:block" /> Six countries. One river.
          </h2>
          <div className="font-serif text-navy/75 text-lg md:text-xl leading-[1.85] space-y-6">
            <p>
              <span className="float-left text-7xl leading-[0.8] mr-4 text-navy font-bold font-serif">T</span>he Mekong begins on the Tibetan Plateau at more than five thousand meters, a cold clear stream among prayer flags and yak herds. By the time it reaches Yunnan it has become the Lancang — the Turbulent River — carving gorges deeper than the Grand Canyon. By the time it reaches Vietnam it has fanned into nine braided channels called the Nine Dragons, and it ends there, quietly, in the South China Sea.
            </p>
            <p>
              In between, it passes through six of the most culturally distinct countries in Asia. It forms borders, feeds rice paddies, floats fishing villages, and has served as the main artery of commerce and faith for civilizations stretching back three thousand years. The Khmer Empire built Angkor on its tributary. The French built their colonial architecture on its banks. And the people who actually live on it — the farmers, the fisherfolk, the monks, the market vendors — have built something more enduring than any of them: a daily life so rooted in the river that the two are barely separable.
            </p>
            <p>
              To travel the Mekong slowly — by boat, at the river's own pace — is to be given access to a world that moves differently. Not frozen. Not performing. Just going about its business, with room enough for one more curious traveler.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Split: Delta */}
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-bold">Field Notes · Cai Rang, 5:47am</span>
            <h3 className={`text-3xl md:text-5xl mb-8 leading-tight ${playfair.className}`}>
              The Market Was Already Running When You Arrived
            </h3>
            <div className="text-white/70 text-base md:text-lg leading-[1.85] mb-8 font-serif space-y-4 max-w-lg">
              <p>
                The diesel engines start before four. By the time your sampan rounds the first bend, the floating market is already mid-sentence — fifty boats trading across each other's bows, vendors balancing on the prow, the long bamboo poles with their goods dangling off the end a system so efficient nobody ever thought to replace it.
              </p>
              <p>
                You buy a bag of rambutan for twelve thousand dong and eat them warm, watching someone's grandmother steer a boat loaded with durian using nothing but her feet. A boy of maybe seven is already handling transactions. It is 6am, and this has been going on since before his great-grandmother was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Highlights */}
      <section className="py-24 lg:py-36 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">What the River Holds</p>
            <h2 className={`text-3xl md:text-5xl text-navy ${playfair.className}`}>
              Four Dispatches from the Water
            </h2>
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

      {/* 6.5. Heritage scroll */}
      <OurHeritage />

      {/* 7. Pull quote / mid-break */}
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner_1.avif"
          alt="The Mekong at dusk"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className={`text-white text-2xl md:text-4xl lg:text-5xl leading-tight ${playfair.className}`}>
            &ldquo;The river doesn&apos;t care about your itinerary. That&rsquo;s precisely the point.&rdquo;
          </p>
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Somewhere Between Phnom Penh and Siem Reap</p>
        </div>
      </section>

      {/* 8. Expedition cruises */}
      <div className="-mt-12 relative z-20">
        <ExpeditionCruises />
      </div>

      {/* 9. Extended why-travel editorial block */}
      <section className="py-24 lg:py-36 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <div>
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">The Honest Case for Slow Travel</p>
              <h2 className={`text-3xl md:text-5xl text-navy mb-10 leading-tight ${playfair.className}`}>
                Why a Boat. Why This River.
              </h2>
              <div className="font-serif text-navy/70 text-lg leading-[1.85] space-y-6">
                <p>
                  There's a particular kind of travel fatigue that comes from seeing a place from behind a window — bus, taxi, tourist van. You have the postcard version. You've ticked the box. You haven't actually been there.
                </p>
                <p>
                  A river doesn't allow that evasion. When your vessel anchors mid-stream at dusk and the cooking smells drift from the bank, and the family in the stilted house is having the same argument they'll have tomorrow, you understand that this is a place where people actually live. Not for you. Just for themselves, in the same way their grandparents lived here.
                </p>
                <p>
                  The Mekong is the best river in Asia for this kind of travel. It's slow enough that villages appear and recede at a pace you can absorb. It's remote enough that most of what you see hasn't been staged. And it's long enough — five thousand kilometers — that you could spend a year on it and find something new every week.
                </p>
                <p>
                  We've been at this for a long time. We know where to anchor for the best light. We know which monks will let you sit with them in the morning and which market vendors will laugh at your negotiating. We know which canals the guidebooks haven't found yet.
                </p>
                <p className="text-navy/85 font-medium">
                  Our job is to get you close enough to feel it. The rest is up to the river.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/banner_4.avif"
                  alt="Life on the Mekong"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "5,000+", label: "Kilometers of navigable river" },
                  { number: "6", label: "Countries along the Mekong" },
                  { number: "60M+", label: "People who depend on the river" },
                  { number: "30+", label: "Years we've called it home" },
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-navy/15 pt-6">
                    <p className={`text-3xl text-navy mb-2 ${playfair.className}`}>{stat.number}</p>
                    <p className="text-navy/55 text-xs tracking-wide uppercase font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-24 bg-navy text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            When You're Ready
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            The River Is Already Moving.<br className="hidden md:block" /> You Could Be On It.
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
