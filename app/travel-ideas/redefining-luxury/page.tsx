import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luxury Isn't What You Think — Travel Ideas",
  description: "Redefining luxury on the Mekong: it is not about gold plating, it is about privacy, time, and flawless local details.",
};

export default function RedefiningLuxuryPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/redefine_hero.png"
          alt="Elegant minimalist fruit plate on a river cruise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · The New Luxury
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Luxury Isn&apos;t<br />What You<br />Think
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            On the Mekong River, true luxury has nothing to do with chandeliers or gold leaf. It is about the scarcity of time, the luxury of space, and access to the authentic.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Old Way vs. The New Way</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Redefining what it means to travel well
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            For a long time, the travel industry confused luxury with excess. If a little was good, more must be better. Bigger ships. Heavier curtains. Menus with ingredients flown in from Paris to be served on a river in Southeast Asia. 
          </p>
          <p>
            But the definition is shifting. For the modern traveler, luxury is not about what is imported; it is about what is local, perfected. It is a plate of dragon fruit, cut with geometric precision, served at exactly the right temperature on a deck made of sustainable teak. It is the thread count of the sheets, yes, but also the fact that the sliding glass doors open fully so you can hear the river at night.
          </p>
          <p>
            Most importantly, luxury is privacy. It is a ship with 20 suites instead of 100. It is a crew that knows how you take your coffee by the second morning, and brings it to you without you having to ask. It is the ability to shape your own day.
          </p>
        </div>
      </section>

      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/fine-dining-deck.avif"
          alt="Fine dining under the stars"
          fill
          className="object-cover"
        />
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Details</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Invisible excellence
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The best luxury is invisible. You don&apos;t notice the mechanics of it; you only feel the result. You don&apos;t notice the noise-canceling engineering of the engine room, you just notice how quiet the cabin is. You don&apos;t see the chef haggling at the morning market, you just taste the impossible freshness of the river prawns at dinner.
          </p>
          <p>
            This is what the finest ships on the Mekong — vessels like the Aqua Mekong and the Jayavarman — understand implicitly. They strip away the unnecessary noise and leave you with the pure, distilled experience of the river, wrapped in flawless comfort.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/fine-dining-deck.avif" alt="Fine dining presentation" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/jewel_spa.png" alt="Spa and wellness" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/jayavarman_suite.png" alt="Spacious private suite" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Thoughtful dining · Wellness spaces · Private sanctuaries
        </p>
      </section>

      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/jahan_dining.png)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;True luxury on the Mekong isn't about escaping the local environment; it is about experiencing it in total comfort.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The New Luxury Standards
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Space to Guest Ratio</h3>
            <p>The finest ships prioritize square footage over cabin count. Look for vessels that offer generous common areas and large private balconies.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Culinary Philosophy</h3>
            <p>Modern luxury cruises employ renowned chefs who source ingredients directly from the river and local markets, ensuring an authentic taste of the region.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Wellness Integration</h3>
            <p>Spa treatments, yoga sessions on the deck, and fitness centers are seamlessly integrated into the journey without feeling out of place.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Expert Guiding</h3>
            <p>Luxury extends to the off-ship experiences. Expect highly educated, fluent, and passionate local guides who provide deep cultural context.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Experience the new luxury</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Explore our curated selection of high-end vessels that understand the true meaning of luxury on the Mekong.
          </p>
          <Link
            href="/cruises"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Luxury Ships
          </Link>
        </div>
      </section>
    </main>
  );
}
