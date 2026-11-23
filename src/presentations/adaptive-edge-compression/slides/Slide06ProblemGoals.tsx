"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ThreeDialDashboard } from "../components/FriendlyIllustrations";

export function Slide06ProblemGoals({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
          03 • Problem Formulation &amp; Industry Context
        </span>
        <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
          Problem Statement, Design Goals &amp; Industry Positioning
        </h2>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-between my-auto py-2 gap-3">
        {/* Research Gap Callout with 3 Dials */}
        <div className="bg-[#F0EEE6] border border-[#E5E2D9] border-l-4 border-l-[#D97757] rounded-r-xl p-3.5 flex items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#B85A3A] block mb-1">
              Research Gap &amp; Joint Adaptation Mandate
            </span>
            <p className="text-[13px] text-[#262522] leading-relaxed">
              No reviewed scheme jointly adapts its compression mode and transmission timing across all three dimensions.
              We require a lightweight edge policy deciding per window whether to send a <strong>compact lossy summary</strong>,
              <strong>exact raw data</strong>, or <strong>buffer locally in flash</strong>.
            </p>
          </div>
          {/* Child-Accessible 3-Dial Dashboard */}
          <div className="shrink-0 w-80">
            <ThreeDialDashboard className="w-full h-24" />
          </div>
        </div>

        {/* Bottom Split: 5 Design Goals (Left) + Table 2 Industry Tools (Right) */}
        <div className="grid grid-cols-12 gap-5 flex-1 items-stretch">
          {/* Left: 5 Design Goals */}
          <div className="col-span-5 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
            <h3 className="font-serif text-[15.5px] font-bold text-[#262522] mb-1.5">
              Five Core Design Goals
            </h3>
            <div className="space-y-2 text-[12.5px]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F6E6DF] text-[#B85A3A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div><strong>Fidelity where it matters:</strong> Zero lossy distortion during critical anomalies.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F6E6DF] text-[#B85A3A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div><strong>Savings where possible:</strong> Aggressive compression on calm, steady streams.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F6E6DF] text-[#B85A3A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div><strong>Network friendliness:</strong> Prevent synchronized morning relay overload.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F6E6DF] text-[#B85A3A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div><strong>Lightweight math:</strong> Simple arithmetic fitting a 32-bit microcontroller.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F6E6DF] text-[#B85A3A] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div><strong>Explainability:</strong> Every mode transition traces to a measured metric.</div>
              </div>
            </div>
          </div>

          {/* Right: Table 2 Industry Tools (Packing Suitcase vs. Traffic Cop) */}
          <div className="col-span-7 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="px-4 py-2.5 bg-[#F0EEE6] border-b border-[#E5E2D9] flex items-center justify-between">
              <h3 className="font-serif text-[15px] font-bold text-[#262522]">
                Table 2: Industry Tools vs. Proposed Middleware
              </h3>
              <span className="text-[10.5px] font-mono text-[#4A6B5D] font-semibold">
                Packing Suitcase vs. Smart Traffic Cop
              </span>
            </div>
            <table className="w-full text-left border-collapse flex-1 text-[12px]">
              <thead>
                <tr className="border-b border-[#E5E2D9] text-[10.5px] uppercase tracking-wider text-[#66635C] bg-[#FAF9F5]">
                  <th className="py-2 px-3 w-[18%]">Aspect</th>
                  <th className="py-2 px-3 w-[41%]">Industry Tools (Protobuf, CBOR, Gorilla, Dead-band)</th>
                  <th className="py-2 px-3 w-[41%] text-[#B85A3A]">Proposed Middleware</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2D9]">
                <tr>
                  <td className="py-2 px-3 font-semibold text-[#262522]">Layer</td>
                  <td className="py-2 px-3 text-[#66635C]"><strong>Encoding:</strong> how bytes are packed (suitcase packing).</td>
                  <td className="py-2 px-3 text-[#262522] bg-[#F6E6DF]/30"><strong>Control policy:</strong> when and how mode switches (traffic cop).</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-[#262522]">Adaptation</td>
                  <td className="py-2 px-3 text-[#66635C]">Fixed formats &amp; static dead-band rules set at flash time.</td>
                  <td className="py-2 px-3 text-[#262522] bg-[#F6E6DF]/30">Reacts dynamically to live volatility, battery &amp; congestion.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-[#262522]">In a Crisis</td>
                  <td className="py-2 px-3 text-[#66635C]">Applies the same compression rule even if signal turns chaotic.</td>
                  <td className="py-2 px-3 text-[#262522] bg-[#F6E6DF]/30">Switches to exact raw transmission or emergency alert.</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-[#262522]">Synergy</td>
                  <td className="py-2 px-3 text-[#66635C]">Can pack payloads inside any mode (e.g. CBOR-encoded summary).</td>
                  <td className="py-2 px-3 text-[#262522] bg-[#F6E6DF]/30">Decides which packet type is generated and when it ships.</td>
                </tr>
              </tbody>
            </table>
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
