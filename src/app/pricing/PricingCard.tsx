"use client";
import React from "react";
import {  PLANS, resolvePrice } from "@/utils/pricing";
import { Check } from "lucide-react";
import NumberFlow from "@number-flow/react";
type PricingSectionProps = {
  currency: "INR" | "USD";
};

export default function PricingSection({ currency }: PricingSectionProps) {
  const [billing, setBilling] = React.useState<"yearly" | "monthly">("yearly");

  return (
    <section className="bg-white py-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Pricing Badge */}
          <div className="bg-[#F2F2F2] w-fit px-3 my-1 py-0.5 rounded-full text-[#979797]">
            <h1 className="text-[12.5px] font-sans">Pricing</h1>
          </div>

          {/* Heading */}
          <div className="text-center my-6 px-2">
            <h2 className="text-[28px] sm:text-[36px] font-semibold font-bricolage text-neutral-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-neutral-500 font-bricolage font-medium text-[14px] sm:text-[16px] mt-2 max-w-xl mx-auto">
              Choose the plan that&apos;s right for your team and start growing with us. No hidden fees, no surprises.
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="w-fit px-1 py-1 rounded-full flex items-center mx-auto my-8 sm:my-10">
          <button
            onClick={() => setBilling("yearly")}
            aria-pressed={billing === "yearly"}
            className={`relative z-10 w-fit px-3 py-0.5 text-[16px] font-semibold font-bricolage rounded-full transition-colors duration-200 ${billing === "yearly"
              ? "text-[#FF5F42]"
              : "text-[#C3C3C3] hover:text-neutral-500"
              }`}
          >
            Yearly
          </button>
          <button
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
            className={`relative z-10 w-fit px-3 py-0.5 text-[16px] font-semibold font-bricolage rounded-full transition-colors duration-200 ${billing === "monthly"
              ? "text-[#FF5F42]"
              : "text-[#C3C3C3] hover:text-neutral-500"
              }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {PLANS.map((plan) => {
            const price = resolvePrice(plan, billing, currency);
            const isCustom = price === "custom";

            return (
              <div
                key={plan.id}
                className="relative rounded-4xl sm:rounded-[54px] bg-[#F8F8F8] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                {/* Header */}
                <div>
                  <h3 className="text-[17px] font-medium font-bricolage text-[#0A0A0A] mb-0.5">
                    {plan.name}
                  </h3>
                  <h3 className="text-[16px] font-medium font-bricolage text-[#817F7F] mb-1">
                    {plan.description}
                  </h3>

                  <div className="border-b border-[#E0E0E0] pb-4 my-5 mb-6">
                    <div className="flex items-baseline gap-2 font-bricolage text-[#383838]">

                      {isCustom ? (
                        <span className="text-[28px] font-semibold font-bricolage">Custom</span>
                      ) : (
                        <>
                          <span className="text-[28px] sm:text-[32px] -mr-2 font-bricolage font-semibold text-[#383838]">
                            {currency === "USD" ? "$" : "₹"}
                          </span>

                          <NumberFlow
                            value={price as number}
                            format={{
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }}
                            className="text-[28px] sm:text-[32px] leading-none font-semibold"
                          />

                          <span className="text-sm sm:text-base font-medium text-neutral-500 ">
                            {billing === "yearly" ? "/Year" : "/Month"}
                          </span>
                        </>
                      )}

                    </div>
                  </div>

                  <h1 className="text-[14.5px] font-medium font-bricolage text-[#595959] mb-4">
                    {plan.featureLine}
                  </h1>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {plan.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[14.5px] text-neutral-700 leading-relaxed"
                      >
                        <div className="h-4 w-4 lg:w-5 lg:h-5 lg:min-w-5 p-1 flex items-center justify-center bg-[#FF5F42] rounded-full">
                          <Check size={18} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="font-medium font-bricolage text-[#595959]">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className="mt-auto w-full md:py-3 py-2 bg-black/80 font-bricolage md:text-[16.5px] text-[14px] text-white rounded-full font-medium transition-all duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                >
                  {plan.category === "Enterprise" ? "Book a call" : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}