'use client';

import { SpeedTestResult } from '@/lib/speed-test';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ResultsCardProps {
  result: SpeedTestResult;
}

export function ResultsCard({ result }: ResultsCardProps) {
  const [copied, setCopied] = useState(false);

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  const handleCopyResults = async () => {
    const text = `Speed Test Results (${formatTimestamp(result.timestamp)})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ PING:     ${result.ping.toFixed(0)} ms
⬇️  DOWNLOAD: ${result.download.toFixed(2)} Mbps
⬆️  UPLOAD:   ${result.upload.toFixed(2)} Mbps

Tested on NetworkSpeedTest.network`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="border-3 border-neon-green bg-brutal-surface p-8 shadow-[8px_8px_0_#00FF88]">
      <div className="flex items-start justify-between mb-6">
        <h2 className="font-space font-bold text-2xl text-neon-green uppercase tracking-wider">
          Test Complete
        </h2>
        <button
          onClick={handleCopyResults}
          className="flex items-center gap-2 font-space text-sm uppercase tracking-wider text-neon-green hover:text-neon-green/80 transition-colors border-2 border-neon-green px-4 py-2"
          title="Copy results"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <div className="font-space text-xs uppercase tracking-wider text-neon-orange">
            Ping
          </div>
          <div className="font-jetbrains font-black text-5xl text-neon-orange">
            {result.ping.toFixed(0)}
          </div>
          <div className="font-ibm text-sm text-brutal-muted">milliseconds</div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-space text-xs uppercase tracking-wider text-neon-cyan">
            Download
          </div>
          <div className="font-jetbrains font-black text-5xl text-neon-cyan">
            {result.download.toFixed(2)}
          </div>
          <div className="font-ibm text-sm text-brutal-muted">Mbps</div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-space text-xs uppercase tracking-wider text-neon-green">
            Upload
          </div>
          <div className="font-jetbrains font-black text-5xl text-neon-green">
            {result.upload.toFixed(2)}
          </div>
          <div className="font-ibm text-sm text-brutal-muted">Mbps</div>
        </div>
      </div>

      <div className="border-t-2 border-brutal-border pt-4">
        <div className="font-ibm text-xs text-brutal-muted">
          Tested on {formatTimestamp(result.timestamp)}
        </div>
      </div>
    </div>
  );
}
