'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Code2, Linkedin } from 'lucide-react';

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
    <section id="contact" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-3 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base leading-relaxed">
            Have a role or project in mind? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email */}
            <a
              href="mailto:chethankumarhr751@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-accent/30 hover:shadow-sm transition-all group"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block mb-0.5">Email</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-accent transition-colors">
                  chethankumarhr751@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919380575918"
              className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-accent/30 hover:shadow-sm transition-all group"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block mb-0.5">Phone</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-accent transition-colors">
                  +91 9380575918
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-200">
              <div className="p-3 rounded-xl bg-gray-100 text-gray-500">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block mb-0.5">Location</span>
                <span className="text-sm font-medium text-gray-700">
                  Bangalore, India · Open to Remote
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/chethanhrx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-900 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/chethan-kumar-h-r-648bab33a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-white border border-gray-200 hover:border-[#0A66C2] text-gray-500 hover:text-[#0A66C2] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/chethank_hr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-900 transition-all"
              >
                <Code2 size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-10 rounded-2xl bg-white border border-gray-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 size={48} className="text-green-500 mx-auto" />
                  <h4 className="text-xl font-semibold text-gray-900">Message Sent!</h4>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out{formState.name ? `, ${formState.name}` : ''}. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about the role or project you have in mind..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
