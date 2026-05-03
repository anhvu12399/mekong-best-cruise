"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const REDIRECT_URL = "https://www.toursmekong.com/"

import Link from "next/link"

const navLinks = [
  { label: "Journeys", href: "/journeys" },
  { label: "Experience", href: "/experiences" },
  { 
    label: "Destinations", 
    href: "/destinations/vietnam",
    subLinks: [
      { label: "Vietnam", href: "/destinations/vietnam" },
      { label: "Cambodia", href: "/destinations/cambodia" },
      { label: "Laos", href: "/destinations/laos" },
      { label: "Thailand", href: "/destinations/thailand" },
      { label: "Myanmar", href: "/destinations/myanmar" },
      { label: "China", href: "/destinations/china" }
    ]
  },
  { label: "About", href: "/" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-navy shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-left">
            <Image
              src="/logo.avif"
              alt="Mekong River Cruise Logo"
              width={300}
              height={140}
              className="h-20 w-auto object-contain"
              priority
              fetchPriority="high"
              sizes="300px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm tracking-wide text-white/80 hover:text-gold transition-colors duration-200 py-4 block"
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <div className="absolute top-full left-0 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-navy/95 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col py-3 z-50 transform translate-y-2 group-hover:translate-y-0">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="px-6 py-3 text-sm tracking-wider text-white/70 hover:text-gold hover:bg-white/5 transition-colors block"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
              className="inline-flex items-center px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200 uppercase"
            >
              Plan Your Journey
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
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm tracking-wide text-white/80 hover:text-gold transition-colors duration-200 py-2 text-left"
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col pl-4 mt-1 space-y-1 border-l-2 border-white/10">
                      {link.subLinks.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm tracking-wide text-white/60 hover:text-gold py-2 text-left"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank");
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200 mt-4"
              >
                PLAN YOUR JOURNEY
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
