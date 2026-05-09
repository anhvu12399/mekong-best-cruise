"use client"

import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import {
  Shield,
  Users,
  Clock,
  Heart,
  ThumbsUp,
  Headphones,
} from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const features = [
  {
    icon: Shield,
    title: "Complete Peace of Mind",
    description:
      "Every journey is fully backed by comprehensive travel protection and around-the-clock on-the-ground support from our local team in Southeast Asia.",
  },
  {
    icon: Users,
    title: "True Mekong Experts",
    description:
      "Every specialist on our team has lived on and explored the Mekong for years — giving you insider knowledge and perspectives no guidebook can offer.",
  },
  {
    icon: Clock,
    title: "15+ Years of Experience",
    description:
      "More than a decade and a half of crafting unforgettable river journeys has taught us exactly what makes a voyage genuinely extraordinary.",
  },
  {
    icon: Heart,
    title: "Travel That Gives Back",
    description:
      "We partner exclusively with local operators committed to protecting the river's ecology and uplift­ing the communities that call it home.",
  },
  {
    icon: ThumbsUp,
    title: "98% Would Recommend Us",
    description:
      "Guest satisfaction is the only metric we care about. 98% of our travelers recommend us to friends and family without hesitation.",
  },
  {
    icon: Headphones,
    title: "Always Here for You",
    description:
      "Our multilingual support team is available before, during, and after your trip — so no question goes unanswered and no issue goes unresolved.",
  },
]

const stats = [
  { value: "5,000+", label: "Happy Travelers" },
  { value: "150+", label: "Local Partners" },
  { value: "4.9★", label: "Average Rating" },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Editorial Text ── */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[#9B7B3B] text-[11px] tracking-[0.35em] uppercase font-bold mb-6">
              Why Travel With Us
            </p>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6 ${playfair.className}`}>
              Because the Mekong deserves to be experienced the right way
            </h2>
            <p className="text-navy/65 text-base leading-relaxed mb-8 max-w-md">
              We are not just a travel company. We are storytellers, connectors, and above all,
              people who are genuinely in love with this river. Every journey we craft carries that
              love — along with deep respect for this remarkable land and its people.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-5 mb-10">
              <p className="text-navy/70 italic font-serif text-sm leading-relaxed">
                "What makes a journey extraordinary is not the places you visit — it is the
                connections you make and the feelings you carry home."
              </p>
              <cite className="block text-[11px] tracking-[0.2em] uppercase text-[#9B7B3B] font-bold mt-3 not-italic">
                — Founder &amp; CEO
              </cite>
            </blockquote>

            {/* Stats row */}
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className={`text-2xl text-gold font-bold ${playfair.className}`}>{s.value}</p>
                  <p className="text-navy/50 text-xs tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about-us"
                className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#9B7B3B] border-b border-[#9B7B3B]/50 pb-1 hover:border-[#9B7B3B] transition-colors"
              >
                Read Our Story →
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Feature Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-navy/5 rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded bg-[#faf3e8] flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-[#9B7B3B]" size={18} />
                </div>
                <h3 className="font-semibold text-navy text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-navy/55 text-[13px] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
