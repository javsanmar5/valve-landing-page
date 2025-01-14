import { defineCollection, z } from "astro:content";

const areas = defineCollection({
    schema : z.object({
        title: z.string(),
        h2: z.string(),
        description: z.string(),
        works: z.array(z.string())
    })
});

export const collections = { areas };