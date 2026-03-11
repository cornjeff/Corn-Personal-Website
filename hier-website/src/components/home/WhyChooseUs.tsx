const pillars = [
  {
    number: '01',
    title: 'Deep Local Roots',
    body: 'Headquartered in Castle Rock since our founding, we have an unmatched understanding of Douglas County\'s land, regulations, market cycles, and key stakeholders. Our local network is your competitive advantage.',
  },
  {
    number: '02',
    title: 'Family-Owned Accountability',
    body: 'As a family-owned firm, our reputation is our most valuable asset. We don\'t pass projects between account managers — you work directly with principals who have a personal stake in your outcome.',
  },
  {
    number: '03',
    title: 'True Full-Service Capability',
    body: 'From acquisition analysis and entitlement through construction management, brokerage, and ongoing property management, we offer end-to-end execution under one roof. No coordination gaps. No hand-offs.',
  },
  {
    number: '04',
    title: 'Flexible Engagement Models',
    body: 'We structure our fees around your goals — hourly, project-based, or investment performance-based. Whether you need a single analysis or a fully-managed development partnership, we adapt to fit.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden noise-overlay"
      style={{ background: 'var(--color-forest)' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,144,42,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="divider-gold mb-6" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Developers &amp; Investors
            <br />
            <em className="font-normal" style={{ color: 'var(--color-gold-light)' }}>Choose Hier &amp; Company</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            In a market full of generalists, we bring focused expertise, genuine accountability, and 50 years of proven results across Colorado&apos;s most dynamic real estate corridor.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-sm overflow-hidden">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="glass-card p-8 lg:p-10 hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className="text-5xl font-bold mb-4 leading-none"
                style={{ fontFamily: 'var(--font-display)', color: 'rgba(201,144,42,0.25)' }}
              >
                {p.number}
              </div>
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
