"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { CheckCircle2, AlertOctagon, Lightbulb, Compass, Award } from "lucide-react";

export function Slide21Conclusion({ slideIndex, totalSlides }: SlideProps) {
  const points = [
    {
      label: "Empirical Finding",
      icon: AlertOctagon,
      desc: "Multi-agent systems excel at parallel decomposition (+81%) but severely degrade on sequential logic (-70%) due to unmanaged context drift and cascading hallucinations.",
      color: "text-amber-400 bg-amber-950/40 border-amber-800",
    },
    {
      label: "Identified Gap",
      icon: Compass,
      desc: "Git-style memory works for single-agent handoffs, but safe concurrent multi-agent writes without deterministic domain compilers remain unsolved in literature.",
      color: "text-rose-400 bg-rose-950/40 border-rose-800",
    },
    {
      label: "Proposed Solution",
      icon: Lightbulb,
      desc: "A unified framework coupling topological task routing ρ(G), sandboxed Git branch isolation B_i(j), LLM-as-Judge semantic arbitration, and an Evolution Council.",
      color: "text-cyan-400 bg-cyan-950/40 border-cyan-800",
    },
    {
      label: "Current Status",
      icon: Award,
      desc: "Rigorous conceptual architecture formulation; ready for empirical evaluation on SWE-Bench Verified and open-domain semantic conflict datasets.",
      color: "text-purple-400 bg-purple-950/40 border-purple-800",
    },
    {
      label: "Overarching Vision",
      icon: CheckCircle2,
      desc: "Transforming agent memory from lossy flat logs into a versioned, auditable knowledge graph that serves as a permanent foundation for self-healing AI systems.",
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Chapter 9 • Research Synthesis
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            9. Conclusion &amp; Architectural Synthesis
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 21 of {totalSlides}
        </span>
      </div>

      {/* 5 Synthesis Blocks */}
      <div className="space-y-2.5 my-auto">
        {points.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2 w-48 shrink-0">
                <div className={`p-1.5 rounded-lg border ${p.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono font-bold text-xs text-white uppercase">{p.label}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed my-auto">
                {p.desc}
              </p>
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
