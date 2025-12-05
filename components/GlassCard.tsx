import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hideGloss?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, hideGloss = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-gradient-to-b from-white/[0.15] to-white/[0.05]
        backdrop-blur-2xl
        shadow-glass-thick
        rounded-[32px]
        p-5
        text-white
        transition-all duration-300
        hover:from-white/[0.20] hover:to-white/[0.10]
        hover:backdrop-brightness-125
        backdrop-saturate-150
        ${className}
      `}
    >
      {/* Glossy reflection effect - creates the "plastic" shine on the top half */}
      {!hideGloss && (
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none rounded-[inherit]" />
      )}
      {children}
    </div>
  );
};