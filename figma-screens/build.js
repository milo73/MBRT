// Generator: produces 10 SVG screen designs for Figma import.
// Run with: node figma-screens/build.js
// Output:   figma-screens/01-login.svg ... 10-beheer.svg + all-screens.svg

const fs = require("fs");
const path = require("path");

const C = {
  magenta:      "#E3027F",
  magentaSoft:  "#FCE6F2",
  magentaDeep:  "#B40066",
  black:        "#1A1A1A",
  white:        "#FFFFFF",
  muted:        "#5A5A5A",
  line:         "#E1E1E1",
  lineStrong:   "#B0B0B0",
  bg:           "#FFFFFF",
};

const FONT = "Lato, 'Helvetica Neue', Arial, sans-serif";
const W = 1440, H = 900;

const esc = s => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

const rect = (x,y,w,h,fill,opts={}) => {
  const stroke = opts.stroke ? ` stroke="${opts.stroke}" stroke-width="${opts.sw||1}"` : "";
  const r = opts.r ? ` rx="${opts.r}" ry="${opts.r}"` : "";
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${stroke}${r}/>`;
};

const text = (x,y,t,opts={}) => {
  const size = opts.size || 16;
  const weight = opts.weight || 400;
  const color = opts.color || C.black;
  const anchor = opts.anchor || "start";
  const tt = opts.upper ? String(t).toUpperCase() : t;
  const ls = opts.letterSpacing ? ` letter-spacing="${opts.letterSpacing}"` : "";
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}"${ls}>${esc(tt)}</text>`;
};

const eyebrow = (x,y,t,color=C.magenta) =>
  text(x, y, t, { size:12, weight:700, color, upper:true, letterSpacing:1 });

// ---------- shared sidebar ----------
function sidebar(active) {
  const items = [
    { icon:"🏠", label:"Dashboard",         key:"dashboard" },
    { icon:"⏱", label:"Micro-pauze",       key:"micropauze" },
    { icon:"👟", label:"Beweegchallenge",   key:"challenge" },
    { icon:"🌿", label:"Herstelmomenten",   key:"herstel" },
    { icon:"🥗", label:"Voeding",           key:"voeding" },
    { icon:"💬", label:"Motivatie",         key:"motivatie" },
    { icon:"👥", label:"Teamvoortgang",     key:"team" },
    { icon:"📝", label:"Evaluatie",         key:"evaluatie" },
  ];
  let s = "";
  // sidebar bg + border
  s += rect(0, 0, 240, H, C.white);
  s += rect(239, 0, 1, H, C.line);
  // brand
  s += rect(20, 20, 28, 28, C.magenta);
  s += text(58, 32, "MBRT in Balans", { size:14, weight:900 });
  s += text(58, 50, "Sanne Bakker", { size:12, weight:400, color:C.muted });
  s += rect(20, 72, 200, 1, C.line);
  // nav
  let y = 92;
  for (const it of items) {
    const isActive = it.key === active;
    if (isActive) {
      s += rect(0, y - 4, 240, 36, C.white);
      s += rect(0, y - 4, 3, 36, C.magenta);
    }
    s += text(24, y + 16, it.icon, { size:16 });
    s += text(48, y + 16, it.label, { size:15, weight:700, color: isActive ? C.magenta : C.black });
    y += 40;
  }
  // footer
  s += text(20, H - 50, "Reset demo-data", { size:13, weight:700, color:C.black });
  s += text(20, H - 26, "Uitloggen", { size:13, weight:700, color:C.muted });
  return s;
}

// ---------- shared header ----------
function header(eyebrowText, title, sub, week) {
  let s = "";
  s += eyebrow(280, 56, eyebrowText);
  s += text(280, 96, title, { size:32, weight:900 });
  if (sub) s += text(280, 124, sub, { size:16, weight:400, color:C.muted });
  if (week) {
    s += rect(1280, 44, 120, 32, C.magentaSoft, { r:999 });
    s += text(1340, 64, `Week ${week}`, { size:13, weight:700, color:C.magentaDeep, anchor:"middle" });
  }
  return s;
}

function card(x, y, w, h, content) {
  return rect(x, y, w, h, C.white, { stroke:C.line }) + content;
}

function pill(x, y, w, h, fill, stroke, label, color) {
  return rect(x, y, w, h, fill, { stroke, r:999 }) +
    text(x + w/2, y + h/2 + 4, label, { size:13, weight:700, color, anchor:"middle" });
}

