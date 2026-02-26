
import { ArrowRight } from 'lucide-react';
import { FAQAccordion } from './FaqAccordion';

export default function FaqSection() {
  return (
    <main className="h-auto bg-black">
      {/* Dark mode enforcement */}
      <div className="dark">
        <div className=" to-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 lg:pt-20 lg:pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full border border-border text-xs font-semibold text-accent/80 bg-accent/5">
                    + FAQS
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl text-[#ff7043] font-bold text-slate/80 leading-tight">
                    Frequently Asked
                    <span className="text-slate/100"> Questions</span>
                  </h1>
                  <p className="text-base md:text-lg text-[#b9b9bf] leading-relaxed">
                    We're looking for people who share our vision! Most of our time used to be taken up by most of who created new websites for their businesses.
                  </p>
                </div>

                <div>
                  <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#e2472b] hover:bg-[#ff7043] hover:cursor-pointer text-accent-foreground font-semibold transition-all duration-300 hover:gap-4">
                    Still have a question?
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="md:pl-4">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
