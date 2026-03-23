"use client";

import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp, Minus } from "lucide-react";

// ─── tiny cn helper (replace with your own @/utils/cn if available) ───────────
function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanValue = boolean | string | null;

interface Feature {
  name: string;
  trust: PlanValue;
  pro: PlanValue;
  enterprise: PlanValue;
  tooltip?: string;
}

interface Section {
  title: string;
  features: Feature[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections: Section[] = [
  {
    title: "Inventory",
    features: [
      { name: "Global Flights", trust: true, pro: true, enterprise: true },
      { name: "Global Hotels", trust: false, pro: true, enterprise: true },
      { name: "Global Sightseeing", trust: false, pro: true, enterprise: true },
      {
        name: "Add Custom APIs",
        trust: "Your API Key (Additional Charge)",
        pro: "Your API Key (Additional Charge)",
        enterprise: "Custom APIs",
      },
      {
        name: "Offline Contracting & Management Of Suppliers",
        trust: false,
        pro: false,
        enterprise: "Customized As Per Requirements",
      },
    ],
  },
  {
    title: "Engine Flows",
    features: [
      { name: "Flight Booking Engine", trust: true, pro: true, enterprise: true },
      { name: "Hotel Booking Engine", trust: false, pro: true, enterprise: true },
      {
        name: "Sightseeing Booking Engine",
        trust: false,
        pro: true,
        enterprise: "Customized As Per Requirements",
      },
      { name: "Dynamic Package Booking Engine", trust: false, pro: true, enterprise: true },
    ],
  },
  {
    title: "AI Powered Dynamic Packaging & Recommendation Engine",
    features: [
      { name: "AI Assist Flight Recommendation Engine", trust: true, pro: true, enterprise: true },
      { name: "AI Assist Hotel Recommendation Engine", trust: true, pro: true, enterprise: true },
      { name: "AI Curated Sightseeing Recommendation Engine", trust: true, pro: true, enterprise: true },
      { name: "Dynamic Package Scheduler", trust: false, pro: true, enterprise: true },
    ],
  },
  {
    title: "Dashboard & Back Office",
    features: [
      { name: "General Dashboard KPIs", trust: true, pro: true, enterprise: true },
      { name: "B2C / B2C User Management", trust: true, pro: true, enterprise: true },
      { name: "Working Ledger", trust: true, pro: true, enterprise: true },
      {
        name: "Sales Ledger",
        trust: true,
        pro: true,
        enterprise: "Customized As Per Requirements",
      },
      { name: "Staff Management", trust: false, pro: true, enterprise: true },
      { name: "Task Management", trust: false, pro: true, enterprise: true },
      { name: "Add & Manage Other Services", trust: false, pro: true, enterprise: true },
      { name: "Custom Text With Vouchers", trust: false, pro: true, enterprise: true },
    ],
  },
  {
    title: "Communication With User",
    features: [
      { name: "Traveler Mobile App", trust: false, pro: false, enterprise: true },
      { name: "Email, WhatsApp Quotation Sharing", trust: true, pro: true, enterprise: true },
      {
        name: "Flight Dynamic Quotations",
        trust: true,
        pro: true,
        enterprise: "Customized As Per Requirements",
      },
      { name: "Hotel Dynamic Quotations", trust: true, pro: true, enterprise: true },
      { name: "Sightseeing Dynamic Quotations", trust: true, pro: true, enterprise: true },
      { name: "Packages Dynamic Quotations", trust: true, pro: true, enterprise: true },
    ],
  },
  {
    title: "Whitelabel Management",
    features: [
      { name: "B2B / B2C Whitelabel Website", trust: false, pro: true, enterprise: true },
      { name: "1 B2B / B2C Whitelabel Back Office", trust: false, pro: true, enterprise: true },
      {
        name: "B2C to B2B Whitelabel User Booking Queue",
        trust: false,
        pro: false,
        enterprise: "Customized As Per Requirements",
      },
      { name: "Whitelabel User Transaction Queue", trust: false, pro: false, enterprise: true },
      { name: "Whitelabel Voucher Generator", trust: false, pro: false, enterprise: true },
      { name: "Discount Code Management", trust: false, pro: false, enterprise: true },
    ],
  },
  {
    title: "Financial Module",
    features: [
      {
        name: "Micro Level Management Of Service Fee",
        trust: true,
        pro: true,
        enterprise: true,
      },
      { name: "Invoice Ledger", trust: true, pro: true, enterprise: true },
      { name: "Custom Text With Invoice", trust: true, pro: true, enterprise: true },
    ],
  },
  {
    title: "Payment",
    features: [
      {
        name: "Payment Gateway Integration",
        trust: "Default Payment Gateway",
        pro: "Default Payment Gateway",
        enterprise: "Custom Payment Gateway Of Your Choice",
      },
    ],
  },
  {
    title: "Customer Support",
    features: [
      { name: "Support Ticket Management", trust: true, pro: true, enterprise: true },
      { name: "AI Chatbot Support", trust: false, pro: false, enterprise: true },
      { name: "Account Manager Support", trust: false, pro: false, enterprise: true },
    ],
  },
  {
    title: "Technological Support",
    features: [
      { name: "Secure Server", trust: true, pro: true, enterprise: true },
      { name: "Unlimited Cloud Capacity For Each Client", trust: true, pro: true, enterprise: true },
      { name: "24 Hours Maintenance", trust: true, pro: true, enterprise: true },
      { name: "System Status Updates", trust: false, pro: true, enterprise: true },
      { name: "New Version Updates", trust: false, pro: true, enterprise: true },
    ],
  },

  // ── Add-On sections ───────────────────────────────────────────────────────
  {
    title: "Add-On Features",
    features: [
      { name: "Smart Personalization Pro",        trust: "₹3,000",           pro: "₹3,000",           enterprise: "Included in Plan" },
      { name: "Smart Personalization Specialist",  trust: "₹5,000",           pro: "₹5,000",           enterprise: "Included in Plan" },
      { name: "Global Transfers API",              trust: "₹20,000",          pro: "₹20,000",          enterprise: "Included in Plan" },
      { name: "Global Public Transit API",         trust: "₹20,000",          pro: "₹20,000",          enterprise: "Included in Plan" },
      { name: "Replace Flight API Keys",           trust: "₹20,000",          pro: "₹20,000",          enterprise: "Included in Plan" },
      { name: "Replace Hotel API Keys",            trust: "₹20,000",          pro: "₹20,000",          enterprise: "Included in Plan" },
      { name: "Replacing Sightseeing API Keys",    trust: "₹20,000",          pro: "₹20,000",          enterprise: "Included in Plan" },
      { name: "Whitelabel Quotation Template",     trust: "Included in Plan", pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Whitelabel Voucher Template",       trust: "Included in Plan", pro: "Included in Plan", enterprise: "Included in Plan" },
    ],
  },
  {
    title: "Add-On Regions",
    features: [
      { name: "India",                          trust: "Included in Plan", pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Middle East",                    trust: "₹1,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Southeast Asia",                 trust: "₹2,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Europe Core (Schengen)",         trust: "₹2,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "UK + Ireland",                   trust: "₹2,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Australia + New Zealand",        trust: "₹2,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "East Asia",                      trust: "₹3,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "America (North America)",        trust: "₹3,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Africa",                         trust: "₹1,500",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "South America",                  trust: "₹4,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Eastern Europe (Non-Schengen)",  trust: "₹4,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Indian Sub Continent",           trust: "₹3,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
      { name: "Central Asia",                   trust: "₹3,000",           pro: "Included in Plan", enterprise: "Included in Plan" },
    ],
  },
];

// ─── Plan config ──────────────────────────────────────────────────────────────
// Index order MUST match the PLAN_KEYS order in the parent:
//   0 → trust (default)  |  1 → pro (agency)  |  2 → enterprise

const plans = [
  {
    key: "trust" as const,
    label: "Trust",
    sublabel: "Free",
    accent: "text-zinc-300",
    badge: "bg-zinc-700/60 text-zinc-300",
    valuePlanKey: "trust",
  },
  {
    key: "pro" as const,
    label: "Pro",
    sublabel: "₹60,000/yr",
    accent: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    valuePlanKey: "pro",
  },
  {
    key: "enterprise" as const,
    label: "Enterprise",
    sublabel: "Custom",
    accent: "text-sky-400",
    badge: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    valuePlanKey: "enterprise",
  },
] as const;

// ─── Shared responsive grid classnames ───────────────────────────────────────
// Mobile  : 2 columns — feature name (wider) + 1 active plan value
// Desktop : 4 columns — feature name + all 3 plan columns
const GRID_COLS = "grid grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr_1fr_1fr]";

// ─── CellValue ────────────────────────────────────────────────────────────────

function CellValue({ value, planKey }: { value: PlanValue; planKey: string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10">
        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10">
        <X className="w-3.5 h-3.5 text-red-400 stroke-[2.5]" />
      </span>
    );
  }
  if (value === null) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="w-4 h-4 text-zinc-600" />
      </span>
    );
  }

  // "Included in Plan" → muted green pill
  if (value === "Included in Plan") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] lg:text-[13px] font-semibold text-emerald-400/90 bg-emerald-500/[0.08] px-2 py-0.5 rounded-md border border-emerald-500/15">
        <Check className="w-3 h-3 stroke-[2.5] shrink-0" />
        <span className="hidden sm:inline">Included</span>
        {/* ultra-narrow fallback */}
        <span className="sm:hidden">✓</span>
      </span>
    );
  }

  // Dash placeholder
  if (value === "-") {
    return <Minus className="w-4 h-4 text-zinc-600" />;
  }

  // Currency (₹)
  if (typeof value === "string" && value.startsWith("₹")) {
    const accentMap: Record<string, string> = {
      trust: "text-zinc-100",
      pro: "text-amber-100",
      enterprise: "text-sky-100",
    };
    return (
      <span
        className={cn(
          "text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tabular-nums tracking-tight",
          accentMap[planKey] ?? "text-zinc-100",
        )}
      >
        {value}
      </span>
    );
  }

  // Generic string
  const colorMap: Record<string, string> = {
    trust: "text-zinc-400",
    pro: "text-amber-400/80",
    enterprise: "text-sky-400/80",
  };
  return (
    <span
      className={cn(
        "text-[11px] sm:text-[12px] lg:text-[14px] leading-snug font-medium text-center",
        colorMap[planKey] ?? "text-zinc-400",
      )}
    >
      {value}
    </span>
  );
}

