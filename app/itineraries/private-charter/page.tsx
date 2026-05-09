import type { Metadata } from 'next'
import { ItineraryTemplate } from '@/components/itinerary-template'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/private-charter`

export const metadata: Metadata = {
  title: 'Private Mekong River Charter | Absolute Luxury & Privacy',
  keywords: [
    'private Mekong charter',
    'charter a boat Mekong river',
    'Mekong luxury yacht charter',
    'private river cruise Southeast Asia',
    'exclusive use Mekong cruise',
    'family Mekong charter',
    'corporate retreat Mekong cruise',
    'bespoke private boat Vietnam',
    'custom Mekong itinerary'
],
  description: 'Absolute privacy and unscripted freedom. Claim an entire luxury vessel for your family or inner circle, with a dedicated crew and bespoke itinerary.',
  alternates: { canonical: PAGE_URL },
}

export default function PrivateCharterItinerary() {
  return (
    <ItineraryTemplate
      heroImage="/images/banner_3.avif"
      title="The Ultimate Sanctuary"
      duration="Tailored (Custom Days)"
      route="Fully Customized Routing"
      type="Private Charter"
      intro="Absolute privacy and unscripted freedom. Claim an entire luxury vessel for your family or inner circle, complete with a dedicated crew, private chef, and a route dictated entirely by your desires."
      highlights={[
        "100% complete privacy for you and your guests",
        "Bespoke dining curated by your personal executive chef",
        "Unscripted daily scheduling—you dictate the pace",
        "Exclusive VIP onshore access away from the crowds"
      ]}
      days={[
        {
          day: "Day 1",
          title: "The VIP Welcome",
          morning: "Discreet VIP transfer and personalized embarkation. Settle into your private floating sanctuary.",
          afternoon: "A brief orientation with your captain to finalize your preferred daily rhythms.",
          experience: "A private Champagne toast on the sun deck as we cast off into a spectacular sunset."
        },
        {
          day: "Day 2-X",
          title: "The Unscripted Journey",
          morning: "Wake up whenever you please. Enjoy a quiet dawn drift or a late gourmet brunch.",
          afternoon: "Choose between an impromptu village visit, onboard spa therapies, or simply cruising in silence.",
          experience: "Total freedom. The itinerary bends to your mood, not the other way around."
        },
        {
          day: "Final Day",
          title: "A Lingering Farewell",
          morning: "A final decadent breakfast served precisely to your liking as we approach the destination.",
          afternoon: "Seamless, private disembarkation and onward VIP transfer.",
          experience: "A bespoke farewell gala dinner under the stars the night prior, celebrating your journey."
        }
      ]}
      practicalInfo={{
        season: "Available Year-Round",
        departure: "Flexible (HCMC, Phnom Penh, or Siem Reap)",
        arrival: "Flexible",
        private: "100% Exclusive Vessel Buyout",
        customization: "Limitless. From flying in specialized sommeliers to orchestrating private temple blessings, if it is possible, it will be done."
      }}
    />
  )
}
