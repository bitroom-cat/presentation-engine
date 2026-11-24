"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { CheckSquare, BarChart3, Activity, Gauge } from "lucide-react";

export function Slide18ValidationMetrics({ slideIndex, totalSlides }: SlideProps) {
  const metrics = [
    {
      metric: "Task Success Rate",
      measures: "Percentage of end-to-end tasks completed correctly under SAS, ungoverned MAS, and governed MAS.",
      type: "Efficacy",
    },
    {
      metric: "Routing Accuracy",
      measures: "How often the decision rule δ(G) correctly selects between SAS and MAS compared to optimal oracle choice.",
      type: "Topology",
    },
    {
      metric: "Memory Consistency",
      measures: "Absence of factual contradictions or temporal inversions in global memory following branch merges.",
      type: "State Integrity",
    },
    {
      metric: "Conflict Detection Precision / Recall",
      measures: "Ability to reliably catch true semantic divergences while avoiding false-positive arbitration blocks.",
      type: "Detection",
    },
    {
      metric: "Arbitration Quality",
      measures: "Degree of agreement between the LLM Judge reconciled output and verifiable ground truth.",
      type: "Correctness",
    },
    {
      metric: "Fault-Attribution Accuracy",
      measures: "How frequently the Evolution Council correctly identifies the root-cause agent rather than a downstream symptom.",
      type: "Causality",
    },
    {
      metric: "Token Cost & Latency Overhead",
      measures: "Marginal token expenditure and wall-clock latency introduced by branching, judging, and audit logging.",
      type: "Economics",
    },
    {
      metric: "Communication Overhead Growth",
      measures: "Super-linear message scaling curve fitting T = c·(n + 0.5)^γ as agent count n scales from 1 to 10.",
      type: "Complexity",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5" />
            Chapter 7.4 • Quantitative Evaluation Suite
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            7.4 Comprehensive Validation Metrics &amp; Benchmarks
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 18 of {totalSlides}
        </span>
      </div>

      {/* Structured Metrics Table */}
      <div className="my-auto border border-slate-800 rounded-xl overflow-hidden bg-slate-900/90 shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-cyan-400 font-mono uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-2.5 px-4 w-60">Validation Metric</th>
              <th className="py-2.5 px-4">What it Formally Measures &amp; Verifies</th>
              <th className="py-2.5 px-4 w-32">Evaluation Axis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-slate-200">
            {metrics.map((m, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2 px-4 font-bold font-mono text-cyan-300 text-[11.5px]">
                  {m.metric}
                </td>
                <td className="py-2 px-4 text-[11px] text-slate-300 leading-snug">
                  {m.measures}
                </td>
                <td className="py-2 px-4 text-[10.5px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {m.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
