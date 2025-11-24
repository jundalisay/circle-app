import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { verifyUser } from '$lib/server/auth';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { codename, password } = await request.json();
  
  const user = await verifyUser(codename, password);
  
  if (!user) {
    return json({ message: 'Invalid credentials' }, { status: 401 });
  }
  
  cookies.set('userId', user.id.toString(), { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 7 });
  
  return json({ success: true });
};