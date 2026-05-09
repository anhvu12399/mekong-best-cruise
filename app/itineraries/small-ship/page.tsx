import type { Metadata } from 'next'
import { ItineraryTemplate } from '@/components/itinerary-template'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/small-ship`

export const metadata: Metadata = {
  title: 'Small Ship Mekong Expeditions | Boutique River Cruising',
  keywords: [
    'small ship Mekong cruise',
    'boutique Mekong river cruise',
    'intimate Mekong boat tour',
    'luxury small boat Vietnam',
    'Cambodia small ship cruise',
    'exclusive Mekong expedition',
    'less than 20 cabins Mekong cruise',
    'premium small ship Asia',
    'Mekong shallow draft vessels'
],
  description: 'Navigate the dramatic gorges and pristine upper reaches of the Mekong on an intimate boutique vessel designed for true, unfiltered exploration.',
  alternates: { canonical: PAGE_URL },
}

export default function SmallShipItinerary() {
  return (
    <ItineraryTemplate
      heroImage="/images/dest_laos.avif"
      title="The Hidden Tributaries"
      duration="5 Days / 4 Nights"
      route="Luang Prabang – Golden Triangle"
      type="Boutique Expedition"
      intro="Venture where larger ships simply cannot follow. Navigate the dramatic limestone gorges and pristine upper reaches of the Mekong on an intimate vessel designed for true exploration."
      highlights={[
        "Access to remote, untouched hill-tribe villages",
        "Exploring the mysterious Pak Ou Buddha Caves",
        "Cruising the dramatic convergence of the Golden Triangle",
        "Starting or ending in UNESCO-heritage Luang Prabang"
      ]}
      days={[
        {
          day: "Day 1",
          title: "The Heritage Departure",
          morning: "Embark in the spiritual heart of Laos, Luang Prabang. Receive a traditional Baci blessing.",
          afternoon: "Cruise upstream to the sheer limestone cliffs housing the Pak Ou Caves.",
          experience: "Discovering thousands of golden Buddha statues left by pilgrims over centuries."
        },
        {
          day: "Day 2",
          title: "The Dramatic Gorges",
          morning: "Navigate through narrow, dramatic gorges where the river cuts deep into the mountains.",
          afternoon: "Visit an isolated village known for traditional Lao whiskey (Lao Lao) distillation.",
          experience: "An exclusive riverside BBQ set on a secluded sandbank under the stars."
        },
        {
          day: "Day 3",
          title: "The Untouched Frontier",
          morning: "A gentle morning cruise through deep jungle landscapes. Participate in an onboard cooking class.",
          afternoon: "Trek to a remote Khmu village to understand upland farming and animist traditions.",
          experience: "Listening to the profound silence of the upper Mekong, broken only by birdcalls."
        },
        {
          day: "Day 4",
          title: "The Golden Triangle",
          morning: "Approach the infamous Golden Triangle where Laos, Myanmar, and Thailand converge.",
          afternoon: "Visit an ethical elephant conservation sanctuary on the riverbanks.",
          experience: "Standing at the exact point where three distinct cultures and borders meet."
        },
        {
          day: "Day 5",
          title: "The Thai Border",
          morning: "Final breakfast on board as we cruise towards the Thai border.",
          afternoon: "Disembarkation in Chiang Saen, Thailand.",
          experience: "A seamless transition from deep river exploration to your onward land journey."
        }
      ]}
      practicalInfo={{
        season: "October to May",
        departure: "Luang Prabang, Laos",
        arrival: "Chiang Saen, Thailand (or reverse)",
        private: "Available for intimate group charters",
        customization: "Highly flexible. We can arrange extended stays in Luang Prabang or luxury resort connections in Chiang Rai."
      }}
    />
  )
}
