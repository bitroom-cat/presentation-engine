"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  Cpu,
  Radio,
  Activity,
  Battery,
  AlertTriangle,
  Leaf,
  Layers,
  ArrowRight,
  ShieldAlert,
  Zap,
  Flame,
  Sun,
  Moon,
  CheckCircle2,
  Clock,
  Compass,
  Database,
  Sliders,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { clsx } from "clsx";

// ============================================================================
// 1. BANDWIDTH BEAM (SLIDE 0 HERO)
// ============================================================================
export function BandwidthBeamIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 140" className={className} fill="none">
      <defs>
        <linearGradient id="beam-v2-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
        </linearGradient>
        <filter id="beam-v2-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sensor Node 1 */}
      <g transform="translate(60, 70)">
        <circle r="36" fill="#161822" stroke="#38bdf8" strokeWidth="2.5" />
        <circle r="44" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" className="animate-spin-slow" />
        <text x="0" y="-8" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">EDGE NODE</text>
        <text x="0" y="8" textAnchor="middle" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">ARM Cortex</text>
        <text x="0" y="22" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">32-bit MCU</text>
      </g>

      {/* Sensor Node 2 */}
      <g transform="translate(620, 70)">
        <circle r="36" fill="#161822" stroke="#10b981" strokeWidth="2.5" />
        <circle r="44" stroke="#10b981" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" className="animate-spin-slow" />
        <text x="0" y="-8" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">DASHBOARD</text>
        <text x="0" y="8" textAnchor="middle" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">Cloud Server</text>
        <text x="0" y="22" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">Real-Time</text>
      </g>

      {/* Connecting Beam */}
      <path d="M 96 70 C 220 30, 460 30, 584 70" stroke="url(#beam-v2-glow)" strokeWidth="4" strokeLinecap="round" filter="url(#beam-v2-blur)" />
      <path d="M 96 70 C 220 110, 460 110, 584 70" stroke="url(#beam-v2-glow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />

      {/* Traveling Ambient Packets */}
      <circle r="5" fill="#38bdf8" filter="url(#beam-v2-blur)">
        <animateMotion path="M 96 70 C 220 30, 460 30, 584 70" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle r="4" fill="#10b981" filter="url(#beam-v2-blur)">
        <animateMotion path="M 96 70 C 220 30, 460 30, 584 70" dur="3.1s" repeatCount="indefinite" />
      </circle>
      <circle r="3.5" fill="#f43f5e" filter="url(#beam-v2-blur)">
        <animateMotion path="M 96 70 C 220 30, 460 30, 584 70" dur="1.7s" repeatCount="indefinite" />
      </circle>

      {/* Center Label Badge */}
      <g transform="translate(340, 40)">
        <rect x="-90" y="-14" width="180" height="28" rx="14" fill="#0d0e12" stroke="#818cf8" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
          Adaptive Data Beam (λ)
        </text>
      </g>
    </svg>
  );
}

// ============================================================================
// 2. TREASURE MAP ROADMAP (SLIDE 1)
// ============================================================================
export function TreasureMapIllustration({ className = "w-full h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1160 70" className={className} fill="none">
      <path
        d="M 60 35 C 240 60, 360 10, 580 35 C 780 60, 920 10, 1100 35"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle r="6" fill="#38bdf8">
        <animateMotion
          path="M 60 35 C 240 60, 360 10, 580 35 C 780 60, 920 10, 1100 35"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// ============================================================================
// 3. WSN ENVIRONMENT ZONES + MESH + DASHBOARD (SLIDE 2)
// ============================================================================
export function WsnEnvironmentMeshView({ className = "w-full h-[410px]" }: { className?: string }) {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex((p) => (p + 1) % 3), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold uppercase tracking-wider">WSN Architecture Anatomy</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">Environment Zones → Multi-Hop Mesh → Cloud Dashboard</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10.5px]">
          No Power Cables • No Ethernet Wires
        </span>
      </div>

      <div className="relative flex-1 w-full my-auto flex items-center justify-center">
        <svg viewBox="0 0 1140 330" className="w-full h-full" fill="none">
          {/* Section 1: Three Environment Zones */}
          {/* Zone 1: Forest Tree Line */}
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="280" height="85" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="18" y="24" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">🌲 Remote Forest Tree Line</text>
            <text x="18" y="42" fill="#94a3b8" fontSize="10">Wildfire & Microclimate Monitoring</text>
            {/* 3 Sensor nodes */}
            <g transform="translate(200, 50)">
              <circle r="8" fill="#10b981" />
              <circle r="15" stroke="#10b981" strokeWidth="1" opacity="0.4" className="animate-ping" />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S1</text>
            </g>
            <g transform="translate(245, 35)">
              <circle r="8" fill="#10b981" />
              <circle r="14" stroke="#10b981" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDelay: "0.6s" }} />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S2</text>
            </g>
          </g>

          {/* Zone 2: Factory Machine */}
          <g transform="translate(30, 120)">
            <rect x="0" y="0" width="280" height="85" rx="12" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="18" y="24" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">🏭 Industrial Factory Floor</text>
            <text x="18" y="42" fill="#94a3b8" fontSize="10">Rotating Bearing Vibration & Heat</text>
            {/* 2 Sensor nodes */}
            <g transform="translate(200, 50)">
              <circle r="8" fill="#f59e0b" />
              <circle r="15" stroke="#f59e0b" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDelay: "0.3s" }} />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S3</text>
            </g>
            <g transform="translate(245, 45)">
              <circle r="8" fill="#f59e0b" />
              <circle r="14" stroke="#f59e0b" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDelay: "0.9s" }} />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S4</text>
            </g>
          </g>

          {/* Zone 3: Agricultural Crop Field */}
          <g transform="translate(30, 220)">
            <rect x="0" y="0" width="280" height="85" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="18" y="24" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">🌾 Agricultural Crop Field</text>
            <text x="18" y="42" fill="#94a3b8" fontSize="10">Soil Moisture & Solar Radiation</text>
            {/* 2 Sensor nodes */}
            <g transform="translate(210, 45)">
              <circle r="8" fill="#38bdf8" />
              <circle r="15" stroke="#38bdf8" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDelay: "0.5s" }} />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S5</text>
            </g>
            <g transform="translate(250, 55)">
              <circle r="8" fill="#38bdf8" />
              <circle r="14" stroke="#38bdf8" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ animationDelay: "1.1s" }} />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">S6</text>
            </g>
          </g>

          {/* Section 2: Center Wireless Multi-Hop Mesh */}
          {/* Dotted paths connecting zones to cluster heads and gateway */}
          <g strokeDasharray="4 4" stroke="#475569" strokeWidth="1.8">
            <line x1="280" y1="60" x2="430" y2="100" />
            <line x1="280" y1="160" x2="430" y2="160" />
            <line x1="280" y1="260" x2="430" y2="210" />

            <line x1="430" y1="100" x2="600" y2="130" />
            <line x1="430" y1="160" x2="600" y2="160" />
            <line x1="430" y1="210" x2="600" y2="180" />

            <line x1="600" y1="130" x2="770" y2="160" />
            <line x1="600" y1="160" x2="770" y2="160" />
            <line x1="600" y1="180" x2="770" y2="160" />
          </g>

          {/* Traveling Multi-Hop Glowing Packets */}
          <circle r="5" fill="#10b981">
            <animateMotion path="M 280 60 L 430 100 L 600 130 L 770 160" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill="#f59e0b">
            <animateMotion path="M 280 160 L 430 160 L 600 160 L 770 160" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill="#38bdf8">
            <animateMotion path="M 280 260 L 430 210 L 600 180 L 770 160" dur="3.4s" repeatCount="indefinite" />
          </circle>

          {/* Cluster Head Nodes in the middle */}
          <g transform="translate(430, 100)">
            <circle r="14" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
            <text x="0" y="3.5" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">CH1</text>
          </g>
          <g transform="translate(430, 160)">
            <circle r="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="0" y="3.5" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">CH2</text>
          </g>
          <g transform="translate(430, 210)">
            <circle r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="3.5" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">CH3</text>
          </g>

          <g transform="translate(600, 160)">
            <circle r="18" fill="#1e293b" stroke="#818cf8" strokeWidth="2.5" />
            <circle r="26" stroke="#818cf8" strokeWidth="1" opacity="0.3" className="animate-ping" />
            <text x="0" y="4" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">AGG</text>
            <text x="0" y="-22" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Aggregator</text>
          </g>

          {/* Central Gateway Tower */}
          <g transform="translate(770, 160)">
            <rect x="-30" y="-45" width="60" height="90" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
            <path d="M-10 -15 L0 -32 L10 -15 Z" fill="#10b981" />
            <line x1="0" y1="-32" x2="0" y2="-42" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="0" cy="-42" r="4" fill="#10b981" className="animate-ping" />
            <text x="0" y="8" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
            <text x="0" y="24" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Cellular / IP</text>
          </g>

          {/* Arrow Gateway -> Dashboard */}
          <line x1="835" y1="160" x2="895" y2="160" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow-cyan)" />
          <circle r="4" fill="#38bdf8">
            <animateMotion path="M 835 160 L 895 160" dur="1s" repeatCount="indefinite" />
          </circle>

          {/* Section 3: Right Monitor / Cloud Dashboard */}
          <g transform="translate(900, 65)">
            <rect x="0" y="0" width="210" height="190" rx="14" fill="#0d0e12" stroke="#38bdf8" strokeWidth="2" />
            <rect x="15" y="15" width="180" height="30" rx="6" fill="#161822" />
            <circle cx="30" cy="30" r="4" fill="#10b981" />
            <text x="45" y="33" fill="#ffffff" fontSize="10.5" fontFamily="monospace" fontWeight="bold">CLOUD DASHBOARD</text>

            {/* Live SVG Waveform */}
            <rect x="15" y="55" width="180" height="115" rx="6" fill="#161822" />
            <path
              d="M 25 120 Q 55 90, 85 115 T 145 95 T 185 110"
              stroke="#38bdf8"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 25 140 Q 60 135, 95 145 T 155 130 T 185 140"
              stroke="#10b981"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="185" cy="110" r="3.5" fill="#38bdf8" className="animate-ping" />
            <text x="25" y="75" fill="#94a3b8" fontSize="9" fontFamily="monospace">Live Telemetry (100 Hz)</text>
          </g>
        </svg>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Physical Sensing Backbone of the Internet of Things
        </span>
        <span className="text-cyan-400">Continuous Multi-Hop Transmission</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. BANDWIDTH PIPE & MCU EXPLODED BLOCK (SLIDE 3)
