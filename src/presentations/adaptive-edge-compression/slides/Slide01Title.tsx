"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { BandwidthBeamIllustration } from "../components/FriendlyIllustrations";
import { Activity, Sparkles } from "lucide-react";

export function Slide01Title({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#141413] text-[#FAF9F5] p-10 flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Subtle Top Institution Header */}
      <div className="flex items-center justify-between border-b border-[#3A3834]/80 pb-2.5">
        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B0ACA3] flex items-center gap-2">
          <span>🏛️</span> Government College Dharamshala • HPTU
        </span>
        <div className="flex items-center gap-2 bg-[#1E1D1B] px-3 py-1 rounded-full border border-[#3A3834]">
          <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />
          <span className="text-[10.5px] font-mono text-[#D97757] font-semibold uppercase tracking-wider">
            CSEE-711P Seminar
          </span>
        </div>
      </div>

      {/* Hero Content with Friendly SVG Beam */}
      <div className="my-auto max-w-5xl mx-auto w-full text-center py-1 space-y-3">
        {/* Child-Accessible Glowing Bandwidth Beam SVG Illustration */}
        <div className="w-full flex justify-center -my-1">
          <BandwidthBeamIllustration className="w-full max-w-2xl h-32" />
        </div>



        <h1 className="font-serif text-[40px] font-bold leading-[1.15] tracking-tight text-[#FAF9F5] max-w-4xl mx-auto">
          Adaptive Edge Data Compression for Wireless Sensor Networks
        </h1>

        <div className="w-20 h-[2px] bg-[#D97757] mx-auto rounded-full" />

        <p className="text-[14px] text-[#B0ACA3] max-w-2xl mx-auto leading-relaxed">
          A Critical Literature Survey &amp; Context-Aware Edge Middleware Framework Balancing Bandwidth, Distortion, and Node Survival
        </p>
      </div>

      {/* Structured Bottom Metadata Grid */}
      <div className="grid grid-cols-3 gap-4 pt-3 border-t border-[#3A3834]/80">
        <div className="bg-[#1E1D1B]/80 border border-[#3A3834]/70 rounded-xl px-4 py-2.5">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#D97757] mb-0.5">
            Presented By
          </div>
          <div className="text-[14px] font-semibold text-[#FAF9F5]">Satyam Sharma</div>
          <div className="text-[11px] text-[#B0ACA3] font-mono">Sem-VII • Roll: 23010603066</div>
          <div className="text-[10.5px] text-[#B0ACA3]/80">Batch: 2023–27</div>
        </div>

        <div className="bg-[#1E1D1B]/80 border border-[#3A3834]/70 rounded-xl px-4 py-2.5">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#D97757] mb-0.5">
            Under the Guidance Of
          </div>
          <div className="text-[14px] font-semibold text-[#FAF9F5]">Mrs. Kanika Kapoor</div>
          <div className="text-[11px] text-[#B0ACA3]">Seminar Guide, Dept. of B.Tech. (CSE)</div>
          <div className="text-[10.5px] text-[#B0ACA3]/80">Academic Session: 2023–27</div>
        </div>

        <div className="bg-[#1E1D1B]/80 border border-[#3A3834]/70 rounded-xl px-4 py-2.5">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#D97757] mb-0.5">
            Department &amp; University
          </div>
          <div className="text-[13px] font-semibold text-[#FAF9F5]">Dept. of B.Tech. (CSE)</div>
          <div className="text-[10.5px] text-[#B0ACA3]">School of CSE &amp; Technology</div>
          <div className="text-[10.5px] text-[#B0ACA3]/80">Govt. College Dharamshala • HPTU</div>
        </div>
      </div>
    </div>
  );
}
