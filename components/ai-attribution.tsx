"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { persistFirstTouch, readLeadAttribution } from "@/lib/attribution"

export function AiAttribution() {
  const pathname = usePathname() || "/"
  const [showBar, setShowBar] = useState(false)
  const [aiPlatform, setAiPlatform] = useState("")

  useEffect(() => {
    // 1. Capture & persist 30-day first-touch attribution across all pages
    try {
      persistFirstTouch(window.location.href, document.referrer)
      const attr = readLeadAttribution()
      const isFormPage =
        pathname.startsWith("/plan-your-journey") ||
        pathname.startsWith("/review-my-itinerary") ||
        pathname.startsWith("/contact")
      const dismissed = sessionStorage.getItem("mrc_ai_bar_closed") === "1"
      if (attr.detectedAiPlatform && !isFormPage && !dismissed) {
        setAiPlatform(attr.detectedAiPlatform)
        setShowBar(true)
      } else {
        setShowBar(false)
      }
    } catch {}

    // 2. Register WebMCP tools if supported by the browser agent runtime
    try {
      const mc = (navigator as unknown as {
        modelContext?: {
          registerTool?: (tool: {
            name: string
            description: string
            inputSchema: Record<string, unknown>
            execute: (args: Record<string, unknown>) => Promise<unknown>
          }) => void
        }
      }).modelContext

      if (mc && typeof mc.registerTool === "function" && !(window as unknown as { __mrcWebMcp?: boolean }).__mrcWebMcp) {
        ;(window as unknown as { __mrcWebMcp?: boolean }).__mrcWebMcp = true
        const callMcp = (name: string, args: Record<string, unknown>) =>
          fetch("/mcp", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "tools/call",
              params: { name, arguments: args },
            }),
          })
            .then((r) => r.json())
            .then((j) => j.result || { content: [{ type: "text", text: "error" }] })

        mc.registerTool({
          name: "search_site",
          description: "Search Mekong River Cruise ships, routes, water-level seasonality, senior mobility guides, and FAQs.",
          inputSchema: {
            type: "object",
            properties: { query: { type: "string" }, limit: { type: "integer" } },
            required: ["query"],
          },
          execute: (a) => callMcp("search_site", a),
        })
        mc.registerTool({
          name: "filter_ships",
          description: "Filter 20 verified Mekong river cruise ships by route, nights (3/4/7), max USD tariff, style, or elevator access.",
          inputSchema: {
            type: "object",
            properties: {
              route: { type: "string" },
              nights: { type: "integer", enum: [3, 4, 7] },
              max_price_usd: { type: "integer" },
              style: { type: "string" },
              elevator: { type: "boolean" },
              query: { type: "string" },
              limit: { type: "integer" },
            },
          },
          execute: (a) => callMcp("filter_ships", a),
        })
        mc.registerTool({
          name: "estimate_cruise_budget",
          description: "Estimate a Mekong river cruise USD budget across 20 verified ships with Tonle Sap water advice and pre-filled quote links.",
          inputSchema: {
            type: "object",
            properties: {
              route: { type: "string" },
              nights: { type: "integer", enum: [3, 4, 7] },
              guests: { type: "integer" },
              style: { type: "string" },
              ship: { type: "string" },
              month: { type: "string" },
            },
          },
          execute: (a) => callMcp("estimate_cruise_budget", a),
        })
        mc.registerTool({
          name: "build_quote_link",
          description: "Build a pre-filled Mekong cruise quote URL or free specialist itinerary check URL.",
          inputSchema: {
            type: "object",
            properties: {
              ship: { type: "string" },
              route: { type: "string" },
              nights: { type: "integer" },
              guests: { type: "integer" },
              month: { type: "string" },
              notes: { type: "string" },
              mode: { type: "string", enum: ["quote", "itinerary_review"] },
            },
          },
          execute: (a) => callMcp("build_quote_link", a),
        })
        mc.registerTool({
          name: "get_contact",
          description: "Get verified contact details, VNAT tour operator license, and quote links for Mekong River Cruise.",
          inputSchema: { type: "object", properties: {} },
          execute: () => callMcp("get_contact", {}),
        })
      }
    } catch {}
  }, [pathname])

  if (!showBar) return null

  const shipMatch = pathname.match(/^\/ships\/([a-z0-9-]+)/i)
  const reviewHref = `/review-my-itinerary?from=${encodeURIComponent(pathname)}${
    shipMatch ? `&ship=${encodeURIComponent(shipMatch[1])}` : ""
  }`

  return (
    <aside
      role="region"
      aria-label="Free Mekong ship match and itinerary check"
      className="fixed left-4 right-4 bottom-24 z-40 max-w-2xl mx-auto px-4 py-3 bg-[#0f172a] text-[#FAF9F5] border border-[#c9a962]/55 shadow-2xl flex items-center justify-between gap-3 flex-wrap text-sm"
    >
      <span className="leading-snug">
        {aiPlatform ? `Comparing Mekong ships from ${aiPlatform}? ` : "Comparing Mekong ships with AI? "}
        Get a free 24-hour cabin rate, Tonle Sap &amp; itinerary check from our Ho Chi Minh City desk.
      </span>
      <span className="inline-flex items-center gap-2 shrink-0">
        <Link
          href={reviewHref}
          className="bg-[#c9a962] text-[#0f172a] font-bold text-xs tracking-wider uppercase px-3.5 py-2 hover:bg-white transition-colors whitespace-nowrap"
        >
          Check My Itinerary →
        </Link>
        <button
          type="button"
          aria-label="Dismiss itinerary check prompt"
          onClick={() => {
            try {
              sessionStorage.setItem("mrc_ai_bar_closed", "1")
            } catch {}
            setShowBar(false)
          }}
          className="p-1.5 text-white/70 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </span>
    </aside>
  )
}
