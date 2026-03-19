'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Globe } from 'lucide-react'

// ─── Feature Data ─────────────────────────────────────────────────────────────

const features = [
  {
   image: "/AI-Powered Route Generation for Budget Optimization (1).png",
    title: "Route Generating Engine For Travel Budget Optimisation",
    description:
      "Smart map-based travel route engine combining global & local public transit to minimize travel costs and maximize profit.",

    gradient: 'from-sky-500 to-blue-600',
    glow: 'rgba(14,165,233,0.6)',
    lineColor: '#38bdf8',
    borderColor: 'rgba(56,189,248,0.35)',
  },
  {
     image: "/Smart Itinerary Planning (1).png",
    title: "Smart Itinerary Planning & Booking",
    description:
      "AI-driven itinerary creation based on preferences, budget, and real-time availability of flights, hotels, sightseeing, activities and transfers.",
 
    gradient: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.6)',
    lineColor: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.35)',
  },
  {
   image: "/Dynamic Commission & Profit Optimization (1).png",
    title: "Dynamic Commission & Profit Optimization",
    description:
      "Automated commission calculations with optimized markup strategies.",
  
    gradient: 'from-cyan-400 to-teal-600',
    glow: 'rgba(20,184,166,0.6)',
    lineColor: '#2dd4bf',
    borderColor: 'rgba(45,212,191,0.35)',
  },
  {
     image: "/AI-Powered Cancellation Policy Handling (1).png",
    title: "Cancellation Policy Handling",
    description:
      "Automated analysis of policies, refund processing, and optimized cancellation strategies.",

    gradient: 'from-emerald-400 to-green-600',
    glow: 'rgba(52,211,153,0.6)',
    lineColor: '#34d399',
    borderColor: 'rgba(52,211,153,0.35)',
  },
  {
     image: "/Standalone Booking.png",
    title: "Standalone Bookings",
    description:
      "Seamlessly book standalone travel services, including flights, hotels, sightseeing, and transfers & more.",
 
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.6)',
    lineColor: '#fbbf24',
    borderColor: 'rgba(251,191,36,0.35)',
  },
  {
    image: "/Proposal & Quotation Sharing.png",
    title: "Proposal & Quotation Sharing",
    description:
      "Instant generation and sharing of detailed proposals and quotations.",
   gradient: 'from-pink-500 to-rose-600',
    glow: 'rgba(244,63,94,0.6)',
    lineColor: '#fb7185',
    borderColor: 'rgba(251,113,133,0.35)',
  },
  {
   image: "/Integrated Multi-Payment.png",
    title: "Integrated Multi-Payment",
    description:
      "Secure, flexible payment options with multiple gateways and currencies.",

    gradient: 'from-indigo-400 to-blue-600',
    glow: 'rgba(99,102,241,0.6)',
    lineColor: '#818cf8',
    borderColor: 'rgba(129,140,248,0.35)',
  },
  {
       image: "/Real-Time Updates & Notifications.png",
    title: "Real-Time Updates & Notifications",
    description:
      "Instant alerts for bookings, schedule changes, and cancellations.",

    gradient: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.6)',
    lineColor: '#e879f9',
    borderColor: 'rgba(232,121,249,0.35)',
  },
]

// Even index = near (0.28), odd index = far (0.42) — alternating pattern
const RADIUS_MULTIPLIERS = [0.28, 0.42, 0.28, 0.42, 0.28, 0.42, 0.28, 0.42]

// Near nodes slightly bigger, far nodes slightly smaller
const NODE_SIZES = [110, 92, 110, 92, 110, 92, 110, 92]

// ─── Particles ────────────────────────────────────────────────────────────────

