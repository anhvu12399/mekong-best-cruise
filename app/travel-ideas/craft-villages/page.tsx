import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Clock, ArrowRight } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Craft Villages & Wild Islets — Authentic Mekong Travel Ideas",
  description: "Cycle across monkey bridges, discover mat weaving in Định Yên, Lãnh Mỹ A silk in Tân Châu, and experience authentic craft villages in the Mekong Delta.",
  keywords: ["Mekong craft villages", "Lãnh Mỹ A silk", "Tân Châu silk", "Định Yên mat weaving", "Sa Dec village", "Mekong Delta islets", "Huỳnh Thủy Lê Old House", "Mekong Delta cycling"],
  alternates: {
    canonical: "https://www.mekongrivercruise.com/travel-ideas/craft-villages",
  },
  openGraph: {
    title: "Craft Villages & Wild Islets — Authentic Mekong Travel Ideas",
    description: "Cycle across monkey bridges, discover mat weaving in Định Yên, Lãnh Mỹ A silk in Tân Châu, and experience authentic craft villages in the Mekong Delta.",
    type: "article",
    url: "https://www.mekongrivercruise.com/travel-ideas/craft-villages",
    images: [{ url: "https://www.mekongrivercruise.com/images/cultural-encounters-v2.avif", width: 1200, height: 630, alt: "Village life in the Mekong Delta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Villages & Wild Islets in the Mekong",
    description: "Cycle across monkey bridges and discover traditional silk and mat weaving workshops.",
    images: ["https://www.mekongrivercruise.com/images/cultural-encounters-v2.avif"],
  },
}

export default function CraftVillagesPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/cultural-encounters-v2.avif"
          alt="Village life in the Mekong Delta"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Craft & Tradition
          </p>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
            Weaving<br />Time into<br />the Delta
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            The Mekong Delta is a living workshop. In hidden communes and riverside islets, artisans preserve centuries-old techniques that define the region's soul.
          </p>
        </div>
      </section>

      {/* ── OPENING ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Islets</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
          Cồn Lân is twenty minutes from Mỹ Tho and two hundred years from anywhere else.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The boat drops you at a muddy bank and a kid in school uniform waves you toward a path that disappears into fruit trees. This is Cồn Lân — Unicorn Island — and despite its fairy-tale name, it&apos;s stubbornly, beautifully real. The path winds between longan orchards and coconut groves, past houses with corrugated iron roofs and gardens where chickens outnumber people.
          </p>
          <p>
            The monkey bridge (cầu khỉ) is where most visitors experience a minor crisis of confidence. It&apos;s a single log — sometimes two logs, if you&apos;re lucky — spanning a canal about four meters wide. There is no railing, only a bamboo handrail. There is only the log, your feet, and the quiet certainty that the woman crossing ahead of you with a basket of fruit on her head has done this every day of her life. You follow. You wobble. You make it.
          </p>
          <p>
            Further down, the Định Yên mat weaving commune (làng chiếu Định Yên) in Đồng Tháp province unfolds a different canvas. The village paths are lined with bundles of sedge grass dyed in vibrant shades of green, red, and purple, laid out under the sun like modern art. The rhythmic sound of handlooms echoes from open doorways. In the past, the village held the famous "ghost market" (chợ ma) at midnight, when weavers traded mats under oil lamps. While the night market has faded, the dedication to hand-weaving sedge mats remains unchanged.
          </p>
        </div>
      </section>

      {/* ── THREE-IMAGE GRID ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/cultural-encounters-new.avif" alt="Local artisan at work" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/heritage_philanthropy.avif" alt="Village cycling" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/highlights_journey.avif" alt="Delta landscape" fill className="object-cover" />
          </div>
        </div>
        <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
          Artisan workshops · Cycling the delta paths · The landscape between villages
        </p>
      </section>

      {/* ── THE CRAFTS ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Crafts</p>
          <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>
            Lãnh Mỹ A and the black gold of Tân Châu
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              In the town of Tân Châu in An Giang province, a handful of families preserve the secret of Lãnh Mỹ A silk, the most prestigious fabric in Vietnam. The silk is dyed using the resin of the mặc nưa fruit, a local wild berry that must be harvested between June and December.
            </p>
            <p>
              The silk is dipped in the black resin, then trodden in the river mud, washed, and dried on grass fields. This process is repeated up to a hundred times over several months. The result is a fabric of remarkable properties: it is cool in summer, warm in winter, and has a deep, lustrous black sheen that gets shinier the more it is washed. Watching the weavers throw the wooden shuttles on old looms is like watching a synchronized dance where time is the principal dancer.
            </p>
            <p>
              Further downstream in Sa Đéc, the historic Huỳnh Thủy Lê Old House — built in 1895, blending Southern Vietnamese, French colonial, and Chinese architectural elements — stands as a monument to the region&apos;s rich heritage. The house was the setting for the passionate love affair between the young French writer Marguerite Duras and the wealthy Chinese heir Huỳnh Thủy Lê, immortalized in her novel &quot;The Lover&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPLIT: NIGHT ADVENTURES ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5]">
          <Image src="/images/exp_silent_drift.avif" alt="Night on the delta" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">After Dark</p>
          <h3 className={`text-2xl md:text-3xl leading-tight mb-8 text-navy ${playfair.className}`}>
            Soi ba khía: the delta after sunset
          </h3>
          <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
            <p>
              Ba khía are small, three-striped salt-marsh crabs that emerge from the mud and mangrove roots at night. &quot;Soi ba khía&quot; means hunting them with a headlamp, wading through ankle-deep mud in the dark, chasing creatures that are surprisingly fast and entirely indifferent to your dignity.
            </p>
            <p>
              The locals do this with the casual expertise of people who have been catching crabs since childhood. You will slip. You will get muddy. But when the crabs are cleaned, salted, and served the next morning with rice porridge and sliced chili, you will understand why people do this in the dark, laughing.
            </p>
            <p>
              If crabs aren&apos;t your thing, the lotus fields of Tháp Mười in blooming season (June through August) offer a gentler alternative. At dawn, the flowers open — thousands of them, pink and white across a flooded plain. You can pick lotus seeds and eat them raw, tasting their clean, nutty flavor.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/heritage_longway.avif)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;You don&apos;t discover the Mekong Delta. It discovers you — in the rustle of Lãnh Mỹ A silk, on a monkey bridge, knee-deep in mud chasing crabs at midnight.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PRACTICAL ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className={`text-3xl md:text-4xl leading-tight mb-10 text-navy ${playfair.className}`}>Planning your visit</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Duration</h3>
            <p>One day covers Cồn Lân and the Sa Đéc flower village. Two to three days adds the silk weavers of Tân Châu and the mat weavers of Định Yên.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Getting There</h3>
            <p>Mỹ Tho is 90 minutes from HCMC. Sa Đéc and Tân Châu are farther south and west — best integrated into a multi-day itinerary with an overnight stay in Cần Thơ.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Lotus Season</h3>
            <p>June through August. Dawn is essential — the flowers close by 9 AM. Tháp Mười is the most dramatic spot, but Dong Thap province has smaller, more intimate fields.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Homestay</h3>
            <p>Skip the hotels. A delta homestay — sleeping in a wooden house on stilts, eating dinner cooked by the family matriarch, waking to roosters — is worth more than any five-star night.</p>
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
            href="/itineraries/mekong-delta"
            className="group relative flex flex-col sm:flex-row bg-white border border-[#e0d9ce] hover:border-[#c9a962] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
          >
            {/* Image Section */}
            <div className="relative w-full sm:w-[35%] min-h-[200px] sm:min-h-full overflow-hidden bg-navy/5 shrink-0">
              <Image
                src="/images/vc_day1.avif"
                alt="Immersive Mekong Delta"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1.5 border border-[#c9a962]/30">
                <span className="text-[#c9a962] text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5">
                  <Clock size={10} className="stroke-[#c9a962]" />
                  3-4 Days
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#8B4A2A] text-[9px] tracking-[0.2em] uppercase font-bold">
                    Ben Tre — Sa Dec — Can Tho
                  </span>
                </div>
                <h3 className={`font-serif text-2xl text-navy group-hover:text-[#c9a962] transition-colors duration-300 mb-3 ${playfair.className}`}>
                  Immersive Mekong Delta
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 font-serif">
                  A deep dive into local culture, craft villages, and floating markets of Vietnam&apos;s fertile delta.
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
            <Link href="/travel-ideas/floating-markets" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Breakfast Arrives by Boat</span> — Dawn at the floating market, where the phở is still steaming.
            </Link>
            <Link href="/travel-ideas/ben-tre-authentic" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Why Ben Tre Feels More Real</span> — Cycling under coconut palms, sleeping with the frogs.
            </Link>
            <Link href="/travel-ideas/cajuput-forests" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light pb-4">
              <span className="font-bold">Where Green Becomes a Sound</span> — Paddling through flooded cajuput forests in silence.
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-24 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`font-serif text-3xl md:text-4xl text-white mb-6 ${playfair.className}`}>Meet the Makers</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our multi-day Delta itineraries feature private visits to master weavers and local artisans, letting you see how the delta&apos;s traditions are kept alive.
          </p>
          <Link
            href="/itineraries/mekong-delta"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 group"
          >
            <span>Explore Immersive Route</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
