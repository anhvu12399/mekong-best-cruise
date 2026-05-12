import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Mekong River Cruise",
  description: "Get in touch with our Mekong River cruise specialists. Ask about itineraries, request a custom quote, or plan your private charter journey.",
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
            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                <select
                  id="contact-subject"
                  className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] focus:outline-none focus:border-[#b8860b] transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Booking a Cruise</option>
                  <option>Custom Itinerary Request</option>
                  <option>Private Charter</option>
                  <option>Group / Corporate Travel</option>
                  <option>Travel Agent Partnership</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your dream journey..."
                  className="w-full px-4 py-3 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#0f1a2b] text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors"
              >
                Send Message
              </button>
              <p className="text-[#999] text-xs text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
