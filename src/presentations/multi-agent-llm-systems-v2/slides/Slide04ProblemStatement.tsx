"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Database, GitMerge, Search, Share2, Scale, DollarSign, AlertOctagon } from "lucide-react";

export function Slide04ProblemStatement({ slideIndex, totalSlides }: SlideProps) {
  const problems = [
    { num: 1, title: "Weak Memory", metric: "No Lineage", desc: "Flat logs & RAG lack temporal state and transactional rollback.", icon: Database, color: "text-blue-400 border-blue-800" },
    { num: 2, title: "Concurrency Gaps", metric: "Race Conditions", desc: "Git-inspired memory breaks during simultaneous conflicting updates.", icon: GitMerge, color: "text-cyan-400 border-cyan-800" },
    { num: 3, title: "Causal Tracing", metric: "Attribution Void", desc: "Failures are labeled downstream without tracing the root hallucination.", icon: Search, color: "text-amber-400 border-amber-800" },
    { num: 4, title: "Amnestic Sharing", metric: "No Sync", desc: "No protocol to share, score, and sync learned trajectories across agents.", icon: Share2, color: "text-purple-400 border-purple-800" },
    { num: 5, title: "No Oracle", metric: "Arbitration Gap", desc: "Open domains lack compilers or unit tests to resolve factual disputes.", icon: Scale, color: "text-rose-400 border-rose-800" },
    { num: 6, title: "Super-linear Cost", metric: "T ~ n^1.72", desc: "Uncontrolled agent spawning multiplies tokens without reliability gains.", icon: DollarSign, color: "text-emerald-400 border-emerald-800" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-rose-400 font-semibold tracking-wider flex items-center gap-1.5">
            <AlertOctagon className="w-3.5 h-3.5" />
            2. Core Challenges
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            The Six Failure Vectors in Autonomous Agent Swarms
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 4 of {totalSlides}
        </span>
      </div>

      {/* 6 Visual Problem Cards */}
      <div className="grid grid-cols-3 gap-4 my-auto">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-36 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${p.color.split(" ")[0]}`} />
                  <span className="font-bold text-sm text-white">{p.title}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                  {p.metric}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed my-auto">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Synthesis Callout */}
      <div className="p-3 rounded-xl bg-slate-950 border border-rose-800/40 text-center text-xs font-mono text-slate-300">
        <span className="text-rose-400 font-bold uppercase mr-2">Core Dilemma:</span>
        No integrated, domain-independent approach governs coordination, memory, semantic conflicts, and failures.
      </div>
    </div>
  );
}
