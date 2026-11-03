import { Metadata } from "next"
import { FullMekongStoryClient } from "./page-client"
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/full-mekong-story`

export const metadata: Metadata = {
  title: "The Full Mekong Story | 10-Day Vietnam & Laos Private Journey",
  keywords: [
    '10 day Mekong journey',
    'Vietnam to Laos river tour',
    'Ho Chi Minh to Golden Triangle',
    'cross border Mekong cruise',
    'Mekong Delta and Luang Prabang',
    'custom Mekong river itinerary',
    'luxury overland Vietnam Laos'
  ],
  description: "A comprehensive 10-day private journey tracking the Mekong River from the flat green delta in Southern Vietnam to the mountainous borderlands of Laos.",
  alternates: { canonical: PAGE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      '@id': `${PAGE_URL}/#trip`,
      name: 'The Full Mekong Story (10-Day Vietnam & Laos Expedition)',
      description: 'A 10-day luxury cross-border journey exploring both the Lower Mekong Delta and the mystical Upper Mekong river gorges in Luang Prabang, Laos.',
      touristType: ['Luxury Explorers', 'Cultural Travelers', 'Photographers'],
      itinerary: [
        { '@type': 'TouristAttraction', name: 'Ho Chi Minh City & Saigon River' },
        { '@type': 'TouristAttraction', name: 'Mekong Delta Channels & Cai Rang Market' },
        { '@type': 'TouristAttraction', name: 'Luang Prabang UNESCO World Heritage Center' },
        { '@type': 'TouristAttraction', name: 'Pak Ou Sacred Caves' },
        { '@type': 'TouristAttraction', name: 'Kuang Si Waterfalls & Golden Triangle' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '3450',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
      },
      provider: {
        '@type': 'TravelAgency',
        name: 'Mekong River Cruise',
        url: BASE_URL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Itineraries', item: `${BASE_URL}/cruises` },
        { '@type': 'ListItem', position: 3, name: 'The Full Mekong Story', item: PAGE_URL },
      ],
    },
  ],
}

export default function FullMekongStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <FullMekongStoryClient />
      </main>
    </>
  )
}
