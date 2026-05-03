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
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      {/* Expanded tooltip card */}
      {expanded && (
        <div className="absolute bottom-16 left-0 bg-[#0f172a] border border-[#c9a962]/30 text-white shadow-2xl p-5 w-64 mb-4 origin-bottom-left animate-in fade-in zoom-in-95 duration-200">
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
            Plan your perfect Mekong journey
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

      {/* Floating circular button */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-label="Contact us on WhatsApp"
        className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0f172a] border border-[#c9a962]/50 text-[#c9a962] shadow-2xl hover:bg-[#c9a962] hover:text-[#0f172a] hover:shadow-[0_0_24px_rgba(201,169,98,0.3)] transition-all duration-300 ${expanded ? 'scale-90 bg-[#c9a962] text-[#0f172a]' : 'scale-100'}`}
      >
        {/* Subtle pulse */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full border border-[#c9a962]/50 animate-ping pointer-events-none duration-1000" />
        )}

        {expanded ? <X size={24} strokeWidth={2} /> : <Phone size={22} strokeWidth={2} />}
      </button>
    </div>
  )
}
