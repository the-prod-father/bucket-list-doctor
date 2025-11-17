-- Create media_appearances table for managing station call letters and media outlets
-- Run this migration to enable backend management of media appearances

CREATE TABLE IF NOT EXISTS media_appearances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  logo_url VARCHAR(500) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('radio', 'tv', 'print', 'online', 'podcast')),
  gradient VARCHAR(100) NOT NULL DEFAULT 'from-gray-500 to-gray-600',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for active media appearances
CREATE INDEX IF NOT EXISTS idx_media_appearances_active ON media_appearances(is_active, display_order);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_media_appearances_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_media_appearances_updated_at
  BEFORE UPDATE ON media_appearances
  FOR EACH ROW
  EXECUTE FUNCTION update_media_appearances_updated_at();

-- Insert initial data (current hardcoded media appearances)
INSERT INTO media_appearances (name, logo_url, type, gradient, display_order, is_active) VALUES
  ('Newsday', '/images/speaker/newsday-banner.png', 'print', 'from-blue-500 via-cyan-500 to-teal-500', 1, true),
  ('Doctor Radio / Sirius XM', '/images/speaker/doctor-radio-siriusxm.png', 'radio', 'from-purple-500 via-pink-500 to-red-500', 2, true),
  ('WJR Radio', '/images/speaker/wjr-radio-banner.png', 'radio', 'from-orange-500 via-red-500 to-pink-500', 3, true),
  ('KOA Radio', '/images/speaker/koa-radio-banner.png', 'radio', 'from-green-500 via-emerald-500 to-cyan-500', 4, true),
  ('iHeart Radio', '/images/speaker/iheart-radio.png', 'radio', 'from-red-500 via-pink-500 to-purple-500', 5, true),
  ('WBZ News Radio', '/images/speaker/wbz-news-radio.png', 'radio', 'from-blue-500 via-indigo-500 to-purple-500', 6, true)
ON CONFLICT DO NOTHING;

