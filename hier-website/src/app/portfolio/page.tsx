import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/home/CtaBanner'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Hier & Company\'s portfolio of commercial, residential, and development projects across Castle Rock, Douglas County, and the Colorado Front Range.',
}

const categories = ['All', 'Development', 'Commercial', 'Residential', 'Property Management']

const properties = [
  {
    category: 'Commercial',
    type: 'Office Space',
    address: '382 Alexander Place, Castle Rock, CO',
    built: '1980',
    size: '240–2,734 SF',
    rate: '$20.00–$30.41/SF/YR',
    description: 'Multi-suite office building in Castle Rock offering flexible unit sizes for professional tenants.',
    status: 'Managed',
    photo: '/commercial-brick-building.jpg',
    photoAlt: 'Commercial office building exterior',
  },
  {
    category: 'Commercial',
    type: 'Retail Space',
    address: 'Castle Rock, CO',
    built: '2004',
    size: '1,500 SF',
    rate: 'Contact for pricing',
    description: 'Street-level retail in a high-visibility Castle Rock corridor. Ideal for boutique, service, or food & beverage tenants.',
    status: 'Leasing',
    photo: '/commercial-strip-modern.jpg',
    photoAlt: 'Modern retail strip exterior',
  },
  {
    category: 'Commercial',
    type: 'Flex Space',
    address: 'Castle Rock, CO',
    built: '2020',
    size: '884 SF',
    rate: 'Contact for pricing',
    description: 'Modern flex space combining office and light-warehouse functionality in a newer Castle Rock development.',
    status: 'Available',
    photo: '/loft-suite-interior.jpg',
    photoAlt: 'Industrial loft flex space interior',
  },
  {
    category: 'Commercial',
    type: 'Industrial Space',
    address: 'Castle Rock, CO',
    built: '2017',
    size: '782 SF',
    rate: 'Contact for pricing',
    description: 'Industrial unit suitable for light manufacturing, storage, or distribution. Grade-level access.',
    status: 'Available',
    photo: '/warehouse-d-units.jpg',
    photoAlt: 'Industrial warehouse units with overhead doors',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Properties &"
        titleAccent="Project Portfolio"
        description="A selection of the properties we manage, have developed, and actively represent across Castle Rock, Douglas County, and the Front Range. Contact us for current availability and detailed information on any listing."
      />

      {/* Filter tabs */}
      <section style={{ background: 'var(--color-charcoal)' }} className="py-6 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="flex-shrink-0 px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-sm transition-colors"
                style={
                  i === 0
                    ? { background: 'var(--color-gold)', color: 'var(--color-charcoal)' }
                    : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties grid */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {properties.map((p, i) => (
              <div
                key={i}
                className="group rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                {/* Property photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.photo}
                    alt={p.photoAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(201,144,42,0.1)', color: 'var(--color-gold-dim)' }}
                    >
                      {p.type}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: p.status === 'Available' ? 'rgba(34,197,94,0.1)' : 'rgba(201,144,42,0.1)',
                        color: p.status === 'Available' ? '#16a34a' : 'var(--color-gold)',
                      }}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                  >
                    {p.address}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--color-muted)' }}>
                    {p.description}
                  </p>

                  <div className="mt-auto pt-4 border-t flex gap-6 text-xs" style={{ borderColor: 'rgba(0,0,0,0.06)', color: 'var(--color-muted)' }}>
                    <span><strong style={{ color: 'var(--color-charcoal)' }}>Size:</strong> {p.size}</span>
                    <span><strong style={{ color: 'var(--color-charcoal)' }}>Built:</strong> {p.built}</span>
                    <span><strong style={{ color: 'var(--color-charcoal)' }}>Rate:</strong> {p.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More coming */}
          <div className="mt-12 text-center">
            <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
              Our full portfolio includes additional listings and off-market opportunities not shown here.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Request Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