function chip(x, y, label, active=false) {
  const w = Math.max(60, label.length * 8 + 24);
  const fill = active ? C.magenta : C.white;
  const color = active ? C.white : C.black;
  const stroke = active ? C.magenta : C.line;
  return pill(x, y, w, 30, fill, stroke, label, color);
}

function button(x, y, label, variant="primary") {
  const w = Math.max(140, label.length * 8 + 40);
  if (variant === "primary") {
    return rect(x, y, w, 44, C.magenta) +
      text(x + w/2, y + 28, label, { size:15, weight:700, color:C.white, anchor:"middle" });
  }
  if (variant === "secondary") {
    return rect(x, y, w, 44, C.white, { stroke:C.black, sw:2 }) +
      text(x + w/2, y + 28, label, { size:15, weight:700, color:C.black, anchor:"middle" });
  }
  return rect(x, y, w, 44, C.white, { stroke:C.lineStrong, sw:1 }) +
    text(x + w/2, y + 28, label, { size:15, weight:700, color:C.black, anchor:"middle" });
}

function statCard(x, y, w, icon, num, label) {
  return rect(x, y, w, 110, C.white, { stroke:C.line }) +
    text(x + 20, y + 36, icon, { size:22 }) +
    text(x + 20, y + 74, num, { size:28, weight:900 }) +
    text(x + 20, y + 96, label, { size:13, weight:400, color:C.muted });
}

function tipCard(x, y, w, h, body) {
  return rect(x, y, w, h, C.magenta) +
    text(x + 24, y + 32, "TIP VAN DE DAG", { size:12, weight:700, color:C.white, letterSpacing:1, upper:false }) +
    multilineText(x + 24, y + 60, w - 48, body, { size:16, weight:400, color:C.white });
}

function multilineText(x, y, maxW, str, opts={}) {
  const size = opts.size || 16;
  const lineH = opts.lineH || Math.round(size * 1.5);
  const approxChar = size * 0.5;
  const charsPerLine = Math.floor(maxW / approxChar);
  const words = String(str).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > charsPerLine) {
      if (cur) lines.push(cur);
      cur = w;
    } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  return lines.map((l,i) => text(x, y + i*lineH, l, opts)).join("");
}

function scalePip(x, y, n, selected) {
  const fill = selected ? C.magenta : C.white;
  const color = selected ? C.white : C.muted;
  const stroke = selected ? C.magenta : C.line;
  return rect(x, y, 48, 36, fill, { stroke }) +
    text(x + 24, y + 24, n, { size:15, weight:700, color, anchor:"middle" });
}

// ============================================================
// SCREEN 1 — LOGIN
// ============================================================
function login() {
  let s = "";
  // background split
  s += rect(0, 0, W, H, C.white);
  s += rect(W/2, 0, W/2, H, C.magenta);
  // centered card
  const cx = W/2 - 240, cy = H/2 - 240;
  s += rect(cx, cy, 480, 480, C.white, { stroke:C.line });
  s += rect(cx + 40, cy + 40, 28, 28, C.magenta);
  s += text(cx + 78, cy + 52, "MBRT in Balans", { size:18, weight:900 });
  s += text(cx + 78, cy + 70, "Van beeldvorming naar zelfvorming", { size:12, weight:400, color:C.muted });
  s += eyebrow(cx + 40, cy + 132, "WELKOM");
  s += text(cx + 40, cy + 168, "Kleine acties, grote winst", { size:24, weight:900 });
  s += multilineText(cx + 40, cy + 200, 400,
    "MBRT in Balans helpt jou tijdens een drukke werkdag korte beweeg-, herstel- en pauzemomenten in te bouwen.",
    { size:15, weight:400, color:C.muted, lineH:22 });
  // dots
  s += rect(cx + 40, cy + 296, 8, 8, C.magenta, { r:4 });
  s += rect(cx + 54, cy + 296, 8, 8, C.line, { r:4 });
  s += rect(cx + 68, cy + 296, 8, 8, C.line, { r:4 });
  // field
  s += text(cx + 40, cy + 348, "Kies een demo-account", { size:14, weight:700 });
  s += rect(cx + 40, cy + 360, 400, 44, C.white, { stroke:C.lineStrong });
  s += text(cx + 56, cy + 388, "Sanne Bakker", { size:15, weight:400 });
  s += text(cx + 420, cy + 388, "▾", { size:14, color:C.muted });
  // buttons
  s += button(cx + 40, cy + 416, "Aanmelden", "primary");
  return s;
}

