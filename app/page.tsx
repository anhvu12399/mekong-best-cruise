import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickDecision } from "@/components/quick-decision"
import { AboutMekong } from "@/components/about-mekong"
import { ExploreMekong } from "@/components/explore-mekong"
import { ArtOfCruising } from "@/components/art-of-cruising"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { ExpeditionCruises } from "@/components/expedition-cruises"
import { WhyChooseUs } from "@/components/why-choose-us"

const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  title: 'Mekong Best Cruise | Luxury River Journeys in Southeast Asia',
  description:
    'Discover the Mekong River on a bespoke luxury cruise through Vietnam, Cambodia, Laos, Thailand, Myanmar & China. Private excursions, Michelin-inspired dining, and unparalleled 5-star service.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
    title: 'Mekong Best Cruise | Luxury River Journeys in Southeast Asia',
    description:
      'Discover the Mekong River on a bespoke luxury cruise through Vietnam, Cambodia, Laos, Thailand, Myanmar & China.',
    images: [{ url: '/images/og-image.avif', width: 1200, height: 630, alt: 'Mekong Best Cruise' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'Mekong Best Cruise — Home',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  description:
    'Bespoke luxury river cruises along the Mekong River through Vietnam, Cambodia, Laos, Thailand, Myanmar and China.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <QuickDecision />
        <AboutMekong />
        <ExploreMekong />
        <ArtOfCruising />
        <FeaturedDestinations />
        <ExpeditionCruises />
        <WhyChooseUs />
      </main>
    </>
  )
}
