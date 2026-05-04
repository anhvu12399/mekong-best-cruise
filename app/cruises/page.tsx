import type { Metadata } from 'next'
import CruisesClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Mekong River Cruises | Luxury Riverboat Voyages in Southeast Asia',
  description:
    'Discover the finest Mekong River cruises through Vietnam, Cambodia, Laos & beyond. Intimate boutique vessels, bespoke itineraries, and 25 years of river expertise. Book your luxury voyage today.',
  keywords: [
    'Mekong River cruise',
    'luxury river cruise Vietnam Cambodia',
    'Mekong Delta cruise',
    'boutique river cruise Southeast Asia',
    'Mekong cruise itinerary',
    'Vietnam river cruise',
    'Cambodia cruise',
    'Laos river cruise',
    'small ship Mekong',
    'private charter Mekong',
    'honeymoon river cruise',
    'family Mekong cruise',
  ],
  alternates: {
    canonical: `${BASE_URL}/cruises`,
  },
  openGraph: {
    url: `${BASE_URL}/cruises`,
    title: 'Mekong River Cruises | Luxury Riverboat Voyages',
    description:
      'Boutique cruises on the legendary Mekong River. Explore Vietnam, Cambodia, Laos and more with never more than 28 guests aboard.',
    images: [{ url: '/images/hero_1.avif', width: 1200, height: 630, alt: 'Mekong River Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Mekong River Cruise',
  description:
    'Luxury boutique river cruises along the Mekong River through Vietnam, Cambodia, Laos, Thailand, Myanmar and China.',
  url: `${BASE_URL}/cruises`,
  touristType: ['Luxury Traveler', 'Cultural Tourist', 'Adventure Traveler'],
  itinerary: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vietnam Mekong Delta' },
      { '@type': 'ListItem', position: 2, name: 'Cambodia & Angkor' },
      { '@type': 'ListItem', position: 3, name: 'Laos River Exploration' },
    ],
  },
}

export default function CruisesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CruisesClient />
    </>
  )
}
