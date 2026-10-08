import React, { useState, useEffect } from 'react';
import { showcaseCertificatesData } from '../../data/showcaseCertificates';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import './CertificatesShowcase.css';

/**
 * CertificatesShowcase Component
 * Displays verified physical certificates and hackathon awards in framed visual cards
 * with titles, issuers, descriptions, badges, and interactive full-size inspection modal.
 */
export const CertificatesShowcase = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Keyboard navigation: Escape key closes active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };

    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCert]);

  return (
    <section id="certificates-showcase" className="w-full" style={{ marginBottom: '3.5rem', position: 'relative' }}>
      <TechnologyWatermark section="certificates-showcase" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Certificates Showcase</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Verified Honors & Accreditations
        </span>
      </div>

      {/* Grid of Framed Certificate Showcase Cards */}
      <div className="cert-showcase-grid">
        {showcaseCertificatesData.map((cert) => (
          <div key={cert.id} className="cert-showcase-card">
            {/* Visual Frame Viewport */}
            <div
              className="cert-frame-viewport"
              onClick={() => setActiveCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCert(cert);
                }
              }}
              aria-label={`View full certificate: ${cert.title}`}
            >
              <img
                src={cert.image}
                alt={`${cert.title} — ${cert.issuer}`}
                className="cert-frame-img"
                loading="lazy"
              />
              <div className="cert-frame-overlay">
                <span className="cert-frame-zoom-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>View Frame</span>
                </span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="cert-card-body">
              <div className="cert-badge-strip">
                <span className="cert-card-badge">{cert.badge}</span>
                <span className="cert-card-date">{cert.date}</span>
              </div>

              <h3
                className="cert-card-title"
                onClick={() => setActiveCert(cert)}
                style={{ cursor: 'pointer' }}
                title="Click to inspect certificate"
              >
                {cert.title}
              </h3>

              <div className="cert-card-issuer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>{cert.issuer}</span>
              </div>

              <p className="cert-card-desc">{cert.description}</p>
            </div>

            {/* Footer with Quick Inspection Action */}
            <div className="cert-card-footer">
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="cert-inspect-btn"
                aria-label={`Inspect full certificate for ${cert.title}`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>Inspect Certificate</span>
                <span aria-hidden="true">↗</span>
              </button>

              <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Verified Official
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Full-Screen Frame View & Dedicated Close Button */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCert.title} Full View`}
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#0a0a0a',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1rem, 2.5vw, 1.6rem)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
              overflowY: 'auto'
            }}
          >
            {/* Header: Title, Badge, Date & Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1rem',
                paddingBottom: '0.85rem',
                borderBottom: '1px solid var(--border-subtle)',
                width: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <span className="cert-card-badge">{activeCert.badge}</span>
                  <span className="cert-card-date">{activeCert.date}</span>
                </div>
                <h4 style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {activeCert.title}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-text-accent)', margin: '0.25rem 0 0 0', fontWeight: 600 }}>
                  {activeCert.issuer}
                </p>
              </div>

              {/* Prominent Close Button */}
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="cert-showcase-modal-close"
                aria-label="Close certificate preview"
              >
                <span>Close</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Large Certificate Image View */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000000',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem',
                maxHeight: 'calc(75vh - 120px)',
                overflow: 'hidden'
              }}
            >
              <img
                src={activeCert.image}
                alt={`${activeCert.title} — ${activeCert.issuer}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(75vh - 140px)',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </div>

            {/* Description & Highlight Footer */}
            <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 0.35rem 0' }}>
                {activeCert.description}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-light)', fontWeight: 600 }}>
                ↳ {activeCert.highlight}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesShowcase;
