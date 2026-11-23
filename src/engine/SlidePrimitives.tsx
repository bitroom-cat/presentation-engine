import React from "react";
import { clsx } from "clsx";

export interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
  patternBg?: boolean;
}

export function SlideContainer({ children, className, patternBg = true }: SlideContainerProps) {
  return (
    <div
      className={clsx(
        "relative w-full h-full flex flex-col justify-between overflow-hidden select-none p-12 text-deck-text bg-deck-bg",
        patternBg && "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-deck-card/40 via-deck-bg to-deck-bg",
        className
      )}
    >
      {/* Subtle grid background pattern */}
      {patternBg && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      )}
      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}

export interface SlideHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SlideHeader({ category, title, subtitle, badge, className }: SlideHeaderProps) {
  return (
    <header className={clsx("mb-8 flex items-start justify-between gap-4", className)}>
      <div className="space-y-1.5 max-w-4xl">
        {category && (
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold text-deck-primary px-2.5 py-0.5 rounded-full bg-deck-primary/10 border border-deck-primary/20">
              {category}
            </span>
          </div>
        )}
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="text-base text-deck-textMuted font-medium leading-relaxed">{subtitle}</p>}
      </div>
      {badge && (
        <span className="text-xs font-mono font-medium px-3 py-1 rounded bg-deck-card border border-deck-cardBorder text-deck-accent">
          {badge}
        </span>
      )}
    </header>
  );
}

export interface SlideFooterProps {
  deckTitle: string;
  slideIndex: number;
  totalSlides: number;
  author?: string;
  className?: string;
}

export function SlideFooter({ deckTitle, slideIndex, totalSlides, author, className }: SlideFooterProps) {
  return (
    <footer
      className={clsx(
        "mt-auto pt-4 border-t border-deck-cardBorder/60 flex items-center justify-between text-xs font-mono text-deck-textMuted",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="font-semibold text-white/80">{deckTitle}</span>
        {author && (
          <>
            <span>•</span>
            <span>{author}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-deck-primary font-bold">{String(slideIndex + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(totalSlides).padStart(2, "0")}</span>
      </div>
    </footer>
  );
}

export interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "default";
}

export function StatCard({ label, value, subValue, change, trend, icon, variant = "default" }: StatCardProps) {
  const borderColors = {
    primary: "border-deck-primary/30 hover:border-deck-primary/60",
    secondary: "border-deck-secondary/30 hover:border-deck-secondary/60",
    accent: "border-deck-accent/30 hover:border-deck-accent/60",
    default: "border-deck-cardBorder hover:border-deck-cardBorder/80",
  };

  const textColors = {
    primary: "text-deck-primary",
    secondary: "text-deck-secondary",
    accent: "text-deck-accent",
    default: "text-white",
  };

  return (
    <div
      className={clsx(
        "p-5 rounded-xl bg-deck-card/70 border backdrop-blur-sm transition-all duration-200 flex flex-col justify-between shadow-lg",
        borderColors[variant]
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase font-mono font-medium tracking-wider text-deck-textMuted">{label}</span>
        {icon && <div className={clsx("p-2 rounded-lg bg-white/5", textColors[variant])}>{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold tracking-tight text-white">{value}</span>
        {subValue && <span className="text-sm text-deck-textMuted">{subValue}</span>}
      </div>
      {change && (
        <div className="mt-2 text-xs font-medium flex items-center gap-1">
          <span
            className={clsx(
              trend === "up" && "text-emerald-400",
              trend === "down" && "text-rose-400",
              trend === "neutral" && "text-deck-textMuted"
            )}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "•"} {change}
          </span>
        </div>
      )}
    </div>
  );
}

export interface MathFracProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  className?: string;
}

export function MathFrac({ numerator, denominator, className }: MathFracProps) {
  return (
    <span className={clsx("inline-flex flex-col items-center align-middle mx-1 font-serif text-center", className)}>
      <span className="px-1 border-b border-white/60 leading-tight text-sm font-semibold">{numerator}</span>
      <span className="px-1 leading-tight text-sm font-semibold">{denominator}</span>
    </span>
  );
}

export interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  type?: "info" | "success" | "warning" | "accent";
}

export function Callout({ title, children, type = "info" }: CalloutProps) {
  const styles = {
    info: "bg-blue-950/30 border-blue-500/30 text-blue-200",
    success: "bg-emerald-950/30 border-emerald-500/30 text-emerald-200",
    warning: "bg-amber-950/30 border-amber-500/30 text-amber-200",
    accent: "bg-cyan-950/30 border-cyan-500/30 text-cyan-200",
  };

  return (
    <div className={clsx("p-4 rounded-xl border", styles[type])}>
      {title && <h4 className="font-semibold text-sm mb-1 text-white">{title}</h4>}
      <div className="text-xs leading-relaxed opacity-90">{children}</div>
    </div>
  );
}
