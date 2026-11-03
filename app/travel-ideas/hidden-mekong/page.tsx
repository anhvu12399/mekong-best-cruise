import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { AuthorByline, AuthorCard } from "@/components/author-box"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Mekong You Don't See on Tours — Hidden Mekong Travel Ideas",
  description: "Experience the authentic Mekong Delta off the beaten path. Discover Ba Lai canal, tidal changes of nước lớn/nước ròng, and taste authentic canh chua cá hú.",
  keywords: ["Mekong Delta tours", "hidden Mekong", "authentic Mekong", "off the beaten path Mekong", "small boat Mekong tour", "sampan tour Vietnam", "Mekong Delta narrow canals", "Ba Lai canal", "canh chua ca hu"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/hidden-mekong",
  },
  openGraph: {
    title: "The Mekong You Don't See on Tours — Hidden Mekong Travel Ideas",
    description: "Experience the authentic Mekong Delta off the beaten path. Discover Ba Lai canal, tidal changes of nước lớn/nước ròng, and taste authentic canh chua cá hú.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/hidden-mekong",
    images: [{ url: "https://www.mekongrivercruise.com/images/hidden_hero.avif", width: 1200, height: 630, alt: "Small wooden boat in a narrow Mekong canal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mekong You Don't See on Tours",
    description: "Experience the authentic Mekong Delta off the beaten path.",
    images: ["https://www.mekongrivercruise.com/images/hidden_hero.avif"],
  },
}


const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = "https://www.mekongrivercruise.com/travel-ideas/hidden-mekong"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Mekong You Don't See on Tours: Hidden Waterways & Secret Tributaries",
  "description": "Experience the authentic Mekong Delta off the beaten path. Discover Ba Lai canal, tidal changes of nước lớn/nước ròng, and taste authentic canh chua cá hú.",
  "image": "https://www.mekongrivercruise.com/images/hidden_hero.avif",
  "about": [
    {
      "@type": "Place",
      "name": "Mekong Delta",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong_Delta"
    },
    {
      "@type": "Place",
      "name": "Ba Lai River",
      "sameAs": "https://en.wikipedia.org/wiki/Ba_Lai_River"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "Nipa palm",
      "sameAs": "https://en.wikipedia.org/wiki/Nypa_fruticans"
    },
    {
      "@type": "Thing",
      "name": "Canh chua",
      "sameAs": "https://en.wikipedia.org/wiki/Canh_chua"
    },
    {
      "@type": "Thing",
      "name": "Tidal range",
      "sameAs": "https://en.wikipedia.org/wiki/Tidal_range"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Emily Nguyen",
    "jobTitle": "Lead Mekong Delta Specialist",
    "url": "https://www.mekongrivercruise.com/our-specialists",
    "worksFor": {
      "@type": "TravelAgency",
      "name": "Mekong River Cruise",
      "url": BASE_URL,
    },
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mekongrivercruise.com/logo.png",
    },
  },
  "datePublished": "2026-05-10T00:00:00Z",
  "dateModified": "2026-10-15T00:00:00Z",
  "mainEntityOfPage": PAGE_URL,
}

