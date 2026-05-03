import type { Metadata } from 'next'
import ExperiencesClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Bespoke Experiences | Astrology, Silent Drift & Sensory Dining on the Mekong',
  description:
    'Ultra-luxury Mekong river experiences: private Eastern astrology readings, the Silent Drift at dawn, blindfolded sensory fine dining, monk blessings, and a subterranean sommelier cellar.',
  keywords: [
    'Mekong river experiences',
    'luxury cruise activities',
    'astrology cruise',
    'silent drift Mekong',
    'blindfolded dining cruise',
    'monk blessing Mekong',
    'bespoke cruise experiences Southeast Asia',
  ],
  alternates: { canonical: `${BASE_URL}/experiences` },
  openGraph: {
    url: `${BASE_URL}/experiences`,
    title: 'Bespoke Experiences | Mekong Best Cruise',
    description:
      'Ultra-luxury, one-of-a-kind encounters designed to awaken the senses and connect you with the soul of the Mekong.',
    images: [{
      url: '/images/exp_astrology.avif',
      width: 1200,
      height: 630,
      alt: 'Private Astrology & Tea Session on the Mekong River',
    }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: `${BASE_URL}/experiences`,
  name: 'Bespoke Mekong Experiences',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  description: 'A curated collection of ultra-luxury, one-of-a-kind experiences available exclusively on Mekong Best Cruise.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Experiences', item: `${BASE_URL}/experiences` },
    ],
  },
}

export default function ExperiencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperiencesClient />
    </>
  )
}
