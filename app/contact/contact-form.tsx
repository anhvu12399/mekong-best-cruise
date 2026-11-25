"use client"

import { useState } from "react"
import { readLeadAttribution } from "@/lib/attribution"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("Booking a Cruise")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
          travelStyle: subject,
          notes: message.trim(),
          company,
          inquiryType: `Contact Form — ${subject}`,
          sourcePath: "/contact",
          attribution: attr,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-navy/15 p-8 text-center">
        <p className="font-serif text-2xl text-[#0f1a2b] mb-3">Message Received</p>
        <p className="text-sm text-[#555] leading-relaxed">
          Thank you. A Mekong River Cruise specialist in Ho Chi Minh City will reply to your email within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
        <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Name <span className="text-[#b8860b]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Email <span className="text-[#b8860b]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Subject
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full h-12 px-4 bg-white border border-[#ddd] text-[#222] focus:outline-none focus:border-[#b8860b] transition-colors"
        >
          <option>Booking a Cruise</option>
          <option>Custom Itinerary Request</option>
          <option>Private Charter</option>
          <option>Senior / Elevator Cabin Advice</option>
          <option>Group / Corporate Travel</option>
          <option>Travel Agent Partnership</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-bold uppercase tracking-wider mb-2">
          Message (Optional)
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share preferred ships, travel month, or questions..."
          className="w-full px-4 py-3 bg-white border border-[#ddd] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
        />
      </div>
      {errorMsg && <p className="text-red-600 text-xs">{errorMsg}</p>}
      {status === "error" && (
        <p className="text-red-600 text-xs">
          Could not send right now. Please email sales@mekongrivercruise.com directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 bg-[#0f1a2b] text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#1a2a40] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      <p className="text-[#777] text-xs text-center">
        Only your name and email are required. We reply within 24 hours.
      </p>
    </form>
  )
}