// ============================================================================
export function PipeComparisonAndMcuView({ className = "w-full h-[430px]" }: { className?: string }) {
  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <span className="text-cyan-400 font-bold uppercase tracking-wider">Two Tight Physical Bottlenecks</span>
        <span className="text-zinc-400">1. Narrow Radio Pipe • 2. Constrained MCU Resources</span>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-5 py-3 items-stretch">
        {/* Top/Left Half (6 cols): Bandwidth Pipe Comparison */}
        <div className="col-span-6 flex flex-col justify-between bg-[#0d0e12] border border-white/10 rounded-xl p-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
            <span>Transmission Media &amp; Bandwidth</span>
            <span className="text-[10px] text-zinc-400">Pipe Funnel Dynamics</span>
          </span>

          {/* Pipe 1: Wide Wired Fiber / Wi-Fi */}
          <div className="my-2 bg-slate-900/80 border border-cyan-500/30 rounded-lg p-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1.5 font-bold">
              <span>Wired Fiber / Wi-Fi (Wide Pipe)</span>
              <span>1 Gbps+ • Zero Bottleneck</span>
            </div>
            <div className="relative h-10 w-full bg-slate-950 rounded border border-cyan-500/40 overflow-hidden flex items-center">
              <svg className="w-full h-full" viewBox="0 0 400 40">
                <rect x="0" y="5" width="400" height="30" fill="#0369a1" fillOpacity="0.2" />
                <rect width="40" height="20" rx="3" fill="#38bdf8" y="10">
                  <animate attributeName="x" from="-50" to="420" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect width="40" height="20" rx="3" fill="#38bdf8" y="10">
                  <animate attributeName="x" from="-50" to="420" dur="2s" begin="0.7s" repeatCount="indefinite" />
                </rect>
                <rect width="40" height="20" rx="3" fill="#38bdf8" y="10">
                  <animate attributeName="x" from="-50" to="420" dur="2s" begin="1.4s" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
          </div>

          {/* Pipe 2: Narrow WSN Radio Link */}
          <div className="bg-slate-900/80 border border-amber-500/30 rounded-lg p-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 mb-1.5 font-bold">
              <span>WSN Radio Link (IEEE 802.15.4 / BLE)</span>
              <span className="text-rose-400">250 kbps • Heavy Bottleneck</span>
            </div>
            <div className="relative h-14 w-full bg-slate-950 rounded border border-amber-500/40 overflow-hidden flex items-center">
              <svg className="w-full h-full" viewBox="0 0 400 56">
                {/* Funnel shape */}
                <path d="M 0 10 L 160 10 L 220 22 L 400 22 L 400 34 L 220 34 L 160 46 L 0 46 Z" fill="#78350f" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.2" />
                {/* Smooth entry packets */}
                <circle cx="50" cy="28" r="7" fill="#f59e0b">
                  <animate attributeName="cx" from="0" to="160" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="28" r="7" fill="#f59e0b">
                  <animate attributeName="cx" from="0" to="160" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                {/* Squeezed drop packets at bottleneck */}
                <circle cx="185" cy="18" r="5" fill="#f43f5e" className="animate-ping" />
                <circle cx="195" cy="38" r="5" fill="#f43f5e" className="animate-ping" />
                {/* Dropped packet bouncing off */}
                <text x="210" y="48" fill="#f43f5e" fontSize="8" fontFamily="monospace" fontWeight="bold">PACKET DROPS</text>
                {/* Slow drip exit */}
                <circle cx="300" cy="28" r="5" fill="#f59e0b">
                  <animate attributeName="cx" from="220" to="400" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-400 mt-2">
            Uncompressed telemetry floods the narrow radio funnel, causing collisions &amp; queue drops.
          </div>
        </div>

        {/* Bottom/Right Half (6 cols): Inside Sensor Node Exploded Block */}
        <div className="col-span-6 flex flex-col justify-between bg-[#0d0e12] border border-white/10 rounded-xl p-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
            <span>Inside the Sensor Node</span>
            <span className="text-[10px] text-zinc-400">Energy &amp; Compute Mismatch</span>
          </span>

          <div className="flex items-center justify-between gap-3 my-auto">
            {/* 1. Sensor */}
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 text-center flex flex-col items-center">
              <Activity className="w-5 h-5 text-cyan-400 mb-1" />
              <span className="font-mono text-xs font-bold text-white">Sensor</span>
              <span className="text-[9.5px] font-mono text-zinc-400 mt-1">Raw Samples</span>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-500" />

            {/* 2. 32-bit MCU */}
            <div className="flex-1 bg-slate-900 border border-emerald-500/50 rounded-xl p-3 text-center flex flex-col items-center shadow-lg shadow-emerald-500/10">
              <Cpu className="w-5 h-5 text-emerald-400 mb-1 animate-spin-slow" />
              <span className="font-mono text-xs font-bold text-emerald-300">32-bit MCU</span>
              <span className="text-[9.5px] font-mono text-emerald-400 font-bold mt-1">Cheap Local Math</span>
              <span className="text-[8.5px] font-mono text-zinc-400 mt-0.5">~1 nJ / op</span>
            </div>

            <ArrowRight className="w-4 h-4 text-zinc-500" />

            {/* 3. Radio Antenna */}
            <div className="flex-1 bg-slate-900 border border-rose-500/50 rounded-xl p-3 text-center flex flex-col items-center shadow-lg shadow-rose-500/10 relative overflow-hidden">
              <Radio className="w-5 h-5 text-rose-400 mb-1" />
              <span className="font-mono text-xs font-bold text-rose-300">Radio Antenna</span>
              <span className="text-[9.5px] font-mono text-rose-400 font-bold mt-1">High Power Cost</span>
              <span className="text-[8.5px] font-mono text-zinc-400 mt-0.5">&gt;&gt; 1,000× MCU</span>
              {/* Heat wave radiating animation */}
              <div className="absolute inset-0 bg-rose-500/10 animate-pulse pointer-events-none" />
            </div>
          </div>

          <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-[11px] text-amber-300 flex items-center justify-between">
            <span>Hardware Takeaway:</span>
            <strong>Compute locally to save expensive radio transmission!</strong>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span>Narrow Pipe + Tiny RAM = Necessity for Lightweight In-Memory Edge Compression</span>
        <span className="text-cyan-400">1 Bit TX &gt;&gt; 1 Local Op</span>
      </div>
    </div>
  );
}

