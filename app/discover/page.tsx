import type { Metadata } from 'next'
import DiscoverClient from './page-client'

const BASE_URL = 'https://mekongbestcruise.com'
const PAGE_URL = `${BASE_URL}/discover`

export const metadata: Metadata = {
  title: 'Discover the Mekong | Luxury River Journey Highlights',
  description:
    'Explore the lifeblood of Southeast Asia. Discover floating markets, ancient temples, riverside villages, and the authentic pulse of the Mekong River on a luxury cruise.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Discover the Mekong | Mekong Best Cruise',
    description: 'Explore floating markets, ancient temples, and riverside villages on a luxury Mekong cruise.',
    images: [{ url: '/images/about-mekong-bg.avif', width: 1200, height: 630, alt: 'Discover the Mekong River' }],
  },
}

export default function DiscoverPage() {
  return <DiscoverClient />
}
