'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  imageSrc: string
  title: string
  description?: string
  index: number
  isTop: boolean
  direction: number
  onSwipe: (dir: number) => void
}

export function MobileSwipeStack({
  imageSrc,
  title,
  description,
  index,
  isTop,
  direction,
  onSwipe,
}: Props) {
  return (<motion.div
  drag={isTop ? 'x' : false}
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.6}
  dragMomentum={true}
  whileTap={{ scale: 1.03 }}

  onDragEnd={(_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 1 : -1)
    }
  }}

  initial={{
    scale: 1 - index * 0.04,
    y: index * 8,
  }}

  animate={{
    scale: 1 - index * 0.04,
    y: index * 8,
    rotate: index % 2 === 0 ? -3 : 3,
    x: 0,
    opacity: 1,
  }}

  exit={{
    x: direction > 0 ? 450 : -450,
    rotate: direction > 0 ? 25 : -25,
    opacity: 0,
    transition: { duration: 0.3 },
  }}

  transition={{
    type: 'spring',
    stiffness: 140,
    damping: 18,
    mass: 0.8,
  }}


      className="
        absolute
        w-[250px]
        rounded-2xl
        overflow-hidden
        bg-gradient-to-br
        from-[#111318]
        via-[#151922]
        to-[#1a1f2a]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        p-5
        flex flex-col items-center text-center
        touch-none
      "
      style={{ zIndex: 100 - index }}
    >
      {/* IMAGE */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <h3 className="text-lg font-bold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}