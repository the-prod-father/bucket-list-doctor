import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { Client } from 'pg';

// PostgreSQL client
function getClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Please enter username and password');
        }

        const client = getClient();

        try {
          await client.connect();

          // Find user by username
          const result = await client.query(
            'SELECT * FROM users WHERE username = $1 AND is_active = true',
            [credentials.username]
          );

          const user = result.rows[0];

          if (!user) {
            throw new Error('Invalid username or password');
          }

          // Verify password
          const isValid = await bcrypt.compare(credentials.password, user.password_hash);

          if (!isValid) {
            throw new Error('Invalid username or password');
          }

          // Update last login
          await client.query(
            'UPDATE users SET last_login_at = NOW() WHERE id = $1',
            [user.id]
          );

          // Return user object (will be stored in session)
          return {
            id: user.id,
            name: user.display_name,
            email: user.email,
            role: user.role,
            username: user.username,
          };
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
        } finally {
          await client.end();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to token on sign in
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data to session from token
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
};
