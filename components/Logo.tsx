import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Right Part - Industrial Hook Shape - Neon Lime */}
      <path d="M30 15 H85 V48 H56 L46 38 H30 V15Z" fill="#CCFF00" />
      
      {/* Bottom Left Part - Industrial Hook Shape - Darker Green/Black */}
      <path d="M70 85 H15 V52 H44 L54 62 H70 V85Z" fill="#4D6600" />
    </svg>
  );
};