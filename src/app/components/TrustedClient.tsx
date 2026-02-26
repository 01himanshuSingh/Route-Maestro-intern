'use client'

import { motion } from "framer-motion"

export default function TrustedClients() {
  const clients = [
    { name: 'Capsule', icon: '◉' },
    { name: 'Layers', icon: '⬚' },
    { name: 'Polymath', icon: '◯' },
    { name: 'Segment', icon: '✦' },
    { name: 'Alt+Shift', icon: '≈' },
    { name: 'Lightbox', icon: '◆' },
    { name: 'Boltshift', icon: '⚡' },
    { name: 'Interlock', icon: '⊙' },
  ]
const text = "Trusted by thousands of clients more than 4,000+"
const words = text.split(" ")

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 ">
         
<motion.h2
  className="text-2xl lg:text-[27px] font-bold text-white text-balance"
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
              key={client.name}
              className="flex items-center gap-3 p-4 sm:p-5 rounded-lg   transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-slate-400 duration-300">
                {client.icon}
              </div>
              <span className="text-base lg:text-[18px] font-semibold text-slate-400 transition-colors duration-300 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
