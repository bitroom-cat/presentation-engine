"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { CollegeLogo } from "../components/MultiAgentIllustrations";
import { BookOpen, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export function Slide22ReferencesThankYou({ slideIndex, totalSlides }: SlideProps) {
  const references = [
    "[3] Cemri et al. (2025). Why do multi-agent LLM systems fail? NeurIPS 38.",
    "[4] Chen et al. (2026). From failed trajectories to reliable LLM agents (HarnessFix).",
    "[7] He et al. (2026). Learning to evolve: textual parameter graph optimization (TPGO).",
    "[9] Huang, Cheng, Tan (2025). EvoGit: decentralized code evolution via Git.",
    "[10] Kim et al. (2025). Towards a science of scaling agent systems.",
    "[20] Su et al. (2026). ChronoMem: version control and semantic rollback.",
    "[23] Wu (2025). Git context controller.",
    "[25] Wu et al. (2025). EvolveR: operational amnesia in LLMs.",
    "[8] Hong et al. (2024). MetaGPT: Multi-agent collaborative framework. ICLR.",
    "[24] Wu et al. (2024). AutoGen: Enabling next-gen multi-agent LLM applications.",
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-2.5 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Chapter 10 • Academic Literature &amp; Viva Voce
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            10. Key References &amp; Discussion
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 22 of {totalSlides}
        </span>
      </div>

      {/* Main Grid: References Left (7 cols), Thank You Right (5 cols) */}
      <div className="grid grid-cols-12 gap-5 my-auto">
        {/* Left Column: Key References List */}
        <div className="col-span-7 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between h-[430px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2.5">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Principal Literature Citations (Selection)
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                27 total in report
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-slate-300">
              {references.map((ref, idx) => (
                <div key={idx} className="p-1 rounded bg-slate-950/70 border border-slate-800/80 truncate">
                  {ref}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-mono italic">
            Full comprehensive bibliography of 27 cited papers detailed in the Major Project-I report.
          </div>
        </div>

        {/* Right Column: Thank You & Viva Voce Card */}
        <div className="col-span-5 p-6 rounded-xl bg-gradient-to-b from-slate-900/90 to-blue-950/40 border border-cyan-800/40 flex flex-col justify-between h-[430px] text-center">
          <div className="my-auto space-y-3">
            <CollegeLogo className="w-16 h-16 mx-auto drop-shadow-lg" />

            <h3 className="text-3xl font-black text-white tracking-tight uppercase">
              Thank You
            </h3>

            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Questions, Feedback &amp; Viva Voce</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Department of Computer Science &amp; Engineering<br />
              Government College Dharamshala (H.P.)
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[10.5px] font-mono text-slate-300">
            Guide: <strong className="text-white">Dr. Pawan Thakur</strong> • Batch 2023–27
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Abhay Kumar Angaria • Satyam Sharma • Vanshika Rana • Sapriha</span>
      </div>
    </div>
  );
}
