
import { z } from "zod";

// Local storage types - no database schema needed
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: number;
  category: string;
  createdAt: Date;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string | null;
  current: number;
  createdAt: Date;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  projectType: string | null;
  budgetRange: string | null;
  message: string;
  createdAt: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string | null;
  facebookId: string | null;
  rating: number;
  createdAt: Date;
}

// Zod schemas for validation
export const insertProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.number().optional(),
  category: z.string().optional(),
});

export const insertExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.number().optional(),
});

export const insertContactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string(),
});

export const insertTestimonialSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  content: z.string(),
  avatar: z.string().optional(),
  facebookId: z.string().optional(),
  rating: z.number().optional(),
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
