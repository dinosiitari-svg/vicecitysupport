import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every answer page is ONE Markdown file in src/content/pages/<section>/.
// The folder name becomes the first part of the URL, the file name the second:
//   src/content/pages/collectibles/how-many-collectibles.md
//   -> https://vicecitysupport.com/collectibles/how-many-collectibles/
// See HOW-TO-ADD-A-PAGE.md for a walkthrough.

const item = z.object({
  // Short name of the step or location, e.g. "Location 1: rooftop near the pier"
  title: z.string(),
  // Optional extra detail shown under the title
  detail: z.string().optional(),
  // Optional: exact name (or id) of a pin in src/data/map-markers.json.
  // Adds a "Show on map" button that opens the interactive map zoomed to that pin.
  pin: z.string().optional(),
  // Optional: a map category id. Adds a "Show all on map" button for that whole category.
  mapCat: z.string().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    // H1 = the exact question players search for.
    question: z.string(),
    // First sentence on the page = the direct answer.
    answer: z.string(),
    // Shown in Google results and when shared (keep under ~155 characters).
    description: z.string(),

    // "verifying" shows the yellow "Being verified at launch" banner.
    // Change to "verified" once you've confirmed it in-game.
    status: z.enum(['verifying', 'verified']).default('verifying'),
    // Optional custom text for the yellow banner (defaults to the standard launch message).
    statusNote: z.string().optional(),
    lastVerified: z.coerce.date().optional(),
    // Used for the "Recently updated" list on the homepage.
    updated: z.coerce.date(),

    // Steps = numbered list. Locations = location list.
    listType: z.enum(['steps', 'locations']).default('steps'),
    listTitle: z.string().optional(),
    items: z.array(item).default([]),
    // How many empty placeholder rows to show while the list is still empty.
    placeholderCount: z.number().default(5),

    // true = each item gets a checkbox players can tick (saved on their device).
    checklist: z.boolean().default(false),

    // Extra questions for the FAQ section + FAQ schema markup.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

    // Links to official sources (shown at the bottom of the page).
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),

    // Optional: show the unlock-time converter widget on this page.
    widget: z.enum(['unlock-time']).optional(),

    // Template pages are built (so you can preview them) but hidden from
    // Google, the sitemap, search and the homepage.
    template: z.boolean().default(false),
    // Lower numbers appear first in section listings.
    order: z.number().default(100),
  }),
});

export const collections = { pages };
