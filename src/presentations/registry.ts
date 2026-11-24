import { DeckDefinition } from "@/engine/types";
import { multiAgentLlmSystemsV2Deck } from "./multi-agent-llm-systems-v2";
import { multiAgentLlmSystemsDeck } from "./multi-agent-llm-systems";
import { adaptiveEdgeCompressionV2Deck } from "./adaptive-edge-compression-v2";
import { adaptiveEdgeCompressionDeck } from "./adaptive-edge-compression";
import { industrialTrainingDeck } from "./industrial-training";
import { systemDesignOverviewDeck } from "./system-design-overview";

export const presentationRegistry: Record<string, DeckDefinition> = {
  "multi-agent-llm-systems-v2": multiAgentLlmSystemsV2Deck,
  "multi-agent-llm-systems": multiAgentLlmSystemsDeck,
  "adaptive-edge-compression-v2": adaptiveEdgeCompressionV2Deck,
  "adaptive-edge-compression": adaptiveEdgeCompressionDeck,
  "industrial-training": industrialTrainingDeck,
  "system-design-overview": systemDesignOverviewDeck,
};

export function getAllDecks(): DeckDefinition[] {
  return Object.values(presentationRegistry);
}

export function getFeaturedDecks(): DeckDefinition[] {
  // Only display the featured visual-first Major Project deck on the front page as requested
  return [multiAgentLlmSystemsV2Deck];
}

export function getDeckBySlug(slug: string): DeckDefinition | undefined {
  return presentationRegistry[slug];
}
