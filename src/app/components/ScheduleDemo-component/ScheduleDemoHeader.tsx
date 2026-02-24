import { cn } from "@/app/lib/util";

interface HeaderProps {
  className?: string;
}

export function DemoHeader({ className }: HeaderProps) {
  return (
    <div className={cn('w-full space-y-6 text-center', className)}>
      {/* Request Demo Badge */}
      
      
      {/* Main Headline */}
      <h1 className="text-5xl  lg:text-[40px] font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
        Schedule a free demo
      </h1>
      
      {/* Subheading */}
    <p className="mx-auto max-w-5xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
  Manage packages, hotels, routes, and pricing effortlessly with Route Maestro — the all-in-one platform for modern travel agencies. Book a free demo today.
</p>
    </div>
  );
}