// ============================================================
// SCREEN 2 — DASHBOARD
// ============================================================
function dashboard() {
  let s = sidebar("dashboard");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("VANDAAG", "Welkom, Sanne", "Hoe is je werkdag tot nu toe?", 3);
  // vitaliteit card
  s += rect(280, 160, 1120, 156, C.white, { stroke:C.line });
  s += text(300, 192, "Hoe voel je je nu?", { size:18, weight:700 });
  s += text(300, 214, "Drie tikken, klaar.", { size:13, weight:400, color:C.muted });
  const vGroups = [["Energie", 4],["Stress", 3],["Herstel", 4]];
  vGroups.forEach((g, gi) => {
    const gx = 300 + gi * 370;
    s += text(gx, 248, g[0], { size:13, weight:400, color:C.muted });
    for (let i=1; i<=5; i++) {
      s += scalePip(gx + (i-1)*54, 256, String(i), i === g[1]);
    }
  });
  // stat row
  s += statCard(280, 336, 260, "👟", "19.000", "stappen / beweegmomenten");
  s += statCard(560, 336, 260, "⏱", "4", "micro-pauzes");
  s += statCard(840, 336, 260, "🌿", "0", "herstelmomenten");
  s += tipCard(1120, 336, 280, 110, "Combineer koolhydraten met eiwitten voor langer aanhoudende energie.");
  // actions
  s += rect(280, 466, 1120, 130, C.white, { stroke:C.line });
  s += text(300, 498, "Eén tap, klaar", { size:18, weight:700 });
  s += button(300, 524, "▶ Start micro-pauze", "primary");
  s += button(500, 524, "🌿 2-min herstelmoment", "primary");
  s += button(740, 524, "👟 Registreer beweegmoment", "secondary");
  s += button(1010, 524, "🥗 Lunchidee vandaag", "secondary");
  return s;
}

// ============================================================
// SCREEN 3 — MICRO-PAUZE
// ============================================================
function micropauze() {
  let s = sidebar("micropauze");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("MICRO-PAUZE", "Kleine pauze, grote winst", "30 seconden tot 3 minuten. Even los van het scherm.", 3);
  // daily goal
  s += rect(280, 160, 1120, 96, C.white, { stroke:C.line });
  s += text(300, 192, "Dagdoel", { size:18, weight:700 });
  s += text(300, 216, "Neem vandaag 3 micro-pauzes.", { size:13, weight:400, color:C.muted });
  // progress ring (circle)
  s += `<circle cx="1340" cy="208" r="28" fill="${C.magentaSoft}" stroke="${C.magenta}" stroke-width="6"/>`;
  s += text(1340, 213, "2 / 3", { size:12, weight:700, anchor:"middle" });
  // category chips
  s += rect(280, 276, 1120, 68, C.white, { stroke:C.line });
  s += text(300, 304, "Categorie", { size:15, weight:700 });
  const cats = ["Alle","Bewegen","Ontspannen","Ogen","Houding","Ademhaling"];
  let cx = 300;
  for (let i=0; i<cats.length; i++) {
    const w = Math.max(60, cats[i].length * 8 + 24);
    s += chip(cx, 314, cats[i], i === 0);
    cx += w + 8;
  }
  // exercise grid
  const exes = [
    { icon:"🧘", t:"Schouders losmaken",        d:"Sta op en draai 30 seconden je schouders rustig rond.", dur:"30 sec" },
    { icon:"💪", t:"Nek- en schouderstretch",   d:"Leg je oor richting je schouder. 15 sec per kant.",     dur:"1 min" },
    { icon:"👀", t:"20-20-20 oogrust",          d:"Kijk 20 seconden naar iets op 6 meter afstand.",        dur:"1 min" },
    { icon:"🌬", t:"Rustig ademhalen",         d:"Adem 4 sec in, houd 2 sec vast, 6 sec uit. 6×.",         dur:"1 min" },
    { icon:"🖨", t:"Loopje naar de printer",   d:"Sta op en loop rustig naar de koffieruimte.",            dur:"2 min" },
    { icon:"🪜", t:"Traplopen",                 d:"Loop één verdieping op en weer terug.",                 dur:"2 min" },
  ];
  for (let i=0; i<exes.length; i++) {
    const col = i % 3, row = Math.floor(i / 3);
    const ex = exes[i];
    const x = 280 + col * 374, y = 364 + row * 134;
    s += rect(x, y, 360, 120, C.white, { stroke:C.line });
    s += text(x + 18, y + 40, ex.icon, { size:24 });
    s += text(x + 56, y + 36, ex.t, { size:15, weight:700 });
    s += multilineText(x + 56, y + 58, 240, ex.d, { size:13, weight:400, color:C.muted, lineH:18 });
    // duration pill
    s += rect(x + 290, y + 18, 56, 22, C.magentaSoft, { r:999 });
    s += text(x + 318, y + 34, ex.dur, { size:11, weight:700, color:C.magentaDeep, anchor:"middle" });
  }
  return s;
}

