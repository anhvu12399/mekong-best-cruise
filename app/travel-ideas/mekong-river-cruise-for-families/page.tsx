import { Metadata } from "next"
import { LeadArticle, buildLeadArticleJsonLd, SITE_URL, type LeadArticleData } from "@/components/lead-article"

const title = "Luxury Mekong River Cruises for Families: Ages, Cabins & Ships"
const description = "Which luxury Mekong river cruises accept children, minimum ages by ship, family suites and the best itinerary length for kids."

const data: LeadArticleData = {
  "slug": "mekong-river-cruise-for-families",
  "headline": "Luxury Mekong River Cruises for Families",
  "eyebrow": "Family Travel Guide",
  "intro": "Age limits vary sharply between ships. This guide lists them, then matches cabins and itinerary length to the age of your children.",
  "image": "/images/jayavarman_hero.avif",
  "imageAlt": "Family cabin ship on the Mekong",
  "specialistId": "mai",
  "datePublished": "2026-11-24",
  "readingTime": "6 min read",
  "shortAnswerLabel": "The Short Answer",
  "shortAnswer": "Aqua Mekong welcomes children from age 7 and offers interconnecting 60 m² family suites. Scenic Spirit sets a minimum of 12, and Viking Saigon is adults-only (18+). Pandaw accepts children on selected sailings. For young children, a 4 to 5 night sector is easier than a full 7-night crossing.",
  "stats": [
    {
      "value": "7+",
      "label": "Aqua Mekong min. age"
    },
    {
      "value": "12+",
      "label": "Scenic Spirit min. age"
    },
    {
      "value": "18+",
      "label": "Viking Saigon"
    },
    {
      "value": "60 m²",
      "label": "Family suite, Aqua Mekong"
    }
  ],
  "sections": [
    {
      "h2": "Minimum age by ship",
      "paragraphs": [
        "Operators set age rules to protect the onboard atmosphere and for safety on river tenders. Confirm the rule for your exact sailing date, because some ships relax limits on charters."
      ],
      "table": {
        "headers": [
          "Ship",
          "Minimum age",
          "Family-friendly features"
        ],
        "rows": [
          [
            "Aqua Mekong",
            "7+",
            "Interconnecting 60 m² suites"
          ],
          [
            "Scenic Spirit",
            "12+",
            "All-suite, butler service"
          ],
          [
            "Viking Saigon",
            "18+",
            "Adults only"
          ],
          [
            "Pandaw",
            "Selected sailings",
            "Open decks, relaxed onboard dress"
          ]
        ]
      }
    },
    {
      "h2": "Choose the right itinerary length",
      "paragraphs": [
        "Children under 10 usually do better on a 4 to 5 night Delta or Phnom Penh sector than on a full 7-night crossing with early Angkor starts. Teenagers cope well with the full Saigon to Siem Reap route.",
        "Build in one free afternoon on the sundeck. Delta excursions by sampan, cycling and cooking classes tend to be the favorites with children."
      ]
    },
    {
      "h2": "Health, safety and practical points",
      "paragraphs": [
        "Malaria medication is not medically required along the main Lower Mekong cruise corridor, but check current guidance with your doctor or a travel clinic. Ships purify water to hospital-grade standards, and tender excursions use life jackets in child sizes on request."
      ],
      "bullets": [
        "Request connecting cabins in writing.",
        "Ask about child-sized life jackets for tenders.",
        "Book downstream if you want the temples while energy is high."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Which Mekong cruise accepts children?",
      "a": "Aqua Mekong accepts children aged 7 and over, Scenic Spirit 12 and over, and Pandaw on selected sailings. Viking Saigon is adults-only."
    },
    {
      "q": "Can you recommend luxury cruises on the Mekong for families?",
      "a": "Aqua Mekong is the strongest choice for younger children because of its 60 m² interconnecting family suites; larger ships with connecting cabins also suit families with teenagers."
    },
    {
      "q": "How long should a family Mekong cruise be?",
      "a": "Four to five nights for children under 10, and the full 7 nights for teenagers who can manage early starts at Angkor."
    }
  ],
  "sources": [
    {
      "label": "Mekong River Commission: the Mekong River basin",
      "href": "https://www.mrcmekong.org"
    },
    {
      "label": "UNESCO World Heritage Centre: Angkor",
      "href": "https://whc.unesco.org/en/list/668"
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
    },
    {
      "name": "River cruise",
      "sameAs": "https://en.wikipedia.org/wiki/River_cruise"
    }
  ],
  "cta": {
    "heading": "Check family cabins before you book",
    "body": "Tell us your children's ages and travel month. We confirm minimum ages and connecting cabins in writing.",
    "button": "Ask about family cabins",
    "href": "/plan-your-journey?itinerary=vietnam-cambodia"
  },
  "related": [
    {
      "label": "How to book",
      "href": "/travel-ideas/how-to-book-a-mekong-river-cruise"
    },
    {
      "label": "Ship comparison",
      "href": "/travel-ideas/mekong-river-cruise-ships-compared-ranking"
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
  keywords: ["luxury mekong cruise families", "mekong river cruise with kids", "family mekong cruise minimum age", "aqua mekong family suite", "mekong cruise children"],
  alternates: { canonical: `${SITE_URL}/travel-ideas/${data.slug}` },
  openGraph: { title, description, type: "article", url: `${SITE_URL}/travel-ideas/${data.slug}`, images: [{ url: `${SITE_URL}${data.image}`, width: 1200, height: 630, alt: data.imageAlt }] },
}

export default function Page() {
  return <LeadArticle data={data} jsonLd={buildLeadArticleJsonLd(data, title, description)} />
}
