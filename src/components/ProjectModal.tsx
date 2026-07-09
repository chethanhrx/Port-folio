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
          className="fixed inset-0 bg-[#141213]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm bg-[#181617] border border-[#262223] shadow-2xl z-10 p-6 sm:p-10 text-[#FFEBD3] space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-sm bg-[#141213] border border-[#262223] hover:border-[#FFB6A6] text-[#FFEBD3]/70 hover:text-[#FFB6A6] transition-all z-20 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Header Banner */}
          <div className="p-8 rounded-sm bg-[#141213] border border-[#262223] relative overflow-hidden flex flex-col justify-end min-h-[160px]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFB6A6]" />
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono font-black uppercase tracking-widest">
                  // {project.category}
                </span>
                <span className="text-xs font-mono text-[#67A2C5] font-black uppercase tracking-wider">DEPLOYED: {project.year}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#FFEBD3] tracking-tight uppercase">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-[#FFEBD3]/80 font-bold uppercase tracking-wider">Role: <span className="text-[#FFEBD3] font-black">{project.role}</span></p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-b border-[#262223] pb-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#FFB6A6]/20 transform hover:-translate-y-0.5"
              >
                <Github size={16} />
                <span>Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-sm bg-[#141213] border border-[#67A2C5]/50 hover:border-[#67A2C5] text-[#FFEBD3] font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink size={16} className="text-[#67A2C5]" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black flex items-center gap-2">
              <Layers size={16} className="text-[#FFB6A6]" />
              Executive Architecture Overview
            </h4>
            <p className="text-[#FFEBD3]/85 text-base leading-relaxed bg-[#141213] p-6 rounded-sm border border-[#262223] font-normal">
              {project.overview}
            </p>
          </div>

          {/* System Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black flex items-center gap-2">
                <Cpu size={16} className="text-[#FFB6A6]" />
                System Blueprint & Derivations
              </h4>
              <div className="p-6 rounded-sm bg-[#141213] border border-[#262223] font-mono text-sm text-[#FFEBD3]/90 leading-relaxed">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Features Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9BCEC1] font-black flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#FFB6A6]" />
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-sm bg-[#141213] border border-[#262223] flex items-start gap-3">
                  <span className="text-[#9BCEC1] font-black mt-0.5">•</span>
                  <span className="text-sm text-[#FFEBD3]/80 font-normal leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solved Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFB6A6] font-black flex items-center gap-2">
                <AlertTriangle size={16} />
                Solved Bottlenecks & Challenges
              </h4>
              <div className="space-y-2.5">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-[#141213] border border-[#FFB6A6]/40 text-[#FFEBD3]/85 text-sm leading-relaxed font-normal">
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-[#262223]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#67A2C5] font-black flex items-center gap-2">
              <Terminal size={16} />
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-sm bg-[#141213] border border-[#262223] text-xs font-mono font-bold text-[#FFEBD3] uppercase tracking-wider"
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
