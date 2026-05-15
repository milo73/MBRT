// MBRT in Balans — content & dummy data
// Geen echte persoonsgegevens; alleen testdata voor het prototype.

const APP = {
  name: "MBRT in Balans",
  slogan: "Van beeldvorming naar zelfvorming",
  teamStepGoal: 500000,
  weekCount: 5,
};

const MICRO_PAUZES = [
  { id: "mp01", title: "Schouders losmaken", duration: 30,  category: "bewegen",   icon: "🧘", text: "Sta op en draai 30 seconden je schouders rustig rond. Voel de spanning wegtrekken." },
  { id: "mp02", title: "Nek- en schouderstretch", duration: 60, category: "bewegen", icon: "💪", text: "Leg je oor richting je schouder. 15 sec vasthouden per kant. Herhaal." },
  { id: "mp03", title: "20-20-20 oogrust", duration: 60, category: "ogen", icon: "👀", text: "Kijk 20 seconden naar iets op 6 meter afstand. Knipper bewust." },
  { id: "mp04", title: "Rustig ademhalen", duration: 60, category: "ademhaling", icon: "🌬️", text: "Adem 4 sec in, houd 2 sec vast, adem 6 sec uit. Herhaal 6×." },
  { id: "mp05", title: "Loopje naar de printer", duration: 120, category: "bewegen", icon: "🖨️", text: "Sta op en loop rustig naar de printer of koffieruimte." },
  { id: "mp06", title: "Traplopen", duration: 120, category: "bewegen", icon: "🪜", text: "Loop één verdieping op en weer terug. Voel je hartslag aantrekken." },
  { id: "mp07", title: "Staand overleg", duration: 120, category: "houding", icon: "🗣️", text: "Stel voor: deze korte afstemming doen we staand." },
  { id: "mp08", title: "Mini-wandeling", duration: 180, category: "bewegen", icon: "🚶", text: "Drie minuten door de gang, neem niets mee. Wandelen om te wandelen." },
  { id: "mp09", title: "Polsen losmaken", duration: 60, category: "bewegen", icon: "🤲", text: "Draai je polsen rond, strek je vingers. Schud je handen los." },
  { id: "mp10", title: "Bewust water drinken", duration: 60, category: "ontspannen", icon: "💧", text: "Pak je waterfles. Drink rustig, voel het glas, ruik het water." },
  { id: "mp11", title: "Staand e-mails lezen", duration: 120, category: "houding", icon: "📧", text: "Zet je laptop hoger of pak je telefoon. Werk 2 min staand." },
  { id: "mp12", title: "Bureau-reset", duration: 180, category: "houding", icon: "🪑", text: "Check houding, scherm op ooghoogte, stoel goed ingesteld, voeten plat op de grond." },
];

const HERSTEL_MOMENTEN = [
  { id: "h01", title: "Ademhalingsoefening", duration: 120, icon: "🌬️", text: "Twee minuten rustig in- en uitademen. Adem laag in je buik." },
  { id: "h02", title: "Schermpauze", duration: 180, icon: "👀", text: "Drie minuten weg van het scherm. Kijk uit het raam." },
  { id: "h03", title: "Nek- en schouderstretch", duration: 120, icon: "💆", text: "Maak rustige rondjes met je schouders. Strek je nek voorzichtig." },
  { id: "h04", title: "Mini-wandeling", duration: 300, icon: "🚶", text: "Vijf minuten naar buiten of door de gang." },
  { id: "h05", title: "Stiltemoment", duration: 120, icon: "🤫", text: "Twee minuten niets. Geen scherm, geen gesprek, alleen rust." },
  { id: "h06", title: "Reset na overleg", duration: 180, icon: "🔄", text: "Drie ademhalingen, even rondkijken, dan pas naar de volgende taak." },
  { id: "h07", title: "Reflectievraag", duration: 60, icon: "💭", text: "Wat heb je nu nodig om verder te kunnen? Schrijf één woord op." },
];

