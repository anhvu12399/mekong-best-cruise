import type { Metadata } from 'next'
import { PrivateCharterClient } from './page-client'
import { Header } from "@/components/header"

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
    <>
      <Header />
      <main>
        <PrivateCharterClient />
      </main>
    </>
  )
}
