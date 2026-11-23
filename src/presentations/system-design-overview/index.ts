import { DeckDefinition } from "@/engine/types";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Architecture } from "./slides/Slide02Architecture";
import { Slide03DataFlow } from "./slides/Slide03DataFlow";
import { Slide04Reliability } from "./slides/Slide04Reliability";

export const systemDesignOverviewDeck: DeckDefinition = {
  slug: "system-design-overview",
  title: "High-Throughput Event Streaming Platform",
  subtitle: "Scaling horizontally to 10M events/second with zero-copy Kafka clusters and distributed read caches.",
  description:
    "Production architecture blueprint for a globally distributed, fault-tolerant event broker handling multi-region active-active workloads.",
  author: "Marcus Vance",
  role: "Principal Infrastructure Architect",
  date: "November 2026",
  tags: ["Distributed Systems", "Kafka", "Consensus", "High Availability", "SRE"],
  theme: {
    bg: "#0c0a09",
    card: "#18181b",
    cardBorder: "#27272a",
    primary: "#f59e0b",
    secondary: "#f97316",
    accent: "#fb7185",
    text: "#fafafa",
    textMuted: "#a1a1aa",
  },
  slides: [
    {
      id: "cover",
      title: "Cover & Architecture Overview",
      category: "Introduction",
      component: Slide01Cover,
      durationEstimateSeconds: 120,
      notes: [
        "Set the operational scope: this architecture powers all financial settlement pipelines across 3 global regions.",
        "Emphasize the zero-copy Linux kernel sendfile and io_uring design.",
      ],
      qa: [
        {
          question: "Why not use managed AWS MSK instead of bare-metal?",
          answer:
            "Managed cloud offerings introduce multi-tenant noisy-neighbor IOPS throttling that creates unpredictable P99 latency jitter above 50ms. Our bare-metal NVMe ring sustains sub-5ms P99 consistently.",
        },
      ],
    },
    {
      id: "architecture",
      title: "Distributed Broker Topology",
      category: "Topology",
      component: Slide02Architecture,
      durationEstimateSeconds: 200,
      notes: [
        "Explain the split between Edge Envoy proxies, NVMe storage rings, and stateful Flink stream operators.",
        "Highlight tiered storage: local NVMe caches the most recent 6 hours, while warm object store retains 7 years.",
      ],
      qa: [
        {
          question: "How do you prevent NVMe disk wear with 10M events/sec?",
          answer:
            "We use write-optimized sequential log segments with TRIM-aware batched compaction routines scheduled during off-peak windows.",
        },
      ],
    },
    {
      id: "replication",
      title: "Quorum Consensus & Replication",
      category: "Consensus",
      component: Slide03DataFlow,
      durationEstimateSeconds: 220,
      notes: [
        "Toggle the Sync vs Async buttons to illustrate the tradeoff between strict financial RPO=0 safety and maximum analytics throughput.",
        "Point out the cross-continental replication latency over dedicated dark fiber.",
      ],
      qa: [
        {
          question: "Can clients dynamically choose quorum levels per topic?",
          answer:
            "Yes! Ledger and billing topics enforce acks=all sync quorum, while clickstream telemetry uses speculative acks=1 for 3x higher throughput.",
        },
      ],
    },
    {
      id: "resilience",
      title: "Chaos Engineering & Self-Healing",
      category: "Reliability",
      component: Slide04Reliability,
      durationEstimateSeconds: 160,
      notes: [
        "Detail our continuous Chaos Monkey runs: killing random broker pods every Tuesday and Thursday.",
        "Showcase how MTTR of 1.8s meets our five-nines (99.999%) availability target.",
      ],
      qa: [
        {
          question: "What happens if two brokers fail simultaneously in the same quorum?",
          answer:
            "KRaft requires (N/2)+1 nodes. In a 5-node cluster, 2 failures are safely absorbed with automatic quorum preservation.",
        },
      ],
    },
  ],
};
