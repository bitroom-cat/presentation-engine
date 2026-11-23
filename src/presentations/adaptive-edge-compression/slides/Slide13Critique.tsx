"use client";

import React from "react";
import { SlideProps } from "@/engine/types";

export function Slide13Critique({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
          05 • Critical Analysis (Table 4)
        </span>
        <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
          Critical Analysis: 4 Superpowers vs. 7 Blind Spots &amp; Engineering Fixes
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between my-auto py-2 gap-3">
        {/* Top 4-Column Strengths Strip */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/30 rounded-xl px-3.5 py-2.5 shadow-sm">
            <div className="text-[10px] font-mono font-bold text-[#4A6B5D] flex items-center gap-1.5">
              <span>🛡️</span> SUPERPOWER 01
            </div>
            <div className="text-[12.5px] font-bold text-[#262522] mt-0.5">Targets [1]–[4] Gaps</div>
            <div className="text-[11px] text-[#66635C] mt-0.5">Exact anomalies, cheap steady-state, and eliminates morning traffic spikes.</div>
          </div>

          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/30 rounded-xl px-3.5 py-2.5 shadow-sm">
            <div className="text-[10px] font-mono font-bold text-[#4A6B5D] flex items-center gap-1.5">
              <span>⚡</span> SUPERPOWER 02
            </div>
            <div className="text-[12.5px] font-bold text-[#262522] mt-0.5">Lightweight Arithmetic</div>
            <div className="text-[11px] text-[#66635C] mt-0.5">Simple variance &amp; comparisons vs. heavy, battery-draining on-node NNs.</div>
          </div>

          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/30 rounded-xl px-3.5 py-2.5 shadow-sm">
            <div className="text-[10px] font-mono font-bold text-[#4A6B5D] flex items-center gap-1.5">
              <span>🔍</span> SUPERPOWER 03
            </div>
            <div className="text-[12.5px] font-bold text-[#262522] mt-0.5">Fully Explainable</div>
            <div className="text-[11px] text-[#66635C] mt-0.5">Every state change traces directly to measured variance or resource flags.</div>
          </div>

          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/30 rounded-xl px-3.5 py-2.5 shadow-sm">
            <div className="text-[10px] font-mono font-bold text-[#4A6B5D] flex items-center gap-1.5">
              <span>🧩</span> SUPERPOWER 04
            </div>
            <div className="text-[12.5px] font-bold text-[#262522] mt-0.5">Industry Compatible</div>
            <div className="text-[11px] text-[#66635C] mt-0.5">Works smoothly alongside Protobuf, CBOR, and commercial MQTT gateways.</div>
          </div>
        </div>

        {/* 7-Row Table 4 (Blind Spots & Mitigations) */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl overflow-hidden flex-1 flex flex-col shadow-sm">
          <table className="w-full text-left border-collapse text-[11.5px] flex-1">
            <thead>
              <tr className="bg-[#F0EEE6] border-b border-[#E5E2D9] text-[10.5px] uppercase tracking-wider text-[#66635C]">
                <th className="py-2 px-3 w-[24%]">Limitation / Blind Spot</th>
                <th className="py-2 px-3 w-[41%]">Root Technical Cause</th>
                <th className="py-2 px-3 w-[35%] text-[#4A6B5D]">Proposed Engineering Mitigation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E2D9]">
              <tr>
                <td className="py-1.5 px-3 font-semibold text-[#A63D33]">Not physically validated</td>
                <td className="py-1.5 px-3 text-[#66635C]">Analytical &amp; synthetic simulation only; no real hardware energy draw measured.</td>
                <td className="py-1.5 px-3 text-[#262522]">Implement on ESP32 &amp; measure with Monsoon power monitor.</td>
              </tr>
              <tr className="bg-[#FAF9F5]/60">
                <td className="py-1.5 px-3 font-semibold text-[#262522]">CPU &amp; RAM overhead</td>
                <td className="py-1.5 px-3 text-[#66635C]">Tough to fit on 8-bit MCUs with ~2 KB RAM (e.g. ATmega328P).</td>
                <td className="py-1.5 px-3 text-[#262522]">Use incremental running variance; target 32-bit Cortex-M0/M4.</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 font-semibold text-[#262522]">Detection lag (n samples)</td>
                <td className="py-1.5 px-3 text-[#66635C]">A sliding window of n=5 samples delays spike detection by 1–2 samples.</td>
                <td className="py-1.5 px-3 text-[#262522]">Keep n small plus add a single-sample instantaneous jump threshold.</td>
              </tr>
              <tr className="bg-[#FAF9F5]/60">
                <td className="py-1.5 px-3 font-semibold text-[#262522]">Mode thrashing</td>
                <td className="py-1.5 px-3 text-[#66635C]">Vibrating machinery hovering near τ causes rapid state ping-ponging.</td>
                <td className="py-1.5 px-3 text-[#262522]">Dual-threshold hysteresis &amp; K-window minimum dwell time.</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 font-semibold text-[#262522]">Slow-drift blindness</td>
                <td className="py-1.5 px-3 text-[#66635C]">Gradual sensor drift stays inside window spread; variance stays calm.</td>
                <td className="py-1.5 px-3 text-[#262522]">Add rate-of-change / trend checks across multi-window spans.</td>
              </tr>
              <tr className="bg-[#FAF9F5]/60">
                <td className="py-1.5 px-3 font-semibold text-[#262522]">Hand-set parameters</td>
                <td className="py-1.5 px-3 text-[#66635C]">Parameters (n, τ, w₁, w₂, 20% floor) currently require manual tuning.</td>
                <td className="py-1.5 px-3 text-[#262522]">Implement lightweight online learning to auto-tune parameters.</td>
              </tr>
              <tr>
                <td className="py-1.5 px-3 font-semibold text-[#262522]">Receiver decoding sync</td>
                <td className="py-1.5 px-3 text-[#66635C]">Cloud receiver must know whether packet is raw or lossy summary.</td>
                <td className="py-1.5 px-3 text-[#262522]">Attach a compact ~1-byte mode &amp; bound header to every packet.</td>
              </tr>
            </tbody>
          </table>
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
