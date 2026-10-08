import React from 'react';
import { experienceData } from '../../data/experience';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import './Experience.css';

/**
 * Experience Section
 * Professional timeline layout displaying verified company engagements,
 * internships, and clickable documentation/offer letters.
 */
export const Experience = () => {
  return (
    <section id="experience" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="experience" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Experience</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Professional Engagements
        </span>
      </div>

      {/* Timeline Container */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="glass-panel"
            style={{
              padding: 'clamp(1.25rem, 3.5vw, 1.75rem)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
            }}
          >
            {/* Left Accent Timeline Rail */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                borderLeft: '2px solid var(--border-accent)',
                paddingLeft: 'clamp(1rem, 3vw, 1.5rem)',
                position: 'relative'
              }}
            >
              {/* Glowing Timeline Marker */}
              <span
                style={{
                  position: 'absolute',
                  left: '-0.42rem',
                  top: '0.35rem',
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: '0 0 10px rgba(197, 155, 99, 0.45)'
                }}
                aria-hidden="true"
              />

              {/* Title, Role & Metadata Header */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.35rem'
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: 0
                    }}
                  >
                    {item.documentUrl ? (
                      <a
                        href={item.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${item.company} Offer Letter`}
                        className="exp-company-link"
                        style={{
                          color: '#ffffff',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          outline: 'none'
                        }}
                      >
                        <span>{item.company}</span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color-accent-light)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.documentUrl && (
                      <a
                        href={item.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${item.company} Offer Letter in New Tab`}
                        className="exp-doc-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.22rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(197, 155, 99, 0.12)',
                          border: '1px solid var(--border-accent)',
                          color: 'var(--color-accent-light)',
                          fontSize: 'var(--text-meta)',
                          fontWeight: 700,
                          textDecoration: 'none',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase'
                        }}
                      >
                        <span>Offer Letter</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}

                    {item.period && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.22rem 0.7rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(197, 155, 99, 0.12)',
                          border: '1px solid var(--border-accent)',
                          color: 'var(--color-accent-light)',
                          fontSize: 'var(--text-meta)',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {item.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtitle / Company Type / Field */}
                <div
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.type}
                  {item.field && (
                    <span style={{ color: 'var(--color-text-secondary)' }}> · {item.field}</span>
                  )}
                </div>

                {/* Role */}
                {item.documentUrl ? (
                  <a
                    href={item.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${item.company} Offer Letter`}
                    className="exp-role-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-light)',
                      textDecoration: 'none',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>{item.role}</span>
                  </a>
                ) : (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-light)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>{item.role}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
