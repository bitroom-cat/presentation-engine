"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";

interface StackPreset {
  stage: string;
  team: string;
  budget: string;
  sector: string;
  fe: string;
  be: string;
  db: string;
  infra: string;
  rationale: string;
}

const stackPresets: Record<"mvp" | "saas" | "ai", StackPreset> = {
  mvp: {
    stage: "Pre-Seed / MVP",
    team: "1–3 Engineers",
    budget: "Bootstrapped (Low)",
    sector: "B2C / Content Tool",
    fe: "Next.js / React + Tailwind CSS",
    be: "Django or FastAPI Monolith",
    db: "PostgreSQL (Managed Free Tier)",
    infra: "Vercel + Render / Single Linux VPS",
    rationale: "Maximizes shipping speed for a small team with zero microservice overhead, low monthly cloud burn, and fast iteration."
  },
  saas: {
    stage: "Seed / Growth",
    team: "5–12 Engineers",
    budget: "Funded (Moderate)",
    sector: "Multi-Tenant B2B SaaS",
    fe: "Next.js 14 (TypeScript) + Design System",
    be: "Django REST / DRF + Celery Workers",
    db: "PostgreSQL (ACID + Tenant Indexes) + Redis",
    infra: "Linux + Nginx + Gunicorn + Cloudflare WAF",
    rationale: "Balances rapid product velocity with strict multi-tenant RBAC isolation, async background jobs, and hardened edge security."
  },
  ai: {
    stage: "Series A / Scale",
    team: "10+ Fullstack & ML",
    budget: "High (Compute-Ready)",
    sector: "AI / Data-Intensive Platform",
    fe: "React / Next.js Streaming UI",
    be: "FastAPI Async Services + Python ML Pipeline",
    db: "PostgreSQL + Vector Store + Object Storage",
    infra: "Containerized Cloud VMs + Cloudflare Edge",
    rationale: "Native Python AI ecosystem enables seamless LLM/RAG orchestration, async streaming responses, and independent compute scaling."
  }
};

