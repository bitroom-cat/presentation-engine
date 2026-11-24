import { DeckDefinition } from "@/engine/types";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Contents } from "./slides/Slide02Contents";
import { Slide03Introduction } from "./slides/Slide03Introduction";
import { Slide04ProblemStatement } from "./slides/Slide04ProblemStatement";
import { Slide05Motivation } from "./slides/Slide05Motivation";
import { Slide06Objectives } from "./slides/Slide06Objectives";
import { Slide07FailureModes } from "./slides/Slide07FailureModes";
import { Slide08ScalingAgents } from "./slides/Slide08ScalingAgents";
import { Slide09MemoryBottleneck } from "./slides/Slide09MemoryBottleneck";
import { Slide10SelfEvolving } from "./slides/Slide10SelfEvolving";
import { Slide11ResearchGaps } from "./slides/Slide11ResearchGaps";
import { Slide12ProposedArchitecture } from "./slides/Slide12ProposedArchitecture";
import { Slide13DynamicRouting } from "./slides/Slide13DynamicRouting";
import { Slide14BranchAndJudge } from "./slides/Slide14BranchAndJudge";
import { Slide15MasterJudge } from "./slides/Slide15MasterJudge";
import { Slide16EvolutionCouncil } from "./slides/Slide16EvolutionCouncil";
import { Slide17ToolsTechnology } from "./slides/Slide17ToolsTechnology";
import { Slide18ExpectedOutcomes } from "./slides/Slide18ExpectedOutcomes";
import { Slide19ValidationMetrics } from "./slides/Slide19ValidationMetrics";
import { Slide20Timeline } from "./slides/Slide20Timeline";
import { Slide21Conclusion } from "./slides/Slide21Conclusion";
import { Slide22ReferencesThankYou } from "./slides/Slide22ReferencesThankYou";

