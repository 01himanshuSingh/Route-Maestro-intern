'use client';

import Image from "next/image";

export default function FeaturemotionCard() {
  const cards = [
    {
      title: "Route Generating Engine For Travel Budget Optimisation",
      description:
        "Smart map-based travel route engine combining global & local public transit to minimize travel costs and maximize profit.",
      image: "/AI-Powered Route Generation for Budget Optimization.png",
      rotate: "rotate-6",
    },
    {
      title: "Smart Itinerary Planning & Booking",
      description:
        "AI-driven itinerary creation based on preferences, budget, and real-time availability of flights, hotels, sightseeing, activities and transfers.",
      image: "/Smart Itinerary Planning.png",
      rotate: "-rotate-2",
    },
    {
      title: "Dynamic Commission & Profit Optimization",
      description:
        "Automated commission calculations with optimized markup strategies.",
      image: "/Dynamic Commission & Profit Optimization.png",
      rotate: "-rotate-6",
    },
    {
      title: "Cancellation Policy Handling",
      description:
        "Automated analysis of policies, refund processing, and optimized cancellation strategies.",
      image: "/AI-Powered Cancellation Policy Handling.png",
      rotate: "rotate-2",
    },
     {
      title: "Standalone Bookings",
      description:
        "Seamlessly book standalone travel services, including flights, hotels, sightseeing, and transfers & more.",
      image: "/Standalone Booking.png",
      rotate: "rotate-2",
    }, {
      title: "Proposal & Quotation Sharing",
      description:
        "Instant generation and sharing of detailed proposals and quotations.",
      image: "/Proposal & Quotation Sharing.png",
      rotate: "rotate-2",
    }, {
      title: "Integrated Multi-Payment",
      description:
        "Secure, flexible payment options with multiple gateways and currencies.",
      image: "/Integrated Multi-Payment.png",
      rotate: "rotate-2",
    }, {
      title: "Real-Time Updates & Notifications",
      description:
        "Instant alerts for bookings, schedule changes, and cancellations.",
      image: "/Real-Time Updates & Notifications.png",
      rotate: "rotate-2",
    },
  ];

  return (
  <section className="w-full bg-black">
  <div className="grid gap-2">

    {cards.map((card, index) => (
      <figure
        key={index}
        className="sticky top-0 h-screen grid place-content-center px-4"
      >
        <article
          className={`
            ${card.rotate}
            w-full max-w-[440px]
            h-[360px] sm:h-[380px]
            rounded-2xl
            overflow-hidden
            bg-gradient-to-br
            from-[#111318]
            via-[#151922]
            to-[#1a1f2a]
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            flex flex-col
            backdrop-blur-sm
            transition-all duration-300
          `}
        >
          {/* IMAGE */}
          <div className="flex justify-center pt-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-6 flex flex-col gap-3 text-center sm:text-left">
            <h1 className="text-xl sm:text-[25px] font-bold text-white leading-tight">
              {card.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-[18px] leading-relaxed">
              {card.description}
            </p>
          </div>
        </article>
      </figure>
    ))}

  </div>
</section>
  );
}