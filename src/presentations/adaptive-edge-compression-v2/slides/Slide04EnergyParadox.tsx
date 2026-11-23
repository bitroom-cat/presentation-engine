"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SeesawAndNodeLoopsView } from "../components/MasterpieceIllustrations";

export function Slide04EnergyParadox({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-400 font-bold block mb-0.5">
            Physics Problem &amp; Environmental Impact
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            The Radio Energy Paradox &amp; Green IoT
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
            1 Bit TX &gt;&gt; 1 Local Op
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold">
            Edge Compression = Months of Battery
          </span>
        </div>
      </div>

      {/* Main Visual: Seesaw Balance + Dumb Loop vs Edge-Smart Loop */}
      <div className="my-auto py-2 w-full">
        <SeesawAndNodeLoopsView className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span>Replacing dead batteries creates toxic e-waste • Edge compression keeps nodes alive for months</span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
