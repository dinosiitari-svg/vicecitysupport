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

### 2026-11-28 12:15 · Golf · "Dino Golf Challenge (abandoned mini golf), Frogswater"
- Source: https://www.ppe.pl/poradniki/432031/gta-6-golf-i-minigolf-jak-grac-i-wygrywac-zasady-mini-gry.html , https://www.powerpyx.com/gta-6-all-golf-course-locations/ (guides, 18–26 Nov; no coordinates given)
- Abandoned mini golf course in Frogswater, Kelly County, free to play. One of the 3 mini golf courses on /collectibles/all-golf-course-locations/ (the only one without a pin). No Frogswater marker in map-markers.json to derive from.
- Suggested category: `golf`.

### 2026-11-28 00:15 · Strangers & Freaks · "Freddie's doomsday compound (hurricane questline)"
- Source: https://www.keengamer.com/articles/guides/gta-6-hurricane-weather-guide-freddies-questline-walkthrough/ (guide, 27 Nov; no coordinates given)
- North of Lake Leonida in North Leonard County, close to the Lummox County border and SR-27. Hidden tunnel under an orange shipping container; water tower entry on the second visit. No nearby marker in map-markers.json to derive from.
- Suggested category: `other` (or a new `side-missions` category).

### 2026-11-28 00:15 · Easter eggs · "Haunted hotel for sale, Crosstown"
- Source: https://www.addictinggames.com/news/gta-6-players-discover-a-haunted-hotel-with-a-dark-secret (news, 20 Nov; no coordinates, no hotel name)
- Abandoned hotel "up for sale" in Crosstown, across the interstate from downtown Vice City. Rooftop has the seller's note and a collectible luxury watch. Crosstown has several gtadb markers, but none is this hotel, so the spot can't be derived.
- Suggested category: a new `easter-eggs` category.

### 2026-11-27 06:15 · Easter eggs · "Cool Dog's Dog Island beach (jet-ski dog)"
- Source: https://www.gfinityesports.com/article/gta-6-how-to-find-cool-dog-lucky-dog , https://gamesfuze.com/guides/how-to-find-dog-island-in-gta-6/ (guides, 19–24 Nov; no coordinates given)
- The rescue itself happens anywhere in open water in Gambit Bay near Key Lento (Partridge Bay also reported), so it isn't a fixed pin. The beach he takes you to ("Dog Island", several dogs, lockbox with sunglasses by an upturned boat, wallet ~$1,200) is a fixed place but no guide describes where it is. No marker to derive from.
- Suggested category: a new `easter-eggs` category.

### 2026-11-26 18:15 · Easter eggs · "Arthur Morgan's hat yard sale, south Port Gellhorn"
- Source: https://www.gfinityesports.com/article/gta-6-how-to-find-arthur-morgans-hat-red-dead-redemption-2-easter-egg , https://gameshorizon.com/guides/gta-6-arthur-morgans-hat-easter-egg-location/ (guides, 19–24 Nov; no coordinates given)
- Yard sale at a house with balloons tied outside, south side of Port Gellhorn; hat ("Genuine Cowboy Hat", $35) by the couch. Reported Chapter 2, possibly Lucia only. No nearby marker in map-markers.json to derive from.
- Suggested category: a new `easter-eggs` category.

### 2026-11-26 12:15 · Secret mission · "Capri Cops mission start, central Capri plaza"
- Source: https://gamerant.com/gta-6-capri-cops-secret-mission-cell-keys/ , https://gamerhour.net/guides/gta-6-secret-mission-capri-cops-kidnap-you-guide/ (guides, 24–25 Nov; no coordinates given, exact spot only in an image)
- Get taken in by Capri police around the central plaza of Capri (town west of Vice City). The cage lock-up you wake in has a dock with a boat; its location isn't described. No "central plaza" marker exists in map-markers.json to derive from.
- Suggested category: a new `easter-eggs` / secret-missions category. Reward: CPD Moreland 850 shotgun (weapons).

### 2026-11-25 12:15 · Easter eggs · "Circles of Hell house (metalheads' garage), northern Port Gellhorn"
- Source: https://www.gamingbible.com/news/gta-6-secret-hell-mission-satan-location-rewards-623661-20261123 (news, 23 Nov; no coordinates given)
- House with an open garage in the north of Port Gellhorn, north of the Stash House illegal operation. Night only (midnight–4 AM suggested). No Stash House marker exists in map-markers.json to derive from.
- Suggested category: a new `easter-eggs` category.

