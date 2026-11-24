"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Compass, BookOpen, Layers, Search, Code, CheckSquare } from "lucide-react";

export function Slide06Objectives({ slideIndex, totalSlides }: SlideProps) {
  const objectives = [
    {
      num: "01",
      title: "Review Failure Modes & Scaling Laws",
      desc: "Analyze failure taxonomies (MAST, HarnessFix) and empirical scaling studies to isolate where, why, and how multi-agent teams break down.",
      icon: BookOpen,
      color: "border-blue-500/40 text-blue-400 bg-blue-950/30",
    },
    {
      num: "02",
      title: "Compare State-of-the-Art Memory Architectures",
      desc: "Benchmark RAG, version-controlled memory (GCC, ChronoMem, EvoGit), and self-evolving agents across concurrency, provenance, and rollback.",
      icon: Layers,
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/30",
    },
    {
      num: "03",
      title: "Isolate Critical Research Gaps",
      desc: "Identify bottlenecks in concurrent semantic conflict resolution, cascading failure attribution, and cross-agent experience synchronization.",
      icon: Search,
      color: "border-purple-500/40 text-purple-400 bg-purple-950/30",
    },
    {
      num: "04",
      title: "Propose a Git-Governed Agent Architecture",
      desc: "Formulate a conceptual framework uniting task-structure routing, sandboxed git branches, LLM-as-Judge semantic arbitration, and an Evolution Council.",
      icon: Code,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/30",
    },
    {
      num: "05",
      title: "Formulate Rigorous Evaluation Protocols",
      desc: "Define comprehensive benchmarks, metrics, and token-cost formulations to evaluate memory consistency, routing accuracy, and arbitration quality.",
      icon: CheckSquare,
      color: "border-amber-500/40 text-amber-400 bg-amber-950/30",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Chapter 3 • Research Scope
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            3. Project Objectives &amp; Milestones
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 6 of {totalSlides}
        </span>
      </div>

      {/* 5 Objectives Grid */}
      <div className="grid grid-cols-12 gap-4 my-auto">
        <div className="col-span-4 space-y-4">
          {objectives.slice(0, 2).map((obj) => {
            const Icon = obj.icon;
            return (
              <div key={obj.num} className={`p-4 rounded-xl border ${obj.color} flex flex-col justify-between h-[180px]`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-white opacity-40">{obj.num}</span>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{obj.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-4 space-y-4">
          {objectives.slice(2, 4).map((obj) => {
            const Icon = obj.icon;
            return (
              <div key={obj.num} className={`p-4 rounded-xl border ${obj.color} flex flex-col justify-between h-[180px]`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-white opacity-40">{obj.num}</span>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{obj.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-4 flex flex-col justify-between">
          <div className={`p-4 rounded-xl border ${objectives[4].color} flex flex-col justify-between h-[180px]`}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl font-bold text-white opacity-40">05</span>
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{objectives[4].title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{objectives[4].desc}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
            <span className="text-emerald-400 font-bold uppercase text-[10px] block">Outcome:</span>
            Delivers a structured foundation for resilient, self-healing agent swarms that learn from operational failures.
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
