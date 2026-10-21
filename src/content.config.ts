import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		order: z.number().int(),
		tags: z.array(z.string()).default([]),
		series: z.string().optional(),
		seriesOrder: z.number().int().optional(),
		draft: z.boolean().default(false),
	}).refine((article) => article.seriesOrder === undefined || article.series !== undefined, {
		message: 'seriesOrder requires series',
	}),
});

export const collections = { articles };
