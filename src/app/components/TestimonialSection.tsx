"use client"
import { motion } from "framer-motion"

import { TestimonialCard } from "./TestimonialCard"

const topRowTestimonials = [
  {
    quote:
      "RouteMaestro reduced our itinerary creation time from hours to minutes. Dynamic packaging and pricing automation helped us increase margins instantly.",
    name: "Arjun Mehta",
    title: "Director, Skyline Travels",
  },
  {
    quote:
      "Managing hotels, transfers, and activities from one dashboard changed everything for our operations team. It feels built for modern travel agencies.",
    name: "Sophia Williams",
    title: "Operations Head, Global Routes",
  },
  {
    quote:
      "The route optimization engine helped us offer smarter travel plans while keeping costs low. Clients noticed the difference immediately.",
    name: "Daniel Kim",
    title: "Founder, TripSphere",
  },
  {
    quote:
      "Real-time pricing and commission automation removed so much manual work. Our team now focuses more on selling than managing spreadsheets.",
    name: "Priya Sharma",
    title: "Sales Lead, Voyager Hub",
  },
  {
    quote:
      "RouteMaestro feels like having an extra operations team. Everything from proposals to bookings is faster and more professional.",
    name: "James Carter",
    title: "CEO, NextWay Travel",
  },
]

const bottomRowTestimonials = [
  {
    quote:
      "Proposal sharing is incredibly smooth. Clients love receiving clear, branded itineraries instantly.",
    name: "Nisha Verma",
    title: "Travel Consultant, FlyHigh Tours",
  },
  {
    quote:
      "The multi-payment support helped us serve international clients without extra friction. Huge win for our agency.",
    name: "Michael Tan",
    title: "Finance Lead, ExploreWorld",
  },
  {
    quote:
      "Cancellation policy automation saved us from constant manual follow-ups. It's a real operational upgrade.",
    name: "Elena Rodriguez",
    title: "COO, TravelNest",
  },
  {
    quote:
      "We scaled from 5 to 20 agents using RouteMaestro without increasing operational complexity.",
    name: "Rahul Kapoor",
    title: "Founder, Horizon Trips",
  },
  {
    quote:
      "The platform feels premium and reliable — exactly what a B2B travel SaaS should deliver.",
    name: "Lisa Thompson",
    title: "Managing Partner, BrightPath Travel",
  },
]
function MarqueeRow({
  testimonials,
  direction,
}: {
  testimonials: typeof topRowTestimonials
  direction: "left" | "right"
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right"

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r  to-transparent from-black" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l  to-transparent from-black" />

      <div className={`flex gap-6 ${animationClass}`} style={{ width: "max-content" }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {

const headingText = "What our clients say"
const headingWords = headingText.split(" ")

const subtitleText =
  "Trusted by leaders and teams building the future of work."

const subtitleWords = subtitleText.split(" ")


  return (
  <section className="
  min-h-screen
  flex flex-col
  items-center
  justify-center
  gap-10 sm:gap-12
  py-16 sm:py-20
  px-3 sm:px-4
  bg-black
  overflow-hidden
">
      <div className="text-center max-w-2xl">
       
      
<motion.h2
  className="text-4xl font-bold tracking-tight text-slate-100 lg:text-5xl text-balance"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ staggerChildren: 0.08 }}
>
  {headingWords.map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</motion.h2>


<motion.p
  className="mt-4 text-gray-400 text-lg leading-relaxed"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  transition={{ staggerChildren: 0.04 }}
>
  {subtitleWords.map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="inline-block mr-1.5"
    >
      {word}
    </motion.span>
  ))}
</motion.p>
      </div>

      <div className="w-full flex flex-col gap-6">
        <MarqueeRow testimonials={topRowTestimonials} direction="left" />
        <MarqueeRow testimonials={bottomRowTestimonials} direction="right" />
      </div>
    </section>
  )
}
