import { Metadata } from "next"
import { VietnamCambodiaClient } from "./page-client"
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/vietnam-cambodia`

export const metadata: Metadata = {
  title: "Vietnam to Cambodia Pilgrimage | Indochina Luxury Cruises",
  keywords: [
    'Vietnam to Cambodia cruise itinerary',
    'Ho Chi Minh to Siem Reap boat',
    '7 night Mekong cruise',
    '8 day Mekong river cruise',
    'luxury cross border cruise',
    'Mekong expedition Vietnam Cambodia',
    'Siem Reap to Saigon river journey',
    'best Vietnam Cambodia cruise',
    'Mekong downstream cruise',
    'Mekong upstream cruise',
    'comprehensive Mekong river tour'
  ],
  description: "A 7-8 day luxury pilgrimage connecting the Mekong Delta to Angkor Wat. Experience deep spiritual connection, private masses, and meditative travel.",
  alternates: { canonical: PAGE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      '@id': `${PAGE_URL}/#trip`,
      name: 'Vietnam to Cambodia Mekong River Cruise (7–8 Days)',
      description: 'A 7-8 day luxury river voyage connecting Ho Chi Minh City, the Mekong Delta, Phnom Penh, and Angkor Wat (Siem Reap).',
      touristType: ['Luxury Travelers', 'Couples', 'Active Seniors', 'Culture Enthusiasts'],
      itinerary: [
        { '@type': 'TouristAttraction', name: 'My Tho Port & Tien River' },
        { '@type': 'TouristAttraction', name: 'Cai Be Floating Market' },
        { '@type': 'TouristAttraction', name: 'Sa Dec Ancient Town & Marguerite Duras House' },
        { '@type': 'TouristAttraction', name: 'Tan Chau Silk Island' },
        { '@type': 'TouristAttraction', name: 'Phnom Penh Royal Palace & Silver Pagoda' },
        { '@type': 'TouristAttraction', name: 'Oudong Mountain Buddhist Monastery' },
        { '@type': 'TouristAttraction', name: 'Kampong Tralach & Tonle Sap Waterways' },
        { '@type': 'TouristAttraction', name: 'Angkor Wat Temples (Siem Reap)' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '1690',
        highPrice: '14000',
        offerCount: '6',
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
        { '@type': 'ListItem', position: 3, name: 'Vietnam to Cambodia', item: PAGE_URL },
      ],
    },
  ],
}

export default function VietnamCambodiaItineraryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <VietnamCambodiaClient />
      </main>
    </>
  )
}
