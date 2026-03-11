'use client'

import { useState } from 'react'
import { ISSUE_TYPE_LABELS, URGENCY_LABELS, IssueType, UrgencyLevel } from '@/lib/types'

export default function MaintenanceForm() {
  const [form, setForm] = useState({
    propertyAddress: '',
    unitNumber: '',
    issueType: '' as IssueType | '',
    description: '',
    urgency: '' as UrgencyLevel | '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-sm outline-none focus:border-[#C9902A] transition-colors'
  const labelClass = 'block text-xs tracking-[0.15em] uppercase font-medium mb-2 text-white/50'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('/api/maintenance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ propertyAddress: '', unitNumber: '', issueType: '', description: '', urgency: '' })
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or call (303) 688-3105.')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-10 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(201,144,42,0.15)' }}
        >
          <svg className="w-7 h-7" style={{ color: 'var(--color-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Request Submitted
        </h3>
        <p className="text-sm text-white/50 mb-6">
          Your maintenance request has been received. Our team will follow up within 1 business day for routine requests, or same-day for urgent and emergency issues.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-sm"
          style={{ background: 'rgba(201,144,42,0.15)', color: 'var(--color-gold)' }}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Property Address *</label>
          <input
            type="text"
            required
            value={form.propertyAddress}
            onChange={e => setForm({ ...form, propertyAddress: e.target.value })}
            placeholder="123 Main St, Castle Rock, CO"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Unit / Suite Number</label>
          <input
            type="text"
            value={form.unitNumber}
            onChange={e => setForm({ ...form, unitNumber: e.target.value })}
            placeholder="Unit 2A (if applicable)"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Issue Type *</label>
          <select
            required
            value={form.issueType}
            onChange={e => setForm({ ...form, issueType: e.target.value as IssueType })}
            className={inputClass}
          >
            <option value="">Select issue type…</option>
            {Object.entries(ISSUE_TYPE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Urgency *</label>
          <select
            required
            value={form.urgency}
            onChange={e => setForm({ ...form, urgency: e.target.value as UrgencyLevel })}
            className={inputClass}
          >
            <option value="">Select urgency…</option>
            {Object.entries(URGENCY_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Urgency note */}
      {form.urgency === 'emergency' && (
        <div className="px-4 py-3 rounded-sm text-sm" style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>
          <strong>Emergency?</strong> For life-safety emergencies call 911. For urgent maintenance emergencies, please also call us directly at <a href="tel:3036883105" className="underline">(303) 688-3105</a>.
        </div>
      )}

      <div>
        <label className={labelClass}>Description *</label>
        <textarea
          required
          rows={5}
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="Please describe the issue in detail — when it started, what you've observed, any relevant history…"
          className={inputClass}
          style={{ resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm transition-all hover:opacity-90 disabled:opacity-60"
        style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
      </button>
    </form>
  )
}
