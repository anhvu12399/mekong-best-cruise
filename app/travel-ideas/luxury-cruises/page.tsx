import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luxury Mekong River Cruises — Travel Ideas & Inspiration",
  description: "Sunset champagne on the observation deck, temple mornings in Cambodia, and the slow art of doing nothing aboard the finest luxury ships on the Mekong River.",
  keywords: ["luxury Mekong river cruises", "Mekong river cruise luxury", "best Mekong cruises", "Aqua Mekong", "Jayavarman cruise", "Mekong Jewel", "luxury cruise Cambodia Vietnam", "Mekong river inspiration"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/luxury-cruises",
  },
  openGraph: {
    title: "Luxury Mekong River Cruises — Travel Ideas & Inspiration",
    description: "Sunset champagne on the observation deck, temple mornings in Cambodia, and the slow art of doing nothing aboard the finest luxury ships on the Mekong River.",
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
};

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
            Travel Ideas · 2–7 Nights
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            The Slow<br />Art of<br />River Luxury
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            A Mekong cruise doesn&apos;t take you somewhere.
            It takes something away — the noise, the schedule, the need to be anywhere else.
          </p>
        </div>
      </section>

      {/* ── OPENING ESSAY ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Chapter One</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Somewhere between Ho Chi Minh City and Phnom Penh, the clock stops working.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            You notice it on the second morning. The alarm you set out of habit goes off, and you realize you have absolutely nowhere to be. The ship is already moving. Coffee appears on the private balcony — nobody knocked, nobody asked, it&apos;s just there, steaming, alongside a small plate of fruit that someone arranged like a still life.
          </p>
          <p>
            Outside, the Mekong is doing what it always does: being itself. A fisherman casts a net in a perfect circle. A woman paddles past in a boat so low it barely breaks the surface. Somewhere in the distance, a temple bell rings — thin and clear and completely indifferent to your existence. This is what luxury means on this river. Not marble. Not chandeliers. Just the gift of being unscheduled in a world that never stops scheduling.
          </p>
          <p>
            The ships that navigate this river have learned this lesson. The best of them — the Aqua Mekong, the Jayavarman, the Mekong Jewel — don&apos;t compete with the landscape. They frame it. Floor-to-ceiling glass. Observation decks that face west for sunset. Plunge pools that hold the sky. The architecture says: <em>look out, not in</em>.
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

      {/* ── THE RHYTHM ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Chapter Two</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The rhythm of a river day
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Dawn comes early and gently. The light turns the water from pewter to bronze to gold, and if you&apos;re awake for it — which you should be, at least once — you&apos;ll see the delta come alive like a theater curtain rising. Fishing boats emerge from the mist. Smoke rises from village kitchens. A rooster crows from a bankside garden that you&apos;ll never see again.
          </p>
          <p>
            Breakfast is unhurried. The good ships serve phở alongside eggs Benedict, and the smart money is on the phở — the broth has been simmering since 4 AM, and the herbs were picked that morning from a kitchen garden on the top deck. After that, the excursions begin, but &quot;excursion&quot; is the wrong word for what actually happens. You climb into a smaller boat, glide through a narrow canal, and find yourself in someone&apos;s actual life.
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

      {/* ── THE FOOD ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Chapter Three</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
            The food is the other destination
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              The chef on the Jayavarman buys fish from a boat that pulls alongside at 6 AM. He doesn&apos;t know what he&apos;ll serve for dinner until he sees what&apos;s in the net. This isn&apos;t farm-to-table — it&apos;s river-to-plate, and the difference matters. The catfish is so fresh it barely needs cooking. The morning glory is stir-fried with garlic that still has dirt on it. The amok curry arrives in a banana leaf and tastes like Cambodia.
            </p>
            <p>
              On the Aqua Mekong, the approach is different but equally obsessive. A consulting chef with Michelin connections has built a menu that reads like poetry: &quot;deconstructed spring roll with Kampot pepper foam,&quot; &quot;Mekong prawn ceviche with green mango.&quot; It sounds pretentious until you taste it, and then it just sounds right. The observation deck becomes a dining room at night. Candles. Stars. The soft sound of the river against the hull. You order another glass of Sancerre and wonder why you ever eat indoors.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/jayavarman_lounge.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;The river is patient. It was here before the temples, before the empires, before us. A good cruise understands this: you are the guest, not the main event.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── THE DETAILS ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Before you book
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Best Season</h3>
            <p>October through April. The dry season means calmer waters and clearer skies. November is arguably perfect — the rains have just stopped, and everything is impossibly green.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Duration</h3>
            <p>Most itineraries run 3 to 7 nights. Three nights gives you the highlights; seven nights gives you the silences. We recommend at least four.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">From Ho Chi Minh City</h3>
            <p>Most cruises depart from Mỹ Tho, about 90 minutes from central Saigon. The drive through the delta is part of the experience — rice paddies, fruit orchards, the world getting flatter and greener.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">What to Pack</h3>
            <p>Light linen. A good hat. Sunscreen that smells like nothing. Binoculars if you care about birds (you should). A journal — not for Instagram, for yourself.</p>
          </div>
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
              <span className="font-bold">A Slow Day in the Mekong</span> — From mist to lanterns, hour by unhurried hour.
            </Link>
            <Link href="/travel-ideas/floating-markets" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Breakfast Arrives by Boat</span> — Phở at dawn on the floating market.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to drift?</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Explore our fleet of handpicked luxury vessels, each with its own character and story.
          </p>
          <Link
            href="/cruises"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View Our Fleet
          </Link>
        </div>
      </section>
    </main>
  );
}
