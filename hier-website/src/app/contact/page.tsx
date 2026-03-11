import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Hier & Company in Castle Rock, Colorado. Reach out about real estate development, property management, brokerage, or financial analysis services.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a"
        titleAccent="Conversation"
        description="Whether you're exploring a development opportunity, need a property management partner, or want expert analysis before committing capital — we'd like to hear from you."
      />

      <section className="py-24 lg:py-32" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
              >
                Get in Touch
              </h2>

              <div className="space-y-6">
                {[
                  {
                    label: 'Office',
                    content: (
                      <>
                        823 S. Perry Street, Suite 120<br />
                        Castle Rock, CO 80104
                      </>
                    ),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Phone',
                    content: <a href="tel:3036883105" style={{ color: 'var(--color-gold)' }}>(303) 688-3105</a>,
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Email',
                    content: (
                      <a href="mailto:info@hierandcompany.com" style={{ color: 'var(--color-gold)' }}>
                        info@hierandcompany.com
                      </a>
                    ),
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{ background: 'rgba(201,144,42,0.1)', color: 'var(--color-gold)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs tracking-wide uppercase font-medium mb-1" style={{ color: 'var(--color-muted)' }}>
                        {item.label}
                      </div>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder — replace with Google Maps embed */}
              <div
                className="mt-8 rounded-sm overflow-hidden flex items-center justify-center h-48 text-sm"
                style={{ background: 'var(--color-forest)', color: 'rgba(255,255,255,0.3)' }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2 opacity-40">📍</div>
                  <span className="text-xs tracking-wide uppercase opacity-40">Map — Castle Rock, CO</span>
                  <br />
                  <span className="text-xs opacity-30">Replace with Google Maps embed</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-3 p-8 lg:p-10 rounded-sm"
              style={{ background: 'var(--color-white)', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
              >
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
