"use client";

import React, { useState } from "react";
import { SlideProps } from "@/engine/types";

interface RoleConfig {
  sql: string;
  summary: string;
  modules: {
    name: string;
    status: string;
    tone: "pine" | "ochre" | "crimson";
    detail: string;
  }[];
}

const rbacRoles: Record<"superuser" | "events" | "newsroom", RoleConfig> = {
  superuser: {
    sql: "SELECT * FROM portal_records;  -- UNFILTERED GLOBAL (is_superuser=True)",
    summary: "5 / 5 Modules Accessible",
    modules: [
      { name: "Operations Dashboard", status: "FULL ACCESS", tone: "pine", detail: "All 4 sites KPIs & audit stream" },
      { name: "Events & Webinars", status: "FULL ACCESS", tone: "pine", detail: "Create, edit, clone & delete all" },
      { name: "Applicants DB", status: "FULL ACCESS", tone: "pine", detail: "All hiring pipelines & exports" },
      { name: "Newsroom Content", status: "FULL ACCESS", tone: "pine", detail: "Featured work, guests & order" },
      { name: "Users & Infra Config", status: "FULL ACCESS", tone: "pine", detail: "Provision accounts & RBAC groups" }
    ]
  },
  events: {
    sql: "SELECT * FROM portal_records WHERE site_identifier = 'webinars';",
    summary: "2 / 5 Modules Scoped",
    modules: [
      { name: "Operations Dashboard", status: "SCOPED", tone: "ochre", detail: "Filtered to site='webinars'" },
      { name: "Events & Webinars", status: "SCOPED", tone: "ochre", detail: "Read/Write own event rows only" },
      { name: "Applicants DB", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "has_module_permission → False" },
      { name: "Newsroom Content", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "Blocked at ORM & ModelAdmin" },
      { name: "Users & Infra Config", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "Superuser-only governance" }
    ]
  },
  newsroom: {
    sql: "SELECT * FROM portal_records WHERE site_identifier = 'newsroom';",
    summary: "2 / 5 Modules Scoped",
    modules: [
      { name: "Operations Dashboard", status: "SCOPED", tone: "ochre", detail: "Filtered to site='newsroom'" },
      { name: "Events & Webinars", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "Zero access to webinar DB" },
      { name: "Applicants DB", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "has_module_permission → False" },
      { name: "Newsroom Content", status: "SCOPED", tone: "ochre", detail: "Manage own editorial items only" },
      { name: "Users & Infra Config", status: "ISOLATED / HIDDEN", tone: "crimson", detail: "Superuser-only governance" }
    ]
  }
};

