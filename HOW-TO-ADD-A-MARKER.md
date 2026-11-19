# How to work on the interactive map (2 minutes)

The map lives at **/map/interactive/**. Everything on it &mdash; the image, the categories and every
marker &mdash; comes from **one file**: `src/data/map-markers.json`.

---

## 1. Install the base map image

Put your map image at:

```
public/map/base-map.webp
```

Until that file exists the page shows a neon placeholder grid and a yellow warning banner. Nothing else
breaks &mdash; filters, markers and ticks all work on the placeholder.

**It must be square-ish.** Marker positions are percentages, so swapping in a bigger or sharper image
later moves nothing. Changing the *aspect ratio* does. If your image isn't square, set the real pixel
size in the `map` block of `map-markers.json`:

```json
"map": { "image": "/map/base-map.webp", "width": 4096, "height": 4096 }
```

Use an image you have the right to publish. Rockstar's own map art is their copyright &mdash; a map you
drew, traced or generated yourself is the safe option.

---

## 2. Add a marker

Open `src/data/map-markers.json`, find `"markers"`, and add a line to the list:

```json
{ "cat": "hidden-packages", "x": 31.4, "y": 68.2, "name": "Ocean Drive — under the boardwalk", "note": "Swim under the third set of pillars.", "status": "confirmed" }
```

| Field | What it means |
|---|---|
| `cat` | Which category. Must match an `id` from the `categories` list. |
| `x` | How far across, as a percentage. `0` = left edge, `100` = right edge. |
| `y` | How far down, as a percentage. `0` = top edge, `100` = bottom edge. |
| `name` | Shown in bold in the popup, and searchable. |
| `note` | One line of detail. Optional. |
| `status` | `confirmed` (you checked it in-game) or `unverified` (community report). |

Mind the commas: every entry except the last one ends with `,`.

### Getting the x and y the easy way

Open the map with **`?coords` on the end of the URL**:

```
https://vicecitysupport.com/map/interactive/?coords
```

A readout appears in the bottom-right corner. Move the pointer (or tap) over the spot and it shows you
exactly what to paste: `"x": 31.4, "y": 68.2`. It only appears with `?coords`, so normal visitors never
see it.

---

## 3. Confirmed vs unverified

`"status": "unverified"` draws the marker with a **dashed amber ring** and puts an
*"Unconfirmed &mdash; community report"* flag in its popup. This is what the hourly news sweep uses when it
adds something it found online.

When you've checked one in-game, change it to `"status": "confirmed"` and the ring goes solid. The
line under the map counts both, automatically.

**Don't mark things confirmed that you haven't verified.** Wrong locations on an ad-supported guide
site are the fastest way to lose repeat visitors.

---

## 4. Add a whole new category

In the `categories` list:

```json
{ "id": "rare-cars", "group": "activities", "label": "Rare Vehicles", "color": "#ff6b4a", "glyph": "◆", "page": "/collectibles/rare-vehicles/" }
```

- `group` &mdash; one of the `id`s in the `groups` list (`collectibles`, `stores`, `activities`, `areas`).
- `color` &mdash; any hex colour. It's used for the pin, the legend dot and the popup heading.
- `glyph` &mdash; one character drawn inside the pin. A unicode escape like `◆` (&#9670;) or a plain emoji.
- `page` &mdash; optional. Adds a "More on &hellip;" link to every popup in that category. Good internal linking;
  leave it `""` if you don't have a page yet.

The filter panel, the legend and all the counts pick it up on the next build.

---

## 5. Publish

Commit and push. Cloudflare rebuilds and the map is live in about a minute &mdash; same as any answer page.

Editing from your phone: on github.com open `src/data/map-markers.json` &rarr; pencil icon &rarr; edit &rarr;
"Commit changes".

---

## Notes

- Ticks ("Mark as found") save in the visitor's own browser, per `category|name`. If you **rename** a
  marker, anyone who ticked it loses that tick &mdash; same rule as the checklist pages.
- The map handles a few hundred markers comfortably. Past roughly a thousand it will start to feel
  heavy on older phones; that's the point to add clustering.
- The page renders the full category list and counts in plain HTML below the map, so Google still sees
  real content even though the map itself is JavaScript.
