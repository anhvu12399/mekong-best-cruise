import { Metadata } from 'next'
import { Bodoni_Moda } from 'next/font/google'
import Link from 'next/link'

const playfair = Bodoni_Moda({ subsets: ['latin'] })
const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mekong River Cruise',
  description: 'General Terms and Conditions for booking and traveling with Mekong River Cruise Co., Ltd. Navigation policies, passenger duties, and legal framework.',
  alternates: {
    canonical: `${BASE_URL}/terms-conditions`,
  },
}

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-24 px-6 text-[#222]">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#e0d9ce] pb-8 mb-12">
          <p className="text-[#8B4A2A] text-xs font-bold uppercase tracking-widest mb-3">
            Legal Agreement & Booking Framework
          </p>
          <h1 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#777]">
            Last Updated & Verified: October 2026 · Mekong River Cruise Co., Ltd
          </p>
        </div>

        <div className="space-y-10 text-[#444] text-[15px] leading-[1.85] font-light">
          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">1. Agreement to Terms & Corporate Entity</h2>
            <p className="mb-3">
              By accessing this website, requesting a quotation, or confirming a reservation with Mekong River Cruise Co., Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you (&ldquo;the Client&rdquo; or &ldquo;Guest&rdquo;) acknowledge that you have read, understood, and agreed to be legally bound by these Terms &amp; Conditions and our complementary <Link href="/booking-terms" className="text-[#8B4A2A] underline">Booking Terms</Link>.
            </p>
            <p>
              Mekong River Cruise Co., Ltd operates as a specialized subsidiary division of My Way Travel (<strong>My Way Luxury Travel LLC</strong>, legally registered with the New York Department of State, Division of Corporations, DOS ID: <strong>7926729</strong>; registered office: 54 State Street, Suite 804, Albany, NY 12207, United States). Operations and destination management in Vietnam and the Mekong basin are conducted under official <strong>International Tour Operator License No. 79-0743/2017/CDLQGVN-GP LHQT</strong> issued by the Vietnam National Authority of Tourism (VNAT, searchable on <em>quanlyluhanh.vn</em>) with registered office at 139 Nguyen Cu Trinh Street, District 1, Ho Chi Minh City, Vietnam.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">2. Role of Company as Authorized Specialist & Financial Security</h2>
            <p className="mb-3">
              Mekong River Cruise Co., Ltd operates as an authorized luxury cruise agency and destination management specialist for certified vessel operators on the Lower and Upper Mekong River (including Heritage Line, Aqua Expeditions, Lotus Cruises, Victoria Mekong Cruises, Pandaw, and partner private charters). We provide curated itinerary planning, verified cabin allocations, Best Price Guarantees, private transfers, and pre-departure concierge support.
            </p>
            <p>
              In full compliance with Article 31 of the Vietnam Tourism Law 2017, the company maintains a statutory bank guarantee escrow deposit with an institutional banking partner in Vietnam to safeguard traveler funds, ensure prompt fulfillment of contracted services, and provide financial recourse in unexpected emergencies.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">3. Quotations, Pricing & Deposit Schedules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Currency & Inclusions:</strong> Unless explicitly stated otherwise, all rates are quoted in US Dollars (USD). Inclusions (full board, guided excursions, transfers) and exclusions (mandatory port dues, visas, gratuities) are itemized in writing prior to payment.</li>
              <li><strong>Reservation Deposit:</strong> A non-refundable 30% deposit of the total booking value is required upon written reservation confirmation to secure vessel cabin allotments.</li>
              <li><strong>Balance Settlement:</strong> The final balance is due no later than 60 days prior to the embarkation date. For bookings confirmed within 60 days of sailing, 100% full payment is required immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">4. River Hydrology & Itinerary Adaptations</h2>
            <p className="mb-3">
              The Mekong River is a dynamic, living waterway subject to seasonal weather patterns and natural hydrological shifts:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>High Water Season (August – November):</strong> Rivers rise to peak depths, permitting direct lake navigation across Tonle Sap Lake into Siem Reap port.</li>
              <li><strong>Low Water Season (December – July):</strong> As water levels on Tonle Sap Lake recede, large luxury vessels cannot safely cross the shallow northern channels. Ships moor at Kampong Cham, and passengers are seamlessly transferred to or from Siem Reap via luxury air-conditioned motorcoach (approx. 4.5 hours with curated lunch stop) or executive speedboat.</li>
              <li><strong>Captain&apos;s Maritime Authority:</strong> The Ship&apos;s Captain retains sole authority to modify sailing schedules, docking locations, or tender embarkation points in the interest of passenger safety. Such adaptations do not constitute a breach of contract or entitle passengers to compensation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">5. Passports, Visas & Immigration Compliance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Guests must hold a machine-readable passport valid for at least six (6) months beyond the final date of their travel journey, with at least four blank visa pages.</li>
              <li>Guests are solely responsible for ensuring proper entry visas for Vietnam, Cambodia, Laos, or Thailand. For cruises crossing the Kaam Samnor river border, Cambodian visa-on-arrival is processed mid-stream by ship pursers, requiring valid clean cash ($30–$35 USD).</li>
              <li>Failure to present valid travel documents that results in denied boarding or border refusal is not compensable by Mekong River Cruise Co., Ltd.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">6. Mandatory Travel Insurance</h2>
            <p>
              All passengers traveling on our partner vessels are required to hold comprehensive international travel insurance covering emergency medical treatment, hospitalization, aeromedical evacuation, and trip interruption/cancellation. Proof of insurance may be inspected prior to boarding.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">7. Limitation of Liability</h2>
            <p>
              While we exercise the highest professional diligence in vetting and contracting licensed vessel operators and transport chauffeurs, Mekong River Cruise Co., Ltd is not liable for personal injury, illness, property damage, or delays caused by third-party maritime carriers, airlines, mechanical breakdowns, border closures, or acts of God (Force Majeure).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">8. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of Vietnam. Any unresolved disputes arising from our services shall be submitted to the competent courts of Ho Chi Minh City, Vietnam, or resolved through mutually agreed international mediation.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e0d9ce] flex items-center justify-between text-xs text-[#777]">
          <Link href="/privacy-policy" className="hover:text-navy underline">
            ← Privacy Policy
          </Link>
          <Link href="/booking-terms" className="hover:text-navy underline">
            Detailed Cancellation & Refund Policies →
          </Link>
        </div>
      </div>
    </main>
  )
}
