'use client'

import { Button } from '@/components/ui/button'

export function FeatureScheduledemocard() {
  return (<>
  
    <div className="h-full flex  items-start justify-center p-4 md:p-6">
      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#0f1117] via-[#12151c] to-[#171a22]
          shadow-[0_0_40px_rgba(0,0,0,0.45)]
          p-6 md:p-7
          flex flex-col
          gap-6
        "
      >
        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-xl lg:text-[34px] font-bold text-white leading-tight">
            AI Powered Dynamic Packaging
          </h1>

          <p className="text-sm lg:text-[16px] text-slate-400 leading-relaxed">
            RouteMaestro enables quick map-based travel planning and helps agencies create{" "}
            <span className="text-white font-semibold">
              Personalized & Profitable
            </span>{" "}
            travel itineraries in minutes.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col  gap-3">
          <Button
            size="sm"
            className="
              bg-[#e2472b]
              hover:bg-[#e2472b]
              text-white
              text-[16px]
              font-semibold
              shadow-lg
              hover:shadow-[#e2472b]/30
                hover:cursor-pointer

              transition-all
              w-full
            "
          >
            Schedule A Demo
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="
                bg-white/10
              text-white
              text-[16px]
              w-full
              hover:cursor-pointer
            "
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  </>
  )
}