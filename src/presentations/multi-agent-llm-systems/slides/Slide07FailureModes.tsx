"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { MastFailureChart } from "../components/MultiAgentIllustrations";
import { AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";

export function Slide07FailureModes({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 4.1.1 • Literature Review: Empirical Failures
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            4.1.1 Failure Modes in Multi-Agent Systems: MAST &amp; HarnessFix
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
          {/* MAST Key Insights */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs font-mono uppercase">
              <ShieldAlert className="w-4 h-4" />
              MAST Taxonomy (Cemri et al. NeurIPS 2025)
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
              <li>Failures stem predominantly from <strong>system design &amp; inter-agent misalignment</strong>, not single-agent weakness.</li>
              <li>Strong interdependency: <em>Loss of Conversation History</em> and <em>Conversation Reset</em> correlate at <strong className="text-cyan-400 font-mono">r = 0.63</strong>.</li>
              <li>Labeling reliability: High inter-annotator agreement <strong className="text-emerald-400 font-mono">κ = 0.88</strong> (0.79 on unseen frameworks).</li>
            </ul>
          </div>

          {/* HarnessFix Insights */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold text-xs font-mono uppercase">
              <CheckCircle2 className="w-4 h-4" />
              HarnessFix (Chen et al. 2026)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Introduces a 7-layer harness + Hierarchical Trajectory Inspection &amp; Repair (HTIR). Yields <strong>+11.1% completion</strong> and <strong>85.0% fault localization</strong> (vs. 45–52% baseline).
            </p>
          </div>

          {/* Critical Literature Boundary / Limitation Callout */}
          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-[11px] text-rose-200 font-mono">
            <span className="font-bold text-rose-400 block mb-0.5">⚠️ Literature Gap Identified:</span>
            MAST classifies failures after execution but provides <em>no preventative arbitration</em>. HarnessFix was validated on <em>single-agent</em> pipelines only.
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
