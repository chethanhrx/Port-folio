'use client';

import React from 'react';
import { ArrowUp, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const SHARE_TEXT = 'Chethan Kumar H R — Java Full Stack Developer & Architect';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareLinks = [
    { name: 'Share on LinkedIn', Icon: Linkedin, id: 'linkedin' },
    { name: 'Share on X', Icon: Twitter, id: 'x' },
    { name: 'Share on WhatsApp', Icon: MessageCircle, id: 'whatsapp' },
  ] as const;

  const openShare = (id: 'linkedin' | 'x' | 'whatsapp') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(SHARE_TEXT);
    const hrefs = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${window.location.href}`)}`,
    };
    window.open(hrefs[id], '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-10 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} <a href="/" className="hover:text-gray-900 transition-colors">Chethan Kumar H R</a>. Built with Next.js.</span>
            <div className="hidden sm:flex items-center gap-4">
              <a href="#about" className="hover:text-gray-900 transition-colors">About Me</a>
              <a href="#projects" className="hover:text-gray-900 transition-colors">My Projects</a>
              <a href="#experience" className="hover:text-gray-900 transition-colors">Career</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Reach Out</a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-all text-sm font-medium flex items-center gap-2 cursor-pointer"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 pt-5 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-medium mr-2">Share</span>
          {shareLinks.map(({ name, Icon, id }) => (
            <button
              key={name}
              onClick={() => openShare(id)}
              aria-label={name}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all cursor-pointer"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
