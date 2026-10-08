import React, { useState, useEffect } from 'react';
import { trainingData } from '../../data/training';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import './Training.css';

/**
 * Training / Training Session Section
 * Displays institutional courses with interactive certificate view modal and close button.
 */
export const Training = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  return (
    <section id="training" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="training" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Training</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Institutional Programs
        </span>
      </div>

      {/* Training Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {trainingData.map((item) => {
          const hasImage = Boolean(item.image);

          return (
            <div
              key={item.id}
              className={`glass-panel training-card ${hasImage ? 'clickable' : ''}`}
              onClick={() => {
                if (hasImage) setSelectedItem(item);
              }}
              role={hasImage ? 'button' : undefined}
              tabIndex={hasImage ? 0 : undefined}
              onKeyDown={(e) => {
                if (hasImage && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              title={hasImage ? 'Click to view certificate' : undefined}
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                borderTop: '2px solid var(--border-accent)',
                outline: 'none'
              }}
            >
              <div>
                {/* Header Tag and Optional Status Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.65rem'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: 'var(--text-meta)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent-light)'
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--color-accent)'
                      }}
                      aria-hidden="true"
                    />
                    Institutional Course
                  </div>

                  {hasImage && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(197, 155, 99, 0.12)',
                        border: '1px solid var(--border-accent)',
                        color: 'var(--color-accent-light)',
                        fontSize: 'var(--text-meta)',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Certificate Available
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3
                  className="training-title"
                  style={{
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '0.45rem',
                    lineHeight: 1.35
                  }}
                >
                  {item.title}
                </h3>

                {/* Institution Name */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>{item.institution}</span>
                </div>
              </div>

              {/* Action Button Strip */}
              {hasImage && (
                <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    className="training-view-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(197, 155, 99, 0.1)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--color-accent-light)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>View Certificate</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal with dedicated Close Button */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} Certificate`}
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {/* Modal Content Box (prevents closing when clicking inside content) */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#0a0a0a',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.9)'
            }}
          >
            {/* Modal Header Bar with Title and Close Button */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  {selectedItem.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-text-secondary)',
                    margin: '0.2rem 0 0 0'
                  }}
                >
                  {selectedItem.institution}
                </p>
              </div>

              {/* Dedicated Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="cert-modal-close"
                aria-label="Close certificate preview"
              >
                <span>Close</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Certificate Image View */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto',
                maxWidth: '100%',
                maxHeight: 'calc(80vh - 80px)'
              }}
            >
              <img
                src={selectedItem.image}
                alt={`${selectedItem.title} — ${selectedItem.institution}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(80vh - 80px)',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Training;
