"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronRight, ChevronLeft, Phone } from "lucide-react"
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
  const [activeView, setActiveView] = useState<'main' | 'destinations'>('main')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isSidebarOpen) {
      const timer = setTimeout(() => setActiveView('main'), 500)
      return () => clearTimeout(timer)
    }
  }, [isSidebarOpen])

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-navy shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-10 relative">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            
            {/* Left: Hamburger & Desktop Navigation */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Hamburger Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-white p-2 hover:text-gold transition-colors -ml-2"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-8">
                <Link
                  href="/destinations/vietnam"
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  Destinations
                </Link>
                <Link
                  href="/journeys"
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  Our Journeys
                </Link>
                <Link
                  href="/experiences"
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  Experiences
                </Link>
              </nav>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.avif"
                  alt="Mekong River Cruise Logo"
                  width={300}
                  height={140}
                  className="h-10 lg:h-14 w-auto object-contain"
                  priority
                  fetchPriority="high"
                  sizes="300px"
                />
              </Link>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center">
              <Link
                href="/plan-your-journey"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-navy text-[11px] font-bold tracking-wide hover:bg-gold-light transition-colors duration-200 uppercase"
              >
                Plan Your Journey
              </Link>
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
        className={`fixed top-0 left-0 h-full w-[90%] max-w-[420px] bg-navy border-r border-white/10 z-[60] transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full h-full overflow-hidden">
          
          {/* MAIN VIEW */}
          <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto flex flex-col p-8 pt-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            activeView === 'main' ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-10"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* 1. Main Categories (Serif) */}
            <div className="flex flex-col gap-6 mb-10 border-b border-white/10 pb-10 mt-6 pr-8">
              <button onClick={() => setActiveView('destinations')} className="flex justify-between items-center text-[28px] font-serif text-white hover:text-gold transition-colors group text-left">
                Destinations <ChevronRight size={20} strokeWidth={1} className="text-white/30 group-hover:text-gold" />
              </button>
              <Link href="/journeys" onClick={() => setIsSidebarOpen(false)} className="flex items-center text-[28px] font-serif text-white hover:text-gold transition-colors group">
                Our Journeys
              </Link>
              <Link href="/experiences" onClick={() => setIsSidebarOpen(false)} className="flex items-center text-[28px] font-serif text-white hover:text-gold transition-colors group">
                Experiences
              </Link>
            </div>

            {/* 2. TRENDING */}
            <div className="mb-10 border-b border-white/10 pb-10">
              <h4 className="text-[11px] font-bold text-gold tracking-[0.15em] uppercase mb-6">Trending</h4>
              <div className="flex flex-col gap-5">
                <Link href="https://www.toursmekong.com/tailor-made-tours/" target="_blank" className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Tailormade Journeys
                </Link>
                <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Expedition Cruises
                </Link>
                <Link href="/journeys" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Private Ready-to-book Journeys
                </Link>
                <Link href="/family-private-cruise" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Family Private Cruise
                </Link>
                <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Luxury River Cruises
                </Link>
              </div>
            </div>

            {/* 3. Secondary Links */}
            <div className="mb-10">
              <div className="flex flex-col gap-6">
                <Link href="/destinations/vietnam" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors group pr-2">
                  Travel Ideas <ChevronRight size={18} strokeWidth={1.5} className="text-white/30 group-hover:text-gold" />
                </Link>
                <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Stories & Heritage
                </Link>
                <Link href="/" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </div>
            </div>

            {/* 4. Speak To Us Box */}
            <div className="bg-white/5 p-8 mt-auto border border-white/10 shrink-0">
              <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-white/80">Speak to Us</h4>
              <div className="flex items-center gap-3 mb-4 text-white">
                <Phone size={18} strokeWidth={1.5} />
                <span className="font-bold text-[15px] tracking-wide">+1 315 998 1998</span>
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed">
                Talk to a travel consultant Mon - Fri 6am - 4pm & Sat 7am - 11am EST or <a href="https://wa.me/13159981998" target="_blank" className="underline hover:text-gold">Contact Us</a>
              </p>
            </div>
          </div>

          {/* DESTINATIONS SUB-MENU VIEW */}
          <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto flex flex-col p-8 pt-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            activeView === 'destinations' ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-10"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <button onClick={() => setActiveView('main')} className="flex items-center gap-2 text-white/50 hover:text-white mb-10 w-fit group mt-2">
              <ChevronLeft size={20} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Back</span>
            </button>

            <Link href="/destinations/vietnam" onClick={() => setIsSidebarOpen(false)} className="block w-full text-center border border-white/20 py-4 text-[11px] font-bold tracking-wider uppercase text-white hover:bg-white/10 transition-colors mb-8">
              All Destinations
            </Link>

            <div className="flex flex-col gap-6 pr-2">
              {[
                { label: "Vietnam", href: "/destinations/vietnam" },
                { label: "Cambodia", href: "/destinations/cambodia" },
                { label: "Laos", href: "/destinations/laos" },
                { label: "Thailand", href: "/destinations/thailand" },
                { label: "Myanmar", href: "/destinations/myanmar" },
                { label: "China", href: "/destinations/china" }
              ].map((sub) => (
                <Link key={sub.label} href={sub.href} onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[13px] font-bold tracking-wider uppercase text-white/90 hover:text-gold transition-colors group">
                  {sub.label} <ChevronRight size={18} strokeWidth={1.5} className="text-white/30 group-hover:text-gold" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
