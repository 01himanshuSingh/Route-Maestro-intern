'use client'

import { TrendingUp } from 'lucide-react'
import Image from 'next/image'



interface DashboardCardProps {
  title: string
  description: string
  chartImage?: string
  
}

export function HeroFeature2({
  title,
  description,
  chartImage,
  
}: DashboardCardProps) {
  return (
<div className="
rounded-2xl
bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
border border-teal-400/20
p-4
flex flex-col
overflow-hidden
">



      {/* Chart upper center */}
      {chartImage && (
      <div className="relative h-[180px] md:h-[460px] rounded-xl overflow-hidden border border-white/20 mb-4">
  <Image
    src={chartImage}
    alt="Analytics chart"
    fill
    className="object-contain"
  />
</div>
      )}

      {/* Metric text */}
      <div className="space-y-2">

            <h3 className="text-[20px] font-semibold text-white leading-snug">
          {title}
        </h3>
       <p className="text-slate-300 text-[16px] leading-relaxed line-clamp-4">
 {description}</p>

             </div>

    
    </div>
  )
}
