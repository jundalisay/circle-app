import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { posts, users } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ url, cookies }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const perPage = 10;
  
  const userId = cookies.get('userId');
  if (!userId) {
    return { posts: [], page, hasMore: false };
  }
  
  const allPosts = await db
    .select({
      id: posts.id,
      content: posts.content,
      dateCreated: posts.dateCreated,
      user: {
        id: users.id,
        name: users.name,
        avatar: users.avatar
      }
    })
    .from(posts)
    .leftJoin(users, eq(posts.userId, users.id))
    .orderBy(desc(posts.dateCreated))
    .limit(perPage + 1)
    .offset((page - 1) * perPage);
  
  const hasMore = allPosts.length > perPage;
  const postsToShow = allPosts.slice(0, perPage);
  
  return {
    posts: postsToShow,
    page,
    hasMore
  };
};