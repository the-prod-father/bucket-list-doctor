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

export interface Subscriber {
  id: string;
  email: string;
  subscribed: boolean;
  created_at: Date;
  updated_at: Date;
  source: string;
  unsubscribed_at: Date | null;
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM newsletter_subscribers ORDER BY created_at DESC'
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

export async function getActiveSubscribers(): Promise<Subscriber[]> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'SELECT * FROM newsletter_subscribers WHERE subscribed = true ORDER BY created_at DESC'
    );
    return result.rows;
  } finally {
    await client.end();
  }
}

export async function getSubscriberCount(): Promise<{ total: number; active: number }> {
  const client = getClient();
  try {
    await client.connect();
    const totalResult = await client.query('SELECT COUNT(*) FROM newsletter_subscribers');
    const activeResult = await client.query(
      'SELECT COUNT(*) FROM newsletter_subscribers WHERE subscribed = true'
    );
    return {
      total: parseInt(totalResult.rows[0].count),
      active: parseInt(activeResult.rows[0].count),
    };
  } finally {
    await client.end();
  }
}

export async function unsubscribeEmail(email: string): Promise<boolean> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      `UPDATE newsletter_subscribers
       SET subscribed = false, unsubscribed_at = NOW()
       WHERE email = $1
       RETURNING id`,
      [email]
    );
    return result.rowCount ? result.rowCount > 0 : false;
  } finally {
    await client.end();
  }
}

export async function deleteSubscriber(id: string): Promise<boolean> {
  const client = getClient();
  try {
    await client.connect();
    const result = await client.query(
      'DELETE FROM newsletter_subscribers WHERE id = $1',
      [id]
    );
    return result.rowCount ? result.rowCount > 0 : false;
  } finally {
    await client.end();
  }
}
