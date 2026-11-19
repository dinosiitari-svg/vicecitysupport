// ─── Site-wide settings. Edit these values, everything else updates. ───

export const SITE = {
  name: 'Vice City Support',
  url: 'https://vicecitysupport.com',
  tagline: 'GTA 6 collectibles, map locations & completion help',
  description:
    'Fast, mobile-friendly GTA 6 collectible locations, map guides and 100% completion checklists. Fan-made and updated after launch.',
};

// ─── Where people can follow you ───
// Fill in a URL to make the link appear in the footer. Leave '' to hide it.
// These are how launch-week visitors come back without going through Google,
// so they are worth having live before launch day.
export const SOCIAL = {
  instagram: '',   // e.g. 'https://instagram.com/vicecitysupport'
  discord: '',     // e.g. 'https://discord.gg/xxxxxxx'
  tiktok: '',
  youtube: '',
  reddit: '',
};

// ─── Forms (Web3Forms) ───
// The contact, email-signup and submit-a-location forms are sent by Web3Forms,
// which emails every message to you. Get a free key at https://web3forms.com
// (type your email, the key arrives by email) and paste it here. The key is
// meant to be public, so it's fine in this file.
export const FORMS = {
  web3formsKey: '' as string,
  thanksUrl: 'https://vicecitysupport.com/thanks/',
};

// ─── Advertising (Google AdSense) ───
// Leave adsenseClient as '' until you have an AdSense account. While it's empty,
// no ad code, no ads.txt and no ad boxes appear anywhere on the site.
//
// When you sign up, AdSense shows your publisher ID, which looks like
// 'ca-pub-1234567890123456'. Paste it below and push: that adds the AdSense
// code to every page (so Google can check the site), creates /ads.txt, and
// turns on Auto ads once Google approves you.
//
// slots: optional. Only fill these if you create manual "ad units" in AdSense
// and want ads in the fixed top / mid / sidebar spots. Auto ads work without them.
export const ADS = {
  adsenseClient: 'ca-pub-4441053538028640' as string,   // e.g. 'ca-pub-1234567890123456'
  slots: {
    top: '' as string,
    mid: '' as string,
    sidebar: '' as string,
  },
};

/** 'ca-pub-123…' (or 'pub-123…') → 'pub-123…', the form ads.txt needs. '' if not set. */
export function adsensePubId(): string {
  const id = ADS.adsenseClient.trim();
  if (!id) return '';
  return id.startsWith('ca-') ? id.slice(3) : id;
}

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
  gameplay: {
    label: 'Gameplay',
    blurb: 'How the wanted system, character switching and other GTA 6 mechanics work.',
    icon: 'pad',
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
  unlockMode: 'local-midnight' as 'unconfirmed' | 'global' | 'local-midnight',
  unlockTimeUTC: '' as string,
  sourceUrl:
    'https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026',
};
