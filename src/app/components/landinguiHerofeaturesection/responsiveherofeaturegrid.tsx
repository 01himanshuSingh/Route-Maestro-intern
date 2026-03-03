  import React from "react"
  import Image from "next/image"

  function Card({
    title,
    description,
    image,
    size = "small",
  }: {
    title: string
    description: string
    image: string
    size?: "small" | "large"
  }) {
    const isLarge = size === "large"

    return (
      <div
        className={`
          relative overflow-hidden rounded-2xl shadow-md 
  bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24] 
  border border-white/10 
  shadow-[0_0_40px_rgba(0,0,0,0.4)]

          flex flex-col md:flex-row
          ${isLarge ? "h-64" : "h-40"}
        `}
      >
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-4 md:w-1/2">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mt-2 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    )
  }

  export default function CustomLayout() {
    return (
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* LEFT COLUMN */}
          <div className="grid gap-6">
            <Card
              size="small"
              title="Smart Analytics"
              description="Powerful insights to help your business grow with real-time tracking and AI-driven metrics."
              image="/generating-door-door-routes.webp"
            />

            <Card
              size="large"
              title="Enterprise Solutions"
              description="Scale your infrastructure with enterprise-grade architecture designed for performance, reliability, and security."
              image="/AI Powered Dynamic Packaging & Itinerary Management.webp"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6">
            <Card
              size="large"
              title="Cloud Integration"
              description="Seamlessly integrate your platform with cloud services and automate your workflows efficiently."
              image="/Secure & Easy Payment Options.webp"
            />

            <Card
              size="small"
              title="Secure Platform"
              description="Advanced security systems to protect your data with encrypted and scalable solutions."
              image="/Comprehensive Diverse Global Travel Inventory.webp"
            />
          </div>

        </div>
      </div>
    )
  }