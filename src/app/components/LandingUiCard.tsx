'use client'

import Image from "next/image"
import { motion } from "framer-motion"


type Feature = {
  title: string
  description: string
  image: string
  size: "small" | "large"
}

function FeatureCard({
  title,
  description,
  image,
  size,
}: {
  title: string
  description: string
  image: string
  size: "small" | "large"
}) {
  const isLarge = size === "large"

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        border border-white/10
        bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50
        hover:border-white/20
        flex flex-col group
        ${isLarge ? "lg:row-span-2" : ""}
      `}
    >
      {/* Image Container */}
     {/* Image Container */}
<div
  className={`
    relative w-full overflow-hidden
    ${isLarge ? "aspect-[16/12]" : "aspect-[16/9]"}
  `}
>
  <Image
    src={image}
    alt={title}
    fill
    quality={100}
    sizes={
      isLarge
        ? "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px "
        : "(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
    }
    className={`
      object-contain
      transition-transform duration-500 ease-out
      group-hover:scale-[1.04]
      brightness-[1.05] contrast-[1.1] saturate-[1.08]
    `}
  />

  {/* ONLY bottom fade — no vignette, no side darkening */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />

  {/* Subtle top highlight for depth (top only, not sides) */}
  <div
    className="absolute inset-x-0 top-0 h-1/3 opacity-10"
    style={{
      background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
    }}
  />
</div>

      {/* Content */}
      <div className="px-6 pb-6 pt-2 flex-1">
        <h3
          className={`font-semibold text-white tracking-tight
            ${isLarge ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}
          `}
        >
          {title}
        </h3>

        <p
          className={`text-slate-400 mt-2 leading-relaxed
            ${isLarge ? "text-base lg:text-lg" : "text-sm lg:text-base"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  )
}


export function LandingUiCard() {

  const sentence = "Next Gen Travel Technology Solution"
  const words = sentence.split(" ")

  const features:Feature[] = [
    {
      title: "Generating Door-To-Door Travel Routes",
      description:
        "RouteMaestro generates all possible multi-modal travel routes, seamlessly combining air travel routes with various local transit routes across trains, buses,",
      image: "/generating-door-door-routes.webp",
      size: "small",
    },
    {
      title: "AI Powered Dynamic Packaging",
      description:
        "RouteMaestro utilizes AI-ML to craft personalized travel experiences, enabling users to effortlessly plan, manage, and book their trips anytime and from anywhere.",
      image: "/AI Powered Dynamic Packaging & Itinerary Management.webp",
      size: "large",
    },
    {
      title: "Secure & Easy Payment Options",
      description:
        "RouteMaestro has seamlessly partnered with multiple payment gateways, offering its clients the flexibility to choose from their preferred payment gateway.",
      image: "/Secure & Easy Payment Options.webp",
      size: "large",
    },
    {
      title: "Comprehensive Global Travel Inventory",
      description:
        "Choose from multiple global travel inventories, across flights, hotels, sightseeing, activities, transfers and start generating personalised trips, instantly.",
      image: "/Comprehensive Diverse Global Travel Inventory.webp",
      size: "small",
    },
  ]

  return (
    <section className="min-h-screen px-6 py-14">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-3xl  lg:text-4xl font-bold text-white leading-tight">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="inline-block"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>

          

          <span className="text-[#e2472b]">
            For Travel Business
          </span>
        </h1>

        <p className="text-slate-400 text-lg lg:text-[18px] max-w-4xl mx-auto mt-6">
          A powerful platform to manage bookings, billing, and operations with modern tools built for travel agencies.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[2]} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            <FeatureCard {...features[1]} />
            <FeatureCard {...features[3]} />
          </div>

        </div>
      </div>

    </section>
  )
}