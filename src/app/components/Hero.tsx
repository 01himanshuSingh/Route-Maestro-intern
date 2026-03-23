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

    const particles: any[] = []

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

        // 🔥 SOFT BLUE PARTICLES (FIXED)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * 0.35})`
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
      
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* 🔥 PREMIUM DARK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/40 via-black/90 to-black" />

      {/* 🔥 SOFT LIGHT BLOBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/6 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* CONTENT (UNCHANGED) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-20 lg:pt-30 pb-10 lg:pb-15 flex flex-col items-center text-center">

        {/* Heading */}
        <div className="mb-5 sm:mb-7">
          <h1 className="
            text-[30px] 
            sm:text-[42px] 
            lg:text-[56px] 
            xl:text-[72px] 
            2xl:text-[84px]
            font-semibold 
            text-white 
            leading-[1.15] 
            sm:leading-[1.1] 
            lg:leading-[1.05]
            tracking-[-0.02em] 
            lg:tracking-[-0.03em]
          ">
            AI-Powered Dynamic Travel
            <br />
            <span className="relative inline-block mt-1 sm:mt-2">

              <span className="absolute -inset-1 lg:-inset-2 blur-2xl lg:blur-3xl opacity-20"
                style={{
                  background:
                    'radial-gradient(ellipse at center, #ff7a5c 0%, #e2472b 50%, transparent 80%)',
                }}
              />

              <span
                className="relative bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(
                    135deg,
                    #c94030 0%,
                    #e2572b 25%,
                    #ff7a5c 50%,
                    #e2572b 75%,
                    #c94030 100%
                  )`,
                }}
              >
                Packaging & Booking Platform
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-[15px] sm:text-base lg:text-[20px] xl:text-[22px] text-white/55 mb-8 sm:mb-10 max-w-[720px] leading-relaxed">
          An AI Powered Dynamic Travel Packaging Platform For Your Business!
        </p>

        {/* Image */}
        <div className="relative w-full max-w-[880px] mx-auto mb-10">
          <div className="absolute -inset-4 bg-blue-500/[0.05] rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 bg-[#0d0f12]">
            <Image
              src="/landingpageeditpic.png"
              alt="Preview"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="bg-[#e2472b] text-white px-7 py-3 rounded-full"
            onClick={() => router.push('/schedule-demo')}
          >
            Join Us
          </button>

          <button
            className="border border-white/20 text-white px-7 py-3 rounded-full"
            onClick={() => router.push('/schedule-demo')}
          >
            Start free trial
          </button>
        </div>

      </div>
    </section>
  )
}