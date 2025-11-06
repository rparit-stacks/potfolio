# Supabase Setup Instructions

## 1. Install Supabase Client

Run the following command to install the Supabase client:

```bash
pnpm add @supabase/supabase-js
```

## 2. Create .env.local File

Create a `.env.local` file in the root directory with the following content:

```
NEXT_PUBLIC_SUPABASE_URL=https://mjhosmipbejeqbypxzrj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qaG9zbWlwYmVqZXFieXB4enJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0Mjk3NjIsImV4cCI6MjA3ODAwNTc2Mn0.ql2NSZY5w1qLk-SAB39rl5cVSpijT34OJLIE_jnrzlI
```

## 3. Run SQL Schema in Supabase

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: `myportfoplio`
3. Go to SQL Editor
4. Copy and paste the contents of `supabase-schema.sql`
5. Run the SQL script

This will create:
- `contacts` table - for storing form submissions
- `visits` table - for tracking website visits (IP address, timestamp, etc.)
- `resume_settings` table - for storing resume download link

## 4. Update Resume URL

After creating the tables, update the resume URL in Supabase:

1. Go to Table Editor in Supabase dashboard
2. Select `resume_settings` table
3. Update the `resume_url` field with your actual resume PDF URL
   - You can upload your resume to Supabase Storage or use any public URL

## 5. Features Implemented

✅ **Contact Form**: Submits to Supabase `contacts` table
✅ **Visit Tracking**: Automatically tracks website visits with IP address and timestamp
✅ **Resume Download**: Button in hero section that fetches resume URL from Supabase

## Database Schema

### contacts
- `id` (UUID, Primary Key)
- `name` (TEXT)
- `email` (TEXT)
- `message` (TEXT)
- `created_at` (TIMESTAMP)

### visits
- `id` (UUID, Primary Key)
- `ip_address` (TEXT)
- `user_agent` (TEXT)
- `visited_at` (TIMESTAMP)
- `page_url` (TEXT)
- `referrer` (TEXT)

### resume_settings
- `id` (UUID, Primary Key)
- `resume_url` (TEXT)
- `updated_at` (TIMESTAMP)

## Security

Row Level Security (RLS) is enabled on all tables:
- Public can insert into `contacts` and `visits`
- Public can read from `resume_settings`
- Only authenticated users can read from `contacts` and `visits`
- Only authenticated users can update `resume_settings`

