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
  const centerX = 560   // horizontal centre of the arc
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
         className="
  text-center 
  text-2xl 
  lg:text-[42px] 
  font-semibold 
  tracking-tight 
  text-white 
  leading-tight
  lg:leading-[1.2]
"
        >
          Freedom to Choose,{" "}
     <span
  className="relative bg-clip-text text-transparent lg:font-semibold"
  style={{
    backgroundImage: `linear-gradient(
       135deg,
                    #c94030 0%,
                    #e2572b 25%,
                    #ff7a5c 50%,
                    #e2572b 75%,
                    #c94030 100%

    )`,
    filter: "drop-shadow(0 6px 24px rgba(255,120,80,0.25))",
  }}
>
  Flexibility to Book
</span>
        </motion.h2>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE GRID — unchanged
      ══════════════════════════════════════════════════════════════════ */}
   {/* MOBILE GRID */}
{/* MOBILE GRID */}
<div className="lg:hidden flex flex-col gap-4 w-full max-w-md mx-auto px-4">
  {cards.map((card, i) => (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
      className="relative rounded-xl overflow-hidden cursor-pointer flex items-center gap-3 p-3"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.3)",
        transition: "all 0.3s",
      }}
    >
      {/* image */}
      <div className="w-14 h-14 relative flex-shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-contain brightness-110 contrast-110"
        />
      </div>

      {/* text */}
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-white text-[14px] font-semibold tracking-tight mb-0.5">
          {card.title}
        </p>

        <p className="text-slate-400 text-[13px] leading-relaxed line-clamp-2">
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
  px-5 py-2 rounded-full 
  text-sm lg:text-[15px] hover:cursor-pointer
  font-medium 
  tracking-[0.2px]
  transition-all duration-300

  ${
    activeIndex === i
      ? "bg-gradient-to-r from-[#e2472b] to-[#ff6a3d] text-white shadow-[0_8px_30px_rgba(255,90,60,0.3)]"
      : "bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white border border-white/10"
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
  className="
    font-semibold 
    mb-1.5 
    leading-tight
    lg:tracking-tight
  "
  style={{
    fontSize: 20,
    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
  }}
>
  {card.title}
</h3>
                 <p
  className="leading-relaxed lg:leading-[1.7]"
  style={{
    fontSize: 15.5,
    color: isActive
      ? "rgba(255,255,255,0.6)"
      : "rgba(255,255,255,0.4)",
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