### 2026-11-24 18:15 · Easter eggs · "Vice City portal chain: Badger R&D radio tower, 12 LPL substations, Reactor 2 at LPL Turtle Head power station"
- Source: https://www.thetechbasket.com/gta-6-vice-city-portal-easter-egg/ (guide, 24 Nov), https://www.forbes.com/sites/paultassi/2026/11/23/a-gta-6-player-finds-tommy-vercettis-shirt-portal-to-original-vice-city/ (no coordinates given)
- Start: Badger R&D radio tower, Key Lento (top floor power switch + button).
- Substations in order: Downtown Vice City, Balsero, Key Lento, north end of Vice Beach, North Vice City, Port Gellhorn, Hamlet, Gloriana Key, Hamlet, Port Gellhorn, Hamlet, near Breakwater Quarry (SW of the airport). Two "Electric Substation" gtadb pins exist at the airport (L2436, L2552) but no source ties them to this chain.
- Portal: Reactor 2, LPL Turtle Head power station, east of Hamlet (7 PM–6 AM). Not the Fuzzard Power Station already pinned in Peregrine Bay.
- Suggested category: a new `easter-eggs` category.

### 2026-11-24 12:15 · Easter eggs / meteorites · "Max Manhours' cabin + meteorite chunk under the north pier, Belpoint Island"
- Source: https://showgamer.com/en/guides/8122-gde-nayti-maksa-menhauersa-v-gta-6-tayna-ostrova-belpoynt (guide, 21 Nov; no coordinates given)
- Max Manhours' cabin: the northern tip of Belpoint Island (west of Capri, Mariana County). Talk to him through the window to the left of the door. Our Belpoint flamingo pins are at the south-east end, around x 17.1–17.6, y 57.4–57.8.
- Meteorite chunk: under the northern wooden pier on Belpoint, below a Santa Claus decoration; it glows purple.
- Suggested category: a new `easter-eggs` category for the cabin. Use a new `meteorites` category for the chunk.

### 2026-11-24 00:15 · Vehicle spots · "Private helipad east of Hamlet (Maverick-type helicopter)"
- Source: https://gamerant.com/gta-6-helicopter-location/ (hands-on, 19 Nov; no coordinates), https://happygamer.com/gta-6-how-to-get-a-helicopter-179627/ (secondhand)
- Private helipad in a guarded compound east of Hamlet, close to Key Lento. Guards at the gate checkpoint; you can climb the chain-link fence at the side. Helicopter is unlocked; no wanted level reported for taking it.
- Suggested category: `vehicle-spots`.

### 2026-11-23 00:15 · Easter eggs · "Giant crab, simulation house, merman, Dexter apartment"
- Source: https://gameriv.com/gta-6-easter-eggs/ (player reports collected by GameRiv, 22 Nov; unconfirmed, no coordinates given)
- Giant mutant crab: inside a building in Gullet Marsh (which building not stated).
- "It's a simulation" house: a house in Belville; conspiracy den in its garage.
- Merman: small island near Shores Keys, north-east of Key Lento.
- Dexter-style apartment: Trinity Apartments, Washington Island, Vice Beach; Slice of Life-style boat moored nearby.
- Suggested category: existing easter-egg/secret category if there is one, otherwise a new `easter-eggs` category.

