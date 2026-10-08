import React from 'react';
import { profileData } from '../../data/profile';

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}
    >
      <div>
        <span style={{ fontWeight: 700, color: '#ffffff' }}>{profileData.name}</span> &bull; {profileData.role}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
        <a
          href="#hero"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            padding: '0.45rem 0.65rem',
            borderRadius: 'var(--radius-xs)',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'color var(--transition-fast)'
          }}
          className="footer-link"
        >
          Back to Top &uarr;
        </a>
        <a
          href={profileData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            padding: '0.45rem 0.65rem',
            borderRadius: 'var(--radius-xs)',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'color var(--transition-fast)'
          }}
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            padding: '0.45rem 0.65rem',
            borderRadius: 'var(--radius-xs)',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'color var(--transition-fast)'
          }}
          className="footer-link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
