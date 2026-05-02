import { ArrowRight } from "lucide-react"
import Link from "next/link"

const decisions = [
  {
    title: "3–4 Day Mekong Delta",
    cta: "View itinerary",
    href: "/destinations/vietnam"
  },
  {
    title: "7–8 Day Vietnam – Cambodia",
    cta: "View itinerary",
    href: "/destinations/cambodia"
  },
  {
    title: "Private Charter",
    cta: "Plan my journey",
    href: "/journeys"
  },
  {
    title: "Small Ship Expeditions",
    cta: "Explore vessels",
    href: "/experiences"
  }
]

export function QuickDecision() {
  return (
    <section className="bg-navy border-b border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {decisions.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="py-10 lg:px-8 flex flex-col items-start group cursor-pointer hover:bg-white/5 transition-colors duration-300"
            >
              <h3 className="font-serif text-lg md:text-xl text-white tracking-wide mb-6">{item.title}</h3>
              <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-gold/80 flex items-center gap-3 group-hover:text-gold transition-colors mt-auto">
                <span>{item.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