// ============================================================================
// 5. SEESAW & DUMB VS EDGE-SMART NODES (SLIDE 4)
// ============================================================================
export function SeesawAndNodeLoopsView({ className = "w-full h-[420px]" }: { className?: string }) {
  const [dumbBattery, setDumbBattery] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setDumbBattery((prev) => (prev <= 15 ? 100 : prev - 15));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <span className="text-cyan-400 font-bold uppercase tracking-wider">The Physics Paradox &amp; Green IoT</span>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10.5px]">
            1 Transmitted Bit &gt;&gt; 1 Local Math Instruction
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10.5px]">
            Green IoT = Months of Battery
          </span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-5 py-3 items-stretch">
        {/* Left Side (4 cols): Animated Balance Seesaw */}
        <div className="col-span-4 bg-[#0d0e12] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            Energy Balance Seesaw
          </span>

          <div className="my-auto relative h-48 flex items-center justify-center">
            <svg viewBox="0 0 280 180" className="w-full h-full">
              {/* Ground reference line */}
              <line x1="15" y1="162" x2="265" y2="162" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

              {/* Fulcrum base */}
              <polygon points="140,120 115,162 165,162" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              <circle cx="140" cy="120" r="5" fill="#38bdf8" />

              {/* Tilting beam: rotated -14 deg counter-clockwise so heavy left weight hits bottom */}
              <g transform="rotate(-14, 140, 120)">
                <line x1="20" y1="120" x2="260" y2="120" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />

                {/* Left Heavy Weight: Radio Transmit 1 Bit (rests down near base) */}
                <foreignObject x="15" y="55" width="85" height="65">
                  <div className="w-full h-full bg-[#1e1322] border-2 border-rose-500 rounded-xl flex flex-col items-center justify-center p-1 shadow-xl shadow-rose-500/20 text-center">
                    <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span className="font-mono text-[9px] font-black text-rose-400 tracking-wider">RADIO TX</span>
                    <span className="font-mono text-[7.5px] text-zinc-300">1 BIT (~100 nJ)</span>
                    <span className="font-mono text-[7px] font-bold text-rose-300 bg-rose-500/30 px-1 rounded mt-0.5">100× HEAVY</span>
                  </div>
                </foreignObject>

                {/* Right Feather-Light Weight: Local Arithmetic (floats high in air) */}
                <foreignObject x="200" y="74" width="60" height="46">
                  <div className="w-full h-full bg-[#05281d] border border-emerald-400 rounded-lg flex flex-col items-center justify-center p-1 shadow-md shadow-emerald-500/10 text-center">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
                    <span className="font-mono text-[8.5px] font-bold text-emerald-300">LOCAL OP</span>
                    <span className="font-mono text-[7px] text-zinc-300">1 nJ (Light)</span>
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>

          <div className="text-[10px] font-mono text-rose-400 text-center font-bold">
            Transmitting 1 Bit burns 100× more microjoules!
          </div>
        </div>

        {/* Center (4 cols): Dumb Node Loop */}
        <div className="col-span-4 bg-[#0d0e12] border border-rose-500/30 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
              Dumb Node (Raw TX)
            </span>
            <span className="font-mono text-[10px] text-rose-300 px-2 py-0.5 rounded bg-rose-500/20">
              Dies in ~14 Days
            </span>
          </div>

          <div className="my-auto space-y-4">
            {/* Node emitting redundant 22C bubbles */}
            <div className="relative h-20 bg-slate-900 rounded-lg p-2 flex items-center justify-between border border-white/5 overflow-hidden">
              <div className="flex items-center gap-2">
                <Radio className="w-6 h-6 text-rose-400 animate-pulse" />
                <span className="font-mono text-xs text-white">Sensor</span>
              </div>

              {/* Repeating 22°C bubbles */}
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-300 font-mono text-xs border border-rose-500/40 animate-ping">
                  22.0°C
                </span>
                <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-300 font-mono text-xs border border-rose-500/40 opacity-70">
                  22.0°C
                </span>
                <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-300 font-mono text-xs border border-rose-500/40 opacity-40">
                  22.0°C
                </span>
              </div>
            </div>

            {/* Draining Battery Bar */}
            <div className="bg-slate-900 border border-rose-500/40 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1">
                <span>Battery Level:</span>
                <span className="text-rose-400 font-bold">{dumbBattery}%</span>
              </div>
              <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-rose-500 transition-all duration-300"
                  style={{ width: `${dumbBattery}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-rose-400 mt-1 block">
                {dumbBattery <= 20 ? "CRITICAL RAPID DISCHARGE" : "Draining every transmission"}
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-400">
            Transmits thousands of duplicate packets daily → massive battery waste.
          </div>
        </div>

        {/* Right (4 cols): Edge-Smart Node Loop */}
        <div className="col-span-4 bg-[#0d0e12] border border-emerald-500/30 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" /> Edge-Smart Node
            </span>
            <span className="font-mono text-[10px] text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/20">
              Lasts 18+ Months
            </span>
          </div>

          <div className="my-auto space-y-4">
            {/* Filter box dissolving 9/10 redundant readings */}
            <div className="relative h-20 bg-slate-900 rounded-lg p-2 flex items-center justify-between border border-emerald-500/30 overflow-hidden">
              <div className="flex items-center gap-2">
                <Cpu className="w-6 h-6 text-emerald-400 animate-spin-slow" />
                <span className="font-mono text-xs text-white">Edge Filter</span>
              </div>

              {/* 9 redundant dissolve, 1 summary escapes */}
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-mono text-[10px] line-through">
                  22°C (x9 Dissolved)
                </span>
                <span className="px-2 py-1 rounded bg-emerald-500 text-slate-950 font-mono text-xs font-bold shadow-md">
                  1× Summary
                </span>
              </div>
            </div>

            {/* Steady Battery Bar */}
            <div className="bg-slate-900 border border-emerald-500/40 rounded-lg p-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1">
                <span>Battery Level:</span>
                <span className="text-emerald-400 font-bold">92% (Steady)</span>
              </div>
              <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-emerald-400 w-[92%]" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Green IoT: Minimal E-Waste &amp; Zero Battery Replacements
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-400">
            Processes data before enabling radio → battery preserved for anomalous events.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span>Edge intelligence shifts the burden from power-hungry radio to ultra-cheap silicon.</span>
        <span className="text-emerald-400">Green IoT Architecture</span>
      </div>
    </div>
  );
}

// ============================================================================
// 6. LITERATURE SURVEY: 4 EXISTING APPROACHES (SLIDE 5)
// ============================================================================
export function LiteratureSurveyGrid({ className = "w-full h-[430px]" }: { className?: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPhase((p) => (p + 1) % 6), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <span className="text-cyan-400 font-bold uppercase tracking-wider">Literature Survey — Four Existing Paradigms</span>
        <span className="text-rose-400 font-bold">Shared Flaw: Locked-in Static Rules</span>
      </div>

      {/* 2x2 Animated Quadrant Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 py-3">
        {/* Q1: SZ Lossy */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-cyan-400">1. SZ Lossy (Wearables)</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
              103× Smaller • Static Bound (10⁻¹)
            </span>
          </div>

          <div className="relative h-20 my-1 bg-slate-950 rounded-lg p-2 border border-white/5 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 300 70" className="w-full h-full">
              {/* Normal sine wave */}
              <path d="M 10 35 Q 35 15, 60 35 T 110 35 T 160 35" stroke="#38bdf8" strokeWidth="2" fill="none" />
              {/* Sharp spike clipped by rigid dashed line */}
              <path d="M 160 35 L 180 10 L 200 35" stroke="#f43f5e" strokeWidth="2.5" fill="none" />
              <line x1="150" y1="20" x2="220" y2="20" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="225" y="23" fill="#f59e0b" fontSize="8" fontFamily="monospace">Fixed 10⁻¹ Bound</text>
              <text x="180" y="58" textAnchor="middle" fill="#f43f5e" fontSize="8.5" fontFamily="monospace">
                Critical spike smoothed &amp; lost!
              </text>
            </svg>
          </div>

          <span className="text-[10.5px] font-mono text-zinc-400">
            Fails when sudden cardiac or bearing anomalies exceed the preset tolerance.
          </span>
        </div>

        {/* Q2: NADPCMC */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-amber-400">2. NADPCMC (Multi-Hop)</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
              60.4% Energy Saved • Hop Error Stacks
            </span>
          </div>

          <div className="relative h-20 my-1 bg-slate-950 rounded-lg p-2 border border-white/5 flex items-center justify-around overflow-hidden">
            {/* 3 Hops showing stacking error */}
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-amber-400 flex items-center justify-center font-mono text-xs text-white">CH1</div>
              <span className="text-[9px] font-mono text-emerald-400 mt-1 block">Err: 1.67%</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-amber-400 flex items-center justify-center font-mono text-xs text-white">CH2</div>
              <span className="text-[9px] font-mono text-amber-400 mt-1 block">Err: 3.10%</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-rose-500 flex items-center justify-center font-mono text-xs text-white">CH3</div>
              <span className="text-[9px] font-mono text-rose-400 font-bold mt-1 block">Err: 4.60%</span>
            </div>
          </div>

          <span className="text-[10.5px] font-mono text-zinc-400">
            Re-compression distortion compounds across network hops without coordination.
          </span>
        </div>

        {/* Q3: 3-Layer Lossless */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-emerald-400">3. 3-Layer Lossless</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              90% Less Power • Fails on High Entropy
            </span>
          </div>

          <div className="relative h-20 my-1 bg-slate-950 rounded-lg p-2 border border-white/5 flex items-center justify-between px-6 overflow-hidden">
            <div className="text-left font-mono text-[10px]">
              <div className="text-emerald-400">Low Entropy: [22, 22, 22] → 1 byte</div>
              <div className="text-rose-400 mt-2 font-bold">High Noise: [22.8, 94.1, 14.3] → No Compression!</div>
            </div>
            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-[9px] font-bold">
              Buffer Overflow
            </div>
          </div>

          <span className="text-[10.5px] font-mono text-zinc-400">
            Lossless dictionary tables choke and overflow when noisy, chaotic physical streams arrive.
          </span>
        </div>

        {/* Q4: Solar S-LZW */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-rose-400">4. Solar S-LZW Aggregation</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
              Zero Night Blackouts • Morning Spike
            </span>
          </div>

          <div className="relative h-20 my-1 bg-slate-950 rounded-lg p-2 border border-white/5 flex items-center justify-around overflow-hidden font-mono text-[10px]">
            <div className="text-center">
              <Moon className="w-5 h-5 text-indigo-400 mx-auto" />
              <span className="text-zinc-400 mt-1 block">Night: Local Stored</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
            <div className="text-center">
              <Sun className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="text-amber-300 mt-1 block">Sunrise: All Woken</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
            <div className="text-center bg-rose-500/20 border border-rose-500/50 p-1.5 rounded">
              <span className="text-rose-400 font-bold block">COLLISION JAM!</span>
              <span className="text-[8px] text-zinc-300">Synchronized burst</span>
            </div>
          </div>

          <span className="text-[10.5px] font-mono text-zinc-400">
            Simultaneous sunrise wakes burst uncompressed data, jamming the gateway receiver.
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span>All 4 approaches fail under changing conditions because their algorithms are statically fixed.</span>
        <span className="text-cyan-400">Need Context-Aware Adaptation</span>
      </div>
    </div>
  );
}

// ============================================================================
// 7. PROPOSED SOLUTION: ADAPTIVE EDGE MIDDLEWARE (SLIDE 6)
// ============================================================================
export function AdaptiveMiddlewareDiagram({ className = "w-full h-[430px]" }: { className?: string }) {
  // Viva Interactive Controls
  const [injectedSpike, setInjectedSpike] = useState(false);
  const [lowBattery, setLowBattery] = useState(false);
  const [networkCongestion, setNetworkCongestion] = useState(false);

  const varianceVal = injectedSpike ? 124.6 : 0.004;
  const isHighVariance = varianceVal > 0.5;

  const currentMode = lowBattery || networkCongestion
    ? "survival"
    : isHighVariance
    ? "critical"
    : "steady";

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <div>
          <span className="text-cyan-400 font-bold uppercase tracking-wider">Proposed Architecture (Figure 1)</span>
          <span className="text-zinc-400 ml-2">Context-Aware Adaptive Edge Middleware</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10.5px]">
            Data Volatility + Battery + Network → Dynamic Strategy
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10.5px]">
            Compatible with Protobuf / CBOR
          </span>
        </div>
      </div>

      {/* Main Middleware Architecture Diagram SVG */}
      <div className="relative flex-1 w-full my-auto flex items-center justify-center">
        <svg viewBox="0 0 1140 280" className="w-full h-full" fill="none">
          {/* 1. Left: 5-Slot Sliding Buffer */}
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="220" height="190" rx="10" fill="#0d0e12" stroke="#38bdf8" strokeWidth="1.8" />
            <text x="18" y="26" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">Sliding Buffer (n=5)</text>
            <text x="18" y="44" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">FIFO Raw Readings</text>

            {/* 5 Slots */}
            {injectedSpike ? (
              <g transform="translate(18, 60)">
                <rect x="0" y="0" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="15" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">[4] 50.2°C (HOT SPIKE)</text>
                <rect x="0" y="26" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="41" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">[3] 35.0°C (RAMP)</text>
                <rect x="0" y="52" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="67" fill="#94a3b8" fontSize="10" fontFamily="monospace">[2] 22.0°C (Calm)</text>
                <rect x="0" y="78" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="93" fill="#94a3b8" fontSize="10" fontFamily="monospace">[1] 22.1°C (Calm)</text>
                <rect x="0" y="104" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="119" fill="#94a3b8" fontSize="10" fontFamily="monospace">[0] 22.0°C (Calm)</text>
              </g>
            ) : (
              <g transform="translate(18, 60)">
                <rect x="0" y="0" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="15" fill="#38bdf8" fontSize="10" fontFamily="monospace">[4] 22.0°C</text>
                <rect x="0" y="26" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="41" fill="#38bdf8" fontSize="10" fontFamily="monospace">[3] 21.9°C</text>
                <rect x="0" y="52" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="67" fill="#38bdf8" fontSize="10" fontFamily="monospace">[2] 22.0°C</text>
                <rect x="0" y="78" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="93" fill="#38bdf8" fontSize="10" fontFamily="monospace">[1] 22.1°C</text>
                <rect x="0" y="104" width="184" height="22" rx="4" fill="#1e293b" />
                <text x="10" y="119" fill="#38bdf8" fontSize="10" fontFamily="monospace">[0] 22.0°C</text>
              </g>
            )}
          </g>

          {/* Connection 1 -> 2 */}
          <line x1="240" y1="135" x2="310" y2="135" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="275" cy="135" r="3.5" fill="#38bdf8" className="animate-ping" />

          {/* 2. Middle-Top: Variance Gauge & Middle-Bottom: LEDs */}
          <g transform="translate(310, 30)">
            {/* Speedometer Gauge Box */}
            <rect x="0" y="0" width="220" height="110" rx="10" fill="#0d0e12" stroke={isHighVariance ? "#f43f5e" : "#38bdf8"} strokeWidth="1.8" />
            <text x="18" y="24" fill={isHighVariance ? "#f43f5e" : "#38bdf8"} fontSize="11" fontFamily="monospace" fontWeight="bold">Variance Gauge (σ²)</text>
            <text x="18" y="42" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">Threshold τ = 0.5</text>

            <g transform="translate(110, 85)">
              {/* Semi-circle dial */}
              <path d="M -70 0 A 70 70 0 0 1 70 0" stroke="#334155" strokeWidth="8" fill="none" />
              {/* Needle */}
              <line
                x1="0"
                y1="0"
                x2={isHighVariance ? "45" : "-50"}
                y2={isHighVariance ? "-45" : "-30"}
                stroke={isHighVariance ? "#f43f5e" : "#38bdf8"}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="0" cy="0" r="5" fill="#ffffff" />
            </g>
            <text x="110" y="98" textAnchor="middle" fill={isHighVariance ? "#f43f5e" : "#38bdf8"} fontSize="11" fontFamily="monospace" fontWeight="bold">
              σ² = {varianceVal.toFixed(3)} {isHighVariance ? "> 0.5 (SPIKE)" : "≤ 0.5 (CALM)"}
            </text>
          </g>

          {/* Status LEDs Box */}
          <g transform="translate(310, 155)">
            <rect x="0" y="0" width="220" height="85" rx="10" fill="#0d0e12" stroke="#262938" strokeWidth="1.5" />
            <text x="18" y="24" fill="#ffffff" fontSize="10.5" fontFamily="monospace" fontWeight="bold">Resource Flags</text>

            <g transform="translate(20, 45)">
              <circle cx="10" cy="8" r="6" fill={lowBattery ? "#f59e0b" : "#10b981"} className={lowBattery ? "animate-ping" : ""} />
              <text x="24" y="12" fill={lowBattery ? "#f59e0b" : "#94a3b8"} fontSize="10" fontFamily="monospace" fontWeight="bold">
                Battery: {lowBattery ? "14% (LOW)" : "92% (OK)"}
              </text>
            </g>

            <g transform="translate(20, 65)">
              <circle cx="10" cy="8" r="6" fill={networkCongestion ? "#f43f5e" : "#10b981"} className={networkCongestion ? "animate-ping" : ""} />
              <text x="24" y="12" fill={networkCongestion ? "#f43f5e" : "#94a3b8"} fontSize="10" fontFamily="monospace" fontWeight="bold">
                Congestion: {networkCongestion ? "HIGH (JAM)" : "CLEAR"}
              </text>
            </g>
          </g>

          {/* Connection 2 -> Center Hub */}
          <line x1="530" y1="85" x2="600" y2="125" stroke="#38bdf8" strokeWidth="2" />
          <line x1="530" y1="195" x2="600" y2="145" stroke="#38bdf8" strokeWidth="2" />

          {/* 3. Center Hub: Cost Function + 3-State FSM */}
          <g transform="translate(600, 45)">
            <rect
              x="0"
              y="0"
              width="210"
              height="180"
              rx="14"
              fill="#1e1b4b"
              stroke="#818cf8"
              strokeWidth="2.5"
              className="shadow-2xl shadow-indigo-500/20"
            />
            <text x="105" y="30" textAnchor="middle" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
              COST FUNCTION &amp; FSM
            </text>
            <text x="105" y="48" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontFamily="monospace">
              Cost = w₁·B + w₂·D
            </text>

            {/* Glowing Active State Badge inside Hub */}
            <g transform="translate(25, 65)">
              <rect
                x="0"
                y="0"
                width="160"
                height="45"
                rx="8"
                fill={
                  currentMode === "steady"
                    ? "#0284c7"
                    : currentMode === "critical"
                    ? "#e11d48"
                    : "#d97706"
                }
              />
              <text x="80" y="26" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                {currentMode === "steady" && "STEADY-STATE"}
                {currentMode === "critical" && "CRITICAL MODE"}
                {currentMode === "survival" && "SURVIVAL MODE"}
              </text>
            </g>

            <text x="105" y="135" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">
              {currentMode === "steady" && "Weights: w₁=0.8, w₂=0.2"}
              {currentMode === "critical" && "Weights: w₁=0.1, w₂=0.9"}
              {currentMode === "survival" && "Radio Sleep • Flash Log"}
            </text>

            <circle cx="105" cy="155" r="4" fill="#10b981" className="animate-ping" />
          </g>

          {/* Connection Hub -> 3 Output Tracks */}
          <line x1="810" y1="90" x2="880" y2="70" stroke={currentMode === "steady" ? "#38bdf8" : "#475569"} strokeWidth={currentMode === "steady" ? "3" : "1.5"} />
          <line x1="810" y1="135" x2="880" y2="135" stroke={currentMode === "critical" ? "#f43f5e" : "#475569"} strokeWidth={currentMode === "critical" ? "3" : "1.5"} />
          <line x1="810" y1="180" x2="880" y2="200" stroke={currentMode === "survival" ? "#f59e0b" : "#475569"} strokeWidth={currentMode === "survival" ? "3" : "1.5"} />

          {/* 4. Right: 3 Output Tracks */}
          {/* Track 1: Lossy Summary */}
          <g transform="translate(880, 40)">
            <rect
              x="0"
              y="0"
              width="230"
              height="55"
              rx="8"
              fill="#0d0e12"
              stroke={currentMode === "steady" ? "#38bdf8" : "#262938"}
              strokeWidth={currentMode === "steady" ? "2.5" : "1"}
            />
            <text x="15" y="24" fill={currentMode === "steady" ? "#38bdf8" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
              1. Lossy Summary Packet
            </text>
            <text x="15" y="42" fill="#94a3b8" fontSize="9" fontFamily="monospace">10 Bytes • 90% Bandwidth Saved</text>
          </g>

          {/* Track 2: Raw / Lossless */}
          <g transform="translate(880, 105)">
            <rect
              x="0"
              y="0"
              width="230"
              height="55"
              rx="8"
              fill="#0d0e12"
              stroke={currentMode === "critical" ? "#f43f5e" : "#262938"}
              strokeWidth={currentMode === "critical" ? "2.5" : "1"}
            />
            <text x="15" y="24" fill={currentMode === "critical" ? "#f43f5e" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
              2. Raw Exact Packet (100%)
            </text>
            <text x="15" y="42" fill="#94a3b8" fontSize="9" fontFamily="monospace">80 Bytes • Zero Distortion Alert</text>
          </g>

          {/* Track 3: Local Flash Buffer */}
          <g transform="translate(880, 170)">
            <rect
              x="0"
              y="0"
              width="230"
              height="55"
              rx="8"
              fill="#0d0e12"
              stroke={currentMode === "survival" ? "#f59e0b" : "#262938"}
              strokeWidth={currentMode === "survival" ? "2.5" : "1"}
            />
            <text x="15" y="24" fill={currentMode === "survival" ? "#f59e0b" : "#64748b"} fontSize="11" fontFamily="monospace" fontWeight="bold">
              3. Store Locally &amp; Radio Sleep
            </text>
            <text x="15" y="42" fill="#94a3b8" fontSize="9" fontFamily="monospace">Flash Queue • Zzz 0 mA draw</text>
          </g>
        </svg>
      </div>

      {/* Bottom Viva Interactive Controls */}
      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-cyan-400">Viva Sandbox Controls:</span>
          <button
            onClick={() => setInjectedSpike(!injectedSpike)}
            className={clsx(
              "px-3 py-1 rounded text-xs font-mono font-semibold border transition-all",
              injectedSpike ? "bg-rose-500 text-white border-rose-400 shadow" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
            )}
          >
            {injectedSpike ? "⚡ Spike Injected (50.2°C)" : "Inject Temp Spike"}
          </button>
          <button
            onClick={() => setLowBattery(!lowBattery)}
            className={clsx(
              "px-3 py-1 rounded text-xs font-mono font-semibold border transition-all",
              lowBattery ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
            )}
          >
            {lowBattery ? "🔋 Battery < 20% (Low)" : "Drain Battery"}
          </button>
          <button
            onClick={() => setNetworkCongestion(!networkCongestion)}
            className={clsx(
              "px-3 py-1 rounded text-xs font-mono font-semibold border transition-all",
              networkCongestion ? "bg-rose-500 text-white border-rose-400 shadow" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
            )}
          >
            {networkCongestion ? "📡 Congestion Jammed" : "Toggle Congestion"}
          </button>
        </div>

        <span className="text-xs font-mono text-zinc-400">
          Current State: <strong className="text-white uppercase">{currentMode}</strong>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 8. DECISION ENGINE: 3-STATE FSM (SLIDE 7)
// ============================================================================
export function FsmStateDiagram({ className = "w-full h-[430px]" }: { className?: string }) {
  const [lockedState, setLockedState] = useState<"normal" | "spike" | "low_battery">("normal");

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <div>
          <span className="text-cyan-400 font-bold uppercase tracking-wider">3-State Finite State Machine (Figure 2)</span>
          <span className="text-zinc-400 ml-2">Decision Logic &amp; Hysteresis Stabilization</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-[11px] font-bold">
            Cost = w₁·Bandwidth + w₂·Distortion
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10.5px]">
            Hysteresis (K=3)
          </span>
        </div>
      </div>

      {/* State Machine Diagram SVG */}
      <div className="relative flex-1 w-full my-auto flex items-center justify-center">
        <svg viewBox="0 0 1000 280" className="w-full h-full" fill="none">
          <defs>
            <marker id="fsm-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker id="fsm-arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
            <marker id="fsm-arr-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* 1. Steady-State Box (Blue) */}
          <g transform="translate(60, 50)">
            <rect
              x="0"
              y="0"
              width="240"
              height="150"
              rx="12"
              fill="#0d0e12"
              stroke="#38bdf8"
              strokeWidth={lockedState === "normal" ? "3" : "1.5"}
              className={lockedState === "normal" ? "shadow-2xl shadow-cyan-500/20" : ""}
            />
            <rect x="0" y="0" width="240" height="32" rx="10" fill="#0284c7" fillOpacity="0.3" />
            <text x="20" y="21" fill="#38bdf8" fontSize="12" fontFamily="monospace" fontWeight="bold">
              1. STEADY-STATE (Lossy)
            </text>
            <text x="20" y="55" fill="#ffffff" fontSize="10.5" fontFamily="monospace">Condition: σ² ≤ τ</text>
            <text x="20" y="75" fill="#94a3b8" fontSize="10" fontFamily="monospace">Weights: w₁=0.8, w₂=0.2</text>
            <rect x="20" y="90" width="200" height="42" rx="6" fill="#161822" />
            <text x="30" y="108" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">Action: Compact Lossy TX</text>
            <text x="30" y="124" fill="#94a3b8" fontSize="9" fontFamily="monospace">90% battery savings</text>
          </g>

          {/* Transition: Steady -> Critical */}
          <path
            d="M 300 90 L 470 90"
            stroke="#f43f5e"
            strokeWidth="2.5"
            markerEnd="url(#fsm-arr-red)"
          />
          <text x="385" y="80" textAnchor="middle" fill="#f43f5e" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            Spike: σ² &gt; τ
          </text>

          {/* Transition: Critical -> Steady (with Hysteresis) */}
          <path
            d="M 470 140 L 300 140"
            stroke="#38bdf8"
            strokeWidth="2"
            markerEnd="url(#fsm-arr)"
          />
          <text x="385" y="155" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">
            K calm windows (σ² ≤ τ)
          </text>

          {/* 2. Critical Mode Box (Red) */}
          <g transform="translate(480, 50)">
            <rect
              x="0"
              y="0"
              width="240"
              height="150"
              rx="12"
              fill="#0d0e12"
              stroke="#f43f5e"
              strokeWidth={lockedState === "spike" ? "3" : "1.5"}
              className={lockedState === "spike" ? "shadow-2xl shadow-rose-500/20" : ""}
            />
            <rect x="0" y="0" width="240" height="32" rx="10" fill="#e11d48" fillOpacity="0.3" />
            <text x="20" y="21" fill="#f43f5e" fontSize="12" fontFamily="monospace" fontWeight="bold">
              2. CRITICAL (Raw Exact)
            </text>
            <text x="20" y="55" fill="#ffffff" fontSize="10.5" fontFamily="monospace">Condition: σ² &gt; τ</text>
            <text x="20" y="75" fill="#94a3b8" fontSize="10" fontFamily="monospace">Weights: w₁=0.1, w₂=0.9</text>
            <rect x="20" y="90" width="200" height="42" rx="6" fill="#161822" />
            <text x="30" y="108" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">Action: Stream Raw 100%</text>
            <text x="30" y="124" fill="#94a3b8" fontSize="9" fontFamily="monospace">Zero distortion, instant alert</text>
          </g>

          {/* Transitions to Survival Mode */}
          <path
            d="M 180 200 L 180 240 L 800 240 L 800 200"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="4 4"
            markerEnd="url(#fsm-arr-amber)"
          />
          <text x="490" y="232" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">
            Resource Trigger: Battery &lt; 20% OR Congestion Detected
          </text>

          {/* 3. Survival Mode Box (Grey/Amber) */}
          <g transform="translate(750, 50)">
            <rect
              x="0"
              y="0"
              width="220"
              height="150"
              rx="12"
              fill="#0d0e12"
              stroke="#f59e0b"
              strokeWidth={lockedState === "low_battery" ? "3" : "1.5"}
              className={lockedState === "low_battery" ? "shadow-2xl shadow-amber-500/20" : ""}
            />
            <rect x="0" y="0" width="220" height="32" rx="10" fill="#d97706" fillOpacity="0.3" />
            <text x="18" y="21" fill="#f59e0b" fontSize="12" fontFamily="monospace" fontWeight="bold">
              3. SURVIVAL (Buffer)
            </text>
            <text x="18" y="55" fill="#ffffff" fontSize="10.5" fontFamily="monospace">Battery &lt; 20% or Jam</text>
            <text x="18" y="75" fill="#94a3b8" fontSize="10" fontFamily="monospace">Radio Asleep (Zzz)</text>
            <rect x="18" y="90" width="184" height="42" rx="6" fill="#161822" />
            <text x="26" y="108" fill="#f59e0b" fontSize="9.5" fontFamily="monospace" fontWeight="bold">Priority: Battery &gt; 5%</text>
            <text x="26" y="124" fill="#94a3b8" fontSize="9" fontFamily="monospace">Single emergency alert fires</text>
          </g>

          {/* Animated Token traveling along transitions */}
          {lockedState === "normal" && (
            <circle cx="180" cy="110" r="5" fill="#38bdf8" className="animate-ping" />
          )}
          {lockedState === "spike" && (
            <circle cx="600" cy="110" r="5" fill="#f43f5e" className="animate-ping" />
          )}
          {lockedState === "low_battery" && (
            <circle cx="860" cy="110" r="5" fill="#f59e0b" className="animate-ping" />
          )}
        </svg>
      </div>

      {/* Bottom Viva Interactive Controls */}
      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-cyan-400">Viva Mode Locking:</span>
          {(["normal", "spike", "low_battery"] as const).map((st) => (
            <button
              key={st}
              onClick={() => setLockedState(st)}
              className={clsx(
                "px-3 py-1 rounded text-xs font-mono font-semibold border transition-all capitalize",
                lockedState === st
                  ? st === "normal"
                    ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow"
                    : st === "spike"
                    ? "bg-rose-500 text-white font-bold border-rose-400 shadow"
                    : "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow"
                  : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
              )}
            >
              {st.replace("_", " ")}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-zinc-400">
          Anti-thrashing: Returns to Steady only after <strong className="text-white">K calm windows</strong>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// 9. CONVEYOR-BELT FIFO QUEUE (SLIDE 8)
// ============================================================================
export function ConveyorFifoQueue({ className = "w-full h-[430px]" }: { className?: string }) {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setPhase((p) => (p === 3 ? 1 : ((p + 1) as 1 | 2 | 3)));
    }, 2800);
    return () => clearInterval(timer);
  }, [isAuto]);

  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <div>
          <span className="text-cyan-400 font-bold uppercase tracking-wider">Conveyor-Belt FIFO Walkthrough</span>
          <span className="text-zinc-400 ml-2">How 5-Reading Queue Catches a Spike Early</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAuto(!isAuto)}
            className="p-1 rounded bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          >
            {isAuto ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <div className="flex rounded bg-black/40 border border-white/10 p-0.5 font-mono text-xs">
            {([1, 2, 3] as const).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPhase(p);
                  setIsAuto(false);
                }}
                className={clsx(
                  "px-2.5 py-0.5 rounded font-semibold transition-all",
                  phase === p ? "bg-cyan-500 text-slate-950 font-bold" : "text-zinc-400 hover:text-white"
                )}
              >
                Phase 0{p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Conveyor Animation Stage */}
      <div className="flex-1 my-auto flex flex-col justify-between py-2 space-y-4">
        {/* Conveyor Belt Box */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <span>FIFO Queue [Oldest Out $\leftarrow$ Entrance Newest]</span>
            <span className={clsx("font-bold px-2 py-0.5 rounded", phase === 1 ? "bg-cyan-500/20 text-cyan-300" : "bg-rose-500/20 text-rose-300")}>
              {phase === 1 && "PHASE 1: CALM BASELINE (STEADY-STATE)"}
              {phase === 2 && "PHASE 2: SPIKE ENTERS FRONT OF QUEUE (σ² SPIKES)"}
              {phase === 3 && "PHASE 3: GATE SWITCHES TO RAW BEFORE SAMPLES EXIT!"}
            </span>
          </div>

          {/* 5 Blocks inside FIFO queue */}
          <div className="flex items-center justify-center gap-3 py-3">
            {phase === 1 ? (
              <>
                <div className="w-20 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-400 p-2 text-center flex flex-col justify-between shadow-lg shadow-cyan-500/20">
                  <span className="font-mono text-[9px] text-zinc-400">Exit [0]</span>
                  <span className="font-mono text-sm font-bold text-white">22.0°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-400 p-2 text-center flex flex-col justify-between">
                  <span className="font-mono text-[9px] text-zinc-400">[1]</span>
                  <span className="font-mono text-sm font-bold text-white">22.1°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-400 p-2 text-center flex flex-col justify-between">
                  <span className="font-mono text-[9px] text-zinc-400">[2]</span>
                  <span className="font-mono text-sm font-bold text-white">22.0°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-400 p-2 text-center flex flex-col justify-between">
                  <span className="font-mono text-[9px] text-zinc-400">[3]</span>
                  <span className="font-mono text-sm font-bold text-white">21.9°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-cyan-500/20 border-2 border-cyan-400 p-2 text-center flex flex-col justify-between">
                  <span className="font-mono text-[9px] text-zinc-400">Entry [4]</span>
                  <span className="font-mono text-sm font-bold text-white">22.0°</span>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-16 rounded-lg bg-slate-800 border border-slate-600 p-2 text-center flex flex-col justify-between opacity-70">
                  <span className="font-mono text-[9px] text-zinc-400">Exit [0]</span>
                  <span className="font-mono text-sm font-bold text-white">22.0°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-slate-800 border border-slate-600 p-2 text-center flex flex-col justify-between opacity-70">
                  <span className="font-mono text-[9px] text-zinc-400">[1]</span>
                  <span className="font-mono text-sm font-bold text-white">22.1°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-slate-800 border border-slate-600 p-2 text-center flex flex-col justify-between opacity-70">
                  <span className="font-mono text-[9px] text-zinc-400">[2]</span>
                  <span className="font-mono text-sm font-bold text-white">22.0°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-rose-500/30 border-2 border-rose-500 p-2 text-center flex flex-col justify-between shadow-xl shadow-rose-500/30 animate-pulse">
                  <span className="font-mono text-[9px] text-rose-300 font-bold">[3] SPIKE</span>
                  <span className="font-mono text-sm font-bold text-white">35.0°</span>
                </div>
                <div className="w-20 h-16 rounded-lg bg-rose-500/30 border-2 border-rose-500 p-2 text-center flex flex-col justify-between shadow-xl shadow-rose-500/30 animate-pulse">
                  <span className="font-mono text-[9px] text-rose-300 font-bold">Entry [4]</span>
                  <span className="font-mono text-sm font-bold text-white">50.2°</span>
                </div>
              </>
            )}
          </div>

          {/* Belt Track Graphic */}
          <div className="w-full h-3 bg-slate-800 rounded-full flex items-center justify-between px-2 overflow-hidden border border-white/10">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "0.4s" }} />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "0.8s" }} />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "1.2s" }} />
          </div>
        </div>

        {/* Live Calculation Bar */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3 text-center">
            <span className="font-mono text-[10px] text-zinc-400 block">WINDOW VARIANCE (σ²)</span>
            <span className={clsx("font-mono text-xl font-bold mt-1 block", phase === 1 ? "text-cyan-400" : "text-rose-400")}>
              {phase === 1 ? "σ² = 0.004 ≤ 0.5" : "σ² = 124.6 > 0.5"}
            </span>
            <span className="text-[9.5px] font-mono text-zinc-400">
              {phase === 1 ? "Flat baseline noise" : "Anomaly detected inside buffer!"}
            </span>
          </div>

          <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3 text-center">
            <span className="font-mono text-[10px] text-zinc-400 block">COST FUNCTION CALCULATION</span>
            <span className="font-mono text-lg font-bold text-white mt-1 block">
              {phase === 1 ? "Lossy (8.4) < Raw (80.0)" : "Raw (10.0) < Lossy (14.5)"}
            </span>
            <span className="text-[9.5px] font-mono text-zinc-400">
              {phase === 1 ? "Weights: w₁=0.8, w₂=0.2" : "Flipped: w₁=0.1, w₂=0.9"}
            </span>
          </div>

          <div className="bg-[#0d0e12] border border-white/10 rounded-xl p-3 text-center">
            <span className="font-mono text-[10px] text-zinc-400 block">OUTPUT GATE ACTION</span>
            <span className={clsx("font-mono text-lg font-bold mt-1 block", phase === 1 ? "text-cyan-400" : "text-rose-400")}>
              {phase === 1 ? "GATE: LOSSY PACKET" : "GATE: LOSSLESS / RAW"}
            </span>
            <span className="text-[9.5px] font-mono text-emerald-400 font-bold">
              {phase === 1 ? "Saves 90% power" : "Locked BEFORE spike exits queue!"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span>Sliding window catches the anomaly early while older samples are still exiting the back of the queue.</span>
        <span className="text-rose-400 font-bold">Zero Distortion at Dashboard</span>
      </div>
    </div>
  );
}

// ============================================================================
// 10. VALIDATION TRACE & FUTURE ROADMAP (SLIDE 9)
// ============================================================================
export function ValidationTraceAndRoadmap({ className = "w-full h-[430px]" }: { className?: string }) {
  return (
    <div className={clsx("relative flex flex-col justify-between rounded-2xl bg-[#161822] border border-[#262938] p-5", className)}>
      <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
        <div>
          <span className="text-cyan-400 font-bold uppercase tracking-wider">Validation Scope &amp; Next Steps</span>
          <span className="text-zinc-400 ml-2">Lab Testbed Trace vs. Physical Field Roadmap</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[10.5px] font-bold">
          23 / 120 Critical Windows Isolated
        </span>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-5 py-3 items-stretch">
        {/* Left (6 cols): Animated 120-Sample Trace (Figure 3) */}
        <div className="col-span-6 bg-[#0d0e12] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              120-Sample Temperature Trace (Figure 3)
            </span>
            <span className="text-[10px] font-mono text-cyan-400">n=5, τ=0.5</span>
          </div>

          <div className="my-auto relative h-52 bg-slate-950 rounded-lg p-2 border border-white/5 flex flex-col justify-between">
            <svg viewBox="0 0 450 180" className="w-full h-full">
              {/* Shaded Red Region for Critical Windows (Samples 40-75) */}
              <rect x="140" y="15" width="130" height="150" fill="#f43f5e" fillOpacity="0.12" rx="4" />
              <text x="205" y="30" textAnchor="middle" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold">
                23 Critical Windows Flagged
              </text>

              {/* Grid Lines */}
              <line x1="30" y1="130" x2="430" y2="130" stroke="#334155" strokeWidth="1" />
              <line x1="30" y1="70" x2="430" y2="70" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <text x="15" y="133" fill="#64748b" fontSize="8" fontFamily="monospace">20°</text>
              <text x="15" y="73" fill="#64748b" fontSize="8" fontFamily="monospace">50°</text>

              {/* Temperature Curve */}
              <path
                d="M 30 128 L 140 128 L 175 60 L 235 60 L 270 128 L 430 128"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Lower Variance Trace crossing tau = 0.5 */}
              <path
                d="M 30 165 L 140 165 L 160 142 L 250 142 L 270 165 L 430 165"
                stroke="#f59e0b"
                strokeWidth="1.8"
                fill="none"
              />
              <line x1="30" y1="150" x2="430" y2="150" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 3" />
              <text x="400" y="146" fill="#ef4444" fontSize="7.5" fontFamily="monospace">τ = 0.5</text>

              {/* Data points */}
              <circle cx="175" cy="60" r="3.5" fill="#f43f5e" className="animate-ping" />
              <circle cx="235" cy="60" r="3.5" fill="#f43f5e" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span className="text-cyan-400">Flat: 97 Calm Windows (Lossy)</span>
            <span className="text-rose-400">Spike: 23 Critical Windows (Raw)</span>
          </div>
        </div>

        {/* Right (6 cols): 2-Tier Roadmap Checklist */}
        <div className="col-span-6 bg-[#0d0e12] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            Scope &amp; Major Project Evolution
          </span>

          <div className="space-y-3 my-auto">
            {/* Completed */}
            <div className="bg-slate-900 border border-emerald-500/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-emerald-300">
                  Completed in Seminar Report:
                </span>
              </div>
              <ul className="text-[11px] font-mono text-zinc-300 space-y-1 ml-6 list-disc">
                <li>Synthetic 120-sample trace evaluation (100% anomaly recall).</li>
                <li>Multi-sensor lab testbed verification (ESP8266 &amp; STM32).</li>
                <li>Zero-distortion raw switching verification inside FIFO queue.</li>
              </ul>
            </div>

            {/* Future Major Project */}
            <div className="bg-slate-900 border border-indigo-500/40 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-indigo-300">
                  Future Major Project Scope:
                </span>
              </div>
              <ul className="text-[11px] font-mono text-zinc-300 space-y-1 ml-6 list-disc">
                <li>Outdoor ESP32 / Raspberry Pi Pico solar field deployment.</li>
                <li>Physical current-shunt / power-meter battery benchmarking.</li>
                <li>Auto-learned adaptive variance thresholds ($\tau$) via micro-Q-learning.</li>
              </ul>
            </div>
          </div>

          <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10.5px] font-mono text-cyan-300">
            Honest engineering boundaries: lab-verified logic ready for full hardware testbench.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
        <span>Validation confirms detection precision; outdoor physical battery profiling is the next frontier.</span>
        <span className="text-cyan-400">Ready for Major Project</span>
      </div>
    </div>
  );
}
