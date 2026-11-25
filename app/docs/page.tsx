import type { Metadata } from "next"
import { ApiDocsView } from "@/components/api-docs-view"
import { SITE_URL } from "@/lib/mekong-catalog"

export const metadata: Metadata = {
  title: "API Documentation — OpenAPI 3.1, MCP & Agent Access",
  description:
    "Public developer and AI agent documentation for Mekong River Cruise: OpenAPI 3.1 spec, versioning and 90-day sunset policy, rate limits, REST APIs, NLWeb /ask, MCP server, and A2A.",
  alternates: { canonical: `${SITE_URL}/docs` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/docs`,
    title: "Mekong River Cruise API Documentation",
    description:
      "Public no-auth REST API, OpenAPI 3.1 spec, MCP server, A2A advisor, and Markdown negotiation documentation.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "API Documentation", item: `${SITE_URL}/docs` },
      ],
    },
    {
      "@type": "TechArticle",
      headline: "Mekong River Cruise Public API, OpenAPI 3.1, Versioning & MCP Documentation",
      url: `${SITE_URL}/docs`,
      dateModified: "2026-11-25",
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Complete public documentation for Mekong River Cruise REST APIs, OpenAPI 3.1 specification, X-API-Version and RFC 8594 sunset policy, rate limits, NLWeb, MCP, and A2A endpoints.",
    },
  ],
}

export default function DocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApiDocsView heading="Mekong River Cruise Public API Documentation" />
    </>
  )
}
