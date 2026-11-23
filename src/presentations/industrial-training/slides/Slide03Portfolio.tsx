import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide03Portfolio: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Section 02 · Engineering Deliverables</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Portfolio Overview: Three Core Engineering Projects</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">5 Total Deliverables · 3 Production Software Builds</span>
</div>
{/* 3 Large Architectural Cards */}
<div className="flex-1 grid grid-cols-3 gap-6 py-6 items-stretch">
{/* Card 01: Deep Pine */}
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-pine rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[28px] font-bold text-mono-pine leading-none">01</span>
<span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-[3px] bg-mono-pineTint text-mono-pine font-semibold">PRODUCTION BACKEND</span>
</div>
<h3 className="text-[18.5px] font-bold text-mono-ink leading-snug mb-2.5">
                  Original tiesverse.com &amp; Webinar Platform Backend
                </h3>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                  Full Linux production deployment, relational webinar schemas, registration APIs, edge bot mitigation, and end-to-end Technical SEO across both live public properties.
                </p>
<ul className="space-y-2 text-[12.5px] text-mono-ink border-t border-mono-line pt-3.5">
<li className="flex gap-2"><span className="text-mono-pine font-bold">→</span><span>Nginx reverse proxy, Gunicorn WSGI &amp; Let’s Encrypt SSL</span></li>
<li className="flex gap-2"><span className="text-mono-pine font-bold">→</span><span>Cloudflare WAF + Turnstile server-side validation</span></li>
<li className="flex gap-2"><span className="text-mono-pine font-bold">→</span><span>XML sitemaps, JSON-LD, OpenGraph &amp; GSC/GA</span></li>
</ul>
</div>
<div className="pt-4 mt-4 border-t border-mono-line flex flex-wrap gap-1.5 font-mono text-[10.5px]">
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Django</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">PostgreSQL</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Nginx</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Cloudflare</span>
</div>
</div>
{/* Card 02: Slate Indigo */}
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-indigo rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[28px] font-bold text-mono-indigo leading-none">02</span>
<span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-[3px] bg-mono-indigoTint text-mono-indigo font-semibold">DECISION ENGINE</span>
</div>
<h3 className="text-[18.5px] font-bold text-mono-ink leading-snug mb-2">
                  Startup Tech Stack Recommender
                </h3>
<a className="inline-flex items-center gap-1.5 font-mono text-[11.5px] px-2.5 py-1 mb-3 rounded-[4px] bg-mono-indigoTint text-mono-indigo border border-mono-indigo/30 hover:bg-mono-indigo hover:text-white transition" href="https://founder-web-tool.vercel.app/" rel="noopener noreferrer" target="_blank">
<span>founder-web-tool.vercel.app</span>
<span>↗</span>
</a>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                  Interactive web decision tool built for early-stage founders to translate project constraints into structured, production-sane software architecture blueprints.
                </p>
<ul className="space-y-2 text-[12.5px] text-mono-ink border-t border-mono-line pt-3.5">
<li className="flex gap-2"><span className="text-mono-indigo font-bold">→</span><span>Captures stage, team size, budget, sector &amp; scale</span></li>
<li className="flex gap-2"><span className="text-mono-indigo font-bold">→</span><span>Decoupled rule-based backend logic separated from UI</span></li>
<li className="flex gap-2"><span className="text-mono-indigo font-bold">→</span><span>Validated form inputs &amp; deterministic blueprint output</span></li>
</ul>
</div>
<div className="pt-4 mt-4 border-t border-mono-line flex flex-wrap gap-1.5 font-mono text-[10.5px]">
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Python</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Rule Engine</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Web UI</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Vercel</span>
</div>
</div>
{/* Card 03: Burnt Copper */}
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-copper rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[28px] font-bold text-mono-copper leading-none">03</span>
<span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-[3px] bg-mono-copperTint text-mono-copper font-semibold">FLAGSHIP PORTAL</span>
</div>
<h3 className="text-[18.5px] font-bold text-mono-ink leading-snug mb-2.5">
                  Multi-Site Admin Portal with Role-Based Access Control
                </h3>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                  Centralized single-window Django backend governing all <strong>4 Tiesverse web properties</strong> without operational fragmentation or cross-department privilege creep.
                </p>
<ul className="space-y-2 text-[12.5px] text-mono-ink border-t border-mono-line pt-3.5">
<li className="flex gap-2"><span className="text-mono-copper font-bold">→</span><span>Two-tier RBAC hierarchy: Superuser vs. Scoped Staff</span></li>
<li className="flex gap-2"><span className="text-mono-copper font-bold">→</span><span><span className="font-mono text-[11.5px]">site_identifier</span> abstract model &amp; custom ORM managers</span></li>
<li className="flex gap-2"><span className="text-mono-copper font-bold">→</span><span>Overridden <span className="font-mono text-[11.5px]">ModelAdmin</span> guards &amp; centralized logging</span></li>
</ul>
</div>
<div className="pt-4 mt-4 border-t border-mono-line flex flex-wrap gap-1.5 font-mono text-[10.5px]">
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Django MVT</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">RBAC</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">ORM Isolation</span>
<span className="px-2 py-0.5 bg-mono-subtle text-mono-ink rounded-[3px]">Audit Log</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Three Core Production Projects</span>
</div>

    </div>
  );
};
