import type { CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export function articleSlug(article: Article) {
	return article.id.replace(/\/index$/, '');
}

export function sortArticles(articles: Article[]) {
	return [...articles].sort((a, b) =>
		a.data.order - b.data.order ||
		b.data.pubDate.getTime() - a.data.pubDate.getTime() ||
		articleSlug(a).localeCompare(articleSlug(b)),
	);
}

export function publicArticles(articles: Article[]) {
	return sortArticles(articles.filter((article) => !article.data.draft));
}

export function tagSlug(tag: string) {
	return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function validateTagSlugs(articles: Article[]) {
	const names = new Map<string, string>();
	for (const article of articles) {
		for (const tag of article.data.tags) {
			const slug = tagSlug(tag);
			const previous = names.get(slug);
			if (previous && previous !== tag) {
				throw new Error(`Tag slug collision: "${previous}" and "${tag}" both map to "${slug}".`);
			}
			names.set(slug, tag);
		}
	}
	return names;
}

export function sitePath(path: string) {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
