import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A Slow Day in the Mekong — Travel Ideas",
  description: "Morning mist, afternoon hammocks, and evening lanterns. How to spend a perfectly unhurried day in the Mekong Delta.",
};

export default function SlowDayPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/slow_hero.png"
          alt="Peaceful morning with coffee on the Mekong"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Mindful Travel
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            A Slow Day<br />in the<br />Mekong
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            Stop running from landmark to landmark. The true luxury of the Delta is having the time to watch the water change color.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">06:00 AM — Quiet</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The mist and the coffee drip.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The day begins in monochrome. The mist sits heavy on the river, blurring the line between water and sky. The only sound is the metal <em>ping</em> of the phin filter as thick, dark Vietnamese coffee drips slowly over a layer of condensed milk. 
          </p>
          <p>
            You sit on the balcony of your cruise suite or the porch of a local homestay. There is no rush to check emails; the Wi-Fi is probably weak anyway, a blessing in disguise. You watch the first wooden boats emerge like ghosts from the fog. This is the quietest the world will be all day.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-[4/3]">
          <Image src="/images/1day_tea.avif" alt="Afternoon tea and hammock" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">02:00 PM — Warm</p>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
            The mandatory hammock hour
          </h3>
          <div className="space-y-4 text-[#444] text-[15px] leading-[1.85] font-light">
            <p>
              By early afternoon, the heat is a physical weight. The locals know better than to fight it. They retreat to the shade of mango trees, stringing up woven hammocks between the trunks. You should do the same.
            </p>
            <p>
              You lie back. A warm breeze comes off the water, smelling of mud and blooming lotus. You open a book, read exactly two pages, and fall into the deep, heavy sleep of the tropics. When you wake up, someone offers you a plate of chilled watermelon. You realize you haven&apos;t checked your watch in six hours.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">07:00 PM — Unhurried</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Lanterns on the water
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The sun drops fast near the equator, leaving behind a sky stained in bruised purples and burnt oranges. The heat breaks. On the deck of the ship, lanterns are lit, casting a warm, flickering glow on the teak wood.
          </p>
          <p>
            Dinner is an event that takes its time. Course after course of local ingredients, served with a cold glass of white wine. You listen to the crickets on the riverbanks. You talk in low voices. Tomorrow, you might go somewhere. But tonight, this is exactly where you need to be.
          </p>
        </div>
      </section>

      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Embrace Slow Travel</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our luxury cruises are designed to give you the ultimate luxury: time.
          </p>
          <Link
            href="/cruises"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Find Your Ship
          </Link>
        </div>
      </section>
    </main>
  );
}
