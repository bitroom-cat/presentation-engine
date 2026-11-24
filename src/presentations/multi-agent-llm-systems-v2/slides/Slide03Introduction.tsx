"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Cpu, Users, AlertTriangle, TrendingUp, Sparkles, Layers } from "lucide-react";

export function Slide03Introduction({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            1. Foundations • Paradigm Evolution
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            From Single-Agent Limits to Collaborative Swarms
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 3 of {totalSlides}
        </span>
      </div>

      {/* Visual Comparison Grid */}
      <div className="grid grid-cols-12 gap-6 my-auto">
        {/* Left: Single-Agent Bottleneck (5 cols) */}
        <div className="col-span-5 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[420px]">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <Cpu className="w-5 h-5" />
              Single-Agent Saturation
            </div>
            
            <div className="space-y-4 my-auto">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-white font-bold block mb-1">Context Window Overflow:</span>
                Monolithic LLMs hit cognitive degradation as long reasoning traces dilute attention weights [2],[5].
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-white font-bold block mb-1">Catastrophic Forgetting:</span>
                Early constraints and code dependencies get lost during long prompt sequences.
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 text-[11px] font-mono text-amber-300 text-center">
            Limited strictly by context length &amp; unified role bias.
          </div>
        </div>

        {/* Center: Shift Arrow (2 cols) */}
        <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-950">
            ➔
          </div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider text-center">
            Specialized<br />Decomposition
          </span>
        </div>

        {/* Right: Multi-Agent Reality (5 cols) */}
        <div className="col-span-5 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[420px]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <Users className="w-5 h-5" />
              Multi-Agent Collaboration Reality
            </div>

            <div className="space-y-4 my-auto">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold block mb-1">+81% Parallel Speedup:</span>
                Specialized role decomposition (Planner, Tool, Coder, Reviewer) excels at independent tasks [10].
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="text-rose-400 font-bold block mb-1">-70% Sequential Collapse:</span>
                Uncontrolled message passing on sequential tasks creates cascading errors and circular debates [3].
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-[11px] font-mono text-rose-300 text-center">
            ⚠️ Memory amnesia and lack of governance is the root bottleneck.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
