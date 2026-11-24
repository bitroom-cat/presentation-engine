"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { Wrench, Terminal, Cpu, Database, Server, BarChart, CheckCircle2 } from "lucide-react";

export function Slide16ToolsTechnology({ slideIndex, totalSlides }: SlideProps) {
  const tools = [
    {
      category: "Implementation Language",
      tool: "Python 3.11+",
      purpose: "Core orchestrator, agent worker pipelines, dynamic graph routing & evaluation harnesses.",
    },
    {
      category: "Version Control Engine",
      tool: "Git & GitPython",
      purpose: "Programmatic branch creation, isolated memory commits, three-way merges & rollback.",
    },
    {
      category: "Sandboxed Isolation",
      tool: "Docker Containers",
      purpose: "Hermetic runtime environments for agent tool execution, preventing cross-contamination.",
    },
    {
      category: "Foundation Models",
      tool: "LLM Chat-Completion APIs",
      purpose: "State-of-the-art models (GPT-4o, Claude 3.5 Sonnet, Gemini Pro) powering agents, Judge & Council.",
    },
    {
      category: "Baseline Frameworks",
      tool: "AutoGen & MetaGPT",
      purpose: "Standard industrial multi-agent frameworks used as control group baselines.",
    },
    {
      category: "Retrieval & Memory",
      tool: "ChromaDB / FAISS",
      purpose: "Vector store for single-agent RAG baselines and semantic similarity search.",
    },
    {
      category: "Evaluation Benchmarks",
      tool: "SWE-Bench & Open Task Sets",
      purpose: "Real-world software bug repair benchmarks + custom multi-document semantic conflict tasks.",
    },
    {
      category: "Telemetry & Monitoring",
      tool: "Token & Latency Audit Logs",
      purpose: "Tracking total cost of governance, branch synchronization overhead, and judge latency.",
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0d0e12] text-[#FAF9F5] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" />
            Chapter 6 • Technology Stack
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
            6. Tools, Technologies &amp; Experimental Infrastructure
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
          Slide 16 of {totalSlides}
        </span>
      </div>

      {/* Structured Table */}
      <div className="my-auto border border-slate-800 rounded-xl overflow-hidden bg-slate-900/90 shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-cyan-400 font-mono uppercase text-[10.5px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-2.5 px-4 w-48">Category</th>
              <th className="py-2.5 px-4 w-52">Tool / Technology</th>
              <th className="py-2.5 px-4">Research Purpose &amp; Role in Framework</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-slate-200">
            {tools.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2 px-4 font-bold text-slate-300 text-[11px]">
                  {row.category}
                </td>
                <td className="py-2 px-4 font-mono font-bold text-cyan-300 text-[11.5px]">
                  {row.tool}
                </td>
                <td className="py-2 px-4 text-[11px] text-slate-300 leading-snug">
                  {row.purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hardware Note */}
      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span><strong>Hardware Requirements:</strong> Standard laptop/workstation with internet for API-hosted models; local GPU cluster for open-weights (Llama-3).</span>
        <span className="text-cyan-400 font-bold">Strict prompt &amp; model version parity across all runs</span>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Major Project-I • CSEE-712P</span>
        <span>Govt. College Dharamshala (HPTU)</span>
      </div>
    </div>
  );
}
