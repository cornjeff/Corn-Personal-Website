'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const services = [
  { label: 'Development', href: '/services/development' },
  { label: 'Property Management', href: '/services/property-management' },
  { label: 'Brokerage', href: '/services/brokerage' },
  { label: 'Financial Analysis', href: '/services/financial-analysis' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C2E26]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Hier <span style={{ color: 'var(--color-gold)' }}>&amp;</span> Company
          </span>
          <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase mt-0.5">
            Real Estate · Castle Rock, CO
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 uppercase font-medium">
              Services
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 pt-3">
                <div className="bg-[#1C2E26]/98 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl py-2 overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/our-company" className="text-sm tracking-wide text-white/80 hover:text-white transition-colors uppercase font-medium">
            Our Company
          </Link>
          <Link href="/portfolio" className="text-sm tracking-wide text-white/80 hover:text-white transition-colors uppercase font-medium">
            Portfolio
          </Link>
          <Link href="/tenant-portal" className="text-sm tracking-wide text-white/80 hover:text-white transition-colors uppercase font-medium">
            Tenant Portal
          </Link>

          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-200 hover:scale-105"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1C2E26]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="text-xs tracking-[0.2em] text-white/40 uppercase mb-2">Services</div>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white pl-3 py-1 border-l border-[#C9902A]/40 transition-colors"
            >
              {s.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
            <Link href="/our-company" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white transition-colors">Our Company</Link>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white transition-colors">Portfolio</Link>
            <Link href="/tenant-portal" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white transition-colors">Tenant Portal</Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 text-center text-sm font-semibold tracking-wide uppercase rounded-sm"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
