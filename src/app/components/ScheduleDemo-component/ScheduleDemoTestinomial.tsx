import { cn } from "@/app/lib/util";

interface TestimonialCardProps {
  className?: string;
}

export function TestimonialCard({ className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className="
          rounded-2xl
          bg-gradient-to-br from-[#111318] via-[#16181d] to-[#1b1e24]
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.4)]
          p-8
          hover:border-slate-600/50
          transition-all duration-300
          space-y-8
        "
      >
        {/* Top Section - Testimonial */}
        <blockquote className="space-y-4">
    

          <p className="text-[15px] leading-relaxed text-slate-200 font-normal">
            Route Maestro has completely streamlined how we manage travel operations.
            From packages and hotel updates to route planning and pricing, everything
            feels faster, smarter, and easier for our team.
          </p>
        </blockquote>

       

        {/* Bottom Section - Feature Highlight */}
        <div className="border-t border-slate-700/50 pt-6">
          <p className="text-[15px] leading-relaxed text-slate-300 font-light">
            Route Maestro is more than a travel management platform — it’s a complete
            operational hub. Manage packages, hotel inventory, route planning, pricing,
            and agency workflows from one powerful system built for modern travel businesses.
          </p>
        </div>
         <div className="space-y-3 border-t border-slate-700/50 pt-6">
          <p className="font-semibold text-[14px] text-slate-100">
            Jerome Bell
          </p>
          <p className="text-[13px] text-slate-400">
            HR Executive • PayUp
          </p>
        </div>
      </div>
    </div>
  );
}