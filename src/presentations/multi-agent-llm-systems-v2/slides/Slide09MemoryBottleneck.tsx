"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Database, GitBranch, Lock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export function Slide09MemoryBottleneck({ slideIndex, totalSlides }: SlideProps) {
  const cards = [
    {
      title: "GCC (Wu 2025)",
      mechanism: "Git context primitives (COMMIT, BRANCH, MERGE)",
      scope: "Single-agent sequential handoffs",
      conflict: "Standard text git merge",
      result: "80.2% SWE-Bench",
      bottleneck: "No multi-agent concurrency",
      accent: "border-blue-500/40 text-blue-400",
    },
    {
      title: "ChronoMem (Su 2026)",
      mechanism: "Snapshot on every write + semantic rollback",
      scope: "Single-agent memory logs",
      conflict: "Pessimistic per-user lock",
      result: "F1 36.1% vs 2.3%",
      bottleneck: "Locks block concurrent writes",
      accent: "border-cyan-500/40 text-cyan-400",
    },
    {
      title: "EvoGit (Huang 2025)",
      mechanism: "Decentralized Git graph across 16 parallel agents",
      scope: "Software coding repositories",
      conflict: "Automated compiler & unit tests",
      result: "High parallel code output",
      bottleneck: "Fails without deterministic tests",
      accent: "border-purple-500/40 text-purple-400",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            4.1.2 Literature Review • Memory &amp; State Bottlenecks
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            State-of-the-Art Git-Inspired Memory Architectures
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 9 of {totalSlides}
        </span>
      </div>

      {/* 3 Visual Cards */}
      <div className="grid grid-cols-3 gap-5 my-auto">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl bg-slate-900/80 border ${c.accent} flex flex-col justify-between h-[390px] shadow-lg`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                <span className="font-mono text-sm font-bold text-white">{c.title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400">
                  {c.result}
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Mechanism</span>
                  <div className="text-white font-medium mt-0.5 leading-snug">{c.mechanism}</div>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">Scope &amp; Conflict</span>
                  <div className="text-slate-300 mt-0.5 leading-snug">{c.scope} • {c.conflict}</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs font-mono text-rose-300">
              <strong>Bottleneck:</strong> {c.bottleneck}
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Banner */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
        <span><strong>Synthesis:</strong> Versioning and rollback exist in isolation, but concurrent semantic conflict resolution in open domains is unsolved.</span>
        <span className="text-cyan-400 font-bold">Research Imperative</span>
      </div>
    </div>
  );
}
