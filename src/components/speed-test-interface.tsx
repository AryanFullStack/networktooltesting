'use client';

import { useState } from 'react';
import { TestPhase, SpeedTestResult, runSpeedTest } from '@/lib/speed-test';
import { MetricDisplay } from './metric-display';
import { TestButton } from './test-button';
import { ResultsCard } from './results-card';
import { TechnicalMetadata } from './technical-metadata';

export function SpeedTestInterface() {
  const [phase, setPhase] = useState<TestPhase>('idle');
  const [ping, setPing] = useState(0);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);
  const [result, setResult] = useState<SpeedTestResult | null>(null);
  const [progress, setProgress] = useState(0);

  const handleStartTest = async () => {
    // Reset state
    setPing(0);
    setDownload(0);
    setUpload(0);
    setResult(null);
    setProgress(0);

    try {
      const testResult = await runSpeedTest((progressUpdate) => {
        setPhase(progressUpdate.phase);
        setProgress(progressUpdate.progress);

        // Update current values
        if (progressUpdate.currentValue !== undefined) {
          switch (progressUpdate.phase) {
            case 'ping':
              setPing(progressUpdate.currentValue);
              break;
            case 'download':
              setDownload(progressUpdate.currentValue);
              break;
            case 'upload':
              setUpload(progressUpdate.currentValue);
              break;
          }
        }
      });

      // Set final results
      setPing(testResult.ping);
      setDownload(testResult.download);
      setUpload(testResult.upload);
      setResult(testResult);
      setPhase('complete');
    } catch (error) {
      console.error('Test failed:', error);
      setPhase('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && (phase === 'idle' || phase === 'complete' || phase === 'error')) {
      e.preventDefault();
      handleStartTest();
    }
    if (e.key === 'Escape' && phase !== 'idle') {
      setPhase('idle');
    }
  };

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-space font-black text-4xl md:text-5xl lg:text-6xl text-brutal-text mb-4 uppercase tracking-tight">
            Test Your Internet Speed
          </h2>
          <p className="font-ibm text-lg md:text-xl text-brutal-muted max-w-2xl mx-auto">
            Brutally fast, browser-based speed testing. 
            No backend. No tracking. Just raw performance data.
          </p>
        </div>
      </div>

      {/* Main Test Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <MetricDisplay
          label="PING"
          value={ping}
          unit="milliseconds"
          color="orange"
          isActive={phase === 'ping'}
          progress={phase === 'ping' ? 100 : 0}
        />
        <MetricDisplay
          label="DOWNLOAD"
          value={download}
          unit="Mbps"
          color="cyan"
          isActive={phase === 'download'}
          progress={phase === 'download' ? 100 : 0}
        />
        <MetricDisplay
          label="UPLOAD"
          value={upload}
          unit="Mbps"
          color="green"
          isActive={phase === 'upload'}
          progress={phase === 'upload' ? 100 : 0}
        />
      </div>

      {/* Test Button */}
      <div className="mb-16">
        <TestButton 
          phase={phase} 
          onClick={handleStartTest}
        />
      </div>

      {/* Status Indicator */}
      {phase !== 'idle' && phase !== 'complete' && phase !== 'error' && (
        <div className="mb-16">
          <div className="relative h-3 bg-brutal-border overflow-hidden border-2 border-brutal-border">
            <div
              className="absolute left-0 top-0 h-full bg-neon-cyan transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center font-ibm text-sm text-brutal-muted uppercase tracking-wider">
            {phase === 'connecting' && 'Connecting to test servers...'}
            {phase === 'ping' && 'Measuring latency...'}
            {phase === 'download' && 'Testing download speed...'}
            {phase === 'upload' && 'Testing upload speed...'}
          </div>
        </div>
      )}

      {/* Results Card */}
      {result && phase === 'complete' && (
        <div className="mb-16 animate-count-up">
          <ResultsCard result={result} />
        </div>
      )}

      {/* Error State */}
      {phase === 'error' && (
        <div className="mb-16">
          <div className="border-3 border-red-500 bg-brutal-surface p-8 shadow-[8px_8px_0_rgb(239,68,68)]">
            <h3 className="font-space font-bold text-2xl text-red-500 mb-4 uppercase">
              Test Failed
            </h3>
            <p className="font-ibm text-brutal-text mb-4">
              Unable to complete the speed test. This could be due to:
            </p>
            <ul className="font-ibm text-brutal-muted list-disc list-inside space-y-2 mb-6">
              <li>Network connectivity issues</li>
              <li>Firewall or security software blocking the test</li>
              <li>Browser extensions interfering with network requests</li>
              <li>Test server unavailability</li>
            </ul>
            <p className="font-ibm text-brutal-text">
              Please check your connection and try again.
            </p>
          </div>
        </div>
      )}

      {/* Technical Metadata */}
      <div className="mb-16">
        <TechnicalMetadata />
      </div>
    </div>
  );
}
