"use client"

import { Suspense, useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Phone, Mail, Clock, ChevronDown, Check, ArrowRight, ShieldCheck } from "lucide-react"
import { readLeadAttribution } from "@/lib/attribution"

const DESTINATIONS = ["Vietnam", "Cambodia", "Laos", "Thailand", "Myanmar", "China", "Not sure yet"]
const TRAVEL_STYLES = [
  "Luxury River Cruise",
  "Private Charter",
  "Family Journey",
  "Expedition Cruise",
  "Honeymoon & Romance",
  "Senior / Elevator Access",
  "Solo Adventure",
]
const NIGHTS_OPTIONS = ["3", "4", "7", "10+"]
const TRAVELERS_OPTIONS = ["1", "2", "3–4", "5–8", "9–12", "13+"]
const BUDGETS = [
  "Under $2,500",
  "$2,500 – $4,000",
  "$4,000 – $6,000",
  "$6,000 – $10,000",
  "Over $10,000",
  "Flexible",
]

type ShipOption = {
  slug: string
  name: string
  operator: string
  corridor: string
  sevenNightFrom: number
}

type FormData = {
  name: string
  email: string
  phone: string
  ship: string
  cabin: string
  route: string
  nights: string
  guests: string
  month: string
  destinations: string[]
  travelStyle: string
  budget: string
  referralSource: string
  notes: string
  company: string
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  ship: "",
  cabin: "",
  route: "",
  nights: "",
  guests: "",
  month: "",
  destinations: [],
  travelStyle: "",
  budget: "",
  referralSource: "",
  notes: "",
  company: "",
}

type PlanPrefill = {
  summary: string
  ship: string
  cabin: string
  route: string
  nights: string
  guests: string
  month: string
  budget: string
  travelStyle: string
  notes: string
  destinations: string[]
}

function PlanSearchParamsHydrator({
  shipOptions,
  onHydrate,
}: {
  shipOptions: ShipOption[]
  onHydrate: (vals: PlanPrefill) => void
}) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const shipParam = (searchParams.get("ship") || searchParams.get("vessel") || "").trim()
    const cabinParam = (searchParams.get("cabin") || "").trim()
    const routeParam = (searchParams.get("route") || "").trim()
    const nightsParam = (searchParams.get("nights") || "").trim()
    const guestsParam = (searchParams.get("guests") || searchParams.get("travelers") || "").trim()
    const monthParam = (searchParams.get("month") || "").trim()
    const budgetParam = (searchParams.get("budget") || "").trim()
    const styleParam = (searchParams.get("style") || "").trim()
    const notesParam = (searchParams.get("notes") || "").trim()

    const matchedShip = shipOptions.find(
      (s) => s.slug === shipParam.toLowerCase() || s.name.toLowerCase() === shipParam.toLowerCase(),
    )

    const inferredDests: string[] = []
    const routeLower = routeParam.toLowerCase()
    if (routeLower.includes("laos") || routeLower.includes("upper") || routeLower.includes("huay") || routeLower.includes("luang")) {
      inferredDests.push("Laos")
    } else if (routeLower.includes("vietnam") || routeLower.includes("cambodia") || routeLower.includes("lower") || routeLower.includes("saigon") || routeLower.includes("siem")) {
      inferredDests.push("Vietnam", "Cambodia")
    } else if (matchedShip) {
      if (matchedShip.corridor.toLowerCase().includes("laos")) inferredDests.push("Laos")
      else inferredDests.push("Vietnam", "Cambodia")
    }

    const parts = [
      matchedShip ? matchedShip.name : shipParam,
      cabinParam,
      nightsParam ? `${nightsParam} nights` : "",
      routeParam,
      guestsParam ? `${guestsParam} guests` : "",
      monthParam,
    ].filter(Boolean)

    onHydrate({
      summary: parts.join(" · "),
      ship: matchedShip ? matchedShip.slug : shipParam,
      cabin: cabinParam,
      route: routeParam,
      nights: nightsParam,
      guests: guestsParam,
      month: monthParam,
      budget: budgetParam,
      travelStyle: styleParam,
      notes: notesParam,
      destinations: inferredDests,
    })
  }, [searchParams, shipOptions, onHydrate])

  return null
}

