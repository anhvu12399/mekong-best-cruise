import { Metadata } from 'next'
import { Bodoni_Moda } from 'next/font/google'
import Link from 'next/link'

const playfair = Bodoni_Moda({ subsets: ['latin'] })
const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mekong River Cruise',
  description: 'Privacy Policy and Data Protection standards for Mekong River Cruise Co., Ltd. How we collect, handle, and protect your passport, booking, and personal data.',
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-24 px-6 text-[#222]">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#e0d9ce] pb-8 mb-12">
          <p className="text-[#8B4A2A] text-xs font-bold uppercase tracking-widest mb-3">
            Legal & Data Protection Standards
          </p>
          <h1 className={`text-4xl md:text-5xl text-navy mb-4 ${playfair.className}`}>
            Privacy Policy
          </h1>
          <p className="text-sm text-[#777]">
            Last Updated & Verified: October 2026 · Mekong River Cruise Co., Ltd
          </p>
        </div>

        <div className="space-y-10 text-[#444] text-[15px] leading-[1.85] font-light">
          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">1. Introduction &amp; Data Controller</h2>
            <p>
              Mekong River Cruise Co., Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating as a dedicated subsidiary division of My Way Travel (<strong>My Way Luxury Travel LLC</strong>, New York Department of State DOS ID: 7926729; 54 State Street, Suite 804, Albany, NY 12207) alongside its licensed Vietnam operational office at 139 Nguyen Cu Trinh Street, District 1, Ho Chi Minh City (International Tour Operator License No. <strong>79-0743/2017/CDLQGVN-GP LHQT</strong>), acts as the Data Controller for personal data processed through this website. We respect your personal privacy and are committed to safeguarding your data in accordance with international standards, including the EU General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-3">To curate, confirm, and operate your luxury river journey safely and legally, we collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2.5">
              <li><strong>Contact & Identity Information:</strong> Full legal name (matching your passport), nationality, date of birth, gender, residential address, telephone/WhatsApp number, and email address.</li>
              <li><strong>Passport & Immigration Documentation:</strong> Passport number, issue date, expiration date, issuing authority, and visa copies. Under Vietnamese and Cambodian maritime regulations, passenger manifests must be submitted to inland waterway authorities and border guard stations (e.g., Vĩnh Xương / Kaam Samnor river checkpoint) prior to ship embarkation.</li>
              <li><strong>Health, Dietary & Mobility Requirements:</strong> Dietary preferences, food allergies, physical mobility limitations, or medical considerations disclosed to ensure customized dining and safe shore excursions.</li>
              <li><strong>Financial & Payment Transaction Records:</strong> Transaction reference numbers and payment receipts. We do NOT store full credit card numbers or CVV codes; all digital card transactions are handled by PCI-DSS compliant payment gateways.</li>
              <li><strong>Technical & Analytical Data:</strong> Anonymized IP addresses, browser types, and usage data collected via Google Analytics and Cloudflare Turnstile bot verification to maintain website security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We process your data strictly for legitimate operational purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Securing confirmed cabin allotments with partner vessel operators (e.g., Heritage Line, Aqua Expeditions, Lotus Cruises, Victoria Mekong, Pandaw).</li>
              <li>Arranging cross-border immigration clearance and port permissions with Vietnamese and Cambodian authorities.</li>
              <li>Coordinating private airport transfers, luxury limousines, and dedicated local tour guides.</li>
              <li>Communicating pre-departure advisories, hydrological updates, and 24/7 concierge assistance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">4. Disclosure to Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal data. Disclosures are strictly limited to verified operational partners directly involved in delivering your journey: the licensed ship operator, bonded ground transfer chauffeurs, local port authorities, and secure payment processing services. All partners are bound by confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">5. Data Retention & International Security</h2>
            <p>
              Your personal information is stored securely behind encrypted firewalls (TLS 1.3). Passport data collected for border clearance manifests is retained only for the duration required by local maritime regulations and tax compliance laws, after which it is securely archived or permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">6. Your Rights Under International Privacy Standards</h2>
            <p className="mb-3">Depending on your country of residence (including the EU and UK), you hold the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete details.</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request deletion of your personal data where statutory retention is no longer mandatory.</li>
              <li><strong>Right to Withdraw Consent:</strong> Unsubscribe from travel newsletters at any time via the one-click unsubscribe link.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-serif text-navy font-bold mb-4">7. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-[#FAF8F5] p-6 border border-[#e0d9ce] rounded mt-4 space-y-2">
              <p><strong>Mekong River Cruise Co., Ltd</strong></p>
              <p>Attn: Data Privacy & Compliance Officer</p>
              <p>139 Nguyen Cu Trinh Street, District 1, Ho Chi Minh City, Vietnam</p>
              <p>Email: <a href="mailto:privacy@mekongrivercruise.com" className="text-[#8B4A2A] hover:underline">privacy@mekongrivercruise.com</a> or <a href="mailto:sales@mekongrivercruise.com" className="text-[#8B4A2A] hover:underline">sales@mekongrivercruise.com</a></p>
              <p>Concierge WhatsApp: +1 315 998 1998</p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e0d9ce] flex items-center justify-between text-xs text-[#777]">
          <Link href="/terms-conditions" className="hover:text-navy underline">
            Terms & Conditions →
          </Link>
          <Link href="/booking-terms" className="hover:text-navy underline">
            Booking & Cancellation Terms →
          </Link>
        </div>
      </div>
    </main>
  )
}
