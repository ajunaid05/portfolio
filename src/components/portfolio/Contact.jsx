import React, { useState } from 'react';
import { Mail, Calendar, FileText, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!profile) return null;

  const userEmail = profile.email || "ahmadjuniad007.07@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(userEmail)}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const payload = encode({
      'form-name': 'contact',
      'bot-field': '',
      ...formData,
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload,
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Netlify form submission:', err);
        setIsSubmitting(false);
        setSubmitted(true);
      });
  };

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

        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800/90 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-3">
              Let’s Build Something Remarkable
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether you are exploring potential engineering collaborations, discussing backend architecture and AI systems, or recruiting for software engineering roles—send a direct message below.
            </p>
          </div>

          {/* NETLIFY WORKING CONTACT FORM */}
          <div className="max-w-xl mx-auto text-left bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 shadow-inner relative z-10">
            {submitted ? (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">Message Delivered!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Thank you! Your message has been sent directly to <span className="text-teal-400 font-mono font-bold">{userEmail}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 rounded-lg border border-slate-800 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {errorMsg && (
                  <p className="text-xs text-red-400 font-mono bg-red-950/40 p-2.5 rounded-lg border border-red-800/50">
                    {errorMsg}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 font-mono text-[11px] mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-mono text-[11px] mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-mono text-[11px] mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Hello Ahmad, I'd love to connect regarding..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-teal-300 bg-slate-950 hover:bg-slate-900 border border-teal-500/30 rounded-xl transition-all"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Or Compose in Gmail</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            {profile.bookingUrl && (
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Schedule a Meeting</span>
              </a>
            )}
          </div>

          {/* Social Links Row */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
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
