// export const user = sqliteTable('user', {
// 	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
// 	age: integer('age')
// });


import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  codename: text('codename').notNull().unique(),
  pin: text('pin').notNull(),
  password: text('password').notNull(),
  avatar: text('avatar'),
  gender: text('gender'),
  dateOfBirth: text('date_of_birth'),
  email: text('email'),
  phone: text('phone'),
  location: text('location'),
  dateCreated: text('date_created').default(sql`(CURRENT_TIMESTAMP)`),
  dateModified: text('date_modified').default(sql`(CURRENT_TIMESTAMP)`)
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  content: text('content').notNull(),
  userId: integer('user_id').notNull().references(() => users.id),
  dateCreated: text('date_created').default(sql`(CURRENT_TIMESTAMP)`),
  dateModified: text('date_modified').default(sql`(CURRENT_TIMESTAMP)`)
});

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  measure: text('measure').notNull(),
  points: real('points').notNull(),
  category: integer('category').notNull(),
  photo1: text('photo1'),
  photo2: text('photo2'),
  photo3: text('photo3'),
  photo4: text('photo4'),
  photo5: text('photo5'),
  photo6: text('photo6'),
  description: text('description'),
  headline: text('headline'),
  userId: integer('user_id').notNull().references(() => users.id),
  dateCreated: text('date_created').default(sql`(CURRENT_TIMESTAMP)`),
  dateModified: text('date_modified').default(sql`(CURRENT_TIMESTAMP)`)
});

export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  measure: text('measure').notNull(),
  points: real('points').notNull(),
  category: integer('category').notNull(),
  photo1: text('photo1'),
  photo2: text('photo2'),
  photo3: text('photo3'),
  photo4: text('photo4'),
  photo5: text('photo5'),
  photo6: text('photo6'),
  description: text('description'),
  headline: text('headline'),
  userId: integer('user_id').notNull().references(() => users.id),
  dateCreated: text('date_created').default(sql`(CURRENT_TIMESTAMP)`),
  dateModified: text('date_modified').default(sql`(CURRENT_TIMESTAMP)`)
});

export const transactions = sqliteTable('transactions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  points: real('points').notNull(),
  measure: text('measure'),
  amount: real('amount'),
  photo: text('photo'),
  notes: text('notes'),
  kind: text('kind').notNull(), // 'debt' or 'credit'
  status: text('status').notNull().default('pending'), // 'pending', 'accepted', 'cancelled', 'transferred'
  giverId: integer('giver_id').notNull().references(() => users.id), // seller
  getterId: integer('getter_id').notNull().references(() => users.id), // buyer
  transfereeId: integer('transferee_id').references(() => users.id),
  dateAccepted: text('date_accepted'),
  dateCancelled: text('date_cancelled'),
  dateTransferred: text('date_transferred'),
  dateCreated: text('date_created').default(sql`(CURRENT_TIMESTAMP)`),
  dateModified: text('date_modified').default(sql`(CURRENT_TIMESTAMP)`)
});


