import { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mekong Best Cruise',
  description: 'Terms and conditions for booking luxury river cruises with Mekong Best Cruise.',
  alternates: {
    canonical: `${BASE_URL}/terms-conditions`,
  },
}

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-5xl text-navy mb-12 ${playfair.className}`}>Terms & Conditions</h1>
        <div className="prose prose-navy max-w-none font-serif text-navy/80 space-y-6">
          <p>Welcome to Mekong Best Cruise. By accessing our website and booking our services, you agree to comply with and be bound by the following terms and conditions.</p>
          <h2 className="text-2xl text-navy">1. Booking and Payment</h2>
          <p>All bookings are subject to availability. A deposit is required at the time of booking to secure your reservation.</p>
          <h2 className="text-2xl text-navy">2. Cancellation Policy</h2>
          <p>Cancellations made within 30 days of departure may be subject to a cancellation fee.</p>
          <h2 className="text-2xl text-navy">3. Travel Insurance</h2>
          <p>We highly recommend that all guests purchase comprehensive travel insurance.</p>
        </div>
      </div>
    </main>
  )
}
