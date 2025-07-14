import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg flex items-center justify-center font-mono font-bold text-cyber-dark group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 animate-pulse"></div>
        <Shield className="w-1/2 h-1/2 relative z-10" />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <div className={`${textSizeClasses[size]} font-bold cyber-text`}>NJ van As</div>
          <div className="text-xs cyber-text-muted font-mono">Cybersecurity Specialist</div>
        </div>
      )}
    </div>
  );
}

export default Logo;