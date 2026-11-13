// ─── Site-wide settings. Edit these values, everything else updates. ───

export const SITE = {
  name: 'Vice City Support',
  url: 'https://vicecitysupport.com',
  tagline: 'GTA 6 collectibles, map locations & completion help',
  description:
    'Fast, mobile-friendly GTA 6 collectible locations, map guides and 100% completion checklists. Fan-made and updated after launch.',
};

// Sections = first folder in src/content/pages/. Shown in the nav and homepage grid.
export const SECTIONS = {
  launch: {
    label: 'Launch Info',
    blurb: 'Unlock time, platforms and map size, confirmed facts only.',
    icon: 'clock',
  },
  collectibles: {
    label: 'Collectibles',
    blurb: 'Counts, rewards, missables and checklists for every collectible.',
    icon: 'star',
  },
  map: {
    label: 'Map & Regions',
    blurb: 'Region-by-region collectible routes across Leonida.',
    icon: 'map',
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;

// ─── GTA 6 unlock time ───
// Release date confirmed by Rockstar: Thursday, November 19, 2026.
// The unlock HOUR is NOT confirmed yet. When Rockstar announces it, set ONE of:
//
//   unlockMode: 'global'          + unlockTimeUTC: '2026-11-19T04:00:00Z'
//       (same moment worldwide; the converter shows every visitor their local time)
//   unlockMode: 'local-midnight'
//       (unlocks at midnight in each player's own timezone)
//
// Leave it as 'unconfirmed' until there's an official announcement.
export const LAUNCH = {
  releaseDate: '2026-11-19',
  unlockMode: 'unconfirmed' as 'unconfirmed' | 'global' | 'local-midnight',
  unlockTimeUTC: '' as string,
  sourceUrl:
    'https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026',
};
