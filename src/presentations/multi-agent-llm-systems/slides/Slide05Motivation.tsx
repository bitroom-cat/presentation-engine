"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Target, ShieldCheck, GitBranch, Cpu, CheckCircle2, TrendingUp } from "lucide-react";

export function Slide05Motivation({ slideIndex, totalSlides }: SlideProps) {
  const motivations = [
    {
      title: "Explosive Real-World Adoption",
      desc: "LLM agents are rapidly entrusted with autonomous software development, scientific research, financial analysis, and enterprise workflow execution.",
      icon: TrendingUp,
      accent: "text-cyan-400",
    },
    {
      title: "Compounding Cost of Silent Errors",
      desc: "A single hallucinated premise early in an agent pipeline silently corrupts downstream reasoning. Without version history, surgical rollback is impossible.",
      icon: Target,
      accent: "text-rose-400",
    },
    {
      title: "Borrowing Proven Software Engineering",
      desc: "Software engineering mastered complex collaborative systems via version control, isolated work branches, peer review, and immutable audit logs.",
      icon: GitBranch,
      accent: "text-blue-400",
    },
    {
      title: "Transcending Code to Open Domains",
      desc: "Bridging the gap between software (where compilers verify syntax) and open-ended text/reasoning where LLM arbitration must act as semantic arbiter.",
      icon: Cpu,
      accent: "text-purple-400",
    },
    {
      title: "Resource Efficiency & Green Compute",
      desc: "Because coordination overhead grows super-linearly, knowing when NOT to spawn extra agents prevents compute waste and reduces carbon footprints.",
      icon: ShieldCheck,
      accent: "text-emerald-400",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 2.2 • Context &amp; Purpose
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            2.2 Motivation &amp; Societal Relevance
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 5 of {totalSlides}
        </span>
      </div>

      {/* 5 Motivational Pillars */}
      <div className="grid grid-cols-12 gap-4 my-auto">
        <div className="col-span-7 space-y-3">
          {motivations.slice(0, 3).map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  <Icon className={`w-4 h-4 ${m.accent}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-5 space-y-3">
          {motivations.slice(3, 5).map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 h-[138px]">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  <Icon className={`w-4 h-4 ${m.accent}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}

          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-xs font-mono text-cyan-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Traceable, auditable systems guarantee enterprise trust and accountability.</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
