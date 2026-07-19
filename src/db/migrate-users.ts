import { sql } from '../db';

async function main() {
  console.log('Creating users & sessions tables...');

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      stripe_customer_id VARCHAR(255),
      subscription_tier VARCHAR(50) DEFAULT 'free',
      subscription_status VARCHAR(50) DEFAULT 'inactive',
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    )
  `;
  console.log('✓ users table ready');

  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      token VARCHAR(255) UNIQUE NOT NULL,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    )
  `;
  console.log('✓ sessions table ready');

  const tables = await sql`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public' ORDER BY table_name
  `;
  console.log('Existing tables:', tables.map((r: any) => r.table_name).join(', '));
  console.log('Done!');
}

main().catch(console.error);
