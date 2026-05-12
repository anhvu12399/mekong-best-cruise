import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Terms — Mekong River Cruise",
  description: "Booking terms and conditions for Mekong River Cruise including payment, cancellation, and refund policies.",
  alternates: { canonical: "https://www.mekongrivercruise.com/booking-terms" },
};

export default function BookingTermsPage() {
  return (
    <main className="bg-white text-[#222]">
      <section className="bg-[#0f1a2b] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#b8860b]/80 text-[10px] tracking-[0.35em] uppercase font-bold mb-5">Support</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">Booking Terms</h1>
          <p className="text-white/60 text-[15px] font-light max-w-lg mx-auto">
            Clear, fair terms for your peace of mind.
          </p>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-24 space-y-12 text-[#444] text-[15px] leading-[1.85] font-light">
        <div>
          <h2 className="font-serif text-2xl mb-4">1. Booking Confirmation</h2>
          <p>A booking is confirmed upon receipt of a 30% deposit and written confirmation from our team. The remaining balance is due 60 days prior to the departure date. For bookings made within 60 days of departure, full payment is required at the time of booking.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">2. Payment Methods</h2>
          <p>We accept payment via international bank transfer, credit card (Visa, Mastercard), and PayPal. All prices are quoted in USD unless otherwise stated. Currency conversion fees charged by your bank are your responsibility.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">3. Cancellation by You</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>60+ days before departure: full refund minus a $100 administration fee</li>
            <li>30–59 days before departure: 50% refund</li>
            <li>15–29 days before departure: 25% refund</li>
            <li>Less than 15 days: no refund</li>
          </ul>
          <p className="mt-4">We strongly recommend comprehensive travel insurance to cover cancellation costs.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">4. Changes by Us</h2>
          <p>We reserve the right to alter itineraries, vessels, or excursions due to weather, water levels, safety concerns, or operational requirements. In the event of a significant change, you will be offered an alternative of comparable standard or a full refund.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">5. Travel Insurance</h2>
          <p>All guests are required to hold comprehensive travel insurance covering medical expenses, evacuation, trip cancellation, and personal belongings for the duration of their journey. Proof of insurance may be requested before departure.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">6. Liability</h2>
          <p>Mekong River Cruise acts as a booking agent between you and the vessel operator. While we exercise due diligence in selecting our partners, we are not liable for acts, omissions, or defaults of third-party service providers including cruise operators, airlines, and hotels.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4">7. Complaints</h2>
          <p>If something goes wrong during your journey, please raise it with your guide or the ship&apos;s manager immediately so it can be addressed. Written complaints should be sent to <a href="mailto:sales@mekongrivercruise.com" className="text-[#b8860b] hover:underline">sales@mekongrivercruise.com</a> within 30 days of your return.</p>
        </div>
      </section>
    </main>
  );
}
