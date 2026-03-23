'use client'
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
export default function FeatureHero() {
  const router = useRouter()
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
  return (
    <section className="
      w-full
      flex flex-col
      items-center lg:items-start
      justify-center
      px-0 sm:px-2 lg:px-4
      py-2 pt-8 lg:pt-1 lg:py-12
      text-center lg:text-left
    ">
      {/* Heading */}
  <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          text-[32px] sm:text-5xl lg:text-5xl xl:text-6xl
          font-bold text-white
          mb-3 lg:mb-5
          leading-[1.15] lg:leading-[1.1]
          tracking-tight
        "
      >
        AI Powered{' '}
        <span className="bg-gradient-to-r mr-2.5 from-[#e2472f] via-[#fe6652] to-[#ff9a8b] bg-clip-text text-transparent">
          Dynamic
        </span>
        Packaging
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="
          text-[14px] sm:text-lg
          text-slate-400
          mb-7 lg:mb-10
          leading-relaxed
          max-w-[88%] sm:max-w-md lg:max-w-lg
          mx-auto lg:mx-0
        "
      >
        <span className="font-semibold text-white">RouteMaestro</span> enables quick
        map-based travel planning, and facilitates booking{' '}
        <span className="font-semibold text-white">Personalized & Profitable</span>{' '}
        travel itineraries within minutes.
      </motion.p>

      {/* Buttons — HIDDEN on mobile, visible on desktop */}
      <div className="hidden lg:flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center lg:items-start">

        <button
          onClick={() => router.push('/schedule-demo')}
          className="group relative w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #e2472f, #fe6652)',
            boxShadow: '0 0 0 1px rgba(226,71,47,0.5), 0 8px 32px rgba(226,71,47,0.35)',
          }}
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{ background: 'linear-gradient(135deg, #fe6652, #ff8a74)' }}
          />
          <span className="relative flex items-center gap-2">
            Schedule A Demo
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>

        <button
          className="group relative w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:text-white"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)'
          }}
        >
          <span className="flex items-center gap-2">
            Start Free Trial
            <svg className="w-4 h-4 opacity-50 group-hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

      </div>
    </section>
  )
}