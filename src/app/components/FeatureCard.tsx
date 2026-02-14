import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/10 
      bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24] 
      p-8 transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full  ">
        {icon}
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        {description && (
          <p className="text-sm text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>

    </div>
  )
}
