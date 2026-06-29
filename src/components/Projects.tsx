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
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-blue-600 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Layers size={16} />
          <span className="font-extrabold">Featured Engineering Works</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Systems & Applications <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Architected for Scale</span>
        </h2>
        
        <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Click any card below to inspect its architectural blueprints, data flow, solved bottlenecks, and live telemetry. Designed with clean Antigravity precision.
        </p>
      </div>

      {/* Filterable Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2.5 shadow-sm transform hover:-translate-y-0.5 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-glow-cyan'
                : 'bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:border-blue-500/50 hover:bg-blue-50/40'
            }`}
          >
            <span>{category}</span>
            {selectedCategory === category && <Sparkles size={16} className="animate-spin-slow" />}
          </button>
        ))}
      </div>

      {/* Monolithic Antigravity Glass Grid */}
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
              className="group cursor-pointer rounded-3xl bg-white/80 backdrop-blur-2xl border border-slate-200/80 hover:border-blue-500 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)] p-8 flex flex-col justify-between transform hover:-translate-y-2.5 relative overflow-hidden"
            >
              {/* Subtle top glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 font-mono text-xs font-extrabold shadow-2xs">
                    {project.category}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 font-bold mb-5">
                  {project.role} • <span className="text-slate-600">{project.year}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-medium mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tech Badges & Live GitHub Stats */}
              <div className="space-y-4 pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-700 group-hover:border-blue-500/40 group-hover:text-blue-600 group-hover:bg-blue-50/40 transition-all shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1.5 rounded-xl bg-slate-100 text-xs font-extrabold text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {project.stats && (
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5 font-extrabold text-slate-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                      <Star size={14} className="fill-amber-400 text-amber-500" />
                      {project.stats.stars} Verified Stars
                    </span>
                    <span className="flex items-center gap-1 text-slate-600 font-bold hover:text-blue-600 transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}>
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
