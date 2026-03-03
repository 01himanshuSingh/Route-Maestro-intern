'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function TrustedClients() {
  const clients = [
    {imagesrc:"/GoVacation_3C-_500.png"},
     {imagesrc:"/TraventionLOGO-FILE-02-678x120.png"},
      {imagesrc:"/volonlinelogo.png"},
       {imagesrc:"/voyzantLogo-White-.png"},
  ]
const text = "Trusted by thousands of clients more than 4,000+"
const words = text.split(" ")

  return (
    <section className="relative py-16  lg:py-18 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 ">
         
<motion.h2
  className="text-2xl lg:text-4xl font-bold text-white text-balance"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ staggerChildren: 0.07 }}
>
  {words.map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))}
</motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client) => (
           <div
  key={client.imagesrc}
  className="group flex items-center justify-center p-4 sm:p-5 rounded-lg transition-all duration-300 cursor-pointer"
>
  <Image
    src={client.imagesrc}
    alt="client logo"
    width={140}
    height={60}
    className="
      w-auto h-8 sm:h-10 lg:h-12
      object-contain
      opacity-50
      grayscale
      transition-all duration-300 ease-in-out
      group-hover:opacity-100
      group-hover:grayscale-0
      group-hover:scale-105
    "
  />
</div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
