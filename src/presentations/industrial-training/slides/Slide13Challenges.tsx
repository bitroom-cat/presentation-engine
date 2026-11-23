import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide13Challenges: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-crimson font-semibold mb-1">Chapter 7 · Engineering Troubleshooting</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Production Challenges &amp; Engineering Resolutions</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">5 Real Blockers Resolved in Production</span>
</div>
<div className="flex-1 flex flex-col justify-center py-4">
<div className="bg-mono-card border border-mono-line rounded-[6px] overflow-hidden">
<table className="w-full text-left border-collapse text-[12.6px]">
<thead>
<tr className="bg-mono-subtle border-b border-mono-line font-mono text-[10.5px] uppercase tracking-wider text-mono-muted">
<th className="py-3 px-4 w-[24%]">Challenge</th>
<th className="py-3 px-4 w-[31%]">Root Cause</th>
<th className="py-3 px-4 w-[45%] text-mono-pine">Engineering Resolution</th>
</tr>
</thead>
<tbody className="divide-y divide-mono-line">
<tr>
<td className="py-3.5 px-4 font-bold text-mono-crimson">1. Admin Permission Leakage</td>
<td className="py-3.5 px-4 text-mono-muted">Default Django admin exposes all registered app models to staff users.</td>
<td className="py-3.5 px-4 text-mono-ink">Overrode <span className="font-mono text-[11.5px]">has_module_permission</span>, <span className="font-mono text-[11.5px]">has_change_permission</span> &amp; <span className="font-mono text-[11.5px]">get_queryset</span> with <span className="font-mono text-[11.5px]">site_identifier</span> filtering.</td>
</tr>
<tr className="bg-mono-paper/70">
<td className="py-3.5 px-4 font-bold text-mono-crimson">2. Bot Traffic on Public Endpoints</td>
<td className="py-3.5 px-4 text-mono-muted">Automated spam targeted public Webinar registration routes, risking DB pollution.</td>
<td className="py-3.5 px-4 text-mono-ink">Integrated <strong>Cloudflare Turnstile</strong> with mandatory server-side token validation to reject bots at the edge.</td>
</tr>
<tr>
<td className="py-3.5 px-4 font-bold text-mono-ochre">3. Live Hosting &amp; Route Errors</td>
<td className="py-3.5 px-4 text-mono-muted">Initial <span className="font-mono text-[11.5px]">tiesverse.com</span> deployment hit server route and environment mismatches.</td>
<td className="py-3.5 px-4 text-mono-ink">Audited live Linux server logs, environment variables, Gunicorn WSGI sockets, and Nginx reverse-proxy route blocks.</td>
</tr>
<tr className="bg-mono-paper/70">
<td className="py-3.5 px-4 font-bold text-mono-ochre">4. Multi-Site Integration</td>
<td className="py-3.5 px-4 text-mono-muted">Four web properties had heterogeneous APIs, data feeds, and admin workflows.</td>
<td className="py-3.5 px-4 text-mono-ink">Executed phased site-by-site integration (Sites 1–4) plus a dedicated cross-site sync test day and token security audit.</td>
</tr>
<tr>
<td className="py-3.5 px-4 font-bold text-mono-indigo">5. Tight Multi-Project Timeline</td>
<td className="py-3.5 px-4 text-mono-muted">Five distinct deliverables with fixed review deadlines inside six weeks.</td>
<td className="py-3.5 px-4 text-mono-ink">Decomposed deliverables into daily signed diary milestones, incremental live deployments, and mentor walk-throughs.</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Section 7.2 · Challenges &amp; Resolutions</span>
</div>

    </div>
  );
};
