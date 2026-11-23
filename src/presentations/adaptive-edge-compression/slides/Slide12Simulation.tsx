"use client";

import React, { useState, useMemo } from "react";
import { SlideProps } from "@/engine/types";

export function Slide12Simulation({ slideIndex, totalSlides }: SlideProps) {
  const [tau, setTau] = useState<number>(0.50);

  // Generate deterministic 120 synthetic sensor samples (Figure 3 reproduction)
  const simSamples = useMemo(() => {
    function detNoise(i: number, amp: number) {
      const s = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
      return ((s - Math.floor(s)) * 2 - 1) * amp;
    }

    const arr: number[] = [];
    // 0..70: Calm baseline ~22.0 °C with tiny sensor noise (±0.10 °C)
    for (let i = 0; i <= 70; i++) {
      arr.push(22.0 + detNoise(i, 0.10));
    }
    // 71..85: Rapid temperature ramp from ~22 °C up to 50.0 °C (15 steps)
    for (let i = 71; i <= 85; i++) {
      const frac = (i - 70) / 15;
      arr.push(22.0 + frac * 28.0 + detNoise(i, 0.08));
    }
    // 86..94: High noisy plateau around 49.0–51.0 °C
    const plateau = [49.9, 50.1, 49.2, 49.7, 50.2, 49.1, 51.0, 49.6, 50.2];
    for (let k = 0; k < plateau.length; k++) {
      arr.push(plateau[k]);
    }
    // 95..119: Sharp drop to 28.0 °C followed by smooth cooling recovery
    for (let i = 95; i < 120; i++) {
      const step = i - 95;
      arr.push(28.0 - step * 0.25 + detNoise(i, 0.09));
    }
    return arr;
  }, []);

  // Compute sliding-window variance (n = 5)
  const windowSize = 5;
  const variances = useMemo(() => {
    return simSamples.map((_, idx) => {
      if (idx < windowSize - 1) return null;
      let sum = 0;
      for (let j = idx - windowSize + 1; j <= idx; j++) sum += simSamples[j];
      const mean = sum / windowSize;
      let sq = 0;
      for (let j = idx - windowSize + 1; j <= idx; j++) {
        const d = simSamples[j] - mean;
        sq += d * d;
      }
      return sq / windowSize;
    });
  }, [simSamples]);

  // Count critical windows and compute shaded intervals
  const { criticalCount, bands } = useMemo(() => {
    let count = 0;
    const isCrit = variances.map((v) => {
      const flag = v !== null && v > tau;
      if (flag) count++;
      return flag;
    });

    const bList: [number, number][] = [];
    let start: number | null = null;
    for (let i = 0; i < isCrit.length; i++) {
      if (isCrit[i] && start === null) start = i;
      if ((!isCrit[i] || i === isCrit.length - 1) && start !== null) {
        const end = isCrit[i] ? i : i - 1;
        bList.push([start, end]);
        start = null;
      }
    }

    return { criticalCount: count, bands: bList };
  }, [variances, tau]);

  // Chart coordinates
  const W = 740;
  const padL = 58;
  const padR = 18;
  const plotW = W - padL - padR;

  const p1Top = 14;
  const p1H = 150;
  const p1Bot = p1Top + p1H;
  const tMin = 19;
  const tMax = 54;

  const p2Top = 196;
  const p2H = 150;
  const p2Bot = p2Top + p2H;
  const logMin = -3.4;
  const logMax = 2.35;

  const xOf = (i: number) => padL + (i / 119) * plotW;
  const yTemp = (t: number) => p1Bot - ((t - tMin) / (tMax - tMin)) * p1H;
  const yVar = (v: number) => {
    const lv = Math.max(logMin, Math.min(logMax, Math.log10(Math.max(v, 1e-4))));
    return p2Bot - ((lv - logMin) / (logMax - logMin)) * p2H;
  };

  const tempPts = simSamples.map((t, i) => `${xOf(i).toFixed(1)},${yTemp(t).toFixed(1)}`).join(" ");
  const varPts = variances
    .map((v, i) => (v !== null ? `${xOf(i).toFixed(1)},${yVar(v).toFixed(1)}` : null))
    .filter(Boolean)
    .join(" ");

  const yTau = yVar(tau);

  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header with Interactive Slider */}
      <div className="border-b border-[#E5E2D9] pb-3 flex items-end justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            04 • Detection Logic Demonstration (Figure 3)
          </span>
          <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
            Illustrative Simulation on Synthetic Sensor Trace
          </h2>
        </div>

        {/* Live Slider Controller */}
        <div className="flex items-center gap-3 bg-[#F0EEE6] border border-[#E5E2D9] rounded-xl px-4 py-1.5 shadow-sm">
          <label htmlFor="tau-range" className="text-[11.5px] font-mono text-[#262522] font-semibold">
            Live Threshold τ:
          </label>
          <input
            id="tau-range"
            type="range"
            min="0.10"
            max="5.00"
            step="0.05"
            value={tau}
            onChange={(e) => setTau(parseFloat(e.target.value))}
            className="w-28 accent-[#D97757] cursor-pointer"
          />
          <span className="font-mono text-[12px] font-bold text-[#B85A3A] w-10 text-right">
            {tau.toFixed(2)}
          </span>
          <button
            onClick={() => setTau(0.50)}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E5E2D9] text-[#66635C] hover:text-[#262522]"
          >
            Reset (0.50)
          </button>
        </div>
      </div>

      {/* Main Dual-Panel Chart & Summary Grid */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-auto py-2 items-stretch">
        {/* Left: Dual-Panel Interactive SVG Chart */}
        <div className="col-span-8 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between text-[11.5px] mb-1 px-1">
            <span className="font-semibold text-[#262522]">
              Synthetic Sensor Trace <span className="text-[#66635C] font-normal">(shaded = Critical mode)</span>
            </span>
            <div className="flex items-center gap-3 text-[10.5px] font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-2.5 rounded-sm bg-[#F4E4E2] border border-[#A63D33]/40 inline-block" />
                Critical Mode
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-[#4E6278] inline-block" />
                Variance σ²
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 border-t border-dashed border-[#A63D33] inline-block" />
                Threshold τ
              </span>
            </div>
          </div>

          <svg viewBox={`0 0 ${W} 380`} className="w-full h-[345px]" role="img">
            {/* Panel 1 Background (Temperature) */}
            <rect x={padL} y={p1Top} width={plotW} height={p1H} fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="1" />
            {/* Panel 2 Background (Log Variance) */}
            <rect x={padL} y={p2Top} width={plotW} height={p2H} fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="1" />

            {/* Grid & Ticks: Panel 1 */}
            {[20, 30, 40, 50].map((val) => {
              const y = yTemp(val);
              return (
                <g key={val}>
                  <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke="#E5E2D9" strokeDasharray="3 3" strokeWidth="1" />
                  <text x={padL - 6} y={y + 3.5} textAnchor="end" fill="#66635C" fontSize="10" fontFamily="JetBrains Mono, monospace">
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Grid & Ticks: Panel 2 (Log10) */}
            {[-3, -2, -1, 0, 1, 2].map((exp) => {
              const y = yVar(Math.pow(10, exp));
              return (
                <g key={exp}>
                  <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke="#E5E2D9" strokeDasharray="3 3" strokeWidth="1" />
                  <text x={padL - 6} y={y + 3.5} textAnchor="end" fill="#66635C" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
                    10^{exp}
                  </text>
                </g>
              );
            })}

            {/* Vertical Ticks */}
            {[0, 20, 40, 60, 80, 100, 120].map((tick) => {
              const clamped = Math.min(119, tick);
              const x = tick === 120 ? padL + plotW : xOf(clamped);
              return (
                <g key={tick}>
                  <line x1={x} y1={p1Top} x2={x} y2={p1Bot} stroke="#E5E2D9" strokeWidth="0.7" />
                  <line x1={x} y1={p2Top} x2={x} y2={p2Bot} stroke="#E5E2D9" strokeWidth="0.7" />
                  <text x={x} y={p2Bot + 14} textAnchor="middle" fill="#66635C" fontSize="10" fontFamily="JetBrains Mono, monospace">
                    {tick}
                  </text>
                </g>
              );
            })}

            {/* Shaded Critical Bands in Top Panel */}
            {bands.map(([bStart, bEnd], idx) => {
              const halfStep = (plotW / 119) * 0.55;
              const bx1 = Math.max(padL, xOf(bStart) - halfStep);
              const bx2 = Math.min(padL + plotW, xOf(bEnd) + halfStep);
              return (
                <rect
                  key={idx}
                  x={bx1.toFixed(1)}
                  y={p1Top + 1}
                  width={(bx2 - bx1).toFixed(1)}
                  height={p1H - 2}
                  fill="#A63D33"
                  fillOpacity="0.22"
                />
              );
            })}

            {/* Polyline 1: Temperature */}
            <polyline points={tempPts} fill="none" stroke="#262522" strokeWidth="2" strokeLinejoin="round" />

            {/* Polyline 2: Variance */}
            <polyline points={varPts} fill="none" stroke="#4E6278" strokeWidth="2" strokeLinejoin="round" />

            {/* Dashed Threshold Line */}
            <line x1={padL} y1={yTau.toFixed(1)} x2={padL + plotW} y2={yTau.toFixed(1)} stroke="#A63D33" strokeWidth="1.8" strokeDasharray="6 4" />
            <rect x={padL + 8} y={Math.max(p2Top + 6, yTau - 18).toFixed(1)} width="85" height="16" rx="4" fill="#FFFFFF" stroke="#E5E2D9" />
            <text x={padL + 14} y={Math.max(p2Top + 17, yTau - 7).toFixed(1)} fill="#A63D33" fontSize="10" fontWeight="bold" fontFamily="monospace">
              τ = {tau.toFixed(2)}
            </text>

            {/* Axis Labels */}
            <text x="14" y={p1Top + p1H / 2} textAnchor="middle" fill="#262522" fontSize="11" fontWeight="bold" transform={`rotate(-90 14 ${p1Top + p1H / 2})`}>
              Temp (°C)
            </text>
            <text x="14" y={p2Top + p2H / 2} textAnchor="middle" fill="#262522" fontSize="11" fontWeight="bold" transform={`rotate(-90 14 ${p2Top + p2H / 2})`}>
              Variance σ²
            </text>
            <text x={padL + plotW / 2} y="375" textAnchor="middle" fill="#262522" fontSize="11" fontWeight="bold">
              Sample Index (t)
            </text>
          </svg>
        </div>

        {/* Right: Simulation Stats + Honesty Box */}
        <div className="col-span-4 flex flex-col justify-between gap-3.5">
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 shadow-sm space-y-3">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4E6278]">
              Simulation Status
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#F0EEE6] rounded-lg p-2.5 text-center">
                <div className="font-mono text-[16px] font-bold text-[#262522]">120</div>
                <div className="text-[10px] text-[#66635C]">Samples</div>
              </div>
              <div className="bg-[#F0EEE6] rounded-lg p-2.5 text-center">
                <div className="font-mono text-[16px] font-bold text-[#262522]">n = 5</div>
                <div className="text-[10px] text-[#66635C]">FIFO Buffer</div>
              </div>
            </div>

            <div className="bg-[#F4E4E2] border border-[#A63D33]/30 rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-mono uppercase text-[#A63D33] font-bold">
                  Critical Windows
                </div>
                <div className="text-[11px] text-[#66635C]">Ramp &amp; Drop Clustered</div>
              </div>
              <div className="font-mono text-[20px] font-bold text-[#A63D33]">
                {criticalCount} / 120
              </div>
            </div>

            <p className="text-[12px] text-[#66635C] leading-relaxed">
              Calm baseline periods (~22 °C) remain cleanly in <strong>Steady-State</strong>, while steep rises and falls immediately trigger <strong>Critical</strong> exact mode.
            </p>
          </div>

          {/* Prominent Muted-Ochre Caveat Card */}
          <div className="bg-[#F4ECD8] border border-[#9E722B]/40 border-l-4 border-l-[#9E722B] rounded-r-xl p-4">
            <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#9E722B] mb-1">
              Honesty Caveat (Section 4.8)
            </div>
            <p className="text-[12px] text-[#262522] leading-relaxed">
              <strong>Synthetic logic demonstration only</strong> — not a performance evaluation. Makes <strong>no measured energy or bandwidth claims</strong>; physical testbed benchmarking remains future work.
            </p>
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
