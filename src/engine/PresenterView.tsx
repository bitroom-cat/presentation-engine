"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { DeckDefinition } from "./types";
import { StageViewport } from "./StageViewport";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Timer,
  Tv2,
  FileText,
  HelpCircle,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowRight
} from "lucide-react";
import { clsx } from "clsx";

interface PresenterViewProps {
  deck: DeckDefinition;
}

export function PresenterView({ deck }: PresenterViewProps) {
  // 1. Initial slide from URL (?slide=X)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const params = new URLSearchParams(window.location.search);
    const s = parseInt(params.get("slide") || "1", 10) - 1;
    return isNaN(s) ? 0 : Math.max(0, Math.min(s, deck.slides.length - 1));
  });

  // 2. Active tab: "notes" vs "viva"
  const [activeTab, setActiveTab] = useState<"notes" | "viva">("notes");

  // 3. Notes font size scaling (1: normal, 2: large, 3: extra large)
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(2); // 1 = sm, 2 = base, 3 = lg, 4 = xl

  // 4. Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // 5. Wall Clock
  const [wallClock, setWallClock] = useState("");

  // 6. Projector window connection status
  const [isProjectorConnected, setIsProjectorConnected] = useState(true);

  const channelRef = useRef<BroadcastChannel | null>(null);

  // Update wall clock every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setWallClock(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer interval
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

  // Cross-Window Synchronization via BroadcastChannel + LocalStorage fallback
  useEffect(() => {
    const channelName = `presentation_sync_${deck.slug}`;
    let channel: BroadcastChannel | null = null;

    if (typeof BroadcastChannel !== "undefined") {
      channel = new BroadcastChannel(channelName);
      channelRef.current = channel;

      channel.onmessage = (event) => {
        const { type, slideIndex: incomingIndex, elapsedSeconds } = event.data || {};
        if (type === "SLIDE_CHANGE" && typeof incomingIndex === "number") {
          setCurrentSlideIndex(incomingIndex);
        } else if (type === "SYNC_STATE") {
          if (typeof incomingIndex === "number") setCurrentSlideIndex(incomingIndex);
          if (typeof elapsedSeconds === "number") setTimerSeconds(elapsedSeconds);
        } else if (type === "PING") {
          setIsProjectorConnected(true);
        }
      };

      // Request initial state from main window
      channel.postMessage({ type: "REQUEST_SYNC" });
    }

    // LocalStorage Fallback listener
    const handleStorage = (e: StorageEvent) => {
      if (e.key === `presentation_slide_${deck.slug}` && e.newValue) {
        const idx = parseInt(e.newValue, 10);
        if (!isNaN(idx)) setCurrentSlideIndex(idx);
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      if (channel) channel.close();
      window.removeEventListener("storage", handleStorage);
    };
  }, [deck.slug]);

  // Synchronize slide changes
  const updateSlideIndex = useCallback(
    (newIndex: number) => {
      const clamped = Math.max(0, Math.min(newIndex, deck.slides.length - 1));
      setCurrentSlideIndex(clamped);

      // 1. URL update in presenter view
      const params = new URLSearchParams(window.location.search);
      params.set("slide", String(clamped + 1));
      window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);

      // 2. Broadcast to audience/projector window
      if (channelRef.current) {
        channelRef.current.postMessage({
          type: "SLIDE_CHANGE",
          slideIndex: clamped,
        });
      }

      // 3. LocalStorage fallback
      try {
        localStorage.setItem(`presentation_slide_${deck.slug}`, String(clamped));
      } catch {
        // ignore
      }
    },
    [deck.slides.length, deck.slug]
  );

  const handleNext = useCallback(() => {
    if (currentSlideIndex < deck.slides.length - 1) {
      updateSlideIndex(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, deck.slides.length, updateSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      updateSlideIndex(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, updateSlideIndex]);

  // Keyboard navigation inside Presenter View
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
        case "Enter":
        case "l":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "Backspace":
        case "h":
          e.preventDefault();
          handlePrev();
          break;
        case "Home":
          e.preventDefault();
          updateSlideIndex(0);
          break;
        case "End":
          e.preventDefault();
          updateSlideIndex(deck.slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, updateSlideIndex, deck.slides.length]);

  const currentSlide = deck.slides[currentSlideIndex];
  const nextSlide =
    currentSlideIndex < deck.slides.length - 1 ? deck.slides[currentSlideIndex + 1] : null;

  const CurrentSlideComponent = currentSlide?.component;
  const NextSlideComponent = nextSlide?.component;

  // Font size classes
  const fontClasses = {
    1: "text-sm leading-relaxed",
    2: "text-base leading-relaxed",
    3: "text-lg leading-loose",
    4: "text-xl leading-loose",
  }[fontSizeLevel] || "text-base leading-relaxed";

  return (
    <div className="w-screen h-screen bg-[#090a0f] text-white flex flex-col overflow-hidden font-sans select-none">
      {/* 1. TOP STATUS & CONTROL DOCK */}
      <header className="h-14 border-b border-white/10 bg-[#11131c] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Tv2 className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm text-white tracking-wide">
              PRESENTER CONSOLE
            </span>
          </div>

          <span className="text-zinc-600 font-mono">•</span>

          <span className="text-xs font-mono text-zinc-300 max-w-xs truncate">
            {deck.title}
          </span>

          <div className="flex items-center gap-1.5 ml-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-300 font-semibold">
              Projector Synced
            </span>
          </div>
        </div>

        {/* Center: Slide Jump & Numbers */}
        <div className="flex items-center gap-3">
          <select
            value={currentSlideIndex}
            onChange={(e) => updateSlideIndex(parseInt(e.target.value, 10))}
            className="bg-[#1c1f2e] border border-white/20 rounded-lg text-xs font-mono text-white px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
          >
            {deck.slides.map((s, idx) => (
              <option key={s.id} value={idx}>
                {String(idx + 1).padStart(2, "0")} • {s.title}
              </option>
            ))}
          </select>

          <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-lg">
            Slide {currentSlideIndex + 1} / {deck.slides.length}
          </span>
        </div>

        {/* Right: Timers & Wall Clock */}
        <div className="flex items-center gap-4">
          {/* Wall Clock */}
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono bg-[#161824] px-2.5 py-1 rounded-lg border border-white/5">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>{wallClock}</span>
          </div>

          {/* Presentation Stopwatch */}
          <div className="flex items-center gap-2 bg-[#161824] px-3 py-1 rounded-lg border border-cyan-500/30 text-xs font-mono">
            <Timer className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold text-white tracking-wider text-sm">
              {formatTimer(timerSeconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning((r) => !r)}
              title={isTimerRunning ? "Pause Timer" : "Start Timer"}
              className="p-1 hover:text-white text-zinc-400 transition-colors"
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setTimerSeconds(0)}
              title="Reset Timer"
              className="p-1 hover:text-white text-zinc-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN SPLIT CONSOLE BODY */}
      <main className="flex-1 grid grid-cols-12 gap-5 p-5 overflow-hidden">
        {/* LEFT COLUMN: 5 Columns -> Live Current Slide + Upcoming Next Slide */}
        <div className="col-span-5 flex flex-col gap-4 overflow-hidden">
          {/* A. Current Slide (What Audience Sees) */}
          <div className="flex-1 bg-[#131520] border border-cyan-500/40 rounded-xl p-3 flex flex-col shadow-lg overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2 shrink-0">
              <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                AUDIENCE LIVE VIEW (SLIDE {currentSlideIndex + 1})
              </span>
              <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                {currentSlide.title}
              </span>
            </div>

            {/* Scaled 16:9 Canvas Container */}
            <div className="flex-1 bg-black rounded-lg overflow-hidden relative flex items-center justify-center border border-white/10">
              <div
                className="w-[1280px] h-[720px] origin-center shrink-0 pointer-events-none"
                style={{
                  transform: "scale(0.32)",
                }}
              >
                {CurrentSlideComponent && (
                  <CurrentSlideComponent
                    slideIndex={currentSlideIndex}
                    totalSlides={deck.slides.length}
                    deck={deck}
                    isActive={true}
                  />
                )}
              </div>
            </div>
          </div>

          {/* B. Next Slide Preview (Upcoming) */}
          <div className="h-44 bg-[#11131a] border border-white/10 rounded-xl p-3 flex flex-col shrink-0">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5 shrink-0">
              <span className="font-mono text-[11px] font-semibold text-zinc-400 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                NEXT UP (SLIDE {currentSlideIndex + 2})
              </span>
              <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                {nextSlide ? nextSlide.title : "End of Presentation"}
              </span>
            </div>

            <div className="flex-1 bg-black/60 rounded-lg overflow-hidden relative flex items-center justify-center border border-white/5">
              {NextSlideComponent ? (
                <div
                  className="w-[1280px] h-[720px] origin-center shrink-0 pointer-events-none opacity-80"
                  style={{
                    transform: "scale(0.18)",
                  }}
                >
                  <NextSlideComponent
                    slideIndex={currentSlideIndex + 1}
                    totalSlides={deck.slides.length}
                    deck={deck}
                    isActive={false}
                  />
                </div>
              ) : (
                <span className="text-zinc-600 font-mono text-xs">No upcoming slide</span>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 7 Columns -> Private Speaker Notes & Viva Q&A */}
        <div className="col-span-7 bg-[#131520] border border-white/10 rounded-xl p-5 flex flex-col justify-between overflow-hidden shadow-xl">
          {/* Notes Header Strip */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("notes")}
                className={clsx(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors",
                  activeTab === "notes"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <FileText className="w-3.5 h-3.5" />
                SPEAKER TALKING POINTS
              </button>

              <button
                onClick={() => setActiveTab("viva")}
                className={clsx(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors",
                  activeTab === "viva"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                FACULTY VIVA Q&amp;A DEFENSE
              </button>
            </div>

            {/* Font Size Adjusters */}
            <div className="flex items-center gap-1 bg-[#1a1c2b] px-2 py-1 rounded-lg border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 mr-1">TEXT SIZE:</span>
              <button
                onClick={() => setFontSizeLevel((l) => Math.max(1, l - 1))}
                className="p-1 hover:text-white text-zinc-400 transition-colors"
                title="Decrease font size"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setFontSizeLevel((l) => Math.min(4, l + 1))}
                className="p-1 hover:text-white text-zinc-400 transition-colors"
                title="Increase font size"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Notes Content Body */}
          <div className="flex-1 overflow-y-auto py-4 pr-2 space-y-4 font-sans select-text">
            {activeTab === "notes" ? (
              <div className="space-y-4">
                <div className="bg-[#1a1d2e] border border-cyan-500/20 rounded-xl p-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                    Current Slide Objective:
                  </span>
                  <p className="text-zinc-200 text-sm font-medium">
                    {currentSlide.notes?.[0] || "Present the concepts clearly to the evaluation committee."}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                    Key Talking Points (Speak Naturally):
                  </span>
                  {currentSlide.notes && currentSlide.notes.length > 1 ? (
                    currentSlide.notes.slice(1).map((note, idx) => (
                      <div
                        key={idx}
                        className={clsx(
                          "bg-[#161826] border border-white/5 rounded-xl p-4 text-zinc-100 flex items-start gap-3",
                          fontClasses
                        )}
                      >
                        <span className="font-mono text-cyan-400 font-bold shrink-0 mt-0.5">
                          {idx + 1}.
                        </span>
                        <p className="leading-relaxed">{note}</p>
                      </div>
                    ))
                  ) : (
                    <div className={clsx("p-4 bg-zinc-900 rounded-xl text-zinc-400", fontClasses)}>
                      Deliver the core concepts shown on the slide, focusing on the visual flow and trade-offs.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between text-xs font-mono text-amber-300">
                  <span>Anticipated Faculty Viva Questions for this Slide</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20">Defense Ready</span>
                </div>

                {currentSlide.qa && currentSlide.qa.length > 0 ? (
                  currentSlide.qa.map((item, idx) => (
                    <div key={idx} className="bg-[#181a29] border border-white/10 rounded-xl p-4 space-y-2">
                      <div className="text-amber-400 font-mono text-xs font-bold flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 shrink-0" />
                        <span>Q: {item.question}</span>
                      </div>
                      <p className={clsx("text-zinc-300 pl-5 border-l-2 border-amber-500/40 mt-1", fontClasses)}>
                        <strong>A:</strong> {item.answer}
                      </p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-[#181a29] border border-white/10 rounded-xl p-4 space-y-2">
                      <div className="text-amber-400 font-mono text-xs font-bold flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 shrink-0" />
                        <span>Q: Why not compress everything using GZIP or Deflate on sensor nodes?</span>
                      </div>
                      <p className={clsx("text-zinc-300 pl-5 border-l-2 border-amber-500/40 mt-1", fontClasses)}>
                        <strong>A:</strong> Standard algorithms like GZIP require 32KB to 256KB of continuous dictionary RAM. Sensor MCUs (like Cortex-M0/M4) only have 16KB–64KB total RAM. Our in-memory middleware requires only <strong>~200 bytes</strong> for a 5-sample sliding window!
                      </p>
                    </div>

                    <div className="bg-[#181a29] border border-white/10 rounded-xl p-4 space-y-2">
                      <div className="text-amber-400 font-mono text-xs font-bold flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 shrink-0" />
                        <span>Q: How does the node survive when battery drops below 10%?</span>
                      </div>
                      <p className={clsx("text-zinc-300 pl-5 border-l-2 border-amber-500/40 mt-1", fontClasses)}>
                        <strong>A:</strong> The FSM enters <em>Survival Mode</em>. Radio transmission duty cycle is throttled to 1%, non-volatile flash logging is engaged, and an emergency beacon packet is transmitted only when critical anomalies occur.
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* 3. BIG NAVIGATION BOTTOM BAR */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between shrink-0 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={clsx(
                "flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all",
                currentSlideIndex === 0
                  ? "bg-zinc-900 border-white/5 text-zinc-600 cursor-not-allowed"
                  : "bg-[#1c1f30] border-white/10 text-white hover:bg-[#252a42] hover:border-cyan-500/40 active:scale-[0.98]"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS SLIDE (←)</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === deck.slides.length - 1}
              className={clsx(
                "flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all shadow-lg",
                currentSlideIndex === deck.slides.length - 1
                  ? "bg-zinc-900 border-white/5 text-zinc-600 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-500 text-slate-950 border-cyan-400 shadow-cyan-500/20 active:scale-[0.98]"
              )}
            >
              <span>NEXT SLIDE (Space / →)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
