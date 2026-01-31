export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="container mx-auto px-6 py-16">
            <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                <h2 className="font-ibm text-3xl md:text-4xl font-bold mb-4 text-neon-cyan">
                    How Our Speed Test Works
                </h2>
                <p className="font-ibm text-brutal-muted mb-12">
                    Understanding the technology behind accurate internet speed testing and network performance measurement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Download Speed Test */}
                    <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-neon-cyan/10 border-2 border-neon-cyan text-neon-cyan font-ibm font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                1
                            </div>
                            <div>
                                <h3 className="font-ibm text-xl font-bold text-white mb-3">
                                    Download Speed Test
                                </h3>
                                <p className="font-ibm text-brutal-muted leading-relaxed">
                                    We download test data from nearby servers and measure the transfer rate in real-time.
                                    The test uses multiple parallel connections to saturate your bandwidth and provide accurate Mbps (megabits per second) measurements.
                                    This shows how fast you can receive data - crucial for streaming, browsing, and downloading files.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Upload Speed Test */}
                    <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-ibm font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                2
                            </div>
                            <div>
                                <h3 className="font-ibm text-xl font-bold text-white mb-3">
                                    Upload Speed Test
                                </h3>
                                <p className="font-ibm text-brutal-muted leading-relaxed">
                                    We upload data to our test servers and measure how fast your connection can send information.
                                    This is essential for video calls, live streaming, cloud backups, and sharing large files.
                                    Upload speeds are typically slower than download speeds on most residential connections.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ping & Latency */}
                    <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-neon-cyan/10 border-2 border-neon-cyan text-neon-cyan font-ibm font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                3
                            </div>
                            <div>
                                <h3 className="font-ibm text-xl font-bold text-white mb-3">
                                    Ping & Latency Measurement
                                </h3>
                                <p className="font-ibm text-brutal-muted leading-relaxed">
                                    We measure response time by sending small packets to test servers and timing how long they take to return.
                                    Measured in milliseconds (ms), lower ping means faster response.
                                    This is critical for online gaming, video conferencing, and any real-time applications where delays are noticeable.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connection Quality */}
                    <div className="bg-brutal-bg border-2 border-brutal-border p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-ibm font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                4
                            </div>
                            <div>
                                <h3 className="font-ibm text-xl font-bold text-white mb-3">
                                    Jitter & Packet Loss Analysis
                                </h3>
                                <p className="font-ibm text-brutal-muted leading-relaxed">
                                    We analyze connection stability by measuring jitter (variation in ping times) and packet loss (data that fails to arrive).
                                    High jitter or packet loss indicates network instability, which can cause choppy video calls, stuttering in games, and poor VoIP quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="border-t-2 border-brutal-border pt-8">
                    <h3 className="font-ibm text-2xl font-bold text-white mb-6">
                        Why Browser-Based Testing?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-brutal-bg border-l-4 border-neon-cyan p-4">
                            <h4 className="font-ibm font-bold text-white mb-2">⚡ Instant Access</h4>
                            <p className="font-ibm text-sm text-brutal-muted">
                                No downloads, installations, or apps required. Just open your browser and test immediately.
                            </p>
                        </div>
                        <div className="bg-brutal-bg border-l-4 border-neon-purple p-4">
                            <h4 className="font-ibm font-bold text-white mb-2">🔒 Privacy First</h4>
                            <p className="font-ibm text-sm text-brutal-muted">
                                All testing happens client-side. Your speed test history is stored locally in your browser only.
                            </p>
                        </div>
                        <div className="bg-brutal-bg border-l-4 border-neon-cyan p-4">
                            <h4 className="font-ibm font-bold text-white mb-2">📊 Real-Time Results</h4>
                            <p className="font-ibm text-sm text-brutal-muted">
                                Watch your speeds update live with visual feedback showing actual performance in real-time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="border-t-2 border-brutal-border pt-8 mt-8">
                    <h3 className="font-ibm text-2xl font-bold text-white mb-6">
                        Tips for Accurate Speed Tests
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-3 font-ibm text-brutal-muted">
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Use a wired Ethernet connection when possible for most accurate results</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Close background applications that may consume bandwidth</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Test at different times of day to identify peak congestion periods</span>
                            </li>
                        </ul>
                        <ul className="space-y-3 font-ibm text-brutal-muted">
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Run multiple tests and average the results for reliability</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Ensure no other devices are streaming or downloading during the test</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-neon-cyan mt-1">✓</span>
                                <span>Restart your router if you consistently get unexpectedly low speeds</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
