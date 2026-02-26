"use client";

import { Check, X } from "lucide-react";
import { PLAN_COMPARE_FEATURES } from "./planCompare";
import { PLANS, resolvePrice, formatPrice } from "@/utils/pricing";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CSSProperties, useState } from "react";
import { cn } from "@/utils/cn"; // adjust to your cn import path

type PlanKey = "default" | "pro" | "enterprise";
const PLAN_KEYS: PlanKey[] = ["default", "pro", "enterprise"];

function resolveCheck(
  check: boolean | Partial<Record<PlanKey, boolean>> | undefined,
  plan: PlanKey
) {
  if (typeof check === "boolean") return check;
  if (typeof check === "object" && check !== null) return check[plan] ?? true;
  return true;
}

type PricingSectionProps = { currency: "INR" | "USD" };

export default function PriceCompareTable({ currency }: PricingSectionProps) {
  const [mobilePlanIndex, setMobilePlanIndex] = useState(0);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto md:px-4">

   {/* sticky header */}
        <div className="sticky top-20 z-10">
          <div className="overflow-x-hidden rounded-b-xl @container">
            <div
              className={cn(
                "grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-3 gap-px overflow-hidden rounded-b-xl",
                "max-lg:w-[calc(300cqw+2*32px)] max-lg:translate-x-[calc(-1*var(--index)*(100cqw+32px))] max-lg:gap-x-8 max-lg:transition-transform",
              )}
              style={{ "--index": mobilePlanIndex } as CSSProperties}
            >
              <div className="bg-black sm:block hidden"></div>
              {PLANS.map((plan, index) => {
                const planKey = PLAN_KEYS[index];
                const price = resolvePrice(plan, "monthly", currency);
                const isCustom = price === "custom";

                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative flex h-full flex-col gap-4 bg-black p-5",
                      "max-lg:rounded-none ",
                      index !== mobilePlanIndex && "max-lg:opacity-0",
                    )}
                  >
                    <div>
                      <h3 className="font-bricolage text-base font-semibold text-white">
                        {plan.name}
                      </h3>
                      <p className="font-bricolage mt-0.5 text-[16px] font-medium text-neutral-100">
                        {isCustom
                          ? "Custom"
                          : formatPrice(price as number, currency)}
                        {!isCustom && (
                          <span className="ml-1 text-sm text-neutral-300">/per month</span>
                        )}
                      </p>
                    </div>

                    {/* CTA row — mobile gets prev/next arrow buttons */}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="h-full w-fit rounded-full 
  bg-zinc-800/80 backdrop-blur-sm
  border border-zinc-700
  px-2 transition-all duration-200
  hover:bg-zinc-700
  disabled:opacity-30 lg:hidden"
                        disabled={mobilePlanIndex === 0}
                        onClick={() => setMobilePlanIndex((i) => i - 1)}
                      >
                        <ChevronLeft className="size-5 text-zinc-200" />
                      </button>

                      <button
                        className={cn(
                          "h-8 w-full rounded-full text-[13.5px] font-medium font-bricolage  transition-all duration-200",
                          planKey === "enterprise"
                            ? "bg-white hover:bg-white/90 text-black"
                            : "bg-[#FF5F42] hover:bg-[#e14e36] text-white",
                        )}
                      >
                        {planKey === "enterprise" ? "Book a call" : "Get Started"}
                      </button>

                      <button
                        type="button"
                        className="h-full w-fit rounded-full 
  bg-zinc-800/80 backdrop-blur-sm
  border border-zinc-700
  px-2 transition-all duration-200
  hover:bg-zinc-700
  disabled:opacity-30 lg:hidden"
                        disabled={mobilePlanIndex >= PLANS.length - 1}
                        onClick={() => setMobilePlanIndex((i) => i + 1)}
                      >
                        <ChevronRight className="size-5 text-zinc-200" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fade gradient below header */}
          <div className="h-4 bg-linear-to-b from-black" />
        </div>

        {/* ── FEATURE COMPARISON BODY ── */}
        <div className="flex flex-col pb-12">
          {PLAN_COMPARE_FEATURES.map((category) => (
            <CompareCategorySection
              key={category.category}
              category={category}
              mobilePlanIndex={mobilePlanIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Per-category section with its own container query context ──
function CompareCategorySection({
  category,
  mobilePlanIndex,
}: {
  category: (typeof PLAN_COMPARE_FEATURES)[number];
  mobilePlanIndex: number;
}) {
  return (
    <div className="w-full overflow-x-hidden @container">
      {/* Category label row — full width, no carousel */}
      <div className="border-b border-[#3d3d3d] bg-black px-5 py-3">
        <h4 className="font-bricolage text-sm font-semibold text-neutral-100">
          {category.category}
        </h4>
      </div>

      {/* Feature rows — each is a 3-col grid using the same carousel technique */}
      {category.features.map((feature) => (
        <div
          key={feature.text}
          className={cn(
            "grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-3",
            "max-lg:w-[calc(300cqw+2*32px)] max-lg:translate-x-[calc(-1*var(--index)*(100cqw+32px))] max-lg:gap-x-8 max-lg:transition-transform",
          )}
          style={{ "--index": mobilePlanIndex } as CSSProperties}
        >
          <div className="px-5 py-4 sm:block hidden">
            <span className="font-bricolage text-sm text-neutral-300/80">{feature.text}</span>
          </div>
          {PLAN_KEYS.map((planKey, i) => {
            const enabled = resolveCheck(feature.check, planKey);
            return (
              <div
                key={planKey}
                className={cn(
                  "flex items-center gap-2 border-b border-[#3d3d3d] bg-black px-5 py-4",
                  !enabled && "text-neutral-300",
                  // Fade out non-active on mobile (matching header behaviour)
                  i !== mobilePlanIndex && "max-lg:opacity-0",
                )}
              >
                {enabled ? (
                  <Check className="size-4 shrink-0 text-neutral-500" />
                ) : (
                  <X className="w-5 h-5 text-neutral-400/80" />
                )}
                <span className="font-bricolage text-sm md:hidden block text-neutral-300/80">{feature.text}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}