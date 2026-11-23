import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/engine/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentations/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deck: {
          bg: "var(--deck-bg, #090d16)",
          card: "var(--deck-card, #111827)",
          cardBorder: "var(--deck-border, #1f2937)",
          primary: "var(--deck-primary, #3b82f6)",
          secondary: "var(--deck-secondary, #8b5cf6)",
          accent: "var(--deck-accent, #06b6d4)",
          text: "var(--deck-text, #f9fafb)",
          textMuted: "var(--deck-text-muted, #9ca3af)",
        },
        mono: {
          paper: '#F7F6F2',
          card: '#FFFFFF',
          subtle: '#EFECE5',
          line: '#DFDDD5',
          ink: '#1C1F1E',
          muted: '#5D6360',
          forest: '#121C1A',
          forestCard: '#192623',
          forestLine: '#2B3D38',
          forestText: '#F5F4EF',
          forestMuted: '#9FAEA9',
          copper: '#C65D3B',
          copperTint: '#F8EBE6',
          pine: '#2D5F53',
          pineTint: '#E6F0ED',
          indigo: '#3E5673',
          indigoTint: '#E9EEF4',
          ochre: '#9A6B27',
          ochreTint: '#F6EFE0',
          crimson: '#A13A3A',
          crimsonTint: '#F6E6E6',
          graphite: '#181B1F',
          graphiteLine: '#2C323A',
        },
      },
      fontFamily: {
        sans: ["var(--deck-font-sans, system-ui, sans-serif)"],
        mono: ["var(--deck-font-mono, ui-monospace, monospace)"],
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};
export default config;
