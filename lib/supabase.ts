import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if Supabase is configured
export const isSupabaseReady = !!(supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('https://'))

// Create client - use real values if available, otherwise use placeholders
// Supabase client requires non-empty strings, so we provide valid format placeholders
const url = supabaseUrl || 'https://placeholder.supabase.co'
const key = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.placeholder'

if (!isSupabaseReady) {
  console.warn('Supabase environment variables are not set. Please check your .env.local file.')
}

export const supabase = createClient(url, key)

