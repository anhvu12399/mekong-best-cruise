import type { Metadata } from "next"
import PlanYourJourneyClient from "./page-client"
import { SITE_URL, VERIFIED_SHIPS } from "@/lib/mekong-catalog"
import { buildTitle } from "@/lib/seo"

export const metadata: Metadata = {
  title: buildTitle("Plan Your Mekong River Cruise — Free Verified Quote"),
  description:
    "Request live cabin availability and verified USD quotes across 20 Mekong River cruise vessels. Only your name and email are required; Ho Chi Minh City specialists reply within 24 hours.",
  alternates: { canonical: `${SITE_URL}/plan-your-journey` },
  openGraph: {
    url: `${SITE_URL}/plan-your-journey`,
    title: "Plan Your Mekong River Cruise — Free Verified Quote",
    description:
      "Check live cabin availability and verified tariffs across 20 Lower and Upper Mekong ships with our local Ho Chi Minh City specialists.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Plan Your Mekong River Cruise",
  url: `${SITE_URL}/plan-your-journey`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
}

export default function PlanYourJourneyPage() {
  const shipOptions = VERIFIED_SHIPS.map((s) => ({
    slug: s.slug,
    name: s.name,
    operator: s.operator,
    corridor: s.corridorLabel,
    sevenNightFrom: s.pricing.sevenNight.from,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlanYourJourneyClient shipOptions={shipOptions} />
    </>
  )
}
