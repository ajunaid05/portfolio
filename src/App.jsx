import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Skills from './components/portfolio/Skills';
import Certifications from './components/portfolio/Certifications';
import CurrentFocus from './components/portfolio/CurrentFocus';
import Contact from './components/portfolio/Contact';
import Footer from './components/layout/Footer';
import { getPortfolioData, fetchPortfolioDataAsync, STORAGE_KEY } from './services/portfolioData';

export default function App() {
  const [data, setData] = useState(getPortfolioData());

  const loadLatestData = async () => {
    const latest = await fetchPortfolioDataAsync();
    setData(latest);
  };

  useEffect(() => {
    // Initial async load from Backend API
    loadLatestData();

    // Listen for storage events
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY || !e.key) {
        setData(getPortfolioData());
      }
    };
    window.addEventListener('storage', handleStorageChange);

    // Poll Backend API every 2.5 seconds to reflect changes made in admin portal live
    const interval = setInterval(loadLatestData, 2500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar profile={data.profile} />

      {/* Main Content Sections */}
      <main>
        <Hero profile={data.profile} />
        <About about={data.about} profile={data.profile} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Skills skillCategories={data.skillCategories} />
        <Certifications 
          certificationOrgs={data.certificationOrgs} 
          certificates={data.certificates} 
        />
        <CurrentFocus currentFocus={data.currentFocus} />
        <Contact profile={data.profile} />
      </main>

      {/* Footer */}
      <Footer profile={data.profile} />
    </div>
  );
}