export default function HiddenMekongPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/hidden_hero.avif"
          alt="Small wooden boat in a narrow Mekong canal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Off the Beaten Path
          </p>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            The Mekong<br />You Don&apos;t<br />See on Tours
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            Past the tour boats and the PA systems, past the stops where everyone photographs the same coconut candy, there is a different river. It smells like wet wood, tidal mud, and bần trees.
          </p>
        </div>
      </section>

      {/* ── CHAPTER ONE ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <AuthorByline specialistId="emily" updatedDate="October 2026" readingTime="5 min read" />
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Turn</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The captain killed the engine and suddenly I could hear the pulse of the tide.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p className="font-normal text-[#222]">
            <strong>Direct Answer:</strong> The authentic, uncrowded Mekong Delta is accessed through its <strong>28,000-kilometer labyrinth of secondary arroyos (rạch)</strong>—such as the Ba Lai and Cổ Chiên branches—which are governed by semi-diurnal ocean tides fluctuating by up to <strong>2.5 to 3.0 meters twice daily</strong>. Navigating these narrow tributaries requires handcrafted wooden sampans with drafts under 0.8 meters, which are physically inaccessible to large commercial tourist craft.
          </p>
          <p>
            It happened about forty minutes out of Cần Thơ. We had been on the main river — wide, brown, busy with barges — and then the boat turned left into something that barely qualified as a waterway. The rạch. That&apos;s what locals call these capillary canals that branch off the Mekong like veins from an artery. The water narrowed to maybe three meters. Nipa palms arched overhead until the sky became a thin strip of white. And then the engine cut.
          </p>
          <p>
            This was the Ba Lai canal, an ancient rạch that winds through Ben Tre and remains completely untouched by large cruise vessels. The silence was physical. I could hear water dripping from the palm fronds. I could hear the wooden oar entering the water behind me — a sound so specific, so different from a plastic paddle or a metal propeller, that it immediately recalibrated my sense of where I was. Not on a tour. Not on a trip. Just on the water, moving at the speed of someone&apos;s arm.
          </p>

          <blockquote className="border-l-4 border-gold pl-5 py-3 my-6 italic text-[#333] text-sm bg-[#FAF8F5] shadow-xs">
            &ldquo;Out on the main Tiền and Hậu rivers, you are on an industrial highway. But the moment you slip into a small rạch like Ba Lai during nước lớn (high tide), the water is calm enough to reflect every leaf of the nipa canopy. When nước ròng (low tide) comes, you watch the riverbed breathe.&rdquo;
            <cite className="block mt-2 not-italic font-bold text-navy text-xs">
              — Captain Tran Van Rang, Veteran Delta Pilot (26 years river navigation)
            </cite>
          </blockquote>

          <p>
            In the Delta, everything is governed by the tide — the rhythm of nước lớn (high tide) and nước ròng (low tide). Twice a day, the water level rises and falls by up to three meters. Life here conforms to this pulse: boats wait for nước lớn to carry their heavy loads of coconuts, while fishermen wait for nước ròng when fish are trapped in the shallow pools.
          </p>

          {/* Extractable Markdown Comparison Table for Vector Embeddings */}
          <div className="mt-8 pt-6 border-t border-[#E0D9CE]">
            <h3 className="font-serif text-lg text-navy font-bold mb-4">
              Main Mekong Riverway vs. Capillary Arroyos (Rạch)
            </h3>
            <div className="overflow-x-auto border border-[#E0D9CE] bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-3 border-b border-white/10">Feature</th>
                    <th className="p-3 border-b border-white/10 text-gold">Main Commercial Riverway</th>
                    <th className="p-3 border-b border-white/10 text-gold">Secluded Capillary Arroyos (Rạch)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E0D9CE] text-[#444]">
                  <tr>
                    <td className="p-3 font-semibold text-navy">Waterway Width</td>
                    <td className="p-3 font-mono">800m – 2,000m (Tiền/Hậu)</td>
                    <td className="p-3 font-mono text-[#15803d]">3m – 12m (Ba Lai, Trà Vinh canals)</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 font-semibold text-navy">Vessel Compatibility</td>
                    <td className="p-3">Large passenger ships &amp; sand barges</td>
                    <td className="p-3 font-medium">Hand-paddled wooden sampans &amp; small skiffs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-navy">Tidal Fluctuation</td>
                    <td className="p-3">Strong 2-knot surface currents</td>
                    <td className="p-3 font-mono">2.5m – 3.0m water level rise/fall twice daily</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 font-semibold text-navy">Culinary Encounter</td>
                    <td className="p-3">Shipboard full-board gourmet dining</td>
                    <td className="p-3 font-medium">Canh chua cá hú with wild bần fruit at stilt homes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/hidden_canal.avif"
          alt="Quiet canal life in the Mekong Delta"
          fill
          className="object-cover"
        />
      </section>

      {/* ── CHAPTER TWO ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Taste of the Mud</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          The true character of the river is sour, sweet, and rich.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            We stopped at a stilt house perched above the Ba Lai branch. The host, a retired river captain, was cooking lunch in a clay pot. The dish was canh chua cá hú — a traditional sour soup made with cá hú (a rich, fatty river catfish) and sour bần fruit (mangrove apple) harvested directly from the trees lining the canal.
          </p>
          <p>
            Unlike the tourist restaurants in the city that use white sugar and tamarind paste, the sweetness here came from fresh coconut juice, and the sourness was purely from the crushed bần fruit. The broth was cloudy, smelling of garlic and wild herbs. Eating it while sitting on the creaking wooden planks, watching the nước ròng slowly expose the muddy roots of the nipa palms, I realized this soup was the river itself.
          </p>
          <p>
            These are the moments that standard tours cannot package, because they depend on accident, on slowness, on being in the right canal at the right hour with no plan at all. I remember pulling a fishing net from the mud near Vĩnh Long, my hands disappearing into warm silt, and a kid laughing at my technique. That&apos;s the hidden Mekong. It stays with you because it cannot be replicated.
          </p>
        </div>
      </section>

      {/* ── COLLAGE ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/hidden_boy.avif" alt="Boy fishing at dusk" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/hidden_sampan.avif" alt="Sampan on muddy bank" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/monk-temple.avif" alt="Quiet village temple" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Palm canal near Trà Vinh · Basket weaver, Vĩnh Long · Afternoon light at a village pagoda
        </p>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/dest_cambodia.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;The captain turned off the engine and pointed at the water. A school of fish was breaking the surface, hundreds of them, catching the light. We watched for maybe five minutes. Nobody spoke. Then he started the oar again and we moved on.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── GOOD TO KNOW ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Before you leave the main river
        </h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Boat Size</h3>
            <p>Large cruise ships cannot access narrow canals. You need a sampan — a flat-bottomed wooden boat paddled by hand. Most hold 2–4 passengers. The smaller the boat, the deeper you go.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Tidal Timing</h3>
            <p>The tide moves by a different schedule every day. A good captain knows when the nước lớn is rising, which allows you to drift deep into the canals without bottoming out in the mud.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">The Real Food</h3>
            <p>Canh chua cooked with bần fruit is a rustic dish. You won&apos;t find it in luxury hotel menus. Try it at a local homestay or a small house along the canal to taste the authentic Delta.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring</h3>
            <p>Mosquito repellent (non-negotiable). Loose, light clothing. A camera with a waterproof strap. And most importantly, an open schedule. The canal dictates the timeline.</p>
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
            href="/itineraries/1-day"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/1day_hero.avif"
                alt="1-Day Mindful Mekong"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  1 Day
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Saigon — Ben Tre Canals
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  1-Day Mindful Mekong
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  A slow-paced, deeply connected private journey into the quiet heart of the delta&apos;s side canals, away from the tourist path.
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
            <Link href="/travel-ideas/ben-tre-authentic" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Why Ben Tre Feels More Real Than You Expect</span> — One province, one bicycle, no schedule.
            </Link>
            <Link href="/travel-ideas/hate-crowds" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">For Travelers Who Hate Crowds</span> — How to do the Delta without the megaphones.
            </Link>
            <Link href="/travel-ideas/slow-day" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">A Slow Day in the Mekong</span> — From mist to lanterns, hour by unhurried hour.
            </Link>
          </div>
        </div>
      </section>
      {/* Author Card for E-E-A-T */}
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <AuthorCard specialistId="emily" reviewedDate="October 2026" />
      </div>


      {/* ── CTA ── */}
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Go where the engine stops</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Private sampan journeys into the narrow canals of Ba Lai and the deep Delta. No script. No crowds. Just the river and a wooden oar.
          </p>
          <Link
            href="/itineraries/1-day"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore Mindful Route</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
