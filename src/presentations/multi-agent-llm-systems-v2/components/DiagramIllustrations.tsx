"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  GitMerge, 
  GitCommit, 
  Scale, 
  Cpu, 
  Bot, 
  Activity, 
  CheckCircle2, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  Split,
  Database,
  Search,
  ShieldAlert,
  Users,
  FileText,
  Workflow,
  Wrench,
  CheckSquare
} from "lucide-react";

/**
 * College Crest for Government College Dharamshala / HPTU
 */
export function CollegeLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="56" r="48" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 3" />
      <circle cx="60" cy="56" r="42" fill="#0F172A" stroke="#0284C7" strokeWidth="2" />
      <path 
        d="M38 36 C38 36, 60 32, 60 32 C60 32, 82 36, 82 36 C82 58, 76 74, 60 82 C44 74, 38 58, 38 36 Z" 
        fill="#1E293B" 
        stroke="#38BDF8" 
        strokeWidth="2" 
      />
      <path d="M46 56 C53 53 58 55 60 58 C62 55 67 53 74 56 V67 C67 64 62 66 60 69 C58 66 53 64 46 67 Z" fill="#F8FAFC" />
      <line x1="60" y1="58" x2="60" y2="69" stroke="#1E293B" strokeWidth="1.5" />
      <path d="M57 40 L63 40 L61 50 L59 50 Z" fill="#F59E0B" />
      <path d="M60 33 C63 36 65 39 60 43 C55 39 57 36 60 33 Z" fill="#EF4444" />
      <path d="M20 95 L30 88 L90 88 L100 95 L92 101 L60 97 L28 101 Z" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="60" y="95" fill="#FAF9F5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        विद्या परं भूषणम्
      </text>
    </svg>
  );
}

/**
 * MASTERPIECE FULL ARCHITECTURE (Slide 12):
 * Displays SAS and MAS pipelines on a single screen without clipping:
 * - Master Ingestion & Router
 * - Full Single-Agent Pipeline (SAS)
 * - Full Multi-Agent Pipeline (MAS) with Agent Git Environment
 * - LLM-as-Judge with Master Judge + Smaller Juror LLMs
 * - Evolution Council with Bench of LLMs + Feedback Loop
 */
