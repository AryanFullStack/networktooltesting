import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Disclaimer",
    description: "Disclaimer for NetworkSpeedTest.network - Important information about the limitations and accuracy of our speed test results.",
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        Disclaimer
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <p className="text-sm text-brutal-muted/60">
                            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. General Information</h2>
                            <p>
                                The information provided by NetworkSpeedTest.network ("we," "us," or "our") on our website is for general informational purposes only.
                                All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied,
                                regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Speed Test Results Disclaimer</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Accuracy of Results</h3>
                            <p>
                                While we strive to provide accurate internet speed measurements, <strong>results may vary</strong> and should be considered as estimates only.
                                Speed test results are influenced by numerous factors beyond our control, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Network Conditions:</strong> Congestion, routing, and ISP throttling</li>
                                <li><strong>Device Performance:</strong> CPU, RAM, and storage limitations</li>
                                <li><strong>Browser Performance:</strong> JavaScript execution speed and memory management</li>
                                <li><strong>Connection Type:</strong> WiFi signal strength, interference, and distance from router</li>
                                <li><strong>Background Activity:</strong> Other applications consuming bandwidth</li>
                                <li><strong>Time of Day:</strong> Peak usage hours affecting network performance</li>
                                <li><strong>Server Location:</strong> Distance to testing servers</li>
                                <li><strong>Network Equipment:</strong> Router, modem, and cable quality</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Not a Guarantee</h3>
                            <p>
                                Speed test results do <strong>NOT</strong> guarantee:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>That your ISP is providing the advertised speeds</li>
                                <li>Future performance of your internet connection</li>
                                <li>Performance in all applications and scenarios</li>
                                <li>Consistency across different testing services</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Multiple Tests Recommended</h3>
                            <p>
                                For best results, we recommend:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Running multiple tests at different times</li>
                                <li>Testing with a wired (Ethernet) connection when possible</li>
                                <li>Closing other applications during testing</li>
                                <li>Using multiple speed test services for comparison</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Service Availability</h2>
                            <p>
                                We do not guarantee that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>The service will be available at all times without interruption</li>
                                <li>The service will be error-free or bug-free</li>
                                <li>Defects will be corrected immediately</li>
                                <li>The service will meet your specific requirements</li>
                            </ul>
                            <p className="mt-4">
                                We reserve the right to suspend, modify, or discontinue the service at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Links and Services</h2>
                            <p>
                                Our website may contain links to third-party websites or services that are not owned or controlled by NetworkSpeedTest.network.
                            </p>
                            <p className="mt-4">
                                We have <strong>no control over</strong>, and assume <strong>no responsibility for</strong>:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>The content, privacy policies, or practices of third-party websites</li>
                                <li>Third-party advertisements displayed on our site</li>
                                <li>Products or services offered by third parties</li>
                            </ul>
                            <p className="mt-4">
                                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by use of third-party content or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. No Professional Advice</h2>
                            <p>
                                The information provided on this website is <strong>not intended as professional advice</strong>.
                                Speed test results and related information should not be used as the sole basis for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Making decisions about your internet service provider</li>
                                <li>Network troubleshooting or diagnostics</li>
                                <li>Technical decisions about network infrastructure</li>
                                <li>Legal claims against your ISP</li>
                            </ul>
                            <p className="mt-4">
                                For professional advice specific to your situation, please consult with qualified professionals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Data Usage</h2>
                            <p>
                                Running speed tests <strong>consumes data</strong>. Each test may use:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Download Test:</strong> Several megabytes to hundreds of megabytes</li>
                                <li><strong>Upload Test:</strong> Several megabytes to hundreds of megabytes</li>
                                <li><strong>Total per test:</strong> Variable, depending on your connection speed</li>
                            </ul>
                            <p className="mt-4 bg-brutal-bg border-l-4 border-neon-cyan p-4">
                                <strong>⚠️ Warning:</strong> If you have a limited data plan (mobile, satellite, etc.),
                                running speed tests may consume a significant portion of your data allowance.
                                We are not responsible for any data charges or overage fees you may incur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. ISP Relationships</h2>
                            <p>
                                NetworkSpeedTest.network is <strong>not affiliated</strong> with any internet service provider (ISP).
                                We do not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Endorse any specific ISP or internet service</li>
                                <li>Receive compensation from ISPs based on test results</li>
                                <li>Manipulate results to favor or penalize any ISP</li>
                                <li>Act as an intermediary between you and your ISP</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Geographic Limitations</h2>
                            <p>
                                Speed test accuracy may vary by geographic location. Testing servers may not be available in all regions,
                                which can affect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Download and upload speed measurements</li>
                                <li>Ping and latency results</li>
                                <li>Overall test accuracy</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Browser Compatibility</h2>
                            <p>
                                Our speed test is designed to work in modern web browsers. We cannot guarantee:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Compatibility with older or outdated browsers</li>
                                <li>Accuracy in browsers with limited JavaScript support</li>
                                <li>Consistent results across all browser types</li>
                                <li>Functionality with browser extensions that block scripts</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Limitation of Liability</h2>
                            <p>
                                UNDER NO CIRCUMSTANCES SHALL NetworkSpeedTest.network BE LIABLE FOR ANY:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Direct, indirect, incidental, or consequential damages</li>
                                <li>Loss of data, profits, or business opportunities</li>
                                <li>Decisions made based on speed test results</li>
                                <li>Service interruptions or errors</li>
                                <li>Damages from viruses or malicious code</li>
                                <li>Data overage charges from your ISP or mobile carrier</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to This Disclaimer</h2>
                            <p>
                                We reserve the right to modify this Disclaimer at any time. Changes will be posted on this page with an updated "Last Updated" date.
                                Your continued use of the service after changes constitutes acceptance of the modified Disclaimer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Information</h2>
                            <p>
                                If you have questions about this Disclaimer, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:legal@networkspeedtest.network" className="text-neon-cyan hover:underline">
                                    legal@networkspeedtest.network
                                </a>
                            </p>
                        </section>

                        <div className="mt-8 bg-brutal-bg border-2 border-brutal-border p-6">
                            <p className="text-sm text-brutal-muted/80">
                                <strong>By using NetworkSpeedTest.network, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
