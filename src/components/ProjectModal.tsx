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
          className="fixed inset-0 bg-black/70 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-black/95 backdrop-blur-3xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.6)] z-10 p-6 sm:p-10 text-white space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] text-white/60 hover:text-white transition-all z-20"
          >
            <X size={20} />
          </button>

          {/* Header Banner */}
          <div className={`p-8 rounded-2xl bg-gradient-to-tr ${project.previewColor} relative overflow-hidden flex flex-col justify-end min-h-[160px]`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-extrabold">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white/70 font-bold">{project.year}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-white/80 font-bold mt-1">Role: {project.role}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-sm flex items-center gap-2 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
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
                className="px-7 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 text-white/80 font-extrabold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink size={18} className="text-cyan-400" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-extrabold flex items-center gap-2">
              <Layers size={18} />
              Executive Architecture Overview
            </h4>
            <p className="text-white/60 text-base leading-relaxed bg-white/[0.03] p-6 rounded-2xl border border-white/5 font-medium">
              {project.overview}
            </p>
          </div>

          {/* System Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-extrabold flex items-center gap-2">
                <Cpu size={18} />
                System Blueprint & Derivations
              </h4>
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 font-mono text-sm text-cyan-200/80 leading-relaxed">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Features Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-extrabold flex items-center gap-2">
              <CheckCircle2 size={18} />
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span className="text-sm text-white/60 font-semibold leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solved Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-extrabold flex items-center gap-2">
                <AlertTriangle size={18} />
                Solved Bottlenecks & Challenges
              </h4>
              <div className="space-y-2.5">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200/80 text-sm leading-relaxed font-semibold">
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 font-extrabold flex items-center gap-2">
              <Terminal size={16} />
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-extrabold text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