// ─── FeatureRow ───────────────────────────────────────────────────────────────

function FeatureRow({
  feature,
  isLast,
  mobilePlanIndex,
}: {
  feature: Feature;
  isLast: boolean;
  mobilePlanIndex: number;
}) {
  return (
    <div
      role="row"
      className={cn(
        GRID_COLS,
        "items-center px-4 lg:px-5 py-3 lg:py-3.5",
        "transition-colors duration-150 hover:bg-zinc-800/40",
        !isLast && "border-b border-zinc-800/70",
      )}
    >
      {/* Feature name — always visible */}
      <div role="cell" className="flex items-center gap-2 pr-2">
        <span className="text-[12px] sm:text-[13px] lg:text-[15px] xl:text-[16px] text-zinc-200 font-medium leading-snug tracking-[-0.005em]">
          {feature.name}
        </span>
      </div>

      {/* Trust — visible only when mobilePlanIndex === 0 (on mobile) */}
      <div
        role="cell"
        className={cn(
          "flex items-center justify-center",
          mobilePlanIndex !== 0 && "hidden lg:flex",
        )}
      >
        <CellValue value={feature.trust} planKey="trust" />
      </div>

      {/* Pro — visible only when mobilePlanIndex === 1 (on mobile) */}
      <div
        role="cell"
        className={cn(
          "flex items-center justify-center",
          mobilePlanIndex !== 1 && "hidden lg:flex",
        )}
      >
        <CellValue value={feature.pro} planKey="pro" />
      </div>

      {/* Enterprise — visible only when mobilePlanIndex === 2 (on mobile) */}
      <div
        role="cell"
        className={cn(
          "flex items-center justify-center",
          mobilePlanIndex !== 2 && "hidden lg:flex",
        )}
      >
        <CellValue value={feature.enterprise} planKey="enterprise" />
      </div>
    </div>
  );
}

