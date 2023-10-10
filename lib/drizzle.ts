import {pgTable, varchar, integer } from "drizzle-orm/pg-core"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { InferModel } from "drizzle-orm";

export const cartTable = pgTable("cart", {
    product_id: varchar("product_id", { length: 255 }).notNull(),
    quantity: integer("quantity"),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    price : integer("price")
})
export type typeOfCartTable = InferModel<typeof cartTable>
export const db = drizzle(sql);