import type { Metadata } from 'next'
import JourneysClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Exclusive Mekong Journeys | The Clockless Voyage, Lost Canals & More',
  description:
    'Embark on exclusive, unscripted Mekong river journeys: The Clockless Voyage, Floating Market Trader, The Lost Canals, Echoes of Empire, and The Monsoon Symphony.',
  keywords: [
    'Mekong river journeys',
    'luxury Mekong itinerary',
    'clockless voyage Mekong',
    'floating market trader',
    'lost canals Mekong Delta',
    'Cambodia temple river cruise',
    'bespoke Mekong adventure',
    'luxury Southeast Asia river journey',
  ],
  alternates: { canonical: `${BASE_URL}/journeys` },
  openGraph: {
    url: `${BASE_URL}/journeys`,
    title: 'Exclusive Mekong Journeys | Mekong Best Cruise',
    description:
      'Exclusive, unscripted journeys that redefine the concept of exploration and luxury on the Mekong River.',
    images: [{
      url: '/images/banner_1.avif',
      width: 1200,
      height: 630,
      alt: 'Luxury Mekong River Journey at Golden Hour',
    }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: `${BASE_URL}/journeys`,
  name: 'Exclusive Mekong Journeys',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  description: 'A collection of exclusive, unscripted luxury journeys on the Mekong River.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Journeys', item: `${BASE_URL}/journeys` },
    ],
  },
}

export default function JourneysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JourneysClient />
    </>
  )
}