// ─── FeatureSection ───────────────────────────────────────────────────────────

function FeatureSection({
  section,
  mobilePlanIndex,
}: {
  section: Section;
  mobilePlanIndex: number;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div role="rowgroup" className="border-b border-zinc-800/70 last:border-b-0">
      {/* Section header button */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        className={cn(
          GRID_COLS,
          "w-full items-center px-4 lg:px-5 py-3",
          "bg-zinc-800/60 backdrop-blur-sm hover:bg-zinc-800/80",
          "transition-colors duration-150 group",
        )}
        aria-expanded={!collapsed}
      >
        {/* Title — spans full width on mobile via col-span */}
        <div className="col-span-2 lg:col-span-1 flex items-center gap-2 text-left">
          <span className="text-[12px] sm:text-[13px] lg:text-[15px] font-semibold text-zinc-100 tracking-[0.01em]">
            {section.title}
          </span>
          <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {collapsed ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </span>
        </div>
        {/* Spacer cells — desktop only */}
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
      </button>

      {/* Feature rows */}
      {!collapsed && (
        <div>
          {section.features.map((feature, idx) => (
            <FeatureRow
              key={feature.name}
              feature={feature}
              isLast={idx === section.features.length - 1}
              mobilePlanIndex={mobilePlanIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── TableColumnHeader ────────────────────────────────────────────────────────

function TableColumnHeader({ mobilePlanIndex }: { mobilePlanIndex: number }) {
  return (
    <div
      role="row"
      className={cn(
        GRID_COLS,
        "items-center px-4 lg:px-5 py-4 border-b border-zinc-800 bg-zinc-900",
      )}
    >
      {/* "Feature" label — always visible */}
      <div
        role="columnheader"
        className="text-[10px] sm:text-xs lg:text-[13px] font-semibold uppercase tracking-[0.18em] text-zinc-500"
      >
        Feature
      </div>

      {/* Plan columns — mobile shows only the active plan */}
      {plans.map((plan, i) => (
        <div
          key={plan.key}
          role="columnheader"
          className={cn(
            "flex flex-col items-center gap-1",
            mobilePlanIndex !== i && "hidden lg:flex",
          )}
        >
          <span
            className={cn(
              "text-[13px] sm:text-[14px] lg:text-[15px] font-bold tracking-wide",
              plan.accent,
            )}
          >
            {plan.label}
          </span>
          <span
            className={cn(
              "text-[11px] sm:text-[12px] lg:text-[13px] font-medium px-2 py-0.5 rounded-full",
              plan.badge,
            )}
          >
            {plan.sublabel}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── FeatureTable ─────────────────────────────────────────────────────────────

function FeatureTable({ mobilePlanIndex }: { mobilePlanIndex: number }) {
  return (
    <section className="w-full px-3 sm:px-4 py-12 lg:py-16 bg-zinc-950">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto mb-8 lg:mb-10 text-center">
        <p className="text-[11px] sm:text-xs lg:text-[13px] uppercase tracking-[0.22em] text-zinc-500 mb-2 font-semibold">
          Compare Plans
        </p>
        <h2
          className="text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.1]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Features Comparison
        </h2>
        <p className="mt-3 text-[13px] sm:text-[14px] lg:text-[15px] text-zinc-500 leading-relaxed">
          Everything you need to scale your travel business
        </p>
        <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
      </div>

      {/* Mobile active-plan pill indicator */}
      <div className="max-w-6xl mx-auto mb-3 flex lg:hidden items-center justify-end px-1">
        <span className="text-[11px] text-zinc-500 mr-2">Viewing:</span>
        {plans.map((plan, i) => (
          <span
            key={plan.key}
            className={cn(
              "text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all",
              i === mobilePlanIndex
                ? cn("opacity-100", plan.badge)
                : "opacity-0 absolute",
            )}
          >
            {plan.label}
          </span>
        ))}
      </div>

      {/* Table wrapper — no forced min-width, no horizontal scroll on mobile */}
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl shadow-black/50 ring-1 ring-zinc-800 overflow-hidden">
        <div
          role="table"
          aria-label="Feature comparison table"
          className="w-full bg-zinc-900 rounded-xl overflow-hidden"
        >
          {/* Column header */}
          <TableColumnHeader mobilePlanIndex={mobilePlanIndex} />

          {/* Sections */}
          <div role="rowgroup">
            {sections.map((section) => (
              <FeatureSection
                key={section.title}
                section={section}
                mobilePlanIndex={mobilePlanIndex}
              />
            ))}
          </div>

          {/* CTA bar — mobile shows only active plan's button */}
          <div
            className={cn(
              GRID_COLS,
              "items-center px-4 lg:px-5 py-4 lg:py-5 bg-zinc-950/80 border-t border-zinc-800",
            )}
          >
            <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-zinc-500 tracking-[-0.01em] col-span-1">
              All plans include core platform access
            </div>
            {plans.map((plan, i) => (
              <div
                key={plan.key}
                className={cn(
                  "flex justify-center",
                  mobilePlanIndex !== i && "hidden lg:flex",
                )}
              >
                <button
                  className={cn(
                    "text-[12px] sm:text-[13px] font-semibold px-4 py-2 rounded-lg transition-all duration-150 w-full sm:w-auto",
                    plan.key === "pro"
                      ? "bg-amber-500 hover:bg-amber-400 text-zinc-950"
                      : plan.key === "enterprise"
                        ? "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30"
                        : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300",
                  )}
                >
                  {plan.key === "enterprise" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:text-[12px] lg:text-[13px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/10">
            <Check className="w-2.5 h-2.5 text-emerald-400" />
          </span>
          Included
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500/10">
            <X className="w-2.5 h-2.5 text-red-400" />
          </span>
          Not included
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-zinc-400 text-[11px] sm:text-[12px] font-medium bg-zinc-800 px-1.5 py-0.5 rounded">
            Custom
          </span>
          Custom / add-on
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-0.5 text-[11px] sm:text-[12px] font-semibold text-emerald-400/90 bg-emerald-500/[0.08] px-1.5 py-0.5 rounded border border-emerald-500/15">
            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
            Included
          </span>
          Included in plan
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-zinc-100 text-[11px] sm:text-[12px] font-semibold tabular-nums bg-zinc-800 px-1.5 py-0.5 rounded">
            ₹X,XXX
          </span>
          Add-on price / month
        </span>
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
// mobilePlanIndex is OPTIONAL (default 0) so the component works standalone.
// When embedded inside PriceCompareTable, pass mobilePlanIndex from the parent.
//
// Usage in PriceCompareTable.tsx:
//   <FeatureComparisonPage mobilePlanIndex={mobilePlanIndex} />

export default function FeatureComparisonPage({
  mobilePlanIndex = 0,
}: {
  mobilePlanIndex?: number;
}) {
  return <FeatureTable mobilePlanIndex={mobilePlanIndex} />;
}