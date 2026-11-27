import { Metadata } from "next"
import { buildTitle } from "@/lib/seo"
import { LeadArticle, buildLeadArticleJsonLd, SITE_URL, type LeadArticleData } from "@/components/lead-article"

const title = "How to Book a Mekong River Cruise: 2026 Checklist (US & UK)"
const description = "What to know before booking a Mekong River cruise: season, fares, inclusions, e-Visa and how to book from Ho Chi Minh City, the US or the UK."

const data: LeadArticleData = {
  "slug": "how-to-book-a-mekong-river-cruise",
  "headline": "How to Book a Mekong River Cruise: The 2026 Checklist",
  "eyebrow": "Booking Guide · US & UK",
  "intro": "Seven steps, in order, from choosing your month to paying the deposit, written by specialists who place guests on these ships every season.",
  "image": "/images/bassac_pandaw.avif",
  "imageAlt": "Heritage ship moored on the Mekong at sunset",
  "specialistId": "emily",
  "datePublished": "2026-11-24",
  "readingTime": "7 min read",
  "shortAnswerLabel": "The Short Answer",
  "shortAnswer": "To book a Mekong River cruise, pick a sailing between August and April, choose a direction (Saigon to Siem Reap or the reverse), compare what each fare includes, secure a Cambodia e-Visa, and reserve through a licensed specialist 6 to 9 months ahead. Seven-night twin-share fares start near $1,690 and rise past $14,000.",
  "stats": [
    {
      "value": "7 nights",
      "label": "Typical sailing"
    },
    {
      "value": "$1,690+",
      "label": "Fares from, twin share"
    },
    {
      "value": "6–9 mo",
      "label": "Book ahead, peak season"
    },
    {
      "value": "~590 km",
      "label": "Saigon to Siem Reap"
    }
  ],
  "sections": [
    {
      "h2": "Pick the month and direction first",
      "paragraphs": [
        "High-water season (August to November) lets ships cross Tonle Sap Lake straight into Siem Reap. The dry season (December to April) brings clearer skies but can mean a coach transfer on the last day. Upstream (Saigon to Siem Reap) builds toward Angkor; downstream starts with the temples and finishes in the Delta.",
        "The river runs 4,909 km according to the Mekong River Commission, and the Angkor Archaeological Park covers about 400 km² per UNESCO, so most itineraries are built around those two anchors."
      ]
    },
    {
      "h2": "Compare fares by what is included",
      "paragraphs": [
        "A fare is only comparable once you know the inclusions. Most boutique ships bundle meals, daily guided excursions, ground transfers and port fees. Flights, visas, gratuities and premium drinks usually sit outside the price."
      ],
      "table": {
        "headers": [
          "Ship class",
          "7-night twin-share fare",
          "Typical extras"
        ],
        "rows": [
          [
            "Heritage (Pandaw, Toum Tiou II)",
            "$1,690 – $3,200",
            "Open seating, teak interiors, reduced single supplements on some dates"
          ],
          [
            "Colonial (The Jahan, Jayavarman)",
            "$3,500 – $6,500",
            "Private balconies, lecture programs"
          ],
          [
            "Ultra-luxury (Aqua Mekong, Scenic Spirit)",
            "$9,800 – $14,000+",
            "Butler service, higher crew ratio, chef-designed menus"
          ]
        ]
      }
    },
    {
      "h2": "Sort out the Cambodia e-Visa",
      "paragraphs": [
        "Guests need an approved Cambodia e-Visa or a visa on arrival, which the ship purser can process. The vessel crosses at the Vinh Xuong and Kaam Samnor river checkpoint; the purser collects passports and handles clearance on board."
      ]
    },
    {
      "h2": "How to book from Ho Chi Minh City, the US or the UK",
      "paragraphs": [
        "Most cruises embark at My Tho Port on the Tien River, about two hours from central Saigon, with a coach transfer included. Walk-up cabins on luxury ships are rare, so reserve before you fly. Fares are quoted in US dollars; UK guests pay at the exchange rate on the day of payment."
      ],
      "bullets": [
        "Send travel month, group size and budget to a specialist.",
        "Receive a written quote with live cabin availability.",
        "Confirm inclusions, cabin deck and cancellation terms in writing.",
        "Pay the deposit, then apply for the e-Visa and book flights."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What should I know before booking a Mekong River cruise?",
      "a": "Choose August to April, confirm the Cambodia e-Visa, compare inclusions, and book 6 to 9 months ahead for high-water sailings. Flights, visas, tips and premium drinks are usually extra."
    },
    {
      "q": "How much does a Mekong River cruise cost?",
      "a": "Seven-night twin-share fares run from about $1,690 on heritage ships to $14,000+ on all-suite vessels. Mid-range colonial ships sit between $3,500 and $6,500."
    },
    {
      "q": "Where do Mekong cruises start from?",
      "a": "Most embark at My Tho Port, about two hours from central Ho Chi Minh City, or at Siem Reap for the downstream direction. Transfers are normally included."
    },
    {
      "q": "Can I book a Mekong cruise from the UK or US?",
      "a": "Yes. Specialists quote in US dollars and handle cabins, transfers and visa guidance remotely; UK guests pay at the exchange rate on the payment date."
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
    "heading": "Get live cabins and a written quote",
    "body": "Tell us your month, group size and budget. A specialist replies with two shortlisted ships and current availability.",
    "button": "Plan my cruise",
    "href": "/plan-your-journey?itinerary=vietnam-cambodia"
  },
  "related": [
    {
      "label": "Cost breakdown",
      "href": "/travel-ideas/mekong-cruise-cost"
    },
    {
      "label": "Is it worth it?",
      "href": "/travel-ideas/is-mekong-river-cruise-worth-it"
    },
    {
      "label": "Compare ships",
      "href": "/travel-ideas/mekong-river-cruise-ships-compared-ranking"
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
  keywords: ["how to book a mekong river cruise", "what should I know before booking a mekong river cruise", "book river cruise ho chi minh city", "mekong river cruise price", "mekong cruise booking uk"],
  alternates: { canonical: `${SITE_URL}/travel-ideas/${data.slug}` },
  openGraph: { title, description, type: "article", url: `${SITE_URL}/travel-ideas/${data.slug}`, images: [{ url: `${SITE_URL}${data.image}`, width: 1200, height: 630, alt: data.imageAlt }] },
}

export default function Page() {
  return <LeadArticle data={data} jsonLd={buildLeadArticleJsonLd(data, title, description)} />
}
