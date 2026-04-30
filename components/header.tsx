"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const navLinks = [
  { label: "Journeys" },
  { label: "Experience" },
  { label: "Destinations" },
  { label: "About" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    window.open(REDIRECT_URL, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={handleLinkClick} className="flex items-center gap-3 text-left">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wide text-white">
                Mekong River
              </span>
              <span className="text-xs tracking-[0.3em] text-gold uppercase">
                Cruise
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={handleLinkClick}
                className="text-sm tracking-wide text-white/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Redirects to external URL */}
          <div className="hidden lg:block">
            <button
              onClick={handleLinkClick}
              className="inline-flex items-center px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              Speak to a Specialist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    handleLinkClick()
                  }}
                  className="text-sm tracking-wide text-white/80 hover:text-gold transition-colors duration-200 py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleLinkClick()
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200 mt-4"
              >
                Speak to a Specialist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
