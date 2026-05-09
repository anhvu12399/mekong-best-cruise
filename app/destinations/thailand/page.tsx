import type { Metadata } from 'next'
import ThailandClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/destinations/thailand`

export const metadata: Metadata = {
  title: 'Thailand Mekong River Cruise | Chiang Rai & Golden Triangle Luxury',
  description:
    'Discover northern Thailand\'s Mekong River by luxury cruise. Explore Chiang Rai, the Golden Triangle, opium-free hill-tribe villages, and serene jungle riverscapes.',
  keywords: [
    'Thailand Mekong cruise',
    'Golden Triangle river cruise',
    'Chiang Rai Mekong boat tour',
    'Isan river cruise',
    'Nakhon Phanom boat tour',
    'Thailand Laos border cruise',
    'Upper Mekong expedition Thailand',
    'luxury boat Golden Triangle',
    'Mekong river cruise Thailand',
    'Chiang Saen river cruise',
    'Thailand off the beaten path',
    'Mekong slow travel Thailand'
],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Thailand Mekong River Cruise | Mekong Best Cruise',
    description: 'Explore Chiang Rai and the legendary Golden Triangle on a bespoke luxury Mekong River cruise through northern Thailand.',
    images: [{ url: '/images/dest_thailand.avif', width: 1200, height: 630, alt: 'Chiang Rai Golden Triangle Mekong Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Thailand — Northern Mekong & Golden Triangle',
  url: PAGE_URL,
  description: 'A luxury Mekong river cruise through Chiang Rai and the legendary Golden Triangle of Thailand.',
  touristType: 'Luxury Travelers',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/thailand` },
      { '@type': 'ListItem', position: 3, name: 'Thailand', item: PAGE_URL },
    ],
  },
}

export default function ThailandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ThailandClient />
    </>
  )
}
