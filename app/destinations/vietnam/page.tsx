import type { Metadata } from 'next'
import VietnamClient from './page-client'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/destinations/vietnam`

export const metadata: Metadata = {
  title: 'Vietnam Mekong River Cruise | Floating Markets & Delta Luxury',
  description:
    'Sail Vietnam\'s legendary Mekong Delta on a luxury river cruise. Discover Cai Rang floating market, hidden canals, sacred pagodas, and Michelin-inspired dining between Ho Chi Minh City and Can Tho.',
  keywords: [
    'Vietnam Mekong cruise',
    'Mekong Delta luxury tour',
    'Cai Rang floating market cruise',
    'Ho Chi Minh City river cruise',
    'Can Tho cruise',
    'Vietnam river cruise luxury',
    'Mekong Delta private cruise',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Vietnam Mekong River Cruise | Mekong Best Cruise',
    description: 'Discover the Mekong Delta\'s floating markets, hidden canals, and silk weaving villages on a bespoke luxury river cruise in Vietnam.',
    images: [{ url: '/images/dest_vietnam.avif', width: 1200, height: 630, alt: 'Vietnam Mekong Delta Luxury Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Vietnam — Mekong Delta',
  url: PAGE_URL,
  description: 'A luxury river cruise journey through the iconic Mekong Delta, including floating markets, hidden canals, silk villages, and ancient pagodas.',
  touristType: 'Luxury Travelers',
  geo: { '@type': 'GeoCoordinates', latitude: 10.0452, longitude: 105.7469 },
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Cai Rang Floating Market', address: { '@type': 'PostalAddress', addressLocality: 'Can Tho', addressCountry: 'VN' } },
    { '@type': 'TouristAttraction', name: 'Sa Dec Ancient Town', address: { '@type': 'PostalAddress', addressLocality: 'Sa Dec', addressCountry: 'VN' } },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/vietnam` },
      { '@type': 'ListItem', position: 3, name: 'Vietnam', item: PAGE_URL },
    ],
  },
}

export default function VietnamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VietnamClient />
    </>
  )
}
