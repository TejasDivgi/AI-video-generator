import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { boolean } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
export const Users=pgTable('users', {
    id:serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull().unique(),
    imageUrl: varchar('imageUrl'),
    subscription:boolean('subscription').default(false)
})