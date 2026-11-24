"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { AgentGitEnvironmentVisual } from "../components/DiagramIllustrations";
import { GitBranch } from "lucide-react";

export function Slide14BranchAndJudge({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" />
            5.1.2 Agent Git Environment Deep Dive
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Branch Sandboxing: Context Isolation &amp; Zero-Loss Rollback
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 14 of {totalSlides}
        </span>
      </div>

      {/* Main Agent Git Environment Visual */}
      <div className="my-auto">
        <AgentGitEnvironmentVisual className="h-[440px]" />
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
