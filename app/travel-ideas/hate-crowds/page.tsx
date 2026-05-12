import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Travelers Who Hate Crowds — Travel Ideas",
  description: "How to experience the Mekong Delta in total privacy, far from the tourist buses and commercial stops.",
};

export default function HateCrowdsPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/nocrowd_hero.png"
          alt="Empty stretch of the Mekong river with one private boat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Private & Exclusive
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            For Travelers<br />Who Hate<br />Crowds
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            You fear the Megaphones. The matching hats. The packed tourist boats. We get it. Here is how you do the Mekong differently.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Fear</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Commercialized. Rushed. Crowded.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            It is a valid fear. The Mekong Delta is famous, which means it attracts millions of visitors. If you book the wrong tour, you will find yourself on a forty-person boat, listening to a script delivered through a crackling PA system, being funneled into souvenir shops masquerading as &quot;traditional villages.&quot; 
          </p>
          <p>
            But the river is vast. It covers 39,000 square kilometers. It is entirely possible to travel for days and never see another tourist. You just have to know how.
          </p>
        </div>
      </section>

      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/luxury-balcony-sunset.avif"
          alt="Private luxury on the river"
          fill
          className="object-cover"
        />
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Antidote</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Private boats and quiet backwaters
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The solution is simple: go private, and go small. A private sampan doesn&apos;t just mean you don&apos;t have to share space; it means you control the route. While the big boats are docking at the main tourist islands, your captain turns down a smaller tributary where the water is calm and the only traffic is a local farmer bringing fruit to market.
          </p>
          <p>
            It means you can ask the guide to stop because you saw a beautiful temple, not because it&apos;s on the itinerary. It means lunch is served on a quiet deck for two, not in a massive dining hall. It is the difference between being processed and being present.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/pulse_delta.avif" alt="Small local boat" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/dest_myanmar.avif" alt="Quiet sunset" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/heritage_longway.avif" alt="Empty cycling path" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Private boats · Quiet sunsets · Empty cycling paths
        </p>
      </section>

      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/banner_4.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;We passed the large cruise ships docked at the main port and just kept going. It felt like we had the entire river to ourselves.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          How to avoid the crowds
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Book a Private Charter</h3>
            <p>If budget allows, chartering a 1- or 2-cabin sampan guarantees absolute privacy and flexibility in your daily schedule.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Choose Smaller Ships</h3>
            <p>If a private charter isn't an option, look for luxury expedition ships with fewer than 20 cabins. They access smaller ports and off-route moorings.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Timing is Everything</h3>
            <p>The best private guides know exactly when the large tour buses arrive at a temple or market, and they ensure you are there hours earlier or much later.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Go Deeper</h3>
            <p>Skip My Tho and Ben Tre city center. Ask your specialist to route you through Tra Vinh, Soc Trang, or the deep canals of An Giang.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Charter your own path</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Discover our small-ship and private charter options for the ultimate uncrowded experience.
          </p>
          <Link
            href="/itineraries/private-charter"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View Private Charters
          </Link>
        </div>
      </section>
    </main>
  );
}
