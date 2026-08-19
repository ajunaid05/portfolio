import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ExternalLink, Eye, X } from 'lucide-react';

export default function Experience({ experience }) {
  const [selectedCertImage, setSelectedCertImage] = useState(null);

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" />
              <span>02 // Experience & Work History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Engineering Experience
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs font-mono text-slate-400">
            Professional & Internship Roles
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 md:pl-8 border-l border-slate-800 space-y-12">
          {experience.map((item) => {
            const hasCert = Boolean(
              (item.certificateUrl && item.certificateUrl.trim() !== '' && item.certificateUrl !== '#') ||
              (item.certificateImage && item.certificateImage.trim() !== '')
            );

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[21px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:border-teal-300 group-hover:scale-125 transition-all duration-300">
                  {item.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-teal-400/40 animate-ping" />
                  )}
                </div>

                {/* Experience Content Card */}
                <div className="bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-6 md:p-8 transition-all duration-200 shadow-lg space-y-6">
                  
                  {/* Top Role & Company Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-base font-semibold text-teal-400 font-mono">
                          @ {item.company}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location} ({item.type})
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements Bullet List */}
                  {item.bullets && item.bullets.length > 0 && (
                    <div className="space-y-2.5">
                      {item.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* OPTIONAL COMPLETION CERTIFICATE FOR THIS SPECIFIC JOB/INTERNSHIP */}
                  {hasCert && (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-teal-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-300">
                          <Award className="w-4 h-4 text-teal-400" />
                          <span>{item.certificateTitle || `${item.company} Completion Certificate`}</span>
                        </div>

                        {item.certificateUrl && item.certificateUrl !== '#' && (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
                          >
                            <span>View Certificate Document</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Optional Certificate Image Thumbnail */}
                      {item.certificateImage && item.certificateImage.trim() !== '' && (
                        <div 
                          onClick={() => setSelectedCertImage({
                            title: item.certificateTitle || `${item.company} Completion Certificate`,
                            company: item.company,
                            image: item.certificateImage,
                            url: item.certificateUrl
                          })}
                          className="h-32 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden relative group cursor-pointer"
                        >
                          <img
                            src={item.certificateImage}
                            alt={item.certificateTitle || item.company}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                            <span className="px-3 py-1 text-xs font-mono font-semibold text-teal-300 bg-slate-950/80 border border-teal-500/30 rounded-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                              <Eye className="w-3.5 h-3.5" />
                              <span>Click to Expand Certificate Image 🔍</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies Used */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500 mr-2">Technologies:</span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/60 border border-slate-700/60 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CERTIFICATE IMAGE LIGHTBOX MODAL */}
        {selectedCertImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedCertImage(null)}
          >
            <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase">{selectedCertImage.company}</span>
                  <h3 className="text-xl font-bold text-slate-100">{selectedCertImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCertImage(null)}
                  className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[60vh]">
                <img
                  src={selectedCertImage.image}
                  alt={selectedCertImage.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              {selectedCertImage.url && selectedCertImage.url !== '#' && (
                <div className="flex justify-end pt-2">
                  <a
                    href={selectedCertImage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-teal-300"
                  >
                    <span>Open Drive / Document Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
