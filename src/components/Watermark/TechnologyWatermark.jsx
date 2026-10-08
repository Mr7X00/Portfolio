import React, { memo } from 'react';
import { watermarksBySection } from '../../data/watermarks';
import { technologiesData } from '../../data/technologies';
import './TechnologyWatermark.css';

/**
 * TechnologyWatermark — Phase 7 Subtle Technology Watermark System
 *
 * Renders deterministic, subtle, low-opacity background technology marks.
 * Supports section-specific rendering:
 * <TechnologyWatermark section="about" />
 * or global canvas rendering across all sections.
 */
export const TechnologyWatermark = memo(({ section }) => {
  // Determine watermark items for the target section or all sections
  const items = section
    ? watermarksBySection[section] || []
    : Object.values(watermarksBySection).flat();

  if (!items || items.length === 0) return null;

  return (
    <div className="tech-watermark-layer" aria-hidden="true">
      {items.map((item) => {
        const tech = technologiesData.find((t) => t.id === item.techId);
        if (!tech) return null;

        const positionStyles = {
          width: `${item.size}px`,
          height: `${item.size}px`,
          transform: `rotate(${item.rotate || 0}deg)`,
          ...(item.top ? { top: item.top } : {}),
          ...(item.bottom ? { bottom: item.bottom } : {}),
          ...(item.left ? { left: item.left } : {}),
          ...(item.right ? { right: item.right } : {})
        };

        return (
          <div
            key={item.id}
            className={`tech-watermark-logo tier-${item.tier || 'all'}`}
            style={positionStyles}
            dangerouslySetInnerHTML={{ __html: tech.svg }}
          />
        );
      })}
    </div>
  );
});

TechnologyWatermark.displayName = 'TechnologyWatermark';

export default TechnologyWatermark;
