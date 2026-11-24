"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Wrench, Terminal, Cpu, Database, Server, BarChart, CheckCircle2 } from "lucide-react";

export function Slide17ToolsTechnology({ slideIndex, totalSlides }: SlideProps) {
  const stack = [
    { name: "Python 3.11+", role: "Core Orchestrator & Task Graph Algorithms", tag: "Language", color: "border-blue-500/40 text-blue-400 bg-blue-950/30" },
    { name: "Git & GitPython", role: "Hermetic Branch Sandboxing & Rollback", tag: "VCS", color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/30" },
    { name: "Docker Containers", role: "Isolated Tool Runtime Execution", tag: "Sandbox", color: "border-purple-500/40 text-purple-400 bg-purple-950/30" },
    { name: "LLM API Suite", role: "GPT-4o, Claude 3.5 & Local Llama-3", tag: "Models", color: "border-rose-500/40 text-rose-400 bg-rose-950/30" },
    { name: "AutoGen & MetaGPT", role: "Industrial Baseline Control Groups", tag: "Baselines", color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/30" },
    { name: "SWE-Bench Verified", role: "Standardized Multi-Agent Code Repair", tag: "Evaluation", color: "border-amber-500/40 text-amber-400 bg-amber-950/30" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" />
            6. Technology Stack
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            System Implementation &amp; Experimental Tooling Architecture
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 17 of {totalSlides}
        </span>
      </div>

      {/* 6 Visual Technology Blocks */}
      <div className="grid grid-cols-3 gap-4 my-auto">
        {stack.map((s, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border ${s.color} flex flex-col justify-between h-40 shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                {s.tag}
              </span>
              <Wrench className="w-4 h-4 opacity-50" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">{s.name}</h4>
              <p className="text-xs text-slate-300 leading-snug">{s.role}</p>
            </div>
            <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-slate-800/60">
              Verified Component
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
