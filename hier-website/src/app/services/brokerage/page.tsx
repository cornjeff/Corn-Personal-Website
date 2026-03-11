import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Real Estate Brokerage',
  description:
    'Commercial and residential real estate brokerage serving Denver Metro, the Front Range, and Douglas County. Hier & Company specializes in industrial, office, retail, and large-acreage ranch properties.',
}

const commercial = [
  { type: 'Industrial', desc: 'Warehouse, distribution, flex-industrial, and manufacturing space across the Denver Metro and Front Range corridors.' },
  { type: 'Office', desc: 'From single-tenant buildings to multi-story office parks. We represent tenants, landlords, buyers, and sellers.' },
  { type: 'Retail', desc: 'Strip centers, pad sites, and in-line retail. Deep understanding of the Castle Rock and Douglas County retail market.' },
  { type: 'Flex Space', desc: 'Hybrid office/warehouse properties — a growing asset class with strong demand in the South Denver market.' },
  { type: 'Multi-Family', desc: 'Investment sales and acquisitions of apartment communities and build-to-rent projects.' },
  { type: 'Land', desc: 'Commercial land acquisition, disposition, and assemblage. Entitlement advisory available.' },
]

const residential = [
  {
    title: 'Large Ranch & Acreage Properties',
    description:
      'Our residential brokerage specializes in large-acreage properties — typically 35+ acres — throughout Douglas County, Elbert County, and the broader Front Range. These transactions require specialized knowledge of agricultural easements, water rights, access issues, and rural zoning.',
  },
  {
    title: 'Rural Estate Subdivisions',
    description:
      'We represent both developers subdividing rural land and buyers seeking estate-sized residential parcels. Our development expertise gives us unique insight into value and entitlement potential.',
  },
  {
    title: 'Castle Rock & Douglas County Residential',
    description:
      'In-depth knowledge of Castle Rock\'s residential market — from established neighborhoods to new development areas. We provide honest market analysis and skilled negotiation for buyers and sellers.',
  },
]

export default function BrokeragePage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Brokerage"
        title="Commercial & Residential"
        titleAccent="Brokerage Services"
        description="Representing buyers, sellers, landlords, and tenants across the Denver Metro, Front Range, and Douglas County. Our brokerage team combines deep local market knowledge with a full-service platform to ensure every transaction achieves optimal outcomes."
      />

      {/* Commercial */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Commercial Brokerage"
            title="Every Commercial Asset Class"
            titleAccent="Covered"
            subtitle="From single-suite office leases to large industrial acquisitions, our commercial brokerage team provides market intelligence and transaction expertise across all asset types."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercial.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-sm border-l-2 hover:shadow-md transition-shadow"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeftColor: 'var(--color-gold)',
                  borderLeftWidth: '3px',
                }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {c.type}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential */}
      <section
        className="py-24 lg:py-32 noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Residential Brokerage"
            title="Large Acreage &"
            titleAccent="Rural Estate Specialists"
            subtitle="Our residential practice focuses on the properties that demand the most expertise — large-acreage ranches, rural estates, and acreage subdivisions across Colorado's Front Range."
            dark
          />
          <div className="space-y-5">
            {residential.map((r, i) => (
              <div key={i} className="glass-card rounded-sm p-7 lg:p-8">
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {r.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market area */}
      <section className="py-20" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-8">Primary Market Areas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Castle Rock', 'Douglas County', 'Denver Metro', 'Front Range',
              'Elbert County', 'Colorado Springs', 'Parker', 'Highlands Ranch', 'Lone Tree',
            ].map((market) => (
              <span
                key={market}
                className="px-4 py-2 text-sm rounded-full border text-white/60"
                style={{ borderColor: 'rgba(201,144,42,0.3)', background: 'rgba(201,144,42,0.05)' }}
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
