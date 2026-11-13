import { getCollection, type CollectionEntry } from 'astro:content';
import { SECTIONS, type SectionKey } from '../data/site';

export type Page = CollectionEntry<'pages'>;

export const sectionOf = (p: Page) => p.id.split('/')[0] as SectionKey;
export const urlOf = (p: Page) => `/${p.id}/`;
export const sectionLabel = (p: Page) => SECTIONS[sectionOf(p)]?.label ?? '';

/** Published (non-template) pages. */
export async function getPublicPages() {
  const all = await getCollection('pages');
  return all.filter((p) => !p.data.template);
}

export const byUpdated = (a: Page, b: Page) => b.data.updated.getTime() - a.data.updated.getTime();
export const byOrder = (a: Page, b: Page) => a.data.order - b.data.order || a.data.question.localeCompare(b.data.question);

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
