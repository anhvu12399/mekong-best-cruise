import type { Metadata } from 'next'
import { ItineraryTemplate } from '@/components/itinerary-template'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/vietnam-cambodia`

export const metadata: Metadata = {
  title: '7-8 Day Vietnam to Cambodia Cruise | Imperial River Journey',
  description: 'The definitive Mekong experience linking two nations. Journey from the bustling Mekong Delta to the majestic silence of ancient Cambodian temples.',
  alternates: { canonical: PAGE_URL },
}

export default function VietnamCambodiaItinerary() {
  return (
    <ItineraryTemplate
      heroImage="/images/dest_cambodia.png"
      title="The Imperial River"
      duration="8 Days / 7 Nights"
      route="HCMC – Phnom Penh – Siem Reap"
      type="Luxury River Cruise"
      intro="The definitive Mekong experience, seamlessly linking two incredible nations. Journey from the vibrant, bustling waterways of the Vietnamese Delta to the majestic silence of ancient Cambodian temples."
      highlights={[
        "Smooth border crossing via the scenic Mekong",
        "Phnom Penh's Royal Palace and Silver Pagoda",
        "Tonle Sap Lake's extraordinary floating villages",
        "Gateway to the legendary Angkor Wat"
      ]}
      days={[
        {
          day: "Day 1-2",
          title: "The Vibrant Delta",
          morning: "Embarkation in Vietnam. Explore Cai Be's floating markets and colonial architecture.",
          afternoon: "Navigate the narrow canals of Sa Dec, visiting ancient temples and flower farms.",
          experience: "Immersing yourself in the authentic, untouched daily life of delta communities."
        },
        {
          day: "Day 3",
          title: "Crossing Frontiers",
          morning: "Explore Chau Doc's floating fish farms and the vibrant local Cham minority villages.",
          afternoon: "A seamless, luxurious border crossing into Cambodia while enjoying high tea.",
          experience: "Watching the landscape transition dramatically from delta plains to Cambodian lushness."
        },
        {
          day: "Day 4",
          title: "The Pearl of Asia",
          morning: "Arrive in Phnom Penh. A curated cyclo tour of the French colonial architecture.",
          afternoon: "Private guided visit to the Royal Palace and the somber Tuol Sleng museum.",
          experience: "An exclusive Apsara dance performance on deck under the Cambodian stars."
        },
        {
          day: "Day 5-6",
          title: "Silk and Monks",
          morning: "Visit the artisan silk-weaving village of Koh Chen.",
          afternoon: "Take a traditional ox-cart ride through Kampong Tralach to the Oudong monastery.",
          experience: "A profoundly moving private water blessing ceremony led by senior monks."
        },
        {
          day: "Day 7-8",
          title: "The Great Lake",
          morning: "Cruise the vast, mirror-like expanse of Tonle Sap Lake (water levels permitting).",
          afternoon: "Farewell gala dinner before disembarking in Siem Reap on Day 8.",
          experience: "Arriving refreshed and ready to explore the monumental Angkor Wat complex."
        }
      ]}
      practicalInfo={{
        season: "August to March (Optimal water levels)",
        departure: "Ho Chi Minh City, Vietnam",
        arrival: "Siem Reap, Cambodia",
        private: "Deck and full ship charters available",
        customization: "Extend your journey with our signature 'Angkor After Dark' private temple dining experience or a luxury retreat in Saigon prior to departure."
      }}
    />
  )
}
