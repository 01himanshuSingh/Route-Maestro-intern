
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence, useAnimation } from 'framer-motion'
// import {
//   Plane,
//   Hotel,
//   Ship,
//   Map,
//   Wallet,
//   BarChart3,
//   Users,
//   Globe,
// } from 'lucide-react'

// // ─── Feature Data ────────────────────────────────────────────────────────────

// type Feature = {
//   icon: any
//   title: string
//   description: string
//   gradient: string
//   glow: string
//   lineColor: string
// }

// const features:any = [
//   {
//     icon: Plane,
//     title: 'Flight APIs',
//     description: 'Access global flight inventory with real-time pricing and availability.',
//     gradient: 'from-sky-500 to-blue-600',
//     glow: 'rgba(14,165,233,0.55)',
//     lineColor: '#38bdf8',
//   },
//   {
//     icon: Hotel,
//     title: 'Hotel Inventory',
//     description: 'Connect to 100k+ hotels worldwide with live rate management.',
//     gradient: 'from-violet-500 to-purple-700',
//     glow: 'rgba(139,92,246,0.55)',
//     lineColor: '#a78bfa',
//   },
//   {
//     icon: Ship,
//     title: 'Cruise Packages',
//     description: 'Create and sell premium cruise travel packages effortlessly.',
//     gradient: 'from-cyan-400 to-teal-600',
//     glow: 'rgba(20,184,166,0.55)',
//     lineColor: '#2dd4bf',
//   },
//   {
//     icon: Map,
//     title: 'Smart Itinerary',
//     description: 'AI-powered trip planning engine with map-based routing.',
//     gradient: 'from-emerald-400 to-green-600',
//     glow: 'rgba(52,211,153,0.55)',
//     lineColor: '#34d399',
//   },
//   {
//     icon: Wallet,
//     title: 'Dynamic Pricing',
//     description: 'Automated markup and margin engine across all channels.',
//     gradient: 'from-amber-400 to-orange-500',
//     glow: 'rgba(251,191,36,0.55)',
//     lineColor: '#fbbf24',
//   },
//   {
//     icon: BarChart3,
//     title: 'Analytics',
//     description: 'Real-time booking analytics with conversion funnels.',
//     gradient: 'from-pink-500 to-rose-600',
//     glow: 'rgba(244,63,94,0.55)',
//     lineColor: '#fb7185',
//   },
//   {
//     icon: Users,
//     title: 'Agent Management',
//     description: 'Onboard and manage B2B travel agents with role controls.',
//     gradient: 'from-indigo-400 to-blue-600',
//     glow: 'rgba(99,102,241,0.55)',
//     lineColor: '#818cf8',
//   },
//   {
//     icon: Globe,
//     title: 'Global Channels',
//     description: 'Distribute inventory across GDS, OTA, and direct channels.',
//     gradient: 'from-fuchsia-500 to-pink-600',
//     glow: 'rgba(217,70,239,0.55)',
//     lineColor: '#e879f9',
//   },
// ]

// // ─── Particle Component ───────────────────────────────────────────────────────

// function Particles() {
//   const particles = Array.from({ length: 28 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 2 + 0.5,
//     duration: Math.random() * 8 + 6,
//     delay: Math.random() * 5,
//     opacity: Math.random() * 0.4 + 0.1,
//   }))

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full bg-white"
//           style={{
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//             width: p.size,
//             height: p.size,
//             opacity: p.opacity,
//           }}
//           animate={{
//             y: [0, -18, 0],
//             opacity: [p.opacity, p.opacity * 2, p.opacity],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   )
// }

// // ─── SVG Lines ────────────────────────────────────────────────────────────────

// function OrbitLines({
//   nodes,
//   center,
//   hoveredIndex,
//   features,
// }: {
//   nodes: { x: number; y: number }[]
//   center: { x: number; y: number }
//   hoveredIndex: number | null
//   features: Feature[]
// }) {
//   return (
//     <svg className="absolute inset-0 w-full h-full pointer-events-none">
//       <defs>
//         {features.map((f, i) => (
//           <linearGradient
//             key={i}
//             id={`line-grad-${i}`}
//             x1={nodes[i]?.x}
//             y1={nodes[i]?.y}
//             x2={center.x}
//             y2={center.y}
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0%" stopColor={f.lineColor} stopOpacity={hoveredIndex === i ? 0.9 : 0.3} />
//             <stop offset="100%" stopColor={f.lineColor} stopOpacity={hoveredIndex === i ? 0.3 : 0.05} />
//           </linearGradient>
//         ))}
//       </defs>

//       {nodes.map((node, i) => (
//         <motion.line
//           key={i}
//           x1={node.x}
//           y1={node.y}
//           x2={center.x}
//           y2={center.y}
//           stroke={`url(#line-grad-${i})`}
//           strokeWidth={hoveredIndex === i ? 2 : 1}
//           animate={{
//             strokeWidth: hoveredIndex === i ? 2 : 1,
//             opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.3,
//           }}
//           transition={{ duration: 0.3 }}
//         />
//       ))}

