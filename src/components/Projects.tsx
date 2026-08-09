'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA as projectsData } from '@/data/projects';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';
import { getTechIcon } from '@/utils/getTechIcon';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const closeModal = useCallback(() => setActiveProject(null), []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-accent mb-3 block">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Selected work.
          </h2>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            A collection of projects showcasing backend architecture, full-stack applications, and system design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isLarge = idx === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  key={project.id}
                  className={isLarge ? 'md:col-span-2' : 'col-span-1'}
                >
                  <div
                    onClick={() => setActiveProject(project)}
                    className="group cursor-pointer rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-full"
                  >
                    {/* Top: Category & Year */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs font-medium text-gray-400">
                          {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-semibold text-gray-900 group-hover:text-accent transition-colors mb-2`}>
                        {project.title}
                      </h3>

                      {/* Role */}
                      <p className="text-xs text-gray-400 mb-3 font-medium">
                        {project.role}
                      </p>

                      {/* Description */}
                      <p className={`text-gray-500 text-sm leading-relaxed ${isLarge ? '' : 'line-clamp-3'}`}>
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Bottom: Tech tags & links */}
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, isLarge ? 6 : 4).map((tech, i) => {
                          const iconUrl = getTechIcon(tech);
                          return (
                            <span
                              key={i}
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500"
                            >
                              {iconUrl && (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={iconUrl} alt={tech} className="w-3.5 h-3.5 object-contain" />
                              )}
                              {tech}
                            </span>
                          );
                        })}
                        {project.techStack.length > (isLarge ? 6 : 4) && (
                          <span className="flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-gray-400">
                            +{project.techStack.length - (isLarge ? 6 : 4)}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          <Github size={14} />
                          View Source
                        </a>
                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <ProjectModal project={activeProject} onClose={closeModal} />
      </div>
    </section>
  );
}
