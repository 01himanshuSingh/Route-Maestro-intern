'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create animated background
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
        opacity: Math.random() * 0.5 + 0.2,
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
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'block' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-black to-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
               {/* Main heading */}
       <div className="mb-8 text-center">
  <h1 className="text-4xl  lg:text-[68px] font-bold text-white leading-tight">
    Digitize Your
    <br />
    Travel Infrastructure
    <br />
    <span className="inline-flex items-center justify-center relative mt-3">
      {/* Glow background */}
      <span className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-xl" />

      {/* Highlight text */}
      <span className="relative bg-white text-black px-6 py-2 rounded-xl text-2xl lg:text-4xl font-semibold">
        With RouteMaestro
      </span>
    </span>
  </h1>
</div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          An AI Powered Dynamic Travel Packaging & A Natural Workflow Booking Platform For Your Business!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group bg-[#e2472b] hover:bg-[#fe6652] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2">
            Join Us 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 bg-white/5 hover:bg-white/10">
            Start free trial
          </button>
        </div>

        {/* Avatar section */}
        {/* <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center border border-white/20">
            <span className="text-white text-sm font-bold">👤</span>
          </div>
          <p className="text-sm text-white/60">
            Trusted by travel agencies and tour operators to manage bookings, billing, and operations
          </p>
        </div> */}

       {/* Hero preview image */}
       <div className="relative mx-auto w-full max-w-[1200px]">

  
  {/* Glow background */}
  <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-3xl" />

  {/* Image container */}
  <div className="relative rounded-2xl  overflow-hidden">
    <Image
      src="/routemaestrolandingpic.png"   // put your image in public folder
      alt="RouteMaestro dashboard preview"
      width={1200}
      height={700}
      className="w-full h-auto object-cover"
      priority
    />
  </div>

</div>

      </div>
    </section>
  )
}
