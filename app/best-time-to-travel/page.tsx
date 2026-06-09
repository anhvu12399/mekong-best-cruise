import { Metadata } from "next"
import { BestTimeToTravelClient } from "./page-client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/best-time-to-travel`

export const metadata: Metadata = {
  title: "Best Time to Travel Mekong | Monthly Weather & Season Guide",
  keywords: [
    'best time to travel mekong',
    'mekong river cruise weather',
    'mekong season guide',
    'vietnam cambodia laos monthly weather',
    'mekong high water season',
    'mekong low water season'
  ],
  description: "Discover the best time to cruise the Mekong River. Monthly guide to weather, water levels, festival seasons, and recommended itineraries for Vietnam, Cambodia, and Laos.",
  alternates: { canonical: PAGE_URL },
}

export default function BestTimeToTravelPage() {
  return (
    <>
      <Header />
      <main>
        <BestTimeToTravelClient />
      </main>
      <Footer />
    </>
  )
}
