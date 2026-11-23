import Link from "next/link";
import { getAllDecks } from "@/presentations/registry";
import {
  Presentation,
  Sliders,
  Layers,
  Sparkles,
  ArrowRight,
  Monitor,
  Printer,
  FileText,
  Grid,
  Zap,
  Code,
  Calendar,
  User,
} from "lucide-react";

export default function PresentationHubPage() {
  const decks = getAllDecks();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Background radial highlight */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full space-y-16">
        {/* Navigation & Brand */}
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
              <Presentation className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Antigravity Presentation Engine
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                  Next.js 14+ TS
                </span>
              </h1>
              <p className="text-xs text-slate-400">Component-Driven Modular Presentation System</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{decks.length} Registered Decks</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Components over Static PPTX</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Presentations as Code, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Powered by React
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Every deck is a modular directory of first-class Next.js components. Embed live interactive widgets,
            mathematical formulas, real-time telemetry, and per-deck Tailwind themes with zero presentation lag.
          </p>
        </section>

        {/* Deck Catalog Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Presentation Registry
            </h3>
            <span className="text-xs font-mono text-slate-500">Select a deck to enter the 16:9 stage</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decks.map((deck) => (
              <div
                key={deck.slug}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 p-7 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  {/* Category & Slide Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-800/40">
                      {deck.slides.length} Slides
                    </span>
                    {deck.date && (
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {deck.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {deck.title}
                    </h4>
                    {deck.subtitle && (
                      <p className="text-xs text-cyan-300/80 font-mono mt-1 font-medium">{deck.subtitle}</p>
                    )}
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">{deck.description}</p>
                  </div>

                  {/* Tags */}
                  {deck.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {deck.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Author & Launch Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-slate-800 text-slate-300">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">{deck.author}</span>
                      <span className="text-[10px] text-slate-400 block">{deck.role}</span>
                    </div>
                  </div>

                  <Link
                    href={`/present/${deck.slug}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-200 group-hover:translate-x-0.5"
                  >
                    <span>Launch Deck</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engine Features Grid */}
        <section className="border-t border-slate-800/80 pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">Engine Architecture Capabilities</h3>
            <p className="text-xs text-slate-400 mt-1">
              Engineered for seamless live stage presentations, boardroom pitches, and offline exports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400">
                <Monitor className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">16:9 Stage Viewport</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hardware-accelerated scale transform maintains pixel-perfect 1280x720 canvas across any display resolution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Speaker Notes & Q&A</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Collapsible drawer with talking points, anticipated questions, and pacing timers toggled with the <kbd className="font-mono text-cyan-300">N</kbd> key.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400">
                <Grid className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Slide Overview Grid</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instant bird’s-eye overview modal with search filtering and direct jump shortcuts via <kbd className="font-mono text-purple-300">G</kbd> key.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                <Printer className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Print-to-PDF Export</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sequential 1280x720 print rules export clean vector slide PDFs directly from Chrome or Safari via <kbd className="font-mono text-emerald-300">P</kbd>.
              </p>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts Cheat Sheet */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Presenter Keyboard Shortcuts
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Next</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                → / Space
              </kbd>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Previous</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                ← / Back
              </kbd>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Notes & Q&A</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                N
              </kbd>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Slide Grid</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                G / O
              </kbd>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Fullscreen</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                F
              </kbd>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Print to PDF</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold border border-slate-700">
                P
              </kbd>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500 font-mono">
        Antigravity Component Presentation Engine • Designed with Next.js App Router, TypeScript & Tailwind CSS
      </footer>
    </main>
  );
}
