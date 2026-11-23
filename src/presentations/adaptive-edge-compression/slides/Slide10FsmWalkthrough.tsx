"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { clsx } from "clsx";

export function Slide10FsmWalkthrough({ slideIndex, totalSlides }: SlideProps) {
  const [activeMood, setActiveMood] = useState<"steady" | "critical" | "survival">("steady");

  const moods = {
    steady: {
      title: "STEADY-STATE",
      subtitle: "Aggressive Lossy Mode",
      face: "😊",
      color: "border-[#4A6B5D] bg-[#E8EFEA] text-[#4A6B5D]",
      pill: "bg-[#4A6B5D] text-white",
      condition: "Triggered when σ² ≤ τ for calm windows",
      behavior: "Transmits compact 10-byte summary, saving 90% radio power.",
    },
    critical: {
      title: "CRITICAL",
      subtitle: "Raw / Lossless Telemetry",
      face: "🚨",
      color: "border-[#A63D33] bg-[#F4E4E2] text-[#A63D33]",
      pill: "bg-[#A63D33] text-white",
      condition: "Triggered instantly when σ² > τ (sudden spike or fault)",
      behavior: "100% exact raw telemetry streamed with zero distortion.",
    },
    survival: {
      title: "SURVIVAL",
      subtitle: "Radio Asleep / Local Flash Buffer",
      face: "😴",
      color: "border-[#9E722B] bg-[#F4ECD8] text-[#9E722B]",
      pill: "bg-[#9E722B] text-white",
      condition: "Triggered when Battery < 20% or Channel Congested",
      behavior: "Turns off power-hungry radio and logs samples into local flash.",
    },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-8 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-2.5 flex items-end justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            04 • Control Logic (Figure 2 &amp; Section 4.6)
          </span>
          <h2 className="font-serif text-[26px] font-bold text-[#262522] leading-tight">
            The Interactive 3-Mood Robot Traffic Light: FSM &amp; Walkthrough
          </h2>
        </div>
        <span className="text-xs font-mono text-[#66635C] bg-[#F0EEE6] px-3 py-1 rounded-full border border-[#E5E2D9]">
          Click any robot mood below to test state transitions
        </span>
      </div>

      {/* Main Grid */}
      <div className="flex-1 flex flex-col justify-between my-auto py-1 gap-2.5">
        {/* Interactive 3-Mood Robot Cards */}
        <div className="grid grid-cols-3 gap-4">
          {(["steady", "critical", "survival"] as const).map((key) => {
            const m = moods[key];
            const isSelected = activeMood === key;
            return (
              <button
                key={key}
                onClick={() => setActiveMood(key)}
                className={clsx(
                  "p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between shadow-sm relative overflow-hidden",
                  isSelected
                    ? `${m.color} ring-2 ring-offset-1 scale-[1.02] shadow-md`
                    : "bg-[#FFFFFF] border-[#E5E2D9] opacity-75 hover:opacity-100"
                )}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={clsx("px-2 py-0.5 rounded text-[10px] font-mono font-bold", m.pill)}>
                    {m.title}
                  </span>
                  <span className="text-2xl">{m.face}</span>
                </div>
                <div>
                  <h4 className="font-serif text-[14px] font-bold text-[#262522] leading-snug">{m.subtitle}</h4>
                  <p className="text-[11px] text-[#66635C] mt-1">{m.condition}</p>
                </div>
                <div className="mt-2 pt-2 border-t border-[#E5E2D9] text-[11px] font-semibold">
                  {m.behavior}
                </div>
              </button>
            );
          })}
        </div>

        {/* Conflict Resolution & Survival Priority Strip */}
        <div className="bg-[#F4ECD8] border border-[#9E722B]/35 rounded-xl p-3 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-[#9E722B] text-white font-mono text-[9px] font-bold">
                CONFLICT RESOLUTION
              </span>
              <h5 className="font-serif text-[13.5px] font-bold text-[#262522]">Survival Priority Rule</h5>
            </div>
            <p className="text-[11.5px] text-[#262522] mt-0.5">
              What if a critical anomaly strikes while the node is asleep in <strong>SURVIVAL</strong> mode?
            </p>
          </div>
          <div className="bg-white/80 border border-[#9E722B]/30 rounded-lg p-2 text-[11px] font-mono space-y-0.5 max-w-lg">
            <div>• If σ² &gt; τ AND battery &gt; 5%: send <strong>1 short emergency alert</strong> immediately!</div>
            <div>• Otherwise: buffer locally in flash to protect node from death.</div>
          </div>
        </div>

        {/* 3-Panel Bearing Failure Comic Strip */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 shadow-sm">
          <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#66635C] mb-2">
            Industrial Scenario • Factory Bearing Seizure Comic Strip
          </div>
          <div className="grid grid-cols-3 gap-3.5 text-[12px]">
            <div className="bg-[#E8EFEA]/50 border border-[#4A6B5D]/25 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10.5px] font-bold text-[#4A6B5D]">PANEL 1 • MIN 0–50</span>
                <span>🟢</span>
              </div>
              <h5 className="font-bold text-[#262522] text-[13px]">Calm Baseline Purr</h5>
              <p className="text-[#66635C] text-[11px] mt-0.5 leading-relaxed">
                Motor runs cool (~22.0 °C). Variance σ² ≈ 0.004 ≤ τ. Node purrs in <em>Steady-State</em>, shipping 10-byte summaries.
              </p>
            </div>

            <div className="bg-[#F4E4E2]/60 border border-[#A63D33]/25 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10.5px] font-bold text-[#A63D33]">PANEL 2 • MIN 51</span>
                <span>🔴</span>
              </div>
              <h5 className="font-bold text-[#262522] text-[13px]">Bearing Friction Hazard!</h5>
              <p className="text-[#66635C] text-[11px] mt-0.5 leading-relaxed">
                Lubricant fails; temp jumps to 90 °C! Variance explodes. Robot flips to <em>Critical</em>, streaming 100% exact raw telemetry.
              </p>
            </div>

            <div className="bg-[#E9EEF3]/60 border border-[#4E6278]/25 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10.5px] font-bold text-[#4E6278]">PANEL 3 • COOLDOWN</span>
                <span>🛡️</span>
              </div>
              <h5 className="font-bold text-[#262522] text-[13px]">Doorway Guard Dwell Time</h5>
              <p className="text-[#66635C] text-[11px] mt-0.5 leading-relaxed">
                Coolant applied. Doorway guard ensures K calm windows pass before safely returning to <em>Steady-State</em>.
              </p>
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
