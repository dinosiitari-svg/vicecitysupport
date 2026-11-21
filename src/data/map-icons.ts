// Picture icons for map pins and the filter list.
// A category (or a single marker) can set "icon": "<name>" in map-markers.json.
// Anything without an icon falls back to its text "glyph".
// Most shapes are from Lucide (lucide.dev, ISC licence).

const svg = (inner: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const ICONS: Record<string, string> = {
  pistol: `<svg class="wide" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 6.5h18.5a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1H19l1.6 7.6a1 1 0 0 1-1 1.2h-3.7a1 1 0 0 1-1-.8L13.6 13h-2.3c-1.2 0-2.1-.8-2.3-2H2.5a.5.5 0 0 1-.5-.5z"/><path fill="none" stroke="currentColor" stroke-width="1.4" d="M9.6 12.4c.2 1.9 1.4 2.8 3.9 2.8"/></svg>`,
  scissors: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></g></svg>`,
  wrench: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></g></svg>`,
  heel: `<svg class="wide" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 18.5c0-1.4 1-2.2 2.6-2.4 3-.4 5.4-1.6 7.6-4.2L17 5.5c.6-.7 1.6-.9 2.4-.4l1.2.8c.8.5 1.1 1.6.6 2.4L20 11v9h-1.6l-.8-7.6-3.4 5.4c-.6.9-1.6 1.5-2.7 1.5H3a1 1 0 0 1-1-1z"/></svg>`,
  flag: `<svg class="wide" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M4 2.5v19"/><rect x="5" y="3" width="16" height="11" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="currentColor" d="M5 3h4v3.67H5zM13 3h4v3.67h-4zM9 6.67h4v3.67H9zM17 6.67h4v3.67h-4zM5 10.33h4V14H5zM13 10.33h4V14h-4z"/></svg>`,
  flamingo: `<svg class="wide" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.2 10.4c1.3-2.5 5-3.2 8.4-2.1 2.6.8 4.6 2.4 5.4 4.1-1.9-.5-3.4 0-4.9 1-2.9 1.9-6.9 1.3-8.9-3z"/><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M9.4 10.6C6.2 8.8 10.6 6.8 10 4.4 9.6 2.7 7.6 2.2 6.6 3.3"/><circle cx="7.3" cy="3.3" r="1.5" fill="currentColor"/><path fill="currentColor" d="M6 3.2 3.9 5.9l.5.4L6.7 4.4z"/><path fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" d="M13.2 13.8v8.4M13.4 15.4l2.6 1.6-2.4 1.2M11.4 22.3h3.4"/></svg>`,
  book: svg('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>'),
  atm: `<svg class="wide" viewBox="0 0 24 24" aria-hidden="true"><text x="12" y="15.5" text-anchor="middle" font-size="10" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="currentColor" letter-spacing="-0.4">ATM</text></svg>`,
  car: svg('<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'),
  shirt: svg('<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>'),
  drone: svg('<circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M7.5 7.5 10 10M16.5 7.5 14 10M7.5 16.5 10 14M16.5 16.5 14 14"/><rect x="10" y="10" width="4" height="4" rx="1"/>'),
  briefcase: svg('<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
  gamepad: svg('<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.55-.6-6.58-.69-7.26A4 4 0 0 0 17.32 5z"/>'),
  skull: svg('<circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/>'),
  landmark: svg('<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>'),
  bed: svg('<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>'),
  bag: svg('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'),
  utensils: svg('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'),
  cocktail: svg('<path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/>'),
  fuel: svg('<line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>'),
  bus: svg('<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>'),
  train: svg('<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"/><path d="m9 15-1-1"/><path d="m15 15 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/>'),
  plane: svg('<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'),
  anchor: svg('<path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>'),
  bridge: svg('<path d="M2 18h20"/><path d="M4 18v-4"/><path d="M20 18v-4"/><path d="M2 14c4-6 16-6 20 0"/><path d="M8 18v-6.5"/><path d="M12 18v-7.5"/><path d="M16 18v-6.5"/>'),
  palm: svg('<path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>'),
};

/** HTML for a pin or filter dot: the marker's own icon, else its category's icon, else the text glyph. */
export function iconHtml(cat?: { icon?: string; glyph?: string }, marker?: { icon?: string }): string {
  const name = marker?.icon || cat?.icon;
  if (name && ICONS[name]) return ICONS[name];
  const g = cat?.glyph || '';
  return g.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}
