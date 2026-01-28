'use client';

import { Zap, Shield, Activity } from 'lucide-react';

export function InfoSection() {
  const features = [
    {
      icon: Zap,
      title: 'Brutally Fast',
      description: 'No server-side processing. Tests run entirely in your browser using modern web APIs for instant results.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Zero tracking, zero data collection. Your test results stay in your browser and are never stored or transmitted.',
    },
    {
      icon: Activity,
      title: 'Real-Time Metrics',
      description: 'Watch your connection performance in real-time with live metric updates and smooth animations.',
    },
  ];

  return (
    <div id="about" className="border-t-2 border-brutal-border bg-brutal-surface py-16 mt-32">
      <div className="container mx-auto px-6">
        <h2 className="font-space font-black text-3xl md:text-4xl text-brutal-text mb-12 uppercase text-center">
          Why NetworkSpeedTest?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 border-brutal-border bg-brutal-bg p-8 hover:border-neon-cyan transition-colors duration-200"
            >
              <feature.icon className="w-12 h-12 text-neon-cyan mb-4" strokeWidth={2.5} />
              <h3 className="font-space font-bold text-xl text-brutal-text mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="font-ibm text-brutal-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-brutal-border bg-brutal-bg p-8">
          <h3 id="how-it-works" className="font-space font-bold text-2xl text-brutal-text mb-6 uppercase tracking-wide">
            How It Works
          </h3>
          <div className="space-y-4 font-ibm text-brutal-muted leading-relaxed">
            <p>
              NetworkSpeedTest uses the latest browser APIs to measure your internet connection speed
              with precision and transparency. Unlike traditional speed tests that require backend
              infrastructure, our tool runs entirely in your browser.
            </p>
            <p>
              The test performs three measurements: <strong className="text-neon-orange">Ping</strong> (latency),{' '}
              <strong className="text-neon-cyan">Download</strong> speed, and{' '}
              <strong className="text-neon-green">Upload</strong> speed. Each metric is calculated
              using multiple samples to ensure accuracy.
            </p>
            <p>
              All tests connect to reliable CDN servers to measure real-world performance. Results
              are displayed in real-time with no page reloads required.
            </p>
          </div>
        </div>

        <div className="mt-8 border-2 border-brutal-border bg-brutal-bg p-8">
          <h3 id="privacy" className="font-space font-bold text-2xl text-brutal-text mb-6 uppercase tracking-wide">
            Privacy & Security
          </h3>
          <div className="space-y-4 font-ibm text-brutal-muted leading-relaxed">
            <p>
              We take your privacy seriously. NetworkSpeedTest does not collect, store, or transmit
              any personal information or test results to our servers. All processing happens locally
              in your browser.
            </p>
            <p>
              Your IP address is only used to route network requests to test servers and is not
              logged or stored. The connection information displayed is retrieved directly from CDN
              services and shown to you without any intermediaries.
            </p>
            <p>
              We do not use cookies, analytics, or any form of tracking technology. Your test history
              is not saved unless you explicitly choose to copy or share results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
