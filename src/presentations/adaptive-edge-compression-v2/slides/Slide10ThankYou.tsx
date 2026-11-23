"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Interactive3DSensor } from "../components/Wsn3DVisuals";
import { CheckCircle2, MessageSquare } from "lucide-react";

export function Slide10ThankYou({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#141413] text-[#FAF9F5] p-10 flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#3A3834]/80 pb-2.5">
        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B0ACA3] flex items-center gap-2">
          <span>🏛️</span> Seminar Conclusion • B.Tech. CSE (Sem-VII)
        </span>
        <div className="flex items-center gap-2 bg-[#1E1D1B] px-3 py-1 rounded-full border border-[#3A3834]">
          <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />
          <span className="text-[10.5px] font-mono text-[#D97757] font-semibold uppercase tracking-wider">
            CSEE-711P
          </span>
        </div>
      </div>

      {/* Main 2-Column Synthesis Stage */}
      <div className="flex-1 grid grid-cols-12 gap-8 my-auto py-2 items-center">
        {/* Left Column (5 cols): Interactive 3D Sensor Component */}
        <div className="col-span-5 flex flex-col justify-center">
          <Interactive3DSensor className="w-full h-[450px]" />
        </div>

        {/* Right Column (7 cols): Final Synthesis & Takeaways */}
        <div className="col-span-7 flex flex-col justify-between h-[450px] py-2">
          <div>
            <h1 className="font-serif text-[42px] font-bold leading-tight text-[#FAF9F5] mb-4">
              Thank You • Questions &amp; Discussion
            </h1>

            <div className="w-16 h-[2px] bg-[#D97757] mb-5 rounded-full" />

            <div className="space-y-3.5">
              <div className="bg-[#1E1D1B]/90 border border-[#3A3834] rounded-xl p-3.5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">1. The Energy Physics Truth</h4>
                  <p className="text-xs text-[#B0ACA3] mt-0.5 leading-relaxed">
                    1 transmitted bit costs orders of magnitude more battery power than local MCU math.
                  </p>
                </div>
              </div>

              <div className="bg-[#1E1D1B]/90 border border-[#3A3834] rounded-xl p-3.5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">2. In-Memory Adaptive Middleware</h4>
                  <p className="text-xs text-[#B0ACA3] mt-0.5 leading-relaxed">
                    Lightweight sliding variance (n=5) and cost function dynamically switch between lossy, lossless, and sleep.
                  </p>
                </div>
              </div>

              <div className="bg-[#1E1D1B]/90 border border-[#3A3834] rounded-xl p-3.5 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">3. Green IoT &amp; Major Project</h4>
                  <p className="text-xs text-[#B0ACA3] mt-0.5 leading-relaxed">
                    Reduces toxic e-waste by extending sensor life from days to months. Lab-validated and ready for ESP32 deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Viva Strip */}
          <div className="pt-4 border-t border-[#3A3834] flex items-center justify-between text-xs font-mono text-[#B0ACA3]">
            <div className="flex items-center gap-2 text-white">
              <MessageSquare className="w-4 h-4 text-[#D97757]" />
              <span className="font-bold">Satyam Sharma (23010603066)</span>
            </div>
            <span>Guide: Mrs. Kanika Kapoor • Dept. of CSE</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#3A3834]/80 text-[11px] font-mono text-[#B0ACA3]">
        <span>Adaptive Edge Data Compression for Wireless Sensor Networks</span>
        <span>Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
      </div>
    </div>
  );
}
