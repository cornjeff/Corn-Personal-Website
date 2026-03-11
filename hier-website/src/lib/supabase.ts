import { createClient } from '@supabase/supabase-js'

// Browser client (for client components) — lazily initialized to avoid build-time errors
let _client: ReturnType<typeof createClient> | null = null

function getClient() {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
    )
  }
  return _client
}

// Proxy object — safe for module-level use, instantiates lazily
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (getClient() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

// Server client using service role (for API routes only — never expose to client)
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key',
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}
