'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getConnectionInfo } from '@/lib/speed-test';

export function TechnicalMetadata() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [connectionInfo, setConnectionInfo] = useState({
    ip: 'Loading...',
    isp: 'Loading...',
    location: 'Loading...',
  });

  useEffect(() => {
    getConnectionInfo().then(setConnectionInfo);
  }, []);

  return (
    <div className="border-2 border-brutal-border bg-brutal-surface">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 font-space text-sm uppercase tracking-wider text-brutal-text hover:text-neon-cyan transition-colors"
      >
        <span>Technical Details</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t-2 border-brutal-border p-6 space-y-6 font-ibm text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-brutal-muted mb-2 uppercase text-xs tracking-wider">
                Your IP Address
              </div>
              <div className="text-brutal-text font-medium">{connectionInfo.ip}</div>
            </div>

            <div>
              <div className="text-brutal-muted mb-2 uppercase text-xs tracking-wider">
                Location
              </div>
              <div className="text-brutal-text font-medium">{connectionInfo.location}</div>
            </div>

            <div>
              <div className="text-brutal-muted mb-2 uppercase text-xs tracking-wider">
                ISP
              </div>
              <div className="text-brutal-text font-medium">{connectionInfo.isp}</div>
            </div>
          </div>

          <div className="border-t-2 border-brutal-border pt-6">
            <div className="text-brutal-muted mb-3 uppercase text-xs tracking-wider font-space">
              Test Methodology
            </div>
            <div className="space-y-3 text-brutal-text leading-relaxed">
              <p>
                <strong className="text-neon-orange">Ping:</strong> Measures latency by sending
                multiple HTTP HEAD requests to test servers and calculating the median response time.
              </p>
              <p>
                <strong className="text-neon-cyan">Download:</strong> Transfers data from CDN
                servers in increasing file sizes, measuring throughput in real-time to determine
                maximum sustainable download speed.
              </p>
              <p>
                <strong className="text-neon-green">Upload:</strong> Sends data chunks to test
                servers using POST requests, measuring the rate at which data can be transmitted
                from your device.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-brutal-border pt-6">
            <div className="text-brutal-muted mb-3 uppercase text-xs tracking-wider font-space">
              About This Tool
            </div>
            <div className="space-y-2 text-brutal-text leading-relaxed">
              <p>
                This speed test runs entirely in your browser with no backend dependencies. All
                measurements are performed client-side using the Fetch API and performance timing
                APIs.
              </p>
              <p>
                Results may vary based on network congestion, server load, browser capabilities,
                and other factors. For best results, close bandwidth-intensive applications during
                testing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
