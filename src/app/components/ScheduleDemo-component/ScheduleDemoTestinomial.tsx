'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/util'

interface TestimonialCardProps {
  className?: string
}

export function TestimonialCard({ className }: TestimonialCardProps) {
  return (
    <div className={cn('flex flex-col', className)}>
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
          shadow-[0_0_60px_rgba(0,0,0,0.5)]
          overflow-visible
          transition-all duration-500
          hover:border-white/20
          hover:shadow-[0_0_80px_rgba(0,0,0,0.6)]
          min-h-[280px]
        "
        style={{
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.5)',
        }}
      >

        {/* ── Glass highlight overlay (depth layer) ── */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
          }}
        />

        {/* ── Radial glow behind traveler ── */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[65%] rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 80% at 80% 60%, rgba(226,113,47,0.13) 0%, rgba(254,102,82,0.07) 40%, transparent 70%)',
          }}
        />

        {/* ── Main layout ── */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch min-h-[280px]">

          {/* ─── LEFT: Text content ─── */}
          <div className="
            flex flex-col justify-center
            px-8 py-10
            w-full lg:w-[58%]
            text-center lg:text-left
            order-2 lg:order-1
            z-10
          ">

            {/* Top label */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 justify-center lg:justify-start"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(226,71,47,0.1)',
                  border: '1px solid rgba(226,71,47,0.25)',
                  color: '#fe6652',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe6652] animate-pulse" />
                Trusted by Travel Agencies Worldwide
              </span>
            </motion.div> */}

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              A Smarter Way to Run{' '}
              <span
                className="bg-gradient-to-r from-[#e2472f] via-[#fe6652] to-[#ff9a8b] bg-clip-text text-transparent"
              >
                Your Travel Business
              </span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm text-slate-400 leading-relaxed max-w-xs lg:max-w-sm"
            >
              RouteMaestro helps travel agencies automate itineraries, manage bookings,
              and scale operations effortlessly.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center gap-4 mt-7 justify-center lg:justify-start"
            >
              <button
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #e2472f, #fe6652)',
                  boxShadow: '0 0 0 1px rgba(226,71,47,0.4), 0 6px 24px rgba(226,71,47,0.3)',
                }}
              >
                Get Started Free
              </button>

              <button
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
              >
                See how it works
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Social proof avatars */}
           
          </div>

          {/* ─── RIGHT: Traveler PNG breakout ─── */}
          <div className="
            relative
            w-full lg:w-[42%]
            flex items-end justify-center lg:justify-end
            order-1 lg:order-2
            pt-6 lg:pt-0
            px-4 lg:px-0
          ">

            {/* Warm glow disc behind traveler */}
            <div
              className="absolute bottom-0 right-0 w-[320px] h-[320px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 60% 80%, rgba(226,113,47,0.18) 0%, rgba(254,102,82,0.1) 35%, transparent 65%)',
                filter: 'blur(24px)',
                transform: 'translate(10%, 10%)',
              }}
            />

            {/* Secondary cool-toned glow for depth */}
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
              className="
                relative z-10
                w-[220px] sm:w-[260px] lg:w-[280px]
                /* break out of card bottom on desktop */
                lg:-mb-8
                /* break out of card top on mobile */
                -mt-4 lg:mt-0
              "
            >
              <Image
                src="/RouteMaestrofigurectascheduledemo.png"           // ← your transparent PNG here
                alt="Travel agent using RouteMaestro"
                width={560}
                height={720}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 48px rgba(226,71,47,0.25)) drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
                }}
              />
            </motion.div>
          </div>

        </div>

        {/* ── Bottom stat strip ── */}
        <div
          className="relative z-10 mx-6 mb-6 rounded-2xl px-6 py-4 grid grid-cols-3 gap-4 lg:hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {[
            { value: '2,400+', label: 'Agencies' },
            { value: '98%', label: 'Uptime' },
            { value: '4.9★', label: 'Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-bold text-lg leading-tight">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Desktop stat strip (inside bottom of card) ── */}
        <div
          className="hidden lg:grid relative z-10 mx-6 mb-6 rounded-2xl px-6 py-4 grid-cols-3 gap-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {[
            { value: '2,400+', label: 'Travel agencies onboarded' },
            { value: '98.9%', label: 'Platform uptime SLA' },
            { value: '4.9 / 5', label: 'Average agency rating' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <p className="text-white font-bold text-xl leading-tight">{stat.value}</p>
              <p className="text-slate-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  )
}