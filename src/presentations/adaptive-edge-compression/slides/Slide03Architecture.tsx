"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter } from "@/engine/SlidePrimitives";
import { ArrowRight, Database, Filter, Layers, Radio, Check } from "lucide-react";
import { clsx } from "clsx";

export function Slide03Architecture({ slideIndex, totalSlides, deck }: SlideProps) {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 0,
      name: "1. Time-Series Delta",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Computes 2nd-order differential XOR encoding against historical sliding window.",
      reduction: "42% reduction",
      latency: "12 µs",
    },
    {
      id: 1,
      name: "2. Deadband Quantizer",
      icon: <Filter className="w-5 h-5 text-cyan-400" />,
      desc: "Suppresses stochastic noise below configurable physical tolerance epsilon (ε = 0.05%).",
      reduction: "76% reduction",
      latency: "18 µs",
    },
    {
      id: 2,
      name: "3. Run-Length Bitpacker",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      desc: "Bit-level variable-length Huffman tokenization packing into SIMD 128-bit words.",
      reduction: "91% reduction",
      latency: "34 µs",
    },
    {
      id: 3,
      name: "4. Radio Uplink",
      icon: <Radio className="w-5 h-5 text-indigo-400" />,
      desc: "Low-overhead UDP/QUIC frame payload emitted over cellular or LoRaWAN mesh.",
      reduction: "94.2% total",
      latency: "55 µs total",
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        category="System Architecture"
        title="Interactive 4-Stage Compression Pipeline"
        subtitle="Click any stage below to inspect the transformation pipeline and micro-benchmark footprint."
        badge="SIMD STREAMING"
      />

      {/* Interactive Stages Pipeline */}
      <div className="grid grid-cols-4 gap-4 my-auto">
        {stages.map((st) => {
          const isSelected = activeStage === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStage(st.id)}
              className={clsx(
                "relative text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between",
                isSelected
                  ? "bg-slate-800/90 border-cyan-500 ring-2 ring-cyan-500/30 scale-105 shadow-xl"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-slate-800/80">{st.icon}</div>
                {isSelected && (
                  <span className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{st.name}</h4>
                <div className="mt-2 text-xs font-mono text-cyan-400 font-semibold">{st.reduction}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mt-6 flex items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Selected Pipeline Stage Details
          </div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>{stages[activeStage].name}</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="text-cyan-400">{stages[activeStage].reduction}</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">{stages[activeStage].desc}</p>
        </div>

        <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
          <div className="text-center">
            <span className="block text-[10px] font-mono uppercase text-slate-500">Pipeline Latency</span>
            <span className="text-lg font-mono font-bold text-emerald-400">{stages[activeStage].latency}</span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] font-mono uppercase text-slate-500">RAM Footprint</span>
            <span className="text-lg font-mono font-bold text-blue-400">18.4 KB</span>
          </div>
        </div>
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
