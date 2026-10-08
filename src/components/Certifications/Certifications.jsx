import React from 'react';
import { certificationsData } from '../../data/certifications';
import './Certifications.css';

/**
 * Certifications Section
 * Data-driven certification cards with verified credentials, accessible links,
 * subtle hover effects, and keyboard navigation support.
 */
export const Certifications = () => {
  return (
    <section id="certifications" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Certifications</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Verified Credentials
        </span>
      </div>

      {/* Grid of Data-Driven Certification Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {certificationsData.map((cert) => {
          const tooltipText = cert.tooltip || `${cert.title} — ${cert.provider}`;

          return (
            <div
              key={cert.id}
              className="glass-panel cert-card"
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 1.6rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                borderTop: '2px solid var(--border-accent)',
                position: 'relative',
                transition: 'border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal)'
              }}
            >
              <div>
                {/* Header: Provider Pill & Link Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-accent-light)',
                      backgroundColor: 'rgba(197, 155, 99, 0.08)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '0.2rem 0.65rem'
                    }}
                  >
                    {cert.provider}
                  </span>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tooltipText}
                      aria-label={tooltipText}
                      className="cert-link-icon"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '2rem',
                        height: '2rem',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--color-accent-light)',
                        textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                        outline: 'none'
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ transition: 'transform var(--transition-fast)' }}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Clickable Course / Certification Title */}
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tooltipText}
                    aria-label={tooltipText}
                    style={{
                      display: 'inline-block',
                      textDecoration: 'none',
                      outline: 'none'
                    }}
                  >
                    <h3
                      className="cert-title"
                      style={{
                        fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: 1.35,
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      {cert.title}
                    </h3>
                  </a>
                ) : (
                  <h3
                    style={{
                      fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.35
                    }}
                  >
                    {cert.title}
                  </h3>
                )}
              </div>

              {/* Action Link Footer */}
              {cert.url && (
                <div style={{ paddingTop: '0.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tooltipText}
                    className="cert-action-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-accent-light)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    <span>View Credential / Course</span>
                    <span aria-hidden="true" style={{ transition: 'transform var(--transition-fast)' }}>→</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
