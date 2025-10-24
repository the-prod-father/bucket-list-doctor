/**
 * Disable RLS on newsletter_subscribers table
 * Simple solution - table should be publicly writable
 */

const { Client } = require('pg');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const connectionString = process.env.POSTGRES_URL_NON_POOLING;

async function disableRLS() {
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

    console.log('🔧 Disabling RLS on newsletter_subscribers...\n');

    // Disable RLS entirely
    await client.query(`
      ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;
    `);

    console.log('✅ RLS disabled on newsletter_subscribers table\n');

    // Verify
    const result = await client.query(`
      SELECT tablename, rowsecurity
      FROM pg_tables
      WHERE tablename = 'newsletter_subscribers';
    `);

    console.log('📋 Table status:');
    console.log(`   RLS enabled: ${result.rows[0].rowsecurity}`);

    console.log('\n🎉 Newsletter table is now publicly accessible!');
    console.log('   Anyone can subscribe without authentication.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
disableRLS();
