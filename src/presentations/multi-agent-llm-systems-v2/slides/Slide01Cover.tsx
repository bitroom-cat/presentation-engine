"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { CollegeLogo } from "../components/DiagramIllustrations";
import { BookOpen, Users, Award, Sparkles, Workflow } from "lucide-react";

export function Slide01Cover({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none relative overflow-hidden font-sans">
      {/* Top Academic Ribbon */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <CollegeLogo className="w-12 h-12 shrink-0 drop-shadow" />
          <div>
            <div className="text-[13px] font-bold text-slate-100 tracking-wide">
              GOVERNMENT COLLEGE DHARAMSHALA (H.P.)
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Department of Computer Science &amp; Engineering • Batch: 2023–27
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/80">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wider uppercase">
            Major Project-I Report • CSEE-712P
          </span>
        </div>
      </div>

      {/* Main Title Centerpiece */}
      <div className="my-auto max-w-5xl mx-auto w-full text-center py-2 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-cyan-400 font-mono">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Bachelor of Technology in Computer Science Engineering (Sem-VII)</span>
        </div>

        <h1 className="text-[38px] font-black leading-[1.2] tracking-tight text-white max-w-4xl mx-auto uppercase">
          MULTI-AGENT LLM SYSTEMS:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Memory Management, Coordination Failures &amp; Semantic Conflict Resolution
          </span>
        </h1>

        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />

        <p className="text-[14px] text-slate-300 max-w-3xl mx-auto leading-relaxed">
          A Review-Based Failure Study &amp; a Conceptual Git-Governed Multi-Agent Architecture with Sandboxed Branching, LLM-as-Judge Arbitration, and Evolutionary Governance
        </p>
      </div>

      {/* Structured Bottom Metadata Grid */}
      <div className="grid grid-cols-12 gap-5 pt-3 border-t border-slate-800/90 text-xs">
        <div className="col-span-8 bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Submitted By (Sem-VII, B.Tech. CSE)
          </div>
          <div className="grid grid-cols-4 gap-2 text-slate-200 font-mono text-[11px]">
            <div className="p-1.5 bg-slate-950/60 rounded border border-slate-800/80">
              <div className="font-bold text-white truncate">Abhay K. Angaria</div>
              <div className="text-[10px] text-cyan-400">23010603002</div>
            </div>
            <div className="p-1.5 bg-slate-950/60 rounded border border-slate-800/80">
              <div className="font-bold text-white truncate">Satyam Sharma</div>
              <div className="text-[10px] text-cyan-400">23010603006</div>
            </div>
            <div className="p-1.5 bg-slate-950/60 rounded border border-slate-800/80">
              <div className="font-bold text-white truncate">Vanshika Rana</div>
              <div className="text-[10px] text-cyan-400">23010603073</div>
            </div>
            <div className="p-1.5 bg-slate-950/60 rounded border border-slate-800/80">
              <div className="font-bold text-white truncate">Sapriha</div>
              <div className="text-[10px] text-cyan-400">23010603064</div>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Under the Guidance of
          </div>
          <div>
            <div className="text-[13px] font-bold text-white">Dr. Pawan Thakur</div>
            <div className="text-[10.5px] text-slate-400">
              Department of B.Tech. (CSE)
            </div>
            <div className="text-[9.5px] text-slate-500">
              School of Computer Science Engg. &amp; Technology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
