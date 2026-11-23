import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide16Conclusion: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-arch-grid text-mono-forestText px-14 py-10 justify-between flex flex-col">
{/* Top: Concise 3-Point Closing Synthesis */}
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mono-copper mb-3">Closing Synthesis · Six-Week Industrial Training</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-t-2 border-t-mono-pine rounded-[5px] p-4">
<div className="font-mono text-[10px] uppercase text-[#79B4A3] mb-1">01 · Production Backend &amp; Edge</div>
<p className="text-[12.5px] text-mono-forestMuted leading-relaxed">
                  Deployed <span className="text-mono-forestText font-mono">tiesverse.com</span> &amp; Webinar APIs on Linux/Nginx/Gunicorn with Cloudflare Turnstile security and Technical SEO.
                </p>
</div>
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-t-2 border-t-[#7E9EC2] rounded-[5px] p-4">
<div className="font-mono text-[10px] uppercase text-[#9CB3CC] mb-1">02 · Founder Decision Tool</div>
<p className="text-[12.5px] text-mono-forestMuted leading-relaxed">
                  Shipped <span className="text-mono-forestText font-mono">founder-web-tool.vercel.app</span> with clean UI/rule-engine decoupling to generate tailored startup stack blueprints.
                </p>
</div>
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-t-2 border-t-mono-copper rounded-[5px] p-4">
<div className="font-mono text-[10px] uppercase text-mono-copper mb-1">03 · Multi-Site RBAC Portal</div>
<p className="text-[12.5px] text-mono-forestMuted leading-relaxed">
                  Unified 4 properties into one Django dashboard with DB-layer <span className="text-mono-forestText font-mono">site_identifier</span> isolation—eliminating fragmentation &amp; privilege creep.
                </p>
</div>
</div>
</div>
{/* Middle: Compact 2-Column Technical References Strip */}
<div className="bg-mono-forestCard/75 border border-mono-forestLine rounded-[6px] px-5 py-4">
<div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mono-copper mb-2.5">Key Technical References (Chapter 11)</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[10.8px] text-mono-forestMuted leading-relaxed">
<div>• Django Software Foundation — <span className="text-mono-forestText/90">docs.djangoproject.com</span></div>
<div>• Let’s Encrypt SSL Documentation — <span className="text-mono-forestText/90">letsencrypt.org/docs</span></div>
<div>• Python 3 Official Documentation — <span className="text-mono-forestText/90">docs.python.org/3</span></div>
<div>• Cloudflare WAF &amp; Turnstile — <span className="text-mono-forestText/90">developers.cloudflare.com</span></div>
<div>• PostgreSQL &amp; SQLite Docs — <span className="text-mono-forestText/90">postgresql.org · sqlite.org</span></div>
<div>• Google Search Central SEO — <span className="text-mono-forestText/90">developers.google.com/search</span></div>
<div>• Nginx &amp; Gunicorn WSGI Docs — <span className="text-mono-forestText/90">nginx.org · docs.gunicorn.org</span></div>
<div>• Schema.org (JSON-LD) &amp; OpenGraph — <span className="text-mono-forestText/90">schema.org · ogp.me</span></div>
</div>
</div>
{/* Bottom: Thank You & Presenter Signature (Zero Logos) */}
<div className="pt-5 border-t border-mono-forestLine flex items-end justify-between">
<div>
<div className="w-16 h-[3px] bg-mono-copper mb-3"></div>
<h2 className="text-[42px] font-extrabold tracking-tight text-mono-forestText leading-none">
                Thank You <span className="text-mono-copper font-normal">·</span> <span className="font-serif font-medium text-[34px] text-mono-forestMuted">Questions &amp; Discussion</span>
</h2>
</div>
<div className="text-right">
<div className="text-[15px] font-bold text-mono-forestText">Satyam Sharma <span className="font-mono text-[12.5px] text-mono-copper ml-2">23010603066</span></div>
<div className="text-[12px] text-mono-forestMuted mt-0.5">B.Tech. CSE (Sem-VII) · Govt. College Dharamshala, HPTU</div>
<div className="font-mono text-[11px] text-mono-forestMuted/80 mt-0.5">Guide: Dr. Pawan Thakur  |  Mentor: Mr. Ashutosh Patra</div>
</div>
</div>

    </div>
  );
};
