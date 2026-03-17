import { cn } from "@/app/lib/util";

interface HeaderProps {
  className?: string;
}

export function DemoHeader({ className }: HeaderProps) {
  return (
    <div className={cn('w-full space-y-4 lg:space-y-6 text-center', className)}>

      {/* Main Headline */}
      <h1 className="text-[26px] leading-snug tracking-tight lg:text-[40px] font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent ">
        Schedule a free demo
      </h1>

      {/* Subheading */}
      <p className="mx-auto w-full text-[15px] lg:text-[18px] text-slate-400 leading-relaxed font-light">
        Manage packages and pricing with Route Maestro — the all-in-one platform for modern travel agencies. Book a free demo today.
      </p>

    </div>
  );
}