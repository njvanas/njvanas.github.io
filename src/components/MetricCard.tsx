import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  className?: string;
}

function MetricCard({ icon, value, label, description, trend, className = '' }: MetricCardProps) {
  const trendColors = {
    up: 'cyber-success',
    down: 'cyber-error',
    stable: 'cyber-text-muted'
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    stable: '→'
  };

  return (
    <div className={`metric-card ${className}`}>
      <div className="cyber-primary mb-4 flex justify-center">
        {icon}
      </div>
      <div className="metric-value flex items-center justify-center space-x-2">
        <span>{value}</span>
        {trend && (
          <span className={`text-sm ${trendColors[trend]}`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
      <div className="metric-label">{label}</div>
      {description && (
        <p className="text-xs cyber-text-muted mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export default MetricCard;