"use client"

import Link from "next/link"
import { Star, ShieldCheck, Anchor } from "lucide-react"

const TRUST_ITEMS = [
  {
    icon: Star,
    label: "4.9 / 5",
    sub: "Tripadvisor Rating",
    href: "https://www.tripadvisor.com",
    external: true,
  },
  {
    icon: ShieldCheck,
    label: "Best Price Guarantee",
    sub: "No booking fees, ever",
    href: null,
    external: false,
  },
  {
    icon: Anchor,
    label: "Local Mekong Specialists",
    sub: "10+ years on the river",
    href: null,
    external: false,
  },
]

export function TrustBar() {
  return (
    <section className="relative bg-[#0e2b3d] border-b border-[#c9a962]/20 overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#c9a962]/15">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon
            const inner = (
              <div className="group flex items-center gap-5 py-5 sm:px-8 lg:px-12 hover:bg-white/[0.03] transition-colors duration-300 w-full">
                {/* Icon badge */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#c9a962]/15 border border-[#c9a962]/30 flex items-center justify-center group-hover:bg-[#c9a962]/25 transition-colors duration-300">
                  <Icon size={18} className="text-[#c9a962]" strokeWidth={1.5} />
                </div>
                {/* Text */}
                <div>
                  <p className="text-white font-semibold text-[13px] sm:text-[14px] tracking-wide leading-tight">
                    {item.label}
                  </p>
                  <p className="text-white/45 text-[11px] tracking-widest uppercase mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            )

            if (item.href && item.external) {
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {inner}
                </a>
              )
            }

            return <div key={i}>{inner}</div>
          })}
        </div>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
    </section>
  )
}

