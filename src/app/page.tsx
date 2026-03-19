
import Hero from './components/Hero'
import TrustedClients from './components/TrustedClient'

import { TestimonialsSection } from './components/TestimonialSection'
import { LandingUiCard } from './components/LandingUiCard'
import { FeaturesSection } from './components/FeatureSection'
import SemiCircleCards from './components/LandingPagesemicircularcards/SemicircleCards'
import FaqSection from './components/FaqSection'
import { Metadata } from 'next'


export const metadata: Metadata = {
  metadataBase: new URL("https://routemaestro.com/"),

  title: "AI Travel Agency Software & Itinerary Builder | RouteMaestro",

  description:
    "RouteMaestro is an AI-powered travel agency software that helps tour operators build multi-city itineraries, create travel packages, manage bookings, and launch OTA travel platforms faster.",

  keywords: [
    "Travel Agency Software",
    "Travel Itinerary Builder",
    "Travel Booking Software",
    "Tour Operator Software",
    "AI Travel Planning Software",
    "AI itinerary builder",
    "travel package builder",
    "OTA travel platform",
  ],

  alternates: {
    canonical: "https://routemaestro.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "RouteMaestro – AI Travel Agency Software",
    description:
      "AI-powered travel agency software to build itineraries, manage bookings, and launch travel platforms faster.",
    url: "https://routemaestro.com/",
    siteName: "RouteMaestro",
    type: "website",
    images: [
      {
        url: "/rmMetalogo.png",
        width: 1200,
        height: 630,
        alt: "RouteMaestro AI Travel Planning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RouteMaestro – AI Travel Agency Software",
    description:
      "AI travel agency software for itinerary building, booking automation, and OTA platform management.",
    images: ["/rmMetalogo.png"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* <Header /> */}
     
      <Hero />
      <LandingUiCard/>
      <TrustedClients/>
<FeaturesSection/>
<SemiCircleCards/>
{/* <LandingPageWidget/> */}
      {/* payment ui make  */}
<TestimonialsSection/>
<FaqSection/>
      
    </div>
  )
}

