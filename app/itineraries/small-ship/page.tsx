import type { Metadata } from 'next'
import { buildTitle } from "@/lib/seo"
import { SmallShipClient } from './page-client'
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/small-ship`

export const metadata: Metadata = {
  title: buildTitle("Small-Ship Mekong River Cruises | Boutique Expeditions"),
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
    <>
      <Header />
      <main>
        <SmallShipClient />
      </main>
    </>
  )
}
