"use client";

import React, { useState } from "react";
import { Server, ShieldCheck, Database, Globe, Lock, Cpu, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

// ============================================================================
// 1. INTERACTIVE 3D PERSPECTIVE PRODUCTION SERVER PIPELINE
// ============================================================================
export function Pipeline3DServer({ className = "w-full h-80" }: { className?: string }) {
  const [activeTier, setActiveTier] = useState<number>(3); // Django selected by default

  const tiers = [
    {
      id: 0,
      title: "Public Clients",
      desc: "Browsers, mobile apps & webinar attendees",
      tech: "HTTP/2 & HTTP/3",
      icon: <Globe className="w-5 h-5 text-[#C65D3B]" />,
      color: "border-[#C65D3B]",
      accent: "text-[#C65D3B]",
      bg: "bg-[#F8EBE6]",
    },
    {
      id: 1,
      title: "Cloudflare Edge",
      desc: "DNS, DDoS mitigation, WAF & Turnstile token issuing",
      tech: "Global Anycast Edge",
      icon: <ShieldCheck className="w-5 h-5 text-[#9A6B27]" />,
      color: "border-[#9A6B27]",
      accent: "text-[#9A6B27]",
      bg: "bg-[#F6EFE0]",
    },
    {
      id: 2,
      title: "Nginx Proxy",
      desc: "Let's Encrypt TLS termination, static media, rate limits",
      tech: "Reverse Proxy & Sockets",
      icon: <Server className="w-5 h-5 text-[#2D5F53]" />,
      color: "border-[#2D5F53]",
      accent: "text-[#2D5F53]",
      bg: "bg-[#E6F0ED]",
    },
    {
      id: 3,
      title: "Django & Gunicorn",
      desc: "MVT, Site-Aware ORM, RBAC ModelAdmin, Webinar APIs",
      tech: "Python 3 & WSGI Workers",
      icon: <Cpu className="w-5 h-5 text-[#C65D3B]" />,
      color: "border-[#C65D3B]",
      accent: "text-[#C65D3B]",
      bg: "bg-[#F8EBE6]",
    },
    {
      id: 4,
      title: "PostgreSQL DB",
      desc: "ACID transactions, B-tree indexes, site-tagged rows",
      tech: "Relational Persistence",
      icon: <Database className="w-5 h-5 text-[#3E5673]" />,
      color: "border-[#3E5673]",
      accent: "text-[#3E5673]",
      bg: "bg-[#E9EEF4]",
    },
  ];

  return (
    <div className={clsx("relative flex flex-col justify-between select-none rounded-xl bg-[#192623] border border-[#2B3D38] p-5 text-[#F5F4EF]", className)}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2B3D38] z-10">
        <div>
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#C65D3B] font-bold">
            Interactive Production Architecture
          </span>
          <h4 className="text-[14px] font-bold text-[#F5F4EF] mt-0.5">
            5-Tier Linux + Cloudflare + Django Request Pipeline
          </h4>
        </div>
        <span className="font-mono text-[11px] text-[#9FAEA9]">
          Click any tier to inspect server responsibilities
        </span>
      </div>

      {/* 3D Perspective Isometric Pipeline Cards */}
      <div
        className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[190px]"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative preserve-3d flex items-center justify-center gap-3 transition-transform duration-500"
          style={{
            transform: "rotateX(22deg) rotateY(-8deg)",
          }}
        >
          {tiers.map((t, idx) => {
            const isSelected = activeTier === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTier(t.id)}
                className={clsx(
                  "relative p-3.5 rounded-xl border text-left transition-all duration-300 w-44 flex flex-col justify-between h-40 cursor-pointer shadow-xl",
                  isSelected
                    ? "bg-[#121C1A] border-[#C65D3B] scale-105 ring-2 ring-[#C65D3B]/40 shadow-2xl -translate-y-2 z-20"
                    : "bg-[#192623]/80 border-[#2B3D38] hover:border-white/30 hover:-translate-y-1 z-10 opacity-80"
                )}
                style={{
                  transform: `translateZ(${isSelected ? 30 : idx * 6}px)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#9FAEA9]">0{idx + 1}</span>
                  <div className="p-1.5 rounded-lg bg-black/40 border border-white/10">{t.icon}</div>
                </div>

                <div>
                  <h5 className="font-bold text-[13px] text-[#F5F4EF] leading-snug">{t.title}</h5>
                  <div className="text-[10px] font-mono text-[#C65D3B] mt-1">{t.tech}</div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[9.5px] font-mono text-[#9FAEA9] truncate">
                  {isSelected ? "ACTIVE INSPECTION" : "Click to view"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Detail Drawer */}
      <div className="pt-3 border-t border-[#2B3D38] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#C65D3B] font-bold">[{tiers[activeTier].title}]:</span>
          <span className="text-[#F5F4EF]">{tiers[activeTier].desc}</span>
        </div>
        <span className="text-[#79B4A3] font-semibold">Tier 0{activeTier + 1} / 05</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. TURNSTILE BOT MITIGATION SVG DIAGRAM
// ============================================================================
export function TurnstileFlowDiagram({ className = "w-full h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 130" className={className} fill="none">
      <defs>
        <marker id="turnstile-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1C1F1E" />
        </marker>
      </defs>

      {/* Step 1: User / Browser */}
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="90" rx="8" fill="#FFFFFF" stroke="#DFDDD5" strokeWidth="1.5" />
        <text x="80" y="30" textAnchor="middle" fill="#1C1F1E" fontSize="12" fontWeight="bold">1. Client Browser</text>
        <text x="80" y="48" textAnchor="middle" fill="#5D6360" fontSize="10">Submits webinar form</text>
        <rect x="20" y="58" width="120" height="20" rx="4" fill="#F8EBE6" stroke="#C65D3B" strokeWidth="1" />
        <text x="80" y="72" textAnchor="middle" fill="#C65D3B" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
          Turnstile Widget
        </text>
      </g>

      {/* Arrow 1 -> 2 */}
      <line x1="190" y1="65" x2="240" y2="65" stroke="#1C1F1E" strokeWidth="1.6" markerEnd="url(#turnstile-arr)" />
      <text x="215" y="56" textAnchor="middle" fill="#5D6360" fontSize="9" fontFamily="monospace">POST Token</text>

      {/* Step 2: Django Server */}
      <g transform="translate(250, 20)">
        <rect x="0" y="0" width="180" height="90" rx="8" fill="#F8EBE6" stroke="#C65D3B" strokeWidth="1.5" />
        <text x="90" y="30" textAnchor="middle" fill="#1C1F1E" fontSize="12" fontWeight="bold">2. Django Backend</text>
        <text x="90" y="48" textAnchor="middle" fill="#5D6360" fontSize="10">Receives payload + token</text>
        <rect x="20" y="58" width="140" height="20" rx="4" fill="#FFFFFF" stroke="#DFDDD5" />
        <text x="90" y="72" textAnchor="middle" fill="#2D5F53" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
          validate_token()
        </text>
      </g>

      {/* Double Arrow 2 <-> 3 */}
      <line x1="430" y1="55" x2="480" y2="55" stroke="#1C1F1E" strokeWidth="1.6" markerEnd="url(#turnstile-arr)" />
      <line x1="480" y1="75" x2="430" y2="75" stroke="#2D5F53" strokeWidth="1.6" markerEnd="url(#turnstile-arr)" />
      <text x="455" y="46" textAnchor="middle" fill="#5D6360" fontSize="8.5" fontFamily="monospace">Verify API</text>

      {/* Step 3: Cloudflare SiteVerify */}
      <g transform="translate(490, 20)">
        <rect x="0" y="0" width="160" height="90" rx="8" fill="#F6EFE0" stroke="#9A6B27" strokeWidth="1.5" />
        <text x="80" y="30" textAnchor="middle" fill="#1C1F1E" fontSize="12" fontWeight="bold">3. Cloudflare Edge</text>
        <text x="80" y="48" textAnchor="middle" fill="#5D6360" fontSize="10">/siteverify endpoint</text>
        <rect x="20" y="58" width="120" height="20" rx="4" fill="#FFFFFF" stroke="#9A6B27" strokeWidth="1" />
        <text x="80" y="72" textAnchor="middle" fill="#9A6B27" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
          success: true / false
        </text>
      </g>
    </svg>
  );
}
