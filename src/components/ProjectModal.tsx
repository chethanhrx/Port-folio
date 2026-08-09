'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { getTechIcon } from '@/utils/getTechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayed, setDisplayed] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (project) {
      setDisplayed(project);
      setIsOpen(true);
    }
  }, [project]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && displayed && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal wrapper — scrollable, never clips the top on short screens */}
          <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={displayed.title}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl my-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-gray-200 shadow-2xl z-10 p-6 sm:p-10 text-gray-900 pointer-events-auto"
            >
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                aria-label="Close project details"
                className="absolute top-5 right-5 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all z-20 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {displayed.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{displayed.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                  {displayed.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{displayed.role}</p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                {displayed.githubUrl && (
                  <a
                    href={displayed.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium flex items-center gap-2 transition-all"
                  >
                    <Github size={15} />
                    View Source
                  </a>
                )}
                {displayed.liveUrl && (
                  <a
                    href={displayed.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium flex items-center gap-2 transition-all"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {displayed.overview}
                </p>
              </div>

              {/* Architecture */}
              {displayed.architecture && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Architecture</h4>
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 text-sm leading-relaxed">
                    {displayed.architecture}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="space-y-2">
                  {displayed.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              {displayed.challenges && displayed.challenges.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Challenges Solved</h4>
                  <div className="space-y-2">
                    {displayed.challenges.map((challenge, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-100/80 text-gray-600 text-sm leading-relaxed">
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {displayed.techStack.map((tech, idx) => {
                    const iconUrl = getTechIcon(tech);
                    return (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600"
                      >
                        {iconUrl && (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={iconUrl} alt={tech} className="w-4 h-4 object-contain" />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
