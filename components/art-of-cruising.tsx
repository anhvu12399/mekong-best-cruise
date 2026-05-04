import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ArtOfCruising() {
  return (
    <section className="py-20 lg:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image - Asymmetric placement */}
          <div className="relative order-2 lg:order-1 reveal-image-container overflow-hidden">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1980&auto=format&fit=crop"
                alt="Luxury river cruise on the Mekong"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-full h-full border-2 border-gold -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8 reveal-on-scroll">
            <span className="inline-block text-[#9B7B3B] text-sm tracking-[0.3em] uppercase mb-6">
              The Art of Cruising
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-8 text-balance">
              Where Luxury Meets
              <br />
              <span className="italic">Timeless Tradition</span>
            </h2>
            
            <div className="space-y-8 text-navy/70 leading-relaxed text-lg">
              <p>
                Twenty-five years ago, we made a quiet promise: that the Mekong 
                deserved to be experienced slowly. Not ticked off a list, not rushed 
                between photo stops — but truly felt. That promise still shapes every 
                single journey we create today.
              </p>
              
              <p>
                Our ships are small by design. With never more than 28 guests aboard, 
                there are no crowds at the railing, no strangers at your dinner table. 
                Just the river, the silence of dusk over the water, and the kind of 
                unhurried conversation that only happens when time isn&apos;t a constraint.
              </p>
              
              <p>
                We&apos;ve spent decades building trust with the communities along this river — 
                the fishermen who still cast nets by moonlight, the monks who open 
                their temple doors at dawn, the market women who&apos;ve been cooking the 
                same recipes for generations. They are the reason we sail. Their world 
                is what we come to share with you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#9B7B3B]">25+</span>
                <p className="text-sm text-navy/60 mt-2">Years of Excellence</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#9B7B3B]">12</span>
                <p className="text-sm text-navy/60 mt-2">Unique Itineraries</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#9B7B3B]">98%</span>
                <p className="text-sm text-navy/60 mt-2">Guest Satisfaction</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a 
                href="/experiences"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <span>View Deck Plans</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
