import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide12TechMatrix: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-indigo font-semibold mb-1">Chapter 6 · Engineering Stack</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Full-Stack Technology &amp; Platform Matrix</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">End-to-End Tooling Across All 3 Projects</span>
</div>
<div className="flex-1 flex flex-col justify-center py-5">
<div className="bg-mono-card border border-mono-line rounded-[6px] overflow-hidden">
<table className="w-full text-left border-collapse text-[13px]">
<thead>
<tr className="bg-mono-forest text-mono-forestText font-mono text-[11px] uppercase tracking-wider">
<th className="py-3.5 px-5 w-[22%]">Architecture Layer</th>
<th className="py-3.5 px-5 w-[48%]">Languages, Frameworks &amp; Platforms Used</th>
<th className="py-3.5 px-5 w-[30%]">Applied Deliverables</th>
</tr>
</thead>
<tbody className="divide-y divide-mono-line">
<tr>
<td className="py-4 px-5 font-bold text-mono-copper">Backend &amp; Decision Logic</td>
<td className="py-4 px-5 text-mono-ink">
<strong>Python 3</strong>, <strong>Django</strong> (MVT, Auth, Custom <span className="font-mono text-[12px]">ModelAdmin</span>), Decoupled Rule-Based Recommendation Engine
                    </td>
<td className="py-4 px-5">
<span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded bg-mono-copperTint text-mono-copper font-semibold">All 3 Core Projects</span>
</td>
</tr>
<tr className="bg-mono-paper/70">
<td className="py-4 px-5 font-bold text-mono-indigo">Data &amp; Persistence</td>
<td className="py-4 px-5 text-mono-ink">
<strong>PostgreSQL</strong> (Production, ACID-compliant), <strong>SQLite</strong> (Development), Site-Aware Custom ORM QuerySet Managers
                    </td>
<td className="py-4 px-5 text-mono-muted font-mono text-[11.5px]">tiesverse.com, Webinar &amp; Multi-Site Portal</td>
</tr>
<tr>
<td className="py-4 px-5 font-bold text-mono-pine">Infrastructure &amp; Hosting</td>
<td className="py-4 px-5 text-mono-ink">
<strong>Linux Server</strong>, <strong>Nginx</strong> Reverse Proxy, <strong>Gunicorn</strong> WSGI App Server, <strong>Let’s Encrypt SSL</strong>, <strong>Vercel</strong>
</td>
<td className="py-4 px-5 text-mono-muted font-mono text-[11.5px]">Live Hosting &amp; founder-web-tool.vercel.app</td>
</tr>
<tr className="bg-mono-paper/70">
<td className="py-4 px-5 font-bold text-mono-ochre">Edge Security</td>
<td className="py-4 px-5 text-mono-ink">
<strong>Cloudflare DNS</strong>, <strong>WAF</strong>, DDoS Mitigation, <strong>Cloudflare Turnstile</strong> + Server-Side Token Validation
                    </td>
<td className="py-4 px-5 text-mono-muted font-mono text-[11.5px]">Public Sites &amp; Webinar Registration Endpoints</td>
</tr>
<tr>
<td className="py-4 px-5 font-bold text-mono-ink">Frontend &amp; Technical SEO</td>
<td className="py-4 px-5 text-mono-ink">
                      Responsive HTML/CSS/JS Forms &amp; Dashboards, <strong>XML Sitemaps</strong>, <span className="font-mono text-[12px]">robots.txt</span>, <strong>JSON-LD</strong>, <strong>OpenGraph</strong>, GSC &amp; Google Analytics
                    </td>
<td className="py-4 px-5 text-mono-muted font-mono text-[11.5px]">tiesverse.com, Webinar &amp; Founder Tool</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 bg-mono-subtle border border-mono-line rounded-[5px] px-5 py-3 flex items-center justify-between text-[12.5px]">
<span><strong>Stack Cohesion:</strong> Open-source, battle-tested Linux + Django + PostgreSQL core paired with Cloudflare edge security and Vercel rapid web deployment.</span>
<span className="font-mono text-[11px] text-mono-pine font-semibold shrink-0 ml-4">Zero Vendor Lock-in</span>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Technology &amp; Platform Matrix</span>
</div>

    </div>
  );
};
