"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Gauge, CheckSquare } from "lucide-react";

export function Slide19ValidationMetrics({ slideIndex, totalSlides }: SlideProps) {
  const metrics = [
    { name: "Task Success Rate", axis: "Efficacy", desc: "Percentage of complex tasks resolved correctly under SAS, ungoverned MAS, and governed MAS." },
    { name: "Routing Accuracy", axis: "Topology", desc: "How accurately δ(G) selects SAS vs MAS compared to optimal empirical baseline." },
    { name: "Memory Consistency", axis: "State", desc: "Absence of factual contradictions or temporal inversions in global memory." },
    { name: "Conflict Precision / Recall", axis: "Detection", desc: "Reliability in detecting true semantic divergences while avoiding false-positive blocks." },
    { name: "Arbitration Quality", axis: "Correctness", desc: "Agreement between LLM-as-Judge canonical commit and verified ground truth." },
    { name: "Fault Attribution Accuracy", axis: "Causality", desc: "How often the Council identifies root-cause agents rather than downstream symptoms." },
    { name: "Token & Latency Overhead", axis: "Economics", desc: "Marginal cost introduced by branching, judging, and audit log generation." },
    { name: "Communication Overhead Curve", axis: "Complexity", desc: "Fitting message complexity to T = 2.72(n + 0.5)^1.724 as agent swarm scales." },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5" />
            7.4 Quantitative Evaluation Suite
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Eight Validation Metrics &amp; Benchmark Dimensions
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 19 of {totalSlides}
        </span>
      </div>

      {/* 8 Metric Badges Grid */}
      <div className="grid grid-cols-4 gap-3.5 my-auto">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-36 hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold">
                {m.axis}
              </span>
              <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white leading-tight">{m.name}</h4>
              <p className="text-[10.5px] text-slate-300 mt-1 leading-snug">{m.desc}</p>
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
