import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chethanhrx.netlify.app"),
  title: "Chethan Kumar H R | Java Full Stack Developer & System Architect",
  description: "Official portfolio of Chethan Kumar H R (chethanhrx) — Java Full Stack Developer & AI System Architect specializing in Spring Boot, Microservices, React, and high-concurrency systems.",
  keywords: [
    // Old keywords exactly as they were
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
    "Bangalore Developer",
    // New requested keywords
    "ortex owner",
    "ortex founder",
    "chethan hr ortex",
    "chethan kumar h r",
    "chethan hr ortex studio",
    "chethan kumar hr ortex",
    "chethan hr portfolio",
    "chethan hr jspiders",
    "chethan kumar hr software engineer",
    "chethan hrx portfolio",
    "chethan kumar hr resume"
  ],
  authors: [{ name: "Chethan Kumar H R", url: "https://github.com/chethanhrx" }],
  creator: "Chethan Kumar H R",
  applicationName: "Chethan Kumar H R — Ortex Founder",
  openGraph: {
    title: "Chethan Kumar H R | Java Full Stack Developer & Ortex Founder",
    description: "Official portfolio of Chethan Kumar H R (chethanhrx). Explore live projects, system architecture diagrams, and enterprise microservices.",
    url: "https://chethanhrx.netlify.app",
    siteName: "Chethan Kumar H R — Ortex Founder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan Kumar H R | Java Full Stack Developer & Ortex Founder",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chethanhrx.netlify.app/#website",
      "url": "https://chethanhrx.netlify.app",
      "name": "Chethan Kumar H R — Ortex Founder",
      "alternateName": ["Ortex Studio", "Chethan HR", "Chethan Kumar H R Portfolio"],
      "publisher": {
        "@id": "https://chethanhrx.netlify.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://chethanhrx.netlify.app/#person",
      "name": "Chethan Kumar H R",
      "alternateName": "chethanhrx",
      "jobTitle": "Java Full Stack Developer & Ortex Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Ortex Studio"
      },
      "url": "https://chethanhrx.netlify.app",
      "sameAs": [
        "https://github.com/chethanhrx",
        "https://leetcode.com/u/chethank_hr/",
        "https://t.me/chethank_hr"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#141213] text-[#FFEBD3] font-sans antialiased relative selection:bg-[#FFB6A6] selection:text-[#141213] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
