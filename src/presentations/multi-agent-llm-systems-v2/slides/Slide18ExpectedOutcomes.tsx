"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Target, CheckCircle2, Zap, GitBranch, Scale, ShieldCheck } from "lucide-react";

export function Slide18ExpectedOutcomes({ slideIndex, totalSlides }: SlideProps) {
  const outcomes = [
    { title: "Task-Aware Routing", metric: "Eliminate -70% Drop", desc: "Routes sequential tasks to SAS and parallel tasks to MAS via graph metric ρ(G).", icon: Zap, color: "text-cyan-400 border-cyan-800" },
    { title: "Hermetic Memory", metric: "Zero Error Drift", desc: "Isolates hallucinated agent actions inside git branch sandboxes Bi(j).", icon: GitBranch, color: "text-blue-400 border-blue-800" },
    { title: "Semantic Arbitration", metric: "Domain-Independent", desc: "Master Judge + specialized jurors reconcile conflicting agent claims.", icon: Scale, color: "text-purple-400 border-purple-800" },
    { title: "Council Feedback", metric: "Self-Evolution", desc: "Council parses audit logs to trace root causes and update agent prompts.", icon: ShieldCheck, color: "text-emerald-400 border-emerald-800" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            7. Anticipated Deliverables
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Four Core Architectural Contributions &amp; Design Targets
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 18 of {totalSlides}
        </span>
      </div>

      {/* 4 Outcome Cards Grid */}
      <div className="grid grid-cols-2 gap-4 my-auto">
        {outcomes.map((o, idx) => {
          const Icon = o.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-44 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${o.color.split(" ")[0]}`} />
                  <h4 className="text-sm font-bold text-white">{o.title}</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                  {o.metric}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed my-auto">
                {o.desc}
              </p>
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Architectural Goal</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
