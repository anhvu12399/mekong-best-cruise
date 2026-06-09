"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, Clock, MapPin, Anchor, Shield, ChefHat, Sparkles, Compass } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const exclusiveExperiences = [
  {
    icon: <ChefHat className="text-[#c9a962]" size={28} />,
    title: "Imperial Gastronomy",
    desc: "A custom dining menu designed by our executive chef, celebrating ancient royal recipes from the court of Hue and Khmer heritage. Served under the stars on a secluded sandbar."
  },
  {
    icon: <Sparkles className="text-[#c9a962]" size={28} />,
    title: "Sunrise Monastic Blessings",
    desc: "Gain private access to a historic pagoda along the river. Receive a personal blessing from the head monk in complete solitude, long before the gates open to the public."
  },
  {
    icon: <Compass className="text-[#c9a962]" size={28} />,
    title: "Uncharted Navigation",
    desc: "We bypass standard cruise channels entirely. Our shallow-draft vessel enters isolated canals in Vinh Long and Chau Doc where no regular passenger boat has ever docked."
  }
]

const timelineDays = [
  {
    day: "Day 1",
    title: "Embarcation & Sunset Sanctuary",
    morning: "Your private chauffeur delivers you to the pier. Step aboard and find your sanctuary customized with your favorite flowers, vintage wines, and specialized linens.",
    afternoon: "Orient with your captain over Champagne. The course is set, but you hold the compass. Relax on the sundeck as Saigon's skyline fades into the jungle.",
    highlight: "A sunset Champagne toast with traditional live string music playing privately on the bow."
  },
  {
    day: "Day 2",
    title: "The Silent Canals of Ben Tre",
    morning: "Wake to the aroma of freshly roasted Vietnamese coffee. Board a hand-crafted private sampan to explore narrow canals lined with water coconut palms.",
    afternoon: "Lunch at a private colonial villa. Walk through a secluded tropical orchard, picking fresh cacao and pomelo warm from the trees.",
    highlight: "An afternoon meditation led by a private practitioner on the sun deck, surrounded only by river sounds."
  },
  {
    day: "Day 3",
    title: "Living History & Floating Markets",
    morning: "Slip through Cai Rang Floating Market before the tourist boats arrive. Watch local sellers trade jackfruit and mangoes from bamboo poles.",
    afternoon: "Visit an ancient French-colonial merchant house in Sa Dec, where a private musical performance of Đờn ca tài tử is staged just for you.",
    highlight: "A custom 5-course tasting menu paired with wines hand-selected by our guest sommelier."
  },
  {
    day: "Custom Days",
    title: "The Unwritten Journey",
    morning: "Choose to extend into Cambodia, navigating the vast Tonle Sap or border towns. Every day is unscripted.",
    afternoon: "Indulge in unlimited onboard spa therapies, cooking masterclasses, or kayak explorations of isolated lagoons.",
    highlight: "Complete, unscripted freedom. The captain adjusts the sails to match your mood."
  }
]

