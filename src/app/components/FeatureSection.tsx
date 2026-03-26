'use client'

import { FeatureCard } from './FeatureCard'
import { motion } from "framer-motion"

const features = [
  {
    id: 1,
    title: 'Travel Companies & Agents ',
    description:
      "RouteMaestro's AI generates Door-To-Door Traveller Personalized Trips in under 2 Minutes, reducing operational costs & enhancing Profit Margins for agents.",
    imageSrc: "/Travel Companies & Agents.png",
  },
  {
    id: 2,
    title: 'DMCs/DMOs',
    description:
      "DMC's, DMO's can integrate RouteMaestro onto their own platform seamlessly to enhance convenience & get preferred by their partners, agents to generate Personalized Trips in 2 Minutes.",
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
      "Travel Influencers can use RouteMaestro's AI to design personalized itineraries that showcase their travel style, highlight favorite spots, and feature curated travel recommendations.",
   imageSrc:"/Influencers.png",
  },
]

export function FeaturesSection() {

const text = "Solutions For Different Sectors In Travel Industry"
const words = text.split(" ")

const highlightWords = [ "Travel", "Industry"]
const descriptionText =
  "Built to support travel agencies, tour operators, corporate travel teams, and transportation providers with tools designed to streamline operations and scale efficiently."

const descriptionWords = descriptionText.split(" ")

  return (
    <section className="relative w-full bg-black py-8 px-5 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-6xl 
3xl:max-w-7xl 
4xl:max-w-[1400px] 
5xl:max-w-[1600px]">
        {/* Header */}
        <div className="mb-8 text-center lg:mb-16">

  <motion.h2
  className="
    mb-4 
    text-balance 
    text-[22px] 
    leading-snug 
    font-bold 
    text-[#b9b9bf] 

    lg:text-[42px] 
    lg:mb-6 
    lg:leading-[1.2] 
    lg:tracking-tight 
    lg:font-semibold


    3xl:text-[48px]
4xl:text-[56px]
5xl:text-[64px]

3xl:leading-[1.15]
4xl:leading-[1.12]

3xl:tracking-[-0.02em]
4xl:tracking-[-0.025em]
  "
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
  className={`inline-block 3xl:mr-2
4xl:mr-2.5 mr-1.5 ${
    isHighlight ? "bg-clip-text text-transparent" : "text-white"
  }`}
  style={
    isHighlight
      ? {
          backgroundImage: `linear-gradient(
            135deg,
                    #c94030 0%,
                    #e2572b 25%,
                    #ff7a5c 50%,
                    #e2572b 75%,
                    #c94030 100%

          )`,
          filter: "drop-shadow(0 0 28px rgba(226,71,43,0.18))",
        }
      : {}
  }
>
  {word}
</motion.span>
    )
  })}
</motion.h2>
<motion.p
  className="
    mx-auto 
    max-w-[90%] 

    text-[15px] 
    sm:text-base 
    lg:text-[20px] 
    xl:text-[22px]

    3xl:text-[24px]
    4xl:text-[26px]

    leading-relaxed 
    text-slate-400 

    lg:max-w-4xl 
    lg:leading-[1.8] 
    lg:text-slate-300

    3xl:leading-[1.9]

    3xl:max-w-5xl
    4xl:max-w-6xl
    5xl:max-w-[1400px]
  "
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
      className="inline-block mr-1 3xl:mr-1.5"
    >
      {word}
    </motion.span>
  ))}
</motion.p>

</div>

        {/* Features Grid */}
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 3xl:gap-8
4xl:gap-10">
  {features.map((feature) => (
    <FeatureCard
      key={feature.id}
      imageSrc={feature.imageSrc}
      title={feature.title}
      description={feature.description}
    />
  ))}
</div>

      </div>
    </section>
  )
}