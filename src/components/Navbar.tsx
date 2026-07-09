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
          ? 'bg-[#141213]/90 backdrop-blur-md border-b border-[#262223] py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-sm bg-[#FFB6A6] text-[#141213] font-mono font-black text-base flex items-center justify-center border border-[#FFEBD3] group-hover:bg-[#FFEBD3] group-hover:text-[#141213] transition-all duration-300 shadow-md">
            CH
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-[#FFEBD3] flex items-center gap-1 uppercase">
              CHETHAN<span className="text-[#FFB6A6]">.HR</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#9BCEC1] font-mono uppercase flex items-center gap-1.5 font-black">
              <span className="w-2 h-2 rounded-full bg-[#9BCEC1] animate-pulse" />
              ORTEX FOUNDER & ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-[#181617] border border-[#262223] px-8 py-3 rounded-sm shadow-xl hover:border-[#9BCEC1]/50 transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-black text-[#FFEBD3]/85 hover:text-[#FFB6A6] transition-colors relative group py-1 uppercase tracking-wider"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFB6A6] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-xs transition-all flex items-center gap-2 shadow-xl shadow-[#FFB6A6]/20 transform hover:-translate-y-0.5 tracking-wider uppercase cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded-sm bg-[#181617] border border-[#262223] text-[#FFEBD3] hover:text-[#FFB6A6] transition-all cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#181617] border-b border-[#262223] p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono font-black uppercase tracking-wider text-[#FFEBD3] hover:text-[#FFB6A6] py-3 border-b border-[#262223] flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight size={18} className="text-[#9BCEC1]" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-4 rounded-sm bg-[#FFB6A6] text-[#141213] font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xl"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
