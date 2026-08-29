// MBRT in Balans — getekende lijniconen (24px raster, 1.75 lijndikte).
// Eén stijl voor de hele app; geen emoji. Kleur volgt currentColor.

const MBRT_ICON_PATHS = {
  /* ---- navigatie en interface ---- */
  home:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/>',
  clock:     '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  activity:  '<path d="M3 12h4l2.5-7 4 14 2.5-7h5"/>',
  leaf:      '<path d="M11 19.5A6.5 6.5 0 0 1 9.8 6.2C15.4 5.2 16.9 4.6 18.8 2.5c1 2 1.9 4.1 1.9 7.5 0 5.2-4.5 9.5-9.7 9.5z"/><path d="M3 21c0-2.9 1.8-5.2 4.9-5.8C10.2 14.6 12.6 13.2 13.5 12"/>',
  bowl:      '<path d="M3.5 12h17a8.5 8.5 0 0 1-17 0z"/><path d="M12 9c0-2 1.2-3.5 3-3.5"/><path d="M5 19h14"/>',
  chat:      '<path d="M4.5 5h15v11H10l-5.5 4z"/>',
  users:     '<circle cx="9" cy="9" r="3.2"/><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19"/><path d="M16 6.2a3.2 3.2 0 0 1 0 5.9"/><path d="M17.5 14.7c2 .7 3.2 2.2 3.6 4.3"/>',
  clipboard: '<path d="M8 4.5h8V8H8z"/><path d="M8 6H5.5v14h13V6H16"/><path d="M9 12h6M9 16h4"/>',
  sliders:   '<path d="M4 8h9M19 8h1.5M4 16h5.5M15.5 16h5"/><circle cx="15.5" cy="8" r="2.2"/><circle cx="12" cy="16" r="2.2"/>',
  chart:     '<path d="M3.5 20h17"/><path d="M7 20v-5M12 20v-10M17 20v-7"/>',
  play:      '<path d="M9 6.5 17 12l-8 5.5z"/>',
  star:      '<path d="M12 4.5l2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.8z"/>',
  heart:     '<path d="M12 19.5s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10.5c0 4.6-7 9-7 9z"/>',
  thumb:     '<path d="M7.5 10.5v9H4.8v-9z"/><path d="M7.5 11l3.3-6.6a1.9 1.9 0 0 1 2.7 2.3L12.6 10H18a1.9 1.9 0 0 1 1.8 2.5l-1.5 4.8a1.9 1.9 0 0 1-1.8 1.2H7.5"/>',
  dumbbell:  '<path d="M4 9v6M7 7.5v9M17 7.5v9M20 9v6M7 12h10"/>',
  sparkle:   '<path d="M11 4l1.5 4.1L16.5 9.5 12.5 11 11 15l-1.5-4L5.5 9.5 9.5 8.1z"/><path d="M17.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  close:     '<path d="M6.8 6.8l10.4 10.4M17.2 6.8L6.8 17.2"/>',
  download:  '<path d="M12 4v10"/><path d="M7.5 9.5 12 14l4.5-4.5"/><path d="M5 19h14"/>',

  /* ---- micro-pauzes en herstel ---- */
  rotate:    '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5V9H15"/>',
  person:    '<circle cx="12" cy="5" r="2.4"/><path d="M12 7.6v6"/><path d="M12 10.2 8.2 12.4M12 10.2l3.8 2.2"/><path d="M12 13.6 9.6 20M12 13.6 14.4 20"/>',
  eye:       '<path d="M2.5 12s3.8-6 9.5-6 9.5 6 9.5 6-3.8 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/>',
  wind:      '<path d="M3 9h11a3 3 0 1 0-3-3"/><path d="M3 14h14a3 3 0 1 1-3 3"/>',
  printer:   '<path d="M7.5 8.5V4.5h9v4"/><path d="M4.5 8.5h15v7h-3v4h-9v-4h-3z"/><path d="M7.5 15.5h9"/>',
  stairs:    '<path d="M4 19h4v-4h4v-4h4V7h4"/>',
  hand:      '<path d="M9 13V6.6a1.5 1.5 0 0 1 3 0V12"/><path d="M12 12V5.6a1.5 1.5 0 0 1 3 0V12"/><path d="M15 12V7.6a1.5 1.5 0 0 1 3 0V14a5.5 5.5 0 0 1-5.5 5.5h-1A5.5 5.5 0 0 1 6 14v-1.4a1.5 1.5 0 0 1 3 0"/>',
  droplet:   '<path d="M12 3.5s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z"/>',
  mail:      '<path d="M3.5 6.5h17v11h-17z"/><path d="M3.5 7.5 12 13.5l8.5-6"/>',
  desk:      '<path d="M3.5 5.5h17v10h-17z"/><path d="M12 15.5V19"/><path d="M9 19h6"/>',
  quiet:     '<path d="M9.5 7v10M14.5 7v10"/>',
  question:  '<path d="M6.5 5.5h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H12l-4.2 3.3V15.5h-1.3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3z"/><path d="M10.4 9.4a1.7 1.7 0 0 1 3.2.8c0 1.1-1.6 1.3-1.6 2.4"/><path d="M12 14.2h.01"/>',
  cup:       '<path d="M5 7h11v5.5a5.5 5.5 0 0 1-11 0z"/><path d="M16 8.5h1.6a2.2 2.2 0 0 1 0 4.4H16"/><path d="M5.5 19h10"/>',
};

function MBRT_ICON(name, size) {
  const paths = MBRT_ICON_PATHS[name] || MBRT_ICON_PATHS.sparkle;
  const s = size || 22;
  return `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
         `stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
}

window.MBRT_ICON = MBRT_ICON;
window.MBRT_ICON_PATHS = MBRT_ICON_PATHS;
