import { 
  messages, type InsertMessage, type Message,
  bookings, type InsertBooking, type Booking
} from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  createBooking(booking: InsertBooking): Promise<Booking>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }
}

export const storage = new DatabaseStorage();
