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
    <div className="flex-shrink-0 w-[420px] rounded-2xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between gap-6 shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        <p className="text-zinc-300 leading-relaxed text-[15px]">
          {`\u201C${quote}\u201D`}
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-zinc-400">{title}</p>
      </div>
    </div>
  )
}
