'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Zap,
  Wallet,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  accent: string         // tailwind text-color class for the value
  glowColor: string      // raw CSS color for radial glow
  delay: number
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: Omit<StatCardProps, 'delay'>[] = [
  {
    icon: <TrendingUp strokeWidth={1.5} className="w-6 h-6" />,
    value: '>30',
    label: 'Boost In Monthly Revenue',
    accent: 'text-emerald-400',
    glowColor: 'rgba(52,211,153,0.12)',
  },
  {
    icon: <Users strokeWidth={1.5} className="w-6 h-6" />,
    value: '20 -  25%',
    label: 'Boost In Client Conversions',
    accent: 'text-sky-400',
    glowColor: 'rgba(56,189,248,0.12)',
  },
  {
    icon: <Zap strokeWidth={1.5} className="w-6 h-6" />,
    value: '60',
    label: 'Reduction In Turnaround Time',
    accent: 'text-amber-400',
    glowColor: 'rgba(251,191,36,0.12)',
  },
  {
    icon: <Wallet strokeWidth={1.5} className="w-6 h-6" />,
    value: '25 -  30%',
    label: 'eduction In Operational Cost',
    accent: 'text-rose-400',
    glowColor: 'rgba(251,113,133,0.12)',
  },
]

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedValue({ value }: { value: string }) {
  // Parse prefix/suffix/number
  const prefix = value.startsWith('+') ? '+' : value.startsWith('-') ? '-' : ''
  const digits = parseInt(value.replace(/[^0-9]/g, ''), 10)
  const suffix = '%'

  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const spring = useSpring(0, { stiffness: 60, damping: 18, restDelta: 0.5 })
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`)

  if (isInView) spring.set(digits)

  return <motion.span ref={ref}>{display}</motion.span>
}

// ─── Spotlight Card ───────────────────────────────────────────────────────────

function StatCard({ icon, value, label, accent, glowColor, delay }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setSpotlight({ x, y, opacity: 1 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, opacity: 0 }))
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      // @ts-ignore — spring transition for hover
      whileHoverTransition={{ type: 'spring', stiffness: 280, damping: 22 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        group relative rounded-2xl p-px overflow-hidden cursor-default
        transition-all duration-300
      "
      style={{ willChange: 'transform' }}
    >
      {/* ── Animated border gradient on hover ── */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.18) 0%, transparent 70%)`,
        }}
      />

      {/* ── Static border ── */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.18] transition-colors duration-300" />

      {/* ── Card body ── */}
      <div className="
        relative rounded-2xl
        bg-white/[0.04] group-hover:bg-white/[0.07]
        backdrop-blur-xl
        p-7 3xl:p-9
        flex flex-col gap-5
        transition-colors duration-300
        overflow-hidden
        h-full
      ">

        {/* Spotlight mouse-follow glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, ${glowColor}, transparent 80%)`,
          }}
        />

        {/* Ambient bottom glow (always on) */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: glowColor.replace('0.12', '0.6') }}
        />

        {/* ── Icon ── */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={`
            w-11 h-11 3xl:w-13 3xl:h-13
            rounded-xl
            flex items-center justify-center
            bg-white/[0.06] border border-white/[0.08]
            ${accent}
            group-hover:bg-white/[0.1]
            transition-colors duration-300
            relative z-10
          `}
        >
          {icon}
        </motion.div>

        {/* ── Stat number ── */}
        <div className="relative z-10">
     <p
  className={`
    font-bold tracking-tight leading-none
    ${accent}
  `}
  style={{
    fontSize: 'clamp(2.25rem, 3.2vw, 3.5rem)',
  }}
>
  {value.includes('-') ? (
    value // ✅ show full string (no animation)
  ) : (
    <>
      {value.startsWith('+') && '+'}
      {value.startsWith('>') && '>'}
      <AnimatedValue value={value.replace(/[^0-9]/g, '')} />
      {value.includes('%') && '%'}
    </>
  )}
</p>
        </div>

        {/* ── Label ── */}
     <p
  className="
    relative z-10

    text-[15px]
    sm:text-base
    lg:text-[18px]
    xl:text-[20px]

    3xl:text-[20px]
    4xl:text-[23px]

    leading-[1.4]
    lg:leading-[1.5]
    3xl:leading-[1.6]

    text-slate-300 group-hover:text-white/65
    transition-colors duration-300

    font-medium
    tracking-[0.01em]
    lg:tracking-[0.015em]

    max-w-[140px]
    sm:max-w-[160px]
    md:max-w-[180px]
    lg:max-w-[200px]
    xl:max-w-[220px]

    3xl:max-w-[240px]
    4xl:max-w-[280px]

    text-balance
  "
>
  {label}
</p>
      </div>
    </motion.div>
  )
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14 3xl:mb-20"
    >
      {/* ── Eyebrow pill ── */}
   

      {/* ── Main heading ── */}
      <h2
  className="
    font-bold text-white text-center mx-auto

    text-[22px]
    sm:text-[26px]
    md:text-[30px]
    lg:text-[36px]
    xl:text-[42px]
    2xl:text-[48px]

    3xl:text-[56px]
    4xl:text-[64px]
    5xl:text-[72px]

    leading-[1.2]
    lg:leading-[1.15]
    3xl:leading-[1.1]

    tracking-[-0.01em]
    lg:tracking-[-0.02em]
    3xl:tracking-[-0.025em]

    max-w-[90%]
    sm:max-w-[520px]
    md:max-w-[620px]
    lg:max-w-[760px]
    xl:max-w-[880px]
    2xl:max-w-[1000px]
    3xl:max-w-[1150px]
    4xl:max-w-[1300px]
    5xl:max-w-[1450px]

    text-balance
  "
