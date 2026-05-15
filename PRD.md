# PRD — MBRT in Balans

**Slogan:** Van beeldvorming naar zelfvorming
**Opdrachtgever:** Hogeschool Inholland Haarlem, opleiding MBRT
**Doelgroep:** ±50–52 docenten en ondersteunend personeel (30–55 jaar)
**Versie:** 1.0 (concept-PRD voor prototype)
**Datum:** 2026-05-15

---

## 1. Context

### 1.1 Aanleiding
Medewerkers van de MBRT-afdeling van Hogeschool Inholland Haarlem ervaren structureel hoge werkdruk, mentale belasting en stress. De werkdag bestaat grotendeels uit zittend beeldschermwerk, met beperkte pauzemomenten en weinig structurele aandacht voor herstel, beweging en voeding. Eerder onderzoek (interviews, vragenlijsten en observaties binnen de afdeling) laat zien dat er motivatie is om aan vitaliteit te werken, maar dat oplossingen alleen werken als ze klein, snel en haalbaar zijn binnen een drukke werkdag.

### 1.2 Probleemstelling
Hoe kunnen we MBRT-medewerkers ondersteunen om beter met werkdruk om te gaan, zonder de werkdruk groter te maken — door kleine, haalbare leefstijlacties tijdens de werkdag te stimuleren?

### 1.3 Visie & positionering
*MBRT in Balans* is geen welzijnsapp die belooft werkdruk weg te nemen. De app maakt vitaliteit zichtbaar, praktisch en haalbaar gedurende de werkdag. Hij stimuleert micro-pauzes, korte beweegmomenten, herstelmomenten en gezonde voedingskeuzes — vanuit het idee *kleine actie, groot effect*.

De campagnemetafoor *"Van beeldvorming naar zelfvorming"* sluit aan bij de MBRT-context: medewerkers werken professioneel met beeldvorming voor patiënten, en mogen die zorg ook op zichzelf richten.

### 1.4 Beoogd resultaat
Aan het einde van een interventie van vijf weken:
- Medewerkers zijn zich bewuster van hun eigen herstel- en pauzegedrag.
- Het team heeft een gezamenlijke beweegervaring opgedaan.
- De afdeling heeft data en evaluatie om te besluiten over voortzetting of opschaling.

---

## 2. Doelen en succescriteria

### 2.1 Productdoelen
1. Stimuleer micro-pauzes, korte beweegmomenten, herstelmomenten en gezonde voedingskeuzes tijdens de werkdag.
2. Maak vitaliteit zichtbaar via een persoonlijk én gezamenlijk dashboard.
3. Geef de projectgroep/teamleider geanonimiseerde inzichten zonder individuele gezondheidsdata bloot te stellen.
4. Voeg geen extra werkdruk toe: alle interacties duren < 1 minuut tenzij de gebruiker bewust kiest voor langere actie.

### 2.2 Meetbare KPI's (na 5 weken)
| KPI | Doelwaarde |
|---|---|
| Medewerkers die deelnemen aan ≥ 1 onderdeel | ≥ 70% |
| Medewerkers met grotere bewustwording herstelmomenten | ≥ 60% |
| Medewerkers met meer inzicht in gezonde voeding | ≥ 70% |
| Actieve deelnemers beweegchallenge | ≥ 60% |
| Medewerkers die ≥ 3 micro-pauzes/werkweek doen | ≥ 60% |
| Voltooiingsgraad evaluatieformulier | ≥ 50% |

### 2.3 Niet-doelen (out of scope)
- De app is **geen** medische tool, geen dieetapp en geen prestatie-tracker.
- Geen integratie met externe wearables/HR-systemen in v1.
- Geen individuele ranglijsten of "shaming" mechanismen.
- Geen oplossing voor structurele werkdruk — dat blijft organisatorisch.

---

## 3. Doelgroep en gebruikersprofielen

### 3.1 Primaire persona — *Sanne (42), docent MBRT*
- Geeft les, beoordeelt verslagen, heeft veel beeldschermwerk.
- Pakt zelden bewust pauze, eet vaak achter haar bureau.
- Wil "iets" met vitaliteit, maar heeft geen tijd voor lange interventies.
- Houdt van duidelijke, korte acties en positieve toon.

