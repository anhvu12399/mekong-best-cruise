import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react"
import { AuthorByline, AuthorCard, type SpecialistId } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

export const SITE_URL = "https://www.mekongrivercruise.com"

export interface LeadArticleData {
  slug: string
  headline: string
  eyebrow: string
  intro: string
  image: string
  imageAlt: string
  specialistId: SpecialistId
  datePublished: string
  readingTime: string
  /** Wikipedia-style direct answer shown first (40-60 words). */
  shortAnswer: string
  shortAnswerLabel: string
  stats: { value: string; label: string }[]
  sections: {
    h2: string
    paragraphs: string[]
    bullets?: string[]
    table?: { headers: string[]; rows: string[][] }
  }[]
  quote?: { text: string; cite: string }
  faqs: { q: string; a: string }[]
  sources: { label: string; href: string }[]
  about: { name: string; sameAs: string }[]
  cta: { heading: string; body: string; button: string; href: string }
  related: { label: string; href: string }[]
}

export function buildLeadArticleJsonLd(d: LeadArticleData, title: string, description: string) {
  const url = `${SITE_URL}/travel-ideas/${d.slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: d.headline,
        description,
        image: `${SITE_URL}${d.image}`,
        mainEntityOfPage: url,
        about: d.about.map((a) => ({ "@type": "Thing", name: a.name, sameAs: a.sameAs })),
        citation: d.sources.map((s) => s.href),
        author: {
          "@type": "Person",
          name: "Mekong River Cruise specialist team",
          url: `${SITE_URL}/our-specialists`,
          worksFor: { "@type": "TravelAgency", name: "Mekong River Cruise", url: SITE_URL },
        },
        publisher: {
          "@type": "Organization",
          name: "Mekong River Cruise",
          url: SITE_URL,
          parentOrganization: { "@type": "Organization", name: "My Way Luxury Travel LLC", url: "https://www.mywaytravel.com" },
        },
        datePublished: d.datePublished,
        dateModified: d.datePublished,
        name: title,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: d.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Travel Ideas", item: `${SITE_URL}/travel-ideas` },
          { "@type": "ListItem", position: 3, name: d.headline, item: url },
        ],
      },
    ],
  }
}

export function LeadArticle({ data, jsonLd }: { data: LeadArticleData; jsonLd: object }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="min-h-screen bg-[#FDFBF7] text-[#2C3E50]">
        <header className="relative bg-[#1A2B49] text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image src={data.image} alt={data.imageAlt} fill priority className="object-cover" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#C5A880]/30">
              {data.eyebrow}
            </div>
            <h1 className={`text-3xl md:text-5xl font-normal leading-tight mb-6 ${playfair.className}`}>{data.headline}</h1>
            <p className="text-lg text-[#E0E6ED] max-w-3xl mx-auto leading-relaxed font-light">{data.intro}</p>
            <div className="mt-8 flex justify-center">
              <AuthorByline specialistId={data.specialistId} readingTime={data.readingTime} updatedDate="November 2026" />
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Short answer: first thing a reader or an AI engine sees */}
          <section className="mb-10 bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">{data.shortAnswerLabel}</h2>
                <p className="text-base text-[#4A5568] leading-relaxed">{data.shortAnswer}</p>
              </div>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((s) => (
              <div key={s.label} className="bg-white border border-[#E5E0D8] rounded-lg p-4 text-center">
                <p className={`text-2xl text-[#1A2B49] ${playfair.className}`}>{s.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-[#718096] mt-1">{s.label}</p>
              </div>
            ))}
          </section>

          {data.sections.map((sec, i) => (
            <section key={sec.h2} className="mb-14">
              <h2 className={`text-2xl md:text-3xl font-normal mb-5 text-[#1A2B49] ${playfair.className}`}>
                {i + 1}. {sec.h2}
              </h2>
              {sec.paragraphs.map((p) => (
                <p key={p} className="text-[#4A5568] leading-relaxed mb-4">{p}</p>
              ))}
              {sec.bullets && (
                <ul className="space-y-2 mb-4">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[#4A5568] text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.table && (
                <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#1A2B49] text-white">
                        {sec.table.headers.map((h) => (
                          <th key={h} className="p-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E0D8]">
                      {sec.table.rows.map((row) => (
                        <tr key={row[0]} className="hover:bg-[#F9F7F2]">
                          {row.map((c, ci) => (
                            <td key={ci} className={`p-4 ${ci === 0 ? "font-bold text-[#1A2B49]" : "text-[#4A5568]"}`}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {data.quote && (
            <blockquote className="mb-14 border-l-4 border-[#C5A880] pl-6 py-2 italic text-lg text-[#1A2B49]">
              “{data.quote.text}”
              <footer className="not-italic text-sm text-[#718096] mt-2">{data.quote.cite}</footer>
            </blockquote>
          )}

          <section className="mb-14">
            <h2 className={`text-2xl md:text-3xl font-normal mb-8 text-[#1A2B49] ${playfair.className}`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((f) => (
                <div key={f.q} className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                  <h3 className="font-bold text-[#1A2B49] text-base mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    {f.q}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed pl-7">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 text-sm text-[#4A5568]">
            <h2 className="text-base font-bold text-[#1A2B49] mb-3">Sources and further reading</h2>
            <ul className="space-y-1.5 list-disc pl-5">
              {data.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#8B4A2A]">{s.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <AuthorCard specialistId={data.specialistId} reviewedDate="November 2026" />

          <div className="mt-12 text-center bg-[#F7F5F0] p-8 rounded-2xl border border-[#E5E0D8]">
            <h3 className={`text-2xl font-normal text-[#1A2B49] mb-3 ${playfair.className}`}>{data.cta.heading}</h3>
            <p className="text-sm text-[#4A5568] max-w-xl mx-auto mb-6">{data.cta.body}</p>
            <Link
              href={data.cta.href}
              className="px-6 py-3 bg-[#8B4A2A] text-white rounded-lg text-sm font-semibold hover:bg-[#723c21] transition inline-flex items-center gap-2"
            >
              {data.cta.button} <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
              {data.related.map((r) => (
                <Link key={r.href} href={r.href} className="underline underline-offset-2 text-[#1A2B49]">{r.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
