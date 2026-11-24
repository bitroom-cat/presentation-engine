"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Brain, Cpu, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function Slide10SelfEvolving({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            4.1.3 Literature Review • Self-Improving Architectures
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Self-Evolving Agents: EvolveR vs. TPGO
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 10 of {totalSlides}
        </span>
      </div>

      {/* 2-Column Comparison */}
      <div className="grid grid-cols-12 gap-6 my-auto">
        {/* EvolveR */}
        <div className="col-span-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[410px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-mono text-cyan-400 font-bold text-sm">
                EvolveR (Wu et al. 2025)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                0.382 vs 0.370 Teacher
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p>
                Targets <strong>&quot;operational amnesia&quot;</strong> via dual-phase offline distillation &amp; online policy optimization:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 font-mono text-[11px]">
                <div>• <strong>Offline:</strong> Extracts general operational principles from trajectories.</div>
                <div>• <strong>Online:</strong> Retrieves principles &amp; optimizes via GRPO algorithm.</div>
              </div>
              <p>
                Self-experience (0.382) outperformed teacher demonstrations (0.370) across 7 QA benchmarks.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs font-mono text-rose-300">
            <strong>Limitation:</strong> Operates strictly in a <em>single-agent</em> isolated sandbox.
          </div>
        </div>

        {/* TPGO */}
        <div className="col-span-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[410px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-mono text-purple-400 font-bold text-sm">
                TPGO (He et al. 2026)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                GAIA 73.8% ➔ 81.6%
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <p>
                Treats agent topologies as parameterized graphs. Execution failures emit <strong>textual parameter gradients</strong>:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 font-mono text-[11px]">
                <div>• <strong>Textual Gradients:</strong> Execution errors update prompts &amp; routing edges.</div>
                <div>• <strong>GRAO:</strong> Graph Retrieval-Augmented Optimization prevents regression.</div>
              </div>
              <p>
                GAIA benchmark jumped from <strong>73.8% → 81.6%</strong> with 56% reduced execution runtime.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs font-mono text-rose-300">
            <strong>Limitation:</strong> Cross-agent experience synchronization across teams is unresolved.
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
