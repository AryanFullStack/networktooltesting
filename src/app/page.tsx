import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SpeedTestInterface } from '@/components/speed-test-interface';
import { InfoSection } from '@/components/info-section';
import { ScrollToTop } from '@/components/scroll-to-top';
import { FAQSection } from '@/components/faq-section';
import { HowItWorksSection } from '@/components/how-it-works';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <SpeedTestInterface />
      </main>

      <InfoSection />

      <HowItWorksSection />

      <FAQSection />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
