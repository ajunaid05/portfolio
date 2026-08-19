import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, BookOpen, Image as ImageIcon } from 'lucide-react';

export default function Certifications({ certificationOrgs, certificates }) {
  const [expandedOrgId, setExpandedOrgId] = useState(certificationOrgs?.[0]?.id || null);
  const [selectedCertImage, setSelectedCertImage] = useState(null);

  if ((!certificationOrgs || certificationOrgs.length === 0) && (!certificates || certificates.length === 0)) {
    return null;
  }

  const toggleOrg = (orgId) => {
    setExpandedOrgId(expandedOrgId === orgId ? null : orgId);
  };

  return (
    <section id="certifications" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Award className="w-4 h-4" />
              <span>05 // Verified Credentials & Proofs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Certifications & Training
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs font-mono text-slate-400">
            Earned via Internships, Courses & Engineering Tracks
          </p>
        </div>

        {/* 1. VERIFIED CERTIFICATE PROOF IMAGES GALLERY */}
        {certificates && certificates.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <ImageIcon className="w-4 h-4 text-teal-400" />
              <span>Verified Certificate Images & Credentials ({certificates.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 group"
                >
                  {/* Image Preview Container */}
                  <div 
                    onClick={() => setSelectedCertImage(cert)}
                    className="h-44 bg-slate-950 relative overflow-hidden cursor-pointer border-b border-slate-800/80"
                  >
                    <img
                      src={cert.imageUrl || "https://images.unsplash.com/photo-1589330694653-aded6fac0244?auto=format&fit=crop&w=800&q=80"}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold text-teal-300 bg-slate-950/90 border border-teal-500/40 rounded-md backdrop-blur-md">
                        {cert.organization}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-300 font-semibold">
                        Issued: {cert.issueDate}
                      </span>
                      <span className="text-[11px] font-mono text-teal-400 font-semibold hover:underline">
                        Preview Proof 🔍
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                        {cert.title}
                      </h3>
                      {cert.description && (
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                        <span>Verified Credential</span>
                      </span>

                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ORGANIZATION GROUPED COURSES ACCORDION */}
        {certificationOrgs && certificationOrgs.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>Certifications Grouped by Organization</span>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {certificationOrgs.map((org) => {
                const isExpanded = expandedOrgId === org.id;

                return (
                  <div
                    key={org.id}
                    className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    {/* Trigger Header */}
                    <button
                      onClick={() => toggleOrg(org.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center font-extrabold text-teal-400 text-lg shadow-inner">
                          {org.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-100">
                              {org.name}
                            </h3>
                            <span className="px-2.5 py-0.5 text-xs font-mono font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-full">
                              {org.badgeCount || `${org.courses?.length || 0} Courses`}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            {org.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-2 text-slate-400 hover:text-teal-400 bg-slate-800/60 rounded-lg">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-teal-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {/* Course List Drawer */}
                    {isExpanded && org.courses && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/50 space-y-4 animate-fadeIn">
                        {org.courses.map((course) => (
                          <div
                            key={course.id}
                            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-teal-400 shrink-0" />
                                <h4 className="text-base font-semibold text-slate-100">
                                  {course.title}
                                </h4>
                              </div>
                              <p className="text-xs text-slate-400 pl-6">
                                {course.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4 pl-6 sm:pl-0 shrink-0">
                              <span className="text-xs font-mono text-slate-400">
                                {course.date}
                              </span>
                              
                              <a
                                href={course.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                              >
                                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                                <span>View Details</span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* IMAGE LIGHTBOX PREVIEW MODAL */}
        {selectedCertImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedCertImage(null)}
          >
            <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase">{selectedCertImage.organization}</span>
                  <h3 className="text-xl font-bold text-slate-100">{selectedCertImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCertImage(null)}
                  className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800 hover:bg-slate-700 rounded-lg"
                >
                  Close ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[60vh]">
                <img
                  src={selectedCertImage.imageUrl}
                  alt={selectedCertImage.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <p className="text-xs text-slate-300">{selectedCertImage.description}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
