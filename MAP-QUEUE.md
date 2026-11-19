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

### 2026-11-19 09:30 · Garages/vehicles · "Seaplanes at Sherwin Boatworks, Southwind"
- **Reported:** Mammoth Dodo seaplanes in and around a small hangar on the south side of the SBW (Sherwin Boatworks) / Chicki's Tiki Bar parking lot at the Southwind bend of Route 1, near Mile Zero Air Station; more moored off the dock. Reachable early from Jason's house in Key Lento.
- **Source:** https://www.pcgamer.com/games/grand-theft-auto/gta-6-first-plane-and-helicopter/ (press guide, launch day)
- **Suggested category:** none fits well; `garages` or a new vehicle-spawn category

### 2026-11-19 09:30 · Garages/vehicles · "Buckingham Maverick helicopter dock, Southwind"
- **Reported:** looking straight east from the SBW / Chicki's Tiki Bar parking lot entrance in Southwind, an open gate leads to a dock with a Buckingham Maverick helicopter.
- **Source:** https://www.pcgamer.com/games/grand-theft-auto/gta-6-first-plane-and-helicopter/ (press guide, launch day)
- **Suggested category:** none fits well; `garages` or a new vehicle-spawn category

<!-- Entries are appended below this line, newest first, in this shape:

### 2026-11-16 14:00 · Hidden Packages · "Package behind the Ocean Drive hotel"
- **Reported:** on the roof ledge of the pink hotel, east end of Ocean Drive
- **Source:** https://reddit.com/… (community report, unconfirmed)
- **Suggested category:** `hidden-packages`

-->
