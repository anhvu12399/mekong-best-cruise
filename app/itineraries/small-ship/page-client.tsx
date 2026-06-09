"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, MapPin, Compass, Shield, Trees, Activity, Heart } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const exclusiveExperiences = [
  {
    icon: <Trees className="text-[#c9a962]" size={28} />,
    title: "Dawn Baci Blessings",
    desc: "Participate in a private Baci ceremony led by village elders in a quiet Luang Prabang courtyard. Tie white cotton strings around your wrists to welcome peace and protection for your river journey."
  },
  {
    icon: <Heart className="text-[#c9a962]" size={28} />,
    title: "Ethical Elephant Sanctuary",
    desc: "Visit an exclusive, non-riding sanctuary on the river banks. Walk alongside these majestic creatures as they bathe and forage in the wild, guided by their mahouts."
  },
  {
    icon: <Compass className="text-[#c9a962]" size={28} />,
    title: "The Gorges Sandbank BBQ",
    desc: "Anchor in a sheer limestone gorge. As dusk falls, step onto a private sandbank illuminated by bamboo torches for a traditional Laotian BBQ dinner under the stars."
  }
]

const timelineDays = [
  {
    day: "Day 1",
    title: "The Spiritual Heart of Luang Prabang",
    morning: "Embark in UNESCO-listed Luang Prabang. Receive a warm welcome from your expedition crew and settle into your boutique teak suite.",
    afternoon: "Participate in a private Baci blessing ceremony at dawn to wish you safe passage. Cruise upstream as the karst mountains gather mist.",
    highlight: "Listening to the sound of evening prayers echoing from riverside monasteries as we anchor for the night."
  },
  {
    day: "Day 2",
    title: "Pak Ou Caves & Secluded Gorges",
    morning: "Explore the sacred Pak Ou Caves. Climb the limestone steps to discover thousands of lacquer Buddha statues left by pilgrims over five centuries.",
    afternoon: "Navigate the dramatic upper gorges of the Mekong. The river narrows, bordered by towering cliffs and dense rainforest canopy.",
    highlight: "A torch-lit beach barbecue on a remote sandbank, surrounded by the towering rock walls of the gorge."
  },
  {
    day: "Day 3",
    title: "Whiskey Villages & Jungle Treks",
    morning: "Visit Ban Xang Hai, a riverside hamlet famous for jar-fermented Lao whiskey. Walk the dirt paths and meet the weavers working hand looms.",
    afternoon: "Trek with our naturalist through cardamom forests to a remote Khmu village, learning about upland rice farming and animist traditions.",
    highlight: "An evening presentation on the upper deck by our resident historian about the secrets of the Golden Triangle."
  },
  {
    day: "Day 4",
    title: "The Golden Triangle Convergence",
    morning: "Approach the infamous Golden Triangle where the borders of Laos, Myanmar, and Thailand meet on the water.",
    afternoon: "Walk with rescued elephants at our partner sanctuary. Learn about forest conservation efforts and watch them play in the river mud.",
    highlight: "Standing on the sun deck at sunset, watching three distinct countries light up simultaneously."
  },
  {
    day: "Day 5",
    title: "Thai Border Disembarkation",
    morning: "Savor a final sunrise breakfast on board. Cruise toward the Thai border town of Chiang Saen.",
    afternoon: "Smooth disembarkation. Seamless private transfer to Chiang Rai or Chiang Mai airport.",
    highlight: "A peaceful transition from the wild river back to land travel, with memories of the hidden gorges."
  }
]

