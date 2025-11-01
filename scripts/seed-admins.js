/**
 * Seed Admin Accounts
 * Creates Dr. D and Prod Father admin accounts in the database
 */

const { Client } = require('pg');
const bcrypt = require('bcryptjs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const connectionString = process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
  console.error('❌ Missing POSTGRES_URL_NON_POOLING environment variable!');
  process.exit(1);
}

// Admin account credentials
const admins = [
  {
    username: 'Dr. D',
    password: 'bucketlistking',
    display_name: 'Dr. Jeffrey DeSarbo',
    email: 'drdbucketlist@gmail.com',
    role: 'admin'
  },
  {
    username: 'prodfather',
    password: 'whynotus',
    display_name: 'Prod Father',
    email: 'greg@whynotus.ai',
    role: 'super_admin'
  }
];

async function seedAdmins() {
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

    console.log('👤 Creating admin accounts...\n');
    console.log('='.repeat(60));

    for (const admin of admins) {
      console.log(`\n🔐 Creating account for: ${admin.display_name}`);
      console.log(`   Username: ${admin.username}`);
      console.log(`   Role: ${admin.role}`);

      // Hash the password
      const passwordHash = await bcrypt.hash(admin.password, 10);

      try {
        // Insert or update the user
        const result = await client.query(`
          INSERT INTO users (username, password_hash, display_name, email, role)
          VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT (username)
          DO UPDATE SET
            password_hash = EXCLUDED.password_hash,
            display_name = EXCLUDED.display_name,
            email = EXCLUDED.email,
            role = EXCLUDED.role,
            updated_at = NOW()
          RETURNING id, username, role;
        `, [admin.username, passwordHash, admin.display_name, admin.email, admin.role]);

        console.log(`   ✅ Account created/updated`);
        console.log(`   ID: ${result.rows[0].id}`);
      } catch (err) {
        console.error(`   ❌ Error: ${err.message}`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n🎉 Admin accounts seeded successfully!\n');

    // Show all users
    console.log('📋 Current admin users:');
    const users = await client.query(`
      SELECT username, display_name, role, email, created_at
      FROM users
      ORDER BY created_at;
    `);

    console.table(users.rows);

    console.log('\n✨ You can now log in with these credentials:');
    console.log('\n   Dr. D:');
    console.log('   - Username: Dr. D');
    console.log('   - Password: bucketlistking');
    console.log('\n   Prod Father (Super Admin):');
    console.log('   - Username: prodfather');
    console.log('   - Password: whynotus');

  } catch (err) {
    console.error('\n❌ Error seeding admin accounts:');
    console.error(err.message);
    console.error('\nFull error:', err);
    process.exit(1);
  } finally {
    await client.end();
    console.log('\n🔌 Database connection closed.');
  }
}

// Set environment variable to ignore TLS cert issues
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

seedAdmins();
