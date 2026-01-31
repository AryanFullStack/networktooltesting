'use client';

import { useState } from 'react';

const faqs = [
    {
        question: "How accurate is this internet speed test?",
        answer: "Our speed test is highly accurate and uses real-time measurements of your connection. However, results can vary based on network congestion, device performance, WiFi signal strength, and background applications. For best accuracy, run multiple tests at different times and use a wired Ethernet connection when possible."
    },
    {
        question: "What is a good download speed for home internet?",
        answer: "For most households: 25+ Mbps is sufficient for browsing and streaming HD video, 100+ Mbps is ideal for 4K streaming and multiple devices, 300+ Mbps is recommended for gaming, video calls, and heavy usage, 1000+ Mbps (Gigabit) is best for large households with many connected devices and 4K/8K streaming."
    },
    {
        question: "What is ping and why does it matter?",
        answer: "Ping measures the response time of your connection in milliseconds (ms). Lower is better. Under 20ms is excellent for gaming and video calls, 20-50ms is very good for most activities, 50-100ms is acceptable for general use, Over 100ms may cause lag in gaming and video calls. Ping is crucial for real-time applications like online gaming, video conferencing, and VoIP calls."
    },
    {
        question: "Why is my upload speed slower than download speed?",
        answer: "Most residential internet connections are asymmetric, meaning they're designed to prioritize download over upload. This is because most people download more data (streaming, browsing) than they upload. Typical ratios are 10:1 or 20:1 (download:upload). If you need faster uploads for video conferencing, content creation, or cloud backups, consider upgrading to a plan with higher upload speeds or a fiber connection."
    },
    {
        question: "What affects my internet speed test results?",
        answer: "Many factors can affect your speed test results: Network congestion during peak hours, WiFi vs Ethernet connection (wired is faster), Distance from your router, Other devices using bandwidth simultaneously, Background downloads or updates, Browser performance and extensions, Your device's hardware capabilities, ISP throttling or traffic management"
    },
    {
        question: "How much speed do I need for streaming?",
        answer: "Netflix recommends: 3 Mbps for SD quality, 5 Mbps for HD (720p), 25 Mbps for Ultra HD (4K). Add 5-10 Mbps per additional stream. For smooth streaming without buffering, we recommend having 50% more speed than the minimum requirement."
    },
    {
        question: "What is jitter and packet loss?",
        answer: "Jitter measures the variation in ping over time. Low jitter (under 30ms) means stable connection, high jitter causes choppy video calls and lag. Packet Loss is when data packets fail to reach their destination. 0% is ideal, under 1% is acceptable, over 2% can cause quality issues. Both are crucial for VoIP, gaming, and video conferencing."
    },
    {
        question: "Why are my speed test results different from my ISP's advertised speeds?",
        answer: "ISPs advertise 'up to' speeds, which are maximum theoretical speeds. Actual speeds vary due to: Time of day and network congestion, WiFi vs wired connection, Distance from the server, Network equipment quality, ISP throttling during peak hours. If you consistently get less than 80% of advertised speeds on a wired connection, contact your ISP."
    },
    {
        question: "How often should I test my internet speed?",
        answer: "We recommend testing: Once a month to monitor overall performance, When experiencing slow connections or buffering, After changing network equipment, During different times of day to identify congestion patterns, Before and after contacting your ISP about speed issues"
    },
    {
        question: "Does this speed test use my data?",
        answer: "Yes, speed tests consume data. A typical test uses 100-500 MB depending on your connection speed. The faster your connection, the more data is used. If you have a limited data plan (mobile, satellite), be mindful of how often you run tests. One test per week should be sufficient for monitoring."
    },
    {
        question: "WiFi vs Ethernet: Which is better for speed tests?",
        answer: "Ethernet (wired) is always more accurate and faster than WiFi because: No signal interference or obstacles, More stable connection, Lower latency, Higher maximum speeds. For the most accurate speed test results, use a wired Ethernet connection directly to your modem or router."
    },
    {
        question: "What is latency and how is it different from ping?",
        answer: "Latency and ping are related but slightly different. Ping is the round-trip time for a packet to travel to a server and back. Latency is the one-way delay. In practice, they're often used interchangeably. Both are measured in milliseconds (ms) and lower values indicate better performance for real-time applications."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="container mx-auto px-6 py-16">
            <div className="bg-brutal-surface border-4 border-brutal-border p-8 md:p-12">
                <h2 className="font-ibm text-3xl md:text-4xl font-bold mb-4 text-neon-cyan">
                    Frequently Asked Questions
                </h2>
                <p className="font-ibm text-brutal-muted mb-8">
                    Everything you need to know about internet speed testing, bandwidth, ping, and connection performance.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-brutal-bg border-2 border-brutal-border overflow-hidden transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-brutal-surface transition-colors"
                            >
                                <span className="font-ibm font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                                <span className="text-neon-cyan text-2xl flex-shrink-0">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 pt-2">
                                    <p className="font-ibm text-brutal-muted leading-relaxed whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Schema.org FAQ markup for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            </div>
        </section>
    );
}
