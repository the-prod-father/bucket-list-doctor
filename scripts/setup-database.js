/**
 * Database Setup Script
 * Executes the schema.sql file to create all tables and policies
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const connectionString = process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
  console.error('❌ Missing POSTGRES_URL_NON_POOLING environment variable!');
  console.error('Make sure .env.local is configured with your Supabase credentials');
  process.exit(1);
}

async function setupDatabase() {
  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('🔌 Connecting to Supabase...\n');
    await client.connect();
    console.log('✅ Connected successfully!\n');

    // Read the schema file
    const schemaPath = path.join(__dirname, '../supabase/schema.sql');
    console.log(`📝 Reading schema from: ${schemaPath}\n`);
    const schema = fs.readFileSync(schemaPath, 'utf8');

    console.log('🚀 Executing database schema...\n');
    console.log('='.repeat(60));

    // Execute the entire schema
    await client.query(schema);

    console.log('='.repeat(60));
    console.log('\n🎉 Database schema executed successfully!\n');

    // Verify tables were created
    console.log('🔍 Verifying tables...\n');
    const result = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name IN ('users', 'newsletter_subscribers', 'blog_posts')
      ORDER BY table_name;
    `);

    if (result.rows.length > 0) {
      console.log('✅ Tables created:');
      result.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
      });
    } else {
      console.log('⚠️  No tables found. There may have been an issue.');
    }

    console.log('\n✨ Database is ready to use!');

  } catch (err) {
    console.error('\n❌ Error setting up database:');
    console.error(err.message);
    console.error('\nFull error:', err);
    process.exit(1);
  } finally {
    await client.end();
    console.log('\n🔌 Database connection closed.');
  }
}

setupDatabase();
