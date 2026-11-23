"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, Callout } from "@/engine/SlidePrimitives";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { clsx } from "clsx";

export function Slide03DataFlow({ slideIndex, totalSlides, deck }: SlideProps) {
  const [quorumMode, setQuorumMode] = useState<"sync" | "async">("sync");

  return (
    <SlideContainer>
      <SlideHeader
        category="Consistency Model"
        title="Interactive Quorum Consensus & Replication"
        subtitle="Toggle between strict sync quorum and speculative asynchronous replication models."
        badge="RAFT CONSENSUS"
      />

      {/* Interactive Toggle */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => setQuorumMode("sync")}
          className={clsx(
            "px-6 py-3 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all duration-200",
            quorumMode === "sync"
              ? "bg-amber-500/20 border-amber-500 text-amber-300 ring-2 ring-amber-500/30 scale-105"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
          )}
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Strict Sync Quorum (acks=all)</span>
        </button>

        <button
          onClick={() => setQuorumMode("async")}
          className={clsx(
            "px-6 py-3 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all duration-200",
            quorumMode === "async"
              ? "bg-orange-500/20 border-orange-500 text-orange-300 ring-2 ring-orange-500/30 scale-105"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
          )}
        >
          <Zap className="w-4 h-4 text-orange-400" />
          <span>Speculative Async Pipeline (acks=1)</span>
        </button>
      </div>

      {/* Dynamic Replication Visualizer */}
      <div className="grid grid-cols-3 gap-6 my-auto">
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase text-zinc-400">Node 1 (Leader - us-east)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
              PRIMARY
            </span>
          </div>
          <div className="py-4 space-y-2">
            <div className="text-xl font-bold text-white">Commit Log LSN #489,120</div>
            <p className="text-xs text-zinc-400">Disk fsync completed in 1.1ms</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
            <Check className="w-4 h-4" />
            <span>Leader Fsync Confirmed</span>
          </div>
        </div>

        <div
          className={clsx(
            "p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between",
            quorumMode === "sync"
              ? "bg-amber-950/20 border-amber-500/50 text-amber-200"
              : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400"
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase text-zinc-400">Node 2 (Follower - us-central)</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px]">
              REPLICA
            </span>
          </div>
          <div className="py-4 space-y-2">
            <div className="text-xl font-bold text-white">Replication Delay: 3.4ms</div>
            <p className="text-xs text-zinc-400">
              {quorumMode === "sync"
                ? "Mandatory for write acknowledgement"
                : "Speculative background stream catchup"}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            {quorumMode === "sync" ? (
              <span className="text-amber-400 flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Quorum Member Confirmed</span>
              </span>
            ) : (
              <span className="text-zinc-500">Asynchronous Poll</span>
            )}
          </div>
        </div>

        <div
          className={clsx(
            "p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between",
            quorumMode === "sync"
              ? "bg-amber-950/20 border-amber-500/50 text-amber-200"
              : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400"
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase text-zinc-400">Node 3 (Follower - eu-west)</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px]">
              REPLICA
            </span>
          </div>
          <div className="py-4 space-y-2">
            <div className="text-xl font-bold text-white">Replication Delay: 18.2ms</div>
            <p className="text-xs text-zinc-400">Cross-continental fiber optic trans-Atlantic transit</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            {quorumMode === "sync" ? (
              <span className="text-amber-400 flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Secondary Quorum Witness</span>
              </span>
            ) : (
              <span className="text-zinc-500">Eventual Catchup</span>
            )}
          </div>
        </div>
      </div>

      <Callout
        title={quorumMode === "sync" ? "Financial Grade Guarantee" : "High-Throughput Analytics Mode"}
        type={quorumMode === "sync" ? "warning" : "accent"}
      >
        {quorumMode === "sync"
          ? "RPO = 0. Zero data loss even during complete catastrophic failure of the primary cloud availability zone."
          : "Maximum throughput mode delivering 3.2x higher throughput with under 2ms client response times."}
      </Callout>

      <SlideFooter
        deckTitle={deck.title}
        slideIndex={slideIndex}
        totalSlides={totalSlides}
        author={deck.author}
      />
    </SlideContainer>
  );
}
