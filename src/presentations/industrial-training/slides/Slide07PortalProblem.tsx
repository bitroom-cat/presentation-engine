import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide07PortalProblem: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Project 03 · Flagship Build (09–23 July 2026)</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Multi-Site Admin Portal: Problem &amp; Design Objectives</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">Chapter 5 · Sections 5.1–5.4</span>
</div>
<div className="flex-1 flex flex-col justify-between py-5 gap-5">
{/* Top Comparison Split: Dual Problem vs Scoped Solution */}
<div className="grid grid-cols-2 gap-6 flex-1">
{/* Left Card: Muted Crimson (Dual Operational Problem) */}
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-crimson rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-0.5 bg-mono-crimsonTint text-mono-crimson font-bold rounded-[3px]">Before · Risk &amp; Friction</span>
<span className="font-mono text-[11px] text-mono-crimson">4 Independent Properties</span>
</div>
<h3 className="text-[19px] font-bold text-mono-ink mb-4">Dual Operational Problem</h3>
<div className="space-y-4">
<div className="bg-mono-crimsonTint/45 border border-mono-crimson/20 rounded-[5px] p-4">
<div className="font-mono text-[11px] font-bold text-mono-crimson mb-1">01 · OPERATIONAL FRAGMENTATION</div>
<p className="text-[13px] text-mono-ink leading-relaxed">
                        Operating <strong>4 separate websites</strong> forced administrators to manage 4 isolated admin panels, duplicated credentials, and scattered user directories.
                      </p>
</div>
<div className="bg-mono-crimsonTint/45 border border-mono-crimson/20 rounded-[5px] p-4">
<div className="font-mono text-[11px] font-bold text-mono-crimson mb-1">02 · PRIVILEGE CREEP</div>
<p className="text-[13px] text-mono-ink leading-relaxed">
                        Granting standard staff global Django admin access exposed mission-critical marketing, events, and core IT databases to accidental edits or deletion.
                      </p>
</div>
</div>
</div>
</div>
{/* Right Card: Deep Pine (Single-Window Scoped Solution) */}
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-pine rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-0.5 bg-mono-pineTint text-mono-pine font-bold rounded-[3px]">After · Unified Governance</span>
<span className="font-mono text-[11px] text-mono-pine">Live Production · 22 Jul</span>
</div>
<h3 className="text-[19px] font-bold text-mono-ink mb-4">Single-Window Scoped Solution</h3>
<p className="text-[13.5px] text-mono-muted leading-relaxed mb-4">
                    A centralized <strong>Python / Django</strong> admin portal managing all 4 Tiesverse web properties from one secure interface—unified for leadership, yet strictly siloed for departmental teams.
                  </p>
<div className="bg-mono-pineTint/45 border border-mono-pine/25 rounded-[5px] p-4 space-y-2.5 text-[13px] text-mono-ink">
<div className="flex items-start gap-2.5">
<span className="text-mono-pine font-bold">✓</span>
<span><strong>Superuser View:</strong> Global governance, user provisioning, permission groups, and cross-site visibility.</span>
</div>
<div className="flex items-start gap-2.5">
<span className="text-mono-pine font-bold">✓</span>
<span><strong>Staff View:</strong> Sees <em>only</em> the modules and database records tagged with their assigned department/site.</span>
</div>
</div>
</div>
</div>
</div>
{/* Bottom 4 Objective Pillars */}
<div className="grid grid-cols-4 gap-4">
<div className="bg-mono-subtle border border-mono-line rounded-[5px] p-4">
<div className="font-mono text-[10.5px] font-bold text-mono-copper mb-1">PILLAR 01</div>
<div className="text-[13.5px] font-bold text-mono-ink">Unified 4-Site Control</div>
<div className="text-[12px] text-mono-muted mt-1">Single authentication &amp; integrated routes for Sites 1–4.</div>
</div>
<div className="bg-mono-subtle border border-mono-line rounded-[5px] p-4">
<div className="font-mono text-[10.5px] font-bold text-mono-copper mb-1">PILLAR 02</div>
<div className="text-[13.5px] font-bold text-mono-ink">Two-Tier RBAC</div>
<div className="text-[12px] text-mono-muted mt-1">Clear separation between global Superusers and scoped Staff.</div>
</div>
<div className="bg-mono-subtle border border-mono-line rounded-[5px] p-4">
<div className="font-mono text-[10.5px] font-bold text-mono-copper mb-1">PILLAR 03</div>
<div className="text-[13.5px] font-bold text-mono-ink">Data-Layer ORM Isolation</div>
<div className="text-[12px] text-mono-muted mt-1"><span className="font-mono text-[11px]">site_identifier</span> filtering prevents cross-site leakage.</div>
</div>
<div className="bg-mono-subtle border border-mono-line rounded-[5px] p-4">
<div className="font-mono text-[10.5px] font-bold text-mono-copper mb-1">PILLAR 04</div>
<div className="text-[13.5px] font-bold text-mono-ink">Audit Logging &amp; Review</div>
<div className="text-[12px] text-mono-muted mt-1">Centralized activity logs, token audit &amp; user manual.</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Project 03 · Problem &amp; Objectives</span>
</div>

    </div>
  );
};
