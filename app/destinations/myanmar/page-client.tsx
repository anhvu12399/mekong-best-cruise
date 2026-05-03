"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinationSlides = [
  {
    title: "GOLDEN\nTRIANGLE",
    description: "Sail the upper reaches to witness the legendary convergence of three nations. Explore the vibrant border hubs where Myanmar meets Thailand and Laos.",
    linkText: "EXPLORE THE BORDER",
    image: "/images/dest_myanmar.avif"
  },
  {
    title: "IRRAWADDY\nCRUISES",
    description: "Embark on one of Asia's premier luxury river cruise routes. Marvel at the pristine natural beauty of the landscape dotted with thousands of ancient stupas and pagodas.",
    linkText: "VIEW RIVER JOURNEYS",
    image: "/images/hero-2.avif"
  },
  {
    title: "INDIGENOUS\nCULTURES",
    description: "Venture deep into authentic, untouched regions to visit sacred temples and engage in meaningful, respectful interactions with Myanmar's diverse indigenous tribes.",
    linkText: "CULTURAL ENCOUNTERS",
    image: "/images/cultural-encounters-v2.avif"
  }
]

const faqs = [
  {
    question: "Is it safe to travel to the Myanmar side of the Golden Triangle?",
    answer: "Safety is our utmost priority. We only operate tours in thoroughly vetted, stable regions along the border, partnering exclusively with trusted local experts to ensure a secure and seamless experience."
  },
  {
    question: "What is the difference between the Mekong and the Irrawaddy?",
    answer: "While the Mekong skirts the eastern border of Myanmar (the Golden Triangle), the Irrawaddy is the country's main central waterway, famous for its luxurious river cruises passing through Bagan and Mandalay."
  },
  {
    question: "Do I need a visa for Myanmar?",
    answer: "Yes, most foreign nationals require a visa to enter Myanmar. An e-Visa for tourism is generally straightforward to apply for online prior to your journey."
  },
  {
    question: "Can I combine a Myanmar cruise with other Mekong destinations?",
    answer: "While direct river navigation between the central Irrawaddy and the lower Mekong isn't possible, we expertly arrange land and air transfers to create a grand, multi-country Indochina itinerary."
  },
  {
    question: "What should I wear when visiting local tribes?",
    answer: "Conservative and respectful attire is essential. Shoulders and knees should be covered, and it is customary to ask for permission through your guide before taking photographs of local people."
  }
]

export default function MyanmarClient() {
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
              Where the Mekong grazes the eastern border of Myanmar lies the legendary Golden Triangle—a place of captivating mystique, breathtaking landscapes, and complex history where three sovereign nations converge.
            </p>
            <p className="mt-8">
              Myanmar offers travelers an incredibly rare glimpse into a deeply traditional world. From the bustling, vibrant border towns along the Mekong to the vast, temple-studded plains of Bagan along the mighty Irrawaddy River, a journey here is characterized by profound spiritual encounters and awe-inspiring natural beauty.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl text-navy mb-6 ${playfair.className}`}>
              Mystique of Myanmar
            </h2>
            <p className="font-serif text-[#666] text-xl max-w-2xl mx-auto">
              Delve into a land of golden pagodas, rich tribal heritage, and premier river cruising.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col mt-0 md:mt-20">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-3.avif" alt="The Golden Triangle" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>The Golden Triangle</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Experience the thrill of navigating the exact point where Myanmar, Laos, and Thailand meet. Explore bustling border markets and the evolving entertainment hubs along the Myanmar frontier.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-2.avif" alt="Irrawaddy River Cruises" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Irrawaddy River Cruises</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Beyond the Mekong, Myanmar boasts the Irrawaddy—one of Asia's premier luxury river cruise routes. Drift slowly past thousands of ancient, crumbling stupas glowing in the golden twilight.
              </p>
            </div>

            <div className="flex flex-col mt-0 md:mt-40">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/cultural-encounters-v2.avif" alt="Cultural Encounters" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Cultural Encounters</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Step back in time as you visit sacred, incense-filled temples. Engage in meaningful and respectful interactions with Myanmar's diverse indigenous hill tribes, learning about their rich, preserved heritage.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-navy/10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
              Myanmar FAQ
            </h2>
            <p className="text-[#666] font-serif text-xl">
              Essential information for navigating the Golden Land.
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </>
  )
}
