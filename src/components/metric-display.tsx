'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

interface MetricDisplayProps {
  label: string;
  value: number;
  unit: string;
  color: 'cyan' | 'green' | 'orange';
  isActive: boolean;
  progress?: number;
}

export function MetricDisplay({ 
  label, 
  value, 
  unit, 
  color, 
  isActive,
  progress = 0 
}: MetricDisplayProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (value === 0) {
      setDisplayValue(0);
      return;
    }

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Smooth count-up animation
    const duration = 500; // ms
    const steps = 30;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value, prefersReducedMotion]);

  const colorClasses = {
    cyan: {
      border: 'border-neon-cyan',
      text: 'text-neon-cyan',
      glow: 'shadow-[0_0_20px_rgba(0,217,255,0.5)]',
      bg: 'bg-neon-cyan/10',
    },
    green: {
      border: 'border-neon-green',
      text: 'text-neon-green',
      glow: 'shadow-[0_0_20px_rgba(0,255,136,0.5)]',
      bg: 'bg-neon-green/10',
    },
    orange: {
      border: 'border-neon-orange',
      text: 'text-neon-orange',
      glow: 'shadow-[0_0_20px_rgba(255,107,53,0.5)]',
      bg: 'bg-neon-orange/10',
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`
          relative border-3 transition-all duration-200
          ${isActive ? `${colors.border} ${colors.glow}` : 'border-brutal-border'}
          ${isActive ? colors.bg : 'bg-brutal-surface'}
          p-8
        `}
      >
        <div className="flex flex-col gap-2">
          <div className={`font-space text-sm uppercase tracking-wider ${isActive ? colors.text : 'text-brutal-muted'}`}>
            {label}
          </div>
          <div className={`font-jetbrains font-black text-6xl md:text-7xl lg:text-8xl tabular-nums ${isActive ? colors.text : 'text-brutal-text'}`}>
            {label === 'PING' 
              ? displayValue.toFixed(0) 
              : displayValue.toFixed(2)
            }
          </div>
          <div className={`font-ibm text-lg ${isActive ? colors.text : 'text-brutal-muted'}`}>
            {unit}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {isActive && progress > 0 && (
        <div className="relative h-2 bg-brutal-border overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full transition-all duration-300 ease-out ${colors.border.replace('border-', 'bg-')}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
