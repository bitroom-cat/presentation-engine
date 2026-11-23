# Antigravity Next.js Presentation Engine

A modern, high-performance, component-driven presentation engine designed with **Next.js 14+ (App Router)**, **TypeScript (`strict: true`)**, and **Tailwind CSS**.

Instead of static, clunky `.pptx` slides, presentations in this engine are modular React components. This enables rich interactive widgets, live hardware simulators, dynamic SVGs, responsive viewport scaling, and custom per-deck Tailwind CSS themes.

---

## Architecture Overview

```text
src/
├── app/
│   ├── layout.tsx                        # Root layout, fonts, and dark theme metadata
│   ├── page.tsx                          # Presentation Hub (Directory launcher)
│   ├── present/
│   │   └── [slug]/
│   │       └── page.tsx                  # Dynamic route loading presentation with static generation
│   ├── globals.css                       # Base styles + @media print 1280x720 PDF rules
│   └── not-found.tsx                     # 404 handler with return link
├── engine/
│   ├── types.ts                          # TypeScript interfaces for Decks, Slides, Notes, Themes
│   ├── PresentationEngine.tsx            # Master client shell (keyboard, touch, URL sync, print)
│   ├── StageViewport.tsx                 # Responsive 16:9 (1280x720) logical canvas with scale transform
│   ├── ControlBar.tsx                    # Bottom dock (navigation, live timer, overview, notes, print)
│   ├── SpeakerNotesDrawer.tsx            # Collapsible bottom drawer for talking points & Q&A
│   ├── OverviewGridModal.tsx             # Fullscreen grid modal for rapid slide jumping and search
│   └── SlidePrimitives.tsx               # Reusable primitives (SlideContainer, Header, Footer, MathFrac, StatCard)
└── presentations/
    ├── registry.ts                       # Central registry mapping deck slugs -> definitions
    ├── adaptive-edge-compression/        # Deck 1: Real-time edge compression & interactive simulator
    │   ├── index.ts                      # Deck definition, metadata, notes & Q&A
    │   └── slides/                       # Modular slide components
    └── system-design-overview/           # Deck 2: Distributed high-throughput event streaming platform
        ├── index.ts
        └── slides/
```

---

## Key Features

1. **16:9 Responsive Scaled Stage (`StageViewport.tsx`)**
   - Renders a logical **1280x720 canvas** scaled seamlessly using CSS transforms to fit any display, projector, or mobile screen without clipping or layout reflows.

2. **State & URL Synchronization**
   - URL query parameter sync (`?slide=1`, `?slide=4`) backed by React state and `window.history.replaceState` for zero-latency slide transitions. Reloading or sharing a link opens the exact slide.

3. **Speaker Notes & Audience Q&A Drawer (`SpeakerNotesDrawer.tsx`)**
   - Presenters can toggle talking points, estimated slide pacing, and anticipated Q&A with the **`N`** key.

4. **Slide Overview Grid Modal (`OverviewGridModal.tsx`)**
   - Bird’s-eye view of all slides with live text search and instant jump shortcuts with the **`G`** or **`O`** key.

5. **Private Dual-Screen Presenter Console (`PresenterView.tsx`)**
   - Presenter console (`?mode=presenter`, **`W`** / **`Alt+P`**) with real-time `BroadcastChannel` synchronization:
     - Live 16:9 audience mirror & upcoming next slide preview
     - Private speaker talking points & faculty viva defense Q&A tabs
     - Stopwatch timer, elapsed time counter, and system wall clock
     - Zoomable font controls for notes

6. **Theme & Architectural Grid Controls (`SettingsModal.tsx`)**
   - Seamlessly toggle between **Dark Mode (Obsidian & Neon)** and **Creamy White (Warm Editorial Paper)**.
   - Tone depth slider (0% to 100%) to fine-tune canvas darkness or paper warmth.
   - Customizable background architectural grid pattern (Clean Lines, Architectural `+`, Dot Matrix) with density and opacity controls. Toggle via **`S`**.

7. **Live Stage Timer & Dock (`ControlBar.tsx`)**
   - Glassmorphism bottom dock with progress indicator, presentation stopwatch (play/pause/reset), and slide counter.

8. **Print-to-PDF Ready (`@media print`)**
   - Pressing **`P`** triggers `window.print()` using `@page { size: 1280px 720px landscape; }` and sequential page breaks to export high-resolution slide decks.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `→` / `Space` / `PageDown` / `Enter` / `L` | Next slide |
| `←` / `PageUp` / `Backspace` / `H` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `W` / `Alt+P` | Open Dual-Screen Presenter Console (private notes & viva Q&A) |
| `S` | Open Theme Settings & Background Grid modal |
| `N` | Toggle Speaker Notes & Q&A drawer |
| `G` or `O` | Toggle Slide Overview Grid modal |
| `F` | Toggle Fullscreen mode |
| `P` | Print / Export to PDF |
| `Esc` | Close modals, drawers, or exit fullscreen |

---

## Adding a New Presentation Deck

Creating a new presentation takes 3 quick steps:

### 1. Create the deck directory and slides
Create `src/presentations/your-deck-slug/` and add slide components:
```tsx
// src/presentations/your-deck-slug/slides/Slide01.tsx
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter } from "@/engine/SlidePrimitives";

export function Slide01({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer>
      <SlideHeader category="Introduction" title="Hello World" />
      <div className="my-auto text-2xl">Your slide content here!</div>
      <SlideFooter deckTitle={deck.title} slideIndex={slideIndex} totalSlides={totalSlides} />
    </SlideContainer>
  );
}
```

### 2. Define the DeckDefinition
Create `src/presentations/your-deck-slug/index.ts`:
```ts
import { DeckDefinition } from "@/engine/types";
import { Slide01 } from "./slides/Slide01";

export const yourDeck: DeckDefinition = {
  slug: "your-deck-slug",
  title: "Your Deck Title",
  description: "Description of your presentation",
  author: "Your Name",
  theme: {
    primary: "#3b82f6",
    bg: "#090d16",
  },
  slides: [
    {
      id: "intro",
      title: "Introduction",
      component: Slide01,
      notes: ["Key talking point 1", "Key talking point 2"],
    },
  ],
};
```

### 3. Register in `src/presentations/registry.ts`
```ts
import { yourDeck } from "./your-deck-slug";

export const presentationRegistry: Record<string, DeckDefinition> = {
  // ...existing decks
  "your-deck-slug": yourDeck,
};
```
Your presentation will automatically appear on the Presentation Hub launcher and at `/present/your-deck-slug`!

---

## Running Locally

```bash
npm run dev
# Open http://localhost:3000
```
