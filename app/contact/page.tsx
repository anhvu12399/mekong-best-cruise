import { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact our Ho Chi Minh City Mekong River cruise specialists for verified ship tariffs, cabin availability, or private river charters.",
  keywords: ["contact Mekong cruise", "Mekong cruise quote", "book Mekong cruise", "Mekong travel specialist"],
  alternates: { canonical: "https://www.mekongrivercruise.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* ── HERO ── */}
      <section className="bg-[#0f1a2b] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#b8860b]/80 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-lg mx-auto">
            Whether you&apos;re ready to book or just beginning to dream, our specialists are here to help you plan the perfect Mekong journey.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT: Contact Info */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Reach Us Directly</h2>
            <div className="space-y-8 text-[#444] text-[15px] leading-[1.85] font-light">
              <div>
                <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Email</h3>
                <p>
                  <a href="mailto:sales@mekongrivercruise.com" className="text-[#b8860b] hover:underline">
                    sales@mekongrivercruise.com
                  </a>
                </p>
                <p className="text-[#999] text-sm mt-1">We respond within 24 hours, usually much sooner.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Phone</h3>
                <p>+1 315 998 1998</p>
                <p className="text-[#999] text-sm mt-1">Monday–Saturday, 8 AM – 6 PM (ICT, GMT+7)</p>
              </div>
              <div>
                <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">Office</h3>
                <p>139 Nguyen Cu Trinh Street<br />District 1, Ho Chi Minh City<br />Vietnam</p>
              </div>
              <div>
                <h3 className="font-bold text-[#222] text-sm uppercase tracking-wider mb-2">For Travel Agents</h3>
                <p>
                  Trade inquiries:{" "}
                  <a href="mailto:trade@mekongrivercruise.com" className="text-[#b8860b] hover:underline">
                    trade@mekongrivercruise.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Form */}
          <div className="bg-[#f5f5f5] p-10">
            <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
