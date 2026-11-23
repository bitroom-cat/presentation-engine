"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { EnergyParadoxIllustration } from "../components/FriendlyIllustrations";

export function Slide03EnergyParadox({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
          01 • Background &amp; Motivation
        </span>
        <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
          The Radio Energy Paradox: Thinking Quietly vs. Shouting Across the Beam
        </h2>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-auto py-3 items-stretch">
        {/* Left Column: Friendly SVG Visual + Green IoT */}
        <div className="col-span-7 flex flex-col justify-between gap-3.5">
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif text-[16px] font-bold text-[#262522]">
                The Fundamental Energy Asymmetry
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E9EEF3] text-[#4E6278]">
                Refs [1], [2], [6]
              </span>
            </div>

            {/* Visual SVG Comparison */}
            <EnergyParadoxIllustration className="w-full h-36" />
          </div>

          {/* Green IoT Motivation Strip */}
          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#4A6B5D]" />
              <h3 className="font-serif text-[15px] font-bold text-[#4A6B5D]">Green IoT Motivation [11]</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[12.5px]">
              <div className="bg-[#FFFFFF]/80 rounded-lg p-2.5 border border-[#4A6B5D]/20">
                <div className="font-semibold text-[#4A6B5D]">Longer Node Life</div>
                <div className="text-[#66635C] text-[11.5px] mt-0.5">Operate months instead of days unattended.</div>
              </div>
              <div className="bg-[#FFFFFF]/80 rounded-lg p-2.5 border border-[#4A6B5D]/20">
                <div className="font-semibold text-[#4A6B5D]">Less E-Waste</div>
                <div className="text-[#66635C] text-[11.5px] mt-0.5">Drastically cuts toxic battery replacements.</div>
              </div>
              <div className="bg-[#FFFFFF]/80 rounded-lg p-2.5 border border-[#4A6B5D]/20">
                <div className="font-semibold text-[#4A6B5D]">Lower Spectrum Load</div>
                <div className="text-[#66635C] text-[11.5px] mt-0.5">Prevents packet collisions on shared radio channels.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dumb Node Waste + Scope Integrity Box */}
        <div className="col-span-5 flex flex-col justify-between gap-3.5">
          <div className="bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl p-5 flex-1 flex flex-col justify-between">
            <h3 className="font-serif text-[16px] font-bold text-[#262522] mb-2">
              Why &quot;Dumb&quot; Fixed-Rate Sampling Fails
            </h3>
            <ul className="space-y-3 text-[13px] text-[#262522] leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-[#D97757] font-bold mt-0.5">▪</span>
                <span>
                  <strong>Battery-bound reality:</strong> Sensor motes deployed in fields, agricultural soil, and bridges
                  cannot have batteries replaced frequently.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-[#D97757] font-bold mt-0.5">▪</span>
                <span>
                  <strong>Redundant streams:</strong> A sensor measuring calm room temperature transmits near-identical
                  readings hundreds of times with zero new information.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-[#D97757] font-bold mt-0.5">▪</span>
                <span>
                  <strong>Cascading radio drain:</strong> Continuous wireless broadcasts deplete batteries rapidly and
                  cause channel congestion.
                </span>
              </li>
            </ul>
          </div>

          {/* Academic Integrity & Scope Box */}
          <div className="bg-[#F4ECD8] border-l-4 border-[#9E722B] rounded-r-xl p-4 border-y border-r border-[#9E722B]/25">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#9E722B]">
                Academic Scope &amp; Integrity Disclaimer
              </span>
            </div>
            <p className="text-[12.5px] text-[#262522] leading-relaxed">
              <strong>Literature-based analytical framework validated on synthetic data</strong> — the proposed middleware
              has not yet been flashed to physical sensor silicon, and <strong>no measured hardware energy claims are made</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E5E2D9] text-[11px] font-mono text-[#66635C]">
        <span>Adaptive Edge Data Compression for WSNs | CSEE-711P</span>
        <span>Slide {slideIndex + 1} / {totalSlides}</span>
      </div>
    </div>
  );
}
