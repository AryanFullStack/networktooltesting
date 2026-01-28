import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetworkSpeedTest.network - Browser-Based Speed Testing",
  description: "A brutally fast, browser-based internet speed testing platform that measures download, upload, and ping in real-time without backend dependencies.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
