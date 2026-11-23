"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Grid,
  Printer,
  Play,
  Pause,
  RotateCcw,
  Home,
  Tv2,
  Settings,
} from "lucide-react";
import { clsx } from "clsx";

interface ControlBarProps {
  currentSlideIndex: number;
  totalSlides: number;
  deckTitle: string;
  onPrev: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleOverview: () => void;
  isOverviewOpen: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onPrint: () => void;
  onOpenPresenterView?: () => void;
  onToggleSettings?: () => void;
  isSettingsOpen?: boolean;
}

export function ControlBar({
  currentSlideIndex,
  totalSlides,
  deckTitle,
  onPrev,
  onNext,
  onToggleNotes,
  isNotesOpen,
  onToggleOverview,
  isOverviewOpen,
  isFullscreen,
  onToggleFullscreen,
  onPrint,
  onOpenPresenterView,
  onToggleSettings,
  isSettingsOpen = false,
}: ControlBarProps) {
  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 print:hidden">
      <div className="relative group bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 shadow-2xl rounded-2xl px-4 py-2 flex items-center gap-3 text-zinc-300">
        
        {/* Progress Bar Top Highlight */}
        <div className="absolute top-0 left-3 right-3 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Back to Hub */}
        <Link
          href="/"
          title="Back to Presentation Hub"
          className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors flex items-center gap-1.5 text-xs text-zinc-400 font-medium"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline max-w-[120px] truncate">{deckTitle}</span>
        </Link>

        <div className="h-4 w-[1px] bg-zinc-800" />

        {/* Navigation Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            title="Previous Slide (Left Arrow, PageUp, Backspace)"
            aria-label="Previous Slide"
            className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs px-2 min-w-[54px] text-center font-medium select-none text-zinc-200">
            {currentSlideIndex + 1} <span className="text-zinc-600">/</span> {totalSlides}
          </span>

          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            title="Next Slide (Right Arrow, Space, PageDown, Enter)"
            aria-label="Next Slide"
            className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="h-4 w-[1px] bg-zinc-800" />

        {/* Live Presentation Timer */}
        <div className="flex items-center gap-1 bg-zinc-900/80 px-2 py-1 rounded-lg border border-zinc-800/60 font-mono text-xs">
          <span className={clsx("font-semibold", isTimerRunning ? "text-cyan-400" : "text-zinc-400")}>
            {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            title={isTimerRunning ? "Pause Timer" : "Start Timer"}
            className="p-0.5 hover:text-white text-zinc-400 transition-colors ml-1"
          >
            {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => {
              setTimerSeconds(0);
              setIsTimerRunning(true);
            }}
            title="Reset Timer"
            className="p-0.5 hover:text-white text-zinc-400 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        <div className="h-4 w-[1px] bg-zinc-800" />

        {/* Auxiliary Controls */}
        <div className="flex items-center gap-1">
          {/* Settings / Appearance (Dark/Creamy & Grid) */}
          {onToggleSettings && (
            <button
              onClick={onToggleSettings}
              title="Theme Mode, Cream Warmth & Background Grid (S)"
              className={clsx(
                "p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs",
                isSettingsOpen
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/40"
                  : "hover:bg-zinc-800/80 hover:text-white text-zinc-400"
              )}
            >
              <Settings className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline font-medium">Theme</span>
            </button>
          )}

          {/* Presenter View (Dual-Screen Private Notes) */}
          {onOpenPresenterView && (
            <button
              onClick={onOpenPresenterView}
              title="Open Private Presenter View (Notes on your screen, slides on projector) (Alt+P or W)"
              className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <Tv2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden lg:inline text-emerald-300">Presenter View</span>
            </button>
          )}

          {/* Speaker Notes */}
          <button
            onClick={onToggleNotes}
            title="Toggle Speaker Notes & Q&A (N)"
            className={clsx(
              "p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs",
              isNotesOpen
                ? "bg-blue-600/30 text-blue-400 border border-blue-500/30"
                : "hover:bg-zinc-800/80 hover:text-white text-zinc-400"
            )}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden md:inline font-medium">Notes</span>
          </button>

          {/* Overview Grid */}
          <button
            onClick={onToggleOverview}
            title="Toggle Slide Overview (G or O)"
            className={clsx(
              "p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs",
              isOverviewOpen
                ? "bg-blue-600/30 text-blue-400 border border-blue-500/30"
                : "hover:bg-zinc-800/80 hover:text-white text-zinc-400"
            )}
          >
            <Grid className="w-4 h-4" />
            <span className="hidden md:inline font-medium">Grid</span>
          </button>

          {/* Export to PDF */}
          <button
            onClick={onPrint}
            title="Print or Save to PDF (P)"
            className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white text-zinc-400 transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={onToggleFullscreen}
            title="Toggle Fullscreen (F)"
            className="p-1.5 rounded-lg hover:bg-zinc-800/80 hover:text-white text-zinc-400 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
