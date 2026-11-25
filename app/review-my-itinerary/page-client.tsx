"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import { readLeadAttribution } from "@/lib/attribution"

type ShipItem = {
  slug: string
  name: string
  operator: string
  sevenNightFrom: number
}

type FaqItem = { q: string; a: string }

type Props = {
  shipList: ShipItem[]
  faqs: FaqItem[]
  entity: {
    legalName: string
    parentCompany: string
    vnatLicense: string
    vietnamOffice: string
    tripAdvisor: { url: string; rating: string; reviewCount: number }
  }
}

export default function ReviewItineraryClient({ shipList, faqs, entity }: Props) {
  const searchParams = useSearchParams()
  const [draft, setDraft] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [ship, setShip] = useState("")
  const [travelersMonth, setTravelersMonth] = useState("")
  const [phone, setPhone] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [company, setCompany] = useState("")
  const [fromPage, setFromPage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const spShip = (searchParams.get("ship") || searchParams.get("vessel") || "").trim()
    const spRoute = (searchParams.get("route") || "").trim()
    const spNights = (searchParams.get("nights") || "").trim()
    const spGuests = (searchParams.get("guests") || searchParams.get("travelers") || "").trim()
    const spMonth = (searchParams.get("month") || "").trim()
    const spNotes = (searchParams.get("notes") || "").trim()
    const spFrom = (searchParams.get("from") || "").trim()

    if (spFrom) setFromPage(spFrom)
    if (spShip) setShip(spShip.toLowerCase())

    const tm = [
      spGuests ? `${spGuests} guests` : "",
      spNights ? `${spNights} nights` : "",
      spMonth,
      spRoute,
    ].filter(Boolean)
    if (tm.length) setTravelersMonth(tm.join(" · "))
    if (spNotes) setDraft(spNotes)
  }, [searchParams])

  const matchedShip = shipList.find((s) => s.slug === ship)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (draft.trim().length < 15) {
      setErrorMsg("Please share at least a short note or ship shortlist (15+ characters).")
      return
    }
    if (name.trim().length < 2 || !email.trim().includes("@")) {
      setErrorMsg("Please enter your name and a valid email address.")
      return
    }
    setErrorMsg("")
    setStatus("loading")
    try {
      const attr = readLeadAttribution()
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          ship: matchedShip ? `${matchedShip.name} (${matchedShip.slug})` : ship,
          month: travelersMonth.trim(),
          notes: `${draft.trim()}${fromPage ? `\n\n[Referred from page: ${fromPage}]` : ""}`,
          referralSource,
          company,
          inquiryType: "Free Mekong Ship Match & Draft Itinerary Check",
          sourcePath: "/review-my-itinerary",
          attribution: attr,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
        ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "conversion", {
          send_to: "AW-414204624/ajiYCLH9p4AYENCFwcUB",
        })
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="bg-[#FAF9F5] text-navy min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Ho Chi Minh City Operations Desk · Free 24-Hour Check
          </p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-5 max-w-3xl">
            Free Mekong Ship Match &amp; Draft Itinerary Check
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
            Comparing ships with ChatGPT, Perplexity, or Claude? Paste your shortlist or draft route below. A Mekong specialist checks Tonle Sap water levels, elevators, docking ports, and live cabin tariffs within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <section className="lg:col-span-7 bg-white border border-navy/10 p-6 md:p-9 shadow-sm" aria-labelledby="review-form-heading">
          <h2 id="review-form-heading" className="font-serif text-2xl text-navy mb-2">
            Paste your draft itinerary or ship shortlist
          </h2>
          <p className="text-sm text-navy/65 mb-6">
            Only three fields are required: your notes, name, and email. No deposit or card is requested here.
          </p>

          {matchedShip && (
            <div className="mb-6 bg-[#FAF9F5] border-l-4 border-gold px-4 py-3 text-sm text-navy">
              Checking availability &amp; alternatives against <strong>{matchedShip.name}</strong> ({matchedShip.operator}, 7N from US${matchedShip.sevenNightFrom.toLocaleString()} pp).
            </div>
          )}

          {status === "success" ? (
            <div className="bg-[#eef6ee] border border-[#95c995] p-6 text-[#164416]">
              <div className="flex items-center gap-2 font-bold mb-2">
                <Check size={18} /> Received by our Ho Chi Minh City Mekong desk
              </div>
              <p className="text-sm leading-relaxed mb-4">
                We will review your ship shortlist and route timing, then send our findings and verified USD cabin options to <strong>{email}</strong> within 24 hours.
              </p>
              <Link href="/mekong-cruise-cost-comparison" className="underline text-sm font-semibold">
                Browse the 20-ship cost comparison while you wait →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="rev-draft" className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
                  1. Your draft itinerary, ship shortlist, or questions <span className="text-gold">*</span>
                </label>
                <textarea
                  id="rev-draft"
                  required
                  rows={6}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Example: Comparing The Jahan vs Mekong Jewel for 7 nights upstream from Saigon to Siem Reap in February for 2 adults. Need advice on stairs/elevator and Angkor Wat transfers."
                  className="w-full px-4 py-3 bg-[#FAF9F5] border border-navy/20 text-navy text-sm focus:outline-none focus:border-gold resize-y"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rev-name" className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
                    2. Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full h-12 px-4 bg-[#FAF9F5] border border-navy/20 text-navy text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="rev-email" className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
                    3. Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="rev-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 bg-[#FAF9F5] border border-navy/20 text-navy text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-navy/10">
                <div>
                  <label htmlFor="rev-ship" className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                    Ship you are leaning toward (optional)
                  </label>
                  <select
                    id="rev-ship"
                    value={ship}
                    onChange={(e) => setShip(e.target.value)}
                    className="w-full h-12 px-3 bg-[#FAF9F5] border border-navy/15 text-navy text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="">Still comparing</option>
                    {shipList.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name} ({s.operator})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rev-tm" className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                    Travelers &amp; month (optional)
                  </label>
                  <input
                    id="rev-tm"
                    type="text"
                    value={travelersMonth}
                    onChange={(e) => setTravelersMonth(e.target.value)}
                    placeholder="e.g. 2 adults, November 2027"
                    className="w-full h-12 px-4 bg-[#FAF9F5] border border-navy/15 text-navy text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rev-phone" className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                    WhatsApp / Phone (optional)
                  </label>
                  <input
                    id="rev-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Optional"
                    className="w-full h-12 px-4 bg-[#FAF9F5] border border-navy/15 text-navy text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="rev-tool" className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                    Which tool helped you research? (optional)
                  </label>
                  <select
                    id="rev-tool"
                    value={referralSource}
                    onChange={(e) => setReferralSource(e.target.value)}
                    className="w-full h-12 px-3 bg-[#FAF9F5] border border-navy/15 text-navy text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="">Select (optional)</option>
                    <option value="ChatGPT">ChatGPT</option>
                    <option value="Perplexity">Perplexity</option>
                    <option value="Claude">Claude</option>
                    <option value="Gemini">Google Gemini</option>
                    <option value="Google Search">Google Search</option>
                    <option value="TripAdvisor">TripAdvisor</option>
                    <option value="Planned myself">Planned myself</option>
                  </select>
                </div>
              </div>

              {errorMsg && <p className="text-red-600 text-xs">{errorMsg}</p>}
              {status === "error" && (
                <p className="text-red-600 text-xs">
                  Could not submit right now. Email your draft directly to{" "}
                  <a href="mailto:sales@mekongrivercruise.com" className="underline">sales@mekongrivercruise.com</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-navy text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-gold hover:text-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "loading" ? "Sending to Mekong Specialist..." : (
                  <>Send for Free 24h Specialist Check <ArrowRight size={15} /></>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Right Column */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-navy/10 p-7 shadow-sm">
            <h2 className="font-serif text-xl text-navy mb-4">What our specialists verify</h2>
            <ul className="space-y-3 text-sm text-navy/80 leading-relaxed">
              <li><strong>Tonle Sap crossing reality:</strong> We check whether your sailing date crosses the lake by ship (Aug–Nov) or requires a 4.5-hour road transfer from Kampong Cham (Dec–Jul).</li>
              <li><strong>Saigon docking port:</strong> We flag which ships dock 1.5–2 hours south in My Tho versus Emerald Harmony docking in central Saigon (District 4).</li>
              <li><strong>Elevators &amp; stair angles:</strong> We match travelers with mobility needs to vessels with elevators (Victoria Mekong, Scenic Spirit, Viking Saigon, Mekong Jewel, Mekong Navigator).</li>
              <li><strong>True total cost:</strong> We itemize cabin tariff, port taxes ($65–$120), Cambodia visa ($30–$35 cash), and recommended gratuities ($15–$20/day).</li>
            </ul>
          </div>

          <div className="bg-navy text-white p-7">
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck size={16} /> Who Reviews Your Draft
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              {entity.legalName} operates from {entity.vietnamOffice} under Vietnam VNAT International Tour Operator License No.{" "}
              <strong className="text-white">{entity.vnatLicense}</strong>.
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Parent company: {entity.parentCompany}. Guests rate us{" "}
              <strong className="text-white">{entity.tripAdvisor.rating}/5</strong> across {entity.tripAdvisor.reviewCount} verified TripAdvisor reviews.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gold underline underline-offset-4">
              <Link href="/mekong-cruise-cost-comparison">20-Ship Cost Comparison</Link>
              <Link href="/travel-ideas/best-mekong-river-cruise-for-seniors">Senior Elevator Guide</Link>
              <Link href="/best-time-to-travel">Water Level Calendar</Link>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">Frequently Asked Questions</h2>
        <div className="divide-y divide-navy/15 border-t border-b border-navy/15">
          {faqs.map((f) => (
            <details key={f.q} className="py-4 group">
              <summary className="font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-gold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-navy/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
