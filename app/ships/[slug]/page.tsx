import { Metadata } from "next"
import { notFound } from "next/navigation"
import ShipsClient from "./page-client"
import { shipsData, defaultShipData } from "../data"

const allShipSlugs = [
  "aqua-mekong",
  "jayavarman",
  "mekong-jewel",
  "mekong-princess",
  "the-jahan",
  "victoria-mekong",
  "anouvong",
  "bassac-pandaw",
  "boheme",
  "champa-pandaw",
  "indochina-pandaw",
  "indochine-i",
  "indochine-ii",
  "lan-diep",
  "laos-pandaw",
  "mekong-navigator",
  "mekong-pandaw",
  "mekong-pearl",
  "mekong-symphony",
  "tonle-pandaw",
  "toum-tiou-ii"
]

export function generateStaticParams() {
  return allShipSlugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = shipsData[slug] || defaultShipData(slug, slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
  
  if (!data) return { title: "Ship Not Found" }

  return {
    title: `${data.name} | Mekong River Cruises`,
    description: data.tagline,
  }
}

export default async function ShipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = shipsData[slug] || defaultShipData(slug, slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))

  if (!data) {
    notFound()
  }

  return <ShipsClient data={data} />
}
