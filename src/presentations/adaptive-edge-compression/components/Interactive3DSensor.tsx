"use client";

import React, { useState } from "react";
import { Cpu, Radio, Activity, Battery, Layers, Rotate3d, Zap } from "lucide-react";
import { clsx } from "clsx";

export function Interactive3DSensor({ className = "w-full h-80" }: { className?: string }) {
  const [rotX, setRotX] = useState(22);
  const [rotY, setRotY] = useState(-28);
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
      border: "border-emerald-500/60",
      glow: "shadow-[0_0_35px_rgba(74,107,93,0.4)]",
      accent: "text-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      packetBg: "bg-emerald-400",
      desc: "Lossy Summary Mode • Radio transmits tiny 10-byte packet • 90% Energy Saved",
    },
    critical: {
      border: "border-rose-500/80",
      glow: "shadow-[0_0_40px_rgba(166,61,51,0.6)]",
      accent: "text-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      packetBg: "bg-rose-500",
      desc: "Critical Anomaly Mode • High Volatility σ² > τ • Raw Exact Telemetry (100% Fidelity)",
    },
    survival: {
      border: "border-amber-500/70",
      glow: "shadow-[0_0_35px_rgba(158,114,43,0.5)]",
      accent: "text-amber-400",
      badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      packetBg: "bg-amber-400",
      desc: "Survival Buffer Mode • Battery Low / Congestion • Radio Asleep, Flash Logged",
    },
  };

  const activeTheme = modeColors[mode];

  return (
    <div className={clsx("relative flex flex-col justify-between select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#1E1D1B] to-[#141413] border border-[#3A3834] p-5", className)}>
      {/* Top 3D Control Bar */}
      <div className="flex items-center justify-between z-20 pb-3 border-b border-[#3A3834]/80">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#D97757]">
            <Rotate3d className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              Interactive 3D Sensor Node
              <span className={clsx("px-2 py-0.5 rounded-full text-[10px] font-bold border", activeTheme.badge)}>
                {mode.toUpperCase()}
              </span>
            </h4>
            <span className="text-[10.5px] text-[#B0ACA3] hidden sm:inline">
              Drag mouse to inspect internal hardware layers in 3D space
            </span>
          </div>
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={clsx(
              "px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all border flex items-center gap-1.5",
              isExploded
                ? "bg-[#D97757] text-white border-[#D97757] shadow-lg shadow-[#D97757]/30"
                : "bg-white/5 hover:bg-white/10 text-[#FAF9F5] border-white/10"
            )}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isExploded ? "Assemble Node" : "Explode Layers"}</span>
          </button>

          {/* Interactive Mode Switches */}
          <div className="flex rounded-lg bg-black/40 p-0.5 border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => setMode("steady")}
              className={clsx(
                "px-2.5 py-1 rounded-md transition-colors",
                mode === "steady" ? "bg-emerald-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              Steady
            </button>
            <button
              onClick={() => setMode("critical")}
              className={clsx(
                "px-2.5 py-1 rounded-md transition-colors",
                mode === "critical" ? "bg-rose-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              Critical
            </button>
            <button
              onClick={() => setMode("survival")}
              className={clsx(
                "px-2.5 py-1 rounded-md transition-colors",
                mode === "survival" ? "bg-amber-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              )}
            >
              Survival
            </button>
          </div>
        </div>
      </div>

      {/* 3D Perspective Canvas Stage */}
      <div
        className="relative flex-1 w-full flex items-center justify-center cursor-grab active:cursor-grabbing my-auto min-h-[200px]"
        style={{ perspective: "1100px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Animated Flying Data Particle Stream */}
        {mode !== "survival" && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div
              className={clsx(
                "w-3 h-3 rounded-full animate-ping shadow-lg",
                mode === "critical" ? "bg-rose-400" : "bg-emerald-400"
              )}
              style={{
                transform: `translate(${Math.sin(rotY * 0.05) * 50}px, -70px)`,
              }}
            />
          </div>
        )}

        {/* 3D Rotatable Enclosure */}
        <div
          className={clsx("relative preserve-3d transition-transform duration-100 ease-out", activeTheme.glow)}
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            width: "220px",
            height: "170px",
          }}
        >
          {/* LAYER 1 (TOP): Radio Uplink & Antenna */}
          <div
            className={clsx(
              "absolute inset-0 rounded-2xl bg-zinc-900/90 border-2 backdrop-blur-md p-3 flex flex-col justify-between transition-all duration-500",
              activeTheme.border
            )}
            style={{
              transform: isExploded ? "translateZ(85px)" : "translateZ(30px)",
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Radio className={clsx("w-3.5 h-3.5", activeTheme.accent)} />
                Layer 1: 2.4GHz Radio
              </span>
              <span className="text-[10px] text-zinc-400">{mode === "survival" ? "SLEEP" : "TX READY"}</span>
            </div>
            <div className="flex items-center justify-center my-auto">
              <div className="relative flex items-center justify-center">
                <div className={clsx("w-8 h-8 rounded-full border-2 animate-ping opacity-60", activeTheme.border)} />
                <div className={clsx("w-3 h-3 rounded-full", activeTheme.packetBg)} />
              </div>
            </div>
            <div className="text-[10px] font-mono text-center text-zinc-400">
              {mode === "critical" ? "Bursting Raw IEEE 802.15.4" : mode === "steady" ? "Compressed 10B Summary" : "Radio Duty: 0% (Asleep)"}
            </div>
          </div>

          {/* LAYER 2 (MIDDLE): Cortex-M4 MCU Core & Adaptive Middleware */}
          <div
            className={clsx(
              "absolute inset-0 rounded-2xl bg-zinc-950/95 border-2 border-cyan-500/50 p-3 flex flex-col justify-between transition-all duration-500 shadow-xl",
              isExploded ? "shadow-cyan-500/20" : ""
            )}
            style={{
              transform: isExploded ? "translateZ(0px)" : "translateZ(0px)",
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                Layer 2: Adaptive FSM
              </span>
              <span className="text-[10px] font-mono text-cyan-300">ARM 32-bit</span>
            </div>
            <div className="bg-black/60 rounded-lg p-2 font-mono text-[11px] text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>σ² Variance:</span>
                <span className={clsx("font-bold", mode === "critical" ? "text-rose-400" : "text-emerald-400")}>
                  {mode === "critical" ? "124.6 (Spike!)" : mode === "steady" ? "0.004 (Calm)" : "0.002"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Doorway Guard:</span>
                <span className="text-zinc-400">K-Window Cooldown</span>
              </div>
            </div>
            <div className="text-[9.5px] font-mono text-cyan-400/90 text-center">
              Constant Memory FIFO (n = 5 samples)
            </div>
          </div>

          {/* LAYER 3 (LOWER): Sensor Crystal & Physical IMU */}
          <div
            className={clsx(
              "absolute inset-0 rounded-2xl bg-zinc-900/90 border-2 border-[#D97757]/60 p-3 flex flex-col justify-between transition-all duration-500 shadow-xl",
              isExploded ? "shadow-[#D97757]/20" : ""
            )}
            style={{
              transform: isExploded ? "translateZ(-85px)" : "translateZ(-30px)",
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-[#D97757]">
                <Activity className="w-3.5 h-3.5" />
                Layer 3: Physical Sensor
              </span>
              <span className="text-[10px] text-zinc-400">MEMS Core</span>
            </div>
            <div className="flex items-center justify-around my-auto">
              <div className="text-center">
                <span className="block text-[10px] text-zinc-400">Sampling</span>
                <span className="text-xs font-mono font-bold text-white">1000 Hz</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div className="text-center">
                <span className="block text-[10px] text-zinc-400">Noise Floor</span>
                <span className="text-xs font-mono font-bold text-[#D97757]">±0.05%</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-center text-zinc-400">
              High-Frequency Telemetry Ingest
            </div>
          </div>

          {/* LAYER 4 (BOTTOM): Lithium Energy Cell */}
          <div
            className={clsx(
              "absolute inset-0 rounded-2xl bg-zinc-950 border-2 border-amber-500/50 p-3 flex flex-col justify-between transition-all duration-500",
              isExploded ? "shadow-amber-500/20" : ""
            )}
            style={{
              transform: isExploded ? "translateZ(-170px)" : "translateZ(-60px)",
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-amber-400">
                <Battery className="w-3.5 h-3.5" />
                Layer 4: Power Source
              </span>
              <span className="text-[10px] text-zinc-400">3.7V LiPo</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden p-0.5 border border-white/10 my-auto">
              <div
                className={clsx(
                  "h-full rounded-full transition-all duration-500",
                  mode === "survival" ? "w-1/5 bg-rose-500" : "w-4/5 bg-emerald-500"
                )}
              />
            </div>
            <div className="text-[10px] font-mono text-center text-zinc-400">
              {mode === "survival" ? "Low Charge (< 20%) • Preserving Energy" : "Healthy Battery • Normal Autonomy"}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Explanatory Text */}
      <div className="z-20 pt-3 border-t border-[#3A3834]/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Zap className={clsx("w-4 h-4 shrink-0", activeTheme.accent)} />
          <span className="text-zinc-200 font-medium">{activeTheme.desc}</span>
        </div>
        <span className="text-[11px] font-mono text-[#B0ACA3] hidden md:inline">
          RotX: {Math.round(rotX)}° • RotY: {Math.round(rotY)}°
        </span>
      </div>
    </div>
  );
}
