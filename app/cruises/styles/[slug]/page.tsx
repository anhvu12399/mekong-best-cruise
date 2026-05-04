import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SHIPS_BY_STYLE } from '@/lib/ships-data'
import ShipsClient from '@/app/cruises/[destination]/page-client'

const BASE_URL = 'https://www.mekongrivercruise.com'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(SHIPS_BY_STYLE).map(s => ({ slug: s }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = SHIPS_BY_STYLE[slug]
  if (!data) return {}
  
  return {
    title: `${data.title} | Mekong River Cruises`,
    description: data.description,
    alternates: { canonical: `${BASE_URL}/cruises/styles/${slug}` },
    openGraph: {
      url: `${BASE_URL}/cruises/styles/${slug}`,
      title: `${data.title} | Mekong River Cruises`,
      description: data.description,
      images: [{ url: data.heroImage, width: 1200, height: 630 }],
    },
  }
}

export default async function StyleCruisesPage({ params }: Props) {
  const { slug } = await params
  const data = SHIPS_BY_STYLE[slug]
  if (!data) notFound()

  return (
    <ShipsClient
      destination={slug}
      ships={data.ships}
      heroImage={data.heroImage}
      description={data.description}
      label={data.title.replace(' Cruises', '')}
    />
  )
}
