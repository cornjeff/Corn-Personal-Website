import type { Metadata } from 'next'
import MaintenanceForm from '@/components/tenant/MaintenanceForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Submit Maintenance Request | Tenant Portal',
  description: 'Submit a maintenance request for your Hier & Company managed property.',
}

export default function MaintenancePage() {
  return (
    <div style={{ background: 'var(--color-forest)', minHeight: '100vh' }} className="pt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/tenant-portal/dashboard"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="divider-gold mb-4" />
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Submit Maintenance Request
          </h1>
          <p className="text-sm text-white/45 mt-2">
            Our team will review your request and follow up within 1 business day.
            Emergency issues: call <a href="tel:3036883105" style={{ color: 'var(--color-gold)' }}>(303) 688-3105</a>.
          </p>
        </div>

        {/* Form card */}
        <div className="glass-card rounded-sm p-8">
          <MaintenanceForm />
        </div>
      </div>
    </div>
  )
}
