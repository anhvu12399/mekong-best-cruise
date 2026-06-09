import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Mekong River Cruises — Travel Ideas & Inspiration",
  description: "Experience the slow art of river luxury. Discover the Vĩnh Xương border crossing, taste authentic Cambodian fish amok, and savor beef lok lak with Kampot pepper.",
  keywords: ["luxury Mekong river cruises", "Mekong river cruise luxury", "best Mekong cruises", "Aqua Mekong", "Jayavarman cruise", "Mekong Jewel", "luxury cruise Cambodia Vietnam", "Vinh Xuong border crossing", "Kampot pepper"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/luxury-cruises",
  },
  openGraph: {
    title: "Luxury Mekong River Cruises — Travel Ideas & Inspiration",
    description: "Experience the slow art of river luxury. Discover the Vĩnh Xương border crossing, taste authentic Cambodian fish amok, and savor beef lok lak with Kampot pepper.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/luxury-cruises",
    images: [{ url: "https://www.mekongrivercruise.com/images/jayavarman.avif", width: 1200, height: 630, alt: "Luxury cruise on the Mekong at golden hour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mekong River Cruises",
    description: "Sunset champagne, temple mornings, and the slow art of doing nothing on the Mekong.",
    images: ["https://www.mekongrivercruise.com/images/jayavarman.avif"],
  },
}

export default function LuxuryCruisesPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/jayavarman.avif"
          alt="Luxury cruise on the Mekong at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · 7 Nights
          </p>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            The Slow<br />Art of<br />River Luxury
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            A Mekong cruise doesn&apos;t take you somewhere. It takes something away — the noise, the schedule, the need to be anywhere else.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Chapter One</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Somewhere between Ho Chi Minh City and Phnom Penh, the clock stops working.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            You notice it on the second morning. The alarm you set out of habit goes off, and you realize you have absolutely nowhere to be. The ship is already moving. Coffee appears on the private balcony — nobody knocked, nobody asked, it&apos;s just there, steaming, alongside a small plate of fruit that someone arranged like a still life.
          </p>
          <p>
            One of the most extraordinary transitions of this journey is crossing the international border at Vĩnh Xương (Vietnam) and Kaam Samnor (Cambodia). On standard land tours, border crossings are a chaotic maze of queues and paperwork. Here, it is an exercise in leisure. You sit on the observation deck with a chilled glass of lemongrass tea while the ship&apos;s purser handles all customs and visa formalities. The river simply widens, and you find yourself in Cambodia.
          </p>
          <p>
            The ships that navigate this river have learned this lesson. The best of them — the Aqua Mekong, the Jahan, the Mekong Jewel — don&apos;t compete with the landscape. They frame it. Floor-to-ceiling glass. Observation decks that face west for sunset. Plunge pools that hold the sky. The architecture says: <em>look out, not in</em>.
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/jayavarman_deck.avif"
          alt="Couple watching sunset from the observation deck"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Chapter Two</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The taste of two nations
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            As you cross from Vietnam into Cambodia, the flavors on board evolve. The light, herb-heavy pho of the Vietnamese mornings gives way to the aromatic, spice-rich dishes of Cambodia.
          </p>
          <p>
            The culinary highlight of the Cambodian stretch is Fish Amok — a delicate national dish made of fresh river catfish, steamed in coconut milk and a rich kroeung herb paste, wrapped inside a folded banana leaf. It is soft, fragrant, and slightly sweet. Alongside it, chefs serve traditional Beef Lok Lak: tender cubes of beef stir-fried in a savory soy-garlic glaze, served with a essential dipping sauce of fresh lime juice and crushed Kampot pepper, prized worldwide for its floral aroma and clean heat.
          </p>
          <p>
            This is not hotel dining. This is river dining — fresh, local, and deeply reflective of the changing banks outside your window.
          </p>
        </div>
      </section>

      {/* ── THREE-IMAGE COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/sacred-temples.avif" alt="Temple morning excursion" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/luxury_dining.avif" alt="Fine dining on deck" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/luxury_sunset_balcony.avif" alt="Suite balcony at sunset" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Temple mornings · Dining under the stars · Suite balcony at dusk
        </p>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Before you book
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Border Formalities</h3>
            <p>At the Vĩnh Xương / Kaam Samnor river border, the ship&apos;s crew takes your passports to the border post. There is no need for you to disembark. You can read, relax, or watch the river traffic pass.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Culinary Journey</h3>
            <p>Every menu features both Vietnamese and Cambodian dishes, with a heavy emphasis on fresh local herbs, Kampot pepper, and freshwater fish caught by local fishermen alongside the vessel.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Duration</h3>
            <p>A full cross-border cruise takes 7 nights to connect Saigon and Siem Reap (or vice versa). Shorter 3 or 4-night segments are also available between Saigon and Phnom Penh.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">What to Pack</h3>
            <p>Light linen clothing is essential. A good hat and polarized sunglasses for the glare off the water. Proper attire (shoulders and knees covered) for temple visits in Cambodia.</p>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED ITINERARY ── */}
      <section className="py-20 bg-[#faf8f5] border-t border-[#e0d9ce]">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-[#8B4A2A] text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">
            Recommended Route
          </span>
          <h2 className={`font-serif text-3xl md:text-4xl text-navy mb-10 ${playfair.className}`}>
            How to Experience This
          </h2>

          <Link
            href="/itineraries/vietnam-cambodia"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/vc_day1.avif"
                alt="Vietnam to Cambodia Pilgrimage"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  8 Days / 7 Nights
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Vietnam — Cambodia Border Crossings
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  Vietnam to Cambodia Pilgrimage
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  A comprehensive 8-day cross-border cruise connecting Saigon, the rural Mekong Delta, Phnom Penh, and the temples of Angkor.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-navy border-b border-navy/20 pb-0.5 group-hover:text-[#8B4A2A] group-hover:border-[#8B4A2A] transition-all">
                  <span>Explore Route</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/redefining-luxury" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Luxury Isn&apos;t What You Think</span> — Privacy, invisible service, and the sound of the river at night.
            </Link>
            <Link href="/travel-ideas/slow-day" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">A Slow Day in the Mekong</span> — Doing nothing, remembering everything.
            </Link>
            <Link href="/travel-ideas/floating-markets" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Breakfast Arrives by Boat</span> — Phở at dawn on the floating market.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Ready to drift across borders?</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Explore our fleet of handpicked luxury vessels sailing between Vietnam and Cambodia. Savor the slow flow of the river.
          </p>
          <Link
            href="/itineraries/vietnam-cambodia"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore Pilgrimage Cruise</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
