import type { Metadata } from 'next'
import ChinaClient from './page-client'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/destinations/china`

export const metadata: Metadata = {
  title: 'China Upper Mekong Cruise | Yunnan Province Luxury River Journey',
  description:
    'Embark on a rare luxury cruise through Yunnan Province on the Upper Mekong (Lancang River). Explore Lijiang\'s ancient town, Tiger Leaping Gorge, and the untouched ethnic minority villages of southwest China.',
  keywords: [
    'China Mekong cruise',
    'Yunnan river cruise',
    'Lancang River cruise',
    'Lijiang luxury tour',
    'Tiger Leaping Gorge cruise',
    'Upper Mekong China',
    'Yunnan luxury journey',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'China Upper Mekong Cruise | Mekong Best Cruise',
    description: 'Discover Yunnan\'s Lijiang Ancient Town, Tiger Leaping Gorge, and the Lancang River on an extraordinary luxury cruise through southwest China.',
    images: [{ url: '/images/dest_china.png', width: 1200, height: 630, alt: 'Yunnan China Upper Mekong Luxury Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'China — Yunnan & Upper Mekong (Lancang River)',
  url: PAGE_URL,
  description: 'An exclusive luxury cruise along China\'s Upper Mekong (Lancang), exploring Yunnan\'s ancient towns, dramatic gorges, and ethnic minority cultures.',
  touristType: 'Luxury Travelers',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations/china` },
      { '@type': 'ListItem', position: 3, name: 'China', item: PAGE_URL },
    ],
  },
}

export default function ChinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChinaClient />
    </>
  )
}
