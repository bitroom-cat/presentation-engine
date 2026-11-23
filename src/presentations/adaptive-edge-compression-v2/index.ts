import { DeckDefinition } from "@/engine/types";
import { Slide00Cover } from "./slides/Slide00Cover";
import { Slide01Roadmap } from "./slides/Slide01Roadmap";
import { Slide02WsnIntro } from "./slides/Slide02WsnIntro";
import { Slide03Constraints } from "./slides/Slide03Constraints";
import { Slide04EnergyParadox } from "./slides/Slide04EnergyParadox";
import { Slide05Literature } from "./slides/Slide05Literature";
import { Slide06Middleware } from "./slides/Slide06Middleware";
import { Slide07FsmDecision } from "./slides/Slide07FsmDecision";
import { Slide08FifoQueue } from "./slides/Slide08FifoQueue";
import { Slide09ValidationRoadmap } from "./slides/Slide09ValidationRoadmap";
import { Slide10ThankYou } from "./slides/Slide10ThankYou";

export const adaptiveEdgeCompressionV2Deck: DeckDefinition = {
  slug: "adaptive-edge-compression-v2",
  title: "Adaptive Edge Data Compression",
  subtitle: "Wireless Sensor Networks • In-Memory Adaptive Compression & 3D Visual Architecture",
  description:
    "Interactive seminar presentation on Context-Aware Adaptive Edge Compression for WSNs. Featuring hardware-accelerated 3D sensor and mesh components, auto-ambient SVG physics loops, zero wall-of-text visual design, and real-time viva sandbox controls.",
  author: "Satyam Sharma",
  role: "B.Tech CSE, Sem-VII (Roll: 23010603066)",
  date: "Academic Session 2023–27",
  tags: [
    "WSN",
    "Edge Computing",
    "Adaptive Compression",
    "Green IoT",
    "3D Visuals",
    "FSM"
  ],
  theme: {
    bg: "#0d0e12",
    card: "#161822",
    cardBorder: "#262938",
    primary: "#38bdf8", // Cyan
    secondary: "#10b981", // Emerald
    accent: "#f43f5e", // Coral-Red
    text: "#ffffff",
    textMuted: "#94a3b8",
  },
  slides: [
    {
      id: "slide-00",
      title: "Cover · Adaptive Edge Data Compression",
      category: "Title",
      component: Slide00Cover,
      notes: [
        "Greet the evaluation committee, Seminar Guide Mrs. Kanika Kapoor, and introducers.",
        "Highlight the seminar focus: Context-Aware Edge Compression for Wireless Sensor Networks (WSNs).",
        "Emphasize the visual thesis: Rather than forcing nodes to follow one static compression rule, our middleware dynamically adapts to volatility, battery, and network congestion."
      ],
      qa: [
        {
          question: "Why is edge compression crucial for WSNs?",
          answer:
            "Wireless transmission accounts for up to 80% of node power consumption. Processing data locally on the 32-bit MCU before enabling the radio saves orders of magnitude more battery life."
        }
      ]
    },
    {
      id: "slide-01",
      title: "Presentation Roadmap: 6-Stage Journey",
      category: "Roadmap",
      component: Slide01Roadmap,
      notes: [
        "Walk the panel through the 6-stage presentation journey: Energy Paradox, Literature Survey, Proposed Middleware, Decision Engine, FIFO Walkthrough, and Scope/Roadmap.",
        "Point to the bottom banner: The central thesis is joint dynamic adaptation across resources."
      ],
      qa: [
        {
          question: "How long is this seminar presentation designed to take?",
          answer:
            "Approximately 10 to 12 minutes, leaving 3 to 5 minutes for faculty Q&A and interactive viva demonstrations."
        }
      ]
    },
    {
      id: "slide-02",
      title: "Introduction to Wireless Sensor Networks (WSN)",
      category: "Fundamentals",
      component: Slide02WsnIntro,
      notes: [
        "Imagine deploying hundreds of tiny, battery-powered sensors across a remote forest, a factory floor, or an agricultural field.",
        "Because running power cables or internet wires to every corner of these environments is impossible, these small devices communicate wirelessly over radio waves to send readings back to a central gateway and dashboard.",
        "This network of tiny wireless devices is a Wireless Sensor Network (WSN), which acts as the physical sensing backbone of the Internet of Things."
      ],
      qa: [
        {
          question: "Why is WSN communication fundamentally harder than standard Wi-Fi or cellular?",
          answer:
            "In WSNs, nodes have no fixed power grid and must operate for months or years on coin-cell or small batteries, meaning every radio transmission directly depletes the device's operational lifespan."
        }
      ]
    },
    {
      id: "slide-03",
      title: "Core Hardware & Network Constraints",
      category: "Constraints",
      component: Slide03Constraints,
      notes: [
        "Every WSN operates under two tight physical bottlenecks.",
        "First, look at the top animation: Transmission Media and Bandwidth. Low-power wireless radios like IEEE 802.15.4 or BLE have narrow bandwidth—if hundreds of nodes push raw readings into a narrow pipe at once, packets collide and the network congests.",
        "Second, look at the bottom diagram: Limited Computation and Memory. Each node runs on a tiny microcontroller with minimal RAM, meaning it cannot store long histories or run heavy cloud models."
      ],
      qa: [
        {
          question: "Why can't we just put a more powerful processor like an Intel i7 on the sensor node?",
          answer:
            "A high-power processor consumes several watts, which would drain a sensor battery in minutes. We must operate within the milliwatt energy budget of microcontrollers like ARM Cortex-M."
        }
      ]
    },
    {
      id: "slide-04",
      title: "The Radio Energy Paradox & Green IoT",
      category: "Physics & Ecology",
      component: Slide04EnergyParadox,
      notes: [
        "This creates the central physics problem of my report: transmitting a single bit over a wireless radio consumes orders of magnitude more battery energy than executing local math on the chip.",
        "In a 'dumb' setup, if a machine sits at a steady 22°C all day, the sensor blasts '22°C' thousands of times—draining its battery in days while sending zero new information.",
        "This directly impacts Green IoT. Replacing thousands of dead batteries every few weeks creates massive maintenance cost and toxic electronic waste. By processing data at the edge before turning on the radio, a battery lasts months instead of days."
      ],
      qa: [
        {
          question: "How much energy does a radio transmission consume compared to local math?",
          answer:
            "In typical embedded radios, transmitting a single bit consumes approximately 100 nJ to 1 µJ, whereas a 32-bit arithmetic operation on an MCU consumes approximately 1 nJ—a 1,000× difference!"
        }
      ]
    },
    {
      id: "slide-05",
      title: "Existing Research: Strong Techniques, Static Rules",
      category: "Literature Survey",
      component: Slide05Literature,
      notes: [
        "Researchers have built four major edge-compression approaches, and each hits a wall because it locks in one static rule in advance.",
        "SZ error-bounded lossy compression cuts wearable data by up to 103×, but its fixed error bound (10⁻¹) can smooth over sudden critical spikes.",
        "NADPCMC nonlinear prediction saves up to 60.4% energy, but re-compressing across multi-hop cluster heads causes distortion to stack from 1.67% to 4.60%.",
        "A three-layer lossless framework preserves every bit on structured data, but fails to compress noisy, high-entropy streams.",
        "Solar-powered S-LZW aggregation prevents overnight blackouts, but waking all nodes at sunrise triggers a synchronized 'morning traffic spike' that jams the network."
      ],
      qa: [
        {
          question: "What is the fundamental root cause of failure across all four surveyed methods?",
          answer:
            "Every method pre-commits to a single static compression policy regardless of whether the physical environment is calm, volatile, congested, or battery-depleted."
        }
      ]
    },
    {
      id: "slide-06",
      title: "Our Solution: Adaptive Edge Middleware",
      category: "Architecture",
      component: Slide06Middleware,
      notes: [
        "Our core solution is Adaptation: instead of forcing a sensor node to obey one static rule forever, the edge device continuously senses its environment and switches its compression strategy in real time.",
        "We place a lightweight Edge Middleware layer between the sensor driver and the radio.",
        "It tracks three live signals: data volatility via sliding-window variance (σ²), battery level, and network congestion—and feeds them into a weighted cost function and finite state machine.",
        "Use the viva sandbox controls at the bottom during Q&A to demonstrate how injecting a spike or draining battery dynamically shifts the architecture tracks."
      ],
      qa: [
        {
          question: "How does this middleware interact with existing protocols like Protobuf or CBOR?",
          answer:
            "Our middleware operates as a pre-compression decision layer; the resulting lossy summary or raw payload can still be serialized using Protobuf, CBOR, or raw byte structs."
        }
      ]
    },
    {
      id: "slide-07",
      title: "3-State Finite State Machine & Cost Function",
      category: "Decision Engine",
      component: Slide07FsmDecision,
      notes: [
        "The decision engine balances bandwidth against distortion using a weighted cost function and a three-state Finite State Machine.",
        "In Steady-State, when readings are flat and resources are healthy, it sends tiny lossy summaries.",
        "The moment volatility spikes above threshold τ, it jumps to Critical Mode and streams exact raw readings so the dashboard sees the true event—using hysteresis thresholds and K calm windows so noisy vibrations don't cause rapid mode thrashing.",
        "Finally, if battery drops below 20% or the network jams, it enters Survival Mode, sleeping the radio and buffering locally in flash—while a Priority Rule still fires a single short emergency alert if a critical spike occurs above our 5% battery reserve."
      ],
      qa: [
        {
          question: "Why is hysteresis necessary in the FSM?",
          answer:
            "Without hysteresis (K calm windows), physical signal fluctuations near the threshold would cause rapid, oscillating state switches, wasting CPU cycles and radio transitions."
        }
      ]
    },
    {
      id: "slide-08",
      title: "How the 5-Sample Queue Catches a Spike Early",
      category: "Walkthrough",
      component: Slide08FifoQueue,
      notes: [
        "Here is how our 5-reading FIFO queue protects anomaly data before it even leaves the node.",
        "Initially, the queue holds five calm readings around 22°C, giving a variance of 0.004. With normal weights, a compact lossy packet costs 8.4 versus 80.0 for raw data, so we stay in Steady-State.",
        "Now watch what happens when a bearing overheats and 35.0°C and 50.2°C enter the front of the queue. Even while older readings are still exiting the back of the queue, the window variance immediately jumps to 124.6.",
        "Our Cost Function flips its weights to prioritize accuracy—making exact raw transmission cheaper (10.0 vs 14.5)—so lossless transmission is already locked in before those spike samples reach the end of the queue and hit the main dashboard."
      ],
      qa: [
        {
          question: "What happens to the older calm samples still in the queue when the spike enters?",
          answer:
            "Because the queue is FIFO and the mode switches to Raw immediately upon variance calculation, subsequent transmissions convey the full resolution window, ensuring zero spike data loss."
        }
      ]
    },
    {
      id: "slide-09",
      title: "Validation Scope & Next Steps",
      category: "Evaluation & Roadmap",
      component: Slide09ValidationRoadmap,
      notes: [
        "Finally, to be clear on our validation boundary: we verified multi-sensor behavior in a controlled lab setup and tested the detection pipeline across a 120-sample synthetic temperature trace, where the variance detector cleanly isolated the 23 critical windows during the surge and recovery while keeping flat periods in low-power Steady-State.",
        "Because full-scale outdoor or industrial field deployment has not been run yet, we do not claim long-term outdoor battery benchmarks in this report.",
        "Moving this middleware onto physical ESP32 nodes with live power-meter profiling and adaptive threshold learning is our immediate roadmap for the Major Project. Thank you—I am happy to take your questions."
      ],
      qa: [
        {
          question: "What specific hardware will you use for the physical Major Project?",
          answer:
            "We will deploy on dual ESP32 and Raspberry Pi Pico nodes instrumented with INA219 current-sensor shunts to record exact microjoule power consumption curves under real solar harvesting."
        }
      ]
    },
    {
      id: "slide-10",
      title: "Thank You • Questions & Discussion",
      category: "Conclusion",
      component: Slide10ThankYou,
      notes: [
        "Conclude the seminar presentation with the 3 central takeaways.",
        "Invite questions from seminar guide Mrs. Kanika Kapoor and faculty evaluation panel.",
        "Demonstrate the interactive 3D node component on the left by dragging to inspect layer separation during Q&A."
      ],
      qa: [
        {
          question: "Can this middleware run on an 8-bit Arduino instead of a 32-bit ARM Cortex?",
          answer:
            "While the 5-sample Welford variance algorithm is lightweight, 32-bit Cortex-M processors are strongly recommended due to single-cycle hardware floating-point operations and low sleeping currents."
        }
      ]
    }
  ]
};

export default adaptiveEdgeCompressionV2Deck;
