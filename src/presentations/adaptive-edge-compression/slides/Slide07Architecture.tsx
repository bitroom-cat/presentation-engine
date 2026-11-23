"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { Interactive3DSensor } from "../components/Interactive3DSensor";
import { Layers, Box } from "lucide-react";

export function Slide07Architecture({ slideIndex, totalSlides }: SlideProps) {
  const [viewMode, setViewMode] = useState<"mailroom" | "3d">("3d");

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-8 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Header with 2D / 3D Toggle */}
      <div className="border-b border-[#E5E2D9] pb-2.5 flex items-end justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            04 • Proposed Methodology (Figure 1 &amp; Hardware Layout)
          </span>
          <h2 className="font-serif text-[26px] font-bold text-[#262522] leading-tight">
            {viewMode === "3d"
              ? "Interactive 3D Hardware Node: Layers & Processing Flow"
              : "The Smart Mailroom Inside the Sensor: System Architecture"}
          </h2>
        </div>

        {/* 2D / 3D View Switcher */}
        <div className="flex items-center gap-1.5 bg-[#F0EEE6] border border-[#E5E2D9] p-1 rounded-xl shadow-sm">
          <button
            onClick={() => setViewMode("3d")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              viewMode === "3d"
                ? "bg-[#D97757] text-white shadow-md shadow-[#D97757]/30"
                : "text-[#66635C] hover:text-[#262522]"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Interactive 3D View</span>
          </button>
          <button
            onClick={() => setViewMode("mailroom")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              viewMode === "mailroom"
                ? "bg-[#D97757] text-white shadow-md shadow-[#D97757]/30"
                : "text-[#66635C] hover:text-[#262522]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2D Mailroom Flow (Fig 1)</span>
          </button>
        </div>
      </div>

      {/* Main Viewport: Either 3D Interactive Node or 2D Mailroom Flow */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-center">
        {viewMode === "3d" ? (
          <div className="w-full flex-1 flex flex-col justify-center">
            <Interactive3DSensor className="w-full h-[450px]" />
          </div>
        ) : (
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl px-6 py-3 shadow-sm flex flex-col justify-center">
            <div className="text-center text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#66635C] mb-1">
              CONTEXT-AWARE EDGE MIDDLEWARE ARCHITECTURE (RUNS ON 32-BIT MICROCONTROLLER)
            </div>

            <svg viewBox="0 0 1120 280" className="w-full h-[255px]" role="img">
              <defs>
                <marker id="arrow-ink-7b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#262522" />
                </marker>
              </defs>

              <rect x="200" y="10" width="665" height="260" rx="14" fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="1.5" strokeDasharray="6 5" />
              <text x="218" y="32" fill="#66635C" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
                ON-CHIP MIDDLEWARE LAYER
              </text>

              {/* Block 1: Sensor Reading */}
              <rect x="14" y="100" width="154" height="76" rx="10" fill="#F0EEE6" stroke="#262522" strokeWidth="1.5" />
              <text x="91" y="133" textAnchor="middle" fill="#262522" fontSize="14" fontWeight="600">Sensor Reading</text>
              <text x="91" y="154" textAnchor="middle" fill="#B85A3A" fontSize="14" fontWeight="600" fontStyle="italic">xₜ</text>

              <line x1="168" y1="138" x2="220" y2="138" stroke="#262522" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />

              {/* Block 2: Sliding-Window Buffer */}
              <rect x="226" y="98" width="184" height="80" rx="10" fill="#FFFFFF" stroke="#4E6278" strokeWidth="1.8" />
              <text x="318" y="132" textAnchor="middle" fill="#262522" fontSize="14" fontWeight="600">Sliding-Window</text>
              <text x="318" y="153" textAnchor="middle" fill="#4E6278" fontSize="12.5" fontFamily="JetBrains Mono, monospace">FIFO buffer (size n=5)</text>

              <path d="M 410 120 L 464 76" fill="none" stroke="#262522" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />
              <path d="M 410 156 L 464 200" fill="none" stroke="#262522" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />

              {/* Block 3A: Volatility */}
              <rect x="470" y="38" width="182" height="76" rx="10" fill="#F4ECD8" stroke="#9E722B" strokeWidth="1.6" />
              <text x="561" y="71" textAnchor="middle" fill="#262522" fontSize="14" fontWeight="600">Data Volatility</text>
              <text x="561" y="92" textAnchor="middle" fill="#9E722B" fontSize="14" fontWeight="600">σ² vs. τ</text>

              {/* Block 3B: Resource Flags */}
              <rect x="470" y="164" width="182" height="76" rx="10" fill="#F4ECD8" stroke="#9E722B" strokeWidth="1.6" />
              <text x="561" y="197" textAnchor="middle" fill="#262522" fontSize="14" fontWeight="600">Resource Flags</text>
              <text x="561" y="218" textAnchor="middle" fill="#66635C" fontSize="12">Battery &amp; Congestion</text>

              <path d="M 652 80 L 702 122" fill="none" stroke="#262522" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />
              <path d="M 652 198 L 702 156" fill="none" stroke="#262522" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />

              {/* Block 4: FSM */}
              <rect x="708" y="94" width="142" height="88" rx="10" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
              <text x="779" y="131" textAnchor="middle" fill="#262522" fontSize="14" fontWeight="700">FSM +</text>
              <text x="779" y="152" textAnchor="middle" fill="#4A6B5D" fontSize="13" fontWeight="600">Cost Function</text>

              {/* 3 Output Chutes */}
              <path d="M 850 116 L 906 56" fill="none" stroke="#4A6B5D" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />
              <line x1="850" y1="138" x2="906" y2="138" stroke="#A63D33" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />
              <path d="M 850 160 L 906 220" fill="none" stroke="#9E722B" strokeWidth="1.8" markerEnd="url(#arrow-ink-7b)" />

              {/* Chutes */}
              <rect x="912" y="24" width="194" height="62" rx="10" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="1.6" />
              <text x="1009" y="52" textAnchor="middle" fill="#262522" fontSize="13" fontWeight="700">Lossy Summary</text>
              <text x="1009" y="70" textAnchor="middle" fill="#4A6B5D" fontSize="11">Steady-State (~10 bytes)</text>

              <rect x="912" y="108" width="194" height="62" rx="10" fill="#F4E4E2" stroke="#A63D33" strokeWidth="1.6" />
              <text x="1009" y="136" textAnchor="middle" fill="#262522" fontSize="13" fontWeight="700">Raw / Lossless Packet</text>
              <text x="1009" y="154" textAnchor="middle" fill="#A63D33" fontSize="11">Critical Anomaly Fidelity</text>

              <rect x="912" y="190" width="194" height="62" rx="10" fill="#F0EEE6" stroke="#9E722B" strokeWidth="1.6" />
              <text x="1009" y="218" textAnchor="middle" fill="#262522" fontSize="13" fontWeight="700">Store Locally</text>
              <text x="1009" y="236" textAnchor="middle" fill="#9E722B" fontSize="11">Survival • Radio Sleep</text>
            </svg>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E5E2D9] text-[11px] font-mono text-[#66635C]">
        <span>Adaptive Edge Data Compression for WSNs | CSEE-711P</span>
        <span>Slide {slideIndex + 1} / {totalSlides}</span>
      </div>
    </div>
  );
}
