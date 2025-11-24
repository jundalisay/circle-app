import bcrypt from 'bcrypt';
import { db } from './db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';

export async function verifyUser(codename: string, password: string) {
  const user = await db.select().from(users).where(eq(users.codename, codename)).limit(1);
  
  if (user.length === 0) return null;
  
  const valid = await bcrypt.compare(password, user[0].password);
  if (!valid) return null;
  
  return user[0];
}

export async function verifyPin(userId: number, pin: string) {
  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  
  if (user.length === 0) return false;
  
  return await bcrypt.compare(pin, user[0].pin);
}