export const Slide09RbacScopeExplorer: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  const [activeRole, setActiveRole] = useState<"superuser" | "events" | "newsroom">("superuser");
  const cfg = rbacRoles[activeRole];

  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
      <div className="flex items-end justify-between border-b border-mono-line pb-3.5">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-ochre font-semibold mb-1">Project 03 · Access Governance</div>
          <h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Two-Tier RBAC & Interactive Access Scope Explorer</h2>
        </div>
        <span className="font-mono text-[11px] text-mono-muted">Least-Privilege Principle</span>
      </div>

      <div className="flex-1 flex flex-col justify-between py-4 gap-4">
        {/* Top: Clean 2-Column Summary Table */}
        <div className="bg-mono-card border border-mono-line rounded-[6px] overflow-hidden">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="bg-mono-subtle border-b border-mono-line font-mono text-[10.5px] uppercase tracking-wider text-mono-muted">
                <th className="py-2.5 px-5 w-[16%]">RBAC Tier</th>
                <th className="py-2.5 px-5 w-[32%]">Access Scope</th>
                <th className="py-2.5 px-5 w-[52%]">Authorized Capabilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mono-line">
              <tr>
                <td className="py-3 px-5 font-bold text-mono-copper">Superuser Tier</td>
                <td className="py-3 px-5 font-medium text-mono-ink">Global access across all 4 web properties</td>
                <td className="py-3 px-5 text-mono-muted">Provision accounts, define permission groups, manage infrastructure variables, audit cross-site logs.</td>
              </tr>
              <tr className="bg-mono-paper/60">
                <td className="py-3 px-5 font-bold text-mono-ochre">Staff Tier</td>
                <td className="py-3 px-5 font-medium text-mono-ink">Strictly scoped by department & <span className="font-mono text-[12px]">site_identifier</span></td>
                <td className="py-3 px-5 text-mono-muted">View & edit only models relevant to their assigned domain; zero visibility into sibling department databases.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom: INTERACTIVE RBAC ROLE SIMULATOR */}
        <div className="bg-mono-card border border-mono-line rounded-[6px] p-5 flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-mono-line">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-mono-ochre font-bold block">Interactive RBAC Role Simulator</span>
              <span className="text-[12.5px] text-mono-muted">Select an authenticated role to inspect module permissions and live ORM scoping</span>
            </div>
            {/* Clickable Role Tabs */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveRole("superuser")}
                className={`px-3.5 py-1.5 rounded-[4px] font-mono text-[11.5px] font-semibold border transition cursor-pointer ${
                  activeRole === "superuser"
                    ? "bg-mono-forest text-mono-forestText border-mono-forest"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-copper"
                }`}
              >
                Superuser (Global)
              </button>
              <button
                type="button"
                onClick={() => setActiveRole("events")}
                className={`px-3.5 py-1.5 rounded-[4px] font-mono text-[11.5px] font-semibold border transition cursor-pointer ${
                  activeRole === "events"
                    ? "bg-mono-forest text-mono-forestText border-mono-forest"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-copper"
                }`}
              >
                Events Staff (Scoped)
              </button>
              <button
                type="button"
                onClick={() => setActiveRole("newsroom")}
                className={`px-3.5 py-1.5 rounded-[4px] font-mono text-[11.5px] font-semibold border transition cursor-pointer ${
                  activeRole === "newsroom"
                    ? "bg-mono-forest text-mono-forestText border-mono-forest"
                    : "bg-mono-paper text-mono-ink border-mono-line hover:border-mono-copper"
                }`}
              >
                Newsroom Staff (Scoped)
              </button>
            </div>
          </div>

          {/* 5-Module Dynamic Access Grid */}
          <div className="grid grid-cols-5 gap-3.5 my-4">
            {cfg.modules.map((mod, i) => {
              const badgeClass =
                mod.tone === "pine"
                  ? "bg-mono-pineTint text-mono-pine border-mono-pine/30"
                  : mod.tone === "ochre"
                  ? "bg-mono-ochreTint text-mono-ochre border-mono-ochre/30"
                  : "bg-mono-crimsonTint text-mono-crimson border-mono-crimson/30";

              const cardBg = mod.tone === "crimson" ? "bg-mono-paper/80 opacity-80" : "bg-mono-paper";

              return (
                <div key={i} className={`${cardBg} border border-mono-line rounded-[5px] p-3.5 flex flex-col justify-between min-h-[120px]`}>
                  <div>
                    <div className="text-[12.5px] font-bold text-mono-ink leading-snug mb-2">{mod.name}</div>
                    <span className={`inline-block font-mono text-[9.5px] font-bold px-2 py-0.5 rounded-[3px] border ${badgeClass}`}>
                      {mod.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-mono-muted mt-3 leading-snug font-mono">{mod.detail}</div>
                </div>
              );
            })}
          </div>

          {/* Exact SQL / ORM Filter Applied Bar */}
          <div className="bg-mono-graphite text-[#EFECE6] rounded-[5px] px-4 py-3 flex items-center justify-between font-mono text-[12px]">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="px-2 py-0.5 rounded bg-mono-copper/25 text-mono-copper text-[10.5px] font-bold shrink-0">ORM / SQL FILTER</span>
              <span className="truncate text-[#E5E7EB]">{cfg.sql}</span>
            </div>
            <span className="text-[11px] text-[#9FAEA9] shrink-0 ml-4">{cfg.summary}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
        <span>CSEE-713P · Satyam Sharma (23010603066)</span>
        <span>Project 03 · Two-Tier RBAC Governance</span>
      </div>
    </div>
  );
};
