import PriceCompareTable from "./price-compare-table";
import PricingSection from "./PricingCard";
import { headers } from "next/headers";

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "RouteMaestro Pricing | Travel Agency Software Plans",

  description:
    "Explore RouteMaestro pricing plans for travel agencies and tour operators. Launch your travel booking platform with AI itinerary builder, booking automation, and integrated travel CRM.",

  keywords: [
    "Travel Agency Software Pricing",
    "RouteMaestro Pricing",
    "Tour Operator Software Pricing",
    "Travel Booking Software Plans",
    "AI Travel Planning Software",
    "Travel Itinerary Builder Software",
  ],

  alternates: {
    canonical: "https://yourdomain.com/pricing",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "RouteMaestro Pricing | Travel Agency Software",
    description:
      "Discover RouteMaestro pricing plans designed for travel agencies and tour operators to build itineraries, automate bookings, and launch OTA platforms.",
    url: "https://yourdomain.com/pricing",
    siteName: "RouteMaestro",
    type: "website",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "RouteMaestro Travel Agency Software Pricing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RouteMaestro Pricing | Travel Agency Software",
    description:
      "Explore RouteMaestro pricing plans for AI-powered travel itinerary builder and booking automation.",
    images: ["/og-pricing.jpg"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}
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