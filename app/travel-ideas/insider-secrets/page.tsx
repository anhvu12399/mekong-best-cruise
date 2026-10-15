import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { Eye, ShieldAlert, Sparkles, MapPin, Anchor, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/insider-secrets`

export const metadata: Metadata = {
  title: "8 Mekong River Cruise Secrets Nobody Tells You: Local River Truths & Insider Facts",
  description:
    "Rare insider knowledge about cruising the Mekong River between Vietnam and Cambodia. Why cruises leave from My Tho instead of Saigon, the floating border crossing reality, ice safety, and drone rules.",
  keywords: [
    "Mekong river cruise secrets",
    "things nobody tells you about mekong cruise",
    "why do mekong cruises depart from my tho",
    "Cho Gao canal mekong cruise",
    "Vinh Xuong Kaam Samnor border crossing cruise",
    "is ice safe on mekong cruise",
    "drone laws mekong river cruise",
    "Lanh My A black silk Tan Chau",
    "Cambodia pristine dollar rule",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "8 Mekong River Cruise Secrets Nobody Tells You: Local River Truths",
    description:
      "The rare facts, navigational secrets, and logistical realities that guidebooks and mass brochures never publish.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/dest_vietnam.avif`, width: 1200, height: 630, alt: "Mekong River Cruise Insider Secrets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Mekong River Cruise Secrets Nobody Tells You",
    description: "Authentic local operational truths for travelers planning a Vietnam-Cambodia luxury cruise.",
    images: [`${BASE_URL}/images/dest_vietnam.avif`],
  },
}

const insiderJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      "headline": "8 Mekong River Cruise Secrets Nobody Tells You: Local River Truths & Insider Facts",
      "description": "An investigative, insider guide covering rare logistical and cultural realities of cruising the Mekong River, from the Cho Gao canal bypass to floating border posts and pristine currency rules.",
      "image": `${BASE_URL}/images/dest_vietnam.avif`,
      "author": {
        "@type": "Person",
        "name": "Emily - Mekong Delta Specialist",
        "jobTitle": "Lead Cruise Specialist",
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
          "url": `${BASE_URL}/logo.png`,
        },
      },
      "datePublished": "2026-10-15T00:00:00Z",
      "dateModified": "2026-10-15T00:00:00Z",
      "mainEntityOfPage": PAGE_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do Mekong River cruises depart from My Tho instead of downtown Saigon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The waterway connecting Saigon River to the Mekong is the Chợ Gạo Canal, a narrow 28.5km French-built channel congested with over 1,000 industrial sand barges daily. To avoid a noisy, slow 6-hour industrial transit, luxury cruise operators privately transfer guests via luxury limousine van (70–90 minutes) directly to Mỹ Tho port, where serene tropical river cruising begins immediately.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Vietnam-Cambodia border crossing work on a Mekong cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The international border crossing at Vĩnh Xương (Vietnam) and Kaam Samnor (Cambodia) takes place entirely mid-stream. Passengers do not disembark. The ship anchors in the river, and the ship's purser takes all guest passports via tender boat to floating border posts for official maritime stamps while guests relax onboard.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it safe to have ice and drink water on a luxury Mekong cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, onboard 5-star vessels like Aqua Mekong, The Jahan, and Mekong Jewel, onboard engineering includes hospital-grade reverse-osmosis (RO) filtration and ultraviolet (UV) sterilization systems. All onboard ice and water from bar and dining taps are thoroughly purified and safe for Western travelers.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you fly a camera drone on a Mekong River cruise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flying drones is strictly prohibited across the entire Phnom Penh riverfront due to the proximity of the Royal Palace and government headquarters. Flying at Angkor Wat without dual written permits from the Apsara Authority and Ministry of Culture will result in immediate confiscation and fines. Undeclared drones may also be seized at the river border.",
          },
        },
      ],
    },
  ],
}

