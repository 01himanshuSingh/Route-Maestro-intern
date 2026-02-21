"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Card = {
  id: number
  title: string
  image: string
}

const cards: Card[] = [
  { id: 0, title: "Americana Group", image: "/card1.jpg" },
  { id: 1, title: "Flynas", image: "/card2.jpg" },
  { id: 2, title: "Sonny's Enterprises", image: "/card3.jpg" },
  { id: 3, title: "KFC", image: "/card4.jpg" },
  { id: 4, title: "Adidas", image: "/card5.jpg" },
]

export default function SemiCircleCards() {
  const [activeIndex, setActiveIndex] = useState(2)

  const total = cards.length
  const radius = 420
  const angleStep = 28

  const centerX = 600
  const centerY = 320

  // ⭐ REAL circular offset logic
  const getOffset = (index: number) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADER ===== */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${
                activeIndex === i
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* ===== SEMICIRCLE ===== */}
        <div className="relative w-full h-[520px]">

          {cards.map((card, i) => {
       const offset = getOffset(i)

/* ⭐ circular angle calculation */
const angleDeg = offset * 30
const angle = (angleDeg * Math.PI) / 180 + Math.PI / 2

const x = centerX + radius * Math.cos(angle)
const y = centerY - radius * Math.sin(angle)

/* ⭐ realistic circular rotation */
const rotate = angleDeg * 0.9

/* ⭐ depth effect */
const scale = 1 - Math.abs(offset) * 0.08
const opacity = 1 - Math.abs(offset) * 0.18

/* ⭐ slight lift for realism */
const lift = Math.abs(offset) * 6
            return (
              <motion.div
                key={card.id}
                className="absolute w-[300px] h-[380px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl"
                animate={{
                  x,
                  y:y+lift,
                  rotate,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                style={{
                  transform: "translate(-50%, -50%)",
                  zIndex: 100 - Math.abs(offset),
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}