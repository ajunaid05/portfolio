import React from 'react';
import { ArrowRight, FileText, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export default function Hero({ profile }) {
  if (!profile) return null;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-xs font-mono text-teal-300 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span>FlyRank AI Engineering Intern • BS Software Engineering (COMSATS)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
            {profile.headline}
          </h1>

          {/* Subheadline & Positioning */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {profile.subheadline}. {profile.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20 hover:scale-[1.02] active:scale-95"
            >
              <span>View Featured Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 hover:border-slate-600"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
            <span className="text-slate-500 font-mono uppercase tracking-wider text-[11px]">Connect:</span>
            
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-teal-400" />
                <span>GitHub</span>
              </a>
            )}

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-teal-400" />
                <span>LinkedIn</span>
              </a>
            )}

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Resume / CV</span>
              </a>
            )}

            {profile.bookingUrl && (
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book a Call</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
