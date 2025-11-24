import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const hashedPin = await bcrypt.hash(data.pin, 10);
    
    await db.insert(users).values({
      name: data.name,
      codename: data.codename,
      pin: hashedPin,
      password: hashedPassword,
      avatar: data.avatar || null,
      gender: data.gender || null,
      dateOfBirth: data.dateOfBirth || null,
      email: data.email || null,
      phone: data.phone || null,
      location: data.location || null
    });
    
    return json({ success: true });
  } catch (error) {
    return json({ message: 'Registration failed' }, { status: 400 });
  }
};