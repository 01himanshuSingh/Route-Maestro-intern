import { cn } from "@/app/lib/util";

interface HeaderProps {
  className?: string;
}

export function DemoHeader({ className }: HeaderProps) {
  return (
    <div className={cn('w-full space-y-4 lg:space-y-6 text-center', className)}>

      {/* Main Headline */}
      <h1 className="
  text-[26px] 
  leading-snug 
  tracking-tight 

  lg:text-[40px] 
  xl:text-[48px]

  3xl:text-[56px]
  4xl:text-[64px]
  5xl:text-[72px]

  font-bold 
  bg-gradient-to-r 
  from-slate-100 
  to-slate-300 
  bg-clip-text 
  text-transparent
">
  Schedule A Free Demo
</h1>

      {/* Subheading */}
      <p className="
  mx-auto w-full 

  text-[15px] 
  lg:text-[20px] 
  xl:text-[22px]

  3xl:text-[24px]
  4xl:text-[26px]

  text-slate-400 
  leading-relaxed 
  font-light
">
  Manage packages and pricing with RouteMaestro — the all-in-one platform . Book a free demo today.
</p>

    </div>
  );
}