>
        Leverage{' '}
        <span className="relative inline-block">
          {/* Gradient text for key phrase */}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #e2572b 0%, #ff8a6e 50%, #e2472b 100%)',
            }}
          >
            IP-driven Technology
          </span>
          {/* Under-glow */}
          <span
            className="absolute -inset-1 blur-2xl opacity-25 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, #e2572b 0%, transparent 70%)',
            }}
          />
        </span>
        {' '}to Maximize Your Travel Business Profits
      </h2>

      {/* ── Subtext ── */}
   <p
  className="
    text-slate-300 text-center mx-auto

    text-[14px]
    sm:text-[15px]
    md:text-[16px]
    lg:text-[20px]
    xl:text-[22px]

    3xl:text-[24px]
    4xl:text-[25px]
    leading-relaxed

    max-w-[90%]
    sm:max-w-[500px]
    md:max-w-[600px]
    lg:max-w-none

    whitespace-normal
    lg:whitespace-nowrap
  "
>        Transform your bookings and overhead expenses into profit and boost your travel business game.
      </p>
    </motion.div>
  )
}

// ─── Background Layer ─────────────────────────────────────────────────────────

function Background() {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Top center diffused glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] 3xl:w-[1100px] h-[300px] bg-blue-600/[0.055] rounded-full blur-[100px] pointer-events-none" />

      {/* Left warm accent */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-rose-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Right cool accent */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* Top separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      {/* Bottom separator line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function LandinpageBusinesspage() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-10 3xl:py-32 4xl:py-40">
      <Background />

      <div className="
        relative z-10 w-full mx-auto
        px-5 sm:px-8 lg:px-12 3xl:px-16 4xl:px-20
        max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1600px] 5xl:max-w-[1900px]
      ">
        <SectionHeading />

        {/* ── Stats Grid ── */}
        <div className="
          grid gap-4 3xl:gap-5
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        ">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.value}
              {...stat}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* ── Optional bottom CTA hint ── */}
      
      </div>
    </section>
  )
}