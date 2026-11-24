"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Database, GitBranch, Lock, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function Slide09MemoryBottleneck({ slideIndex, totalSlides }: SlideProps) {
  const comparison = [
    {
      system: "GCC, Wu [23] (2025)",
      mechanism: "Git context primitives: COMMIT, BRANCH, MERGE, CONTEXT",
      multiAgent: "Mostly single-agent; sequential hand-offs",
      concurrency: "Not evaluated directly",
      conflict: "Standard text Git merge",
      result: "80.2% SWE-Bench Verified (77.8% without branch/merge)",
      status: "Sequential Only",
    },
    {
      system: "ChronoMem, Su et al. [20] (2026)",
      mechanism: "Snapshot after every memory write; semantic rollback",
      multiAgent: "Mainly single-agent workflows",
      concurrency: "Per-user exclusive locks block concurrent writes",
      conflict: "Pessimistic lock blocking",
      result: "HotpotQA F1 36.1% vs. 2.3% prompt-only baseline",
      status: "Lock Bottleneck",
    },
    {
      system: "EvoGit, Huang et al. [9] (2025)",
      mechanism: "Shared Git graph of memory & state across decentralized nodes",
      multiAgent: "16 parallel agents, no central coordinator",
      concurrency: "Supports concurrent branch operations",
      conflict: "Domain-specific: automated compiler & unit tests",
      result: "Highly effective in software repositories with test suites",
      status: "Code Domain Only",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 4.1.2 • Literature Review: Memory Architectures
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            4.1.2 The Memory &amp; State Bottleneck in Agent Systems
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 9 of {totalSlides}
        </span>
      </div>

      {/* Main Table Content */}
      <div className="my-auto space-y-4">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
          Flat conversation logs lose or distort context; naive RAG retrieves semantically similar fragments but cannot maintain temporal lineage or revert invalid states. Git-inspired memory addresses this, but existing implementations remain severely constrained:
        </div>

        {/* Structured Table */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/90 shadow-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-cyan-400 font-mono uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">System &amp; Ref</th>
                <th className="py-2.5 px-3">Memory Mechanism</th>
                <th className="py-2.5 px-3">Multi-Agent Scope</th>
                <th className="py-2.5 px-3">Concurrency</th>
                <th className="py-2.5 px-3">Conflict Handling</th>
                <th className="py-2.5 px-3">Demonstrated Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-bold font-mono text-white text-[11px] whitespace-nowrap">
                    {row.system}
                  </td>
                  <td className="py-3 px-3 text-[11.5px] leading-relaxed text-slate-300">
                    {row.mechanism}
                  </td>
                  <td className="py-3 px-3 text-[11px] font-mono text-slate-400">
                    {row.multiAgent}
                  </td>
                  <td className="py-3 px-3 text-[11px] font-mono text-amber-300">
                    {row.concurrency}
                  </td>
                  <td className="py-3 px-3 text-[11px] leading-relaxed text-slate-300">
                    {row.conflict}
                  </td>
                  <td className="py-3 px-3 text-[11.5px] font-mono text-cyan-300 font-semibold">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Synthesis Callout */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-slate-900 border border-blue-800/50 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-200">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Conclusion from State of Art:</strong> Versioning and rollback exist in isolation, but <em>semantic conflict resolution during concurrent multi-agent updates</em> in open domains remains entirely unsolved.</span>
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
