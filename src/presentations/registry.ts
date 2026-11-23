import { DeckDefinition } from "@/engine/types";
import { adaptiveEdgeCompressionDeck } from "./adaptive-edge-compression";
import { adaptiveEdgeCompressionV2Deck } from "./adaptive-edge-compression-v2";
import { systemDesignOverviewDeck } from "./system-design-overview";
import { industrialTrainingDeck } from "./industrial-training";

export const presentationRegistry: Record<string, DeckDefinition> = {
  "adaptive-edge-compression-v2": adaptiveEdgeCompressionV2Deck,
  "adaptive-edge-compression": adaptiveEdgeCompressionDeck,
  "industrial-training": industrialTrainingDeck,
  "system-design-overview": systemDesignOverviewDeck,
};

export function getAllDecks(): DeckDefinition[] {
  return Object.values(presentationRegistry);
}

export function getDeckBySlug(slug: string): DeckDefinition | undefined {
  return presentationRegistry[slug];
}
