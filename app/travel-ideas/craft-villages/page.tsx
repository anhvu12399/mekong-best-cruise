import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Craft Villages & Wild Islets — Travel Ideas",
  description: "Cycle across monkey bridges, watch coconut candy being made by hand, and discover the Mekong Delta that nobody photographs.",
};

export default function CraftVillagesPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/travel_craft_hero.jpg"
          alt="Monkey bridge crossing in the Mekong Delta"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · 1–3 Days
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Monkey<br />Bridges<br />&amp; Coconut<br />Candy
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            The Mekong Delta is made of islands. Thousands of them. And each one holds a different version of Vietnamese life.
          </p>
        </div>
      </section>

      {/* ── OPENING ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Islets</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Cồn Lân is twenty minutes from Mỹ Tho and two hundred years from anywhere else.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The boat drops you at a muddy bank and a kid in school uniform waves you toward a path that disappears into fruit trees. This is Cồn Lân — Unicorn Island — and despite its fairy-tale name, it&apos;s stubbornly, beautifully real. The path winds between longan orchards and coconut groves, past houses with corrugated iron roofs and gardens where chickens outnumber people. A dog follows you for exactly three hundred meters, then loses interest.
          </p>
          <p>
            The monkey bridge is where most visitors experience a minor crisis of confidence. It&apos;s a single log — sometimes two logs, if you&apos;re lucky — spanning a canal about four meters wide. There is no railing. There is no safety net. There is only the log, your feet, and the quiet certainty that the woman crossing ahead of you with a basket of fruit on her head has done this every day of her life. You follow. You wobble. You make it. You feel absurdly proud.
          </p>
          <p>
            Cồn Phụng — Phoenix Island — is stranger. It was once the headquarters of a religious sect called the Coconut Religion, founded by a man who allegedly meditated for three years eating only coconuts. His temple remains: a bizarre, colorful structure with a dragon-entwined column, a globe, and a rocket ship (yes, really). The caretaker shows you around with the nonchalance of someone who stopped finding it weird decades ago.
          </p>
        </div>
      </section>

      {/* ── THREE-IMAGE GRID ── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_craft_candy.jpg" alt="Artisan candy making workshop" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_craft_hero.jpg" alt="Monkey bridge crossing" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src="/images/travel_craft_lotus.jpg" alt="Blooming lotus fields" fill className="object-cover" />
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
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
            Kẹo dừa and the art of doing one thing perfectly
          </h2>
          <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
            <p>
              The coconut candy workshop in Sa Đéc is small, hot, and smells like heaven. Two women stand over a brass vat, stirring a bubbling mixture of coconut milk, sugar, and malt with wooden paddles the size of oars. The mixture turns from liquid to taffy in about twenty minutes, and the timing has to be exact — too early and it&apos;s too soft, too late and it shatters. They get it right every time.
            </p>
            <p>
              The candy is cut by hand, wrapped in rice paper, and packed into bags that you will open on the bus home and finish before you reach Ho Chi Minh City. The durian-flavored version is an acquired taste (like durian itself). The peanut version is universally loved. The plain coconut version is the one you&apos;ll dream about.
            </p>
            <p>
              Nearby, the old house of Bình Thủy — a stunning French colonial villa that appeared in &quot;The Lover&quot; (1992) — sits behind a garden of bonsai trees that a single family has tended for five generations. The house is full of antique porcelain, carved furniture, and photographs of people who look both stern and somehow familiar. It&apos;s the kind of place where you touch the doorframe and feel the weight of time.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPLIT: NIGHT ADVENTURES ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5]">
          <Image src="/images/travel_craft_lotus.jpg" alt="Lotus field at dawn" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">After Dark</p>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-8">
            Soi ba khía: the strangest thing you&apos;ll do on this trip
          </h3>
          <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
            <p>
              Ba khía are small, salt-marsh crabs that emerge from the mud at night during specific tidal conditions. &quot;Soi ba khía&quot; means hunting them with a headlamp, wading through ankle-deep mud in the dark, chasing creatures that are surprisingly fast and entirely indifferent to your dignity.
            </p>
            <p>
              The locals do this with the casual expertise of people who have been catching crabs since childhood. You will slip. You will get muddy. You will catch fewer crabs than the twelve-year-old next to you. But when the crabs are cleaned, salted, and served the next morning with rice porridge and sliced chili, you will understand why people do this in the dark, in the mud, laughing.
            </p>
            <p>
              If crabs aren&apos;t your thing, the lotus fields of Tháp Mười in blooming season (June through August) offer a gentler alternative. At dawn, the flowers open — thousands of them, pink and white across a flooded plain that stretches to the horizon. The smell is extraordinary: sweet, clean, almost narcotic. You can pick lotus seeds and eat them raw. They taste like nothing. They taste like everything.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARALLAX ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/travel_craft_candy.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;You don&apos;t discover the Mekong Delta. It discovers you — in a coconut candy workshop, on a monkey bridge, knee-deep in mud chasing crabs at midnight.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PRACTICAL ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">Planning your visit</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Duration</h3>
            <p>One day covers Cồn Lân and the candy workshop. Two days adds Sa Đéc, Bình Thủy, and a homestay. Three days means you can do everything slowly — which is the point.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Getting There</h3>
            <p>Mỹ Tho is 90 minutes from HCMC. Sa Đéc is another 2 hours south. Tháp Mười&apos;s lotus fields are 2.5 hours from Saigon. All work as extensions to a Cần Thơ-based trip.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Lotus Season</h3>
            <p>June through August. Dawn is essential — the flowers close by 9 AM. Tháp Mười is the most dramatic spot, but Đồng Tháp province has smaller, more intimate fields.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Homestay</h3>
            <p>Skip the hotels. A delta homestay — sleeping in a wooden house on stilts, eating dinner cooked by the family matriarch, waking to roosters — is worth more than any five-star night.</p>
          </div>
        </div>
      </section>

      {/* ── ALSO READ ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Also Read</p>
          <div className="space-y-4">
            <Link href="/travel-ideas/floating-markets" className="block text-[15px] text-[#222] hover:text-[#b8860b] transition-colors font-light border-b border-[#e5e5e5] pb-4">
              <span className="font-bold">Breakfast Arrives by Boat</span> — Phở at dawn, crabs at midnight, everything in between.
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
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">See it for yourself</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our Mekong Delta itineraries include village visits, cycling, and authentic homestay experiences with private guide.
          </p>
          <Link
            href="/itineraries/mekong-delta"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View Mekong Delta Itinerary
          </Link>
        </div>
      </section>
    </main>
  );
}
