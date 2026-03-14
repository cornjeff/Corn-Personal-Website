import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Financial Analysis & Consulting',
  description:
    'Real estate financial analysis, underwriting, market analysis, and asset management consulting from Hier & Company. Flexible fee structures for investors, developers, and owners.',
}

const offerings = [
  {
    title: 'Investment Underwriting',
    description:
      'Rigorous acquisition underwriting for commercial and residential investment properties. We model cash flows, stress-test assumptions, and provide a clear picture of risk-adjusted returns before you commit capital.',
  },
  {
    title: 'Market Analysis',
    description:
      'Comprehensive market studies covering supply/demand dynamics, absorption rates, competitive set analysis, and demographic trends. Essential for development feasibility and investment thesis validation.',
  },
  {
    title: 'Rent Surveys',
    description:
      'Detailed rent surveys for commercial and residential properties — essential for accurate underwriting, lease negotiations, and setting competitive market rates. Updated regularly to reflect current conditions.',
  },
  {
    title: 'Asset Management',
    description:
      'Strategic oversight of your real estate portfolio — capital improvement planning, hold/sell analysis, refinancing advisory, and performance benchmarking against comparable assets.',
  },
  {
    title: 'Financial Consulting',
    description:
      'Flexible consulting engagements for investors, developers, and lenders who need an experienced real estate financial perspective without a long-term retainer commitment.',
  },
  {
    title: 'Development Feasibility',
    description:
      'Before breaking ground, know your numbers. We produce development feasibility studies that cover land costs, construction, financing, absorption, and projected returns under multiple scenarios.',
  },
]

const feeModels = [
  {
    model: 'Hourly',
    desc: 'For discrete analyses, single-property reviews, or consulting calls. Predictable cost, no long-term commitment.',
    best: 'Best for: One-time analyses, second opinions',
  },
  {
    model: 'Project-Based',
    desc: 'Fixed fee for a defined scope of work — feasibility study, market analysis, underwriting package, or asset management plan.',
    best: 'Best for: Development projects, acquisitions',
  },
  {
    model: 'Performance-Based',
    desc: 'Fee tied to investment performance — aligning our incentives directly with yours. We win when you win.',
    best: 'Best for: Long-term partnerships, portfolios',
  },
]

export default function FinancialAnalysisPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Financial Analysis"
        title="Financial Analysis"
        titleAccent="& Real Estate Consulting"
        description="We help investors, developers, and property owners make confident decisions backed by rigorous analysis. With deep market knowledge and 50+ years of Front Range real estate experience, Hier & Company's financial analysis services provide the clarity you need before committing capital."
        backgroundImage="dransfeld-aerial.jpg"
      />

      {/* Offerings */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="Analysis & Consulting"
            titleAccent="Services"
            subtitle="From single-property underwriting to portfolio-wide asset management strategies, our financial analysis capabilities support every phase of the real estate lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <div
                key={i}
                className="p-7 rounded-sm hover:shadow-lg transition-all duration-300 group"
                style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(201,144,42,0.1)' }}
                >
                  <span className="text-lg font-bold" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Models */}
      <section
        className="py-24 lg:py-28 noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Work"
            title="Flexible Fee Structures"
            titleAccent="Built Around Your Needs"
            subtitle="We don't believe in one-size-fits-all. Our consulting engagements are structured to match how you work and what your project demands."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feeModels.map((f, i) => (
              <div key={i} className="glass-card rounded-sm p-8">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
                >
                  {f.model}
                </div>
                <p className="text-sm text-white/65 leading-relaxed mb-4">{f.desc}</p>
                <p className="text-xs text-white/35">{f.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
