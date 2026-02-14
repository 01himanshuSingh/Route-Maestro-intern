'use client';

import { AnimatedWidgetCard } from "./AnimatedWidgetCard";

// Icon components (simple SVG-based icons)
const DividerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const SpacerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" />
  </svg>
);

const SectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="5" width="14" height="14" rx="1" />
  </svg>
);

const ColumnIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="8" height="18" />
    <rect x="13" y="3" width="8" height="18" />
  </svg>
);

const BlogIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h10M7 12h10M7 17h5" />
  </svg>
);

const PortfolioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
  </svg>
);

const TextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18M3 12h18M3 18h10" />
  </svg>
);

const PopupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
  </svg>
);

const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="3" y2="20" />
    <line x1="9" y1="6" x2="9" y2="20" />
    <line x1="15" y1="2" x2="15" y2="20" />
    <line x1="21" y1="8" x2="21" y2="20" />
  </svg>
);

export default function LandingPageWidget() {
  const rows = [
    {
      direction: 'left-to-right' as const,
      items: [
        { icon: <DividerIcon />, label: 'hotels' },
        { icon: <SpacerIcon />, label: 'Bookings' },
        { icon: <SectionIcon />, label: 'Flights' },
        { icon: <ColumnIcon />, label: 'Transfers' },
        { icon: <ChartIcon />, label: 'Sightseeing & Activities' },
      ],
    },
    {
      direction: 'right-to-left' as const,
      items: [
        { icon: <DividerIcon />, label: 'hotels' },
        { icon: <ChartIcon />, label: 'Sightseeing & Activities' },
        { icon: <SectionIcon />, label: 'Flights' },
        { icon: <ColumnIcon />, label: 'Transfers' },
        { icon: <SpacerIcon />, label: 'Bookings' },
      ],
    },
    
  ];

  return (
    <div className="">
      <AnimatedWidgetCard
        title="AI-Powered Tools for Seamless Travel Operations"
        rows={rows}
      />
    </div>
  );
}
