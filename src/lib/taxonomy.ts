import type { CollectionEntry } from 'astro:content';
import { byDate, withBase } from './site';

export type BlogEntry = CollectionEntry<'blog'>;

export const taxonomySlug = (value: string) => {
  const ascii = value.normalize('NFKD').replace(/[^\w\s-]/g, '').trim().toLowerCase().replace(/[\s_]+/g, '-').replace(/-+/g, '-');
  return ascii || encodeURIComponent(value);
};

export const taxonomyUrl = (kind: 'categories' | 'category' | 'tags' | 'series', value?: string) =>
  withBase(`/blog/${kind}/${value ? `${taxonomySlug(value)}/` : ''}`);

export const uniqueValues = (entries: BlogEntry[], selector: (entry: BlogEntry) => string | undefined) =>
  [...new Set(entries.map(selector).filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b));

export const sortBlogs = (entries: BlogEntry[]) => entries.sort(byDate);
