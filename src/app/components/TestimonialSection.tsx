"use client"
import { motion } from "framer-motion"

import { TestimonialCard } from "./TestimonialCard"

const topRowTestimonials = [
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    title: "CEO, Co-Founder.",
  },
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Natalia Larsson",
    title: "CEO, Co-Founder.",
  },
  {
    quote:
      "The platform completely transformed how we manage our team operations. It's intuitive and powerful at the same time, saving us countless hours every week.",
    name: "David Chen",
    title: "CTO, Startup Labs.",
  },
  {
    quote:
      "Since adopting this solution our productivity has increased by 40%. The integration was seamless and the support team was incredibly responsive.",
    name: "Sarah Mitchell",
    title: "VP Engineering, TechCo.",
  },
  {
    quote:
      "A game-changer for our organization. We reduced administrative overhead significantly and our team can now focus on what truly matters.",
    name: "James Wright",
    title: "Director, InnovateCorp.",
  },
]

const bottomRowTestimonials = [
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Anna Yon",
    title: "CEO, Co-Founder.",
  },
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    title: "CEO, Co-Founder.",
  },
  {
    quote:
      "Outstanding experience from day one. The onboarding was smooth and we saw immediate value. Our employees love the streamlined workflows.",
    name: "Elena Rodriguez",
    title: "COO, GlobalVentures.",
  },
  {
    quote:
      "Best decision we made this year. The ROI speaks for itself and the team adoption rate was incredible. Highly recommend to any growing business.",
    name: "Michael Park",
    title: "Head of Ops, ScaleUp.",
  },
  {
    quote:
      "What sets this apart is the attention to detail and the seamless user experience. It feels like it was built specifically for our needs.",
    name: "Lisa Thompson",
    title: "Founder, BrightPath.",
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
    <section className="min-h-screen flex flex-col items-center justify-center gap-12 py-20 px-4 bg-black overflow-hidden">
      <div className="text-center max-w-2xl">
       
      
<motion.h2
  className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl text-balance"
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
