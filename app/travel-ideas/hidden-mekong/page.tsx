import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Hidden Mekong — Travel Ideas",
  description: "Experience the Mekong Delta you won't see on typical tours: small boats, narrow canals, and the quiet rhythm of real life.",
};

export default function HiddenMekongPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="relative h-screen flex items-end">
        <Image
          src="/images/hidden_hero.png"
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
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            The Mekong<br />You Don&apos;t<br />See on Tours
          </h1>
          <p className="text-white/75 text-[15px] font-light leading-relaxed max-w-lg">
            There is the Mekong Delta of the guidebooks. And then there is the Mekong of the narrow canals, the silent rowboats, and the people who live with the river, not just next to it.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">Beyond the Checklist</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          The sound of water dripping from a wooden oar.
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            When you book a standard tour of the Mekong Delta, you are handed a checklist. You will see a floating market. You will visit a honey farm. You will hear traditional music. You will eat elephant ear fish. It is a good checklist. But it is not the whole story.
          </p>
          <p>
            The real Mekong — the one that stays with you — doesn&apos;t happen on a schedule. It happens when you step off the main river and into the capillary network of narrow canals, called &quot;rạch&quot;, where the water is the color of strong tea and the nipa palms arch overhead like a green cathedral ceiling. 
          </p>
          <p>
            Here, the motor is cut. The silence is sudden and absolute, broken only by the rhythmic splash of a wooden oar and the hum of cicadas. This is where you see the Delta not as a tourist attraction, but as a neighborhood. A woman washing clothes on a wooden dock. A dog sleeping in the shade of a jackfruit tree. Children paddling a styrofoam box across the water with the casual skill of people born to the river.
          </p>
        </div>
      </section>

      <section className="relative w-full aspect-[16/7]">
        <Image
          src="/images/dest_vietnam.avif"
          alt="Quiet river life"
          fill
          className="object-cover"
        />
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 lg:py-32">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-bold mb-8">The Feeling</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
          Finding what the crowds missed
        </h2>
        <div className="space-y-6 text-[#444] text-[16px] leading-[1.85] font-light">
          <p>
            There is a specific kind of joy in discovering something that feels entirely yours. When you travel deep into the Delta — perhaps to the smaller islets around Vĩnh Long or the remote waterways of Trà Vinh — you stop being a spectator. You become a guest.
          </p>
          <p>
            You might find yourself invited into a wooden house on stilts to drink tea that tastes of jasmine and smoke. You might help pull a fishing net from the mud, your hands sinking into the warm earth. These moments aren&apos;t staged. They can&apos;t be bought on a group tour ticket. They only happen when you slow down enough to let the river set the pace.
          </p>
        </div>
      </section>

      <section className="bg-[#505a5f] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Discover the hidden Delta</h2>
          <p className="text-white/70 text-[15px] font-light mb-10">
            Our private journeys are designed to take you off the main waterways and into the quiet heart of the Mekong.
          </p>
          <Link
            href="/itineraries/private-charter"
            className="inline-block bg-white text-[#222] px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Private Charters
          </Link>
        </div>
      </section>
    </main>
  );
}
