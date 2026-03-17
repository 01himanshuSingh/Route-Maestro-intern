'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/util'
import { useRouter } from 'next/navigation'

interface TestimonialCardProps {
  className?: string
}

export function TestimonialCard({ className }: TestimonialCardProps) {
  const router = useRouter();
  return (
    <div className={cn('flex flex-col w-full', className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ y: -4 }}
        className="
          relative
          rounded-3xl
          bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
          border border-white/10
          overflow-hidden
          transition-all duration-500
          hover:border-white/20
          hover:shadow-[0_0_80px_rgba(0,0,0,0.6)]
          w-full
        "
        style={{
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.5)',
        }}
      >

        {/* Glass highlight overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
          }}
        />

        {/* Radial glow behind traveler — desktop only */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[65%] rounded-3xl pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 80% 60%, rgba(226,113,47,0.13) 0%, rgba(254,102,82,0.07) 40%, transparent 70%)',
          }}
        />

        {/* Main layout */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch lg:min-h-[320px]">

          {/* LEFT: Text content */}
          <div className="
            flex flex-col justify-center
            px-6 sm:px-8 lg:px-10
            py-10 lg:py-12
            w-full lg:w-[58%]
            text-center lg:text-left
            order-1
            z-10
          ">

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              A Smarter Way to Run{' '}
              <span className="bg-gradient-to-r from-[#e2472f] via-[#fe6652] to-[#ff9a8b] bg-clip-text text-transparent">
                Your Travel Business
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0"
            >
              RouteMaestro helps travel agencies automate itineraries, manage bookings,
              and scale operations effortlessly.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center gap-4 mt-7 justify-center lg:justify-start flex-wrap"
            >
              <button
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #e2472f, #fe6652)',
                  boxShadow: '0 0 0 1px rgba(226,71,47,0.4), 0 6px 24px rgba(226,71,47,0.3)',
                }}
                onClick={()=>router.push('/pricing')}
              >
                Get Started Free
              </button>

            
            </motion.div>
          </div>

          {/* RIGHT: Traveler PNG — desktop only */}
          <div className="
            hidden lg:flex
            relative
            w-[42%]
            items-end justify-end
            order-2
            overflow-visible
          ">

            {/* Warm glow disc */}
            <div
              className="absolute bottom-0 right-0 w-[320px] h-[320px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 60% 80%, rgba(226,113,47,0.18) 0%, rgba(254,102,82,0.1) 35%, transparent 65%)',
                filter: 'blur(24px)',
                transform: 'translate(10%, 10%)',
              }}
            />

            {/* Cool-toned depth glow */}
            <div
              className="absolute top-1/2 right-4 w-[200px] h-[200px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'translateY(-50%)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 w-[280px] xl:w-[310px] mb-8"
            >
              <Image
                src="/RouteMaestrofigurectascheduledemo.png"
                alt="Travel agent using RouteMaestro"
                width={560}
                height={720}
                priority
                className="w-full h-auto object-contain"
                style={{
                  filter:
                    'drop-shadow(0 20px 48px rgba(226,71,47,0.25)) drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
                }}
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}