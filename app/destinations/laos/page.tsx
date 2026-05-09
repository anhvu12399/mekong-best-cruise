import type { Metadata } from 'next'
import LaosClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/destinations/laos`

export const metadata: Metadata = {
  title: 'Laos Mekong River Cruise | Luang Prabang, Vientiane & Golden Triangle',
  description:
    'Cruise the Upper Mekong through Laos on a luxury river journey. Explore the UNESCO heritage city of Luang Prabang, the Golden Triangle, the Pak Ou Buddha Caves, and pristine Laotian villages.',
  keywords: [
    'Laos Mekong cruise',
    'Luang Prabang river cruise',
    'Upper Mekong luxury boat',
    'Slow boat to Luang Prabang',
    'Huay Xai to Luang Prabang cruise',
    'Laos river expedition',
    'Mekong river cruise Laos',
    'Pak Ou caves boat tour',
    'Laos luxury travel',
    'Mekong sunset cruise Luang Prabang',
    'boutique cruise Laos',
    'Laos private boat charter',
    'slow travel Laos',
    'authentic Laos river experience',
    'Vientiane to Luang Prabang cruise'
],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Laos Mekong River Cruise | Mekong Best Cruise',
    description: 'Discover Luang Prabang, Vientiane, and the Golden Triangle on a bespoke luxury Mekong cruise through the heart of Laos.',
    images: [{ url: '/images/dest_laos.avif', width: 1200, height: 630, alt: 'Luang Prabang Laos Mekong Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Laos — Upper Mekong River',
  url: PAGE_URL,
  description: 'Luxury river cruise through Laos, exploring the UNESCO city of Luang Prabang, the ancient Pak Ou Caves, and the mystical Golden Triangle.',
  touristType: 'Luxury Travelers',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/laos` },
      { '@type': 'ListItem', position: 3, name: 'Laos', item: PAGE_URL },
    ],
  },
}

export default function LaosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LaosClient />
    </>
  )
}
