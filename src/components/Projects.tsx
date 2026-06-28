'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All Projects',
    'Backend / Microservices',
    'Full Stack Apps',
    'AI / ML Integrated',
    'Tools & Automation'
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Layers size={15} />
          <span className="font-bold">Featured Engineering Works</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Systems & Applications <br />
          <span className="text-accentCyan">Architected for Scale</span>
        </h2>
        
        <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          Click any card below to inspect its architectural blueprints, data flow, solved bottlenecks, and telemetry.
        </p>
      </div>

      {/* Filterable Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category
                ? 'bg-accentCyan text-black shadow-glow-cyan'
                : 'bg-[#0f1423] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#161e33]'
            }`}
          >
            <span>{category}</span>
            {selectedCategory === category && <Sparkles size={15} />}
          </button>
        ))}
      </div>

      {/* Clean Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 transition-all duration-300 shadow-lg hover:shadow-card-hover overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              {/* Top Banner Gradient */}
              <div className={`h-48 bg-gradient-to-tr ${project.previewColor} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#06080f]/90 border border-white/10 text-[11px] font-mono font-bold text-accentCyan">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#06080f]/90 border border-white/15 flex items-center justify-center text-white group-hover:bg-accentCyan group-hover:text-black group-hover:border-accentCyan transition-all duration-300 shadow-sm">
                    <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-accentCyan transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-300 font-medium">{project.role} • {project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 group-hover:border-cyan-500/30 group-hover:text-accentCyan transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-white/5 text-xs font-bold text-gray-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
