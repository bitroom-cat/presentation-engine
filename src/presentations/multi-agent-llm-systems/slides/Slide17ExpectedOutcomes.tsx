"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Target, CheckCircle2, GitBranch, Scale, ShieldCheck, Zap } from "lucide-react";

export function Slide17ExpectedOutcomes({ slideIndex, totalSlides }: SlideProps) {
  const outcomes = [
    {
      title: "1. Task-Aware Topological Routing",
      desc: "Elimination of the -70% multi-agent coordination penalty on sequential tasks by mathematically routing them to SAS, while capturing +81% speedup on parallelizable workloads.",
      icon: Zap,
      color: "border-cyan-500/40 text-cyan-400",
    },
    {
      title: "2. Hermetic Memory Isolation & Provenance",
      desc: "Containment of agent hallucinations and reasoning drift within isolated Git branch buffers, enabling deterministic rollback without corrupting global project state.",
      icon: GitBranch,
      color: "border-blue-500/40 text-blue-400",
    },
    {
      title: "3. Domain-Independent Semantic Arbitration",
      desc: "A formal LLM-as-Judge resolution engine that resolves competing agent assertions, verifies source citations, and outputs an auditable reconciliation ledger.",
      icon: Scale,
      color: "border-purple-500/40 text-purple-400",
    },
    {
      title: "4. Evolutionary Self-Improvement Council",
      desc: "A closed-loop governance meta-agent that inspects execution audit trails, isolates root-cause agent failures, and automatically refines system prompts and schemas.",
      icon: ShieldCheck,
      color: "border-emerald-500/40 text-emerald-400",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            Chapter 7 • Anticipated Deliverables
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            7. Expected Outcomes &amp; Architectural Contributions
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 17 of {totalSlides}
        </span>
      </div>

      {/* 4 Outcome Cards Grid */}
      <div className="grid grid-cols-2 gap-4 my-auto">
        {outcomes.map((o, idx) => {
          const Icon = o.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-44 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  <Icon className={`w-5 h-5 ${o.color}`} />
                </div>
                <h4 className="text-sm font-bold text-white">{o.title}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed my-auto">
                {o.desc}
              </p>
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Design Target</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Academic Integrity Callout */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
        <span>⚠️ Explicit Distinction: Expected outcomes represent <em>architectural design targets</em>, to be validated through planned empirical sweeps.</span>
        <span className="text-cyan-400">Target Benchmark: SWE-Bench + OpenQA</span>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
