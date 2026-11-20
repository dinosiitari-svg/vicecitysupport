# How to add or update an answer page (2 minutes)

Every answer page is **one Markdown file**. You never touch code.

```
src/content/pages/
├── launch/         →  vicecitysupport.com/launch/<file-name>/
├── collectibles/   →  vicecitysupport.com/collectibles/<file-name>/
└── map/            →  vicecitysupport.com/map/<file-name>/
```

## Add a new page

1. Pick a template and copy it in the same folder:
   - Collectible type: `collectibles/template-all-collectible-type-locations.md`
   - Region: `map/template-region-collectibles.md`
2. Rename the copy. The file name becomes the URL, so use lowercase words and hyphens:
   `all-hidden-package-locations.md` → `/collectibles/all-hidden-package-locations/`
3. Open it and fill in the top section (between the `---` lines):

```yaml
question: "Where are all the X locations in GTA 6?"   # becomes the H1 + Google title
answer: "There are 50 X in GTA 6, ..."                 # first sentence, the direct answer
description: "All 50 X locations in GTA 6 with ..."    # Google snippet, under 155 characters
status: verified           # "verifying" shows the yellow 'check back soon' banner
lastVerified: 2026-11-21   # shows "Last verified: November 21, 2026"
updated: 2026-11-21        # puts it at the top of "Recently updated"
listType: locations        # or: steps (numbered how-to)
checklist: true            # tick-boxes that save on the player's phone
items:
  - title: "1. Vice City: under the pier"
    detail: "Swim under the boardwalk; it's on the second pillar."
  - title: "2. ..."
faq:
  - q: "What do you get for finding all X?"
    a: "..."
```

4. **Delete the line `template: true`** (otherwise the page stays hidden from Google).
5. Optional: write extra text, tips or tables in normal Markdown below the second `---`.
6. Save → commit → push to GitHub. Cloudflare rebuilds and the page is live in ~1 minute.
   It's added to the sitemap, search box, section page and "Recently updated" automatically.

## Update one of the existing placeholder pages after launch

Open e.g. `src/content/pages/collectibles/are-any-gta-6-collectibles-missable.md` and:
- replace `answer:` with the real one-sentence answer,
- replace `items: []` with your list,
- set `status: verified`, add `lastVerified:` and bump `updated:`.

## "Show on map" buttons

Any list item can get a button that opens the interactive map zoomed to a pin:

```yaml
  - title: "4. Kelly County: Camp Moonflower"
    detail: "On the bank of the Emerald River."
    pin: "Meditations 6–7: Camp Moonflower"   # exact "name" of the pin in src/data/map-markers.json
```

Or a button that shows a whole category on the map: `mapCat: "meditation"` (a category id).

If the pin name has a typo, the build stops with an error, so a broken button never goes live.
Copy the name straight from `map-markers.json`.

## Tips
- Put quotes around any text containing a colon `:`.
- Indentation matters in the top section: use 2 spaces, never tabs.
- If you rename an item title, players' ticks for that item reset (ticks are saved per title).
- Don't change the file name of a live page (it changes the URL). If you must, add a redirect in `netlify.toml`.
- Writing it from your phone: on github.com open the file → pencil icon → edit → "Commit changes". Cloudflare deploys automatically.

## Add ad code later
- Global head script (e.g. AdSense auto ads): `src/layouts/BaseLayout.astro`, marked comment.
- Fixed ad units: `src/components/AdSlot.astro`, one file, used by every top/mid/sidebar slot.
- Add an `ads.txt` file in `public/` with the line your ad network gives you.
