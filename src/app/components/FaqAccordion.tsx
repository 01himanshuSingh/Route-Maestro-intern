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
    question: 'Do I need to know about how to code?',
    answer: 'Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use this platform effectively.',
  },
  {
    id: '2',
    question: 'Can I use it for commercial projects?',
    answer: 'Yes, absolutely. This product is licensed for commercial use. You can use it for any commercial project without additional fees.',
  },
  {
    id: '3',
    question: 'Can I use it for multiple projects?',
    answer: 'Yes, you can use this for as many projects as you want. There are no limitations on the number of projects you can create.',
  },
  {
    id: '4',
    question: 'Can I use this to create and sell a product?',
    answer: 'Yes, you can create products and sell them. The license allows for commercial resale of products built with this platform.',
  },
  {
    id: '5',
    question: 'What kind of support is available?',
    answer: 'We offer comprehensive documentation, email support, and a community forum where you can get help from other users and our support team.',
  },
];

export function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-3">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-border rounded-lg bg-card/50 overflow-hidden transition-all duration-300 hover:border-slate-50"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
            >
              <span className="text-lg font-semibold text-slate/300">
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 transition-transform duration-300 ${
                  expandedId === item.id ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="w-6 h-6 text-accent" />
              </div>
            </button>

            {expandedId === item.id && (
              <div className="px-6 py-4 bg-muted/20 border-t border-border">
                <p className="text-[#b9b9bf] leading-relaxed">
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
