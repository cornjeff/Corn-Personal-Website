'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { MaintenanceRequest, STATUS_LABELS, ISSUE_TYPE_LABELS, URGENCY_LABELS } from '@/lib/types'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'

const statusColors: Record<string, string> = {
  submitted: 'rgba(201,144,42,0.15)',
  in_review: 'rgba(59,130,246,0.15)',
  scheduled: 'rgba(139,92,246,0.15)',
  resolved: 'rgba(34,197,94,0.15)',
}

const statusTextColors: Record<string, string> = {
  submitted: '#C9902A',
  in_review: '#60a5fa',
  scheduled: '#a78bfa',
  resolved: '#4ade80',
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [requests, setRequests] = useState<MaintenanceRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/tenant-portal')
        return
      }
      setUser(session.user)

      const { data } = await supabase
        .from('maintenance_requests')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(20)

      setRequests(data || [])
      setLoading(false)
    }
    loadDashboard()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/tenant-portal')
  }

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--color-forest)' }}
      >
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#C9902A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm">Loading your dashboard…</p>
        </div>
      </div>
    )
  }

  const open = requests.filter(r => r.status !== 'resolved')
  const resolved = requests.filter(r => r.status === 'resolved')

  return (
    <div style={{ background: 'var(--color-forest)', minHeight: '100vh' }} className="pt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <div className="divider-gold mb-4" />
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Tenant Dashboard
            </h1>
            <p className="text-sm text-white/40 mt-1">{user?.email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/tenant-portal/maintenance"
              className="px-5 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-sm transition-all hover:opacity-90"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              + New Request
            </Link>
            <button
              onClick={handleSignOut}
              className="px-5 py-2.5 text-sm font-medium tracking-wide rounded-sm border transition-colors hover:bg-white/5 text-white/60"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Open Requests', value: open.length, color: 'var(--color-gold)' },
            { label: 'Total Requests', value: requests.length, color: 'rgba(255,255,255,0.7)' },
            { label: 'Resolved', value: resolved.length, color: '#4ade80' },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-sm p-5 text-center">
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-display)', color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/35 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Requests list */}
        {requests.length === 0 ? (
          <div className="glass-card rounded-sm p-12 text-center">
            <p className="text-white/40 mb-6">No maintenance requests yet.</p>
            <Link
              href="/tenant-portal/maintenance"
              className="inline-flex px-6 py-3 text-sm font-semibold uppercase rounded-sm"
              style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
            >
              Submit Your First Request
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Maintenance Requests</h2>
            {requests.map((req) => (
              <div key={req.id} className="glass-card rounded-sm p-5 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: statusColors[req.status] || 'rgba(255,255,255,0.1)',
                          color: statusTextColors[req.status] || 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {STATUS_LABELS[req.status]}
                      </span>
                      <span className="text-xs text-white/30">
                        {ISSUE_TYPE_LABELS[req.issue_type]} · {URGENCY_LABELS[req.urgency]}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 font-medium">{req.property_address}{req.unit_number ? `, Unit ${req.unit_number}` : ''}</p>
                    <p className="text-sm text-white/45 mt-1 line-clamp-2">{req.description}</p>
                  </div>
                  <div className="text-xs text-white/25 flex-shrink-0">
                    {new Date(req.submitted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
