"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Sparkles, Brain, Cpu, ArrowRight, CheckCircle2, AlertOctagon } from "lucide-react";

export function Slide10SelfEvolving({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 4.1.3 • Literature Review: Evolution
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            4.1.3 Self-Evolving &amp; Self-Improving Agents
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 10 of {totalSlides}
        </span>
      </div>

      {/* Main Comparative Cards */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: EvolveR (Wu et al. 2025) */}
        <div className="col-span-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[420px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-mono text-cyan-400 font-bold text-sm">
                EvolveR (Wu et al. 2025)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Experience Distillation
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p>
                Addresses <strong>&quot;operational amnesia&quot;</strong> in LLMs through a dual-phase training and retrieval pipeline:
              </p>
              <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 space-y-1 font-mono text-[11px]">
                <div>• <strong>Offline:</strong> Extracts general operational principles from past successful/failed trajectories.</div>
                <div>• <strong>Online:</strong> Retrieves principles dynamically and trains policy via Group Relative Policy Optimization (GRPO).</div>
              </div>
              <p>
                <strong>Empirical Benchmark (7 QA Datasets):</strong> Accuracy scaled from 0.150 (0.5B) → 0.270 (1.5B) → <strong>0.382 (3B)</strong>. Self-experience (0.382) outperformed teacher demonstrations (0.370).
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/60 text-[11px] font-mono text-rose-300">
            <strong>Limitation:</strong> Operates strictly in a <em>single-agent</em> setup. Cannot reconcile differing experiences across parallel collaborating agents.
          </div>
        </div>

        {/* Right Column: TPGO (He et al. 2026) */}
        <div className="col-span-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[420px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-mono text-purple-400 font-bold text-sm">
                TPGO (He et al. 2026)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Textual Gradients
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p>
                Models agent topologies as a graph of agents, tools, and prompts. Uses <strong>textual parameter gradients</strong> to restructure architectures:
              </p>
              <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 space-y-1 font-mono text-[11px]">
                <div>• <strong>Textual Gradients:</strong> Execution failures propagate back to optimize edge connections and prompts.</div>
                <div>• <strong>GRAO:</strong> Graph Retrieval-Augmented Optimization stores past architecture topologies to prevent regression.</div>
              </div>
              <p>
                <strong>Empirical Benchmark:</strong> GAIA benchmark improved from <strong>73.8% → 81.6%</strong> with ~56% reduced runtime; MCP-Universe improved from <strong>30.96% → 38.82%</strong>.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/60 text-[11px] font-mono text-rose-300">
            <strong>Limitation:</strong> Distributed experience sharing across distinct autonomous teams is completely unresolved (lacks provenance &amp; trust metrics).
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
