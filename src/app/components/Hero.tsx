'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * ─── CUSTOM BREAKPOINTS (add to tailwind.config.ts → theme.screens) ──────────
 *
 *   '3xl': '1600px',
 *   '4xl': '1920px',
 *   '5xl': '2560px',
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

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

    // ✅ CHANGE: More particles on large screens for visual density
    const count = window.innerWidth >= 2560 ? 120 : window.innerWidth >= 1920 ? 80 : 50

    for (let i = 0; i < count; i++) {
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

      {/* ✅ CHANGE: Richer gradient with extra depth layer for large screens */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/40 via-black/90 to-black" />
      {/* ✅ ADD: Vignette ring for large screens — keeps content from floating */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,black_100%)] 3xl:opacity-80 opacity-0 pointer-events-none" />

      {/* ✅ CHANGE: Scaled-up blob sizes for 4K/5K screens */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        w-[700px] h-[400px]
        3xl:w-[1000px] 3xl:h-[550px]
        4xl:w-[1300px] 4xl:h-[650px]
        5xl:w-[1800px] 5xl:h-[800px]
        bg-blue-500/6 rounded-full
        blur-[120px] 3xl:blur-[160px] 4xl:blur-[200px]
      " />
      <div className="absolute top-0 right-0
        w-72 h-72 3xl:w-96 3xl:h-96 4xl:w-[500px] 4xl:h-[500px]
        bg-blue-400/5 rounded-full
        blur-3xl 4xl:blur-[80px]
      " />
      <div className="absolute bottom-0 left-0
        w-72 h-72 3xl:w-96 3xl:h-96 4xl:w-[500px] 4xl:h-[500px]
        bg-blue-500/3 rounded-full
        blur-3xl 4xl:blur-[80px]
      " />
      {/* ✅ ADD: Extra ambient glow for ultra-wide — subtle warm accent */}
      <div className="absolute bottom-1/4 right-1/4
        opacity-0 3xl:opacity-100
        w-[600px] h-[300px]
        bg-red-500/[0.025] rounded-full blur-[100px]
        pointer-events-none
      " />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* ✅ CHANGE: Container scales wider at each breakpoint */}
      <div className="relative z-10 w-full
        max-w-5xl
        3xl:max-w-7xl
        4xl:max-w-[1600px]
        5xl:max-w-[2000px]
        mx-auto
        px-5 sm:px-6 3xl:px-12 4xl:px-16 5xl:px-20
        pt-20 lg:pt-30 3xl:pt-40 4xl:pt-48 5xl:pt-56
        pb-10 lg:pb-15 3xl:pb-24 4xl:pb-32 5xl:pb-40
        flex flex-col items-center text-center
      ">

        {/* ✅ CHANGE: Heading container with fluid margin for large screens */}
        <div className="mb-5 sm:mb-7 3xl:mb-10 4xl:mb-14">
          <h1
            className="
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
              3xl:leading-[1.04]
              tracking-[-0.02em]
              lg:tracking-[-0.03em]
              3xl:tracking-[-0.035em]
            "
           
          >
            {/* ✅ NOTE: The inline style above is overridden by Tailwind on mobile/tablet/laptop
                via specificity — clamp only visibly takes effect at 3xl+ (1600px+).
                At 2xl (84px Tailwind) → clamp starts at 84px min, so no regression. */}
            Sell AI Generated End To End  
            <br />
            <span className="relative inline-block mt-1 sm:mt-2 3xl:mt-3">

              <span className="absolute -inset-1 lg:-inset-2 3xl:-inset-4 blur-2xl lg:blur-3xl 3xl:blur-[60px] opacity-20"
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
            Travel    Packages In Minutes!
              </span>
            </span>
          </h1>
        </div>

        {/* ✅ CHANGE: Paragraph scales max-width and font at large breakpoints */}
        <p
          className="
            text-[15px] sm:text-base lg:text-[20px] xl:text-[22px]
            3xl:text-[24px] 4xl:text-[26px]
            
  text-slate-400 
            mb-8 sm:mb-10 3xl:mb-14 4xl:mb-16
            max-w-[420px] sm:max-w-[600px] lg:max-w-[720px]
            3xl:max-w-[860px] 4xl:max-w-[1000px]
            leading-relaxed 3xl:leading-[1.7]
            tracking-wide

  lg:text-slate-300 
          "
         >
        Automate multicity travel routing, itineraries, pricing, and customization — create and sell complete, ready-to-book travel packages within 2 minutes!
        </p>

        {/* ✅ CHANGE: Hero image container grows proportionally on large screens */}
        <div className="relative w-full
          max-w-[880px]
          3xl:max-w-[1200px]
          4xl:max-w-[1500px]
          5xl:max-w-[1800px]
          mx-auto
          mb-10 3xl:mb-14 4xl:mb-16
        ">
          {/* ✅ CHANGE: Glow halo scales with image on large screens */}
          <div className="absolute -inset-4 3xl:-inset-6 4xl:-inset-8 bg-blue-500/[0.05] rounded-3xl blur-2xl 3xl:blur-3xl" />

          {/* ✅ ADD: Premium rim-light border for ultra-wide — ultra-subtle white edge */}
          <div className="
            relative rounded-2xl overflow-hidden
            shadow-2xl shadow-black/60
            3xl:shadow-[0_32px_80px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04)]
            4xl:shadow-[0_48px_120px_-16px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)]
            bg-[#0d0f12]
          ">
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

            {/* ✅ ADD: Inset bottom shadow — makes image feel grounded, premium */}
            <div className="absolute inset-x-0 bottom-0 h-24 3xl:h-32
              bg-gradient-to-t from-black/30 to-transparent pointer-events-none
            " />
          </div>
        </div>

        {/* ✅ CHANGE: Button group gets larger gap and bigger buttons on wide screens */}
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center
            gap-4 sm:gap-3 3xl:gap-4
            w-full sm:w-auto
            px-2 sm:px-0
          "
          style={{ animation: 'fadeSlideUp 0.7s ease-out 0.5s both' }}
        >
          <button
            className="
              group relative overflow-hidden
              bg-[#e2472b] hover:bg-[#fe6652]
              text-white text-sm lg:text-[18px] 3xl:text-[20px] font-semibold
              px-7 py-3.5 sm:py-3 3xl:px-9 3xl:py-4 rounded-full
              flex items-center gap-2
              w-full sm:w-auto justify-center
              shadow-lg shadow-red-500/20
              hover:shadow-red-500/35 hover:shadow-xl
              3xl:shadow-[0_8px_32px_-4px_rgba(226,71,43,0.35)]
              3xl:hover:shadow-[0_12px_48px_-4px_rgba(226,71,43,0.5)]
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
              text-sm lg:text-[18px] 3xl:text-[20px] font-semibold
              px-7 py-3.5 sm:py-3 3xl:px-9 3xl:py-4 rounded-full
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
    </section>
  )
}