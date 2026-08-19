import React from 'react';
import { Mail, Calendar, FileText, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export default function Contact({ profile }) {
  if (!profile) return null;

  const userEmail = profile.email || "ahmadjuniad007.07@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(userEmail)}`;

  return (
    <section id="contact" className="py-20 bg-slate-950/90 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>07 // Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Contact & Collaboration
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs font-mono text-slate-400">
            Open to Engineering Opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800/90 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Let’s Build Something Remarkable
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you are exploring potential engineering collaborations, discussing backend architecture and AI systems, or recruiting for software engineering roles—I’d love to connect.
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 font-mono text-xs text-teal-400 font-bold">
            {userEmail}
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Primary Gmail Compose Direct Button */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:scale-105"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Send Email (via Gmail)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {profile.bookingUrl && (
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Schedule a Meeting</span>
              </a>
            )}
          </div>

          {/* Social Links Row */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
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
                className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
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
                className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Resume / CV</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
