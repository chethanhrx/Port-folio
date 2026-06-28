'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Layers, Cpu, AlertTriangle, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06080f]/85 backdrop-blur-xl"
        />

        {/* Clean Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1423] border border-white/15 shadow-2xl z-10 custom-scrollbar p-6 sm:p-10 text-white space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all shadow-sm z-20"
          >
            <X size={20} />
          </button>

          {/* Header Banner */}
          <div className={`p-8 rounded-xl bg-gradient-to-tr ${project.previewColor} relative overflow-hidden flex flex-col justify-end min-h-[150px] shadow-md`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-[#06080f]/90 border border-white/10 text-accentCyan text-xs font-mono font-bold">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-300 font-medium">{project.year}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-accentCyan font-bold mt-1">Role: {project.role}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-accentCyan hover:bg-cyan-300 text-black font-bold text-sm flex items-center gap-2 transition-all shadow-glow-cyan"
              >
                <Github size={18} />
                <span>View Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-accentCyan text-white font-bold text-sm flex items-center gap-2 transition-all"
              >
                <ExternalLink size={18} className="text-accentCyan" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-accentCyan font-bold flex items-center gap-2">
              <Layers size={18} />
              Executive Architecture Overview
            </h4>
            <p className="text-gray-300 text-base leading-relaxed bg-[#06080f]/60 p-6 rounded-xl border border-white/10">
              {project.overview}
            </p>
          </div>

          {/* System Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-accentCyan font-bold flex items-center gap-2">
                <Cpu size={18} />
                System Blueprint & Derivations
              </h4>
              <div className="p-6 rounded-xl bg-[#06080f] border border-white/10 font-mono text-sm text-cyan-200 leading-relaxed shadow-inner">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Features Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-accentCyan font-bold flex items-center gap-2">
              <CheckCircle2 size={18} />
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="text-accentCyan font-bold mt-0.5">•</span>
                  <span className="text-sm text-gray-200 font-medium leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solved Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <AlertTriangle size={18} />
                Solved Bottlenecks & Challenges
              </h4>
              <div className="space-y-2.5">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm leading-relaxed">
                    💡 {challenge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
              <Terminal size={16} />
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-200"
                >
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
