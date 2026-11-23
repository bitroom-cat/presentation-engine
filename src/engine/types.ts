import React from "react";

export interface DeckTheme {
  bg?: string;
  card?: string;
  cardBorder?: string;
  primary?: string;
  secondary?: string;
  accent?: string;
  text?: string;
  textMuted?: string;
  fontSans?: string;
  fontMono?: string;
}

export interface SlideQA {
  question: string;
  answer: string;
}

export interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  deck: DeckDefinition;
  isActive: boolean;
}

export interface SlideDefinition {
  id: string;
  title: string;
  category?: string;
  component: React.ComponentType<SlideProps>;
  notes?: string[];
  qa?: SlideQA[];
  durationEstimateSeconds?: number;
}

export interface DeckDefinition {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  author?: string;
  role?: string;
  date?: string;
  tags?: string[];
  theme?: DeckTheme;
  slides: SlideDefinition[];
}

export interface EngineState {
  currentSlideIndex: number;
  isSpeakerNotesOpen: boolean;
  isOverviewOpen: boolean;
  isFullscreen: boolean;
  isTimerRunning: boolean;
  elapsedSeconds: number;
}

export interface PresentationThemeSettings {
  mode: "dark" | "creamy-light";
  toneLevel: number; // 0 (deepest dark or warmest cream) to 100 (slate dark or crisp ivory)
  showGrid: boolean;
  gridDensity: "dense" | "standard" | "spacious";
  gridOpacity: number; // 10 to 100
  patternStyle: "grid" | "crosshair" | "dots";
  showStageGrid: boolean;
}
