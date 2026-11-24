"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  GitMerge, 
  GitCommit, 
  ShieldAlert, 
  Scale, 
  Cpu, 
  Network, 
  Bot, 
  Activity, 
  CheckCircle2, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  Split,
  Database
} from "lucide-react";

/**
 * Government College Dharamshala / HPTU Academic Crest
 */
export function CollegeLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Cog / Sun Gear */}
      <circle cx="60" cy="56" r="48" stroke="#D97757" strokeWidth="3" strokeDasharray="6 3" />
      <circle cx="60" cy="56" r="42" fill="#FAF9F5" stroke="#9E722B" strokeWidth="2.5" />
      <circle cx="60" cy="56" r="38" stroke="#D97757" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      
      {/* Inner Academic Shield */}
      <path 
        d="M38 36 C38 36, 60 32, 60 32 C60 32, 82 36, 82 36 C82 58, 76 74, 60 82 C44 74, 38 58, 38 36 Z" 
        fill="#1E293B" 
        stroke="#D97757" 
        strokeWidth="2" 
      />
      
      {/* Torch & Open Book inside Shield */}
      {/* Book pages */}
      <path d="M46 56 C53 53 58 55 60 58 C62 55 67 53 74 56 V67 C67 64 62 66 60 69 C58 66 53 64 46 67 Z" fill="#F8FAFC" />
      <line x1="60" y1="58" x2="60" y2="69" stroke="#1E293B" strokeWidth="1.5" />
      
      {/* Flaming Torch */}
      <path d="M57 40 L63 40 L61 50 L59 50 Z" fill="#9E722B" />
      <path d="M60 33 C63 36 65 39 60 43 C55 39 57 36 60 33 Z" fill="#D97757" />

      {/* Sanskrit Motto Ribbon Banner */}
      <path 
        d="M20 95 L30 88 L90 88 L100 95 L92 101 L60 97 L28 101 Z" 
        fill="#1E293B" 
        stroke="#9E722B" 
        strokeWidth="1.5" 
      />
      <text 
        x="60" 
        y="95" 
        fill="#FAF9F5" 
        fontSize="6.5" 
        fontWeight="bold" 
        textAnchor="middle" 
        fontFamily="sans-serif"
        letterSpacing="0.05em"
      >
        विद्या परं भूषणम्
      </text>
    </svg>
  );
}

/**
 * Fig. 2: MAST Failure Categories Distribution Bar Chart (Cemri et al. [3])
 */
export function MastFailureChart({ className = "" }: { className?: string }) {
  const categories = [
    { label: "System Design Issues", value: 44.2, color: "#1E3A8A", textCol: "#93C5FD", highlight: "Coordination & Arch" },
    { label: "Inter-Agent Misalignment", value: 32.3, color: "#2563EB", textCol: "#BFDBFE", highlight: "Context Drift / Loops" },
    { label: "Task Verification Failures", value: 23.5, color: "#60A5FA", textCol: "#DBEAFE", highlight: "Hallucinated Validation" },
  ];

  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-blue-400">
            Fig. 2: MAST Failure Taxonomy (Cemri et al. NeurIPS 2025)
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-blue-300">
            1,642 traces • 7 frameworks
          </span>
        </div>
        <p className="text-[11.5px] text-slate-400 mb-3">
          Crucial finding: Over <strong>76.5%</strong> of failures originate from architectural and inter-agent coordination issues, not individual LLM capability.
        </p>
      </div>

      <div className="space-y-3.5 my-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                {cat.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] text-slate-400 font-mono">({cat.highlight})</span>
                <span className="font-mono font-bold text-sm text-cyan-300">{cat.value}%</span>
              </div>
            </div>
            {/* Animated progress bar */}
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{
                  width: `${cat.value * 2.1}%`,
                  background: `linear-gradient(90deg, #1E3A8A, ${cat.color})`,
                }}
              >
                <span className="text-[9px] font-mono font-bold text-white drop-shadow">
                  {cat.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10.5px] text-slate-400 font-mono">
        <span>Interdependency: History Loss ↔ Reset r = 0.63</span>
        <span className="text-emerald-400 font-semibold">Reliability: κ = 0.88</span>
      </div>
    </div>
  );
}

