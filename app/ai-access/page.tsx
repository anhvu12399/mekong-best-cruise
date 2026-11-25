import type { Metadata } from "next"
import { ApiDocsView } from "@/components/api-docs-view"
import { SITE_URL } from "@/lib/mekong-catalog"

export const metadata: Metadata = {
  title: "API, OpenAPI 3.1, MCP Server & AI Data Access",
  description:
    "Public no-auth REST API, OpenAPI 3.1 spec, NLWeb /ask endpoint, MCP server, A2A advisor, and Markdown negotiation for 20 verified Mekong River cruise vessels.",
  alternates: { canonical: `${SITE_URL}/ai-access` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/ai-access`,
    title: "Mekong River Cruise API, MCP Server & AI Data Access",
    description:
      "Public no-auth REST API, OpenAPI 3.1 spec, MCP server, A2A advisor, and Markdown negotiation.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI & API Access", item: `${SITE_URL}/ai-access` },
      ],
    },
    {
      "@type": "TechArticle",
      headline: "Mekong River Cruise Public API, OpenAPI 3.1 & MCP Server Documentation",
      url: `${SITE_URL}/ai-access`,
      dateModified: "2026-11-25",
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Public machine interfaces for filtering 20 verified Mekong River cruise ships, estimating USD cabin budgets, and generating pre-filled quote links.",
    },
  ],
}

export default function AiAccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApiDocsView heading="Mekong River Cruise API, MCP Server & AI Data Access" />
    </>
  )
}
