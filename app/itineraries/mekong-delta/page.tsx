import type { Metadata } from 'next'
import { ItineraryTemplate } from '@/components/itinerary-template'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/mekong-delta`

export const metadata: Metadata = {
  title: '3-4 Day Mekong Delta Discovery | Luxury Short Cruise',
  description: 'An immersive 4-day luxury journey into the heart of the Mekong Delta. Explore floating markets, historic mansions, and vibrant local life.',
  alternates: { canonical: PAGE_URL },
}

export default function MekongDeltaItinerary() {
  return (
    <ItineraryTemplate
      heroImage="/images/dest_vietnam.png"
      title="The Delta Discovery"
      duration="4 Days / 3 Nights"
      route="HCMC – Cai Be – Can Tho – HCMC"
      type="Small Ship Expedition"
      intro="An immersive short journey into the heart of the Mekong Delta. Wake up to the vibrant chaos of floating markets and drift through impossibly narrow, palm-fringed canals."
      highlights={[
        "Cai Rang Floating Market at dawn",
        "Sa Dec flower villages and colonial history",
        "Historic French-Indochine mansions",
        "Traditional silk weaving and artisan crafts"
      ]}
      days={[
        {
          day: "Day 1",
          title: "Embarkation in Cai Be",
          morning: "Transfer from Ho Chi Minh City to the Cai Be pier. Settle into your luxurious suite.",
          afternoon: "Cycle or take a small sampan through local fruit orchards and artisan workshops.",
          experience: "Sunset cocktail reception on the observation deck as we cast off into the twilight."
        },
        {
          day: "Day 2",
          title: "The Marguerite Duras Connection",
          morning: "Explore the bustling Sa Dec town and visit the historic Lover's House.",
          afternoon: "A tranquil cruise upstream towards Can Tho, passing vibrant river commerce.",
          experience: "Exclusive blindfolded sensory dining experience, highlighting delta spices."
        },
        {
          day: "Day 3",
          title: "The Floating Market",
          morning: "Early start to witness the spectacular Cai Rang Floating Market at its peak.",
          afternoon: "Visit hidden traditional craft villages and learn about sustainable river farming.",
          experience: "Private performance of 'Don Ca Tai Tu', the UNESCO-recognized local folk music."
        },
        {
          day: "Day 4",
          title: "Farewell to the River",
          morning: "Final sunrise cruise over the delta before a decadent farewell breakfast.",
          afternoon: "Disembarkation in Can Tho and private transfer back to Ho Chi Minh City.",
          experience: "A lingering final moment of pure river tranquility."
        }
      ]}
      practicalInfo={{
        season: "September to April (High Water Season)",
        departure: "Ho Chi Minh City, Vietnam",
        arrival: "Ho Chi Minh City, Vietnam",
        private: "Available for full charter",
        customization: "This itinerary is a baseline. We can seamlessly add pre-cruise stays in Saigon or helicopter transfers to the pier to match your precise preferences."
      }}
    />
  )
}
