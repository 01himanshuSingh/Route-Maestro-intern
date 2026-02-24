import { cn } from "@/app/lib/util";
import { DemoHeader } from "./ScheduleDemoHeader";
import { TestimonialCard } from "./ScheduleDemoTestinomial";

interface ScheduleDemoContainerProps {
  className?: string;
}

export function ScheduleDemoContainer({ className }: ScheduleDemoContainerProps) {
  return ( 
    <div className={cn('w-full', className)}>
      {/* Header Section */}
      <div className="mb-16 md:mb-20">
        <DemoHeader />
      </div>

      {/* Content Section with Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Testimonial */}
        <div className="flex flex-col justify-start">
          <TestimonialCard />
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col justify-start">
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
