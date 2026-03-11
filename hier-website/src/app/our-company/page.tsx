import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Our Company',
  description:
    'Hier & Company has been Castle Rock\'s trusted real estate partner since 1974. Learn about our history, our team, and our commitment to Douglas County and the Front Range.',
}

const team = [
  {
    name: 'Chris Toebe',
    title: 'Owner & President',
    bio: 'Chris leads Hier & Company with decades of hands-on experience across development, property management, and commercial brokerage. Under his leadership, the firm has grown from a local Castle Rock practice into one of Douglas County\'s most respected full-service real estate firms. His deep relationships with municipal officials, contractors, and investors are a cornerstone of what makes every Hier & Company engagement successful.',
    specialties: ['Real Estate Development', 'Strategic Leadership', 'Investor Relations'],
  },
  {
    name: 'Nick Hier',
    title: 'Vice President',
    bio: 'Nick brings a rigorous analytical approach to every project, overseeing financial underwriting, market analysis, and development feasibility across the firm\'s portfolio. A Castle Rock native, Nick\'s understanding of Douglas County\'s growth trajectory and land use dynamics is unparalleled. He works closely with clients on the numbers that drive confident investment decisions.',
    specialties: ['Financial Analysis', 'Development Oversight', 'Market Research'],
  },
  {
    name: 'Brandon Belk',
    title: 'Real Estate Broker',
    bio: 'Brandon is the firm\'s commercial brokerage specialist, with deep expertise in industrial, office, and multi-family properties across the Denver Metro and Colorado Springs markets. He brings a transactional and market intelligence perspective that helps clients identify opportunities ahead of the market and execute with precision.',
    specialties: ['Industrial & Office', 'Multi-Family', 'Denver & Colorado Springs Markets'],
    contact: { phone: '(303) 501-7959', email: '' },
  },
  {
    name: 'Daniel Connolly',
    title: 'Associate',
    bio: 'Daniel supports the firm across brokerage, property management, and client services. His versatility and attention to detail ensure that clients receive responsive, consistent support across all facets of their relationship with Hier & Company.',
    specialties: ['Client Services', 'Property Operations', 'Transaction Support'],
  },
]

const timeline = [
  { year: '1974', event: 'Hier & Company founded in Castle Rock, Colorado' },
  { year: '1980s', event: 'Expanded into commercial property management across Douglas County' },
  { year: '1990s', event: 'Grew development practice to include rural estate subdivisions and commercial parks' },
  { year: '2000s', event: 'Launched financial analysis and consulting practice; expanded brokerage team' },
  { year: '2010s', event: 'Established as one of Douglas County\'s premier full-service real estate firms' },
  { year: 'Today', event: '50+ years of experience, serving clients locally and across the Front Range' },
]

export default function OurCompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Company"
        title="Five Decades of"
        titleAccent="Castle Rock Real Estate"
        description="Since 1974, Hier & Company has been a cornerstone of Castle Rock's real estate landscape. We are a family-owned firm built on relationships, accountability, and an unwavering commitment to our clients and community."
      />

      {/* Story */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="A Family Firm,"
                titleAccent="Built to Last"
                subtitle="Hier & Company was founded in 1974 with a simple premise: deliver honest, expert real estate services with genuine accountability to every client."
              />
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                <p>
                  For over 50 years, we have served developers, investors, property owners, and tenants across Castle Rock, Douglas County, and the broader Front Range. We have watched this region grow from a small rural community into one of Colorado&apos;s most dynamic real estate markets — and we have been an active part of that growth.
                </p>
                <p>
                  What has never changed is our approach. We are a family-owned firm, which means our principals are personally invested in every client relationship. When you work with Hier &amp; Company, you work with decision-makers who have skin in the game — not account managers following a playbook.
                </p>
                <p>
                  Our 40+ years of focused presence in Douglas County has given us relationships and market knowledge that no national firm can replicate. We know the land, the regulators, the contractors, and the investors who shape this market. That local depth, combined with a full-service platform spanning development, management, brokerage, and financial analysis, is what sets us apart.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3
                className="text-lg font-semibold mb-8"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
              >
                Our History
              </h3>
              <div className="relative">
                <div
                  className="absolute left-[52px] top-0 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }}
                />
                <div className="space-y-6">
                  {timeline.map((t, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div
                        className="flex-shrink-0 w-24 text-right text-sm font-semibold"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)' }}
                      >
                        {t.year}
                      </div>
                      <div
                        className="flex-shrink-0 w-3 h-3 rounded-full mt-1 border-2"
                        style={{ background: 'var(--color-cream)', borderColor: 'var(--color-gold)' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        {t.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="py-24 lg:py-32 noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the People"
            titleAccent="Behind the Work"
            subtitle="Our small, senior-heavy team means you always work with experienced professionals who know your project and are personally accountable for results."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass-card rounded-sm p-8">
                {/* Placeholder avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-xl font-bold"
                  style={{
                    background: 'rgba(201,144,42,0.15)',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-display)',
                    border: '2px solid rgba(201,144,42,0.3)',
                  }}
                >
                  {/* Replace with <Image> tag when real headshots are available */}
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {member.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-gold)' }}>
                  {member.title}
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'rgba(201,144,42,0.1)', color: 'rgba(201,144,42,0.8)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {member.contact && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                    {member.contact.phone && <span>{member.contact.phone}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { value: 'Integrity', desc: 'We say what we mean and do what we say — every time.' },
              { value: 'Expertise', desc: '50+ years of real estate knowledge, applied to every engagement.' },
              { value: 'Responsiveness', desc: 'Front Range headquarters means fast answers and fast action.' },
              { value: 'Results', desc: 'Our track record across five decades speaks for itself.' },
            ].map((v, i) => (
              <div key={i} className="py-10 px-8 text-center" style={{ background: 'var(--color-charcoal)' }}>
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
                >
                  {v.value}
                </h4>
                <p className="text-sm text-white/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
