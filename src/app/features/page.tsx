
import Image from 'next/image'
import FeatureHero from './FeatureHero'
import FeaturesSection from './FeatureSection'
import FaqSection from '../components/FaqSection'
import Link from 'next/link'

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Travel Agency Software Features | AI Itinerary Builder & Route Planning",

  description:
    "Discover RouteMaestro features including AI itinerary builder, multi-city route planning, travel package creation, booking automation, and integrated travel CRM for travel agencies and tour operators.",

  keywords: [
    "Travel Agency Software Features",
    "AI Itinerary Builder",
    "Travel Route Planning Software",
    "Travel Booking Automation",
    "Tour Operator Software",
    "Travel CRM Software",
    "AI Travel Planning Software",
  ],

  alternates: {
    canonical: "https://yourdomain.com/features",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "RouteMaestro Features | AI Travel Planning & Booking Platform",
    description:
      "Explore RouteMaestro features including AI itinerary builder, multi-city route planning, travel booking automation, and travel CRM for agencies.",
    url: "https://yourdomain.com/features",
    siteName: "RouteMaestro",
    type: "website",
    images: [
      {
        url: "/og-features.jpg",
        width: 1200,
        height: 630,
        alt: "RouteMaestro Travel Agency Software Features",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RouteMaestro Features | AI Travel Agency Software",
    description:
      "Explore AI-powered itinerary builder, travel booking automation, and CRM tools for travel agencies.",
    images: ["/og-features.jpg"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}
export default function Home() {


  return (
    <main className="flex flex-col min-h-screen bg-black">

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-10 lg:py-22">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left Side - Hero Text (buttons hidden inside on mobile) */}
          <div className="w-full lg:w-[40%]">
            <FeatureHero />
          </div>

          {/* Right Side - Image */}
         {/* Right Side - Image */}
<div className="
  w-full lg:w-[60%]
  rounded-2xl
  flex justify-center lg:justify-end
  
  transition-all duration-300
 
  overflow-hidden
  relative
"
  style={{
    background: 'transparent',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5)',
  }}
>
  <Image
    src="/ai-trip-plan (1).webp"
    alt="Travel booking dashboard"
    width={1600}
    height={1000}
    priority
    unoptimized
    quality={100}
    className="w-full h-auto rounded-2xl block"
    style={{
      filter: ' contrast(1.18) saturate(1.12)',
      imageRendering: 'crisp-edges',
      WebkitFontSmoothing: 'antialiased',
      maxWidth: '100%',
    }}
  />
</div>
          {/* ── Mobile-only buttons (below image) ── */}
          <div className="flex lg:hidden w-full flex-col sm:flex-row gap-3">

       <Link
  href="/schedule-demo"
  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
  style={{
    background: "linear-gradient(135deg, #e2472f, #fe6652)",
    boxShadow: "0 0 0 1px rgba(226,71,47,0.5), 0 8px 32px rgba(226,71,47,0.35)",
  }}
>
  <span
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
    style={{ background: "linear-gradient(135deg, #fe6652, #ff8a74)" }}
  />

  <span className="relative flex items-center justify-center gap-2">
    Schedule A Demo
    <svg
      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</Link>

            <button
              className="group w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white/90 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Start Free Trial
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

          </div>

        </div>
      </section>

      <FeaturesSection />
      <FaqSection />

    </main>
  )
}