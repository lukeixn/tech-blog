import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const shared = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});
const links = { github: z.url().optional(), paper: z.url().optional(), demo: z.url().optional() };
const status = z.enum(['Concept', 'In progress', 'Prototype', 'Complete']);

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: shared.extend({
      category: z.enum(['Transformer', 'VLM', 'Computer Vision', 'AI Agent', 'Deep Learning', 'Engineering']),
      readingTime: z.number().int().positive().optional(),
    }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: shared.extend({ status, stack: z.array(z.string()).default([]), ...links }),
  }),
  research: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
    schema: shared.extend({ status, ...links }),
  }),
};
