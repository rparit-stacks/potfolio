-- Create contacts table for form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create visits table for tracking website visits
CREATE TABLE IF NOT EXISTS visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT,
  user_agent TEXT,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  page_url TEXT,
  referrer TEXT
);

-- Create resume_settings table for storing resume download link
CREATE TABLE IF NOT EXISTS resume_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  resume_url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert default resume link (update this with your actual resume URL)
INSERT INTO resume_settings (resume_url) 
VALUES ('https://your-resume-url.com/resume.pdf')
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts (allow insert for everyone, read only for authenticated)
CREATE POLICY "Allow public insert on contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for visits (allow insert for everyone, read only for authenticated)
CREATE POLICY "Allow public insert on visits" ON visits
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read on visits" ON visits
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for resume_settings (allow read for everyone, update only for authenticated)
CREATE POLICY "Allow public read on resume_settings" ON resume_settings
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated update on resume_settings" ON resume_settings
  FOR UPDATE USING (auth.role() = 'authenticated');

