import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// Allow self-signed certificates for Supabase connection
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
