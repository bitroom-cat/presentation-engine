"use client";

import React, { useState, useEffect } from "react";
import { SlideProps } from "@/engine/types";
import { Play, Pause, RotateCcw } from "lucide-react";

export function Slide08Volatility({ slideIndex, totalSlides }: SlideProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [samples, setSamples] = useState([22.0, 22.1, 22.0, 21.9, 22.0]);
  const [evicted, setEvicted] = useState<number | null>(20.1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
      setSamples((prev) => {
        const oldest = prev[0];
        setEvicted(oldest);
        // generate realistic sensor next sample
        const isSpike = Math.random() < 0.2;
        const nextVal = isSpike
          ? parseFloat((35.0 + Math.random() * 15).toFixed(1))
          : parseFloat((21.8 + Math.random() * 0.5).toFixed(1));
        return [...prev.slice(1), nextVal];
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // compute current live variance of the 5 samples
  const mean = parseFloat((samples.reduce((a, b) => a + b, 0) / 5).toFixed(2));
  const variance = parseFloat(
    (samples.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / 5).toFixed(3)
  );
  const isAnomaly = variance > 0.5;

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-8 flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-2.5 flex items-end justify-between">
        <div>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            04 • Mathematical Formulation (Sections 4.2–4.3)
          </span>
          <h2 className="font-serif text-[26px] font-bold text-[#262522] leading-tight">
            Quantifying Data Volatility via the Animated 5-Slot Conveyor Belt
          </h2>
        </div>

        {/* Live Animation Toggles */}
        <div className="flex items-center gap-2 bg-[#F0EEE6] border border-[#E5E2D9] px-3 py-1 rounded-xl shadow-sm text-xs font-mono">
          <span className="text-[#66635C]">Live Stream:</span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 font-bold text-[#D97757] hover:text-[#B85A3A]"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <button
            onClick={() => {
              setSamples([22.0, 22.1, 22.0, 21.9, 22.0]);
              setEvicted(20.1);
            }}
            className="text-[#66635C] hover:text-[#262522] ml-1"
            title="Reset conveyor"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between my-auto py-1 gap-2.5">
        {/* Animated Conveyor Belt Metaphor */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-[#66635C] mb-2 px-2">
            <span>RAM Footprint: Constant O(n) = 5 floats</span>
            <span className={isAnomaly ? "text-rose-500 font-bold animate-pulse" : "text-emerald-600 font-bold"}>
              {isAnomaly ? "⚠️ HIGH VOLATILITY SPIKE DETECTED" : "✓ CALM SIGNAL WINDOW"}
            </span>
          </div>

          <svg viewBox="0 0 680 120" className="w-full h-28" fill="none">
            {/* Belt Base with Animated Dashes */}
            <rect x="120" y="45" width="440" height="18" rx="9" fill="#E5E2D9" stroke="#66635C" strokeWidth="2" />
            <line x1="130" y1="54" x2="550" y2="54" stroke="#D97757" strokeWidth="2" strokeDasharray="8 6" className="animate-conveyor" />
            <circle cx="130" cy="54" r="6" fill="#66635C" />
            <circle cx="550" cy="54" r="6" fill="#66635C" />

            {/* Evicted Drop Off */}
            {evicted !== null && (
              <g transform="translate(40, 40)" className="animate-fade">
                <rect x="0" y="0" width="46" height="34" rx="6" fill="#F0EEE6" stroke="#B0ACA3" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="23" y="21" fill="#B0ACA3" fontSize="11" textAnchor="middle" fontFamily="monospace">{evicted}</text>
                <text x="23" y="44" fill="#A63D33" fontSize="9" textAnchor="middle">Evicted</text>
              </g>
            )}

            {/* 5 Slots */}
            {samples.map((val, idx) => {
              const xPos = 160 + idx * 72;
              const isLatest = idx === 4;
              return (
                <g key={idx} transform={`translate(${xPos}, 18)`}>
                  <rect
                    x="0"
                    y="0"
                    width="54"
                    height="46"
                    rx="8"
                    fill={isLatest ? "#F6E6DF" : "#FFFFFF"}
                    stroke={val > 30 ? "#A63D33" : isLatest ? "#D97757" : "#4E6278"}
                    strokeWidth={val > 30 || isLatest ? 2.5 : 1.5}
                  />
                  <text
                    x="27"
                    y="28"
                    fill={val > 30 ? "#A63D33" : isLatest ? "#D97757" : "#262522"}
                    fontSize="13"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {val}
                  </text>
                  <text x="27" y="58" fill="#66635C" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    x[{idx}]
                  </text>
                </g>
              );
            })}

            {/* Incoming Sensor Injection */}
            <g transform="translate(585, 20)">
              <rect x="0" y="0" width="50" height="42" rx="8" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
              <text x="25" y="25" fill="#4A6B5D" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+ ADC</text>
            </g>
          </svg>
        </div>

        {/* Live Mathematical Proof Strip */}
        <div className="grid grid-cols-12 gap-3.5 items-center">
          <div className="col-span-6 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 flex items-center justify-around shadow-sm">
            <div className="text-center px-2">
              <div className="text-[10px] font-mono text-[#66635C]">Window Mean μ</div>
              <div className="font-serif text-[17px] font-bold text-[#262522] mt-0.5">
                {mean} °C
              </div>
            </div>
            <div className="h-8 w-[1px] bg-[#E5E2D9]" />
            <div className="text-center px-2">
              <div className="text-[10px] font-mono text-[#66635C]">Window Variance σ²</div>
              <div className={`font-serif text-[17px] font-bold mt-0.5 ${isAnomaly ? "text-[#A63D33]" : "text-[#4A6B5D]"}`}>
                {variance}
              </div>
            </div>
          </div>

          <div className="col-span-6 bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl px-4 py-2.5 flex items-center justify-between text-[12px]">
            <span className="font-mono text-[#66635C]">Threshold: <strong className="text-[#262522]">τ = 0.50</strong></span>
            <span className="text-[#E5E2D9]">|</span>
            <span className={isAnomaly ? "text-[#A63D33] font-bold" : "text-[#4A6B5D] font-bold"}>
              {isAnomaly ? "State → CRITICAL (Raw Telecom)" : "State → STEADY (Lossy 10B)"}
            </span>
          </div>
        </div>

        {/* Two Worked Examples */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Example A: Calm Pond */}
          <div className="bg-[#E8EFEA] border border-[#4A6B5D]/35 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded bg-[#4A6B5D] text-white text-[9.5px] font-mono font-bold">
                  EXAMPLE A • CALM POND
                </span>
                <span className="text-[10.5px] font-mono text-[#4A6B5D] font-bold">σ² ≤ 0.5</span>
              </div>
              <div className="font-mono text-[12px] bg-white/90 border border-[#4A6B5D]/20 rounded-lg px-2.5 py-1 text-[#262522] mb-1">
                Window = [ 22.0, 22.1, 22.0, 21.9, 22.0 ]
              </div>
              <div className="space-y-0.5 text-[11.5px] text-[#262522]">
                <div>• Mean μ = 22.0 | Sum of squared deviations = 0.02</div>
                <div>• Variance σ² = 0.02 / 5 = <strong className="text-[#4A6B5D]">0.004</strong> (Low volatility)</div>
              </div>
            </div>
            <div className="pt-1.5 border-t border-[#4A6B5D]/25 flex items-center justify-between text-[11.5px]">
              <span className="font-bold text-[#4A6B5D]">Decision → STEADY-STATE (Lossy Summary)</span>
              <span className="font-mono text-[10.5px] text-[#4A6B5D]">0.004 ≤ 0.5 ✓</span>
            </div>
          </div>

          {/* Example B: Splashy Storm Wave */}
          <div className="bg-[#F4E4E2] border border-[#A63D33]/35 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded bg-[#A63D33] text-white text-[9.5px] font-mono font-bold">
                  EXAMPLE B • SPLASHY WAVE
                </span>
                <span className="text-[10.5px] font-mono text-[#A63D33] font-bold">σ² &gt; 0.5</span>
              </div>
              <div className="font-mono text-[12px] bg-white/90 border border-[#A63D33]/20 rounded-lg px-2.5 py-1 text-[#262522] mb-1">
                Window = [ 22.0, 22.1, 22.0, <strong className="text-[#A63D33]">35.0, 50.2</strong> ]
              </div>
              <div className="space-y-0.5 text-[11.5px] text-[#262522]">
                <div>• Mean μ = 30.26 | Sum of squared deviations ≈ 623.1</div>
                <div>• Variance σ² = 623.1 / 5 ≈ <strong className="text-[#A63D33]">124.6</strong> (Severe anomaly)</div>
              </div>
            </div>
            <div className="pt-1.5 border-t border-[#A63D33]/25 flex items-center justify-between text-[11.5px]">
              <span className="font-bold text-[#A63D33]">Decision → CRITICAL (Exact Transmission)</span>
              <span className="font-mono text-[10.5px] text-[#A63D33]">124.6 ≫ 0.5 ⚡</span>
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
