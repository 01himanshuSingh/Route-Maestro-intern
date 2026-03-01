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
  const centerX = 540
  const centerY = 320

  const getOffset = (index: number) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="w-full bg-black py-12 lg:py-16 overflow-hidden">
<div className="flex justify-center items-center mb-8 lg:mb-12 px-4">
  <motion.h1
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.7,
      ease: "easeOut",
    }}
    className="
      text-center
      text-2xl
      lg:text-5xl
      font-bold
      tracking-tight
      text-white
      leading-tight
    "
  >
    Freedom to Choose,{" "}
    <span className="bg-gradient-to-r from-[#e2472b] to-orange-400 bg-clip-text text-transparent">
      Flexibility to Book
    </span>
  </motion.h1>
</div>
      {/* ================= MOBILE GRID ================= */}
      <div className="lg:hidden px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="
              rounded-2xl
              overflow-hidden
              bg-gradient-to-b from-zinc-900 to-zinc-950
              border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            "
          >
            <div className="p-3 flex flex-col">
              <div className="relative w-full h-[160px] rounded-xl overflow-hidden mb-3">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>

              <h3 className="text-white text-xl font-semibold mb-2">
                {card.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden lg:block w-full max-w-[1400px] px-4 mx-auto">

        {/* HEADER */}
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

        {/* SEMICIRCLE */}
        <div className="relative max-w-full h-[182px] mx-auto overflow-visible">
          {cards.map((card, i) => {
            const offset = getOffset(i)

            const angleStep = 37
            const angleDeg = offset * angleStep
            const angleRad = (angleDeg * Math.PI) / 180

            const x = centerX + radius * Math.sin(angleRad)
            const y = centerY - radius * Math.cos(angleRad)

            const rotate = angleDeg * 1.2
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