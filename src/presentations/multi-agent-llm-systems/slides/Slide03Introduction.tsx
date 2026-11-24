"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Bot, GitBranch, AlertTriangle, Layers, Zap, Cpu } from "lucide-react";

export function Slide03Introduction({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 1 • Foundations &amp; Paradigm Shift
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            1. Introduction to Multi-Agent LLM Systems
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 3 of {totalSlides}
        </span>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column (6 cols): The Evolution */}
        <div className="col-span-6 space-y-3.5">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Cpu className="w-4 h-4" />
              Single-Agent Limitations
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Single LLM agents run out of context, degrade in reasoning fidelity, and suffer catastrophic forgetting on large, complex engineering workflows [2],[5],[11].
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Bot className="w-4 h-4" />
              Multi-Agent Paradigm Shift
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Teams of specialized autonomous agents (Planner, Tool-Runner, Coder, Reviewer) decompose workloads, e.g., MetaGPT [8], AutoGen [24].
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              More Agents ≠ Higher Reliability
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Empirical scaling proves forcing a sequential task onto an agent swarm <strong>slashes performance by 70%</strong>, whereas parallel tasks gain <strong>+81%</strong> [10].
            </p>
          </div>
        </div>

        {/* Right Column (6 cols): Root Bottlenecks */}
        <div className="col-span-6 space-y-3.5">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              Cascading Error Propagation
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Early hallucinations cascade down the reasoning chain, generating unresolvable circular debates, lost progress, or deadlocks [3].
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Layers className="w-4 h-4" />
              Memory Architecture is the Root Cause
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Flat conversation logs forget or lossy-summarize critical context. Standard RAG ignores event order, loses state lineage, and cannot undo erroneous actions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <GitBranch className="w-4 h-4" />
              Our Core Thesis
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A review-based failure taxonomy coupled with a conceptual <strong>Git-governed multi-agent framework</strong> providing sandboxed branching, LLM arbitration, and evolutionary memory.
            </p>
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
