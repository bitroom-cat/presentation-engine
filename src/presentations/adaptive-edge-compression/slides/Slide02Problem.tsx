"use client";

import React from "react";
import { SlideProps } from "@/engine/types";
import { SlideContainer, SlideHeader, SlideFooter, StatCard, Callout } from "@/engine/SlidePrimitives";
import { AlertTriangle, HardDrive, WifiOff, DollarSign } from "lucide-react";

export function Slide02Problem({ slideIndex, totalSlides, deck }: SlideProps) {
  return (
    <SlideContainer>
      <SlideHeader
        category="Problem Statement"
        title="The Edge Telemetry Crisis"
        subtitle="Uncompressed high-frequency sensor streams overwhelm satellite and cellular edge uplinks."
        badge="CRITICAL BOTTLENECK"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        <StatCard
          label="Raw Daily Ingest / Node"
          value="48.6 GB"
          subValue="at 1000Hz sampling"
          change="+340% YoY volume"
          trend="up"
          variant="accent"
          icon={<HardDrive className="w-5 h-5" />}
        />
        <StatCard
          label="Cellular Data Cost"
          value="$1,420"
          subValue="per edge gateway / mo"
          change="Unviable for 50k fleets"
          trend="up"
          variant="primary"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <StatCard
          label="Packet Droppage"
          value="18.4%"
          subValue="during radio congestion"
          change="Telemetry gaps in ML"
          trend="down"
          variant="secondary"
          icon={<WifiOff className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Callout title="Why traditional Gzip/Zstandard fails" type="warning">
          Standard general-purpose block compressors require significant RAM buffers (8MB-32MB) and introduce 15ms-45ms latency spikes—violating hard real-time guarantees on ARM Cortex-M and low-tier RISC-V cores.
        </Callout>
        <Callout title="The Architectural Mandate" type="accent">
          We require a streaming lossy-to-lossless adaptive codec capable of running within 64KB RAM with sub-100µs frame encode latency and configurable distortion bounds.
        </Callout>
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
