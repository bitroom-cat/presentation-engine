"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { WsnEnvironmentMeshView } from "../components/MasterpieceIllustrations";

export function Slide02WsnIntro({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-white p-10 flex flex-col justify-between select-none font-sans relative overflow-hidden">
      {/* Top Header Strip (Zero Wall-of-Text: Under 15 words) */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold block mb-0.5">
            Foundation Concept • Physical Backbone
          </span>
          <h2 className="text-[28px] font-extrabold tracking-tight text-white leading-tight">
            Wireless Sensor Networks (WSN)
          </h2>
        </div>

        {/* 3 Stage Badges & Corner Pill */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#161822] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono">
            <span className="text-cyan-400 font-bold">1. Nodes</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400 font-bold">2. Multi-Hop Radio</span>
            <span className="text-zinc-600">•</span>
            <span className="text-indigo-400 font-bold">3. Cloud Gateway</span>
          </div>

          <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
            No Power Cables • No Ethernet Wires
          </span>
        </div>
      </div>

      {/* Main Visual Center: Auto-Ambient Animated Vector Zones + Mesh + Dashboard */}
      <div className="my-auto py-2 w-full">
        <WsnEnvironmentMeshView className="w-full h-[470px]" />
      </div>

      {/* Minimalist Bottom Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Autonomous Battery-Powered Sensing Nodes in Hostile Environments
        </span>
        <span className="text-zinc-500">Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
