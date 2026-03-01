'use client'

import { motion } from 'framer-motion'

export function SwipeHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        absolute
        bottom-[-4]
        
        left-1/2
        -translate-x-1/2
        z-50
        px-4 py-2
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-md
        text-xs
        text-slate-300
        flex items-center gap-2
      "
    >
      <motion.span
        animate={{ x: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ←
      </motion.span>

      Swipe cards

      <motion.span
        animate={{ x: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        →
      </motion.span>
    </motion.div>
  )
}