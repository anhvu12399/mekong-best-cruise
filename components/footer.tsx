"use client"

import { useState } from "react"
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
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(REDIRECT_URL, "_blank")
  }

  const handleLinkClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <footer id="contact" className="bg-navy">
      {/* Newsletter Section — Cream background */}
      <div className="bg-[#faf8f5] border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
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

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                onClick={handleLinkClick}
                className="flex-1 h-14 px-4 bg-white border border-navy/20 text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="h-14 px-8 bg-navy text-cream font-medium hover:bg-navy/80 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <button onClick={handleLinkClick} className="inline-block mb-8 text-left">
              <span className="font-serif text-2xl text-white">Mekong River</span>
              <span className="block text-xs tracking-[0.3em] text-gold uppercase">Cruise</span>
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
