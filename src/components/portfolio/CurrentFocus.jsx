import React from 'react';
import { Sparkles, Brain, Target } from 'lucide-react';

export default function CurrentFocus({ currentFocus }) {
  if (!currentFocus) return null;

  // Split description by newlines to render clean separate paragraphs
  const paragraphs = (currentFocus.fypDescription || '')
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <section id="focus" className="py-20 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>06 // Active Engineering R&D</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Current Focus & FYP Capstone
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs font-mono text-slate-400">
            Active R&D & Learning Goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main FYP Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold text-teal-300 bg-teal-950/90 border border-teal-500/30 rounded-lg mb-6">
                <Brain className="w-4 h-4" />
                <span>Final Year Project (FYP)</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {currentFocus.fypTitle}
              </h3>

              {/* Multi-Paragraph Description Rendering */}
              <div className="space-y-4 mb-6">
                {paragraphs.length > 0 ? (
                  paragraphs.map((para, idx) => (
                    <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentFocus.fypDescription}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Architecture: LLM + Episodic Context Store
              </span>
              <span className="px-3 py-1 text-xs font-mono font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-md">
                In Development
              </span>
            </div>
          </div>

          {/* Learning Goals Column */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-slate-100">
                  Active Learning Milestones
                </h3>
              </div>

              <div className="space-y-4">
                {(currentFocus.learningGoals || []).map((goal, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                    <span className="text-xs font-mono font-extrabold text-teal-400 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
