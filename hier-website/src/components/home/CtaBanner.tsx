import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: 'var(--color-charcoal)' }}
    >
      {/* Gold gradient glow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(201,144,42,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <div className="divider-gold mb-6" />
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Discuss Your
              <em className="font-normal block" style={{ color: 'var(--color-gold-light)' }}>
                Next Project?
              </em>
            </h2>
            <p className="text-white/55 leading-relaxed">
              Whether you&apos;re acquiring land, seeking a property management partner, or need rigorous financial analysis before committing capital — we&apos;re ready to listen and deliver.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/our-company"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)' }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
