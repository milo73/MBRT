# Figma-schermen — SVG-export

10 SVG-bestanden plus één `all-screens.svg` met alle schermen onder elkaar. Te importeren in Figma als bewerkbare vector-frames.

> **Waarom geen `.fig`?** Het `.fig`-formaat is gesloten (proprietary, binair). Externe tools kunnen het niet genereren. SVG is het standaard portable design-formaat dat Figma natively importeert — tekst blijft tekst, kleuren blijven kleuren.

## Schermen

| # | Bestand | Inhoud |
|---|---|---|
| 1 | `01-login.svg` | Split-background login met onboarding |
| 2 | `02-dashboard.svg` | Welkom, vitaliteitsscore, stats, tip van de dag, primaire acties |
| 3 | `03-micropauze.svg` | Dagdoel, categorie-filters, 6 voorbeeldoefeningen |
| 4 | `04-challenge.svg` | Stappen-voortgang, registratie, 5 badges |
| 5 | `05-herstel.svg` | 6 herstelacties + reflectievraag |
| 6 | `06-voeding.svg` | Maaltijd van de dag, filters, 6 maaltijdideeën |
| 7 | `07-motivatie.svg` | 8 nudges + voorkeuren |
| 8 | `08-team.svg` | 6 stats, weektrend (bars), top-lijsten |
| 9 | `09-evaluatie.svg` | Vragenlijst met ja/nee, schaal en open velden |
| 10 | `10-beheer.svg` | Admin: challenge-instellingen, nudge-planner, catalogi, export |
| — | `all-screens.svg` | Alle 10 schermen verticaal onder elkaar in één canvas |

Elk scherm is **1440×900** (desktop), met Inholland-stijl: magenta `#E3027F`, Lato, scherpe hoeken.

## Importeren in Figma

**Optie A — alle schermen in één keer (aanbevolen):**
1. Open een nieuw of bestaand Figma-bestand.
2. Sleep `all-screens.svg` direct op het canvas.
3. Figma maakt één frame met alle 10 schermen verticaal onder elkaar.
4. Selecteer de child-frames en convert naar artboards (`⌥A`) of versleep ze los.

**Optie B — per scherm afzonderlijk:**
1. Selecteer alle 10 `.svg`-bestanden in Finder.
2. Sleep ze samen op het Figma-canvas.
3. Figma plaatst ze als losse frames naast elkaar.

**Optie C — als afbeelding (geen vector-fidelity):**
1. Drag-drop een SVG met `⇧` ingedrukt → Figma maakt er een rastered image van.
2. Niet aanbevolen — verliest tekst-editing.

## Hergenereren

```bash
node figma-screens/build.js
```

Pas `figma-screens/build.js` aan om kleuren, tekst of layout te wijzigen — de generator is één bestand met helpers (`rect`, `text`, `card`, `button`, etc.) en één functie per scherm.

## Beperkingen

- **Emoji-iconen** worden door Figma als losse glyphs gerenderd — vervang ze voor productie door echte SVG-iconen of een icon-library.
- **Tekst-wrap** is benaderend (op woordlengte) — Figma's eigen tekst-engine doet het netter; check na import of regels logisch breken.
- Geen **componenten/instances** — SVG-import maakt elk element los. Voor herbruikbaarheid: zet de losse cards/buttons om naar Figma-components na import (selecteer + `⌥⌘K`).
- Geen variabelen/tokens — kleuren staan inline als hex. Optioneel: maak in Figma Color Variables met dezelfde waarden en re-bind je fills handmatig.
