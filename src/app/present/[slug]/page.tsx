import { Metadata } from "next";
import { Suspense } from "react";
import { getDeckBySlug, getAllDecks } from "@/presentations/registry";
import { PresentClientView } from "./PresentClientView";

interface PresentationPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const decks = getAllDecks();
  return decks.map((deck) => ({
    slug: deck.slug,
  }));
}

export function generateMetadata({ params }: PresentationPageProps): Metadata {
  const deck = getDeckBySlug(params.slug);
  if (!deck) {
    return {
      title: "Presentation Not Found",
    };
  }

  return {
    title: `${deck.title} | Antigravity Presentation Engine`,
    description: deck.description,
  };
}

export default function PresentationPage({ params }: PresentationPageProps) {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-black flex items-center justify-center text-zinc-400 font-mono text-sm">
          Loading Presentation Engine...
        </div>
      }
    >
      <PresentClientView slug={params.slug} />
    </Suspense>
  );
}