const MAALTIJDEN = [
  { id: "o1", type: "ontbijt", title: "Havermout met banaan",           tags: ["vega","snel","goedkoop"],          ingredients: ["havermout","banaan","kaneel","ongezouten noten","melk"] },
  { id: "o2", type: "ontbijt", title: "Volkoren boterham + pindakaas",  tags: ["vega","snel","goedkoop","mee te nemen"], ingredients: ["volkoren brood","100% pindakaas","banaan"] },
  { id: "o3", type: "ontbijt", title: "Yoghurt met muesli en bessen",   tags: ["vega","snel"],                     ingredients: ["yoghurt","muesli","blauwe bessen","lijnzaad"] },
  { id: "o4", type: "ontbijt", title: "Cracker met hüttenkäse",         tags: ["vega","snel","goedkoop"],          ingredients: ["volkoren cracker","hüttenkäse","komkommer"] },
  { id: "o5", type: "ontbijt", title: "Groene smoothie",                tags: ["vega","snel"],                     ingredients: ["yoghurt","banaan","spinazie","havermout"] },

  { id: "l1",  type: "lunch", title: "Volkoren wrap met kip",            tags: ["mee te nemen","koud"],             ingredients: ["volkoren wrap","kipfilet","hummus","sla","komkommer","paprika"] },
  { id: "l2",  type: "lunch", title: "Avocado-ei boterham",              tags: ["vega","snel"],                     ingredients: ["volkoren brood","avocado","ei","tomaat"] },
  { id: "l3",  type: "lunch", title: "Couscous-salade",                  tags: ["vega","mee te nemen","koud"],       ingredients: ["volkoren couscous","kikkererwten","feta","komkommer","tomaat","rucola"] },
  { id: "l4",  type: "lunch", title: "Boterham hüttenkäse + kip",        tags: ["snel"],                            ingredients: ["volkoren brood","hüttenkäse","kipfilet","rauwkost"] },
  { id: "l5",  type: "lunch", title: "Linzensoep",                       tags: ["vega","warm","goedkoop"],          ingredients: ["linzen","ui","wortel","bouillon","volkoren brood"] },
  { id: "l6",  type: "lunch", title: "Pastasalade tonijn",               tags: ["mee te nemen","koud"],             ingredients: ["volkoren pasta","tonijn","paprika","mais","yoghurtdressing"] },
  { id: "l7",  type: "lunch", title: "Quinoabowl met tofu",              tags: ["vega","mee te nemen","warm"],       ingredients: ["quinoa","tofu","groente","yoghurtsaus"] },
  { id: "l8",  type: "lunch", title: "Omelet met spinazie",              tags: ["vega","warm","snel"],              ingredients: ["ei","spinazie","champignons","volkoren brood"] },
  { id: "l9",  type: "lunch", title: "Volkoren pita met falafel",        tags: ["vega","warm"],                     ingredients: ["volkoren pita","falafel","sla","tomaat","yoghurtsaus"] },
  { id: "l10", type: "lunch", title: "Restjeslunch + extra groente",     tags: ["snel","goedkoop","warm"],          ingredients: ["restje van gisteren","extra groente"] },

  { id: "s1",  type: "snack", title: "Fruit",                           tags: ["vega","snel","goedkoop","mee te nemen"], ingredients: ["appel","banaan","mandarijn","druiven"] },
  { id: "s2",  type: "snack", title: "Snackgroente + hummus",           tags: ["vega","snel","mee te nemen"],       ingredients: ["wortel","komkommer","paprika","hummus"] },
  { id: "s3",  type: "snack", title: "Handje noten",                    tags: ["vega","snel","mee te nemen"],       ingredients: ["ongezouten noten"] },
  { id: "s4",  type: "snack", title: "Cracker + 30+ kaas",              tags: ["vega","snel"],                     ingredients: ["volkoren cracker","30+ kaas"] },
  { id: "s5",  type: "snack", title: "Kwark met fruit",                 tags: ["vega","snel"],                     ingredients: ["magere kwark","fruit"] },
  { id: "s6",  type: "snack", title: "Gekookt ei",                      tags: ["snel","goedkoop","mee te nemen"],   ingredients: ["ei"] },
  { id: "s7",  type: "snack", title: "Rijstwafel + pindakaas",          tags: ["vega","snel","goedkoop"],          ingredients: ["rijstwafel","pindakaas"] },
  { id: "s8",  type: "snack", title: "Edamameboontjes",                 tags: ["vega","snel"],                     ingredients: ["edamame","beetje zeezout"] },
  { id: "s9",  type: "snack", title: "Kleine saladecup",                tags: ["vega","koud","mee te nemen"],       ingredients: ["sla","tomaat","komkommer","feta"] },
  { id: "s10", type: "snack", title: "Boterham + kipfilet of hummus",   tags: ["snel","mee te nemen"],              ingredients: ["volkoren brood","kipfilet of hummus","sla"] },

  { id: "d1", type: "drinken", title: "Waterfles op bureau",            tags: ["snel","goedkoop"],                  ingredients: ["water"] },
  { id: "d2", type: "drinken", title: "Water met citroen of munt",      tags: ["vega","snel"],                     ingredients: ["water","citroen","munt","komkommer"] },
  { id: "d3", type: "drinken", title: "Thee zonder suiker",             tags: ["vega","warm","goedkoop"],          ingredients: ["thee"] },
  { id: "d4", type: "drinken", title: "Koffie met mate",                tags: ["vega","warm"],                     ingredients: ["koffie"] },
  { id: "d5", type: "drinken", title: "Glas water per dagdeel",         tags: ["snel"],                            ingredients: ["water"] },
];

