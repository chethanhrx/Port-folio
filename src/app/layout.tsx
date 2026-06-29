import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chethanhrx.netlify.app"),
  title: "Chethan Kumar H R | Java Full Stack Developer & System Architect",
  description: "Official portfolio of Chethan Kumar H R (chethanhrx) — Java Full Stack Developer & AI System Architect specializing in Spring Boot, Microservices, React, and high-concurrency systems.",
  keywords: [
    "chethan kumar hr",
    "chethan hr",
    "chethanhrx",
    "chetanhr github",
    "chethanhrx github",
    "chethan kumar",
    "chethan h r",
    "chethan kumar hr github",
    "chethan hr developer",
    "chethanhrx portfolio",
    "Java Full Stack Developer",
    "Spring Boot",
    "React",
    "Microservices",
    "System Architecture",
    "Bangalore Developer"
  ],
  authors: [{ name: "Chethan Kumar H R", url: "https://github.com/chethanhrx" }],
  creator: "Chethan Kumar H R",
  openGraph: {
    title: "Chethan Kumar H R | Java Full Stack Developer",
    description: "Official portfolio of Chethan Kumar H R (chethanhrx). Explore live projects, system architecture diagrams, and enterprise microservices.",
    url: "https://chethanhrx.netlify.app",
    siteName: "Chethan Kumar H R Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan Kumar H R | Java Full Stack Developer",
    description: "Official portfolio of Chethan Kumar H R (chethanhrx). Explore live projects, system architecture diagrams, and enterprise microservices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chethanhrx.netlify.app",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-black text-white font-sans antialiased relative selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
