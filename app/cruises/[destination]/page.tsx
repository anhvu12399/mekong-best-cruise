import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SHIPS_BY_DESTINATION } from '@/lib/ships-data'
import ShipsClient from './page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'

const LABELS: Record<string, string> = {
  vietnam: 'Vietnam',
  cambodia: 'Cambodia',
  laos: 'Laos',
}

type Props = { params: { destination: string } }

export async function generateStaticParams() {
  return ['vietnam', 'cambodia', 'laos'].map(d => ({ destination: d }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = LABELS[params.destination]
  if (!label) return {}
  return {
    title: `${label} Mekong River Cruises | Boutique Ships & Itineraries`,
    description: `Discover the finest ${label} Mekong river cruise ships. Compare boutique vessels, cabin styles, and bespoke itineraries. No pricing pressure — just expert advice.`,
    alternates: { canonical: `${BASE_URL}/cruises/${params.destination}` },
    openGraph: {
      url: `${BASE_URL}/cruises/${params.destination}`,
      title: `${label} Mekong River Cruises`,
      description: `Boutique ships navigating the ${label} Mekong — intimate, curated, and never more than 28 guests.`,
      images: [{ url: SHIPS_BY_DESTINATION[params.destination]?.heroImage ?? '/images/hero_1.avif', width: 1200, height: 630 }],
    },
  }
}

export default function DestinationCruisesPage({ params }: Props) {
  const data = SHIPS_BY_DESTINATION[params.destination]
  const label = LABELS[params.destination]
  if (!data || !label) notFound()

  return (
    <ShipsClient
      destination={params.destination}
      ships={data.ships}
      heroImage={data.heroImage}
      description={data.description}
      label={label}
    />
  )
}
