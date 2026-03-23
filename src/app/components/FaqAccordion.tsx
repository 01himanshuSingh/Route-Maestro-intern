'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How does RouteMaestro help travel agencies?',
    answer:
      'RouteMaestro helps travel agencies streamline operations by managing routes, packages, hotel inventory, and pricing from one centralized platform.',
  },
  {
    id: '2',
    question: 'Can RouteMaestro handle dynamic travel packages?',
    answer:
      'Yes. RouteMaestro allows agencies to create and update dynamic travel packages based on customer preferences.',
  },
  {
    id: '3',
    question: 'Is RouteMaestro suitable for growing travel businesses?',
    answer:
      'Absolutely. RouteMaestro is built for scalability for small and large agencies.',
  },
  {
    id: '4',
    question: 'Does RouteMaestro support real-time pricing?',
    answer:
      'Yes. The platform enables real-time updates for pricing, routes, and hotel availability.',
  },
];

export function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-2.5">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="
  border border-white/[0.08] 
  rounded-xl 
  bg-white/[0.02] 
  overflow-hidden 
  shadow-sm shadow-black/20 
  transition-all duration-300 

  hover:border-white/[0.15]

  lg:hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
             className="
  w-full px-4 py-3 
  lg:px-5 lg:py-4 
  flex items-center justify-between 
  hover:bg-white/[0.02] 
  transition-colors 
  text-left 
  gap-3

  lg:gap-4
"
            >
            <span
  className="
    text-[15px] 
    lg:text-[17px] 
    font-semibold 
    text-slate-300

    lg:text-slate-200
    lg:tracking-tight
    lg:leading-[1.4]
  "
>
  {item.question}
</span>

            <ChevronDown
  className={`
    w-5 h-5 
    text-slate-400 
    lg:text-slate-300
    transition-transform duration-300
    ${expandedId === item.id ? 'rotate-180' : ''}
  `}
/>
            </button>

            {expandedId === item.id && (
              <div className="px-4 py-3 lg:px-5 lg:py-4 border-t border-white/[0.05]">
               <p
  className="
    text-[14px] 
    text-slate-400 
    leading-relaxed

    lg:text-[15.5px] 
    lg:text-slate-300
    lg:leading-[1.75]
  "
>
  {item.answer}
</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}