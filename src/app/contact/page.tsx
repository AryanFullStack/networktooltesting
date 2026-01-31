import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact NetworkSpeedTest.network - Get in touch with us for support, feedback, or inquiries about our internet speed testing service.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        Contact Us
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <p className="text-lg">
                            We'd love to hear from you! Whether you have questions, feedback, or need support, we're here to help.
                        </p>

                        <section className="mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                                    <h3 className="text-xl font-semibold text-neon-cyan mb-2">📧 Email Support</h3>
                                    <p className="mb-2">For general inquiries and support:</p>
                                    <a
                                        href="mailto:support@networkspeedtest.network"
                                        className="text-neon-cyan hover:underline text-lg font-semibold"
                                    >
                                        support@networkspeedtest.network
                                    </a>
                                </div>

                                <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                                    <h3 className="text-xl font-semibold text-neon-cyan mb-2">🔒 Privacy Inquiries</h3>
                                    <p className="mb-2">For privacy-related questions:</p>
                                    <a
                                        href="mailto:privacy@networkspeedtest.network"
                                        className="text-neon-cyan hover:underline text-lg font-semibold"
                                    >
                                        privacy@networkspeedtest.network
                                    </a>
                                </div>

                                <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                                    <h3 className="text-xl font-semibold text-neon-cyan mb-2">⚖️ Legal & Business</h3>
                                    <p className="mb-2">For legal matters and business inquiries:</p>
                                    <a
                                        href="mailto:legal@networkspeedtest.network"
                                        className="text-neon-cyan hover:underline text-lg font-semibold"
                                    >
                                        legal@networkspeedtest.network
                                    </a>
                                </div>

                                <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                                    <h3 className="text-xl font-semibold text-neon-cyan mb-2">💡 Feedback & Suggestions</h3>
                                    <p className="mb-2">Have ideas to improve our service?</p>
                                    <a
                                        href="mailto:feedback@networkspeedtest.network"
                                        className="text-neon-cyan hover:underline text-lg font-semibold"
                                    >
                                        feedback@networkspeedtest.network
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                            <p>
                                Before reaching out, you might find answers to common questions on our{' '}
                                <a href="/#faq" className="text-neon-cyan hover:underline">FAQ section</a> on the homepage.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Response Time</h2>
                            <p>
                                We typically respond to inquiries within <strong>24-48 hours</strong> during business days.
                                For technical support issues, please include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Your browser type and version</li>
                                <li>Operating system</li>
                                <li>Description of the issue</li>
                                <li>Any error messages you encountered</li>
                                <li>Screenshots if applicable</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Report Technical Issues</h2>
                            <p>
                                Experiencing problems with the speed test? Please email us with detailed information about:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>What you were trying to do</li>
                                <li>What happened instead</li>
                                <li>Steps to reproduce the issue</li>
                                <li>Your internet connection type (WiFi, Ethernet, Mobile)</li>
                            </ul>
                            <p className="mt-4">
                                This information helps us identify and fix issues quickly.
                            </p>
                        </section>

                        <section className="mt-8 border-t-2 border-brutal-border pt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Business Hours</h2>
                            <p className="text-brutal-muted">
                                While our speed test service is available 24/7, our support team operates during standard business hours:
                            </p>
                            <p className="mt-2 text-white font-semibold">
                                Monday - Friday: 9:00 AM - 6:00 PM (UTC)
                            </p>
                            <p className="text-sm text-brutal-muted/60 mt-4">
                                Emergency issues affecting the service availability are monitored around the clock.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
