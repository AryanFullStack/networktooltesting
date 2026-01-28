'use client';

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t-2 border-brutal-border bg-brutal-surface mt-32">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-ibm text-sm text-brutal-muted">
            <p>© {new Date().getFullYear()} NetworkSpeedTest.network</p>
            <p className="text-xs mt-1">
              Built for users who demand instant results and transparency
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#privacy"
              onClick={(e) => handleScroll(e, '#privacy')}
              className="font-ibm text-sm text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, '#about')}
              className="font-ibm text-sm text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              About
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, '#how-it-works')}
              className="font-ibm text-sm text-brutal-muted hover:text-neon-cyan transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
