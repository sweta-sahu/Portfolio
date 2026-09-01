// Accent palette from the design template. `accentColor` is the primary accent;
// each option pairs with a fixed secondary used in every gradient.
export const ACCENT_OPTIONS = [
  'oklch(75% 0.17 195)',
  'oklch(70% 0.20 300)',
  'oklch(78% 0.19 145)',
];

const PAIRS = {
  'oklch(75% 0.17 195)': 'oklch(72% 0.20 320)',
  'oklch(70% 0.20 300)': 'oklch(75% 0.18 210)',
  'oklch(78% 0.19 145)': 'oklch(70% 0.20 260)',
};

export const a1 = ACCENT_OPTIONS[0];
export const a2 = PAIRS[a1] ?? 'oklch(72% 0.20 320)';
export const glow = `color-mix(in oklch, ${a1} 35%, transparent)`;

// Height of the fixed nav: 18px padding x2 + 38px button row + 1px border.
// Used for the layout spacer and every section's scroll-margin-top.
export const NAV_HEIGHT = 75;

export const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";
export const display = "var(--font-space-grotesk), 'Space Grotesk', sans-serif";

// Keep in sync with `basePath` in next.config.mjs — plain <a>/<img> hrefs are
// not rewritten by Next.
export const BASE = '/Portfolio';
