'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FeatureCardProps {
  imageSrc: string
  title: string
  description?: string
  className?: string
}

export function FeatureCard({
  imageSrc,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <>
      {/* ================= MOBILE CARD ================= */}
      <div
        className={`
          lg:hidden
          relative
          h-auto
          w-full
          rounded-xl
          border border-white/[0.08]
          bg-gradient-to-br
          from-[#111318] via-[#16181d] to-[#1b1e24]
          bg-white/[0.02]
          shadow-sm shadow-black/30
          p-4
          flex flex-col items-center text-center gap-3
          ${className}
        `}
      >
        <div className="relative h-16 w-16">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain brightness-110 contrast-110"
          />
        </div>

       <h3
  className="
    text-center 
    text-xl 
    lg:text-[22px] 
    font-semibold 
    text-white
    lg:tracking-tight
    lg:leading-[1.25]
  "
>
  {title}
</h3>
      <p
  className="
    text-sm 
    lg:text-[15.5px] 
    text-slate-300 
    leading-relaxed 
    text-center
    lg:leading-[1.7]
    lg:text-slate-200
  "
>
  {description}
</p>
      </div>

      {/* ================= DESKTOP FLIP CARD ================= */}
    <motion.div
  className={`hidden lg:block relative h-[280px] w-full ${className}
    lg:group
  `}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* FRONT SIDE */}
      <div
  className="
    absolute inset-0 overflow-hidden rounded-lg border border-white/10
    bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
    p-8 flex flex-col items-center justify-center

    lg:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
    lg:transition-all lg:duration-300
    lg:group-hover:border-white/20
  "
  style={{ backfaceVisibility: 'hidden' }}
>
          <div className="mb-6 relative h-16 w-16 lg:mb-7">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-center text-xl lg:text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>

        {/* BACK SIDE */}
       <div
  className="
    absolute inset-0 overflow-hidden rounded-lg border border-white/10
    bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
    p-8 flex items-center justify-center

    lg:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
    lg:group-hover:border-white/20
  "
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-sm lg:text-[16px] text-slate-300 leading-relaxed text-center">
            {description}
          </p>
        </div>
      </motion.div>
    </>
  )
}