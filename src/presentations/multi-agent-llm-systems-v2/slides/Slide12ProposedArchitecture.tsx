"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { FullSystemPipelineDiagram } from "../components/DiagramIllustrations";
import { Workflow } from "lucide-react";

export function Slide12ProposedArchitecture({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-8 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5" />
            4.3 Proposed System Architecture (Masterpiece Pipeline)
          </span>
          <h2 className="text-lg font-bold tracking-tight text-white font-mono uppercase">
            End-to-End Orchestration, Memory Isolation &amp; Arbitration Framework
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 12 of {totalSlides}
        </span>
      </div>

      {/* Main Full Pipeline Diagram (Fits 1280x720 Screen Perfectly) */}
      <div className="my-auto">
        <FullSystemPipelineDiagram className="w-full" />
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
