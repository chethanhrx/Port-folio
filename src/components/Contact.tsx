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
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-500/30 text-blue-600 text-xs font-mono font-extrabold mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Open to Full-time / Internship Opportunities</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Initiate <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Communication</span>
        </h2>
        <p className="text-slate-500 max-w-xl text-base sm:text-lg leading-relaxed font-medium">
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
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-5 flex items-center gap-2.5">
              <Sparkles className="text-blue-600 animate-spin-slow" size={22} />
              Direct Coordinates
            </h3>

            {/* Email */}
            <a
              href="mailto:chethankumarhr751@gmail.com"
              className="flex items-center gap-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all group shadow-2xs"
            >
              <div className="p-3.5 rounded-xl bg-blue-100/60 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-extrabold block mb-0.5">Email Address</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors truncate block">
                  chethankumarhr751@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919380575918"
              className="flex items-center gap-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all group shadow-2xs"
            >
              <div className="p-3.5 rounded-xl bg-indigo-100/60 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-extrabold block mb-0.5">Phone Number</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  +91 9380575918
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="p-3.5 rounded-xl bg-violet-100/60 text-violet-600 shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-extrabold block mb-0.5">Current Location</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Strip */}
          <div className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-extrabold">Social Telemetry:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/chethanhrx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all font-bold shadow-sm transform hover:-translate-y-0.5"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/chethank_hr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-3.5 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all font-bold shadow-sm transform hover:-translate-y-0.5"
              >
                <Code2 size={20} />
              </a>
              <a
                href="https://t.me/chethank_hr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-3.5 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all font-bold shadow-sm transform hover:-translate-y-0.5"
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
          <div className="p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Transmit a Message
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Fill out this form to route a direct message to my personal terminal.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 my-12 shadow-sm"
              >
                <CheckCircle2 size={60} className="text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-2xl font-black text-slate-900">Transmission Successful!</h4>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you for reaching out, <span className="font-extrabold text-blue-600">{formState.name || 'friend'}</span>. Your inquiry has been logged. I will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-extrabold mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera, VP of Engineering"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm font-semibold shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-extrabold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm font-semibold shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-extrabold mb-2">
                    Project Scope / Role Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Chethan, we were impressed by your architecture approach and would love to discuss an opening for a Java Full Stack role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm font-semibold resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-glow-cyan transform hover:-translate-y-1 group"
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
