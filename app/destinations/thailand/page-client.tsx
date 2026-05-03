"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const destinationSlides = [
  {
    title: "SKYWALK\nPANORAMAS",
    description: "Take in sweeping, breathtaking views of the mighty Mekong from the soaring glass Skywalks in Nong Khai, perched high above the riverbanks.",
    linkText: "VIEW PANORAMAS",
    image: "/images/dest_thailand.avif"
  },
  {
    title: "BORDER\nMARKETS",
    description: "Dive into the bustling cross-border trade between Thailand and Laos. Explore vibrant markets offering an array of unique, exotic local goods and fresh produce.",
    linkText: "EXPLORE MARKETS",
    image: "/images/floating-markets-v2.avif"
  },
  {
    title: "SACRED\nTEMPLES",
    description: "Discover ancient, deeply venerated border temples such as Wat Tai Phra Chao Yai Ong Tue, and immerse yourself in the profound spirituality of Isan.",
    linkText: "VISIT TEMPLES",
    image: "/images/sacred-temples.avif"
  }
]

const faqs = [
  {
    question: "Where do Mekong River cruises start in Thailand?",
    answer: "Many journeys begin in Northern Thailand around Chiang Khong or the Golden Triangle region, crossing over into Laos to begin the classic Slow Boat journey to Luang Prabang."
  },
  {
    question: "What is Isan cuisine?",
    answer: "Isan is the Northeastern region of Thailand bordering the Mekong. Its cuisine is famous for bold, fiery, and tangy flavors. Signature dishes include Som Tum (papaya salad) and Larb (minced meat salad)."
  },
  {
    question: "Is the Nong Khai Skywalk safe?",
    answer: "Yes, the Wat Pha Tak Suea Skywalk is built to rigorous modern engineering standards, featuring a thick, transparent glass floor offering safe yet thrilling panoramic views of Laos across the river."
  },
  {
    question: "Do I need a visa to cross the border into Laos?",
    answer: "Most nationalities can obtain a Visa on Arrival when crossing from Thailand into Laos at major border checkpoints, including the Friendship Bridges and Chiang Khong."
  },
  {
    question: "What souvenirs should I buy at the border markets?",
    answer: "Border markets are excellent for finding unique textiles, dried tropical fruits, locally grown coffee, Thai tea blends, and intricate handmade wooden crafts."
  }
]

export default function ThailandClient() {
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
              Along its journey, the Mekong acts as a majestic natural border between Thailand and Laos, weaving through lush hills and vibrant border towns. This stretch of the river in Northeastern Thailand, known as Isan, is a profound cultural crossroads.
            </p>
            <p className="mt-8">
              Here, visitors can experience a spectacular fusion of Thai and Lao heritage. From soaring glass skywalks that offer panoramic vistas of the valley below to the fiery, unforgettable flavors of regional cuisine, the Thai Mekong promises a rich and varied tapestry of experiences.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl text-navy mb-6 ${playfair.className}`}>
              The Thai Mekong Borderlands
            </h2>
            <p className="font-serif text-[#666] text-xl max-w-2xl mx-auto">
              A vibrant intersection of panoramic landscapes and deeply rooted spirituality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col mt-0 md:mt-20">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/hero-1.avif" alt="Panoramas" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Panoramas & Skywalks</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Take in sweeping views of the Mekong Valley from breathtaking glass Skywalks in Nong Khai. Looking out over the river into Laos, the majestic scale of the region becomes truly apparent.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/sacred-temples.avif" alt="Border Temples" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Ancient Border Temples</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Discover ancient, deeply venerated temples such as Wat Tai Phra Chao Yai Ong Tue. These spiritual hubs preserve centuries of Buddhist tradition and unique regional architecture.
              </p>
            </div>

            <div className="flex flex-col mt-0 md:mt-40">
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src="/images/floating-markets-v2.avif" alt="Isan Flavors" fill className="object-cover" />
              </div>
              <h3 className={`text-2xl text-navy mb-3 ${playfair.className}`}>Isan Flavors & Markets</h3>
              <p className="text-[#555] font-serif leading-relaxed">
                Dive into bustling cross-border trade at local markets. Savor the bold, fiery flavors characteristic of Northeastern Thailand, and shop for unique delicacies like dried tropical fruits and Thai tea.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 border-t border-navy/10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
              Thailand FAQ
            </h2>
            <p className="text-[#666] font-serif text-xl">
              Essential information for exploring the Isan border region.
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
