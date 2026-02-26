'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  
  imageSrc?: string
}

export function HeroFeature({
  icon,
  title,
  description,
  
  imageSrc,
}: FeatureCardProps) {
  return (
  <div className="relative max-w-3xl w-full rounded-2xl 
bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24] 
border border-white/10 
shadow-[0_0_40px_rgba(0,0,0,0.4)]
p-6  overflow-hidden">



      {/* Top content */}
      <div className="space-y-4 max-w-2lg">
       
        <h3 className="text-[20px] font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="text-slate-300 text-[16px] leading-relaxed">
          {description}
        </p>

       
      </div>

      {/* Image bottom */}
     <div className="mt-5 relative h-[200px] md:h-[440px] rounded-xl overflow-hidden border border-white/10">
  <img
    src={imageSrc}
    alt="Product preview"
    
    className="object-contain"
  />
</div>
    </div>
  )
}


