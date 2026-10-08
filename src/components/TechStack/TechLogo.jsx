import React from 'react';
import { technologiesData } from '../../data/technologies';

/**
 * Reusable TechLogo component
 * Supports standard display mode and decorative watermark mode for future background animations.
 */
export const TechLogo = ({
  techId,
  techObj,
  size = 48,
  isWatermark = false,
  className = '',
  title
}) => {
  const tech = techObj || technologiesData.find(t => t.id === techId);
  if (!tech) return null;

  if (isWatermark) {
    return (
      <div
        className={`tech-watermark-item inline-flex items-center justify-center pointer-events-none select-none transition-transform duration-700 ${className}`}
        style={{
          width: size || 'var(--tech-watermark-size)',
          height: size || 'var(--tech-watermark-size)',
          opacity: 'var(--tech-watermark-opacity)',
          color: 'var(--tech-watermark-color)',
          filter: 'var(--tech-watermark-blur)'
        }}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: tech.svg }}
      />
    );
  }

  return (
    <div
      className={`tech-logo-wrapper inline-flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
      title={title || tech.name}
      aria-label={tech.name}
      dangerouslySetInnerHTML={{ __html: tech.svg }}
    />
  );
};

export default TechLogo;
