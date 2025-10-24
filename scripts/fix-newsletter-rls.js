/**
 * Fix Newsletter RLS Policies
 * Allows public (anonymous) users to subscribe
 */

const { Client } = require('pg');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const connectionString = process.env.POSTGRES_URL_NON_POOLING;

async function fixPolicies() {
  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    console.log('🔌 Connecting to database...\n');
    await client.connect();
    console.log('✅ Connected!\n');

    console.log('🔧 Fixing RLS policies for newsletter_subscribers...\n');

    // Drop ALL existing policies
    await client.query(`
      DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Anyone can update their subscription" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Admins can read all subscribers" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Public can update subscription" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Admins can read subscribers" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Public newsletter signup" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Public newsletter unsubscribe" ON newsletter_subscribers;
      DROP POLICY IF EXISTS "Admin read subscribers" ON newsletter_subscribers;
    `);

    console.log('✅ Dropped old policies\n');

    // Create new policies that allow public access
    await client.query(`
      -- Allow ANYONE (including anonymous) to insert
      CREATE POLICY "Public newsletter signup"
        ON newsletter_subscribers
        FOR INSERT
        WITH CHECK (true);

      -- Allow ANYONE to update (for unsubscribe)
      CREATE POLICY "Public newsletter unsubscribe"
        ON newsletter_subscribers
        FOR UPDATE
        USING (true)
        WITH CHECK (true);

      -- Only authenticated admins can read
      CREATE POLICY "Admin read subscribers"
        ON newsletter_subscribers
        FOR SELECT
        TO authenticated
        USING (true);
    `);

    console.log('✅ Created new policies\n');

    // Verify policies
    const result = await client.query(`
      SELECT policyname, cmd, qual, with_check
      FROM pg_policies
      WHERE tablename = 'newsletter_subscribers';
    `);

    console.log('📋 Current policies:');
    result.rows.forEach(row => {
      console.log(`   - ${row.policyname} (${row.cmd})`);
    });

    console.log('\n🎉 Newsletter RLS policies fixed!');
    console.log('   Public users can now subscribe to the newsletter.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
fixPolicies();
