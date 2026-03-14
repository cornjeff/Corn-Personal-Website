'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Subtle particle/grain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Subtle moving gradient orbs
      const grad1 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.sin(t * 0.3) * 40,
        canvas.height * 0.3 + Math.cos(t * 0.2) * 30,
        0,
        canvas.width * 0.7,
        canvas.height * 0.3,
        canvas.width * 0.4
      )
      grad1.addColorStop(0, 'rgba(201,144,42,0.08)')
      grad1.addColorStop(1, 'rgba(201,144,42,0)')
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const grad2 = ctx.createRadialGradient(
        canvas.width * 0.15 + Math.cos(t * 0.25) * 50,
        canvas.height * 0.7 + Math.sin(t * 0.15) * 40,
        0,
        canvas.width * 0.15,
        canvas.height * 0.7,
        canvas.width * 0.35
      )
      grad2.addColorStop(0, 'rgba(47,77,61,0.4)')
      grad2.addColorStop(1, 'rgba(47,77,61,0)')
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      t += 0.005
      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
      style={{ background: 'var(--color-forest)' }}
    >
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      {/* Hero background photo */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/warehouse-aerial-overview.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      {/* Dark gradient overlay on image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,46,38,0.95) 0%, rgba(28,46,38,0.7) 60%, rgba(28,46,38,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,144,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,144,42,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-44" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs tracking-[0.35em] uppercase font-medium" style={{ color: 'var(--color-gold)' }}>
              Est. 1974 · Castle Rock, Colorado
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Building Legacy.
            <br />
            <em className="font-normal text-gold-gradient" style={{ color: 'var(--color-gold-light)' }}>
              Protecting Value.
            </em>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-xl">
            For over 50 years, Hier &amp; Company has been the trusted partner for real estate development, property management, and commercial brokerage across Colorado&apos;s Front Range.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services/development"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Explore Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" style={{ zIndex: 3 }}>
        <span className="text-[10px] tracking-[0.3em] uppercase text-white">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-bounce" />
      </div>
    </section>
  )
}