// ============================================================
// SCREEN 4 — BEWEEGCHALLENGE
// ============================================================
function challenge() {
  let s = sidebar("challenge");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("TEAMCHALLENGE", "Samen op weg naar 500.000 stappen", "Geen ranglijst, geen prestatiedruk. Elke stap telt.", 3);
  // progress card
  s += rect(280, 160, 1120, 130, C.white, { stroke:C.line });
  s += rect(300, 184, 1080, 14, C.line, { r:999 });
  s += rect(300, 184, 480, 14, C.magenta, { r:999 });
  s += text(300, 230, "247.500", { size:24, weight:900 });
  s += text(380, 230, "van 500.000 stappen", { size:15, weight:400, color:C.muted });
  s += text(300, 258, "Samen al 49,5% onderweg. Jouw bijdrage vandaag: 19.000 stappen.", { size:13, weight:400, color:C.muted });
  // register
  s += rect(280, 310, 1120, 138, C.white, { stroke:C.line });
  s += text(300, 342, "Registreer je beweegmoment", { size:18, weight:700 });
  s += button(300, 360, "+500 stappen", "secondary");
  s += button(440, 360, "+1.000 stappen", "secondary");
  s += button(600, 360, "+2.000 stappen", "secondary");
  s += button(760, 360, "+5.000 stappen", "secondary");
  s += rect(300, 412, 280, 32, C.white, { stroke:C.lineStrong });
  s += text(316, 432, "aantal stappen", { size:14, weight:400, color:C.muted });
  s += button(596, 408, "Toevoegen", "primary");
  // badges
  s += rect(280, 468, 1120, 220, C.white, { stroke:C.line });
  s += text(300, 500, "Behaalde badges", { size:18, weight:700 });
  const badges = [
    { i:"☕", t:"Koffierondje-held",  c:"5x loopje gemaakt", unlocked:true },
    { i:"🚶", t:"Wandeloverleg",      c:"1x staand overleg", unlocked:true },
    { i:"⏱", t:"Micro-pauze master", c:"15 micro-pauzes",   unlocked:false },
    { i:"👀", t:"Schermpauze",        c:"5x schermpauze",    unlocked:false },
    { i:"🥗", t:"Bewuste keuze",      c:"5x gezond gekozen", unlocked:false },
  ];
  badges.forEach((b, i) => {
    const x = 300 + i * 214, y = 524;
    const fill = b.unlocked ? C.magentaSoft : "#F4F5F8";
    const stroke = b.unlocked ? C.magenta : C.line;
    s += rect(x, y, 200, 140, fill, { stroke });
    s += text(x + 100, y + 50, b.i, { size:30, anchor:"middle" });
    s += text(x + 100, y + 84, b.t, { size:13, weight:700, anchor:"middle" });
    s += text(x + 100, y + 108, b.c, { size:11, weight:400, color:C.muted, anchor:"middle" });
  });
  return s;
}

