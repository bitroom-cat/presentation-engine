import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide08PortalArchitecture: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Project 03 · System Architecture (Figure 5.1)</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Multi-Site Admin Portal: Architecture &amp; 6-Stage Flow</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">Two-Tier RBAC + Site-Aware Routing</span>
</div>
<div className="flex-1 grid grid-cols-12 gap-5 py-4 items-stretch">
{/* Left (62% -> 7.5 cols approximated cleanly with 8 cols): Newly Crafted Figure 5.1 SVG */}
<div className="col-span-8 bg-mono-card border border-mono-line rounded-[6px] p-4 flex items-center justify-center">
<svg aria-label="Multi-Site Admin Portal system architecture diagram" className="w-full h-[458px]" role="img" viewBox="0 0 760 475">
<defs>
<marker id="arr-p3" markerHeight="6.5" markerWidth="6.5" orient="auto-start-reverse" refX="8" refY="5" viewBox="0 0 10 10">
<path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1C1F1E"></path>
</marker>
</defs>
{/* Tier 1: Users */}
<rect fill="#F8EBE6" height="54" rx="6" stroke="#C65D3B" strokeWidth="1.6" width="292" x="44" y="10"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle" x="190" y="33">Superuser</text>
<text fill="#C65D3B" fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle" x="190" y="51">Global access to all 4 sites</text>
<rect fill="#F6EFE0" height="54" rx="6" stroke="#9A6B27" strokeWidth="1.6" width="292" x="424" y="10"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle" x="570" y="33">Staff Users</text>
<text fill="#9A6B27" fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle" x="570" y="51">Scoped by department / site</text>
{/* Converging Arrows to Cloudflare */}
<path d="M 190 64 L 315 92" fill="none" markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.6"></path>
<path d="M 570 64 L 445 92" fill="none" markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.6"></path>
{/* Tier 2: Cloudflare Edge */}
<rect fill="#FFFFFF" height="50" rx="6" stroke="#9A6B27" strokeWidth="1.6" width="490" x="135" y="96"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12.5" fontWeight="700" textAnchor="middle" x="380" y="118">Cloudflare Edge Security</text>
<text fill="#5D6360" fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle" x="380" y="136">DNS  |  WAF  |  DDoS Protection  |  Turnstile</text>
<line markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.6" x1="380" x2="380" y1="146" y2="168"></line>
{/* Tier 3: Linux Server */}
<rect fill="#E6F0ED" height="50" rx="6" stroke="#2D5F53" strokeWidth="1.6" width="490" x="135" y="172"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12.5" fontWeight="700" textAnchor="middle" x="380" y="194">Linux Production Server</text>
<text fill="#2D5F53" fontFamily="JetBrains Mono, monospace" fontSize="11" textAnchor="middle" x="380" y="212">Nginx Reverse Proxy + Let’s Encrypt SSL  →  Gunicorn WSGI</text>
<line markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.6" x1="380" x2="380" y1="222" y2="244"></line>
{/* Tier 4: Core Portal Container */}
<rect fill="#F7F6F2" height="146" rx="8" stroke="#1C1F1E" strokeWidth="1.8" width="724" x="18" y="248"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="800" textAnchor="middle" x="380" y="270">Multi-Site Admin Portal  (Python / Django · MVT Architecture)</text>
{/* Row 1 Inside Portal: Auth -> RBAC -> Site-Aware ORM */}
<rect fill="#F8EBE6" height="52" rx="5" stroke="#C65D3B" strokeWidth="1.4" width="206" x="34" y="282"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700" textAnchor="middle" x="137" y="304">Central Authentication</text>
<text fill="#5D6360" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10.5" textAnchor="middle" x="137" y="321">+ Role Identification</text>
<line markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.5" x1="240" x2="266" y1="308" y2="308"></line>
<rect fill="#F8EBE6" height="52" rx="5" stroke="#C65D3B" strokeWidth="1.4" width="216" x="272" y="282"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700" textAnchor="middle" x="380" y="304">RBAC Layer</text>
<text fill="#5D6360" fontFamily="JetBrains Mono, monospace" fontSize="10.5" textAnchor="middle" x="380" y="321">Custom ModelAdmin overrides</text>
<line markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.5" x1="488" x2="514" y1="308" y2="308"></line>
<rect fill="#F8EBE6" height="52" rx="5" stroke="#C65D3B" strokeWidth="1.4" width="206" x="520" y="282"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700" textAnchor="middle" x="623" y="304">Site-Aware ORM Routing</text>
<text fill="#C65D3B" fontFamily="JetBrains Mono, monospace" fontSize="10.5" textAnchor="middle" x="623" y="321">site_identifier + QuerySet Mgr</text>
{/* Row 2 Inside Portal: Logging & User Management */}
<rect fill="#E9EEF4" height="36" rx="5" stroke="#3E5673" strokeWidth="1.3" width="334" x="34" y="346"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" textAnchor="middle" x="201" y="368">Centralised Logging &amp; Operations Overview</text>
<rect fill="#E9EEF4" height="36" rx="5" stroke="#3E5673" strokeWidth="1.3" width="334" x="392" y="346"></rect>
<text fill="#1C1F1E" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" textAnchor="middle" x="559" y="368">Unified User Management &amp; Permissions</text>
<line markerEnd="url(#arr-p3)" stroke="#1C1F1E" strokeWidth="1.6" x1="380" x2="380" y1="394" y2="416"></line>
{/* Tier 5: Storage Layer */}
<rect fill="#E6F0ED" height="44" rx="6" stroke="#2D5F53" strokeWidth="1.7" width="430" x="165" y="420"></rect>
<text fill="#1C1F1E" fontFamily="JetBrains Mono, monospace" fontSize="12.5" fontWeight="700" textAnchor="middle" x="380" y="447">PostgreSQL / SQLite  (ACID · site-tagged records)</text>
</svg>
</div>
{/* Right (38% -> 4 cols): Compact 6-Stage Request Lifecycle */}
<div className="col-span-4 bg-mono-card border border-mono-line rounded-[6px] p-5 flex flex-col justify-between">
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-copper font-bold pb-2 border-b border-mono-line">
                6-Stage Working Principle
              </div>
<div className="space-y-2.5 flex-1 flex flex-col justify-center text-[12.2px]">
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">01</span>
<div><strong className="text-mono-ink">Central Authentication:</strong> Single sign-on gateway shared across all 4 web properties.</div>
</div>
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">02</span>
<div><strong className="text-mono-ink">Role Identification:</strong> Loads Superuser or Staff tier and bound department permission groups.</div>
</div>
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">03</span>
<div><strong className="text-mono-ink">Site-Aware Base Model:</strong> Every entity inherits an abstract base carrying indexed <span className="font-mono text-[11px]">site_identifier</span>.</div>
</div>
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">04</span>
<div><strong className="text-mono-ink">Query Interception:</strong> Custom ORM QuerySet managers filter records strictly to the user’s domain.</div>
</div>
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">05</span>
<div><strong className="text-mono-ink">Permission Enforcement:</strong> Overridden <span className="font-mono text-[11px]">ModelAdmin</span> methods hide sibling modules &amp; block illicit writes.</div>
</div>
<div className="flex gap-3 items-start">
<span className="font-mono font-bold text-mono-copper shrink-0">06</span>
<div><strong className="text-mono-ink">Centralised Logging:</strong> Records operational actions into a unified cross-site audit view.</div>
</div>
</div>
<div className="pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
                Isolation enforced at DB/ORM layer — not merely hidden in UI.
              </div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Project 03 · System Architecture</span>
</div>

    </div>
  );
};
