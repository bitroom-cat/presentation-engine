"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { FsmStateDiagram } from "../components/MasterpieceIllustrations";

export function Slide07FsmDecision({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold block mb-0.5">
            Operational Decision Core
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            3-State Finite State Machine &amp; Cost Function
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-bold">
            Cost = w₁·Bandwidth + w₂·Distortion
          </span>
          <div className="flex items-center gap-1.5 bg-[#161822] px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
            <span className="text-cyan-400 font-bold">Steady</span>
            <span className="text-zinc-600">•</span>
            <span className="text-rose-400 font-bold">Critical</span>
            <span className="text-zinc-600">•</span>
            <span className="text-amber-400 font-bold">Survival</span>
          </div>
        </div>
      </div>

      {/* Main Visual: State Diagram with Glowing Traveling Tokens */}
      <div className="my-auto py-2 w-full">
        <FsmStateDiagram className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span>Hysteresis K calm windows prevent mode thrashing • Emergency alert fires above 5% reserve</span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
