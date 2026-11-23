import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide02Timeline: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Section 01 · Host Organisation &amp; Logbook</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Organisation Profile &amp; 6-Week Training Timeline</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">10 June – 25 July 2026</span>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 py-5 items-stretch">
{/* Left Column (38% -> ~5 cols): Tiesverse Foundation Profile */}
<div className="col-span-5 flex flex-col justify-between gap-4">
<div className="bg-mono-card border border-mono-line rounded-[6px] p-5 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider px-2.5 py-0.5 bg-mono-pineTint text-mono-pine rounded-[3px]">Host Organisation</span>
<span className="font-mono text-[11px] text-mono-muted">Est. 2023 · 90+ Members</span>
</div>
<h3 className="text-[19px] font-bold text-mono-ink mb-2">Tiesverse Foundation (TIES)</h3>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                    Youth-led <strong>Research, Media &amp; Technology (RMT)</strong> organisation based in <strong>Bhopal, Madhya Pradesh</strong>, building digital products and operating live web properties including <span className="font-mono text-mono-ink">tiesverse.com</span> and a dedicated Webinar platform.
                  </p>
<div className="border-t border-mono-line pt-3.5 space-y-2 text-[12.5px]">
<div className="flex justify-between">
<span className="text-mono-muted">Department</span>
<span className="font-semibold text-mono-ink">Tech Ties Engineering</span>
</div>
<div className="flex justify-between">
<span className="text-mono-muted">Role</span>
<span className="font-semibold text-mono-ink">Fullstack Dev &amp; AI Engineer Intern</span>
</div>
<div className="flex justify-between">
<span className="text-mono-muted">Industry Mentor</span>
<span className="font-semibold text-mono-ink">Mr. Ashutosh Patra (Tech Lead)</span>
</div>
<div className="flex justify-between">
<span className="text-mono-muted">Core Focus</span>
<span className="font-semibold text-mono-pine">Live Production Engineering</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-mono-line bg-mono-subtle/60 -mx-5 -mb-5 px-5 py-3 rounded-b-[6px]">
<p className="font-serif italic text-[13px] text-mono-ink leading-snug">
                    “Every assignment ended with a verified submission or live production deployment, tracked daily in a mentor-signed diary.”
                  </p>
</div>
</div>
</div>
{/* Right Column (62% -> 7 cols): 6-Week Gantt Progression Chart */}
<div className="col-span-7 bg-mono-card border border-mono-line rounded-[6px] p-5 flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[15px] font-bold text-mono-ink">Signed Internship Diary — 8-Phase Gantt Execution</h3>
<div className="flex items-center gap-3 font-mono text-[10px] text-mono-muted">
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-mono-indigo inline-block"></span>Tool</span>
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-mono-pine inline-block"></span>Backend/Sec</span>
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-mono-copper inline-block"></span>Portal</span>
</div>
</div>
{/* Week Headers */}
<div className="grid grid-cols-12 text-[10px] font-mono uppercase tracking-wider text-mono-muted border-b border-mono-line pb-1.5 mb-2">
<div className="col-span-5">Milestone &amp; Dates</div>
<div className="col-span-7 grid grid-cols-6 text-center">
<span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span><span>Wk 5</span><span>Wk 6</span>
</div>
</div>
{/* 8 Gantt Rows (46 total days: Jun 10 = 0% to Jul 25 = 100%) */}
<div className="space-y-2.5 flex-1 flex flex-col justify-center text-[12px]">
{/* 1. Jun 10 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-ink">01. Orientation &amp; Allotment</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jun 10</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-ochre" style={{ left: "0%", width: "4%" }}></div>
</div>
</div>
{/* 2. Jun 11–17 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-indigo">02. Startup Tech Stack Tool</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jun 11–17 · founder-web-tool</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-indigo" style={{ left: "3%", width: "15%" }}></div>
</div>
</div>
{/* 3. Jun 18–23 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-ink">03. CAPTCHA, WAF &amp; Turnstile</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jun 18–23 · Security Research</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-ochre" style={{ left: "18%", width: "13%" }}></div>
</div>
</div>
{/* 4. Jun 24–26 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-pine">04. tiesverse.com Deployment</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jun 24–26 · Live Linux Server</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-pine" style={{ left: "31%", width: "7%" }}></div>
</div>
</div>
{/* 5. Jun 27–Jul 01 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-pine">05. Webinar Website Backend</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jun 27–Jul 01 · Schemas &amp; APIs</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-pine" style={{ left: "38%", width: "11%" }}></div>
</div>
</div>
{/* 6. Jul 02–08 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-ink">06. Technical SEO &amp; Speed</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jul 02–08 · Sitemaps, JSON-LD</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-ochre" style={{ left: "49%", width: "15%" }}></div>
</div>
</div>
{/* 7. Jul 09–23 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-copper">07. Multi-Site RBAC Portal</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jul 09–23 · 4 Sites, Audit, Live</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-copper" style={{ left: "64%", width: "32%" }}></div>
</div>
</div>
{/* 8. Jul 24–25 */}
<div className="grid grid-cols-12 items-center gap-2">
<div className="col-span-5 pr-2"><strong className="text-mono-ink">08. Final Review &amp; Exit</strong> <span className="font-mono text-[10.5px] text-mono-muted block">Jul 24–25 · Code Walk-Through</span></div>
<div className="col-span-7 relative h-5 bg-mono-subtle rounded-[3px]">
<div className="absolute top-0.5 bottom-0.5 rounded-[2px] bg-mono-forest" style={{ left: "95%", width: "5%" }}></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Tiesverse Foundation · Industrial Training</span>
</div>

    </div>
  );
};
