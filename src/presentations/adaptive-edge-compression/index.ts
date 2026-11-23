import { DeckDefinition } from "@/engine/types";
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Roadmap } from "./slides/Slide02Roadmap";
import { Slide03EnergyParadox } from "./slides/Slide03EnergyParadox";
import { Slide04Literature } from "./slides/Slide04Literature";
import { Slide05Comparison } from "./slides/Slide05Comparison";
import { Slide06ProblemGoals } from "./slides/Slide06ProblemGoals";
import { Slide07Architecture } from "./slides/Slide07Architecture";
import { Slide08Volatility } from "./slides/Slide08Volatility";
import { Slide09CostFunction } from "./slides/Slide09CostFunction";
import { Slide10FsmWalkthrough } from "./slides/Slide10FsmWalkthrough";
import { Slide11Algorithm } from "./slides/Slide11Algorithm";
import { Slide12Simulation } from "./slides/Slide12Simulation";
import { Slide13Critique } from "./slides/Slide13Critique";
import { Slide14Conclusion } from "./slides/Slide14Conclusion";
import { Slide15References } from "./slides/Slide15References";
import { Slide16ThankYou } from "./slides/Slide16ThankYou";

export const adaptiveEdgeCompressionDeck: DeckDefinition = {
  slug: "adaptive-edge-compression",
  title: "Adaptive Edge Data Compression for WSNs",
  subtitle: "A Critical Literature Survey & Context-Aware Edge Middleware Framework",
  description:
    "A 16-slide academic seminar presentation designed with friendly storybook clarity for non-technical audiences and B.Tech CSE faculty evaluators.",
  author: "Satyam Sharma",
  role: "Sem-VII • Roll: 23010603066 • Guide: Mrs. Kanika Kapoor",
  date: "Academic Session 2023–27",
  tags: ["WSN", "Edge Computing", "IoT", "Green IoT", "Compression", "FSM", "Sensors"],
  theme: {
    bg: "#FAF9F5",
    card: "#FFFFFF",
    cardBorder: "#E5E2D9",
    primary: "#D97757",
    secondary: "#4A6B5D",
    accent: "#9E722B",
    text: "#262522",
    textMuted: "#66635C",
  },
  slides: [
    {
      id: "slide-01-title",
      title: "Title & Executive Overview",
      category: "Intro",
      component: Slide01Title,
      durationEstimateSeconds: 90,
      notes: [
        "Greet the panel and introduce the seminar title: Adaptive Edge Data Compression for Wireless Sensor Networks (CSEE-711P).",
        "Acknowledge guide Mrs. Kanika Kapoor and the Department of B.Tech. CSE at Government College Dharamshala.",
        "Frame the talk: we critically review four recent compression paradigms and propose an explainable context-aware edge middleware.",
      ],
      qa: [
        {
          question: "Why focus on edge compression instead of just putting a bigger battery on the sensor node?",
          answer:
            "WSN nodes are constrained by size, cost, and inaccessible deployment sites; shrinking radio transmissions extends life from days to months without bulky hardware.",
        },
      ],
    },
    {
      id: "slide-02-roadmap",
      title: "Presentation Roadmap",
      category: "Agenda",
      component: Slide02Roadmap,
      durationEstimateSeconds: 60,
      notes: [
        "Walk briskly through the six stages of the presentation so the panel knows the narrative arc.",
        "Highlight that Slides 7–12 form the core methodology with worked math and a synthetic simulation.",
        "Note that Slide 13 gives an honest critical audit of limitations before mapping the Major Project scope.",
      ],
      qa: [
        {
          question: "How long is this seminar structured to run?",
          answer:
            "Roughly 10–12 minutes of presentation followed by panel Q&A, spending the bulk of time on the comparative gap and proposed FSM.",
        },
      ],
    },
    {
      id: "slide-03-energy-paradox",
      title: "Introduction & Radio Energy Paradox",
      category: "Background",
      component: Slide03EnergyParadox,
      durationEstimateSeconds: 120,
      notes: [
        "Establish the Radio Energy Paradox: sending one wireless bit costs orders of magnitude more energy than local MCU arithmetic.",
        "Connect reduced radio duty cycles directly to Green IoT—fewer battery replacements and less electronic waste.",
        "State the academic honesty disclaimer upfront: this is an analytical study with synthetic logic checks, not a physical hardware energy benchmark.",
      ],
      qa: [
        {
          question: "If you haven't measured energy on hardware yet, what is the main contribution of this seminar?",
          answer:
            "Synthesizing the shared static-rule failure across four distinct WSN compression families and designing a lightweight, explainable control loop ready for Major Project validation.",
        },
      ],
    },
    {
      id: "slide-04-literature",
      title: "Four Edge Compression Paradigms Reviewed",
      category: "Literature",
      component: Slide04Literature,
      durationEstimateSeconds: 150,
      notes: [
        "Explain why these four papers were selected: they represent four distinct families—lossy (SZ), nonlinear predictive (NADPCMC), 3-layer lossless, and solar energy-budgeted scheduling.",
        "Point out the strong author-reported gains in each paper's native environment (up to 103x data cut in [1], 45–60% energy saved in [2], 80–90% power cut in [3], near-zero blackouts in [4]).",
        "Emphasize fairness: none of these papers are 'wrong'; each succeeds under its own tested assumptions.",
      ],
      qa: [
        {
          question: "Why did Paper [2] outperform linear ADPCM so sharply on distortion (1.02% vs 18.9%)?",
          answer:
            "Physical and geophysical WSN signals often change nonlinearly; a nonlinear predictor tracks sharp transitions that linear ADPCM overshoots.",
        },
      ],
    },
    {
      id: "slide-05-comparison",
      title: "Comparative Analysis: The 'Static Rule' Bottleneck",
      category: "Literature",
      component: Slide05Comparison,
      durationEstimateSeconds: 150,
      notes: [
        "Contrast the four studies side by side using Table 1, focusing on the rightmost column.",
        "Show how every study fixes one critical rule ahead of time: fixed 10^-1 error bound [1], accumulating multi-hop quantizer [2], lossless-only rule [3], and synchronized sunrise wake-up [4].",
        "Deliver the synthesis: static assumptions break whenever signal volatility, battery health, or network load shifts.",
      ],
      qa: [
        {
          question: "What causes the 'morning traffic spike' in Paper [4]?",
          answer:
            "All solar nodes sleep and buffer readings overnight, then wake and flush stored packets together after sunrise, overloading forwarding relays.",
        },
      ],
    },
    {
      id: "slide-06-problem-goals",
      title: "Problem Statement, Design Goals & Positioning",
      category: "Problem",
      component: Slide06ProblemGoals,
      durationEstimateSeconds: 120,
      notes: [
        "Define the exact problem statement: jointly decide per window whether to send lossy, exact raw, or store locally based on volatility, battery, and congestion.",
        "Walk through the five design goals—especially lightweight 32-bit MCU math and explainability.",
        "Clarify Table 2: Protobuf, CBOR, dead-band, and Gorilla operate at the encoding/filtering layer; our middleware operates above them as the control layer.",
      ],
      qa: [
        {
          question: "Why not just use SCADA dead-band filtering instead of your middleware?",
          answer:
            "Dead-band uses a fixed engineer-configured threshold and cannot adapt when battery drops below 20% or when the wireless gateway becomes congested.",
        },
      ],
    },
    {
      id: "slide-07-architecture",
      title: "Smart Mailroom System Architecture",
      category: "Methodology",
      component: Slide07Architecture,
      durationEstimateSeconds: 150,
      notes: [
        "Trace data left-to-right across Figure 1: sensor reading x_t enters a fixed-size FIFO sliding window.",
        "Explain the two parallel inputs to the decision centre: data volatility (variance vs. threshold) and hardware/network resource flags.",
        "Summarize the three distinct output paths: Steady-State lossy packet, Critical exact packet, or Survival local flash storage.",
      ],
      qa: [
        {
          question: "Where exactly does this middleware live in the software stack?",
          answer:
            "Directly on the sensor node microcontroller between the ADC/sensor driver and the transport protocol layer such as MQTT or IEEE 802.15.4.",
        },
      ],
    },
    {
      id: "slide-08-volatility",
      title: "Quantifying Data Volatility via Conveyor Belt",
      category: "Methodology",
      component: Slide08Volatility,
      durationEstimateSeconds: 120,
      notes: [
        "Explain why a FIFO sliding window of n=5 keeps RAM usage constant and tiny.",
        "Show Equations (1) and (2) for mean and variance—requiring only additions and multiplications.",
        "Walk through Example A (variance 0.004 <= 0.5 -> Steady) versus Example B (variance ~124.6 > 0.5 -> Critical anomaly).",
      ],
      qa: [
        {
          question: "Isn't recomputing variance over n samples redundant on every reading?",
          answer:
            "For small n like 5 it is trivial, and for larger windows we can switch to Welford's or an O(1) incremental running variance update.",
        },
      ],
    },
    {
      id: "slide-09-cost-function",
      title: "Weighted Cost Function & Virtual Decompression",
      category: "Methodology",
      component: Slide09CostFunction,
      durationEstimateSeconds: 120,
      notes: [
        "Introduce Equation (3): Cost = w1*B + w2*D, balancing bytes sent against MSE distortion (Equation 4).",
        "Explain local 'virtual decompression': the node reconstructs its own lossy packet before transmitting so it knows exact MSE (0.006 in the example).",
        "Walk through Table 3: under normal weights lossy wins (8.4 vs 80.0); in an emergency, distortion penalty flips the winner to raw exact data (10.0 vs 14.5).",
      ],
      qa: [
        {
          question: "Wait—bandwidth B is in bytes and distortion D is in squared sensor units. How can you add them directly?",
          answer:
            "In a real deployment both B and D would be normalized to a common dimensionless [0, 1] scale before weighting; Table 3 uses unnormalized illustrative numbers to show the flip clearly.",
        },
      ],
    },
    {
      id: "slide-10-fsm-walkthrough",
      title: "3-Mood Robot Traffic Light FSM",
      category: "Methodology",
      component: Slide10FsmWalkthrough,
      durationEstimateSeconds: 150,
      notes: [
        "Walk through the three states in Figure 2: Steady-State (lossy), Critical (raw/lossless), and Survival (buffer locally, radio asleep).",
        "Highlight the Survival Priority Rule: if an anomaly strikes during Survival and battery is above a 5% reserve, the node sends one short alert instead of staying silent.",
        "Narrate the bearing-seizure example from minute 0 to minute 51 and calm recovery.",
      ],
      qa: [
        {
          question: "Why require K consecutive calm windows before returning from Critical to Steady-State?",
          answer:
            "It acts as a dwell-time hysteresis filter so a single momentarily flat window during a chaotic fault doesn't prematurely turn lossy compression back on.",
        },
      ],
    },
    {
      id: "slide-11-algorithm",
      title: "Control Loop Algorithm & Doorway Guard",
      category: "Methodology",
      component: Slide11Algorithm,
      durationEstimateSeconds: 120,
      notes: [
        "Walk down the Section 4.7 pseudocode line by line: FIFO push, variance computation, and resource-flag check.",
        "Point out the explicit precedence: Survival checks first (with the emergency alert escape hatch), followed by tau_high Critical entry and K-window hysteresis.",
        "Reiterate that the entire control loop compiles down to a few dozen instructions on a 32-bit MCU.",
      ],
      qa: [
        {
          question: "What happens if the local flash buffer fills up completely while stuck in Survival mode?",
          answer:
            "A production firmware would use a ring-buffer eviction policy—either overwriting oldest low-variance entries or downsampling older records while preserving anomaly alerts.",
        },
      ],
    },
    {
      id: "slide-12-simulation",
      title: "Simulation on Synthetic Sensor Trace",
      category: "Simulation",
      component: Slide12Simulation,
      durationEstimateSeconds: 150,
      notes: [
        "Describe the synthetic 120-sample temperature trace (baseline ~22 °C, rapid ramp to ~50 °C, drop, and recovery with n=5 and tau=0.5).",
        "Point out how all 23/120 Critical windows cluster accurately around the sharp transitions while calm regions stay lossy.",
        "Optional viva demo: nudge the live tau slider to show sensitivity, then reset to 0.50. Reiterate the caveat that this demonstrates logic only—not energy savings.",
      ],
      qa: [
        {
          question: "Why is there a small white gap (Steady-State) right at the top of the 50 °C peak?",
          answer:
            "Great catch—because variance only measures spread, a flat plateau at 50 °C looks locally calm. That exact observation motivates adding absolute/trend checks in Slide 13!",
        },
      ],
    },
    {
      id: "slide-13-critique",
      title: "Strengths, Limitations & Mitigations",
      category: "Analysis",
      component: Slide13Critique,
      durationEstimateSeconds: 150,
      notes: [
        "Start briefly with the 4 strengths: directly addresses [1]–[4] gaps, lightweight arithmetic, explainable decisions, and Protobuf/CBOR compatibility.",
        "Be candid about all 7 limitations in Table 4—especially lack of physical validation, 1–2 sample detection lag, mode thrashing, and slow-drift blindness.",
        "Show that each limitation has a concrete engineering mitigation (ESP32 tests, hysteresis, trend check, 1-byte mode header).",
      ],
      qa: [
        {
          question: "Which limitation do you consider the hardest to solve in real industrial deployments?",
          answer:
            "Slow-drift detection and auto-tuning thresholds, because seasonal baseline shifts require adaptive trend estimators without losing microcontroller simplicity.",
        },
      ],
    },
    {
      id: "slide-14-conclusion",
      title: "Conclusion & Major Project Roadmap",
      category: "Conclusion",
      component: Slide14Conclusion,
      durationEstimateSeconds: 120,
      notes: [
        "Recap the core contribution: shifting edge compression from static rules to an explainable, context-aware control layer supporting Green IoT.",
        "Walk through the four concrete milestones to convert this seminar into an 8th-semester B.Tech Major Project.",
        "Emphasize real hardware power-meter measurement on ESP32 / Raspberry Pi Pico as Step 1.",
      ],
      qa: [
        {
          question: "Which public dataset would you use first in Step 2 of your Major Project?",
          answer:
            "The Intel Berkeley Research Lab WSN dataset (temperature/humidity/voltage) or PhysioNet biomedical traces to compare directly against Paper [1].",
        },
      ],
    },
    {
      id: "slide-15-references",
      title: "Key References (IEEE Bibliography)",
      category: "References",
      component: Slide15References,
      durationEstimateSeconds: 60,
      notes: [
        "Highlight how References [1]–[4] form the core comparative foundation while [5]–[11] cover foundational WSN compression (S-LZW, Swing/Slide), Gorilla, CBOR, Protobuf, and Green IoT.",
        "Presenter Reminder: Verify and complete the missing bibliographic fields (pages/authors/year/access date) for References [1]–[4] and [10] in your final printed report.",
      ],
      qa: [
        {
          question: "Why include industry references like Gorilla [8], CBOR [9], and Protobuf [10] in an academic seminar?",
          answer:
            "To clearly separate payload encoding/storage tools from our adaptive control-policy layer and show they complement each other in real IoT systems.",
        },
      ],
    },
    {
      id: "slide-16-thank-you",
      title: "Thank You & Open Q&A",
      category: "Closing",
      component: Slide16ThankYou,
      durationEstimateSeconds: 60,
      notes: [
        "Thank the faculty panel, guide Mrs. Kanika Kapoor, and peers for their attention.",
        "Invite questions and remind yourself that you can jump back to any slide using the Grid shortcut (G) or slide arrows.",
      ],
      qa: [
        {
          question: "Ready for open Q&A?",
          answer:
            "Press 'G' to quickly jump to any equation, FSM diagram, or Table 4 limitation slide when answering panel questions.",
        },
      ],
    },
  ],
};
