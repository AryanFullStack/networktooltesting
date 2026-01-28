'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-neon-cyan text-brutal-bg p-4 border-2 border-neon-cyan shadow-[4px_4px_0_#00D9FF] hover:shadow-[2px_2px_0_#00D9FF] active:shadow-none transition-all duration-150 active:scale-95"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={3} />
    </button>
  );
}
