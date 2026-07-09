import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveStats from '@/components/LiveStats';
import About from '@/components/About';
import Projects from '@/components/Projects';
import GithubActivity from '@/components/GithubActivity';
import Experience from '@/components/Experience';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <main className="relative min-h-screen bg-[#141213] text-[#FFEBD3] overflow-x-hidden selection:bg-[#FFB6A6] selection:text-[#141213]">

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Live Counter Stats Bar */}
      <LiveStats />

      {/* About Section */}
      <About />

      {/* Projects Section with Tabs & Detail Modal */}
      <Projects />

      {/* GitHub Activity & Pinned Repos */}
      <GithubActivity />

      {/* Experience & Education Timeline */}
      <Experience />

      {/* Technical Write-ups & Resources */}
      <Resources />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
