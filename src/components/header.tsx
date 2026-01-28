'use client';

import { Activity } from 'lucide-react';

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="border-b-2 border-brutal-border bg-brutal-surface sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-neon-cyan" strokeWidth={3} />
            <h1 className="font-space font-black text-xl md:text-2xl text-brutal-text tracking-tight">
              NetworkSpeedTest<span className="text-neon-cyan">.network</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, '#about')}
              className="font-space text-sm uppercase tracking-wider text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              About
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, '#how-it-works')}
              className="font-space text-sm uppercase tracking-wider text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              How It Works
            </a>
            <a
              href="#privacy"
              onClick={(e) => handleScroll(e, '#privacy')}
              className="font-space text-sm uppercase tracking-wider text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
