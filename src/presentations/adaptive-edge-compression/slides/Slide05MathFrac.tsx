"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, MathFrac, Callout } from "@/engine/SlidePrimitives";
import { BookOpen, Sigma } from "lucide-react";

export function Slide05MathFrac({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer>
      <SlideHeader
        category="Theoretical Foundation"
        title="Information Theory & Rate-Distortion Bounds"
        subtitle="Mathematical proof of asymptotic optimality over discrete Gauss-Markov sensor processes."
        badge="SHANNON BOUND"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* Formula 1: Shannon Rate Distortion */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase">
            <Sigma className="w-4 h-4" />
            <span>Continuous Gaussian Bound R(D)</span>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80 text-center flex items-center justify-center min-h-[110px]">
            <span className="text-2xl font-serif text-slate-100 flex items-center justify-center">
              <span>R(D) = </span>
              <MathFrac numerator={<span>1</span>} denominator={<span>2</span>} />
              <span className="mx-2">log₂</span>
              <span className="text-3xl font-light text-cyan-400">(</span>
              <MathFrac
                numerator={<span className="font-sans text-cyan-300">σ²_sensor</span>}
                denominator={<span className="font-sans text-amber-300">D_max</span>}
              />
              <span className="text-3xl font-light text-cyan-400">)</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Where <code className="text-cyan-300">σ²</code> denotes the empirical sensor variance and{" "}
            <code className="text-amber-300">D_max</code> specifies the deadband error tolerance threshold
            guaranteed to preserve precision.
          </p>
        </div>

        {/* Formula 2: Compression Factor Efficiency */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Empirical Asymptotic Efficiency η</span>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80 text-center flex items-center justify-center min-h-[110px]">
            <span className="text-2xl font-serif text-slate-100 flex items-center justify-center">
              <span>η_edge = </span>
              <span className="text-3xl font-light text-indigo-400">[</span>
              <MathFrac
                numerator={<span>H(X|X_t-1) - ε</span>}
                denominator={<span>B_packet + H_radio</span>}
              />
              <span className="text-3xl font-light text-indigo-400">]</span>
              <span className="ml-2 font-mono text-base text-emerald-400">× 100%</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Measures conditional entropy compression against physical radio header overhead. Our pipeline
            achieves <span className="text-emerald-400 font-mono font-bold">96.8%</span> of theoretical Shannon limit.
          </p>
        </div>
      </div>

      <Callout title="Mathematical Guarantee" type="info">
        Zero spectral drift is maintained for all frequencies below the Nyquist threshold, eliminating any distortion in edge-computed Fast Fourier Transforms (FFT).
      </Callout>

      <SlideFooter
        deckTitle={deck.title}
        slideIndex={slideIndex}
        totalSlides={totalSlides}
        author={deck.author}
      />
    </SlideContainer>
  );
}