export default function PlanYourJourneyClient({ shipOptions }: { shipOptions: ShipOption[] }) {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<Record<"name" | "email", string>>>({})
  const [prefillSummary, setPrefillSummary] = useState<string>("")

  // Hydrate form from URL query parameters (?ship=, ?vessel=, ?cabin=, ?route=, ?nights=, ?guests=, ?travelers=, ?month=, ?notes=, ?budget=, ?style=)
  const handleHydrate = useCallback((vals: PlanPrefill) => {
    if (vals.summary) {
      setPrefillSummary(vals.summary)
    }
    setForm((prev) => ({
      ...prev,
      ship: vals.ship || prev.ship,
      cabin: vals.cabin || prev.cabin,
      route: vals.route || prev.route,
      nights: vals.nights || prev.nights,
      guests: vals.guests || prev.guests,
      month: vals.month || prev.month,
      budget: vals.budget || prev.budget,
      travelStyle: vals.travelStyle || prev.travelStyle,
      notes: vals.notes || prev.notes,
      destinations: vals.destinations.length ? vals.destinations : prev.destinations,
    }))
  }, [])

  const set = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key === "name" || key === "email") {
      setErrors((prev) => ({ ...prev, [key]: "" }))
    }
  }

  const toggleDest = (dest: string) => {
    setForm((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter((d) => d !== dest)
        : [...prev.destinations, dest],
    }))
  }

  const validate = () => {
    const e: Partial<Record<"name" | "email", string>> = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name"
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Please enter a valid email address"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const selectedShipObj = shipOptions.find((s) => s.slug === form.ship)
      const attr = readLeadAttribution()
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          ship: selectedShipObj ? `${selectedShipObj.name} (${selectedShipObj.slug})` : form.ship,
          cabin: form.cabin,
          route: form.route,
          nights: form.nights,
          guests: form.guests,
          month: form.month,
          destinations: form.destinations,
          travelStyle: form.travelStyle,
          budget: form.budget,
          referralSource: form.referralSource,
          notes: form.notes.trim(),
          company: form.company,
          inquiryType: "Mekong Cruise Quote Request",
          sourcePath: typeof window !== "undefined" ? window.location.pathname : "/plan-your-journey",
          attribution: attr,
        }),
      })
      if (res.ok) {
        setStatus("success")
        if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
          ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "conversion", {
            send_to: "AW-414204624/ajiYCLH9p4AYENCFwcUB",
          })
        }
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
            <div className="relative w-20 h-20 bg-navy rounded-full flex items-center justify-center">
              <Check className="w-9 h-9 text-gold" strokeWidth={2.5} />
            </div>
          </div>
          <div className="h-px w-16 bg-gold mx-auto mb-8" />
          <h1 className="font-serif text-3xl text-navy mb-4">Thank you, {form.name.split(" ")[0]}</h1>
          <p className="text-navy/65 leading-relaxed mb-2">
            Our Ho Chi Minh City specialists received your enquiry and will email{" "}
            <span className="font-semibold text-navy">{form.email}</span> within 24 hours with live cabin availability and verified tariffs.
          </p>
          <p className="text-navy/45 text-sm mb-10">Check your inbox for a confirmation message.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/mekong-cruise-cost-comparison"
              className="inline-flex items-center gap-2 bg-navy text-cream px-7 py-3.5 text-xs font-bold tracking-wider uppercase hover:bg-navy/85 transition-colors"
            >
              Compare All 20 Ships <ArrowRight size={15} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-navy/25 text-navy px-7 py-3.5 text-xs font-bold tracking-wider uppercase hover:border-gold transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f3ef] -mt-24">
      <Suspense fallback={null}>
        <PlanSearchParamsHydrator shipOptions={shipOptions} onHydrate={handleHydrate} />
      </Suspense>
      <div className="bg-navy px-6 pt-44 pb-16 text-center relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.35em] uppercase block mb-4">
            Authorized Mekong Fleet Partner · Ho Chi Minh City Desk
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Plan Your Mekong River Cruise
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Only your name and email are required. Share as little or as much as you know — our specialists reply within 24 hours with verified partner tariffs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6" noValidate>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {prefillSummary && (
            <div className="bg-white border-l-4 border-gold px-6 py-4 shadow-sm text-sm text-navy">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B4A2A] block mb-1">
                Pre-filled Cruise Selection
              </span>
              <strong>{prefillSummary}</strong>
            </div>
          )}

          {/* Section 1: Essential Contact Details (ONLY 2 required fields) */}
          <div className="bg-white shadow-sm border border-navy/5">
            <div className="border-b border-navy/8 px-8 py-5 flex items-center justify-between">
              <h2 className="font-serif text-lg text-navy">1. Your Contact Details</h2>
              <span className="text-navy/45 text-xs tracking-wider">Only Name &amp; Email required</span>
            </div>
            <div className="px-8 py-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pyj-name" className="field-label">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="pyj-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Full name"
                    className={`input-field mt-2 ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="pyj-email" className="field-label">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="pyj-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className={`input-field mt-2 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pyj-phone" className="field-label">Phone / WhatsApp (Optional)</label>
                  <input
                    id="pyj-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="input-field mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="pyj-ref" className="field-label">How did you find us? (Optional)</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-ref"
                      value={form.referralSource}
                      onChange={(e) => set("referralSource", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Select (optional)</option>
                      <option value="ChatGPT">ChatGPT</option>
                      <option value="Perplexity">Perplexity</option>
                      <option value="Claude">Claude</option>
                      <option value="Gemini">Google Gemini</option>
                      <option value="Google Search">Google Search</option>
                      <option value="TripAdvisor">TripAdvisor</option>
                      <option value="Friend / Referral">Friend or Advisor</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Optional Cruise Preferences */}
          <div className="bg-white shadow-sm border border-navy/5">
            <div className="border-b border-navy/8 px-8 py-5 flex items-center justify-between">
              <h2 className="font-serif text-lg text-navy">2. Cruise Preferences (All Optional)</h2>
              <span className="text-navy/40 text-xs">Skip any item you are still deciding</span>
            </div>
            <div className="px-8 py-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pyj-ship" className="field-label">Preferred Ship</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-ship"
                      value={form.ship}
                      onChange={(e) => set("ship", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Not decided — recommend the best fit</option>
                      {shipOptions.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} ({s.operator}) — 7N from ${s.sevenNightFrom.toLocaleString()}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="pyj-route" className="field-label">Preferred Route</label>
                  <input
                    id="pyj-route"
                    type="text"
                    value={form.route}
                    onChange={(e) => set("route", e.target.value)}
                    placeholder="e.g. Saigon to Siem Reap, or Luang Prabang"
                    className="input-field mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="pyj-nights" className="field-label">Cruise Nights</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-nights"
                      value={form.nights}
                      onChange={(e) => set("nights", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Flexible</option>
                      {NIGHTS_OPTIONS.map((n) => (
                        <option key={n} value={n}>{n} Nights</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="pyj-guests" className="field-label">Guests</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-guests"
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Select</option>
                      {TRAVELERS_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="pyj-month" className="field-label">Target Month / Season</label>
                  <input
                    id="pyj-month"
                    type="text"
                    value={form.month}
                    onChange={(e) => set("month", e.target.value)}
                    placeholder="e.g. November 2027"
                    className="input-field mt-2"
                  />
                </div>
              </div>

              <div>
                <span className="field-label">Countries / Regions</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {DESTINATIONS.map((dest) => {
                    const active = form.destinations.includes(dest)
                    return (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => toggleDest(dest)}
                        className={`px-3 py-2.5 text-xs font-bold tracking-wider uppercase border transition-colors text-left flex items-center gap-2 ${
                          active
                            ? "border-gold bg-gold/10 text-navy"
                            : "border-navy/15 bg-[#faf8f5] text-navy/60 hover:border-navy/30"
                        }`}
                      >
                        <span className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center ${active ? "border-gold bg-gold" : "border-navy/20"}`}>
                          {active && <Check size={10} className="text-navy" strokeWidth={3} />}
                        </span>
                        {dest}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pyj-style" className="field-label">Travel Style</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-style"
                      value={form.travelStyle}
                      onChange={(e) => set("travelStyle", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Select</option>
                      {TRAVEL_STYLES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="pyj-budget" className="field-label">Target Budget (Per Person)</label>
                  <div className="relative mt-2">
                    <select
                      id="pyj-budget"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold text-sm"
                    >
                      <option value="">Flexible</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="pyj-notes" className="field-label">Cabin Preferences, Mobility Notes, or Questions</label>
                <textarea
                  id="pyj-notes"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  rows={4}
                  placeholder="E.g. Looking for a balcony suite on a ship with an elevator, or adding 3 nights in Siem Reap after disembarking."
                  className="w-full mt-2 px-4 py-3 bg-[#faf8f5] border border-navy/15 text-navy text-sm placeholder:text-navy/35 focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <p className="text-navy/45 text-xs leading-relaxed pt-2 border-t border-navy/8">
                Your details are used solely to reply to your Mekong cruise enquiry. No payment is taken here.
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-15 py-4 bg-navy text-cream font-bold tracking-[0.15em] uppercase text-sm hover:bg-navy/85 transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
          >
            {status === "loading" ? "Sending Your Enquiry..." : (
              <>
                Request Verified Quote &amp; Cabin Availability
                <ArrowRight size={18} />
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please retry or email{" "}
              <a href="mailto:sales@mekongrivercruise.com" className="underline">sales@mekongrivercruise.com</a>.
            </p>
          )}
        </form>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white shadow-sm border border-navy/5 p-7">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B4A2A] mb-2">
              Already have an AI draft?
            </p>
            <h3 className="font-serif text-lg text-navy mb-2">Free Ship Match &amp; Itinerary Check</h3>
            <p className="text-navy/60 text-sm leading-relaxed mb-4">
              Paste your ChatGPT or Perplexity Mekong plan. We verify Tonle Sap seasonal transfers, elevator access, and real USD cabin prices in 24 hours.
            </p>
            <Link
              href="/review-my-itinerary"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy border border-navy px-4 py-2.5 hover:bg-navy hover:text-white transition-colors"
            >
              Check My Draft Itinerary <ArrowRight size={13} />
            </Link>
          </div>

          <div className="bg-white shadow-sm border border-navy/5 p-7 text-center">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={20} className="text-gold" />
            </div>
            <h3 className="font-serif text-lg text-navy mb-2">Call or WhatsApp a Specialist</h3>
            <div className="h-px w-10 bg-gold mx-auto mb-3" />
            <a
              href="tel:+13159981998"
              className="text-navy font-bold text-xl tracking-wide hover:text-gold transition-colors block mb-1"
            >
              +1 315 998 1998
            </a>
            <a
              href="mailto:sales@mekongrivercruise.com"
              className="text-gold text-sm hover:text-navy transition-colors inline-flex items-center gap-1.5 mt-2"
            >
              <Mail size={14} /> sales@mekongrivercruise.com
            </a>
          </div>

          <div className="bg-navy p-7 text-white">
            <div className="flex items-center gap-2 mb-4 text-gold">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Verified Credentials</span>
            </div>
            <ul className="space-y-3 text-white/75 text-sm leading-relaxed">
              <li>• VNAT International Tour Operator License No. <strong className="text-white">79-0743/2017/CDLQGVN-GP LHQT</strong></li>
              <li>• Parent US Entity: <strong className="text-white">My Way Luxury Travel LLC</strong> (NY DOS ID 7926729)</li>
              <li>• Statutory bank escrow protection under Vietnam Tourism Law 2017</li>
              <li>• <strong className="text-white">4.9 / 5.0</strong> rating across 128 verified TripAdvisor reviews</li>
              <li>• Ho Chi Minh City desk: 139 Nguyen Cu Trinh St, District 1</li>
            </ul>
          </div>

          <div className="bg-white shadow-sm border border-navy/5 p-7">
            <div className="flex items-center gap-2.5 mb-3">
              <Clock size={16} className="text-navy/60" />
              <h3 className="font-serif text-base text-navy">Response Guarantee</h3>
            </div>
            <p className="text-navy/65 text-sm leading-relaxed">
              Every cruise inquiry receives a written cabin comparison and verified USD quote within 24 hours.
            </p>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .field-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(13,27,42,0.6); }
        .input-field { display: block; width: 100%; height: 48px; padding: 0 16px; background: #faf8f5; border: 1px solid rgba(13,27,42,0.18); color: #0d1b2a; font-size: 14px; transition: border-color 0.2s; }
        .input-field:focus { outline: none; border-color: #c9a962; }
        .input-field::placeholder { color: rgba(13,27,42,0.35); }
      `}</style>
    </main>
  )
}
