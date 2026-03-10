'use client'
import { useRouter } from "next/navigation"

export default function FeatureHero() {
  const router = useRouter()

  return (
    <section className="
      w-full 
      flex flex-col 
      items-center lg:items-start 
      justify-center 
      px-4 sm:px-6 lg:px-12 
      py-12 lg:py-10  lg:mt-10 mt-2
      text-center lg:text-left
    ">
      <div className="max-w-2xl">

        {/* Heading */}
        <h1 className="
          text-3xl sm:text-4xl lg:text-5xl 
          font-bold 
          text-slate-100 
          mb-6 
          leading-tight
        ">
          AI Powered Dynamic Packaging
        </h1>

        {/* Description */}
        <p className="
          text-base sm:text-lg 
          text-slate-400 
          mb-10 lg:mb-12 
          leading-relaxed
        ">
          <span className="font-semibold text-white">RouteMaestro</span> enables quick map based travel planning, and facilitates booking{" "}
          <span className="font-semibold text-white">
            Personalized & Profitable
          </span>{" "}
          travel itineraries within a few minutes!
        </p>

        {/* Buttons */}
        <div className="
          flex flex-col sm:flex-row 
          gap-4 
          w-full sm:w-auto 
          items-center lg:items-start
        ">

          {/* Primary Button */}
          <button
            onClick={() => router.push('/schedule-demo')}
            className="
              w-full sm:w-auto
              px-8 py-3 
              bg-[#e2472f] 
              hover:bg-[#fe6652] 
              text-slate-100 
              font-semibold 
              rounded-lg 
              transition-all duration-300 
              shadow-md hover:shadow-xl
            "
          >
            Schedule A Demo
          </button>

          {/* Secondary Button */}
          <button
            className="
              w-full sm:w-auto
              px-8 py-3 
              border-2 border-white/20 
              text-white 
              font-semibold 
              rounded-lg 
              hover:bg-white/5 
              hover:border-white/40
              transition-all duration-300
            "
          >
            Start Free Trial
          </button>

        </div>
      </div>
    </section>
  )
}