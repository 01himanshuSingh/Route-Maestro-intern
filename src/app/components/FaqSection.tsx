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
                  
                  <h1 className="text-[26px] lg:text-4xl font-bold text-slate-200 leading-tight tracking-tight">
                    Frequently Asked
                    <span
                      className="relative bg-clip-text text-transparent ml-2"
                      style={{
                        backgroundImage: `linear-gradient(
                          160deg,
                          #c94030 0%,
                          #e2572b 22%,
                          #f08070 36%,
                          #fde8e4 50%,
                          #f08070 64%,
                          #e2572b 78%,
                          #c94030 100%
                        )`,
                        filter: "drop-shadow(0 0 28px rgba(226,71,43,0.18))",
                      }}
                    >
                      Questions
                    </span>
                  </h1>

                  <p className="text-[15px] lg:text-[18px] text-slate-400 leading-relaxed max-w-md">
                    We're looking for people who share our vision! Most of our time used to be taken up by most of who created new websites for their businesses.
                  </p>
                </div>

                <div>
                  <button className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-[#ff7043] hover:bg-[#ff7043] hover:cursor-pointer text-white font-semibold text-[14px] lg:text-[15px] shadow-sm shadow-black/30 transition-all duration-300 hover:gap-3">
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