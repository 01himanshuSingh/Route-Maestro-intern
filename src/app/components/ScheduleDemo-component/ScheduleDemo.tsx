'use client';

import { useEffect } from 'react';
import { ScheduleDemoContainer } from './ScheduleDemoContainer';

export default function ScheduleDemo() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    // <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      <main className="min-h-screen bg-black">
      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <ScheduleDemoContainer />
      </div>
    </main>
  );
}
