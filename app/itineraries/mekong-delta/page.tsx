import type { Metadata } from 'next'
import { MekongDeltaClient } from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/mekong-delta`

export const metadata: Metadata = {
  title: 'Mekong By Locals: 3–4 Day Immersive Delta Journey | Mekong Best Cruise',
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

export default function MekongDeltaPage() {
  return <MekongDeltaClient />
}
