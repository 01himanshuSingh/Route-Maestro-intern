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
    answer: 'RouteMaestro helps travel agencies streamline operations by managing routes, packages, hotel inventory, and pricing from one centralized platform. It reduces manual work and improves operational efficiency.'
  },
  {
    id: '2',
    question: 'Can RouteMaestro handle dynamic travel packages?',
    answer: 'Yes. RouteMaestro allows agencies to create and update dynamic travel packages based on customer preferences, availability, and real-time pricing to maximize profitability.'
  },
  {
    id: '3',
    question: 'Is RouteMaestro suitable for growing travel businesses?',
    answer: 'Absolutely. RouteMaestro is built for scalability, allowing small and large travel agencies to manage increasing bookings, multiple destinations, and complex itineraries with ease.'
  },
  {
    id: '4',
    question: 'Does RouteMaestro support real-time pricing and updates?',
    answer: 'Yes. The platform enables real-time updates for pricing, routes, and hotel availability, helping agencies provide accurate and up-to-date travel options to their clients.'
  },
]

export function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-2.5">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-white/[0.08] rounded-xl bg-white/[0.02] overflow-hidden shadow-sm shadow-black/20 transition-all duration-300 hover:border-white/[0.15]"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
              className="w-full px-4 py-3 lg:px-5 lg:py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors text-left gap-3"
            >
              <span className="text-[15px] lg:text-[16px] font-semibold tracking-tight text-slate-300">
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 transition-transform duration-300 ${
                  expandedId === item.id ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </div>
            </button>

            {expandedId === item.id && (
              <div className="px-4 py-3 lg:px-5 lg:py-4 border-t border-white/[0.05]">
                <p className="text-[14px] lg:text-[15px] text-slate-400 leading-relaxed">
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