"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { Scale, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export function Slide09CostFunction({ slideIndex, totalSlides }: SlideProps) {
  const [w1, setW1] = useState(0.8);
  const w2 = parseFloat((1 - w1).toFixed(2));

  // Losses & costs
  const lossyBandwidth = 10; // bytes
  const lossyDistortion = w1 > 0.4 ? 2.0 : 15.0; // MSE distortion rises under spikes

  const rawBandwidth = 100; // bytes
  const rawDistortion = 0.0; // perfect zero loss

  const lossyCost = parseFloat((w1 * lossyBandwidth + w2 * lossyDistortion).toFixed(1));
  const rawCost = parseFloat((w1 * rawBandwidth + w2 * rawDistortion).toFixed(1));

  const chosenMode = lossyCost <= rawCost ? "lossy" : "raw";

  // Compute see-saw angle based on cost ratio (tilts left or right)
  const tiltAngle = Math.max(-16, Math.min(16, (w1 - 0.5) * -34));

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-8 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-2.5 flex items-end justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            04 • Bandwidth vs. Fidelity Trade-Off (Section 4.5)
          </span>
          <h2 className="font-serif text-[26px] font-bold text-[#262522] leading-tight">
            The Interactive See-Saw Balance Scale: Cost Function &amp; Mirror Check
          </h2>
        </div>

        {/* Quick Scenario Buttons */}
        <div className="flex items-center gap-1.5 bg-[#F0EEE6] border border-[#E5E2D9] p-1 rounded-xl shadow-sm text-xs font-mono">
          <button
            onClick={() => setW1(0.8)}
            className={clsx(
              "px-3 py-1 rounded-lg font-bold transition-all",
              w1 >= 0.7
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-[#66635C] hover:text-[#262522]"
            )}
          >
            Normal (w₁=0.8)
          </button>
          <button
            onClick={() => setW1(0.1)}
            className={clsx(
              "px-3 py-1 rounded-lg font-bold transition-all",
              w1 <= 0.3
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                : "text-[#66635C] hover:text-[#262522]"
            )}
          >
            Emergency (w₁=0.1)
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 gap-5 my-auto py-1 items-stretch">
        {/* Left Column: Interactive Animated See-Saw Scale */}
        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B85A3A] flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Live Animated Scale
              </span>
              <span className="text-xs font-mono font-semibold text-[#66635C]">
                Tilt: {tiltAngle > 0 ? `+${Math.round(tiltAngle)}°` : `${Math.round(tiltAngle)}°`}
              </span>
            </div>

            {/* Dynamic Animated SVG Scale */}
            <svg viewBox="0 0 540 135" className="w-full h-32" fill="none">
              {/* Center Pivot Base */}
              <polygon points="270,75 250,115 290,115" fill="#262522" />
              <circle cx="270" cy="75" r="5" fill="#FAF9F5" />

              {/* Tilting Lever Beam */}
              <g style={{ transform: `rotate(${tiltAngle}deg)`, transformOrigin: "270px 75px", transition: "transform 0.4s ease-out" }}>
                <line x1="80" y1="75" x2="460" y2="75" stroke="#262522" strokeWidth="6" strokeLinecap="round" />

                {/* Left Pan: Bandwidth Weight */}
                <g transform="translate(80, 75)">
                  <line x1="0" y1="0" x2="-20" y2="25" stroke="#66635C" strokeWidth="1.5" />
                  <line x1="0" y1="0" x2="20" y2="25" stroke="#66635C" strokeWidth="1.5" />
                  <rect x="-30" y="25" width="60" height="22" rx="4" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
                  <text x="0" y="40" fill="#4A6B5D" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    w₁ = {w1.toFixed(1)}
                  </text>
                  <text x="0" y="62" fill="#4A6B5D" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
                    Bandwidth
                  </text>
                </g>

                {/* Right Pan: Distortion Weight */}
                <g transform="translate(460, 75)">
                  <line x1="0" y1="0" x2="-20" y2="25" stroke="#66635C" strokeWidth="1.5" />
                  <line x1="0" y1="0" x2="20" y2="25" stroke="#66635C" strokeWidth="1.5" />
                  <rect x="-30" y="25" width="60" height="22" rx="4" fill="#F4E4E2" stroke="#A63D33" strokeWidth="2" />
                  <text x="0" y="40" fill="#A63D33" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    w₂ = {w2.toFixed(1)}
                  </text>
                  <text x="0" y="62" fill="#A63D33" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
                    Distortion
                  </text>
                </g>
              </g>

              <text x="270" y="130" fill="#262522" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                Cost = ({w1.toFixed(2)} · Bandwidth) + ({w2.toFixed(2)} · Distortion)
              </text>
            </svg>

            {/* Slider Control */}
            <div className="mt-2 pt-2 border-t border-[#E5E2D9]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#66635C] mb-1">
                <span>Prioritize Bandwidth (w₁=1.0)</span>
                <span>Prioritize Fidelity (w₂=1.0)</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={w1}
                onChange={(e) => setW1(parseFloat(e.target.value))}
                className="w-full accent-[#D97757] cursor-pointer"
              />
            </div>
          </div>

          {/* Virtual Decompression Mirror Check Card */}
          <div className="bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-sm">🪞</span>
              <h4 className="font-serif text-[13.5px] font-bold text-[#262522]">
                Local &quot;Mirror Check&quot; (Virtual Decompression)
              </h4>
            </div>
            <p className="text-[11.5px] text-[#66635C] leading-relaxed">
              Before transmitting, the node decompresses its own lossy summary in RAM to calculate exact MSE error.
            </p>
            <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-lg p-2 text-[11px] font-mono mt-1 flex justify-between">
              <span>Rec Diff: [±0.1, 0, 0]</span>
              <span className="font-bold text-[#B85A3A]">MSE = 0.006 ✓</span>
            </div>
          </div>
        </div>

        {/* Right Column: Worked Cost Table 3 with Live Highlights */}
        <div className="col-span-7 flex flex-col justify-between gap-3">
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl overflow-hidden flex-1 flex flex-col shadow-sm">
            <div className="px-4 py-2.5 bg-[#F0EEE6] border-b border-[#E5E2D9] flex items-center justify-between">
              <h3 className="font-serif text-[15px] font-bold text-[#262522]">
                Table 3: Live Worked Cost Evaluation
              </h3>
              <span className="text-[11px] font-mono text-[#66635C]">
                Lossy B=10 B | Raw B=100 B (D=0)
              </span>
            </div>

            <table className="w-full text-left border-collapse flex-1 text-[12.5px]">
              <thead>
                <tr className="border-b border-[#E5E2D9] text-[10.5px] uppercase tracking-wider text-[#66635C] bg-[#FAF9F5]">
                  <th className="py-2.5 px-4 w-[35%]">Context &amp; Weights</th>
                  <th className="py-2.5 px-3 w-[15%]">Mode</th>
                  <th className="py-2.5 px-3 w-[28%]">Calculation</th>
                  <th className="py-2.5 px-4 w-[22%]">Resulting Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2D9]">
                <tr className={clsx(chosenMode === "lossy" ? "bg-[#E8EFEA]/60" : "bg-white")}>
                  <td className="py-2.5 px-4 align-middle" rowSpan={2}>
                    <div className="font-bold text-[#262522]">Active Dynamic Settings</div>
                    <div className="font-mono text-[11.5px] text-[#D97757] mt-0.5">
                      w₁ = {w1.toFixed(2)}, w₂ = {w2.toFixed(2)}
                    </div>
                    <div className="text-[11px] text-[#66635C]">
                      {w1 >= 0.5 ? "Bandwidth Priority" : "High Distortion Alarm"}
                    </div>
                  </td>
                  <td className="py-2 px-3 font-semibold text-[#262522]">Lossy</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#262522]">
                    {w1.toFixed(1)}×10 + {w2.toFixed(1)}×{lossyDistortion.toFixed(1)}
                  </td>
                  <td className="py-2 px-4">
                    <span className="font-mono font-bold text-[14px] text-[#262522]">{lossyCost}</span>
                    {chosenMode === "lossy" && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-[#4A6B5D] text-white text-[9.5px] font-mono font-bold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> CHOSEN
                      </span>
                    )}
                  </td>
                </tr>
                <tr className={clsx(chosenMode === "raw" ? "bg-[#F4E4E2]/60" : "bg-white")}>
                  <td className="py-2 px-3 text-[#66635C]">Raw</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#66635C]">
                    {w1.toFixed(1)}×100 + {w2.toFixed(1)}×0
                  </td>
                  <td className="py-2 px-4">
                    <span className="font-mono font-bold text-[14px] text-[#262522]">{rawCost}</span>
                    {chosenMode === "raw" && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-[#A63D33] text-white text-[9.5px] font-mono font-bold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> CHOSEN
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl px-4 py-2.5 text-[12px] text-[#262522]">
            <strong>Live Outcome:</strong>{" "}
            {chosenMode === "lossy" ? (
              <span className="text-[#4A6B5D] font-bold">
                Lossy mode wins (Cost {lossyCost} vs {rawCost}) — saving 90% bandwidth while staying within fidelity limits!
              </span>
            ) : (
              <span className="text-[#A63D33] font-bold">
                Raw mode wins (Cost {rawCost} vs {lossyCost}) — distortion penalty automatically flips transmission to 100% exact raw telemetry!
              </span>
            )}
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
