"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Search, AlertTriangle, Layers, GitBranch, ShieldCheck, Scale, Cpu, BarChart } from "lucide-react";

export function Slide11ResearchGaps({ slideIndex, totalSlides }: SlideProps) {
  const gaps = [
    {
      num: 1,
      title: "Concurrent Multi-Agent Memory",
      desc: "GCC is sequential; ChronoMem uses crude locks that serialize parallel work. True concurrent shared memory does not exist.",
    },
    {
      num: 2,
      title: "No General Semantic Conflict Resolution",
      desc: "EvoGit relies strictly on compilers and unit tests. Open-domain text and reasoning lack automated deterministic arbiters.",
    },
    {
      num: 3,
      title: "Cross-Agent Experience Sharing",
      desc: "No framework handles provenance tracking, trust evaluation, or reconciliation of outdated or conflicting learned experiences.",
    },
    {
      num: 4,
      title: "Causal Attribution of Cascading Failures",
      desc: "MAST demonstrates error co-occurrence but cannot isolate the initial faulty agent prompt from downstream cascading symptoms.",
    },
    {
      num: 5,
      title: "Coordination Uncoupled from Task Topology",
      desc: "Existing platforms spawn fixed agent counts regardless of task parallelism score ρ(G), incurring massive super-linear penalties.",
    },
    {
      num: 6,
      title: "Lack of Realistic Conflict Benchmarks",
      desc: "Current benchmarks (e.g., GAIA, SWE-Bench) evaluate accuracy but ignore semantic branch divergence, merge conflicts, and arbitration costs.",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-rose-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" />
            Chapter 4.2 • Critical Literature Analysis
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            4.2 Six Critical State-of-the-Art Research Gaps
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 11 of {totalSlides}
        </span>
      </div>

      {/* 6 Gap Cards */}
      <div className="grid grid-cols-3 gap-3.5 my-auto">
        {gaps.map((g) => (
          <div
            key={g.num}
            className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-36"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-cyan-400">GAP #{g.num}</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-snug">{g.title}</h4>
              <p className="text-[11.5px] text-slate-300 mt-1 leading-snug">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Primary Thesis Gap Callout */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-950/60 via-slate-900/90 to-cyan-950/60 border border-rose-800/50 text-xs font-mono text-slate-200 flex items-center justify-between">
        <div>
          <span className="text-rose-400 font-bold uppercase mr-2">Major Synthesis Gap:</span>
          No integrated, domain-independent framework exists that orchestrates agent swarms, isolates concurrent versioned memory, resolves semantic conflicts, traces cascading failures, and continually evolves agent code.
        </div>
      </div>
    </div>
  );
}
