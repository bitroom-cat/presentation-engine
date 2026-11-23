"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { BandwidthBeamIllustration } from "../components/FriendlyIllustrations";

export function Slide16ThankYou({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#141413] text-[#FAF9F5] p-12 flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#B0ACA3] border-b border-[#3A3834]/80 pb-3">
        <span>CSEE-711P Seminar Presentation</span>
        <span>Academic Session 2023–27</span>
      </div>

      {/* Hero Centerpiece */}
      <div className="text-center max-w-4xl mx-auto my-auto space-y-4">
        <div className="w-full flex justify-center -my-2">
          <BandwidthBeamIllustration className="w-full max-w-xl h-32" />
        </div>


        <h2 className="font-serif text-[54px] font-bold tracking-tight text-[#FAF9F5] leading-none">
          Thank You
        </h2>
        <p className="text-[20px] text-[#B0ACA3] font-light">
          Questions, Feedback &amp; Discussion
        </p>

        <div className="w-24 h-[2px] bg-[#D97757] mx-auto rounded-full" />

        <p className="text-[13.5px] text-[#B0ACA3]/90 max-w-lg mx-auto leading-relaxed">
          &quot;Adaptive Edge Data Compression for Wireless Sensor Networks&quot;
        </p>
      </div>

      {/* Structured Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#3A3834] text-[12.5px]">
        <div>
          <div className="font-semibold text-[#FAF9F5]">
            Satyam Sharma <span className="font-mono text-[#D97757] ml-2">23010603066</span>
          </div>
          <div className="text-[#B0ACA3] text-[11.5px] mt-0.5">
            B.Tech. Computer Science &amp; Engineering (Sem-VII)
          </div>
        </div>

        <div className="text-right">
          <div className="font-medium text-[#FAF9F5]">Government College Dharamshala</div>
          <div className="text-[#B0ACA3] text-[11.5px] mt-0.5">
            Himachal Pradesh Technical University (HPTU) • Guide: Mrs. Kanika Kapoor
          </div>
        </div>
      </div>
    </div>
  );
}
