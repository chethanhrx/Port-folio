'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Github, Star, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { PROJECTS_DATA as projectsData } from '@/data/projects';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';
import GravityCard from './GravityCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#262223] pb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono font-black mb-4 shadow-sm tracking-widest uppercase">
            <Sparkles size={13} className="text-[#FFB6A6]" />
            <span>ENGINEERING BLUEPRINTS // SYSTEMS ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#FFEBD3] uppercase">
            Featured <span className="text-[#FFB6A6]">Architectures</span>
          </h2>
        </div>
        <p className="text-[#FFEBD3]/75 text-base max-w-md font-normal leading-relaxed font-sans">
          Production-grade microservices, high-throughput event engines, and distributed topologies built for zero downtime.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-sm text-xs sm:text-sm font-mono font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              selectedCategory === category
                ? 'bg-[#FFB6A6] text-[#141213] shadow-lg shadow-[#FFB6A6]/20 border border-[#FFB6A6]'
                : 'bg-[#181617] border border-[#262223] text-[#FFEBD3]/75 hover:text-[#9BCEC1] hover:border-[#9BCEC1]/60'
            }`}
          >
            <span>{category}</span>
            {selectedCategory === category && <span className="w-1.5 h-1.5 rounded-full bg-[#141213]" />}
          </button>
        ))}
      </div>

      {/* Solid Architectural Asymmetric Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const isFeaturedLarge = idx === 0 || project.featured;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                key={project.id}
                className={isFeaturedLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
              >
                <GravityCard
                  onClick={() => setActiveProject(project)}
                  className={`group cursor-pointer rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1D1B1C] transition-all duration-500 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden h-full shadow-2xl ${
                    isFeaturedLarge ? 'border-[#FFB6A6]/40 bg-[#1A1819]' : ''
                  }`}
                >
                  {/* Top solid accent line indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFB6A6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-6">
                    {/* Header Row: Index number & Category tag */}
                    <div className="flex items-center justify-between border-b border-[#262223] pb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-black text-[#9BCEC1] tracking-widest uppercase">
                          [0{idx + 1}] // {project.category}
                        </span>
                        {isFeaturedLarge && (
                          <span className="px-3 py-1 rounded-sm bg-[#FFEBD3] text-[#141213] font-mono text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-sm">
                            <Star size={11} className="fill-[#141213] text-[#141213]" /> Featured System
                          </span>
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-sm bg-[#141213] border border-[#262223] flex items-center justify-center text-[#FFEBD3]/70 group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all duration-300">
                        <ArrowRight size={17} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className={`${isFeaturedLarge ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} font-black text-[#FFEBD3] tracking-tight group-hover:text-[#FFB6A6] transition-colors mb-2`}>
                        {project.title}
                      </h3>
                      <div className="text-xs font-mono text-[#FFEBD3]/70 font-bold uppercase tracking-wider">
                        ROLE: <span className="text-[#FFEBD3] font-black">{project.role}</span> • DEPLOYED: <span className="text-[#67A2C5] font-black">{project.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-[#FFEBD3]/85 text-sm leading-relaxed font-normal ${isFeaturedLarge ? 'max-w-2xl text-base' : 'line-clamp-3'}`}>
                      {project.shortDescription}
                    </p>

                    {/* Architectural Highlights / Telemetry preview for large cards */}
                    {isFeaturedLarge && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-sm bg-[#141213] border border-[#262223] font-mono text-xs">
                        <div className="flex items-center gap-2.5 text-[#FFEBD3] font-bold">
                          <CheckCircle2 size={15} className="text-[#9BCEC1] flex-shrink-0" />
                          <span>Zero-Downtime Pipeline</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-[#FFEBD3] font-bold">
                          <Cpu size={15} className="text-[#FFB6A6] flex-shrink-0" />
                          <span>High-Concurrency I/O</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-[#FFEBD3] font-bold">
                          <Layers size={15} className="text-[#67A2C5] flex-shrink-0" />
                          <span>Event-Driven Architecture</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Badges & Live GitHub Stats */}
                  <div className="space-y-4 pt-6 mt-6 border-t border-[#262223]">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, isFeaturedLarge ? 7 : 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 rounded-sm bg-[#141213] border border-[#262223] text-xs font-mono font-bold text-[#FFEBD3]/90 group-hover:border-[#67A2C5]/60 group-hover:text-[#67A2C5] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > (isFeaturedLarge ? 7 : 4) && (
                        <span className="px-2.5 py-1.5 rounded-sm bg-[#141213] text-xs font-mono font-black text-[#FFEBD3]/60">
                          +{project.techStack.length - (isFeaturedLarge ? 7 : 4)}
                        </span>
                      )}
                    </div>

                    {project.stats && (
                      <div className="flex items-center justify-between text-xs font-mono text-[#FFEBD3]/70 pt-2 border-t border-[#262223]/50">
                        <span className="flex items-center gap-1.5 font-extrabold text-[#67A2C5] bg-[#67A2C5]/15 px-3 py-1 rounded-sm border border-[#67A2C5]/40 tracking-wider uppercase">
                          <Star size={13} className="fill-[#67A2C5] text-[#67A2C5]" />
                          {project.stats.stars} Verified Stars
                        </span>
                        <span
                          className="flex items-center gap-1 text-[#FFEBD3] font-black hover:text-[#FFB6A6] transition-colors tracking-wider uppercase"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github size={14} /> Repository &rarr;
                        </span>
                      </div>
                    )}
                  </div>
                </GravityCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
