import type { Metadata } from 'next'
import CambodiaClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/destinations/cambodia`

export const metadata: Metadata = {
  title: 'Cambodia Mekong Cruise | Angkor Wat, Phnom Penh & Tonle Sap',
  description:
    'Sail the Mekong through Cambodia on a luxury river cruise. Explore Angkor Wat, Phnom Penh\'s Silver Pagoda, the floating villages of Tonle Sap Lake, and the ancient Khmer civilization.',
  keywords: [
    'Cambodia Mekong cruise',
    'Siem Reap to Phnom Penh boat',
    'Tonle Sap luxury cruise',
    'Angkor Wat river cruise',
    'Phnom Penh sunset cruise',
    'Cambodia river expedition',
    'luxury boat Cambodia',
    'Mekong river cruise Cambodia',
    'Kompong Khleang floating village',
    'Tonle Sap biosphere tour',
    'Cambodia slow travel',
    'Siem Reap boat tour',
    'Phnom Penh to Siem Reap ferry alternative',
    'Cambodia premium river cruise',
    'Khmer empire river journey'
],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Cambodia Mekong Cruise | Mekong Best Cruise',
    description: 'Explore Angkor Wat, Phnom Penh, and the floating villages of Tonle Sap on a bespoke luxury Mekong river cruise through Cambodia.',
    images: [{ url: '/images/dest_cambodia.avif', width: 1200, height: 630, alt: 'Cambodia Mekong Cruise — Angkor Wat' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Cambodia — Mekong River',
  url: PAGE_URL,
  description: 'Luxury river cruise through Cambodia, home to Angkor Wat, Phnom Penh, and the extraordinary floating communities of Tonle Sap Lake.',
  touristType: 'Luxury Travelers',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/cambodia` },
      { '@type': 'ListItem', position: 3, name: 'Cambodia', item: PAGE_URL },
    ],
  },
}

export default function CambodiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CambodiaClient />
    </>
  )
}
