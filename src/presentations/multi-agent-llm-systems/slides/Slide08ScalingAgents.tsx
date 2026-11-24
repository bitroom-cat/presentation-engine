"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ScalingEffectChart } from "../components/MultiAgentIllustrations";
import { TrendingUp, GitFork, AlertTriangle, Layers } from "lucide-react";

export function Slide08ScalingAgents({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 4.1.1 • Literature Review: Empirical Scaling
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            4.1.1 Scaling Laws in Agent Systems (Kim et al. 2025)
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 8 of {totalSlides}
        </span>
      </div>

      {/* Main Grid: Interactive Dual Chart & Key Empirical Takeaways */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Interactive Scaling Effect Visual (Fig. 3) */}
        <div className="col-span-8">
          <ScalingEffectChart className="h-[430px]" />
        </div>

        {/* Right Column: Architectural Analysis */}
        <div className="col-span-4 flex flex-col justify-between h-[430px]">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs font-mono uppercase">
              <Layers className="w-4 h-4" />
              5 Multi-Agent Topologies
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kim et al. rigorously evaluated 5 distinct multi-agent interaction topologies:
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[10.5px] font-mono text-slate-300">
              <span className="p-1 rounded bg-slate-950 border border-slate-800 text-center">1. Single Agent</span>
              <span className="p-1 rounded bg-slate-950 border border-slate-800 text-center">2. Independent</span>
              <span className="p-1 rounded bg-slate-950 border border-slate-800 text-center">3. Centralized</span>
              <span className="p-1 rounded bg-slate-950 border border-slate-800 text-center">4. Decentralized</span>
              <span className="col-span-2 p-1 rounded bg-slate-950 border border-slate-800 text-center text-cyan-400 font-bold">5. Hybrid Swarm</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs font-mono uppercase">
              <TrendingUp className="w-4 h-4" />
              Super-Linear Penalty Law
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inter-agent message complexity grows super-linearly as <strong className="text-cyan-400 font-mono">T = 2.72(n + 0.5)<sup>1.724</sup></strong>. Adding agents without task-structure awareness inflates tokens with negative returns.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 text-[11px] text-blue-200 font-mono">
            <span className="font-bold text-blue-300 block mb-0.5">💡 Critical Takeaway:</span>
            Agent count must be dynamically calibrated based on task parallelism score ρ(G). Crucially, Kim et al. did <em>not</em> evaluate memory consistency or semantic conflicts.
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