function Particles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.4,
      duration: Math.random() * 9 + 5,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.3 + 0.07,
    }))

    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -16, 0], opacity: [p.opacity, p.opacity * 2.2, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ─── SVG Lines ────────────────────────────────────────────────────────────────

function OrbitLines({
  nodes,
  center,
  hoveredIndex,
}: {
  nodes: { x: number; y: number }[]
  center: { x: number; y: number }
  hoveredIndex: number | null
   features: any[]
}) {
  // Compute both ring radii for dashed orbit circles
  const nearR  = Math.hypot((nodes[0]?.x ?? 0) - center.x, (nodes[0]?.y ?? 0) - center.y)
  const farR   = Math.hypot((nodes[1]?.x ?? 0) - center.x, (nodes[1]?.y ?? 0) - center.y)

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        {features.map((f, i) => (
          <linearGradient key={i} id={`lg-${i}`}
            x1={nodes[i]?.x} y1={nodes[i]?.y}
            x2={center.x} y2={center.y}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor={f.lineColor} stopOpacity={hoveredIndex === i ? 1 : 0.4} />
            <stop offset="100%" stopColor={f.lineColor} stopOpacity={hoveredIndex === i ? 0.35 : 0.04} />
          </linearGradient>
        ))}
        <filter id="line-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Near orbit ring */}
      <circle cx={center.x} cy={center.y} r={nearR}
        fill="none" stroke="rgba(255,255,255,0.05)"
        strokeWidth="1" strokeDasharray="3 9" />
      {/* Far orbit ring */}
      <circle cx={center.x} cy={center.y} r={farR}
        fill="none" stroke="rgba(255,255,255,0.035)"
        strokeWidth="1" strokeDasharray="3 9" />

      {nodes.map((node, i) => (
        <motion.line
          key={i}
          x1={node.x} y1={node.y} x2={center.x} y2={center.y}
          stroke={`url(#lg-${i})`}
          filter={hoveredIndex === i ? 'url(#line-glow)' : undefined}
          animate={{
            strokeWidth: hoveredIndex === i ? 2.5 : 1,
            opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </svg>
  )
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

function Tooltip({
  feature,
  nodeX,
  centerX,
}: {
  feature: (typeof features)[0]
  nodeX: number
  centerX: number
}) {
  const isLeft = nodeX < centerX
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.95 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="absolute z-50 pointer-events-none"
      style={{
        [isLeft ? 'right' : 'left']: '96px',
        top: '-24px',
        width: 210,
      }}
    >
      <div
        className="rounded-2xl p-4 relative"
        style={{
          background: 'rgba(8,8,16,0.92)',
          backdropFilter: 'blur(26px)',
          border: `1px solid ${feature.borderColor}`,
          boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 24px 52px rgba(0,0,0,0.75), 0 0 40px ${feature.glow}14`,
        }}
      >
        {/* Arrow */}
        <div
          className="absolute top-7"
          style={{
            [isLeft ? 'right' : 'left']: -7,
            width: 0, height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            [isLeft ? 'borderLeft' : 'borderRight']: `7px solid ${feature.borderColor}`,
          }}
        />

        {/* Image preview */}
        <div
          className={`w-full h-[72px] rounded-xl bg-gradient-to-br ${feature.gradient} mb-3 overflow-hidden relative`}
          style={{ boxShadow: `0 4px 16px ${feature.glow}44` }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-contain"
            style={{ opacity: 0.88 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-sm font-semibold mb-1">{feature.title}</p>
        <p className="text-white/45 text-xs leading-relaxed mb-3">{feature.description}</p>

     
      </div>
    </motion.div>
  )
}

// ─── Mobile Grid ──────────────────────────────────────────────────────────────

function MobileGrid() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          className="relative rounded-2xl overflow-hidden cursor-pointer"
          style={{
            background: hovered === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${hovered === i ? f.borderColor : 'rgba(255,255,255,0.07)'}`,
            transition: 'all 0.3s',
          }}
        >
          <div className={`w-full h-24 bg-gradient-to-br ${f.gradient} relative`}>
            <Image src={f.image} alt={f.title} fill className="object-cover opacity-85"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <div className="p-3">
            <p className="text-white text-xs font-semibold mb-1">{f.title}</p>
            <p className="text-white/40 text-xs leading-relaxed">{f.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeatureOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [size, setSize] = useState(680)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setSize(containerRef.current.offsetWidth)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const cx = size / 2
  const cy = size / 2

  const nodePositions = features.map((_, i) => {
    const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2
    const r = size * RADIUS_MULTIPLIERS[i]
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })

  return (
    <section
      className="relative w-full overflow-hidden py-8 px-4"
      style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 50%, rgba(79,46,229,0.07) 0%, #050508 70%)' }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 42% at 50% 52%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <Particles />

      {/* Section header */}
      <div className="relative z-10 text-center mb-14">
      
        <motion.h2
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className=" text-[32px] sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-4"
        >
  AI Powered Trip Planning & Itinerary{' '}
          <span  className="bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(
      160deg,
      #c94030 0%,
      #e2572b 22%,
      #f08070 36%,
      #fde8e4 50%,
      #f08070 64%,
      #e2572b 78%,
      #c94030 100%
    )`,
  }}>
            Management System
          </span>
        </motion.h2>

     
      </div>

      {/* ── Desktop radial graph ── */}
      <div className="hidden md:flex justify-center relative z-10">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: '100%', maxWidth: 720, aspectRatio: '1' }}
        >
          <OrbitLines nodes={nodePositions} center={{ x: cx, y: cy }} hoveredIndex={hovered} />

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="absolute flex flex-col items-center justify-center rounded-full"
            style={{
              width: 156, height: 156,
              left: cx - 78, top: cy - 78,
               backgroundImage: `linear-gradient(
      160deg,
      #c94030 0%,
      #e2572b 22%,
      #f08070 36%,
      #fde8e4 50%,
      #f08070 64%,
      #e2572b 78%,
      #c94030 100%
    )`,
    boxShadow:
      "0 0 0 1px rgba(226,71,43,0.35), 0 0 60px rgba(226,71,43,0.35), 0 0 120px rgba(226,71,43,0.18)",
  }}
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-1"
            >
              <Globe size={34} className="text-white" strokeWidth={1.4} />
              <span className="text-white text-[13px] font-bold tracking-[0.14em] uppercase opacity-80">
                RouteMaestro
              </span>
            </motion.div>
          </motion.div>

          {/* Feature nodes */}
          {features.map((feature, i) => {
            const pos = nodePositions[i]
            const nodeSize = NODE_SIZES[i]
            const isHovered = hovered === i
            const isNear = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  position: 'absolute',
                  left: pos.x - nodeSize / 2,
                  top: pos.y - nodeSize / 2,
                  width: nodeSize,
                  height: nodeSize,
                }}
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden cursor-pointer relative"
                  animate={{
                    y: isHovered ? -5 : [0, isNear ? -5 : -9, 0],
                    scale: isHovered ? 1.17 : 1,
                  }}
                  transition={
                    isHovered
                      ? { scale: { type: 'spring', stiffness: 380, damping: 22 }, y: { duration: 0.2 } }
                      : {
                          y: { duration: 3.2 + i * 0.28, repeat: Infinity, ease: 'easeInOut', delay: i * 0.22 },
                          scale: { type: 'spring', stiffness: 280, damping: 28 },
                        }
                  }
                  style={{
                    boxShadow: isHovered
                      ? `0 0 0 2.5px rgba(255,255,255,0.2), 0 12px 40px ${feature.glow}, 0 0 70px ${feature.glow}45`
                      : `0 0 0 1.5px ${feature.borderColor}, 0 6px 24px ${feature.glow}35`,
                  }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                >
                  {/* Gradient fallback */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />

                  {/* Image */}
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover relative z-10 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0.82 }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />

                  {/* Shine overlay on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 rounded-full"
                        style={{
                          background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.2) 0%, transparent 65%)',
                          border: '2px solid rgba(255,255,255,0.22)',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Resting label */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute text-center text-white font-medium leading-tight"
                      style={{
                        fontSize: 13,
                        top: nodeSize + 6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {feature.title}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <Tooltip feature={feature} nodeX={pos.x} centerX={cx} />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile grid */}
      <div className="md:hidden relative z-10">
        <MobileGrid />
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050508)' }}
      />
    </section>
  )
} 