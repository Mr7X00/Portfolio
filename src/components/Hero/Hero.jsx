import React from 'react';
import { profileData } from '../../data/profile';
import topBannerSvg from '../../assets/banner.svg';
import './Hero.css';

/**
 * Hero Component — Poster-Integrated Centered Composition
 *
 * Requirements:
 * - SVG poster embedded directly inside the bordered glass canvas
 * - Removed lines:
 *     - "Available for Full Stack Opportunities"
 *     - "LAV PANDEY"
 *     - "[ Aspiring Full Stack Web Developer ]"
 * - Retains short professional introduction, CTA actions, tech stack chips, and contact links
 * - Universal color theme dynamically inherited from poster new.svg (#c59b63)
 */
export const Hero = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Semantic H1 for Search Engine Discovery & Accessibility */}
      <h1 className="sr-only">Lav Pandey — Full Stack Web Developer</h1>

      {/* Subtle ambient warm golden bronze glow matching poster */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Main Centered Glass Card with Border and Corner Markers */}
      <div className="hero-glass-card">
        {/* Tactical Crosshair Markers */}
        <span className="hero-corner-marker hero-corner-tl" aria-hidden="true">+</span>
        <span className="hero-corner-marker hero-corner-tr" aria-hidden="true">+</span>
        <span className="hero-corner-marker hero-corner-bl" aria-hidden="true">+</span>
        <span className="hero-corner-marker hero-corner-br" aria-hidden="true">+</span>

        {/* 1. SVG Poster Banner Embedded Directly Inside the Border Page */}
        <div className="hero-poster-wrapper">
          <img
            src={topBannerSvg}
            alt="Lav Pandey — Full Stack Developer Poster Banner"
            className="hero-poster-svg"
            width="1500"
            height="450"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* 2. Short Professional Introduction */}
        <p className="hero-introduction-text">
          Computer Science undergraduate specializing in Full Stack Web Development, modern web architectures, and scalable digital solutions. Dedicated to clean code, systematic problem solving, and building high-performance interactive applications.
        </p>

        {/* 3. Action Call-To-Action (CTAs) */}
        <div className="hero-cta-container">
          {/* Primary CTA */}
          <a href="#projects" className="hero-btn-primary">
            <span>View My Work</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href={profileData.assets.resume}
            download="Lav-Pandey-Resume.pdf"
            className="hero-btn-secondary"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume</span>
          </a>

          {/* Connect CTA */}
          <a href="#contact" className="hero-btn-connect">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>Let's Connect</span>
          </a>
        </div>



        {/* 5. Micro Meta Location & Social Strip */}
        <div className="hero-meta-bar">
          <span className="hero-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profileData.location}
          </span>
          <span>•</span>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-meta-item"
            title="GitHub Profile"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-meta-item"
            title="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
