import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about NetworkSpeedTest.network - A fast, accurate, and free internet speed testing service built for transparency and ease of use.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brutal-bg bg-noise">
            <Header />

            <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                    <h1 className="font-ibm text-4xl md:text-5xl font-bold mb-8 text-neon-cyan">
                        About NetworkSpeedTest.network
                    </h1>

                    <div className="prose prose-invert max-w-none font-ibm text-brutal-muted space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
                            <p>
                                NetworkSpeedTest.network was created with a simple mission: to provide a <strong>fast, accurate, and transparent</strong> internet speed testing service that anyone can use, anywhere, anytime.
                            </p>
                            <p>
                                We believe that understanding your internet connection performance should be instant, visual, and free from unnecessary complexity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Makes Us Different</h2>

                            <div className="space-y-4">
                                <div className="border-l-4 border-neon-cyan pl-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">⚡ Browser-Based Testing</h3>
                                    <p>
                                        All speed tests run entirely in your browser. No downloads, no installations, no apps required. Just open the page and test instantly.
                                    </p>
                                </div>

                                <div className="border-l-4 border-neon-purple pl-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">🎯 Real-Time Results</h3>
                                    <p>
                                        Watch your download speed, upload speed, ping, and latency update in real-time with stunning visual feedback showing actual performance.
                                    </p>
                                </div>

                                <div className="border-l-4 border-neon-cyan pl-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">🔒 Privacy-Focused</h3>
                                    <p>
                                        Your test history is stored locally in your browser. We don't collect or store your personal speed test data on our servers.
                                    </p>
                                </div>

                                <div className="border-l-4 border-neon-purple pl-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">📊 Comprehensive Metrics</h3>
                                    <p>
                                        Get detailed insights including download/upload speeds, ping, latency, jitter, packet loss, and connection quality ratings.
                                    </p>
                                </div>

                                <div className="border-l-4 border-neon-cyan pl-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">💯 100% Free</h3>
                                    <p>
                                        No subscriptions, no premium tiers, no hidden costs. Full access to all features, completely free forever.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How It Works</h2>
                            <p>
                                Our speed test uses cutting-edge web technologies to measure your internet connection performance:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3 mt-4">
                                <li>
                                    <strong>Download Test:</strong> We download test files from nearby servers and measure the transfer rate in real-time
                                </li>
                                <li>
                                    <strong>Upload Test:</strong> We upload data to our servers and measure how fast your connection can send data
                                </li>
                                <li>
                                    <strong>Ping & Latency:</strong> We measure response time to determine how quickly your connection responds
                                </li>
                                <li>
                                    <strong>Jitter & Packet Loss:</strong> We analyze connection stability to detect quality issues
                                </li>
                            </ol>
                            <p className="mt-4">
                                All tests are performed using modern browser APIs without requiring any special permissions or installations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technology Stack</h2>
                            <p>
                                Built with modern web technologies for maximum performance:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Next.js 14:</strong> React framework for optimal performance</li>
                                <li><strong>TypeScript:</strong> Type-safe, maintainable code</li>
                                <li><strong>Tailwind CSS:</strong> Responsive, modern design</li>
                                <li><strong>Web APIs:</strong> Native browser capabilities for accurate testing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use Cases</h2>
                            <p>Our speed test is perfect for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Home Users:</strong> Verify if you're getting the speeds your ISP promised</li>
                                <li><strong>Remote Workers:</strong> Ensure your connection can handle video calls and uploads</li>
                                <li><strong>Gamers:</strong> Check ping and latency for optimal gaming performance</li>
                                <li><strong>IT Professionals:</strong> Troubleshoot network issues and document performance</li>
                                <li><strong>Content Creators:</strong> Verify upload speeds for streaming and file sharing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Commitment</h2>
                            <p>
                                We are committed to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Maintaining a fast, reliable, and accurate testing service</li>
                                <li>Protecting user privacy and data security</li>
                                <li>Providing transparent, honest speed measurements</li>
                                <li>Continuously improving the user experience</li>
                                <li>Keeping the service completely free for everyone</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Get in Touch</h2>
                            <p>
                                We'd love to hear from you! Whether you have feedback, questions, or just want to say hello:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:hello@networkspeedtest.network" className="text-neon-cyan hover:underline">
                                    hello@networkspeedtest.network
                                </a>
                            </p>
                            <p className="mt-2">
                                <a href="/contact" className="text-neon-cyan hover:underline">
                                    Visit our Contact page →
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
