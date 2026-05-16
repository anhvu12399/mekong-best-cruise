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
  {
    label: "Travel Ideas",
    href: "#",
    subLinks: [
      { label: "Luxury Cruises", href: "/travel-ideas/luxury-cruises" },
      { label: "Floating Markets", href: "/travel-ideas/floating-markets" },
      { label: "Cajuput Forests", href: "/travel-ideas/cajuput-forests" },
      { label: "Craft Villages", href: "/travel-ideas/craft-villages" },
      { label: "Hidden Mekong", href: "/travel-ideas/hidden-mekong" },
      { label: "Ben Tre Authentic", href: "/travel-ideas/ben-tre-authentic" },
      { label: "Slow Day", href: "/travel-ideas/slow-day" },
      { label: "Hate Crowds?", href: "/travel-ideas/hate-crowds" },
      { label: "Redefining Luxury", href: "/travel-ideas/redefining-luxury" }
    ]
  },
  { label: "About", href: "/" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState<'main' | 'destinations' | 'about' | 'travel-ideas'>('main')

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
        className={`fixed top-0 left-0 right-0 z-40 bg-navy transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
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
                <button
                  onClick={() => {
                    setIsSidebarOpen(true)
                    setActiveView('destinations')
                  }}
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  Destinations
                </button>
                <Link
                  href="/cruises"
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  Cruises
                </Link>
                <button
                  onClick={() => {
                    setIsSidebarOpen(true)
                    setActiveView('about')
                  }}
                  className="text-[12px] font-bold tracking-[0.1em] text-white hover:text-gold transition-colors duration-200 uppercase"
                >
                  About Us
                </button>
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
                className="inline-flex items-center px-3 py-2 lg:px-5 lg:py-2.5 bg-gold text-navy text-[9px] lg:text-[11px] font-bold tracking-wide hover:bg-gold-light transition-colors duration-200 uppercase text-center"
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
              <Link href="/cruises" onClick={() => setIsSidebarOpen(false)} className="flex items-center text-[28px] font-serif text-white hover:text-gold transition-colors group">
                Cruises
              </Link>
              <button onClick={() => setActiveView('about')} className="flex justify-between items-center text-[28px] font-serif text-white hover:text-gold transition-colors group text-left">
                About Us <ChevronRight size={20} strokeWidth={1} className="text-white/30 group-hover:text-gold" />
              </button>
            </div>

            {/* 2. TRENDING */}
            <div className="mb-10 border-b border-white/10 pb-10">
              <h4 className="text-[11px] font-bold text-gold tracking-[0.15em] uppercase mb-6">Trending</h4>
              <div className="flex flex-col gap-5">
                <Link href="/travel-ideas/hidden-mekong" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  The Mekong You Don&apos;t See
                </Link>
                <Link href="/travel-ideas/ben-tre-authentic" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Why Ben Tre Feels More Real
                </Link>
                <Link href="/itineraries/mekong-delta" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  3-4 Days Mekong Delta
                </Link>
                <Link href="/itineraries/vietnam-cambodia" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  7-8 Days Cambodia Vietnam
                </Link>
              </div>
            </div>

            {/* 3. Secondary Links */}
            <div className="mb-10">
              <div className="flex flex-col gap-6">
                <button onClick={() => setActiveView('travel-ideas')} className="w-full flex justify-between items-center text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors group pr-2 text-left">
                  Travel Ideas <ChevronRight size={18} strokeWidth={1.5} className="text-white/30 group-hover:text-gold" />
                </button>
                <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Our Story
                </Link>
                <Link href="/our-specialists" onClick={() => setIsSidebarOpen(false)} className="text-[13px] font-bold tracking-wider uppercase text-white/80 hover:text-gold transition-colors">
                  Our Specialists
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

          {/* ABOUT US SUB-MENU VIEW */}
          <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto flex flex-col p-8 pt-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            activeView === 'about' ? 'translate-x-0' : 'translate-x-full'
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
            <div className="flex flex-col gap-8 pr-2">
              <Link href="/about-us" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[22px] font-serif text-white/90 hover:text-gold transition-colors group">
                About Us Overview <ChevronRight size={18} strokeWidth={1} className="text-white/30 group-hover:text-gold" />
              </Link>
              <Link href="/discover" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[22px] font-serif text-white/90 hover:text-gold transition-colors group">
                Our Story <ChevronRight size={18} strokeWidth={1} className="text-white/30 group-hover:text-gold" />
              </Link>
              <Link href="/our-specialists" onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[22px] font-serif text-white/90 hover:text-gold transition-colors group">
                Our Specialists <ChevronRight size={18} strokeWidth={1} className="text-white/30 group-hover:text-gold" />
              </Link>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-[13px] text-white/50 leading-relaxed font-serif italic">
                "Crafting extraordinary river journeys through Southeast Asia's most captivating landscapes since 1993."
              </p>
            </div>

          </div>

          {/* TRAVEL IDEAS SUB-MENU VIEW */}
          <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto flex flex-col p-8 pt-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            activeView === 'travel-ideas' ? 'translate-x-0' : 'translate-x-full'
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
            <div className="flex flex-col gap-5 pr-2 pb-10">
              <h4 className="text-[11px] font-bold text-gold tracking-[0.15em] uppercase mb-4">Travel Ideas</h4>
              {navLinks.find(n => n.label === 'Travel Ideas')?.subLinks?.map((sub) => (
                <Link key={sub.label} href={sub.href} onClick={() => setIsSidebarOpen(false)} className="flex justify-between items-center text-[12px] font-bold tracking-wider uppercase text-white/90 hover:text-gold transition-colors group border-b border-white/5 pb-3">
                  {sub.label} <ChevronRight size={16} strokeWidth={1.5} className="text-white/30 group-hover:text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
