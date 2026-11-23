import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide15Limitations: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-ochre font-semibold mb-1">Sections 5.9 &amp; 9.2 · Candid Audit &amp; Next Phase</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Current Limitations &amp; Future Engineering Roadmap</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">Scaling Beyond the 6-Week Build</span>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 py-5 items-stretch">
{/* Left Column (42% -> 5 cols): Honest Current Limitations */}
<div className="col-span-5 bg-mono-card border border-mono-line border-t-[4px] border-t-mono-ochre rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-ochre font-bold mb-3">Honest Current Limitations (Sec. 5.9)</div>
<div className="space-y-3.5 text-[13px]">
<div className="bg-mono-ochreTint/50 border border-mono-ochre/25 rounded-[5px] p-3.5">
<div className="font-bold text-mono-ink">Permanent Access Grants</div>
<div className="text-mono-muted text-[12px] mt-0.5">Permissions stay active until revoked manually; no automatic time-bound expiration yet.</div>
</div>
<div className="bg-mono-ochreTint/50 border border-mono-ochre/25 rounded-[5px] p-3.5">
<div className="font-bold text-mono-ink">Manual Log Triage</div>
<div className="text-mono-muted text-[12px] mt-0.5">Centralized logs require human inspection; automated AI anomaly/error triage is not yet wired.</div>
</div>
<div className="bg-mono-ochreTint/50 border border-mono-ochre/25 rounded-[5px] p-3.5">
<div className="font-bold text-mono-ink">Static Analytics Views</div>
<div className="text-mono-muted text-[12px] mt-0.5">Department analytics widgets are not yet connected to live real-time telemetry streams.</div>
</div>
<div className="bg-mono-ochreTint/50 border border-mono-ochre/25 rounded-[5px] p-3.5">
<div className="font-bold text-mono-ink">Audit &amp; Scale Documentation</div>
<div className="text-mono-muted text-[12px] mt-0.5">Security depends on periodic permission-group reviews and deeper large-scale system docs.</div>
</div>
</div>
</div>
</div>
{/* Right Column (58% -> 7 cols): 5-Step Deep Pine Future Roadmap */}
<div className="col-span-7 flex flex-col justify-between gap-3">
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-pine font-bold px-1">5-Step Future Evolution Roadmap (Sec. 9.2)</div>
<div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-center gap-4">
<div className="w-9 h-9 rounded-[4px] bg-mono-pine text-white font-mono text-[13px] font-bold flex items-center justify-center shrink-0">01</div>
<div>
<div className="text-[14px] font-bold text-mono-ink">AI-Driven Log Analysis &amp; Automated Error Triage</div>
<div className="text-[12.2px] text-mono-muted">Ingest centralized logs across all 4 properties to auto-classify exceptions and pinpoint root causes.</div>
</div>
</div>
<div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-center gap-4">
<div className="w-9 h-9 rounded-[4px] bg-mono-pine text-white font-mono text-[13px] font-bold flex items-center justify-center shrink-0">02</div>
<div>
<div className="text-[14px] font-bold text-mono-ink">Real-Time Department Analytics Widgets</div>
<div className="text-[12.2px] text-mono-muted">Connect dashboard KPIs directly to live Cloudflare / Plausible telemetry and database event streams.</div>
</div>
</div>
<div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-center gap-4">
<div className="w-9 h-9 rounded-[4px] bg-mono-pine text-white font-mono text-[13px] font-bold flex items-center justify-center shrink-0">03</div>
<div>
<div className="text-[14px] font-bold text-mono-ink">Time-Bound RBAC Provisioning (Auto-Expiry)</div>
<div className="text-[12.2px] text-mono-muted">Issue temporary staff grants with automatic TTL revocation for short-term event &amp; intern cohorts.</div>
</div>
</div>
<div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-center gap-4">
<div className="w-9 h-9 rounded-[4px] bg-mono-pine text-white font-mono text-[13px] font-bold flex items-center justify-center shrink-0">04</div>
<div>
<div className="text-[14px] font-bold text-mono-ink">Multi-Agent Operational Automation</div>
<div className="text-[12.2px] text-mono-muted">Explore multi-agent AI workflows for routine moderation, incident reporting, and SEO checks.</div>
</div>
</div>
<div className="bg-mono-card border border-mono-line rounded-[5px] p-3.5 flex items-center gap-4">
<div className="w-9 h-9 rounded-[4px] bg-mono-pine text-white font-mono text-[13px] font-bold flex items-center justify-center shrink-0">05</div>
<div>
<div className="text-[14px] font-bold text-mono-ink">Advanced Cloud Infrastructure &amp; Scale Docs</div>
<div className="text-[12.2px] text-mono-muted">Expand horizontal cloud deployment architecture and maintainer documentation for high-traffic scale.</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Limitations &amp; Future Engineering Scope</span>
</div>

    </div>
  );
};
