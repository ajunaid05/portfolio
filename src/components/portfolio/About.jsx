import React from 'react';
import { Terminal, Cpu, Layers, GraduationCap } from 'lucide-react';

export default function About({ about, profile }) {
  if (!about) return null;

  const defaultPillars = [
    {
      icon: Terminal,
      title: "Backend & API Engineering",
      description: "Designing REST APIs, request validation, database schemas, and microservice integration using FastAPI, Node.js, and C#."
    },
    {
      icon: Cpu,
      title: "AI Workflows & MCP Standards",
      description: "Implementing Model Context Protocol (MCP) servers, agentic prompt tools, and LLM orchestration for reliable, grounded AI operations."
    },
    {
      icon: Layers,
      title: "Full-Stack Web Delivery",
      description: "Building responsive React.js interfaces, managing application state, and deploying end-to-end applications to Vercel over HTTPS."
    }
  ];

  const pillarIcons = [Terminal, Cpu, Layers];

  return (
    <section id="about" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>01 // Background & Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {about.sectionTitle || "About & Technical Focus"}
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm font-mono text-slate-400">
            {about.sectionSub || "7th Semester BS Software Engineering • COMSATS University"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-medium leading-relaxed">
              {about.narrative1}
            </p>
            <p>
              {about.narrative2}
            </p>
            <p>
              {about.narrative3}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {(about.stats || []).map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-teal-400 font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Core Technical Pillars</h3>
            
            {(about.pillars || defaultPillars).map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length] || Terminal;
              return (
                <div
                  key={pillar.id || idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-teal-400 group-hover:bg-teal-500/10 group-hover:text-teal-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
