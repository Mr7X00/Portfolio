import React from 'react';
import { educationData } from '../../data/education';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import './Education.css';

/**
 * Education Section
 * Academic timeline card system highlighting programs, institutions, status,
 * coursework details, and interactive quick-action links (College Website, Syllabus, Map Location).
 */
export const Education = () => {
  const renderActionIcon = (iconType) => {
    switch (iconType) {
      case 'website':
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case 'syllabus':
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'location':
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      default:
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        );
    }
  };

  return (
    <section id="education" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="education" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Education</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Academic Trajectory
        </span>
      </div>

      {/* Academic Timeline Cards */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}
      >
        {educationData.map((item) => {
          const isCurrent = item.status === 'Pursuing';

          return (
            <div
              key={item.id}
              className="glass-panel edu-card"
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 1.85rem)',
                borderLeft: `3px solid ${isCurrent ? 'var(--color-accent)' : 'var(--border-subtle)'}`,
                transition: 'border-color var(--transition-normal), transform var(--transition-normal)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.35rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor: isCurrent ? 'var(--color-accent-bright)' : 'var(--color-text-muted)',
                      boxShadow: isCurrent ? '0 0 8px var(--color-accent)' : 'none'
                    }}
                    className={isCurrent ? 'pulse-indicator' : ''}
                    aria-hidden="true"
                  />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    {item.degree}
                  </h3>
                </div>

                <span
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: isCurrent ? 'rgba(197, 155, 99, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                    color: isCurrent ? 'var(--color-accent-light)' : 'var(--color-text-muted)',
                    border: `1px solid ${isCurrent ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.period} &bull; {item.status}
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-text-accent)',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                {item.institutionUrl ? (
                  <a
                    href={item.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${item.institution}`}
                    className="edu-institution-link"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      outline: 'none'
                    }}
                  >
                    <span>{item.institution}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <span>{item.institution}</span>
                )}
              </div>

              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                {item.description}
              </p>

              {/* Interactive Action Buttons (College Website, Syllabus, Map Location) */}
              {item.actions && item.actions.length > 0 && (
                <div className="edu-actions-bar">
                  {item.actions.map((act) => (
                    <a
                      key={act.id}
                      href={act.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open ${act.label} in New Tab`}
                      className="edu-action-btn"
                    >
                      {renderActionIcon(act.icon)}
                      <span>{act.label}</span>
                      <span aria-hidden="true" style={{ fontSize: '0.7rem', opacity: 0.8 }}>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
