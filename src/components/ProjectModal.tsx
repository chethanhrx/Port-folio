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
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl"
        />

        {/* Clean Luxury Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.15)] z-10 custom-scrollbar p-6 sm:p-10 text-slate-900 space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all shadow-sm z-20"
          >
            <X size={20} />
          </button>

          {/* Header Banner */}
          <div className={`p-8 rounded-2xl bg-gradient-to-tr ${project.previewColor} relative overflow-hidden flex flex-col justify-end min-h-[160px] shadow-md`}>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 text-slate-900 text-xs font-mono font-extrabold shadow-sm">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white font-bold drop-shadow-sm">{project.year}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-white/90 font-bold mt-1 drop-shadow-sm">Role: {project.role}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm flex items-center gap-2 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
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
                className="px-7 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 hover:border-blue-500 text-slate-800 font-extrabold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink size={18} className="text-blue-600" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-blue-600 font-extrabold flex items-center gap-2">
              <Layers size={18} />
              Executive Architecture Overview
            </h4>
            <p className="text-slate-700 text-base leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200 font-medium">
              {project.overview}
            </p>
          </div>

          {/* System Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-blue-600 font-extrabold flex items-center gap-2">
                <Cpu size={18} />
                System Blueprint & Derivations
              </h4>
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-sm text-blue-100 leading-relaxed shadow-inner">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Features Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-blue-600 font-extrabold flex items-center gap-2">
              <CheckCircle2 size={18} />
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-2xs">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span className="text-sm text-slate-700 font-semibold leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solved Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-amber-600 font-extrabold flex items-center gap-2">
                <AlertTriangle size={18} />
                Solved Bottlenecks & Challenges
              </h4>
              <div className="space-y-2.5">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed font-semibold">
                    💡 {challenge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-extrabold flex items-center gap-2">
              <Terminal size={16} />
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-extrabold text-blue-700 shadow-2xs"
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