export const multiAgentLlmSystemsV2Deck: DeckDefinition = {
  slug: "multi-agent-llm-systems-v2",
  title: "Multi-Agent LLM Systems: Memory Management, Coordination Failures & Semantic Conflict Resolution",
  subtitle: "Visual Architecture Edition • Major Project-I Report (CSEE-712P)",
  description:
    "Diagram-driven Major Project-I presentation featuring full single-screen single-agent & multi-agent pipelines, Git branch sandboxes, a Central Master Judge with juror LLMs, and an independent Evolution Council bench.",
  author: "Abhay Kumar Angaria, Satyam Sharma, Vanshika Rana, Sapriha",
  role: "B.Tech. CSE (Sem-VII)",
  date: "Nov 2026",
  tags: ["Multi-Agent Systems", "Git Memory", "LLM-as-Judge", "Evolution Council", "CSEE-712P"],
  theme: {
    primary: "#38bdf8",
    secondary: "#818cf8",
    bg: "#0d0e12",
    card: "#161822",
    text: "#FAF9F5",
    textMuted: "#94a3b8",
    cardBorder: "#1e293b",
    accent: "#0284c7",
  },
  slides: [
    {
      id: "cover",
      title: "Title & Affiliation",
      component: Slide01Cover,
      notes: [
        "Welcome the committee, evaluators, and project guide Dr. Pawan Thakur.",
        "Introduce the major project topic: Multi-Agent LLM Systems: Memory Management, Coordination Failures and Semantic Conflict Resolution.",
      ],
      qa: [
        {
          question: "What is the primary contribution of this work?",
          answer:
            "A comprehensive failure analysis (MAST & scaling laws) combined with a domain-independent Git-governed architecture unifying task routing, branch isolation, and LLM arbitration.",
        },
      ],
    },
    {
      id: "contents",
      title: "Presentation Roadmap",
      component: Slide02Contents,
      notes: [
        "Walk through the 4 core presentation phases: Foundations, Literature Review, Proposed Architecture, and Validation/Horizon.",
      ],
    },
    {
      id: "introduction",
      title: "1. Foundations & Limits",
      component: Slide03Introduction,
      notes: [
        "Contrast single-agent context saturation against multi-agent swarms.",
        "Highlight the +81% speedup on parallel tasks vs -70% degradation on sequential logic.",
      ],
    },
    {
      id: "problem-statement",
      title: "2. The Six Failure Vectors",
      component: Slide04ProblemStatement,
      notes: [
        "Examine the 6 vectors: weak memory, concurrency gaps, limited causal tracing, unmanaged experience sharing, lack of correctness oracle, and super-linear cost.",
      ],
    },
    {
      id: "motivation",
      title: "2.2 Borrowing Software Engineering",
      component: Slide05Motivation,
      notes: [
        "Map Git branches, code review, and audit trails directly into autonomous agent coordination.",
      ],
    },
    {
      id: "objectives",
      title: "3. Research Scope",
      component: Slide06Objectives,
      notes: [
        "Present the 5 project objectives from failure taxonomy review to experimental metric formulation.",
      ],
    },
    {
      id: "failure-modes",
      title: "4.1.1 Failure Taxonomies (MAST)",
      component: Slide07FailureModes,
      notes: [
        "Highlight Fig. 2: 76.5% of failures stem from architecture and misalignment, not raw LLM strength.",
      ],
    },
    {
      id: "scaling-agents",
      title: "4.1.1 Scaling Laws (Kim et al.)",
      component: Slide08ScalingAgents,
      notes: [
        "Explain the super-linear message law T = 2.72(n + 0.5)^1.724.",
      ],
    },
    {
      id: "memory-bottleneck",
      title: "4.1.2 Memory & State Bottleneck",
      component: Slide09MemoryBottleneck,
      notes: [
        "Compare GCC, ChronoMem, and EvoGit. Show why open-domain semantic conflict resolution is unsolved.",
      ],
    },
    {
      id: "self-evolving",
      title: "4.1.3 Self-Evolving Agents",
      component: Slide10SelfEvolving,
      notes: [
        "Analyze EvolveR and TPGO. Note the missing link: distributed cross-agent experience sync.",
      ],
    },
    {
      id: "research-gaps",
      title: "4.2 Six Critical Gaps",
      component: Slide11ResearchGaps,
      notes: [
        "Summarize the 6 fundamental gaps in existing autonomous agent coordination.",
      ],
    },
    {
      id: "proposed-architecture",
      title: "4.3 Complete Architecture Pipeline",
      component: Slide12ProposedArchitecture,
      notes: [
        "Walk through the complete master pipeline fitting the screen: Master Router, full SAS pipeline, Agent Git Environment, Master Judge with side Juror LLMs, and Evolution Council bench.",
      ],
      qa: [
        {
          question: "How does this architecture handle sequential versus parallel tasks?",
          answer:
            "The Master Router computes task graph parallelism rho(G). Tasks with rho < tau_seq stay in the Single-Agent System (SAS) with rolling context and RAG, avoiding the -70% coordination degradation.",
        },
        {
          question: "Explain the LLM-as-Judge structure on Slide 12.",
          answer:
            "A central Master Judge LLM synthesizes conflicting assertions using specialized side juror LLMs (Fact-checking, Logic validation, and Format checking) to ensure verifiable ground truth before committing to main.",
        },
      ],
    },
    {
      id: "dynamic-routing",
      title: "5.1.1 Dynamic Topological Routing",
      component: Slide13DynamicRouting,
      notes: [
        "Explain the graph parallelism score rho(G) = 1 - |E| / C(|V|, 2) and the SAS vs MAS decision rule.",
      ],
    },
    {
      id: "git-environment",
      title: "5.1.2 Agent Git Environment",
      component: Slide14BranchAndJudge,
      notes: [
        "Walk through branch isolation B_i(j) = f_Ai(B_i(j-1), I_i(j)) and atomic git reset rollback.",
      ],
    },
    {
      id: "master-judge",
      title: "5.1.4 Master Judge & Juror Swarm",
      component: Slide15MasterJudge,
      notes: [
        "Detailed view of the Master Judge flanked by Fact, Logic, Schema, and Safety Jurors.",
      ],
      qa: [
        {
          question: "Why use side juror LLMs alongside the Master Judge?",
          answer:
            "Decomposing arbitration into specialized sub-tasks (fact verification, logic consistency, schema validation) yields higher precision than asking a single general prompt to judge complex multi-branch divergence.",
        },
      ],
    },
    {
      id: "evolution-council",
      title: "5.1.6 Evolution Council Bench",
      component: Slide16EvolutionCouncil,
      notes: [
        "Detailed view of the 3-member Council Bench analyzing audit logs and applying textual gradients to system prompts.",
      ],
    },
    {
      id: "tools-technology",
      title: "6. Technology Stack",
      component: Slide17ToolsTechnology,
      notes: [
        "Review the Python 3.11, GitPython, Docker, LLM APIs, and SWE-Bench implementation stack.",
      ],
    },
    {
      id: "expected-outcomes",
      title: "7. Expected Outcomes",
      component: Slide18ExpectedOutcomes,
      notes: [
        "Highlight the 4 key deliverables: task-aware routing, memory isolation, semantic arbitration, and self-evolution.",
      ],
    },
    {
      id: "validation-metrics",
      title: "7.4 Validation Metrics",
      component: Slide19ValidationMetrics,
      notes: [
        "Review the 8 quantitative evaluation metrics.",
      ],
    },
    {
      id: "timeline",
      title: "8. 12-Week Roadmap",
      component: Slide20Timeline,
      notes: [
        "Walk through the 12-week Gantt schedule and current milestone status.",
      ],
    },
    {
      id: "conclusion",
      title: "9. Conclusion & Synthesis",
      component: Slide21Conclusion,
      notes: [
        "Summarize the 5 core takeaways: finding, gap, proposal, status, and vision.",
      ],
    },
    {
      id: "references",
      title: "10. Key References & Discussion",
      component: Slide22ReferencesThankYou,
      notes: [
        "Acknowledge key literature citations and open the floor for panel viva voce questions.",
      ],
    },
  ],
};
