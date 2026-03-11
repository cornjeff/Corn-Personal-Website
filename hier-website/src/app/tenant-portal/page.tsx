import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import LoginForm from '@/components/tenant/LoginForm'

export const metadata: Metadata = {
  title: 'Tenant Portal',
  description: 'Hier & Company tenant portal — log in to access your dashboard and submit maintenance requests.',
}

export default function TenantPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Tenant Portal"
        title="Tenant"
        titleAccent="Dashboard Access"
        description="Welcome to the Hier & Company tenant portal. Log in to view your account, submit maintenance requests, and track their status."
      />

      <section
        className="py-20 lg:py-28 noise-overlay"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Info */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Your Portal,
                <em className="font-normal block" style={{ color: 'var(--color-gold-light)' }}>
                  Your Way
                </em>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                As a Hier &amp; Company tenant, your portal gives you direct access to submit and track maintenance requests, view your account information, and communicate with our property management team.
              </p>
              <ul className="space-y-3">
                {[
                  'Submit maintenance requests online, 24/7',
                  'Track the status of open and resolved requests',
                  'View your property and unit information',
                  'Communicate directly with your property manager',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(201,144,42,0.2)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/30">
                  Need help? Contact our property management team at{' '}
                  <a href="tel:3036883105" style={{ color: 'var(--color-gold)' }}>(303) 688-3105</a>
                  {' '}or{' '}
                  <a href="mailto:info@hierandcompany.com" style={{ color: 'var(--color-gold)' }}>
                    info@hierandcompany.com
                  </a>
                </p>
              </div>
            </div>

            {/* Login */}
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  )
}
