'use client'

import { useState } from 'react'
import { SERVICE_OPTIONS } from '@/lib/types'

interface ContactFormProps {
  dark?: boolean
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const inputClass = `w-full px-4 py-3 text-sm rounded-sm outline-none transition-colors ${
    dark
      ? 'bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#C9902A]'
      : 'bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1F24] placeholder-gray-400 focus:border-[#C9902A]'
  }`

  const labelClass = `block text-xs tracking-[0.15em] uppercase font-medium mb-2 ${dark ? 'text-white/50' : 'text-[#6B7280]'}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or call us directly at (303) 688-3105.')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(201,144,42,0.15)' }}
        >
          <svg className="w-6 h-6" style={{ color: 'var(--color-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className={`text-xl font-semibold mb-2 ${dark ? 'text-white' : ''}`}
          style={{ fontFamily: 'var(--font-display)', color: dark ? undefined : 'var(--color-charcoal)' }}
        >
          Message Received
        </h3>
        <p className={`text-sm ${dark ? 'text-white/55' : ''}`} style={{ color: dark ? undefined : 'var(--color-muted)' }}>
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="(303) 555-0100"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Area of Interest</label>
          <select
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
            className={inputClass}
            style={{ cursor: 'pointer' }}
          >
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project or inquiry…"
          className={inputClass}
          style={{ resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
