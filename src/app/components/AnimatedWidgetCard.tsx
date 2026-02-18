'use client';

import React, { useEffect, useRef } from 'react';

interface CardItem {
  icon: React.ReactNode;
  label: string;
}

interface CardRowProps {
  items: CardItem[];
  direction: 'left-to-right' | 'right-to-left';
}

const AnimatedCardRow: React.FC<CardRowProps> = ({ items, direction }) => {
  const animationClass =
    direction === 'left-to-right'
      ? 'animate-marquee-left'
      : 'animate-marquee-right';

  return (
    <div className="relative overflow-hidden py-4 px-4">
      <div
        className={`flex gap-4 w-max ${animationClass}`}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full border border-accent/40 bg-secondary/30 hover:bg-secondary/50 hover:border-accent/70 transition-all duration-300 cursor-pointer"
          >
            {/* <div className="text-accent text-xl flex-shrink-0">
              {item.icon}
            </div> */}
            <span className="text-[#b9b9bf] font-medium text-sm lg:text-[14px] whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


export interface AnimatedCardsProps {
  title?: string;
  rows: Array<{
    items: CardItem[];
    direction: 'left-to-right' | 'right-to-left';
  }>;
}

export const AnimatedWidgetCard: React.FC<AnimatedCardsProps> = ({
  title = '100+ Pro Elements and Widgets',
  rows,
}) => {
  return (
    <div className="w-full min-h-screen  py-10">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h1 className="text-4xl lg:text-[24px] font-bold text-center text-white mb-12">
            {title}
          </h1>
        )}

        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <AnimatedCardRow
              key={rowIndex}
              items={row.items}
              direction={row.direction}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};
