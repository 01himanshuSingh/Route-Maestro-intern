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
const text = "RouteMaestro Tried By Teams At"
const words = text.split(" ")

  return (
    <section className="relative py-10 lg:py-18 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-7 lg:mb-12">
       <motion.h2
  className="
    text-[22px] 
    leading-snug 
    lg:text-[42px] 
    font-semibold 
    text-white 
    text-balance
    lg:leading-[1.2]
    lg:tracking-tight
  "
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
      className="
        inline-block mr-[6px]
        lg:mr-2
      "
    >
      {word}
    </motion.span>
  ))}
</motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {clients.map((client) => (
           <div
  key={client.imagesrc}
  className="group flex items-center justify-center p-3 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 cursor-pointer"
>
  <Image
    src={client.imagesrc}
    alt="client logo"
    width={140}
    height={60}
   className="
  w-auto h-7 sm:h-10 lg:h-12
  object-contain
  brightness-110 contrast-110
  opacity-100 lg:opacity-50
  lg:grayscale
  transition-all duration-300 ease-in-out
  lg:group-hover:opacity-100
  lg:group-hover:grayscale-0
  lg:group-hover:scale-105
"
  />
</div>
          ))}
        </div>

      
      </div>
    </section>
  )
}