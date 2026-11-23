"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { LaunchpadRocketRoadmap } from "../components/FriendlyIllustrations";

export function Slide14Conclusion({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
          06 • Synthesis &amp; Next Steps
        </span>
        <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
          Conclusion &amp; Major Project Launchpad Roadmap
        </h2>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-auto py-2 items-stretch">
        {/* Left Column: Seminar Synthesis */}
        <div className="col-span-5 bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <span className="px-2.5 py-0.5 rounded bg-[#F6E6DF] text-[#B85A3A] text-[10.5px] font-mono font-bold">
              SEMINAR SYNTHESIS
            </span>
            <h3 className="font-serif text-[18px] font-bold text-[#262522] mt-2 mb-2 leading-snug">
              From Static Compression to Context-Aware Control
            </h3>
            <ul className="space-y-2.5 text-[12.5px] text-[#262522] leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#D97757] font-bold">▪</span>
                <span>All four surveyed studies prove edge processing saves radio energy, yet each hardcodes one static rule in advance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D97757] font-bold">▪</span>
                <span>Uniting sliding-window variance, resource flags, weighted cost, and a 3-state FSM yields an <strong>explainable synthesis</strong> of established primitives.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D97757] font-bold">▪</span>
                <span>Directly advances <strong>Green IoT</strong> by cutting redundant wireless traffic while preserving anomaly fidelity.</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-[#E5E2D9] text-[11.5px] text-[#66635C] italic">
            Theoretical value validated analytically — creating a clear pathway into a B.Tech Major Project.
          </div>
        </div>

        {/* Right Column: 4-Stage Launchpad Roadmap */}
        <div className="col-span-7 flex flex-col justify-between gap-2.5">
          {/* Friendly Launchpad Visual */}
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 shadow-sm">
            <LaunchpadRocketRoadmap className="w-full h-24" />
          </div>

          {/* 4 Execution Steps */}
          <div className="space-y-2">
            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#D97757] text-[#FAF9F5] font-mono text-[14px] font-bold flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h4 className="font-serif text-[13.5px] font-bold text-[#262522]">Hardware Prototype &amp; Power Metering</h4>
                <p className="text-[11.5px] text-[#66635C]">Flashes middleware to ESP32 / RP2040 and measures exact joules with an external power meter.</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#9E722B] text-[#FAF9F5] font-mono text-[14px] font-bold flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h4 className="font-serif text-[13.5px] font-bold text-[#262522]">Public Dataset Benchmarking</h4>
                <p className="text-[11.5px] text-[#66635C]">Head-to-head comparison on Intel Berkeley Lab &amp; PhysioNet datasets on RMSE and byte savings.</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#4E6278] text-[#FAF9F5] font-mono text-[14px] font-bold flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h4 className="font-serif text-[13.5px] font-bold text-[#262522]">Self-Tuning Online Thresholds</h4>
                <p className="text-[11.5px] text-[#66635C]">Replaces hand-set parameters (n, τ, w₁, w₂) with lightweight online gradient tuning.</p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#4A6B5D] text-[#FAF9F5] font-mono text-[14px] font-bold flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <h4 className="font-serif text-[13.5px] font-bold text-[#262522]">Multi-Hop Cluster Coordination</h4>
                <p className="text-[11.5px] text-[#66635C]">Extends to multi-hop clusters with staggered buffer release to eliminate synchronized relay spikes.</p>
              </div>
            </div>
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