### 3.2 Secundaire persona — *Mark (35), onderwijsondersteuner*
- Veel administratief werk, lange zittende dagen.
- Twijfelt of zo'n app voor hem is, doet mee als de drempel laag is.

### 3.3 Tertiaire persona — *Linda (49), projectgroeplid / teamleider vitaliteit*
- Wil weten hoe het team zich ontwikkelt zonder in privacy te treden.
- Maakt nudges en stuurt de campagne.

---

## 4. Gebruikersrollen en rechten

| Rol | Rechten |
|---|---|
| **Medewerker** | Eigen dashboard, registreren beweeg-/pauze-/herstelmomenten, deelnemen challenge, opslaan favoriete maaltijden, evaluatie invullen. |
| **Projectgroep / teamleider** | Geanonimiseerde groepsdata bekijken, motivatieberichten plaatsen, challenge-instellingen aanpassen, content (micro-pauzes, maaltijden) toevoegen, evaluatie exporteren. **Geen** toegang tot individuele scores. |

---

## 5. Huisstijl en designprincipes

### 5.1 Visuele identiteit
- **Inholland huisstijl** wordt gebruikt als visuele basis (bevestigd door opdrachtgever).
- Kleurpalet volgt Inholland: warm oranje als primair accent, donkergrijs/navy voor tekst, zacht groen/blauw als ondersteuning, ruim gebruik van wit.
- Typografie: Inholland-conform (moderne humanistische sans-serif zoals Source Sans / Inter als prototype-fallback).
- Logo's en beschermde merkmaterialen alleen toegepast voor zover officieel beschikbaar gesteld; tot die tijd typografische "MBRT in Balans"-mark.

### 5.2 UX-principes
1. **Rustig** — veel witruimte, één primaire actie per scherm.
2. **Snel** — kernactie binnen ≤ 2 taps bereikbaar vanaf het dashboard.
3. **Positief** — bevestigende, niet-belerende toon ("Goed bezig", nooit "Je hebt vandaag nog niets gedaan").
4. **Vrijwillig** — meldingen altijd uit te zetten of te pauzeren.
5. **MBRT-taal** — gebruik termen als beeldvorming, balans, herstel, energie, zelfvorming.
6. **Toegankelijk** — voldoende contrast (WCAG AA), schaalbare tekst, eenvoudige iconen met label.

---

## 6. Functionele scope

### 6.1 Persoonlijk dashboard (F1)
**Doel:** Gebruiker ziet in één oogopslag waar hij/zij staat en kan direct een actie starten.

**Inhoud:**
- Welkomsttekst: *"Welkom bij MBRT in Balans"* + naam.
- Dagelijkse vitaliteitsscore: energie, stressniveau, herstel (1–5 schaal, snelle invoer).
- Aantal stappen / beweegmomenten vandaag.
- Aantal genomen micro-pauzes.
- Aantal genomen herstelmomenten.
- Tip van de dag (bewegen, voeding, micro-pauze of ontspanning).
- 4 primaire knoppen: *Start micro-pauze*, *Start 2-min herstelmoment*, *Registreer beweegmoment*, *Bekijk lunchidee van vandaag*.

### 6.2 Micro-pauze module (F2)
**Doel:** Onderbreek langdurig zitten en mentale belasting met acties van 30 sec – 3 min.

**Functies:**
- Timers: 30 sec / 1 min / 2 min / 3 min.
- Categorieën: bewegen, ontspannen, ogen rust geven, houding verbeteren, ademhaling.
- Bibliotheek met 12+ voorbeeldoefeningen (zie brief, o.a. schouders losmaken, 20-20-20-regel, traplopen, bureau-reset).
- Afvinken, dagdoel ("Neem vandaag 3 micro-pauzes"), positieve feedback.
- Instelbare reminders (uur-interval of zelfgekozen tijden), pauzeer/uit-knop.
- Voorbeeld-meldingen: *"Tijd voor 60 seconden reset?"*, *"Van beeldvorming naar zelfvorming: neem een micro-pauze."*

