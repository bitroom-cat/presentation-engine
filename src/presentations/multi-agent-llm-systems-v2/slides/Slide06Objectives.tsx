"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Compass, BookOpen, Layers, Search, Code, CheckSquare } from "lucide-react";

export function Slide06Objectives({ slideIndex, totalSlides }: SlideProps) {
  const objectives = [
    { num: "01", title: "Review Failures & Scaling", desc: "Catalog MAST taxonomies and super-linear overhead laws (Kim et al.).", icon: BookOpen, color: "text-blue-400 border-blue-500/40 bg-blue-950/20" },
    { num: "02", title: "Benchmark Memory Architectures", desc: "Compare GCC, ChronoMem, and EvoGit on concurrency, rollback, and state provenance.", icon: Layers, color: "text-cyan-400 border-cyan-500/40 bg-cyan-950/20" },
    { num: "03", title: "Isolate Critical Research Gaps", desc: "Expose gaps in concurrent semantic conflicts, attribution, and experience sharing.", icon: Search, color: "text-purple-400 border-purple-500/40 bg-purple-950/20" },
    { num: "04", title: "Propose Git-Governed Architecture", desc: "Formulate the SAS vs MAS router, sandboxed branches, LLM Judge, and Council.", icon: Code, color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/20" },
    { num: "05", title: "Formulate Validation Metrics", desc: "Design benchmark tests, accuracy scores, and token overhead cost measures.", icon: CheckSquare, color: "text-amber-400 border-amber-500/40 bg-amber-950/20" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            3. Research Scope
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Project Objectives &amp; Five-Stage Roadmap
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 6 of {totalSlides}
        </span>
      </div>

      {/* 5 Objectives Visual Road */}
      <div className="grid grid-cols-5 gap-3.5 my-auto">
        {objectives.map((obj) => {
          const Icon = obj.icon;
          return (
            <div
              key={obj.num}
              className={`p-4 rounded-xl border ${obj.color} flex flex-col justify-between h-[360px] shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black text-white opacity-40">{obj.num}</span>
                <Icon className="w-6 h-6" />
              </div>
              <div className="my-auto">
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">{obj.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{obj.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-cyan-300 border-t border-slate-800/80 pt-2">
                Milestone Stage
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
