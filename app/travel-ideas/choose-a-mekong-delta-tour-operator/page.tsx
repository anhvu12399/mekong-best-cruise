import { Metadata } from "next"
import { LeadArticle, buildLeadArticleJsonLd, SITE_URL, type LeadArticleData } from "@/components/lead-article"

const title = "How to Choose a Mekong Delta Tour Operator (My Tho & Ben Tre)"
const description = "Five checks for choosing a Mekong Delta tour operator: licence, group size, inclusions, time on the water and a cruise upgrade path."

const data: LeadArticleData = {
  "slug": "choose-a-mekong-delta-tour-operator",
  "headline": "How to Choose a Mekong Delta Tour Operator",
  "eyebrow": "Tour Buyer's Guide",
  "intro": "A one-day My Tho and Ben Tre tour is easy to find and hard to compare. Use these five checks before you pay.",
  "image": "/images/bassac_pandaw.avif",
  "imageAlt": "Sampan on a Mekong Delta canal",
  "specialistId": "emily",
  "datePublished": "2026-11-24",
  "readingTime": "5 min read",
  "shortAnswerLabel": "The Short Answer",
  "shortAnswer": "Choose a Mekong Delta tour operator that publishes its company registration, keeps groups small, lists every stop and inclusion in writing, and states how long you spend on the water versus in a vehicle. For more than one day, a multi-night river cruise reaches Cai Be, Sa Dec and Tan Chau without changing hotels.",
  "stats": [
    {
      "value": "~2 hrs",
      "label": "Saigon to My Tho"
    },
    {
      "value": "5",
      "label": "Checks before paying"
    },
    {
      "value": "1 day+",
      "label": "Delta tours"
    },
    {
      "value": "7 nights",
      "label": "Cruise alternative"
    }
  ],
  "sections": [
    {
      "h2": "The five checks",
      "paragraphs": [
        "Delta tours differ mostly in what the brochure leaves out. These checks separate real operators from resellers."
      ],
      "bullets": [
        "Verifiable company registration and address, not only a booking page.",
        "Group size stated (private or up to 12 beats a 40-seat coach).",
        "A written itinerary with stop names, durations and meal arrangements.",
        "Time on the water stated in hours, not just the word 'boat trip'.",
        "Clear cancellation and weather policy."
      ]
    },
    {
      "h2": "Day tour or cruise?",
      "paragraphs": [
        "A one-day My Tho and Ben Tre tour samples coconut canals, a candy workshop and a sampan ride. A multi-night cruise continues through Cai Be, Sa Dec and Tan Chau and crosses into Cambodia, with one cabin throughout."
      ],
      "table": {
        "headers": [
          "Option",
          "Best for",
          "Trade-off"
        ],
        "rows": [
          [
            "1-day My Tho / Ben Tre",
            "Saigon stopovers",
            "Several hours in a vehicle"
          ],
          [
            "2-day Delta tour",
            "First-time visitors",
            "Hotel change on day 2"
          ],
          [
            "7-night cruise",
            "Delta plus Cambodia",
            "Higher cost, one unpack"
          ]
        ]
      }
    }
  ],
  "faqs": [
    {
      "q": "How do I choose the best tour operator for My Tho Mekong Delta tours?",
      "a": "Verify registration, group size, written inclusions and time on the water, then compare cancellation terms."
    },
    {
      "q": "Is a Delta day tour enough?",
      "a": "It is enough for a Saigon stopover. If you also want Phnom Penh and Angkor, a multi-night cruise covers all three without repacking."
    }
  ],
  "sources": [
    {
      "label": "Mekong River Commission: the Mekong River basin",
      "href": "https://www.mrcmekong.org"
    },
    {
      "label": "Vietnam National Authority of Tourism",
      "href": "https://vietnamtourism.gov.vn"
    }
  ],
  "about": [
    {
      "name": "Mekong River",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong"
    }
  ],
  "cta": {
    "heading": "Want the Delta without the bus?",
    "body": "We organize private Delta days and full cruises. Tell us your dates for a written itinerary.",
    "button": "Get an itinerary",
    "href": "/plan-your-journey?itinerary=mekong-delta"
  },
  "related": [
    {
      "label": "1-day Delta",
      "href": "/itineraries/1-day"
    },
    {
      "label": "Mekong Delta cruise",
      "href": "/itineraries/mekong-delta"
    },
    {
      "label": "FAQ hub",
      "href": "/faqs"
    }
  ]
}

export const metadata: Metadata = {
  title,
  description,
  keywords: ["choose mekong delta tour operator", "my tho mekong delta tours", "ben tre tour", "mekong delta tour private small group", "mekong delta tour vs cruise"],
  alternates: { canonical: `${SITE_URL}/travel-ideas/${data.slug}` },
  openGraph: { title, description, type: "article", url: `${SITE_URL}/travel-ideas/${data.slug}`, images: [{ url: `${SITE_URL}${data.image}`, width: 1200, height: 630, alt: data.imageAlt }] },
}

export default function Page() {
  return <LeadArticle data={data} jsonLd={buildLeadArticleJsonLd(data, title, description)} />
}
