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
       
        <h3 className="text-[18px] font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>

       
      </div>

      {/* Image bottom */}
      {imageSrc && (
        <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
          <Image
            src={imageSrc} // put your image in public folder
            alt="Product preview"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  )
}


