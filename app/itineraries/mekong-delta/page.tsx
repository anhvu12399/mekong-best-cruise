import type { Metadata } from 'next'
import { MekongDeltaClient } from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/mekong-delta`

export const metadata: Metadata = {
  title: 'Mekong By Locals: 3–4 Day Immersive Delta Journey | Mekong River Cruise',
  keywords: [
    'Mekong Delta itinerary',
    'luxury Mekong Delta tour',
    '1 day Mekong Delta cruise',
    '2 days Mekong Delta tour',
    '3 days Mekong delta luxury',
    'Mekong Delta private tour',
    'Cai Rang floating market itinerary',
    'Can Tho luxury tour',
    'Ben Tre boat tour',
    'Ho Chi Minh to Mekong Delta',
    'Saigon to Mekong Delta private car',
    'Mekong Delta day trip luxury'
  ],
  description:
    'Not a tour. A way of living the delta — for 3 or 4 days. Private groups of 6–10, bilingual guides, farmhouse homestays, hands-on cooking, canal kayaking, and meals with families who have lived on this river for generations.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Mekong By Locals: 3–4 Day Immersive Delta Journey',
    description: 'Private, small-group travel into the Mekong Delta as locals live it.',
    images: [{ url: '/images/dest_vietnam.avif', width: 1200, height: 630, alt: 'Mekong Delta' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      '@id': `${PAGE_URL}/#trip`,
      name: 'Mekong By Locals: 3–4 Day Immersive Delta Journey',
      description: 'A 3-4 day private, slow-travel voyage through Ben Tre, Cai Be, and Can Tho featuring sunrise floating markets and private sampan expeditions.',
      touristType: ['Private Small Groups', 'Couples', 'Food & Culture Enthusiasts'],
      itinerary: [
        { '@type': 'TouristAttraction', name: 'Ben Tre Coconut Groves & Narrow Canals' },
        { '@type': 'TouristAttraction', name: 'Cai Rang Floating Market (Can Tho)' },
        { '@type': 'TouristAttraction', name: 'Son Islet Community & Floating Fish Farms' },
        { '@type': 'TouristAttraction', name: 'Sa Dec Ancient Flower & Heritage District' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '480',
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
        { '@type': 'ListItem', position: 3, name: 'Mekong Delta', item: PAGE_URL },
      ],
    },
  ],
}

export default function MekongDeltaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MekongDeltaClient />
    </>
  )
}
