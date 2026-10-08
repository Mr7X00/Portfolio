import React from 'react';
import { technologiesData } from '../../data/technologies';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import TechnologyCard from './TechnologyCard';

export const TechStack = () => {
  return (
    <section id="skills" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="skills" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Core Tooling & Competencies
        </span>
      </div>

      {/* Interactive Grid of Technology Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
          gap: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {technologiesData.map((tech) => (
          <TechnologyCard key={tech.id} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
