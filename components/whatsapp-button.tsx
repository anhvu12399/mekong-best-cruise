"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Phone, X, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "13159981998"

function formatSlugLabel(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function buildContextMessage(pathname: string): { headline: string; message: string } {
  const shipMatch = pathname.match(/^\/ships\/([a-z0-9-]+)/i)
  if (shipMatch) {
    const name = formatSlugLabel(shipMatch[1])
    return {
      headline: `Ask about ${name}`,
      message: `Hello, I'm looking at ${name} on mekongrivercruise.com and would like to check cabin availability and verified rates.`,
    }
  }
  const itinMatch = pathname.match(/^\/itineraries\/([a-z0-9-]+)/i)
  if (itinMatch) {
    const routeName = formatSlugLabel(itinMatch[1])
    return {
      headline: `Ask about ${routeName}`,
      message: `Hello, I'm viewing the ${routeName} itinerary on mekongrivercruise.com and would like ship recommendations for my dates.`,
    }
  }
  if (pathname.startsWith("/mekong-cruise-cost-comparison")) {
    return {
      headline: "Compare Mekong ship rates",
      message: "Hello, I'm comparing the 20 Mekong ships on mekongrivercruise.com and would like help matching a vessel to my budget and dates.",
    }
  }
  if (pathname.startsWith("/review-my-itinerary")) {
    return {
      headline: "Quick itinerary check",
      message: "Hello, I have a draft Mekong River cruise plan and would like a specialist check on ships, water levels, and pricing.",
    }
  }
  return {
    headline: "Plan your Mekong river cruise",
    message: "Hello, I'm interested in a Mekong River cruise on mekongrivercruise.com and would like verified ship options.",
  }
}

export function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname() || "/"
  const ctx = buildContextMessage(pathname)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ctx.message)}`

  const handleChat = () => {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
      ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "conversion", {
        send_to: "AW-414204624/DDYFCK79p4AYENCFwcUB",
      })
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {expanded && (
        <div className="absolute bottom-16 right-0 bg-[#0f172a] border border-[#c9a962]/30 text-white shadow-2xl p-5 w-64 mb-4 origin-bottom-right animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <p className="text-[#c9a962] text-[10px] tracking-[0.25em] uppercase mb-1 font-medium">
            Speak to a Specialist
          </p>
          <p className="font-serif text-base text-white mb-4 leading-snug">
            {ctx.headline}
          </p>

          <div className="mb-5 bg-white/5 p-3 border-l-2 border-[#c9a962]">
            <p className="text-[#c9a962] text-[10px] tracking-[0.15em] uppercase mb-1 font-semibold">
              Direct Line / WhatsApp
            </p>
            <p className="text-white text-lg font-medium tracking-wide">
              +1 315 998 1998
            </p>
          </div>

          <button
            onClick={handleChat}
            className="w-full flex items-center justify-center gap-2 bg-[#c9a962] text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase py-3 px-4 hover:bg-[#d4b978] transition-colors duration-200"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-label="Contact us on WhatsApp"
        className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0f172a] border border-[#c9a962]/50 text-[#c9a962] shadow-2xl hover:bg-[#c9a962] hover:text-[#0f172a] hover:shadow-[0_0_24px_rgba(201,169,98,0.3)] transition-all duration-300 ${expanded ? "scale-90 bg-[#c9a962] text-[#0f172a]" : "scale-100"}`}
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full border border-[#c9a962]/50 animate-ping pointer-events-none duration-1000" />
        )}
        {expanded ? <X size={24} strokeWidth={2} /> : <Phone size={22} strokeWidth={2} />}
      </button>
    </div>
  )
}
