import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, Calendar, Compass, ArrowRight } from "lucide-react"

export type SpecialistId = "emily" | "tom" | "mai" | "sokha"

interface SpecialistProfile {
  name: string
  role: string
  location: string
  years: number
  img: string
  bio: string
  focus: string
}

const SPECIALISTS: Record<SpecialistId, SpecialistProfile> = {
  emily: {
    name: "Emily Nguyen",
    role: "Lead Mekong Delta Specialist",
    location: "Can Tho & Saigon, Vietnam",
    years: 11,
    img: "/images/specialist_emily.png",
    bio: "Born on the Delta in Ben Tre, Emily studied international tourism in Saigon before spending over a decade navigating Mekong channels, inspecting luxury vessels, and verifying seasonal river conditions.",
    focus: "Delta Navigation, Vessel Inspections & Floating Markets"
  },
  tom: {
    name: "Tom Harley",
    role: "Senior Cambodia & Angkor Specialist",
    location: "Siem Reap, Cambodia",
    years: 9,
    img: "/images/specialist_tom.avif",
    bio: "Former archaeologist who has lived in Siem Reap for 9 years. Tom designs seamless trans-border itineraries connecting Lower Mekong cruise moorings with private temple explorations.",
    focus: "Khmer Heritage, Tonle Sap Waterways & Cross-Border Logistics"
  },
  mai: {
    name: "Mai Sophea",
    role: "Tonle Sap & Rural Waterways Specialist",
    location: "Phnom Penh, Cambodia",
    years: 7,
    img: "/images/specialist_mai.avif",
    bio: "Raised along the Tonle Sap Lake, Mai provides rare insider insight into seasonal water movements, floating community culture, and low-water season coach transfers.",
    focus: "Floating Villages, Seasonal Hydrology & Silk Communities"
  },
  sokha: {
    name: "Sokha Deth",
    role: "Khmer History & Cultural Specialist",
    location: "Siem Reap, Cambodia",
    years: 15,
    img: "/images/specialist_sokha.avif",
    bio: "A certified guide for 15 years, Sokha has guided UNESCO delegations and royal guests through Cambodia's temple complexes, bringing deep historic context to our river journeys.",
    focus: "Sanskrit Epigraphy, Buddhist Monasteries & Royal History"
  }
}

/**
 * Compact top-of-article byline
 */
export function AuthorByline({ 
  specialistId = "emily",
  updatedDate = "October 2026",
  readingTime = "6 min read"
}: { 
  specialistId?: SpecialistId
  updatedDate?: string
  readingTime?: string
}) {
  const author = SPECIALISTS[specialistId]

  return (
    <div className="flex flex-wrap items-center gap-3 py-3 border-y border-[#e0d9ce]/60 text-xs text-[#555] my-6">
      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/40 shrink-0">
        <Image
          src={author.img}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-semibold text-navy">
          By <Link href="/our-specialists" className="hover:text-gold transition-colors underline decoration-gold/40 underline-offset-2">{author.name}</Link>
        </span>
        <span className="text-[#999]">•</span>
        <span className="text-[#666]">{author.role} ({author.years} yrs experience)</span>
        <span className="text-[#999]">•</span>
        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
          <CheckCircle2 size={12} /> Fact-Checked ({updatedDate})
        </span>
        <span className="text-[#999] hidden sm:inline">•</span>
        <span className="text-[#888] hidden sm:inline">{readingTime}</span>
      </div>
    </div>
  )
}

/**
 * Comprehensive author bio box at bottom of article
 */
export function AuthorCard({
  specialistId = "emily",
  reviewedDate = "October 2026"
}: {
  specialistId?: SpecialistId
  reviewedDate?: string
}) {
  const author = SPECIALISTS[specialistId]

  return (
    <div className="my-12 p-6 sm:p-8 bg-[#FAF8F5] border border-[#E0D9CE] rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold/60 shrink-0 shadow-sm mx-auto sm:mx-0">
          <Image
            src={author.img}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B4A2A] bg-[#8B4A2A]/10 px-2.5 py-0.5 rounded-full">
              Editorial Author & River Specialist
            </span>
            <span className="text-[10px] text-[#777]">
              Based in {author.location}
            </span>
          </div>
          <h4 className="font-serif text-xl text-navy font-bold">
            {author.name}
          </h4>
          <p className="text-xs text-gold font-semibold uppercase tracking-wider">
            {author.role} · {author.years}+ Years Mekong Expertise
          </p>
          <p className="text-sm text-[#555] leading-relaxed pt-1">
            {author.bio}
          </p>
          <div className="pt-3 border-t border-[#E0D9CE] flex flex-wrap items-center justify-between gap-3 text-xs text-[#777]">
            <span className="inline-flex items-center gap-1.5 text-emerald-800 font-medium">
              <CheckCircle2 size={14} className="text-emerald-600" />
              Reviewed for seasonal pricing, water levels & border rules ({reviewedDate})
            </span>
            <Link
              href="/our-specialists"
              className="font-bold text-navy hover:text-gold transition-colors inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
            >
              Meet Our Specialist Team <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
