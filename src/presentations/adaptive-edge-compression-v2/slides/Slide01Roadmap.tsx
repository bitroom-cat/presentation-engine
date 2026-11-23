"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { TreasureMapIllustration } from "../components/MasterpieceIllustrations";

export function Slide01Roadmap({ slideIndex, totalSlides }: SlideProps) {
  const steps = [
    {
      num: "01",
      title: "Energy Paradox",
      desc: "WSN battery limits, radio vs. local compute cost, Green IoT, and honest scope.",
      slides: "Slides 03–05",
    },
    {
      num: "02",
      title: "Literature Survey",
      desc: "Four edge-compression paradigms ([1]–[4]) and the shared 'static rule' bottleneck.",
      slides: "Slide 06",
    },
    {
      num: "03",
      title: "Proposed Middleware",
      desc: "Context-aware architecture, variance calculation, and multi-track outputs.",
      slides: "Slide 07",
      highlight: true,
    },
    {
      num: "04",
      title: "Decision Engine",
      desc: "Cost function, 3-state FSM, hysteresis stabilization, and survival mode.",
      slides: "Slide 08",
    },
    {
      num: "05",
      title: "FIFO Walkthrough",
      desc: "5-sample conveyor queue, early variance spike detection, and lossless locking.",
      slides: "Slide 09",
    },
    {
      num: "06",
      title: "Scope & Roadmap",
      desc: "120-sample validation trace, critical window isolation, and Major Project.",
      slides: "Slides 10–11",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            Outline &amp; Flow
          </span>
          <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
            Presentation Roadmap: 6-Stage Journey
          </h2>
        </div>
      </div>

      {/* Visual Treasure Map Path Illustration */}
      <div className="w-full my-auto py-1">
        <TreasureMapIllustration className="w-full h-16" />

        {/* 6 Step Cards */}
        <div className="grid grid-cols-6 gap-3.5 mt-2">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 flex flex-col justify-between h-[290px] border transition-all ${
                st.highlight
                  ? "bg-[#FFFFFF] border-[#D97757] shadow-md ring-1 ring-[#D97757]/30"
                  : "bg-[#F0EEE6] border-[#E5E2D9]"
              }`}
            >
              <div>
                <span className="font-mono text-[24px] font-bold text-[#D97757]">{st.num}</span>
                <h3 className="font-serif text-[15px] font-bold text-[#262522] mt-2 mb-1.5 leading-snug">
                  {st.title}
                </h3>
                <p className="text-[12.5px] text-[#66635C] leading-relaxed">{st.desc}</p>
              </div>
              <div className="pt-2 border-t border-[#E5E2D9] text-[11px] font-mono text-[#B85A3A] font-semibold">
                {st.slides}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Narrative Banner & Footer */}
      <div className="space-y-2">
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl px-5 py-2.5">
          <span className="text-[12.5px] text-[#66635C]">
            <strong className="text-[#262522]">Core Thesis:</strong> Rather than fixing one compression rule at setup,
            the sensor node should dynamically adapt its transmission strategy to data volatility, battery health, and network state.
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#66635C] pt-1">
          <span>CSEE-711P Seminar • Satyam Sharma (23010603066) • Dept. of B.Tech. (CSE)</span>
          <span>Slide {String(slideIndex + 1).padStart(2, "0")} / {totalSlides}</span>
        </div>
      </div>
    </div>
  );
}