/**
 * Fig. 3: Scaling Agent Systems (Kim et al. [10])
 * Left: Task Structure Effect (+81% vs -70%)
 * Right: Superlinear Communication Overhead Curve T = 2.72(n+0.5)^1.724
 */
export function ScalingEffectChart({ className = "" }: { className?: string }) {
  const [hoveredN, setHoveredN] = useState<number>(4);

  // Compute points for T = 2.72 * (n + 0.5)^1.724
  const nPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dataPoints = nPoints.map(n => ({
    n,
    t: Math.round(2.72 * Math.pow(n + 0.5, 1.724) * 10) / 10
  }));

  const maxT = 160;

  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 grid grid-cols-12 gap-4 ${className}`}>
      {/* Left Column: Effect of Task Structure */}
      <div className="col-span-5 flex flex-col justify-between border-r border-slate-800 pr-3">
        <div>
          <span className="text-[11px] font-mono font-semibold uppercase text-emerald-400">
            Task Topology Effect
          </span>
          <h4 className="text-xs font-bold text-slate-200 mt-0.5">
            Parallelizable vs Sequential
          </h4>
        </div>

        <div className="h-44 flex items-end justify-center gap-6 pb-2 pt-4">
          {/* Parallelizable: +81% */}
          <div className="flex flex-col items-center gap-1.5 w-18">
            <span className="text-xs font-mono font-bold text-emerald-400">+81%</span>
            <div className="w-14 h-28 bg-emerald-600 rounded-t-lg border-t-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-950/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse" />
              <span className="text-[9.5px] font-bold text-emerald-100 rotate-90 sm:rotate-0 text-center px-1">
                Speedup
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-300 text-center leading-tight">
              Parallel<br />Tasks
            </span>
          </div>

          {/* Sequential: -70% */}
          <div className="flex flex-col items-center gap-1.5 w-18">
            <span className="text-xs font-mono font-bold text-rose-400">-70%</span>
            <div className="w-14 h-24 bg-rose-600/90 rounded-b-lg border-b-2 border-rose-400 flex items-center justify-center shadow-lg shadow-rose-950/60 relative overflow-hidden">
              <span className="text-[9.5px] font-bold text-rose-100 rotate-90 sm:rotate-0 text-center px-1">
                Degradation
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-300 text-center leading-tight">
              Sequential<br />Tasks
            </span>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-mono bg-slate-950/60 p-1.5 rounded border border-slate-800">
          ⚠️ Forcing sequential work onto agent teams destroys performance (-70%).
        </div>
      </div>

      {/* Right Column: Super-linear Communication Overhead */}
      <div className="col-span-7 flex flex-col justify-between pl-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-cyan-400">
              Communication Overhead T
            </span>
            <div className="text-xs font-mono text-slate-300">
              <span className="text-cyan-300 font-bold">T = 2.72(n + 0.5)<sup>1.724</sup></span>
            </div>
          </div>
          <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
            Super-linear
          </span>
        </div>

        {/* SVG Curve Plot */}
        <div className="relative h-40 w-full mt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 280 130">
            {/* Grid lines */}
            <line x1="30" y1="10" x2="270" y2="10" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />
            <line x1="30" y1="45" x2="270" y2="45" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />
            <line x1="30" y1="80" x2="270" y2="80" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.8" />
            <line x1="30" y1="115" x2="270" y2="115" stroke="#475569" strokeWidth="1.2" />

            {/* Y axis labels */}
            <text x="24" y="14" fill="#64748B" fontSize="8" textAnchor="end" fontFamily="monospace">150</text>
            <text x="24" y="49" fill="#64748B" fontSize="8" textAnchor="end" fontFamily="monospace">100</text>
            <text x="24" y="84" fill="#64748B" fontSize="8" textAnchor="end" fontFamily="monospace">50</text>
            <text x="24" y="118" fill="#64748B" fontSize="8" textAnchor="end" fontFamily="monospace">0</text>

            {/* Connecting curve path */}
            {(() => {
              const points = dataPoints.map(d => {
                const x = 30 + ((d.n - 1) / 9) * 230;
                const y = 115 - (d.t / maxT) * 105;
                return `${x},${y}`;
              }).join(" ");

              return (
                <>
                  <polyline
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    points={points}
                    className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                  />
                  {dataPoints.map((d) => {
                    const x = 30 + ((d.n - 1) / 9) * 230;
                    const y = 115 - (d.t / maxT) * 105;
                    const isHovered = hoveredN === d.n;
                    return (
                      <g key={d.n} className="cursor-pointer" onMouseEnter={() => setHoveredN(d.n)}>
                        <circle
                          cx={x}
                          cy={y}
                          r={isHovered ? 5 : 3.5}
                          fill={isHovered ? "#38BDF8" : "#0284C7"}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        <text
                          x={x}
                          y="126"
                          fill={isHovered ? "#38BDF8" : "#94A3B8"}
                          fontSize="8"
                          fontWeight={isHovered ? "bold" : "normal"}
                          textAnchor="middle"
                          fontFamily="monospace"
                        >
                          n={d.n}
                        </text>
                      </g>
                    );
                  })}
                </>
              );
            })()}
          </svg>
        </div>

        {/* Live Hover Readout */}
        <div className="flex items-center justify-between text-[10.5px] font-mono bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
          <span className="text-slate-400">Agents: <strong className="text-white">n = {hoveredN}</strong></span>
          <span className="text-cyan-400">Overhead: <strong>T ≈ {(2.72 * Math.pow(hoveredN + 0.5, 1.724)).toFixed(1)}</strong></span>
        </div>
      </div>
    </div>
  );
}

/**
 * Fig. 1: Proposed Agentic Orchestration & Arbitration Framework Architecture
 */
export function ProposedArchitectureDiagram({ className = "" }: { className?: string }) {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: 1, title: "1. Master Ingestion", desc: "Dependency graph G=(V,E) computed; parallelism score ρ(G) evaluated against threshold τ_seq." },
    { num: 2, title: "2. Dynamic Routing", desc: "Sequential tasks routed to SAS (Context + RAG); parallel tasks routed to Task Router." },
    { num: 3, title: "3. Agent Git Sandbox", desc: "k specialized agents work on isolated branches Bi(j) with dedicated private memory buffers." },
    { num: 4, title: "4. Merge & Conflict", desc: "Clean merges land directly in main. Semantic conflicts divert automatically to LLM-as-Judge." },
    { num: 5, title: "5. LLM-as-Judge", desc: "Arbitrates conflicting outputs, generates audit log, and yields canonical resolved state." },
    { num: 6, title: "6. Evolution Council", desc: "Traces cascading root causes from audit logs and updates agent system prompts/code." },
  ];

  return (
    <div className={`p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Fig. 1: Agentic Orchestration and Arbitration Framework
          </h4>
        </div>
        <span className="text-[10px] font-mono text-slate-400">
          Click any stage to inspect mechanism
        </span>
      </div>

      {/* Interactive Architecture Flow SVG */}
      <div className="my-2 bg-slate-950/70 rounded-lg p-2 border border-slate-800/80">
        <svg className="w-full h-44" viewBox="0 0 760 170">
          <defs>
            <linearGradient id="gradMaster" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97757" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="gradGit" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="gradJudge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="gradCouncil" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BE185D" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>

          {/* Connectors / Data Flow Arrows */}
          <path d="M 90 85 L 140 85" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
          
          {/* Split Path: Sequential (Up) vs Parallel (Right) */}
          <path d="M 230 65 L 260 35 L 310 35" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="3 2" />
          <path d="M 230 85 L 290 85" stroke="#0284C7" strokeWidth="2.5" />
          
          {/* Git Branching */}
          <path d="M 370 85 L 400 85" stroke="#0284C7" strokeWidth="2.5" />
          <path d="M 470 85 L 500 85" stroke="#38BDF8" strokeWidth="2.5" />
          
          {/* Conflict Path to Judge (Up) */}
          <path d="M 525 70 L 525 35 L 565 35" stroke="#A855F7" strokeWidth="2" strokeDasharray="3 2" />
          
          {/* Clean Merge (Right to Main) */}
          <path d="M 545 85 L 680 85" stroke="#10B981" strokeWidth="2.5" />

          {/* Judge -> Council -> Feedback loop */}
          <path d="M 645 35 L 675 35" stroke="#A855F7" strokeWidth="2" />
          <path d="M 715 50 L 715 135 L 440 135 L 440 105" stroke="#F43F5E" strokeWidth="1.8" strokeDasharray="4 3" fill="none" />

          {/* Node 1: User Prompt / Master Orchestrator */}
          <g className="cursor-pointer" onClick={() => setActiveStep(1)}>
            <rect x="10" y="65" width="80" height="40" rx="8" fill="#1E293B" stroke="#D97757" strokeWidth={activeStep === 1 ? 2.5 : 1.2} />
            <text x="50" y="82" fill="#FAF9F5" fontSize="9" fontWeight="bold" textAnchor="middle">User Prompt</text>
            <text x="50" y="94" fill="#94A3B8" fontSize="7.5" textAnchor="middle">Task Ingestion</text>
          </g>

          {/* Node 2: Master Orchestrator (Decision Diamond / Hexagon) */}
          <g className="cursor-pointer" onClick={() => setActiveStep(2)}>
            <polygon points="140,85 185,60 230,85 185,110" fill="#2E1065" stroke="#8B5CF6" strokeWidth={activeStep === 2 ? 2.5 : 1.5} />
            <text x="185" y="82" fill="#E9D5FF" fontSize="8" fontWeight="bold" textAnchor="middle">Master Router</text>
            <text x="185" y="93" fill="#C4B5FD" fontSize="7" fontStyle="italic" textAnchor="middle">ρ(G) vs τ_seq</text>
          </g>

          {/* SAS Branch (Up) */}
          <g>
            <rect x="310" y="18" width="90" height="34" rx="6" fill="#1E1E24" stroke="#F59E0B" strokeWidth="1" />
            <text x="355" y="32" fill="#FDE68A" fontSize="8" fontWeight="bold" textAnchor="middle">Single-Agent (SAS)</text>
            <text x="355" y="43" fill="#94A3B8" fontSize="6.8" textAnchor="middle">Context Log + RAG</text>
          </g>

          {/* Node 3: Agent Git Environment */}
          <g className="cursor-pointer" onClick={() => setActiveStep(3)}>
            <rect x="290" y="65" width="180" height="40" rx="8" fill="#0C4A6E" stroke="#38BDF8" strokeWidth={activeStep === 3 ? 2.5 : 1.5} />
            <text x="380" y="80" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">Agent Git Environment</text>
            <text x="380" y="93" fill="#BAE6FD" fontSize="7" textAnchor="middle">Isolated Branches [A1 | A2 | ... Ak]</text>
          </g>

          {/* Merge Decision */}
          <g className="cursor-pointer" onClick={() => setActiveStep(4)}>
            <circle cx="525" cy="85" r="18" fill="#1E293B" stroke="#38BDF8" strokeWidth={activeStep === 4 ? 2.5 : 1.5} />
            <text x="525" y="84" fill="#38BDF8" fontSize="7" fontWeight="bold" textAnchor="middle">Git</text>
            <text x="525" y="94" fill="#94A3B8" fontSize="6.5" textAnchor="middle">Merge</text>
          </g>

          {/* Node 5: LLM-as-Judge */}
          <g className="cursor-pointer" onClick={() => setActiveStep(5)}>
            <rect x="565" y="18" width="80" height="34" rx="6" fill="#4C1D95" stroke="#C084FC" strokeWidth={activeStep === 5 ? 2.5 : 1.5} />
            <text x="605" y="32" fill="#F3E8FF" fontSize="8" fontWeight="bold" textAnchor="middle">LLM-as-Judge</text>
            <text x="605" y="43" fill="#D8B4FE" fontSize="6.8" textAnchor="middle">Semantic Arbiter</text>
          </g>

          {/* Node 6: Evolution Council */}
          <g className="cursor-pointer" onClick={() => setActiveStep(6)}>
            <rect x="675" y="18" width="80" height="34" rx="6" fill="#831843" stroke="#FB7185" strokeWidth={activeStep === 6 ? 2.5 : 1.5} />
            <text x="715" y="31" fill="#FFE4E6" fontSize="7.8" fontWeight="bold" textAnchor="middle">Evolution Council</text>
            <text x="715" y="42" fill="#FDA4AF" fontSize="6.8" textAnchor="middle">Fault Attribution</text>
          </g>

          {/* Final Main Branch Result */}
          <g>
            <rect x="680" y="68" width="75" height="34" rx="6" fill="#064E3B" stroke="#34D399" strokeWidth="1.5" />
            <text x="717" y="82" fill="#D1FAE5" fontSize="8" fontWeight="bold" textAnchor="middle">Final Result</text>
            <text x="717" y="93" fill="#A7F3D0" fontSize="7" textAnchor="middle">Main Branch</text>
          </g>
        </svg>
      </div>

      {/* Dynamic Detail Card */}
      <div className="bg-slate-950/90 rounded-lg p-2.5 border border-slate-800 text-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-cyan-900 border border-cyan-400 text-cyan-200 flex items-center justify-center font-mono font-bold text-xs shrink-0">
            {activeStep}
          </span>
          <div>
            <div className="font-bold text-cyan-300">{steps[activeStep - 1].title}</div>
            <div className="text-[11px] text-slate-300 mt-0.5">{steps[activeStep - 1].desc}</div>
          </div>
        </div>
        <div className="flex gap-1 shrink-0">
          {[1, 2, 3, 4, 5, 6].map(s => (
            <button
              key={s}
              onClick={() => setActiveStep(s)}
              className={`w-6 h-6 rounded font-mono text-[10px] ${
                activeStep === s ? "bg-cyan-600 text-white font-bold" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Task Ingestion & Parallelism Metric Formula Visualizer (Slide 13)
 * rho(G) = 1 - |E| / C(|V|, 2)
 */
export function DynamicRoutingVisualizer({ className = "" }: { className?: string }) {
  const [taskType, setTaskType] = useState<"parallel" | "sequential">("parallel");

  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <div>
          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
            Task Graph Parallelism Metric: ρ(G)
          </span>
          <h4 className="text-xs font-bold text-slate-200">
            Automated Topological Routing Decision
          </h4>
        </div>
        <div className="flex gap-1 bg-slate-950 p-1 rounded border border-slate-800 text-xs">
          <button
            onClick={() => setTaskType("parallel")}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              taskType === "parallel" ? "bg-cyan-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Parallel Task (ρ ≥ τ)
          </button>
          <button
            onClick={() => setTaskType("sequential")}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              taskType === "sequential" ? "bg-amber-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sequential Task (ρ &lt; τ)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 my-auto items-center">
        {/* Formula Card */}
        <div className="col-span-6 bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs space-y-2">
          <div className="text-[11px] font-mono text-cyan-300 font-semibold">
            Parallelism Score Formula:
          </div>
          <div className="p-2 bg-slate-900 rounded font-mono text-center text-sm text-white border border-slate-700/60">
            ρ(G) = 1 - <span className="text-rose-400">|E|</span> / <span className="text-cyan-400">C(|V|, 2)</span>
          </div>
          <div className="text-[10px] text-slate-400 leading-tight">
            Where <code className="text-slate-200">C(|V|, 2) = |V|(|V|-1)/2</code> is the maximum possible dependency edges between subtasks.
          </div>
        </div>

        {/* Dynamic Topology Simulation */}
        <div className="col-span-6 bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs flex flex-col justify-between h-36">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-400">Selected Scenario:</span>
            <span className={`font-mono font-bold px-2 py-0.5 rounded text-[10px] ${
              taskType === "parallel" ? "bg-emerald-950 text-emerald-300 border border-emerald-800" : "bg-amber-950 text-amber-300 border border-amber-800"
            }`}>
              {taskType === "parallel" ? "ρ(G) = 0.85 (High Parallelism)" : "ρ(G) = 0.15 (Strict Chain)"}
            </span>
          </div>

          <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-300">Action: δ(G) →</span>
            <span className={`font-bold font-mono text-xs px-2.5 py-1 rounded ${
              taskType === "parallel" ? "bg-cyan-500 text-white shadow-lg shadow-cyan-900/50" : "bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50"
            }`}>
              {taskType === "parallel" ? "MAS (Sandboxed Swarm)" : "SAS (Single-Agent RAG)"}
            </span>
          </div>

          <div className="text-[10px] text-slate-400 italic">
            {taskType === "parallel" 
              ? "Decomposes task across k isolated git branches to capture +81% speedup."
              : "Prevents -70% multi-agent coordination penalty; avoids catastrophic context drift."}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 12-Week Project Timeline Visual Road (Slide 20)
 */
export function ProjectTimelineVisual({ className = "" }: { className?: string }) {
  const milestones = [
    { weeks: "W1", title: "Problem & Scope", desc: "Approved project plan & faculty sign-off", status: "completed" },
    { weeks: "W2–3", title: "Literature Review", desc: "Taxonomies, memory systems & failures", status: "completed" },
    { weeks: "W4", title: "Research Gaps", desc: "6 core gaps identified in state of art", status: "completed" },
    { weeks: "W5–6", title: "Architecture Design", desc: "Routing, branches, LLM Judge & Council", status: "completed" },
    { weeks: "W7", title: "Evaluation Plan", desc: "Metrics, SWE-Bench & cost measures", status: "current" },
    { weeks: "W8", title: "Artifacts & Diagrams", desc: "All figures, tables & schematics ready", status: "upcoming" },
    { weeks: "W9–10", title: "Report Writing", desc: "Major Project-I report & supervisor review", status: "upcoming" },
    { weeks: "W11–12", title: "Defense & Viva", desc: "Final presentation & viva rehearsal", status: "upcoming" },
  ];

  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[11px] font-mono font-semibold uppercase text-cyan-400">
          8. Project Execution Roadmap (12-Week Plan)
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
          Academic Session 2023–27 • Sem-VII
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 my-auto">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className={`p-2.5 rounded-lg border flex flex-col justify-between h-28 transition-all ${
              m.status === "completed"
                ? "bg-slate-900/90 border-emerald-500/50"
                : m.status === "current"
                ? "bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950"
                : "bg-slate-950/40 border-slate-800 opacity-75"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                m.status === "completed" ? "bg-emerald-950 text-emerald-300" : m.status === "current" ? "bg-cyan-900 text-cyan-200" : "bg-slate-800 text-slate-400"
              }`}>
                {m.weeks}
              </span>
              {m.status === "completed" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              {m.status === "current" && <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />}
            </div>

            <div>
              <div className="text-xs font-bold text-slate-100 leading-tight">{m.title}</div>
              <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-snug">{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
