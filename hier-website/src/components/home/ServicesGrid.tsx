import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Real Estate Development',
    description:
      'From rural estate subdivisions to urban commercial parks, we bring 75+ years of combined development expertise to every project — horizontal and vertical.',
    href: '/services/development',
    highlight: '75+ years combined experience',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Property Management',
    description:
      'Full-service management for high-rise offices, retail centers, multi-family complexes, and single-family homes. Local staff, quick response times, transparent reporting.',
    href: '/services/property-management',
    highlight: 'In-house maintenance staff',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Brokerage',
    description:
      'Commercial and residential brokerage across the Denver Metro, Front Range, and Douglas County. Specialists in large-acreage ranches, industrial, office, retail, and flex space.',
    href: '/services/brokerage',
    highlight: 'Commercial & residential',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Financial Analysis',
    description:
      'Rigorous underwriting, market analysis, rent surveys, and asset management. We give investors and developers the data they need to make confident decisions.',
    href: '/services/financial-analysis',
    highlight: 'Flexible fee structures',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="divider-gold mb-6" />
          <h2
            className="text-4xl lg:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            A Full-Service
            <br />
            <em className="font-normal" style={{ color: 'var(--color-gold)' }}>Real Estate Platform</em>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            From raw land to stabilized assets, Hier &amp; Company provides the expertise, relationships, and execution capability to take projects from concept to completion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group relative overflow-hidden rounded-sm p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {/* Gold accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                style={{ background: 'var(--color-gold)' }}
              />

              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="mb-5 p-3 rounded-sm w-fit"
                  style={{ background: 'rgba(201,144,42,0.08)', color: 'var(--color-gold)' }}
                >
                  {s.icon}
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--color-muted)' }}>
                  {s.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs tracking-wide font-medium px-3 py-1 rounded-full"
                    style={{ background: 'rgba(201,144,42,0.1)', color: 'var(--color-gold-dim)' }}
                  >
                    {s.highlight}
                  </span>
                  <span
                    className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
