import type { Metadata } from "next"
import { Suspense } from "react"
import ReviewItineraryClient from "./page-client"
import { ENTITY_FACTS, SITE_URL, VERIFIED_SHIPS } from "@/lib/mekong-catalog"

export const metadata: Metadata = {
  title: "Free Mekong Ship Match & Draft Itinerary Check",
  description:
    "Comparing Mekong River cruise ships or checking an AI-drafted itinerary? Submit your draft for a free 24-hour check on Tonle Sap water levels, elevators, and verified USD cabin rates.",
  alternates: { canonical: `${SITE_URL}/review-my-itinerary` },
  openGraph: {
    url: `${SITE_URL}/review-my-itinerary`,
    title: "Free Mekong Ship Match & Draft Itinerary Check",
    description:
      "Get an independent Ho Chi Minh City specialist review of your Mekong ship shortlist or draft cruise itinerary within 24 hours.",
  },
}

const FAQS = [
  {
    q: "Is the Mekong ship match and itinerary review free?",
    a: "Yes. You pay nothing for our routing check, ship comparison, or written USD cabin quote. You only pay if you choose to reserve a cabin.",
  },
  {
    q: "What mistakes do AI-drafted Mekong cruise itineraries make most often?",
    a: "AI drafts often assume ships sail directly across Tonle Sap Lake during Dry Season (Dec–Jul), recommend stair-only colonial vessels to travelers who need an elevator, or overlook the 2-hour My Tho port transfer from Ho Chi Minh City.",
  },
  {
    q: "How fast will a Ho Chi Minh City specialist reply?",
    a: "Our Mekong desk replies by email within 24 hours with verified partner tariffs and cabin availability.",
  },
  {
    q: "Which Mekong ships have a passenger elevator?",
    a: "Victoria Mekong (4 decks), Scenic Spirit (3 suite decks), Viking Saigon, Mekong Jewel, and Mekong Navigator feature onboard passenger elevators. Colonial vessels such as The Jahan, The Jayavarman, and Pandaw ships use wooden stairs.",
  },
  {
    q: "Do I need to enter my phone number?",
    a: "No. Only your itinerary notes, name, and email are required. Adding WhatsApp is optional.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Mekong Ship Match & Itinerary Check",
          item: `${SITE_URL}/review-my-itinerary`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Free Mekong Ship Match & Draft Itinerary Check",
      serviceType: "Mekong River Cruise Consultation & Itinerary Verification",
      url: `${SITE_URL}/review-my-itinerary`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Complimentary 24-hour specialist check of your Mekong ship shortlist or draft cruise itinerary.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function ReviewMyItineraryPage() {
  const shipList = VERIFIED_SHIPS.map((s) => ({
    slug: s.slug,
    name: s.name,
    operator: s.operator,
    sevenNightFrom: s.pricing.sevenNight.from,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#FAF9F5]" />}>
        <ReviewItineraryClient shipList={shipList} faqs={FAQS} entity={ENTITY_FACTS} />
      </Suspense>
    </>
  )
}
