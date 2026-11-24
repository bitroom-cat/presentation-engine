"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { CheckCircle2, AlertOctagon, Lightbulb, Compass, Award } from "lucide-react";

export function Slide21Conclusion({ slideIndex, totalSlides }: SlideProps) {
  const points = [
    { label: "Empirical Finding", desc: "Multi-agent systems excel at parallel tasks (+81%) but degrade on sequential logic (-70%) due to unmanaged context drift.", icon: AlertOctagon, color: "text-amber-400 border-amber-800" },
    { label: "Identified Gap", desc: "Single-agent Git memory exists, but concurrent multi-agent writes without domain compilers remain unsolved.", icon: Compass, color: "text-rose-400 border-rose-800" },
    { label: "Proposed Framework", desc: "Couples topological routing ρ(G), sandboxed Git branches Bi(j), Master Judge LLM, and an Evolution Council.", icon: Lightbulb, color: "text-cyan-400 border-cyan-800" },
    { label: "Validation Status", desc: "Conceptual system ready for SWE-Bench Verified and open-domain semantic contradiction benchmarks.", icon: Award, color: "text-purple-400 border-purple-800" },
    { label: "Vision", desc: "Transforming agent memory into an immutable, versioned graph as the foundation for self-healing AI systems.", icon: CheckCircle2, color: "text-emerald-400 border-emerald-800" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            9. Synthesis
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Conclusion &amp; Core Architectural Synthesis
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
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2 w-48 shrink-0">
                <Icon className={`w-4 h-4 ${p.color.split(" ")[0]}`} />
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
