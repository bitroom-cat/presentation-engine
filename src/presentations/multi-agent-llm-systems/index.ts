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
import { Slide15ExperienceSharing } from "./slides/Slide15ExperienceSharing";
import { Slide16ToolsTechnology } from "./slides/Slide16ToolsTechnology";
import { Slide17ExpectedOutcomes } from "./slides/Slide17ExpectedOutcomes";
import { Slide18ValidationMetrics } from "./slides/Slide18ValidationMetrics";
import { Slide19OpenResearchIssues } from "./slides/Slide19OpenResearchIssues";
import { Slide20Timeline } from "./slides/Slide20Timeline";
import { Slide21Conclusion } from "./slides/Slide21Conclusion";
import { Slide22ReferencesThankYou } from "./slides/Slide22ReferencesThankYou";

export const multiAgentLlmSystemsDeck: DeckDefinition = {
  slug: "multi-agent-llm-systems",
  title: "Multi-Agent LLM Systems: Memory Management, Coordination Failures & Semantic Conflict Resolution",
  description:
    "Major Project-I Report (CSEE-712P) evaluating multi-agent failures, empirical scaling laws, and proposing a Git-governed agentic orchestration architecture with sandboxed branching and LLM-as-Judge arbitration.",
  author: "Abhay Kumar Angaria, Satyam Sharma, Vanshika Rana, Sapriha",
  date: "Nov 2026",
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
        "Welcome the evaluation committee and project guide Dr. Pawan Thakur.",
        "Introduce the project title: Multi-Agent LLM Systems: Memory Management, Coordination Failures and Semantic Conflict Resolution.",
        "State candidate names: Abhay Kumar Angaria, Satyam Sharma, Vanshika Rana, Sapriha (B.Tech CSE Sem-VII, Govt. College Dharamshala).",
      ],
      qa: [
        {
          question: "Why focus on multi-agent failures rather than single-agent prompting?",
          answer:
            "Single agents face hard context limits on complex tasks. However, multi-agent frameworks introduce acute coordination overhead, cascading errors, and memory inconsistencies that degrade reliability if ungoverned.",
        },
      ],
    },
    {
      id: "contents",
      title: "Table of Contents",
      component: Slide02Contents,
      notes: [
        "Present the 12-chapter seminar structure covering literature findings, research gaps, proposed system architecture, dynamic routing, and evaluation.",
      ],
    },
    {
      id: "introduction",
      title: "1. Introduction",
      component: Slide03Introduction,
      notes: [
        "Contrast single-agent context saturation against collaborative multi-agent teams.",
        "Highlight the counter-intuitive scaling truth: adding agents to sequential tasks degrades performance by 70%.",
        "Explain how early hallucinations cascade down the chain, corrupting downstream decisions.",
        "Emphasize that memory architecture is the root bottleneck.",
      ],
      qa: [
        {
          question: "Why do sequential tasks suffer a 70% penalty in multi-agent swarms?",
          answer:
            "Because each sequential handoff introduces inter-agent communication overhead, prompt distortion, and error propagation without any opportunity for parallel speedup (Kim et al. 2025).",
        },
      ],
    },
    {
      id: "problem-statement",
      title: "2. Problem Statement",
      component: Slide04ProblemStatement,
      notes: [
        "Walk through the 6 core challenges: weak memory, concurrency gaps, limited causal tracing, unmanaged experience sharing, lack of correctness oracle, and super-linear cost.",
        "Summarize the core dilemma: lack of an integrated, domain-independent governance framework.",
      ],
    },
    {
      id: "motivation",
      title: "2.2 Motivation & Societal Relevance",
      component: Slide05Motivation,
      notes: [
        "Explain growing enterprise trust in LLMs for software, finance, and science.",
        "Emphasize the cost of silent errors: one false assumption cascades into catastrophic downstream actions.",
        "Highlight the inspiration from software engineering: version control, sandboxing, and immutable audit logs.",
      ],
    },
    {
      id: "objectives",
      title: "3. Objectives",
      component: Slide06Objectives,
      notes: [
        "Outline the 5 clear milestones: review failures, compare memory frameworks, identify research gaps, propose Git-governed architecture, and formulate validation metrics.",
      ],
    },
    {
      id: "failure-modes",
      title: "4.1.1 Failure Modes (MAST & HarnessFix)",
      component: Slide07FailureModes,
      notes: [
        "Explain Fig. 2 MAST taxonomy: 44.2% System Design Issues, 32.3% Inter-Agent Misalignment, 23.5% Task Verification Failures.",
        "Over 76.5% of failures stem from architecture and coordination, not raw LLM capability.",
        "Mention HarnessFix HTIR results (+11.1% completion, 85% localization) and its limitation to single-agent systems.",
      ],
      qa: [
        {
          question: "What does the high correlation (r = 0.63) between history loss and conversation reset imply?",
          answer:
            "It proves that multi-agent systems suffer from systemic state amnesia: when context grows long, frameworks reset conversations, wiping critical historical constraints and causing agents to loop.",
        },
      ],
    },
    {
      id: "scaling-agents",
      title: "4.1.1 Scaling Laws (Kim et al. 2025)",
      component: Slide08ScalingAgents,
      notes: [
        "Present Fig. 3: Parallel tasks gain +81%, sequential tasks lose -70%.",
        "Explain the super-linear communication overhead formula T = 2.72(n + 0.5)^1.724.",
        "Note the critical literature gap: Kim et al. did not evaluate memory consistency or semantic conflict resolution.",
      ],
      qa: [
        {
          question: "What is the practical takeaway of T = 2.72(n+0.5)^1.724?",
          answer:
            "Coordination overhead grows faster than polynomial; beyond 4-6 agents, message exchange overhead dominates over productive compute unless tasks are strictly parallelizable.",
        },
      ],
    },
    {
      id: "memory-bottleneck",
      title: "4.1.2 Memory & State Bottleneck",
      component: Slide09MemoryBottleneck,
      notes: [
        "Compare GCC (Wu 2025), ChronoMem (Su et al. 2026), and EvoGit (Huang et al. 2025).",
        "Highlight the core takeaway: versioning and rollback exist in single-agent or compiler-checked domains, but concurrent semantic conflict resolution in open domains is unsolved.",
      ],
    },
    {
      id: "self-evolving",
      title: "4.1.3 Self-Evolving Agents",
      component: Slide10SelfEvolving,
      notes: [
        "Discuss EvolveR (Wu et al. 2025) and GRPO self-experience scaling (0.382 accuracy).",
        "Discuss TPGO (He et al. 2026) textual parameter gradients and GRAO architecture optimization.",
        "Note that both fail to resolve distributed experience sharing across independent collaborating agents.",
      ],
    },
    {
      id: "research-gaps",
      title: "4.2 Six Critical Research Gaps",
      component: Slide11ResearchGaps,
      notes: [
        "Review the 6 gaps: concurrent memory, general semantic arbitration, cross-agent experience sharing, causal attribution, task-topology uncoupling, and conflict benchmarks.",
      ],
    },
    {
      id: "proposed-architecture",
      title: "4.3 Proposed System Architecture",
      component: Slide12ProposedArchitecture,
      notes: [
        "Walk through Fig. 1 interactively: Master Agent task ingestion → Dynamic Routing → Agent Git Environment (isolated branches) → Merge Conflict Detection → LLM-as-Judge → Evolution Council feedback loop.",
      ],
      qa: [
        {
          question: "Why use an independent Evolution Council instead of letting agents self-correct?",
          answer:
            "An agent that generated an error is biased by its own context and hallucination. An independent Council reading immutable audit logs can impartially attribute faults and update system prompts.",
        },
      ],
    },
    {
      id: "dynamic-routing",
      title: "5.1.1 Task Ingestion & Dynamic Routing",
      component: Slide13DynamicRouting,
      notes: [
        "Explain the task dependency graph G = (V, E) and parallelism score rho(G) = 1 - |E| / C(|V|, 2).",
        "Show how the decision rule delta(G) routes sequential tasks to SAS and parallel tasks to MAS.",
      ],
      qa: [
        {
          question: "How is C(|V|, 2) defined and why does it represent maximum edges?",
          answer:
            "C(|V|, 2) = |V|(|V|-1)/2 represents a complete directed acyclic graph where every subtask depends on all previous subtasks. Subtracting normalized edge count yields an objective [0, 1] parallelism measure.",
        },
      ],
    },
    {
      id: "branch-and-judge",
      title: "5.1.2–5.1.6 Branches, Arbiter & Council",
      component: Slide14BranchAndJudge,
      notes: [
        "Explain sandboxed branches B_i(j) = f_Ai(B_i(j-1), I_i(j)) preventing contamination.",
        "Detail LLM-as-Judge as the semantic correctness oracle for open domains.",
        "Detail the Evolution Council role in causal fault attribution and prompt optimization.",
      ],
    },
    {
      id: "experience-sharing",
      title: "5.1.7–5.1.8 Experience Sharing & Evaluation",
      component: Slide15ExperienceSharing,
      notes: [
        "Address provenance, trust scoring, and outdated experience invalidation.",
        "Outline the experimental validation plan across SWE-Bench Verified and open-domain conflict task sets.",
      ],
    },
    {
      id: "tools-technology",
      title: "6. Tools & Technology",
      component: Slide16ToolsTechnology,
      notes: [
        "Present the implementation stack: Python 3.11+, Git/GitPython, Docker containers, LLM APIs, AutoGen/MetaGPT baselines, ChromaDB, and SWE-Bench.",
      ],
    },
    {
      id: "expected-outcomes",
      title: "7. Expected Outcomes",
      component: Slide17ExpectedOutcomes,
      notes: [
        "Review the 4 core deliverables: task-aware routing, hermetic memory isolation, semantic arbitration, and the evolutionary council.",
        "Reiterate academic distinction: these are design targets to be experimentally validated.",
      ],
    },
    {
      id: "validation-metrics",
      title: "7.4 Validation Metrics",
      component: Slide18ValidationMetrics,
      notes: [
        "Present the 8 validation metrics: task success, routing accuracy, memory consistency, conflict precision/recall, arbitration quality, fault attribution, token cost, and communication scaling.",
      ],
    },
    {
      id: "open-research-issues",
      title: "7.5 Open Research Issues",
      component: Slide19OpenResearchIssues,
      notes: [
        "Discuss future research directions: cross-agent experience sharing, domain-independent semantic resolution, MAS diagnosis, causal attribution, and token economics.",
      ],
    },
    {
      id: "timeline",
      title: "8. Project Timeline",
      component: Slide20Timeline,
      notes: [
        "Walk through the 12-week Gantt execution roadmap from problem definition to final thesis defense and viva.",
      ],
    },
    {
      id: "conclusion",
      title: "9. Conclusion & Synthesis",
      component: Slide21Conclusion,
      notes: [
        "Summarize the 5 core takeaways: empirical finding, identified gap, proposed solution, current status, and overarching vision.",
      ],
    },
    {
      id: "references",
      title: "10. Key References & Discussion",
      component: Slide22ReferencesThankYou,
      notes: [
        "Acknowledge the literature base (NeurIPS, ICLR, SWE-Bench).",
        "Invite questions and viva voce evaluation from Dr. Pawan Thakur and the panel.",
      ],
    },
  ],
};
