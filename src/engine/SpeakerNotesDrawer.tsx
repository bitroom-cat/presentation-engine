"use client";

import React from "react";
import { SlideDefinition } from "./types";
import { X, Clock, HelpCircle, List, ChevronUp, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideDefinition;
  slideIndex: number;
  totalSlides: number;
}

export function SpeakerNotesDrawer({
  isOpen,
  onClose,
  slide,
  slideIndex,
  totalSlides,
}: SpeakerNotesDrawerProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!isOpen) return null;

  return (
    <aside
      role="region"
      aria-label="Speaker notes and Q&A"
      className={clsx(
        "fixed bottom-16 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-4xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col text-zinc-100 overflow-hidden print:hidden",
        isExpanded ? "h-[450px]" : "h-[260px]"
      )}
    >
      {/* Header */}
      <div className="px-5 py-3 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
            Slide {slideIndex + 1} of {totalSlides}
          </span>
          <h3 className="text-sm font-semibold text-white truncate max-w-md">{slide.title}</h3>
          {slide.durationEstimateSeconds && (
            <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              ~{Math.round(slide.durationEstimateSeconds / 60)} min
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse drawer" : "Expand drawer"}
            className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            title="Close notes (N)"
            className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body Grid */}
      <div className="flex-1 p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
        {/* Speaker Talking Points */}
        <div className="space-y-3 pr-0 md:pr-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <List className="w-4 h-4" />
            <span>Speaker Talking Points</span>
          </div>

          {slide.notes && slide.notes.length > 0 ? (
            <ul className="space-y-2 text-zinc-300">
              {slide.notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 font-bold select-none">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-zinc-500 italic">No specific speaker notes for this slide.</p>
          )}
        </div>

        {/* Anticipated Q&A */}
        <div className="space-y-3 pt-4 md:pt-0 pl-0 md:pl-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <HelpCircle className="w-4 h-4" />
            <span>Anticipated Audience Q&A</span>
          </div>

          {slide.qa && slide.qa.length > 0 ? (
            <div className="space-y-3">
              {slide.qa.map((qaItem, idx) => (
                <div key={idx} className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/60 space-y-1.5">
                  <p className="font-medium text-xs text-zinc-200">
                    <span className="text-cyan-400 font-bold mr-1">Q:</span>
                    {qaItem.question}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-emerald-400 font-bold mr-1">A:</span>
                    {qaItem.answer}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-zinc-500 italic">No anticipated Q&A for this slide.</p>
          )}
        </div>
      </div>
    </aside>
  );
}
