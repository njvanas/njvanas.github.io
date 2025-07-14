import React from 'react';

interface StatusIndicatorProps {
  status: 'available' | 'busy' | 'offline';
  showText?: boolean;
  className?: string;
}

function StatusIndicator({ status, showText = true, className = '' }: StatusIndicatorProps) {
  const statusConfig = {
    available: {
      color: 'bg-cyber-success',
      text: 'Available for new opportunities',
      icon: '●'
    },
    busy: {
      color: 'bg-cyber-warning',
      text: 'Currently engaged',
      icon: '●'
    },
    offline: {
      color: 'bg-cyber-text-muted',
      text: 'Offline',
      icon: '●'
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center space-x-2 glass px-4 py-2 rounded-full ${className}`}>
      <div className={`w-2 h-2 ${config.color} rounded-full animate-pulse`}></div>
      {showText && (
        <span className="text-sm cyber-text-muted font-medium">{config.text}</span>
      )}
    </div>
  );
}

export default StatusIndicator;