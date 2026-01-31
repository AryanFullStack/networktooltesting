import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://networkspeedtest.network'),
  title: {
    default: "Network Speed Test - Free Internet Speed Test Online | Test Your Connection Speed",
    template: "%s | NetworkSpeedTest.network"
  },
  description: "Test your internet speed instantly with our fast, accurate, and free online speed test tool. Measure download speed, upload speed, ping, and latency. Check your WiFi, broadband, and mobile connection performance in real-time.",
  keywords: [
    "speed test",
    "internet speed test",
    "network speed test",
    "bandwidth test",
    "connection speed test",
    "download speed test",
    "upload speed test",
    "ping test",
    "latency test",
    "wifi speed test",
    "broadband speed test",
    "fiber speed test",
    "mobile speed test",
    "4G speed test",
    "5G speed test",
    "internet connection test",
    "network performance test",
    "Mbps test",
    "internet speed checker",
    "speed test online",
    "free speed test",
    "fast speed test",
    "accurate speed test",
    "real-time speed test",
    "browser speed test",
    "no download speed test"
  ],
  authors: [{ name: "NetworkSpeedTest.network" }],
  creator: "NetworkSpeedTest.network",
  publisher: "NetworkSpeedTest.network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://networkspeedtest.network",
    title: "Network Speed Test - Test Your Internet Speed Free & Fast",
    description: "Instantly test your internet connection speed with our free, browser-based speed test. Measure download, upload, ping, and latency accurately.",
    siteName: "NetworkSpeedTest.network",
    images: [
      {
        url: "/networkspeedtest.png",
        width: 1200,
        height: 630,
        alt: "Network Speed Test - Internet Speed Testing Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Speed Test - Free Internet Speed Test",
    description: "Test your internet speed instantly. Measure download, upload, ping, and latency with our fast and accurate speed test tool.",
    images: ["/networkspeedtest.png"],
    creator: "@networkspeedtest",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0E14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-ibm">
        {children}
      </body>
    </html>
  );
}
