"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinationSlides = [
  {
    title: "PHNOM\nPENH",
    description: "Watch the sun dip below the Mekong in the capital city. Explore the majestic Royal Palace and uncover profound, sobering history at the Tuol Sleng Genocide Museum.",
    linkText: "EXPLORE THE CAPITAL",
    image: "/images/dest_cambodia.avif"
  },
  {
    title: "IRRAWADDY\nDOLPHINS",
    description: "Journey to Kratie to marvel at the rare, critically endangered freshwater Irrawaddy dolphins swimming freely in the pristine stretches of the upper Cambodian Mekong.",
    linkText: "DISCOVER WILDLIFE",
    image: "/images/hero-1.avif"
  },
  {
    title: "SACRED\nSHORES",
    description: "Visit Kandal's Arey Khsath Church, a renowned spiritual site home to a revered statue of Our Lady of the Mekong, miraculously recovered from the river depths.",
    linkText: "VISIT KANDAL",
    image: "/images/sacred-temples.avif"
  }
]

const faqs = [
  {
    question: "Do I need a visa to enter Cambodia?",
    answer: "Yes, most nationalities require a visa. An e-Visa can be easily obtained online prior to your trip, or a Visa on Arrival is available at major border crossings and airports."
  },
  {
    question: "Is it safe to travel along the Cambodian Mekong?",
    answer: "Absolutely. Our luxury river cruises are operated with the highest international safety standards, and Cambodia is a welcoming, deeply hospitable country for travelers."
  },
  {
    question: "What is the best time of year to see the Irrawaddy dolphins?",
    answer: "The dry season, from December to May, is generally the best time to spot the dolphins in Kratie, as lower water levels concentrate the dolphins in deeper pools."
  },
  {
    question: "Are shore excursions in Phnom Penh guided?",
    answer: "Yes, all excursions to the Royal Palace, Tuol Sleng, and other historical sites are led by expert local guides who provide sensitive, comprehensive historical context."
  },
  {
    question: "Can I combine Cambodia with a Vietnam cruise?",
    answer: "Yes! A classic Mekong riverboat journey seamlessly connects the bustling delta of Vietnam with the serene majesty of Cambodia via luxury cross-border cruising."
  }
]

export default function CambodiaClient() {
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
              Cambodia reveals a profoundly spiritual, serene, and majestic side of the Mekong River. As the waters cross the border, the chaotic bustle of the delta gives way to grand, sweeping curves, dense jungles, and golden spires of ancient pagodas reflecting on the surface.
            </p>
            <p className="mt-8">
              A luxury river voyage through Cambodia is a journey through time itself. From the French colonial elegance and royal grandeur of Phnom Penh to the quiet, stilted fishing villages that seem untouched by modernity, the Cambodian Mekong offers an intimate communion with a deeply resilient and beautiful culture.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl text-navy mb-6 ${playfair.className}`}>
              Cambodia Encounters
            </h2>
            <p className="font-serif text-[#666] text-xl max-w-2xl mx-auto">
              Uncover the history, wildlife, and profound spirituality of the Khmer kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col mt-0 md:mt-20">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-3.avif" alt="Phnom Penh" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Phnom Penh Majesty</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Watch the sunset over the river from the capital's vibrant promenade. Explore the glittering Royal Palace, the Silver Pagoda, and engage with the country's poignant history at the Tuol Sleng Genocide Museum.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-1.avif" alt="Wildlife" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Irrawaddy Dolphins</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Travel north to Kratie to witness one of the river's greatest miracles. Marvel at the rare, critically endangered freshwater Irrawaddy dolphins as they swim and surface freely in the pristine stretches of the upper Mekong.
              </p>
            </div>

            <div className="flex flex-col mt-0 md:mt-40">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/sacred-temples.avif" alt="Spirituality" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>River Spirituality</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Immerse yourself in local faith at Arey Khsath Church in Kandal, home to the revered statue of Our Lady of the Mekong, miraculously recovered from the river depths. Receive blessings from resident monks in quiet riverside pagodas.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-navy/10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
              Cambodia FAQ
            </h2>
            <p className="text-[#666] font-serif text-xl">
              Essential information for navigating the Khmer kingdom.
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
            Speak with our destination experts to curate a bespoke riverboat journey that transcends the ordinary.
          </p>
          <button
            onClick={() => window.open("https://www.toursmekong.com/", "_blank")}
            className="inline-block bg-navy text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300"
          >
            Request a Quote
          </button>
        </section>
      </main>
    </>
  )
}
