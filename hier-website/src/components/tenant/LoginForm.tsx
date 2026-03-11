'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'forgot'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setStatus('error')
      setMessage(error.message)
    } else {
      router.push('/tenant-portal/dashboard')
    }
  }

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/tenant-portal?reset=true`,
    })
    if (error) {
      setStatus('error')
      setMessage(error.message)
    } else {
      setStatus('success')
      setMessage('Check your email for a password reset link.')
    }
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-sm outline-none focus:border-[#C9902A] transition-colors'

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-sm p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(201,144,42,0.15)', border: '2px solid rgba(201,144,42,0.3)' }}
          >
            <svg className="w-6 h-6" style={{ color: 'var(--color-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {mode === 'login' ? 'Tenant Login' : 'Reset Password'}
          </h2>
          <p className="text-sm text-white/45 mt-1">
            {mode === 'login' ? 'Access your tenant dashboard' : 'We\'ll send you a reset link'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={mode === 'login' ? handleLogin : handleForgot} className="space-y-4">
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2 text-white/50">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          {mode === 'login' && (
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2 text-white/50">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </div>
          )}

          {message && (
            <p className={`text-sm px-3 py-2 rounded-sm ${status === 'error' ? 'text-red-400 bg-red-400/10' : 'text-green-400 bg-green-400/10'}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 text-sm font-semibold tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-60 rounded-sm"
            style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
          >
            {status === 'loading' ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Send Reset Link'}
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-6 text-center">
          {mode === 'login' ? (
            <button
              onClick={() => { setMode('forgot'); setMessage(''); setStatus('idle') }}
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Forgot your password?
            </button>
          ) : (
            <button
              onClick={() => { setMode('login'); setMessage(''); setStatus('idle') }}
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              ← Back to sign in
            </button>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            Not a tenant? <a href="/contact" className="text-[#C9902A] hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  )
}
