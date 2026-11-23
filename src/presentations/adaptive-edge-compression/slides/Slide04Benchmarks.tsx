"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, StatCard } from "@/engine/SlidePrimitives";
import { Gauge, Zap, TrendingUp, Sliders } from "lucide-react";

export function Slide04Benchmarks({ slideIndex, totalSlides, deck }: SlideProps) {
  const [samplingRate, setSamplingRate] = useState<number>(1000); // Hz

  // Compute live metrics based on interactive slider
  const rawDataRateKbps = Math.round((samplingRate * 64 * 8) / 1000); // 64-bit float channels
  const compressedRateKbps = Math.round(rawDataRateKbps * 0.058);
  const compressionRatio = ((1 - compressedRateKbps / rawDataRateKbps) * 100).toFixed(1);
  const batterySavingHours = Math.round((samplingRate / 100) * 14.5);

  return (
    <SlideContainer>
      <SlideHeader
        category="Micro-Benchmarks"
        title="Live Interactive Workload Simulator"
        subtitle="Drag the sensor sampling rate slider to preview real-time throughput reduction and power profiles."
        badge="HARDWARE VALIDATED"
      />

      {/* Interactive Control */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Sensor Sampling Frequency
            </span>
          </div>
          <span className="text-lg font-mono font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-500/30">
            {samplingRate} Hz
          </span>
        </div>

        <input
          type="range"
          min="100"
          max="2500"
          step="100"
          value={samplingRate}
          onChange={(e) => setSamplingRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />

        <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
          <span>100 Hz (Low-power seismic)</span>
          <span>1,000 Hz (Standard IMU)</span>
          <span>2,500 Hz (Acoustic vibration)</span>
        </div>
      </div>

      {/* Dynamically Computed KPI Cards */}
      <div className="grid grid-cols-4 gap-4 my-auto">
        <StatCard
          label="Raw Stream"
          value={`${rawDataRateKbps} kbps`}
          subValue="Uncompressed payload"
          variant="default"
          icon={<Gauge className="w-4 h-4" />}
        />
        <StatCard
          label="Compressed"
          value={`${compressedRateKbps} kbps`}
          subValue="Adaptive edge output"
          variant="accent"
          icon={<Zap className="w-4 h-4" />}
        />
        <StatCard
          label="Bandwidth Saved"
          value={`${compressionRatio}%`}
          subValue="Payload reduction"
          trend="up"
          change="SLA Compliant"
          variant="primary"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <StatCard
          label="Extended Battery"
          value={`+${batterySavingHours} hrs`}
          subValue="Radio transmit sleep"
          trend="up"
          variant="secondary"
          icon={<Zap className="w-4 h-4 text-amber-400" />}
        />
      </div>

      <SlideFooter
        deckTitle={deck.title}
        slideIndex={slideIndex}
        totalSlides={totalSlides}
        author={deck.author}
      />
    </SlideContainer>
  );
}
