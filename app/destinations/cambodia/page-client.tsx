"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const faqs = [
  { question: "Do I need a visa to enter Cambodia?", answer: "Most nationalities can obtain a tourist e-visa online in advance for around $30 USD. It's valid for 30 days. We handle all the details and can arrange seamless border crossings if you're combining Vietnam and Cambodia on a river journey." },
  { question: "When is the best time to visit Angkor Wat?", answer: "November to February offers the coolest temperatures. Arrive before 6am to watch sunrise — it's one of the most beautiful things you'll ever see. We arrange private entry and a guide who knows where the other tourists aren't." },
  { question: "Can I combine a Cambodia river cruise with a land journey?", answer: "Yes — it's the most complete way to experience it. Sail from Ho Chi Minh City up the Mekong to Phnom Penh, then continue to Siem Reap and Angkor. Seven or eight days covers the full arc beautifully." },
  { question: "What is the Tonlé Sap and why does it matter?", answer: "The Tonlé Sap is the largest freshwater lake in Southeast Asia. What makes it remarkable is that it reverses direction twice a year, filling to six times its dry-season size during monsoon. The floating villages on its shores are among the most extraordinary places you can visit." },
]

const experiences = [
  { label: "Ancient Kingdoms", title: "Angkor Before the Crowds", body: "Your guide meets you at 4:45am. The tuk-tuk moves through empty streets. By the time you reach the outer wall of Angkor Wat, the sky is a deep purple-blue and there are perhaps thirty people in the entire complex. The towers emerge slowly from the night — massive, inevitable — as if the sky is being pushed back to reveal them. When the first line of orange appears, it doesn't feel like a tourist attraction. It feels like an event. Like something that has been happening every morning for nine hundred years, with or without an audience.", image: "/images/cambodia_exp_1.avif", tag: "5:15am · Angkor Wat, Siem Reap" },
  { label: "River Capital", title: "Phnom Penh at the Confluence", body: "There is a spot in Phnom Penh called the Chaktomuk — the 'four faces' — where the Mekong, the Tonlé Sap, and the Bassac rivers meet. Sitting on a riverside terrace at dusk, watching the water turn gold, you understand why the Khmer kings chose this place. The city feels different at the waterfront. Lighter. More open. Later, you walk the promenade past families sharing takeaway noodles on the low wall, past old men playing chess on folding stools. The city doesn't perform for visitors here. It just lives.", image: "/images/cambodia_exp_2.avif", tag: "6:00pm · Riverside, Phnom Penh" },
  { label: "Floating Communities", title: "Life on the Tonlé Sap", body: "The village appears as a smudge on the water — then gradually resolves into houses, boats, a school, a floating basketball court. You board a narrow wooden boat and your guide poles you through channels between the buildings. A woman in a doorway is braiding her daughter's hair. Three boys fish off the back porch without looking at their lines. Everything is built to float and built to last — the same structures, the same families, the same routines that have continued here through floods and droughts and the upheavals of history.", image: "/images/cambodia_exp_3.avif", tag: "10:30am · Kompong Khleang, Tonlé Sap" },
]

export default function CambodiaClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <section className="relative w-full h-screen overflow-hidden">
        <Image src="/images/dest_cambodia_hero.avif" alt="Angkor Wat at sunrise, Cambodia" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/80" />
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 02 · Cambodia</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">The Kingdom of Wonder</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            Stone Temples,<br /><em className="not-italic text-white/80">Living Waters</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">The Khmer Empire left behind the greatest monuments on earth. The Mekong left behind the people who live on it.</p>
            <Link href="/plan-your-journey" className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition-colors">Plan This Journey <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from the Kingdom</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p><span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">T</span>here's a particular quality to the light at Angkor in the early morning — a diffuse, rose-gold softness that makes the stone look warm, almost alive. The towers of Angkor Wat rise from the mist and the reflecting pools in a way that resists every photograph you've ever seen of them, because what the photograph can't capture is the scale. The sheer mass. The sense that something enormous was built here, over many generations, by a civilization that understood it would outlast them — and built accordingly.</p>
          <p>Cambodia is a country that carries its history in two directions simultaneously: the ancient, golden arc of the Khmer Empire, stretching across five centuries of artistic achievement; and the recent, painful decades that ended only in 1979. Both are present. Both inform everything. The temples at Angkor, the floating villages on the Tonlé Sap, the vibrant chaos of Phnom Penh's riverside — they all exist in that conversation between what was and what is being carefully, quietly rebuilt.</p>
          <p>What strikes most travelers who come here with an open itinerary and good guidance is the warmth. Cambodia has been through extraordinary loss — a third of its population within a single decade — and what has come out the other side is a culture that greets visitors with a gentleness and genuine curiosity that feels remarkable, given everything. The people here haven't forgotten. They've simply chosen, collectively and without announcement, to be generous anyway.</p>
          <p>The Mekong through Cambodia runs wide and brown and powerful. The river traffic here is different from Vietnam — fewer sampans, more cargo, the occasional passenger ferry crossing heavy in the water. But the communities along its banks are equally alive, equally rooted in the rhythms of the river. Arrive in flood season and entire villages are accessible only by boat. The roads are underwater. The life continues.</p>
          <p>To sail Cambodia's stretch of the Mekong is to understand that the river doesn't care about borders. It simply continues — wide, unhurried, magnificent — feeding the lake, feeding the fields, feeding the families that have lived on it for generations beyond counting.</p>
        </div>
      </section>

      <section className="bg-navy py-20 px-8 text-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic">"The light at Angkor at 5:30 in the morning will do something to you. We can't explain what, exactly. You'll have to go and find out."</p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Siem Reap</p>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What Cambodia Feels Like</h2>
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
        <Image src="/images/dest_cambodia_hero.avif" alt="Cambodia" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>"A country defined by what it lost — and quietly astonishing in what it kept."</p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">What You Need to Know</p>
              <h2 className={`text-4xl text-navy mb-10 ${playfair.className}`}>Before You Go</h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[{ label: "Best Season", value: "November – February" }, { label: "Entry", value: "E-visa online, ~$30 USD" }, { label: "Currency", value: "US Dollar & Cambodian Riel" }, { label: "Language", value: "Khmer · English widely spoken" }, { label: "Base Cities", value: "Phnom Penh & Siem Reap" }, { label: "Journey Length", value: "3 to 8 days recommended" }].map((item) => (
                  <div key={item.label}><p className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-1">{item.label}</p><p className="font-serif text-navy/80">{item.value}</p></div>
                ))}
              </div>
            </div>
            <div className="bg-[#f7f4ef] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your Cambodia Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>Temples, river, and the people who make it real.</p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">Our Cambodia journeys move between Angkor's ancient grandeur, the Mekong's living culture, and the Tonlé Sap's extraordinary floating communities. We design each itinerary from scratch around what you want to feel, not just what you want to see.</p>
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