//       {/* Dashed orbit ring */}
//       <circle
//         cx={center.x}
//         cy={center.y}
//         r={Math.hypot(nodes[0]?.x - center.x, nodes[0]?.y - center.y) || 0}
//         fill="none"
//         stroke="rgba(255,255,255,0.04)"
//         strokeWidth="1"
//         strokeDasharray="4 6"
//       />
//     </svg>
//   )
// }

// // ─── Tooltip ──────────────────────────────────────────────────────────────────

// function Tooltip({
//   feature,
//   position,
//   nodeX,
//   centerX,
// }: {
//   feature: (typeof features)[0]
//   position: { x: number; y: number }
//   nodeX: number
//   centerX: number
// }) {
//   const isLeft = nodeX < centerX

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8, scale: 0.96 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, y: 6, scale: 0.95 }}
//       transition={{ duration: 0.22, ease: 'easeOut' }}
//       className="absolute z-50 pointer-events-none"
//       style={{
//         left: isLeft ? position.x - 220 : position.x + 88,
//         top: position.y - 32,
//         width: 200,
//       }}
//     >
//       <div
//         className="rounded-2xl p-4 relative"
//         style={{
//           background: 'rgba(12,12,20,0.85)',
//           backdropFilter: 'blur(20px)',
//           border: '1px solid rgba(255,255,255,0.1)',
//           boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.6), 0 0 40px ${feature.glow}22`,
//         }}
//       >
//         {/* Arrow */}
//         <div
//           className="absolute top-6 w-0 h-0"
//           style={{
//             [isLeft ? 'right' : 'left']: -6,
//             borderTop: '6px solid transparent',
//             borderBottom: '6px solid transparent',
//             [isLeft ? 'borderLeft' : 'borderRight']: '6px solid rgba(255,255,255,0.1)',
//           }}
//         />

//         {/* Icon accent */}
//         <div
//           className={`w-8 h-8 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3`}
//           style={{ boxShadow: `0 4px 14px ${feature.glow}` }}
//         >
//           <feature.icon size={15} className="text-white" strokeWidth={2} />
//         </div>

//         <p className="text-white text-sm font-semibold mb-1 leading-tight">{feature.title}</p>
//         <p className="text-white/50 text-xs leading-relaxed mb-3">{feature.description}</p>

//         <span
//           className={`text-xs font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent flex items-center gap-1`}
//         >
//           View details
//           <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//             <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </span>
//       </div>
//     </motion.div>
//   )
// }

// // ─── Mobile Grid ──────────────────────────────────────────────────────────────

// function MobileGrid() {
//   const [hovered, setHovered] = useState<number | null>(null)

//   return (
//     <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
//       {features.map((f, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
//           onHoverStart={() => setHovered(i)}
//           onHoverEnd={() => setHovered(null)}
//           className="relative rounded-2xl p-4 cursor-pointer"
//           style={{
//             background: hovered === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
//             border: '1px solid rgba(255,255,255,0.08)',
//             backdropFilter: 'blur(12px)',
//             transition: 'background 0.3s',
//           }}
//         >
//           <div
//             className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3`}
//             style={{ boxShadow: `0 4px 16px ${f.glow}` }}
//           >
//             <f.icon size={18} className="text-white" strokeWidth={2} />
//           </div>
//           <p className="text-white text-xs font-semibold mb-1">{f.title}</p>
//           <p className="text-white/40 text-xs leading-relaxed">{f.description}</p>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function FeatureOrbit() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [hovered, setHovered] = useState<number | null>(null)
//   const [size, setSize] = useState({ width: 600, height: 600 })

//   useEffect(() => {
//     const update = () => {
//       if (containerRef.current) {
//         const w = containerRef.current.offsetWidth
//         setSize({ width: w, height: w })
//       }
//     }
//     update()
//     window.addEventListener('resize', update)
//     return () => window.removeEventListener('resize', update)
//   }, [])

//   const cx = size.width / 2
//   const cy = size.height / 2
//   const radius = size.width * 0.36

//   const nodePositions = features.map((_, i) => {
//     const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2
//     return {
//       x: cx + radius * Math.cos(angle),
//       y: cy + radius * Math.sin(angle),
//       angle,
//     }
//   })

//   return (
//     <section
//       className="relative w-full overflow-hidden bg-black py-24 px-4"
//       style={{
//         background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,46,229,0.08) 0%, #000 70%)',
//       }}
//     >
//       {/* Background radial glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             'radial-gradient(ellipse 55% 45% at 50% 52%, rgba(124,58,237,0.12) 0%, transparent 70%)',
//         }}
//       />

