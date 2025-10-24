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

export interface BlogPost {
  id: string;
  created_at: Date;
  updated_at: Date;
  published_at: Date | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  meta_description: string | null;
  meta_keywords: string[] | null;
  view_count: number;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  author_id: string;
  status?: 'draft' | 'published';
  meta_description?: string;
  meta_keywords?: string[];
}

export interface UpdateBlogPostInput {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  featured_image_url?: string;
  status?: 'draft' | 'published' | 'archived';
  meta_description?: string;
  meta_keywords?: string[];
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Get all blog posts (admin view)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM blog_posts ORDER BY created_at DESC'
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

// Get published blog posts (public view)
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      `SELECT * FROM blog_posts
       WHERE status = 'published'
       ORDER BY published_at DESC`
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

// Get single blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM blog_posts WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  } finally {
    await client.end();
  }
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM blog_posts WHERE slug = $1',
      [slug]
    );
    return result.rows[0] || null;
  } finally {
    await client.end();
  }
}

// Create new blog post
export async function createBlogPost(input: CreateBlogPostInput): Promise<BlogPost> {
  const client = getClient();
  try {
    await client.connect();

    const publishedAt = input.status === 'published' ? 'NOW()' : 'NULL';

    const result = await client.query(
      `INSERT INTO blog_posts (
        title, slug, excerpt, content, featured_image_url,
        author_id, status, meta_description, meta_keywords,
        published_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, ${publishedAt})
      RETURNING *`,
      [
        input.title,
        input.slug,
        input.excerpt || null,
        input.content,
        input.featured_image_url || null,
        input.author_id,
        input.status || 'draft',
        input.meta_description || null,
        input.meta_keywords || null,
      ]
    );

    return result.rows[0];
  } finally {
    await client.end();
  }
}

// Update blog post
export async function updateBlogPost(
  id: string,
  input: UpdateBlogPostInput
): Promise<BlogPost | null> {
  const client = getClient();
  try {
    await client.connect();

    // Build dynamic update query
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (input.title !== undefined) {
      updates.push(`title = $${paramCount++}`);
      values.push(input.title);
    }
    if (input.slug !== undefined) {
      updates.push(`slug = $${paramCount++}`);
      values.push(input.slug);
    }
    if (input.excerpt !== undefined) {
      updates.push(`excerpt = $${paramCount++}`);
      values.push(input.excerpt);
    }
    if (input.content !== undefined) {
      updates.push(`content = $${paramCount++}`);
      values.push(input.content);
    }
    if (input.featured_image_url !== undefined) {
      updates.push(`featured_image_url = $${paramCount++}`);
      values.push(input.featured_image_url);
    }
    if (input.status !== undefined) {
      updates.push(`status = $${paramCount++}`);
      values.push(input.status);

      // Set published_at when changing to published
      if (input.status === 'published') {
        updates.push(`published_at = COALESCE(published_at, NOW())`);
      }
    }
    if (input.meta_description !== undefined) {
      updates.push(`meta_description = $${paramCount++}`);
      values.push(input.meta_description);
    }
    if (input.meta_keywords !== undefined) {
      updates.push(`meta_keywords = $${paramCount++}`);
      values.push(input.meta_keywords);
    }

    if (updates.length === 0) {
      return await getBlogPostById(id);
    }

    values.push(id);

    const result = await client.query(
      `UPDATE blog_posts
       SET ${updates.join(', ')}, updated_at = NOW()
       WHERE id = $${paramCount}
       RETURNING *`,
      values
    );

    return result.rows[0] || null;
  } finally {
    await client.end();
  }
}

// Delete blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'DELETE FROM blog_posts WHERE id = $1',
      [id]
    );
    return result.rowCount ? result.rowCount > 0 : false;
  } finally {
    await client.end();
  }
}

// Increment view count
export async function incrementViewCount(id: string): Promise<void> {
  const client = getClient();
  try {
    await client.connect();
    await client.query(
      'UPDATE blog_posts SET view_count = view_count + 1 WHERE id = $1',
      [id]
    );
  } finally {
    await client.end();
  }
}

// Get blog post count by status
export async function getBlogPostCounts(): Promise<{
  total: number;
  published: number;
  draft: number;
  archived: number;
}> {
  const client = getClient();
  try {
    await client.connect();

    const totalResult = await client.query('SELECT COUNT(*) FROM blog_posts');
    const publishedResult = await client.query(
      "SELECT COUNT(*) FROM blog_posts WHERE status = 'published'"
    );
    const draftResult = await client.query(
      "SELECT COUNT(*) FROM blog_posts WHERE status = 'draft'"
    );
    const archivedResult = await client.query(
      "SELECT COUNT(*) FROM blog_posts WHERE status = 'archived'"
    );

    return {
      total: parseInt(totalResult.rows[0].count),
      published: parseInt(publishedResult.rows[0].count),
      draft: parseInt(draftResult.rows[0].count),
      archived: parseInt(archivedResult.rows[0].count),
    };
  } finally {
    await client.end();
  }
}
