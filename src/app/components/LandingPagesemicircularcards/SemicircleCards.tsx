"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Card = {
  id: number
  title: string
  image: string
  description: string
}

const cards: Card[] = [
  { id: 0, title: "Flights", image: "/Flight.png", description: "Book and offer your customers access to a wide range of domestic and international airlines, ensuring they get the best fares and travel options." },
  { id: 1, title: "Hotels", image: "/Hotels.png", description: "Connect with thousands of hotels, from budget stays to luxury resorts, offering choices that suit every traveler's preference." },
  { id: 2, title: "Sightseeing & Activities", image: "/Sightseeing.png", description: "Offer curated sightseeing, activities, and unique experiences to make your customers' travel journeys memorable and hassle-free." },
  { id: 3, title: "Transfers", image: "/Transfers.png", description: "Provide your customers with smooth and reliable transfers with diverse transportation options, ensuring seamless connectivity at every stage of their travel journey." },
  { id: 4, title: "Others", image: "/Transfers.png", description: "Explore additional travel inventory and services designed to support diverse customer needs beyond flights, hotels, activities, and transfers. If you need any custom services or inventory, feel free to contact" },
]

export default function SemiCircleCards() {
  const [activeIndex, setActiveIndex] = useState(2)

  const total = cards.length

  // ── Desktop geometry ──────────────────────────────────────────────────────
  const radius  = 560   // tighter arc → more precise semicircle
  const centerX = 500   // horizontal centre of the arc
  const centerY = 320   // vertical centre (above viewport so cards peek up)
  const angleStep = 34  // even angular spacing between cards

  const getOffset = (index: number) => {
    let diff = index - activeIndex
    if (diff >  total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="w-full bg-black py-12 lg:py-16 overflow-hidden">

      {/* ── Section heading ─────────────────────────────────────────────── */}
      <div className="flex justify-center items-center mb-8 lg:mb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-2xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
        >
          Freedom to Choose,{" "}
          <span className="bg-gradient-to-r from-[#e2472b] to-orange-400 bg-clip-text text-transparent">
            Flexibility to Book
          </span>
        </motion.h2>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE GRID — unchanged
      ══════════════════════════════════════════════════════════════════ */}
   {/* MOBILE GRID */}
<div className="lg:hidden grid grid-cols-2 gap-3 w-full max-w-sm mx-auto px-3">
  {cards.map((card, i) => (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.3s",
      }}
    >
      {/* image */}
      <div className="w-full h-24 relative bg-gradient-to-br from-zinc-800 to-zinc-900">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover opacity-85"
        />
      </div>

      {/* text */}
      <div className="p-3">
        <p className="text-white text-xs font-semibold mb-1">
          {card.title}
        </p>

        <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP SEMICIRCLE — refined
      ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block w-full max-w-[1400px] px-4 mx-auto">

        {/* Tab pills */}
        <div className="flex justify-center gap-3 mb-80 flex-wrap">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(i)}
              className={`
                px-5 py-2 rounded-full text-sm lg:text-[15px] font-medium
                transition-all duration-200
                ${activeIndex === i
                  ? "bg-[#e2472b] text-white shadow-lg shadow-[#e2472b]/25"
                  : "bg-white/[0.06] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/10"
                }
              `}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* Arc stage */}
        <div className="relative w-full h-[90px] mx-auto overflow-visible">
          {cards.map((card, i) => {
            const offset  = getOffset(i)
            const angleDeg = offset * angleStep
            const angleRad = (angleDeg * Math.PI) / 180

            const x = centerX + radius * Math.sin(angleRad)
            const y = centerY - radius * Math.cos(angleRad)

            const rotate = angleDeg * 1.1
            // centre card gets a slight scale boost; others taper off cleanly
            const scale  = offset === 0 ? 1 : 1 - Math.abs(offset) * 0.09

            const isActive = offset === 0

            return (
              <motion.div
                key={card.id}
                animate={{ x, y, rotate, scale }}
                whileHover={{ y: y - 10, scale: scale + 0.025 }}
                transition={{ type: "spring", stiffness: 130, damping: 22 }}
                style={{
                  position: "absolute",
                  width: 220,
                  height: 380,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                {/* Card shell */}
                <div
                  className="w-full h-full rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => setActiveIndex(i)}
                  style={{
                    background: isActive
                      ? "linear-gradient(160deg, #1c1c22 0%, #111116 100%)"
                      : "linear-gradient(160deg, #161619 0%, #0e0e11 100%)",
                    border: isActive
                      ? "1px solid rgba(226,71,43,0.35)"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isActive
                      ? "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(226,71,43,0.12), inset 0 1px 0 rgba(255,255,255,0.07)"
                      : "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Image area */}
                  <div className="px-3 pt-3">
                    <div
                      className="relative w-full rounded-xl overflow-hidden"
                      style={{ height: 130 }}
                    >
                      {/* Blurred bg fill */}
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        aria-hidden
                        className="object-cover scale-110 blur-xl opacity-30 brightness-50"
                      />
                      {/* Sharp main image */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        quality={100}
                        className="object-contain brightness-[1.05] contrast-[1.08] saturate-[1.06]"
                      />
                      {/* Subtle inner shadow rim */}
                      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.06]" />
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="flex flex-col flex-1 px-3.5 pt-3 pb-4">
                    <h3
                      className="font-semibold mb-1.5 leading-tight"
                      style={{
                        fontSize: 19,
                        color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: 15,
                        color: isActive ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.38)",
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#e2472b]" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}