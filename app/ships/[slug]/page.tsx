import { Metadata } from "next"
import { notFound } from "next/navigation"
import ShipsClient from "./page-client"
import { shipsData, defaultShipData } from "../data"

const allShipSlugs = [
  "aqua-mekong",
  "scenic-spirit",
  "jayavarman",
  "mekong-jewel",
  "mekong-princess",
  "the-jahan",
  "victoria-mekong",
  "viking-saigon",
  "emerald-harmony",
  "amadara",
  "avalon-saigon",
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

  const cabinSchema = data.cabins?.map((cabin) => ({
    "@type": "HotelRoom",
    "name": `${data.name} - ${cabin.name}`,
    "description": cabin.description,
    "image": `https://www.mekongrivercruise.com${cabin.image}`,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 2
    },
    "bed": {
      "@type": "BedDetails",
      "description": cabin.bedOrientation
    },
    "amenityFeature": cabin.features.map(f => ({
      "@type": "LocationFeatureSpecification",
      "name": f,
      "value": true
    }))
  })) || []

  const imageObjects = data.gallery.map((imgUrl, i) => ({
    "@type": "ImageObject",
    "contentUrl": `https://www.mekongrivercruise.com${imgUrl}`,
    "url": `https://www.mekongrivercruise.com${imgUrl}`,
    "name": `${data.name} Mekong river cruise stateroom & deck photograph ${i + 1}`,
    "caption": `${data.name} - Luxury Mekong River Cruise vessel and suites`
  }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        "@id": `https://www.mekongrivercruise.com/ships/${data.slug}#ship`,
        "name": data.name,
        "description": data.overview.description,
        "image": `https://www.mekongrivercruise.com${data.heroImage}`,
        "provider": {
          "@type": "TravelAgency",
          "name": "Mekong River Cruise",
          "url": "https://www.mekongrivercruise.com"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": data.pricing.threeNight.from,
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31"
        }
      },
      ...cabinSchema,
      ...imageObjects
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShipsClient data={data} />
    </>
  )
}
