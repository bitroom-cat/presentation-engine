"use client";

import React, { useState, useEffect } from "react";
import { Network, Play, Pause, AlertTriangle, CheckCircle2, Shield } from "lucide-react";
import { clsx } from "clsx";

export function Interactive3DMesh({ className = "w-full h-80" }: { className?: string }) {
  const [strategy, setStrategy] = useState<"static" | "adaptive">("adaptive");
  const [isPlaying, setIsPlaying] = useState(true);
  const [jamLevel, setJamLevel] = useState(12); // %
  const [activeShockNode, setActiveShockNode] = useState<number | null>(null);

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

  const triggerShock = (nodeId: number) => {
    setActiveShockNode(nodeId);
    setTimeout(() => setActiveShockNode(null), 2500);
  };

  return (
    <div className={clsx("relative flex flex-col justify-between select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#1E1D1B] to-[#141413] border border-[#3A3834] p-5", className)}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#3A3834]/80 z-20">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              3D Multi-Hop Network Simulator
              <span
                className={clsx(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                  strategy === "adaptive"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                )}
              >
                {strategy === "adaptive" ? "SMOOTH ADAPTIVE FLOW" : "STATIC CONGESTION JAM"}
              </span>
            </h4>
            <span className="text-[10.5px] text-[#B0ACA3]">
              Click any sensor node below to inject an anomaly vibration event
            </span>
          </div>
        </div>

        {/* Strategy Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setStrategy(strategy === "adaptive" ? "static" : "adaptive");
              setJamLevel(strategy === "adaptive" ? 65 : 14);
            }}
            className={clsx(
              "px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all border",
              strategy === "adaptive"
                ? "bg-emerald-600/30 text-emerald-300 border-emerald-500/40"
                : "bg-rose-600/30 text-rose-300 border-rose-500/40"
            )}
          >
            {strategy === "adaptive" ? "Switch to Static Rule" : "Switch to Adaptive"}
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
            title={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 3D Isometric Mesh Viewport */}
      <div
        className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[190px] overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative preserve-3d transition-transform duration-700"
          style={{
            transform: "rotateX(48deg) rotateZ(-32deg) scale(0.92)",
            width: "480px",
            height: "260px",
          }}
        >
          {/* Isometric Ground Grid Lines */}
          <div className="absolute inset-0 border border-white/10 rounded-3xl bg-black/40 shadow-2xl">
            <div
              className="w-full h-full opacity-15"
              style={{
                backgroundImage: "linear-gradient(#FAF9F5 1px, transparent 1px), linear-gradient(90deg, #FAF9F5 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Central Relay / Gateway Node */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-zinc-950 border-2 border-cyan-400 shadow-2xl flex flex-col items-center justify-center text-center z-10"
            style={{ transform: "translateZ(35px)" }}
          >
            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping absolute -top-1 -right-1" />
            <Network className="w-6 h-6 text-cyan-400" />
            <span className="text-[10px] font-mono font-bold text-white mt-1">EDGE SINK</span>
            <span className="text-[9px] font-mono text-cyan-300">
              {jamLevel > 60 ? "QUEUE OVERFLOW!" : "SLA NORMAL"}
            </span>
          </div>

          {/* 4 Peripheral Motes around Gateway */}
          {[
            { id: 1, name: "Node A", x: "12%", y: "20%", z: 25 },
            { id: 2, name: "Node B", x: "82%", y: "18%", z: 28 },
            { id: 3, name: "Node C", x: "18%", y: "78%", z: 22 },
            { id: 4, name: "Node D", x: "78%", y: "82%", z: 26 },
          ].map((node) => {
            const isShock = activeShockNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => triggerShock(node.id)}
                className={clsx(
                  "absolute p-3 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center hover:scale-110",
                  isShock
                    ? "bg-rose-950/90 border-rose-500 ring-4 ring-rose-500/50 shadow-rose-500/50"
                    : "bg-zinc-900/90 border-white/20 hover:border-cyan-400 shadow-lg"
                )}
                style={{
                  left: node.x,
                  top: node.y,
                  transform: `translateZ(${node.z}px)`,
                }}
              >
                <div
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full mb-1",
                    isShock ? "bg-rose-400 animate-bounce" : "bg-emerald-400"
                  )}
                />
                <span className="text-[10px] font-mono font-bold text-white">{node.name}</span>
                <span className="text-[8.5px] font-mono text-zinc-400">
                  {isShock ? "ANOMALY!" : strategy === "adaptive" ? "Steady" : "Bursting"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Live Metrics & Status Bar */}
      <div className="z-20 pt-3 border-t border-[#3A3834]/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-[#B0ACA3]">Wireless Channel Contention:</span>
            <span
              className={clsx(
                "font-bold text-sm",
                jamLevel > 60 ? "text-rose-400" : "text-emerald-400"
              )}
            >
              {Math.round(jamLevel)}%
            </span>
          </div>

          <div className="w-24 bg-zinc-800 rounded-full h-2 overflow-hidden border border-white/10 hidden sm:block">
            <div
              className={clsx(
                "h-full transition-all duration-300",
                jamLevel > 60 ? "bg-rose-500" : "bg-emerald-500"
              )}
              style={{ width: `${jamLevel}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-300">
          {strategy === "adaptive" ? (
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Staggered Buffer Release (No Morning Traffic Spike)
            </span>
          ) : (
            <span className="flex items-center gap-1 text-rose-400 font-medium">
              <AlertTriangle className="w-3.5 h-3.5" />
              Synchronized Sunrise Wake-Up Overloading Relays [4]
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
