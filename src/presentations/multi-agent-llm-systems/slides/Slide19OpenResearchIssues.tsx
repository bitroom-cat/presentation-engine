"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Compass, Sparkles, Brain, Share2, Scale, Activity, Coins } from "lucide-react";

export function Slide19OpenResearchIssues({ slideIndex, totalSlides }: SlideProps) {
  const issues = [
    {
      title: "1. Cross-Agent Experience Sharing",
      desc: "EvolveR and TPGO independently hit the same frontier: verifying provenance, establishing peer trust, assigning contribution credit, and reconciling conflicting learned experience.",
      icon: Share2,
      color: "text-cyan-400 border-cyan-800",
    },
    {
      title: "2. Domain-Independent Semantic Conflict Resolution",
      desc: "Database concurrency control is mathematically mature, but resolving competing semantic assertions, differing intent, and contradictory evidence in open natural language remains open.",
      icon: Scale,
      color: "text-purple-400 border-purple-800",
    },
    {
      title: "3. Component Diagnosis for Multi-Agent Systems",
      desc: "Synthesizing HarnessFix-style trajectory inspection (single-agent) with TPGO textual parameter gradients to trace failures across multi-agent communication networks.",
      icon: Brain,
      color: "text-blue-400 border-blue-800",
    },
    {
      title: "4. Causal Fault Attribution Across Cascades",
      desc: "MAST demonstrates error co-occurrence (e.g. History Loss ↔ Reset r=0.63), but mathematically proving causal responsibility across an n-agent chain requires counterfactual tracing.",
      icon: Activity,
      color: "text-rose-400 border-rose-800",
    },
    {
      title: "5. Token Economics & Real-World Conflict Benchmarks",
      desc: "Formulating strict Pareto-efficiency boundaries between governance overhead (tokens/latency) and task success rate, accompanied by standardized conflict datasets.",
      icon: Coins,
      color: "text-amber-400 border-amber-800",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Chapter 7.5 • Future Horizons
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            7.5 Roadmap &amp; Open Research Issues in Agent Governance
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 19 of {totalSlides}
        </span>
      </div>

      {/* 5 Open Issues Grid */}
      <div className="grid grid-cols-12 gap-4 my-auto">
        <div className="col-span-7 space-y-3">
          {issues.slice(0, 3).map((iss, idx) => {
            const Icon = iss.icon;
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-slate-950 border ${iss.color} shrink-0`}>
                  <Icon className={`w-4 h-4 ${iss.color.split(" ")[0]}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{iss.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{iss.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-5 space-y-3">
          {issues.slice(3, 5).map((iss, idx) => {
            const Icon = iss.icon;
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 h-[135px]">
                <div className={`p-2 rounded-lg bg-slate-950 border ${iss.color} shrink-0`}>
                  <Icon className={`w-4 h-4 ${iss.color.split(" ")[0]}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{iss.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{iss.desc}</p>
                </div>
              </div>
            );
          })}

          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/60 text-xs font-mono text-purple-200">
            <strong>Long-term Target:</strong> Autonomous agent swarms that self-regulate memory and evolve zero-hallucination protocols.
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
