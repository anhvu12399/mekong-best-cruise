import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from "@/components/hero"
import { QuickDecision } from "@/components/quick-decision"

// Below-the-fold components: lazy loaded to reduce initial JS bundle
const AboutMekong = dynamic(() => import("@/components/about-mekong").then(m => ({ default: m.AboutMekong })))
const ExploreMekong = dynamic(() => import("@/components/explore-mekong").then(m => ({ default: m.ExploreMekong })))
const ArtOfCruising = dynamic(() => import("@/components/art-of-cruising").then(m => ({ default: m.ArtOfCruising })))
const FeaturedDestinations = dynamic(() => import("@/components/featured-destinations").then(m => ({ default: m.FeaturedDestinations })))
const ExpeditionCruises = dynamic(() => import("@/components/expedition-cruises").then(m => ({ default: m.ExpeditionCruises })))
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us").then(m => ({ default: m.WhyChooseUs })))

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