### 6.3 Wandel- / beweegchallenge (F3)
**Doel:** Gezamenlijk teamdoel halen, zonder onderlinge competitie.

**Functies:**
- Dagelijks stappen of beweegmomenten registreren.
- Teamdoel met voortgangsbalk, bv. *"Samen op weg naar 500.000 stappen"*.
- Tussenstanden.
- Positieve badges: *Koffierondje-held*, *Wandeloverleg gestart*, *Micro-pauze master*, *Schermpauze genomen*.
- Korte motiverende reacties tussen collega's (geen prestatiedruk, geen ranglijst).

### 6.4 Herstelmomenten (F4)
**Doel:** Mentale en fysieke reset van 1–5 minuten.

**Inhoud:**
- Ademhalingsoefening 2 min, schermpauze-timer, nek-/schouderstretch, mini-wandeling, stiltemoment, post-overleg ademhaling.
- Korte reflectievraag: *"Wat heb je nu nodig om verder te kunnen?"*
- Reminders volledig configureerbaar door gebruiker.

### 6.5 Voedingsmodule (F5)
**Doel:** Concrete inspiratie voor ontbijt, lunch, tussendoortjes en drinken — bewustwording, geen dieet.

**Inhoud:**
- 5 ontbijtideeën, 10 lunchideeën, 10 tussendoortjes, 5 drink-tips, energie-dip tips (zie brief voor volledige lijst).
- *Maaltijd van de dag*, *Lunchbox-inspiratie*, *Gezonde snack van de dag*.
- Filters: vegetarisch, snel klaar, goedkoop, mee te nemen, warm, koud.
- Favorieten opslaan, "Ik heb vandaag bewust een gezonde keuze gemaakt" afvinken.
- Korte quizvragen, tips gekoppeld aan energie/concentratie.

### 6.6 Nudges en motivatieberichten (F6)
**Doel:** Korte, positieve duwtjes — nooit dwingend.

**Voorbeelden:** *"Tijd voor 2 minuten herstel?"*, *"Een korte wandeling telt ook mee."*, *"Samen houden we MBRT in balans."*

**Spelregels:**
- Maximaal 3 nudges per dag, gebruiker stelt frequentie en venster in.
- Snooze 1u / 1d / hele week.

### 6.7 Teamoverzicht (F7)
**Doel:** Geanonimiseerd inzicht voor projectgroep/teamleider.

**Metrics:** actieve deelnemers, deelnamepercentage, beweegmomenten, micro-pauzes, herstelmomenten, voedingsdeelname, meest gekozen micro-pauzes, meest bekeken maaltijden, geaggregeerde trends in energie/stress/herstel.

**Privacyregel:** geen data zichtbaar onder een drempel van *n* deelnemers (bv. n ≥ 5) om herleidbaarheid te voorkomen.

### 6.8 Evaluatieformulier (F8)
**Doel:** Eindmeting interventie.

**Vragen:** deelname challenge, micro-pauzes toegepast, meest haalbare pauzes, bewustwording herstel, inzicht voeding, bruikbaarheid maaltijdvoorbeelden, of de app heeft geholpen, wat prettig was, wat beter kan, voortzetten ja/nee.

### 6.9 Beheerdersdashboard (F9)
- Beheer micro-pauze-bibliotheek.
- Beheer maaltijdcatalogus.
- Plan nudges/motivatieberichten.
- Stel teamchallenges in (doel, periode, eenheid).
- Exporteer evaluatieresultaten (CSV).

### 6.10 Login/startscherm (F10)
- Onboarding van 3 schermen (wat is MBRT in Balans, wat doet de app, privacy & vrijwilligheid).
- Eenvoudige aanmelding (e-mail of Inholland-account in productie; in prototype: naamselectie uit dummylijst).

---

## 7. Schermen / Information Architecture

