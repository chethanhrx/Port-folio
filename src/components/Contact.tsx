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
      <div className="flex flex-col items-center text-center mb-16 relative border-b border-[#262223] pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono font-black mb-6 uppercase tracking-widest shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFB6A6] animate-pulse" />
          <span>OPEN FOR FULL-TIME // ARCHITECTURAL ROLES</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-[#FFEBD3] tracking-tight mb-6 uppercase">
          Initiate <br />
          <span className="text-[#FFB6A6]">Engineering Dialogue</span>
        </h2>
        <p className="text-[#FFEBD3]/75 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
          Whether you have an enterprise full-time opportunity, an architectural bottleneck, or want to collaborate on high-concurrency systems—transmit your inquiry below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Coordinates */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-8 sm:p-10 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] transition-all duration-500 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-black text-[#FFEBD3] tracking-tight border-b border-[#262223] pb-5 flex items-center gap-2.5 uppercase">
              <Sparkles className="text-[#FFB6A6]" size={20} />
              Direct Coordinates
            </h3>

            {/* Email */}
            <a
              href="mailto:chethankumarhr751@gmail.com"
              className="flex items-center gap-4 p-4.5 rounded-sm bg-[#141213] border border-[#262223] hover:border-[#9BCEC1] hover:bg-[#9BCEC1]/10 transition-all group"
            >
              <div className="p-3.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9BCEC1] font-black block mb-0.5">// EMAIL TRANSMISSION</span>
                <span className="text-sm sm:text-base font-bold text-[#FFEBD3] group-hover:text-[#FFB6A6] transition-colors truncate block">
                  chethankumarhr751@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919380575918"
              className="flex items-center gap-4 p-4.5 rounded-sm bg-[#141213] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#FFB6A6]/10 transition-all group"
            >
              <div className="p-3.5 rounded-sm bg-[#181617] border border-[#FFB6A6]/40 text-[#FFB6A6] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFB6A6] font-black block mb-0.5">// DIRECT LINE</span>
                <span className="text-sm sm:text-base font-bold text-[#FFEBD3] group-hover:text-[#FFB6A6] transition-colors">
                  +91 9380575918
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4.5 rounded-sm bg-[#141213] border border-[#262223]">
              <div className="p-3.5 rounded-sm bg-[#181617] border border-[#67A2C5]/40 text-[#67A2C5]">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#67A2C5] font-black block mb-0.5">// BASE LOCATION</span>
                <span className="text-sm sm:text-base font-bold text-[#FFEBD3]">
                  Bangalore, India // Remote
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Strip */}
          <div className="p-7 rounded-sm bg-[#181617] border border-[#262223] flex items-center justify-between shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFEBD3]/60 font-black">Social Telemetry:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/chethanhrx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-sm bg-[#141213] hover:bg-[#FFB6A6] hover:text-[#141213] text-[#FFEBD3] border border-[#262223] transition-all transform hover:-translate-y-0.5"
              >
                <Github size={18} />
              </a>
              <a
                href="https://leetcode.com/u/chethank_hr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-3.5 rounded-sm bg-[#141213] hover:bg-[#9BCEC1] hover:text-[#141213] text-[#FFEBD3] border border-[#262223] transition-all transform hover:-translate-y-0.5"
              >
                <Code2 size={18} />
              </a>
              <a
                href="https://t.me/chethank_hr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-3.5 rounded-sm bg-[#141213] hover:bg-[#67A2C5] hover:text-[#141213] text-[#FFEBD3] border border-[#262223] transition-all transform hover:-translate-y-0.5"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="p-8 sm:p-12 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] transition-all duration-500 space-y-6 shadow-2xl">
            <h3 className="text-3xl font-black text-[#FFEBD3] tracking-tight uppercase">
              Transmit a Message
            </h3>
            <p className="text-[#FFEBD3]/75 text-sm sm:text-base leading-relaxed font-normal">
              Fill out the form below to route a priority transmission directly to my engineering workspace.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-sm bg-[#141213] border border-[#9BCEC1] text-center space-y-4 my-12"
              >
                <CheckCircle2 size={50} className="text-[#9BCEC1] mx-auto animate-bounce" />
                <h4 className="text-2xl font-black text-[#FFEBD3] uppercase">Transmission Confirmed!</h4>
                <p className="text-sm sm:text-base text-[#FFEBD3]/80 max-w-md mx-auto leading-relaxed font-normal">
                  Thank you for reaching out, <span className="font-black text-[#FFB6A6]">{formState.name || 'Engineer'}</span>. Your inquiry has been logged with highest priority. I will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black mb-2">
                    // YOUR NAME OR ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera, VP of Architecture"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-sm bg-[#141213] border border-[#262223] text-[#FFEBD3] placeholder-[#FFEBD3]/30 focus:outline-none focus:border-[#FFB6A6] focus:ring-1 focus:ring-[#FFB6A6] transition-all text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black mb-2">
                    // DIRECT EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-sm bg-[#141213] border border-[#262223] text-[#FFEBD3] placeholder-[#FFEBD3]/30 focus:outline-none focus:border-[#FFB6A6] focus:ring-1 focus:ring-[#FFB6A6] transition-all text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black mb-2">
                    // PROJECT SCOPE OR ROLE SPECIFICATION
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Chethan, we reviewed your architecture portfolio and would love to discuss an engineering deployment..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-sm bg-[#141213] border border-[#262223] text-[#FFEBD3] placeholder-[#FFEBD3]/30 focus:outline-none focus:border-[#FFB6A6] focus:ring-1 focus:ring-[#FFB6A6] transition-all text-sm font-semibold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-[#FFB6A6]/20 transform hover:-translate-y-0.5 group uppercase tracking-wider cursor-pointer"
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
