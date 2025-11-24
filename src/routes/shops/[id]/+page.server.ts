import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users, products, services } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
  const shopId = parseInt(params.id);
  
  const shop = await db.select().from(users).where(eq(users.id, shopId)).limit(1);
  const shopProducts = await db.select().from(products).where(eq(products.userId, shopId));
  const shopServices = await db.select().from(services).where(eq(services.userId, shopId));
  
  return {
    shop: shop[0],
    products: shopProducts,
    services: shopServices
  };
};