import { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mekong Best Cruise',
  description: 'Privacy policy for Mekong Best Cruise. We protect your personal data.',
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-5xl text-navy mb-12 ${playfair.className}`}>Privacy Policy</h1>
        <div className="prose prose-navy max-w-none font-serif text-navy/80 space-y-6">
          <p>At Mekong Best Cruise, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 className="text-2xl text-navy">1. Information Collection</h2>
          <p>We collect information you provide directly to us when booking a tour or contacting our customer service.</p>
          <h2 className="text-2xl text-navy">2. Use of Information</h2>
          <p>Your information is used solely for the purpose of providing and improving our travel services.</p>
          <h2 className="text-2xl text-navy">3. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
        </div>
      </div>
    </main>
  )
}
