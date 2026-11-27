import { Metadata } from "next"
import { buildTitle } from "@/lib/seo"
import { LeadArticle, buildLeadArticleJsonLd, SITE_URL, type LeadArticleData } from "@/components/lead-article"

const title = "Eco-Friendly Mekong River Tours: What to Ask Before You Book"
const description = "How to find genuinely eco-friendly Mekong river tours and cruises: ship size, wastewater, plastics, local spending and low-impact Delta stops."

const data: LeadArticleData = {
  "slug": "eco-friendly-mekong-river-tours",
  "headline": "Eco-Friendly Mekong River Tours: What to Ask Before You Book",
  "eyebrow": "Responsible Travel",
  "intro": "'Eco' is easy to claim. Here are the five questions that tell you whether a Mekong tour earns the label.",
  "image": "/images/bassac_pandaw.avif",
  "imageAlt": "Cajuput forest canal on the Mekong Delta",
  "specialistId": "mai",
  "datePublished": "2026-11-24",
  "readingTime": "5 min read",
  "shortAnswerLabel": "The Short Answer",
  "shortAnswer": "Yes. Small ships with 20 to 34 cabins, onboard wastewater treatment, reduced single-use plastic and village stops that pay local families directly are the markers of a genuinely eco-friendly Mekong tour. Ask each operator for specifics on all four, and favor low-impact Delta stops such as cajuput forests and craft villages.",
  "stats": [
    {
      "value": "20–34",
      "label": "Cabins on boutique ships"
    },
    {
      "value": "4",
      "label": "Questions to ask"
    },
    {
      "value": "4,909 km",
      "label": "River length (MRC)"
    },
    {
      "value": "60M+",
      "label": "People in the basin (MRC)"
    }
  ],
  "sections": [
    {
      "h2": "Four questions that expose greenwashing",
      "paragraphs": [
        "Marketing language costs nothing; operations do. Ask for numbers and named practices."
      ],
      "bullets": [
        "How is wastewater treated onboard, and what is discharged?",
        "Does the ship avoid single-use plastic bottles and straws?",
        "How much excursion spend reaches local families rather than intermediaries?",
        "What is the maximum group size at each village stop?"
      ]
    },
    {
      "h2": "Low-impact stops in the Delta",
      "paragraphs": [
        "Cajuput forests, craft villages in Ben Tre and Sa Dec, and slow sampan canals spread visitors thin and keep money in the community. Floating markets are best visited early, when they trade for locals rather than for visitors."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are there eco-friendly tours available on the Mekong River?",
      "a": "Yes. Look for small ships, onboard wastewater treatment, reduced plastics and direct payment to village hosts, and favor cajuput-forest and craft-village stops."
    },
    {
      "q": "Are small ships better for the environment?",
      "a": "Generally they limit crowding at villages and moorings, but check treatment systems and fuel use rather than assuming."
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
    "heading": "See our sustainability standards",
    "body": "We list what we require from partner ships and which stops we avoid.",
    "button": "Read our standards",
    "href": "/sustainability"
  },
  "related": [
    {
      "label": "Cajuput forests",
      "href": "/travel-ideas/cajuput-forests"
    },
    {
      "label": "Craft villages",
      "href": "/travel-ideas/craft-villages"
    },
    {
      "label": "FAQ hub",
      "href": "/faqs"
    }
  ]
}

export const metadata: Metadata = {
  title: buildTitle(title),
  description,
  keywords: ["eco friendly mekong river tours", "sustainable mekong cruise", "responsible travel mekong delta", "eco cruise vietnam cambodia"],
  alternates: { canonical: `${SITE_URL}/travel-ideas/${data.slug}` },
  openGraph: { title, description, type: "article", url: `${SITE_URL}/travel-ideas/${data.slug}`, images: [{ url: `${SITE_URL}${data.image}`, width: 1200, height: 630, alt: data.imageAlt }] },
}

export default function Page() {
  return <LeadArticle data={data} jsonLd={buildLeadArticleJsonLd(data, title, description)} />
}
