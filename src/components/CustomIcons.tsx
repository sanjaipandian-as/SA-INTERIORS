import React from 'react';

export const SpacePlanningIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="10" width="48" height="30" rx="1" />
    <path d="M24 10v30M40 10v18M24 28h16M40 20h16M8 20h16" />
    <path d="M30 18v10M32 18h-4" />
    <circle cx="16" cy="15" r="1.5" />
    {/* Pencil at bottom */}
    <path d="M10 48h30l8-3-8-3H10v6z" />
    <path d="M40 42v6M45 45l3-2" />
  </svg>
);

export const DesignConsultationIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="12" y="10" width="40" height="44" rx="1" />
    <path d="M22 10v44M32 10v44M42 10v44" />
    {/* Knots and grain */}
    <path d="M17 14c-2 6 2 14 0 20s-2 14 0 20" />
    <path d="M27 12c3 8-3 16 0 24s3 12 0 16" />
    <path d="M37 14c-2 6 2 14 0 20s-2 14 0 20" />
    <path d="M47 12c2 8-2 16 0 24s2 12 0 16" />
    <circle cx="27" cy="24" r="1.5" />
    <circle cx="37" cy="40" r="1.5" />
    <circle cx="17" cy="44" r="1.5" />
  </svg>
);

export const LightingDesignIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* 3 hanging lights */}
    <path d="M20 6v14M32 6v14M44 6v14" />
    <path d="M16 20l3 8h6l3-8h-12z" />
    <path d="M28 20l3 8h6l3-8h-12z" />
    <path d="M40 20l3 8h6l3-8h-12z" />
    {/* Table */}
    <rect x="10" y="40" width="44" height="4" />
    <path d="M14 44v14M50 44v14" />
    {/* Stools */}
    <path d="M22 44v10M32 44v10M42 44v10" />
    <path d="M20 48h4M30 48h4M40 48h4" />
    {/* Plant/decor on table */}
    <path d="M14 40l-2-6h6l-2 6" />
    <path d="M15 34l2-4M17 34l4-4" />
  </svg>
);

export const CustomFurnitureIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 26c0-6 6-8 18-8s18 2 18 8v10" />
    <rect x="8" y="32" width="10" height="14" rx="3" />
    <rect x="46" y="32" width="10" height="14" rx="3" />
    <rect x="18" y="36" width="28" height="6" />
    <rect x="12" y="42" width="40" height="6" />
    <path d="M16 48v4M48 48v4" />
    <circle cx="13" cy="36" r="1.5" />
    <circle cx="51" cy="36" r="1.5" />
    <path d="M24 18v18M40 18v18" />
  </svg>
);

export const ArtAccessoryIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Object left (Polygon) */}
    <path d="M8 44l8-8 16 2-4 8-16 4-4-6z" />
    <path d="M8 44l16 4" />
    <path d="M24 48l8-10" />
    {/* Vase right */}
    <path d="M34 48l3-14h10l3 14-4 6h-8l-4-6z" />
    <path d="M37 34h10" />
    {/* Branches */}
    <path d="M38 34c-2-8-10-14-10-18" />
    <path d="M42 34c2-10 12-14 12-18" />
    <path d="M40 34c0-6 4-12 4-16" />
    <path d="M34 22c2-2 4 0 4 2" />
    <path d="M48 24c-2-2-4 0-4 2" />
  </svg>
);

export const ColorConsultationIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <g transform="translate(14,52)">
      {/* 5 blades of swatch book */}
      <g transform="rotate(10)"><rect x="-5" y="-40" width="10" height="40" rx="2" /><line x1="-5" y1="-28" x2="5" y2="-28" /><line x1="-5" y1="-16" x2="5" y2="-16" /></g>
      <g transform="rotate(30)"><rect x="-5" y="-40" width="10" height="40" rx="2" /><line x1="-5" y1="-28" x2="5" y2="-28" /><line x1="-5" y1="-16" x2="5" y2="-16" /></g>
      <g transform="rotate(50)"><rect x="-5" y="-40" width="10" height="40" rx="2" /><line x1="-5" y1="-28" x2="5" y2="-28" /><line x1="-5" y1="-16" x2="5" y2="-16" /></g>
      <g transform="rotate(70)"><rect x="-5" y="-40" width="10" height="40" rx="2" /><line x1="-5" y1="-28" x2="5" y2="-28" /><line x1="-5" y1="-16" x2="5" y2="-16" /></g>
      <g transform="rotate(90)"><rect x="-5" y="-40" width="10" height="40" rx="2" /><line x1="-5" y1="-28" x2="5" y2="-28" /><line x1="-5" y1="-16" x2="5" y2="-16" /></g>
      <circle cx="0" cy="-4" r="2" />
    </g>
  </svg>
);

