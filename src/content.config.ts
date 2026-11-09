import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './members' }),
  schema: z.object({
    name: z.string().min(1).max(40),
    monogram: z.string().min(1).max(4),
    role: z.string().min(1).max(80),
    bio: z.string().min(1).max(240),
    location: z.string().max(60).optional(),
    tags: z.array(z.string().min(1).max(24)).max(8).default([]),
    links: z
      .array(
        z.object({
          label: z.string().min(1).max(30),
          url: z.url(),
        }),
      )
      .max(8)
      .default([]),
    order: z.number().int().nonnegative().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { members };
