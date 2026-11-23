"use client";

import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getDeckBySlug } from "@/presentations/registry";
import { PresentationEngine } from "@/engine/PresentationEngine";
import { PresenterView } from "@/engine/PresenterView";

export function PresentClientView({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const deck = getDeckBySlug(slug);

  if (!deck) {
    notFound();
  }

  if (searchParams.get("mode") === "presenter") {
    return <PresenterView deck={deck} />;
  }

  return <PresentationEngine deck={deck} />;
}