export function FullSystemPipelineDiagram({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<"all" | "sas" | "mas" | "judge" | "council">("all");

  return (
    <div className={`p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      {/* Header with Mode Filters */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Fig. 1: End-to-End Agentic Orchestration, Memory &amp; Arbitration Architecture
          </h4>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px] font-mono">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-2 py-0.5 rounded transition-all ${activeTab === "all" ? "bg-cyan-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
          >
            All Systems
          </button>
          <button 
            onClick={() => setActiveTab("sas")}
            className={`px-2 py-0.5 rounded transition-all ${activeTab === "sas" ? "bg-amber-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
          >
            SAS Pipeline
          </button>
          <button 
            onClick={() => setActiveTab("mas")}
            className={`px-2 py-0.5 rounded transition-all ${activeTab === "mas" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
          >
            MAS Git Swarm
          </button>
          <button 
            onClick={() => setActiveTab("judge")}
            className={`px-2 py-0.5 rounded transition-all ${activeTab === "judge" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
          >
            Master Judge
          </button>
          <button 
            onClick={() => setActiveTab("council")}
            className={`px-2 py-0.5 rounded transition-all ${activeTab === "council" ? "bg-rose-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
          >
            Evolution Council
          </button>
        </div>
      </div>

      {/* Main Architecture Canvas (Exact 16:9 Viewport Fit) */}
      <div className="my-2 bg-[#080b12] rounded-xl p-3 border border-slate-800/90 relative overflow-hidden">
        <svg className="w-full h-[360px]" viewBox="0 0 1000 370">
          <defs>
            {/* Glow filters & Gradients */}
            <linearGradient id="gradRouter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="gradSAS" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="gradGitEnv" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="gradMasterJudge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
            <linearGradient id="gradCouncilBench" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9F1239" />
            </linearGradient>
            <filter id="neonCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38BDF8" floodOpacity="0.4" />
            </filter>
            <filter id="neonPurple" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#C084FC" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* ----------------- DATA BUSSES & CONNECTORS ----------------- */}
          {/* User Prompt -> Master Router */}
          <path d="M 90 195 L 135 195" stroke="#64748B" strokeWidth="2.5" strokeDasharray="4 2" />

          {/* Master Router -> SAS (Upper Branch) */}
          <path d="M 215 170 L 250 85 L 290 85" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />
          
          {/* Master Router -> MAS (Lower Branch) */}
          <path d="M 215 220 L 250 250 L 285 250" stroke="#38BDF8" strokeWidth="2.5" fill="none" />

          {/* SAS Pipeline Internal Flow */}
          <path d="M 390 85 L 430 85" stroke="#F59E0B" strokeWidth="2" />
          <path d="M 525 85 L 565 85" stroke="#F59E0B" strokeWidth="2" />
          <path d="M 660 85 L 890 85 L 890 180" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 2" fill="none" />

          {/* MAS Decomposition -> Agent Git Environment */}
          <path d="M 375 250 L 415 250" stroke="#38BDF8" strokeWidth="2.5" />

          {/* Agent Git Environment -> Merge Point */}
          <path d="M 605 250 L 645 250" stroke="#38BDF8" strokeWidth="2.5" />

          {/* Merge Point -> Clean Result (Main Branch) */}
          <path d="M 685 250 L 870 250 L 890 220" stroke="#10B981" strokeWidth="3" fill="none" />

          {/* Merge Point -> LLM-as-Judge (Conflict Detected) */}
          <path d="M 665 230 L 665 190 L 705 190" stroke="#C084FC" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />

          {/* LLM-as-Judge -> Clean Result (Main Branch) */}
          <path d="M 835 190 L 870 190" stroke="#34D399" strokeWidth="2.5" />

          {/* LLM-as-Judge -> Audit Logs -> Evolution Council */}
          <path d="M 770 215 L 770 295" stroke="#FB7185" strokeWidth="2" strokeDasharray="4 2" />

          {/* Evolution Council -> Feedback loop into Agent Git Environment */}
          <path d="M 705 320 L 510 320 L 510 285" stroke="#F43F5E" strokeWidth="2" strokeDasharray="5 3" fill="none" />

          {/* ----------------- 1. USER PROMPT & MASTER ROUTER ----------------- */}
          {/* User Prompt Box */}
          <g className="cursor-pointer">
            <rect x="15" y="170" width="75" height="50" rx="8" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            <text x="52" y="192" fill="#F8FAFC" fontSize="9" fontWeight="bold" textAnchor="middle">User Task</text>
            <text x="52" y="206" fill="#94A3B8" fontSize="7.5" textAnchor="middle">Prompt Ingestion</text>
          </g>

          {/* Master Agent (Graph Topology & Router) */}
          <g className="cursor-pointer">
            <polygon points="140,195 185,160 230,195 185,230" fill="url(#gradRouter)" stroke="#A5B4FC" strokeWidth="2" filter="url(#neonCyan)" />
            <text x="185" y="191" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">Master Router</text>
            <text x="185" y="203" fill="#E0E7FF" fontSize="7.5" fontStyle="italic" textAnchor="middle">ρ(G) vs τ_seq</text>
          </g>

          {/* ----------------- 2. COMPLETE SINGLE-AGENT (SAS) PIPELINE ----------------- */}
          {/* SAS Pipeline Surrounding Box */}
          <rect 
            x="280" y="50" width="400" height="70" rx="10" 
            fill="#1E1910" stroke="#F59E0B" strokeWidth={activeTab === "sas" ? 2.5 : 1} strokeDasharray="4 3" 
            opacity={activeTab === "all" || activeTab === "sas" ? 1 : 0.3}
          />
          <text x="295" y="65" fill="#FBBF24" fontSize="8" fontWeight="bold" fontFamily="monospace">SAS PIPELINE (Sequential Mode: ρ &lt; τ)</text>

          {/* SAS Sub-stage 1: Context Memory */}
          <g opacity={activeTab === "all" || activeTab === "sas" ? 1 : 0.3}>
            <rect x="295" y="70" width="95" height="36" rx="6" fill="#292524" stroke="#F59E0B" strokeWidth="1.2" />
            <text x="342" y="85" fill="#FDE68A" fontSize="7.8" fontWeight="bold" textAnchor="middle">1. Rolling Context</text>
            <text x="342" y="97" fill="#A8A29E" fontSize="6.8" textAnchor="middle">Sequential Buffer</text>
          </g>

          {/* SAS Sub-stage 2: Vector RAG */}
          <g opacity={activeTab === "all" || activeTab === "sas" ? 1 : 0.3}>
            <rect x="430" y="70" width="95" height="36" rx="6" fill="#292524" stroke="#F59E0B" strokeWidth="1.2" />
            <text x="477" y="85" fill="#FDE68A" fontSize="7.8" fontWeight="bold" textAnchor="middle">2. Vector RAG</text>
            <text x="477" y="97" fill="#A8A29E" fontSize="6.8" textAnchor="middle">ChromaDB Lookup</text>
          </g>

          {/* SAS Sub-stage 3: LLM Execution */}
          <g opacity={activeTab === "all" || activeTab === "sas" ? 1 : 0.3}>
            <rect x="565" y="70" width="95" height="36" rx="6" fill="#78350F" stroke="#FBBF24" strokeWidth="1.5" />
            <text x="612" y="85" fill="#FFFBEB" fontSize="8" fontWeight="bold" textAnchor="middle">3. Single Agent</text>
            <text x="612" y="97" fill="#FEF3C7" fontSize="6.8" textAnchor="middle">Zero-overhead math</text>
          </g>

          {/* ----------------- 3. MULTI-AGENT TASK DECOMPOSITION ----------------- */}
          <g opacity={activeTab === "all" || activeTab === "mas" ? 1 : 0.3}>
            <rect x="285" y="228" width="90" height="44" rx="8" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="330" y="247" fill="#E0F2FE" fontSize="8" fontWeight="bold" textAnchor="middle">Task Router</text>
            <text x="330" y="260" fill="#7DD3FC" fontSize="7" textAnchor="middle">Decomposition G(V,E)</text>
          </g>

          {/* ----------------- 4. AGENT GIT ENVIRONMENT (BRANCHED SWARM) ----------------- */}
          <g opacity={activeTab === "all" || activeTab === "mas" ? 1 : 0.3}>
            {/* Outer Box */}
            <rect x="415" y="165" width="190" height="120" rx="10" fill="#03254C" stroke="#38BDF8" strokeWidth="1.8" />
            <text x="510" y="180" fill="#38BDF8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
              AGENT GIT ENVIRONMENT
            </text>
            <text x="510" y="191" fill="#94A3B8" fontSize="7" textAnchor="middle">
              Isolated Git Branches • Bi(j) = f_Ai(Bi(j-1), Ii(j))
            </text>

            {/* Sub-Branch 1: Planner Agent */}
            <rect x="425" y="200" width="80" height="24" rx="5" fill="#082F49" stroke="#0284C7" strokeWidth="1" />
            <circle cx="433" cy="212" r="3" fill="#38BDF8" />
            <text x="468" y="215" fill="#E0F2FE" fontSize="7" fontWeight="bold" textAnchor="middle">Branch A1 (Plan)</text>

            {/* Sub-Branch 2: Tool Runner Agent */}
            <rect x="515" y="200" width="80" height="24" rx="5" fill="#082F49" stroke="#0284C7" strokeWidth="1" />
            <circle cx="523" cy="212" r="3" fill="#38BDF8" />
            <text x="558" y="215" fill="#E0F2FE" fontSize="7" fontWeight="bold" textAnchor="middle">Branch A2 (Tool)</text>

            {/* Sub-Branch 3: Coder Agent */}
            <rect x="425" y="232" width="80" height="24" rx="5" fill="#082F49" stroke="#0284C7" strokeWidth="1" />
            <circle cx="433" cy="244" r="3" fill="#38BDF8" />
            <text x="468" y="247" fill="#E0F2FE" fontSize="7" fontWeight="bold" textAnchor="middle">Branch A3 (Code)</text>

            {/* Sub-Branch k: Reviewer Agent */}
            <rect x="515" y="232" width="80" height="24" rx="5" fill="#082F49" stroke="#0284C7" strokeWidth="1" />
            <circle cx="523" cy="244" r="3" fill="#38BDF8" />
            <text x="558" y="247" fill="#E0F2FE" fontSize="7" fontWeight="bold" textAnchor="middle">Branch Ak (Verify)</text>

            {/* Rollback Protection Pill */}
            <rect x="435" y="263" width="150" height="15" rx="4" fill="#0F172A" stroke="#0284C7" strokeWidth="0.8" />
            <text x="510" y="274" fill="#38BDF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">
              ↺ Atomic Rollback via git reset
            </text>
          </g>

          {/* ----------------- 5. MERGE POINT & CONFLICT CHECK ----------------- */}
          <g>
            <circle cx="665" cy="250" r="18" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <text x="665" y="248" fill="#38BDF8" fontSize="7" fontWeight="bold" textAnchor="middle">Git</text>
            <text x="665" y="258" fill="#94A3B8" fontSize="6.2" textAnchor="middle">Merge?</text>
          </g>

          {/* ----------------- 6. MASTER JUDGE + JUROR LLMS (USER REQUIREMENT) ----------------- */}
          <g opacity={activeTab === "all" || activeTab === "judge" ? 1 : 0.3}>
            {/* Judge Enclosure */}
            <rect x="705" y="135" width="130" height="100" rx="10" fill="#2E1065" stroke="#C084FC" strokeWidth="1.8" filter="url(#neonPurple)" />
            <text x="770" y="150" fill="#E9D5FF" fontSize="7.8" fontWeight="bold" textAnchor="middle">
              ARBITRATION PANEL
            </text>

            {/* Small Juror LLM 1 (Left): Fact Checker */}
            <rect x="712" y="160" width="34" height="22" rx="4" fill="#3B0764" stroke="#A855F7" strokeWidth="1" />
            <text x="729" y="171" fill="#F3E8FF" fontSize="5.5" fontWeight="bold" textAnchor="middle">Juror 1</text>
            <text x="729" y="179" fill="#D8B4FE" fontSize="5" textAnchor="middle">Facts</text>

            {/* CENTRAL MASTER JUDGE LLM */}
            <rect x="750" y="156" width="40" height="32" rx="5" fill="url(#gradMasterJudge)" stroke="#F3E8FF" strokeWidth="1.5" />
            <text x="770" y="171" fill="#FFFFFF" fontSize="6.8" fontWeight="bold" textAnchor="middle">MASTER</text>
            <text x="770" y="180" fill="#F5D0FE" fontSize="6.2" fontWeight="bold" textAnchor="middle">JUDGE</text>

            {/* Small Juror LLM 2 (Right): Logic Validator */}
            <rect x="794" y="160" width="34" height="22" rx="4" fill="#3B0764" stroke="#A855F7" strokeWidth="1" />
            <text x="811" y="171" fill="#F3E8FF" fontSize="5.5" fontWeight="bold" textAnchor="middle">Juror 2</text>
            <text x="811" y="179" fill="#D8B4FE" fontSize="5" textAnchor="middle">Logic</text>

            {/* Arrows from Jurors to Master Judge */}
            <path d="M 746 171 L 750 171" stroke="#F3E8FF" strokeWidth="1" />
            <path d="M 794 171 L 790 171" stroke="#F3E8FF" strokeWidth="1" />

            {/* Sub-label: Resolved State */}
            <rect x="715" y="200" width="110" height="15" rx="3" fill="#1E1035" stroke="#A855F7" strokeWidth="0.8" />
            <text x="770" y="210" fill="#E9D5FF" fontSize="6.2" textAnchor="middle">
              Semantic Correctness Oracle
            </text>
          </g>

          {/* ----------------- 7. EVOLUTION COUNCIL BENCH (USER REQUIREMENT) ----------------- */}
          <g opacity={activeTab === "all" || activeTab === "council" ? 1 : 0.3}>
            {/* Council Enclosure */}
            <rect x="705" y="295" width="165" height="65" rx="9" fill="#3B0A1E" stroke="#FB7185" strokeWidth="1.5" />
            <text x="787" y="309" fill="#FDA4AF" fontSize="7.8" fontWeight="bold" textAnchor="middle">
              EVOLUTION COUNCIL BENCH
            </text>

            {/* Bench Member LLM 1: Root Cause Tracer */}
            <rect x="715" y="316" width="45" height="20" rx="4" fill="url(#gradCouncilBench)" stroke="#FDA4AF" strokeWidth="1" />
            <text x="737" y="329" fill="#FFF1F2" fontSize="5.5" fontWeight="bold" textAnchor="middle">Causal Tracer</text>

            {/* Bench Member LLM 2: Prompt Tuner */}
            <rect x="765" y="316" width="45" height="20" rx="4" fill="url(#gradCouncilBench)" stroke="#FDA4AF" strokeWidth="1" />
            <text x="787" y="329" fill="#FFF1F2" fontSize="5.5" fontWeight="bold" textAnchor="middle">Prompt Tuner</text>

            {/* Bench Member LLM 3: Tool Refiner */}
            <rect x="815" y="316" width="45" height="20" rx="4" fill="url(#gradCouncilBench)" stroke="#FDA4AF" strokeWidth="1" />
            <text x="837" y="329" fill="#FFF1F2" fontSize="5.5" fontWeight="bold" textAnchor="middle">Tool Refiner</text>

            {/* Feedback arrow label */}
            <text x="610" y="333" fill="#FB7185" fontSize="6.8" fontFamily="monospace" textAnchor="middle">
              ← Textual Parameter Gradients &amp; Code Improvements
            </text>
          </g>

          {/* ----------------- 8. CANONICAL MAIN BRANCH RESULT ----------------- */}
          <g>
            <rect x="870" y="180" width="115" height="55" rx="8" fill="#064E3B" stroke="#34D399" strokeWidth="2" filter="url(#neonCyan)" />
            <text x="927" y="202" fill="#D1FAE5" fontSize="9" fontWeight="bold" textAnchor="middle">FINAL RESULT</text>
            <text x="927" y="214" fill="#A7F3D0" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Main Branch (Mt+1)</text>
            <text x="927" y="226" fill="#6EE7B7" fontSize="6.8" textAnchor="middle">Zero-Conflict Verified</text>
          </g>
        </svg>
      </div>

      {/* Dynamic Caption Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span><strong>SAS Pipeline:</strong> Strictly sequential tasks avoid -70% coordination degradation.</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span><strong>Agent Git Swarm:</strong> Isolated branches capture +81% parallel speedup.</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
          <span><strong>Master Judge:</strong> Resolves semantic merge conflicts with side jurors.</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span><strong>Council Bench:</strong> Analyzes audit logs to permanently evolve agent code.</span>
        </span>
      </div>
    </div>
  );
}

/**
 * MASTER JUDGE ARBITRATION PANEL (Slide 15):
 * Zoomed-in visual showing Master Judge in the center flanked by Juror LLMs
 */
export function MasterJudgePanel({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-purple-400" />
          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Semantic Arbitration Engine: Central Master Judge &amp; Juror Swarm
          </h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
          Open-Domain Correctness Oracle
        </span>
      </div>

      <div className="my-3 bg-slate-950/80 rounded-xl p-4 border border-slate-800">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Left Jurors (3 cols) */}
          <div className="col-span-3 space-y-2.5">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Juror 1: Facts</div>
                <div className="text-[9.5px] text-slate-400">Verifies source citations</div>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Juror 2: Logic</div>
                <div className="text-[9.5px] text-slate-400">Checks premise validity</div>
              </div>
            </div>
          </div>

          {/* Flow Arrow Left */}
          <div className="col-span-1 flex justify-center text-purple-400 font-bold text-lg">
            ➔
          </div>

          {/* Central Master Judge LLM (4 cols) */}
          <div className="col-span-4 p-4 rounded-xl bg-gradient-to-b from-purple-900/60 to-purple-950/80 border-2 border-purple-400 text-center shadow-lg shadow-purple-950/80 space-y-2">
            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-md">
              <Scale className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              MASTER JUDGE LLM
            </div>
            <div className="text-[10.5px] text-purple-200 leading-tight">
              Aggregates juror scores, resolves semantic contradictions, and commits verified canonical state to main.
            </div>
            <div className="text-[9.5px] font-mono text-cyan-300 bg-purple-950/80 py-1 px-2 rounded border border-purple-800">
              Output: Resolved Commit + Audit Log
            </div>
          </div>

          {/* Flow Arrow Right */}
          <div className="col-span-1 flex justify-center text-purple-400 font-bold text-lg">
            ➔
          </div>

          {/* Right Jurors (3 cols) */}
          <div className="col-span-3 space-y-2.5">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Juror 3: Format</div>
                <div className="text-[9.5px] text-slate-400">Validates schema &amp; types</div>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-white">Juror 4: Safety</div>
                <div className="text-[9.5px] text-slate-400">Detects hallucinated code</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[11px] font-mono text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
        <span>Competing branch outputs are <strong>never auto-accepted</strong>; every divergence requires unanimous master synthesis.</span>
        <span className="text-purple-400 font-bold">100% Provenance Recorded</span>
      </div>
    </div>
  );
}

/**
 * EVOLUTION COUNCIL BENCH (Slide 16):
 * Zoomed-in visual showing the Council Bench analyzing audit logs and updating agent code
 */
export function EvolutionCouncilBench({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Evolution Council: Multi-Agent Fault Attribution &amp; Closed-Loop Self-Evolution
          </h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
          Supervisory Governance
        </span>
      </div>

      <div className="my-3 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-3">
        {/* Council Chamber Round-Table Bench */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/60 text-center space-y-1">
            <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto text-xs font-bold">
              1
            </div>
            <div className="text-xs font-bold text-white">Causal Fault Tracer</div>
            <div className="text-[10px] text-slate-300">
              Reads audit logs to isolate the root failure prompt from downstream symptoms.
            </div>
          </div>

          <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/60 text-center space-y-1">
            <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto text-xs font-bold">
              2
            </div>
            <div className="text-xs font-bold text-white">Prompt &amp; Policy Tuner</div>
            <div className="text-[10px] text-slate-300">
              Applies textual gradients (TPGO) to refine instructions and prevent recurrence.
            </div>
          </div>

          <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/60 text-center space-y-1">
            <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto text-xs font-bold">
              3
            </div>
            <div className="text-xs font-bold text-white">Tool &amp; Memory Refiner</div>
            <div className="text-[10px] text-slate-300">
              Patches tool schema definitions and prunes outdated learned memories.
            </div>
          </div>
        </div>

        {/* Feedback Channel */}
        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-rose-300">
            <RotateCcw className="w-4 h-4 text-rose-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Closed-Loop Feedback ➔ Updates Agent Git Environment System Prompts</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
            Permanent Swarm Evolution
          </span>
        </div>
      </div>

      <div className="text-[11px] font-mono text-slate-400">
        Council members operate independently of working agents to avoid contextual confirmation bias.
      </div>
    </div>
  );
}

/**
 * AGENT GIT ENVIRONMENT VISUAL (Slide 14):
 * Branch isolation, commit history, and atomic rollback
 */
export function AgentGitEnvironmentVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Agent Git Environment: Memory Isolation &amp; Rollback Mechanics
          </h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
          Hermetic Workspaces
        </span>
      </div>

      <div className="my-3 bg-slate-950/80 rounded-xl p-4 border border-slate-800">
        <svg className="w-full h-44" viewBox="0 0 680 160">
          {/* Main Branch Line */}
          <line x1="30" y1="80" x2="650" y2="80" stroke="#10B981" strokeWidth="3" />
          <text x="35" y="70" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="monospace">main (Mt)</text>
          
          {/* Main Commits */}
          <circle cx="50" cy="80" r="5" fill="#10B981" />
          <circle cx="150" cy="80" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="150" y="97" fill="#6EE7B7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Commit M0</text>

          {/* Branch A1 (Up) */}
          <path d="M 150 80 C 180 80, 200 35, 240 35 L 480 35" stroke="#38BDF8" strokeWidth="2.2" fill="none" />
          <circle cx="280" cy="35" r="4.5" fill="#0284C7" />
          <circle cx="380" cy="35" r="4.5" fill="#0284C7" />
          <circle cx="480" cy="35" r="5.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
          <text x="300" y="25" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">Branch A1 (Planner): B1(j)</text>

          {/* Branch A2 (Down) */}
          <path d="M 150 80 C 180 80, 200 125, 240 125 L 480 125" stroke="#F59E0B" strokeWidth="2.2" fill="none" />
          <circle cx="280" cy="125" r="4.5" fill="#D97706" />
          <circle cx="380" cy="125" r="4.5" fill="#D97706" />
          <circle cx="480" cy="125" r="5.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.2" />
          <text x="300" y="140" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="monospace">Branch A2 (Coder): B2(j)</text>

          {/* Merge Lines into Judge & Main */}
          <path d="M 480 35 C 520 35, 540 80, 580 80" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" fill="none" />
          <path d="M 480 125 C 520 125, 540 80, 580 80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 2" fill="none" />
          
          {/* Resolved Commit M1 */}
          <circle cx="580" cy="80" r="7" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="2" />
          <text x="580" y="100" fill="#DDD6FE" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">Resolved M1</text>
          <text x="580" y="110" fill="#A78BFA" fontSize="6.8" fontFamily="monospace" textAnchor="middle">(Judge Arbiter)</text>

          {/* Rollback Warning Annotation */}
          <rect x="360" y="55" width="105" height="18" rx="4" fill="#881337" stroke="#FDA4AF" strokeWidth="0.8" />
          <text x="412" y="67" fill="#FFE4E6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">↺ Rollback on Error</text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
        <div className="p-2 rounded bg-slate-950 border border-slate-800">
          <strong className="text-cyan-400">Context Isolation:</strong> Agent errors remain confined to its branch $B_i(j)$; cannot corrupt peers.
        </div>
        <div className="p-2 rounded bg-slate-950 border border-slate-800">
          <strong className="text-emerald-400">Zero-Loss Rollback:</strong> Reverts failed exploration via <code className="text-white">git reset</code> back to verified parent $M_0$.
        </div>
      </div>
    </div>
  );
}

/**
 * Fig. 2 MAST Chart & Fig. 3 Scaling Visuals
 */
export { MastFailureChart, ScalingEffectChart, DynamicRoutingVisualizer, ProjectTimelineVisual } from "../../multi-agent-llm-systems/components/MultiAgentIllustrations";
