/**
 * Fix Newsletter RLS Policies - Allow ANON role
 * This is critical for Supabase client inserts
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

    console.log('🔧 Fixing RLS policies for ANON role...\n');

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

    console.log('✅ Dropped all old policies\n');

    // Create new policies that explicitly allow ANON role
    await client.query(`
      -- Allow ANON role to insert (for Supabase client)
      CREATE POLICY "anon_insert_newsletter"
        ON newsletter_subscribers
        FOR INSERT
        TO anon
        WITH CHECK (true);

      -- Allow ANON role to update (for unsubscribe)
      CREATE POLICY "anon_update_newsletter"
        ON newsletter_subscribers
        FOR UPDATE
        TO anon
        USING (true)
        WITH CHECK (true);

      -- Allow authenticated users to read
      CREATE POLICY "authenticated_read_newsletter"
        ON newsletter_subscribers
        FOR SELECT
        TO authenticated
        USING (true);

      -- Allow service role full access
      CREATE POLICY "service_role_all_newsletter"
        ON newsletter_subscribers
        FOR ALL
        TO service_role
        USING (true)
        WITH CHECK (true);
    `);

    console.log('✅ Created new policies for ANON role\n');

    // Verify policies
    const result = await client.query(`
      SELECT policyname, cmd, roles::text[]
      FROM pg_policies
      WHERE tablename = 'newsletter_subscribers'
      ORDER BY policyname;
    `);

    console.log('📋 Current policies:');
    result.rows.forEach(row => {
      console.log(`   - ${row.policyname} (${row.cmd}) for roles: ${row.roles}`);
    });

    console.log('\n🎉 Newsletter RLS policies fixed for ANON role!');
    console.log('   Public users can now subscribe via Supabase client.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
fixPolicies();
