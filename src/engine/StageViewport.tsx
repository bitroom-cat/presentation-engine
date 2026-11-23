"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { DeckTheme, PresentationThemeSettings } from "./types";
import { Maximize2, ZoomIn, ZoomOut, RefreshCw } from "lucide-react";
import { clsx } from "clsx";

interface StageViewportProps {
  children: React.ReactNode;
  theme?: DeckTheme;
  themeSettings?: PresentationThemeSettings;
  margin?: number;
}

const LOGICAL_WIDTH = 1280;
const LOGICAL_HEIGHT = 720;

function interpolateColor(color1: string, color2: string, factor: number) {
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);

  const r1 = (c1 >> 16) & 255,
    g1 = (c1 >> 8) & 255,
    b1 = c1 & 255;
  const r2 = (c2 >> 16) & 255,
    g2 = (c2 >> 8) & 255,
    b2 = c2 & 255;

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function getComputedTheme(settings?: PresentationThemeSettings, defaultTheme?: DeckTheme) {
  const mode = settings?.mode ?? "dark";
  const tone = settings?.toneLevel ?? 50;

  if (mode === "creamy-light") {
    // 0 = Antique Linen (#F2ECE1), 50 = Editorial Cream (#FAF9F5), 100 = Crisp Ivory (#FCFAF6)
    const bg =
      tone < 50
        ? interpolateColor("#F2ECE1", "#FAF9F5", tone / 50)
        : interpolateColor("#FAF9F5", "#FCFAF6", (tone - 50) / 50);

    const card = tone < 30 ? "#FAF7F0" : "#FFFFFF";
    const border = tone < 50 ? "#DFD8C9" : "#E5E2D9";
    const text = "#262522";
    const textMuted = "#66635C";
    const viewportBg = tone < 50 ? "#E6DFD2" : "#EEEAE0";
    const gridColor = "rgba(38, 37, 34, 0.08)";
    const crossColor = "rgba(217, 119, 87, 0.25)";

    return {
      mode,
      bg,
      card,
      border,
      text,
      textMuted,
      viewportBg,
      gridColor,
      crossColor,
    };
  } else {
    // Dark mode: 0 = Deep Void (#07080a), 50 = Studio Dark (#0d0e12), 100 = Slate (#181b24)
    const bg =
      tone < 50
        ? interpolateColor("#07080a", "#0d0e12", tone / 50)
        : interpolateColor("#0d0e12", "#181b24", (tone - 50) / 50);

    const card =
      tone < 50
        ? interpolateColor("#0f1118", "#161822", tone / 50)
        : interpolateColor("#161822", "#222736", (tone - 50) / 50);

    const border =
      tone < 50
        ? interpolateColor("#1a1e2a", "#262938", tone / 50)
        : interpolateColor("#262938", "#333a4f", (tone - 50) / 50);

    const text = "#ffffff";
    const textMuted = "#94a3b8";
    const viewportBg = tone < 50 ? "#050608" : "#090a10";
    const gridColor = "rgba(255, 255, 255, 0.06)";
    const crossColor = "rgba(56, 189, 248, 0.25)";

    return {
      mode,
      bg,
      card,
      border,
      text,
      textMuted,
      viewportBg,
      gridColor,
      crossColor,
    };
  }
}

