"use client";

import React from "react";
import { SlideProps } from "@/engine/types";

export function Slide15References({ slideIndex, totalSlides }: SlideProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#FAF9F5] text-[#262522] p-10 flex flex-col justify-between select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#E5E2D9] pb-3 flex items-end justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B85A3A]">
            Bibliography
          </span>
          <h2 className="font-serif text-[27px] font-bold text-[#262522] leading-tight">
            Key References (IEEE Citation Format)
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base">📚</span>
          <span className="text-[11px] font-mono text-[#66635C]">Eleven Primary Academic Sources</span>
        </div>
      </div>

      {/* Two-Column References Grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 my-auto py-2 text-[11.5px] leading-[1.55] text-[#262522]">
        {/* Left Column: [1] to [6] */}
        <div className="space-y-2.5 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 shadow-sm">
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[1]</span>
            <span>J. Azar, A. Makhoul, M. Barhamgi, and R. Couturier, &quot;An energy efficient IoT data compression approach for edge machine learning,&quot; <em>Future Gener. Comput. Syst.</em>, vol. 96, 2019.</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[2]</span>
            <span>&quot;A new adaptive compression scheme for data aggregation in wireless sensor networks,&quot; <em>Missouri Univ. of Science and Technology, Scholars&apos; Mine</em>.</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[3]</span>
            <span>&quot;An IoT-based edge computing lossless compression approach for enhancing energy efficiency in networks,&quot; <em>J. Sci. Ind. Res.</em></span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[4]</span>
            <span>&quot;Adaptive data aggregation and compression to improve energy utilization in solar-powered wireless sensor networks,&quot; <em>Sensors</em>.</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[5]</span>
            <span>C. M. Sadler and M. Martonosi, &quot;Data compression algorithms for energy-constrained devices in delay tolerant networks,&quot; in <em>Proc. 4th ACM Conf. Embedded Networked Sensor Syst. (SenSys)</em>, 2006, pp. 265–278.</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono font-bold text-[#B85A3A] shrink-0">[6]</span>
            <span>T. Srisooksai, K. Keamarungsi, P. Lamsrichan, and K. Araki, &quot;Practical data compression in wireless sensor networks: A survey,&quot; <em>J. Netw. Comput. Appl.</em>, vol. 35, no. 1, pp. 37–59, 2012.</span>
          </div>
        </div>

        {/* Right Column: [7] to [11] + Scope Card */}
        <div className="space-y-2.5 bg-[#FFFFFF] border border-[#E5E2D9] rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex gap-2">
              <span className="font-mono font-bold text-[#B85A3A] shrink-0">[7]</span>
              <span>H. Elmeleegy, A. K. Elmagarmid, E. Cecchet, W. G. Aref, and W. Zwaenepoel, &quot;Online piece-wise linear approximation of numerical streams with precision guarantees,&quot; <em>Proc. VLDB Endow.</em>, vol. 2, no. 1, pp. 145–156, 2009.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-mono font-bold text-[#B85A3A] shrink-0">[8]</span>
              <span>T. Pelkonen et al., &quot;Gorilla: A fast, scalable, in-memory time series database,&quot; <em>Proc. VLDB Endow.</em>, vol. 8, no. 12, pp. 1816–1827, 2015.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-mono font-bold text-[#B85A3A] shrink-0">[9]</span>
              <span>C. Bormann and P. Hoffman, &quot;Concise Binary Object Representation (CBOR),&quot; <em>IETF</em>, RFC 8949, Dec. 2020.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-mono font-bold text-[#B85A3A] shrink-0">[10]</span>
              <span>Google, &quot;Protocol Buffers documentation.&quot; Available: <span className="font-mono text-[10.5px] text-[#4E6278]">https://protobuf.dev</span>.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-mono font-bold text-[#B85A3A] shrink-0">[11]</span>
              <span>C. Zhu, V. C. M. Leung, L. Shu, and E. C.-H. Ngai, &quot;Green Internet of Things for smart world,&quot; <em>IEEE Access</em>, vol. 3, pp. 2151–2162, 2015.</span>
            </div>
          </div>

          <div className="bg-[#F0EEE6] border border-[#E5E2D9] rounded-lg p-2.5 text-[11px] text-[#66635C]">
            <strong>Primary Survey Scope:</strong> References [1]–[4] form our comparative matrix; [5]–[11] provide foundational WSN compression theory, industry serialization protocols, and Green IoT motivation.
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
