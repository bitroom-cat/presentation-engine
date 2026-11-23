import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide05EdgeSecuritySeo: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-pine font-semibold mb-1">Security &amp; Visibility · 18 Jun – 08 Jul 2026</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Edge Security (Cloudflare) &amp; Technical SEO Stack</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">Applied to tiesverse.com &amp; Webinar Platform</span>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 py-5 items-stretch">
{/* Left Panel (Deep Pine Accent): Bot Mitigation & Edge Security */}
<div className="col-span-6 bg-mono-card border border-mono-line border-t-[4px] border-t-mono-pine rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-0.5 bg-mono-pineTint text-mono-pine font-bold rounded-[3px]">Bot Mitigation &amp; WAF</span>
<span className="font-mono text-[11px] text-mono-muted">Research: 18–23 June</span>
</div>
<h3 className="text-[18px] font-bold text-mono-ink mb-2">Cloudflare Turnstile &amp; Origin Hardening</h3>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                  Benchmarked traditional puzzle CAPTCHA friction against smart, low-friction <strong>Cloudflare Turnstile</strong>, then deployed the architecture directly on live Webinar registration endpoints.
                </p>
{/* Mini Verification Flow */}
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3.5 mb-4">
<div className="font-mono text-[10px] uppercase tracking-wider text-mono-pine font-semibold mb-2">Server-Side Token Validation Flow</div>
<div className="grid grid-cols-3 gap-2 text-center text-[11.5px]">
<div className="bg-mono-card border border-mono-line rounded p-2">
<div className="font-bold text-mono-ink">1. Client Widget</div>
<div className="text-mono-muted text-[10.5px]">Turnstile issues token</div>
</div>
<div className="bg-mono-card border border-mono-line rounded p-2">
<div className="font-bold text-mono-ink">2. Django Verify</div>
<div className="text-mono-muted text-[10.5px]">Server validates w/ CF</div>
</div>
<div className="bg-mono-pineTint border border-mono-pine/30 rounded p-2">
<div className="font-bold text-mono-pine">3. Edge Reject</div>
<div className="text-mono-pine text-[10.5px]">Bots blocked pre-DB</div>
</div>
</div>
</div>
<ul className="space-y-2 text-[12.8px] text-mono-ink">
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>DNS Proxying &amp; WAF:</strong> Masks origin IP and filters malicious HTTP payloads before reaching Nginx.</span></li>
<li className="flex gap-2.5"><span className="text-mono-pine font-bold">▪</span><span><strong>DDoS &amp; HTTPS:</strong> Edge rate mitigation combined with Let’s Encrypt SSL encryption in transit.</span></li>
</ul>
</div>
<div className="pt-3 border-t border-mono-line font-mono text-[11px] text-mono-pine">
                Outcome: Eliminated automated spam on public registration forms.
              </div>
</div>
{/* Right Panel (Warm Ochre Accent): Technical SEO & Performance */}
<div className="col-span-6 bg-mono-card border border-mono-line border-t-[4px] border-t-mono-ochre rounded-[6px] p-6 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-0.5 bg-mono-ochreTint text-mono-ochre font-bold rounded-[3px]">Search &amp; Speed</span>
<span className="font-mono text-[11px] text-mono-muted">Execution: 02–08 July</span>
</div>
<h3 className="text-[18px] font-bold text-mono-ink mb-2">Technical SEO &amp; Web Performance</h3>
<p className="text-[13px] text-mono-muted leading-relaxed mb-4">
                  Full discoverability and load-time optimisation executed across both <span className="font-mono text-mono-ink">tiesverse.com</span> and the Tiesverse Webinar platform.
                </p>
{/* Structured 2x3 Checklist Grid */}
<div className="grid grid-cols-2 gap-3 text-[12.2px]">
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">01 · AUDIT</div>
<div className="font-semibold text-mono-ink">SEO Audit &amp; Keywords</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Baseline crawl diagnostics &amp; target keyword mapping.</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">02 · METADATA</div>
<div className="font-semibold text-mono-ink">Dynamic OpenGraph</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Automated social preview cards, headers &amp; meta tags.</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">03 · CRAWLING</div>
<div className="font-semibold text-mono-ink">XML Sitemaps &amp; robots.txt</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Dynamic sitemap generation &amp; clean crawler rules.</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">04 · SEMANTICS</div>
<div className="font-semibold text-mono-ink">JSON-LD (Schema.org)</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Structured rich-result schemas for events &amp; pages.</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">05 · SPEED</div>
<div className="font-semibold text-mono-ink">Asset Compression</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Compressed media assets &amp; cut page load latency.</div>
</div>
<div className="bg-mono-paper border border-mono-line rounded-[5px] p-3">
<div className="font-mono text-[10px] font-bold text-mono-ochre mb-0.5">06 · TELEMETRY</div>
<div className="font-semibold text-mono-ink">Search Console &amp; GA</div>
<div className="text-mono-muted text-[11.5px] mt-0.5">Verified site indexation &amp; traffic analytics tracking.</div>
</div>
</div>
</div>
<div className="pt-3 border-t border-mono-line font-mono text-[11px] text-mono-ochre">
                Outcome: Faster load times &amp; structured search/social indexation.
              </div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Edge Security &amp; Technical SEO</span>
</div>

    </div>
  );
};
