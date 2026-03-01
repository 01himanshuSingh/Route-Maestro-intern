'use client'

import { Zap, BookTemplate, Smartphone, Palette } from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { motion } from "framer-motion"

import { AnimatePresence } from 'framer-motion'
import { MobileSwipeStack } from './MobileSwipeStack'
import { useState } from 'react'
import { SwipeHint } from './SwipHint'
const features = [
  {
    id: 1,
    title: 'Travel Companies & Agents ',
    description:
      "RouteMaestro’s AI generates Door-To-Door Traveller Personalized Trips in under 2 Minutes, reducing operational costs & enhancing Profit Margins for agents.",
    imageSrc: "/Travel Companies & Agents.png",
  },
  {
    id: 2,
    title: 'DMCs/DMOs',
    description:
      "DMC’s, DMO’s can integrate RouteMaestro onto their own platform seamlessly to enhance convenience & get preferred by their partners, agents to generate Personalized Trips in 2 Minutes.",
     imageSrc:"/DMO.png" ,
  },
  {
    id: 3,
    title: 'Tourism Boards',
    description:
      "Tourism Boards can harness RouteMaestro to boost regional tourism by empowering travel buyers with the tools to create, promote & sell real-time, end-to-end itineraries seamlessly scheduled down to the minute.",
     imageSrc:"/Tourism Boards.png" ,
  },
  {
    id: 4,
    title: 'Influencers',
    description:
      "Travel Influencers can use RouteMaestro’s AI to design personalized itineraries that showcase their travel style, highlight favorite spots, and feature curated travel recommendations.",
   imageSrc:"/Influencers.png",
  },
]

export function FeaturesSection() {

 const [cards, setCards] = useState(features)
  const [direction, setDirection] = useState(0)

  const handleSwipe = (dir: number) => {
    setDirection(dir)

    setTimeout(() => {
      setCards((prev) => {
        const arr = [...prev]
        const first = arr.shift()
        if (first) arr.push(first)
        return arr
      })
    }, 250)
  }

  
const text = "Solutions For Different Sectors In Travel Industry"
const words = text.split(" ")

const highlightWords = [ "Travel", "Industry"]
const descriptionText =
  "Built to support travel agencies, tour operators, corporate travel teams, and transportation providers with tools designed to streamline operations and scale efficiently."

const descriptionWords = descriptionText.split(" ")

  return (
    <section className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
     
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">

  <motion.h2
  className="mb-6 text-balance text-4xl font-bold text-[#b9b9bf] lg:text-[29px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ staggerChildren: 0.07 }}
>
  {words.map((word, index) => {
    const isHighlight = highlightWords.includes(word)

    return (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`inline-block mr-2 ${
          isHighlight ? "text-[#ff7043]" : "text-white"
        }`}
      >
        {word}
      </motion.span>
    )
  })}
</motion.h2>

<motion.p
  className="mx-auto max-w-5xl text-lg lg:text-[18px] text-slate-400 leading-relaxed"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  transition={{ staggerChildren: 0.04 }}
>
  {descriptionWords.map((word, index) => (
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

        {/* Features Grid */}
        <div className="lg:grid hidden  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

       <div className="lg:hidden relative h-[420px] w-full flex items-center justify-center overflow-hidden">

        <SwipeHint/>
      <AnimatePresence>
        {cards.map((card, index) => (
          <MobileSwipeStack
            key={card.title}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            index={index}
            isTop={index === 0}
            direction={direction}
            onSwipe={handleSwipe}
          />
        ))}
      </AnimatePresence>
    </div>
      </div>
    </section>
  )
}
