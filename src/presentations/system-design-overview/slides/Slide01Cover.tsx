"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideFooter } from "@/engine/SlidePrimitives";
import { Server, ShieldCheck, Network } from "lucide-react";

export function Slide01Cover({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer className="justify-between bg-gradient-to-br from-neutral-950 via-zinc-900 to-amber-950/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs">
          <Server className="w-3.5 h-3.5" />
          <span>ENTERPRISE DISTRIBUTED SYSTEMS ARCHITECTURE</span>
        </div>
        <div className="font-mono text-xs text-zinc-500">TIER-1 CORE PLATFORM SPEC</div>
      </div>

      <div className="my-auto max-w-4xl space-y-6">
        <div className="space-y-3">
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            High-Throughput <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
              Event Streaming Platform
            </span>
          </h1>
          <p className="text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
            Scaling horizontally to 10M events/second with zero-copy Kafka clusters and distributed read caches.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Network className="w-4 h-4 text-amber-400" />
            <span>Multi-Region Active-Active</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>99.999% High Availability</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase font-mono">Chief Architect</span>
              <span className="font-semibold text-zinc-200">{deck.author}</span>
            </div>
            <div className="h-6 w-[1px] bg-zinc-800" />
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase font-mono">Published</span>
              <span className="font-semibold text-zinc-200">{deck.date}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-zinc-600 block text-[10px] uppercase font-mono">Architecture Tier</span>
            <span className="font-mono text-amber-400 font-medium">Mission Critical</span>
          </div>
        </div>

        <SlideFooter
          deckTitle={deck.title}
          slideIndex={slideIndex}
          totalSlides={totalSlides}
          author={deck.author}
        />
      </div>
    </SlideContainer>
  );
}
