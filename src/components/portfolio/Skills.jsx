import React from 'react';
import { Cpu, Server, Layout, Database, Wrench } from 'lucide-react';

export default function Skills({ skillCategories }) {
  if (!skillCategories || skillCategories.length === 0) return null;

  const categoryIcons = {
    "Backend Engineering": Server,
    "AI & GenAI Systems": Cpu,
    "Frontend Development": Layout,
    "Databases & Storage": Database,
    "Tools & Deployment": Wrench,
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>04 // Technical Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Skills & Engineering Stack
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs font-mono text-slate-400">
            Categorized Core Competencies
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Server;
            return (
              <div
                key={category.id || category.name}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-teal-400 group-hover:bg-teal-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {(category.skills || []).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono text-slate-200 bg-slate-800/90 border border-slate-700/70 rounded-lg group-hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
