import Image from 'next/image'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function FeaturedProject() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

        {/* Photo side */}
        <div className="relative min-h-[320px] lg:min-h-0 order-2 lg:order-1">
          <Image
            src={`${BASE}/warehouse-aerial-road.jpg`}
            alt="Personal Warehouse development, Boerne TX — aerial view"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient fade into text side on desktop */}
          <div
            className="absolute inset-y-0 right-0 w-24 hidden lg:block"
            style={{ background: 'linear-gradient(to right, transparent, var(--color-charcoal))' }}
          />
        </div>

        {/* Text side */}
        <div className="relative flex items-center order-1 lg:order-2 px-8 py-16 lg:px-16 lg:py-20">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: 'var(--color-gold)' }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--color-gold)' }}>
                Featured Development
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Personal Warehouse
              <br />
              <em className="font-normal" style={{ color: 'var(--color-gold-light)' }}>Boerne, Texas</em>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              A ground-up development of 4 multi-tenant industrial flex buildings totaling over 60,000 SF. From raw land acquisition through entitlement, construction management, and lease-up — delivered on schedule and fully occupied.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: '60,000+', label: 'Square Feet' },
                { value: '4', label: 'Buildings' },
                { value: '100%', label: 'Leased' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wide uppercase text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all hover:gap-3"
              style={{ color: 'var(--color-gold)' }}
            >
              View Full Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
