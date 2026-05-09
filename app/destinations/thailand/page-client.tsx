"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const faqs = [
  { question: "What is Thailand's connection to the Mekong River?", answer: "The Mekong forms Thailand's natural northeastern border with Laos for roughly 1,000 kilometers, running through the Isan region. The area is Thailand at its most authentic — less visited than the beaches and temples of the south, the Mekong communities here maintain a way of life centered on the river, rice farming, and a distinct cultural heritage blending Thai, Lao, and Khmer influences." },
  { question: "What is the Golden Triangle?", answer: "The Golden Triangle is the point where Thailand, Laos, and Myanmar meet at the junction of the Mekong and Ruak rivers. Historically notorious for opium production, the area is now home to a fascinating opium museum, luxury river lodges, and elephant sanctuaries. Arriving by boat at dusk, watching the three countries recede simultaneously, is an unforgettable geographic moment." },
  { question: "Are there luxury accommodation options along the Mekong in Thailand?", answer: "Yes — notably the Anantara Golden Triangle and several boutique river lodges in the Chiang Rai area. We work with properties that offer a genuine sense of place: natural materials, local staff, cuisine that reflects the river and the region." },
  { question: "What's the best way to combine Thailand's Mekong with the rest of the river journey?", answer: "Fly into Chiang Rai, explore the Golden Triangle area for two to three days, then take the Slow Boat south into Laos and continue to Luang Prabang. It's one of the great river passages in Asia — unhurried, beautiful, and entirely manageable with the right arrangements." },
]

const experiences = [
  { label: "The Golden Triangle", title: "Where Three Countries Meet", body: "The boat anchors in the channel and the current does nothing — it simply holds you there, at the point where Thailand ends and Laos begins to the north and Myanmar to the west. Three countries. Three flags visible simultaneously. A Lao casino boat moored on the opposite bank. The Mekong, not particularly wide here, running brown and purposeful. Your guide points to the exact spot of the confluence and says nothing, because there's nothing to add. You sit on the deck with a cold Chang and look at the geography of a continent converging in one place. It's quieter than you expected.", image: "/images/dest_thailand.avif", tag: "Golden Triangle, Chiang Rai" },
  { label: "River Commerce", title: "The Border Markets of Isan", body: "Every Saturday morning in Nakhon Phanom, a market appears on the riverside promenade that has been happening in some form since there were boats crossing to Laos. Sticky rice wrapped in banana leaf. Fish sauce in unmarked bottles. Silk from across the river in Laos, sold by women who crossed at 5am by long-tail boat. The vendors and buyers know each other — some have been meeting at this market for twenty years. You buy a packet of dried herbs you can't identify and a small ceramic bowl decorated in the old Isan style, and your guide translates the price negotiation, which takes considerably longer than the actual amount of money involved.", image: "/images/dest_thailand.avif", tag: "Saturday market · Nakhon Phanom" },
  { label: "Temple Country", title: "Wat Phu Thok and the Forest Monks", body: "The forest tradition in Thai Buddhism produced monks who withdrew into the jungle and practiced in isolation — living in caves, meditating under trees, seeking the direct experience of the teachings rather than their institutional form. Wat Phu Thok in Bueng Kan province is built directly into a sandstone cliff, connected by a series of wooden walkways and ladders. Climbing it on a quiet weekday morning, with the forest below and the Mekong visible in the distance, you understand what these monks were looking for. There are very few places where the intersection of landscape and practice is this legible.", image: "/images/dest_thailand.avif", tag: "Wat Phu Thok · Bueng Kan" },
]

