# Backend Developer Subagent

## Role
Implements server-side logic, database schemas, API endpoints, and authentication for the newsletter template.

## Responsibilities

### Database Design
- Schema for blog posts, media, subscribers
- Relationships and indexes
- Migrations and versioning

### API Development
- RESTful API routes for CRUD operations
- File upload handling
- Authentication middleware
- Input validation and sanitization

### Authentication
- Simple credential-based auth (username/password)
- Session management
- Protected routes
- Password hashing

### Integration
- Supabase setup and configuration
- Email service integration (Resend/SendGrid)
- File storage (Vercel Blob or Supabase Storage)

## Database Schema

### Posts Table
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title TEXT,
  seo_description TEXT,
  author_id UUID REFERENCES users(id)
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(published, published_at DESC);
```

### Media Table
```sql
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER,
  uploaded_by UUID REFERENCES users(id)
);
```

### Subscribers Table
```sql
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_subscribers_email ON subscribers(email);
```

### Users Table (Admin)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  name TEXT
);
```

## API Routes

### Posts
- `GET /api/posts` - List all posts (public: published only, admin: all)
- `GET /api/posts/[slug]` - Get single post by slug
- `POST /api/posts` - Create new post (admin)
- `PUT /api/posts/[id]` - Update post (admin)
- `DELETE /api/posts/[id]` - Delete post (admin)

### Media
- `GET /api/media` - List all media (admin)
- `POST /api/media` - Upload media (admin)
- `DELETE /api/media/[id]` - Delete media (admin)

### Subscribers
- `POST /api/subscribe` - Add subscriber (public)
- `POST /api/unsubscribe` - Unsubscribe (public)
- `GET /api/subscribers` - List subscribers (admin)
- `POST /api/subscribers/export` - Export subscribers CSV (admin)

### Newsletter
- `POST /api/newsletter/send` - Send newsletter to all subscribers (admin)

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/session` - Get current session

## Authentication Implementation

### Using NextAuth.js with Credentials

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Verify credentials against database
        // Return user object if valid
      }
    })
  ],
  pages: {
    signIn: '/admin/login'
  },
  callbacks: {
    async session({ session, token }) {
      // Add user ID to session
      return session
    }
  }
})

export { handler as GET, handler as POST }
```

## File Upload Strategy

### Using Vercel Blob
```typescript
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  const form = await request.formData()
  const file = form.get('file') as File

  const blob = await put(file.name, file, {
    access: 'public',
  })

  // Save blob.url to database
  return Response.json({ url: blob.url })
}
```

## Email Newsletter Implementation

### Using Resend
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendNewsletter(postId: string) {
  const post = await getPost(postId)
  const subscribers = await getActiveSubscribers()

  await resend.emails.send({
    from: 'newsletter@yourdomain.com',
    to: subscribers.map(s => s.email),
    subject: post.title,
    html: renderNewsletterTemplate(post)
  })
}
```

## Security Checklist
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention (use parameterized queries)
- [ ] XSS prevention (sanitize HTML content)
- [ ] CSRF protection
- [ ] Rate limiting on public endpoints
- [ ] Secure password hashing (bcrypt)
- [ ] Environment variables for secrets
- [ ] HTTPS only in production

## Lessons from Bucket List Doctor

### What Worked
- Supabase for newsletter subscribers
- Graceful degradation when services not configured

### What Didn't Work
-

### Improvements for Template
- Add proper admin authentication
- More robust error handling
- Better database schema design
