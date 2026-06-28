import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chethan Kumar H R | Java Full Stack Developer & System Architect",
  description: "Portfolio of Chethan Kumar H R — Java Full Stack Developer specializing in Spring Boot, Microservices, React, Kafka, Redis, and high-concurrency distributed systems.",
  keywords: ["Chethan Kumar H R", "Java Full Stack Developer", "Spring Boot", "React", "Microservices", "System Architecture", "Bangalore Developer"],
  openGraph: {
    title: "Chethan Kumar H R | Java Full Stack Developer",
    description: "Write code that speaks for itself. Explore architecture diagrams, live GitHub stats, and enterprise microservices projects.",
    url: "https://chethanhrx.vercel.app",
    siteName: "Chethan HR Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans antialiased relative selection:bg-[#00f2fe] selection:text-black">
        {children}
      </body>
    </html>
  );
}
