"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { GitBranch, Scale, ShieldAlert, Cpu, CheckCircle2, RotateCcw } from "lucide-react";

export function Slide14BranchAndJudge({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 5.1.2–5.1.6 • Core Engine Mechanics
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            5.1.2–5.1.6 Sandboxed Branches, LLM Arbiter &amp; Council
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 14 of {totalSlides}
        </span>
      </div>

      {/* 3 Core Mechanical Pillars */}
      <div className="grid grid-cols-3 gap-5 my-auto">
        {/* Pillar 1: Sandboxed Git Branches */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <GitBranch className="w-4 h-4" />
              1. Sandboxed Branches
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                Each agent <strong className="text-white font-mono">A_i</strong> runs in an isolated git branch initialized from verified main state <strong className="text-cyan-300 font-mono">B_i(0) = M_t</strong>.
              </p>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-cyan-200">
                Update Step: <br />
                <strong className="text-white">B_i(j) = f_Ai(B_i(j-1), I_i(j))</strong>
              </div>
              <p>
                Complete memory isolation guarantees that early agent hallucinations or loops remain sequestered inside the branch and can be surgically reverted via <strong className="text-emerald-400 font-mono">git reset</strong>.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-800/60 text-[11px] font-mono text-cyan-300">
            Isolation prevents cascading infection across cooperating agents.
          </div>
        </div>

        {/* Pillar 2: LLM-as-Judge Semantic Arbiter */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <Scale className="w-4 h-4" />
              2. LLM Semantic Arbiter
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                Clean merges flow automatically into main. When branches yield conflicting assertions or data formats, the <strong>LLM-as-Judge</strong> is triggered.
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-[11.5px] text-slate-300">
                <li>Inspects full branch commit histories and reasoning traces.</li>
                <li>Evaluates factual consistency against source artifacts.</li>
                <li>Generates a canonical resolved merge commit and detailed audit log.</li>
              </ul>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[10.5px] text-purple-300">
                Conflict is never auto-accepted; every divergence produces an immutable audit trail.
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-purple-950/40 border border-purple-800/60 text-[11px] font-mono text-purple-300">
            Acts as the semantic correctness oracle for open-domain reasoning.
          </div>
        </div>

        {/* Pillar 3: Evolution Council */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <ShieldAlert className="w-4 h-4" />
              3. Evolution Council
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                An independent oversight meta-agent operating outside the working swarm.
              </p>
              <div className="space-y-2 text-[11.5px] text-slate-300">
                <div>
                  <strong className="text-white block">• Fault Attribution:</strong>
                  Reads judge reports to attribute whether the breakdown was prompt ambiguity, tool hallucination, or logic failure.
                </div>
                <div>
                  <strong className="text-white block">• Self-Improvement Feedback:</strong>
                  Updates agent system prompts, tool schemas, or routing rules for future tasks (inspired by TPGO textual gradients).
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/60 text-[11px] font-mono text-rose-300">
            Closes the governance loop: past mistakes permanently improve future execution.
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