// ============================================================
// SCREEN 5 — HERSTELMOMENTEN
// ============================================================
function herstel() {
  let s = sidebar("herstel");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("HERSTELMOMENTEN", "1 tot 5 minuten voor jezelf", "Mentale en fysieke reset. Kies wat past bij dit moment.", 3);
  const list = [
    { icon:"🌬", t:"Ademhalingsoefening", d:"Twee minuten rustig in- en uitademen. Adem laag in je buik.", dur:"2 min" },
    { icon:"👀", t:"Schermpauze",         d:"Drie minuten weg van het scherm. Kijk uit het raam.",          dur:"3 min" },
    { icon:"💆", t:"Nek- en schouderstretch", d:"Maak rustige rondjes met je schouders.",                  dur:"2 min" },
    { icon:"🚶", t:"Mini-wandeling",      d:"Vijf minuten naar buiten of door de gang.",                    dur:"5 min" },
    { icon:"🤫", t:"Stiltemoment",        d:"Twee minuten niets. Geen scherm, geen gesprek.",              dur:"2 min" },
    { icon:"🔄", t:"Reset na overleg",    d:"Drie ademhalingen, even rondkijken, dan pas verder.",          dur:"3 min" },
  ];
  list.forEach((ex, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 280 + col * 374, y = 168 + row * 134;
    s += rect(x, y, 360, 120, C.white, { stroke:C.line });
    s += text(x + 18, y + 40, ex.icon, { size:24 });
    s += text(x + 56, y + 36, ex.t, { size:15, weight:700 });
    s += multilineText(x + 56, y + 58, 240, ex.d, { size:13, weight:400, color:C.muted, lineH:18 });
    s += rect(x + 290, y + 18, 56, 22, C.magentaSoft, { r:999 });
    s += text(x + 318, y + 34, ex.dur, { size:11, weight:700, color:C.magentaDeep, anchor:"middle" });
  });
  // reflect card
  s += rect(280, 460, 1120, 160, C.white, { stroke:C.line });
  s += eyebrow(300, 488, "KORTE REFLECTIE");
  s += text(300, 520, "Wat heb je nu nodig om verder te kunnen?", { size:20, weight:900 });
  s += rect(300, 540, 760, 44, C.white, { stroke:C.lineStrong });
  s += text(316, 568, "Eén woord is genoeg…", { size:14, weight:400, color:C.muted });
  s += button(300, 596, "Opslaan voor jezelf", "secondary");
  return s;
}

// ============================================================
// SCREEN 6 — VOEDING
// ============================================================
function voeding() {
  let s = sidebar("voeding");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("VOEDING", "Gezonde keuzes, haalbaar in je werkdag", "Inspiratie, geen voorschriften.", 3);
  // maaltijd van de dag
  s += rect(280, 160, 1120, 160, C.magenta);
  s += text(300, 192, "MAALTIJD VAN DE DAG", { size:12, weight:700, color:C.white, letterSpacing:1 });
  s += text(300, 232, "Volkoren wrap met kip", { size:28, weight:900, color:C.white });
  s += text(300, 258, "Volkoren wrap, kipfilet, hummus, sla, komkommer, paprika", { size:14, weight:400, color:C.white });
  s += rect(300, 280, 140, 36, C.white);
  s += text(370, 304, "★ Favoriet", { size:14, weight:700, anchor:"middle" });
  s += rect(454, 280, 280, 36, "transparent", { stroke:C.white, sw:2 });
  s += text(594, 304, "Ik koos bewust gezond", { size:14, weight:700, color:C.white, anchor:"middle" });
  // filters
  s += rect(280, 340, 1120, 64, C.white, { stroke:C.line });
  s += text(300, 366, "Filters", { size:15, weight:700 });
  const filters = ["alle","vega","snel","goedkoop","mee te nemen","warm","koud"];
  let cx = 300;
  filters.forEach((f, i) => {
    const w = Math.max(60, f.length * 8 + 24);
    s += chip(cx, 376, f, i === 0);
    cx += w + 8;
  });
  // meal grid
  const meals = [
    { t:"Avocado-ei boterham",    ing:"Volkoren brood, avocado, ei, tomaat",       tags:["vega","snel"] },
    { t:"Couscous-salade",        ing:"Couscous, kikkererwten, feta, rucola",      tags:["vega","koud"] },
    { t:"Linzensoep",             ing:"Linzen, ui, wortel, bouillon",              tags:["vega","warm"] },
    { t:"Quinoabowl met tofu",    ing:"Quinoa, tofu, groente, yoghurtsaus",        tags:["vega","warm"] },
    { t:"Omelet met spinazie",    ing:"Ei, spinazie, champignons, brood",          tags:["vega","warm"] },
    { t:"Pastasalade tonijn",     ing:"Volkoren pasta, tonijn, paprika, mais",     tags:["koud"] },
  ];
  meals.forEach((m, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 280 + col * 374, y = 424 + row * 134;
    s += rect(x, y, 360, 120, C.white, { stroke:C.line });
    s += text(x + 18, y + 32, m.t, { size:15, weight:700 });
    s += text(x + 340, y + 30, "★", { size:18, color:C.magenta, anchor:"end" });
    s += multilineText(x + 18, y + 54, 320, m.ing, { size:13, weight:400, color:C.muted, lineH:18 });
    let tx = x + 18;
    m.tags.forEach(tag => {
      const w = Math.max(40, tag.length * 7 + 16);
      s += rect(tx, y + 88, w, 20, C.magentaSoft, { r:999 });
      s += text(tx + w/2, y + 102, tag, { size:11, weight:700, color:C.magentaDeep, anchor:"middle" });
      tx += w + 6;
    });
  });
  return s;
}

