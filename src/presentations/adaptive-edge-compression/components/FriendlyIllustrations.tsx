"use client";

import React from "react";

// ============================================================================
// 1. BANDWIDTH BEAM (Slide 1 & 16)
// ============================================================================
export function BandwidthBeamIllustration({ className = "w-full h-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 760 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beamGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97757" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#4A6B5D" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9E722B" stopOpacity="0.85" />
        </linearGradient>
        <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Soft Glow Track */}
      <path d="M 130 80 C 260 20, 500 140, 630 80" stroke="url(#beamGlow)" strokeWidth="12" opacity="0.3" filter="url(#glowBlur)" />
      <path d="M 130 80 C 260 20, 500 140, 630 80" stroke="url(#beamGlow)" strokeWidth="4" strokeDasharray="8 6" />

      {/* Flying Data Packets */}
      <g filter="url(#glowBlur)">
        <circle cx="260" cy="52" r="9" fill="#D97757" />
        <circle cx="380" cy="80" r="11" fill="#4A6B5D" />
        <circle cx="500" cy="108" r="9" fill="#9E722B" />
      </g>
      <text x="260" y="56" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">01</text>
      <text x="380" y="84" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ZIP</text>
      <text x="500" y="112" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">94%</text>

      {/* Left Device: Friendly Sensor Node */}
      <g transform="translate(40, 32)">
        <rect x="0" y="16" width="80" height="64" rx="14" fill="#1E1D1B" stroke="#D97757" strokeWidth="2.5" />
        <circle cx="28" cy="42" r="5" fill="#D97757" />
        <circle cx="52" cy="42" r="5" fill="#D97757" />
        <path d="M 32 58 Q 40 66 48 58" stroke="#FAF9F5" strokeWidth="2.5" strokeLinecap="round" />
        {/* Antenna */}
        <line x1="40" y1="16" x2="40" y2="2" stroke="#D97757" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="40" cy="2" r="4" fill="#D97757" />
        <text x="40" y="96" fill="#D97757" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">IoT SENSOR</text>
      </g>

      {/* Right Device: Friendly Cloud / Gateway Tower */}
      <g transform="translate(630, 24)">
        <path d="M 15 65 C 5 65, 0 55, 5 45 C 5 35, 18 30, 25 35 C 32 20, 58 20, 68 33 C 78 33, 85 40, 82 50 C 90 56, 85 65, 75 65 Z" fill="#1E1D1B" stroke="#4A6B5D" strokeWidth="2.5" />
        {/* Tower Beam Receiver */}
        <circle cx="45" cy="48" r="6" fill="#4A6B5D" />
        <circle cx="45" cy="48" r="14" stroke="#4A6B5D" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <text x="45" y="86" fill="#8AB09E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CLOUD GATEWAY</text>
      </g>
    </svg>
  );
}

