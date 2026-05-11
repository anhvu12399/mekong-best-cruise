"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const faqs = [
  { question: "What is China's relationship to the Mekong River?", answer: "The Mekong begins in China — born as the Lancang Jiang on the Tibetan Plateau, descending through Yunnan Province's dramatic gorges before crossing into Southeast Asia. China controls the river's headwaters and has built a series of dams on its upper reach that profoundly affect water levels and fish populations downstream. Understanding this upstream relationship is essential context for any serious Mekong journey." },
  { question: "Where can I experience the upper Mekong in China?", answer: "Yunnan Province is the primary destination — specifically the ancient tea-horse trade route towns of Dali, Lijiang, and Shangri-La, and the extraordinary Tiger Leaping Gorge where the river (known locally as Jinsha Jiang at this point) cuts through one of the deepest canyons in the world. The hiking here is world-class and the landscape is unlike anything downstream." },
  { question: "What is the ancient tea-horse road?", answer: "The Tea Horse Road (Cha Ma Gu Dao) was a network of caravan trails connecting Yunnan's tea-producing regions with Tibet, along which merchants traveled with horses, mules, and massive bundles of compressed tea. The trail passed through the Mekong's upper gorges and represents one of the great overland trade routes of Asia. Many of the old caravanserai towns along the route still exist." },
  { question: "Is it possible to trace the Mekong from its source in China all the way to Vietnam?", answer: "In principle, yes. In practice, it takes two to three weeks, requires navigating several different visa regimes and border crossings, and demands expert logistical planning. We have done it. It is one of the greatest journeys available to any traveler — and we can arrange it for those with the time and appetite." },
]

const experiences = [
  { label: "The Gorge", title: "Tiger Leaping Gorge at the Narrowing", body: "The canyon walls are over three thousand meters above your head. The river is two hundred meters below you, white and violent, crashing through a gap so narrow a tiger allegedly leaped across it — hence the name. You're on the high trail, a stone path cut directly into the cliff face, with nothing between you and the drop except a low stone wall and your own careful footing. The scale of it silences everything. Your guide, who has walked this trail perhaps two hundred times, still stops at the same viewpoint every time. He says he can't help it. You understand completely.", image: "/images/china_exp_1.avif", tag: "High Trail · Tiger Leaping Gorge, Yunnan" },
  { label: "Tea Country", title: "Lijiang and the Tea Horse Road", body: "The old town of Lijiang has been continuously occupied for over eight hundred years and sits in a valley at 2,400 meters, with snow peaks visible from the central market square on clear days. The Tea Horse Road ran through here — merchants with mule trains carrying compressed tea bricks north to Tibet, bringing horses south in return. You walk the cobblestone lanes of the old town in the early morning before the tourist groups arrive. A grandmother sweeps her doorstep in the traditional Naxi dress. The smell of roasting tea comes from a shop that has been roasting it for three generations.", image: "/images/china_exp_2.avif", tag: "Dawn walk · Lijiang Old Town, Yunnan" },
  { label: "Source Country", title: "The River Before the River", body: "Near Shangri-La (Zhongdian), the upper Mekong — called the Lancang here — is barely a river at all. A cold, fast-moving stream descending from high alpine pastures, threading between yak herds and prayer-flag-draped monasteries perched on ridges. You drive a switchback road to a viewpoint where the valley spreads below you and the young river is visible from above, silver against the brown earth. Your guide points upstream, toward where it comes from — the Tibetan Plateau, another two days north by bad road. 'That's where it begins,' he says. 'Everything downstream is because of that.'", image: "/images/china_exp_3.avif", tag: "Above the valley · Near Shangri-La, Yunnan" },
]

