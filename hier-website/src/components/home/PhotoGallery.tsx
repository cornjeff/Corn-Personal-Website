import Image from 'next/image'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const photos = [
  { src: `${BASE}/solar-automotive.jpg`, alt: 'Commercial retail development, Castle Rock CO' },
  { src: `${BASE}/warehouse-silo.jpg`, alt: 'Personal Warehouse development, Boerne TX' },
  { src: `${BASE}/warehouse-d01-exterior.jpg`, alt: 'Modern industrial flex space' },
  { src: `${BASE}/dransfeld-aerial.jpg`, alt: 'Dransfeld Business Park aerial view' },
  { src: `${BASE}/depot-district.jpg`, alt: 'Castle Rock historic depot district' },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--color-charcoal)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'var(--color-gold)' }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--color-gold)' }}>
                Our Work
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              50 Years of{' '}
              <em className="font-normal" style={{ color: 'var(--color-gold-light)' }}>
                Built Legacy
              </em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors hover:opacity-70"
            style={{ color: 'var(--color-gold)' }}
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Photo grid: 1 large left + 2x2 right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Large feature photo */}
          <div className="relative lg:col-span-1 lg:row-span-2 rounded-sm overflow-hidden" style={{ minHeight: '360px' }}>
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* 4 smaller photos */}
          {photos.slice(1).map((photo, i) => (
            <div key={i} className="relative rounded-sm overflow-hidden" style={{ minHeight: '180px' }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
