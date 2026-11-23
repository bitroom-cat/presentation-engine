"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ConveyorFifoQueue } from "../components/MasterpieceIllustrations";

export function Slide08FifoQueue({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold block mb-0.5">
            Real-Time Mathematical Walkthrough
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            How the 5-Sample Queue Catches a Spike Early
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Calm: [22.0...22.0] → σ²=0.004 (Cost: 8.4)
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
            Spike: [...35.0, 50.2] → σ²=124.6 (Raw: 10.0)
          </span>
        </div>
      </div>

      {/* Main Visual: 3-Phase Conveyor-Belt FIFO Queue */}
      <div className="my-auto py-2 w-full">
        <ConveyorFifoQueue className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span>Weights flip &amp; gate switches to Raw BEFORE the spike samples exit the node to the network</span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
