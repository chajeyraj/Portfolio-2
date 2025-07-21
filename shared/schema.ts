import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: jsonb("technologies").notNull(),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  featured: integer("featured").default(0),
  category: text("category").notNull().default("full-stack"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  technologies: jsonb("technologies").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  current: integer("current").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type"),
  budgetRange: text("budget_range"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  avatar: text("avatar"),
  facebookId: text("facebook_id"),
  rating: integer("rating").default(5),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
  createdAt: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