// ============================================================
// SCREEN 7 — MOTIVATIE
// ============================================================
function motivatie() {
  let s = sidebar("motivatie");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("MOTIVATIE", "Korte duwtjes, jouw tempo", "Maximaal 3 per dag. Snooze altijd mogelijk.", 3);
  const nudges = [
    "Tijd voor 60 seconden reset?",
    "Even opstaan? Eén minuut is genoeg.",
    "Geef je ogen kort rust.",
    "Van beeldvorming naar zelfvorming: neem een micro-pauze.",
    "Kleine pauze, grote winst voor je energie.",
    "Een korte wandeling telt ook mee.",
    "Samen houden we MBRT in balans.",
    "Hoe staat je houding er nu bij?",
  ];
  nudges.forEach((n, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 280 + col * 280, y = 168 + row * 130;
    s += rect(x, y, 264, 116, C.white, { stroke:C.line });
    s += rect(x, y, 4, 116, C.magenta);
    s += eyebrow(x + 20, y + 32, "NUDGE");
    s += multilineText(x + 20, y + 62, 224, n, { size:14, weight:400, lineH:20 });
  });
  // settings
  s += rect(280, 444, 1120, 200, C.white, { stroke:C.line });
  s += text(300, 476, "Voorkeuren", { size:18, weight:700 });
  // toggle row
  s += rect(300, 504, 36, 20, C.magenta, { r:999 });
  s += `<circle cx="328" cy="514" r="8" fill="${C.white}"/>`;
  s += text(348, 520, "Nudges aan", { size:14, weight:400 });
  // dropdown
  s += text(300, 558, "Tijdvenster", { size:14, weight:700 });
  s += rect(300, 568, 400, 40, C.white, { stroke:C.lineStrong });
  s += text(316, 594, "Werkdag (09:00–17:00)", { size:14, weight:400 });
  s += text(680, 594, "▾", { size:14, color:C.muted, anchor:"end" });
  // snooze buttons
  s += button(720, 564, "Snooze 1 uur", "ghost");
  s += button(870, 564, "Snooze vandaag", "ghost");
  s += button(1040, 564, "Snooze week", "ghost");
  return s;
}

