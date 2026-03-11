import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Development',
  description:
    'Hier & Company brings 75+ years of combined development expertise to horizontal and vertical projects across Colorado — from commercial office parks to rural estate subdivisions.',
}

const capabilities = [
  {
    title: 'Horizontal Development',
    description:
      'Land acquisition, entitlement, infrastructure planning, and lot delivery for residential subdivisions, commercial parcels, and mixed-use projects. We manage the full horizontal development process from raw land to shovel-ready lots.',
  },
  {
    title: 'Vertical Development',
    description:
      'Commercial office buildings, retail centers, and multi-tenant properties designed and built to meet market demand. We oversee design, permitting, construction management, and stabilization.',
  },
  {
    title: 'Rural Estate Subdivisions',
    description:
      'Specialists in large-acreage rural development across Douglas County and the broader Front Range. We understand Colorado\'s rural land regulations, water rights, and the unique infrastructure requirements of estate-scale projects.',
  },
  {
    title: 'Commercial Office Parks',
    description:
      'Planning, development, and leasing of multi-tenant office parks. Our integrated brokerage and property management capabilities mean we can take a development from concept through full occupancy.',
  },
  {
    title: 'Market & Financial Analysis',
    description:
      'Every development starts with rigorous analysis. We provide detailed feasibility studies, market assessments, and financial modeling to ensure projects are viable before capital is committed.',
  },
  {
    title: 'Development Consulting',
    description:
      'Not every project needs a full development partner. We offer flexible consulting engagements — from single-phase entitlement advisory to ongoing project oversight — structured around your needs.',
  },
]

const advantages = [
  '75+ years of combined development experience',
  'Deep Douglas County regulatory knowledge',
  'Integrated brokerage and property management',
  'In-house market and financial analysis',
  'Established relationships with local contractors and municipalities',
  'Flexible partnership and fee structures',
]

export default function DevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Development"
        title="Real Estate Development"
        titleAccent="From Concept to Completion"
        description="For over 50 years, Hier & Company has been transforming raw land and repositioning commercial assets across Colorado's Front Range. Our 75+ years of combined development experience spans rural estate subdivisions to urban commercial parks."
      />

      {/* Capabilities */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Build"
            title="Development Capabilities"
            titleAccent="Across Every Asset Class"
            subtitle="From single-family estate subdivisions to multi-building commercial campuses, we bring the expertise, relationships, and capital discipline to execute."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="divider-gold mb-5" style={{ width: '32px' }} />
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hier */}
      <section
        className="py-24 lg:py-28 relative overflow-hidden noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Advantage"
                title="Why Investors &amp; Developers"
                titleAccent="Partner With Us"
                dark
              />
              <ul className="space-y-3">
                {advantages.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,144,42,0.2)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-sm p-8 lg:p-10">
              <blockquote>
                <p className="text-lg italic text-white/80 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  &ldquo;We&apos;ve been Castle Rock&apos;s development partner of choice for more than 40 years because we deliver — not just on the numbers, but on the relationships that make projects possible.&rdquo;
                </p>
                <footer className="text-sm text-white/40">
                  <span style={{ color: 'var(--color-gold)' }}>Hier &amp; Company</span> · Castle Rock, CO
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
