"use client";

import React, { useState, useEffect } from "react";
import { DeckDefinition } from "./types";
import { X, Search, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

interface OverviewGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  deck: DeckDefinition;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export function OverviewGridModal({
  isOpen,
  onClose,
  deck,
  currentSlideIndex,
  onSelectSlide,
}: OverviewGridModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredSlides = deck.slides
    .map((slide, index) => ({ slide, index }))
    .filter(
      ({ slide }) =>
        slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slide.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Slide overview grid"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-6 sm:p-10 animate-in fade-in duration-200 print:hidden"
    >
      {/* Top Header */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between pb-6 border-b border-zinc-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            Slide Overview
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {deck.slides.length} Slides
            </span>
          </h2>
          <p className="text-xs text-zinc-400 mt-1">{deck.title}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Quick Search */}
          <div className="relative w-64 hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Filter slides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button
            onClick={onClose}
            title="Close Overview (Esc or G)"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl w-full mx-auto flex-1 overflow-y-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSlides.map(({ slide, index }) => {
            const isActive = index === currentSlideIndex;

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  onClose();
                }}
                className={clsx(
                  "group relative flex flex-col justify-between text-left aspect-video p-4 rounded-xl border transition-all duration-200 bg-zinc-900/70 hover:scale-[1.02] shadow-lg",
                  isActive
                    ? "border-blue-500 ring-2 ring-blue-500/40 bg-blue-950/20"
                    : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50"
                )}
              >
                {/* Header within card */}
                <div className="flex items-start justify-between gap-2 w-full">
                  <span
                    className={clsx(
                      "font-mono text-xs px-2 py-0.5 rounded font-bold",
                      isActive
                        ? "bg-blue-500 text-white"
                        : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                    )}
                  >
                    #{String(index + 1).padStart(2, "0")}
                  </span>

                  {slide.category && (
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 truncate max-w-[120px]">
                      {slide.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="my-auto py-2">
                  <h4 className="font-semibold text-sm text-zinc-200 group-hover:text-white line-clamp-2 leading-snug">
                    {slide.title}
                  </h4>
                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <span>{slide.durationEstimateSeconds ? `~${Math.round(slide.durationEstimateSeconds / 60)}m` : "Slide"}</span>
                  {isActive && (
                    <span className="flex items-center gap-1 text-blue-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Current
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
