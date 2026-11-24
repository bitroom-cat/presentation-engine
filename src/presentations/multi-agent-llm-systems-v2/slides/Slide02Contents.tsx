"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ListOrdered, ArrowRight, Layers, Workflow, GitBranch, Scale, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Slide02Contents({ slideIndex, totalSlides }: SlideProps) {
  const roadmapStages = [
    { num: 1, title: "Foundations", chapters: "Ch 1–3: Paradigm Shift, Core Challenges & Objectives", icon: Layers, color: "border-blue-500/40 text-blue-400 bg-blue-950/20" },
    { num: 2, title: "Literature Review", chapters: "Ch 4: MAST Failure Taxonomy, Scaling Laws & Memory", icon: Workflow, color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/20" },
    { num: 3, title: "Proposed Architecture", chapters: "Ch 5–6: Orchestrator, Git Sandbox, LLM Judge & Council", icon: GitBranch, color: "border-purple-500/40 text-purple-400 bg-purple-950/20" },
    { num: 4, title: "Validation & Horizon", chapters: "Ch 7–10: Metrics, Benchmarks, Timeline & Conclusion", icon: ShieldCheck, color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/20" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Presentation Architecture &amp; Agenda
          </h2>
        </div>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
          4-Stage Research Flow
        </span>
      </div>

      {/* Visual Roadmap Flow */}
      <div className="my-auto space-y-6">
        <div className="grid grid-cols-4 gap-4">
          {roadmapStages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className={`p-5 rounded-2xl border ${st.color} flex flex-col justify-between h-56 shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-white opacity-40">0{st.num}</span>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.chapters}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-cyan-300">
                  <span>Explore Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Synopsis Banner */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Structured academic flow balancing failure analysis with constructive systems engineering.</span>
          </div>
          <span className="text-cyan-400 font-bold">Total 22 Slides</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Dept. of CSE, Govt. College Dharamshala</span>
      </div>
    </div>
  );
}