export default function InsiderSecretsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insiderJsonLd) }}
      />
      <main className="bg-white text-[#222]">

        {/* ── HERO ── */}
        <section className="relative h-[80vh] flex items-end">
          <Image
            src="/images/dest_vietnam.avif"
            alt="Mekong delta river life and narrow tributaries"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-bold rounded mb-5">
              <Eye className="w-3.5 h-3.5" /> Rare Field Intelligence · Local River Secrets
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 ${playfair.className}`}>
              8 Secrets Nobody Tells You<br />About the Mekong Cruise
            </h1>
            <p className="text-white/80 text-[15px] md:text-lg font-light leading-relaxed max-w-2xl font-serif">
              Beyond glossy vacation brochures lies the living reality of the river. Here are the unwritten operational truths, cultural quirks, and navigational secrets that only seasoned river masters know.
            </p>
          </div>
        </section>

        {/* ── AI DIRECT CAPSULE ── */}
        <section className="max-w-[800px] mx-auto px-6 -mt-10 relative z-20">
          <div className="bg-[#FAF8F5] border-2 border-gold/40 p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-navy">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Information Gain: The 30-Second Briefing
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#444] leading-relaxed font-sans">
              Most online cruise guides copy the same promotional brochures. This guide reveals the real-world operational facts: why ships embark from Mỹ Tho (avoiding the industrial Chợ Gạo canal), how the mid-river passport stamping works at Vĩnh Xương without stepping ashore, the strict Cambodian pristine-dollar rule, and why flying a drone can get you detained in Phnom Penh.
            </p>
          </div>
        </section>

        {/* ── SECRET 1: THE MY THO EMBARKATION TRUTH ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">01</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Logistical Secret</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            Why cruises embark in Mỹ Tho instead of downtown Saigon: The Chợ Gạo Canal
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              Travelers looking at booking maps often assume their ship will pick them up at the Saigon riverfront (near Bến Nhà Rồng) and sail gently out of the city. In reality, almost all luxury cruises transfer guests by private air-conditioned coach (approx. 70 to 90 minutes) south to the port of <strong>Mỹ Tho</strong>.
            </p>
            <p>
              <strong>The local reason:</strong> The aquatic link between Saigon and the upper Mekong is the <em>Chợ Gạo Canal</em> (Kênh Chợ Gạo), originally constructed under French colonial rule in 1876. While vital for regional commerce, it is a narrow, heavily industrialized 28.5-kilometer waterway packed with over a thousand commercial sand barges, tugboats, and cargo freighters every single day.
            </p>
            <p>
              Navigating a luxury passenger vessel through Chợ Gạo takes 5 to 6 noisy, slow-moving hours in heavy industrial traffic. To preserve your luxury experience, operators bypass this bottleneck by road, ensuring your journey begins immediately in the tranquil, palm-fringed channels of the true delta.
            </p>
            <div className="p-4 bg-[#FAF8F5] border-l-4 border-gold text-xs text-[#555]">
              <em>Exception:</em> A few select boutique, shallow-draft river vessels with specialized maritime permits (such as the boutique <em>Mekong Princess</em>) occasionally sail directly through the canal on select itineraries when tides permit.
            </div>
          </div>
        </section>

        {/* ── SECRET 2: THE MID-STREAM BORDER CROSSING ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">02</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Border Reality</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The floating border crossing: You never step on land at Vĩnh Xương / Kaam Samnor
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              On land tours, crossing the Vietnam-Cambodia border (like Moc Bai / Bavet) means dragging luggage through chaotic customs halls, standing in humid queues, and dealing with land touts.
            </p>
            <p>
              On a luxury river cruise, the international border crossing is an exercise in pure serenity. The border posts at <strong>Vĩnh Xương (Vietnam)</strong> and <strong>Kaam Samnor (Cambodia)</strong> sit on wooden pilings and floating steel pontoons moored directly in the riverbed.
            </p>
            <p>
              The ship drops anchor mid-stream. Passengers remain comfortably reclined on the observation deck with a chilled cocktail or afternoon tea. The ship&apos;s purser gathers all guest passports, boards a wooden tender skiff, and completes all exit and entry stamps on your behalf.
            </p>
            <div className="p-4 bg-white border border-[#E0D9CE] text-xs text-[#555] space-y-2">
              <p className="font-bold text-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" /> The Critical Cambodia e-Visa Rule:
              </p>
              <p>
                While Cambodia accepts electronic tourist visas (Type T) at the Kaam Samnor water checkpoint, you <strong>MUST bring two printed physical copies</strong> on A4 paper (one for arrival, one for departure). Immigration officials at this river post do NOT scan barcodes from smartphones.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECRET 3: THE DISAPPEARING QUEEN OF SILK ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">03</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Artisan Culture</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            Tân Châu&apos;s dying secret: Lãnh Mỹ A (The Queen of Black Silk)
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              When luxury ships dock in Tân Châu near the Cambodian border, passengers are taken to visit local silk weaving looms. Most tourists purchase standard brightly colored silk scarves, unaware that they are standing in the home of the world&apos;s rarest textile: <strong>Lãnh Mỹ A</strong>.
            </p>
            <p>
              Known as the &quot;Queen of Silk&quot;, Lãnh Mỹ A is made from 100% natural mulberry raw silk dyed exclusively with the juice of the wild <em>Mặc Nưa</em> berry (Diospyros mollis). The dyeing process is astonishingly arduous: the fabric is hand-dipped into pitch-black berry sap, stomped under human feet, and dried on open grass fields under the scorching delta sun up to 100 times over 45 days.
            </p>
            <p>
              The result is a leather-like, pitch-black textile that breathes like linen, repels water like wax, and grows glossier the more it is worn. Today, only <em>one single family workshop</em> (the Tám Lăng family) remains in all of Vietnam with the knowledge to produce this historic imperial fabric.
            </p>
          </div>
        </section>

        {/* ── SECRET 4: WATER & ICE PURIFICATION ENGINEERING ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">04</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Health & Hygiene</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The ice myth: Why drinking iced cocktails onboard is 100% safe
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              North American travel clinics regularly caution travelers: <em>&quot;Never drink tap water, and never accept ice in Southeast Asia.&quot;</em> While this rule is essential for roadside street stalls, it causes unnecessary anxiety aboard 5-star river vessels.
            </p>
            <p>
              Premium river ships like the <Link href="/ships/aqua-mekong" className="underline font-medium text-navy hover:text-gold">Aqua Mekong</Link>, <Link href="/ships/jayavarman" className="underline font-medium text-navy hover:text-gold">The Jayavarman</Link>, and <Link href="/ships/mekong-jewel" className="underline font-medium text-navy hover:text-gold">Mekong Jewel</Link> operate marine-grade water treatment plants that surpass municipal tap standards in the United States:
            </p>
            <ul className="space-y-2 text-xs text-[#555] pl-4 border-l-2 border-gold/40">
              <li>• <strong>Multi-Stage Sand & Carbon Filtration:</strong> Removes all sediment and river minerals.</li>
              <li>• <strong>Industrial Reverse-Osmosis (RO) Membranes:</strong> Eliminates bacteria, micro-contaminants, and heavy metals.</li>
              <li>• <strong>Ultraviolet (UV) Sterilizers:</strong> Destroys 99.99% of biological pathogens before water reaches ice machines and kitchen lines.</li>
            </ul>
            <p>
              You can enjoy iced gin-and-tonics and fresh fruit smoothies on deck without hesitation. However, when exploring local villages on shore, strictly adhere to the bottled water distributed by your cruise guide.
            </p>
          </div>
        </section>

        {/* ── SECRET 5: DRONE REGULATIONS WARNING ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-red-700 mb-3">
            <span className="font-serif text-3xl font-bold">05</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold flex items-center gap-1">
              <ShieldAlert className="w-4 h-4" /> Crucial Law
            </span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The strict drone ban: Flying in Phnom Penh or Angkor can result in immediate seizure
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              Many photographers pack DJI drones hoping to capture dramatic cinematic footage of their ship sailing past golden pagodas. <strong>Do not fly without official clearance.</strong>
            </p>
            <ul className="space-y-3 text-xs text-[#555] pl-4 border-l-2 border-red-500">
              <li>• <strong>Phnom Penh City:</strong> The entire riverfront (Sisowath Quay) is a strict no-fly zone due to its proximity to the Royal Palace and Prime Minister&apos;s residence. Flying here is treated as a major security offense by city police; drones are confiscated and pilots are detained.</li>
              <li>• <strong>Angkor Archaeological Park:</strong> Drones are completely banned across Siem Reap&apos;s heritage zone. Flying requires advance written permits from both the APSARA National Authority and the Ministry of Culture and Fine Arts.</li>
              <li>• <strong>River Border Customs:</strong> Border guards at Vĩnh Xương may inspect luggage and temporarily hold undeclared consumer drones until departure.</li>
            </ul>
          </div>
        </section>

        {/* ── SECRET 6: THE PRISTINE DOLLAR RULE ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">06</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Currency Secret</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The &quot;Pristine Dollar&quot; rule in Cambodia: Why cashiers will reject your money
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              Cambodia operates as a dual-currency economy where the US Dollar is welcomed everywhere alongside the Cambodian Riel (KHR). However, local banks and merchants have an unforgiving standard: <strong>bills must be immaculate</strong>.
            </p>
            <p>
              A single 1-millimeter tear on the edge, a faded crease, a stray pen mark, or a stamp from a foreign bank will cause merchants, restaurants, and market vendors to flatly reject the bill.
            </p>
            <p>
              <em>Pro Tip for US Travelers:</em> Before departing the United States, visit your bank teller specifically and request crisp, uncirculated, post-2013 banknotes in $1, $5, $10, and $20 denominations. Keep them flat in a dedicated envelope.
            </p>
          </div>
        </section>

        {/* ── SECRET 7: THE SACRED WATER FESTIVAL ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24 border-b border-[#E0D9CE]">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">07</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Hydrological Wonder</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The reverse flow and Bon Om Touk: The greatest river spectacle on Earth
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              The Tonle Sap River is one of the only natural waterways on Earth that reverses its flow twice each year. During the wet summer monsoon (June–October), the swollen Mekong forces water <em>backward</em> up the Tonle Sap into the great lake, expanding it five-fold.
            </p>
            <p>
              In late October or November, as water levels drop, the river flow changes direction again, draining back into the Mekong. This natural turning of the tide triggers Cambodia&apos;s largest holiday: <strong>Bon Om Touk (The Water Festival)</strong>.
            </p>
            <p>
              Over three days, more than 400 colorful traditional pirogues (dragon boats) powered by 80 rowers each race along the Phnom Penh riverfront in front of the Royal Palace. If your cruise coincides with this week, ship itineraries adjust dockings, giving you front-row balcony views of Southeast Asia&apos;s most electrifying river festival.
            </p>
          </div>
        </section>

        {/* ── SECRET 8: SATELLITE VS ESIM CONNECTIVITY ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16 lg:py-24">
          <div className="flex items-center gap-3 text-[#8B4A2A] mb-3">
            <span className="font-serif text-3xl font-bold">08</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Tech on the Water</span>
          </div>
          <h2 className={`text-2xl md:text-3xl text-navy mb-6 leading-tight ${playfair.className}`}>
            The connectivity secret: Why you need an eSIM instead of ship Wi-Fi
          </h2>
          <div className="space-y-4 text-[15px] text-[#444] leading-[1.85] font-light font-sans">
            <p>
              While luxury ships advertise complimentary Wi-Fi in suites and public lounges, the vessel relies on mobile cellular routers or marine satellite feeds. In deep channels between Sa Đéc and Tân Châu, or across remote Cambodian reaches, onboard Wi-Fi can slow to a crawl when 40 passengers simultaneously upload photos.
            </p>
            <p>
              <em>The Specialist Solution:</em> Purchase an international regional eSIM (such as Airalo or Maya Mobile) before your flight. Vietnam and Cambodia have surprisingly robust 4G and 5G cellular towers standing right along the riverbanks (operated by Viettel in Vietnam and Smart/Metfone in Cambodia). Your phone will latch onto local land towers directly, giving you fast, continuous personal data while gliding past floating villages.
            </p>
          </div>
        </section>

        {/* ── RELATED IN-DEPTH PLANNING GUIDES ── */}
        <section className="max-w-[760px] mx-auto px-6 pb-20 pt-10 border-t border-[#E0D9CE]">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B4A2A] font-bold mb-4">Essential Further Reading</p>
          <h3 className={`text-2xl md:text-3xl text-navy mb-8 ${playfair.className}`}>
            Continue Your Journey Planning
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              href="/travel-ideas/upstream-vs-downstream"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Direction Guide</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Upstream vs. Downstream: Which Is Better?
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Real Tonle Sap water levels and jet lag tips for US travelers.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                Read Guide →
              </span>
            </Link>

            <Link 
              href="/travel-ideas/aqua-mekong-vs-heritage-line"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Vessel Comparison</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Aqua Mekong vs. Heritage Line
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Side-by-side specs, elevator access, skiffs, and verified pricing.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                Compare Ships →
              </span>
            </Link>

            <Link 
              href="/travel-ideas/mekong-cruise-cost"
              className="group p-5 bg-[#FAF8F5] border border-[#E0D9CE] hover:border-gold transition-all rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B4A2A] block mb-2">Budget & Pricing</span>
                <h4 className="font-serif text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                  Real Mekong Cruise Costs & Hidden Fees
                </h4>
                <p className="text-xs text-[#666] leading-relaxed">
                  Transparent breakdown of port dues, visas, tips, and tariffs.
                </p>
              </div>
              <span className="text-[11px] font-bold text-navy group-hover:text-gold mt-4 inline-flex items-center gap-1">
                View Price Guide →
              </span>
            </Link>
          </div>
        </section>

        {/* ── SUMMARY / CONVERSION CTA ── */}
        <section className="bg-[#0e2b3d] py-24 text-center text-white">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">
              Book With True Local Specialists
            </span>
            <h2 className={`text-3xl md:text-5xl text-white mb-6 leading-tight ${playfair.className}`}>
              Experience the Mekong with Nothing Left to Chance
            </h2>
            <p className="text-white/70 font-serif text-base md:text-lg mb-10 leading-relaxed">
              True luxury is not just linen and champagne — it is having local specialists who know every sandbank, border nuance, and seasonal rhythm. Let us curate your Vietnam and Cambodia voyage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-your-journey"
                className="w-full sm:w-auto px-10 py-4 bg-gold text-navy text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                Plan Your Journey With Emily & John
              </Link>
              <Link
                href="/itineraries/vietnam-cambodia"
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors duration-300"
              >
                Explore 7-Night Itineraries
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
