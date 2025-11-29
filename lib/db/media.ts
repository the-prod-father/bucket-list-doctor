import { Client } from 'pg';

function getClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

export interface MediaAppearance {
  id: string;
  name: string;
  logo_url: string;
  type: 'radio' | 'tv' | 'print' | 'online' | 'podcast';
  gradient: string;
  display_order: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CreateMediaAppearanceInput {
  name: string;
  logo_url: string;
  type: 'radio' | 'tv' | 'print' | 'online' | 'podcast';
  gradient?: string;
  display_order?: number;
  is_active?: boolean;
}

export interface UpdateMediaAppearanceInput {
  name?: string;
  logo_url?: string;
  type?: 'radio' | 'tv' | 'print' | 'online' | 'podcast';
  gradient?: string;
  display_order?: number;
  is_active?: boolean;
}

export async function getAllMediaAppearances(): Promise<MediaAppearance[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM media_appearances ORDER BY display_order ASC, created_at DESC'
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

export async function getActiveMediaAppearances(): Promise<MediaAppearance[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM media_appearances WHERE is_active = true ORDER BY display_order ASC, created_at DESC'
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

export async function getMediaAppearanceById(id: string): Promise<MediaAppearance | null> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM media_appearances WHERE id = $1', [id]);
    return result.rows[0] || null;
  } finally {
    await client.end();
  }
}

export async function createMediaAppearance(input: CreateMediaAppearanceInput): Promise<MediaAppearance> {
  const client = getClient();
  try {
    await client.connect();

    // Get max display_order if not provided
    let displayOrder = input.display_order;
    if (displayOrder === undefined) {
      const maxResult = await client.query(
        'SELECT COALESCE(MAX(display_order), 0) as max_order FROM media_appearances'
      );
      displayOrder = (maxResult.rows[0].max_order || 0) + 1;
    }

    const result = await client.query(
      `INSERT INTO media_appearances (
        name, logo_url, type, gradient, display_order, is_active
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        input.name,
        input.logo_url,
        input.type,
        input.gradient || 'from-gray-500 to-gray-600',
        displayOrder,
        input.is_active !== undefined ? input.is_active : true,
      ]
    );

    return result.rows[0];
  } finally {
    await client.end();
  }
}

export async function updateMediaAppearance(
  id: string,
  input: UpdateMediaAppearanceInput
): Promise<MediaAppearance | null> {
  const client = getClient();
  try {
    await client.connect();

    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (input.name !== undefined) {
      updates.push(`name = $${paramCount++}`);
      values.push(input.name);
    }
    if (input.logo_url !== undefined) {
      updates.push(`logo_url = $${paramCount++}`);
      values.push(input.logo_url);
    }
    if (input.type !== undefined) {
      updates.push(`type = $${paramCount++}`);
      values.push(input.type);
    }
    if (input.gradient !== undefined) {
      updates.push(`gradient = $${paramCount++}`);
      values.push(input.gradient);
    }
    if (input.display_order !== undefined) {
      updates.push(`display_order = $${paramCount++}`);
      values.push(input.display_order);
    }
    if (input.is_active !== undefined) {
      updates.push(`is_active = $${paramCount++}`);
      values.push(input.is_active);
    }

    if (updates.length === 0) {
      return await getMediaAppearanceById(id);
    }

    updates.push(`updated_at = NOW()`);
    values.push(id);

    const result = await client.query(
      `UPDATE media_appearances
       SET ${updates.join(', ')}
       WHERE id = $${paramCount}
       RETURNING *`,
      values
    );

    return result.rows[0] || null;
  } finally {
    await client.end();
  }
}

export async function deleteMediaAppearance(id: string): Promise<boolean> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query('DELETE FROM media_appearances WHERE id = $1', [id]);
    return result.rowCount !== null && result.rowCount > 0;
  } finally {
    await client.end();
  }
}








