"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Clock, ChevronDown, Check, ArrowRight, X } from "lucide-react"

const DESTINATIONS = ["Vietnam", "Cambodia", "Laos", "Thailand", "Myanmar", "China", "Not sure yet"]
const TRAVEL_STYLES = ["Luxury River Cruise", "Private Charter", "Family Journey", "Expedition Cruise", "Honeymoon & Romance", "Solo Adventure"]
const BUDGETS = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000 – $50,000", "Over $50,000", "Flexible"]
const TRAVELERS_OPTIONS = ["1", "2", "3–4", "5–8", "9–12", "13+"]

type FormData = {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  destinations: string[]
  travelWindow: string
  travelers: string
  travelStyle: string
  budget: string
  notes: string
}

const INITIAL: FormData = {
  title: "", firstName: "", lastName: "", email: "", phone: "", country: "",
  destinations: [], travelWindow: "", travelers: "", travelStyle: "", budget: "", notes: "",
}

export default function PlanYourJourneyPage() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const set = (key: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: "" }))
  }

  const toggleDest = (dest: string) => {
    setForm(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest],
    }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.firstName) e.firstName = "Required"
    if (!form.lastName) e.lastName = "Required"
    if (!form.email || !form.email.includes("@")) e.email = "Valid email required"
    if (!form.travelWindow) e.travelWindow = "Please select a travel window"
    if (form.destinations.length === 0) e.destinations = "Select at least one destination"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? "success" : "error")
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
          <h1 className="font-serif text-3xl text-navy mb-4">
            Thank you, {form.firstName}
          </h1>
          <p className="text-navy/60 leading-relaxed mb-2">
            Your journey enquiry has been received. One of our specialists will contact you at{" "}
            <span className="font-semibold text-navy">{form.email}</span> within 24 hours.
          </p>
          <p className="text-navy/40 text-sm mb-10">Check your inbox for a confirmation email.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-navy/80 transition-colors"
          >
            Return Home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Hero Header */}
      <div className="bg-navy px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
        <div className="relative">
          <span className="text-gold text-xs tracking-[0.35em] uppercase block mb-4">Bespoke River Journeys</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Start Planning Your Journey</h1>
          <p className="text-white/50 text-sm tracking-wide">Complete the form below and a specialist will craft your perfect itinerary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ── FORM (left 2/3) ── */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">

          {/* Section 1: Travel Plans */}
          <div className="bg-white shadow-sm border border-navy/5">
            <div className="border-b border-navy/8 px-8 py-5 flex items-center justify-between">
              <h2 className="font-serif text-lg text-navy">Your Travel Plans</h2>
              <span className="text-navy/30 text-xs tracking-wider">* Required</span>
            </div>
            <div className="px-8 py-8 space-y-8">

              {/* Destinations */}
              <div>
                <label className="field-label">
                  Destinations <span className="text-gold">*</span>
                </label>
                {errors.destinations && <p className="text-red-500 text-xs mb-2">{errors.destinations}</p>}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                  {DESTINATIONS.map(dest => {
                    const active = form.destinations.includes(dest)
                    return (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => toggleDest(dest)}
                        className={`px-3 py-3 text-xs font-bold tracking-wider uppercase border transition-all duration-200 text-left flex items-center gap-2 ${
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

              {/* Travel Window */}
              <div>
                <label className="field-label">
                  When are you planning to travel? <span className="text-gold">*</span>
                </label>
                {errors.travelWindow && <p className="text-red-500 text-xs mb-2">{errors.travelWindow}</p>}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {[
                    { value: "3months", label: "Within 3 months" },
                    { value: "3-6months", label: "3–6 months" },
                    { value: "6-12months", label: "6–12 months" },
                    { value: "12months+", label: "Over 12 months" },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => set("travelWindow", opt.value)}
                      className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border transition-all duration-200 ${
                        form.travelWindow === opt.value
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-navy/15 bg-[#faf8f5] text-navy/60 hover:border-navy/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Travelers + Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="field-label">Number of Travellers</label>
                  <div className="relative mt-2">
                    <select
                      value={form.travelers}
                      onChange={e => set("travelers", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold transition-colors text-sm"
                    >
                      <option value="">Select</option>
                      {TRAVELERS_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="field-label">Travel Style</label>
                  <div className="relative mt-2">
                    <select
                      value={form.travelStyle}
                      onChange={e => set("travelStyle", e.target.value)}
                      className="w-full h-12 pl-4 pr-10 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold transition-colors text-sm"
                    >
                      <option value="">Select</option>
                      {TRAVEL_STYLES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="field-label">Budget Range (per person)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {BUDGETS.map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => set("budget", b)}
                      className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border transition-all duration-200 ${
                        form.budget === b
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-navy/15 bg-[#faf8f5] text-navy/60 hover:border-navy/30"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="field-label">Tell us more about your dream journey</label>
                <textarea
                  value={form.notes}
                  onChange={e => set("notes", e.target.value)}
                  rows={5}
                  placeholder="E.g. We're celebrating a 25th anniversary, prefer small ship cruises, interested in local cuisine and cultural experiences..."
                  className="w-full mt-2 px-4 py-3 bg-[#faf8f5] border border-navy/15 text-navy text-sm placeholder:text-navy/35 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Your Details */}
          <div className="bg-white shadow-sm border border-navy/5">
            <div className="border-b border-navy/8 px-8 py-5">
              <h2 className="font-serif text-lg text-navy">Your Details</h2>
            </div>
            <div className="px-8 py-8 space-y-6">
              {/* Title + Name */}
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <label className="field-label">Title</label>
                  <div className="relative mt-2">
                    <select
                      value={form.title}
                      onChange={e => set("title", e.target.value)}
                      className="w-full h-12 pl-3 pr-8 bg-[#faf8f5] border border-navy/15 text-navy appearance-none focus:outline-none focus:border-gold transition-colors text-sm"
                    >
                      <option value="">—</option>
                      {["Mr", "Mrs", "Ms", "Miss", "Dr", "Prof"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-4 text-navy/40 pointer-events-none" />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="field-label">First Name <span className="text-gold">*</span></label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => set("firstName", e.target.value)}
                    className={`input-field mt-2 ${errors.firstName ? "border-red-400" : ""}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div className="col-span-2">
                  <label className="field-label">Last Name <span className="text-gold">*</span></label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={e => set("lastName", e.target.value)}
                    className={`input-field mt-2 ${errors.lastName ? "border-red-400" : ""}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="field-label">Email Address <span className="text-gold">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                    className={`input-field mt-2 ${errors.email ? "border-red-400" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="field-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => set("phone", e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="input-field mt-2"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="field-label">Country of Residence</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={e => set("country", e.target.value)}
                  placeholder="E.g. United States"
                  className="input-field mt-2"
                />
              </div>

              {/* Privacy note */}
              <p className="text-navy/40 text-xs leading-relaxed pt-2 border-t border-navy/8">
                🔒 Mekong River Cruise takes the security and privacy of your data seriously. 
                Your information will only be used to respond to your enquiry and will never be shared with third parties.
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-16 bg-navy text-cream font-bold tracking-[0.15em] uppercase text-sm hover:bg-navy/85 transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending Your Enquiry...
              </>
            ) : (
              <>
                Send My Journey Enquiry
                <ArrowRight size={18} />
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
          )}
        </form>

        {/* ── SIDEBAR (right 1/3) ── */}
        <div className="space-y-6">
          {/* Call Specialist */}
          <div className="bg-white shadow-sm border border-navy/5 p-8 text-center">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-5">
              <Phone size={20} className="text-gold" />
            </div>
            <h3 className="font-serif text-lg text-navy mb-2">Call a Specialist</h3>
            <div className="h-px w-10 bg-gold mx-auto mb-4" />
            <a href="tel:+13159981998" className="text-navy font-bold text-xl tracking-wide hover:text-gold transition-colors block mb-1">
              +1 315 998 1998
            </a>
            <p className="text-navy/45 text-xs">Call us today until 9pm EST</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-sm border border-navy/5 p-8 text-center">
            <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={20} className="text-gold" />
            </div>
            <h3 className="font-serif text-lg text-navy mb-2">Email Us</h3>
            <div className="h-px w-10 bg-gold mx-auto mb-4" />
            <a href="mailto:sales@mekongrivercruise.com" className="text-gold text-sm hover:text-navy transition-colors break-all">
              sales@mekongrivercruise.com
            </a>
          </div>

          {/* Office Hours */}
          <div className="bg-white shadow-sm border border-navy/5 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-navy/5 flex items-center justify-center">
                <Clock size={18} className="text-navy/60" />
              </div>
              <h3 className="font-serif text-lg text-navy">Office Hours</h3>
            </div>
            <div className="space-y-3">
              {[
                { day: "Monday", hours: "10am – 6pm" },
                { day: "Tue – Thursday", hours: "9am – 8pm" },
                { day: "Friday", hours: "9am – 8pm" },
                { day: "Saturday – Sunday", hours: "10am – 6pm" },
              ].map(r => (
                <div key={r.day} className="flex justify-between text-sm border-b border-navy/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-navy/60">{r.day}</span>
                  <span className="text-navy font-bold">{r.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-navy/35 text-xs mt-4">All times in Eastern Standard Time (EST)</p>
          </div>

          {/* Why Us */}
          <div className="bg-navy p-8">
            <h3 className="font-serif text-white text-lg mb-5">Why travel with us?</h3>
            <div className="space-y-4">
              {[
                { icon: "🌊", text: "25+ years crafting Mekong journeys" },
                { icon: "✨", text: "Fully bespoke — no two trips alike" },
                { icon: "🛡️", text: "ATOL protected & fully bonded" },
                { icon: "⭐", text: "5-star rated by 2,000+ travellers" },
                { icon: "📞", text: "24/7 in-destination support" },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                  <span className="text-white/65 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for this page */}
      <style jsx global>{`
        .field-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(13,27,42,0.55); }
        .input-field { display: block; width: 100%; height: 48px; padding: 0 16px; background: #faf8f5; border: 1px solid rgba(13,27,42,0.15); color: #0d1b2a; font-size: 14px; transition: border-color 0.2s; }
        .input-field:focus { outline: none; border-color: #c9a962; }
        .input-field::placeholder { color: rgba(13,27,42,0.3); }
      `}</style>
    </div>
  )
}
