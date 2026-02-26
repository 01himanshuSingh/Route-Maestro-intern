"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Card = {
  id: number
  title: string
  image: string
  description:string
}

const cards: Card[] = [
  { id: 0, title: "Flights", image: "/Flight.png" , description:"Book and offer your customers access to a wide range of domestic and international airlines, ensuring they get the best fares and travel options."},
  { id: 1, title: "Hotels", image: "/Hotels.png" , description:"Connect with thousands of hotels, from budget stays to luxury resorts, offering choices that suit every traveler’s preference."},
  { id: 2, title: "Sightseeing & Activities", image: "/Sightseeing.png" , description:"Offer curated sightseeing, activities, and unique experiences to make your customers' travel journeys memorable and hassle-free."},
  { id: 3, title: "Transfers", image: "/Transfers.png" , description:"Provide your customers with smooth and reliable transfers with diverse transportation options, ensuring seamless connectivity at every stage of their travel journey." },
  { id: 4, title: "others", image: "/Transfers.png" , description: "Explore additional travel inventory and services designed to support diverse customer needs beyond flights, hotels, activities, and transfers. If you need any custom services or inventory, feel free to contact "},
]

export default function SemiCircleCards() {
  const [activeIndex, setActiveIndex] = useState(2)

  const total = cards.length
  const radius = 620
  const angleStep = 28

  const centerX = 540
  const centerY = 320

  // ⭐ REAL circular offset logic
  const getOffset = (index: number) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="w-full bg-black py-16 overflow-hidden flex justify-center">
  <div className="w-full max-w-[1400px] px-4 mx-auto">

        {/* ===== HEADER ===== */}
        <div className="flex justify-center gap-3 mb-84 flex-wrap">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm lg:text-[18px] font-medium transition-all
              ${
                activeIndex === i
                  ? "bg-[#e2472b] text-white"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* ===== SEMICIRCLE ===== */}<div className="relative max-w-full h-[182px] mx-auto overflow-visible">

          {cards.map((card, i) => {
    const offset = getOffset(i)

/* ⭐ REAL semicircle angle */
const angleStep = 37 // controls spread
const angleDeg = offset * angleStep
const angleRad = (angleDeg * Math.PI) / 180

/* ⭐ semicircle position */
const x = centerX + radius * Math.sin(angleRad)
const y = centerY - radius * Math.cos(angleRad)

/* ⭐ THIS IS THE IMPORTANT PART */
const rotate = angleDeg * 1.2

/* ⭐ depth realism */
const scale = 1 - Math.abs(offset) * 0.08
const opacity = 1 - Math.abs(offset) * 0.15
    
    return (
             <motion.div
  key={card.id}
  className="
  absolute
  w-[250px] h-[440px]
  rounded-2xl
  overflow-hidden
  bg-gradient-to-b from-zinc-900 to-zinc-950
  border border-white/10
  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  backdrop-blur-xl
  "
  animate={{ x, y, rotate, scale, opacity }}
  whileHover={{ y: y - 12, scale: scale + 0.03 }}
  transition={{ type: "spring", stiffness: 120, damping: 20 }}
  style={{
    transform: "translate(-50%, -50%)",
    zIndex: 10 - Math.abs(offset),
  }}
>
  <div className="flex flex-col h-full p-3">

    <div className="relative w-full h-[140px] rounded-xl overflow-hidden mb-3">
      <Image src={card.image} alt={card.title} fill className="object-cover" />
    </div>

    <h3 className="text-white text-[27px] font-semibold mb-1">
      {card.title}
    </h3>
<p className="text-zinc-400 text-[17px] leading-relaxed">
  {card.description}
</p>

  </div>
</motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}