//       <Particles />

//       {/* Section Header */}
//       <div className="relative z-10 text-center mb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/20 bg-violet-500/8 mb-5"
//           style={{ backdropFilter: 'blur(10px)' }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
//           Unified Ecosystem
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
//           style={{ fontFamily: "'Sora', sans-serif" }}
//         >
//           Everything connected.
//           <br />
//           <span
//             className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
//           >
//             Nothing missing.
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-white/40 text-base max-w-md mx-auto"
//         >
//           RouteMaestro orchestrates your entire travel stack — one intelligent core, infinite reach.
//         </motion.p>
//       </div>

//       {/* ── Desktop Radial Graph ── */}
//       <div className="hidden md:flex justify-center relative z-10">
//         <div
//           ref={containerRef}
//           className="relative"
//           style={{ width: '100%', maxWidth: 640, aspectRatio: '1' }}
//         >
//           {/* SVG Lines */}
//           <OrbitLines
//             nodes={nodePositions}
//             center={{ x: cx, y: cy }}
//             hoveredIndex={hovered}
//             features={features}
//           />

//           {/* Center Node */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
//             className="absolute flex flex-col items-center justify-center rounded-full"
//             style={{
//               width: 148,
//               height: 148,
//               left: cx - 74,
//               top: cy - 74,
//               background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
//               boxShadow:
//                 '0 0 0 1px rgba(139,92,246,0.4), 0 0 60px rgba(124,58,237,0.45), 0 0 120px rgba(79,70,229,0.2)',
//             }}
//           >
//             {/* Inner ring */}
//             <div
//               className="absolute inset-0 rounded-full"
//               style={{
//                 border: '1px solid rgba(255,255,255,0.18)',
//                 borderRadius: '50%',
//               }}
//             />
//             <motion.div
//               animate={{ scale: [1, 1.03, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//               className="flex flex-col items-center"
//             >
//               {/* Logo mark */}
//               <div className="w-10 h-10 mb-1 flex items-center justify-center">
//                 <Globe size={32} className="text-white" strokeWidth={1.5} />
//               </div>
//               <span
//                 className="text-white text-[11px] font-bold tracking-widest uppercase opacity-80"
//                 style={{ letterSpacing: '0.12em' }}
//               >
//                 RouteMaestro
//               </span>
//             </motion.div>
//           </motion.div>

//           {/* Feature Nodes */}
//           {features.map((feature, i) => {
//             const pos = nodePositions[i]
//             const isHovered = hovered === i

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.15 + i * 0.07,
//                   ease: [0.23, 1, 0.32, 1],
//                 }}
//                 style={{
//                   position: 'absolute',
//                   left: pos.x - 36,
//                   top: pos.y - 36,
//                   width: 72,
//                   height: 72,
//                 }}
//               >
//                 <motion.div
//                   className={`w-full h-full rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center cursor-pointer relative`}
//                   animate={{
//                     y: [0, -4, 0],
//                     scale: isHovered ? 1.18 : 1,
//                   }}
//                   transition={
//                     isHovered
//                       ? { scale: { type: 'spring', stiffness: 400, damping: 20 }, y: { duration: 0 } }
//                       : {
//                           y: {
//                             duration: 3.5 + i * 0.3,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                             delay: i * 0.25,
//                           },
//                           scale: { type: 'spring', stiffness: 300, damping: 25 },
//                         }
//                   }
//                   style={{
//                     boxShadow: isHovered
//                       ? `0 0 0 2px rgba(255,255,255,0.15), 0 8px 32px ${feature.glow}, 0 0 60px ${feature.glow}55`
//                       : `0 0 0 1px rgba(255,255,255,0.08), 0 4px 20px ${feature.glow}55`,
//                   }}
//                   onHoverStart={() => setHovered(i)}
//                   onHoverEnd={() => setHovered(null)}
//                 >
//                   {/* Inner ring on hover */}
//                   <AnimatePresence>
//                     {isHovered && (
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.7 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="absolute inset-0 rounded-full"
//                         style={{ border: '2px solid rgba(255,255,255,0.25)', borderRadius: '50%' }}
//                       />
//                     )}
//                   </AnimatePresence>

//                   <feature.icon
//                     size={isHovered ? 26 : 24}
//                     className="text-white relative z-10"
//                     strokeWidth={1.8}
//                   />
//                 </motion.div>

//                 {/* Tooltip */}
//                 <AnimatePresence>
//                   {isHovered && (
//                     <Tooltip
//                       feature={feature}
//                       position={{ x: 36, y: 0 }}
//                       nodeX={pos.x}
//                       centerX={cx}
//                     />
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>

//       {/* ── Mobile Grid ── */}
//       <div className="md:hidden relative z-10">
//         <MobileGrid />
//       </div>

//       {/* Bottom fade */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
//         style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
//       />
//     </section>
//   )
// }