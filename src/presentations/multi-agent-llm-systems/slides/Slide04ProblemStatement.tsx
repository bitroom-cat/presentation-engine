"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { AlertOctagon, Database, GitMerge, Search, Share2, Scale, DollarSign } from "lucide-react";

export function Slide04ProblemStatement({ slideIndex, totalSlides }: SlideProps) {
  const problems = [
    {
      icon: Database,
      title: "1. Weak Memory Support",
      desc: "Flat conversation logs and basic RAG lack temporal state, provenance, and transactional rollback mechanisms.",
      tag: "State Loss",
      color: "border-blue-500/40 text-blue-400",
    },
    {
      icon: GitMerge,
      title: "2. Concurrency Gaps",
      desc: "Git-inspired agent memory works for sequential workflows, but fails to resolve concurrent semantic conflicts.",
      tag: "Race Conditions",
      color: "border-cyan-500/40 text-cyan-400",
    },
    {
      icon: Search,
      title: "3. Limited Causal Tracing",
      desc: "Failures are merely categorized after the crash; root causes are obscured by downstream cascading symptoms.",
      tag: "Attribution Void",
      color: "border-amber-500/40 text-amber-400",
    },
    {
      icon: Share2,
      title: "4. Unmanaged Experience Sharing",
      desc: "No systematic protocol exists to share, reconcile, and synchronize learned trajectories across independent agents.",
      tag: "Operational Amnesia",
      color: "border-purple-500/40 text-purple-400",
    },
    {
      icon: Scale,
      title: "5. No Correctness Oracle",
      desc: "Unlike software code with compilers and unit tests, open-domain reasoning lacks automated deterministic oracles.",
      tag: "Arbitration Gap",
      color: "border-rose-500/40 text-rose-400",
    },
    {
      icon: DollarSign,
      title: "6. Super-linear Operational Cost",
      desc: "Unchecked agent proliferation multiplies token usage and latency without guaranteed performance improvements.",
      tag: "Cost Inflation",
      color: "border-emerald-500/40 text-emerald-400",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-rose-400 font-semibold tracking-wider flex items-center gap-1.5">
            <AlertOctagon className="w-3.5 h-3.5" />
            Chapter 2 • Problem Statement
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            2. Core Challenges in Multi-Agent LLM Systems
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 4 of {totalSlides}
        </span>
      </div>

      {/* 6 Problem Cards */}
      <div className="grid grid-cols-3 gap-4 my-auto">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-36"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${p.color}`} />
                  <span className="font-bold text-sm text-slate-100">{p.title}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                  {p.tag}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed my-auto">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Synthesis Callout */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-rose-950/50 via-slate-900/90 to-blue-950/50 border border-rose-800/40 text-center text-xs font-mono text-slate-300">
        <span className="text-rose-400 font-bold uppercase mr-2">Core Dilemma:</span>
        There is currently no integrated, domain-independent approach to govern coordination, memory, semantic conflicts, and cascading failures in agent swarms.
      </div>
    </div>
  );
}