export function PrivateCharterClient() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-end pb-24 justify-center text-center">
        <Image
          src="/images/banner_3.avif"
          alt="Private Mekong Cruise Charter"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

        <div className="relative z-10 max-w-5xl px-6">
          <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase font-bold mb-6">
            100% Exclusive Vessel Buyout
          </p>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.05] ${playfair.className}`}>
            The Ultimate Sanctuary
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-xs tracking-[0.2em] uppercase font-bold">
            <span className="flex items-center gap-2">
              <Clock size={14} className="stroke-[#c9a962]" /> Custom Duration
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="stroke-[#c9a962]" /> Fully Bespoke Routing
            </span>
          </div>
        </div>
      </section>

      {/* ── SUB-NAV BAR ── */}
      <div className="sticky top-16 lg:top-20 z-45 bg-white border-y border-[#e0d9ce] py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-12 text-[10px] tracking-[0.2em] uppercase font-bold text-navy">
          {["overview", "itinerary", "vessel specs"].map((tab) => (
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
                <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-6">Bespoke Chartering</span>
                <h2 className={`text-4xl md:text-5xl text-navy mb-8 leading-tight ${playfair.className}`}>
                  Claim the Mekong for Your Inner Circle
                </h2>
                <div className="font-serif text-navy/70 text-lg md:text-xl leading-relaxed space-y-6">
                  <p>
                    A private charter is not simply a cruise; it is the absolute customization of time. You claim an entire boutique vessel for yourself, your family, or your friends, with a dedicated crew whose only focus is your comfort and curiosity.
                  </p>
                  <p>
                    There are no schedules except those you write. Wake up as the sun hits the water, or sleep in while the boat drifts silently through the morning mist. Dine on the sundeck, in your suite, or on a secluded island. The river belongs to you.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-[#e0d9ce] p-10 lg:p-12 shadow-sm rounded-sm">
                <h3 className="text-navy text-xs tracking-[0.2em] uppercase font-bold mb-8 flex items-center gap-2">
                  <Shield size={16} className="text-[#c9a962]" /> Included Privileges
                </h3>
                <ul className="space-y-6 text-navy/80 font-serif leading-relaxed text-sm">
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>100% exclusive use of the entire vessel and amenities.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Dedicated onboard team including a private chef, butler, and wellness therapist.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Custom-curated menu featuring premium wines and bespoke spirits.</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-[#c9a962] text-base">✦</span>
                    <span>Private tenders and cars for completely customized shore excursions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unique Experiences Section */}
            <div className="border-t border-[#e0d9ce] pt-24">
              <div className="text-center mb-16">
                <h3 className={`text-3xl text-navy ${playfair.className}`}>Uniquely Bespoke Excursions</h3>
                <p className="text-navy/50 text-sm tracking-[0.1em] uppercase mt-2">Beyond the Standard Tourist Route</p>
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
              <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-4">Sample Route</span>
              <h2 className={`text-4xl text-navy ${playfair.className}`}>The Art of Drifting</h2>
              <p className="text-navy/60 text-sm font-serif max-w-xl mx-auto mt-4 leading-relaxed">
                This is a sample flow of a 4-day private journey. Every aspect, from dock stop times to meal presentation, is tailored dynamically.
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
                      <span className="text-lg">✨</span>
                      <p className="text-navy text-sm font-serif italic">
                        <strong className="not-italic font-sans text-[10px] tracking-[0.15em] uppercase block mb-1 text-[#8B4A2A]">Private Highlight</strong>
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

      {/* ── VESSEL SPECS TAB ── */}
      {activeTab === "vessel specs" && (
        <section className="py-24 lg:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#8B4A2A] text-xs tracking-[0.3em] uppercase font-bold block mb-6">Floating Sanctuary Specs</span>
                <h2 className={`text-4xl text-navy mb-8 leading-tight ${playfair.className}`}>
                  The Private Charter Fleet
                </h2>
                <p className="font-serif text-navy/70 text-base leading-relaxed mb-8">
                  Depending on the size of your group, we offer buyouts of our premier vessels. For intimate family gatherings (up to 28 guests), the *Mekong Princess* provides unparalleled shallow-draft access. For larger celebrations, *Aqua Mekong* offers cutting-edge design and Michelin gastronomy.
                </p>

                <div className="grid grid-cols-2 gap-6 border-t border-[#e0d9ce] pt-8">
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Crew Ratio</span>
                    <span className="font-serif text-navy/90 text-lg">Nearly 1:1 staffing</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Max Guests</span>
                    <span className="font-serif text-navy/90 text-lg">28 to 70 private guests</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Wellness Suite</span>
                    <span className="font-serif text-navy/90 text-lg">Onboard massage & spa</span>
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">Amenities</span>
                    <span className="font-serif text-navy/90 text-lg">Unlimited private bars</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] bg-navy/5 border border-[#e0d9ce] overflow-hidden rounded-sm">
                <Image
                  src="/images/luxury_sunset_balcony.avif"
                  alt="Private Suite Veranda"
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
            Exclusively Yours
          </span>
          <h2 className={`text-3xl md:text-5xl text-white mb-8 leading-tight ${playfair.className}`}>
            Design Your Private Oasis
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-12 font-serif max-w-xl mx-auto leading-relaxed">
            Begin the conversation. Let us know your party size and preferred dates, and our charter specialists will craft a customized sanctuary.
          </p>
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            <span>Plan Your Charter</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
