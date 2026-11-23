"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { PipeComparisonAndMcuView } from "../components/MasterpieceIllustrations";

export function Slide03Constraints({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block mb-0.5">
            Physical Bottlenecks
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            Core Hardware &amp; Network Constraints
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
            Narrow Pipe (IEEE 802.15.4 / BLE)
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
            Tiny MCU (Limited CPU &amp; RAM)
          </span>
        </div>
      </div>

      {/* Main Visual: Bandwidth Pipe Funnel + Inside MCU Exploded Diagram */}
      <div className="my-auto py-2 w-full">
        <PipeComparisonAndMcuView className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span>Narrow Funnel Drops Packets • Local Silicon Compute Saves Expensive Radio Airtime</span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
