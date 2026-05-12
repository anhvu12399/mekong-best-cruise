import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Travel Ideas — Mekong River Cruise",
  description: "Four ways to experience the Mekong Delta: luxury cruises, floating markets, cajuput forests, and hidden craft villages.",
};

const ideas = [
  {
    slug: "luxury-cruises",
    title: "Luxury Cruises",
    subtitle: "Sunset champagne, temple mornings, and the slow art of doing nothing",
    image: "/images/aqua_mekong.avif",
    tag: "2–7 NIGHTS",
  },
  {
    slug: "floating-markets",
    title: "Floating Markets & River Food",
    subtitle: "Where breakfast arrives by boat and the pho is never the same twice",
    image: "/images/floating-markets-new.avif",
    tag: "1 DAY",
  },
  {
    slug: "cajuput-forests",
    title: "Cajuput Forests & Ecology",
    subtitle: "Paddle through flooded forests where birds outnumber people a thousand to one",
    image: "/images/coconut-forest-boat.avif",
    tag: "1–2 DAYS",
  },
  {
    slug: "craft-villages",
    title: "Craft Villages & Wild Islets",
    subtitle: "Monkey bridges, coconut candy, and the Mekong Delta nobody photographs",
    image: "/images/cultural-encounters-v2.avif",
    tag: "1–3 DAYS",
  },
];

export default function TravelIdeasPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <Image
          src="/images/banner_2.avif"
          alt="Mekong Travel Ideas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl">
          <p className="text-white/70 text-[11px] tracking-[0.3em] uppercase font-bold mb-4">
            Travel Ideas
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
            Four ways to fall in love with the Mekong
          </h1>
          <p className="text-white/80 text-[15px] font-light max-w-xl leading-relaxed">
            The Mekong Delta is not one experience — it&apos;s four, at least. A luxury cruise is not the same journey as a dawn visit to Cái Răng. Kayaking through Trà Sư is nothing like cycling across Cồn Phụng. Choose your adventure. Or better yet, choose all of them.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((idea) => (
            <Link
              key={idea.slug}
              href={`/travel-ideas/${idea.slug}`}
              className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <Image
                src={idea.image}
                alt={idea.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-white text-[#222] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                  {idea.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {idea.title}
                </h2>
                <p className="text-white/70 text-sm font-light leading-relaxed max-w-md">
                  {idea.subtitle}
                </p>
                <span className="inline-block mt-6 text-white text-[10px] tracking-[0.2em] uppercase font-bold border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Read the story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
