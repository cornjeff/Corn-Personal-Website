import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-charcoal)', color: 'var(--color-muted-light)' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-xl font-bold tracking-widest text-white uppercase block"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hier <span style={{ color: 'var(--color-gold)' }}>&amp;</span> Company
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                Est. 1974 · Castle Rock, Colorado
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              A family-owned real estate firm serving Douglas County and the Front Range for over 50 years.
            </p>
            <div className="divider-gold"></div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {[
                ['Real Estate Development', '/services/development'],
                ['Property Management', '/services/property-management'],
                ['Commercial Brokerage', '/services/brokerage'],
                ['Financial Analysis', '/services/financial-analysis'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-[#C9902A] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                ['Our Story', '/our-company'],
                ['Our Team', '/our-company#team'],
                ['Portfolio', '/portfolio'],
                ['Tenant Portal', '/tenant-portal'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-[#C9902A] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Contact</h4>
            <address className="not-italic text-sm space-y-3 text-white/60">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-1">Address</div>
                823 S. Perry Street, Suite 120<br />
                Castle Rock, CO 80104
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-1">Phone</div>
                <a href="tel:3036883105" className="hover:text-[#C9902A] transition-colors">
                  (303) 688-3105
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-1">Email</div>
                <a href="mailto:info@hierandcompany.com" className="hover:text-[#C9902A] transition-colors">
                  info@hierandcompany.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {year} Hier &amp; Company, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Licensed Real Estate Broker · Colorado
          </p>
        </div>
      </div>
    </footer>
  )
}
