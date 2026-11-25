import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Mekong River Cruise page could not be found. Browse our verified ship catalog, cost comparison, or itinerary guides.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-[75vh] bg-[#FAF9F5] flex items-center justify-center px-6 pt-32 pb-24">
      <div className="max-w-2xl w-full text-center">
        <p className="text-[#9B7B3B] text-xs font-bold tracking-[0.3em] uppercase mb-4">
          404 · Page Not Found
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-5">
          This river bend leads nowhere
        </h1>
        <p className="text-navy/65 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          The page you requested has moved or no longer exists. Explore our 20 verified Mekong cruise vessels or ask a specialist to match your dates.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            href="/cruises"
            className="bg-navy text-white px-6 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-gold hover:text-navy transition-colors"
          >
            Browse All Cruises
          </Link>
          <Link
            href="/mekong-cruise-cost-comparison"
            className="border border-navy/25 text-navy px-6 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Compare 20 Ship Prices
          </Link>
          <Link
            href="/review-my-itinerary"
            className="border border-navy/25 text-navy px-6 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Free Itinerary Check
          </Link>
        </div>

        <div className="border-t border-navy/10 pt-8 text-xs text-navy/55 flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-navy underline underline-offset-4">Homepage</Link>
          <Link href="/itineraries/vietnam-cambodia" className="hover:text-navy underline underline-offset-4">Vietnam &amp; Cambodia Route</Link>
          <Link href="/destinations/laos" className="hover:text-navy underline underline-offset-4">Upper Mekong Laos</Link>
          <Link href="/plan-your-journey" className="hover:text-navy underline underline-offset-4">Plan Your Journey</Link>
          <Link href="/ai-access" className="hover:text-navy underline underline-offset-4">AI &amp; API Access</Link>
        </div>
      </div>
    </main>
  )
}
