import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide14Outcomes: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-pine font-semibold mb-1">Chapter 8 &amp; Appendix C · Verified Impact</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Internship Outcomes, Learning &amp; Performance Evaluation</h2>
</div>
<span className="font-mono text-[11px] px-2.5 py-1 bg-mono-pineTint text-mono-pine rounded-[3px] font-semibold">Rated: Outstanding</span>
</div>
<div className="flex-1 flex flex-col justify-between py-5 gap-5">
{/* Top Hero Metric Strip (3 Refined Cards) */}
<div className="grid grid-cols-3 gap-5">
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-pine rounded-[6px] p-5">
<div className="font-mono text-[38px] font-extrabold text-mono-pine leading-none">49 <span className="text-[20px] text-mono-muted font-medium">/ 50</span></div>
<div className="text-[14px] font-bold text-mono-ink mt-2">Mentor Evaluation Score</div>
<div className="text-[12px] text-mono-muted mt-0.5">Rated <strong>Outstanding</strong> by Tech Lead Mr. Ashutosh Patra (Appendix C)</div>
</div>
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-copper rounded-[6px] p-5">
<div className="font-mono text-[38px] font-extrabold text-mono-copper leading-none">5</div>
<div className="text-[14px] font-bold text-mono-ink mt-2">Completed Deliverables</div>
<div className="text-[12px] text-mono-muted mt-0.5">3 production software builds + Cloudflare security research + Technical SEO</div>
</div>
<div className="bg-mono-card border border-mono-line border-t-[4px] border-t-mono-indigo rounded-[6px] p-5">
<div className="font-mono text-[38px] font-extrabold text-mono-indigo leading-none">4</div>
<div className="text-[14px] font-bold text-mono-ink mt-2">Web Properties Unified</div>
<div className="text-[12px] text-mono-muted mt-0.5">Consolidated into one role-scoped, audited production dashboard</div>
</div>
</div>
{/* Bottom 2-Column Learning Grid */}
<div className="grid grid-cols-2 gap-6 flex-1">
<div className="bg-mono-card border border-mono-line rounded-[6px] p-5 flex flex-col justify-between">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-pine font-bold mb-3">Technical &amp; Systems Mastery</div>
<ul className="space-y-2.5 text-[13px] text-mono-ink">
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>Django Internals &amp; MVT:</strong> Custom <span className="font-mono text-[12px]">ModelAdmin</span> overrides, migrations, auth groups &amp; API flows.</span></li>
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>DB-Layer Data Isolation:</strong> ACID PostgreSQL schemas and site-aware custom QuerySet managers.</span></li>
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>Production DevOps &amp; Security:</strong> Linux, Nginx, Gunicorn, Let’s Encrypt SSL, Cloudflare WAF &amp; Turnstile.</span></li>
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>Technical SEO &amp; Rule Logic:</strong> JSON-LD, OpenGraph, XML sitemaps &amp; decoupled recommendation rules.</span></li>
</ul>
</div>
</div>
<div className="bg-mono-card border border-mono-line rounded-[6px] p-5 flex flex-col justify-between">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-copper font-bold mb-3">Professional Engineering Habits</div>
<ul className="space-y-2.5 text-[13px] text-mono-ink">
<li className="flex gap-2.5"><span className="text-mono-copper font-bold">▪</span><span><strong>Full SDLC Ownership:</strong> Carried real features from requirement planning to live server debugging.</span></li>
<li className="flex gap-2.5"><span className="text-mono-copper font-bold">▪</span><span><strong>Security-First Auditing:</strong> Dedicated token-handling and authorization audits prior to launch.</span></li>
<li className="flex gap-2.5"><span className="text-mono-copper font-bold">▪</span><span><strong>Documentation Discipline:</strong> Authored operating manuals, security reports &amp; daily signed logbooks.</span></li>
<li className="flex gap-2.5"><span className="text-mono-copper font-bold">▪</span><span><strong>Code Walk-Throughs:</strong> Defended architecture decisions clearly during mentor code reviews.</span></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Mentor Remark: “Delivered exceptional value to our team.”</span>
</div>

    </div>
  );
};
