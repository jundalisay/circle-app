import { db } from './index';
import { users, products, services } from './schema';
import bcrypt from 'bcrypt';

async function seed() {
  console.log('Seeding database...');

  const hashedPassword = await bcrypt.hash('password123', 10);
  const hashedPin = await bcrypt.hash('1234', 10);

  // Create 3 users
  const userIds = [];
  for (let i = 1; i <= 3; i++) {
    const result = await db.insert(users).values({
      name: `User ${i}`,
      codename: `user${i}`,
      pin: hashedPin,
      password: hashedPassword,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`,
      gender: i % 2 === 0 ? 'male' : 'female',
      dateOfBirth: `199${i}-0${i}-0${i}`,
      email: `user${i}@example.com`,
      phone: `+123456789${i}`,
      location: `Location ${i}`
    }).returning({ id: users.id });
    userIds.push(result[0].id);
  }

  // Create 2 products per user
  for (const userId of userIds) {
    await db.insert(products).values([
      {
        name: `Product A from User ${userId}`,
        measure: 'pcs',
        points: 10.5,
        category: 1,
        photo1: `https://picsum.photos/400/300?random=${userId}1`,
        description: `Quality product from user ${userId}`,
        headline: `Amazing product!`,
        userId
      },
      {
        name: `Product B from User ${userId}`,
        measure: 'kg',
        points: 25.0,
        category: 2,
        photo1: `https://picsum.photos/400/300?random=${userId}2`,
        description: `Premium product from user ${userId}`,
        headline: `Best in class!`,
        userId
      }
    ]);

    // Create 2 services per user
    await db.insert(services).values([
      {
        name: `Service A from User ${userId}`,
        measure: 'hour',
        points: 15.0,
        category: 1,
        photo1: `https://picsum.photos/400/300?random=${userId}3`,
        description: `Professional service from user ${userId}`,
        headline: `Expert service!`,
        userId
      },
      {
        name: `Service B from User ${userId}`,
        measure: 'session',
        points: 30.0,
        category: 2,
        photo1: `https://picsum.photos/400/300?random=${userId}4`,
        description: `Quality service from user ${userId}`,
        headline: `Top-rated service!`,
        userId
      }
    ]);
  }

  console.log('Seeding complete!');
}

seed().catch(console.error);
