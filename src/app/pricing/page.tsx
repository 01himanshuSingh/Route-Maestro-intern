import PriceCompareTable from "./price-compare-table";
import PricingSection from "./PricingCard";
import { headers } from "next/headers";
export default async function PricingPage() {
const country =
  process.env.NODE_ENV === "development"
    ? "IN"
    : (await headers()).get("x-vercel-ip-country");

const currency = country === "IN" ? "INR" : "USD";
    return (
        <div className="bg-black">
            <PricingSection currency={currency} />
            <div className="text-center px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 bg-black">
                <h1 className="font-bricolage font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#f7f7f7]">
                    Feature Comparison
                </h1>

                <p className="mt-3 text-[16px] sm:text-base lg:text-lg font-bricolage text-neutral-100 max-w-2xl mx-auto">
                    Find the perfect plan for your growth stage.
                </p>
            </div>
            <PriceCompareTable currency={currency} />
        </div>

    )
}