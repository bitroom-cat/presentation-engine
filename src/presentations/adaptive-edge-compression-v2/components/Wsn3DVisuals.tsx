"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Radio, Activity, Battery, Layers, Rotate3d, Zap, Play, Pause, AlertTriangle, CheckCircle2, Shield, Network } from "lucide-react";
import { clsx } from "clsx";

// ============================================================================
// 1. INTERACTIVE 3D EXPLODED SENSOR HARDWARE COMPONENT
// ============================================================================
export function Interactive3DSensor({ className = "w-full h-80" }: { className?: string }) {
  const [rotX, setRotX] = useState(20);
  const [rotY, setRotY] = useState(-25);
  const [isExploded, setIsExploded] = useState(false);
  const [mode, setMode] = useState<"steady" | "critical" | "survival">("steady");
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotY((prev) => prev + deltaX * 0.4);
    setRotX((prev) => Math.max(-50, Math.min(65, prev - deltaY * 0.4)));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const modeColors = {
    steady: {
      border: "border-[#38bdf8]/60",
      glow: "shadow-[0_0_35px_rgba(56,189,248,0.35)]",
      accent: "text-[#38bdf8]",
      badge: "bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/40",
      packetBg: "bg-[#38bdf8]",
      desc: "Steady-State Mode • Low Volatility σ² ≤ τ • Radio transmits compact 10-byte packet • 90% Energy Saved",
    },
    critical: {
      border: "border-[#f43f5e]/80",
      glow: "shadow-[0_0_40px_rgba(244,63,94,0.55)]",
      accent: "text-[#f43f5e]",
      badge: "bg-[#f43f5e]/20 text-[#f43f5e] border-[#f43f5e]/40",
      packetBg: "bg-[#f43f5e]",
      desc: "Critical Anomaly Mode • High Volatility σ² > τ • Raw Exact Telemetry (100% Fidelity)",
    },
    survival: {
      border: "border-[#f59e0b]/70",
      glow: "shadow-[0_0_35px_rgba(245,158,11,0.45)]",
      accent: "text-[#f59e0b]",
      badge: "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/40",
      packetBg: "bg-[#f59e0b]",
      desc: "Survival Buffer Mode • Battery < 20% or Congestion • Radio Asleep, Flash Logged",
    },
  };

  const activeTheme = modeColors[mode];

  return (
    <div
      className={clsx(
        "relative flex flex-col justify-between select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#161822] to-[#0d0e12] border border-[#262938] p-5 shadow-2xl",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* Top Controls Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 z-20">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
            <Rotate3d className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              3D Edge Node Architecture
              <span className={clsx("px-2 py-0.5 rounded-full text-[10px] font-bold border", activeTheme.badge)}>
                {mode.toUpperCase()} MODE
              </span>
            </h4>
            <span className="text-[10px] text-zinc-400 font-mono">
              Drag to rotate in 3D • Toggle layer separation
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={clsx(
              "px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all border flex items-center gap-1.5 shadow-sm",
              isExploded
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
                : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
            )}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isExploded ? "Assemble Node" : "Explode Layers"}</span>
          </button>

          <div className="flex rounded-lg bg-black/40 border border-white/10 p-0.5 text-xs font-mono">
            {(["steady", "critical", "survival"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={clsx(
                  "px-2.5 py-1 rounded-md capitalize font-semibold transition-all",
                  mode === m
                    ? m === "steady"
                      ? "bg-cyan-500 text-slate-950 shadow"
                      : m === "critical"
                      ? "bg-rose-500 text-white shadow"
                      : "bg-amber-500 text-slate-950 shadow"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Hardware Canvas */}
      <div
        className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[190px]"
        style={{ perspective: "1100px" }}
      >
        <div
          className="relative preserve-3d transition-transform duration-200 ease-out flex items-center justify-center"
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Layer 1: Sensor Transducer */}
          <div
            className={clsx(
              "absolute w-60 h-28 rounded-2xl border transition-all duration-700 p-4 flex flex-col justify-between backdrop-blur-md",
              "bg-slate-900/85 border-slate-700/80 shadow-2xl",
              activeTheme.glow
            )}
            style={{
              transform: `translateZ(${isExploded ? -75 : -15}px)`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-400 font-semibold tracking-wider">
                01 • ANALOG TRANSDUCER
              </span>
              <Activity className={clsx("w-4 h-4", activeTheme.accent)} />
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-300">Continuous Vibration / Temp</span>
              <span className="text-cyan-400 font-bold">100 Hz</span>
            </div>
          </div>

          {/* Layer 2: 32-bit MCU with Adaptive Middleware */}
          <div
            className={clsx(
              "absolute w-64 h-32 rounded-2xl border transition-all duration-700 p-4 flex flex-col justify-between backdrop-blur-md z-10",
              "bg-[#161822]/95",
              activeTheme.border,
              activeTheme.glow
            )}
            style={{
              transform: `translateZ(${isExploded ? 0 : 0}px)`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-white tracking-wider flex items-center gap-1.5">
                <Cpu className={clsx("w-3.5 h-3.5", activeTheme.accent)} />
                02 • ARM CORTEX-M4 (32-BIT)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                16 KB RAM
              </span>
            </div>

            {/* Microcontroller Inner Die with glowing status */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-2 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white font-mono">Adaptive Middleware FSM</div>
                <div className="text-[9.5px] text-zinc-400 font-mono">Sliding Variance (n=5) + Cost Calc</div>
              </div>
              <div className={clsx("w-2.5 h-2.5 rounded-full animate-ping", activeTheme.packetBg)} />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
              <span>Local Math: ~1 nJ/cycle</span>
              <span className={clsx("font-bold", activeTheme.accent)}>
                {mode === "steady" ? "Cost: 8.4" : mode === "critical" ? "Cost: 10.0" : "Radio Sleeping"}
              </span>
            </div>
          </div>

          {/* Layer 3: Low-Power Radio Transceiver */}
          <div
            className={clsx(
              "absolute w-60 h-28 rounded-2xl border transition-all duration-700 p-4 flex flex-col justify-between backdrop-blur-md",
              "bg-slate-900/85 border-slate-700/80 shadow-2xl",
              activeTheme.glow
            )}
            style={{
              transform: `translateZ(${isExploded ? 75 : 15}px)`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-400 font-semibold tracking-wider">
                03 • IEEE 802.15.4 / BLE RADIO
              </span>
              <Radio className={clsx("w-4 h-4", activeTheme.accent)} />
            </div>

            {/* Glowing RF Waves */}
            <div className="relative h-6 flex items-center justify-center overflow-hidden">
              <div
                className={clsx(
                  "w-12 h-12 rounded-full border-2 border-dashed absolute animate-ping opacity-60",
                  activeTheme.border
                )}
                style={{ animationDuration: mode === "survival" ? "4s" : "1.2s" }}
              />
              <span className="text-[10px] font-mono font-bold text-white relative z-10">
                {mode === "survival" ? "RADIO OFF (0 mA)" : "TX: ~15 mA (Peak)"}
              </span>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-400">TX Cost: &gt;&gt; 1,000× Local Math</span>
              <span className={clsx("font-semibold", activeTheme.accent)}>
                {mode === "steady" ? "Lossy 10 B" : mode === "critical" ? "Raw 80 B" : "Buffered"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Drawer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono z-20">
        <div className="flex items-center gap-2">
          <span className={clsx("w-2 h-2 rounded-full", activeTheme.packetBg)} />
          <span className="text-zinc-300">{activeTheme.desc}</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <span className="flex items-center gap-1">
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
            {mode === "survival" ? "18% Alert" : "94% Healthy"}
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. INTERACTIVE 3D MULTI-HOP WSN MESH SIMULATOR
// ============================================================================
export function Interactive3DMesh({ className = "w-full h-80" }: { className?: string }) {
  const [strategy, setStrategy] = useState<"adaptive" | "static">("adaptive");
  const [isPlaying, setIsPlaying] = useState(true);
  const [jamLevel, setJamLevel] = useState(12);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (strategy === "static") {
        setJamLevel((prev) => Math.min(94, prev + (Math.random() * 8 + 4)));
      } else {
        setJamLevel((prev) => Math.max(8, prev - (Math.random() * 6 + 2)));
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isPlaying, strategy]);

  return (
    <div className={clsx("relative flex flex-col justify-between select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#161822] to-[#0d0e12] border border-[#262938] p-5 shadow-2xl", className)}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 z-20">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              3D Multi-Hop WSN Mesh Simulation
              <span
                className={clsx(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                  strategy === "adaptive"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                )}
              >
                {strategy === "adaptive" ? "ADAPTIVE FLOW" : "STATIC CONGESTION"}
              </span>
            </h4>
            <span className="text-[10px] text-zinc-400 font-mono">
              Multi-hop radio links forwarding telemetry to Central Gateway Tower
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            title={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <div className="flex rounded-lg bg-black/40 border border-white/10 p-0.5 text-xs font-mono">
            <button
              onClick={() => setStrategy("adaptive")}
              className={clsx(
                "px-2.5 py-1 rounded-md font-semibold transition-all",
                strategy === "adaptive" ? "bg-emerald-500 text-slate-950 font-bold shadow" : "text-zinc-400 hover:text-white"
              )}
            >
              Adaptive
            </button>
            <button
              onClick={() => setStrategy("static")}
              className={clsx(
                "px-2.5 py-1 rounded-md font-semibold transition-all",
                strategy === "static" ? "bg-rose-500 text-white font-bold shadow" : "text-zinc-400 hover:text-white"
              )}
            >
              Static Rule
            </button>
          </div>
        </div>
      </div>

      {/* 3D Isometric Mesh Topology Visual */}
      <div className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[185px]">
        <svg viewBox="0 0 680 180" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="mesh-link-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
            </linearGradient>
            <filter id="mesh-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dotted Connection Lines */}
          <g strokeDasharray="3 4" stroke={strategy === "adaptive" ? "#38bdf8" : "#f43f5e"} strokeWidth="1.5" opacity="0.6">
            <line x1="80" y1="50" x2="220" y2="85" />
            <line x1="80" y1="130" x2="220" y2="95" />
            <line x1="220" y1="90" x2="380" y2="70" />
            <line x1="220" y1="90" x2="380" y2="120" />
            <line x1="380" y1="70" x2="560" y2="90" />
            <line x1="380" y1="120" x2="560" y2="90" />
            <line x1="560" y1="90" x2="630" y2="90" stroke="#10b981" strokeWidth="2" strokeDasharray="none" />
          </g>

          {/* Animated Traveling Packets */}
          {isPlaying && (
            <g>
              <circle r="4" fill={strategy === "adaptive" ? "#38bdf8" : "#f43f5e"} filter="url(#mesh-glow)">
                <animateMotion path="M 80 50 L 220 85 L 380 70 L 560 90 L 630 90" dur={strategy === "adaptive" ? "3s" : "6s"} repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill={strategy === "adaptive" ? "#10b981" : "#f43f5e"} filter="url(#mesh-glow)">
                <animateMotion path="M 80 130 L 220 95 L 380 120 L 560 90 L 630 90" dur={strategy === "adaptive" ? "3.4s" : "7s"} repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {/* Nodes */}
          {/* Node 1 */}
          <g transform="translate(80, 50)">
            <circle r="14" fill="#161822" stroke="#38bdf8" strokeWidth="2" />
            <circle r="22" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" className="animate-spin-slow" />
            <text x="0" y="3.5" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">S1</text>
            <text x="0" y="-18" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Forest</text>
          </g>

          {/* Node 2 */}
          <g transform="translate(80, 130)">
            <circle r="14" fill="#161822" stroke="#38bdf8" strokeWidth="2" />
            <circle r="22" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" className="animate-spin-slow" />
            <text x="0" y="3.5" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">S2</text>
            <text x="0" y="26" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Crop</text>
          </g>

          {/* Node 3 (Cluster Head) */}
          <g transform="translate(220, 90)">
            <circle r="16" fill="#161822" stroke="#38bdf8" strokeWidth="2.5" />
            <circle r="26" stroke="#38bdf8" strokeWidth="1" opacity="0.3" className="animate-pulse" />
            <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">CH1</text>
            <text x="0" y="-21" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">Hop 1</text>
          </g>

          {/* Node 4 */}
          <g transform="translate(380, 70)">
            <circle r="15" fill="#161822" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="3.5" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">CH2</text>
            <text x="0" y="-19" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Factory</text>
          </g>

          {/* Node 5 */}
          <g transform="translate(380, 120)">
            <circle r="15" fill="#161822" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="3.5" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">CH3</text>
            <text x="0" y="25" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Plant</text>
          </g>

          {/* Gateway Tower */}
          <g transform="translate(560, 90)">
            <rect x="-18" y="-22" width="36" height="44" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" />
            <path d="M-6 -6 L0 -14 L6 -6 Z" fill="#10b981" />
            <line x1="0" y1="-14" x2="0" y2="-22" stroke="#10b981" strokeWidth="2" />
            <circle cx="0" cy="-22" r="3" fill="#10b981" className="animate-ping" />
            <text x="0" y="10" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
          </g>

          {/* Cloud Dashboard Monitor */}
          <g transform="translate(635, 90)">
            <rect x="-18" y="-15" width="36" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="-12" y1="-5" x2="-6" y2="2" stroke="#10b981" strokeWidth="1.5" />
            <line x1="-6" y1="2" x2="2" y2="-8" stroke="#10b981" strokeWidth="1.5" />
            <line x1="2" y1="-8" x2="12" y2="3" stroke="#10b981" strokeWidth="1.5" />
            <rect x="-6" y="11" width="12" height="4" fill="#475569" />
            <line x1="-10" y1="15" x2="10" y2="15" stroke="#475569" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono z-20">
        <div className="flex items-center gap-3">
          <span className="text-zinc-400">Network Congestion:</span>
          <div className="w-28 h-2 rounded-full bg-black/50 border border-white/10 overflow-hidden">
            <div
              className={clsx(
                "h-full transition-all duration-500",
                strategy === "adaptive" ? "bg-emerald-400" : "bg-rose-500"
              )}
              style={{ width: `${Math.round(jamLevel)}%` }}
            />
          </div>
          <span className={clsx("font-bold", strategy === "adaptive" ? "text-emerald-400" : "text-rose-400")}>
            {Math.round(jamLevel)}%
          </span>
        </div>

        <span className="text-zinc-400">
          {strategy === "adaptive" ? "Dynamic Mode: Packets throttle on high load" : "Static Mode: Drops on bottleneck"}
        </span>
      </div>
    </div>
  );
}
