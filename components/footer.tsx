"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const footerLinks = {
  journeys: [
    { label: "All Cruises" },
    { label: "Vietnam & Cambodia" },
    { label: "Thailand & Laos" },
    { label: "Private Charters" },
  ],
  company: [
    { label: "About Us" },
    { label: "Our Vessels" },
    { label: "Sustainability" },
    { label: "Careers" },
  ],
  support: [
    { label: "FAQs" },
    { label: "Booking Terms" },
    { label: "Privacy Policy" },
    { label: "Contact Us" },
  ],
}

export function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [resendCooldown, setResendCooldown] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleResend = async () => {
    if (resendCooldown) return
    setResendCooldown(true)
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
    } catch {}
    // Block resend for 30 seconds
    setTimeout(() => setResendCooldown(false), 30000)
  }

  const handleLinkClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  const firstName = name ? name.trim().split(" ")[0] : ""

  return (
    <footer id="contact" className="bg-navy">
      {/* Newsletter Section — Cream background */}
      <div className="bg-[#faf8f5] border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-6">
              Stay Inspired
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-navy mb-6">
              Join Our Exclusive Mailing List
            </h3>
            <p className="text-navy/55 mb-10">
              Be the first to receive new itineraries, exclusive offers, and
              inspiring stories from the Mekong.
            </p>

            {status === "success" ? (
              /* ── Thank You Card ── */
              <div className="bg-white border border-navy/10 shadow-sm p-10 flex flex-col items-center gap-4">
                {/* Animated checkmark */}
                <div className="relative w-16 h-16 mb-2">
                  <div className="absolute inset-0 bg-gold/10 rounded-full animate-ping" />
                  <div className="relative w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-serif text-xl text-navy">
                    {firstName ? `Welcome aboard, ${firstName}!` : "You're on the list!"}
                  </p>
                  <p className="text-navy/55 text-sm leading-relaxed">
                    A confirmation email has been sent to{" "}
                    <span className="font-semibold text-navy">{email}</span>.
                    <br />Please check your inbox (and spam folder, just in case).
                  </p>
                </div>

                {/* Thin gold divider */}
                <div className="w-16 h-px bg-gold/40 my-1" />

                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                  <button
                    onClick={handleResend}
                    disabled={resendCooldown}
                    className="text-navy/50 hover:text-navy underline underline-offset-2 transition-colors disabled:cursor-not-allowed disabled:no-underline disabled:text-navy/30"
                  >
                    {resendCooldown ? "Email sent ✓" : "Resend confirmation email"}
                  </button>
                  <span className="hidden sm:inline text-navy/20">·</span>
                  <button
                    onClick={() => { setStatus("idle"); setName(""); setEmail("") }}
                    className="text-navy/50 hover:text-navy underline underline-offset-2 transition-colors"
                  >
                    Subscribe another address
                  </button>
                </div>
              </div>
            ) : (
              /* ── Subscription Form ── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
                {/* Row 1: Name */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  disabled={status === "loading"}
                  className="w-full h-14 px-4 bg-white border border-navy/20 text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors duration-200 disabled:opacity-60"
                />
                {/* Row 2: Email + Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    disabled={status === "loading"}
                    className="flex-1 h-14 px-4 bg-white border border-navy/20 text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors duration-200 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="h-14 px-8 bg-navy text-cream font-medium hover:bg-navy/80 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-navy/35 text-xs mt-1">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <button onClick={handleLinkClick} className="inline-block mb-8 text-left">
              <Image 
                src="/logo.png" 
                alt="Mekong River Cruise Logo" 
                width={300} 
                height={140} 
                className="h-24 w-auto object-contain" 
              />
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Crafting extraordinary river journeys through Southeast Asia&apos;s 
              most captivating landscapes since 1998.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+1 315 998 1998</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-gold shrink-0" />
                <span>sales@mekongrivercruise.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Journeys
            </h4>
            <ul className="space-y-4">
              {footerLinks.journeys.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={handleLinkClick}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={handleLinkClick}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={handleLinkClick}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Mekong River Cruise. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <button onClick={handleLinkClick} className="hover:text-gold transition-colors">Terms</button>
              <button onClick={handleLinkClick} className="hover:text-gold transition-colors">Privacy</button>
              <button onClick={handleLinkClick} className="hover:text-gold transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
