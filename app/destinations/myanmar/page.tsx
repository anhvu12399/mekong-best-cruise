import type { Metadata } from 'next'
import MyanmarClient from './page-client'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/destinations/myanmar`

export const metadata: Metadata = {
  title: 'Myanmar Irrawaddy & Mekong Cruise | Bagan, Mandalay Luxury River Journey',
  description:
    'Sail Myanmar\'s legendary waterways on a luxury river cruise. Discover Bagan\'s ancient temples, Mandalay\'s royal palaces, and the sacred monasteries of the Irrawaddy River.',
  keywords: [
    'Myanmar river cruise',
    'Bagan luxury cruise',
    'Mandalay river cruise',
    'Irrawaddy cruise luxury',
    'Myanmar luxury tour',
    'Burma river cruise',
    'Mekong Myanmar journey',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Myanmar Luxury River Cruise | Mekong Best Cruise',
    description: 'Discover Bagan\'s 2,000 ancient temples and Mandalay\'s royal courts on a bespoke luxury river cruise through Myanmar.',
    images: [{ url: '/images/dest_myanmar.avif', width: 1200, height: 630, alt: 'Bagan Myanmar Luxury River Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Myanmar — Irrawaddy & Mekong River',
  url: PAGE_URL,
  description: 'Luxury river cruise exploring Myanmar\'s Bagan plains, Mandalay\'s royal heritage, and the sacred monasteries along the Irrawaddy River.',
  touristType: 'Luxury Travelers',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/myanmar` },
      { '@type': 'ListItem', position: 3, name: 'Myanmar', item: PAGE_URL },
    ],
  },
}

export default function MyanmarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MyanmarClient />
    </>
  )
}