| # | Scherm | Primaire actie |
|---|---|---|
| 1 | Login / start | Inloggen of demo-account kiezen |
| 2 | Persoonlijk dashboard | Snelle vitaliteitsscore + 4 primaire knoppen |
| 3 | Micro-pauze module | Timer starten |
| 4 | Challengepagina | Stappen registreren / voortgang zien |
| 5 | Herstelmomenten | Oefening kiezen en uitvoeren |
| 6 | Voedingspagina | Maaltijdidee bekijken / favoriet maken |
| 7 | Teamvoortgang | Geanonimiseerde grafieken |
| 8 | Motivatieberichten | Berichten lezen / snoozen |
| 9 | Evaluatieformulier | Vragenlijst invullen |
| 10 | Beheerdersdashboard | Content / nudges beheren |

Navigatie: bottom-tab op mobiel (Dashboard, Pauze, Challenge, Voeding, Meer), hamburger/sidebar op desktop. Beheerdersdashboard alleen zichtbaar voor rol *projectgroep*.

---

## 8. Content & data

### 8.1 Voorbeeldcontent (verplicht in prototype)
- 12+ micro-pauze oefeningen met titel, categorie, duur, korte instructie.
- 5 ontbijt + 10 lunch + 10 tussendoortjes + 5 drink-items met titel, ingrediënten, tags (vega/snel/goedkoop/mee te nemen/warm/koud).
- 7 herstelmomenten.
- 15+ nudge-teksten.
- 5 badges met criteria.

### 8.2 Dummy data (voor prototype)
- 52 fictieve medewerkers met naam, rol, willekeurige deelname-historie over 5 weken.
- Geaggregeerde dagscores energie/stress/herstel.
- Stappenregistraties richting teamdoel 500.000.

---

## 9. Privacy & veiligheid

- **Geen persoonlijke databewaring in het prototype.** De app draait volledig op vooraf gegenereerde **testdata** (52 dummy-medewerkers); er wordt geen echte gezondheidsdata opgeslagen of verzonden.
- Eventuele invoer door demo-gebruikers blijft lokaal in `localStorage` van de browser en kan op elk moment gewist worden via *Reset demo-data*.
- Voor de pilot (zie §11): databewaring wordt apart vastgesteld voorafgaand aan livegang, conform Inholland-AVG-beleid. Tot die tijd geldt: alleen testdata, geen serverbackend.
- Individuele scores zijn nooit zichtbaar voor de teamleider — alleen geaggregeerde groepsdata met *n*-drempel (bv. n ≥ 5) tegen herleidbaarheid.
- Geen ranglijsten of individuele vergelijkingen.
- Onboarding maakt expliciet dat dit een pilot/prototype is en welke data lokaal bewaard wordt.

---

## 10. Tone of voice

- **Wel:** rustig, professioneel, vriendelijk, uitnodigend, kort.
- **Niet:** belerend, dwingend, ironisch, paternalistisch, prestatiegericht.
- Gebruik *je*-vorm. Gebruik herkenbare context: medewerkers, teamoverleg, werkdag, onderwijs, MBRT.

---

## 11. Roadmap — interventie van 5 weken

| Week | Fase | Activiteiten in app |
|---|---|---|
| 1 | Voorbereiding | App klaarzetten, teamchallenge aanmaken, micro-pauze reminders instellen, posters/QR koppelen, maaltijden invoeren. |
| 2 | Kick-off | Introductiescherm, uitleg, aanmelden medewerkers, start wandelchallenge, eerste gezamenlijke micro-pauze in teamoverleg. |
| 3 | Uitvoering | Dagelijkse tips, registratie beweeg-/pauze-/herstelmomenten, maaltijd van de dag, eerste tussenstand. |
| 4 | Motivatie & eindsprint | Tussenstanden delen, extra nudges, lunchbox-inspiratie, badge voor consistente micro-pauzers. |
| 5 | Evaluatie & afronding | Evaluatieformulier, samenvatting resultaten, advies voor vervolg. |

---

## 12. Technische scope (prototype)

### 12.1 Platform
- Webapp die werkt in moderne browsers (desktop én mobiel) — geen installatie nodig.
- Statische SPA: HTML / CSS / vanilla JS, geen backend in v1; data in `localStorage` + voorgegenereerde JSON met dummy gebruikers.
- Responsive ontwerp: mobile-first (bottom-tab navigatie), desktop met sidebar.

