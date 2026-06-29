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
    <section id="projects" className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-slate-800 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Layers size={16} className="text-blue-600" />
          <span className="font-extrabold">Featured Engineering Works</span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Systems & Applications <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 bg-clip-text text-transparent">Architected for Scale</span>
        </h2>
        
        <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Click any card below to inspect its architectural blueprints, data flow, solved bottlenecks, and live telemetry. Showing real-time GitHub repository ratings.
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
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white/90 backdrop-blur-md border border-slate-300/80 text-slate-700 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50'
            }`}
          >
            <span>{category}</span>
            {selectedCategory === category && <Sparkles size={16} className="text-blue-400 animate-spin-slow" />}
          </button>
        ))}
      </div>

      {/* Clean Luxury Antigravity Projects Grid */}
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
              className="group cursor-pointer rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 hover:border-slate-400 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col justify-between transform hover:-translate-y-2 relative"
            >
              {/* Top Banner Gradient (Sleek Antigravity Dark Carbon viewport) */}
              <div className={`h-52 bg-gradient-to-tr ${project.previewColor} p-7 flex flex-col justify-between relative overflow-hidden border-b border-slate-100`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono font-extrabold text-white shadow-sm">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-bold drop-shadow-sm">{project.role} • {project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-medium">
                  {project.shortDescription}
                </p>

                {/* Tech Badges & Live GitHub Stats */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-bold text-slate-700 group-hover:border-slate-400 group-hover:text-slate-950 transition-all shadow-2xs"
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
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2">
                      <span className="flex items-center gap-1.5 font-extrabold text-slate-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                        <Star size={14} className="fill-amber-400 text-amber-500" />
                        {project.stats.stars} Real Stars
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 font-bold hover:text-blue-600" onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}>
                        <Github size={14} /> Repository &rarr;
                      </span>
                    </div>
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
