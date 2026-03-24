'use client'
import { ArrowRight } from 'lucide-react';
import { FAQAccordion } from './FaqAccordion';

export default function FaqSection() {
  return (
    <main className="h-auto bg-black">
      <div className="dark">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

              {/* Left Column */}
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-3">
                  <h1
  className="
    text-[26px] 
    lg:text-[44px] 
    font-bold 
    text-slate-200 
    leading-tight 
    tracking-tight

    lg:leading-[1.2] 
    lg:font-semibold
  "
>
                    Frequently Asked
                 <span
  className="
    relative bg-clip-text text-transparent ml-2
    lg:font-semibold
  "
  style={{
    backgroundImage: `linear-gradient(
       135deg,
                    #c94030 0%,
                    #e2572b 25%,
                    #ff7a5c 50%,
                    #e2572b 75%,
                    #c94030 100%

    )`,
    filter: "drop-shadow(0 6px 24px rgba(255,120,80,0.25))",
  }}
>
  Questions
</span>
                  </h1>

                 <p
  className="
    text-[15px] 
    text-slate-400 
    leading-relaxed 
    max-w-md

    lg:text-[18px] 
    lg:leading-[1.8] 
    lg:text-slate-300
  "
>
                    We're looking for people who share our vision! Most of our time used to be taken up by most of who created new websites for their businesses.
                  </p>
                </div>

                <div>
             <button
  onClick={() => {
    window.location.href = "mailto:anmol@ascentialabs.com"
  }}
  className="
    group inline-flex items-center gap-2.5 
    px-5 py-2.5 
    rounded-xl 

    bg-white/[0.03] 
    border border-[#ff7043] 

    text-white 
    font-medium 
    text-[14px] 
    lg:text-[15px] 
    lg:tracking-[0.3px]

    shadow-sm shadow-black/30 

    transition-all duration-300 
    hover:bg-gradient-to-r 
    hover:from-[#e2472b] 
    hover:to-[#ff6a3d] 
    hover:gap-3
  "
>
  Still have a question?
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</button>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:pl-3">
                <FAQAccordion />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}