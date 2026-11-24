"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Share2, CheckSquare, Search, Database, Layers, ShieldCheck } from "lucide-react";

export function Slide15ExperienceSharing({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 5.1.7–5.1.8 • Governance &amp; Validation
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            5.1.7–5.1.8 Cross-Agent Experience &amp; Evaluation Plan
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 15 of {totalSlides}
        </span>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column (6 cols): 5.1.7 Cross-Agent Experience Sharing */}
        <div className="col-span-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <Share2 className="w-4 h-4" />
              5.1.7 Cross-Agent Experience Sharing Protocols
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                Reusing learned experience across autonomous agents requires 4 non-trivial governance mechanisms [25],[7]:
              </p>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-300">1. Provenance Tracking:</strong> Cryptographic lineage of which agent generated an insight and under what environment conditions.
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-blue-300">2. Trust &amp; Confidence Scoring:</strong> Dynamic weights filtering out low-confidence hallucinations before global sync.
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-purple-300">3. Outdated Experience Invalidation:</strong> Temporal TTL tags pruning stale policies when code bases evolve.
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800/60 text-[11px] font-mono text-blue-300">
            Audit logs and Council conclusions form the immutable ledger for shared intelligence.
          </div>
        </div>

        {/* Right Column (6 cols): 5.1.8 Experimental Evaluation Plan */}
        <div className="col-span-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono border-b border-slate-800 pb-2 mb-3">
              <CheckSquare className="w-4 h-4" />
              5.1.8 Rigorous Evaluation Protocol
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                The framework is conceptual and designed for empirical comparative validation against established baselines:
              </p>
              <div className="space-y-2 text-[11.5px]">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white block">Controlled Architecture Triad:</span>
                  Single-Agent Pipeline (SAS) vs. Ungoverned MAS (AutoGen) vs. Proposed Git-Governed MAS.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white block">Dual Benchmark Domains:</span>
                  1. Software Engineering: <strong>SWE-Bench Verified</strong> (objective test oracle).<br />
                  2. Open-Domain Reasoning: Multi-document synthesis with injected semantic contradictions.
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/60 text-[11px] font-mono text-emerald-300">
            Strictly separates verified literature facts from ongoing empirical test plans.
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