const NUDGES = [
  "Tijd voor 60 seconden reset?",
  "Even opstaan? Eén minuut is genoeg.",
  "Geef je ogen kort rust.",
  "Van beeldvorming naar zelfvorming: neem een micro-pauze.",
  "Kleine pauze, grote winst voor je energie.",
  "Tijd voor 2 minuten herstel?",
  "Een korte wandeling telt ook mee.",
  "Kies vandaag één klein beweegmoment.",
  "Samen houden we MBRT in balans.",
  "Je hoeft niet lang te pauzeren: 60 seconden helpt al.",
  "Lunchidee: volkoren wrap met hummus en rauwkost.",
  "Middag-dip? Probeer water, fruit en een korte wandeling.",
  "Hoe staat je houding er nu bij?",
  "Drink eens een glas water — nu een goed moment.",
  "Schermpauze. Kijk 20 seconden naar iets ver weg.",
];

const TIPS = [
  { cat: "bewegen",   text: "Een rondje door de gang telt ook als beweegmoment." },
  { cat: "voeding",   text: "Combineer koolhydraten met eiwitten voor langer aanhoudende energie." },
  { cat: "pauze",     text: "Drie korte pauzes werken vaak beter dan één lange." },
  { cat: "ontspanning", text: "Adem 4 sec in, 6 sec uit. Dat kalmeert direct." },
  { cat: "voeding",   text: "Zet een waterfles binnen handbereik en drink elk dagdeel." },
  { cat: "bewegen",   text: "Loop een telefoongesprek lopend." },
  { cat: "pauze",     text: "Plan je micro-pauze net vóór een drukke taak, niet erna." },
];

const BADGES = [
  { id: "b1", title: "Koffierondje-held",     icon: "☕", criterion: "5× loopje gemaakt" },
  { id: "b2", title: "Wandeloverleg gestart", icon: "🚶", criterion: "1× staand overleg ingebracht" },
  { id: "b3", title: "Micro-pauze master",    icon: "⏱️", criterion: "15 micro-pauzes in totaal" },
  { id: "b4", title: "Schermpauze genomen",   icon: "👀", criterion: "5× schermpauze gedaan" },
  { id: "b5", title: "Bewuste keuze",         icon: "🥗", criterion: "5× gezonde keuze aangevinkt" },
];

const EVALUATION_QUESTIONS = [
  { id: "q1",  type: "yesno",  text: "Heb je deelgenomen aan de wandelchallenge?" },
  { id: "q2",  type: "yesno",  text: "Heb je micro-pauzes toegepast tijdens de werkdag?" },
  { id: "q3",  type: "text",   text: "Welke micro-pauzes vond je het meest haalbaar?" },
  { id: "q4",  type: "scale",  text: "Heb je meer bewustwording gekregen over herstelmomenten?" },
  { id: "q5",  type: "scale",  text: "Heb je meer inzicht gekregen in gezonde voedingskeuzes?" },
  { id: "q6",  type: "yesno",  text: "Hebben de maaltijdvoorbeelden je geholpen?" },
  { id: "q7",  type: "yesno",  text: "Heeft de app je geholpen vaker korte pauzes te nemen?" },
  { id: "q8",  type: "text",   text: "Wat vond je prettig aan de app?" },
  { id: "q9",  type: "text",   text: "Wat kan beter?" },
  { id: "q10", type: "yesno",  text: "Wil je dat MBRT hiermee doorgaat?" },
];

