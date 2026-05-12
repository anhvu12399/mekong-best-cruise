import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Ben Tre Feels More Real — Travel Ideas",
  description: "Cycle under coconut palms, sleep in a local house, and discover why Ben Tre is the most authentic province in the Mekong Delta.",
};

export default function BenTrePage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/bentre_hero.png"
          alt="Lush coconut groves of Ben Tre from above"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Authentic Local Life
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Why Ben Tre<br />Feels More<br />Real
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            Forget the multi-stop tours. Focus on one province. Here, beneath millions of coconut palms, the Delta is not a show put on for visitors — it is simply life.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Coconut Kingdom</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          A world shaded entirely in green.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Ben Tre is known across Vietnam as the &quot;Kingdom of Coconuts.&quot; It is not an exaggeration. As soon as you cross the Rạch Miễu bridge from Tiền Giang, the landscape shifts. The sky narrows, choked by the fronds of millions of palm trees. The air smells sweeter, heavier. 
          </p>
          <p>
            Most tourists do a quick day trip here, make some candy, and leave. But the secret to Ben Tre is staying. When the day-trippers return to Ho Chi Minh City around 3 PM, the province exhales. The dirt paths empty out. The real rhythm takes over.
          </p>
          <p>
            The best way to see it is on a bicycle. Not an expensive mountain bike, but an old, squeaky single-speed. You ride along paths so narrow the palm leaves brush your shoulders. You pass kilns making coconut charcoal, their smoke smelling surprisingly like incense. You cross tiny concrete bridges over canals where men are laying traps for river shrimp. You nod to locals; they nod back. Nobody tries to sell you anything.
          </p>
        </div>
      </section>

      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/heritage_longway.avif"
          alt="Cycling in the Mekong"
          fill
          className="object-cover"
        />
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Homestay</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Sleeping in a wooden house
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            To understand Ben Tre, you must sleep there. Not in a hotel, but in a local house. The rooms are simple — often just a bed, a mosquito net, and a fan — but the luxury is in the context. 
          </p>
          <p>
            Dinner is cooked by the family, and you are invited into the kitchen to help. You learn how to roll a spring roll so it doesn&apos;t fall apart. You eat elephant ear fish, not because it&apos;s a tourist staple, but because it was caught that afternoon. And at night, you lie awake under the mosquito net listening to the deafening, beautiful chorus of frogs and insects, feeling completely disconnected from the world you left behind.
          </p>
        </div>
      </section>

      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Stay in Ben Tre</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our multi-day itineraries often include an authentic, immersive overnight stay in Ben Tre province.
          </p>
          <Link
            href="/itineraries/mekong-delta"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Mekong Itineraries
          </Link>
        </div>
      </section>
    </main>
  );
}
