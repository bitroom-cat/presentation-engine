"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { DoorwayGuardHysteresis } from "../components/FriendlyIllustrations";

export function Slide11Algorithm({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
          04 • Middleware Logic (Section 4.7)
        </span>
        <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
          Control Loop Algorithm &amp; The &quot;Doorway Guard&quot; Hysteresis
        </h2>
      </div>

      {/* Main Grid: Code Block (Left) + Doorway Guard & Cards (Right) */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-auto py-2 items-stretch">
        {/* Left Column: Warm Charcoal Pseudocode Container */}
        <div className="col-span-7 bg-[#1E1D1B] rounded-xl border border-[#3A3834] p-5 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#3A3834]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E722B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A6B5D]" />
              <span className="ml-2 text-[11px] font-mono text-[#B0ACA3]">edge_middleware_loop.pseudo</span>
            </div>
            <span className="text-[10.5px] font-mono text-[#D6B87A]">O(n) RAM • O(1) ops</span>
          </div>

          <pre className="font-mono text-[12.5px] leading-[1.65] text-[#EFECE6] overflow-hidden my-auto">
            <code>
              <span className="text-[#D97757]">for each</span> new sample x_t:{"\n"}
              {"    "}buffer.push(x_t)                      <span className="text-[#8AB09E]"># FIFO, constant size n=5</span>{"\n"}
              {"    "}<span className="text-[#D97757]">if</span> buffer not full: <span className="text-[#D97757]">continue</span>{"\n"}
              {"    "}var = variance(buffer)                <span className="text-[#8AB09E]"># Eq. (2) arithmetic</span>{"\n"}
              {"    "}battery_low, congested = read_flags(){"\n\n"}
              {"    "}<span className="text-[#D97757]">if</span> battery_low <span className="text-[#D97757]">or</span> congested:{"\n"}
              {"        "}state = <span className="text-[#D6B87A]">SURVIVAL</span>{"\n"}
              {"        "}<span className="text-[#D97757]">if</span> var &gt; tau <span className="text-[#D97757]">and</span> battery &gt; reserve:{"\n"}
              {"            "}send_alert(x_t)               <span className="text-[#8AB09E]"># emergency alert escape</span>{"\n"}
              {"        "}<span className="text-[#D97757]">else</span>:{"\n"}
              {"            "}store_local(buffer)           <span className="text-[#8AB09E]"># radio stays asleep</span>{"\n"}
              {"    "}<span className="text-[#D97757]">elif</span> var &gt; tau_high:{"\n"}
              {"        "}state = <span className="text-[#D6B87A]">CRITICAL</span>{"\n"}
              {"        "}send_raw(buffer)                  <span className="text-[#8AB09E]"># 100% exact fidelity</span>{"\n"}
              {"    "}<span className="text-[#D97757]">elif</span> state == <span className="text-[#D6B87A]">CRITICAL</span> <span className="text-[#D97757]">and</span> calm_windows &lt; K:{"\n"}
              {"        "}send_raw(buffer)                  <span className="text-[#8AB09E]"># doorway guard cooldown</span>{"\n"}
              {"    "}<span className="text-[#D97757]">else</span>:{"\n"}
              {"        "}state = <span className="text-[#D6B87A]">STEADY</span>{"\n"}
              {"        "}send_lossy_summary(buffer)        <span className="text-[#8AB09E]"># checks MSE before TX</span>
            </code>
          </pre>
        </div>

        {/* Right Column: Doorway Guard Illustration + 3 Cards */}
        <div className="col-span-5 flex flex-col justify-between gap-3">
          {/* Friendly Doorway Guard Illustration */}
          <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-3 shadow-sm">
            <DoorwayGuardHysteresis className="w-full h-24" />
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2D9] border-l-4 border-l-[#9E722B] rounded-r-xl p-3 shadow-sm">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E722B] mb-0.5">
              1. Resource Override &amp; Alert Guard
            </div>
            <p className="text-[12px] text-[#66635C] leading-relaxed">
              Battery and channel conditions are evaluated first to prevent node death, while the nested alert guard guarantees urgent emergencies still escape.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2D9] border-l-4 border-l-[#D97757] rounded-r-xl p-3 shadow-sm">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B85A3A] mb-0.5">
              2. Anti-Thrashing Hysteresis (K Windows)
            </div>
            <p className="text-[12px] text-[#66635C] leading-relaxed">
              Requiring K calm windows prevents rapid ping-pong oscillation between modes when a machine vibrates near the threshold.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E5E2D9] border-l-4 border-l-[#4A6B5D] rounded-r-xl p-3 shadow-sm">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4A6B5D] mb-0.5">
              3. Ultra-Lightweight Microcontroller Footprint
            </div>
            <p className="text-[12px] text-[#66635C] leading-relaxed">
              Requires only basic arithmetic without transcendental functions or neural weights—running in under 1 KB RAM on any 32-bit Cortex-M0/M4.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E5E2D9] text-[11px] font-mono text-[#66635C]">
        <span>Adaptive Edge Data Compression for WSNs | CSEE-711P</span>
        <span>Slide {slideIndex + 1} / {totalSlides}</span>
      </div>
    </div>
  );
}
