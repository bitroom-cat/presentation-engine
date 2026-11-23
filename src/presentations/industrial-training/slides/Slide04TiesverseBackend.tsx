"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";
import { Pipeline3DServer } from "../components/SwissIllustrations";
import { Server, Layers } from "lucide-react";

export const Slide04TiesverseBackend: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  const [viewMode, setViewMode] = useState<"2d" | "3d">("3d");

  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
      <div className="flex items-end justify-between border-b border-mono-line pb-3.5">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-pine font-semibold mb-1">Project 01 · Live Production Systems (24 Jun – 01 Jul)</div>
          <h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Original tiesverse.com & Webinar Platform Backend</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-mono-card p-1 rounded-md border border-mono-line font-mono text-[11px]">
            <button
              onClick={() => setViewMode("3d")}
              className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition ${viewMode === "3d" ? "bg-mono-pine text-white font-bold" : "text-mono-muted hover:text-mono-ink"}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Pipeline</span>
            </button>
            <button
              onClick={() => setViewMode("2d")}
              className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition ${viewMode === "2d" ? "bg-mono-pine text-white font-bold" : "text-mono-muted hover:text-mono-ink"}`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>2D Architecture</span>
            </button>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-1 bg-mono-pineTint text-mono-pine rounded-[3px] font-semibold">Linux · Nginx · Gunicorn · PostgreSQL</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-4 gap-4">
        {viewMode === "3d" ? (
          <div className="flex-1 flex flex-col justify-center">
            <Pipeline3DServer className="w-full h-[450px]" />
          </div>
        ) : (
          <div className="bg-mono-card border border-mono-line rounded-[6px] px-5 py-4 flex-1 flex flex-col justify-center">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-mono-muted mb-2 text-center">Five-Tier Production Request & Data Lifecycle</div>
            <svg aria-label="Five-tier production deployment pipeline architecture" className="w-full h-[375px]" role="img" viewBox="0 0 1160 395" fill="none">
              <defs>
                <marker id="arr-mono" markerHeight="6.5" markerWidth="6.5" orient="auto-start-reverse" refX="8" refY="5" viewBox="0 0 10 10">
                  <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1C1F1E" />
                </marker>
              </defs>
              {/* Tier 1 */}
              <g transform="translate(15, 30)">
                <rect fill="#FFFFFF" height="315" rx="5" stroke="#DFDDD5" strokeWidth="1.5" width="200" />
                <rect fill="#F8EBE6" height="42" rx="4" width="200" />
                <text fill="#C65D3B" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="0.08em" x="18" y="26">TIER 01 · CLIENT EDGE</text>
                <text fill="#1C1F1E" fontSize="13.5" fontWeight="bold" x="18" y="70">Public Clients</text>
                <text fill="#5D6360" fontSize="11" x="18" y="90">Browsers & Webinar Users</text>
                <rect fill="#F7F6F2" height="52" rx="3" stroke="#DFDDD5" width="164" x="18" y="112" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="132">HTTP/2 & HTTP/3</text>
                <text fill="#5D6360" fontSize="10" x="26" y="148">TLS 1.3 Client Handshake</text>
                <rect fill="#F7F6F2" height="66" rx="3" stroke="#DFDDD5" width="164" x="18" y="174" />
                <text fill="#C65D3B" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="194">Live Domains</text>
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10.5" x="26" y="210">tiesverse.com</text>
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10.5" x="26" y="226">webinars (subpath)</text>
                <text fill="#5D6360" fontSize="10" x="18" y="266">Static assets + dynamic forms</text>
                <text fill="#5D6360" fontSize="10" x="18" y="282">Webinar registrations stream</text>
              </g>
              {/* Arrow 1 -> 2 */}
              <line markerEnd="url(#arr-mono)" stroke="#1C1F1E" strokeWidth="1.75" x1="225" x2="245" y1="187" y2="187" />
              {/* Tier 2 */}
              <g transform="translate(250, 30)">
                <rect fill="#FFFFFF" height="315" rx="5" stroke="#DFDDD5" strokeWidth="1.5" width="205" />
                <rect fill="#F6EFE0" height="42" rx="4" width="205" />
                <text fill="#9A6B27" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="0.08em" x="18" y="26">TIER 02 · CLOUDFLARE</text>
                <text fill="#1C1F1E" fontSize="13.5" fontWeight="bold" x="18" y="70">Cloudflare Edge</text>
                <text fill="#5D6360" fontSize="11" x="18" y="90">Global Anycast Proxy</text>
                <rect fill="#F6EFE0" height="62" rx="3" stroke="#9A6B27" strokeWidth="1" width="169" x="18" y="112" />
                <text fill="#9A6B27" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="132">Turnstile Challenge</text>
                <text fill="#1C1F1E" fontSize="10" x="26" y="148">Bot Mitigation (No Captcha)</text>
                <text fill="#5D6360" fontSize="9.5" x="26" y="162">Crypto nonce token issue</text>
                <rect fill="#F7F6F2" height="66" rx="3" stroke="#DFDDD5" width="169" x="18" y="184" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="204">Edge Security & DNS</text>
                <text fill="#5D6360" fontSize="10" x="26" y="220">Full SSL / Strict Origin TLS</text>
                <text fill="#5D6360" fontSize="10" x="26" y="236">DDoS & rate-limit shields</text>
                <text fill="#9A6B27" fontFamily="monospace" fontSize="10" fontWeight="bold" x="18" y="274">Zero-Trust Origin Shield</text>
              </g>
              {/* Arrow 2 -> 3 */}
              <line markerEnd="url(#arr-mono)" stroke="#1C1F1E" strokeWidth="1.75" x1="465" x2="485" y1="187" y2="187" />
              {/* Tier 3 */}
              <g transform="translate(490, 30)">
                <rect fill="#FFFFFF" height="315" rx="5" stroke="#DFDDD5" strokeWidth="1.5" width="200" />
                <rect fill="#E6F0ED" height="42" rx="4" width="200" />
                <text fill="#2D5F53" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="0.08em" x="18" y="26">TIER 03 · NGINX REVERSE</text>
                <text fill="#1C1F1E" fontSize="13.5" fontWeight="bold" x="18" y="70">Nginx Web Server</text>
                <text fill="#5D6360" fontSize="11" x="18" y="90">Reverse Proxy & Media</text>
                <rect fill="#F7F6F2" height="62" rx="3" stroke="#DFDDD5" width="164" x="18" y="112" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="132">TLS Termination</text>
                <text fill="#5D6360" fontSize="10" x="26" y="148">Let's Encrypt automated</text>
                <text fill="#2D5F53" fontFamily="monospace" fontSize="9.5" x="26" y="162">HSTS & gzip compression</text>
                <rect fill="#F7F6F2" height="66" rx="3" stroke="#DFDDD5" width="164" x="18" y="184" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="204">Static / Media Routing</text>
                <text fill="#5D6360" fontSize="10" x="26" y="220">Direct Linux file-system</text>
                <text fill="#5D6360" fontSize="10" x="26" y="236">proxy_pass Unix socket</text>
                <text fill="#2D5F53" fontFamily="monospace" fontSize="10" fontWeight="bold" x="18" y="274">Fast static bypass (0ms DB)</text>
              </g>
              {/* Arrow 3 -> 4 */}
              <line markerEnd="url(#arr-mono)" stroke="#1C1F1E" strokeWidth="1.75" x1="700" x2="720" y1="187" y2="187" />
              {/* Tier 4 */}
              <g transform="translate(725, 30)">
                <rect fill="#FFFFFF" height="315" rx="5" stroke="#DFDDD5" strokeWidth="1.5" width="205" />
                <rect fill="#F8EBE6" height="42" rx="4" width="205" />
                <text fill="#C65D3B" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="0.08em" x="18" y="26">TIER 04 · GUNICORN + DJANGO</text>
                <text fill="#1C1F1E" fontSize="13.5" fontWeight="bold" x="18" y="70">Django Core</text>
                <text fill="#5D6360" fontSize="11" x="18" y="90">Gunicorn WSGI Workers</text>
                <rect fill="#F8EBE6" height="62" rx="3" stroke="#C65D3B" strokeWidth="1" width="169" x="18" y="112" />
                <text fill="#C65D3B" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="132">Turnstile Verification</text>
                <text fill="#1C1F1E" fontSize="10" x="26" y="148">Server-to-Server SiteVerify</text>
                <text fill="#5D6360" fontSize="9.5" x="26" y="162">HTTP POST to Cloudflare</text>
                <rect fill="#F7F6F2" height="66" rx="3" stroke="#DFDDD5" width="169" x="18" y="184" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="204">Django MVT Architecture</text>
                <text fill="#5D6360" fontSize="10" x="26" y="220">Dynamic views & templates</text>
                <text fill="#5D6360" fontSize="10" x="26" y="236">Webinar registration forms</text>
                <text fill="#C65D3B" fontFamily="monospace" fontSize="10" fontWeight="bold" x="18" y="274">Systemd managed service</text>
              </g>
              {/* Arrow 4 -> 5 */}
              <line markerEnd="url(#arr-mono)" stroke="#1C1F1E" strokeWidth="1.75" x1="940" x2="960" y1="187" y2="187" />
              {/* Tier 5 */}
              <g transform="translate(965, 30)">
                <rect fill="#FFFFFF" height="315" rx="5" stroke="#DFDDD5" strokeWidth="1.5" width="180" />
                <rect fill="#E9EEF4" height="42" rx="4" width="180" />
                <text fill="#3E5673" fontFamily="monospace" fontSize="10.5" fontWeight="bold" letterSpacing="0.08em" x="18" y="26">TIER 05 · POSTGRESQL</text>
                <text fill="#1C1F1E" fontSize="13.5" fontWeight="bold" x="18" y="70">PostgreSQL DB</text>
                <text fill="#5D6360" fontSize="11" x="18" y="90">Relational Persistence</text>
                <rect fill="#F7F6F2" height="62" rx="3" stroke="#DFDDD5" width="144" x="18" y="112" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="132">Relational Models</text>
                <text fill="#5D6360" fontSize="10" x="26" y="148">Events, Registrations</text>
                <text fill="#3E5673" fontFamily="monospace" fontSize="9.5" x="26" y="162">B-tree indexed lookups</text>
                <rect fill="#F7F6F2" height="66" rx="3" stroke="#DFDDD5" width="144" x="18" y="184" />
                <text fill="#1C1F1E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="26" y="204">ACID Guarantees</text>
                <text fill="#5D6360" fontSize="10" x="26" y="220">Zero duplicate entries</text>
                <text fill="#5D6360" fontSize="10" x="26" y="236">Automated backup script</text>
                <text fill="#3E5673" fontFamily="monospace" fontSize="10" fontWeight="bold" x="18" y="274">Connection pooling via UNIX</text>
              </g>
            </svg>
          </div>
        )}

        <div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
          <span>CSEE-713P · Satyam Sharma (23010603066)</span>
          <span>Project 01 · Production Backend Architecture</span>
        </div>
      </div>
    </div>
  );
};
