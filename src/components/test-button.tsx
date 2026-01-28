'use client';

import { TestPhase } from '@/lib/speed-test';

interface TestButtonProps {
  phase: TestPhase;
  onClick: () => void;
  disabled?: boolean;
}

export function TestButton({ phase, onClick, disabled }: TestButtonProps) {
  const isIdle = phase === 'idle';
  const isComplete = phase === 'complete';
  const isError = phase === 'error';
  const isTesting = !isIdle && !isComplete && !isError;

  const getButtonText = () => {
    switch (phase) {
      case 'idle':
        return 'START TEST';
      case 'connecting':
        return 'CONNECTING...';
      case 'ping':
        return 'TESTING PING...';
      case 'download':
        return 'TESTING DOWNLOAD...';
      case 'upload':
        return 'TESTING UPLOAD...';
      case 'complete':
        return 'TEST AGAIN';
      case 'error':
        return 'RETRY TEST';
      default:
        return 'START TEST';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isTesting}
      className={`
        relative w-full
        font-space font-black text-2xl md:text-3xl uppercase tracking-widest
        py-8 px-12
        border-3
        transition-all duration-100
        ${isTesting ? 'cursor-wait opacity-70' : 'cursor-pointer'}
        ${isIdle || isComplete || isError
          ? 'bg-neon-cyan border-neon-cyan text-brutal-bg hover:bg-neon-cyan/90 active:scale-[0.97]'
          : 'bg-transparent border-neon-cyan text-neon-cyan'
        }
        ${isTesting && 'animate-glow-pulse'}
        ${!isTesting && (isIdle || isComplete || isError) && 'shadow-[8px_8px_0_#00D9FF] hover:shadow-[6px_6px_0_#00D9FF] active:shadow-[2px_2px_0_#00D9FF]'}
        disabled:cursor-not-allowed disabled:opacity-50
      `}
    >
      {getButtonText()}
      
      {/* Loading dots animation */}
      {isTesting && (
        <span className="inline-flex ml-2">
          <span className="animate-pulse delay-0">.</span>
          <span className="animate-pulse delay-75">.</span>
          <span className="animate-pulse delay-150">.</span>
        </span>
      )}
    </button>
  );
}
