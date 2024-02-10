import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { posts };