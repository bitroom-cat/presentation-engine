"use client";

import React from "react";
import { PresentationThemeSettings } from "./types";
import {
  X,
  Sun,
  Moon,
  Sliders,
  Grid,
  Check,
  RotateCcw,
  Sparkles,
  Layers,
  Palette,
  Maximize2
} from "lucide-react";
import { clsx } from "clsx";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PresentationThemeSettings;
  onChangeSettings: (newSettings: PresentationThemeSettings) => void;
  onResetSettings: () => void;
}

export function SettingsModal({
  isOpen,
  onClose,
  settings,
  onChangeSettings,
  onResetSettings,
}: SettingsModalProps) {
  if (!isOpen) return null;

  const update = (partial: Partial<PresentationThemeSettings>) => {
    onChangeSettings({
      ...settings,
      ...partial,
    });
  };

  const isDark = settings.mode === "dark";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 print:hidden">
      <div className="relative w-full max-w-lg bg-[#12141e] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col font-sans select-none">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#171926]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide text-white">Presentation Appearance</h3>
              <p className="text-[11px] font-mono text-zinc-400">Theme mode, tone range &amp; background grid</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* 1. THEME MODE SELECTION */}
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2.5">
              1. Theme Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Dark Mode Card */}
              <button
                type="button"
                onClick={() => update({ mode: "dark" })}
                className={clsx(
                  "flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left relative overflow-hidden",
                  isDark
                    ? "bg-[#181a28] border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50"
                    : "bg-[#0d0f18] border-white/10 hover:border-white/20 text-zinc-400 hover:text-white"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Dark Mode</div>
                  <div className="text-[10px] font-mono text-zinc-400">Obsidian &amp; Neon Glow</div>
                </div>
                {isDark && (
                  <div className="absolute top-2.5 right-2.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                )}
              </button>

              {/* Creamy White Mode Card */}
              <button
                type="button"
                onClick={() => update({ mode: "creamy-light" })}
                className={clsx(
                  "flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left relative overflow-hidden",
                  !isDark
                    ? "bg-[#22211d] border-[#D97757] shadow-lg shadow-[#D97757]/10 ring-1 ring-[#D97757]/50"
                    : "bg-[#0d0f18] border-white/10 hover:border-white/20 text-zinc-400 hover:text-white"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E2D9] flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4 text-[#D97757]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Creamy White</div>
                  <div className="text-[10px] font-mono text-[#D97757]">Warm Editorial Paper</div>
                </div>
                {!isDark && (
                  <div className="absolute top-2.5 right-2.5">
                    <Check className="w-3.5 h-3.5 text-[#D97757]" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* 2. TONE & BRIGHTNESS RANGE SLIDER */}
          <div className="bg-[#161824] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                {isDark ? "Dark Tone Depth" : "Cream Warmth & Tone"}
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/10">
                {settings.toneLevel}% • {isDark ? (
                  settings.toneLevel < 33 ? "Deep Void" : settings.toneLevel < 66 ? "Studio Dark" : "Slate Slate"
                ) : (
                  settings.toneLevel < 33 ? "Antique Linen" : settings.toneLevel < 66 ? "Editorial Cream" : "Soft Ivory"
                )}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={settings.toneLevel}
              onChange={(e) => update({ toneLevel: parseInt(e.target.value, 10) })}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-black/60 rounded-lg appearance-none"
            />

            {/* Quick Presets */}
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1">
              <button
                type="button"
                onClick={() => update({ toneLevel: 0 })}
                className="hover:text-white transition-colors underline decoration-dotted"
              >
                {isDark ? "0% Void" : "0% Linen"}
              </button>
              <button
                type="button"
                onClick={() => update({ toneLevel: 50 })}
                className="hover:text-white transition-colors underline decoration-dotted text-cyan-400"
              >
                50% Balanced
              </button>
              <button
                type="button"
                onClick={() => update({ toneLevel: 100 })}
                className="hover:text-white transition-colors underline decoration-dotted"
              >
                {isDark ? "100% Slate" : "100% Ivory"}
              </button>
            </div>
          </div>

          {/* 3. BACKGROUND GRID PATTERN (USER REQUEST) */}
          <div className="bg-[#161824] border border-white/10 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                  <Grid className="w-3.5 h-3.5 text-emerald-400" />
                  Background Grid Pattern
                </span>
                <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                  High-tech architectural grid behind slides
                </p>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                onClick={() => update({ showGrid: !settings.showGrid })}
                className={clsx(
                  "w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5",
                  settings.showGrid ? "bg-emerald-500" : "bg-zinc-800"
                )}
              >
                <div
                  className={clsx(
                    "w-5 h-5 rounded-full bg-white transition-transform shadow-md",
                    settings.showGrid ? "translate-x-5" : "translate-x-0"
                  )}
                />
              </button>
            </div>

            {settings.showGrid && (
              <div className="space-y-3.5 pt-2 border-t border-white/10">
                {/* Pattern Style Selector */}
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1.5">Grid Style:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "grid", label: "Clean Lines" },
                      { id: "crosshair", label: "Architectural (+)" },
                      { id: "dots", label: "Dot Matrix" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => update({ patternStyle: st.id as any })}
                        className={clsx(
                          "py-1.5 px-2 rounded-lg font-mono text-[11px] border transition-colors text-center",
                          settings.patternStyle === st.id
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold"
                            : "bg-black/30 border-white/5 text-zinc-400 hover:text-white"
                        )}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Density Selector */}
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1.5">Grid Density:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "dense", label: "Dense (20px)" },
                      { id: "standard", label: "Standard (32px)" },
                      { id: "spacious", label: "Spacious (48px)" },
                    ].map((den) => (
                      <button
                        key={den.id}
                        type="button"
                        onClick={() => update({ gridDensity: den.id as any })}
                        className={clsx(
                          "py-1.5 px-2 rounded-lg font-mono text-[11px] border transition-colors text-center",
                          settings.gridDensity === den.id
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold"
                            : "bg-black/30 border-white/5 text-zinc-400 hover:text-white"
                        )}
                      >
                        {den.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Opacity Slider */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                    <span>Grid Visibility / Opacity:</span>
                    <span className="text-white font-bold">{settings.gridOpacity}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={settings.gridOpacity}
                    onChange={(e) => update({ gridOpacity: parseInt(e.target.value, 10) })}
                    className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-black/60 rounded-lg appearance-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#171926]">
          <button
            type="button"
            onClick={onResetSettings}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