### 2026-11-22 18:15 · Treasure / dive sites · "Six shipwreck dive sites off Key Lento + Island Dreams charter dock"
- Source: https://www.gtaboom.com/gta-6-treasure-hunting-2b73 , https://www.slashgear.com/2322274/gta-6-how-to-make-money-early-underwater-shipwreck-treasure-dives-locations/ (launch-week guides, unconfirmed; no coordinates given)
- Island Dreams Boat Charters (Kenton's shop, scuba gear on the dock): Key Lento. Not on our map.
- Nuestra Señora de la Noche (7 finds): south-east of Key Lento's tip, the search circle nearest the island (not the one by Abismo Key).
- Nuestra Señora de la Ética Laxa (5): south of La Noche, off Abismo Key.
- Urca de Cinco Torres (6): off south-east Key Lento, beside the small hooked island in the island chain.
- Nuestra Señora Lujuriosa (6): south-west of that hooked island, between it and the longer island to the south.
- Urca de Santa Sierra (6): farther out, east of the two wrecks by the island chain.
- Nuestra Señora del Ocio (10 doubloons, Island Dreams wreck): east of Key Lento, north-east of Kenton's shop, past a small offshore island.
- Suggested category: a new `treasure` / dive-sites category. Dive sites show in-game as map search circles, so you can read them off the pause map.

### 2026-11-22 12:30 · Weapons / money · "Free early weapons + Apollo Aggregates loot warehouse"
- Source: https://www.noobfeed.com/articles/gta-6-early-game-guns , https://www.gamingbible.com/news/gta-6-hidden-warehouse-14000-easy-money-location-951211-20261120 (launch-week guides, unconfirmed)
- Loot warehouse (Type 9 SMG, Duke 556, Kalinga 50, marked bills, drugs, Leroy Rook card, ~$14,000 total): GamingBible calls it Apollo Aggregates near Hamlet, South Vice-Dale; NoobFeed says ~3 miles from Jason's house. The community map already has an "Apollo Aggregates" landmark at x 61.49, y 71.05 (Peregrine Bay, east of Hamlet) — probably the same place, but I didn't add a pin because the drone-race guide also puts an "Apollo Aggregates" in Balsero.
- Kingfisher W-22 rifle: Kingfisher Compound, Grassrivers, building nearest the water (after Donnie mentions the robbery). No Kingfisher marker on our map.
- Laird 350 sniper: stranded men on the road Grassrivers → Hamlet (or an abandoned motel south of Hamlet; source contradicts itself).
- Hobo shotgun: industrial storage building off the highway south of Hamlet (listen for screaming).
- Nipper .38 pistol: spy ship wreck, southern tip of the south-east Permit Keys island. Permit Keys not labelled on our map.
- Gorse 425 shotgun: abandoned smuggler boat, northernmost Permit Keys island.
- Suggested category: a new `weapons` category (free weapon pickups) if you want these as their own layer.

### 2026-11-22 07:00 · Cocaine Flamingos · "10 reported flamingos without a pin + 12 best-guess pins to check"
- **Pinned on Nov 22 (best guesses, please nudge in-game):** Abismo Key SE coast, Capri Halloween house, outside La Costa (Capri), Key Lento eccentric house, Featherstone north tip / south shore / SE shore, 3 at the Meerwunder wreck beach, Watson Bay north end, Watson Bay candle room. I took the northern Featherstone island to be the long spit at the top of the NW island group and the Meerwunder beach to be the SE corner of the lower-right island there. The base map has no labels for those, so both are assumptions. Capri's lake was assumed to be Tortoise Lake.
- **Reported but not placeable (no pin):**
  - Capri: on a dock beside a dead body (two more reported nearby, near music; use Focus). Unconfirmed.
  - Capri: by the sunken ship, among lawn flamingos where only one is real. Unconfirmed.
  - Capri: front yard of a locked house west of Volcano Coffee Co.
  - Sandbar island south of Cottonmouth Lake (Leonida Keys), west side of the island. Cottonmouth Lake isn't on our map.
  - Key Lento: in the corner between two trees, just left of a fire hydrant. Unconfirmed.
  - Mile Zero Air Station: among the shoreline rocks of Goose Key (wanted level). Goose Key looks like the big south-west airbase island with Southwind, but no side of the coast was given.
  - Port Gellhorn: on top of the garbage heap, under an old fridge. Unconfirmed; there's no landfill on our map.
  - Riquezas Keys: inside a building with a radar dome on the big south-west island. There are two radar candidates (Weather Radar ~25.6, 90.5 and Air Force Radar Station on Maroon Key ~43.3, 93.3).
  - Watson Bay: beach party camp on the shore (one map puts it at Southwind instead). Unconfirmed.
  - Watson Bay: standing on a table in a small building. Unconfirmed.
- **Source:** https://vicecitydb.org/collectibles/cocaine-flamingos (fan database, updated Nov 21; 30 of 125 listed)
- **Suggested category:** `cocaine-flamingos`

### 2026-11-21 18:15 · Tattoo shops · "8 tattoo studios without a pin"
- **Reported:** Layin' Ink, Dominion Ink, Hyper Ink, Cross My Heart, Inkomplete Tattoo Co., Black Spot Tattoo (all Vice-Dale County), Blood Sugar Tattoo and Freedom Tattoo (Kelly County). Only county given, no landmark. In-game they show as an orange heart icon (map filter Style > Tattoos). Inked Mermaid, Twa Ponya and Electric Fang are already pinned. Page: /gameplay/where-are-the-tattoo-shops-in-gta-6/
- **Source:** https://www.powerpyx.com/gta-6-all-tattoo-studios-locations/ (player guide, unconfirmed)
- **Suggested category:** `barbers`

### 2026-11-21 06:30 · Shooting ranges · "Griffin Shooting Range (NW Vice City) and Rodgers Ranch (NE Port Gellhorn)"
- **Reported:** GTA 6's two shooting ranges. Griffin Shooting Range is in the north-west of Vice City; Rodgers Ranch is in the north-east of Port Gellhorn. Neither is on the map yet and no landmark was given. Page: /gameplay/how-do-shooting-ranges-work-in-gta-6/
- **Source:** https://www.powerpyx.com/gta-6-all-shooting-range-gold-medal-challenges/ (player guide, unconfirmed)
- **Suggested category:** `gun-shops` or a new `shooting-ranges` category

### 2026-11-21 06:30 · Shops · "Chuck's Tackle & Shot (fishing lures), Key Lento"
- **Reported:** sells fishing lures; near Jason's place in Key Lento (Jason's House marker is at 57.69, 86.06), exact spot not given. Page: /gameplay/can-you-fish-and-hunt-in-gta-6/
- **Source:** https://www.shacknews.com/article/151389/how-to-go-fishing-gta6 (launch-day guide, unconfirmed)
- **Suggested category:** `gun-shops` (it's a tackle-and-gun store) or `shops`

### 2026-11-20 22:30 · Races · "Hit 'n' Run VC first street race + Yago's restaurant (Little Cuba)"
- **Reported:** the first street race flag ("Join a Street Race") appears near the border of Salton and Little Cuba after the Ch3 mission Dealer's Choice. Yago's Cuban restaurant is in Little Cuba, across from the Little Cuba souvenir store, with Euroform Automotive (car mod shop) around the corner. Other race venues named only by area: Ocean Beach, Gloriana Key, Salton (Hit 'n' Run VC groups). Page: /gameplay/how-to-unlock-street-races-in-gta-6/
- **Source:** https://outputlag.com/guides/gta-6-street-races-yago/ , https://techwiser.com/gta-6-racing-locations/ (player guides, unconfirmed)
- **Suggested category:** `races` (restaurant/Euroform: `side-jobs` or `other`)

### 2026-11-20 22:30 · Secrets · "Four-horse statue near Manifest Canyon; talking parrots liquor store in the Keys"
- **Reported:** a statue of four horses (one wearing a traffic cone) near Manifest Canyon makes the controller vibrate and beep as you approach. A liquor store in the Keys where parrots reveal hidden cash near a generator. Both Reddit finds, no exact spot. Page: /gameplay/gta-6-easter-eggs/
- **Source:** https://www.gamingbible.com/news/gta-6-easter-eggs-778903-20261120 (press round-up of Reddit posts, unconfirmed)
- **Suggested category:** a new `secrets` category

### 2026-11-20 12:30 · Vehicle spots · "Mile Zero Air Station (military base, fighter jets)"
- **Reported:** military base on Goose Key, Mariana County, far south-west of the map, south-east of Key Lento via the southern bridges. Jets, tank, APC, Buzzard. Stunt jump "Mile Zero Air Station Southeast" on the south-east corner off the southern access road. No Mile Zero place on the community map to pin to (the Mariana County Guard Booth / Radio Tower at ~28,93 might be it, but that's a guess). Page: /gameplay/how-to-get-a-fighter-jet-in-gta-6/
- **Source:** https://www.pcgamer.com/games/grand-theft-auto/gta-6-military-base-location/ (press guide)
- **Suggested category:** `vehicle-spots` (and `stunt-jumps` for the jump)

### 2026-11-20 12:30 · Secrets · "Skunk ape (Bigfoot) sighting, west of Gambit Bay"
- **Reported:** take the boat from Jason's house in Key Lento across Gambit Bay to a dead-end road on the west side of the peninsula; Focus prompt before landing, effigy by a tree in the mangroves. Page: /gameplay/where-is-bigfoot-in-gta-6/
- **Source:** https://www.pcgamer.com/games/grand-theft-auto/gta-6-bigfoot-location-skunk-ape/ (press guide, unconfirmed)
- **Suggested category:** none fits; a new `secrets` category

### 2026-11-20 12:30 · Easter eggs · "Marquis boat with Los Santos GPS, Jason's house"
- **Reported:** Marquis sailboat (Michael's GTA V model) near Jason's starting house in Key Lento (Jason's House marker is at 57.69, 86.06); its GPS shows Los Santos. Page: /gameplay/gta-6-easter-eggs/
- **Source:** https://gamerant.com/grand-theft-auto-6-gta-5-easter-egg-michael-boat/ (player reports via press)
- **Suggested category:** a new `secrets` category

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
- **Still to come:** guides have only published 8 of 125 Cocaine Flamingos (now 20 pinned, see the Nov 22 entry), 16 of 112 WAiNK scans, 20 of 27 magazines and no card or underwater locations yet. The news sweep should add the rest as guides fill in.

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
