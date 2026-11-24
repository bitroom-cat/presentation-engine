"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ScalingEffectChart } from "../components/DiagramIllustrations";
import { TrendingUp, Layers, AlertTriangle } from "lucide-react";

export function Slide08ScalingAgents({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            4.1.1 Literature Review • Empirical Scaling Laws
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Scaling Agent Systems: Speedup vs. Super-linear Collapse
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 8 of {totalSlides}
        </span>
      </div>

      {/* Main Grid: Dual Visual Chart & Analysis */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        <div className="col-span-8">
          <ScalingEffectChart className="h-[430px]" />
        </div>

        <div className="col-span-4 flex flex-col justify-between h-[430px]">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs font-mono uppercase">
              <Layers className="w-4 h-4" />
              Empirical Scaling Truth
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kim et al. evaluated 5 interaction topologies. Crucial takeaway: agent count must be matched to task parallelism.
            </p>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400">
              Parallel: <strong>+81% speedup</strong><br />
              Sequential: <strong className="text-rose-400">-70% degradation</strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs font-mono uppercase">
              <TrendingUp className="w-4 h-4" />
              Communication Overhead Law
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inter-agent message complexity grows super-linearly as <strong className="text-cyan-400 font-mono">T = 2.72(n + 0.5)<sup>1.724</sup></strong>.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 text-[11px] text-blue-200 font-mono">
            <strong>Key Insight:</strong> Never force multi-agent orchestration onto sequential workloads. Use dynamic routing.
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
