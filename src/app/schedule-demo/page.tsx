import React from 'react'
import ScheduleDemo from '../components/ScheduleDemo-component/ScheduleDemo'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book RouteMaestro Demo | Travel Agency Software Platform",
  description:
    "Book a live demo of RouteMaestro to see how AI itinerary planning and travel booking automation can transform your travel agency operations.",

  keywords: [
    "Travel Agency Software",
    "Travel Itinerary Builder",
    "Travel Booking Software",
    "Tour Operator Software",
    "AI Travel Planning Software",
    "RouteMaestro demo"
  ],

  alternates: {
    canonical: "https://yourdomain.com/schedule-demo",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "RouteMaestro – AI Travel Agency Software",
    description:
      "Book a live demo of RouteMaestro and discover how AI-powered travel planning and booking automation can transform your travel agency.",
    url: "https://yourdomain.com/schedule-demo",
    siteName: "RouteMaestro",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RouteMaestro – AI Travel Agency Software",
    description:
      "Book a live demo of RouteMaestro and see how AI itinerary planning transforms travel agencies.",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

function page() {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
        <ScheduleDemo/>
    </div>
  )
}

export default page