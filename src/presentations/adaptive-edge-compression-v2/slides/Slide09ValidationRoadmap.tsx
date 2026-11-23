"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ValidationTraceAndRoadmap } from "../components/MasterpieceIllustrations";

export function Slide09ValidationRoadmap({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold block mb-0.5">
            Empirical Scope &amp; Future Work
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            Validation Scope &amp; Next Steps
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
            Lab Setup: 23/120 Windows Isolated
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-bold">
            Next: Outdoor ESP32 Power Profiling
          </span>
        </div>
      </div>

      {/* Main Visual: 120-Sample Trace + 2-Tier Scope Checklist */}
      <div className="my-auto py-2 w-full">
        <ValidationTraceAndRoadmap className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span>Synthetic verification complete • Physical solar field deployment planned for Major Project</span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