export function StageViewport({ children, theme, themeSettings }: StageViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [zoomOffset, setZoomOffset] = useState(0);
  const [isAutoFit, setIsAutoFit] = useState(true);

  const calculateFitScale = useCallback(() => {
    if (!containerRef.current) return 1;
    const { clientWidth, clientHeight } = containerRef.current;

    const sidePadding = 32;
    const topPadding = 20;
    const bottomDockClearance = 84;

    const availableWidth = Math.max(clientWidth - sidePadding, 320);
    const availableHeight = Math.max(clientHeight - topPadding - bottomDockClearance, 180);

    const scaleX = availableWidth / LOGICAL_WIDTH;
    const scaleY = availableHeight / LOGICAL_HEIGHT;

    return Math.min(scaleX, scaleY) * 0.98;
  }, []);

  const updateScale = useCallback(() => {
    const baseFit = calculateFitScale();
    if (isAutoFit) {
      setScale(Math.max(0.2, baseFit + zoomOffset));
    }
  }, [calculateFitScale, isAutoFit, zoomOffset]);

  useEffect(() => {
    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateScale);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [updateScale]);

  const computed = getComputedTheme(themeSettings, theme);

  const showGrid = themeSettings?.showGrid ?? true;
  const gridDensity = themeSettings?.gridDensity ?? "standard";
  const gridOpacity = themeSettings?.gridOpacity ?? 60;
  const patternStyle = themeSettings?.patternStyle ?? "crosshair";

  const gridSpacing = gridDensity === "dense" ? 20 : gridDensity === "spacious" ? 48 : 32;

  const themeStyles = {
    "--stage-bg": computed.bg,
    "--stage-card": computed.card,
    "--stage-border": computed.border,
    "--stage-text": computed.text,
    "--stage-text-muted": computed.textMuted,
    "--deck-bg": computed.bg,
    "--deck-card": computed.card,
    "--deck-border": computed.border,
    "--deck-primary": theme?.primary ?? "#38bdf8",
    "--deck-secondary": theme?.secondary ?? "#10b981",
    "--deck-accent": theme?.accent ?? "#f43f5e",
    "--deck-text": computed.text,
    "--deck-text-muted": computed.textMuted,
    backgroundColor: computed.viewportBg,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden select-none pb-20 pt-2 px-4 transition-colors duration-300 print:p-0 print:bg-white print:overflow-visible print:h-auto"
      style={themeStyles}
    >
      {/* Cool Background SVG Grid Pattern Layer */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden print:hidden transition-opacity duration-300">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="viewport-grid"
                width={gridSpacing}
                height={gridSpacing}
                patternUnits="userSpaceOnUse"
              >
                {patternStyle === "dots" ? (
                  <circle
                    cx={gridSpacing / 2}
                    cy={gridSpacing / 2}
                    r="1.2"
                    fill={computed.gridColor}
                  />
                ) : (
                  <>
                    <path
                      d={`M ${gridSpacing} 0 L 0 0 0 ${gridSpacing}`}
                      fill="none"
                      stroke={computed.gridColor}
                      strokeWidth="1"
                    />
                    {patternStyle === "crosshair" && (
                      <path
                        d={`M ${gridSpacing / 2 - 3} ${gridSpacing / 2} L ${gridSpacing / 2 + 3} ${gridSpacing / 2} M ${gridSpacing / 2} ${gridSpacing / 2 - 3} L ${gridSpacing / 2} ${gridSpacing / 2 + 3}`}
                        stroke={computed.crossColor}
                        strokeWidth="1.2"
                      />
                    )}
                  </>
                )}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#viewport-grid)"
              opacity={gridOpacity / 100}
            />
          </svg>

          {/* Ambient Radial Spotlight Behind Slide Stage */}
          <div
            className="absolute inset-0"
            style={{
              background:
                computed.mode === "dark"
                  ? `radial-gradient(circle 900px at 50% 48%, rgba(56, 189, 248, 0.08), transparent 75%)`
                  : `radial-gradient(circle 900px at 50% 48%, rgba(217, 119, 87, 0.09), transparent 75%)`,
            }}
          />
        </div>
      )}

      {/* Viewport Zoom & Fit Quick Controls (Unobtrusive floating top-right) */}
      <div className="absolute top-3 right-4 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 text-zinc-400 text-xs font-mono opacity-40 hover:opacity-100 transition-opacity print:hidden">
        <span className="text-[11px] font-bold text-zinc-300">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={() => setZoomOffset((prev) => Math.max(-0.4, prev - 0.05))}
          title="Zoom out"
          className="p-1 hover:text-white transition-colors"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setZoomOffset((prev) => Math.min(0.6, prev + 0.05))}
          title="Zoom in"
          className="p-1 hover:text-white transition-colors"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => {
            setZoomOffset(0);
            setIsAutoFit(true);
          }}
          title="Reset auto-fit"
          className="p-1 hover:text-white transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 1280x720 Virtual Stage */}
      <div
        id="presentation-stage"
        className={clsx(
          "relative origin-center shadow-2xl transition-all duration-200 rounded-xl overflow-hidden border print:border-none print:shadow-none print:rounded-none",
          computed.mode === "creamy-light"
            ? "stage-creamy-light border-[#E5E2D9] shadow-stone-900/10"
            : "border-white/10 shadow-black/80"
        )}
        style={{
          width: `${LOGICAL_WIDTH}px`,
          height: `${LOGICAL_HEIGHT}px`,
          transform: `scale(${scale})`,
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