export default function ChinaClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <section className="relative w-full h-screen overflow-hidden">
        <Image src="/images/dest_china_hero.avif" alt="Tiger Leaping Gorge, Yunnan China" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-8 lg:px-16 py-8 border-b border-white/10">
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Destinations</span>
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">Issue No. 06 · China</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16 z-10">
          <p className="text-gold text-[11px] tracking-[0.4em] uppercase font-bold mb-4">Where the Mekong Begins</p>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-6 max-w-4xl ${playfair.className}`}>
            The River<br /><em className="not-italic text-white/80">Before the River</em>
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-white/75 text-lg md:text-xl font-serif max-w-xl leading-relaxed">The Mekong is born in China's Yunnan — as the Lancang Jiang, carving through gorges deeper than the Grand Canyon before becoming the river of Southeast Asia.</p>
            <Link href="/plan-your-journey" className="hidden md:flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition-colors">Plan This Journey <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Dispatch from Yunnan</p>
        <div className="font-serif text-navy/80 text-xl md:text-2xl leading-[1.8] space-y-6">
          <p><span className="float-left text-8xl leading-[0.75] mr-4 text-navy font-bold">T</span>he Mekong doesn't begin in Vietnam, or Cambodia, or any of the countries most travelers associate with it. It begins on the Tibetan Plateau at over 5,000 meters elevation, a cold trickle in an alpine landscape of yaks and prayer flags and absolute stillness. By the time it reaches Yunnan Province in southern China, it has become the Lancang Jiang — the Turbulent River — a powerful, fast-moving force cutting through some of the deepest gorges in the world before it crosses the border and becomes the Mekong of the guidebooks.</p>
          <p>Yunnan is China's most diverse and, for many travelers, most beautiful province. Home to twenty-five of China's fifty-five recognized ethnic minorities, it sits at the crossroads of China, Southeast Asia, and the Tibetan world — culturally, geographically, gastronomically. The food here is nothing like the Chinese food you've eaten anywhere else: wild mushrooms from the mountains, goat cheese unique to the Naxi people, ham cured for years in the cool highland air, the local puer tea pressed into cakes and aged for decades.</p>
          <p>Tiger Leaping Gorge is the dramatic center of Yunnan's upper Mekong experience — a canyon so deep and so vertical that standing on the high trail feels less like hiking and more like a geological event you're witnessing in real time. The walls rise over three kilometers. The river at the bottom is invisible except for the sound. When it comes into view at the narrowing — the tiger's leap — it is white and violent and indifferent to the considerable human drama that has unfolded on its banks over the centuries.</p>
          <p>The old Tea Horse Road towns — Lijiang, Dali, Shangri-La — provide the human counterpoint. These were trading posts on one of Asia's great overland routes, where merchants from the lowlands exchanged compressed tea for Tibetan horses, and where cultures mixed for centuries in the cobblestone plazas and caravanserai that still stand. Walking Lijiang's old town in the early morning, before the tour groups arrive, you find yourself in a place that is simultaneously ancient and alive, preserved and genuinely inhabited.</p>
          <p>To come to Yunnan is to find the beginning of something that doesn't end until the Mekong enters the South China Sea, five thousand kilometers south. Standing at Tiger Leaping Gorge and watching the river descend, you understand that everything you've seen or will see downstream started here — this cold, powerful, indifferent force that has been flowing in the same direction for longer than any human civilization on its banks.</p>
        </div>
      </section>

      <section className="bg-navy py-20 px-8 text-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto font-serif italic">"The Mekong in Yunnan is not yet patient. It is still young. It will learn patience when it reaches the delta. For now, it simply descends."</p>
        <p className="text-gold text-[11px] tracking-[0.3em] uppercase mt-8 font-bold">— Field Notes, Tiger Leaping Gorge</p>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Three Dispatches</p>
            <h2 className={`text-4xl md:text-5xl text-navy ${playfair.className}`}>What China's Mekong Feels Like</h2>
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
        <Image src="/images/dest_china_hero.avif" alt="China Mekong gorge" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className={`text-white text-3xl md:text-5xl max-w-3xl mx-auto leading-tight ${playfair.className}`}>"This is where five thousand kilometers begin. Everything downstream is an echo of this gorge."</p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#e0d9ce]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold mb-6">What You Need to Know</p>
              <h2 className={`text-4xl text-navy mb-10 ${playfair.className}`}>Before You Go</h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[{ label: "Best Season", value: "March – May & September – November" }, { label: "Entry", value: "Chinese visa required (apply in advance)" }, { label: "Currency", value: "Chinese Yuan (CNY)" }, { label: "Language", value: "Mandarin · Minority languages in Yunnan" }, { label: "Key Destinations", value: "Lijiang, Dali, Tiger Leaping Gorge" }, { label: "Journey Length", value: "7 to 14 days for Yunnan" }].map((item) => (
                  <div key={item.label}><p className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-1">{item.label}</p><p className="font-serif text-navy/80">{item.value}</p></div>
                ))}
              </div>
            </div>
            <div className="bg-[#f7f4ef] p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8B4A2A] mb-6">Your China Journey</p>
                <p className={`text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>Gorges, ancient towns, and the river before it becomes the Mekong.</p>
                <p className="font-serif text-navy/65 leading-relaxed mb-8">We design Yunnan itineraries that combine the dramatic upper gorge landscapes with the cultural depth of the tea-horse road towns — and for those who want the full river story, we can arrange a journey that follows the Mekong from China all the way to the South China Sea.</p>
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
