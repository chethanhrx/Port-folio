'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Code2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-cyan-500/20 text-cyan-400 text-xs font-mono font-extrabold mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Open to Full-time / Internship Opportunities</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Initiate <br />
          <span className="galaxy-text">Communication</span>
        </h2>
        <p className="text-white/40 max-w-xl text-base sm:text-lg leading-relaxed font-medium">
          Whether you have an exciting full-time role, an architectural bottleneck, or want to collaborate on high-scale systems—reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Coordinates */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-8 sm:p-10 rounded-3xl glass-card hover:border-cyan-500/20 transition-all duration-500 space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tight border-b border-white/5 pb-5 flex items-center gap-2.5">
              <Sparkles className="text-cyan-400 animate-spin-slow" size={22} />
              Direct Coordinates
            </h3>

            {/* Email */}
            <a
              href="mailto:chethankumarhr751@gmail.com"
              className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/30 font-extrabold block mb-0.5">Email Address</span>
                <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors truncate block">
                  chethankumarhr751@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919380575918"
              className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group"
            >
              <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/30 font-extrabold block mb-0.5">Phone Number</span>
                <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-purple-400 transition-colors">
                  +91 9380575918
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-400">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/30 font-extrabold block mb-0.5">Current Location</span>
                <span className="text-sm sm:text-base font-extrabold text-white">
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Strip */}
          <div className="p-7 rounded-3xl glass-card flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-white/30 font-extrabold">Social Telemetry:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/chethanhrx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 text-white/50 border border-white/[0.08] transition-all transform hover:-translate-y-0.5"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/chethank_hr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/30 text-white/50 border border-white/[0.08] transition-all transform hover:-translate-y-0.5"
              >
                <Code2 size={20} />
              </a>
              <a
                href="https://t.me/chethank_hr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30 text-white/50 border border-white/[0.08] transition-all transform hover:-translate-y-0.5"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="p-8 sm:p-12 rounded-3xl glass-card hover:border-cyan-500/20 transition-all duration-500 space-y-6">
            <h3 className="text-3xl font-black text-white tracking-tight">
              Transmit a Message
            </h3>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed font-medium">
              Fill out this form to route a direct message to my personal terminal.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 my-12"
              >
                <CheckCircle2 size={60} className="text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-2xl font-black text-white">Transmission Successful!</h4>
                <p className="text-sm sm:text-base text-white/60 max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you for reaching out, <span className="font-extrabold text-cyan-400">{formState.name || 'friend'}</span>. Your inquiry has been logged. I will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 font-extrabold mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera, VP of Engineering"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 font-extrabold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 font-extrabold mb-2">
                    Project Scope / Role Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Chethan, we were impressed by your architecture approach and would love to discuss an opening for a Java Full Stack role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all text-sm font-semibold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-black text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-glow-cyan transform hover:-translate-y-1 group"
                >
                  <span>Transmit Inquiry</span>
                  <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
