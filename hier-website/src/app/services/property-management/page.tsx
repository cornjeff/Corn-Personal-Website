import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Property Management',
  description:
    'Hier & Company provides full-service property management for commercial, multi-family, and residential properties across Castle Rock and Douglas County. Local staff, transparent reporting, quick response.',
}

const propertyTypes = [
  { icon: '🏢', label: 'High-Rise Office Buildings' },
  { icon: '🛍️', label: 'Retail Shopping Centers' },
  { icon: '🏗️', label: 'Office Parks' },
  { icon: '🏘️', label: 'Multi-Family Complexes' },
  { icon: '🏡', label: 'Single-Family Homes' },
  { icon: '🏘️', label: 'HOA / Common Interest Communities' },
]

const services = [
  {
    title: 'Tenant Relations & Leasing Support',
    description:
      'We handle tenant communications, lease renewals, and vacancy marketing — maintaining high occupancy while fostering long-term tenant relationships that reduce turnover costs.',
  },
  {
    title: 'Rent & Dues Collection',
    description:
      'Streamlined collection processes with consistent follow-up on delinquencies. Owners receive clear, timely remittances with detailed accounting.',
  },
  {
    title: 'Maintenance & Repairs',
    description:
      'Our primarily in-house maintenance staff and curated network of local contractors ensure fast response times and cost-effective repairs. No inflated markups from national vendors.',
  },
  {
    title: 'Financial Reporting',
    description:
      'Monthly owner statements, annual budget preparation, and variance analysis. We provide the transparency you need to make informed decisions about your asset.',
  },
  {
    title: 'Vendor & Contract Management',
    description:
      'Landscaping, snow removal, utilities, insurance — we manage all vendor relationships and service contracts to protect your property and your budget.',
  },
  {
    title: 'HOA & Community Management',
    description:
      'Full-service Common Interest Community management including board support, governing document compliance, meeting facilitation, and community communications.',
  },
]

export default function PropertyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Property Management"
        title="Property Management"
        titleAccent="Protecting Your Investment Daily"
        description="We manage your property as if it were our own. With primarily in-house maintenance staff, local contractor relationships, and transparent financial reporting, Hier & Company delivers hands-on management that maximizes NOI and protects long-term asset value."
        backgroundImage="loft-suite-interior.jpg"
      />

      {/* Property Types */}
      <section className="py-16" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-8 text-center">Property Types We Manage</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {propertyTypes.map((p, i) => (
              <div key={i} className="glass-card rounded-sm p-5 text-center">
                <div className="text-2xl mb-2">{p.icon}</div>
                <p className="text-xs text-white/60 leading-tight">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Provide"
            title="Full-Service Management"
            titleAccent="From Day One"
            subtitle="We handle every aspect of property operations so you can focus on portfolio strategy, not day-to-day issues."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-7 rounded-sm hover:shadow-lg transition-shadow duration-300"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="w-8 h-0.5 mb-5" style={{ background: 'var(--color-gold)' }} />
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local advantage */}
      <section
        className="py-20 lg:py-24 noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="divider-gold mb-6" />
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Hier Difference:
              <em className="font-normal block" style={{ color: 'var(--color-gold-light)' }}>
                Local, Responsive, Accountable
              </em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { metric: 'Local', label: 'Primarily in-house maintenance staff — no national outsourcing markup' },
                { metric: 'Fast', label: 'Front Range location enables same-day or next-day response to urgent issues' },
                { metric: 'Transparent', label: 'Clear monthly reporting — no hidden fees, no surprises on your owner statement' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-sm p-6">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
                  >
                    {item.metric}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
