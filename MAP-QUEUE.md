# Map queue — locations found online, waiting for you to place them

The hourly news sweep writes here. Each entry is something it found reported online but **could not
place on the map by itself** — the source described it in words, not in coordinates.

## How to clear an entry (about 20 seconds each)

1. Open <https://vicecitysupport.com/map/interactive/?coords>
2. Hover or tap the spot. The readout bottom-right gives you `"x": 31.4, "y": 68.2`.
3. Paste a line into `src/data/map-markers.json` → `"markers"`, using the entry below:
   ```json
   { "cat": "cocaine-flamingos", "x": 31.4, "y": 68.2, "name": "…", "note": "…", "status": "unverified" }
   ```
4. Delete the entry from this file, commit, push.

Set `"status": "confirmed"` only once you've seen it in-game yourself.

---

## Pending

### 2026-11-20 10:45 · Garages · "Bonita Court Garage, Bay Harbor"
- **Reported:** buyable garage ($34,000) in Bay Harbor. We have no Bay Harbor place on the map yet to pin it to.
- **Source:** https://beebom.com/gta-6-garage-locations/ (press guide)
- **Suggested category:** `garages`

### 2026-11-20 10:45 · Collectibles · "Spots the map couldn't place"
- **Reported:** ¡BOMBAZO! Issue 2342 magazine (rack in Ron Stop'n'Snack, Oldby Island, Vice Beach) and the Grayson Assembly WAiNK landmark scan (Grayson, Lummox County). Neither Oldby Island nor Grayson is on the community map yet.
- **Source:** https://www.powerpyx.com/gta-6-all-magazines-books-comics-locations/ and https://www.powerpyx.com/gta-6-all-landmark-scan-locations/
- **Suggested category:** `magazines` / `waink`

### 2026-11-20 10:45 · Collectibles · "Pins placed from descriptions — nudge when you see them"
- **What:** the collectible pins, the area-level garages and fences, and the vehicle spots added on Nov 20 were placed by reading guide descriptions (notes say "Pin placed from the … description"). When you're near one in-game, drag-check it with `?coords` and fix x/y, then set `confirmed`.
- **Still to come:** guides have only published 8 of 125 Cocaine Flamingos, 16 of 112 WAiNK scans, 20 of 27 magazines and no card or underwater locations yet. The news sweep should add the rest as guides fill in.

### 2026-11-20 04:30 · Easter eggs · "Fast and Furious car garage, Vespucci Island"
- **Reported:** green tuner car (Brian O'Conner nod) inside the garage of a white house near the middle of Vespucci Island; break into the garage. Page: /gameplay/gta-6-easter-eggs/
- **Source:** https://www.bgr.com/2322463/gta-6-hidden-fast-and-furious-paul-walker-car/ (player reports via press, unconfirmed)
- **Suggested category:** `garages` or a new `vehicle-spawns` / `secrets` category

### 2026-11-20 04:30 · Easter eggs · "Bird's nest egg on a radio tower"
- **Reported:** nest of eggs on top of a tall radio/communications tower, ~7-minute climb; throw an egg for a cutscene. Which tower is unconfirmed (several Radio Tower markers already exist from the community import). Page: /gameplay/gta-6-easter-eggs/
- **Source:** https://www.ibtimes.co.uk/gta-6-player-discovers-literal-easter-egg-leonida-1833342 (player video, unconfirmed)
- **Suggested category:** `viewpoints` or a new `secrets` category

### 2026-11-19 18:15 · Secrets · "UFO encounter, Kelly County"
- **Reported:** random night encounter (best after 2 AM in-game, after Chapter 1) on a dirt road east of Port Gellhorn in Kelly County, near the Starlet Motel safehouse. Parked car with flickering headlights and open trunk; trail into the woods. Unlocks trophy "The Truth Is Out There". Page: /gameplay/where-is-the-ufo-in-gta-6/
- **Source:** https://vgtimes.com/gaming-news/175102-gta-6-players-discover-ufo-encounter-that-unlocks-a-secret-trophy.html (player reports via press, unconfirmed)
- **Suggested category:** none fits; `viewpoints` or a new `secrets` category

<!-- Entries are appended below this line, newest first, in this shape:

### 2026-11-16 14:00 · Cocaine Flamingos · "Flamingo behind the Ocean Drive hotel"
- **Reported:** on the roof ledge of the pink hotel, east end of Ocean Drive
- **Source:** https://reddit.com/… (community report, unconfirmed)
- **Suggested category:** `cocaine-flamingos`

-->
