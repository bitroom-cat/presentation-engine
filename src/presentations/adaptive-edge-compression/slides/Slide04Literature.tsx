"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import {
  PaperMiniSZ,
  PaperMiniPredictor,
  PaperMiniSafe,
  PaperMiniSolar,
} from "../components/FriendlyIllustrations";

export function Slide04Literature({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3 flex items-end justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            02 • Literature Survey
          </span>
          <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
            Four Edge Compression Paradigms Reviewed
          </h2>
        </div>
        <span className="text-[11.5px] text-[#66635C] italic">
          Author-reported metrics in their respective test environments
        </span>
      </div>

      {/* 2x2 Grid of Literature Cards with Friendly Mini-Diagrams */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 my-auto py-2">
        {/* Paper [1] */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold bg-[#F6E6DF] text-[#B85A3A]">
                PAPER [1] • LOSSY (SZ)
              </span>
              <PaperMiniSZ />
            </div>
            <h3 className="font-serif text-[16px] font-bold text-[#262522] mb-1">
              Error-Bounded Lossy Compression (SZ)
            </h3>
            <p className="text-[12.5px] text-[#66635C] leading-relaxed">
              Adapts HPC SZ compressor to wearables using curve fitting (linear/quadratic) + Huffman coding with a user error bound; runs local neural classifier.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5E2D9]">
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">103×</div>
              <div className="text-[10px] text-[#66635C]">Data Cut</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#4A6B5D]">+27%</div>
              <div className="text-[10px] text-[#66635C]">Battery (+4h)</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">98%</div>
              <div className="text-[10px] text-[#66635C]">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Paper [2] */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold bg-[#F4ECD8] text-[#9E722B]">
                PAPER [2] • PREDICTIVE (NADPCMC)
              </span>
              <PaperMiniPredictor />
            </div>
            <h3 className="font-serif text-[16px] font-bold text-[#262522] mb-1">
              Nonlinear Adaptive Prediction (NADPCMC)
            </h3>
            <p className="text-[12.5px] text-[#66635C] leading-relaxed">
              Nonlinear estimator transmits only quantized prediction residuals; Lyapunov stability proven (~7,050 FLOPs) on 802.15.4 motes with geophysical telemetry.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5E2D9]">
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#4A6B5D]">45–60%</div>
              <div className="text-[10px] text-[#66635C]">Energy Saved</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">1.02–1.67%</div>
              <div className="text-[10px] text-[#66635C]">Distortion</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#66635C]">18.9–35.9%</div>
              <div className="text-[10px] text-[#66635C]">Linear Baseline</div>
            </div>
          </div>
        </div>

        {/* Paper [3] */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold bg-[#E9EEF3] text-[#4E6278]">
                PAPER [3] • LOSSLESS 3-LAYER
              </span>
              <PaperMiniSafe />
            </div>
            <h3 className="font-serif text-[16px] font-bold text-[#262522] mb-1">
              Three-Layer Lossless IoT Framework
            </h3>
            <p className="text-[12.5px] text-[#66635C] leading-relaxed">
              IoT-Edge-Cloud architecture pairing adaptive lossless compression with quality-adjustment integrity control and packet encryption; tested across text, financial, and sensor data.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5E2D9]">
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#4A6B5D]">80–90%</div>
              <div className="text-[10px] text-[#66635C]">Power Cut</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">0.6653</div>
              <div className="text-[10px] text-[#66635C]">RMSE (Best)</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-2 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">92.14</div>
              <div className="text-[10px] text-[#66635C]">PSNR (Best)</div>
            </div>
          </div>
        </div>

        {/* Paper [4] */}
        <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10.5px] font-mono font-bold bg-[#E8EFEA] text-[#4A6B5D]">
                PAPER [4] • SOLAR SCHEDULING
              </span>
              <PaperMiniSolar />
            </div>
            <h3 className="font-serif text-[16px] font-bold text-[#262522] mb-1">
              Solar-Powered Adaptive Aggregation (S-LZW)
            </h3>
            <p className="text-[12.5px] text-[#66635C] leading-relaxed">
              Computes periodic energy budget: compresses via S-LZW and transmits during solar surplus; shuts off radio and stores locally in flash when battery drops.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E2D9]">
            <div className="bg-[#F0EEE6] rounded-lg px-3 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#4A6B5D]">Near-Zero</div>
              <div className="text-[10px] text-[#66635C]">Overnight Blackouts</div>
            </div>
            <div className="bg-[#F0EEE6] rounded-lg px-3 py-1.5 text-center">
              <div className="font-mono text-[14px] font-bold text-[#262522]">&gt; 5 Baselines</div>
              <div className="text-[10px] text-[#66635C]">Higher Sink Delivery</div>
            </div>
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
