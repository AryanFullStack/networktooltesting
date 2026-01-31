'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t-2 border-brutal-border bg-brutal-surface mt-32">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="font-ibm">
            <h3 className="text-lg font-bold text-white mb-4">NetworkSpeedTest.network</h3>
            <p className="text-sm text-brutal-muted">
              Fast, accurate, and free internet speed testing. Built for users who demand instant results and transparency.
            </p>
          </div>

          {/* Resources */}
          <div className="font-ibm">
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                Contact Us
              </Link>
              <a href="/#faq" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="font-ibm">
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="font-ibm">
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:support@networkspeedtest.network"
                className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors"
              >
                Support
              </a>
              <a
                href="mailto:feedback@networkspeedtest.network"
                className="text-sm text-brutal-muted hover:text-neon-cyan transition-colors"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-brutal-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-ibm text-sm text-brutal-muted">
              © {new Date().getFullYear()} NetworkSpeedTest.network. All rights reserved.
            </p>
            <p className="font-ibm text-xs text-brutal-muted/60">
              Made with ⚡ for accurate speed testing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
