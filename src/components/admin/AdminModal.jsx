import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Database, Server, UploadCloud, Layers, CheckCircle2 } from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const [email, setEmail] = useState('ahmadjuniad007.07@gmail.com');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123' || password.length > 0) {
      setAuthenticated(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-100">
                  Portfolio CMS Portal (/admin)
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-teal-300 bg-teal-950 border border-teal-500/30 rounded-md">
                  Phase 2 CMS Architecture
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Protected Content Management System Gateway
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs inside Admin Modal */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-6 gap-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 font-semibold border-b-2 transition-colors ${activeTab === 'architecture'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            01 // System Architecture & Security
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3 font-semibold border-b-2 transition-colors ${activeTab === 'preview'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            02 // CMS Dashboard Preview
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'architecture' ? (
            <div className="space-y-6 text-xs sm:text-sm text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-mono font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Public vs. Admin Architecture Decoupling</span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  The portfolio uses a strict multi-layer security pattern: public visitors access read-only static JSON data (Phase 1) or public REST endpoints (Phase 2). Admin updates are protected behind JWT authentication and HTTPS-only cookie verification.
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Server className="w-5 h-5 text-teal-400 mb-2" />
                  <h4 className="font-bold text-slate-100 mb-1">Backend API</h4>
                  <p className="text-xs text-slate-400">Node.js/Express or FastAPI serving protected CRUD routes.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Database className="w-5 h-5 text-teal-400 mb-2" />
                  <h4 className="font-bold text-slate-100 mb-1">PostgreSQL DB</h4>
                  <p className="text-xs text-slate-400">Relational schema mapping Orgs to Certifications & Projects.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <UploadCloud className="w-5 h-5 text-teal-400 mb-2" />
                  <h4 className="font-bold text-slate-100 mb-1">Cloud Media</h4>
                  <p className="text-xs text-slate-400">Cloudinary & Supabase storage for certificates & screenshots.</p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-2">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Editable Fields via /admin (No Code Changes Required):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>FlyRank Experience End Date (Present ➔ 2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Certification Orgs (Anthropic, Google, FlyRank)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Projects, Live URLs, GitHub repos & order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Skills categorizations & learning goals</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {!authenticated ? (
                <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto py-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-slate-100">Admin Login Demonstration</h4>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Enter any password to test administrative access preview
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password (e.g. admin123)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-400 text-slate-950 font-bold rounded-xl text-sm hover:bg-teal-300 transition-colors shadow-lg shadow-teal-500/20"
                  >
                    Authenticate Admin Session
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-between text-xs font-mono text-teal-300">
                    <span>Session Authenticated: Admin (Ahmad Junaid)</span>
                    <button
                      onClick={() => setAuthenticated(false)}
                      className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-slate-300 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </div>

                  {/* Dashboard Preview Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-100 block text-sm">Experience Manager</span>
                      <p className="text-slate-400">Current: FlyRank (2026 — Present)</p>
                      <button className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-teal-300 font-mono">
                        Toggle Current Status ➔
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <span className="font-bold text-slate-100 block text-sm">Certification Manager</span>
                      <p className="text-slate-400">Anthropic (3) | Google (2) | FlyRank (1)</p>
                      <button className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-teal-300 font-mono">
                        + Add Course Certificate
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Close Gateway Preview
          </button>
        </div>
      </div>
    </div>
  );
}
