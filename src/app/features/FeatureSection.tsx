'use client'

import Image from 'next/image'

interface Feature {
  icon: string
  title: string
  description: string
  gradient: string
}

const features: Feature[] = [
  {
    icon: "/AI-Powered Route Generation for Budget Optimization (1).png",
    title: "Route Generating Engine For Travel Budget Optimisation",
    description:
      "Smart map-based travel route engine combining global & local public transit to minimize travel costs and maximize profit.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/Smart Itinerary Planning (1).png",
    title: "Smart Itinerary Planning & Booking",
    description:
      "AI-driven itinerary creation based on preferences, budget, and real-time availability of flights, hotels, sightseeing, activities and transfers.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/Dynamic Commission & Profit Optimization (1).png",
    title: "Dynamic Commission & Profit Optimization",
    description:
      "Automated commission calculations with optimized markup strategies.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/AI-Powered Cancellation Policy Handling (1).png",
    title: "Cancellation Policy Handling",
    description:
      "Automated analysis of policies, refund processing, and optimized cancellation strategies.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/Standalone Booking.png",
    title: "Standalone Bookings",
    description:
      "Seamlessly book standalone travel services, including flights, hotels, sightseeing, and transfers & more.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/Proposal & Quotation Sharing.png",
    title: "Proposal & Quotation Sharing",
    description:
      "Instant generation and sharing of detailed proposals and quotations.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "/Integrated Multi-Payment.png",
    title: "Integrated Multi-Payment",
    description:
      "Secure, flexible payment options with multiple gateways and currencies.",
    gradient: "from-purple-600 to-pink-600",
  },

  {
    icon: "/Real-Time Updates & Notifications.png",
    title: "Real-Time Updates & Notifications",
    description:
      "Instant alerts for bookings, schedule changes, and cancellations.",
    gradient: "from-red-600 to-pink-600",
  },
  // Add others...
]

export default function FeaturesSection() {
  return (
    <section className="w-full bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl  lg:text-5xl font-bold text-white mb-4">
            AI Powered <span className="text-[#e2472b]">Trip Planning & Itinerary</span>
          </h2>
          <p className="text-3xl  lg:text-5xl font-bold text-white">
            Management <span className="text-[#e2472b]">System</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
        <div
  key={index}
  className="group relative overflow-hidden 
  bg-[#111318] border border-white/10 
  rounded-2xl p-6 
  transition-all duration-500 ease-out
  hover:-translate-y-3
  hover:border-white/20
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  cursor-pointer"
>
              {/* Icon Image */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient}
                flex items-center justify-center mb-5 shadow-lg`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg lg:txet:xl mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[18px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}