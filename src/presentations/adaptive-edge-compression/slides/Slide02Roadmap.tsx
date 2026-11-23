"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { TreasureMapIllustration } from "../components/FriendlyIllustrations";

export function Slide02Roadmap({ slideIndex, totalSlides }: SlideProps) {
  const steps = [
    {
      num: "01",
      title: "Energy Paradox",
      desc: "WSN battery limits, radio vs. local compute cost, Green IoT, and honest scope.",
      slides: "Slide 03",
    },
    {
      num: "02",
      title: "Literature Survey",
      desc: "Four edge-compression paradigms ([1]–[4]) and the shared 'static rule' bottleneck.",
      slides: "Slides 04–05",
    },
    {
      num: "03",
      title: "Problem & Gap",
      desc: "Joint adaptation gap, 5 MCU design goals, and positioning against industry tools.",
      slides: "Slide 06",
    },
    {
      num: "04",
      title: "Proposed Middleware",
      desc: "Architecture, sliding variance, cost function, 3-state FSM, and simulation.",
      slides: "Slides 07–12",
      highlight: true,
    },
    {
      num: "05",
      title: "Critical Analysis",
      desc: "Core strengths, seven candid engineering limitations, and practical mitigations.",
      slides: "Slide 13",
    },
    {
      num: "06",
      title: "Major Project",
      desc: "Green IoT synthesis, B.Tech hardware roadmap, and academic bibliography.",
      slides: "Slides 14–15",
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
        <div className="flex items-center justify-between bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl px-5 py-2.5">
          <span className="text-[12.5px] text-[#66635C]">
            <strong className="text-[#262522]">Core Thesis:</strong> Rather than fixing one compression rule at setup,
            the sensor node should dynamically adapt its transmission strategy to data volatility, battery health, and
            network congestion.
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#F6E6DF] text-[#B85A3A] font-semibold shrink-0 ml-4">
            Context-Aware
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#E5E2D9] text-[11px] font-mono text-[#66635C]">
          <span>Adaptive Edge Data Compression for WSNs | CSEE-711P</span>
          <span>Slide {slideIndex + 1} / {totalSlides}</span>
        </div>
      </div>
    </div>
  );
}
