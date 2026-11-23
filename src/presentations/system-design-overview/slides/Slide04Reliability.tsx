"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, StatCard } from "@/engine/SlidePrimitives";
import { ShieldAlert, HeartPulse, RefreshCw, Cpu } from "lucide-react";

export function Slide04Reliability({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer>
      <SlideHeader
        category="Resilience & SRE"
        title="Chaos Engineering & Automated Self-Healing"
        subtitle="Continuous automated fault injection running in canary clusters 24/7."
        badge="ZERO-DOWNTIME"
      />

      <div className="grid grid-cols-4 gap-4 my-auto">
        <StatCard
          label="MTTD"
          value="450 ms"
          subValue="Mean Time to Detect"
          variant="primary"
          icon={<HeartPulse className="w-5 h-5 text-amber-400" />}
        />
        <StatCard
          label="MTTR"
          value="1.8 sec"
          subValue="Automated failover"
          variant="accent"
          icon={<RefreshCw className="w-5 h-5 text-orange-400" />}
        />
        <StatCard
          label="Simulated Outages"
          value="1,400+"
          subValue="Monthly chaos tests"
          variant="secondary"
          icon={<ShieldAlert className="w-5 h-5 text-rose-400" />}
        />
        <StatCard
          label="Annual Uptime"
          value="99.999%"
          subValue="< 5.2 mins downtime"
          trend="up"
          change="Exceeds SLA"
          variant="default"
          icon={<Cpu className="w-5 h-5 text-emerald-400" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <h4 className="text-sm font-bold text-amber-300">Deterministic Leader Re-Election</h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            When heartbeat packets are missed for &gt; 350ms, the KRaft quorum triggers split-brain-safe
            elections via pre-vote terms, preventing unnecessary cascading leader churn during brief network jitter.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <h4 className="text-sm font-bold text-orange-300">Automated Drain & Rebalancing</h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Degraded disk IOPS or rising kernel queue depths automatically trigger predictive partition evacuation
            to healthy cluster nodes before read timeouts impact downstream consumers.
          </p>
        </div>
      </div>

      <SlideFooter
        deckTitle={deck.title}
        slideIndex={slideIndex}
        totalSlides={totalSlides}
        author={deck.author}
      />
    </SlideContainer>
  );
}
