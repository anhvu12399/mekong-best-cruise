"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronRight, Phone } from "lucide-react"
import Link from "next/link"

const REDIRECT_URL = "https://www.toursmekong.com/"

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-navy shadow-lg" : "bg-transparent"
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

            {/* Desktop Navigation (Center) */}
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

            {/* Right: Desktop CTA & Mobile/Desktop Hamburger */}
            <div className="flex items-center gap-4 lg:gap-6">
              <button
                onClick={() => window.open("https://www.toursmekong.com/tailor-made-tours/", "_blank")}
                className="hidden lg:inline-flex items-center px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200 uppercase"
              >
                Plan Your Journey
              </button>
              
              {/* Hamburger Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-white p-2 hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[50] transition-opacity duration-300 backdrop-blur-sm ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`} 
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Menu (A&K Style) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[90%] max-w-[420px] bg-white z-[60] overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 pt-10 text-navy min-h-full relative">
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="absolute top-6 right-6 text-navy/50 hover:text-navy transition-colors p-2"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* 1. Main Categories (Serif) */}
          <div className="flex flex-col gap-6 mb-10 border-b border-navy/10 pb-10 mt-6">
            <Link href="/destinations/vietnam" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[28px] font-serif text-navy hover:text-[#c9a962] transition-colors group">
              Destinations <ChevronRight size={20} strokeWidth={1} className="text-navy/30 group-hover:text-[#c9a962]" />
            </Link>
            <Link href="/journeys" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[28px] font-serif text-navy hover:text-[#c9a962] transition-colors group">
              Our Journeys <ChevronRight size={20} strokeWidth={1} className="text-navy/30 group-hover:text-[#c9a962]" />
            </Link>
            <Link href="/experiences" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[28px] font-serif text-navy hover:text-[#c9a962] transition-colors group">
              Experiences <ChevronRight size={20} strokeWidth={1} className="text-navy/30 group-hover:text-[#c9a962]" />
            </Link>
          </div>

          {/* 2. TRENDING (was POPULAR) */}
          <div className="mb-10 border-b border-navy/10 pb-10">
            <h4 className="text-[11px] font-bold text-[#c9a962] tracking-[0.15em] uppercase mb-6">Trending</h4>
            <div className="flex flex-col gap-5">
              <Link href="https://www.toursmekong.com/tailor-made-tours/" target="_blank" className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Tailormade Journeys
              </Link>
              <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Expedition Cruises
              </Link>
              <Link href="/journeys" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Private Ready-to-book Journeys
              </Link>
              <Link href="/family-private-cruise" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Family Private Cruise
              </Link>
              <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Luxury River Cruises
              </Link>
            </div>
          </div>

          {/* 3. Secondary Links */}
          <div className="mb-10">
            <div className="flex flex-col gap-6">
              <Link href="/destinations/vietnam" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors group">
                Travel Ideas <ChevronRight size={18} strokeWidth={1.5} className="text-navy/30 group-hover:text-[#c9a962]" />
              </Link>
              <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                Stories & Heritage
              </Link>
              <Link href="/" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-navy hover:text-[#c9a962] transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* 4. Speak To Us Box */}
          <div className="bg-[#f8f7f5] p-8 mt-auto border border-navy/5">
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-navy">Speak to Us</h4>
            <div className="flex items-center gap-3 mb-4 text-navy">
              <Phone size={18} strokeWidth={1.5} />
              <span className="font-bold text-[15px] tracking-wide">+1 315 998 1998</span>
            </div>
            <p className="text-[13px] text-navy/70 leading-relaxed">
              Talk to a travel consultant Mon - Fri 6am - 4pm & Sat 7am - 11am EST or <a href="https://wa.me/13159981998" target="_blank" className="underline hover:text-[#c9a962]">Contact Us</a>
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
