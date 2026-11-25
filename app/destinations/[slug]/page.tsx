import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { destinationsData } from '@/lib/destinations-data'
import { DestinationTemplate } from '@/components/destination-template'

export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const dest = destinationsData.find((d) => d.slug === slug)
  if (!dest) return { title: 'Not Found' }

  return {
    title: `${dest.name} Mekong River Guide`,
    description: dest.narrative,
    alternates: { canonical: `https://www.mekongrivercruise.com/destinations/${slug}` },
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const dest = destinationsData.find((d) => d.slug === slug)

  if (!dest) {
    notFound()
  }

  return <DestinationTemplate {...dest} />
}