### 12.2 Bestandsstructuur (voorstel)
```
/index.html          — shell + alle schermen als secties
/styles.css          — Inholland-geïnspireerd thema
/app.js              — routing, interacties, timers, state
/data.js             — 52 dummy-medewerkers, content (pauzes, maaltijden, nudges)
/assets/             — iconen, illustraties (rechtenvrij)
```

### 12.3 Pilotpad (na prototype-oplevering)
- De app wordt **getoetst in een echte 5-weekse pilot** binnen de MBRT-afdeling.
- Pilot draait op het prototype + testdata; opdrachtgever beheert content zelf (zie §13).
- **Geen integratie** met externe Inholland-tools (Teams, Outlook) — bevestigd uit scope.
- Eventuele opschaling naar productie (backend, SSO, hosting binnen Inholland) is een vervolgbeslissing ná evaluatie van de pilot.

---

## 13. Beheer en aannames/risico's

### 13.1 Contentbeheer
- **De opdrachtgever is contentbeheerder** na oplevering en beheert micro-pauzes, maaltijden, nudges en challenge-instellingen via het beheerdersdashboard (F9).

### 13.2 Aannames en risico's

| # | Aanname / Risico | Mitigatie |
|---|---|---|
| A1 | Medewerkers gebruiken eigen smartphone of werklaptop tijdens pilot | Webapp werkt op beide; geen installatie nodig |
| A2 | Inholland huisstijl wordt gebruikt | Kleur, typografie en stijl conform; logo's pas na officiële vrijgave |
| R1 | Notificatiemoeheid | Default-meldingen laag (max 3/dag), volledig configureerbaar |
| R2 | Privacy-bezwaren tijdens pilot | Alleen testdata, anonimiteits-drempel in teamview, transparante onboarding |
| R3 | App voelt als extra werk | Alle kernacties < 1 min, één primaire actie per scherm |
| R4 | Lage adoptie | Kick-off in teamoverleg, posters/QR, gezamenlijke challenge zonder ranglijst |
| R5 | Eén contentbeheerder = single point of failure | Beheerdersdashboard ondersteunt CSV-import/export zodat content overdraagbaar blijft |

---

## 14. Verificatie / acceptatiecriteria

Het prototype is klaar wanneer:
1. Alle 10 schermen bestaan en navigeerbaar zijn.
2. Een gebruiker kan: vitaliteitsscore invullen, micro-pauze starten met timer, beweegmoment registreren, maaltijd bekijken/favoriet maken, evaluatie invullen.
3. Het teamdashboard toont geaggregeerde data van 52 dummy-medewerkers, zonder individuele scores.
4. De app draait door `index.html` te openen — geen build-stap, geen netwerkafhankelijkheid.
5. Visuele controle op desktop (≥ 1280px) en mobiel (375px) — geen overlap, leesbare typografie, primaire actie altijd zichtbaar.
6. Toegankelijkheid: tab-navigatie werkt, contrast voldoet aan WCAG AA, focus-states zichtbaar.
7. Tone of voice gecheckt: geen belerende of dwingende formuleringen.
8. Privacy: teamdashboard toont nergens een individuele naam in combinatie met gezondheidsdata.

**Testscenario (golden path):**
> Open `index.html` → kies dummy-medewerker "Sanne" → vul vitaliteitsscore in → start micro-pauze van 1 min → registreer 2.000 stappen → bekijk lunchidee → markeer als gezonde keuze → schakel naar rol *projectgroep* → bekijk teamvoortgang → vul evaluatie in.

---

## 15. Beslissingen door opdrachtgever (vastgelegd)

| Onderwerp | Beslissing |
|---|---|
| Huisstijl | Inholland huisstijl wordt gebruikt |
| Databewaring | Geen — alleen testdata in het prototype |
| Inzet | Wordt getoetst in een echte 5-weekse pilot |
| Tool-integratie | Geen integratie met Teams/Outlook |
| Contentbeheer | Opdrachtgever beheert content zelf |
