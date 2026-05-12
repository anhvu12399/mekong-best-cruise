import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Floating Markets & River Food — Travel Ideas",
  description: "Wake before dawn to experience Cái Răng floating market, eat phở from a boat, and taste the Mekong Delta the way locals do.",
};

export default function FloatingMarketsPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/floating-markets-new.avif"
          alt="Cai Rang floating market at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl">
          <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Travel Ideas · Day Trip
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Breakfast<br />Arrives<br />by Boat
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            At 5:30 AM, the Mekong is already awake. The floating market at Cái Răng has been trading since before you learned to sleep.
          </p>
        </div>
      </section>

      {/* ── OPENING ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Morning</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The alarm goes off at 4:45 AM. You will not regret it.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            The boat picks you up in the dark. The driver — a quiet man with arms that look like they were carved from river wood — navigates by instinct through channels so narrow you can smell the jasmine from bankside gardens. The engine is a low, rhythmic thud that becomes the heartbeat of the morning.
          </p>
          <p>
            Then the market appears. Not all at once, but in pieces: a boat loaded with pineapples so yellow they glow. Another piled with dragon fruit, their pink skin electric against the grey water. A woman balancing a pot of soup on a rocking hull, ladling phở into bowls for boat-borne customers who eat with one hand and steer with the other. This is Cái Răng — the largest floating market in the Mekong Delta — and it has been doing business on the water for over a hundred years.
          </p>
          <p>
            The system is elegant. Each boat hoists a sample of its goods on a tall bamboo pole — a pineapple on a stick means &quot;I sell pineapples.&quot; A watermelon means watermelon. A pair of trousers means... well, trousers. You pull alongside, haggle briefly, and the transaction happens mid-river, boats bumping gently while money and mangoes change hands. Nobody falls in. Almost nobody.
          </p>
        </div>
      </section>

      {/* ── FULL IMAGE ── */}
      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/floating-markets-v2.avif"
          alt="Boats laden with tropical fruit at Cai Rang market"
          fill
          className="object-cover"
        />
      </section>

      {/* ── THE FOOD ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Food</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Eating on water changes the way food tastes
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            Something happens to a bowl of bún riêu when you eat it on a rocking boat at 6 AM with mist on your face and the sound of water slapping against wood. The crab broth is richer. The herbs are sharper. The tamarind cut through the richness like a knife. Maybe it&apos;s the context. Maybe the cook is just really, really good. Probably both.
          </p>
          <p>
            The smaller market at Phong Điền — twenty minutes upstream and rarely visited by tour buses — is where the food gets personal. A grandmother makes bánh xèo (crispy pancakes) on a wok balanced on a charcoal stove, in a boat, while the current pulls her gently downstream. The batter sizzles. The shrimp curl. She folds it with the confidence of someone who has done this forty thousand times. You eat it with your fingers, wrapped in mustard greens, and the egg yolk runs down your wrist.
          </p>
        </div>
      </section>

      {/* ── SPLIT IMAGE + TEXT ── */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5]">
            <Image src="/images/1day_lunch.avif" alt="Fresh fruit from orchards" fill className="object-cover" />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-6">The Afternoon</p>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-8">
              After the market: orchards, music, and a hammock
            </h3>
            <div className="space-y-5 text-[#444] text-[15px] leading-[1.85] font-light">
              <p>
                The boat turns into a narrow canal lined with coconut palms and fruit trees — longan, rambutan, pomelo — heavy with fruit that you can pick from the boat if you lean far enough. A homestay appears: a wooden house on stilts with a garden that smells like lemongrass and fish sauce simmering.
              </p>
              <p>
                This is where you hear đờn ca tài tử — the traditional music of the Mekong Delta, a UNESCO Intangible Heritage. A man with a đàn tranh (16-string zither) and a woman singing in a voice that sounds like the river itself: slow, bending, full of sorrow that somehow feels like joy. You drink trà đá (iced tea) and eat slices of mango that the host cuts with a blade that hasn&apos;t been sharpened in years but never misses.
              </p>
              <p>
                The hammock in the garden is not optional. You will end up in it. Everyone does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/1day_tea.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic">
            &ldquo;The best meal I had in Vietnam cost forty cents, was served from a boat, and I have been trying to replicate it in my kitchen for three years. I cannot. The river was the secret ingredient.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── PRACTICAL ── */}
      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Good to Know</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">Before you go</h2>
        <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">When</h3>
            <p>Go early. The market peaks between 5:30 and 7:30 AM. By 9:00, the produce boats are leaving and the tourist boats are arriving. You want to be there when the cooks are still stirring.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Getting There</h3>
            <p>Cái Răng is 6km from Cần Thơ city center. Most hotels arrange boat pickup from Ninh Kiều Wharf. From Ho Chi Minh City, it&apos;s a 3.5-hour drive or a very fast overnight bus.</p>
          </div>
          <div className="border-l-2 border-[#222] pl-6">
            <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Bring</h3>
            <p>Cash in small denominations (10k–50k VND notes). A waterproof bag for your phone. An empty stomach. A willingness to eat things you can&apos;t identify — they will be delicious.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Add this to your itinerary</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our 1-day and 2-day Mekong Delta itineraries include floating market visits with private boat and English-speaking guide.
          </p>
          <Link
            href="/itineraries/1-day"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            View 1-Day Itinerary
          </Link>
        </div>
      </section>
    </main>
  );
}