export function SmallShipClient() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] w-full flex items-end pb-24 justify-center text-center">
        <Image
          src="/images/dest_laos.avif"
          alt="Boutique Small Ship Mekong Expedition"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

        <div className="relative z-10 max-w-5xl px-6">
          <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase font-bold mb-6">
            Boutique Expedition
          </p>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.05] ${playfair.className}`}>
            The Hidden Tributaries
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-xs tracking-[0.2em] uppercase font-bold">
            <span className="flex items-center gap-2">
              <Clock size={14} className="stroke-[#c9a962]" /> 5 Days / 4 Nights
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="stroke-[#c9a962]" /> Luang Prabang — Golden Triangle
            </span>
          </div>
        </div>
      </section>

      {/* ── SUB-NAV BAR ── */}
      <div className="sticky top-16 lg:top-20 z-45 bg-white border-y border-[#e0d9ce] py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-12 text-[10px] tracking-[0.2em] uppercase font-bold text-navy">
          {["overview", "itinerary", "expedition specs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all duration-300 pb-1 border-b-2 ${
                activeTab === tab ? "text-[#8B4A2A] border-[#8B4A2A]" : "text-navy/50 border-transparent hover:text-navy"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW TAB ── */}
      {activeTab === "overview" && (
        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
              <div className="lg:col-span-7">
                <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-6">Upper Mekong Exploration</span>
                <h2 className={`text-4xl md:text-5xl text-navy mb-8 leading-tight ${playfair.className}`}>
                  Navigate Gorges Where Big Ships Cannot Follow
                </h2>
                <div className="font-serif text-navy/70 text-lg md:text-xl leading-relaxed space-y-6">
                  <p>
                    The Upper Mekong is a wild, dramatic contrast to the flat, open delta of Vietnam. Here, the river cuts through deep limestone gorges, rushes over hidden rapids, and winds past misty peaks covered in dense jungle.
                  </p>
                  <p>
                    On our boutique, shallow-draft expedition vessels, we explore remote riverside communities that remain unreachable by road. We focus on authentic spiritual heritage, wildlife conservation, and slow, deliberate navigation of these remote borders.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-[#e0d9ce] p-10 lg:p-12 shadow-sm rounded-sm">
                <h3 className="text-navy text-xs tracking-[0.2em] uppercase font-bold mb-8 flex items-center gap-2">
                  <Shield size={16} className="text-[#c9a962]" /> Expedition Highlights
                </h3>
                <ul className="space-y-6 text-navy/80 font-serif leading-relaxed text-sm">
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Boutique shallow-draft vessel with private balconies and floor-to-ceiling windows.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Expert local guides and onboard naturalists explaining forest flora & fauna.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Ethical, non-intrusive wildlife encounters and community visits.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>All-inclusive dining showcasing Laotian and Northern Thai flavors.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unique Experiences Section */}
            <div className="border-t border-[#e0d9ce] pt-24">
              <div className="text-center mb-16">
                <h3 className={`text-3xl text-navy ${playfair.className}`}>Bespoke Expedition Highlights</h3>
                <p className="text-navy/50 text-sm tracking-[0.1em] uppercase mt-2">Deeper Connection to Local Life</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                {exclusiveExperiences.map((exp, idx) => (
                  <div key={idx} className="bg-white border border-[#e0d9ce] p-10 rounded-sm hover:shadow-lg transition-all duration-300">
                    <div className="mb-6">{exp.icon}</div>
                    <h4 className={`text-xl text-navy mb-4 ${playfair.className}`}>{exp.title}</h4>
                    <p className="text-navy/70 text-sm leading-relaxed font-serif">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ITINERARY TAB ── */}
      {activeTab === "itinerary" && (
        <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-4">Daily Pacing</span>
              <h2 className={`text-4xl text-navy ${playfair.className}`}>Day-by-Day Expedition</h2>
              <p className="text-navy/60 text-sm font-serif max-w-xl mx-auto mt-4 leading-relaxed">
                Step into a landscape where the river dictates the clock. Below is our daily rhythm between Luang Prabang and Chiang Saen.
              </p>
            </div>

            <div className="space-y-16 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#e0d9ce]">
              {timelineDays.map((day, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-white border border-[#c9a962] group-hover:bg-[#c9a962] transition-colors duration-300" />
                  
                  <div className="bg-[#f7f4ef]/50 border border-[#e0d9ce] p-8 md:p-10 rounded-sm hover:border-[#c9a962] transition-colors duration-300">
                    <span className="text-[#c9a962] text-xs tracking-[0.2em] uppercase font-bold block mb-2">{day.day}</span>
                    <h3 className={`text-2xl text-navy mb-6 ${playfair.className}`}>{day.title}</h3>
                    
                    <div className="space-y-4 font-serif text-navy/75 text-sm md:text-base leading-relaxed">
                      <p><strong className="font-sans text-[10px] tracking-[0.15em] uppercase text-navy block mb-1">Morning</strong> {day.morning}</p>
                      <p><strong className="font-sans text-[10px] tracking-[0.15em] uppercase text-navy block mb-1">Afternoon</strong> {day.afternoon}</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#e0d9ce] flex items-start gap-4">
                      <span className="text-lg">🌿</span>
                      <p className="text-navy text-sm font-serif italic">
                        <strong className="not-italic font-sans text-[10px] tracking-[0.15em] uppercase block mb-1 text-[#8B4A2A]">Core Experience</strong>
                        {day.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EXPEDITION SPECS TAB ── */}
      {activeTab === "expedition specs" && (
        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-6">Vessel Specifications</span>
                <h2 className={`text-4xl text-navy mb-8 leading-tight ${playfair.className}`}>
                  The Boutique Expedition Ship
                </h2>
                <p className="font-serif text-navy/70 text-base leading-relaxed mb-8">
                  Our boutique Upper Mekong vessels feature active stabilizers and shallow-draft steel hulls designed specifically to navigate the dramatic currents and seasonal water level changes of Laos. Hand-woven rattan, native teak wood, and organic linens create a calm, natural design that mirrors the jungle landscapes outside.
                </p>

                <div className="grid grid-cols-2 gap-6 border-t border-[#e0d9ce] pt-8">
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Total Cabins</span>
                    <span className="font-serif text-navy/90 text-lg">10 - 16 luxury staterooms</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Draft</span>
                    <span className="font-serif text-navy/90 text-lg">Shallow 1.2 meters</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Deck Space</span>
                    <span className="font-serif text-navy/90 text-lg">Open 360 observation</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Design Vibe</span>
                    <span className="font-serif text-navy/90 text-lg">Natural woods & organic fiber</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] bg-navy/5 border border-[#e0d9ce] overflow-hidden rounded-sm">
                <Image
                  src="/images/about_hero.avif"
                  alt="Boutique Expedition Deck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-navy text-center px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase font-medium block mb-6">
            Begin the Expedition
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Reserve Your Upper Mekong Cabin
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Upper Mekong expeditions operate seasonally between October and May. Reserve your private teak cabin early, as spaces are strictly limited.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Expedition</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
