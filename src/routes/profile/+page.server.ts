import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users, products, services } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ cookies }) => {
  const userId = parseInt(cookies.get('userId') || '0');
  
  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const userProducts = await db.select().from(products).where(eq(products.userId, userId));
  const userServices = await db.select().from(services).where(eq(services.userId, userId));
  
  return {
    user: user[0],
    products: userProducts,
    services: userServices
  };
};