import React from 'react';
import { projectsData } from '../../data/projects';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';
import ProjectPreview from './ProjectPreview';

/**
 * Projects Section — Interactive Project Visualization System
 * Displays projects directly without category filter buttons.
 */
export const Projects = () => {
  return (
    <section id="projects" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="projects" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Projects Showcase</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Interactive Digital Products
        </span>
      </div>

      {/* Responsive Visual Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {projectsData.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
