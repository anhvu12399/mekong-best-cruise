"use client"

import { useState } from "react"
import { Phone, X, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "13159981998"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20a%20Mekong%20River%20Cruise.`

export function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false)

  const handleChat = () => {
    window.open(WHATSAPP_URL, "_blank")
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-3">
      {/* Expanded tooltip card */}
      {expanded && (
        <div className="relative bg-[#0f172a] border border-[#c9a962]/30 text-white shadow-2xl p-5 w-64">
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={14} />
          </button>
          <p className="text-[#c9a962] text-[10px] tracking-[0.25em] uppercase mb-1 font-medium">
            Speak to a Specialist
          </p>
          <p className="font-serif text-base text-white mb-2 leading-snug">
            Plan your perfect Mekong journey
          </p>
          <p className="text-white/50 text-xs mb-5 leading-relaxed">
            Our river experts are available daily to craft your bespoke itinerary.
          </p>
          <button
            onClick={handleChat}
            className="w-full flex items-center justify-center gap-2 bg-[#c9a962] text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase py-3 px-4 hover:bg-[#d4b978] transition-colors duration-200"
          >
            <MessageCircle size={14} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating pill button */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center gap-3 bg-[#0f172a] border border-[#c9a962]/50 text-white pl-4 pr-5 py-3.5 shadow-2xl hover:border-[#c9a962] hover:shadow-[0_0_24px_rgba(201,169,98,0.15)] transition-all duration-300"
      >
        {/* Subtle pulse */}
        <span className="absolute inset-0 border border-[#c9a962]/15 animate-ping pointer-events-none" />

        {/* Gold icon badge */}
        <span className="flex items-center justify-center w-8 h-8 bg-[#c9a962] text-[#0f172a] rounded-full shrink-0">
          <Phone size={15} strokeWidth={2.5} />
        </span>

        <div className="text-left leading-tight">
          <p className="text-[#c9a962] text-[10px] tracking-[0.22em] uppercase font-semibold">
            Enquire Now
          </p>
          <p className="text-white text-xs font-medium tracking-wide mt-0.5">
            +1 315 998 1998
          </p>
        </div>
      </button>
    </div>
  )
}
