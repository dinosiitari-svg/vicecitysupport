# Map queue — locations found online, waiting for you to place them

The hourly news sweep writes here. Each entry is something it found reported online but **could not
place on the map by itself** — the source described it in words, not in coordinates.

## How to clear an entry (about 20 seconds each)

1. Open <https://vicecitysupport.com/map/interactive/?coords>
2. Hover or tap the spot. The readout bottom-right gives you `"x": 31.4, "y": 68.2`.
3. Paste a line into `src/data/map-markers.json` → `"markers"`, using the entry below:
   ```json
   { "cat": "hidden-packages", "x": 31.4, "y": 68.2, "name": "…", "note": "…", "status": "unverified" }
   ```
4. Delete the entry from this file, commit, push.

Set `"status": "confirmed"` only once you've seen it in-game yourself.

---

## Pending

_Nothing queued yet. The hourly sweep adds entries here as it finds them._

<!-- Entries are appended below this line, newest first, in this shape:

### 2026-11-16 14:00 · Hidden Packages · "Package behind the Ocean Drive hotel"
- **Reported:** on the roof ledge of the pink hotel, east end of Ocean Drive
- **Source:** https://reddit.com/… (community report, unconfirmed)
- **Suggested category:** `hidden-packages`

-->
