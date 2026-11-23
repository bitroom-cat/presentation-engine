"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter } from "@/engine/SlidePrimitives";
import { Milestone, CheckCircle2, Clock, Globe } from "lucide-react";

export function Slide06Roadmap({ slideIndex, totalSlides, deck }: SlideProps) {
  const milestones = [
    {
      quarter: "Q1 2026",
      status: "COMPLETED",
      title: "Cortex-M4 Micro-Kernel",
      desc: "Bare-metal C23 implementation verified on STM32F4 with SIMD NEON instruction vectorization.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 bg-emerald-950/20",
    },
    {
      quarter: "Q2 2026",
      status: "IN PROGRESS",
      title: "Cellular Mesh Fleet Pilot",
      desc: "5,000 smart grid transmission sensors deployed across European renewable energy grid.",
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/40 bg-cyan-950/20",
    },
    {
      quarter: "Q3 2026",
      status: "SCHEDULED",
      title: "FPGA & ASIC Tapeout",
      desc: "Hardware IP core synthesis for TSMC 22nm automotive ultra-low power gateway silicon.",
      icon: <Milestone className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/40 bg-blue-950/20",
    },
    {
      quarter: "Q4 2026",
      status: "FUTURE",
      title: "Global Mesh Deployment",
      desc: "Full production rollout across 200,000 maritime, aerospace, and remote seismic nodes.",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/40 bg-purple-950/20",
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        category="Execution Strategy"
        title="Production Rollout & Hardware Milestones"
        subtitle="Quarterly staging from embedded micro-kernel validation to planet-scale telemetry fleets."
        badge="TIMELINE"
      />

      <div className="grid grid-cols-4 gap-4 my-auto">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border ${m.color} backdrop-blur-sm flex flex-col justify-between space-y-4`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded bg-black/40 border border-white/10">
                  {m.quarter}
                </span>
                {m.icon}
              </div>
              <h4 className="font-bold text-base text-white leading-snug">{m.title}</h4>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>

            <div className="pt-2 border-t border-white/10 font-mono text-[10px] uppercase font-semibold tracking-wider text-slate-400">
              {m.status}
            </div>
          </div>
        ))}
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