// ============================================================
// SCREEN 8 — TEAMVOORTGANG
// ============================================================
function team() {
  let s = sidebar("team");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("TEAM", "Hoe doet MBRT het samen?", "Alleen geanonimiseerde groepsdata. Individuele scores nooit zichtbaar.", 3);
  const stats = [
    { i:"👥", n:"36",  l:"actieve deelnemers" },
    { i:"📊", n:"69%", l:"deelnamepercentage" },
    { i:"⏱", n:"118", l:"micro-pauzes" },
    { i:"🌿", n:"54",  l:"herstelmomenten" },
    { i:"👟", n:"82",  l:"beweegmomenten" },
    { i:"🥗", n:"47",  l:"gezonde keuzes" },
  ];
  stats.forEach((st, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 280 + col * 374, y = 168 + row * 130;
    s += statCard(x, y, 360, st.i, st.n, st.l);
  });
  // trend chart
  s += rect(280, 432, 1120, 200, C.white, { stroke:C.line });
  s += text(300, 464, "Trend per week — gemiddelden op groepsniveau", { size:18, weight:700 });
  const wks = [
    { e:3.1, st:3.4, h:2.9 },
    { e:3.2, st:3.1, h:3.1 },
    { e:3.3, st:2.9, h:3.2 },
    { e:3.4, st:2.7, h:3.4 },
    { e:3.5, st:2.5, h:3.6 },
  ];
  wks.forEach((w, i) => {
    const x = 320 + i * 220, baseY = 600;
    const h = v => Math.max(10, v * 26);
    s += rect(x,       baseY - h(w.e),  16, h(w.e),  C.magenta);
    s += rect(x + 22,  baseY - h(w.st), 16, h(w.st), "#E0A40C");
    s += rect(x + 44,  baseY - h(w.h),  16, h(w.h),  "#2EA86A");
    s += text(x + 32, baseY + 16, `Week ${i+1}`, { size:11, weight:400, color:C.muted, anchor:"middle" });
  });
  // top lists
  s += rect(280, 652, 552, 200, C.white, { stroke:C.line });
  s += text(300, 684, "Meest gekozen micro-pauzes", { size:18, weight:700 });
  ["20-20-20 oogrust 142×","Nek- en schouderstretch 118×","Rustig ademhalen 96×","Mini-wandeling 84×"].forEach((t, i) => {
    s += text(300, 716 + i*22, `${i+1}. ${t}`, { size:14, weight:400 });
  });
  s += rect(848, 652, 552, 200, C.white, { stroke:C.line });
  s += text(868, 684, "Meest bekeken maaltijden", { size:18, weight:700 });
  ["Volkoren wrap met kip 73×","Couscous-salade 58×","Linzensoep 49×","Omelet met spinazie 41×"].forEach((t, i) => {
    s += text(868, 716 + i*22, `${i+1}. ${t}`, { size:14, weight:400 });
  });
  return s;
}

// ============================================================
// SCREEN 9 — EVALUATIE
// ============================================================
function evaluatie() {
  let s = sidebar("evaluatie");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("EVALUATIE", "Vertel hoe het ging", "Vijf weken later. Anoniem, kost ongeveer 2 minuten.");
  s += rect(280, 160, 1120, 700, C.white, { stroke:C.line });
  const questions = [
    { type:"yesno",   q:"Heb je deelgenomen aan de wandelchallenge?",          a:"ja" },
    { type:"yesno",   q:"Heb je micro-pauzes toegepast tijdens de werkdag?",   a:"ja" },
    { type:"text",    q:"Welke micro-pauzes vond je het meest haalbaar?" },
    { type:"scale",   q:"Heb je meer bewustwording gekregen over herstelmomenten?", a:"4" },
    { type:"scale",   q:"Heb je meer inzicht gekregen in gezonde voedingskeuzes?",  a:"5" },
    { type:"yesno",   q:"Hebben de maaltijdvoorbeelden je geholpen?" },
  ];
  let y = 200;
  questions.forEach((qu, idx) => {
    s += text(300, y + 16, qu.q, { size:15, weight:700 });
    if (qu.type === "yesno") {
      const ja = qu.a === "ja";
      s += rect(300, y + 30, 70, 28, ja ? C.magenta : C.white, { stroke: ja ? C.magenta : C.line, r:999 });
      s += text(335, y + 49, "Ja", { size:13, weight:700, color: ja ? C.white : C.black, anchor:"middle" });
      s += rect(378, y + 30, 70, 28, !ja && qu.a === "nee" ? C.magenta : C.white, { stroke:C.line, r:999 });
      s += text(413, y + 49, "Nee", { size:13, weight:700, color: C.black, anchor:"middle" });
    } else if (qu.type === "scale") {
      for (let i=1; i<=5; i++) {
        const sel = qu.a === String(i);
        s += rect(300 + (i-1)*48, y + 30, 40, 28, sel ? C.magenta : C.white, { stroke: sel ? C.magenta : C.line, r:999 });
        s += text(320 + (i-1)*48, y + 49, String(i), { size:13, weight:700, color: sel ? C.white : C.black, anchor:"middle" });
      }
    } else {
      s += rect(300, y + 30, 800, 60, C.white, { stroke:C.lineStrong });
      s += text(316, y + 50, "Korte reactie…", { size:13, weight:400, color:C.muted });
    }
    if (idx < questions.length - 1) s += rect(300, y + 102, 1080, 1, C.line);
    y += (qu.type === "text") ? 122 : 102;
  });
  s += button(300, 780, "Versturen", "primary");
  return s;
}

