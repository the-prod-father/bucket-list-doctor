import { Client } from 'pg';

// Allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export interface RetryOptions {
  maxRetries?: number;
  delayMs?: number;
  backoffMultiplier?: number;
}

const DEFAULT_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  delayMs: 500,
  backoffMultiplier: 2,
};

/**
 * Get the appropriate database connection string
 *
 * REVERT INSTRUCTIONS:
 * If pooled connections cause issues, set USE_POOLED_DB=false in Vercel env vars
 * This instantly reverts to direct connections without a code deploy
 *
 * Pooled (port 6543): Faster, reuses connections, ideal for serverless
 * Non-pooled (port 5432): Direct connections, needed for migrations/transactions
 */
function getConnectionString(): string {
  const usePooled = process.env.USE_POOLED_DB !== 'false'; // Default: true (pooled)

  if (usePooled && process.env.POSTGRES_URL) {
    console.log('[DB] Using pooled connection (PgBouncer)');
    return process.env.POSTGRES_URL;
  }

  console.log('[DB] Using direct connection (non-pooled)');
  return process.env.POSTGRES_URL_NON_POOLING || '';
}

/**
 * Creates a PostgreSQL client with SSL configured
 */
export function createClient(): Client {
  return new Client({
    connectionString: getConnectionString(),
    ssl: { rejectUnauthorized: false },
  });
}

/**
 * Executes a database query with retry logic
 * Automatically handles connection, retries on failure, and cleanup
 */
export async function withRetry<T>(
  queryFn: (client: Client) => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries, delayMs, backoffMultiplier } = { ...DEFAULT_OPTIONS, ...options };

  let lastError: Error | null = null;
  let currentDelay = delayMs;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const client = createClient();

    try {
      await client.connect();
      const result = await queryFn(client);
      await client.end();
      return result;
    } catch (error) {
      lastError = error as Error;

      // Always try to close the connection
      try {
        await client.end();
      } catch {
        // Ignore cleanup errors
      }

      // Log the retry attempt
      console.error(
        `Database query failed (attempt ${attempt}/${maxRetries}):`,
        lastError.message
      );

      // Don't wait after the last attempt
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, currentDelay));
        currentDelay *= backoffMultiplier;
      }
    }
  }

  // All retries exhausted
  console.error('All database retry attempts exhausted:', lastError?.message);
  throw lastError;
}

/**
 * Executes a database query with retry logic and returns null on failure
 * Useful for pages that should show gracefully degraded content on DB errors
 */
export async function withRetryOrNull<T>(
  queryFn: (client: Client) => Promise<T>,
  options: RetryOptions = {}
): Promise<T | null> {
  try {
    return await withRetry(queryFn, options);
  } catch (error) {
    console.error('Database query failed after all retries:', error);
    return null;
  }
}

/**
 * Executes a database query with retry logic and returns empty array on failure
 * Useful for listing pages that should show empty state on DB errors
 */
export async function withRetryOrEmpty<T>(
  queryFn: (client: Client) => Promise<T[]>,
  options: RetryOptions = {}
): Promise<T[]> {
  try {
    return await withRetry(queryFn, options);
  } catch (error) {
    console.error('Database query failed after all retries:', error);
    return [];
  }
}
