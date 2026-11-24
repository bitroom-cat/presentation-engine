"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { ListOrdered, CheckCircle2 } from "lucide-react";

export function Slide02Contents({ slideIndex, totalSlides }: SlideProps) {
  const chapters = [
    { num: 1, title: "Introduction", desc: "Single-agent limits, multi-agent shift & cascading errors" },
    { num: 2, title: "Problem Statement & Motivation", desc: "6 core challenges & societal relevance" },
    { num: 3, title: "Objectives", desc: "5 core research milestones from review to evaluation" },
    { num: 4, title: "Literature Review", desc: "MAST failure taxonomy, scaling laws, memory & self-evolution" },
    { num: 5, title: "Research Gaps", desc: "6 critical state-of-the-art gaps in memory and arbitration" },
    { num: 6, title: "Proposed Architecture", desc: "Agentic orchestration, Git environment & LLM Judge" },
    { num: 7, title: "Methodology", desc: "Dynamic task graph routing ρ(G), branch isolation & council" },
    { num: 8, title: "Tools & Technology", desc: "Python, GitPython, Docker sandboxes & LLM models" },
    { num: 9, title: "Expected Outcomes & Metrics", desc: "Evaluation suite, validation matrix & token economics" },
    { num: 10, title: "Open Research Issues", desc: "Distributed experience sharing & semantic arbitration" },
    { num: 11, title: "Project Timeline", desc: "12-week execution plan & milestone roadmap" },
    { num: 12, title: "Conclusion & References", desc: "Summary of findings, core papers & viva discussion" },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            Table of Contents
          </h2>
        </div>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
          12 Core Presentation Chapters
        </span>
      </div>

      {/* Grid of 12 Chapters */}
      <div className="grid grid-cols-3 gap-3.5 my-auto">
        {chapters.map((ch) => (
          <div
            key={ch.num}
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-start gap-3"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800/80 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              {ch.num}
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-snug">{ch.title}</div>
              <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{ch.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I Report (CSEE-712P)</span>
        <span>Dept. of CSE, Govt. College Dharamshala</span>
      </div>
    </div>
  );
}
