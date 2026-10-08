import React from 'react';
import { profileData } from '../../data/profile';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';

/**
 * About Section — Phase 8 Redesign
 * Focus: Who Lav Pandey is, Full Stack Development passion, engineering pillars & problem solving.
 */
export const About = () => {
  return (
    <section id="about" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="about" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">About Me</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Identity & Engineering Ethos
        </span>
      </div>

      {/* Structured Content Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Column: Personal Narrative */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: 'var(--text-meta)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-accent)',
                marginBottom: '0.75rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent)'
                }}
              />
              Developer Profile
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '1rem'
              }}
            >
              Engineering Scalable Web Solutions with Purpose & Discipline
            </h3>

            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                marginBottom: '1rem'
              }}
            >
              {profileData.bio}
            </p>

            <p
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 1.65,
                color: 'var(--color-text-muted)'
              }}
            >
              Dedicated to continuous technical growth, writing modular code, and delivering functional, accessible digital experiences from front-end interfaces to relational backends.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '0.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-accent-light)' }}>
                3+
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Key Projects
              </div>
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>
                15+
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Tech Competencies
              </div>
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-accent-bright)' }}>
                B.Voc
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Software Dev
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Core Engineering Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {profileData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.35rem 1.5rem',
                borderLeft: '3px solid var(--color-accent)',
                transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.4rem'
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-accent)'
                  }}
                >
                  Pillar 0{idx + 1}
                </span>
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--color-accent)'
                  }}
                />
              </div>

              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.4rem'
                }}
              >
                {pillar.title}
              </h4>

              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
