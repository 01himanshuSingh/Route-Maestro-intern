'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.3 + 0.08,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`
        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ display: 'block' }}
      />

      {/* Layered gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-black/80 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-20 lg:pt-30 pb-10 lg:pb-15 flex flex-col items-center text-center">

        {/* Eyebrow badge */}
     
        {/* Heading */}
        <div
          className="mb-5 sm:mb-7"
          style={{ animation: 'fadeSlideUp 0.7s ease-out 0.1s both' }}
        >
          <h1 className="text-[34px] sm:text-5xl lg:text-[68px] font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-[-0.03em]">
            Digitize Your
            <br />
           <span className="relative inline-block">
  {/* Soft ambient bloom */}
  <span
    className="absolute -inset-2 blur-3xl opacity-20 pointer-events-none"
    style={{
      background: 'radial-gradient(ellipse at center, #ff7a5c 0%, #e2472b 50%, transparent 80%)',
    }}
  />

  {/* Glass text */}
  <span
    className="relative bg-clip-text text-transparent"
    style={{
      backgroundImage: `linear-gradient(
        160deg,
        #c94030  0%,
        #e2572b  22%,
        #f08070  36%,
        #fde8e4  50%,
        #f08070  64%,
        #e2572b  78%,
        #c94030  100%
      )`,
      filter: 'drop-shadow(0 0 28px rgba(226,71,43,0.18))',
    }}
  >
    Travel Infrastructure
  </span>

  {/* Underline glow — shorter, softer */}
  <span
    className="absolute -bottom-1.5 left-[10%] right-[10%] h-px opacity-50"
    style={{
      background: 'linear-gradient(90deg, transparent, #ff9d8a, #fde8e4, #ff9d8a, transparent)',
    }}
  />
</span>
          </h1>
        </div>

        {/* Description */}
        <p
          className="text-[15px] sm:text-base lg:text-lg text-white/55 mb-8 sm:mb-10 max-w-[420px] sm:max-w-[600px] leading-relaxed tracking-wide"
          style={{ animation: 'fadeSlideUp 0.7s ease-out 0.2s both' }}
        >
          An AI Powered Dynamic Travel Packaging Platform For Your Business!
        </p>

        {/* Hero preview image */}
        <div
          className="relative w-full max-w-[92vw] sm:max-w-[880px] mx-auto mb-8 sm:mb-10"
          style={{ animation: 'fadeScaleUp 0.9s ease-out 0.3s both' }}
        >
          {/* Outer ambient glow — reduced on mobile */}
          <div className="absolute -inset-2 sm:-inset-4 bg-teal-500/[0.07] sm:bg-teal-500/10 rounded-3xl blur-xl sm:blur-2xl" />
          <div className="absolute -inset-1 bg-gradient-to-b from-teal-400/10 sm:from-teal-400/15 to-transparent rounded-3xl blur-lg" />

          {/* Image frame */}
          <div
            className="
              relative rounded-2xl overflow-hidden
            
              shadow-2xl shadow-black/60
              bg-[#0d0f12]
            "
            style={{ animation: 'floatY 6s ease-in-out infinite' }}
          >
            {/* Top bar chrome — mimics browser/app window */}
           

            <Image
              src="/landingpageeditpic.png"
              alt="RouteMaestro Preview"
              width={1200}
              height={700}
              priority
              quality={100}
              unoptimized
              className="
                w-full h-auto
                object-cover
                brightness-[1.06] contrast-[1.08] saturate-[1.08]
              "
            />

            {/* Bottom fade into page */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CTA Buttons — after image, original position */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 w-full sm:w-auto px-2 sm:px-0"
          style={{ animation: 'fadeSlideUp 0.7s ease-out 0.5s both' }}
        >
          <button
            className="
              group relative overflow-hidden
              bg-[#e2472b] hover:bg-[#fe6652]
              text-white text-sm font-semibold
              px-7 py-3.5 sm:py-3 rounded-full
              flex items-center gap-2
              w-full sm:w-auto justify-center
              shadow-lg shadow-red-500/20
              hover:shadow-red-500/35 hover:shadow-xl
              hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-200
            "
            onClick={() => router.push('/schedule-demo')}
          >
            <span className="relative z-10">Join Us</span>
            <ArrowRight
              size={16}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
            />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
          </button>

          <button
            className="
              border border-white/15 hover:border-white/30
              text-white/80 hover:text-white
              text-sm font-semibold
              px-7 py-3.5 sm:py-3 rounded-full
              bg-white/[0.04] hover:bg-white/[0.08]
              backdrop-blur-sm
              w-full sm:w-auto
              hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-200
            "
            onClick={() => router.push('/schedule-demo')}
          >
            Start free trial
          </button>
        </div>

      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScaleUp {
          from { opacity: 0; transform: scale(0.97) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}