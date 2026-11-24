"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { GitBranch, ShieldCheck, Scale, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export function Slide05Motivation({ slideIndex, totalSlides }: SlideProps) {
  const comparisons = [
    { se: "Git Feature Branches", agent: "Isolated Memory Sandboxes Bi(j)", why: "Sequesters errors to one agent without infecting shared state" },
    { se: "Pull Request & Code Review", agent: "LLM-as-Judge Semantic Arbiter", why: "Resolves conflicting data assertions with verifiable source checking" },
    { se: "CI / CD Automated Tests", agent: "Deterministic Domain Tests", why: "Ensures code and logic syntax correctness before main integration" },
    { se: "Immutable Git Commit Log", agent: "Audit Ledger + Evolution Council", why: "Traces cascading root causes and patches agent prompts over time" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            2.2 Context &amp; Purpose
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Borrowing Proven Software Engineering Principles for Agent Governance
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 5 of {totalSlides}
        </span>
      </div>

      {/* Visual Metaphor Table Grid */}
      <div className="my-auto space-y-3.5">
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
          Software engineering conquered distributed collaboration through version control, branch isolation, and code review. We systematically map these battle-tested primitives into autonomous multi-agent systems:
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {comparisons.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between h-32 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">SE: {c.se}</span>
                <span className="text-cyan-400">➔</span>
                <span className="text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 font-bold">{c.agent}</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug my-auto">
                {c.why}
              </p>
            </div>
          ))}
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
