'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activity', href: '#activity' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-500/30 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:border-blue-600 transition-all shadow-sm">
            <Terminal size={22} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-slate-900 flex items-center gap-1">
              CHETHAN<span className="text-blue-600">.HR</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 font-mono uppercase flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Full Stack Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/90 border border-slate-200/80 px-8 py-3 rounded-full backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-glow-cyan transform hover:-translate-y-0.5"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-200 transition-all"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-700 hover:text-blue-600 py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight size={18} className="text-slate-400" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
