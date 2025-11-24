import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const userId = cookies.get('userId');
  
  if (!userId) {
    return { user: null };
  }

  const { db } = await import('$lib/server/db');
  const { users } = await import('$lib/server/db/schema');
  const { eq } = await import('drizzle-orm');
  
  const user = await db.select().from(users).where(eq(users.id, parseInt(userId))).limit(1);
  
  return {
    user: user[0] || null
  };
};


