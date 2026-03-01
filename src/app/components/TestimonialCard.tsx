import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  rating?: number
}

export function TestimonialCard({
  quote,
  name,
  title,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div
      className="
        flex-shrink-0
        w-[300px]  lg:w-[420px]
        rounded-2xl
        bg-zinc-900/90
        border border-zinc-800
        p-5 sm:p-6 lg:p-8
        flex flex-col justify-between gap-5
        shadow-lg
        backdrop-blur-sm
      "
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        <p className="text-zinc-300 leading-relaxed text-sm sm:text-[15px]">
          {`\u201C${quote}\u201D`}
        </p>
      </div>

      <div>
        <p className="font-semibold text-white text-sm sm:text-base">
          {name}
        </p>
        <p className="text-xs sm:text-sm text-zinc-400">
          {title}
        </p>
      </div>
    </div>
  )
}