// ============================================================
// SCREEN 10 — BEHEER (admin)
// ============================================================
function beheer() {
  let s = sidebar("admin");
  s += rect(240, 0, W - 240, H, "#FAFAFA");
  s += header("BEHEER · ALLEEN PROJECTGROEP", "Beheerdersdashboard", "Beheer content, challenges en plan nudges.");
  // challenge settings
  s += rect(280, 160, 552, 200, C.white, { stroke:C.line });
  s += text(300, 192, "Challenge-instellingen", { size:18, weight:700 });
  s += text(300, 226, "Teamdoel (stappen)", { size:13, weight:700 });
  s += rect(300, 234, 200, 36, C.white, { stroke:C.lineStrong });
  s += text(316, 256, "500.000", { size:14, weight:400 });
  s += text(300, 296, "Looptijd (weken)", { size:13, weight:700 });
  s += rect(300, 304, 200, 36, C.white, { stroke:C.lineStrong });
  s += text(316, 326, "5", { size:14, weight:400 });
  // nudge planner
  s += rect(848, 160, 552, 200, C.white, { stroke:C.line });
  s += text(868, 192, "Plan een nudge", { size:18, weight:700 });
  s += text(868, 226, "Bericht", { size:13, weight:700 });
  s += rect(868, 234, 380, 36, C.white, { stroke:C.lineStrong });
  s += text(884, 256, "bv. Tijd voor 60 sec reset?", { size:14, weight:400, color:C.muted });
  s += button(868, 296, "Toevoegen aan rooster", "primary");
  // micro-pauzes catalog
  s += rect(280, 380, 552, 230, C.white, { stroke:C.line });
  s += text(300, 412, "Micro-pauzes (catalogus)", { size:18, weight:700 });
  ["Schouders losmaken (bewegen, 30s)","Nek- en schouderstretch (bewegen, 1m)","20-20-20 oogrust (ogen, 1m)","Rustig ademhalen (ademhaling, 1m)","Loopje naar de printer (bewegen, 2m)","Mini-wandeling (bewegen, 3m)"].forEach((t, i) => {
    s += text(300, 444 + i*22, `• ${t}`, { size:13, weight:400 });
  });
  // meals catalog
  s += rect(848, 380, 552, 230, C.white, { stroke:C.line });
  s += text(868, 412, "Maaltijden (catalogus)", { size:18, weight:700 });
  ["Havermout met banaan (ontbijt)","Volkoren wrap met kip (lunch)","Couscous-salade (lunch)","Linzensoep (lunch)","Handje noten (snack)","Water met citroen of munt (drinken)"].forEach((t, i) => {
    s += text(868, 444 + i*22, `• ${t}`, { size:13, weight:400 });
  });
  // export
  s += rect(280, 630, 552, 130, C.white, { stroke:C.line });
  s += text(300, 662, "Evaluatieresultaten", { size:18, weight:700 });
  s += text(300, 686, "Exporteer geanonimiseerde antwoorden als CSV.", { size:13, weight:400, color:C.muted });
  s += button(300, 706, "Exporteer CSV", "secondary");
  return s;
}

// ---------- assemble ----------
function svg(inner, w=W, h=H) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="${w}" height="${h}" fill="${C.bg}"/>
${inner}
</svg>`;
}

const screens = [
  ["01-login.svg",       login()],
  ["02-dashboard.svg",   dashboard()],
  ["03-micropauze.svg",  micropauze()],
  ["04-challenge.svg",   challenge()],
  ["05-herstel.svg",     herstel()],
  ["06-voeding.svg",     voeding()],
  ["07-motivatie.svg",   motivatie()],
  ["08-team.svg",        team()],
  ["09-evaluatie.svg",   evaluatie()],
  ["10-beheer.svg",      beheer()],
];

const outDir = path.join(__dirname);
let combined = "";
let allHeight = 0;
screens.forEach(([name, content], i) => {
  fs.writeFileSync(path.join(outDir, name), svg(content));
  // offset and add to combined
  combined += `<g transform="translate(0, ${allHeight})">
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  ${content}
</g>`;
  allHeight += H + 40; // gap between screens
});

fs.writeFileSync(path.join(outDir, "all-screens.svg"), svg(combined, W, allHeight));
console.log(`Wrote ${screens.length + 1} SVG files to ${outDir}`);
