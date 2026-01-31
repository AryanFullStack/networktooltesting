import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for NetworkSpeedTest.network - Learn how we collect, use, and protect your data when using our internet speed test service.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <p className="text-sm text-brutal-muted/60">
                            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to NetworkSpeedTest.network ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we handle your information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our internet speed testing service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Automatically Collected Information</h3>
                            <p>When you use our speed test service, we automatically collect:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Speed Test Results:</strong> Download speed, upload speed, ping, latency, and jitter measurements</li>
                                <li><strong>Connection Information:</strong> IP address, ISP name, approximate location (city/country level)</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                                <li><strong>Usage Data:</strong> Test timestamps, test history (stored locally in your browser)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Cookies and Local Storage</h3>
                            <p>We use browser local storage and cookies to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Store your test history locally on your device</li>
                                <li>Remember your preferences and settings</li>
                                <li>Improve website performance and user experience</li>
                                <li>Serve relevant advertisements (Google AdSense)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
                            <p>We use the collected information for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Delivery:</strong> Providing accurate speed test measurements</li>
                                <li><strong>Analytics:</strong> Understanding usage patterns and improving our service</li>
                                <li><strong>Performance:</strong> Optimizing website performance and user experience</li>
                                <li><strong>Advertising:</strong> Displaying relevant ads through Google AdSense</li>
                                <li><strong>Security:</strong> Detecting and preventing fraudulent or abusive activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Google AdSense</h3>
                            <p>
                                We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to our website and other websites. You can opt out of personalized advertising by visiting{' '}
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                    Google Ads Settings
                                </a>.
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Analytics Services</h3>
                            <p>
                                We may use analytics services to understand how users interact with our website. These services may collect information such as your IP address, browser type, pages visited, and time spent on pages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Data Retention</h2>
                            <p>
                                <strong>Local Data:</strong> Test history and preferences are stored locally in your browser's storage. You can clear this data at any time through your browser settings.
                            </p>
                            <p>
                                <strong>Server Data:</strong> We do not store your personal speed test results on our servers. All speed testing is performed in your browser.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Your Rights and Choices</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access:</strong> Request information about the data we collect</li>
                                <li><strong>Delete:</strong> Clear your local test history through your browser</li>
                                <li><strong>Opt-Out:</strong> Disable cookies in your browser settings</li>
                                <li><strong>Ad Preferences:</strong> Manage ad personalization through Google Ads Settings</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Children's Privacy</h2>
                            <p>
                                Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure. We use HTTPS encryption for all data transmission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact Us</h2>
                            <p>
                                If you have questions or concerns about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:privacy@networkspeedtest.network" className="text-neon-cyan hover:underline">
                                    privacy@networkspeedtest.network
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
