// import { dev } from '$app/environment';
// import { drizzle } from 'drizzle-orm/libsql';
// import { createClient } from '@libsql/client';
// import * as schema from './schema';
// import { env } from '$env/dynamic/private';

// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
// if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

// const client = createClient({
// 	url: process.env.DATABASE_URL || 'file:local.db',
// 	// url: env.DATABASE_URL,
// 	authToken: env.DATABASE_AUTH_TOKEN
// });

// export const db = drizzle(client, { schema });


// src/lib/server/db.ts
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

// Detect if we're inside SvelteKit runtime (Vite app)
let skEnv: Record<string, string | undefined> = {};
let dev = false;

try {
	// These imports ONLY work inside SvelteKit - this try block will fail in Bun/Node
	const kitEnv = await import('$env/dynamic/private');
	const kitApp = await import('$app/environment');
	skEnv = kitEnv.env;
	dev = kitApp.dev;
} catch {
	// Fallback for Bun/Node/CLI
	skEnv = process.env;
	dev = process.env.NODE_ENV !== 'production';
}

// Prefer SvelteKit env first, fallback to process.env
const DATABASE_URL = skEnv.DATABASE_URL ?? process.env.DATABASE_URL;
const DATABASE_AUTH_TOKEN = skEnv.DATABASE_AUTH_TOKEN ?? process.env.DATABASE_AUTH_TOKEN;

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!dev && !DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({
	url: DATABASE_URL,
	authToken: DATABASE_AUTH_TOKEN
});

export const db = drizzle(client, { schema });