// 52 dummy medewerkers — fictieve namen, geen echte personen.
const DUMMY_NAMES = [
  "Sanne Bakker","Mark de Vries","Linda Jansen","Eline Visser","Tim van Dijk",
  "Anouk Smit","Rik Mulder","Lotte Hendriks","Bas de Jong","Iris van der Berg",
  "Jeroen Peters","Femke Willemsen","Dennis Bos","Karin de Wit","Sander Vermeulen",
  "Marleen Hoekstra","Erik van Leeuwen","Suzanne Brouwer","Wouter Dekker","Daphne Kuipers",
  "Pieter de Boer","Charlotte van der Meer","Robert Janssen","Esther de Lange","Hans Vos",
  "Nathalie Verhoeven","Maarten van Veen","Saskia Koning","Joost Klaassen","Marit Postma",
  "Ronald Verbeek","Ingrid Maas","Thomas Smits","Yvonne van Beek","Vincent de Graaf",
  "Petra van Es","Lars Tromp","Diana Roelofs","Frank van Dam","Annemarie Visscher",
  "Bram Heijmans","Kim Bouwman","Niels van der Linden","Carolien Stam","Michel Burger",
  "Wendy Hofman","Edwin van Loon","Mieke Westerveld","Stefan Geurts","Tessa van Gelder",
  "Patrick Bakker","Hester Driessen"
];

function rolesFor(i) { return i < 30 ? "Docent MBRT" : "Onderwijsondersteuner"; }

function pseudoRand(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const EMPLOYEES = DUMMY_NAMES.map((name, i) => ({
  id: `emp-${String(i + 1).padStart(3, "0")}`,
  name,
  role: rolesFor(i),
  isAdmin: i === 2, // Linda Jansen = projectgroep/teamleider
}));

// Geaggregeerde activiteit per week (alleen groepsdata). Geen individuele gezondheidsdata zichtbaar.
function generateWeeklyAggregates() {
  const weeks = [];
  for (let w = 1; w <= 5; w++) {
    const participationRate = Math.min(0.78, 0.30 + w * 0.10 + pseudoRand(w) * 0.06);
    const active = Math.round(EMPLOYEES.length * participationRate);
    const microPauzes = Math.round(active * (1.5 + w * 0.8));
    const herstelMomenten = Math.round(active * (0.6 + w * 0.4));
    const beweegMomenten = Math.round(active * (1.0 + w * 0.5));
    const gezondeKeuzes  = Math.round(active * (0.8 + w * 0.3));
    const stappen = Math.round(APP.teamStepGoal * (0.10 + w * 0.18));
    weeks.push({
      week: w,
      activeParticipants: active,
      participationRate,
      microPauzes,
      herstelMomenten,
      beweegMomenten,
      gezondeKeuzes,
      stappen,
      energieGemiddeld: +(3.0 + pseudoRand(w * 7) * 0.6).toFixed(1),
      stressGemiddeld:  +(3.4 - w * 0.15 + pseudoRand(w * 11) * 0.3).toFixed(1),
      herstelGemiddeld: +(2.8 + w * 0.15 + pseudoRand(w * 13) * 0.4).toFixed(1),
    });
  }
  return weeks;
}

const TEAM_WEEKLY = generateWeeklyAggregates();

const TOP_MICRO = [
  { id: "mp03", count: 142, title: "20-20-20 oogrust" },
  { id: "mp02", count: 118, title: "Nek- en schouderstretch" },
  { id: "mp04", count:  96, title: "Rustig ademhalen" },
  { id: "mp08", count:  84, title: "Mini-wandeling" },
  { id: "mp12", count:  71, title: "Bureau-reset" },
];

const TOP_MEALS = [
  { id: "l1", count: 73, title: "Volkoren wrap met kip" },
  { id: "l3", count: 58, title: "Couscous-salade" },
  { id: "l5", count: 49, title: "Linzensoep" },
  { id: "l8", count: 41, title: "Omelet met spinazie" },
];

window.MBRT_DATA = {
  APP, MICRO_PAUZES, HERSTEL_MOMENTEN, MAALTIJDEN, NUDGES, TIPS, BADGES,
  EVALUATION_QUESTIONS, EMPLOYEES, TEAM_WEEKLY, TOP_MICRO, TOP_MEALS
};