export const ProjectManagementIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 36l26-26 8 8-26 26-8-8z" />
    <path d="M14 32l4 4M18 28l2 2M22 24l4 4M26 20l2 2M30 16l4 4" />
    <path d="M26 48l24-24 4 4-24 24-8 2 4-6z" />
    <path d="M30 44l4 4" />
    <path d="M44 40l6-6c2-2 6-2 8 0s2 6 0 8l-10 10c-3 3-8 3-11 0s-3-8 0-11l8-8" />
  </svg>
);

export const StylingStagingIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="12" y="30" width="40" height="24" rx="1" />
    <path d="M12 42h40M32 30v24" />
    <rect x="16" y="34" width="12" height="4" />
    <rect x="36" y="34" width="12" height="4" />
    <rect x="16" y="46" width="12" height="4" />
    <rect x="36" y="46" width="12" height="4" />
    <path d="M16 54v4M48 54v4" />
    <path d="M38 30v-8h10v8" />
    <path d="M38 26h10M38 22h10" />
    <path d="M42 22l-2-6M44 22l4-8" />
    <path d="M18 30l-2-8h6l-2 8" />
    <path d="M19 22c-2-6-6-10-10-12" />
    <path d="M19 22c0-6 4-10 8-10" />
    <path d="M19 22v-8" />
  </svg>
);

export const TalkToDesignerIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 40h24l4 12H16l4-12z" />
    <path d="M24 40v8M40 40v8" />
    <circle cx="32" cy="18" r="4" />
    <path d="M26 30c0-4 4-6 6-6s6 2 6 6v10H26V30z" />
    <rect x="28" y="34" width="8" height="6" rx="1" />
    <circle cx="18" cy="22" r="3" />
    <path d="M14 34c0-3 2-5 4-5s4 2 4 5v6h-6v-6z" />
    <circle cx="46" cy="22" r="3" />
    <path d="M42 34c0-3 2-5 4-5s4 2 4 5v6h-6v-6z" />
  </svg>
);

export const DetailedDrawingIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 48l4-32h24l4 32H16z" />
    <path d="M24 24h12M22 30h10M20 36h6" />
    <path d="M38 32h10v6H38z" />
    <path d="M41 32v-8c0-2 2-4 2-4s2 2 2 4v8" />
    <path d="M43 20c2 0 4-2 4-4s-2-4-4-4-4 2-4 4 2 4 4 4z" />
    <circle cx="28" cy="40" r="5" />
    <path d="M25 40l2 2 4-4" />
  </svg>
);

export const ProductionFactoryIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M36 48h16M44 48V20h12v28" />
    <path d="M44 26H34v10h10" />
    <path d="M38 36v6" />
    <circle cx="24" cy="24" r="3" />
    <path d="M24 27l2 8-4 10" />
    <path d="M26 35l4 10" />
    <path d="M24 30h8M32 30v6" />
    <path d="M16 38h20M16 40h20" />
    <circle cx="48" cy="22" r="1.5" />
    <path d="M44 32h4" />
  </svg>
);

export const MaterialDeliveryIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 24h20v20H20z" />
    <path d="M40 32h8l4 4v8h-12" />
    <path d="M48 36h-4" />
    <circle cx="28" cy="44" r="4" />
    <circle cx="44" cy="44" r="4" />
    <path d="M14 28h-6M16 34H8M14 40h-4" />
    <path d="M44 32v4" />
  </svg>
);

export const OnTimeHandoverIcon = ({ size = 36, className = "", strokeWidth = 1.2 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 24h8l4 4h12l4-2-2-4-8-2-4-2H16" />
    <path d="M36 28v-4" />
    <circle cx="40" cy="24" r="3" />
    <path d="M40 27v10M40 35h4M40 31h2" />
    <path d="M48 44h-8l-4-4H24l-4 2 2 4 8 2 4 2h14" />
    <path d="M28 40v4" />
  </svg>
);

export const JourneyArrow = ({ size = 24, className = "", strokeWidth = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
    <path d="M0 10h38M30 2l8 8-8 8" />
  </svg>
);
