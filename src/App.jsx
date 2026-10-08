import React, { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Training from './components/Training/Training';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import CertificatesShowcase from './components/CertificatesShowcase/CertificatesShowcase';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export const App = () => {
  // Subtle Scroll Reveal System (runs once per section)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.08
      }
    );

    sections.forEach((sec) => {
      if (sec.id === 'hero') return; // Hero is above-the-fold; render immediately for optimal LCP
      sec.classList.add('scroll-reveal');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-main-canvas">
      {/* 1. Lav Pandey Hero (contains embedded SVG poster inside bordered card) */}
      <Hero />

      {/* 2. About */}
      <About />

      {/* 3. Skills (Tech Stack) */}
      <TechStack />

      {/* 4. Experience */}
      <Experience />

      {/* 5. Training */}
      <Training />

      {/* 6. Education */}
      <Education />

      {/* 7. Certifications */}
      <Certifications />

      {/* 8. Certificates Showcase (Above Key Milestones) */}
      <CertificatesShowcase />

      {/* 9. Key Milestones (Achievements) */}
      <Achievements />

      {/* 8. Projects */}
      <Projects />

      {/* 9. Contact */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
};

export default App;