// ============================================================================
// 2. TREASURE MAP (Slide 2)
// ============================================================================
export function TreasureMapIllustration({ className = "w-full h-24" }: { className?: string }) {
  const steps = [
    { num: "1", title: "Energy Paradox", x: 70, y: 50, color: "#D97757" },
    { num: "2", title: "Literature", x: 190, y: 35, color: "#9E722B" },
    { num: "3", title: "Problem Gap", x: 310, y: 55, color: "#4E6278" },
    { num: "4", title: "Middleware FSM", x: 440, y: 35, color: "#4A6B5D" },
    { num: "5", title: "Critical Audit", x: 570, y: 55, color: "#A63D33" },
    { num: "6", title: "Launchpad", x: 690, y: 40, color: "#D97757" },
  ];

  return (
    <svg viewBox="0 0 760 90" className={className} fill="none">
      {/* Wavy Dotted Path */}
      <path
        d="M 70 50 Q 130 15, 190 35 T 310 55 T 440 35 T 570 55 T 690 40"
        stroke="#D97757"
        strokeWidth="3"
        strokeDasharray="6 6"
        opacity="0.6"
      />

      {steps.map((s, idx) => (
        <g key={idx}>
          <circle cx={s.x} cy={s.y} r="16" fill="#FAF9F5" stroke={s.color} strokeWidth="3" />
          <circle cx={s.x} cy={s.y} r="12" fill={s.color} />
          <text x={s.x} y={s.y + 4} fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            {s.num}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ============================================================================
// 3. ENERGY PARADOX (Slide 3)
// ============================================================================
export function EnergyParadoxIllustration({ className = "w-full h-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 180" className={className} fill="none">
      {/* Box A: Thinking Quietly (Green Sage) */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="270" height="140" rx="14" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
        {/* Cute Lightbulb with Brain */}
        <circle cx="55" cy="55" r="24" fill="#FFFFFF" stroke="#4A6B5D" strokeWidth="2" />
        <path d="M 45 60 C 45 46, 65 46, 65 60 Z" fill="#8AB09E" opacity="0.6" />
        <circle cx="50" cy="52" r="2.5" fill="#262522" />
        <circle cx="60" cy="52" r="2.5" fill="#262522" />
        <path d="M 52 60 Q 55 64 58 60" stroke="#262522" strokeWidth="1.5" />
        {/* Glow rays */}
        <line x1="55" y1="22" x2="55" y2="16" stroke="#4A6B5D" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="32" x2="28" y2="28" stroke="#4A6B5D" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="32" x2="82" y2="28" stroke="#4A6B5D" strokeWidth="2" strokeLinecap="round" />

        <text x="95" y="45" fill="#4A6B5D" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Thinking Locally</text>
        <text x="95" y="65" fill="#66635C" fontSize="11" fontFamily="sans-serif">MCU Math (~7,000 ops)</text>
        <rect x="95" y="78" width="160" height="24" rx="6" fill="#FFFFFF" stroke="#4A6B5D" strokeWidth="1" />
        <text x="175" y="94" fill="#4A6B5D" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          ⚡ 1 Joule of Energy
        </text>
        <text x="135" y="126" fill="#4A6B5D" fontSize="10.5" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
          &quot;Whisper at home&quot;
        </text>
      </g>

      {/* VS Badge in Center */}
      <circle cx="310" cy="90" r="18" fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="2" />
      <text x="310" y="95" fill="#D97757" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">VS</text>

      {/* Box B: Shouting Across Radio (Brick Red) */}
      <g transform="translate(330, 20)">
        <rect x="0" y="0" width="270" height="140" rx="14" fill="#F4E4E2" stroke="#A63D33" strokeWidth="2" />
        {/* Shouting Megaphone */}
        <circle cx="55" cy="55" r="24" fill="#FFFFFF" stroke="#A63D33" strokeWidth="2" />
        <path d="M 42 50 L 58 42 L 58 68 L 42 60 Z" fill="#A63D33" opacity="0.75" />
        <rect x="36" y="52" width="8" height="6" fill="#262522" />
        <path d="M 64 45 Q 70 55 64 65" stroke="#A63D33" strokeWidth="2" strokeLinecap="round" />
        <path d="M 69 40 Q 78 55 69 70" stroke="#A63D33" strokeWidth="2" strokeLinecap="round" />

        <text x="95" y="45" fill="#A63D33" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Shouting Wirelessly</text>
        <text x="95" y="65" fill="#66635C" fontSize="11" fontFamily="sans-serif">Radio TX (1 Bit)</text>
        <rect x="95" y="78" width="160" height="24" rx="6" fill="#FFFFFF" />
        <text x="175" y="94" fill="#A63D33" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          ⚡ 1,000× More Power!
        </text>
        <text x="135" y="126" fill="#A63D33" fontSize="10.5" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">
          &quot;Shouting through a storm&quot;
        </text>
      </g>
    </svg>
  );
}

// ============================================================================
// 4. LITERATURE 4-PAPER MINI DIAGRAMS (Slide 4)
// ============================================================================
export function PaperMiniSZ() {
  return (
    <svg viewBox="0 0 100 48" className="w-24 h-12 inline-block" fill="none">
      <rect x="2" y="2" width="96" height="44" rx="8" fill="#F6E6DF" stroke="#D97757" strokeWidth="1.5" />
      {/* Bending Rubber Ruler Curve */}
      <path d="M 12 36 Q 30 12, 50 28 T 88 16" stroke="#D97757" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="22" r="3" fill="#D97757" />
      <circle cx="50" cy="28" r="3" fill="#D97757" />
      <circle cx="70" cy="18" r="3" fill="#D97757" />
      {/* Error Bound Margin */}
      <line x1="20" y1="12" x2="80" y2="12" stroke="#B85A3A" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="20" y1="36" x2="80" y2="36" stroke="#B85A3A" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

export function PaperMiniPredictor() {
  return (
    <svg viewBox="0 0 100 48" className="w-24 h-12 inline-block" fill="none">
      <rect x="2" y="2" width="96" height="44" rx="8" fill="#F4ECD8" stroke="#9E722B" strokeWidth="1.5" />
      {/* Crystal Ball Predictor */}
      <circle cx="32" cy="24" r="14" fill="#FFFFFF" stroke="#9E722B" strokeWidth="1.5" />
      <circle cx="32" cy="24" r="6" fill="#D6B87A" opacity="0.6" />
      <path d="M 52 24 L 68 24" stroke="#9E722B" strokeWidth="2" strokeLinecap="round" />
      <polygon points="68,20 76,24 68,28" fill="#9E722B" />
      <text x="84" y="28" fill="#9E722B" fontSize="10" fontWeight="bold" fontFamily="monospace">Δe</text>
    </svg>
  );
}

export function PaperMiniSafe() {
  return (
    <svg viewBox="0 0 100 48" className="w-24 h-12 inline-block" fill="none">
      <rect x="2" y="2" width="96" height="44" rx="8" fill="#E9EEF3" stroke="#4E6278" strokeWidth="1.5" />
      {/* 3-Tier Layered Vault */}
      <rect x="20" y="8" width="60" height="9" rx="3" fill="#4E6278" opacity="0.4" />
      <rect x="16" y="20" width="68" height="9" rx="3" fill="#4E6278" opacity="0.7" />
      <rect x="12" y="32" width="76" height="9" rx="3" fill="#4E6278" />
      <circle cx="50" cy="24" r="2.5" fill="#FAF9F5" />
    </svg>
  );
}

export function PaperMiniSolar() {
  return (
    <svg viewBox="0 0 100 48" className="w-24 h-12 inline-block" fill="none">
      <rect x="2" y="2" width="96" height="44" rx="8" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="1.5" />
      {/* Sun + Moon Cycle */}
      <circle cx="30" cy="24" r="11" fill="#D6B87A" />
      {/* Sun rays */}
      <line x1="30" y1="8" x2="30" y2="5" stroke="#9E722B" strokeWidth="1.5" />
      <line x1="30" y1="40" x2="30" y2="43" stroke="#9E722B" strokeWidth="1.5" />
      {/* Sleeping Moon */}
      <path d="M 66 16 A 12 12 0 0 0 76 34 A 10 10 0 1 1 66 16 Z" fill="#4A6B5D" />
      <text x="84" y="20" fill="#4A6B5D" fontSize="8" fontFamily="monospace">Zzz</text>
    </svg>
  );
}

// ============================================================================
// 5. BREAKING POINT ILLUSTRATIONS (Slide 5)
// ============================================================================
export function BreakingPointIllustration({ type }: { type: 1 | 2 | 3 | 4 }) {
  if (type === 1) {
    // Rigid ruler snapping under shock
    return (
      <svg viewBox="0 0 90 40" className="w-20 h-9 inline-block" fill="none">
        <line x1="8" y1="20" x2="42" y2="12" stroke="#A63D33" strokeWidth="3" strokeLinecap="round" />
        <line x1="48" y1="28" x2="82" y2="20" stroke="#A63D33" strokeWidth="3" strokeLinecap="round" />
        <text x="45" y="16" fill="#A63D33" fontSize="12" fontWeight="bold">⚡</text>
      </svg>
    );
  }
  if (type === 2) {
    // Snowball rolling downhill collecting errors
    return (
      <svg viewBox="0 0 90 40" className="w-20 h-9 inline-block" fill="none">
        <line x1="10" y1="12" x2="80" y2="34" stroke="#66635C" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="25" cy="16" r="5" fill="#4E6278" />
        <circle cx="50" cy="24" r="8" fill="#4E6278" opacity="0.8" />
        <circle cx="75" cy="31" r="11" fill="#A63D33" />
      </svg>
    );
  }
  if (type === 3) {
    // Noise wave exploding inside lossless box
    return (
      <svg viewBox="0 0 90 40" className="w-20 h-9 inline-block" fill="none">
        <rect x="8" y="6" width="74" height="28" rx="6" fill="#FAF9F5" stroke="#A63D33" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M 14 20 L 22 8 L 30 32 L 38 12 L 46 28 L 54 10 L 62 30 L 70 14 L 76 20" stroke="#A63D33" strokeWidth="2" />
      </svg>
    );
  }
  // Morning traffic jam
  return (
    <svg viewBox="0 0 90 40" className="w-20 h-9 inline-block" fill="none">
      <rect x="8" y="14" width="20" height="14" rx="4" fill="#A63D33" />
      <rect x="34" y="14" width="20" height="14" rx="4" fill="#A63D33" />
      <rect x="60" y="14" width="20" height="14" rx="4" fill="#A63D33" />
      <text x="29" y="24" fill="#A63D33" fontSize="10">💥</text>
      <text x="55" y="24" fill="#A63D33" fontSize="10">💥</text>
    </svg>
  );
}

// ============================================================================
// 6. THREE-DIAL DASHBOARD & METAPHOR (Slide 6)
// ============================================================================
export function ThreeDialDashboard({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 130" className={className} fill="none">
      {/* Dial 1: Volatility Speedometer */}
      <g transform="translate(40, 15)">
        <circle cx="50" cy="50" r="42" fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="3" />
        <path d="M 20 60 A 34 34 0 1 1 80 60" stroke="#D97757" strokeWidth="6" strokeLinecap="round" />
        {/* Needle pointing to low/calm */}
        <line x1="50" y1="50" x2="34" y2="30" stroke="#262522" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="5" fill="#262522" />
        <text x="50" y="105" fill="#262522" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          1. VOLATILITY (σ²)
        </text>
      </g>

      {/* Dial 2: Battery Gauge */}
      <g transform="translate(260, 15)">
        <rect x="18" y="25" width="64" height="40" rx="8" fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="3" />
        <rect x="82" y="37" width="6" height="16" rx="2" fill="#66635C" />
        {/* Battery bars */}
        <rect x="26" y="32" width="12" height="26" rx="3" fill="#4A6B5D" />
        <rect x="42" y="32" width="12" height="26" rx="3" fill="#4A6B5D" />
        <rect x="58" y="32" width="12" height="26" rx="3" fill="#A63D33" opacity="0.3" />
        <text x="50" y="105" fill="#262522" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          2. BATTERY LIFE
        </text>
      </g>

      {/* Dial 3: Traffic Cop / Congestion */}
      <g transform="translate(480, 15)">
        <circle cx="50" cy="50" r="42" fill="#FAF9F5" stroke="#E5E2D9" strokeWidth="3" />
        <circle cx="50" cy="30" r="8" fill="#A63D33" opacity="0.3" />
        <circle cx="50" cy="50" r="8" fill="#9E722B" opacity="0.3" />
        <circle cx="50" cy="70" r="8" fill="#4A6B5D" />
        <text x="50" y="105" fill="#262522" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          3. CONGESTION
        </text>
      </g>
    </svg>
  );
}

// ============================================================================
// 7. CONVEYOR BELT & POND VS WAVE (Slide 8)
// ============================================================================
export function ConveyorBeltIllustration({ className = "w-full h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 140" className={className} fill="none">
      {/* Belt Track */}
      <rect x="120" y="45" width="440" height="20" rx="10" fill="#E5E2D9" stroke="#66635C" strokeWidth="2" />
      <circle cx="130" cy="55" r="7" fill="#66635C" />
      <circle cx="550" cy="55" r="7" fill="#66635C" />

      {/* 5 Slots on Belt */}
      <g transform="translate(160, 20)">
        <rect x="0" y="0" width="50" height="45" rx="8" fill="#FFFFFF" stroke="#4E6278" strokeWidth="2" />
        <text x="25" y="28" fill="#262522" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">22.0</text>
      </g>
      <g transform="translate(230, 20)">
        <rect x="0" y="0" width="50" height="45" rx="8" fill="#FFFFFF" stroke="#4E6278" strokeWidth="2" />
        <text x="25" y="28" fill="#262522" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">22.1</text>
      </g>
      <g transform="translate(300, 20)">
        <rect x="0" y="0" width="50" height="45" rx="8" fill="#FFFFFF" stroke="#4E6278" strokeWidth="2" />
        <text x="25" y="28" fill="#262522" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">22.0</text>
      </g>
      <g transform="translate(370, 20)">
        <rect x="0" y="0" width="50" height="45" rx="8" fill="#FFFFFF" stroke="#4E6278" strokeWidth="2" />
        <text x="25" y="28" fill="#262522" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">21.9</text>
      </g>
      <g transform="translate(440, 20)">
        <rect x="0" y="0" width="50" height="45" rx="8" fill="#F6E6DF" stroke="#D97757" strokeWidth="2.5" />
        <text x="25" y="28" fill="#D97757" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">22.0</text>
      </g>

      {/* Evicted Sample Dropping Off Left */}
      <g transform="translate(40, 48)">
        <rect x="0" y="0" width="44" height="36" rx="6" fill="#F0EEE6" stroke="#B0ACA3" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="22" y="22" fill="#B0ACA3" fontSize="11" textAnchor="middle" fontFamily="monospace">20.1</text>
        <path d="M 52 18 L 68 18" stroke="#D97757" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="22" y="48" fill="#A63D33" fontSize="9.5" textAnchor="middle" fontFamily="sans-serif">Oldest Falls Off</text>
      </g>

      {/* New Sample Entering Right */}
      <g transform="translate(580, 24)">
        <rect x="0" y="0" width="48" height="40" rx="8" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
        <text x="24" y="24" fill="#4A6B5D" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">NEW</text>
        <text x="24" y="52" fill="#4A6B5D" fontSize="10" textAnchor="middle" fontFamily="sans-serif">+ Sample</text>
      </g>

      <text x="340" y="105" fill="#66635C" fontSize="12" textAnchor="middle" fontFamily="sans-serif">
        FIFO Conveyor Belt holds exactly <strong className="text-claude-ink">n = 5 samples</strong> in RAM at all times.
      </text>
    </svg>
  );
}

// ============================================================================
// 8. SEE-SAW BALANCE SCALE (Slide 9)
// ============================================================================
export function SeeSawBalanceScale({ className = "w-full h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 540 140" className={className} fill="none">
      {/* Center Pivot Triangle */}
      <polygon points="270,75 250,115 290,115" fill="#262522" />
      <circle cx="270" cy="75" r="5" fill="#FAF9F5" />

      {/* Tilting Lever Beam */}
      <line x1="80" y1="65" x2="460" y2="85" stroke="#262522" strokeWidth="6" strokeLinecap="round" />

      {/* Left Pan: Bandwidth Weight w1 * B */}
      <g transform="translate(80, 65)">
        <line x1="0" y1="0" x2="-20" y2="25" stroke="#66635C" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="20" y2="25" stroke="#66635C" strokeWidth="1.5" />
        <rect x="-30" y="25" width="60" height="20" rx="4" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2" />
        <text x="0" y="39" fill="#4A6B5D" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">w₁ · B</text>
        <text x="0" y="60" fill="#4A6B5D" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Bandwidth</text>
      </g>

      {/* Right Pan: Distortion Weight w2 * D */}
      <g transform="translate(460, 85)">
        <line x1="0" y1="0" x2="-20" y2="25" stroke="#66635C" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="20" y2="25" stroke="#66635C" strokeWidth="1.5" />
        <rect x="-30" y="25" width="60" height="20" rx="4" fill="#F4E4E2" stroke="#A63D33" strokeWidth="2" />
        <text x="0" y="39" fill="#A63D33" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">w₂ · D</text>
        <text x="0" y="60" fill="#A63D33" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Distortion</text>
      </g>

      <text x="270" y="132" fill="#262522" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Total Cost = (w₁ · Bandwidth) + (w₂ · Distortion)
      </text>
    </svg>
  );
}

// ============================================================================
// 9. ROBOT TRAFFIC LIGHT (Slide 10)
// ============================================================================
export function RobotTrafficLightIllustration({ className = "w-full h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 140" className={className} fill="none">
      {/* Mood 1: Green Happy Robot (Steady-State) */}
      <g transform="translate(40, 10)">
        <rect x="0" y="0" width="140" height="110" rx="14" fill="#E8EFEA" stroke="#4A6B5D" strokeWidth="2.5" />
        <circle cx="70" cy="40" r="22" fill="#4A6B5D" />
        {/* Happy Eyes and Smile */}
        <circle cx="63" cy="36" r="3" fill="#FFFFFF" />
        <circle cx="77" cy="36" r="3" fill="#FFFFFF" />
        <path d="M 62 46 Q 70 52 78 46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="70" y="80" fill="#4A6B5D" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">STEADY STATE</text>
        <text x="70" y="96" fill="#66635C" fontSize="10.5" textAnchor="middle" fontFamily="sans-serif">Lossy • 90% Saved</text>
      </g>

      {/* Mood 2: Red Alert Siren Robot (Critical) */}
      <g transform="translate(230, 10)">
        <rect x="0" y="0" width="140" height="110" rx="14" fill="#F4E4E2" stroke="#A63D33" strokeWidth="2.5" />
        <circle cx="70" cy="40" r="22" fill="#A63D33" />
        {/* Alert Eyes and Wide Mouth */}
        <circle cx="63" cy="36" r="3" fill="#FFFFFF" />
        <circle cx="77" cy="36" r="3" fill="#FFFFFF" />
        <circle cx="70" cy="48" r="4" fill="#FFFFFF" />
        {/* Siren flash */}
        <line x1="70" y1="14" x2="70" y2="6" stroke="#A63D33" strokeWidth="2.5" />
        <text x="70" y="80" fill="#A63D33" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CRITICAL</text>
        <text x="70" y="96" fill="#66635C" fontSize="10.5" textAnchor="middle" fontFamily="sans-serif">Raw / 100% Exact</text>
      </g>

      {/* Mood 3: Sleeping Owl Robot (Survival) */}
      <g transform="translate(420, 10)">
        <rect x="0" y="0" width="140" height="110" rx="14" fill="#F4ECD8" stroke="#9E722B" strokeWidth="2.5" />
        <circle cx="70" cy="40" r="22" fill="#9E722B" />
        {/* Closed Sleeping Eyes */}
        <path d="M 60 38 Q 64 42 68 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M 72 38 Q 76 42 80 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="88" y="24" fill="#9E722B" fontSize="10" fontWeight="bold" fontFamily="monospace">Zzz</text>
        <text x="70" y="80" fill="#9E722B" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SURVIVAL</text>
        <text x="70" y="96" fill="#66635C" fontSize="10.5" textAnchor="middle" fontFamily="sans-serif">Radio Asleep • Local</text>
      </g>
    </svg>
  );
}

// ============================================================================
// 10. DOORWAY GUARD HYSTERESIS (Slide 11)
// ============================================================================
export function DoorwayGuardHysteresis({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 120" className={className} fill="none">
      {/* Friendly Guard holding Stop Sign */}
      <g transform="translate(50, 15)">
        <circle cx="40" cy="30" r="16" fill="#D97757" />
        <circle cx="35" cy="27" r="2" fill="#FFFFFF" />
        <circle cx="45" cy="27" r="2" fill="#FFFFFF" />
        <path d="M 36 35 Q 40 38 44 35" stroke="#FFFFFF" strokeWidth="1.5" />
        {/* Guard Body */}
        <rect x="25" y="48" width="30" height="40" rx="8" fill="#1E1D1B" />
        {/* Stop Sign in Hand */}
        <polygon points="80,20 95,20 102,27 102,42 95,49 80,49 73,42 73,27" fill="#A63D33" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="87" y="38" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">STOP</text>
      </g>

      <g transform="translate(180, 25)">
        <text x="0" y="22" fill="#262522" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          &quot;Hold On! Wait K Calm Windows!&quot;
        </text>
        <text x="0" y="44" fill="#66635C" fontSize="12" fontFamily="sans-serif">
          Anti-thrashing cooldown prevents switching back to lossy too early.
        </text>
        <rect x="0" y="55" width="280" height="26" rx="6" fill="#FAF9F5" stroke="#E5E2D9" />
        <text x="140" y="72" fill="#D97757" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          Calm Windows Counter: [ 1 / K ]
        </text>
      </g>
    </svg>
  );
}

// ============================================================================
// 11. LAUNCHPAD ROCKET (Slide 14)
// ============================================================================
export function LaunchpadRocketRoadmap({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 680 120" className={className} fill="none">
      {/* 4 Launchpad Stations */}
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="130" height="80" rx="12" fill="#FAF9F5" stroke="#D97757" strokeWidth="2" />
        <circle cx="28" cy="28" r="14" fill="#D97757" />
        <text x="28" y="33" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">01</text>
        <text x="50" y="32" fill="#262522" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Hardware</text>
        <text x="15" y="60" fill="#66635C" fontSize="10.5" fontFamily="sans-serif">ESP32 &amp; Meter</text>
      </g>

      <g transform="translate(200, 20)">
        <rect x="0" y="0" width="130" height="80" rx="12" fill="#FAF9F5" stroke="#9E722B" strokeWidth="2" />
        <circle cx="28" cy="28" r="14" fill="#9E722B" />
        <text x="28" y="33" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">02</text>
        <text x="50" y="32" fill="#262522" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Datasets</text>
        <text x="15" y="60" fill="#66635C" fontSize="10.5" fontFamily="sans-serif">Intel Lab &amp; Physio</text>
      </g>

      <g transform="translate(360, 20)">
        <rect x="0" y="0" width="130" height="80" rx="12" fill="#FAF9F5" stroke="#4E6278" strokeWidth="2" />
        <circle cx="28" cy="28" r="14" fill="#4E6278" />
        <text x="28" y="33" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">03</text>
        <text x="50" y="32" fill="#262522" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Auto-Tune</text>
        <text x="15" y="60" fill="#66635C" fontSize="10.5" fontFamily="sans-serif">Self-Tuning τ</text>
      </g>

      <g transform="translate(520, 20)">
        <rect x="0" y="0" width="130" height="80" rx="12" fill="#FAF9F5" stroke="#4A6B5D" strokeWidth="2" />
        <circle cx="28" cy="28" r="14" fill="#4A6B5D" />
        <text x="28" y="33" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">04</text>
        <text x="50" y="32" fill="#262522" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Multi-Hop</text>
        <text x="15" y="60" fill="#66635C" fontSize="10.5" fontFamily="sans-serif">Cluster Relays</text>
      </g>

      {/* Connecting Dotted Launch Line */}
      <line x1="170" y1="60" x2="200" y2="60" stroke="#D97757" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="330" y1="60" x2="360" y2="60" stroke="#9E722B" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="490" y1="60" x2="520" y2="60" stroke="#4E6278" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}
