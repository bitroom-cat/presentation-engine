"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { BreakingPointIllustration } from "../components/FriendlyIllustrations";
import { Interactive3DMesh } from "../components/Interactive3DMesh";
import { Network, Table } from "lucide-react";

export function Slide05Comparison({ slideIndex, totalSlides }: SlideProps) {
  const [viewMode, setViewMode] = useState<"table" | "3d">("table");

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-8 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-2.5 flex items-end justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            02 • Critical Comparison (Table 1 &amp; Breaking Point Simulation)
          </span>
          <h2 className="font-serif text-[26px] font-bold text-[#262522] leading-tight">
            {viewMode === "3d"
              ? "3D Network Jam: Static Sleep-Wake vs. Adaptive Staggering"
              : "Comparative Analysis: The \"Static Rule\" Bottleneck"}
          </h2>
        </div>

        {/* View Switcher Button */}
        <div className="flex items-center gap-1.5 bg-[#F0EEE6] border border-[#E5E2D9] p-1 rounded-xl shadow-sm">
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              viewMode === "table"
                ? "bg-[#D97757] text-white shadow-md shadow-[#D97757]/30"
                : "text-[#66635C] hover:text-[#262522]"
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Table 1 Comparison</span>
          </button>
          <button
            onClick={() => setViewMode("3d")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              viewMode === "3d"
                ? "bg-[#D97757] text-white shadow-md shadow-[#D97757]/30"
                : "text-[#66635C] hover:text-[#262522]"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>3D Mesh Simulation</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 my-auto py-2 flex flex-col justify-center">
        {viewMode === "3d" ? (
          <div className="w-full flex-1 flex flex-col justify-center">
            <Interactive3DMesh className="w-full h-[450px]" />
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between gap-3">
            {/* Table 1 with Visual Breaking Point Icons */}
            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F0EEE6] border-b border-[#E5E2D9] text-[11px] uppercase tracking-wider text-[#66635C] font-semibold">
                    <th className="py-2.5 px-4 w-[11%]">Study</th>
                    <th className="py-2.5 px-4 w-[23%]">Core Technique</th>
                    <th className="py-2.5 px-4 w-[24%]">Author-Reported Gain</th>
                    <th className="py-2.5 px-4 w-[42%]">Fixed Assumption &amp; Breaking Point</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E2D9] text-[12.5px]">
                  <tr className="bg-[#FFFFFF]">
                    <td className="py-2 px-4 font-mono font-bold text-[#B85A3A]">Paper [1]</td>
                    <td className="py-2 px-4 font-medium text-[#262522]">
                      SZ lossy compression<br />
                      <span className="text-[11px] text-[#66635C]">Curve fitting + Huffman</span>
                    </td>
                    <td className="py-2 px-4 text-[#262522]">
                      Up to <strong>103×</strong> data cut; <strong>+27%</strong> battery; <strong>98%</strong> accuracy
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F4E4E2] text-[#A63D33] text-[10px] font-semibold">
                          Static error bound (10⁻¹)
                        </span>
                        <BreakingPointIllustration type={1} />
                      </div>
                      <div className="text-[11.5px] text-[#66635C]">
                        Cannot tighten automatically when readings turn critical or channel conditions degrade.
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[#FAF9F5]/70">
                    <td className="py-2 px-4 font-mono font-bold text-[#B85A3A]">Paper [2]</td>
                    <td className="py-2 px-4 font-medium text-[#262522]">
                      Nonlinear prediction<br />
                      <span className="text-[11px] text-[#66635C]">NADPCMC quantizer</span>
                    </td>
                    <td className="py-2 px-4 text-[#262522]">
                      <strong>45.8–60.4%</strong> energy saved; <strong>1.02–1.67%</strong> distortion
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F4E4E2] text-[#A63D33] text-[10px] font-semibold">
                          Multi-hop distortion (1.67% → 4.60%)
                        </span>
                        <BreakingPointIllustration type={2} />
                      </div>
                      <div className="text-[11.5px] text-[#66635C]">
                        Quantization error accumulates over cluster heads; 20-byte baseline header hurts short bursts.
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[#FFFFFF]">
                    <td className="py-2 px-4 font-mono font-bold text-[#B85A3A]">Paper [3]</td>
                    <td className="py-2 px-4 font-medium text-[#262522]">
                      Three-layer lossless<br />
                      <span className="text-[11px] text-[#66635C]">IoT–Edge–Cloud + security</span>
                    </td>
                    <td className="py-2 px-4 text-[#262522]">
                      <strong>80–90%</strong> power cut; RMSE <strong>0.6653</strong>; PSNR <strong>92.14</strong>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F4E4E2] text-[#A63D33] text-[10px] font-semibold">
                          Lossless-only mandate
                        </span>
                        <BreakingPointIllustration type={3} />
                      </div>
                      <div className="text-[11.5px] text-[#66635C]">
                        Compression ratio collapses when sensor stream exhibits high entropy noise and stochastic spikes.
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[#FAF9F5]/70">
                    <td className="py-2 px-4 font-mono font-bold text-[#B85A3A]">Paper [4]</td>
                    <td className="py-2 px-4 font-medium text-[#262522]">
                      Energy-budgeted S-LZW<br />
                      <span className="text-[11px] text-[#66635C]">Solar sleep / wake rule</span>
                    </td>
                    <td className="py-2 px-4 text-[#262522]">
                      Near-zero blackouts; higher sink delivery than 5 baselines
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F4E4E2] text-[#A63D33] text-[10px] font-semibold">
                          Synchronized sunrise wake-up
                        </span>
                        <BreakingPointIllustration type={4} />
                      </div>
                      <div className="text-[11.5px] text-[#66635C]">
                        Hoarded data triggers a synchronized <strong>&quot;morning traffic spike&quot;</strong>, overloading forward relays.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Editorial Synthesis Bar */}
            <div className="bg-[#F0EEE6] border-l-4 border-[#D97757] rounded-r-xl px-5 py-2.5 flex items-center justify-between">
              <p className="font-serif text-[13.5px] text-[#262522]">
                &quot;All four schemes save energy in their tested settings, yet <strong>each fixes a core behaviour in advance</strong> — leaving them vulnerable when data, battery, or traffic shifts.&quot;
              </p>
              <span className="text-[10.5px] font-mono text-[#66635C] shrink-0 ml-4">Section 2.6–2.8 Synthesis</span>
            </div>
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
