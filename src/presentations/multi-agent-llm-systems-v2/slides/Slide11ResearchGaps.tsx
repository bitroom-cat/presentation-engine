"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Search, AlertTriangle, Layers, GitBranch, Scale, Cpu } from "lucide-react";

export function Slide11ResearchGaps({ slideIndex, totalSlides }: SlideProps) {
  const gaps = [
    { num: 1, title: "Concurrent Memory", desc: "GCC is sequential; ChronoMem uses crude locks. Concurrent shared memory is missing." },
    { num: 2, title: "Semantic Arbitration", desc: "EvoGit relies strictly on compilers. Open domains lack semantic correctness oracles." },
    { num: 3, title: "Experience Sharing", desc: "No framework provides provenance tracking, trust evaluation, or experience invalidation." },
    { num: 4, title: "Causal Attribution", desc: "MAST shows error co-occurrence but cannot isolate initial faulty agent prompts." },
    { num: 5, title: "Task-Topology Decoupling", desc: "Swarm platforms spawn fixed agent counts regardless of task parallelism score ρ(G)." },
    { num: 6, title: "Conflict Benchmarks", desc: "Standard suites (SWE-Bench) ignore multi-agent branch divergence and arbitration costs." },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-rose-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" />
            4.2 Literature Synthesis
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Six Critical Research Gaps in Agent Coordination
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 11 of {totalSlides}
        </span>
      </div>

      {/* 6 Gap Cards */}
      <div className="grid grid-cols-3 gap-4 my-auto">
        {gaps.map((g) => (
          <div
            key={g.num}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-36 hover:border-rose-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-cyan-400">GAP #{g.num}</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-snug">{g.title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-snug">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Major Synthesis Gap Callout */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-800/50 text-xs font-mono text-slate-200">
        <span className="text-rose-400 font-bold uppercase mr-2">Core Mandate:</span>
        No integrated framework coordinates agents, isolates versioned memory, resolves semantic conflicts, and evolves code.
      </div>
    </div>
  );
}
