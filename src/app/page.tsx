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
import Background3D from '@/components/Background3D';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden">
      {/* 3D Galaxy Blackhole WebGL Background */}
      <Background3D />

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
