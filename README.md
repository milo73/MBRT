# MBRT in Balans — prototype

Webapp-prototype voor de vitaliteitscampagne **MBRT in Balans** (campagne *Van beeldvorming naar zelfvorming*) — Hogeschool Inholland, opleiding MBRT.

Zie [`PRD.md`](./PRD.md) voor de volledige product requirements.

## Live demo deployen (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/milo73/MBRT)

**Aanbevolen route (geen CLI, geen config):**
1. Ga naar [vercel.com/new](https://vercel.com/new) en log in met je GitHub-account.
2. Kies *Import Git Repository* → selecteer `milo73/MBRT`.
3. Laat alle instellingen op de standaardwaarden (Framework Preset = *Other*, Build Command leeg, Output Directory = `./`).
4. Klik **Deploy** — binnen ~30 seconden krijg je een live URL als `mbrt-xxx.vercel.app`.

Vercel detecteert automatisch dat het een statische site is (`index.html` in de root). Geen build-step nodig.

**Alternatief — Vercel CLI:**
```bash
npm i -g vercel
vercel             # eerste keer: log in via browser
vercel --prod      # productie-deploy
```

Elke push naar `main` (of een PR) krijgt automatisch een nieuwe preview-URL zodra het project gekoppeld is.

## Lokaal openen

Open `index.html` direct in een moderne browser (Chrome, Edge, Firefox, Safari) — desktop of mobiel.
Geen build, geen server, geen netwerkafhankelijkheid (behalve het laden van het Inter-font).

### Demo-accounts

In het inlogscherm staan 52 dummy-medewerkers. Eén account heeft de rol **projectgroep** en ziet het beheerdersdashboard:

- *Linda Jansen* — projectgroep / teamleider

Alle andere accounts zijn medewerker-rol.

### Golden-path testscenario

1. Open `index.html` en doorloop de 3 onboarding-slides.
2. Kies *Sanne Bakker* → klik **Aanmelden**.
3. Vul je vitaliteitsscore in (energie/stress/herstel, 1–5).
4. Klik **Start micro-pauze** → timer 1 min → klik **Klaar**.
5. Ga naar **Beweegchallenge** → klik **+2.000 stappen**.
6. Ga naar **Voeding** → bekijk *Maaltijd van de dag* → favoriet ★ → "Ik heb bewust gezond gekozen".
7. Log uit en log in als *Linda Jansen* (projectgroep) → bekijk **Teamvoortgang** en **Beheer**.
8. Ga terug naar Sanne en vul de **Evaluatie** in.

## Privacy

- Alle data is **testdata** (52 fictieve medewerkers).
- Eventuele invoer blijft lokaal in je browser (`localStorage`) en kan worden gewist via **Reset demo-data** in de sidebar.
- Het teamdashboard toont uitsluitend geaggregeerde groepsdata met een drempel van ≥ 5 deelnemers — nooit individuele scores.

## Bestandsstructuur

```
index.html   — alle 10 schermen
styles.css   — Inholland-geïnspireerd thema
app.js       — routing, timers, state, interacties
data.js      — content (pauzes, maaltijden, nudges) + 52 dummy-medewerkers
PRD.md       — product requirements document
```
