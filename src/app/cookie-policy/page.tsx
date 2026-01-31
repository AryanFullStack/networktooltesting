import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Cookie Policy for NetworkSpeedTest.network - Learn about the cookies we use and how to manage them.",
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        Cookie Policy
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <p className="text-sm text-brutal-muted/60">
                            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                            </p>
                            <p className="mt-4">
                                Cookies help us improve your experience on NetworkSpeedTest.network by remembering your preferences and providing personalized features.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Cookies</h2>
                            <p>
                                NetworkSpeedTest.network uses cookies and similar technologies for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Essential Functionality:</strong> To provide core features of the speed test service</li>
                                <li><strong>Local Storage:</strong> To save your test history and preferences locally on your device</li>
                                <li><strong>Analytics:</strong> To understand how visitors use our website</li>
                                <li><strong>Advertising:</strong> To display relevant advertisements through Google AdSense</li>
                                <li><strong>Performance:</strong> To optimize website loading and improve user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Types of Cookies We Use</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Strictly Necessary Cookies</h3>
                            <p>
                                These cookies are essential for the website to function properly. They enable core functionality such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Running the speed test</li>
                                <li>Storing test results locally</li>
                                <li>Maintaining session state</li>
                            </ul>
                            <p className="mt-2 text-sm text-brutal-muted/60">
                                <strong>Storage Type:</strong> Browser Local Storage and Session Storage
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Performance and Analytics Cookies</h3>
                            <p>
                                These cookies collect information about how users interact with our website:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Pages visited and time spent</li>
                                <li>Speed test usage patterns</li>
                                <li>Device and browser information</li>
                                <li>Referral sources</li>
                            </ul>
                            <p className="mt-2 text-sm text-brutal-muted/60">
                                <strong>Purpose:</strong> To improve website performance and user experience
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Advertising Cookies (Third-Party)</h3>
                            <p>
                                We use Google AdSense to display advertisements. Google may use cookies to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Show relevant ads based on your interests</li>
                                <li>Limit the number of times you see an ad</li>
                                <li>Measure ad effectiveness</li>
                                <li>Provide advertising reports</li>
                            </ul>
                            <p className="mt-2 text-sm text-brutal-muted/60">
                                <strong>Provider:</strong> Google LLC ({' '}
                                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                    Google's Privacy & Terms
                                </a>)
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies We Set</h2>
                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full border-2 border-brutal-border">
                                    <thead className="bg-brutal-bg">
                                        <tr>
                                            <th className="border border-brutal-border px-4 py-2 text-left text-white">Cookie Name</th>
                                            <th className="border border-brutal-border px-4 py-2 text-left text-white">Purpose</th>
                                            <th className="border border-brutal-border px-4 py-2 text-left text-white">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-brutal-border px-4 py-2 font-mono text-sm">speedtest_history</td>
                                            <td className="border border-brutal-border px-4 py-2">Stores your test history locally</td>
                                            <td className="border border-brutal-border px-4 py-2">Persistent</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-brutal-border px-4 py-2 font-mono text-sm">user_preferences</td>
                                            <td className="border border-brutal-border px-4 py-2">Saves your settings and preferences</td>
                                            <td className="border border-brutal-border px-4 py-2">Persistent</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-brutal-border px-4 py-2 font-mono text-sm">theme</td>
                                            <td className="border border-brutal-border px-4 py-2">Remembers your theme preference</td>
                                            <td className="border border-brutal-border px-4 py-2">Persistent</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Third-Party Cookies</h2>
                            <p>
                                In addition to our own cookies, we use third-party services that may set cookies:
                            </p>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Google AdSense</h3>
                            <p>
                                Google AdSense uses cookies to serve ads based on your prior visits to our website and other sites.
                                Learn more about Google's cookie usage:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>
                                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Google Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Manage Google Ad Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Google Ads Preferences
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. How to Control Cookies</h2>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Browser Settings</h3>
                            <p>
                                Most browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Block all cookies</li>
                                <li>Accept only first-party cookies</li>
                                <li>Delete cookies after closing the browser</li>
                                <li>Make exceptions for specific websites</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Browser-Specific Instructions</h3>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>
                                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Google Chrome
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Mozilla Firefox
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Safari
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Microsoft Edge
                                    </a>
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Opt-Out of Personalized Ads</h3>
                            <p>You can opt out of personalized advertising by visiting:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>
                                    <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Your Online Choices EU
                                    </a>
                                </li>
                                <li>
                                    <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Digital Advertising Alliance (US)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                                        Network Advertising Initiative
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Impact of Disabling Cookies</h2>
                            <p>
                                If you disable cookies, some features of our website may not function properly:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Test history will not be saved</li>
                                <li>Preferences will not be remembered</li>
                                <li>Some interactive features may be limited</li>
                            </ul>
                            <p className="mt-4">
                                However, the core speed test functionality will continue to work.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Updates to This Policy</h2>
                            <p>
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons.
                                The "Last Updated" date at the top of this page indicates when the policy was last revised.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contact Us</h2>
                            <p>
                                If you have questions about our use of cookies, please contact us at:
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
