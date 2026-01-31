import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for NetworkSpeedTest.network - Read our terms and conditions for using the internet speed test service.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        Terms of Service
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <p className="text-sm text-brutal-muted/60">
                            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using NetworkSpeedTest.network ("Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
                            <p>
                                NetworkSpeedTest.network provides a free, browser-based internet speed testing tool that measures your connection's download speed, upload speed, ping, latency, and jitter. The Service is provided "as is" without any warranties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Use of Service</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Permitted Use</h3>
                            <p>You may use the Service for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Testing your internet connection speed</li>
                                <li>Monitoring your network performance</li>
                                <li>Troubleshooting connection issues</li>
                                <li>Personal or commercial purposes within legal bounds</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Prohibited Use</h3>
                            <p>You agree NOT to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Attempt to compromise the security or integrity of the Service</li>
                                <li>Use automated scripts, bots, or scrapers to access the Service excessively</li>
                                <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Misrepresent your identity or affiliation</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Accuracy of Results</h2>
                            <p>
                                While we strive to provide accurate speed test measurements, results may vary based on numerous factors including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your device's hardware and software configuration</li>
                                <li>Browser performance and capabilities</li>
                                <li>Network congestion and routing</li>
                                <li>ISP throttling or traffic management</li>
                                <li>WiFi signal strength and interference</li>
                                <li>Background applications consuming bandwidth</li>
                            </ul>
                            <p className="mt-4">
                                We do not guarantee the accuracy, completeness, or reliability of test results. Results are provided for informational purposes only.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Intellectual Property</h2>
                            <p>
                                All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of NetworkSpeedTest.network and are protected by copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Third-Party Services</h2>
                            <p>
                                Our Service may contain links to third-party websites or services, including advertisements. We are not responsible for the content, privacy policies, or practices of third-party sites or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Disclaimer of Warranties</h2>
                            <p>
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>MERCHANTABILITY</li>
                                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                                <li>NON-INFRINGEMENT</li>
                                <li>ACCURACY OR RELIABILITY OF RESULTS</li>
                                <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Limitation of Liability</h2>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NetworkSpeedTest.network SHALL NOT BE LIABLE FOR ANY:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                                <li>LOSS OF PROFITS, DATA, OR USE</li>
                                <li>BUSINESS INTERRUPTION</li>
                                <li>DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless NetworkSpeedTest.network and its affiliates from any claims, liabilities, damages, losses, and expenses arising from your use of the Service or violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Privacy</h2>
                            <p>
                                Your use of the Service is also governed by our{' '}
                                <a href="/privacy" className="text-neon-cyan hover:underline">Privacy Policy</a>.
                                Please review our Privacy Policy to understand our data practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Service. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Termination</h2>
                            <p>
                                We reserve the right to terminate or suspend your access to the Service at any time, without notice, for any reason, including violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">13. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">14. Contact Information</h2>
                            <p>
                                For questions about these Terms, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:legal@networkspeedtest.network" className="text-neon-cyan hover:underline">
                                    legal@networkspeedtest.network
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
