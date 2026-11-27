import { Metadata } from "next"
import { notFound } from "next/navigation"
import ShipsClient from "./page-client"
import { shipsData, defaultShipData } from "../data"
import { KNOWN_SHIP_SLUGS, SITE_URL, VERIFIED_SHIP_MAP } from "@/lib/mekong-catalog"
import { buildTitle } from "@/lib/seo"

const allShipSlugs = Array.from(KNOWN_SHIP_SLUGS)

export function generateStaticParams() {
  return allShipSlugs.map((slug) => ({ slug }))
}

function getShipRecord(slug: string) {
  if (!KNOWN_SHIP_SLUGS.has(slug)) return null
  if (shipsData[slug]) return { data: shipsData[slug], hasVerifiedTariff: true }
  const displayName = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  return { data: defaultShipData(slug, displayName), hasVerifiedTariff: false }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const found = getShipRecord(slug)

  if (!found) {
    return {
      title: "Ship Not Found",
      robots: { index: false, follow: true },
    }
  }

  const { data, hasVerifiedTariff } = found
  const canonicalUrl = `${SITE_URL}/ships/${slug}`
  const priceSnippet = hasVerifiedTariff
    ? ` 3N from US$${data.pricing.threeNight.from.toLocaleString("en-US")}, 7N from US$${data.pricing.sevenNight.from.toLocaleString("en-US")} pp.`
    : ""
  const description = `${data.name} (${data.operator}) — ${data.stats.cabins} cabins, ${data.stats.guests} guests.${priceSnippet} ${data.tagline}`.slice(0, 160)

  return {
    title: buildTitle(`${data.name} — Ship Specs & Tariffs`),
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: `${data.name} | Mekong River Cruise`,
      description,
      images: [{ url: data.heroImage, width: 1200, height: 630, alt: `${data.name} Mekong River Cruise` }],
    },
  }
}

export default async function ShipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const found = getShipRecord(slug)

  if (!found) {
    notFound()
  }

  const { data, hasVerifiedTariff } = found
  const verifiedMeta = VERIFIED_SHIP_MAP[slug]
  const canonicalUrl = `${SITE_URL}/ships/${data.slug}`

  const cabinSchema =
    data.cabins?.map((cabin) => ({
      "@type": "HotelRoom",
      name: `${data.name} — ${cabin.name}`,
      description: cabin.description,
      image: `${SITE_URL}${cabin.image}`,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 2,
      },
      bed: {
        "@type": "BedDetails",
        description: cabin.bedOrientation,
      },
      amenityFeature: cabin.features.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f,
        value: true,
      })),
    })) || []

  const imageObjects = data.gallery.map((imgUrl, i) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${imgUrl}`,
    url: `${SITE_URL}${imgUrl}`,
    name: `${data.name} Mekong river cruise stateroom & deck photograph ${i + 1}`,
    caption: `${data.name} — Luxury Mekong River Cruise vessel and suites`,
  }))

  const verifiedOffers = hasVerifiedTariff
    ? {
        "@type": "AggregateOffer",
        lowPrice: data.pricing.threeNight.from,
        highPrice: data.pricing.sevenNight.from,
        offerCount: 3,
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
        offers: [
          {
            "@type": "Offer",
            name: `${data.name} — 3-Night ${data.pricing.threeNight.route}`,
            price: data.pricing.threeNight.from,
            priceCurrency: "USD",
            url: `${SITE_URL}/plan-your-journey?ship=${data.slug}&nights=3`,
          },
          {
            "@type": "Offer",
            name: `${data.name} — 4-Night ${data.pricing.fourNight.route}`,
            price: data.pricing.fourNight.from,
            priceCurrency: "USD",
            url: `${SITE_URL}/plan-your-journey?ship=${data.slug}&nights=4`,
          },
          {
            "@type": "Offer",
            name: `${data.name} — 7-Night ${data.pricing.sevenNight.route}`,
            price: data.pricing.sevenNight.from,
            priceCurrency: "USD",
            url: `${SITE_URL}/plan-your-journey?ship=${data.slug}&nights=7`,
          },
        ],
      }
    : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Cruises", item: `${SITE_URL}/cruises` },
          { "@type": "ListItem", position: 3, name: data.name, item: canonicalUrl },
        ],
      },
      {
        "@type": ["TouristTrip", "Product"],
        "@id": `${canonicalUrl}#ship`,
        name: `${data.name} Mekong River Cruise`,
        description: data.overview.description,
        url: canonicalUrl,
        image: `${SITE_URL}${data.heroImage}`,
        brand: {
          "@type": "Organization",
          name: data.operator,
        },
        provider: {
          "@id": `${SITE_URL}/#organization`,
          "@type": "TravelAgency",
          name: "Mekong River Cruise",
          url: SITE_URL,
        },
        touristType: ["Luxury River Cruiser", "Cultural Traveler"],
        ...(verifiedOffers ? { offers: verifiedOffers } : {}),
        additionalProperty: [
          { "@type": "PropertyValue", name: "Vessel Length", value: data.stats.length },
          { "@type": "PropertyValue", name: "Cabins", value: data.stats.cabins },
          { "@type": "PropertyValue", name: "Max Guests", value: data.stats.guests },
          { "@type": "PropertyValue", name: "Crew", value: data.stats.crew },
          ...(verifiedMeta
            ? [
                {
                  "@type": "PropertyValue",
                  name: "Passenger Elevator",
                  value: verifiedMeta.hasElevator ? "Yes" : "No",
                },
                {
                  "@type": "PropertyValue",
                  name: "River Corridor",
                  value: verifiedMeta.corridorLabel,
                },
              ]
            : []),
        ],
      },
      ...cabinSchema,
      ...imageObjects,
    ],
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