export default function ThailandClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <section className="relative w-full h-screen overflow-hidden">
        <Image src="/images/dest_thailand_hero.avif" alt="Mekong River market, Thailand" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/80" />
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 05 · Thailand</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">The Land of Smiles</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            Where Three Rivers<br /><em className="not-italic text-white/80">Become One Border</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">Thailand's Mekong is the country at its most undiscovered — the northeast coast where the river forms the border and the markets still trade across it by boat.</p>
            <Link href="/plan-your-journey" className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition-colors">Plan This Journey <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from the Golden Triangle</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p><span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">M</span>ost people who visit Thailand never reach the Mekong. They follow the well-worn path — Bangkok, Chiang Mai, the southern islands — and return home with a very partial picture of an extraordinarily complex country. The northeast, the Isan region, where the river forms a thousand kilometers of border with Laos, is Thailand at its most honest: the food spicier, the music older, the people less accustomed to tourists and more genuinely curious about who you are and where you're from.</p>
          <p>Chiang Rai, in the far north, is the gateway to the Golden Triangle — the legendary meeting point of Thailand, Laos, and Myanmar. The opium trade that made this region infamous in the twentieth century is long replaced by a more complex economy: luxury resorts, elephant sanctuaries, hill tribe villages, and the steady commerce of the river, which has always found ways to move things across borders whether the governments are talking or not.</p>
          <p>The Mekong here is different from its southern character. Narrower and faster, cutting between steep forested banks, it feels more like a gorge river than the wide, agricultural highway of Vietnam. Standing at the Golden Triangle and watching the three countries recede in three directions, the water running between them, you understand the river's role as both connector and boundary — a line drawn by geology that human politics have spent centuries trying to interpret.</p>
          <p>The riverside markets of Isan are among the most authentic in Southeast Asia. No concessions to tourism. Sticky rice in bamboo steamers, fresh river fish, silk from across the Lao border, medicinal herbs and rice whiskey and homemade hot sauce. The women running the stalls have been here since long before dawn. They'll be back next Saturday. The river, between their stalls and the Lao bank, makes its own consistent schedule.</p>
          <p>Thailand's Mekong coast is a journey for travelers who have already done the obvious and are ready for the rewarding. The infrastructure is good, the welcome is genuine, and the food — Isan cuisine, influenced by Lao cooking and profoundly its own thing — is some of the best you'll eat in the entire region.</p>
        </div>
      </section>

      <section className="bg-navy py-20 px-8 text-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic">"Isan cuisine is what Thai food tastes like before it learned to be polite. We mean this as the highest possible compliment."</p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Nakhon Phanom</p>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What Thailand's Mekong Feels Like</h2>
          </div>
          <div className="space-y-32">
            {experiences.map((exp, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative aspect-[4/5] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={exp.image} alt={exp.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2"><span className="text-white/80 text-[10px] tracking-[0.25em] uppercase font-bold">{exp.tag}</span></div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">{exp.label}</p>
                  <h3 className={`text-3xl md:text-4xl text-navy mb-6 ${playfair.className}`}>{exp.title}</h3>
                  <p className="font-serif text-navy/70 text-lg leading-[1.8]">{exp.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/images/dest_thailand_hero.avif" alt="Thailand Mekong" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>"The most interesting part of Thailand is the part nobody bothers to visit. The Mekong will tell you why."</p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">What You Need to Know</p>
              <h2 className={`text-4xl text-navy mb-10 ${playfair.className}`}>Before You Go</h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[{ label: "Best Season", value: "November – March" }, { label: "Entry", value: "Visa-free for most nationalities, 30 days" }, { label: "Currency", value: "Thai Baht (THB)" }, { label: "Language", value: "Thai · English in tourism areas" }, { label: "Base City", value: "Chiang Rai or Nakhon Phanom" }, { label: "Journey Length", value: "3 to 5 days, combined with Laos" }].map((item) => (
                  <div key={item.label}><p className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-1">{item.label}</p><p className="font-serif text-navy/80">{item.value}</p></div>
                ))}
              </div>
            </div>
            <div className="bg-[#f7f4ef] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your Thailand Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>The Golden Triangle, the border markets, the river that connects three countries.</p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">We pair Thailand's Mekong with a Laos extension most often — Chiang Rai to the Golden Triangle, then the Slow Boat into Luang Prabang. It is one of the great river journeys available to travelers today.</p>
              </div>
              <Link href="/plan-your-journey" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-navy text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B4A2A] transition-colors duration-300 group">
                <span>Plan This Journey</span><ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 border-t border-[#e0d9ce]">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Questions & Answers</p>
        <h2 className={`text-4xl text-navy mb-12 ${playfair.className}`}>What Travelers Ask</h2>
        <div className="divide-y divide-[#e0d9ce]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="flex justify-between items-center w-full text-left py-6 group">
                <span className={`text-xl text-navy group-hover:text-[#8B4A2A] transition-colors pr-6 ${playfair.className}`}>{faq.question}</span>
                <span className="text-navy/40 flex-shrink-0">{openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                <p className="font-serif text-navy/65 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