export const Slide06FounderTool: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  const [selectedPreset, setSelectedPreset] = useState<"mvp" | "saas" | "ai">("mvp");
  const p = stackPresets[selectedPreset];

  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
      <div className="flex items-end justify-between border-b border-mono-line pb-3.5">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-indigo font-semibold mb-1">Project 02 · Interactive Decision Engine (11–17 June 2026)</div>
          <h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Startup Tech Stack Recommender</h2>
        </div>
        <a className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-mono-indigo text-white font-mono text-[11.5px] font-semibold hover:bg-mono-forest transition" href="https://founder-web-tool.vercel.app/" rel="noopener noreferrer" target="_blank">
          <span>Live Tool: https://founder-web-tool.vercel.app/</span>
          <span>↗</span>
        </a>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 py-5 items-stretch">
        {/* Left Column (45% -> 5 cols): Clean 4-Step Vertical System Flow */}
        <div className="col-span-5 flex flex-col justify-between">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-muted mb-2">4-Stage Recommendation Architecture</div>
          <div className="space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-[4px] bg-mono-indigoTint text-mono-indigo font-mono text-[12px] font-bold flex items-center justify-center shrink-0">01</span>
              <div>
                <div className="text-[13.5px] font-bold text-mono-ink">Founder Input Form</div>
                <div className="text-[12px] text-mono-muted mt-0.5">Captures startup <strong>stage</strong>, <strong>team size</strong>, <strong>budget</strong>, <strong>sector</strong>, expected scale, and technical complexity.</div>
              </div>
            </div>
            <div className="flex justify-center -my-1.5"><span className="font-mono text-mono-indigo text-[12px]">↓</span></div>
            <div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-[4px] bg-mono-indigoTint text-mono-indigo font-mono text-[12px] font-bold flex items-center justify-center shrink-0">02</span>
              <div>
                <div className="text-[13.5px] font-bold text-mono-ink">Input Validation Layer</div>
                <div className="text-[12px] text-mono-muted mt-0.5">Enforces consistent form validation and constraint boundaries before evaluating stack weights.</div>
              </div>
            </div>
            <div className="flex justify-center -my-1.5"><span className="font-mono text-mono-indigo text-[12px]">↓</span></div>
            <div className="bg-mono-indigoTint/50 border border-mono-indigo/40 rounded-[5px] p-3.5 flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-[4px] bg-mono-indigo text-white font-mono text-[12px] font-bold flex items-center justify-center shrink-0">03</span>
              <div>
                <div className="text-[13.5px] font-bold text-mono-indigo">Decoupled Rule-Based Engine</div>
                <div className="text-[12px] text-mono-ink mt-0.5">Constraint-to-stack mapping logic cleanly separated from the UI so scoring rules can be tested independently.</div>
              </div>
            </div>
            <div className="flex justify-center -my-1.5"><span className="font-mono text-mono-indigo text-[12px]">↓</span></div>
            <div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-start gap-3.5">
              <span className="w-7 h-7 rounded-[4px] bg-mono-pineTint text-mono-pine font-mono text-[12px] font-bold flex items-center justify-center shrink-0">04</span>
              <div>
                <div className="text-[13.5px] font-bold text-mono-ink">Tailored Architecture Blueprint</div>
                <div className="text-[12px] text-mono-muted mt-0.5">Programmatically outputs Frontend, Backend, Database, Hosting & Auth choices matched to runway.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (55% -> 7 cols): INTERACTIVE VIVA DEMO WIDGET */}
        <div className="col-span-7 bg-mono-card border border-mono-line rounded-[6px] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-mono-indigo font-bold">Interactive Viva Demo · Constraint-to-Stack Simulator</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">Click a preset</span>
            </div>

            {/* 3 Clickable Founder Preset Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                type="button"
                onClick={() => setSelectedPreset("mvp")}
                className={`px-3 py-2 rounded-[4px] border text-left transition cursor-pointer ${
                  selectedPreset === "mvp"
                    ? "bg-mono-indigo text-white border-mono-indigo shadow-sm"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-indigo/60"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-wider opacity-80">Preset 01</div>
                <div className="text-[12px] font-bold leading-tight mt-0.5">Bootstrapped MVP</div>
                <div className="text-[10.5px] opacity-80">Small Team</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPreset("saas")}
                className={`px-3 py-2 rounded-[4px] border text-left transition cursor-pointer ${
                  selectedPreset === "saas"
                    ? "bg-mono-indigo text-white border-mono-indigo shadow-sm"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-indigo/60"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-wider opacity-80">Preset 02</div>
                <div className="text-[12px] font-bold leading-tight mt-0.5">Seed SaaS</div>
                <div className="text-[10.5px] opacity-80">Growth Budget</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPreset("ai")}
                className={`px-3 py-2 rounded-[4px] border text-left transition cursor-pointer ${
                  selectedPreset === "ai"
                    ? "bg-mono-indigo text-white border-mono-indigo shadow-sm"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-indigo/60"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-wider opacity-80">Preset 03</div>
                <div className="text-[12px] font-bold leading-tight mt-0.5">AI / Data-Heavy</div>
                <div className="text-[10.5px] opacity-80">High Complexity</div>
              </button>
            </div>

            {/* Displayed Input Constraints */}
            <div className="bg-mono-paper border border-mono-line rounded-[5px] p-3.5 mb-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-mono-muted mb-2">Evaluated Input Constraints</div>
              <div className="grid grid-cols-4 gap-2.5 text-[12px]">
                <div>
                  <div className="text-[10px] font-mono text-mono-muted">STAGE</div>
                  <div className="font-bold text-mono-ink mt-0.5">{p.stage}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-mono-muted">TEAM SIZE</div>
                  <div className="font-bold text-mono-ink mt-0.5">{p.team}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-mono-muted">BUDGET</div>
                  <div className="font-bold text-mono-ink mt-0.5">{p.budget}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-mono-muted">SECTOR</div>
                  <div className="font-bold text-mono-ink mt-0.5">{p.sector}</div>
                </div>
              </div>
            </div>

            {/* Generated Architecture Blueprint */}
            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div className="bg-mono-indigoTint/45 border border-mono-indigo/25 rounded-[5px] p-3">
                <div className="font-mono text-[10px] uppercase text-mono-indigo font-bold">Frontend</div>
                <div className="text-[13px] font-bold text-mono-ink mt-0.5">{p.fe}</div>
              </div>
              <div className="bg-mono-indigoTint/45 border border-mono-indigo/25 rounded-[5px] p-3">
                <div className="font-mono text-[10px] uppercase text-mono-indigo font-bold">Backend / API</div>
                <div className="text-[13px] font-bold text-mono-ink mt-0.5">{p.be}</div>
              </div>
              <div className="bg-mono-pineTint/45 border border-mono-pine/25 rounded-[5px] p-3">
                <div className="font-mono text-[10px] uppercase text-mono-pine font-bold">Database</div>
                <div className="text-[13px] font-bold text-mono-ink mt-0.5">{p.db}</div>
              </div>
              <div className="bg-mono-pineTint/45 border border-mono-pine/25 rounded-[5px] p-3">
                <div className="font-mono text-[10px] uppercase text-mono-pine font-bold">Infra & Deploy</div>
                <div className="text-[13px] font-bold text-mono-ink mt-0.5">{p.infra}</div>
              </div>
            </div>

            {/* Rationale */}
            <div className="bg-mono-subtle/75 border-l-[3px] border-l-mono-indigo px-3.5 py-2.5 rounded-r-[4px]">
              <span className="font-mono text-[10px] uppercase font-bold text-mono-indigo">Engine Rationale: </span>
              <span className="text-[12.2px] text-mono-ink leading-snug">{p.rationale}</span>
            </div>
          </div>

          <div className="pt-2.5 mt-3 border-t border-mono-line text-[11px] font-mono text-mono-muted flex items-center justify-between">
            <span>Illustrative logic preview — visit founder-web-tool.vercel.app for full live tool.</span>
            <span className="text-mono-indigo font-semibold">Submitted 17 Jun</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
        <span>CSEE-713P · Satyam Sharma (23010603066)</span>
        <span>Project 02 · Startup Tech Stack Recommender</span>
      </div>
    </div>
  );
};
