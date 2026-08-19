import React, { useState } from 'react';
import { Code2, ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  if (!projects || projects.length === 0) return null;

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filterCategory === 'All'
    ? projects
    : projects.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Code2 className="w-4 h-4" />
              <span>03 // Portfolio & Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Work & Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  filterCategory === cat
                    ? 'bg-teal-400 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 group"
            >
              {/* Visual Card Header Gradient Overlay */}
              <div className={`h-40 bg-gradient-to-br ${project.imageTheme || "from-indigo-600/20 to-slate-900/40"} relative p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-200 bg-slate-950/80 border border-slate-700/80 rounded-md backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-teal-300 bg-teal-950/90 border border-teal-500/40 rounded-md">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(project.technologies || []).slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Details & Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4 text-teal-400" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-sm shadow-teal-500/20"
                        title="View Live Demo"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
