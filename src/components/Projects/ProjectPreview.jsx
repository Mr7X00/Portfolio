import React from 'react';
import './ProjectPreview.css';

/**
 * ProjectPreview — Graphical Browser-Window Project Visualization Component
 *
 * Structure:
 * - Glass browser mockup frame with traffic lights & address bar
 * - Visual viewport preview with project poster artwork & domain branding
 * - Title, role, category badge, and status pill (zero emojis)
 * - Concise, verified project description
 * - Technology indicators
 * - Live Demo and GitHub repository action buttons
 */
export const ProjectPreview = ({ project }) => {
  if (!project) return null;

  // Derive realistic display URL for browser mockup address bar
  const getMockUrl = () => {
    if (project.liveUrl && project.liveUrl.trim()) {
      try {
        const parsed = new URL(project.liveUrl);
        return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname : '');
      } catch {
        return project.liveUrl.replace(/^https?:\/\//, '');
      }
    }
    if (project.githubUrl && project.githubUrl.trim()) {
      return project.githubUrl.replace(/^https?:\/\//, '');
    }
    if (project.id === 'examzone') return 'examzone.edu/prep';
    if (project.id === 'assignment-portal') return 'software.npgc.ac.in/assignments';
    return `${project.id}.dev`;
  };

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim());
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim());

  // Clean SVG icons for projects (zero emojis)
  const renderProjectSvgIcon = (id) => {
    switch (id) {
      case 'three-chance-game':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="6" y1="12" x2="10" y2="12" />
            <line x1="8" y1="10" x2="8" y2="14" />
            <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="3" />
            <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="3" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
          </svg>
        );
      case 'radhe-shrine':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'lksk-convent-school':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4v18" />
            <path d="M19 21V11l-6-4" />
            <line x1="9" y1="9" x2="9" y2="9.01" strokeWidth="3" />
            <line x1="9" y1="13" x2="9" y2="13.01" strokeWidth="3" />
            <line x1="9" y1="17" x2="9" y2="17.01" strokeWidth="3" />
          </svg>
        );
      case 'careplus-hms-opd':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'examzone':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
      case 'assignment-portal':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case 'personal-portfolio':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
    }
  };

  return (
    <article
      className="project-preview-card"
      aria-label={`${project.title} — ${project.subtitle}`}
    >
      {/* 1. Glass Browser Chrome Bar */}
      <div className="browser-chrome" aria-hidden="true">
        <div className="browser-traffic-lights">
          <span className="traffic-light-dot traffic-dot-red" />
          <span className="traffic-light-dot traffic-dot-yellow" />
          <span className="traffic-light-dot traffic-dot-green" />
        </div>

        <div className="browser-address-bar">
          <svg className="browser-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>{getMockUrl()}</span>
        </div>

        <div style={{ width: '38px', textAlign: 'right' }}>
          <svg className="browser-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
        </div>
      </div>

      {/* 2. Graphical Preview / Themed Viewport with Dedicated Project Poster */}
      <div
        className="browser-viewport"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at top, rgba(197, 155, 99, 0.16), rgba(8, 9, 11, 0.96))',
          position: 'relative'
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Artwork Poster`}
            className="browser-mockup-img"
            loading="lazy"
          />
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '1.5rem',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.45rem'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(197, 155, 99, 0.12)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.2rem',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)'
              }}
            >
              {renderProjectSvgIcon(project.id)}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.02em' }}>
              {project.title}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-family-mono)' }}>
              {getMockUrl()}
            </div>
          </div>
        )}
        <div className="browser-viewport-overlay" aria-hidden="true" />
      </div>

      {/* 3. Project Content & Metadata Body */}
      <div className="project-card-body">
        <div>
          {/* Category & Status Bar */}
          <div className="project-meta-top">
            <span className="project-category-badge">
              {project.category}
            </span>

            <span className="project-status-pill">
              {project.status}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="project-title">
            {project.title}
          </h3>

          <div className="project-subtitle">
            {project.subtitle}
          </div>

          {/* Developer Role Tag */}
          <div className="project-role-tag">
            <span>Role:</span>
            <span className="project-role-value">{project.role}</span>
          </div>

          {/* Short Project Description */}
          <p className="project-description">
            {project.description}
          </p>

          {/* Technology Indicators */}
          <div className="project-tech-stack" aria-label="Technologies used">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="project-tech-badge">
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--color-accent)'
                  }}
                  aria-hidden="true"
                />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 4. Action CTAs */}
        <div className="project-actions">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-primary"
            >
              <span>View Project</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}

          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-secondary"
              title="Inspect Source Code on GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}

          {!hasLiveUrl && !hasGithubUrl && (
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.65rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>In Development & Deployment</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectPreview;
