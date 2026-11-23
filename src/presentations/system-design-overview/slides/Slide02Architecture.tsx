"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, StatCard } from "@/engine/SlidePrimitives";
import { Cpu, Database, HardDrive, ShieldAlert, Layers } from "lucide-react";

export function Slide02Architecture({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer>
      <SlideHeader
        category="Topology Overview"
        title="Distributed Event Broker & Storage Topology"
        subtitle="Tiered storage separating real-time memory partitions from warm object storage tiers."
        badge="ZERO-COPY IO"
      />

      <div className="grid grid-cols-4 gap-4 my-auto">
        <StatCard
          label="Peak Ingestion Rate"
          value="12.4M"
          subValue="msgs / sec sustained"
          variant="primary"
          icon={<Cpu className="w-5 h-5 text-amber-400" />}
        />
        <StatCard
          label="P99 Publish Latency"
          value="4.2 ms"
          subValue="end-to-end ack"
          variant="accent"
          icon={<HardDrive className="w-5 h-5 text-orange-400" />}
        />
        <StatCard
          label="Tiered Warm Storage"
          value="4.8 PB"
          subValue="NVMe & S3 cold archive"
          variant="secondary"
          icon={<Database className="w-5 h-5 text-rose-400" />}
        />
        <StatCard
          label="Chaos Recovery SLA"
          value="< 1.8s"
          subValue="Raft leader reelection"
          variant="default"
          icon={<ShieldAlert className="w-5 h-5 text-emerald-400" />}
        />
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
            <Layers className="w-4 h-4" />
            <span>Edge Envoy Gateways</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            TLS termination, JWT validation, rate limiting, and geo-DNS routing via global Anycast network points of presence.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
            <Layers className="w-4 h-4" />
            <span>Partitioned Broker Ring</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Shared-nothing cluster running on bare-metal NVMe with direct kernel page-cache bypass and io_uring concurrency.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400">
            <Layers className="w-4 h-4" />
            <span>Real-Time Stream Processors</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Apache Flink and custom Rust stateful operators calculating continuous 5-minute sliding aggregates.
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
