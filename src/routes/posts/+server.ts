import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const userId = cookies.get('userId');
  if (!userId) {
    return json({ message: 'Unauthorized' }, { status: 401 });
  }
  
  const { content } = await request.json();
  
  await db.insert(posts).values({
    content,
    userId: parseInt(userId)
  });
  
  return json({ success: true });
};