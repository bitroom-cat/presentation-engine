"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { MasterJudgePanel } from "../components/DiagramIllustrations";
import { Scale } from "lucide-react";

export function Slide15MasterJudge({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-purple-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            5.1.4 Arbitration Engine Deep Dive
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            LLM-as-Judge Panel: Central Master Judge with Specialized Side Jurors
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 15 of {totalSlides}
        </span>
      </div>

      {/* Main Master Judge Visual Panel */}
      <div className="my-auto">
        <MasterJudgePanel className="h-[440px]" />
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
