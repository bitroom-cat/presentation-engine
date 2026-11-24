"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { MastFailureChart } from "../components/DiagramIllustrations";
import { ShieldAlert, CheckCircle2, AlertOctagon } from "lucide-react";

export function Slide07FailureModes({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            4.1.1 Literature Review • Failure Taxonomies
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Where Agent Teams Break Down: The MAST Benchmark
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 7 of {totalSlides}
        </span>
      </div>

      {/* Main Grid: Left Chart, Right Deep Dive */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Interactive MAST Chart (Fig. 2) */}
        <div className="col-span-7">
          <MastFailureChart className="h-[430px]" />
        </div>

        {/* Right Column: Comparative Analysis & Insights */}
        <div className="col-span-5 flex flex-col justify-between h-[430px]">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs font-mono uppercase">
              <ShieldAlert className="w-4 h-4" />
              MAST Taxonomy (Cemri et al. NeurIPS 2025)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>76.5% of failures</strong> originate from coordination and system architecture, not LLM capability.
            </p>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-300">
              Interdependency: History Loss ↔ Conversation Reset correlates at <strong className="text-white">r = 0.63</strong>.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold text-xs font-mono uppercase">
              <CheckCircle2 className="w-4 h-4" />
              HarnessFix (Chen et al. 2026)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              7-layer inspection (HTIR) yields <strong>85.0% fault localization</strong> (vs. 45–52% baseline). But tested only on <em>single-agent</em> systems.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-[11px] text-rose-200 font-mono">
            <span className="font-bold text-rose-400 block mb-0.5">⚠️ Literature Gap:</span>
            MAST classifies failures post-mortem; it provides <em>no runtime mechanism</em> to resolve semantic divergence.
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
