-- Fix Newsletter Subscriber RLS Policies
-- This script fixes the row-level security to allow public signups

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Anyone can update their subscription" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can read all subscribers" ON newsletter_subscribers;

-- Recreate policies with correct permissions
-- Allow anyone (even unauthenticated) to insert
CREATE POLICY "Public can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update their subscription (for unsubscribe)
CREATE POLICY "Public can update subscription"
  ON newsletter_subscribers FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Only authenticated admins can read all subscribers
CREATE POLICY "Admins can read subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role IN ('admin', 'super_admin')
    )
  );
