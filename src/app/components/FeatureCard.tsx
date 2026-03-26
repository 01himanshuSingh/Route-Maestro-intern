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
        <div className="relative h-16 w-16 h-16 w-16 

3xl:h-18 3xl:w-18
4xl:h-20 4xl:w-20">
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

    3xl:text-[24px]
    4xl:text-[26px]
    5xl:text-[28px]

    font-semibold 
    text-white

    lg:tracking-tight
    3xl:tracking-[-0.015em]

    lg:leading-[1.25]
    3xl:leading-[1.2]
  "
>
  {title}
</h3>
     <p
  className="
    text-sm 
    lg:text-[15.5px] 

    3xl:text-[16.5px]
    4xl:text-[17.5px]

    text-slate-300 
    leading-relaxed 
    text-center

    lg:leading-[1.7]
    3xl:leading-[1.8]

    lg:text-slate-200

    max-w-[95%]
    3xl:max-w-[260px]
    4xl:max-w-[300px]

    text-balance
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

        <h3
  className="
    text-center 
    text-xl 
    lg:text-[20px]

    3xl:text-[22px]
    4xl:text-[24px]
    5xl:text-[26px]

    font-bold 
    text-white

    3xl:tracking-[-0.015em]
    4xl:tracking-[-0.02em]
  "
>
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
         <p
  className="
    text-sm 
    lg:text-[16px]

    3xl:text-[17px]
    4xl:text-[18px]

    text-slate-300 
    leading-relaxed 
    text-center

    3xl:leading-[1.8]
    4xl:leading-[1.9]

    max-w-[90%]
    3xl:max-w-[260px]
    4xl:max-w-[300px]

    text-balance
  "
>
             {description}
          </p>
        </div>
      </motion.div>
    </>
  )
}