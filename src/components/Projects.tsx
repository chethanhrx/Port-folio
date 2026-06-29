'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Sparkles, Github, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS_DATA);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.repoStats) {
          setProjectsList((prev) =>
            prev.map((p) => {
              const lookupKey = p.id === 'watchtower' ? 'watch-tower' : p.id === 'neuramate' ? 'neura-mate' : p.id === 'eventbridge' ? 'event-bridge' : p.id;
              const liveStats = data.repoStats[lookupKey];
              if (liveStats) {
                return {
                  ...p,
                  stats: {
                    stars: liveStats.stars,
                    forks: liveStats.forks,
                    language: liveStats.language || p.stats?.language || 'Code'
                  }
                };
              }
              return p;
            })
          );
        }
      })
      .catch((err) => console.error('Error fetching live github stars:', err));
  }, []);

  const categories = [
    'All Projects',
    'Backend / Microservices',
    'Full Stack Apps',
    'AI / ML Integrated',
    'Tools & Automation'
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Layers size={16} />
          <span className="font-extrabold">Featured Engineering Works</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Systems & Applications <br />
          <span className="galaxy-text">Architected for Scale</span>
        </h2>
        
        <p className="text-white/40 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Click any card below to inspect its architectural blueprints, data flow, solved bottlenecks, and live telemetry.
        </p>
      </div>

      {/* Filterable Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2.5 transform hover:-translate-y-0.5 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan'
                : 'bg-white/[0.04] backdrop-blur-md border border-white/[0.08] text-white/50 hover:text-cyan-400 hover:border-cyan-500/30'
            }`}
          >
            <span>{category}</span>
            {selectedCategory === category && <Sparkles size={16} className="animate-spin-slow" />}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
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
              className="group cursor-pointer rounded-3xl glass-card glass-card-hover transition-all duration-500 p-8 flex flex-col justify-between transform hover:-translate-y-2.5 relative overflow-hidden"
            >
              {/* Top glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-extrabold">
                    {project.category}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-white/30 font-bold mb-5">
                  {project.role} • <span className="text-white/50">{project.year}</span>
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tech Badges & Live GitHub Stats */}
              <div className="space-y-4 pt-5 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-bold text-white/60 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1.5 rounded-xl bg-white/[0.06] text-xs font-extrabold text-white/40">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {project.stats && (
                  <div className="flex items-center justify-between text-xs font-mono text-white/40 pt-1">
                    <span className="flex items-center gap-1.5 font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      {project.stats.stars} Verified Stars
                    </span>
                    <span className="flex items-center gap-1 text-white/50 font-bold hover:text-cyan-400 transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}>
                      <Github size={14} /> Repository &rarr;
                    </span>
                  </div>
                )}
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
