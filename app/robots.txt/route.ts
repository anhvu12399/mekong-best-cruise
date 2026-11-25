import { SITE_URL } from "@/lib/mekong-catalog"
import { CONTENT_SIGNAL } from "@/lib/agent"

export const dynamic = "force-static"

const BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "Applebot",
  "Applebot-Extended",
  "Google-Extended",
  "cohere-ai",
  "*",
]

export function GET() {
  const sharedRules = [
    "Allow: /",
    "Allow: /llms.txt",
    "Allow: /llms-full.txt",
    "Allow: /api/ships",
    "Allow: /api/estimate",
    "Disallow: /api/",
    "Disallow: /_next/",
  ]

  const lines: string[] = [
    "# Mekong River Cruise — Search Engine & AI Agent Crawl Policy",
    "",
  ]

  for (const agent of BOTS) {
    lines.push(`User-agent: ${agent}`)
    if (agent === "*") {
      lines.push(CONTENT_SIGNAL)
    }
    lines.push(...sharedRules, "")
  }

  lines.push(
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Agentmap: ${SITE_URL}/.well-known/ai-catalog.json`,
    "# LLM Context Briefings",
    `# ${SITE_URL}/llms.txt`,
    `# ${SITE_URL}/llms-full.txt`,
    "",
  )

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
      "access-control-allow-origin": "*",
    },
  })
}
