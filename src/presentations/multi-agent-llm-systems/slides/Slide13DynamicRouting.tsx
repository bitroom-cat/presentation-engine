"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { DynamicRoutingVisualizer } from "../components/MultiAgentIllustrations";
import { GitFork, Split, Cpu, Bot, CheckCircle2 } from "lucide-react";

export function Slide13DynamicRouting({ slideIndex, totalSlides }: SlideProps) {
  const routingTable = [
    {
      decision: "SAS",
      condition: "ρ(G) < τ_seq",
      mode: "Strictly Sequential Workload",
      strategy: "Single-agent pipeline with rolling context memory + RAG. Avoids -70% coordination degradation.",
      color: "text-amber-400 bg-amber-950/40 border-amber-800",
    },
    {
      decision: "MAS",
      condition: "ρ(G) ≥ τ_seq",
      mode: "Decomposable, Parallel Workload",
      strategy: "Task router + branch-sandboxed agent swarm. Captures +81% speedup while isolating memory.",
      color: "text-cyan-400 bg-cyan-950/40 border-cyan-800",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Split className="w-3.5 h-3.5" />
            Chapter 5.1.1 • Methodology
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            5.1.1 Task Ingestion &amp; Dynamic Topological Routing
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 13 of {totalSlides}
        </span>
      </div>

      {/* Main Grid: Interactive Visualizer & Decision Table */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Interactive Formula Visualizer */}
        <div className="col-span-6">
          <DynamicRoutingVisualizer className="h-[430px]" />
        </div>

        {/* Right Column: Mathematical Formalization & Decision Table */}
        <div className="col-span-6 flex flex-col justify-between h-[430px]">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              Graph-Theoretic Formalization
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upon ingestion, the Master Agent builds directed acyclic task graph <strong className="text-white font-mono">G = (V, E)</strong>, where vertices <strong className="text-white font-mono">V</strong> are decomposed subtasks and edges <strong className="text-white font-mono">E</strong> represent execution dependencies.
            </p>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
              Parallelism Score: <strong className="text-cyan-300">ρ(G) = 1 - |E| / C(|V|, 2)</strong>, where <code className="text-slate-400">C(|V|, 2) = |V|(|V|-1)/2</code>.
            </div>
          </div>

          {/* Decision Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/90 shadow-md">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-cyan-400 font-mono uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-2 px-3">Decision</th>
                  <th className="py-2 px-3">Condition</th>
                  <th className="py-2 px-3">Mode</th>
                  <th className="py-2 px-3">Execution Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {routingTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-3 font-bold font-mono text-xs">
                      <span className={`px-2 py-0.5 rounded border ${row.color}`}>
                        {row.decision}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300">
                      {row.condition}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-slate-200 text-xs">
                      {row.mode}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-400 leading-snug">
                      {row.strategy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-[11px] font-mono text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>The threshold parameter <code className="text-white">τ_seq</code> is experimentally calibrated to maximize throughput.</span>
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
