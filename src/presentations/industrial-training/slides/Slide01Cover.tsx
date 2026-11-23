import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide01Cover: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-arch-grid text-mono-forestText px-14 py-11 justify-between flex flex-col">
{/* Top Architectural Hairline Tag (Zero Logos) */}
<div className="flex items-center justify-between border-b border-mono-forestLine pb-4">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-mono-copper inline-block"></span>
<span className="font-mono text-[11.5px] uppercase tracking-[0.22em] text-mono-forestMuted">
                CSEE-713P  ·  Industrial Training Presentation  ·  Batch 2023–27
              </span>
</div>
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mono-copper">
              Tiesverse Foundation, Bhopal
            </span>
</div>
{/* Center Editorial Typography & Project Strip */}
<div className="my-auto py-4 max-w-5xl">
<div className="text-[12px] font-mono uppercase tracking-[0.2em] text-mono-copper mb-4">
              B.Tech. Computer Science &amp; Engineering  —  Industrial Training Report
            </div>
<h1 className="font-sans text-[52px] font-extrabold leading-[1.08] tracking-[-0.025em] text-mono-forestText mb-5">
              Full Stack Development &amp; AI Engineering
            </h1>
<div className="w-20 h-[3px] bg-mono-copper mb-5"></div>
<p className="font-serif text-[21px] leading-[1.45] text-mono-forestMuted max-w-4xl mb-8">
              Production Backend Systems, Startup Tech Stack Recommender &amp; Multi-Site RBAC Admin Portal at Tiesverse Foundation
            </p>
{/* Three Horizontal Copper-Accented Project Tags */}
<div className="grid grid-cols-3 gap-4 max-w-4xl">
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-l-[3px] border-l-mono-copper px-4 py-3 rounded-[4px]">
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-copper">Project 01</div>
<div className="text-[14px] font-semibold text-mono-forestText mt-0.5">tiesverse.com &amp; Webinar Backend</div>
</div>
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-l-[3px] border-l-mono-copper px-4 py-3 rounded-[4px]">
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-copper">Project 02</div>
<div className="text-[14px] font-semibold text-mono-forestText mt-0.5 font-mono">founder-web-tool.vercel.app</div>
</div>
<div className="bg-mono-forestCard/90 border border-mono-forestLine border-l-[3px] border-l-mono-copper px-4 py-3 rounded-[4px]">
<div className="font-mono text-[10.5px] uppercase tracking-wider text-mono-copper">Project 03</div>
<div className="text-[14px] font-semibold text-mono-forestText mt-0.5">Multi-Site RBAC Admin Portal</div>
</div>
</div>
</div>
{/* Bottom 4-Column Structural Metadata Strip */}
<div className="grid grid-cols-4 gap-5 pt-5 border-t border-mono-forestLine">
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.16em] text-mono-copper mb-1">Presented By</div>
<div className="text-[14.5px] font-bold text-mono-forestText">Satyam Sharma</div>
<div className="font-mono text-[11.5px] text-mono-forestMuted mt-0.5">Sem-VII · Roll: 23010603066</div>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.16em] text-mono-copper mb-1">Internal Guide &amp; HOD</div>
<div className="text-[14.5px] font-bold text-mono-forestText">Dr. Pawan Thakur</div>
<div className="text-[11.5px] text-mono-forestMuted mt-0.5">Govt. College Dharamshala, HPTU</div>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.16em] text-mono-copper mb-1">Industry Mentor</div>
<div className="text-[14.5px] font-bold text-mono-forestText">Mr. Ashutosh Patra</div>
<div className="text-[11.5px] text-mono-forestMuted mt-0.5">Tech Lead · Tech Ties Dept.</div>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.16em] text-mono-copper mb-1">Training Period</div>
<div className="text-[14.5px] font-bold text-mono-forestText">10 Jun – 25 Jul 2026</div>
<div className="text-[11.5px] text-mono-forestMuted mt-0.5">6 Weeks · Bhopal, MP (Remote)</div>
</div>
</div>

    </div>
  );
};
