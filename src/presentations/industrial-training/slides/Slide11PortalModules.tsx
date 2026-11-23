import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide11PortalModules: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Project 03 · Production Modules (Appendix D)</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Multi-Site Portal Modules &amp; Operational Views</h2>
</div>
<span className="font-mono text-[11px] px-2.5 py-1 bg-mono-pineTint text-mono-pine rounded-[3px] font-semibold">Deployed Live · 22 July 2026</span>
</div>
{/* 2x2 Minimalist Architectural UI Wireframe Cards */}
<div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5 py-4">
{/* Module 1: Operations Dashboard */}
<div className="bg-mono-card border border-mono-line rounded-[6px] p-4 flex flex-col justify-between">
<div className="flex items-center justify-between pb-2 border-b border-mono-line">
<span className="text-[13.5px] font-bold text-mono-ink">01 · Operations Dashboard</span>
<span className="font-mono text-[10px] text-mono-copper">Figure D.1</span>
</div>
<div className="grid grid-cols-4 gap-2 my-2.5">
<div className="bg-mono-paper border border-mono-line border-t-2 border-t-mono-copper rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">APPLICANTS</div>
<div className="font-mono text-[15px] font-bold text-mono-copper">47</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">EVENTS</div>
<div className="font-mono text-[15px] font-bold text-mono-ink">6</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">WEBINARS</div>
<div className="font-mono text-[15px] font-bold text-mono-ink">1</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">CONTENT</div>
<div className="font-mono text-[15px] font-bold text-mono-ink">23</div>
</div>
</div>
<div className="grid grid-cols-12 gap-3 items-end flex-1">
<div className="col-span-6 bg-mono-paper border border-mono-line rounded p-2.5 h-full flex flex-col justify-between">
<div className="font-mono text-[9.5px] text-mono-muted flex justify-between"><span>Page views (7d)</span><span>114.2K</span></div>
<div className="flex items-end gap-1.5 h-12 pt-1">
<div className="flex-1 bg-mono-copper/75 rounded-t-[2px]" style={{ height: "55%" }}></div>
<div className="flex-1 bg-mono-copper/85 rounded-t-[2px]" style={{ height: "75%" }}></div>
<div className="flex-1 bg-mono-copper/75 rounded-t-[2px]" style={{ height: "65%" }}></div>
<div className="flex-1 bg-mono-copper rounded-t-[2px]" style={{ height: "95%" }}></div>
<div className="flex-1 bg-mono-copper/85 rounded-t-[2px]" style={{ height: "82%" }}></div>
<div className="flex-1 bg-mono-copper/65 rounded-t-[2px]" style={{ height: "50%" }}></div>
<div className="flex-1 bg-mono-copper/55 rounded-t-[2px]" style={{ height: "38%" }}></div>
</div>
</div>
<div className="col-span-6 bg-mono-paper border border-mono-line rounded p-2.5 h-full text-[10.5px] text-mono-muted space-y-1">
<div className="font-mono text-[9.5px] font-bold text-mono-ink">Recent Activity Stream</div>
<div>• New applicant → Frontend Eng.</div>
<div>• Delhi Salon: 67/80 registered</div>
<div>• Webinar: 234 registrations</div>
</div>
</div>
</div>
{/* Module 2: Traffic & Analytics */}
<div className="bg-mono-card border border-mono-line rounded-[6px] p-4 flex flex-col justify-between">
<div className="flex items-center justify-between pb-2 border-b border-mono-line">
<span className="text-[13.5px] font-bold text-mono-ink">02 · Traffic &amp; Analytics Module</span>
<span className="font-mono text-[10px] text-mono-indigo">Figure D.2</span>
</div>
<div className="flex items-center justify-between my-2 text-[10px] font-mono">
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded bg-mono-forest text-white">7d</span>
<span className="px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">30d</span>
<span className="px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">90d</span>
</div>
<span className="text-mono-muted">Views · Visitors · Sources</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-2.5">
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">VIEWS</div>
<div className="font-mono text-[13px] font-bold text-mono-ink">114.2K</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">VISITORS</div>
<div className="font-mono text-[13px] font-bold text-mono-ink">77.1K</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">AVG SESS.</div>
<div className="font-mono text-[13px] font-bold text-mono-pine">2m 44s</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2">
<div className="font-mono text-[9px] text-mono-muted">BOUNCE</div>
<div className="font-mono text-[13px] font-bold text-mono-ink">38%</div>
</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2.5 flex items-center justify-between text-[11px]">
<div className="w-1/2 pr-3 border-r border-mono-line">
<div className="font-mono text-[9.5px] text-mono-muted mb-1">TOP PAGES</div>
<div className="flex justify-between"><span>Home</span><span className="font-mono font-semibold">48.2K</span></div>
</div>
<div className="w-1/2 pl-3 space-y-1">
<div className="flex items-center justify-between text-[10.5px]"><span>Organic Search</span><span className="font-mono font-semibold text-mono-indigo">38%</span></div>
<div className="flex items-center justify-between text-[10.5px]"><span>Social Media</span><span className="font-mono font-semibold text-mono-copper">34%</span></div>
</div>
</div>
</div>
{/* Module 3: Events & Webinars Manager */}
<div className="bg-mono-card border border-mono-line rounded-[6px] p-4 flex flex-col justify-between">
<div className="flex items-center justify-between pb-2 border-b border-mono-line">
<span className="text-[13.5px] font-bold text-mono-ink">03 · Events &amp; Webinars Manager</span>
<span className="font-mono text-[10px] text-mono-pine">Figure D.3</span>
</div>
<div className="flex items-center justify-between my-2 text-[10px] font-mono">
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded bg-mono-forest text-white">City Events (7)</span>
<span className="px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">Webinars &amp; Workshops (11)</span>
</div>
<span className="px-2 py-0.5 rounded bg-mono-copperTint text-mono-copper font-bold">+ Add Event</span>
</div>
<div className="border border-mono-line rounded overflow-hidden text-[11px] flex-1">
<div className="grid grid-cols-12 bg-mono-subtle px-2.5 py-1.5 font-mono text-[9.5px] text-mono-muted">
<span className="col-span-5">EVENT</span><span className="col-span-3">SEATS</span><span className="col-span-2">STATUS</span><span className="col-span-2 text-right">CRUD</span>
</div>
<div className="divide-y divide-mono-line bg-mono-paper">
<div className="grid grid-cols-12 items-center px-2.5 py-2">
<span className="col-span-5 font-semibold truncate">Geopolitics Live: Delhi Salon</span>
<div className="col-span-3 pr-2">
<div className="font-mono text-[9.5px]">67/80</div>
<div className="h-1.5 bg-mono-line rounded-full overflow-hidden"><div className="h-full bg-mono-pine" style={{ width: "84%" }}></div></div>
</div>
<span className="col-span-2"><span className="px-1.5 py-0.5 bg-mono-pineTint text-mono-pine rounded text-[9.5px] font-mono">Upcoming</span></span>
<span className="col-span-2 text-right font-mono text-[9.5px] text-mono-muted">Edit·Clone</span>
</div>
<div className="grid grid-cols-12 items-center px-2.5 py-2">
<span className="col-span-5 font-semibold truncate">Newsroom Masterclass</span>
<div className="col-span-3 pr-2">
<div className="font-mono text-[9.5px]">12/40</div>
<div className="h-1.5 bg-mono-line rounded-full overflow-hidden"><div className="h-full bg-mono-copper" style={{ width: "30%" }}></div></div>
</div>
<span className="col-span-2"><span className="px-1.5 py-0.5 bg-mono-pineTint text-mono-pine rounded text-[9.5px] font-mono">Upcoming</span></span>
<span className="col-span-2 text-right font-mono text-[9.5px] text-mono-muted">Edit·Del</span>
</div>
</div>
</div>
</div>
{/* Module 4: Newsroom Content Manager */}
<div className="bg-mono-card border border-mono-line rounded-[6px] p-4 flex flex-col justify-between">
<div className="flex items-center justify-between pb-2 border-b border-mono-line">
<span className="text-[13.5px] font-bold text-mono-ink">04 · Newsroom Content Manager</span>
<span className="font-mono text-[10px] text-mono-ochre">Figure D.4</span>
</div>
<div className="flex items-center justify-between my-2 text-[10px] font-mono">
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded bg-mono-forest text-white">Featured Work (11)</span>
<span className="px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">Guests (12)</span>
<span className="px-2 py-0.5 rounded bg-mono-subtle text-mono-muted">Testimonials (2)</span>
</div>
<span className="px-2 py-0.5 rounded bg-mono-copperTint text-mono-copper font-bold">+ Add Item</span>
</div>
<div className="grid grid-cols-3 gap-2.5 flex-1">
<div className="bg-mono-paper border border-mono-line rounded p-2.5 flex flex-col justify-between">
<div>
<div className="h-7 bg-mono-subtle border border-mono-line rounded mb-1.5 flex items-center px-2 font-mono text-[9px] text-mono-muted">MEDIA ASSET</div>
<div className="font-mono text-[9px] text-mono-copper font-bold">TECHNOLOGY</div>
<div className="text-[11px] font-bold text-mono-ink leading-tight mt-0.5">AI Wars: New Project</div>
</div>
<div className="flex justify-between font-mono text-[9.5px] text-mono-muted pt-1.5 border-t border-mono-line"><span>Edit</span><span>↑ ↓ ×</span></div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2.5 flex flex-col justify-between">
<div>
<div className="h-7 bg-mono-subtle border border-mono-line rounded mb-1.5 flex items-center px-2 font-mono text-[9px] text-mono-muted">MEDIA ASSET</div>
<div className="font-mono text-[9px] text-mono-ochre font-bold">ECONOMY</div>
<div className="text-[11px] font-bold text-mono-ink leading-tight mt-0.5">Budget 2026 Analysis</div>
</div>
<div className="flex justify-between font-mono text-[9.5px] text-mono-muted pt-1.5 border-t border-mono-line"><span>Edit</span><span>↑ ↓ ×</span></div>
</div>
<div className="bg-mono-paper border border-mono-line rounded p-2.5 flex flex-col justify-between">
<div>
<div className="h-7 bg-mono-subtle border border-mono-line rounded mb-1.5 flex items-center px-2 font-mono text-[9px] text-mono-muted">MEDIA ASSET</div>
<div className="font-mono text-[9px] text-mono-indigo font-bold">GEOPOLITICS</div>
<div className="text-[11px] font-bold text-mono-ink leading-tight mt-0.5">India–EU FTA Era</div>
</div>
<div className="flex justify-between font-mono text-[9.5px] text-mono-muted pt-1.5 border-t border-mono-line"><span>Edit</span><span>↑ ↓ ×</span></div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>Deployed to production server on 22 July 2026 with full operating manual (23 July 2026)</span>
<span>Slide 11 · Operational Modules</span>
</div>

    </div>
  );
};
