"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinationSlides = [
  {
    title: "THE UPPER\nLANCANG",
    description: "Witness the mighty Mekong at its very genesis. Flowing rapidly through dramatic highland plateaus and steep gorges, the upper river presents a stark, thrilling contrast to the languid lower delta.",
    linkText: "EXPLORE THE SOURCE",
    image: "/images/dest_china.png"
  },
  {
    title: "YUNNAN'S\nWONDERS",
    description: "Journey through Yunnan Province, a land of majestic mountain ranges, lush, breathtaking nature reserves, and deeply entrenched historical trade routes.",
    linkText: "DISCOVER YUNNAN",
    image: "/images/hero-2.avif"
  },
  {
    title: "ANCIENT\nHERITAGE",
    description: "Immerse yourself in the distinct, colorful traditions of Tibetan and ethnic minority communities residing in the ancient, cobblestoned riverside towns along the Lancang.",
    linkText: "CULTURAL JOURNEYS",
    image: "/images/sacred-temples.avif"
  }
]

const faqs = [
  {
    question: "What is the Lancang River?",
    answer: "The Lancang is the Chinese name for the upper half of the Mekong River. It originates in the Tibetan Plateau and flows through Qinghai, Tibet, and Yunnan before entering Southeast Asia."
  },
  {
    question: "Is it possible to take a river cruise on the Lancang?",
    answer: "Unlike the broad, flat lower Mekong, the upper Lancang flows rapidly through deep, narrow gorges. While extensive multi-day luxury cruising isn't possible here, we offer breathtaking land-based explorations and short, scenic boat trips."
  },
  {
    question: "When is the best time to visit Yunnan?",
    answer: "Spring (March to May) and Autumn (September to November) offer the most pleasant weather, with clear skies perfect for appreciating the dramatic highland landscapes and ancient towns."
  },
  {
    question: "Do I need a Chinese visa?",
    answer: "Yes, a tourist visa is required for most nationalities to enter China. Our concierge team can assist in providing the necessary itinerary documentation for your visa application."
  },
  {
    question: "What kind of cuisine can I expect?",
    answer: "Yunnan cuisine is incredibly diverse, reflecting the province's many ethnic minorities. Expect bold flavors, lots of fresh wild mushrooms, unique goat cheeses, and the famous 'Crossing the Bridge' noodles."
  }
]

export default function ChinaClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinationSlides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinationSlides.length) % destinationSlides.length)
    setProgress(0)
  }

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % destinationSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <>
      <main className="min-h-screen bg-[#fbfaf8]">
        <section className="relative w-full h-screen overflow-hidden bg-navy">
          {destinationSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title.replace('\n', ' ')}
                fill
                priority={index === 0}
                className={`object-cover ${index === currentSlide ? "animate-[slowZoom_20s_ease-in-out_infinite_alternate]" : ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
            </div>
          ))}
          
          <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-20 px-6 lg:px-16 max-w-[90rem] mx-auto w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-24">
              <div className="lg:col-span-7">
                <h1 className={`text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] uppercase tracking-widest drop-shadow-xl ${playfair.className}`}>
                  {destinationSlides[currentSlide].title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <div className="w-48 h-0.5 bg-white/80 mt-8 md:mt-12" />
              </div>

              <div className="lg:col-span-5 flex flex-col items-start text-left lg:pb-2">
                <p className="text-white/95 text-base md:text-lg leading-relaxed mb-8 max-w-lg drop-shadow-md font-medium">
                  {destinationSlides[currentSlide].description}
                </p>
                <button 
                  onClick={() => window.open("https://www.toursmekong.com/", "_blank")}
                  className="text-white text-sm tracking-[0.2em] uppercase flex items-center gap-3 hover:text-gold transition-colors font-semibold"
                >
                  {destinationSlides[currentSlide].linkText} <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/30 pt-8 gap-6 md:gap-0">
              <div className="flex items-center gap-8 text-white/90 text-sm tracking-widest uppercase font-medium w-full md:w-auto justify-center md:justify-start">
                <button className="hover:text-gold transition-colors">Ships</button>
                <button className="hover:text-gold transition-colors">FAQ</button>
              </div>
              
              <div className="flex items-center gap-6 text-white font-medium text-sm tracking-widest flex-1 justify-center md:ml-32">
                <span>{String(currentSlide + 1).padStart(2, '0')}</span>
                <div className="w-48 md:w-80 h-px bg-white/20 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
                <span>{String(destinationSlides.length).padStart(2, '0')}</span>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
                <button onClick={prevSlide} className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all group">
                  <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button onClick={nextSlide} className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all group">
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="prose prose-lg md:prose-xl mx-auto prose-p:text-[#333] prose-p:leading-relaxed font-serif">
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-navy first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mt-2">
              Before it becomes the lifeblood of Southeast Asia, the mighty Mekong is known in China as the Lancang. Originating in the icy extremes of the Tibetan Plateau, it courses fiercely through the dramatic highlands and steep gorges of Yunnan Province.
            </p>
            <p className="mt-8">
              To explore the upper Lancang is to witness a landscape of staggering, raw beauty. Here, among snow-capped peaks and ancient trade routes, vibrant ethnic minority communities have preserved their profound heritage, offering an entirely different, highly spiritual perspective of the river's great journey.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl text-navy mb-6 ${playfair.className}`}>
              The Upper Lancang
            </h2>
            <p className="font-serif text-[#666] text-xl max-w-2xl mx-auto">
              Discover the breathtaking origins of the mighty Mekong River.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col mt-0 md:mt-20">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-1.avif" alt="The Upper Lancang" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>The River's Source</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Witness the Mekong in its fierce youth. The Lancang flows rapidly through dramatic highland plateaus and terrifyingly steep gorges, offering a stark contrast to the languid, sprawling lower delta.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-2.avif" alt="Yunnan's Natural Wonders" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Yunnan's Natural Wonders</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Explore majestic mountain ranges, lush, breathtaking nature reserves, and sprawling terraced landscapes. Yunnan Province is a haven for those seeking profound natural beauty and untouched serenity.
              </p>
            </div>

            <div className="flex flex-col mt-0 md:mt-40">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/sacred-temples.avif" alt="Indigenous Heritage" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Indigenous Heritage</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Immerse yourself in the distinct, colorful traditions of Tibetan and ethnic minority communities. Wander through beautifully preserved, cobblestoned ancient towns that have stood by the river for centuries.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-navy/10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
              China FAQ
            </h2>
            <p className="text-[#666] font-serif text-xl">
              Essential information for exploring the Lancang River.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-navy/10 pb-2">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex justify-between items-center w-full text-left py-4 group"
                >
                  <span className={`text-xl text-navy group-hover:text-gold transition-colors ${playfair.className}`}>
                    {faq.question}
                  </span>
                  <span className="text-navy/50 ml-4 flex-shrink-0 transition-transform duration-300">
                    {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#555] font-serif leading-relaxed pr-12 text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center px-6 py-24 border-t border-navy/10 mt-12">
          <h2 className={`text-4xl md:text-5xl text-navy mb-8 ${playfair.className}`}>
            Ready to Write Your Own Chapter?
          </h2>
          <p className="text-[#555] font-serif text-lg md:text-xl mb-12">
            Speak with our destination experts to curate a bespoke journey that transcends the ordinary.
          </p>
          <button
            onClick={() => window.open("https://www.toursmekong.com/", "_blank")}
            className="inline-block bg-navy text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300"
          >
            Request a Quote
          </button>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </>
  )
}
